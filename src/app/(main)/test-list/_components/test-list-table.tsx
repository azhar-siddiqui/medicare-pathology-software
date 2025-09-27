"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import * as React from "react";

import { DataTablePagination } from "@/components/data-table/pagination";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTableUrlState } from "@/hooks/use-table-url-state";

import { ChevronDown, Search } from "lucide-react";
import { TestData } from "./data";

interface DataTableProps<TValue> {
  columns: ColumnDef<TestData, TValue>[];
  data: TestData[] | undefined;
  isLoading?: boolean;
}

export default function TestListTable<TValue>({
  data,
  columns,
  isLoading,
}: DataTableProps<TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  // Use the useTableUrlState hook to manage URL-driven state
  const {
    globalFilter,
    onGlobalFilterChange,
    columnFilters,
    onColumnFiltersChange,
    pagination,
    onPaginationChange,
    ensurePageInRange,
  } = useTableUrlState({
    pagination: { defaultPage: 1, defaultPageSize: 10 },
    globalFilter: { enabled: true, key: "filter" },
    columnFilters: [
      { columnId: "test", searchKey: "test", type: "string" },
      { columnId: "testCode", searchKey: "testCode", type: "string" },
    ],
  });

  // Slice data for manual pagination
  const paginatedData = React.useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize;
    const end = start + pagination.pageSize;
    return data?.slice(start, end) ?? [];
  }, [data, pagination.pageIndex, pagination.pageSize]);

  const table = useReactTable({
    data: paginatedData, // Use sliced data
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange,
    onGlobalFilterChange,
    globalFilterFn: (row, _columnId, filterValue: string) => {
      const test = row.original?.testGroupName?.toLowerCase() || "";
      const testCode = row.original.testCode?.toLowerCase() || "";
      const searchTerm = filterValue.toLowerCase();
      return test.includes(searchTerm) || testCode.includes(searchTerm);
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
      pagination,
    },
    manualPagination: true,
    pageCount: Math.ceil((data?.length ?? 0) / pagination.pageSize),
  });

  // Ensure the current page is within range when data or pageSize changes
  React.useEffect(() => {
    ensurePageInRange(table.getPageCount());
  }, [data, pagination.pageSize, ensurePageInRange, table]);

  return (
    <div className="w-full">
      <div className="flex items-center py-4 relative">
        <Search className="size-4 absolute left-2" />
        <Input
          placeholder="Filter Test..."
          value={globalFilter ?? ""}
          onChange={(event) => onGlobalFilterChange?.(event.target.value)}
          className="max-w-sm pl-8"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full">
        <div className="border rounded-md shadow-md">
          <div className="relative overflow-auto h-[58vh]">
            <Table>
              <TableHeader className="bg-muted sticky top-0 z-50">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-[52vh] text-center"
                    >
                      {isLoading ? "Loading..." : "No results."}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div className="py-4">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
