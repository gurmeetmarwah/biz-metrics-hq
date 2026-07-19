import {
  formatCurrency,
  formatPercent,
  daySpaDataLinks,
  daySpaIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/day-spa-calculators-shared";

export const meta = {
  title: "Day Spa EBITDA Calculator & Margin Benchmark Tool",
  shortTitle: "Day Spa EBITDA Calculator",
  subtitle: "Calculate EBITDA margin for your day spa and compare against industry benchmarks.",
  description:
    "Free day spa EBITDA calculator. Model EBITDA margin from revenue, payroll, product COGS, rent, marketing, and operating overhead — excluding depreciation and amortization.",
};

export const introContent = {
  lead: "EBITDA margin is the primary profitability metric buyers use to evaluate day spas. This calculator breaks down your expense structure and compares your EBITDA margin to industry medians.",
  bullets: [
    "EBITDA = Revenue − Payroll − Product COGS − Rent − Marketing − Operating Overhead",
    "Excludes depreciation, amortization, interest, and taxes",
    "Healthy day spa EBITDA margin: 12–20% (median ~16%)",
  ],
  audience: "Built for day spa owners benchmarking profitability, buyers in due diligence, and operators evaluating overhead.",
};

export type EbitdaInputs = {
  revenue: number;
  payrollPct: number;
  productCogsPct: number;
  rentPct: number;
  marketingPct: number;
  operatingOverheadPct: number;
  depreciationPct: number;
};

export const defaultInputs: EbitdaInputs = {
  revenue: 750000,
  payrollPct: 46,
  productCogsPct: 10,
  rentPct: 12,
  marketingPct: 8,
  operatingOverheadPct: 6,
  depreciationPct: 4,
};

export const industryBenchmarks = [
  { metric: "EBITDA Margin", range: "12 – 20%" },
  { metric: "Payroll %", range: "42 – 50%" },
  { metric: "Product COGS %", range: "8 – 14%" },
  { metric: "Depreciation %", range: "3 – 5%" },
] as const;

export function calculateEbitda(inputs: EbitdaInputs) {
  const payroll = inputs.revenue * (inputs.payrollPct / 100);
  const productCogs = inputs.revenue * (inputs.productCogsPct / 100);
  const rent = inputs.revenue * (inputs.rentPct / 100);
  const marketing = inputs.revenue * (inputs.marketingPct / 100);
  const operatingOverhead = inputs.revenue * (inputs.operatingOverheadPct / 100);
  const depreciation = inputs.revenue * (inputs.depreciationPct / 100);
  const ebitdaCosts = payroll + productCogs + rent + marketing + operatingOverhead;
  const ebitda = inputs.revenue - ebitdaCosts;
  const ebitdaMargin = inputs.revenue > 0 ? (ebitda / inputs.revenue) * 100 : 0;
  const netProfit = ebitda - depreciation;
  const netMargin = inputs.revenue > 0 ? (netProfit / inputs.revenue) * 100 : 0;

  const expenseBreakdown = [
    { label: "Payroll", amount: payroll },
    { label: "Product COGS", amount: productCogs },
    { label: "Rent", amount: rent },
    { label: "Marketing", amount: marketing },
    { label: "Operating Overhead", amount: operatingOverhead },
    { label: "Depreciation (excluded)", amount: depreciation },
  ].map((item) => ({
    ...item,
    pct: inputs.revenue > 0 ? (item.amount / inputs.revenue) * 100 : 0,
  }));

  let status: "below" | "healthy" | "strong" = "healthy";
  if (ebitdaMargin < 12) status = "below";
  else if (ebitdaMargin >= 20) status = "strong";

  const vsMedian = ebitdaMargin - daySpaIndustryAverages.ebitdaMarginPct;

  return { ebitda, ebitdaMargin, netProfit, netMargin, ebitdaCosts, expenseBreakdown, status, vsMedian };
}

export const faqs = [
  {
    question: "What is a good EBITDA margin for a day spa?",
    answer:
      "Healthy day spas operate at 12–20% EBITDA margin, with a median near 16%. Spas below 12% typically have overhead or labor issues; above 20% may indicate underinvestment in marketing or staffing.",
  },
  {
    question: "How do you calculate EBITDA for a day spa?",
    answer:
      "EBITDA = Revenue minus operating expenses (payroll, product COGS, rent, marketing, and other overhead) before interest, taxes, depreciation, and amortization. Equipment depreciation and loan amortization are excluded from EBITDA.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/day-spa-ebitda/");
export { daySpaDataLinks, formatCurrency, formatPercent, daySpaIndustryAverages };
