import {
  formatCurrency,
  pestControlDataLinks,
  pestControlIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/pest-control-calculators-shared";

export const meta = {
  title: "Pest Control Business Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Pest Control Valuation Calculator",
  subtitle:
    "Estimate what your pest control company is worth using SDE multiples and revenue benchmarks.",
  description:
    "Free pest control business valuation calculator using SDE and revenue multiples. Compare your company's estimated value against industry benchmarks for pest control operators.",
};

export const introContent = {
  lead: "Pest control business valuation drives buy-sell decisions, SBA loan applications, and PE acquisition interest. This calculator applies industry-standard SDE multiples to estimate your company's market value.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 2.5x–4.0x)",
    "SDE = Net Profit + Owner Salary + Add-backs",
    "Median pest control company sells at ~3.2x SDE",
  ],
  audience:
    "Built for pest control owners planning an exit, buyers evaluating acquisitions, and brokers pricing listings.",
};

export type ValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerSalary: number;
  sde: number;
  sdeMultiple: number;
};

export const defaultInputs: ValuationInputs = {
  revenue: 900000,
  netProfit: 162000,
  ownerSalary: 110000,
  sde: 250000,
  sdeMultiple: 3.2,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.8x – 1.4x", median: 1.1 },
  { label: "SDE Multiple", range: "2.5x – 4.0x", median: 3.2 },
  { label: "EBITDA Multiple", range: "4.5x – 7.0x", median: 5.5 },
] as const;

export function estimateSde(netProfit: number, ownerSalary: number) {
  return netProfit + ownerSalary;
}

export function calculateValuation(inputs: ValuationInputs) {
  const sdeValue = inputs.sde * inputs.sdeMultiple;
  const revenueValue = inputs.revenue * pestControlIndustryAverages.revenueMultiple;
  const profitMargin = inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;

  const recommendedValue = sdeValue;
  const valueLow = inputs.sde * 2.5;
  const valueHigh = inputs.sde * 4.0;

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
    question: "How are pest control businesses valued?",
    answer:
      "Most owner-operated pest control companies are valued using SDE multiples, typically 2.5x–4.0x. A company with $250K SDE at 3.2x would be worth ~$800K. Revenue multiples (0.8x–1.4x) are used as a cross-check.",
  },
  {
    question: "What is a good SDE multiple for a pest control company?",
    answer:
      "The median SDE multiple for owner-operated pest control businesses is 3.2x. Companies with 80%+ recurring revenue, low churn, and transferable routes command 3.5x–4.0x.",
  },
  {
    question: "What is SDE for a pest control business?",
    answer:
      "SDE equals net profit plus owner salary and discretionary add-backs. For an owner-operator earning $110K salary with $162K net profit, SDE is approximately $272K before other add-backs.",
  },
  {
    question: "How much is a pest control company with $900K revenue worth?",
    answer:
      "A pest control company with $900K revenue and $250K SDE typically sells for $625K–$1M (2.5x–4.0x SDE), with a median around $800K at 3.2x. Recurring contract penetration significantly affects value.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/pest-control-valuation/");
export { pestControlIndustryAverages, pestControlDataLinks, formatCurrency };
