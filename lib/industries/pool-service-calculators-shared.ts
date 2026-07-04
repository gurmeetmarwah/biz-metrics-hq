export const poolServiceHubHref = "/industries/pool-service/";

export const poolServiceIndustryAverages = {
  revenue: 950000,
  marginPct: 22,
  marginRange: "18–26%",
  grossMarginPct: 65,
  technicianPayrollPct: 32,
  chemicalsPct: 10,
  fleetPct: 8,
  marketingPct: 8,
  overheadPct: 20,
  revenuePerTechnician: 190000,
  revenuePerTechnicianRange: "$160K – $220K",
  technicians: 5,
  poolsPerWeek: 65,
  stopsPerDay: 15,
  averageServiceTicket: 115,
  monthlyContractValue: 125,
  recurringRevenuePct: 80,
  contractRetentionPct: 88,
  customerLtv: 4200,
  monthlyRecurringRevenue: 58000,
  sdeMultiple: 3.6,
  revenueMultiple: 1.2,
  ebitdaMultiple: 5.8,
  ownerSalary: 135000,
  startupCostRange: "$65K – $165K",
  grossProfitPerRoute: 75000,
};

export const allPoolServiceCalculators = [
  {
    label: "Pool Service Startup Cost Calculator",
    href: "/calculators/pool-service-startup-cost/",
    description: "Estimate total launch investment — vehicle, equipment, chemicals, and working capital.",
  },
  {
    label: "Pool Service Profit Calculator",
    href: "/calculators/pool-service-profit/",
    description: "Model net margin from revenue, labor, chemicals, and fleet costs.",
  },
  {
    label: "Pool Service Valuation Calculator",
    href: "/calculators/pool-service-valuation/",
    description: "Estimate company value using SDE multiples and recurring revenue quality.",
  },
  {
    label: "Monthly Recurring Revenue Calculator",
    href: "/calculators/pool-service-monthly-recurring-revenue/",
    description: "Project MRR from active contracts and average monthly ticket.",
  },
  {
    label: "Route Profitability Calculator",
    href: "/calculators/pool-service-route-profitability/",
    description: "Model gross profit per route from stops, ticket, and drive time.",
  },
  {
    label: "Customer Lifetime Value Calculator",
    href: "/calculators/pool-service-customer-lifetime-value/",
    description: "Estimate LTV from contract value, retention, and repair upsells.",
  },
  {
    label: "Pool Service Break-Even Calculator",
    href: "/calculators/pool-service-break-even/",
    description: "Find monthly contracts and revenue needed to cover fixed costs.",
  },
  {
    label: "Technician Revenue Calculator",
    href: "/calculators/pool-service-technician-revenue/",
    description: "Project revenue per technician from pools serviced and average ticket.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allPoolServiceCalculators.filter((c) => c.href !== excludeHref);
}

export const poolServiceDataLinks = [
  {
    label: "Pool Service Revenue Benchmarks",
    href: "/industries/pool-service/#revenue-benchmark",
    description: "Median $950K — revenue percentiles and service mix breakdown.",
  },
  {
    label: "Pool Service Profit Margins",
    href: "/industries/pool-service/#profitability",
    description: "Net margin tiers, gross margin, and cost structure.",
  },
  {
    label: "Pool Service MRR Metrics",
    href: "/industries/pool-service/#recurring-revenue",
    description: "Monthly recurring revenue, retention, and contract economics.",
  },
  {
    label: "Pool Service Valuation Multiples",
    href: "/industries/pool-service/#valuation",
    description: "SDE, EBITDA, and revenue multiples for pool service sales.",
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
