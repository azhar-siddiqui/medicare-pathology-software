"use client";

import { creatTestGroupActions } from "@/actions/test-group/create.action";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { testGroupFormSchema } from "@/validation/test-department-schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import { HTMLAttributes, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

interface Department {
  department: string;
  id: string;
}

type TestGroupFormProps = HTMLAttributes<HTMLFormElement> & {
  department: Department[] | undefined;
};

export default function TestGroupForm({
  department,
  ...props
}: Readonly<TestGroupFormProps>) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof testGroupFormSchema>>({
    resolver: zodResolver(testGroupFormSchema),
    defaultValues: {
      testGroupName: "",
      testCode: "",
      departmentId: "",
      sampleType: "",
      price: undefined,
      interpretation: "",
    },
  });

  async function onSubmit(values: z.infer<typeof testGroupFormSchema>) {
    const data = await creatTestGroupActions(values);
    startTransition(() => {
      if (!data.success) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
        form.reset();
      }
    });
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
              <FormItem className="col-span-3 lg:col-span-2">
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
            name="departmentId"
            render={({ field }) => (
              <FormItem className="col-span-3 lg:col-span-1">
                <FormLabel>Test Group Department</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  key={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className={cn(
                        "w-full",
                        form.formState.errors.departmentId &&
                          "data-[placeholder]:text-destructive"
                      )}
                    >
                      <SelectValue
                        placeholder={
                          form.formState.errors.departmentId?.message ??
                          "Select Department"
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <ScrollArea className="h-48 rounded-md">
                      {department && department.length > 0 ? (
                        department.map((departmentItem) => (
                          <SelectItem
                            key={departmentItem.id}
                            value={departmentItem.id}
                          >
                            {departmentItem.department}
                          </SelectItem>
                        ))
                      ) : (
                        <SelectItem value="No Department found" disabled>
                          No Department found
                        </SelectItem>
                      )}
                    </ScrollArea>
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
                      form.formState.errors.price?.message ?? "Enter Price"
                    }
                    {...field}
                    value={field.value ?? ""}
                    onChange={(e) =>
                      field.onChange(
                        e.target.value ? Number(e.target.value) : undefined
                      )
                    }
                    min="0"
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
        <Button type="submit" className="w-full" disabled={isPending}>
          <Save className="size-4" />
          Save
        </Button>
      </form>
    </Form>
  );
}
