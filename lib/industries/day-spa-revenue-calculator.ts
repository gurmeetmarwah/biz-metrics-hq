import {
  formatCurrency,
  formatNumber,
  daySpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/day-spa-calculators-shared";

export const meta = {
  title: "Day Spa Revenue Calculator & Annual Sales Estimator",
  shortTitle: "Day Spa Revenue Calculator",
  subtitle: "Project annual day spa revenue from therapists, appointment volume, and average ticket.",
  description:
    "Free day spa revenue calculator. Estimate annual spa revenue from therapists, appointments per day, average treatment value, and membership revenue.",
};

export const introContent = {
  lead: "Day spa revenue is driven by therapist count, appointment volume, and average ticket. This calculator projects annual service and membership revenue for your spa.",
  bullets: [
    "Revenue = Therapists × Appointments/Day × Days/Week × 50 Weeks × Average Treatment",
    "Membership and package revenue typically add 10–20% on top of service revenue",
    "Median independent day spa revenue is ~$750K ($400K–$1.2M range)",
  ],
  audience: "Built for day spa owners and buyers sizing revenue potential from staffing and service mix.",
};

export type RevenueInputs = {
  therapists: number;
  appointmentsPerTherapistPerDay: number;
  daysOpenPerWeek: number;
  averageTreatment: number;
  membershipRevenuePct: number;
};

export const defaultInputs: RevenueInputs = {
  therapists: 6,
  appointmentsPerTherapistPerDay: 5,
  daysOpenPerWeek: 6,
  averageTreatment: 175,
  membershipRevenuePct: 15,
};

export const industryBenchmarks = [
  { metric: "Annual Revenue", range: "$400K – $1.2M" },
  { metric: "Average Treatment", range: "$120 – $250" },
  { metric: "Revenue per Therapist", range: "$110K – $200K" },
  { metric: "Membership Revenue", range: "10 – 20%" },
] as const;

const WEEKS_PER_YEAR = 50;

export function calculateRevenue(inputs: RevenueInputs) {
  const annualAppointments =
    inputs.therapists *
    inputs.appointmentsPerTherapistPerDay *
    inputs.daysOpenPerWeek *
    WEEKS_PER_YEAR;
  const serviceRevenue = annualAppointments * inputs.averageTreatment;
  const membershipRevenue = serviceRevenue * (inputs.membershipRevenuePct / 100);
  const totalRevenue = serviceRevenue + membershipRevenue;
  const revenuePerTherapist = inputs.therapists > 0 ? totalRevenue / inputs.therapists : 0;
  const monthlyRevenue = totalRevenue / 12;

  return {
    annualAppointments,
    serviceRevenue,
    membershipRevenue,
    totalRevenue,
    revenuePerTherapist,
    monthlyRevenue,
  };
}

export const faqs = [
  {
    question: "How much revenue does a day spa generate?",
    answer:
      "A typical independent day spa generates $400K–$1.2M in annual revenue, with a median around $750K. Revenue scales with therapist count, appointment volume, average ticket, and membership program enrollment.",
  },
  {
    question: "How do I estimate my day spa's annual revenue?",
    answer:
      "Multiply your number of therapists by appointments per day, days open per week, and about 50 working weeks, then multiply by your average treatment value. Add 10–20% for membership and package revenue to estimate total day spa revenue.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/day-spa-revenue/");
export { daySpaDataLinks, formatCurrency, formatNumber };
