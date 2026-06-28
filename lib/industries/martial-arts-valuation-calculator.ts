import {
  formatCurrency,
  martialArtsDataLinks,
  martialArtsIndustryAverages,
  relatedMartialArtsCalculators,
} from "@/lib/industries/martial-arts-calculators-shared";

export const meta = {
  title: "Martial Arts School Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Martial Arts School Valuation Calculator",
  subtitle:
    "Estimate what your martial arts school is worth using SDE multiples, revenue multiples, and tuition recurring quality.",
  description:
    "Free martial arts school valuation calculator using SDE and revenue multiples. Compare estimated value against youth activity industry benchmarks.",
};

export const introContent = {
  lead: "Martial arts school valuation reflects tuition recurring quality, student retention, and owner dependence. This calculator applies industry SDE multiples and adjusts for program-based revenue mix.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 2.6x–4.2x)",
    "SDE = Net Profit + Owner Salary + add-backs",
    "High tuition recurring revenue and strong kids retention support premium multiples",
  ],
  audience:
    "Built for school owners planning an exit, buyers evaluating acquisitions, and brokers pricing martial arts listings.",
};

export type MartialArtsValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerSalary: number;
  sde: number;
  sdeMultiple: number;
  tuitionRevenuePct: number;
};

export const defaultInputs: MartialArtsValuationInputs = {
  revenue: 780_000,
  netProfit: 187_000,
  ownerSalary: 160_000,
  sde: 187_000,
  sdeMultiple: 3.9,
  tuitionRevenuePct: 89,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.5x – 0.9x", median: 0.65 },
  { label: "SDE Multiple", range: "2.6x – 4.2x", median: 3.9 },
  { label: "EBITDA Multiple", range: "3.4x – 5.4x", median: 4.2 },
] as const;

export function estimateSde(netProfit: number, ownerSalary: number) {
  return netProfit + ownerSalary;
}

export function adjustMultipleForRecurring(baseMultiple: number, tuitionRevenuePct: number) {
  const adjustment = ((tuitionRevenuePct - martialArtsIndustryAverages.tuitionRevenuePct) / 10) * 0.22;
  return Math.min(
    martialArtsIndustryAverages.sdeMultipleHigh,
    Math.max(martialArtsIndustryAverages.sdeMultipleLow, baseMultiple + adjustment),
  );
}

export function calculateMartialArtsValuation(inputs: MartialArtsValuationInputs) {
  const adjustedMultiple = adjustMultipleForRecurring(inputs.sdeMultiple, inputs.tuitionRevenuePct);
  const sdeValue = inputs.sde * adjustedMultiple;
  const revenueValue = inputs.revenue * martialArtsIndustryAverages.revenueMultiple;
  const profitMargin = inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;
  const valueLow = inputs.sde * martialArtsIndustryAverages.sdeMultipleLow;
  const valueHigh = inputs.sde * martialArtsIndustryAverages.sdeMultipleHigh;

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
    question: "How are martial arts schools valued?",
    answer:
      "Most owner-operated schools are valued using SDE multiples, typically 2.6x–4.2x. A school with $187K SDE at 3.9x would be worth ~$729K. Revenue multiples (0.5x–0.9x) are used as a cross-check.",
  },
  {
    question: "What is a good SDE multiple for a martial arts school?",
    answer:
      "The median SDE multiple for quality schools is ~3.9x. Schools with low churn, strong kids pipeline, and transferable instructor systems can reach the top of the 2.6x–4.2x range.",
  },
  {
    question: "How much is a martial arts school with $780K revenue worth?",
    answer:
      "A school with $780K revenue and $187K SDE typically sells for $486K–$785K (2.6x–4.2x SDE), with a median near $729K at 3.9x. Student retention, lease terms, and program mix affect the final multiple.",
  },
] as const;

export const relatedTools = relatedMartialArtsCalculators("/calculators/martial-arts-valuation/");
export { martialArtsIndustryAverages, martialArtsDataLinks, formatCurrency };
