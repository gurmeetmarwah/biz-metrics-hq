export const barbershopHubHref = "/industries/beauty/barbershop/";

export const barbershopIndustryAverages = {
  revenue: 280000,
  revenueRange: "$180K – $400K",
  netMarginPct: 16,
  netMarginRange: "12 – 20%",
  ownerComp: 65000,
  ownerCompRange: "$45K – $90K",
  sdeMultiple: 2.0,
  sdeMultipleRange: "1.5× – 2.5×",
  revenuePerBarber: 75000,
  revenuePerBarberRange: "$55K – $95K",
  revenuePerChair: 70000,
  revenuePerChairRange: "$40K – $80K",
  averageTicket: 35,
  averageTicketRange: "$25 – $45",
  chairUtilizationPct: 78,
  chairUtilizationRange: "70 – 85%",
  payrollPct: 44,
  payrollRange: "40 – 48%",
  clientLtv: 2750,
  clientLtvRange: "$1.5K – $4K",
  startupCostRange: "$60K – $180K",
  membershipMrr: 8000,
};

export const allBarbershopCalculators = [
  {
    label: "Barbershop Revenue Calculator",
    href: "/calculators/barbershop-revenue/",
    description: "Project annual revenue from barbers, clients per day, and average ticket.",
  },
  {
    label: "Barbershop Profit Margin Calculator",
    href: "/calculators/barbershop-profit-margin/",
    description: "Model net margin from service revenue, barber payroll, supplies, and overhead.",
  },
  {
    label: "Barbershop Startup Cost Calculator",
    href: "/calculators/barbershop-startup-cost/",
    description: "Estimate total launch investment — buildout, chairs, equipment, and working capital.",
  },
  {
    label: "Barbershop Break-even Calculator",
    href: "/calculators/barbershop-break-even/",
    description: "Find the daily cuts and revenue needed to cover fixed costs.",
  },
  {
    label: "Barbershop Valuation Calculator",
    href: "/calculators/barbershop-valuation/",
    description: "Estimate shop value using SDE and barbershop industry multiples.",
  },
  {
    label: "Revenue per Barber Calculator",
    href: "/calculators/barbershop-revenue-per-barber/",
    description: "Benchmark each barber's annual service revenue against industry ranges.",
  },
  {
    label: "Revenue per Chair Calculator",
    href: "/calculators/barbershop-revenue-per-chair/",
    description: "Measure revenue productivity per chair annually.",
  },
  {
    label: "Chair Utilization Calculator",
    href: "/calculators/barbershop-chair-utilization/",
    description: "Measure booked vs available chair hours to spot idle capacity.",
  },
  {
    label: "Payroll Percentage Calculator",
    href: "/calculators/barbershop-payroll-percentage/",
    description: "Track barber wages and commissions as a percentage of revenue.",
  },
  {
    label: "Average Ticket Calculator",
    href: "/calculators/barbershop-average-ticket/",
    description: "Model average service price from menu mix and grooming upsells.",
  },
  {
    label: "Client Lifetime Value Calculator",
    href: "/calculators/barbershop-client-lifetime-value/",
    description: "Estimate total revenue per client over their relationship with your shop.",
  },
  {
    label: "Membership Revenue Calculator",
    href: "/calculators/barbershop-membership-revenue/",
    description: "Model recurring revenue from membership plans and package enrollments.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allBarbershopCalculators.filter((c) => c.href !== excludeHref);
}

export const barbershopDataLinks = [
  {
    label: "Barbershop Benchmarks",
    href: "/industries/beauty/barbershop/#benchmarks",
    description: "Median $280K revenue — average ticket, revenue per barber, and utilization ranges.",
  },
  {
    label: "Barbershop Profit Margins",
    href: "/industries/beauty/barbershop/#profitability",
    description: "Healthy range 12–20% net margin with strong chair utilization.",
  },
  {
    label: "Barbershop Owner Salary",
    href: "/industries/beauty/barbershop/#owner-salary",
    description: "Owner-operator median $65K; established shops $90K–$140K.",
  },
  {
    label: "Barbershop Valuation",
    href: "/industries/beauty/barbershop/#valuation",
    description: "SDE multiples 1.5×–2.5× at transaction.",
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
