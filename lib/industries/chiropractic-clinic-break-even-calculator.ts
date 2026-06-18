import {
  formatCurrency,
  formatNumber,
  formatPercent,
  relatedCalculators,
  chiropracticDataLinks,
  chiropracticIndustryAverages,
} from "@/lib/industries/chiropractic-calculators-shared";

export const meta = {
  title: "Chiropractic Clinic Break-Even Calculator & Visit Targets",
  shortTitle: "Chiro Clinic Break-Even Calculator",
  subtitle: "Estimate the monthly revenue and visit volume your chiropractic clinic needs to break even.",
  description:
    "Free chiropractic clinic break-even calculator. Estimate monthly break-even revenue, required patient visits, and daily visit targets using fixed and variable cost assumptions.",
};

export const introContent = {
  lead: "Break-even analysis helps chiropractic owners set minimum monthly collections and visit volume targets. This calculator converts your cost structure into required monthly revenue, visit count, and daily scheduling goals.",
  bullets: [
    "Break-even revenue = Fixed Costs / Contribution Margin %",
    "Break-even visits = Break-even revenue / Revenue per visit",
    "Typical chiropractic clinics break even around $35K-$55K monthly revenue",
  ],
  audience:
    "Built for chiropractic clinic owners evaluating startup feasibility, staffing plans, and overhead control decisions.",
};

export type BreakEvenInputs = {
  fixedCosts: number;
  chiropractorPayrollPct: number;
  adminPct: number;
  suppliesPct: number;
  otherVariablePct: number;
  revenuePerVisit: number;
  workingDays: number;
  currentRevenue: number;
};

export const defaultInputs: BreakEvenInputs = {
  fixedCosts: 22000,
  chiropractorPayrollPct: 27,
  adminPct: 9,
  suppliesPct: 8,
  otherVariablePct: 12,
  revenuePerVisit: 65,
  workingDays: 21,
  currentRevenue: 46000,
};

export const industryBenchmarks = [
  { metric: "Chiropractor Payroll", range: "22-30%" },
  { metric: "Admin / Front Desk", range: "7-11%" },
  { metric: "Total Variable Costs", range: "50-65%" },
  { metric: "Break-Even Revenue", range: "$35K-$55K/mo" },
  { metric: "Revenue Per Visit", range: "$45-$85" },
] as const;

export function calculateBreakEven(inputs: BreakEvenInputs) {
  const variablePct =
    inputs.chiropractorPayrollPct + inputs.adminPct + inputs.suppliesPct + inputs.otherVariablePct;
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
    question: "How do chiropractic clinics calculate break-even revenue?",
    answer:
      "Break-even revenue equals monthly fixed costs divided by contribution margin percentage. Contribution margin is what remains after variable costs like chiropractor payroll, admin payroll, treatment supplies, and other variable overhead.",
  },
  {
    question: "What is a typical break-even point for a chiropractic clinic?",
    answer:
      "Many outpatient chiropractic clinics break even around $35K-$55K per month depending on lease burden, staffing model, and payer mix. Clinics with higher fixed overhead may need higher monthly collections.",
  },
  {
    question: "How many patient visits are needed to break even?",
    answer:
      "Break-even visits are calculated as break-even revenue divided by revenue per visit. At $65 per visit, a $45K monthly break-even target requires about 692 visits per month before owner profit.",
  },
  {
    question: "How can a chiropractic clinic lower its break-even point?",
    answer:
      "Lower fixed overhead (rent, admin, software), improve chiropractor utilization, and increase revenue per visit through care-plan adherence and pricing discipline. These changes improve contribution margin and reduce required monthly visits.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/chiropractic-clinic-break-even/");
export {
  chiropracticIndustryAverages,
  chiropracticDataLinks,
  formatCurrency,
  formatPercent,
  formatNumber,
};
