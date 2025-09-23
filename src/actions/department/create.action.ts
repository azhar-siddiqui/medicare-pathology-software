"use server";

import { Prisma } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { departmentFormSchema } from "@/validation/test-department-schema";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import z from "zod";

export async function creatTestDepartmentActions(
  values: z.infer<typeof departmentFormSchema>
) {
  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      status: "error",
      message: "You must be logged in to create a task.",
    };
  }

  const result = departmentFormSchema.safeParse(values);

  if (!result.success) {
    return {
      status: "error",
      message: result.error.issues.map((issue) => issue.message).join(", "),
    };
  }

  try {
    await prisma.department.create({
      data: {
        clerkUserId: userId,
        department: result.data.department,
      },
    });

    revalidatePath("/add-new-test-group");

    return {
      success: true,
      status: "success",
      message: "Department created successfully",
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
      message: "Failed to create department. Please try again later.",
    };
  }
}
