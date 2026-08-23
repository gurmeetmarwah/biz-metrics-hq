export const hvacHubHref = "/industries/hvac/";

export const hvacIndustryAverages = {
  revenue: 2400000,
  marginPct: 12,
  marginRange: "8–16%",
  grossMarginPct: 50,
  technicianPayrollPct: 32,
  materialsPct: 22,
  fleetPct: 8,
  marketingPct: 7,
  overheadPct: 19,
  revenuePerTechnician: 240000,
  revenuePerTechnicianRange: "$180K – $320K",
  technicians: 8,
  jobsPerDay: 5,
  averageServiceTicket: 475,
  sdeMultiple: 3.1,
  revenueMultiple: 0.85,
  ebitdaMultiple: 5.2,
  ownerSalary: 145000,
  startupCostRange: "$200K – $500K",
};

export const allHvacCalculators = [
  {
    label: "Revenue Per Technician Calculator",
    href: "/calculators/hvac-revenue-per-technician/",
    description: "Measure technician productivity and revenue per tech.",
  },
  {
    label: "Profit Margin Calculator",
    href: "/calculators/hvac-profit-margin/",
    description: "Are HVAC businesses profitable? Compare your net margin to 8–16% benchmarks.",
  },
  {
    label: "Business Valuation Calculator",
    href: "/calculators/hvac-valuation/",
    description: "Estimate HVAC company value using SDE multiples.",
  },
  {
    label: "Break-Even Calculator",
    href: "/calculators/hvac-break-even/",
    description: "Estimate required revenue and jobs to break even.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allHvacCalculators.filter((c) => c.href !== excludeHref);
}

export const hvacDataLinks = [
  {
    label: "HVAC Revenue Benchmarks",
    href: "/industries/hvac/#revenue-benchmark",
    description: "Median $2.4M — revenue by technician count and service mix.",
  },
  {
    label: "Are HVAC Businesses Profitable?",
    href: "/industries/hvac/#profitability",
    description: "Average HVAC profit margin 8–16% net (median ~12%), plus cost structure.",
  },
  {
    label: "HVAC Business Owner Salary",
    href: "/industries/hvac/#owner-economics",
    description: "HVAC business owner salary typically $95K–$185K (median ~$145K).",
  },
  {
    label: "HVAC Valuation Multiples",
    href: "/industries/hvac/#valuation",
    description: "SDE, EBITDA, and revenue multiples for HVAC sales.",
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
