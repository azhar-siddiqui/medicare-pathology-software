"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ColumnDef } from "@tanstack/react-table";
import { TestData } from "./data";

export const testColumns: ColumnDef<TestData>[] = [
  {
    id: "test",
    accessorKey: "test",
    header: () => "Tests",
    cell: ({ row }) => (
      <div className="p-1 text-left text-sm capitalize">
        {row.original.test}
      </div>
    ),
    meta: { width: "200px" },
  },
  {
    id: "testCode",
    accessorKey: "testCode",
    header: () => "Test Code",
    cell: ({ row }) => (
      <div className="p-1 text-left text-sm capitalize">
        {row.original.testCode}
      </div>
    ),
  },
  {
    id: "department",
    accessorKey: "department",
    header: () => "Department",
    cell: ({ row }) => (
      <div className="p-1 text-left text-sm capitalize">
        {row.original.department}
      </div>
    ),
  },
  {
    id: "sampleType",
    accessorKey: "sampleType",
    header: () => "Sample Type",
    cell: ({ row }) => (
      <div className="p-1 text-left text-sm capitalize">
        {row.original.sampleType ?? "-"}
      </div>
    ),
  },
  {
    id: "price",
    accessorKey: "price",
    header: () => "Price",
    cell: ({ row }) => (
      <Input value={row.original.price} onChange={() => {}} className="w-28" />
    ),
  },
  {
    id: "interPretation",
    accessorKey: "interPretation",
    header: () => "Interpretation",
    cell: ({ row }) => (
      <Checkbox
        id={`interPretation${row.original.id}`}
        checked={row.original.interPretation}
        onCheckedChange={() => {}}
      />
    ),
  },
  {
    id: "action",
    accessorKey: "action",
    header: () => "Action",
    cell: ({ row }) => (
      <div className="p-1 flex gap-x-4">
        <Button>Edit</Button>
        <Button variant="destructive">Delete</Button>
      </div>
    ),
  },
];
