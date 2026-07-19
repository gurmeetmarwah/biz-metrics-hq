import {
  formatCurrency,
  formatPercent,
  medicalSpaDataLinks,
  medicalSpaIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/medical-spa-calculators-shared";

export const meta = {
  title: "Medical Spa EBITDA Calculator & Margin Benchmark Tool",
  shortTitle: "Medical Spa EBITDA Calculator",
  subtitle: "Calculate EBITDA margin for your medical spa and compare against industry benchmarks.",
  description:
    "Free medical spa EBITDA calculator. Model EBITDA margin from revenue, payroll, supplies, rent, marketing, and operating overhead — excluding depreciation and amortization.",
};

export const introContent = {
  lead: "EBITDA margin is the primary profitability metric buyers use to evaluate medical spas. This calculator breaks down your expense structure and compares your EBITDA margin to industry medians.",
  bullets: [
    "EBITDA = Revenue − Payroll − Supplies COGS − Rent − Marketing − Operating Overhead",
    "Excludes depreciation, amortization, interest, and taxes",
    "Healthy medical spa EBITDA margin: 18–28% (median ~24%)",
  ],
  audience: "Built for medical spa owners benchmarking profitability, buyers in due diligence, and operators evaluating overhead.",
};

export type EbitdaInputs = {
  revenue: number;
  payrollPct: number;
  suppliesCogsPct: number;
  rentPct: number;
  marketingPct: number;
  operatingOverheadPct: number;
  depreciationPct: number;
};

export const defaultInputs: EbitdaInputs = {
  revenue: 1200000,
  payrollPct: 35,
  suppliesCogsPct: 20,
  rentPct: 11,
  marketingPct: 10,
  operatingOverheadPct: 7,
  depreciationPct: 5,
};

export const industryBenchmarks = [
  { metric: "EBITDA Margin", range: "18 – 28%" },
  { metric: "Payroll %", range: "30 – 40%" },
  { metric: "Injectable COGS %", range: "12 – 18%" },
  { metric: "Depreciation %", range: "4 – 7%" },
] as const;

export function calculateEbitda(inputs: EbitdaInputs) {
  const payroll = inputs.revenue * (inputs.payrollPct / 100);
  const suppliesCogs = inputs.revenue * (inputs.suppliesCogsPct / 100);
  const rent = inputs.revenue * (inputs.rentPct / 100);
  const marketing = inputs.revenue * (inputs.marketingPct / 100);
  const operatingOverhead = inputs.revenue * (inputs.operatingOverheadPct / 100);
  const depreciation = inputs.revenue * (inputs.depreciationPct / 100);
  const ebitdaCosts = payroll + suppliesCogs + rent + marketing + operatingOverhead;
  const ebitda = inputs.revenue - ebitdaCosts;
  const ebitdaMargin = inputs.revenue > 0 ? (ebitda / inputs.revenue) * 100 : 0;
  const netProfit = ebitda - depreciation;
  const netMargin = inputs.revenue > 0 ? (netProfit / inputs.revenue) * 100 : 0;

  const expenseBreakdown = [
    { label: "Payroll", amount: payroll },
    { label: "Supplies COGS", amount: suppliesCogs },
    { label: "Rent", amount: rent },
    { label: "Marketing", amount: marketing },
    { label: "Operating Overhead", amount: operatingOverhead },
    { label: "Depreciation (excluded)", amount: depreciation },
  ].map((item) => ({
    ...item,
    pct: inputs.revenue > 0 ? (item.amount / inputs.revenue) * 100 : 0,
  }));

  let status: "below" | "healthy" | "strong" = "healthy";
  if (ebitdaMargin < 18) status = "below";
  else if (ebitdaMargin >= 26) status = "strong";

  const vsMedian = ebitdaMargin - medicalSpaIndustryAverages.ebitdaMarginPct;

  return { ebitda, ebitdaMargin, netProfit, netMargin, ebitdaCosts, expenseBreakdown, status, vsMedian };
}

export const faqs = [
  {
    question: "What is a good EBITDA margin for a medical spa?",
    answer:
      "Healthy medical spas operate at 18–28% EBITDA margin, with a median near 24%. Practices below 18% typically have overhead or COGS issues; above 28% may indicate underinvestment in marketing or equipment.",
  },
  {
    question: "How do you calculate EBITDA for a medical spa?",
    answer:
      "EBITDA = Revenue minus operating expenses (payroll, supplies, rent, marketing, and other overhead) before interest, taxes, depreciation, and amortization. Device depreciation and loan amortization are excluded from EBITDA.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/medical-spa-ebitda/");
export { medicalSpaDataLinks, formatCurrency, formatPercent, medicalSpaIndustryAverages };
