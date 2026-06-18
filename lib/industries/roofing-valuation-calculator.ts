import {
  formatCurrency,
  roofingDataLinks,
  roofingIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/roofing-calculators-shared";

export const meta = {
  title: "Roofing Business Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Roofing Valuation Calculator",
  subtitle:
    "Estimate what your roofing company is worth using SDE multiples and revenue benchmarks.",
  description:
    "Free roofing business valuation calculator using SDE and revenue multiples. Compare your company's estimated value against industry benchmarks for roofing contractors.",
};

export const introContent = {
  lead: "Roofing business valuation drives buy-sell decisions, SBA loan applications, and partnership buyouts. This calculator applies industry-standard SDE multiples to estimate your company's market value.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 2.0x–3.2x)",
    "SDE = Net Profit + Owner Salary + Add-backs (interest, depreciation, one-time expenses)",
    "Median roofing company sells at ~2.6x SDE",
  ],
  audience:
    "Built for roofing owners planning an exit, buyers evaluating acquisitions, and brokers pricing listings.",
};

export type ValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerSalary: number;
  sde: number;
  sdeMultiple: number;
};

export const defaultInputs: ValuationInputs = {
  revenue: 2000000,
  netProfit: 180000,
  ownerSalary: 140000,
  sde: 360000,
  sdeMultiple: 2.6,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.4x – 0.8x", median: 0.6 },
  { label: "SDE Multiple", range: "2.0x – 3.2x", median: 2.6 },
  { label: "EBITDA Multiple", range: "3.0x – 5.0x", median: 4.0 },
] as const;

export function estimateSde(netProfit: number, ownerSalary: number) {
  return netProfit + ownerSalary;
}

export function calculateValuation(inputs: ValuationInputs) {
  const sdeValue = inputs.sde * inputs.sdeMultiple;
  const revenueValue = inputs.revenue * roofingIndustryAverages.revenueMultiple;
  const profitMargin =
    inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;

  const recommendedValue = sdeValue;
  const valueLow = inputs.sde * 2.0;
  const valueHigh = inputs.sde * 3.2;

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
    question: "How are roofing businesses valued?",
    answer:
      "Most owner-operated roofing companies are valued using SDE (Seller's Discretionary Earnings) multiples, typically 2.0x–3.2x. A company with $360K SDE at 2.6x would be worth ~$936K. Revenue multiples (0.4x–0.8x) are used as a cross-check.",
  },
  {
    question: "What is a good SDE multiple for a roofing company?",
    answer:
      "The median SDE multiple for owner-operated roofing businesses is 2.6x. Companies with transferable sales teams, regional brands, and clean books command 2.8x–3.2x. Owner-dependent shops with volatile revenue may sell at 2.0x or below.",
  },
  {
    question: "What is SDE for a roofing business?",
    answer:
      "SDE equals net profit plus owner salary and discretionary add-backs (interest, depreciation, one-time expenses). For an owner-operator earning $140K salary with $180K net profit, SDE is approximately $320K before other add-backs.",
  },
  {
    question: "How much is a roofing company with $2.0M revenue worth?",
    answer:
      "A roofing company with $2.0M revenue and $360K SDE typically sells for $720K–$1.15M (2.0x–3.2x SDE), with a median around $936K at 2.6x. Actual value depends on revenue stability, insurance mix, and market territory.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/roofing-valuation/");
export { roofingIndustryAverages, roofingDataLinks, formatCurrency };
