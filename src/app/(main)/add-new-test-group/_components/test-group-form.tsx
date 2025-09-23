"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export const testGroupFormSchema = z.object({
  testGroupName: z.string().min(1, { message: "Group Name required" }),
  testCode: z.string(),
  department: z.string().min(2, { message: "Test Department Required" }),
  sampleType: z.string().min(2, { message: "Sample Type Required" }),
  price: z
    .number({
      message: "Price Required",
    })
    .min(0, { message: "Price cannot be negative" }),
  interpretation: z.string(),
});

interface Department {
  department: string;
  id: string;
  clerkUserId: string;
  createdAt: Date;
  updatedAt: Date;
}

type TestGroupFormProps = HTMLAttributes<HTMLFormElement> & {
  department: Department[] | undefined;
};

export default function TestGroupForm({
  department,
  ...props
}: Readonly<TestGroupFormProps>) {
  const form = useForm<z.infer<typeof testGroupFormSchema>>({
    resolver: zodResolver(testGroupFormSchema),
    defaultValues: {
      testGroupName: "",
      testCode: "",
      department: "",
      sampleType: "",
      price: undefined,
      interpretation: "",
    },
  });

  function onSubmit(value: z.infer<typeof testGroupFormSchema>) {
    console.log(value);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
        className="space-y-4"
      >
        <div className="grid lg:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="testGroupName"
            render={({ field }) => (
              <FormItem className="col-span-3 lg:col-span-1">
                <FormLabel>Test Group Name</FormLabel>
                <FormControl>
                  <Input
                    className={cn(
                      form.formState.errors.testGroupName &&
                        "placeholder:text-destructive"
                    )}
                    placeholder={
                      form.formState.errors.testGroupName?.message ??
                      "Complete Blood Count (CBC)"
                    }
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="testCode"
            render={({ field }) => (
              <FormItem className="col-span-3 lg:col-span-1">
                <FormLabel>Test Code</FormLabel>
                <FormControl>
                  <Input placeholder="CBC" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem className="col-span-3 lg:col-span-1">
                <FormLabel>Test Group Department</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className={cn(
                        "w-full",
                        form.formState.errors.testGroupName &&
                          "data-[placeholder]:text-destructive"
                      )}
                    >
                      <SelectValue
                        placeholder={
                          form.formState.errors.department?.message ??
                          "Select Department"
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {department && department.length > 0 ? (
                      department.map((departmentItem) => (
                        <SelectItem
                          key={departmentItem.id}
                          value={departmentItem.department}
                        >
                          {departmentItem.department}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="No Department found" disabled>
                        No Department found
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sampleType"
            render={({ field }) => (
              <FormItem className="col-span-3 lg:col-span-1">
                <FormLabel>Sample Type</FormLabel>
                <FormControl>
                  <Input
                    className={cn(
                      form.formState.errors.sampleType &&
                        "placeholder:text-destructive"
                    )}
                    placeholder={
                      form.formState.errors.sampleType?.message ??
                      "Blood, Serum, Tissue, Cell"
                    }
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="col-span-3 lg:col-span-1">
                <FormLabel>Test Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder={
                      form.formState.errors.price?.message ?? "Enter Age"
                    }
                    {...field}
                    value={field.value ?? ""}
                    onChange={(e) =>
                      field.onChange(
                        e.target.value ? Number(e.target.value) : undefined
                      )
                    }
                    min="0"
                    max="150"
                    autoComplete="off"
                    className={cn(
                      "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
                      form.formState.errors.price &&
                        "placeholder:text-destructive"
                    )}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="interpretation"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Interpretation</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Test Interpretation"
                    className="h-26 resize-none"
                    {...field}
                    autoComplete="off"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full" disabled={false}>
          <Save className="size-4" />
          Save
        </Button>
      </form>
    </Form>
  );
}
