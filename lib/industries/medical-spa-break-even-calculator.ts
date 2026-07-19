import {
  formatCurrency,
  formatNumber,
  medicalSpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/medical-spa-calculators-shared";

export const meta = {
  title: "Medical Spa Break-even Calculator — Revenue & Treatments Needed",
  shortTitle: "Medical Spa Break-even Calculator",
  subtitle: "Find the monthly revenue and treatment volume your medical spa needs to cover fixed costs.",
  description:
    "Free medical spa break-even calculator. Find the monthly revenue, treatments, and daily bookings needed to cover fixed costs based on average treatment value and variable cost.",
};

export const introContent = {
  lead: "Your medical spa breaks even when contribution from each treatment covers fixed costs. This calculator finds the revenue and treatment volume you need.",
  bullets: [
    "Break-Even Revenue = Fixed Costs ÷ Contribution Margin %",
    "Contribution Margin = 1 − variable cost % (injectables + supplies + card fees)",
    "Most new medical spas break even within 18–36 months",
  ],
  audience: "Built for medical spa owners planning capacity and pricing to reach break-even.",
};

export type BreakEvenInputs = {
  monthlyFixedCosts: number;
  averageTreatment: number;
  variableCostPct: number;
  daysOpenPerMonth: number;
};

export const defaultInputs: BreakEvenInputs = {
  monthlyFixedCosts: 55000,
  averageTreatment: 400,
  variableCostPct: 35,
  daysOpenPerMonth: 26,
};

export const industryBenchmarks = [
  { metric: "Contribution Margin", range: "60 – 70%" },
  { metric: "Variable Cost %", range: "30 – 40%" },
  { metric: "Average Treatment", range: "$250 – $600" },
  { metric: "Time to Break-even", range: "18 – 36 months" },
] as const;

export function calculateBreakEven(inputs: BreakEvenInputs) {
  const contributionMarginPct = 100 - inputs.variableCostPct;
  const contributionPerTreatment = inputs.averageTreatment * (contributionMarginPct / 100);
  const breakEvenRevenue =
    contributionMarginPct > 0 ? inputs.monthlyFixedCosts / (contributionMarginPct / 100) : 0;
  const breakEvenTreatments =
    contributionPerTreatment > 0 ? inputs.monthlyFixedCosts / contributionPerTreatment : 0;
  const treatmentsPerDay =
    inputs.daysOpenPerMonth > 0 ? breakEvenTreatments / inputs.daysOpenPerMonth : 0;

  return {
    contributionMarginPct,
    contributionPerTreatment,
    breakEvenRevenue,
    breakEvenTreatments,
    treatmentsPerDay,
    annualBreakEvenRevenue: breakEvenRevenue * 12,
  };
}

export const faqs = [
  {
    question: "How long does it take a medical spa to break even?",
    answer:
      "Most new medical spas break even within 18–36 months once treatment room utilization reaches 55%+ and a recurring injectable patient base builds. Strong digital marketing and a medical director partnership accelerate the ramp.",
  },
  {
    question: "How do I calculate my medical spa's break-even point?",
    answer:
      "Divide your monthly fixed costs by your contribution margin (1 minus variable cost %). That gives the monthly revenue your medical spa needs; dividing by average treatment value gives the number of treatments to break even.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/medical-spa-break-even/");
export { medicalSpaDataLinks, formatCurrency, formatNumber };
