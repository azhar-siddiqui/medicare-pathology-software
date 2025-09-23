import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep(ms: number = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generates page numbers for pagination with ellipsis
 * @param currentPage - Current page number (1-based)
 * @param totalPages - Total number of pages
 * @returns Array of page numbers and ellipsis strings
 *
 * Examples:
 * - Small dataset (≤5 pages): [1, 2, 3, 4, 5]
 * - Near beginning: [1, 2, 3, 4, '...', 10]
 * - In middle: [1, '...', 4, 5, 6, '...', 10]
 * - Near end: [1, '...', 7, 8, 9, 10]
 */
export function getPageNumbers(currentPage: number, totalPages: number): (string | number)[] {
  const maxVisiblePages = 5;

  // Handle small datasets (≤5 pages)
  if (totalPages <= maxVisiblePages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Handle larger datasets
  return buildPageRange(currentPage, totalPages);
}

/**
 * Builds page range for datasets with more than maxVisiblePages
 * @param currentPage - Current page number (1-based)
 * @param totalPages - Total number of pages
 * @returns Array of page numbers and ellipsis strings
 */
function buildPageRange(currentPage: number, totalPages: number): (string | number)[] {
  const range: (string | number)[] = [1]; // Always include first page

  if (currentPage <= 3) {
    // Near the beginning: [1, 2, 3, 4, '...', totalPages]
    return [...range, 2, 3, 4, "...", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    // Near the end: [1, '...', totalPages-3, totalPages-2, totalPages-1, totalPages]
    return [...range, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  // In the middle: [1, '...', currentPage-1, currentPage, currentPage+1, '...', totalPages]
  return [...range, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
}

// Supported currency codes
type CurrencyCode = "INR" | "USD" | "EUR" | "GBP" | "JPY";

// Currency configuration with locale and symbol
interface CurrencyConfig {
  locale: string;
  symbol: string;
}

// Map of currency codes to their configurations
const currencyConfig: Record<CurrencyCode, CurrencyConfig> = {
  INR: { locale: "en-IN", symbol: "₹" },
  USD: { locale: "en-US", symbol: "$" },
  EUR: { locale: "de-DE", symbol: "€" },
  GBP: { locale: "en-GB", symbol: "£" },
  JPY: { locale: "ja-JP", symbol: "¥" },
};

/**
 * Formats a number or string as a currency string with the appropriate symbol.
 * Returns "--" if amount is null, undefined, or an invalid string.
 * @param amount - The amount to format (number, string, null, or undefined).
 * @param currency - The currency code (e.g., 'INR', 'USD').
 * @returns Formatted currency string (e.g., '₹1,234.56') or "--" for invalid inputs.
 * @throws Error if the currency code is unsupported.
 */
export function formatCurrency(
  amount: number | string | null | undefined,
  currency: CurrencyCode
): string {
  // Handle null or undefined
  if (amount == null) {
    return "--";
  }

  // Handle string input
  let parsedAmount: number;
  if (typeof amount === "string") {
    parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) {
      return "--";
    }
  } else {
    parsedAmount = amount;
  }

  // Validate currency code
  if (!currencyConfig[currency]) {
    throw new Error(`Unsupported currency code: ${currency}`);
  }

  // Validate parsed amount
  if (isNaN(parsedAmount)) {
    return "--";
  }

  const { locale } = currencyConfig[currency];

  // Format the number using Intl.NumberFormat
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(parsedAmount);
}
