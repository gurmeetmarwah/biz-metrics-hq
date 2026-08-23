export const pestControlHubHref = "/industries/pest-control/";

export const pestControlIndustryAverages = {
  revenue: 900000,
  marginPct: 18,
  marginRange: "15–25%",
  grossMarginPct: 62,
  technicianPayrollPct: 30,
  chemicalsPct: 11,
  fleetPct: 8,
  marketingPct: 11,
  overheadPct: 22,
  revenuePerTechnician: 160000,
  revenuePerTechnicianRange: "$120K – $200K",
  technicians: 5,
  stopsPerDay: 14,
  averageServiceTicket: 120,
  recurringRevenuePct: 80,
  contractRetentionPct: 85,
  customerLtv: 2500,
  annualContractValue: 500,
  sdeMultiple: 3.2,
  revenueMultiple: 1.1,
  ebitdaMultiple: 5.5,
  ownerSalary: 110000,
  startupCostRange: "$50K – $150K",
};

export const allPestControlCalculators = [
  {
    label: "Route Density Calculator",
    href: "/calculators/pest-control-route-density/",
    description: "Measure stops per technician and route throughput efficiency.",
  },
  {
    label: "Customer Lifetime Value Calculator",
    href: "/calculators/pest-control-customer-lifetime-value/",
    description: "Estimate LTV from contract value, retention, and upsells.",
  },
  {
    label: "Increase Pest Control Revenue Calculator",
    href: "/calculators/pest-control-recurring-revenue/",
    description: "Increase pest control revenue — model subscriptions and recurring mix.",
  },
  {
    label: "Average Pest Control Profit Margin Calculator",
    href: "/calculators/pest-control-profit-margin/",
    description: "See the average pest control business profit margin vs your numbers.",
  },
  {
    label: "Business Valuation Calculator",
    href: "/calculators/pest-control-valuation/",
    description: "Estimate pest control company value using SDE multiples.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allPestControlCalculators.filter((c) => c.href !== excludeHref);
}

export const pestControlDataLinks = [
  {
    label: "How to Increase Pest Control Revenue",
    href: "/industries/pest-control/#revenue-benchmark",
    description: "Median $900K — growth levers for routes, recurring mix, and commercial.",
  },
  {
    label: "Average Pest Control Business Profit Margin",
    href: "/industries/pest-control/#profitability",
    description: "Typical 15–25% net (median ~18%) — margin tiers and cost structure.",
  },
  {
    label: "Pest Control Owner Salary",
    href: "/industries/pest-control/#owner-economics",
    description: "What pest control owners earn by company size.",
  },
  {
    label: "Pest Control Valuation Multiples",
    href: "/industries/pest-control/#valuation",
    description: "SDE, EBITDA, and revenue multiples for pest control sales.",
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
