import {
  formatCurrency,
  formatNumber,
  hairSalonDataLinks,
  relatedCalculators,
} from "@/lib/industries/hair-salon-calculators-shared";

export const meta = {
  title: "Hair Salon Break-even Calculator — Revenue & Appointments Needed",
  shortTitle: "Hair Salon Break-even Calculator",
  subtitle: "Find the monthly revenue and appointment volume your salon needs to cover fixed costs.",
  description:
    "Free hair salon break-even calculator. Find the monthly revenue, appointments, and daily bookings needed to cover fixed costs based on your average ticket and variable cost.",
};

export const introContent = {
  lead: "Your hair salon breaks even when contribution from each ticket covers fixed costs. This calculator finds the revenue and appointment volume you need.",
  bullets: [
    "Break-Even Revenue = Fixed Costs ÷ Contribution Margin %",
    "Contribution Margin = 1 − variable cost % (product + card fees)",
    "Most new salons break even within 12–24 months",
  ],
  audience: "Built for salon owners planning capacity and pricing to reach break-even.",
};

export type BreakEvenInputs = {
  monthlyFixedCosts: number;
  averageTicket: number;
  variableCostPct: number;
  daysOpenPerMonth: number;
};

export const defaultInputs: BreakEvenInputs = {
  monthlyFixedCosts: 22000,
  averageTicket: 65,
  variableCostPct: 20,
  daysOpenPerMonth: 26,
};

export const industryBenchmarks = [
  { metric: "Contribution Margin", range: "75 – 85%" },
  { metric: "Variable Cost %", range: "15 – 25%" },
  { metric: "Average Ticket", range: "$45 – $85" },
  { metric: "Time to Break-even", range: "12 – 24 months" },
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
    question: "How long does it take a hair salon to break even?",
    answer:
      "Most new hair salons break even within 12–24 months once chair utilization reaches 65–80% and a repeat client base builds. Salons that ramp bookings and rebooking quickly reach break-even sooner.",
  },
  {
    question: "How do I calculate my salon's break-even point?",
    answer:
      "Divide your monthly fixed costs by your contribution margin (1 minus variable cost %). That gives the monthly revenue your hair salon needs; dividing by average ticket gives the number of appointments to break even.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/hair-salon-break-even/");
export { hairSalonDataLinks, formatCurrency, formatNumber };
