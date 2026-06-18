export const landscapingHubHref = "/industries/landscaping/";

export const landscapingIndustryAverages = {
  revenue: 1100000,
  marginPct: 8,
  marginRange: "5–12%",
  grossMarginPct: 40,
  laborPct: 47,
  materialsPct: 16,
  marketingPct: 5,
  fleetPct: 12,
  overheadPct: 12,
  revenuePerCrew: 275000,
  revenuePerCrewRange: "$200K – $350K",
  crews: 4,
  maintenanceRevenuePct: 45,
  commercialContractMonthly: 1200,
  sdeMultiple: 2.2,
  revenueMultiple: 0.5,
  ebitdaMultiple: 3.5,
  ownerSalary: 95000,
  startupCostRange: "$75K – $250K",
};

export const allLandscapingCalculators = [
  {
    label: "Landscaping Revenue Calculator",
    href: "/calculators/landscaping-revenue/",
    description: "Estimate annual revenue by crew count and service mix.",
  },
  {
    label: "Profit Margin Calculator",
    href: "/calculators/landscaping-profit/",
    description: "Calculate net margin and compare to landscaping benchmarks.",
  },
  {
    label: "Crew Productivity Calculator",
    href: "/calculators/landscaping-crew-productivity/",
    description: "Measure revenue per crew and route throughput.",
  },
  {
    label: "Business Valuation Calculator",
    href: "/calculators/landscaping-valuation/",
    description: "Estimate landscaping company value using SDE multiples.",
  },
  {
    label: "Commercial Contract Calculator",
    href: "/calculators/landscaping-commercial-contract/",
    description: "Model recurring revenue from commercial maintenance contracts.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allLandscapingCalculators.filter((c) => c.href !== excludeHref);
}

export const landscapingDataLinks = [
  {
    label: "Landscaping Revenue Benchmarks",
    href: "/industries/landscaping/#revenue-benchmark",
    description: "Median $1.1M — revenue by crew count and service mix.",
  },
  {
    label: "Landscaping Profit Margins",
    href: "/industries/landscaping/#profitability",
    description: "Net margin tiers, gross margin, and cost structure.",
  },
  {
    label: "Landscaping Owner Salary",
    href: "/industries/landscaping/#owner-economics",
    description: "What landscaping owners earn by company size.",
  },
  {
    label: "Landscaping Valuation Multiples",
    href: "/industries/landscaping/#valuation",
    description: "SDE, EBITDA, and revenue multiples for landscaping sales.",
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
