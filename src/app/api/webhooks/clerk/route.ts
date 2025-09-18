// src/app/api/webhooks/clerk/route.ts
import { Webhook } from "svix";

import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const headersList = await headers();

  const svixId = headersList.get("svix-id");
  const svixTimestamp = headersList.get("svix-timestamp");
  const svixSignature = headersList.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Missing Svix headers", { status: 400 });
  }

  const heads: Record<string, string> = {
    "svix-id": svixId,
    "svix-timestamp": svixTimestamp,
    "svix-signature": svixSignature,
  };

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SIGNING_SECRET!);
  let evt: any;
  try {
    evt = wh.verify(payload, heads);
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return new Response("Verification failed", { status: 400 });
  }

  const eventType = evt.type;
  if (eventType === "user.created") {
    const {
      id: clerkId,
      email_addresses,
      first_name,
      last_name,
      profile_image_url,
    } = evt.data;
    const primaryEmail = email_addresses.find(
      (email: any) => email.id === evt.data.primary_email_address_id
    )?.email_address;

    if (!primaryEmail) {
      return new Response("No primary email", { status: 400 });
    }

    await prisma.user.upsert({
      where: { clerkId },
      update: {
        email: primaryEmail,
        name: `${first_name || ""} ${last_name || ""}`.trim(),
        avatar: profile_image_url,
        updatedAt: new Date(),
      },
      create: {
        clerkId,
        email: primaryEmail,
        name: `${first_name || ""} ${last_name || ""}`.trim(),
        avatar: profile_image_url,
      },
    });

    console.log(`User synced to Neon: ${clerkId}`);
  } else if (eventType === "user.updated") {
    // Handle profile updates (similar upsert logic)
    const {
      id: clerkId,
      email_addresses,
      first_name,
      last_name,
      profile_image_url,
    } = evt.data;
    const primaryEmail = email_addresses.find(
      (email: any) => email.id === evt.data.primary_email_address_id
    )?.email_address;

    if (!primaryEmail) return new Response("No primary email", { status: 400 });

    await prisma.user.update({
      where: { clerkId },
      data: {
        email: primaryEmail,
        name: `${first_name || ""} ${last_name || ""}`.trim(),
        avatar: profile_image_url,
        updatedAt: new Date(),
      },
    });
  } else if (eventType === "user.deleted") {
    const { id: clerkId } = evt.data;
    await prisma.user.delete({ where: { clerkId } }).catch(console.error);
  }

  return new Response("OK", { status: 200 });
}
