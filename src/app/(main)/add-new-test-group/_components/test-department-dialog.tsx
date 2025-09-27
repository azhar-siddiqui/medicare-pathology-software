"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { creatTestDepartmentActions } from "@/actions/department/create.action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { departmentFormSchema } from "@/validation/test-department-schema";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

type TestDepartmentDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function TestDepartmentDialog({
  open,
  onOpenChange,
}: TestDepartmentDialogProps) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof departmentFormSchema>>({
    resolver: zodResolver(departmentFormSchema),
    defaultValues: {
      department: "",
    },
  });

  async function onSubmit(values: z.infer<typeof departmentFormSchema>) {
    const data = await creatTestDepartmentActions(values);

    startTransition(() => {
      if (!data.success) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
        form.reset();
        onOpenChange(false);
      }
    });
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        form.reset();
        onOpenChange(val);
      }}
    >
      <DialogContent className="gap-2 sm:max-w-md">
        <DialogHeader className="text-start">
          <DialogTitle>Add Test Department</DialogTitle>
          <DialogDescription>
            Enter the name of the new test department <br /> to add it to the
            system.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            id="test-department-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel>Department</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(
                        form.formState.errors.department &&
                          "placeholder:text-destructive"
                      )}
                      placeholder={
                        form.formState.errors.department?.message ??
                        "Hemotology"
                      }
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter className="gap-2">
              <DialogClose asChild>
                <Button variant="outline" disabled={isPending}>
                  Close
                </Button>
              </DialogClose>
              <Button
                form="test-department-form"
                type="submit"
                disabled={isPending}
              >
                {isPending && <Loader2 className="size-4 animate-spin" />}
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
