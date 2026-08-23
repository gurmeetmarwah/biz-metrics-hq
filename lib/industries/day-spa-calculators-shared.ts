export const daySpaHubHref = "/industries/beauty/day-spa/";

export const daySpaIndustryAverages = {
  revenue: 750000,
  revenueRange: "$400K – $1.2M",
  netMarginPct: 14,
  netMarginRange: "10 – 18%",
  ebitdaMarginPct: 16,
  ebitdaMarginRange: "12 – 20%",
  ownerComp: 110000,
  ownerCompRange: "$70K – $160K",
  sdeMultiple: 2.8,
  sdeMultipleRange: "2.0× – 3.5×",
  revenuePerTherapist: 135000,
  revenuePerTherapistRange: "$110K – $200K",
  revenuePerTreatmentRoom: 135000,
  revenuePerTreatmentRoomRange: "$90K – $180K",
  averageTreatment: 175,
  averageTreatmentRange: "$120 – $250",
  roomUtilizationPct: 69,
  roomUtilizationRange: "60 – 78%",
  payrollPct: 46,
  payrollRange: "42 – 50%",
  clientLtv: 5000,
  clientLtvRange: "$2.5K – $7.5K",
  startupCostRange: "$150K – $500K",
  membershipMrr: 25000,
};

export const allDaySpaCalculators = [
  {
    label: "Spa Revenue Calculator",
    href: "/calculators/day-spa-revenue/",
    description: "Free spa revenue calculator — project annual day spa sales.",
  },
  {
    label: "Day Spa Profit Margin Calculator",
    href: "/calculators/day-spa-profit-margin/",
    description: "Model net margin from service revenue, therapist payroll, supplies, and overhead.",
  },
  {
    label: "Day Spa EBITDA Calculator",
    href: "/calculators/day-spa-ebitda/",
    description: "Calculate EBITDA margin from revenue and operating expense structure.",
  },
  {
    label: "Day Spa Startup Cost Calculator",
    href: "/calculators/day-spa-startup-cost/",
    description: "Estimate total launch investment — buildout, treatment rooms, equipment, and working capital.",
  },
  {
    label: "Day Spa Break-even Calculator",
    href: "/calculators/day-spa-break-even/",
    description: "Find the monthly revenue and appointments needed to cover fixed costs.",
  },
  {
    label: "Day Spa Valuation Calculator",
    href: "/calculators/day-spa-valuation/",
    description: "Estimate spa value using SDE and day spa industry multiples.",
  },
  {
    label: "Revenue per Therapist Calculator",
    href: "/calculators/day-spa-revenue-per-therapist/",
    description: "Benchmark each therapist's annual service revenue against industry ranges.",
  },
  {
    label: "Revenue per Treatment Room Calculator",
    href: "/calculators/day-spa-revenue-per-treatment-room/",
    description: "Measure revenue productivity per treatment room annually.",
  },
  {
    label: "Client Lifetime Value Calculator",
    href: "/calculators/day-spa-client-lifetime-value/",
    description: "Estimate total revenue per client over their relationship with your spa.",
  },
  {
    label: "Treatment Room Utilization Calculator",
    href: "/calculators/day-spa-treatment-room-utilization/",
    description: "Measure booked vs available room hours to spot idle capacity.",
  },
  {
    label: "Membership Revenue Calculator",
    href: "/calculators/day-spa-membership-revenue/",
    description: "Model recurring revenue from membership plans and package enrollments.",
  },
  {
    label: "Payroll Percentage Calculator",
    href: "/calculators/day-spa-payroll-percentage/",
    description: "Track therapist wages and commissions as a percentage of revenue.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allDaySpaCalculators.filter((c) => c.href !== excludeHref);
}

export const daySpaDataLinks = [
  {
    label: "Day Spa Benchmarks",
    href: "/industries/beauty/day-spa/#benchmarks",
    description: "Median $750K revenue — treatment value, revenue per therapist, and utilization ranges.",
  },
  {
    label: "Day Spa Profit Margins",
    href: "/industries/beauty/day-spa/#profitability",
    description: "Healthy range 10–18% net margin with strong membership volume.",
  },
  {
    label: "Day Spa Owner Income",
    href: "/industries/beauty/day-spa/#owner-salary",
    description: "Owner-operator median $110K; established spas $120K–$180K.",
  },
  {
    label: "Day Spa Valuation",
    href: "/industries/beauty/day-spa/#valuation",
    description: "SDE multiples 2.0×–3.5× at transaction.",
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

export function formatMultiple(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}×`;
}

export { formatCurrency } from "@/lib/numbers";
