import {
  dentalIndustryAverages,
  formatCurrency,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/dental-calculators-shared";

export const meta = {
  title: "Dental Practice EBITDA Calculator & Margin Benchmark Tool",
  shortTitle: "Dental Practice EBITDA Calculator",
  subtitle:
    "Calculate EBITDA margin for your dental practice and compare against industry benchmarks.",
  description:
    "Free dental practice EBITDA calculator. Enter collections and expense categories to compute EBITDA margin and compare to the 18–30% healthy range for general dentistry.",
};

export const introContent = {
  lead: "EBITDA margin is the primary profitability metric buyers and lenders use to evaluate dental practices. This calculator breaks down your expense structure and compares your margin to industry medians.",
  bullets: [
    "EBITDA = Collections − Clinical Payroll − Supplies − Admin − Facility − Other",
    "Healthy general dentistry EBITDA: 22–26%",
    "Median practice EBITDA margin: ~24%",
  ],
  audience:
    "Built for practice owners benchmarking profitability, buyers in due diligence, and operators evaluating overhead reduction.",
};

export type EbitdaInputs = {
  collections: number;
  clinicalPayroll: number;
  supplies: number;
  adminPayroll: number;
  facilityRent: number;
  otherOverhead: number;
};

export const defaultInputs: EbitdaInputs = {
  collections: 1800000,
  clinicalPayroll: 540000,
  supplies: 90000,
  adminPayroll: 180000,
  facilityRent: 120000,
  otherOverhead: 216000,
};

export const expenseBenchmarks = [
  { category: "Clinical Payroll", range: "28–32%" },
  { category: "Dental Supplies", range: "5–7%" },
  { category: "Admin Payroll", range: "9–12%" },
  { category: "Facility & Overhead", range: "18–24%" },
] as const;

export function calculateEbitda(inputs: EbitdaInputs) {
  const totalExpenses =
    inputs.clinicalPayroll +
    inputs.supplies +
    inputs.adminPayroll +
    inputs.facilityRent +
    inputs.otherOverhead;
  const ebitda = inputs.collections - totalExpenses;
  const ebitdaMarginPct = inputs.collections > 0 ? (ebitda / inputs.collections) * 100 : 0;

  const expenseBreakdown = [
    { label: "Clinical Payroll", amount: inputs.clinicalPayroll },
    { label: "Dental Supplies", amount: inputs.supplies },
    { label: "Admin Payroll", amount: inputs.adminPayroll },
    { label: "Facility & Rent", amount: inputs.facilityRent },
    { label: "Other Overhead", amount: inputs.otherOverhead },
  ].map((item) => ({
    ...item,
    pct: inputs.collections > 0 ? (item.amount / inputs.collections) * 100 : 0,
  }));

  let status: "below" | "healthy" | "strong" = "healthy";
  if (ebitdaMarginPct < 18) status = "below";
  else if (ebitdaMarginPct >= 26) status = "strong";

  const vsMedian = ebitdaMarginPct - dentalIndustryAverages.ebitdaMarginPct;

  return { ebitda, ebitdaMarginPct, totalExpenses, expenseBreakdown, status, vsMedian };
}

export const faqs = [
  {
    question: "What is a good EBITDA margin for a dental practice?",
    answer:
      "Healthy general dentistry practices operate at 22–26% EBITDA margin. The industry median is ~24%. Practices below 18% typically have overhead issues; above 30% may indicate underinvestment in staff or equipment.",
  },
  {
    question: "How do you calculate EBITDA for a dental practice?",
    answer:
      "EBITDA = Collections minus operating expenses (clinical payroll, supplies, admin, facility, marketing, and other overhead) before interest, taxes, depreciation, and amortization. Owner doctor compensation is typically included in clinical payroll for associate-model practices.",
  },
  {
    question: "What expenses are included in dental practice EBITDA?",
    answer:
      "Clinical payroll (hygienists, assistants, associates), dental supplies, admin staff, facility rent, insurance, marketing, lab fees, and general overhead. Excluded: owner compensation above market rate, debt service, depreciation, and one-time capital expenditures.",
  },
  {
    question: "Why do buyers focus on EBITDA for dental practices?",
    answer:
      "EBITDA normalizes profitability across different capital structures and tax strategies. Buyers apply EBITDA multiples (4.0×–6.5×) or convert to SDE for smaller owner-operator practices. Higher EBITDA margin directly increases practice value.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/dental-practice-ebitda/");
export { dentalIndustryAverages, formatCurrency, formatPercent };
