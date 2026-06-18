import {
  formatCurrency,
  formatNumber,
  formatPercent,
  relatedCalculators,
  physicalTherapyDataLinks,
  physicalTherapyIndustryAverages,
} from "@/lib/industries/physical-therapy-calculators-shared";

export const meta = {
  title: "Physical Therapy Clinic EBITDA Calculator & Margin Benchmark Tool",
  shortTitle: "PT Clinic EBITDA Calculator",
  subtitle: "Calculate EBITDA margin for your PT clinic and compare against industry benchmarks.",
  description:
    "Free physical therapy clinic EBITDA calculator. Enter revenue and operating expense categories to compute EBITDA margin and compare to healthy PT clinic ranges.",
};

export const introContent = {
  lead: "EBITDA margin is a core performance metric for outpatient physical therapy clinics. This calculator breaks down clinic expense structure and benchmarks your margin versus PT medians.",
  bullets: [
    "EBITDA = Revenue - Therapist Payroll - Admin Staff - Supplies - Facility Rent - Other Overhead",
    "Healthy outpatient PT EBITDA margin: 18-28%",
    "Strong PT clinic EBITDA margin starts at 26%+",
  ],
  audience:
    "Built for PT owners benchmarking profitability, buyers running due diligence, and operators improving clinic-level contribution.",
};

export type EbitdaInputs = {
  revenue: number;
  therapistPayroll: number;
  adminStaff: number;
  supplies: number;
  facilityRent: number;
  otherOverhead: number;
};

export const defaultInputs: EbitdaInputs = {
  revenue: 850000,
  therapistPayroll: 272000,
  adminStaff: 85000,
  supplies: 93500,
  facilityRent: 85000,
  otherOverhead: 119000,
};

export const expenseBenchmarks = [
  { category: "Therapist Payroll", range: "28-36%" },
  { category: "Admin Staff (Front Desk)", range: "8-12%" },
  { category: "Supplies", range: "9-13%" },
  { category: "Facility Rent", range: "8-12%" },
  { category: "Other Overhead", range: "10-16%" },
] as const;

export function calculateEbitda(inputs: EbitdaInputs) {
  const totalExpenses =
    inputs.therapistPayroll +
    inputs.adminStaff +
    inputs.supplies +
    inputs.facilityRent +
    inputs.otherOverhead;
  const ebitda = inputs.revenue - totalExpenses;
  const ebitdaMarginPct = inputs.revenue > 0 ? (ebitda / inputs.revenue) * 100 : 0;

  const expenseBreakdown = [
    { label: "Therapist Payroll", amount: inputs.therapistPayroll },
    { label: "Admin Staff", amount: inputs.adminStaff },
    { label: "Supplies", amount: inputs.supplies },
    { label: "Facility Rent", amount: inputs.facilityRent },
    { label: "Other Overhead", amount: inputs.otherOverhead },
  ].map((item) => ({
    ...item,
    pct: inputs.revenue > 0 ? (item.amount / inputs.revenue) * 100 : 0,
  }));

  let status: "below" | "healthy" | "strong" = "healthy";
  if (ebitdaMarginPct < 18) status = "below";
  else if (ebitdaMarginPct >= 26) status = "strong";

  const vsMedian = ebitdaMarginPct - physicalTherapyIndustryAverages.ebitdaMarginPct;

  return { ebitda, ebitdaMarginPct, totalExpenses, expenseBreakdown, status, vsMedian };
}

export const faqs = [
  {
    question: "What is a good EBITDA margin for a physical therapy clinic?",
    answer:
      "Healthy outpatient PT clinics typically run 18-28% EBITDA margin, with a median around 23%. Margins below 18% usually indicate cost structure or payer mix pressure, while 26%+ is generally considered strong performance.",
  },
  {
    question: "How do you calculate EBITDA for a PT clinic?",
    answer:
      "EBITDA is clinic revenue minus operating expenses like therapist payroll, admin staff, clinical supplies, rent, and overhead before interest, taxes, depreciation, and amortization.",
  },
  {
    question: "What expenses matter most in PT clinic EBITDA?",
    answer:
      "Therapist payroll is typically the largest line item (28-36%), followed by admin/front desk (8-12%), supplies (9-13%), facility rent (8-12%), and other overhead such as billing, software, and marketing.",
  },
  {
    question: "Why do lenders and buyers focus on PT EBITDA?",
    answer:
      "EBITDA helps compare clinics consistently across tax structures and financing choices. Higher normalized EBITDA margins generally support better valuation multiples and stronger debt-service capacity.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/physical-therapy-clinic-ebitda/");
export {
  physicalTherapyIndustryAverages,
  physicalTherapyDataLinks,
  formatCurrency,
  formatPercent,
  formatNumber,
};
