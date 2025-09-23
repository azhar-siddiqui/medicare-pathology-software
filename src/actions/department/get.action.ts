import { Prisma } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function getDepartmentActions() {
  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      status: "error",
      message: "You must be logged in to get departments.",
    };
  }

  try {
    const deparment = await prisma.department.findMany();

    return {
      success: true,
      status: "success",
      message: "Department retrieved successfully",
      data: deparment,
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
