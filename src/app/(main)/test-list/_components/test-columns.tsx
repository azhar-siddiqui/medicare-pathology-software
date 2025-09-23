"use client";

import { DataTableColumnHeader } from "@/components/data-table/column-header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { formatCurrency } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { TestData } from "./data";

export const testColumns: ColumnDef<TestData>[] = [
  {
    id: "test",
    accessorKey: "test",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tests" />
    ),
    cell: ({ row }) => (
      <div className="p-1 text-left text-sm capitalize">
        {row.original.test}
      </div>
    ),
    meta: { width: "200px" },
    enableSorting: true,
  },
  {
    id: "testCode",
    accessorKey: "testCode",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Test Code" />
    ),
    cell: ({ row }) => (
      <div className="p-1 text-left text-sm capitalize">
        {row.original.testCode}
      </div>
    ),
  },
  {
    id: "department",
    accessorKey: "department",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Department" />
    ),
    cell: ({ row }) => (
      <div className="p-1 text-left text-sm capitalize">
        {row.original.department}
      </div>
    ),
  },
  {
    id: "sampleType",
    accessorKey: "sampleType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sample Type" />
    ),
    cell: ({ row }) => (
      <div className="p-1 text-left text-sm capitalize">
        {row.original.sampleType ?? "-"}
      </div>
    ),
  },
  {
    id: "price",
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => (
      <div className="p-1 text-left text-sm capitalize">
        {formatCurrency(row.original.price, "INR")}
      </div>
    ),
  },
  {
    id: "interPretation",
    accessorKey: "interPretation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Interpretation" />
    ),
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
