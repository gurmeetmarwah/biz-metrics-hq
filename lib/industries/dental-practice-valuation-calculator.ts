import {
  dentalDataLinks,
  dentalIndustryAverages,
  formatCurrency,
  relatedCalculators,
} from "@/lib/industries/dental-calculators-shared";

export const meta = {
  title: "Dental Practice Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Dental Practice Valuation Calculator",
  subtitle:
    "Estimate what your dental practice is worth using SDE multiples and revenue benchmarks.",
  description:
    "Free dental practice valuation calculator using SDE and revenue multiples. Compare your practice's estimated value against industry benchmarks for general dentistry.",
};

export const introContent = {
  lead: "Dental practice valuation drives buy-sell decisions, SBA loan applications, and partnership buyouts. This calculator applies industry-standard SDE multiples plus equipment asset value to estimate market value.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 3.2×–4.5×)",
    "SDE = Net Profit + Owner Doctor Compensation + add-backs",
    "Median general practice sells at ~3.8× SDE",
  ],
  audience:
    "Built for practice owners planning an exit, buyers evaluating acquisitions, and brokers pricing listings.",
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
  revenue: 1800000,
  netProfit: 280000,
  ownerComp: 285000,
  sde: 565000,
  sdeMultiple: 3.8,
  equipmentValue: 350000,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.6× – 1.0×", median: 0.8 },
  { label: "SDE Multiple", range: "3.2× – 4.5×", median: 3.8 },
  { label: "EBITDA Multiple", range: "4.0× – 6.5×", median: 5.2 },
] as const;

export function estimateSde(netProfit: number, ownerComp: number) {
  return netProfit + ownerComp;
}

export function calculateValuation(inputs: ValuationInputs) {
  const sdeValue = inputs.sde * inputs.sdeMultiple;
  const revenueMultiple = 0.8;
  const revenueValue = inputs.revenue * revenueMultiple;
  const assetAdjustedValue = sdeValue + inputs.equipmentValue * 0.35;
  const profitMargin = inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;

  return {
    sdeValue,
    revenueValue,
    recommendedValue: sdeValue,
    assetAdjustedValue,
    valueLow: inputs.sde * 3.2,
    valueHigh: inputs.sde * 4.5,
    profitMargin,
  };
}

export function formatMultiple(value: number): string {
  return `${value.toFixed(2)}×`;
}

export const faqs = [
  {
    question: "How are dental practices valued?",
    answer:
      "Most dental practices are valued using SDE multiples (3.2×–4.5×) with partial equipment asset value. A practice with $565K SDE at 3.8× would be worth ~$2.1M before adjusting for payer mix, location, and operatory count.",
  },
  {
    question: "What is a good SDE multiple for a dental practice?",
    answer:
      "The median SDE multiple for general dentistry is 3.8×. Practices with strong hygiene production, fee-for-service payer mix, and modern operatories command 4.0×–4.5×. Medicaid-heavy or rural practices may sell at 3.2×–3.5×.",
  },
  {
    question: "What is SDE for a dental practice?",
    answer:
      "SDE equals net profit plus owner doctor compensation and discretionary add-backs. For an owner-operator earning $285K with $280K net profit, SDE is approximately $565K before depreciation, interest, and one-time expenses.",
  },
  {
    question: "How much is a dental practice with $1.8M revenue worth?",
    answer:
      "A practice with $1.8M collections and $565K SDE typically sells for $1.8M–$2.5M (3.2×–4.5× SDE), with a median around $2.1M at 3.8×. Actual value depends on operatory count, associate model, and geographic market.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/dental-practice-valuation/");
export { dentalIndustryAverages, dentalDataLinks, formatCurrency };
