import {
  formatCurrency,
  relatedCalculators,
  veterinaryDataLinks,
  veterinaryIndustryAverages,
} from "@/lib/industries/veterinary-calculators-shared";

export const meta = {
  title: "Veterinary Clinic Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Veterinary Clinic Valuation Calculator",
  subtitle: "Estimate what your veterinary clinic is worth using SDE multiples and revenue benchmarks.",
  description:
    "Free veterinary clinic valuation calculator using SDE and revenue multiples. Compare your clinic's estimated value against industry benchmarks.",
};

export const introContent = {
  lead: "Veterinary clinic valuation drives buy-sell decisions, SBA loan applications, and partnership buyouts. This calculator applies industry-standard SDE multiples plus equipment asset value to estimate market value.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 2.8×–4.0×)",
    "SDE = Net Profit + Owner Veterinarian Compensation + add-backs",
    "Median general clinic sells at ~3.4× SDE",
  ],
  audience:
    "Built for clinic owners planning an exit, buyers evaluating acquisitions, and brokers pricing listings.",
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
  revenue: 1200000,
  netProfit: 180000,
  ownerComp: 185000,
  sde: 365000,
  sdeMultiple: 3.4,
  equipmentValue: 200000,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.7× – 1.1×", median: 0.9 },
  { label: "SDE Multiple", range: "2.8× – 4.0×", median: 3.4 },
  { label: "EBITDA Multiple", range: "3.5× – 5.5×", median: 4.5 },
] as const;

export function estimateSde(netProfit: number, ownerComp: number) {
  return netProfit + ownerComp;
}

export function calculateValuation(inputs: ValuationInputs) {
  const sdeValue = inputs.sde * inputs.sdeMultiple;
  const revenueValue = inputs.revenue * 0.9;
  const assetAdjustedValue = sdeValue + inputs.equipmentValue * 0.3;

  return {
    sdeValue,
    revenueValue,
    recommendedValue: sdeValue,
    assetAdjustedValue,
    valueLow: inputs.sde * 2.8,
    valueHigh: inputs.sde * 4.0,
    profitMargin: inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0,
  };
}

export function formatMultiple(value: number): string {
  return `${value.toFixed(2)}×`;
}

export const faqs = [
  {
    question: "How are veterinary clinics valued?",
    answer:
      "Most veterinary clinics are valued using SDE multiples (2.8×–4.0×) with partial equipment asset value. A clinic with $365K SDE at 3.4× would be worth ~$1.2M before adjusting for location, service mix, and facility condition.",
  },
  {
    question: "What is a good SDE multiple for a veterinary clinic?",
    answer:
      "The median SDE multiple for general veterinary clinics is 3.4×. Clinics with strong wellness programs, diversified revenue, and modern facilities command 3.6×–4.0×. Rural or single-DVM clinics may sell at 2.8×–3.2×.",
  },
  {
    question: "What is SDE for a veterinary clinic?",
    answer:
      "SDE equals net profit plus owner veterinarian compensation and discretionary add-backs. For an owner-operator earning $185K with $180K net profit, SDE is approximately $365K before depreciation, interest, and one-time expenses.",
  },
  {
    question: "How much is a veterinary clinic with $1.2M revenue worth?",
    answer:
      "A clinic with $1.2M revenue and $365K SDE typically sells for $1.0M–$1.5M (2.8×–4.0× SDE), with a median around $1.2M at 3.4×. Actual value depends on DVM count, corporate vs independent status, and geographic market.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/veterinary-clinic-valuation/");
export { veterinaryIndustryAverages, veterinaryDataLinks, formatCurrency };
