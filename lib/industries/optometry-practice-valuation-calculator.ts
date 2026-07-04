import {
  formatCurrency,
  optometryDataLinks,
  optometryIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/optometry-calculators-shared";

export const meta = {
  title: "Optometry Practice Valuation Calculator & EBITDA Multiple Tool",
  shortTitle: "Optometry Practice Valuation Calculator",
  subtitle: "Estimate what your optometry practice is worth using EBITDA multiples and revenue benchmarks.",
  description:
    "Free optometry practice valuation calculator using EBITDA and revenue multiples. Compare your practice's estimated value against industry benchmarks.",
};

export const introContent = {
  lead: "Optometry practice valuation drives buy-sell decisions, partnership buyouts, and SBA loan applications. This calculator applies industry-standard EBITDA multiples to estimate market value.",
  bullets: [
    "Estimated Value = EBITDA × Industry Multiple (typically 4.5×–6.5×)",
    "Strong optical capture and recurring patients support premium multiples",
    "Median independent practice sells at ~5.2× EBITDA",
  ],
  audience: "Built for practice owners planning an exit, buyers evaluating acquisitions, and brokers pricing listings.",
};

export type ValuationInputs = {
  revenue: number;
  ebitda: number;
  ebitdaMultiple: number;
  opticalRevenuePct: number;
};

export const defaultInputs: ValuationInputs = {
  revenue: 1350000,
  ebitda: 324000,
  ebitdaMultiple: 5.2,
  opticalRevenuePct: 58,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.8× – 1.4×", median: 1.1 },
  { label: "EBITDA Multiple", range: "4.5× – 6.5×", median: 5.2 },
  { label: "Goodwill %", range: "60 – 80%", median: 70 },
] as const;

export function calculateValuation(inputs: ValuationInputs) {
  const ebitdaValue = inputs.ebitda * inputs.ebitdaMultiple;
  const revenueValue = inputs.revenue * 1.1;
  const valueLow = inputs.ebitda * 4.5;
  const valueHigh = inputs.ebitda * 6.5;
  const ebitdaMargin = inputs.revenue > 0 ? (inputs.ebitda / inputs.revenue) * 100 : 0;
  const multiplePremium = inputs.opticalRevenuePct >= 60 ? 0.3 : inputs.opticalRevenuePct >= 50 ? 0 : -0.2;

  return {
    ebitdaValue,
    revenueValue,
    recommendedValue: ebitdaValue,
    valueLow,
    valueHigh,
    ebitdaMargin,
    adjustedMultiple: inputs.ebitdaMultiple + multiplePremium,
  };
}

export function formatMultiple(value: number): string {
  return `${value.toFixed(2)}×`;
}

export const faqs = [
  {
    question: "How are optometry practices valued?",
    answer:
      "Most optometry practices are valued using EBITDA multiples (4.5×–6.5×). A practice with $324K EBITDA at 5.2× would be worth ~$1.68M before adjusting for optical capture, payer mix, and location.",
  },
  {
    question: "What is a good EBITDA multiple for an optometry practice?",
    answer:
      "The median EBITDA multiple is 5.2×. Practices with 60%+ optical capture, strong contact lens replenishment, and medical eye care billing command 5.5×–6.5×. Vision-plan-heavy exam-only clinics may sell at 4.5×–5.0×.",
  },
  {
    question: "How much is a $1.35M optometry practice worth?",
    answer:
      "A practice with $1.35M revenue and $324K EBITDA (24% margin) typically sells for $1.46M–$2.11M (4.5×–6.5× EBITDA), with a median around $1.68M at 5.2×.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/optometry-practice-valuation/");
export { optometryIndustryAverages, optometryDataLinks, formatCurrency };
