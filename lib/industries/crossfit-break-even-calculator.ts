import {
  formatCurrency,
  formatNumber,
  formatPercent,
  relatedCrossfitCalculators,
  crossfitIndustryAverages,
} from "@/lib/industries/crossfit-calculators-shared";

export const meta = {
  title: "CrossFit Gym Break-Even Calculator & Member Target Tool",
  shortTitle: "CrossFit Break-Even Calculator",
  subtitle: "Find out how much revenue and how many members your CrossFit affiliate needs to break even each month.",
  description:
    "Free CrossFit break-even calculator with monthly member targets, cost waterfall, and industry benchmarks.",
};

export const introContent = {
  lead: "CrossFit box owners think in active members, not contribution margin formulas. This calculator translates your fixed costs and variable percentages into actionable monthly targets: revenue needed, members required, and progress toward break-even.",
  bullets: [
    "Break-even revenue = Fixed Costs ÷ Contribution Margin %",
    "Contribution margin = 100% − Coach Payroll % − Variable Costs %",
    "Most affiliates need 80–120 members to break even",
  ],
  audience: "Built for affiliate owners planning new locations, evaluating slow months, and setting membership growth goals.",
};

export type BreakEvenInputs = {
  monthlyFixedCosts: number;
  revenuePerMember: number;
  coachPayrollPct: number;
  otherVariablePct: number;
  currentMembers: number;
  currentMonthlyRevenue: number;
};

export const defaultInputs: BreakEvenInputs = {
  monthlyFixedCosts: 28_000,
  revenuePerMember: 210,
  coachPayrollPct: 38,
  otherVariablePct: 12,
  currentMembers: 220,
  currentMonthlyRevenue: 46_000,
};

export const industryBenchmarks = [
  { metric: "Coach Payroll", range: "35 – 45%" },
  { metric: "Fixed Costs (monthly)", range: "$22K – $38K" },
  { metric: "Revenue Per Member", range: "$165 – $285/mo" },
  { metric: "Break-Even Members", range: "80 – 120" },
] as const;

export function calculateBreakEven(inputs: BreakEvenInputs) {
  const variablePct = inputs.coachPayrollPct + inputs.otherVariablePct;
  const contributionMarginPct = Math.max(0, 100 - variablePct);
  const contributionPerMember = inputs.revenuePerMember * (contributionMarginPct / 100);
  const breakEvenRevenue =
    contributionMarginPct > 0 ? inputs.monthlyFixedCosts / (contributionMarginPct / 100) : 0;
  const breakEvenMembers =
    contributionPerMember > 0 ? Math.ceil(inputs.monthlyFixedCosts / contributionPerMember) : 0;
  const progressPct =
    breakEvenRevenue > 0 ? Math.min(100, (inputs.currentMonthlyRevenue / breakEvenRevenue) * 100) : 0;
  const membersToGoal = Math.max(0, breakEvenMembers - inputs.currentMembers);
  const revenueGap = Math.max(0, breakEvenRevenue - inputs.currentMonthlyRevenue);
  const vsBenchmarkMembers = breakEvenMembers - crossfitIndustryAverages.breakEvenMembers;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (breakEvenMembers > 140) tier = "Below";
  else if (breakEvenMembers <= 100) tier = "Strong";

  return {
    contributionMarginPct,
    contributionPerMember,
    breakEvenRevenue,
    breakEvenMembers,
    progressPct,
    membersToGoal,
    revenueGap,
    vsBenchmarkMembers,
    tier,
  };
}

export const faqs = [
  {
    question: "How many members does a CrossFit gym need to break even?",
    answer:
      "Most affiliates break even between 80–120 active members depending on rent, coach payroll, and ancillary revenue. At $210/mo revenue per member and ~50% contribution margin, roughly 100 members covers $28K in monthly fixed costs.",
  },
  {
    question: "What are typical fixed costs for a CrossFit gym?",
    answer:
      "Monthly fixed costs typically include rent ($8K–$15K), insurance, affiliate fees, software, and owner salary allocation — often $22K–$38K total before variable coach payroll.",
  },
  {
    question: "How do you calculate CrossFit break-even revenue?",
    answer:
      "Divide monthly fixed costs by contribution margin percentage. If fixed costs are $28K and contribution margin is 50%, break-even revenue is $56K/mo.",
  },
] as const;

export const relatedTools = relatedCrossfitCalculators("/calculators/crossfit-break-even/");
export { crossfitIndustryAverages, formatCurrency, formatNumber, formatPercent };
