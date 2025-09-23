"use client";

import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { useTest } from "./test-provider";

export default function TestGroupPrimaryButton() {
  const { setOpen } = useTest();
  return (
    <Button onClick={() => {
      setOpen("create")
    }}
    className="w-full sm:w-fit"
    >
      <UserPlus className="size-4" />
      Add Department
    </Button>
  );
}
