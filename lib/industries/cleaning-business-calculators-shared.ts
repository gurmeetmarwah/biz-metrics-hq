export const cleaningBusinessHubHref = "/industries/cleaning-business/";

export const cleaningBusinessIndustryAverages = {
  revenue: 500000,
  marginPct: 15,
  marginRange: "10–20%",
  grossMarginPct: 48,
  cleanerPayrollPct: 52,
  suppliesPct: 7,
  fleetPct: 5,
  marketingPct: 8,
  overheadPct: 13,
  revenuePerCleaner: 115000,
  revenuePerCleanerRange: "$80K – $150K",
  cleaners: 6,
  jobsPerCrewPerDay: 6,
  laborUtilizationPct: 72,
  recurringRevenuePct: 65,
  contractRetentionPct: 80,
  customerLtv: 2000,
  annualContractValue: 2400,
  monthlyContractValue: 1500,
  sdeMultiple: 2.4,
  revenueMultiple: 0.6,
  ebitdaMultiple: 4.0,
  ownerSalary: 75000,
  startupCostRange: "$10K – $75K",
};

export const allCleaningBusinessCalculators = [
  {
    label: "Revenue Per Cleaner Calculator",
    href: "/calculators/cleaning-business-revenue-per-cleaner/",
    description: "Measure cleaner productivity and revenue per field employee.",
  },
  {
    label: "Contract Value Calculator",
    href: "/calculators/cleaning-business-contract-value/",
    description: "Model annual contract revenue from residential and commercial accounts.",
  },
  {
    label: "Customer Lifetime Value Calculator",
    href: "/calculators/cleaning-business-customer-lifetime-value/",
    description: "Estimate LTV from contract value, retention, and visit frequency.",
  },
  {
    label: "Profit Margin Calculator",
    href: "/calculators/cleaning-business-profit-margin/",
    description: "Calculate net margin and compare to cleaning business benchmarks.",
  },
  {
    label: "Business Valuation Calculator",
    href: "/calculators/cleaning-business-valuation/",
    description: "Estimate cleaning company value using SDE multiples.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allCleaningBusinessCalculators.filter((c) => c.href !== excludeHref);
}

export const cleaningBusinessDataLinks = [
  {
    label: "Cleaning Business Revenue Benchmarks",
    href: "/industries/cleaning-business/#revenue-benchmark",
    description: "Median $500K — revenue by cleaner count and service mix.",
  },
  {
    label: "Cleaning Business Profit Margins",
    href: "/industries/cleaning-business/#profitability",
    description: "Net margin tiers, gross margin, and cost structure.",
  },
  {
    label: "Cleaning Business Owner Salary",
    href: "/industries/cleaning-business/#owner-economics",
    description: "What cleaning business owners earn by company size.",
  },
  {
    label: "Cleaning Business Valuation Multiples",
    href: "/industries/cleaning-business/#valuation",
    description: "SDE, EBITDA, and revenue multiples for cleaning company sales.",
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
