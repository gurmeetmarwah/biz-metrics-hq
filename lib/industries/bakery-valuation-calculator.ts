import {
  bakeryDataLinks,
  bakeryIndustryAverages,
  formatCurrency,
  relatedCalculators,
} from "@/lib/industries/bakery-calculators-shared";

export const meta = {
  title: "Bakery Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Bakery Valuation Calculator",
  subtitle:
    "Estimate what your bakery is worth using SDE multiples and revenue benchmarks.",
  description:
    "Free bakery valuation calculator using SDE and revenue multiples. Compare your bakery's estimated value against industry benchmarks for independent bakeries.",
};

export const introContent = {
  lead: "Bakery valuation drives buy-sell decisions, SBA loan applications, and partnership buyouts. This calculator applies industry-standard SDE multiples to estimate your bakery's market value.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 2.0x–3.2x)",
    "SDE = Net Profit + Owner Salary + Add-backs (interest, depreciation, one-time expenses)",
    "Median independent bakery sells at ~2.8x SDE",
  ],
  audience:
    "Built for bakery owners planning an exit, buyers evaluating acquisitions, and brokers pricing listings.",
};

export type ValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerSalary: number;
  sde: number;
  sdeMultiple: number;
};

export const defaultInputs: ValuationInputs = {
  revenue: 500000,
  netProfit: 54000,
  ownerSalary: 46000,
  sde: 100000,
  sdeMultiple: 2.8,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.4x – 0.7x", median: 0.55 },
  { label: "SDE Multiple", range: "2.0x – 3.2x", median: 2.8 },
  { label: "EBITDA Multiple", range: "3.0x – 4.5x", median: 3.8 },
] as const;

export function estimateSde(netProfit: number, ownerSalary: number) {
  return netProfit + ownerSalary;
}

export function calculateValuation(inputs: ValuationInputs) {
  const sdeValue = inputs.sde * inputs.sdeMultiple;
  const revenueMultiple = 0.55;
  const revenueValue = inputs.revenue * revenueMultiple;
  const profitMargin = inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;

  return {
    sdeValue,
    revenueValue,
    recommendedValue: sdeValue,
    valueLow: inputs.sde * 2.0,
    valueHigh: inputs.sde * 3.2,
    profitMargin,
  };
}

export function formatMultiple(value: number): string {
  return `${value.toFixed(1)}x`;
}

export const faqs = [
  {
    question: "How are bakeries valued?",
    answer:
      "Most independent bakeries are valued using SDE (Seller's Discretionary Earnings) multiples, typically 2.0x–3.2x. A bakery with $100K SDE at 2.8x would be worth ~$280K. Revenue multiples (0.4x–0.7x) apply to established retail bakeries.",
  },
  {
    question: "What is a good SDE multiple for a bakery?",
    answer:
      "The median SDE multiple for independent bakeries is 2.8x. Strong custom cake reputation, wholesale contracts, and transferable recipes command 3.0x–3.2x. Owner-dependent home bakeries may sell at 2.0x or as asset-only transactions.",
  },
  {
    question: "What is SDE for a bakery?",
    answer:
      "SDE equals net profit plus owner salary and discretionary add-backs (interest, depreciation, one-time expenses). For an owner-operator earning $46K salary with $54K net profit, SDE is approximately $100K before other add-backs.",
  },
  {
    question: "How much is a bakery with $500K revenue worth?",
    answer:
      "A bakery with $500K revenue and $100K SDE typically sells for $200K–$320K (2.0x–3.2x SDE), with a median around $280K at 2.8x. Actual value depends on lease terms, wholesale accounts, and custom cake reputation.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/bakery-valuation/");
export { bakeryIndustryAverages, bakeryDataLinks, formatCurrency };
