export function parseCurrencyInput(value: string): number {
  const digits = value.replace(/[^0-9]/g, "");
  if (digits === "") return 0;
  const n = Number(digits);
  return Number.isFinite(n) ? n : 0;
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
