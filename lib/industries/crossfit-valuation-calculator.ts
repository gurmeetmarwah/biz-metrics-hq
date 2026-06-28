import {
  crossfitDataLinks,
  formatCurrency,
  relatedCrossfitCalculators,
  crossfitIndustryAverages,
} from "@/lib/industries/crossfit-calculators-shared";

export const meta = {
  title: "CrossFit Gym Valuation Calculator & SDE Multiple Tool",
  shortTitle: "CrossFit Gym Valuation Calculator",
  subtitle:
    "Estimate what your CrossFit affiliate is worth using SDE multiples, revenue multiples, and recurring revenue quality.",
  description:
    "Free CrossFit gym valuation calculator using SDE and revenue multiples. Compare estimated value against affiliate industry benchmarks.",
};

export const introContent = {
  lead: "CrossFit affiliate valuation reflects recurring revenue quality, community retention, and coach systems. This calculator applies industry SDE multiples and adjusts for membership-heavy revenue mix.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 2.8x–4.2x)",
    "SDE = Net Profit + Owner Salary + add-backs",
    "High recurring revenue and strong community retention support premium multiples",
  ],
  audience:
    "Built for affiliate owners planning an exit, buyers evaluating acquisitions, and brokers pricing CrossFit listings.",
};

export type CrossfitValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerSalary: number;
  sde: number;
  sdeMultiple: number;
  membershipRevenuePct: number;
};

export const defaultInputs: CrossfitValuationInputs = {
  revenue: 950_000,
  netProfit: 200_000,
  ownerSalary: 150_000,
  sde: 200_000,
  sdeMultiple: 3.7,
  membershipRevenuePct: 91,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.5x – 1.0x", median: 0.7 },
  { label: "SDE Multiple", range: "2.8x – 4.2x", median: 3.7 },
  { label: "EBITDA Multiple", range: "3.6x – 5.6x", median: 4.6 },
] as const;

export function estimateSde(netProfit: number, ownerSalary: number) {
  return netProfit + ownerSalary;
}

export function adjustMultipleForRecurring(baseMultiple: number, membershipRevenuePct: number) {
  const adjustment = ((membershipRevenuePct - crossfitIndustryAverages.membershipRevenuePct) / 10) * 0.2;
  return Math.min(
    crossfitIndustryAverages.sdeMultipleHigh,
    Math.max(crossfitIndustryAverages.sdeMultipleLow, baseMultiple + adjustment),
  );
}

export function calculateCrossfitValuation(inputs: CrossfitValuationInputs) {
  const adjustedMultiple = adjustMultipleForRecurring(inputs.sdeMultiple, inputs.membershipRevenuePct);
  const sdeValue = inputs.sde * adjustedMultiple;
  const revenueValue = inputs.revenue * crossfitIndustryAverages.revenueMultiple;
  const profitMargin = inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;
  const valueLow = inputs.sde * crossfitIndustryAverages.sdeMultipleLow;
  const valueHigh = inputs.sde * crossfitIndustryAverages.sdeMultipleHigh;

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
    question: "How are CrossFit gyms valued?",
    answer:
      "Most owner-operated CrossFit affiliates are valued using SDE multiples, typically 2.8x–4.2x. A box with $200K SDE at 3.7x would be worth ~$740K. Revenue multiples (0.5x–1.0x) are used as a cross-check.",
  },
  {
    question: "What is a good SDE multiple for a CrossFit gym?",
    answer:
      "The median SDE multiple for quality CrossFit affiliates is ~3.7x. Boxes with low churn, strong coach systems, and nutrition upsells can reach the top of the 2.8x–4.2x range.",
  },
  {
    question: "How much is a CrossFit gym with $950K revenue worth?",
    answer:
      "A box with $950K revenue and $200K SDE typically sells for $560K–$840K (2.8x–4.2x SDE), with a median near $740K at 3.7x. Community retention, coach systems, and lease terms affect the final multiple.",
  },
] as const;

export const relatedTools = relatedCrossfitCalculators("/calculators/crossfit-valuation/");
export { crossfitIndustryAverages, crossfitDataLinks, formatCurrency };
