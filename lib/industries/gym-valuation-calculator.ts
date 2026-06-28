import {
  formatCurrency,
  gymIndustryAverages,
  relatedGymCalculators,
} from "@/lib/industries/gym-calculators-shared";

export const meta = {
  title: "Gym Business Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Gym Valuation Calculator",
  subtitle:
    "Estimate what your gym is worth using SDE multiples, revenue multiples, and recurring revenue quality.",
  description:
    "Free gym business valuation calculator using SDE and revenue multiples. Compare estimated value against fitness industry benchmarks for membership-based gyms.",
};

export const introContent = {
  lead: "Gym valuation reflects recurring revenue quality, retention, and owner dependence. This calculator applies industry SDE multiples and optionally adjusts for membership-heavy revenue mix.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 2.8x–4.2x)",
    "SDE = Net Profit + Owner Salary + add-backs",
    "Strong MRR and low churn support premium multiples",
  ],
  audience:
    "Built for gym owners planning an exit, buyers evaluating acquisitions, and brokers pricing fitness listings.",
};

export type GymValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerSalary: number;
  sde: number;
  sdeMultiple: number;
  membershipRevenuePct: number;
};

export const defaultInputs: GymValuationInputs = {
  revenue: 1_200_000,
  netProfit: 216_000,
  ownerSalary: 120_000,
  sde: 280_000,
  sdeMultiple: 3.5,
  membershipRevenuePct: 62,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.6x – 1.1x", median: 0.85 },
  { label: "SDE Multiple", range: "2.8x – 4.2x", median: 3.5 },
  { label: "EBITDA Multiple", range: "4.0x – 6.5x", median: 5.25 },
] as const;

export function estimateSde(netProfit: number, ownerSalary: number) {
  return netProfit + ownerSalary;
}

/** Adjust multiple ±0.3x for every 10 pts membership revenue above/below 62% baseline. */
export function adjustMultipleForRecurring(baseMultiple: number, membershipRevenuePct: number) {
  const adjustment = ((membershipRevenuePct - gymIndustryAverages.membershipRevenuePct) / 10) * 0.3;
  return Math.min(
    gymIndustryAverages.sdeMultipleHigh,
    Math.max(gymIndustryAverages.sdeMultipleLow, baseMultiple + adjustment),
  );
}

export function calculateGymValuation(inputs: GymValuationInputs) {
  const adjustedMultiple = adjustMultipleForRecurring(inputs.sdeMultiple, inputs.membershipRevenuePct);
  const sdeValue = inputs.sde * adjustedMultiple;
  const revenueValue = inputs.revenue * gymIndustryAverages.revenueMultiple;
  const profitMargin = inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;
  const valueLow = inputs.sde * gymIndustryAverages.sdeMultipleLow;
  const valueHigh = inputs.sde * gymIndustryAverages.sdeMultipleHigh;

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
    question: "How are gym businesses valued?",
    answer:
      "Most owner-operated gyms are valued using SDE multiples, typically 2.8x–4.2x. A gym with $280K SDE at 3.5x would be worth ~$980K. Revenue multiples (0.6x–1.1x) are used as a cross-check.",
  },
  {
    question: "What is a good SDE multiple for a gym?",
    answer:
      "The median SDE multiple for membership-based gyms is ~3.5x. Gyms with low churn, high recurring revenue, and transferable systems can command 3.8x–4.2x.",
  },
  {
    question: "Does recurring revenue affect gym valuation?",
    answer:
      "Yes. Buyers pay premiums for predictable membership MRR and strong retention. This calculator adjusts the SDE multiple slightly based on membership revenue share — higher recurring mix supports higher multiples.",
  },
  {
    question: "How much is a gym with $1.2M revenue worth?",
    answer:
      "A gym with $1.2M revenue and $280K SDE typically sells for $780K–$1.2M (2.8x–4.2x SDE), with a median near $980K at 3.5x. Personal training mix, churn, and lease terms affect the final multiple.",
  },
] as const;

export const relatedTools = relatedGymCalculators("/calculators/gym-valuation/");
export { gymIndustryAverages, gymDataLinks, formatCurrency } from "@/lib/industries/gym-calculators-shared";
