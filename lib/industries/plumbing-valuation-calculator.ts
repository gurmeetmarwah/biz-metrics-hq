import {
  formatCurrency,
  plumbingDataLinks,
  plumbingIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/plumbing-calculators-shared";

export const meta = {
  title: "Plumbing Business Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Plumbing Valuation Calculator",
  subtitle:
    "Estimate what your plumbing company is worth using SDE multiples and revenue benchmarks.",
  description:
    "Free plumbing business valuation calculator using SDE and revenue multiples. Compare your company's estimated value against industry benchmarks for plumbing contractors.",
};

export const introContent = {
  lead: "Plumbing business valuation drives buy-sell decisions, SBA loan applications, and partnership buyouts. This calculator applies industry-standard SDE multiples to estimate your company's market value.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 2.2x–3.5x)",
    "SDE = Net Profit + Owner Salary + Add-backs (interest, depreciation, one-time expenses)",
    "Median plumbing company sells at ~2.8x SDE",
  ],
  audience:
    "Built for plumbing owners planning an exit, buyers evaluating acquisitions, and brokers pricing listings.",
};

export type ValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerSalary: number;
  sde: number;
  sdeMultiple: number;
};

export const defaultInputs: ValuationInputs = {
  revenue: 1600000,
  netProfit: 176000,
  ownerSalary: 125000,
  sde: 320000,
  sdeMultiple: 2.8,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.5x – 0.9x", median: 0.7 },
  { label: "SDE Multiple", range: "2.2x – 3.5x", median: 2.8 },
  { label: "EBITDA Multiple", range: "3.5x – 5.5x", median: 4.5 },
] as const;

export function estimateSde(netProfit: number, ownerSalary: number) {
  return netProfit + ownerSalary;
}

export function calculateValuation(inputs: ValuationInputs) {
  const sdeValue = inputs.sde * inputs.sdeMultiple;
  const revenueValue = inputs.revenue * plumbingIndustryAverages.revenueMultiple;
  const profitMargin =
    inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;

  const recommendedValue = sdeValue;
  const valueLow = inputs.sde * 2.2;
  const valueHigh = inputs.sde * 3.5;

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
    question: "How are plumbing businesses valued?",
    answer:
      "Most owner-operated plumbing companies are valued using SDE (Seller's Discretionary Earnings) multiples, typically 2.2x–3.5x. A company with $320K SDE at 2.8x would be worth ~$896K. Revenue multiples (0.5x–0.9x) are used as a cross-check.",
  },
  {
    question: "What is a good SDE multiple for a plumbing company?",
    answer:
      "The median SDE multiple for owner-operated plumbing businesses is 2.8x. Companies with commercial maintenance contracts, transferable management, and clean books command 3.2x–3.5x. Owner-dependent shops with thin margins may sell at 2.2x or below.",
  },
  {
    question: "What is SDE for a plumbing business?",
    answer:
      "SDE equals net profit plus owner salary and discretionary add-backs (interest, depreciation, one-time expenses). For an owner-operator earning $125K salary with $176K net profit, SDE is approximately $301K before other add-backs.",
  },
  {
    question: "How much is a plumbing company with $1.6M revenue worth?",
    answer:
      "A plumbing company with $1.6M revenue and $320K SDE typically sells for $704K–$1.12M (2.2x–3.5x SDE), with a median around $896K at 2.8x. Actual value depends on maintenance contract mix, plumber retention, and market territory.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/plumbing-valuation/");
export { plumbingIndustryAverages, plumbingDataLinks, formatCurrency };
