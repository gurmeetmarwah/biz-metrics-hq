import {
  formatCurrency,
  relatedYogaCalculators,
  yogaDataLinks,
  yogaIndustryAverages,
} from "@/lib/industries/yoga-calculators-shared";

export const meta = {
  title: "Yoga Studio Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Yoga Studio Valuation Calculator",
  subtitle:
    "Estimate what your yoga studio is worth using SDE multiples, revenue multiples, and recurring revenue quality.",
  description:
    "Free yoga studio valuation calculator using SDE and revenue multiples. Compare estimated value against boutique wellness industry benchmarks.",
};

export const introContent = {
  lead: "Yoga studio valuation reflects recurring revenue quality, community retention, and owner dependence. This calculator applies industry SDE multiples and adjusts for membership-heavy revenue mix.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 2.2x–3.5x)",
    "SDE = Net Profit + Owner Salary + add-backs",
    "High recurring revenue and strong community retention support premium multiples",
  ],
  audience:
    "Built for studio owners planning an exit, buyers evaluating acquisitions, and brokers pricing boutique wellness listings.",
};

export type YogaValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerSalary: number;
  sde: number;
  sdeMultiple: number;
  membershipRevenuePct: number;
};

export const defaultInputs: YogaValuationInputs = {
  revenue: 620_000,
  netProfit: 118_000,
  ownerSalary: 115_000,
  sde: 118_000,
  sdeMultiple: 3.3,
  membershipRevenuePct: 88,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.4x – 0.7x", median: 0.55 },
  { label: "SDE Multiple", range: "2.2x – 3.5x", median: 3.3 },
  { label: "EBITDA Multiple", range: "3.0x – 4.8x", median: 3.8 },
] as const;

export function estimateSde(netProfit: number, ownerSalary: number) {
  return netProfit + ownerSalary;
}

export function adjustMultipleForRecurring(baseMultiple: number, membershipRevenuePct: number) {
  const adjustment = ((membershipRevenuePct - yogaIndustryAverages.membershipRevenuePct) / 10) * 0.2;
  return Math.min(
    yogaIndustryAverages.sdeMultipleHigh,
    Math.max(yogaIndustryAverages.sdeMultipleLow, baseMultiple + adjustment),
  );
}

export function calculateYogaValuation(inputs: YogaValuationInputs) {
  const adjustedMultiple = adjustMultipleForRecurring(inputs.sdeMultiple, inputs.membershipRevenuePct);
  const sdeValue = inputs.sde * adjustedMultiple;
  const revenueValue = inputs.revenue * yogaIndustryAverages.revenueMultiple;
  const profitMargin = inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;
  const valueLow = inputs.sde * yogaIndustryAverages.sdeMultipleLow;
  const valueHigh = inputs.sde * yogaIndustryAverages.sdeMultipleHigh;

  return {
    adjustedMultiple,
    sdeValue,
    revenueValue,
    recommendedValue: sdeValue,
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
    question: "How are yoga studios valued?",
    answer:
      "Most owner-operated yoga studios are valued using SDE multiples, typically 2.2x–3.5x. A studio with $118K SDE at 3.3x would be worth ~$389K. Revenue multiples (0.4x–0.7x) are used as a cross-check.",
  },
  {
    question: "What is a good SDE multiple for a yoga studio?",
    answer:
      "The median SDE multiple for quality boutique yoga studios is ~3.3x. Studios with low churn, strong community, and diversified workshop revenue can reach the top of the 2.2x–3.5x range.",
  },
  {
    question: "How much is a yoga studio with $620K revenue worth?",
    answer:
      "A studio with $620K revenue and $118K SDE typically sells for $260K–$413K (2.2x–3.5x SDE), with a median near $389K at 3.3x. Community retention, instructor systems, and lease terms affect the final multiple.",
  },
] as const;

export const relatedTools = relatedYogaCalculators("/calculators/yoga-valuation/");
export { yogaIndustryAverages, yogaDataLinks, formatCurrency };
