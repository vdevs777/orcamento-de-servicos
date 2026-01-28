export function numberToLocale(
  value: number | string | null | undefined,
  options?: {
    minDecimals?: number;
    maxDecimals?: number;
  },
): string {
  if (value === null || value === undefined || value === "") return "";

  const num = typeof value === "string" ? Number(value) : value;

  if (isNaN(num)) return "";

  const { minDecimals = 0, maxDecimals = 2 } = options || {};

  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: minDecimals,
    maximumFractionDigits: maxDecimals,
  }).format(num);
}
