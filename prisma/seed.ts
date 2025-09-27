import { defaultDepartments, defaultTestGroups } from "@/data/seed-data";
import prisma from "@/lib/prisma";
import { clerkClient } from "@clerk/nextjs/server";

// Initialize Clerk client with secret key from environment

const clerk = clerkClient();

// Check if departments already exist for a user
async function checkExistingDepartments(
  clerkUserId: string
): Promise<string[]> {
  const existing = await prisma.department.findMany({
    where: { clerkUserId },
    select: { department: true },
  });
  return existing.map((dept) => dept.department);
}

// Seed departments for a user and return a map of department names to IDs
async function seedDepartments(
  clerkUserId: string
): Promise<Map<string, string>> {
  const deptMap = new Map<string, string>();
  const existingDepts = await checkExistingDepartments(clerkUserId);

  for (const dept of defaultDepartments) {
    if (existingDepts.includes(dept.department)) {
      console.log(
        `Skipping existing department: ${dept.department} for ${clerkUserId}`
      );
      const existingDept = await prisma.department.findFirst({
        where: { clerkUserId, department: dept.department },
        select: { id: true },
      });
      if (existingDept) deptMap.set(dept.department, existingDept.id);
      continue;
    }

    const newDept = await prisma.department.create({
      data: {
        clerkUserId,
        department: dept.department,
      },
    });
    deptMap.set(dept.department, newDept.id);
    console.log(`Created department: ${dept.department} for ${clerkUserId}`);
  }
  return deptMap;
}

// Seed test groups for a user using the department map
async function seedTestGroups(
  clerkUserId: string,
  deptMap: Map<string, string>
) {
  for (const tg of defaultTestGroups) {
    const departmentId = deptMap.get(tg.department);
    if (!departmentId) {
      console.warn(
        `Skipping TestGroup ${tg.testGroupName}: Department ${tg.department} not found for ${clerkUserId}`
      );
      continue;
    }

    const existingTg = await prisma.testGroup.findFirst({
      where: {
        clerkUserId,
        testGroupName: tg.testGroupName,
      },
    });

    if (!existingTg) {
      await prisma.testGroup.create({
        data: {
          clerkUserId,
          testGroupName: tg.testGroupName,
          testCode: tg.testCode,
          departmentId,
          sampleType: tg.sampleType,
          price: tg.price,
          interpretation: tg.interpretation,
        },
      });
      console.log(`Created TestGroup: ${tg.testGroupName} for ${clerkUserId}`);
    } else {
      console.log(
        `Skipping existing TestGroup: ${tg.testGroupName} for ${clerkUserId}`
      );
    }
  }
}

async function seed() {
  try {
    // Fetch all users from Clerk
    const clerkUsersResponse = (await clerk).users.getUserList();
    const users = (await clerkUsersResponse).data;

    if (users.length === 0) {
      console.log("No users found in Clerk. Skipping seeding.");
      return;
    }

    for (const user of users) {
      const clerkUserId = user.id; // Clerk's user ID
      console.log(`Seeding for Clerk user: ${clerkUserId}`);

      const deptMap = await seedDepartments(clerkUserId);
      await seedTestGroups(clerkUserId, deptMap);
    }

    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
