import {
  formatCurrency,
  cleaningBusinessDataLinks,
  cleaningBusinessIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/cleaning-business-calculators-shared";

export const meta = {
  title: "Cleaning Business Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Cleaning Business Valuation Calculator",
  subtitle:
    "Estimate what your cleaning company is worth using SDE multiples and revenue benchmarks.",
  description:
    "Free cleaning business valuation calculator using SDE and revenue multiples. Compare your company's estimated value against industry benchmarks for cleaning operators.",
};

export const introContent = {
  lead: "Cleaning business valuation drives buy-sell decisions, SBA loan applications, and acquisition planning. This calculator applies industry-standard SDE multiples to estimate your company's market value.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 1.8x–3.0x)",
    "SDE = Net Profit + Owner Salary + Add-backs",
    "Median cleaning company sells at ~2.4x SDE",
  ],
  audience:
    "Built for cleaning business owners planning an exit, buyers evaluating acquisitions, and brokers pricing listings.",
};

export type ValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerSalary: number;
  sde: number;
  sdeMultiple: number;
};

export const defaultInputs: ValuationInputs = {
  revenue: 500000,
  netProfit: 75000,
  ownerSalary: 75000,
  sde: 120000,
  sdeMultiple: 2.4,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.4x – 0.8x", median: 0.6 },
  { label: "SDE Multiple", range: "1.8x – 3.0x", median: 2.4 },
  { label: "EBITDA Multiple", range: "3.0x – 5.0x", median: 4.0 },
] as const;

export function estimateSde(netProfit: number, ownerSalary: number) {
  return netProfit + ownerSalary;
}

export function calculateValuation(inputs: ValuationInputs) {
  const sdeValue = inputs.sde * inputs.sdeMultiple;
  const revenueValue = inputs.revenue * cleaningBusinessIndustryAverages.revenueMultiple;
  const profitMargin = inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;

  const recommendedValue = sdeValue;
  const valueLow = inputs.sde * 1.8;
  const valueHigh = inputs.sde * 3.0;

  return {
    sdeValue,
    revenueValue,
    recommendedValue,
    valueLow,
    valueHigh,
    profitMargin,
  };
}

export function formatMultiple(value: number): string {
  return `${value.toFixed(1)}x`;
}

export const faqs = [
  {
    question: "How are cleaning businesses valued?",
    answer:
      "Most owner-operated cleaning companies are valued using SDE multiples, typically 1.8x–3.0x. A company with $120K SDE at 2.4x would be worth ~$288K. Revenue multiples (0.4x–0.8x) are used as a cross-check.",
  },
  {
    question: "What is a good SDE multiple for a cleaning business?",
    answer:
      "The median SDE multiple for owner-operated cleaning businesses is 2.4x. Companies with 65%+ recurring revenue, low churn, and transferable contracts command 2.6x–3.0x.",
  },
  {
    question: "What is SDE for a cleaning business?",
    answer:
      "SDE equals net profit plus owner salary and discretionary add-backs. For an owner-operator earning $75K salary with $75K net profit, SDE is approximately $150K before other add-backs.",
  },
  {
    question: "How much is a cleaning company with $500K revenue worth?",
    answer:
      "A cleaning company with $500K revenue and $120K SDE typically sells for $216K–$360K (1.8x–3.0x SDE), with a median around $288K at 2.4x. Recurring contract penetration significantly affects value.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/cleaning-business-valuation/");
export { cleaningBusinessIndustryAverages, cleaningBusinessDataLinks, formatCurrency };
