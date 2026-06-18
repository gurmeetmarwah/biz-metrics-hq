export const electricalHubHref = "/industries/electrical/";

export const electricalIndustryAverages = {
  revenue: 2000000,
  marginPct: 10,
  marginRange: "7–13%",
  grossMarginPct: 45,
  technicianPayrollPct: 36,
  materialsPct: 24,
  fleetPct: 7,
  marketingPct: 6,
  overheadPct: 17,
  revenuePerTechnician: 230000,
  revenuePerTechnicianRange: "$165K – $295K",
  technicians: 8,
  jobsPerDay: 4,
  averageServiceTicket: 450,
  laborUtilizationPct: 65,
  laborUtilizationRange: "55 – 75%",
  billableHoursPerWeek: 28,
  sdeMultiple: 2.8,
  revenueMultiple: 0.7,
  ebitdaMultiple: 4.8,
  ownerSalary: 130000,
  startupCostRange: "$175K – $450K",
};

export const allElectricalCalculators = [
  {
    label: "Revenue Per Electrician Calculator",
    href: "/calculators/electrical-revenue-per-electrician/",
    description: "Measure electrician productivity and revenue per field tech.",
  },
  {
    label: "Profit Margin Calculator",
    href: "/calculators/electrical-profit-margin/",
    description: "Calculate net margin and compare to electrical benchmarks.",
  },
  {
    label: "Labor Utilization Calculator",
    href: "/calculators/electrical-labor-utilization/",
    description: "Track billable hours and electrician utilization rates.",
  },
  {
    label: "Business Valuation Calculator",
    href: "/calculators/electrical-valuation/",
    description: "Estimate electrical company value using SDE multiples.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allElectricalCalculators.filter((c) => c.href !== excludeHref);
}

export const electricalDataLinks = [
  {
    label: "Electrical Revenue Benchmarks",
    href: "/industries/electrical/#revenue-benchmark",
    description: "Median $2.0M — revenue by electrician count and service mix.",
  },
  {
    label: "Electrical Profit Margins",
    href: "/industries/electrical/#profitability",
    description: "Net margin tiers, gross margin, and cost structure.",
  },
  {
    label: "Electrical Owner Salary",
    href: "/industries/electrical/#owner-economics",
    description: "What electrical owners earn by company size.",
  },
  {
    label: "Electrical Valuation Multiples",
    href: "/industries/electrical/#valuation",
    description: "SDE, EBITDA, and revenue multiples for electrical sales.",
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
