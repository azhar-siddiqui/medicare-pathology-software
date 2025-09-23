import { cn } from "@/lib/utils";
import { type Column } from "@tanstack/react-table";
import { ArrowDownAZ, ArrowDownUp, ArrowDownZA } from "lucide-react";
import { Button } from "../ui/button";

type DataTableColumnHeaderProps<TData, TValue> =
  React.HTMLAttributes<HTMLDivElement> & {
    column: Column<TData, TValue>;
    title: string;
  };

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  // Function to cycle through sort states: false -> asc -> desc -> false
  const handleSort = () => {
    const currentSort = column.getIsSorted();
    if (!currentSort) {
      column.toggleSorting(false); // false -> asc
    } else if (currentSort === "asc") {
      column.toggleSorting(true); // asc -> desc
    } else {
      column.clearSorting(); // desc -> no sort
    }
  };

  // Determine the sort icon based on the current sort state
  const getSortIcon = () => {
    const currentSort = column.getIsSorted();
    if (currentSort === "desc") {
      return <ArrowDownZA className="ms-2 h-4 w-4" />;
    }
    if (currentSort === "asc") {
      return <ArrowDownAZ className="ms-2 h-4 w-4" />;
    }
    return <ArrowDownUp className="ms-2 h-4 w-4" />;
  };

  return (
    <div className={cn("flex items-center", className)}>
      <Button
        variant="ghost"
        className={cn(
          "px-0 w-full flex justify-start rounded-none rounded-tl-md hover:bg-transparent dark:hover:bg-transparent has-[>svg]:px-0"
        )}
        onClick={handleSort}
      >
        <span>{title}</span>
        {getSortIcon()}
      </Button>
    </div>
  );
}
