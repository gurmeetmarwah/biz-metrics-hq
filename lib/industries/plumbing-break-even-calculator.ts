import {
  formatCurrency,
  formatNumber,
  formatPercent,
  plumbingIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/plumbing-calculators-shared";

export const meta = {
  title: "Plumbing Break-Even Calculator & Monthly Revenue Targets",
  shortTitle: "Plumbing Break-Even Calculator",
  subtitle:
    "Find out how much revenue and how many jobs your plumbing company needs to break even each month.",
  description:
    "Free plumbing break-even calculator with monthly revenue targets, jobs-per-day goals, industry benchmarks, and safety score. See how much revenue you need to cover fixed overhead.",
};

export const introContent = {
  lead: "Plumbing owners think in jobs per day and monthly overhead, not contribution margin formulas. This calculator translates your fixed costs and variable percentages into actionable targets: revenue needed, jobs required, and progress toward break-even.",
  bullets: [
    "Break-even revenue = Fixed Costs ÷ Contribution Margin %",
    "Contribution margin = 100% − Materials % − Variable Labor % − Other Variable %",
    "Most plumbing companies need $120K–$180K monthly revenue at typical cost ratios",
  ],
  audience:
    "Built for plumbing owners planning growth, evaluating slow seasons, and setting monthly revenue goals.",
};

export type BreakEvenInputs = {
  fixedCosts: number;
  averageJobTicket: number;
  materialsPct: number;
  variableLaborPct: number;
  otherVariablePct: number;
  workingDays: number;
  technicians: number;
  currentRevenue: number;
};

export const defaultInputs: BreakEvenInputs = {
  fixedCosts: 65000,
  averageJobTicket: 400,
  materialsPct: 20,
  variableLaborPct: 34,
  otherVariablePct: 7,
  workingDays: 22,
  technicians: 6,
  currentRevenue: 130000,
};

export const industryBenchmarks = [
  { metric: "Materials Cost", range: "16–24%" },
  { metric: "Plumber Payroll", range: "30–40%" },
  { metric: "Average Service Ticket", range: "$275 – $525" },
  { metric: "Jobs Per Plumber/Day", range: "4 – 8" },
] as const;

export function calculateBreakEven(inputs: BreakEvenInputs) {
  const variablePct = inputs.materialsPct + inputs.variableLaborPct + inputs.otherVariablePct;
  const contributionMarginPct = Math.max(0, 100 - variablePct);
  const breakEvenRevenue =
    contributionMarginPct > 0
      ? inputs.fixedCosts / (contributionMarginPct / 100)
      : 0;
  const jobsPerMonth =
    inputs.averageJobTicket > 0 ? breakEvenRevenue / inputs.averageJobTicket : 0;
  const dailyJobs =
    inputs.workingDays > 0 ? jobsPerMonth / inputs.workingDays : 0;
  const dailyJobsPerTech =
    inputs.technicians > 0 ? dailyJobs / inputs.technicians : 0;
  const dailyRevenue =
    inputs.workingDays > 0 ? breakEvenRevenue / inputs.workingDays : 0;
  const progressPct =
    breakEvenRevenue > 0
      ? Math.min(100, (inputs.currentRevenue / breakEvenRevenue) * 100)
      : 0;
  const revenueRatio =
    breakEvenRevenue > 0 ? inputs.currentRevenue / breakEvenRevenue : 0;
  const safetyScore =
    revenueRatio >= 1.15 ? 95 : revenueRatio >= 1.05 ? 88 : revenueRatio >= 1 ? 82 : revenueRatio >= 0.75 ? 65 : 40;
  const safetyStatus =
    revenueRatio >= 1.05 ? "strong" : revenueRatio >= 1 ? "healthy" : "below";
  const cushionAmount = inputs.currentRevenue - breakEvenRevenue;

  return {
    contributionMarginPct,
    breakEvenRevenue,
    jobsPerMonth,
    dailyJobs,
    dailyJobsPerTech,
    dailyRevenue,
    progressPct,
    revenueRatio,
    safetyScore,
    safetyStatus,
    cushionAmount,
  };
}

export const faqs = [
  {
    question: "How do plumbing companies calculate break-even?",
    answer:
      "Break-even revenue = Monthly Fixed Costs ÷ Contribution Margin %. Contribution margin is what's left after variable costs (materials, plumber labor on jobs, commissions) as a percentage of revenue. Divide by average job ticket to get jobs needed per month.",
  },
  {
    question: "How much monthly revenue does a plumbing company need to break even?",
    answer:
      "Most owner-operated plumbing companies with 4–8 plumbers need $120K–$180K monthly revenue to break even, depending on fixed overhead, payroll structure, and material costs. Companies with commercial maintenance contracts often break even at lower monthly volumes.",
  },
  {
    question: "How many jobs per day does a plumbing company need?",
    answer:
      "At $400 average ticket and 39% contribution margin, a plumbing company with $65K monthly fixed costs needs roughly 420 jobs/month — about 19 jobs/day across 6 plumbers, or 3.2 jobs per plumber per day minimum just to cover overhead.",
  },
  {
    question: "How can I lower my plumbing break-even point?",
    answer:
      "Four levers: reduce fixed costs (fleet optimization, office overhead), increase average ticket (maintenance plans, water heater upsells), lower material cost % (vendor contracts), and improve plumber productivity (route density, dispatch software).",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/plumbing-break-even/");
export { plumbingIndustryAverages, formatCurrency, formatPercent, formatNumber };
