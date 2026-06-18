import {
  formatCurrency,
  hvacDataLinks,
  hvacIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/hvac-calculators-shared";

export const meta = {
  title: "HVAC Business Valuation Calculator & SDE Multiple Tool",
  shortTitle: "HVAC Valuation Calculator",
  subtitle:
    "Estimate what your HVAC company is worth using SDE multiples and revenue benchmarks.",
  description:
    "Free HVAC business valuation calculator using SDE and revenue multiples. Compare your company's estimated value against industry benchmarks for HVAC contractors.",
};

export const introContent = {
  lead: "HVAC business valuation drives buy-sell decisions, SBA loan applications, and partnership buyouts. This calculator applies industry-standard SDE multiples to estimate your company's market value.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 2.4x–3.8x)",
    "SDE = Net Profit + Owner Salary + Add-backs (interest, depreciation, one-time expenses)",
    "Median HVAC company sells at ~3.1x SDE",
  ],
  audience:
    "Built for HVAC owners planning an exit, buyers evaluating acquisitions, and brokers pricing listings.",
};

export type ValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerSalary: number;
  sde: number;
  sdeMultiple: number;
};

export const defaultInputs: ValuationInputs = {
  revenue: 2400000,
  netProfit: 288000,
  ownerSalary: 145000,
  sde: 433000,
  sdeMultiple: 3.1,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.6x – 1.1x", median: 0.85 },
  { label: "SDE Multiple", range: "2.4x – 3.8x", median: 3.1 },
  { label: "EBITDA Multiple", range: "4.0x – 6.5x", median: 5.2 },
] as const;

export function estimateSde(netProfit: number, ownerSalary: number) {
  return netProfit + ownerSalary;
}

export function calculateValuation(inputs: ValuationInputs) {
  const sdeValue = inputs.sde * inputs.sdeMultiple;
  const revenueValue = inputs.revenue * hvacIndustryAverages.revenueMultiple;
  const profitMargin =
    inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;

  const recommendedValue = sdeValue;
  const valueLow = inputs.sde * 2.4;
  const valueHigh = inputs.sde * 3.8;

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
    question: "How are HVAC businesses valued?",
    answer:
      "Most owner-operated HVAC companies are valued using SDE (Seller's Discretionary Earnings) multiples, typically 2.4x–3.8x. A company with $433K SDE at 3.1x would be worth ~$1.34M. Revenue multiples (0.6x–1.1x) are used as a cross-check.",
  },
  {
    question: "What is a good SDE multiple for an HVAC company?",
    answer:
      "The median SDE multiple for owner-operated HVAC businesses is 3.1x. Companies with high maintenance contract penetration, transferable management, and clean books command 3.4x–3.8x. Owner-dependent shops with thin margins may sell at 2.4x or below.",
  },
  {
    question: "What is SDE for an HVAC business?",
    answer:
      "SDE equals net profit plus owner salary and discretionary add-backs (interest, depreciation, one-time expenses). For an owner-operator earning $145K salary with $288K net profit, SDE is approximately $433K before other add-backs.",
  },
  {
    question: "How much is an HVAC company with $2.4M revenue worth?",
    answer:
      "An HVAC company with $2.4M revenue and $433K SDE typically sells for $1.04M–$1.65M (2.4x–3.8x SDE), with a median around $1.34M at 3.1x. Actual value depends on maintenance contract mix, technician retention, and market territory.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/hvac-valuation/");
export { hvacIndustryAverages, hvacDataLinks, formatCurrency };
