export const nailSalonHubHref = "/industries/beauty/nail-salon/";

export const nailSalonIndustryAverages = {
  revenue: 300000,
  revenueRange: "$200K – $450K",
  netMarginPct: 13,
  netMarginRange: "10 – 17%",
  ownerComp: 65000,
  ownerCompRange: "$45K – $95K",
  sdeMultiple: 2.1,
  sdeMultipleRange: "1.6× – 2.6×",
  revenuePerTechnician: 70000,
  revenuePerTechnicianRange: "$50K – $90K",
  averageTicket: 45,
  averageTicketRange: "$30 – $60",
  stationUtilizationPct: 73,
  stationUtilizationRange: "65 – 82%",
  payrollPct: 46,
  payrollRange: "42 – 50%",
  retailAttachmentPct: 5,
  clientRetentionPct: 68,
  startupCostRange: "$70K – $180K",
};

export const allNailSalonCalculators = [
  {
    label: "Nail Salon Revenue Calculator",
    href: "/calculators/nail-salon-revenue/",
    description: "Project annual revenue from technicians, average ticket, and appointments per day.",
  },
  {
    label: "Nail Salon Profit Margin Calculator",
    href: "/calculators/nail-salon-profit-margin/",
    description: "Model net margin from service revenue, payroll, supplies, and overhead.",
  },
  {
    label: "Nail Salon Startup Cost Calculator",
    href: "/calculators/nail-salon-startup-cost/",
    description: "Estimate total launch investment — buildout, stations, ventilation, and inventory.",
  },
  {
    label: "Nail Salon Break-even Calculator",
    href: "/calculators/nail-salon-break-even/",
    description: "Find the daily appointments and revenue needed to cover fixed costs.",
  },
  {
    label: "Nail Salon Valuation Calculator",
    href: "/calculators/nail-salon-valuation/",
    description: "Estimate salon value using SDE and industry sale multiples.",
  },
  {
    label: "Revenue per Nail Technician Calculator",
    href: "/calculators/nail-salon-revenue-per-technician/",
    description: "Benchmark each technician's service revenue against industry ranges.",
  },
  {
    label: "Nail Salon Payroll Percentage Calculator",
    href: "/calculators/nail-salon-payroll-percentage/",
    description: "Track payroll and commissions as a percentage of revenue.",
  },
  {
    label: "Client Lifetime Value Calculator",
    href: "/calculators/nail-salon-client-lifetime-value/",
    description: "Estimate total revenue per client over their relationship with your salon.",
  },
  {
    label: "Average Ticket Calculator",
    href: "/calculators/nail-salon-average-ticket/",
    description: "Model average service price from menu mix and upsell attachment.",
  },
  {
    label: "Station Utilization Calculator",
    href: "/calculators/nail-salon-station-utilization/",
    description: "Measure booked vs available station hours to spot idle capacity.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allNailSalonCalculators.filter((c) => c.href !== excludeHref);
}

export const nailSalonDataLinks = [
  {
    label: "Nail Salon Benchmarks",
    href: "/industries/beauty/nail-salon/#benchmarks",
    description: "Median $300K revenue — average ticket, revenue per technician, and utilization ranges.",
  },
  {
    label: "Nail Salon Profit Margins",
    href: "/industries/beauty/nail-salon/#profitability",
    description: "Healthy range 10–17% net margin with strong rebooking cadence.",
  },
  {
    label: "Nail Salon Owner Salary",
    href: "/industries/beauty/nail-salon/#owner-salary",
    description: "Owner-operator median $65K; established salons $90K–$150K.",
  },
  {
    label: "Nail Salon Valuation",
    href: "/industries/beauty/nail-salon/#valuation",
    description: "SDE multiples 1.6×–2.6× at transaction.",
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
