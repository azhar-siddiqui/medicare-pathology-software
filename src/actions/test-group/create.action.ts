"use server";
import { testGroupFormSchema } from "@/validation/test-department-schema";
import { auth } from "@clerk/nextjs/server";
import z from "zod";

import { Prisma } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function creatTestGroupActions(
  values: z.infer<typeof testGroupFormSchema>
) {
  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      status: "error",
      message: "You must be logged in to create a task.",
    };
  }

  const result = testGroupFormSchema.safeParse(values);

  if (!result.success) {
    return {
      status: "error",
      message: result.error.issues.map((issue) => issue.message).join(", "),
    };
  }

  const {
    testGroupName,
    testCode,
    departmentId,
    sampleType,
    price,
    interpretation,
  } = result.data;

  try {
    await prisma.testGroup.create({
      data: {
        clerkUserId: userId,
        testGroupName,
        testCode,
        departmentId,
        sampleType,
        price: new Prisma.Decimal(price),
        interpretation,
      },
    });

    revalidatePath("/test-list");

    return {
      success: true,
      status: "success",
      message: "Test group created successfully",
    };
  } catch (error) {
    console.log("error", error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        success: false,
        status: "error",
        message: `Database error: ${error.message}`,
      };
    }
    return {
      success: false,
      status: "error",
      message: "Failed to create test list. Please try again later.",
    };
  }
}
