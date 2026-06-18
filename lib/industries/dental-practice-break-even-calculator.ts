import {
  dentalIndustryAverages,
  formatCurrency,
  formatNumber,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/dental-calculators-shared";

export const meta = {
  title: "Dental Practice Break-Even Calculator & Production Targets",
  shortTitle: "Dental Practice Break-Even Calculator",
  subtitle:
    "Find out how much monthly production your dental practice needs to break even.",
  description:
    "Free dental practice break-even calculator. Estimate monthly collections needed to cover fixed costs and variable expense ratios for general dentistry.",
};

export const introContent = {
  lead: "Break-even production tells you the minimum collections needed to cover overhead before owner compensation. This calculator translates fixed costs and variable percentages into monthly and daily production targets.",
  bullets: [
    "Break-even collections = Fixed Costs ÷ Contribution Margin %",
    "Variable costs typically 55–65% of collections",
    "Median practice needs ~$110K–$130K/month to break even",
  ],
  audience:
    "Built for practice owners evaluating startup viability, associate models, and overhead reduction strategies.",
};

export type BreakEvenInputs = {
  fixedCosts: number;
  clinicalPayrollPct: number;
  suppliesPct: number;
  otherVariablePct: number;
  workingDays: number;
  currentCollections: number;
};

export const defaultInputs: BreakEvenInputs = {
  fixedCosts: 45000,
  clinicalPayrollPct: 30,
  suppliesPct: 6,
  otherVariablePct: 28,
  workingDays: 20,
  currentCollections: 150000,
};

export const industryBenchmarks = [
  { metric: "Clinical Payroll", range: "28–32%" },
  { metric: "Supplies", range: "5–7%" },
  { metric: "Fixed Overhead", range: "$40K – $55K/mo" },
  { metric: "Break-Even Collections", range: "$110K – $130K/mo" },
] as const;

export function calculateBreakEven(inputs: BreakEvenInputs) {
  const variablePct = inputs.clinicalPayrollPct + inputs.suppliesPct + inputs.otherVariablePct;
  const contributionMarginPct = Math.max(0, 100 - variablePct);
  const breakEvenRevenue =
    contributionMarginPct > 0 ? inputs.fixedCosts / (contributionMarginPct / 100) : 0;
  const dailyProduction = inputs.workingDays > 0 ? breakEvenRevenue / inputs.workingDays : 0;
  const progressPct =
    breakEvenRevenue > 0 ? Math.min(100, (inputs.currentCollections / breakEvenRevenue) * 100) : 0;
  const revenueRatio = breakEvenRevenue > 0 ? inputs.currentCollections / breakEvenRevenue : 0;
  const cushionAmount = inputs.currentCollections - breakEvenRevenue;

  let status: "below" | "at" | "above" = "at";
  if (revenueRatio < 0.95) status = "below";
  else if (revenueRatio >= 1.1) status = "above";

  return {
    contributionMarginPct,
    breakEvenRevenue,
    dailyProduction,
    progressPct,
    revenueRatio,
    cushionAmount,
    status,
    variablePct,
  };
}

export const faqs = [
  {
    question: "How do dental practices calculate break-even?",
    answer:
      "Break-even collections = Monthly Fixed Costs ÷ Contribution Margin %. Fixed costs include admin payroll, rent, insurance, and marketing. Variable costs include clinical payroll, supplies, and lab fees as a percentage of collections.",
  },
  {
    question: "What is a typical break-even point for a dental practice?",
    answer:
      "Most solo general practices break even at $110K–$130K monthly collections, assuming $45K–$55K fixed overhead and 60% variable cost ratio. This covers overhead but not owner doctor compensation.",
  },
  {
    question: "What costs are fixed vs variable in a dental practice?",
    answer:
      "Fixed: admin staff, rent, insurance, software, marketing base. Variable: clinical payroll (hygienists, assistants), dental supplies, lab fees, and associate compensation tied to production.",
  },
  {
    question: "How can I lower my dental practice break-even point?",
    answer:
      "Four levers: reduce fixed overhead (renegotiate lease, streamline admin), improve hygiene production (recall systems), lower supply costs (group purchasing), and increase fee-for-service payer mix.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/dental-practice-break-even/");
export { dentalIndustryAverages, formatCurrency, formatPercent, formatNumber };
