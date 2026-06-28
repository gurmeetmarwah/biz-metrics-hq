export const crossfitHubHref = "/industries/crossfit-gym/";

export const crossfitIndustryAverages = {
  revenue: 950_000,
  marginPct: 21,
  marginRange: "15–25%",
  activeMembers: 320,
  monthlyDues: 185,
  revenuePerMemberMonthly: 210,
  monthlyChurnPct: 4.2,
  annualRetentionPct: 72,
  memberLtv: 4_200,
  acquisitionCost: 180,
  sdeMultiple: 3.7,
  sdeMultipleLow: 2.8,
  sdeMultipleHigh: 4.2,
  revenueMultiple: 0.7,
  ebitdaMultiple: 4.6,
  membershipRevenuePct: 91,
  ownerSalary: 150_000,
  sde: 200_000,
  classesPerDay: 10,
  avgClassCapacity: 16,
  avgOccupancyPct: 82,
  revenuePerClass: 340,
  revenuePerCoachAnnual: 165_000,
  mrr: 72_000,
  coaches: 4,
  breakEvenMembers: 120,
};

export const allCrossfitCalculators = [
  {
    label: "CrossFit Revenue Calculator",
    href: "/calculators/crossfit-gym-revenue/",
    description: "Project annual revenue from memberships, PT, nutrition, and ancillary income.",
  },
  {
    label: "Membership Revenue Calculator",
    href: "/calculators/crossfit-membership-revenue/",
    description: "Model MRR from active members and average monthly dues.",
  },
  {
    label: "Coach Productivity Calculator",
    href: "/calculators/crossfit-coach-productivity/",
    description: "Benchmark revenue per coach, class load, and coaching-hour economics.",
  },
  {
    label: "Class Capacity Calculator",
    href: "/calculators/crossfit-class-capacity/",
    description: "Estimate revenue impact from class fill rate and box capacity utilization.",
  },
  {
    label: "Member Lifetime Value Calculator",
    href: "/calculators/crossfit-member-lifetime-value/",
    description: "Calculate LTV from ARPU, retention, and ancillary upsells.",
  },
  {
    label: "CrossFit Gym Valuation Calculator",
    href: "/calculators/crossfit-valuation/",
    description: "Estimate affiliate value using SDE multiples and recurring revenue quality.",
  },
  {
    label: "Break-even Calculator",
    href: "/calculators/crossfit-break-even/",
    description: "Model member count and revenue needed to cover fixed costs and coach payroll.",
  },
] as const;

export function relatedCrossfitCalculators(excludeHref: string) {
  return allCrossfitCalculators.filter((c) => c.href !== excludeHref);
}

export const crossfitDataLinks = [
  {
    label: "CrossFit Gym Revenue Benchmarks",
    href: "/industries/crossfit-gym/#revenue-benchmark",
    description: "Median $950K — revenue percentiles and revenue mix.",
  },
  {
    label: "Membership Economics",
    href: "/industries/crossfit-gym/#membership-economics",
    description: "MRR, dues, churn, and revenue per member benchmarks.",
  },
  {
    label: "Class Utilization Dashboard",
    href: "/industries/crossfit-gym/#class-utilization",
    description: "Class fill, occupancy, and revenue per class benchmarks.",
  },
  {
    label: "Coach Productivity",
    href: "/industries/crossfit-gym/#coach-productivity",
    description: "Revenue per coach, member load, and coaching-hour economics.",
  },
  {
    label: "Affiliate Valuation Multiples",
    href: "/industries/crossfit-gym/#valuation",
    description: "SDE, EBITDA, and revenue multiples for CrossFit affiliate sales.",
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
