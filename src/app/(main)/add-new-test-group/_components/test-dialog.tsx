"use client";
import TestDepartmentDialog from "./test-department-dialog";
import { useTest } from "./test-provider";

export default function TestDialog() {
  const { open, setOpen } = useTest();
  return (
    <TestDepartmentDialog
      key="test-department"
      open={open === "create"}
      onOpenChange={() => setOpen("create")}
    />
  );
}
