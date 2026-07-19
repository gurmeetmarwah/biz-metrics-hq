import {
  formatCurrency,
  formatNumber,
  nailSalonDataLinks,
  relatedCalculators,
} from "@/lib/industries/nail-salon-calculators-shared";

export const meta = {
  title: "Nail Salon Break-even Calculator — Revenue & Appointments Needed",
  shortTitle: "Nail Salon Break-even Calculator",
  subtitle: "Find the monthly revenue and appointment volume your nail salon needs to cover fixed costs.",
  description:
    "Free nail salon break-even calculator. Find the monthly revenue, appointments, and daily bookings needed to cover fixed costs based on your average ticket and variable cost.",
};

export const introContent = {
  lead: "Your nail salon breaks even when contribution from each ticket covers fixed costs. This calculator finds the revenue and appointment volume you need.",
  bullets: [
    "Break-Even Revenue = Fixed Costs ÷ Contribution Margin %",
    "Contribution Margin = 1 − variable cost % (supplies + card fees)",
    "Most new nail salons break even within 10–20 months",
  ],
  audience: "Built for nail salon owners planning capacity and pricing to reach break-even.",
};

export type BreakEvenInputs = {
  monthlyFixedCosts: number;
  averageTicket: number;
  variableCostPct: number;
  daysOpenPerMonth: number;
};

export const defaultInputs: BreakEvenInputs = {
  monthlyFixedCosts: 18000,
  averageTicket: 45,
  variableCostPct: 22,
  daysOpenPerMonth: 26,
};

export const industryBenchmarks = [
  { metric: "Contribution Margin", range: "75 – 82%" },
  { metric: "Variable Cost %", range: "18 – 25%" },
  { metric: "Average Ticket", range: "$30 – $60" },
  { metric: "Time to Break-even", range: "10 – 20 months" },
] as const;

export function calculateBreakEven(inputs: BreakEvenInputs) {
  const contributionMarginPct = 100 - inputs.variableCostPct;
  const contributionPerTicket = inputs.averageTicket * (contributionMarginPct / 100);
  const breakEvenRevenue =
    contributionMarginPct > 0 ? inputs.monthlyFixedCosts / (contributionMarginPct / 100) : 0;
  const breakEvenAppointments =
    contributionPerTicket > 0 ? inputs.monthlyFixedCosts / contributionPerTicket : 0;
  const appointmentsPerDay =
    inputs.daysOpenPerMonth > 0 ? breakEvenAppointments / inputs.daysOpenPerMonth : 0;

  return {
    contributionMarginPct,
    contributionPerTicket,
    breakEvenRevenue,
    breakEvenAppointments,
    appointmentsPerDay,
    annualBreakEvenRevenue: breakEvenRevenue * 12,
  };
}

export const faqs = [
  {
    question: "How long does it take a nail salon to break even?",
    answer:
      "Most new nail salons break even within 10–20 months once station utilization reaches 65–82% and a repeat client base builds. Salons with strong 2–4 week rebooking cadence reach break-even sooner.",
  },
  {
    question: "How do I calculate my nail salon's break-even point?",
    answer:
      "Divide your monthly fixed costs by your contribution margin (1 minus variable cost %). That gives the monthly revenue your nail salon needs; dividing by average ticket gives the number of appointments to break even.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/nail-salon-break-even/");
export { nailSalonDataLinks, formatCurrency, formatNumber };
