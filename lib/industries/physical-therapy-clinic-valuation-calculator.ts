import {
  formatCurrency,
  formatNumber,
  formatPercent,
  relatedCalculators,
  physicalTherapyDataLinks,
  physicalTherapyIndustryAverages,
} from "@/lib/industries/physical-therapy-calculators-shared";

export const meta = {
  title: "Physical Therapy Clinic Valuation Calculator & SDE Multiple Tool",
  shortTitle: "PT Clinic Valuation Calculator",
  subtitle: "Estimate what your physical therapy clinic is worth using SDE and revenue benchmarks.",
  description:
    "Free physical therapy clinic valuation calculator using SDE and revenue multiples. Compare your clinic's estimated value against outpatient PT benchmarks.",
};

export const introContent = {
  lead: "Physical therapy clinic valuation supports buy-sell negotiations, partner buyouts, and lender underwriting. This calculator applies PT-specific SDE and revenue multiples plus equipment value to estimate likely market value.",
  bullets: [
    "Estimated Value = SDE x Industry Multiple (typically 2.5x-4.0x)",
    "SDE = Net Profit + Owner Compensation + discretionary add-backs",
    "Median outpatient PT clinic sells at ~3.2x SDE",
  ],
  audience:
    "Built for PT clinic owners planning an exit, acquirers evaluating targets, and advisors pricing private practice transactions.",
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
  revenue: 850000,
  netProfit: 140000,
  ownerComp: 165000,
  sde: 305000,
  sdeMultiple: 3.2,
  equipmentValue: 120000,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.6x-1.0x", median: 0.8 },
  { label: "SDE Multiple", range: "2.5x-4.0x", median: 3.2 },
  { label: "EBITDA Multiple", range: "4.0x-6.0x", median: 5.0 },
] as const;

export function estimateSde(netProfit: number, ownerComp: number) {
  return netProfit + ownerComp;
}

export function calculateValuation(inputs: ValuationInputs) {
  const sdeValue = inputs.sde * inputs.sdeMultiple;
  const revenueValue = inputs.revenue * 0.8;
  const assetAdjustedValue = sdeValue + inputs.equipmentValue * 0.3;

  return {
    sdeValue,
    revenueValue,
    recommendedValue: sdeValue,
    assetAdjustedValue,
    valueLow: inputs.sde * 2.5,
    valueHigh: inputs.sde * 4.0,
    profitMargin: inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0,
  };
}

export function formatMultiple(value: number): string {
  return `${value.toFixed(2)}x`;
}

export const faqs = [
  {
    question: "How are physical therapy clinics valued?",
    answer:
      "Most outpatient PT clinics are valued using SDE multiples in the 2.5x-4.0x range, with a median near 3.2x. Revenue multiples (0.6x-1.0x) are often used as a secondary check, especially in multi-therapist practices.",
  },
  {
    question: "What is a good SDE multiple for a PT clinic?",
    answer:
      "Median PT clinic transactions cluster around 3.2x SDE. High-retention, referral-diversified clinics with strong therapist productivity can command 3.5x-4.0x, while owner-dependent clinics may trade closer to 2.5x-3.0x.",
  },
  {
    question: "How do I calculate SDE for a physical therapy practice?",
    answer:
      "SDE starts with net profit and adds back owner compensation plus discretionary or one-time expenses. With $140K net profit and $165K owner compensation, estimated SDE is about $305K before additional normalized adjustments.",
  },
  {
    question: "What is an $850K revenue PT clinic worth?",
    answer:
      "At typical margins, an $850K PT clinic with roughly $305K SDE often values near $976K at the 3.2x median, with a broader range around $763K-$1.22M using 2.5x-4.0x SDE multiples.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/physical-therapy-clinic-valuation/");
export {
  physicalTherapyIndustryAverages,
  physicalTherapyDataLinks,
  formatCurrency,
  formatPercent,
  formatNumber,
};
