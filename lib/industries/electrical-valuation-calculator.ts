import {
  formatCurrency,
  electricalDataLinks,
  electricalIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/electrical-calculators-shared";

export const meta = {
  title: "Electrical Business Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Electrical Valuation Calculator",
  subtitle:
    "Estimate what your electrical company is worth using SDE multiples and revenue benchmarks.",
  description:
    "Free electrical business valuation calculator using SDE and revenue multiples. Compare your company's estimated value against industry benchmarks for electrical contractors.",
};

export const introContent = {
  lead: "Electrical business valuation drives buy-sell decisions, SBA loan applications, and partnership buyouts. This calculator applies industry-standard SDE multiples to estimate your company's market value.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 2.3x–3.4x)",
    "SDE = Net Profit + Owner Salary + Add-backs (interest, depreciation, one-time expenses)",
    "Median electrical company sells at ~2.8x SDE",
  ],
  audience:
    "Built for electrical owners planning an exit, buyers evaluating acquisitions, and brokers pricing listings.",
};

export type ValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerSalary: number;
  sde: number;
  sdeMultiple: number;
};

export const defaultInputs: ValuationInputs = {
  revenue: 2000000,
  netProfit: 200000,
  ownerSalary: 130000,
  sde: 380000,
  sdeMultiple: 2.8,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.5x – 0.9x", median: 0.7 },
  { label: "SDE Multiple", range: "2.3x – 3.4x", median: 2.8 },
  { label: "EBITDA Multiple", range: "3.8x – 5.8x", median: 4.8 },
] as const;

export function estimateSde(netProfit: number, ownerSalary: number) {
  return netProfit + ownerSalary;
}

export function calculateValuation(inputs: ValuationInputs) {
  const sdeValue = inputs.sde * inputs.sdeMultiple;
  const revenueValue = inputs.revenue * electricalIndustryAverages.revenueMultiple;
  const profitMargin =
    inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;

  const recommendedValue = sdeValue;
  const valueLow = inputs.sde * 2.3;
  const valueHigh = inputs.sde * 3.4;

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
    question: "How are electrical businesses valued?",
    answer:
      "Most owner-operated electrical companies are valued using SDE (Seller's Discretionary Earnings) multiples, typically 2.3x–3.4x. A company with $380K SDE at 2.8x would be worth ~$1.06M. Revenue multiples (0.5x–0.9x) are used as a cross-check.",
  },
  {
    question: "What is a good SDE multiple for an electrical company?",
    answer:
      "The median SDE multiple for owner-operated electrical businesses is 2.8x. Companies with commercial contracts, transferable management, and clean books command 3.0x–3.4x. Owner-dependent shops with thin margins may sell at 2.3x or below.",
  },
  {
    question: "What is SDE for an electrical business?",
    answer:
      "SDE equals net profit plus owner salary and discretionary add-backs (interest, depreciation, one-time expenses). For an owner-operator earning $130K salary with $200K net profit, SDE is approximately $330K before other add-backs.",
  },
  {
    question: "How much is an electrical company with $2.0M revenue worth?",
    answer:
      "An electrical company with $2.0M revenue and $380K SDE typically sells for $874K–$1.29M (2.3x–3.4x SDE), with a median around $1.06M at 2.8x. Actual value depends on commercial mix, electrician retention, and market territory.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/electrical-valuation/");
export { electricalIndustryAverages, electricalDataLinks, formatCurrency };
