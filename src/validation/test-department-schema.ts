import z from "zod";

export const departmentFormSchema = z.object({
  department: z.string().min(2, { message: "Test Department Required" }),
});
