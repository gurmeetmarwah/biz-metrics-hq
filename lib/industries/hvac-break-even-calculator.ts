import {
  formatCurrency,
  formatNumber,
  formatPercent,
  hvacIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/hvac-calculators-shared";

export const meta = {
  title: "HVAC Break-Even Calculator & Monthly Revenue Targets",
  shortTitle: "HVAC Break-Even Calculator",
  subtitle:
    "Find out how much revenue and how many jobs your HVAC company needs to break even each month.",
  description:
    "Free HVAC break-even calculator with monthly revenue targets, jobs-per-day goals, industry benchmarks, and safety score. See how much revenue you need to cover fixed overhead.",
};

export const introContent = {
  lead: "HVAC owners think in jobs per day and monthly overhead, not contribution margin formulas. This calculator translates your fixed costs and variable percentages into actionable targets: revenue needed, jobs required, and progress toward break-even.",
  bullets: [
    "Break-even revenue = Fixed Costs ÷ Contribution Margin %",
    "Contribution margin = 100% − Materials % − Variable Labor % − Other Variable %",
    "Most HVAC companies need $180K–$250K monthly revenue at typical cost ratios",
  ],
  audience:
    "Built for HVAC owners planning growth, evaluating slow seasons, and setting monthly revenue goals.",
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
  fixedCosts: 85000,
  averageJobTicket: 475,
  materialsPct: 22,
  variableLaborPct: 32,
  otherVariablePct: 8,
  workingDays: 22,
  technicians: 8,
  currentRevenue: 200000,
};

export const industryBenchmarks = [
  { metric: "Materials Cost", range: "18–26%" },
  { metric: "Technician Payroll", range: "28–38%" },
  { metric: "Average Service Ticket", range: "$350 – $650" },
  { metric: "Jobs Per Tech/Day", range: "4 – 7" },
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
    question: "How do HVAC companies calculate break-even?",
    answer:
      "Break-even revenue = Monthly Fixed Costs ÷ Contribution Margin %. Contribution margin is what's left after variable costs (materials, technician labor on jobs, commissions) as a percentage of revenue. Divide by average job ticket to get jobs needed per month.",
  },
  {
    question: "How much monthly revenue does an HVAC company need to break even?",
    answer:
      "Most owner-operated HVAC companies with 6–10 technicians need $180K–$250K monthly revenue to break even, depending on fixed overhead, payroll structure, and material costs. Companies with high maintenance contract revenue often break even at lower monthly volumes.",
  },
  {
    question: "How many jobs per day does an HVAC company need?",
    answer:
      "At $475 average ticket and 38% contribution margin, an HVAC company with $85K monthly fixed costs needs roughly 470 jobs/month — about 21 jobs/day across 8 technicians, or 2.6 jobs per tech per day minimum just to cover overhead.",
  },
  {
    question: "How can I lower my HVAC break-even point?",
    answer:
      "Four levers: reduce fixed costs (fleet optimization, office overhead), increase average ticket (maintenance plans, upsells), lower material cost % (vendor contracts, inventory control), and improve technician productivity (route density, dispatch software).",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/hvac-break-even/");
export { hvacIndustryAverages, formatCurrency, formatPercent, formatNumber };
