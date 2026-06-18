import {
  formatCurrency,
  formatNumber,
  formatPercent,
  relatedCalculators,
  physicalTherapyDataLinks,
  physicalTherapyIndustryAverages,
} from "@/lib/industries/physical-therapy-calculators-shared";

export const meta = {
  title: "Physical Therapy Clinic Break-Even Calculator & Visit Targets",
  shortTitle: "PT Clinic Break-Even Calculator",
  subtitle: "Find the monthly revenue and visit volume your PT clinic needs to break even.",
  description:
    "Free physical therapy clinic break-even calculator. Estimate monthly break-even revenue, required patient visits, and daily visit targets using fixed and variable cost assumptions.",
};

export const introContent = {
  lead: "Break-even analysis tells PT clinic owners the minimum collections and visit volume needed to cover fixed costs. This calculator converts cost ratios into monthly revenue, visit count, and daily scheduling targets.",
  bullets: [
    "Break-even revenue = Fixed Costs / Contribution Margin %",
    "Break-even visits = Break-even revenue / Revenue per visit",
    "Typical PT clinics break even around $65K-$85K monthly revenue",
  ],
  audience:
    "Built for outpatient PT owners evaluating expansion plans, startup feasibility, staffing models, and overhead control.",
};

export type BreakEvenInputs = {
  fixedCosts: number;
  therapistPayrollPct: number;
  adminPct: number;
  suppliesPct: number;
  otherVariablePct: number;
  revenuePerVisit: number;
  workingDays: number;
  currentRevenue: number;
};

export const defaultInputs: BreakEvenInputs = {
  fixedCosts: 30000,
  therapistPayrollPct: 32,
  adminPct: 10,
  suppliesPct: 11,
  otherVariablePct: 12,
  revenuePerVisit: 115,
  workingDays: 21,
  currentRevenue: 70833,
};

export const industryBenchmarks = [
  { metric: "Therapist Payroll", range: "28-36%" },
  { metric: "Admin / Front Desk", range: "8-12%" },
  { metric: "Total Variable Costs", range: "55-70%" },
  { metric: "Break-Even Revenue", range: "$65K-$85K/mo" },
  { metric: "Revenue Per Visit", range: "$105-$125" },
] as const;

export function calculateBreakEven(inputs: BreakEvenInputs) {
  const variablePct =
    inputs.therapistPayrollPct + inputs.adminPct + inputs.suppliesPct + inputs.otherVariablePct;
  const contributionMarginPct = Math.max(0, 100 - variablePct);
  const breakEvenRevenue =
    contributionMarginPct > 0 ? inputs.fixedCosts / (contributionMarginPct / 100) : 0;
  const dailyRevenue = inputs.workingDays > 0 ? breakEvenRevenue / inputs.workingDays : 0;
  const breakEvenVisits = inputs.revenuePerVisit > 0 ? breakEvenRevenue / inputs.revenuePerVisit : 0;
  const dailyVisitsNeeded = inputs.workingDays > 0 ? breakEvenVisits / inputs.workingDays : 0;
  const progressPct =
    breakEvenRevenue > 0 ? Math.min(100, (inputs.currentRevenue / breakEvenRevenue) * 100) : 0;
  const revenueRatio = breakEvenRevenue > 0 ? inputs.currentRevenue / breakEvenRevenue : 0;
  const cushionAmount = inputs.currentRevenue - breakEvenRevenue;

  let status: "below" | "at" | "above" = "at";
  if (revenueRatio < 0.95) status = "below";
  else if (revenueRatio >= 1.1) status = "above";

  return {
    contributionMarginPct,
    breakEvenRevenue,
    breakEvenVisits,
    dailyRevenue,
    dailyVisitsNeeded,
    progressPct,
    revenueRatio,
    cushionAmount,
    status,
    variablePct,
  };
}

export const faqs = [
  {
    question: "How do PT clinics calculate break-even revenue?",
    answer:
      "Break-even revenue equals monthly fixed costs divided by contribution margin percentage. Contribution margin is what remains after variable costs like therapist payroll, admin payroll, supplies, and other variable overhead.",
  },
  {
    question: "What is a typical break-even point for a physical therapy clinic?",
    answer:
      "Many outpatient PT clinics break even around $65K-$85K per month depending on lease burden, staffing model, and payer mix. Clinics with higher fixed overhead may require more monthly collections.",
  },
  {
    question: "How many patient visits are needed to break even?",
    answer:
      "Break-even visits are calculated as break-even revenue divided by revenue per visit. With $115 per visit, a $75K monthly break-even target requires about 652 visits per month before owner profit.",
  },
  {
    question: "How can a PT clinic lower its break-even point?",
    answer:
      "Lower fixed overhead (lease, admin, software), improve therapist utilization, and increase revenue per visit through coding accuracy and payer strategy. These changes improve contribution margin and reduce required monthly visits.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/physical-therapy-clinic-break-even/");
export {
  physicalTherapyIndustryAverages,
  physicalTherapyDataLinks,
  formatCurrency,
  formatPercent,
  formatNumber,
};
