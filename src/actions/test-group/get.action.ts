"use server";

import { Prisma } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function getTestGroupActions() {
  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      status: "error",
      message: "You must be logged in to get departments.",
    };
  }

  try {
    const testGroup = await prisma.testGroup.findMany({
      where: {
        AND: { clerkUserId: userId },
      },
      select: {
        id: true,
        testGroupName: true,
        testCode: true,
        department: {
          select: {
            id: true,
            department: true,
          },
        },
        sampleType: true,
        price: true,
        showInterpretation: true,
      },
    });

    // Convert Decimal price to string for serialization
    const serializedTestGroup = testGroup.map((group) => ({
      ...group,
      price: group.price.toFixed(2), // Convert Decimal to string with 2 decimal places
    }));

    return {
      success: true,
      status: "success",
      message: "Test retrieved successfully",
      data: serializedTestGroup,
    };
  } catch (error) {
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
      message: "Failed to get department. Please try again later.",
    };
  }
}
