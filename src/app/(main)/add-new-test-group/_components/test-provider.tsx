"use client";

import useDialogState from "@/hooks/use-dialog-state";
import React from "react";

type TestDialogType = "create" | "update" | "delete" | "import";

type TestContextType = {
  open: TestDialogType | null;
  setOpen: (str: TestDialogType | null) => void;
};

const TestContext = React.createContext<TestContextType | null>(null);

export function TestProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useDialogState<TestDialogType>(null);

  // Memoize the value object to prevent unnecessary re-renders
  const value = React.useMemo(() => ({ open, setOpen }), [open, setOpen]);

  return <TestContext value={value}>{children}</TestContext>;
}

export const useTest = () => {
  const tasksContext = React.useContext(TestContext);

  if (!tasksContext) {
    throw new Error("useTest has to be used within <TasksContext>");
  }

  return tasksContext;
};
