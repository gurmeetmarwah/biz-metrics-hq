import {
  coffeeShopDataLinks,
  coffeeShopIndustryAverages,
  formatCurrency,
  relatedCalculators,
} from "@/lib/industries/coffee-shop-calculators-shared";

export const meta = {
  title: "Coffee Shop Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Coffee Shop Valuation Calculator",
  subtitle:
    "Estimate what your coffee shop is worth using SDE multiples and revenue benchmarks.",
  description:
    "Free coffee shop valuation calculator using SDE and revenue multiples. Compare your cafe's estimated value against industry benchmarks for independent coffee shops.",
};

export const introContent = {
  lead: "Coffee shop valuation drives buy-sell decisions, SBA loan applications, and partnership buyouts. This calculator applies industry-standard SDE multiples to estimate your cafe's market value.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 2.5x–3.5x)",
    "SDE = Net Profit + Owner Salary + Add-backs (interest, depreciation, one-time expenses)",
    "Median independent cafe sells at ~3.0x SDE",
  ],
  audience:
    "Built for cafe owners planning an exit, buyers evaluating acquisitions, and brokers pricing listings.",
};

export type ValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerSalary: number;
  sde: number;
  sdeMultiple: number;
};

export const defaultInputs: ValuationInputs = {
  revenue: 600000,
  netProfit: 78000,
  ownerSalary: 42000,
  sde: 120000,
  sdeMultiple: 3.0,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.5x – 0.8x", median: 0.65 },
  { label: "SDE Multiple", range: "2.5x – 3.5x", median: 3.0 },
  { label: "EBITDA Multiple", range: "3.5x – 5.0x", median: 4.2 },
] as const;

export function estimateSde(netProfit: number, ownerSalary: number) {
  return netProfit + ownerSalary;
}

export function calculateValuation(inputs: ValuationInputs) {
  const sdeValue = inputs.sde * inputs.sdeMultiple;
  const revenueMultiple = 0.65;
  const revenueValue = inputs.revenue * revenueMultiple;
  const profitMargin =
    inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;

  const recommendedValue = sdeValue;
  const valueLow = inputs.sde * 2.5;
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
    question: "How are coffee shops valued?",
    answer:
      "Most independent coffee shops are valued using SDE (Seller's Discretionary Earnings) multiples, typically 2.5x–3.5x. A cafe with $120K SDE at 3.0x would be worth ~$360K. Revenue multiples (0.5x–0.8x) are used for high-volume locations.",
  },
  {
    question: "What is a good SDE multiple for a coffee shop?",
    answer:
      "The median SDE multiple for independent single-location coffee shops is 3.0x. Strong locations with transferable leases, drive-thru lanes, and clean books command 3.2x–3.5x. Owner-dependent shops with declining traffic may sell at 2.5x or below.",
  },
  {
    question: "What is SDE for a coffee shop?",
    answer:
      "SDE equals net profit plus owner salary and discretionary add-backs (interest, depreciation, one-time expenses). For an owner-operator earning $42K salary with $78K net profit, SDE is approximately $120K before other add-backs.",
  },
  {
    question: "How much is a coffee shop with $600K revenue worth?",
    answer:
      "A coffee shop with $600K revenue and $120K SDE typically sells for $300K–$420K (2.5x–3.5x SDE), with a median around $360K at 3.0x. Actual value depends on lease terms, location quality, and owner involvement.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/coffee-shop-valuation/");
export { coffeeShopIndustryAverages, coffeeShopDataLinks, formatCurrency };
