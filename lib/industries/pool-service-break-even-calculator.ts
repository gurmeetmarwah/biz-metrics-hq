import {
  formatCurrency,
  formatNumber,
  formatPercent,
  poolServiceIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/pool-service-calculators-shared";

export const meta = {
  title: "Pool Service Break-Even Calculator & Monthly Revenue Targets",
  shortTitle: "Pool Service Break-Even Calculator",
  subtitle:
    "Find how much monthly revenue and how many service contracts your pool service company needs to break even.",
  description:
    "Free pool service break-even calculator with monthly revenue targets, contracts needed, and industry benchmarks for route-based operators.",
};

export const introContent = {
  lead: "Pool service owners think in monthly contracts and route revenue, not contribution margin formulas. This calculator translates fixed costs into actionable targets: revenue needed, contracts required, and progress toward break-even.",
  bullets: [
    "Break-even revenue = Fixed Costs ÷ Contribution Margin %",
    "Contribution margin = 100% − Labor % − Chemicals % − Other Variable %",
    "Most pool service companies need $55K–$85K monthly revenue at typical cost ratios",
  ],
  audience:
    "Built for pool service owners planning growth, evaluating slow seasons, and setting monthly revenue goals.",
};

export type BreakEvenInputs = {
  fixedCosts: number;
  averageMonthlyContract: number;
  laborPct: number;
  chemicalsPct: number;
  otherVariablePct: number;
  workingDays: number;
  technicians: number;
  currentRevenue: number;
};

export const defaultInputs: BreakEvenInputs = {
  fixedCosts: 42000,
  averageMonthlyContract: 125,
  laborPct: 32,
  chemicalsPct: 10,
  otherVariablePct: 8,
  workingDays: 22,
  technicians: 3,
  currentRevenue: 72000,
};

export const industryBenchmarks = [
  { metric: "Labor Cost", range: "28 – 35%" },
  { metric: "Chemicals", range: "8 – 12%" },
  { metric: "Average Monthly Contract", range: "$95 – $165" },
  { metric: "Pools Per Technician", range: "55 – 75/week" },
] as const;

export function calculateBreakEven(inputs: BreakEvenInputs) {
  const variablePct = inputs.laborPct + inputs.chemicalsPct + inputs.otherVariablePct;
  const contributionMarginPct = Math.max(0, 100 - variablePct);
  const breakEvenRevenue =
    contributionMarginPct > 0 ? inputs.fixedCosts / (contributionMarginPct / 100) : 0;
  const contractsNeeded =
    inputs.averageMonthlyContract > 0 ? breakEvenRevenue / inputs.averageMonthlyContract : 0;
  const progressPct =
    breakEvenRevenue > 0 ? Math.min(100, (inputs.currentRevenue / breakEvenRevenue) * 100) : 0;
  const revenueRatio = breakEvenRevenue > 0 ? inputs.currentRevenue / breakEvenRevenue : 0;
  const safetyStatus =
    revenueRatio >= 1.05 ? "strong" : revenueRatio >= 1 ? "healthy" : "below";
  const cushionAmount = inputs.currentRevenue - breakEvenRevenue;

  return {
    contributionMarginPct,
    breakEvenRevenue,
    contractsNeeded,
    progressPct,
    revenueRatio,
    safetyStatus,
    cushionAmount,
  };
}

export const faqs = [
  {
    question: "How do pool service companies calculate break-even?",
    answer:
      "Break-even revenue = Monthly Fixed Costs ÷ Contribution Margin %. Contribution margin is what's left after variable costs (technician labor, chemicals, commissions) as a percentage of revenue.",
  },
  {
    question: "How much monthly revenue does a pool service need to break even?",
    answer:
      "Most owner-operated pool service companies with 2–4 technicians need $55K–$85K monthly revenue to break even, depending on fixed overhead and route density.",
  },
  {
    question: "How many contracts does a pool service need to break even?",
    answer:
      "At $125 average monthly contract and 50% contribution margin, a company with $42K monthly fixed costs needs roughly 672 active accounts — about 2–3 well-loaded technician routes.",
  },
  {
    question: "How can I lower my pool service break-even point?",
    answer:
      "Four levers: reduce fixed costs, increase average contract value (repair upsells, commercial accounts), improve route density (more stops per day), and lower chemical cost % through vendor contracts.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/pool-service-break-even/");
export { poolServiceIndustryAverages, formatCurrency, formatPercent, formatNumber };
