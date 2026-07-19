import {
  formatCurrency,
  formatNumber,
  barbershopDataLinks,
  relatedCalculators,
} from "@/lib/industries/barbershop-calculators-shared";

export const meta = {
  title: "Barbershop Break-even Calculator — Revenue & Cuts Needed",
  shortTitle: "Barbershop Break-even Calculator",
  subtitle: "Find the monthly revenue and daily cuts your barbershop needs to cover fixed costs.",
  description:
    "Free barbershop break-even calculator. Find the monthly revenue, cuts, and daily bookings needed to cover fixed costs based on average ticket and variable cost.",
};

export const introContent = {
  lead: "Your barbershop breaks even when contribution from each cut covers fixed costs. This calculator finds the revenue and client volume you need.",
  bullets: [
    "Break-Even Revenue = Fixed Costs ÷ Contribution Margin %",
    "Contribution Margin = 1 − variable cost % (barber commissions + supplies + card fees)",
    "Most new barbershops break even within 12–24 months",
  ],
  audience: "Built for barbershop owners planning capacity and pricing to reach break-even.",
};

export type BreakEvenInputs = {
  monthlyFixedCosts: number;
  averageTicket: number;
  variableCostPct: number;
  daysOpenPerMonth: number;
};

export const defaultInputs: BreakEvenInputs = {
  monthlyFixedCosts: 22000,
  averageTicket: 35,
  variableCostPct: 40,
  daysOpenPerMonth: 26,
};

export const industryBenchmarks = [
  { metric: "Contribution Margin", range: "55 – 65%" },
  { metric: "Variable Cost %", range: "35 – 45%" },
  { metric: "Average Ticket", range: "$25 – $45" },
  { metric: "Time to Break-even", range: "12 – 24 months" },
] as const;

export function calculateBreakEven(inputs: BreakEvenInputs) {
  const contributionMarginPct = 100 - inputs.variableCostPct;
  const contributionPerCut = inputs.averageTicket * (contributionMarginPct / 100);
  const breakEvenRevenue =
    contributionMarginPct > 0 ? inputs.monthlyFixedCosts / (contributionMarginPct / 100) : 0;
  const breakEvenCuts =
    contributionPerCut > 0 ? inputs.monthlyFixedCosts / contributionPerCut : 0;
  const cutsPerDay =
    inputs.daysOpenPerMonth > 0 ? breakEvenCuts / inputs.daysOpenPerMonth : 0;

  return {
    contributionMarginPct,
    contributionPerCut,
    breakEvenRevenue,
    breakEvenCuts,
    cutsPerDay,
    annualBreakEvenRevenue: breakEvenRevenue * 12,
  };
}

export const faqs = [
  {
    question: "How long does it take a barbershop to break even?",
    answer:
      "Most new barbershops break even within 12–24 months once chair utilization reaches 70%+ and a regular client base builds. Strong local marketing and walk-in visibility accelerate the ramp.",
  },
  {
    question: "How do I calculate my barbershop's break-even point?",
    answer:
      "Divide your monthly fixed costs by your contribution margin (1 minus variable cost %). That gives the monthly revenue your barbershop needs; dividing by average ticket gives the number of cuts to break even.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/barbershop-break-even/");
export { barbershopDataLinks, formatCurrency, formatNumber };
