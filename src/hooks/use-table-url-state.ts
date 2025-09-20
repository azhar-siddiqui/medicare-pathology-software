import type {
    ColumnFiltersState,
    OnChangeFn,
    PaginationState,
} from "@tanstack/react-table";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

type SearchRecord = Record<string, unknown>;

type NavigateFn = (opts: {
  search:
    | true
    | SearchRecord
    | ((prev: SearchRecord) => Partial<SearchRecord> | SearchRecord);
  replace?: boolean;
}) => void;

type UseTableUrlStateParams = {
  pagination?: {
    pageKey?: string;
    pageSizeKey?: string;
    defaultPage?: number;
    defaultPageSize?: number;
  };
  globalFilter?: {
    enabled?: boolean;
    key?: string;
    trim?: boolean;
  };
  columnFilters?: Array<
    | {
        columnId: string;
        searchKey: string;
        type?: "string";
        serialize?: (value: unknown) => unknown;
        deserialize?: (value: unknown) => unknown;
      }
    | {
        columnId: string;
        searchKey: string;
        type: "array";
        serialize?: (value: unknown) => unknown;
        deserialize?: (value: unknown) => unknown;
      }
  >;
};

type UseTableUrlStateReturn = {
  globalFilter?: string;
  onGlobalFilterChange?: OnChangeFn<string>;
  columnFilters: ColumnFiltersState;
  onColumnFiltersChange: OnChangeFn<ColumnFiltersState>;
  pagination: PaginationState;
  onPaginationChange: OnChangeFn<PaginationState>;
  ensurePageInRange: (
    pageCount: number,
    opts?: { resetTo?: "first" | "last" }
  ) => void;
};

// Helper to parse search params into SearchRecord
function parseSearchParams(
  searchParams: URLSearchParams,
  pageKey: string,
  pageSizeKey: string,
  globalFilterKey: string,
  columnFiltersCfg: UseTableUrlStateParams["columnFilters"]
): SearchRecord {
  const record: SearchRecord = {};
  searchParams.forEach((value, key) => {
    if (key === pageKey || key === pageSizeKey) {
      record[key] = parseInt(value, 10);
    } else if (key === globalFilterKey) {
      record[key] = value;
    } else {
      const cfg = columnFiltersCfg?.find((c) => c.searchKey === key);
      if (cfg?.type === "array") {
        try {
          record[key] = JSON.parse(value);
        } catch {
          record[key] = value.split(",");
        }
      } else {
        record[key] = value;
      }
    }
  });
  return record;
}

// Helper to build column filters
function buildColumnFilters(
  search: SearchRecord,
  columnFiltersCfg: UseTableUrlStateParams["columnFilters"]
): ColumnFiltersState {
  const collected: ColumnFiltersState = [];
  for (const cfg of columnFiltersCfg ?? []) {
    const raw = search[cfg.searchKey];
    const deserialize = cfg.deserialize ?? ((v: unknown) => v);
    if (cfg.type === "string") {
      const value = (deserialize(raw) as string) ?? "";
      if (typeof value === "string" && value.trim() !== "") {
        collected.push({ id: cfg.columnId, value });
      }
    } else {
      const value = (deserialize(raw) as unknown[]) ?? [];
      if (Array.isArray(value) && value.length > 0) {
        collected.push({ id: cfg.columnId, value });
      }
    }
  }
  return collected;
}

export function useTableUrlState(
  params: UseTableUrlStateParams
): UseTableUrlStateReturn {
  const {
    pagination: paginationCfg,
    globalFilter: globalFilterCfg,
    columnFilters: columnFiltersCfg = [],
  } = params;

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const pageKey = paginationCfg?.pageKey ?? "page";
  const pageSizeKey = paginationCfg?.pageSizeKey ?? "pageSize";
  const defaultPage = paginationCfg?.defaultPage ?? 1;
  const defaultPageSize = paginationCfg?.defaultPageSize ?? 10;
  const globalFilterKey = globalFilterCfg?.key ?? "filter";
  const globalFilterEnabled = globalFilterCfg?.enabled ?? true;
  const trimGlobal = globalFilterCfg?.trim ?? true;

  // Convert searchParams to a SearchRecord
  const search = useMemo(
    () =>
      parseSearchParams(
        searchParams,
        pageKey,
        pageSizeKey,
        globalFilterKey,
        columnFiltersCfg
      ),
    [searchParams, pageKey, pageSizeKey, globalFilterKey, columnFiltersCfg]
  );

  // Navigation function
  const navigate: NavigateFn = ({ search: searchUpdater, replace = false }) => {
    const prev = search;
    let nextSearch: SearchRecord;
    if (typeof searchUpdater === "function") {
      nextSearch = searchUpdater(prev);
    } else if (searchUpdater === true) {
      nextSearch = prev;
    } else {
      nextSearch = searchUpdater;
    }

    const newSearchParams = new URLSearchParams();
    Object.entries(nextSearch).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          newSearchParams.set(key, JSON.stringify(value));
        } else if (typeof value === "object") {
          newSearchParams.set(key, JSON.stringify(value));
        } else {
          newSearchParams.set(key, String(value));
        }
      }
    });

    const queryString = newSearchParams.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;
    if (replace) {
      router.replace(url);
    } else {
      router.push(url);
    }
  };

  // Build initial column filters
  const initialColumnFilters = useMemo(
    () => buildColumnFilters(search, columnFiltersCfg),
    [search, columnFiltersCfg]
  );

  const [columnFilters, setColumnFilters] =
    useState<ColumnFiltersState>(initialColumnFilters);

  const pagination: PaginationState = useMemo(() => {
    const rawPage = search[pageKey];
    const rawPageSize = search[pageSizeKey];
    const pageNum = typeof rawPage === "number" ? rawPage : defaultPage;
    const pageSizeNum =
      typeof rawPageSize === "number" ? rawPageSize : defaultPageSize;
    return { pageIndex: Math.max(0, pageNum - 1), pageSize: pageSizeNum };
  }, [search, pageKey, pageSizeKey, defaultPage, defaultPageSize]);

  const onPaginationChange: OnChangeFn<PaginationState> = (updater) => {
    const next = typeof updater === "function" ? updater(pagination) : updater;
    const nextPage = next.pageIndex + 1;
    const nextPageSize = next.pageSize;
    navigate({
      search: (prev) => ({
        ...prev,
        [pageKey]: nextPage <= defaultPage ? undefined : nextPage,
        [pageSizeKey]:
          nextPageSize === defaultPageSize ? undefined : nextPageSize,
      }),
    });
  };

  const [globalFilter, setGlobalFilter] = useState<string | undefined>(() => {
    if (!globalFilterEnabled) return undefined;
    const raw = search[globalFilterKey];
    return typeof raw === "string" ? raw : "";
  });

  const onGlobalFilterChange: OnChangeFn<string> | undefined =
    globalFilterEnabled
      ? (updater) => {
          const next =
            typeof updater === "function"
              ? updater(globalFilter ?? "")
              : updater;
          const value = trimGlobal ? next.trim() : next;
          setGlobalFilter(value);
          navigate({
            search: (prev) => {
              const newSearch = { ...prev };
              if (value) {
                newSearch[globalFilterKey] = value;
              } else {
                delete newSearch[globalFilterKey];
              }
              newSearch[pageKey] = undefined;
              return newSearch;
            },
          });
        }
      : undefined;

  const onColumnFiltersChange: OnChangeFn<ColumnFiltersState> = (updater) => {
    const next =
      typeof updater === "function" ? updater(columnFilters) : updater;
    setColumnFilters(next);

    const patch: Record<string, unknown> = {};
    for (const cfg of columnFiltersCfg) {
      const found = next.find((f) => f.id === cfg.columnId);
      const serialize = cfg.serialize ?? ((v: unknown) => v);
      if (cfg.type === "string") {
        const value = typeof found?.value === "string" ? found.value : "";
        patch[cfg.searchKey] =
          value.trim() !== "" ? serialize(value) : undefined;
      } else {
        const value = Array.isArray(found?.value)
          ? (found.value as unknown[])
          : [];
        patch[cfg.searchKey] = value.length > 0 ? serialize(value) : undefined;
      }
    }

    navigate({
      search: (prev) => ({
        ...prev,
        [pageKey]: undefined,
        ...patch,
      }),
    });
  };

  const ensurePageInRange = (
    pageCount: number,
    opts: { resetTo?: "first" | "last" } = { resetTo: "first" }
  ) => {
    const currentPage = search[pageKey];
    const pageNum = typeof currentPage === "number" ? currentPage : defaultPage;
    if (pageCount > 0 && pageNum > pageCount) {
      navigate({
        replace: true,
        search: (prev) => ({
          ...prev,
          [pageKey]: opts.resetTo === "last" ? pageCount : undefined,
        }),
      });
    }
  };

  return {
    globalFilter: globalFilterEnabled ? (globalFilter ?? "") : undefined,
    onGlobalFilterChange,
    columnFilters,
    onColumnFiltersChange,
    pagination,
    onPaginationChange,
    ensurePageInRange,
  };
}
