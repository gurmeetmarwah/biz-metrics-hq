import {
  iceCreamShopDataLinks,
  iceCreamShopIndustryAverages,
  formatCurrency,
  relatedCalculators,
} from "@/lib/industries/ice-cream-shop-calculators-shared";

export const meta = {
  title: "Ice Cream Shop Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Ice Cream Shop Valuation Calculator",
  subtitle:
    "Estimate what your ice cream shop is worth using SDE multiples and seasonal revenue quality.",
  description:
    "Free ice cream shop valuation calculator using SDE and revenue multiples. Compare estimated value against industry benchmarks.",
};

export const introContent = {
  lead: "Ice cream shop valuation depends on SDE, location lease quality, and year-round revenue stability. This calculator applies industry-standard multiples to estimate market value.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 2.0×–3.5×)",
    "SDE = Net Profit + Owner Salary + Add-backs",
    "Median independent shop sells at ~2.8× SDE",
  ],
  audience:
    "Built for shop owners planning an exit, buyers evaluating acquisitions, and brokers pricing listings.",
};

export type ValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerSalary: number;
  sde: number;
  sdeMultiple: number;
  seasonalQuality: "low" | "medium" | "high";
};

export const defaultInputs: ValuationInputs = {
  revenue: 720000,
  netProfit: 122400,
  ownerSalary: 0,
  sde: 122400,
  sdeMultiple: 2.8,
  seasonalQuality: "medium",
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.3× – 0.6×", median: 0.45 },
  { label: "SDE Multiple", range: "2.0× – 3.5×", median: 2.8 },
  { label: "EBITDA Multiple", range: "2.8× – 4.2×", median: 3.5 },
] as const;

export function estimateSde(netProfit: number, ownerSalary: number) {
  return netProfit + ownerSalary;
}

export function calculateValuation(inputs: ValuationInputs) {
  const seasonalAdjustment =
    inputs.seasonalQuality === "high" ? 1.1 : inputs.seasonalQuality === "low" ? 0.9 : 1;
  const adjustedMultiple = inputs.sdeMultiple * seasonalAdjustment;
  const sdeValue = inputs.sde * adjustedMultiple;
  const revenueMultiple = 0.45;
  const revenueValue = inputs.revenue * revenueMultiple;
  const profitMargin = inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;

  return {
    sdeValue,
    revenueValue,
    recommendedValue: sdeValue,
    valueLow: inputs.sde * 2.0,
    valueHigh: inputs.sde * 3.5,
    profitMargin,
    adjustedMultiple,
    seasonalAdjustment,
  };
}

export function formatMultiple(value: number): string {
  return `${value.toFixed(1)}×`;
}

export const faqs = [
  {
    question: "How are ice cream shops valued?",
    answer:
      "Most independent ice cream shops are valued using SDE multiples, typically 2.0×–3.5×. A shop with $122K SDE at 2.8× would be worth ~$342K. Year-round revenue, catering, and strong lease terms support premium multiples.",
  },
  {
    question: "Does seasonality affect ice cream shop valuation?",
    answer:
      "Yes. Buyers discount highly seasonal shops with weak off-season cash flow. Shops with catering, cakes, retail pints, or warm-climate year-round traffic often command 10–15% higher multiples.",
  },
  {
    question: "What SDE multiple do ice cream shops sell for?",
    answer:
      "Median SDE multiple is approximately 2.8×, with a typical range of 2.0×–3.5×. Franchise locations with transferable systems may reach the upper end; owner-dependent shops with short leases trade lower.",
  },
  {
    question: "How do I calculate SDE for my ice cream shop?",
    answer:
      "SDE = Net Profit + Owner Salary + Interest + Depreciation + One-time expenses. For owner-operators, add back your compensation to reflect true discretionary earnings.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/ice-cream-shop-valuation/");
export { iceCreamShopIndustryAverages, iceCreamShopDataLinks, formatCurrency };
