export const roofingHubHref = "/industries/roofing/";

export const roofingIndustryAverages = {
  revenue: 2000000,
  marginPct: 9,
  marginRange: "6–13%",
  grossMarginPct: 33,
  laborPct: 30,
  materialsPct: 36,
  marketingPct: 11,
  fleetPct: 6,
  overheadPct: 8,
  revenuePerCrew: 650000,
  revenuePerCrewRange: "$400K – $900K",
  crews: 4,
  installsPerCrewPerMonth: 5,
  averageInstallTicket: 12000,
  crewUtilizationPct: 72,
  sdeMultiple: 2.6,
  revenueMultiple: 0.6,
  ebitdaMultiple: 4.0,
  ownerSalary: 140000,
  startupCostRange: "$100K – $350K",
};

export const allRoofingCalculators = [
  {
    label: "Roofing Revenue Calculator",
    href: "/calculators/roofing-revenue/",
    description: "Estimate annual revenue by crew count and project mix.",
  },
  {
    label: "Roofing Profit Calculator",
    href: "/calculators/roofing-profit/",
    description: "Calculate net margin and compare to roofing benchmarks.",
  },
  {
    label: "Crew Productivity Calculator",
    href: "/calculators/roofing-crew-productivity/",
    description: "Measure revenue per crew and install throughput.",
  },
  {
    label: "Business Valuation Calculator",
    href: "/calculators/roofing-valuation/",
    description: "Estimate roofing company value using SDE multiples.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allRoofingCalculators.filter((c) => c.href !== excludeHref);
}

export const roofingDataLinks = [
  {
    label: "Roofing Revenue Benchmarks",
    href: "/industries/roofing/#revenue-benchmark",
    description: "Median $2.0M — revenue by crew count and project mix.",
  },
  {
    label: "Roofing Profit Margins",
    href: "/industries/roofing/#profitability",
    description: "Net margin tiers, gross margin, and cost structure.",
  },
  {
    label: "Roofing Owner Salary",
    href: "/industries/roofing/#owner-economics",
    description: "What roofing owners earn by company size.",
  },
  {
    label: "Roofing Valuation Multiples",
    href: "/industries/roofing/#valuation",
    description: "SDE, EBITDA, and revenue multiples for roofing sales.",
  },
] as const;

export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`;
}

export function formatNumber(value: number, decimals = 0): string {
  return value.toLocaleString("en-US", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
}

export { formatCurrency } from "@/lib/numbers";
