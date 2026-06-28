export const pilatesHubHref = "/industries/pilates-studio/";

export const pilatesIndustryAverages = {
  revenue: 850_000,
  marginPct: 22,
  marginRange: "18–28%",
  activeClients: 150,
  monthlyDues: 165,
  revenuePerClientMonthly: 195,
  monthlyChurnPct: 3.8,
  annualRetentionPct: 72,
  clientLtv: 3_100,
  acquisitionCost: 180,
  sdeMultiple: 3.8,
  sdeMultipleLow: 2.5,
  sdeMultipleHigh: 3.8,
  revenueMultiple: 0.7,
  ebitdaMultiple: 4.5,
  membershipRevenuePct: 88,
  ownerSalary: 145_000,
  sde: 195_000,
  reformerCount: 8,
  classesPerWeek: 60,
  avgOccupancyPct: 72,
  revenuePerReformerMonthly: 2_500,
  revenuePerInstructorAnnual: 130_000,
  mrr: 62_000,
};

export const allPilatesCalculators = [
  {
    label: "Pilates Studio Revenue Calculator",
    href: "/calculators/pilates-studio-revenue/",
    description: "Project annual revenue from memberships, classes, and private sessions.",
  },
  {
    label: "Membership Revenue Calculator",
    href: "/calculators/pilates-membership-revenue/",
    description: "Model MRR from active members and average monthly dues.",
  },
  {
    label: "Class Occupancy Calculator",
    href: "/calculators/pilates-class-occupancy/",
    description: "Estimate revenue impact from class fill rate and reformer utilization.",
  },
  {
    label: "Client Lifetime Value Calculator",
    href: "/calculators/pilates-client-lifetime-value/",
    description: "Calculate LTV from ARPU, retention, and private session upsells.",
  },
  {
    label: "Instructor Productivity Calculator",
    href: "/calculators/pilates-instructor-productivity/",
    description: "Benchmark revenue per instructor and teaching-hour economics.",
  },
  {
    label: "Pilates Studio Valuation Calculator",
    href: "/calculators/pilates-valuation/",
    description: "Estimate studio value using SDE multiples and recurring revenue quality.",
  },
] as const;

export function relatedPilatesCalculators(excludeHref: string) {
  return allPilatesCalculators.filter((c) => c.href !== excludeHref);
}

export const pilatesDataLinks = [
  {
    label: "Pilates Studio Revenue Benchmarks",
    href: "/industries/pilates-studio/#revenue-benchmark",
    description: "Median $850K — revenue percentiles and revenue mix.",
  },
  {
    label: "Membership Economics",
    href: "/industries/pilates-studio/#membership-economics",
    description: "MRR, dues, churn, and revenue per client benchmarks.",
  },
  {
    label: "Client Economics Dashboard",
    href: "/industries/pilates-studio/#client-economics",
    description: "LTV, visits, and contract length for reformer studios.",
  },
  {
    label: "Studio Valuation Multiples",
    href: "/industries/pilates-studio/#valuation",
    description: "SDE, EBITDA, and revenue multiples for Pilates studio sales.",
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
