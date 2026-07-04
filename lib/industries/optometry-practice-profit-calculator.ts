import {
  formatCurrency,
  formatPercent,
  optometryDataLinks,
  relatedCalculators,
} from "@/lib/industries/optometry-calculators-shared";

export const meta = {
  title: "Optometry Practice Profit Calculator & Net Margin Tool",
  shortTitle: "Optometry Practice Profit Calculator",
  subtitle: "Model net profit margin from collections, payroll, optical COGS, and overhead.",
  description:
    "Free optometry practice profit calculator. Estimate net margin from revenue, optical COGS, staffing, and fixed overhead.",
};

export const introContent = {
  lead: "Optometry profitability depends on optical capture, payer mix, and staffing efficiency. This calculator models your P&L from revenue through net profit.",
  bullets: [
    "Net Margin = (Revenue − COGS − Payroll − Overhead) ÷ Revenue",
    "Optical COGS typically 28–38% of eyewear revenue",
    "Healthy practices achieve 20–28% net margin",
  ],
  audience: "Built for practice owners benchmarking margins and modeling optical vs exam revenue mix.",
};

export type ProfitInputs = {
  revenue: number;
  examRevenuePct: number;
  opticalCogsPct: number;
  contactLensCogsPct: number;
  payrollPct: number;
  overheadPct: number;
};

export const defaultInputs: ProfitInputs = {
  revenue: 1350000,
  examRevenuePct: 42,
  opticalCogsPct: 32,
  contactLensCogsPct: 55,
  payrollPct: 32,
  overheadPct: 12,
};

export const industryBenchmarks = [
  { metric: "Net Margin", range: "18 – 28%" },
  { metric: "Payroll", range: "28 – 38%" },
  { metric: "Optical COGS", range: "28 – 38%" },
  { metric: "Overhead", range: "10 – 15%" },
] as const;

export function calculateProfit(inputs: ProfitInputs) {
  const opticalPct = 100 - inputs.examRevenuePct;
  const opticalRevenue = inputs.revenue * (opticalPct / 100);
  const examRevenue = inputs.revenue - opticalRevenue;
  const contactLensRevenue = opticalRevenue * 0.35;
  const frameLensRevenue = opticalRevenue - contactLensRevenue;

  const opticalCogs = frameLensRevenue * (inputs.opticalCogsPct / 100);
  const contactCogs = contactLensRevenue * (inputs.contactLensCogsPct / 100);
  const totalCogs = opticalCogs + contactCogs;
  const payroll = inputs.revenue * (inputs.payrollPct / 100);
  const overhead = inputs.revenue * (inputs.overheadPct / 100);
  const netProfit = inputs.revenue - totalCogs - payroll - overhead;
  const netMargin = inputs.revenue > 0 ? (netProfit / inputs.revenue) * 100 : 0;
  const grossMargin = inputs.revenue > 0 ? ((inputs.revenue - totalCogs) / inputs.revenue) * 100 : 0;

  let status: "below" | "healthy" | "strong" = "healthy";
  if (netMargin < 18) status = "below";
  else if (netMargin >= 26) status = "strong";

  return { totalCogs, payroll, overhead, netProfit, netMargin, grossMargin, examRevenue, opticalRevenue, status };
}

export const faqs = [
  {
    question: "What is a good profit margin for an optometry practice?",
    answer:
      "Healthy optometry practices achieve 20–28% net profit margin. Practices with 60%+ optical capture and medical eye care billing reach 26–32%. Exam-only models with high vision plan dependence often run 14–20%.",
  },
  {
    question: "How do eyewear sales affect profitability?",
    answer:
      "Eyewear and contact lens sales drive profitability beyond thin exam reimbursements. Optical revenue represents 50–65% of collections at profitable practices — margin levers are capture rate and premium lens mix.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/optometry-practice-profit/");
export { optometryDataLinks, formatCurrency, formatPercent };
