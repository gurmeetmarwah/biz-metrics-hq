import {
  formatCurrency,
  formatNumber,
  formatPercent,
  relatedCalculators,
  chiropracticDataLinks,
  chiropracticIndustryAverages,
} from "@/lib/industries/chiropractic-calculators-shared";

export const meta = {
  title: "Chiropractic Clinic Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Chiropractic Clinic Valuation Calculator",
  subtitle: "Estimate what your chiropractic clinic is worth using SDE and revenue benchmarks.",
  description:
    "Free chiropractic clinic valuation calculator using SDE and revenue multiples. Compare your clinic's estimated value against independent chiropractic benchmarks.",
};

export const introContent = {
  lead: "Chiropractic clinic valuation supports buy-sell negotiations, partner buyouts, and lender underwriting. This calculator applies chiropractic-specific SDE and revenue multiples plus equipment value to estimate likely market value.",
  bullets: [
    "Estimated Value = SDE x Industry Multiple (typically 2.0x-3.5x)",
    "SDE = Net Profit + Owner Compensation + discretionary add-backs",
    "Median independent chiropractic clinic sells at ~2.8x SDE",
  ],
  audience:
    "Built for chiropractic clinic owners planning an exit, acquirers evaluating targets, and advisors pricing private practice transactions.",
};

export type ValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerComp: number;
  sde: number;
  sdeMultiple: number;
  equipmentValue: number;
};

export const defaultInputs: ValuationInputs = {
  revenue: 500000,
  netProfit: 150000,
  ownerComp: 140000,
  sde: 290000,
  sdeMultiple: 2.8,
  equipmentValue: 70000,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.5x-0.9x", median: 0.7 },
  { label: "SDE Multiple", range: "2.0x-3.5x", median: 2.8 },
  { label: "Profit Multiple", range: "2.5x-4.5x", median: 3.5 },
] as const;

export function estimateSde(netProfit: number, ownerComp: number) {
  return netProfit + ownerComp;
}

export function calculateValuation(inputs: ValuationInputs) {
  const sdeValue = inputs.sde * inputs.sdeMultiple;
  const revenueValue = inputs.revenue * 0.7;
  const assetAdjustedValue = sdeValue + inputs.equipmentValue * 0.3;

  return {
    sdeValue,
    revenueValue,
    recommendedValue: sdeValue,
    assetAdjustedValue,
    valueLow: inputs.sde * 2.0,
    valueHigh: inputs.sde * 3.5,
    profitMargin: inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0,
  };
}

export function formatMultiple(value: number): string {
  return `${value.toFixed(2)}x`;
}

export const faqs = [
  {
    question: "How are chiropractic clinics valued?",
    answer:
      "Most independent chiropractic clinics are valued using SDE multiples in the 2.0x-3.5x range, with a median near 2.8x. Revenue multiples (0.5x-0.9x) are often used as a secondary check in smaller owner-led practices.",
  },
  {
    question: "What is a good SDE multiple for a chiropractic clinic?",
    answer:
      "Median chiropractic clinic transactions often cluster around 2.8x SDE. Clinics with strong recurring wellness revenue, stable new-patient flow, and lower owner dependence can command 3.0x-3.5x, while owner-dependent clinics tend to trade closer to 2.0x-2.6x.",
  },
  {
    question: "How do I calculate SDE for a chiropractic practice?",
    answer:
      "SDE starts with net profit and adds back owner compensation plus discretionary or one-time expenses. With $150K net profit and $140K owner compensation, estimated SDE is about $290K before additional normalized adjustments.",
  },
  {
    question: "What is a $500K revenue chiropractic clinic worth?",
    answer:
      "At typical margins, a $500K chiropractic clinic with roughly $290K SDE often values near $812K at the 2.8x median, with a broader range around $580K-$1.02M using 2.0x-3.5x SDE multiples.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/chiropractic-clinic-valuation/");
export {
  chiropracticIndustryAverages,
  chiropracticDataLinks,
  formatCurrency,
  formatPercent,
  formatNumber,
};
