import {
  formatCurrency,
  landscapingDataLinks,
  landscapingIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/landscaping-calculators-shared";

export const meta = {
  title: "Landscaping Business Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Landscaping Valuation Calculator",
  subtitle:
    "Estimate what your landscaping company is worth using SDE multiples and revenue benchmarks.",
  description:
    "Free landscaping business valuation calculator using SDE and revenue multiples. Compare your company's estimated value against industry benchmarks for landscaping contractors.",
};

export const introContent = {
  lead: "Landscaping business valuation drives buy-sell decisions, SBA loan applications, and partnership buyouts. This calculator applies industry-standard SDE multiples to estimate your company's market value.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 1.8x–2.8x)",
    "SDE = Net Profit + Owner Salary + Add-backs",
    "Median landscaping company sells at ~2.2x SDE",
  ],
  audience:
    "Built for landscaping owners planning an exit, buyers evaluating acquisitions, and brokers pricing listings.",
};

export type ValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerSalary: number;
  sde: number;
  sdeMultiple: number;
};

export const defaultInputs: ValuationInputs = {
  revenue: 1100000,
  netProfit: 88000,
  ownerSalary: 95000,
  sde: 198000,
  sdeMultiple: 2.2,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.35x – 0.65x", median: 0.5 },
  { label: "SDE Multiple", range: "1.8x – 2.8x", median: 2.2 },
  { label: "EBITDA Multiple", range: "2.8x – 4.5x", median: 3.5 },
] as const;

export function estimateSde(netProfit: number, ownerSalary: number) {
  return netProfit + ownerSalary;
}

export function calculateValuation(inputs: ValuationInputs) {
  const sdeValue = inputs.sde * inputs.sdeMultiple;
  const revenueValue = inputs.revenue * landscapingIndustryAverages.revenueMultiple;
  const profitMargin =
    inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;

  const recommendedValue = sdeValue;
  const valueLow = inputs.sde * 1.8;
  const valueHigh = inputs.sde * 2.8;

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
    question: "How are landscaping businesses valued?",
    answer:
      "Most owner-operated landscaping companies are valued using SDE multiples, typically 1.8x–2.8x. A company with $198K SDE at 2.2x would be worth ~$436K. Revenue multiples (0.35x–0.65x) are used as a cross-check.",
  },
  {
    question: "What is a good SDE multiple for a landscaping company?",
    answer:
      "The median SDE multiple for owner-operated landscaping businesses is 2.2x. Companies with transferable maintenance contracts, commercial accounts, and low owner dependence command 2.5x–2.8x.",
  },
  {
    question: "What is SDE for a landscaping business?",
    answer:
      "SDE equals net profit plus owner salary and discretionary add-backs. For an owner-operator earning $95K salary with $88K net profit, SDE is approximately $183K before other add-backs.",
  },
  {
    question: "How much is a landscaping company with $1.1M revenue worth?",
    answer:
      "A landscaping company with $1.1M revenue and $198K SDE typically sells for $356K–$554K (1.8x–2.8x SDE), with a median around $436K at 2.2x. Maintenance contract penetration significantly affects value.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/landscaping-valuation/");
export { landscapingIndustryAverages, landscapingDataLinks, formatCurrency };
