export const gymHubHref = "/industries/gym/";

export const gymIndustryAverages = {
  revenue: 1_200_000,
  marginPct: 18,
  marginRange: "12–22%",
  members: 850,
  monthlyDues: 38,
  monthlyDuesMean: 69,
  revenuePerMemberMonthly: 43,
  revenuePerMemberAnnual: 517,
  monthlyChurnPct: 4,
  annualRetentionPct: 66.4,
  memberLtv: 700,
  acquisitionCost: 140,
  sdeMultiple: 3.5,
  sdeMultipleLow: 2.8,
  sdeMultipleHigh: 4.2,
  revenueMultiple: 0.85,
  ebitdaMultiple: 5.25,
  membershipRevenuePct: 62,
  ownerSalary: 120_000,
  sde: 280_000,
};

export const allGymCalculators = [
  {
    label: "Gym Revenue Calculator",
    href: "/calculators/gym-revenue/",
    description: "Project annual revenue from membership dues, training, and ancillary income.",
  },
  {
    label: "Membership Growth Calculator",
    href: "/calculators/gym-membership-growth/",
    description: "Model member adds, churn, and net membership growth over 12 months.",
  },
  {
    label: "Member Lifetime Value Calculator",
    href: "/calculators/gym-member-lifetime-value/",
    description: "Estimate LTV from average dues, retention, and upsell revenue.",
  },
  {
    label: "Churn Rate Calculator",
    href: "/calculators/gym-churn-rate/",
    description: "Calculate monthly and annual churn from member activity data.",
  },
  {
    label: "Gym Valuation Calculator",
    href: "/calculators/gym-valuation/",
    description: "Estimate gym value using SDE multiples and recurring revenue quality.",
  },
] as const;

export function relatedGymCalculators(excludeHref: string) {
  return allGymCalculators.filter((c) => c.href !== excludeHref);
}

export const gymDataLinks = [
  {
    label: "Gym Revenue Benchmarks",
    href: "/industries/gym/#revenue-benchmark",
    description: "Median $1.2M — revenue percentiles and revenue mix.",
  },
  {
    label: "Membership Economics",
    href: "/industries/gym/#membership-economics",
    description: "MRR, dues, churn, and revenue per member benchmarks.",
  },
  {
    label: "Member Economics Dashboard",
    href: "/industries/gym/#member-economics",
    description: "LTV, CAC, and retention sourced from HFA industry data.",
  },
  {
    label: "Gym Valuation Multiples",
    href: "/industries/gym/#valuation",
    description: "SDE, EBITDA, and revenue multiples for gym sales.",
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
