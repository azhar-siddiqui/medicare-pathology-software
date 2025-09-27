import z from "zod";

export const departmentFormSchema = z.object({
  department: z.string().min(2, { message: "Test Department Required" }),
});

export const testGroupFormSchema = z.object({
  testGroupName: z.string().min(1, { message: "Group Name required" }),
  testCode: z.string(),
  departmentId: z.string().min(1, { message: "Test Department Required" }),
  sampleType: z.string().min(2, { message: "Sample Type Required" }),
  price: z
    .number({
      message: "Price Required",
    })
    .min(0, { message: "Price cannot be negative" }),
  interpretation: z.string(),
});
