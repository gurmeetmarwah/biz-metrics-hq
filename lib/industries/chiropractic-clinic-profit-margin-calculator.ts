import {
  formatCurrency,
  formatNumber,
  formatPercent,
  relatedCalculators,
  chiropracticDataLinks,
  chiropracticIndustryAverages,
} from "@/lib/industries/chiropractic-calculators-shared";

export const meta = {
  title: "Chiropractic Clinic Profit Margin Calculator & Benchmark Tool",
  shortTitle: "Chiropractic Profit Margin Calculator",
  subtitle: "Calculate net profit margin for your clinic and compare against industry benchmarks.",
  description:
    "Free chiropractic clinic profit margin calculator. Enter revenue and operating expense categories to compute net margin and compare to healthy chiropractic ranges.",
};

export const introContent = {
  lead: "Net profit margin is a core performance metric for chiropractic clinics. This calculator breaks down clinic expense structure and benchmarks your margin versus chiropractic medians.",
  bullets: [
    "Net Profit = Revenue - Chiropractor Payroll - Admin - Marketing - Rent - Other Overhead",
    "Healthy chiropractic net profit margin: 25-35%",
    "Strong chiropractic margin starts at 35%+",
  ],
  audience:
    "Built for chiropractic owners benchmarking profitability, buyers running due diligence, and operators improving clinic-level contribution.",
};

export type ProfitMarginInputs = {
  revenue: number;
  chiropractorPayroll: number;
  admin: number;
  marketing: number;
  rent: number;
  otherOverhead: number;
};

export const defaultInputs: ProfitMarginInputs = {
  revenue: 500000,
  chiropractorPayroll: 145000,
  admin: 50000,
  marketing: 40000,
  rent: 35000,
  otherOverhead: 80000,
};

export const expenseBenchmarks = [
  { category: "Chiropractor Payroll", range: "22-30%" },
  { category: "Admin Staff", range: "8-12%" },
  { category: "Marketing", range: "5-10%" },
  { category: "Facility Rent", range: "5-9%" },
  { category: "Other Overhead", range: "12-20%" },
] as const;

export function calculateProfitMargin(inputs: ProfitMarginInputs) {
  const totalExpenses =
    inputs.chiropractorPayroll +
    inputs.admin +
    inputs.marketing +
    inputs.rent +
    inputs.otherOverhead;
  const netProfit = inputs.revenue - totalExpenses;
  const netProfitMarginPct = inputs.revenue > 0 ? (netProfit / inputs.revenue) * 100 : 0;

  const expenseBreakdown = [
    { label: "Chiropractor Payroll", amount: inputs.chiropractorPayroll },
    { label: "Admin Staff", amount: inputs.admin },
    { label: "Marketing", amount: inputs.marketing },
    { label: "Facility Rent", amount: inputs.rent },
    { label: "Other Overhead", amount: inputs.otherOverhead },
  ].map((item) => ({
    ...item,
    pct: inputs.revenue > 0 ? (item.amount / inputs.revenue) * 100 : 0,
  }));

  let status: "below" | "healthy" | "strong" = "healthy";
  if (netProfitMarginPct < 25) status = "below";
  else if (netProfitMarginPct >= 35) status = "strong";

  const vsMedian = netProfitMarginPct - chiropracticIndustryAverages.profitMargin;

  return {
    netProfit,
    netProfitMarginPct,
    totalExpenses,
    expenseBreakdown,
    status,
    vsMedian,
  };
}

export const faqs = [
  {
    question: "What is a good net profit margin for a chiropractic clinic?",
    answer:
      "Healthy chiropractic clinics typically run 25-35% net profit margin, with a median around 30%. Margins below 25% usually indicate cost structure or patient-volume pressure, while 35%+ is generally considered strong performance.",
  },
  {
    question: "How do you calculate net profit margin for a chiropractic clinic?",
    answer:
      "Net profit margin equals clinic revenue minus operating expenses like chiropractor payroll, admin staff, marketing, rent, and overhead, divided by revenue and expressed as a percentage.",
  },
  {
    question: "What expenses matter most in chiropractic profitability?",
    answer:
      "Chiropractor payroll is typically the largest line item (22-30%), followed by admin staffing (8-12%), marketing (5-10%), rent (5-9%), and other overhead such as billing, software, insurance, and merchant fees.",
  },
  {
    question: "Why do lenders and buyers focus on chiropractic profit margin?",
    answer:
      "Net margin helps compare clinics consistently across compensation models and owner involvement. Higher normalized margins generally support better valuation multiples and stronger debt-service capacity.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/chiropractic-clinic-profit-margin/");
export {
  chiropracticIndustryAverages,
  chiropracticDataLinks,
  formatCurrency,
  formatPercent,
  formatNumber,
};
