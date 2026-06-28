import {
  formatCurrency,
  pilatesIndustryAverages,
  relatedPilatesCalculators,
} from "@/lib/industries/pilates-calculators-shared";

export const meta = {
  title: "Pilates Studio Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Pilates Studio Valuation Calculator",
  subtitle:
    "Estimate what your Pilates studio is worth using SDE multiples, revenue multiples, and recurring revenue quality.",
  description:
    "Free Pilates studio valuation calculator using SDE and revenue multiples. Compare estimated value against boutique fitness industry benchmarks.",
};

export const introContent = {
  lead: "Pilates studio valuation reflects recurring revenue quality, class occupancy, and owner dependence. This calculator applies industry SDE multiples and adjusts for membership-heavy revenue mix.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 2.5x–3.8x)",
    "SDE = Net Profit + Owner Salary + add-backs",
    "High recurring revenue and low churn support premium multiples",
  ],
  audience:
    "Built for studio owners planning an exit, buyers evaluating acquisitions, and brokers pricing boutique fitness listings.",
};

export type PilatesValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerSalary: number;
  sde: number;
  sdeMultiple: number;
  membershipRevenuePct: number;
};

export const defaultInputs: PilatesValuationInputs = {
  revenue: 850_000,
  netProfit: 187_000,
  ownerSalary: 145_000,
  sde: 195_000,
  sdeMultiple: 3.8,
  membershipRevenuePct: 88,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.5x – 0.9x", median: 0.7 },
  { label: "SDE Multiple", range: "2.5x – 3.8x", median: 3.8 },
  { label: "EBITDA Multiple", range: "3.5x – 5.5x", median: 4.5 },
] as const;

export function estimateSde(netProfit: number, ownerSalary: number) {
  return netProfit + ownerSalary;
}

/** Adjust multiple ±0.25x for every 10 pts membership revenue above/below 88% baseline. */
export function adjustMultipleForRecurring(baseMultiple: number, membershipRevenuePct: number) {
  const adjustment = ((membershipRevenuePct - pilatesIndustryAverages.membershipRevenuePct) / 10) * 0.25;
  return Math.min(
    pilatesIndustryAverages.sdeMultipleHigh,
    Math.max(pilatesIndustryAverages.sdeMultipleLow, baseMultiple + adjustment),
  );
}

export function calculatePilatesValuation(inputs: PilatesValuationInputs) {
  const adjustedMultiple = adjustMultipleForRecurring(inputs.sdeMultiple, inputs.membershipRevenuePct);
  const sdeValue = inputs.sde * adjustedMultiple;
  const revenueValue = inputs.revenue * pilatesIndustryAverages.revenueMultiple;
  const profitMargin = inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;
  const valueLow = inputs.sde * pilatesIndustryAverages.sdeMultipleLow;
  const valueHigh = inputs.sde * pilatesIndustryAverages.sdeMultipleHigh;

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
    question: "How are Pilates studios valued?",
    answer:
      "Most owner-operated Pilates studios are valued using SDE multiples, typically 2.5x–3.8x. A studio with $195K SDE at 3.8x would be worth ~$741K. Revenue multiples (0.5x–0.9x) are used as a cross-check.",
  },
  {
    question: "What is a good SDE multiple for a Pilates studio?",
    answer:
      "The median SDE multiple for quality reformer studios is ~3.8x. Studios with low churn, high recurring revenue, and transferable systems can reach the top of the 2.5x–3.8x range.",
  },
  {
    question: "How much is a Pilates studio with $850K revenue worth?",
    answer:
      "A studio with $850K revenue and $195K SDE typically sells for $490K–$740K (2.5x–3.8x SDE), with a median near $741K at 3.8x. Occupancy, instructor dependence, and lease terms affect the final multiple.",
  },
] as const;

export const relatedTools = relatedPilatesCalculators("/calculators/pilates-valuation/");
export { pilatesIndustryAverages, pilatesDataLinks, formatCurrency } from "@/lib/industries/pilates-calculators-shared";
