export const plumbingHubHref = "/industries/plumbing/";

export const plumbingIndustryAverages = {
  revenue: 1600000,
  marginPct: 11,
  marginRange: "8–14%",
  grossMarginPct: 47,
  technicianPayrollPct: 34,
  materialsPct: 20,
  fleetPct: 7,
  marketingPct: 8,
  overheadPct: 20,
  revenuePerTechnician: 215000,
  revenuePerTechnicianRange: "$150K – $280K",
  technicians: 6,
  jobsPerDay: 6,
  averageServiceTicket: 400,
  sdeMultiple: 2.8,
  revenueMultiple: 0.7,
  ebitdaMultiple: 4.5,
  ownerSalary: 125000,
  startupCostRange: "$150K – $400K",
};

export const allPlumbingCalculators = [
  {
    label: "Revenue Per Technician Calculator",
    href: "/calculators/plumbing-revenue-per-technician/",
    description: "Measure plumber productivity and revenue per tech.",
  },
  {
    label: "Profit Margin Calculator",
    href: "/calculators/plumbing-profit-margin/",
    description: "Calculate net margin and compare to plumbing benchmarks.",
  },
  {
    label: "Business Valuation Calculator",
    href: "/calculators/plumbing-valuation/",
    description: "Estimate plumbing company value using SDE multiples.",
  },
  {
    label: "Break-Even Calculator",
    href: "/calculators/plumbing-break-even/",
    description: "Estimate required revenue and jobs to break even.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allPlumbingCalculators.filter((c) => c.href !== excludeHref);
}

export const plumbingDataLinks = [
  {
    label: "Plumbing Revenue Benchmarks",
    href: "/industries/plumbing/#revenue-benchmark",
    description: "Median $1.6M — revenue by plumber count and service mix.",
  },
  {
    label: "Plumbing Profit Margins",
    href: "/industries/plumbing/#profitability",
    description: "Net margin tiers, gross margin, and cost structure.",
  },
  {
    label: "Plumbing Owner Salary",
    href: "/industries/plumbing/#owner-economics",
    description: "What plumbing owners earn by company size.",
  },
  {
    label: "Plumbing Valuation Multiples",
    href: "/industries/plumbing/#valuation",
    description: "SDE, EBITDA, and revenue multiples for plumbing sales.",
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
