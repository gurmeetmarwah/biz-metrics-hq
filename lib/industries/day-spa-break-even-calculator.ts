import {
  formatCurrency,
  formatNumber,
  daySpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/day-spa-calculators-shared";

export const meta = {
  title: "Day Spa Break-even Calculator — Revenue & Appointments Needed",
  shortTitle: "Day Spa Break-even Calculator",
  subtitle: "Find the monthly revenue and appointment volume your day spa needs to cover fixed costs.",
  description:
    "Free day spa break-even calculator. Find the monthly revenue, appointments, and daily bookings needed to cover fixed costs based on average treatment value and variable cost.",
};

export const introContent = {
  lead: "Your day spa breaks even when contribution from each appointment covers fixed costs. This calculator finds the revenue and appointment volume you need.",
  bullets: [
    "Break-Even Revenue = Fixed Costs ÷ Contribution Margin %",
    "Contribution Margin = 1 − variable cost % (therapist commissions + supplies + card fees)",
    "Most new day spas break even within 18–30 months",
  ],
  audience: "Built for day spa owners planning capacity and pricing to reach break-even.",
};

export type BreakEvenInputs = {
  monthlyFixedCosts: number;
  averageTreatment: number;
  variableCostPct: number;
  daysOpenPerMonth: number;
};

export const defaultInputs: BreakEvenInputs = {
  monthlyFixedCosts: 35000,
  averageTreatment: 175,
  variableCostPct: 45,
  daysOpenPerMonth: 26,
};

export const industryBenchmarks = [
  { metric: "Contribution Margin", range: "50 – 60%" },
  { metric: "Variable Cost %", range: "40 – 50%" },
  { metric: "Average Treatment", range: "$120 – $250" },
  { metric: "Time to Break-even", range: "18 – 30 months" },
] as const;

export function calculateBreakEven(inputs: BreakEvenInputs) {
  const contributionMarginPct = 100 - inputs.variableCostPct;
  const contributionPerAppointment = inputs.averageTreatment * (contributionMarginPct / 100);
  const breakEvenRevenue =
    contributionMarginPct > 0 ? inputs.monthlyFixedCosts / (contributionMarginPct / 100) : 0;
  const breakEvenAppointments =
    contributionPerAppointment > 0 ? inputs.monthlyFixedCosts / contributionPerAppointment : 0;
  const appointmentsPerDay =
    inputs.daysOpenPerMonth > 0 ? breakEvenAppointments / inputs.daysOpenPerMonth : 0;

  return {
    contributionMarginPct,
    contributionPerAppointment,
    breakEvenRevenue,
    breakEvenAppointments,
    appointmentsPerDay,
    annualBreakEvenRevenue: breakEvenRevenue * 12,
  };
}

export const faqs = [
  {
    question: "How long does it take a day spa to break even?",
    answer:
      "Most new day spas break even within 18–30 months once treatment room utilization reaches 60%+ and a recurring membership base builds. Strong local marketing and a compelling membership offer accelerate the ramp.",
  },
  {
    question: "How do I calculate my day spa's break-even point?",
    answer:
      "Divide your monthly fixed costs by your contribution margin (1 minus variable cost %). That gives the monthly revenue your day spa needs; dividing by average treatment value gives the number of appointments to break even.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/day-spa-break-even/");
export { daySpaDataLinks, formatCurrency, formatNumber };
