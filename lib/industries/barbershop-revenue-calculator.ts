import {
  formatCurrency,
  formatNumber,
  barbershopDataLinks,
  relatedCalculators,
} from "@/lib/industries/barbershop-calculators-shared";

export const meta = {
  title: "Barbershop Revenue Calculator & Annual Sales Estimator",
  shortTitle: "Barbershop Revenue Calculator",
  subtitle: "Project annual barbershop revenue from barbers, client volume, and average ticket.",
  description:
    "Free barbershop revenue calculator. Estimate annual shop revenue from barbers, clients per day, average ticket, and membership revenue.",
};

export const introContent = {
  lead: "Barbershop revenue is driven by barber count, daily client volume, and average ticket. This calculator projects annual service and membership revenue for your shop.",
  bullets: [
    "Revenue = Barbers × Clients/Day × Days/Week × 50 Weeks × Average Ticket",
    "Membership and package revenue typically add 8–15% on top of service revenue",
    "Median independent barbershop revenue is ~$280K ($180K–$400K range)",
  ],
  audience: "Built for barbershop owners and buyers sizing revenue potential from staffing and service mix.",
};

export type RevenueInputs = {
  barbers: number;
  clientsPerBarberPerDay: number;
  daysOpenPerWeek: number;
  averageTicket: number;
  membershipRevenuePct: number;
};

export const defaultInputs: RevenueInputs = {
  barbers: 4,
  clientsPerBarberPerDay: 8,
  daysOpenPerWeek: 5,
  averageTicket: 35,
  membershipRevenuePct: 10,
};

export const industryBenchmarks = [
  { metric: "Annual Revenue", range: "$180K – $400K" },
  { metric: "Average Ticket", range: "$25 – $45" },
  { metric: "Revenue per Barber", range: "$55K – $95K" },
  { metric: "Membership Revenue", range: "8 – 15%" },
] as const;

const WEEKS_PER_YEAR = 50;

export function calculateRevenue(inputs: RevenueInputs) {
  const annualClients =
    inputs.barbers *
    inputs.clientsPerBarberPerDay *
    inputs.daysOpenPerWeek *
    WEEKS_PER_YEAR;
  const serviceRevenue = annualClients * inputs.averageTicket;
  const membershipRevenue = serviceRevenue * (inputs.membershipRevenuePct / 100);
  const totalRevenue = serviceRevenue + membershipRevenue;
  const revenuePerBarber = inputs.barbers > 0 ? totalRevenue / inputs.barbers : 0;
  const monthlyRevenue = totalRevenue / 12;

  return {
    annualClients,
    serviceRevenue,
    membershipRevenue,
    totalRevenue,
    revenuePerBarber,
    monthlyRevenue,
  };
}

export const faqs = [
  {
    question: "How much revenue does a barbershop generate?",
    answer:
      "A typical independent barbershop generates $180K–$400K in annual revenue, with a median around $280K. Revenue scales with barber count, daily client volume, average ticket, and membership program enrollment.",
  },
  {
    question: "How do I estimate my barbershop's annual revenue?",
    answer:
      "Multiply your number of barbers by clients per day, days open per week, and about 50 working weeks, then multiply by your average ticket. Add 8–15% for membership and package revenue to estimate total barbershop revenue.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/barbershop-revenue/");
export { barbershopDataLinks, formatCurrency, formatNumber };
