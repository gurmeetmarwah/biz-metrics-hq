import {
  formatCurrency,
  formatNumber,
  formatPercent,
  optometryDataLinks,
  relatedCalculators,
} from "@/lib/industries/optometry-calculators-shared";

export const meta = {
  title: "Optometry Practice Break-Even Calculator & Daily Exam Targets",
  shortTitle: "Optometry Break-Even Calculator",
  subtitle: "Find daily exams and monthly revenue your optometry practice needs to break even.",
  description:
    "Free optometry practice break-even calculator. Estimate monthly break-even revenue, daily exams needed, and progress toward profitability.",
};

export const introContent = {
  lead: "Break-even analysis helps optometry owners set minimum monthly collections and daily exam targets. This calculator converts your cost structure into required revenue and visit volume.",
  bullets: [
    "Break-even revenue = Fixed Costs ÷ Contribution Margin %",
    "Contribution margin accounts for optical COGS and variable payroll",
    "Typical practices break even around $85K–$115K monthly revenue",
  ],
  audience: "Built for practice owners evaluating startup feasibility, staffing plans, and overhead control.",
};

export type BreakEvenInputs = {
  fixedCosts: number;
  opticalCogsPct: number;
  payrollPct: number;
  otherVariablePct: number;
  revenuePerExam: number;
  workingDays: number;
  currentRevenue: number;
};

export const defaultInputs: BreakEvenInputs = {
  fixedCosts: 48000,
  opticalCogsPct: 30,
  payrollPct: 28,
  otherVariablePct: 10,
  revenuePerExam: 185,
  workingDays: 22,
  currentRevenue: 112500,
};

export const industryBenchmarks = [
  { metric: "Monthly Break-Even", range: "$85K – $115K" },
  { metric: "Revenue Per Exam", range: "$150 – $250" },
  { metric: "Daily Exams Needed", range: "18 – 28" },
  { metric: "Variable Costs", range: "42 – 55%" },
] as const;

export function calculateBreakEven(inputs: BreakEvenInputs) {
  const variablePct = inputs.opticalCogsPct + inputs.payrollPct + inputs.otherVariablePct;
  const contributionMarginPct = Math.max(0, 100 - variablePct);
  const breakEvenRevenue =
    contributionMarginPct > 0 ? inputs.fixedCosts / (contributionMarginPct / 100) : 0;
  const dailyRevenue = inputs.workingDays > 0 ? breakEvenRevenue / inputs.workingDays : 0;
  const breakEvenExams = inputs.revenuePerExam > 0 ? breakEvenRevenue / inputs.revenuePerExam : 0;
  const dailyExamsNeeded = inputs.workingDays > 0 ? breakEvenExams / inputs.workingDays : 0;
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
    breakEvenExams,
    dailyRevenue,
    dailyExamsNeeded,
    progressPct,
    revenueRatio,
    cushionAmount,
    status,
    variablePct,
  };
}

export const faqs = [
  {
    question: "How do optometry practices calculate break-even?",
    answer:
      "Break-even revenue equals monthly fixed costs divided by contribution margin percentage. Contribution margin is what's left after variable costs like optical COGS, commissions, and variable payroll.",
  },
  {
    question: "How many exams per day does an optometry practice need to break even?",
    answer:
      "At $185 revenue per exam (exam + optical attach) and 50% contribution margin, a practice with $48K monthly fixed costs needs roughly 520 exams/month — about 24 per working day.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/optometry-practice-break-even/");
export { optometryDataLinks, formatCurrency, formatPercent, formatNumber };
