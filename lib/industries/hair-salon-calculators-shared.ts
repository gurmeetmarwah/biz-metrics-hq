export const hairSalonHubHref = "/industries/beauty/hair-salon/";

export const hairSalonIndustryAverages = {
  revenue: 320000,
  revenueRange: "$250K – $500K",
  netMarginPct: 11,
  netMarginRange: "8 – 15%",
  ownerComp: 65000,
  ownerCompRange: "$40K – $85K",
  sdeMultiple: 2.3,
  sdeMultipleRange: "1.8× – 3.0×",
  revenuePerStylist: 85000,
  revenuePerStylistRange: "$60K – $120K",
  averageTicket: 65,
  averageTicketRange: "$45 – $85",
  chairUtilizationPct: 72,
  chairUtilizationRange: "65 – 80%",
  payrollPct: 47,
  payrollRange: "45 – 50%",
  retailAttachmentPct: 10,
  startupCostRange: "$80K – $250K",
};

export const allHairSalonCalculators = [
  {
    label: "Hair Salon Revenue Calculator",
    href: "/calculators/hair-salon-revenue/",
    description: "Project annual revenue from stylists, average ticket, and appointments per day.",
  },
  {
    label: "Hair Salon Profit Margin Calculator",
    href: "/calculators/hair-salon-profit-margin/",
    description: "Model net margin from service revenue, payroll, product COGS, and overhead.",
  },
  {
    label: "Hair Salon Startup Cost Calculator",
    href: "/calculators/hair-salon-startup-cost/",
    description: "Estimate total launch investment — buildout, stations, equipment, and inventory.",
  },
  {
    label: "Hair Salon Break-even Calculator",
    href: "/calculators/hair-salon-break-even/",
    description: "Find the daily bookings and revenue needed to cover fixed costs.",
  },
  {
    label: "Hair Salon Chair Utilization Calculator",
    href: "/calculators/hair-salon-chair-utilization/",
    description: "Measure booked vs available chair hours to spot idle capacity.",
  },
  {
    label: "Hair Salon Revenue per Stylist Calculator",
    href: "/calculators/hair-salon-revenue-per-stylist/",
    description: "Benchmark each stylist's service revenue against industry ranges.",
  },
  {
    label: "Hair Salon Payroll Percentage Calculator",
    href: "/calculators/hair-salon-payroll-percentage/",
    description: "Track payroll and commissions as a percentage of revenue.",
  },
  {
    label: "Hair Salon Valuation Calculator",
    href: "/calculators/hair-salon-valuation/",
    description: "Estimate salon value using SDE and industry sale multiples.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allHairSalonCalculators.filter((c) => c.href !== excludeHref);
}

export const hairSalonDataLinks = [
  {
    label: "Hair Salon Benchmarks",
    href: "/industries/beauty/hair-salon/#benchmarks",
    description: "Median $320K revenue — average ticket, revenue per stylist, and utilization ranges.",
  },
  {
    label: "Hair Salon Profit Margins",
    href: "/industries/beauty/hair-salon/#profitability",
    description: "Healthy range 8–15% net margin with strong retail attachment.",
  },
  {
    label: "Hair Salon Owner Salary",
    href: "/industries/beauty/hair-salon/#owner-salary",
    description: "Owner-operator median $65K; established salons $90K–$140K.",
  },
  {
    label: "Hair Salon Valuation",
    href: "/industries/beauty/hair-salon/#valuation",
    description: "SDE multiples 1.8×–3.0× at transaction.",
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
