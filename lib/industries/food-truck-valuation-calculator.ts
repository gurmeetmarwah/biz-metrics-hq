import {
  foodTruckDataLinks,
  foodTruckIndustryAverages,
  formatCurrency,
  relatedCalculators,
} from "@/lib/industries/food-truck-calculators-shared";

export const meta = {
  title: "Food Truck Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Food Truck Valuation Calculator",
  subtitle:
    "Estimate what your food truck business is worth using SDE multiples and revenue benchmarks.",
  description:
    "Free food truck valuation calculator using SDE and revenue multiples. Compare your truck's estimated value against industry benchmarks for mobile food businesses.",
};

export const introContent = {
  lead: "Food truck valuation drives buy-sell decisions, SBA loan applications, and partnership buyouts. This calculator applies industry-standard SDE multiples plus equipment asset value to estimate market value.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 1.8x–2.8x)",
    "SDE = Net Profit + Owner Salary + Add-backs",
    "Median mobile food business sells at ~2.25x SDE",
  ],
  audience:
    "Built for food truck owners planning an exit, buyers evaluating acquisitions, and brokers pricing listings.",
};

export type ValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerSalary: number;
  sde: number;
  sdeMultiple: number;
  equipmentValue: number;
};

export const defaultInputs: ValuationInputs = {
  revenue: 300000,
  netProfit: 42000,
  ownerSalary: 75000,
  sde: 117000,
  sdeMultiple: 2.25,
  equipmentValue: 45000,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.4x – 0.7x", median: 0.55 },
  { label: "SDE Multiple", range: "1.8x – 2.8x", median: 2.25 },
  { label: "Asset + Goodwill", range: "Truck + routes", median: 0 },
] as const;

export function estimateSde(netProfit: number, ownerSalary: number) {
  return netProfit + ownerSalary;
}

export function calculateValuation(inputs: ValuationInputs) {
  const sdeValue = inputs.sde * inputs.sdeMultiple;
  const revenueMultiple = 0.55;
  const revenueValue = inputs.revenue * revenueMultiple;
  const assetAdjustedValue = sdeValue + inputs.equipmentValue * 0.5;
  const profitMargin = inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;

  return {
    sdeValue,
    revenueValue,
    recommendedValue: sdeValue,
    assetAdjustedValue,
    valueLow: inputs.sde * 1.8,
    valueHigh: inputs.sde * 2.8,
    profitMargin,
  };
}

export function formatMultiple(value: number): string {
  return `${value.toFixed(2)}x`;
}

export const faqs = [
  {
    question: "How are food trucks valued?",
    answer:
      "Most food trucks are valued using SDE multiples (1.8x–2.8x) plus partial equipment asset value. A truck with $117K SDE at 2.25x would be worth ~$263K before adjusting for truck condition and transferable permits.",
  },
  {
    question: "What is a good SDE multiple for a food truck?",
    answer:
      "The median SDE multiple for food trucks is 2.25x. Trucks with recurring catering contracts and transferable permits command 2.5x–2.8x. Owner-dependent street routes may sell at 1.8x–2.0x.",
  },
  {
    question: "What is SDE for a food truck?",
    answer:
      "SDE equals net profit plus owner salary and discretionary add-backs. For an owner-operator earning $75K salary with $42K net profit, SDE is approximately $117K before depreciation and interest add-backs.",
  },
  {
    question: "How much is a food truck with $300K revenue worth?",
    answer:
      "A food truck with $300K revenue and $117K SDE typically sells for $210K–$328K (1.8x–2.8x SDE), with a median around $263K at 2.25x. Actual value depends on truck age, route contracts, and permit transferability.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/food-truck-valuation/");
export { foodTruckIndustryAverages, foodTruckDataLinks, formatCurrency };
