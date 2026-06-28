export const yogaHubHref = "/industries/yoga-studio/";

export const yogaIndustryAverages = {
  revenue: 620_000,
  marginPct: 19,
  marginRange: "14–24%",
  activeMembers: 220,
  monthlyDues: 119,
  revenuePerMemberMonthly: 138,
  monthlyChurnPct: 4.8,
  annualRetentionPct: 72,
  clientLtv: 2_800,
  acquisitionCost: 140,
  sdeMultiple: 3.3,
  sdeMultipleLow: 2.2,
  sdeMultipleHigh: 3.5,
  revenueMultiple: 0.55,
  ebitdaMultiple: 3.8,
  membershipRevenuePct: 88,
  ownerSalary: 115_000,
  sde: 118_000,
  classesPerWeek: 50,
  avgClassCapacity: 24,
  avgOccupancyPct: 68,
  revenuePerClass: 240,
  revenuePerInstructorAnnual: 98_000,
  mrr: 48_000,
};

export const allYogaCalculators = [
  {
    label: "Yoga Studio Revenue Calculator",
    href: "/calculators/yoga-studio-revenue/",
    description: "Project annual revenue from memberships, classes, workshops, and teacher training.",
  },
  {
    label: "Membership Revenue Calculator",
    href: "/calculators/yoga-membership-revenue/",
    description: "Model MRR from active members and average monthly dues.",
  },
  {
    label: "Class Capacity Calculator",
    href: "/calculators/yoga-class-capacity/",
    description: "Estimate revenue impact from class fill rate and studio capacity utilization.",
  },
  {
    label: "Client Lifetime Value Calculator",
    href: "/calculators/yoga-client-lifetime-value/",
    description: "Calculate LTV from ARPU, retention, and workshop upsells.",
  },
  {
    label: "Instructor Productivity Calculator",
    href: "/calculators/yoga-instructor-productivity/",
    description: "Benchmark revenue per instructor and teaching-hour economics.",
  },
  {
    label: "Yoga Studio Valuation Calculator",
    href: "/calculators/yoga-valuation/",
    description: "Estimate studio value using SDE multiples and recurring revenue quality.",
  },
] as const;

export function relatedYogaCalculators(excludeHref: string) {
  return allYogaCalculators.filter((c) => c.href !== excludeHref);
}

export const yogaDataLinks = [
  {
    label: "Yoga Studio Revenue Benchmarks",
    href: "/industries/yoga-studio/#revenue-benchmark",
    description: "Median $620K — revenue percentiles and revenue mix.",
  },
  {
    label: "Membership Economics",
    href: "/industries/yoga-studio/#membership-economics",
    description: "MRR, dues, churn, and revenue per member benchmarks.",
  },
  {
    label: "Community Health Dashboard",
    href: "/industries/yoga-studio/#community-health",
    description: "Renewal, attendance, workshop participation, and referral rates.",
  },
  {
    label: "Studio Valuation Multiples",
    href: "/industries/yoga-studio/#valuation",
    description: "SDE, EBITDA, and revenue multiples for yoga studio sales.",
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
