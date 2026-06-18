import {
  formatCurrency,
  formatNumber,
  formatPercent,
  relatedCalculators,
  veterinaryIndustryAverages,
} from "@/lib/industries/veterinary-calculators-shared";

export const meta = {
  title: "Veterinary Clinic Break-Even Calculator & Revenue Targets",
  shortTitle: "Veterinary Clinic Break-Even Calculator",
  subtitle: "Find out how much monthly revenue your veterinary clinic needs to break even.",
  description:
    "Free veterinary clinic break-even calculator. Estimate monthly revenue needed to cover fixed costs and variable expense ratios.",
};

export const introContent = {
  lead: "Break-even revenue tells you the minimum collections needed to cover overhead before owner compensation. This calculator translates fixed costs and variable percentages into monthly and daily revenue targets.",
  bullets: [
    "Break-even revenue = Fixed Costs ÷ Contribution Margin %",
    "Variable costs typically 58–68% of revenue",
    "Median clinic needs ~$95K–$115K/month to break even",
  ],
  audience:
    "Built for clinic owners evaluating startup viability, associate models, and overhead reduction strategies.",
};

export type BreakEvenInputs = {
  fixedCosts: number;
  vetPayrollPct: number;
  supportStaffPct: number;
  suppliesPct: number;
  otherVariablePct: number;
  workingDays: number;
  currentRevenue: number;
};

export const defaultInputs: BreakEvenInputs = {
  fixedCosts: 38000,
  vetPayrollPct: 25,
  supportStaffPct: 22,
  suppliesPct: 14,
  otherVariablePct: 18,
  workingDays: 22,
  currentRevenue: 100000,
};

export const industryBenchmarks = [
  { metric: "Veterinarian Payroll", range: "22–28%" },
  { metric: "Support Staff", range: "18–24%" },
  { metric: "Fixed Overhead", range: "$35K – $45K/mo" },
  { metric: "Break-Even Revenue", range: "$95K – $115K/mo" },
] as const;

export function calculateBreakEven(inputs: BreakEvenInputs) {
  const variablePct = inputs.vetPayrollPct + inputs.supportStaffPct + inputs.suppliesPct + inputs.otherVariablePct;
  const contributionMarginPct = Math.max(0, 100 - variablePct);
  const breakEvenRevenue =
    contributionMarginPct > 0 ? inputs.fixedCosts / (contributionMarginPct / 100) : 0;
  const dailyRevenue = inputs.workingDays > 0 ? breakEvenRevenue / inputs.workingDays : 0;
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
    dailyRevenue,
    progressPct,
    revenueRatio,
    cushionAmount,
    status,
    variablePct,
  };
}

export const faqs = [
  {
    question: "How do veterinary clinics calculate break-even?",
    answer:
      "Break-even revenue = Monthly Fixed Costs ÷ Contribution Margin %. Fixed costs include admin payroll, rent, insurance, and marketing base. Variable costs include veterinarian payroll, support staff, supplies, and pharmacy COGS as a percentage of revenue.",
  },
  {
    question: "What is a typical break-even point for a veterinary clinic?",
    answer:
      "Most general veterinary clinics break even at $95K–$115K monthly revenue, assuming $35K–$45K fixed overhead and 62% variable cost ratio. This covers overhead but not owner veterinarian compensation.",
  },
  {
    question: "What costs are fixed vs variable in a veterinary clinic?",
    answer:
      "Fixed: admin staff, rent, insurance, software, marketing base. Variable: veterinarian and technician payroll, medical supplies, lab fees, pharmacy COGS, and associate compensation tied to production.",
  },
  {
    question: "How can I lower my veterinary clinic break-even point?",
    answer:
      "Four levers: reduce fixed overhead (renegotiate lease, streamline admin), improve wellness plan enrollment, lower supply and pharmacy costs (group purchasing), and increase average invoice through better treatment acceptance.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/veterinary-clinic-break-even/");
export { veterinaryIndustryAverages, formatCurrency, formatPercent, formatNumber };
