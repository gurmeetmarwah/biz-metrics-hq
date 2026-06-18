import {
  formatCurrency,
  formatPercent,
  pestControlIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/pest-control-calculators-shared";

export const meta = {
  title: "Pest Control Customer Lifetime Value Calculator & LTV Tool",
  shortTitle: "Pest Control Customer LTV Calculator",
  subtitle:
    "Estimate customer lifetime value from contract value, retention rate, and upsell revenue.",
  description:
    "Free pest control customer lifetime value calculator. Model LTV from annual contract value, retention, and termite or mosquito upsells against industry benchmarks.",
};

export const introContent = {
  lead: "Customer lifetime value is the foundation of pest control economics. Subscription contracts with high retention create compounding revenue — this calculator estimates LTV from your contract economics and benchmarks against top operators.",
  bullets: [
    "LTV = (Annual Contract Value + Upsells) × Average Customer Lifespan",
    "Industry median LTV ranges from $1,500 – $4,000 per customer",
    "Retention above 85% significantly increases lifetime value",
  ],
  audience:
    "Built for pest control owners pricing contracts, evaluating marketing CAC payback, and planning customer retention programs.",
};

export type LtvInputs = {
  annualContractValue: number;
  retentionRatePct: number;
  annualUpsellRevenue: number;
  acquisitionCost: number;
};

export const defaultInputs: LtvInputs = {
  annualContractValue: 500,
  retentionRatePct: 85,
  annualUpsellRevenue: 75,
  acquisitionCost: 150,
};

export const ltvBenchmarks = [
  { metric: "Annual Contract Value", range: "$350 – $900" },
  { metric: "Customer Retention Rate", range: "82 – 88%" },
  { metric: "Customer Lifetime Value", range: "$1,500 – $4,000" },
  { metric: "Customer Acquisition Cost", range: "$100 – $250" },
] as const;

export function calculateAverageLifespan(retentionRatePct: number): number {
  if (retentionRatePct <= 0 || retentionRatePct >= 100) return 1;
  return 1 / (1 - retentionRatePct / 100);
}

export function calculateCustomerLtv(inputs: LtvInputs) {
  const annualValue = inputs.annualContractValue + inputs.annualUpsellRevenue;
  const avgLifespanYears = calculateAverageLifespan(inputs.retentionRatePct);
  const lifetimeValue = annualValue * avgLifespanYears;
  const ltvToCacRatio = inputs.acquisitionCost > 0 ? lifetimeValue / inputs.acquisitionCost : 0;
  const vsBenchmark = lifetimeValue - pestControlIndustryAverages.customerLtv;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (lifetimeValue < 1500) tier = "Below";
  else if (lifetimeValue >= 3000) tier = "Strong";

  return {
    annualValue,
    avgLifespanYears,
    lifetimeValue,
    ltvToCacRatio,
    vsBenchmark,
    tier,
  };
}

export const faqs = [
  {
    question: "What is a good customer lifetime value for pest control?",
    answer:
      "Strong pest control operators achieve $1,500–$4,000 customer lifetime value, with a median near $2,500. Higher LTV comes from quarterly contracts, termite upsells, and retention above 85%.",
  },
  {
    question: "How do you calculate pest control customer LTV?",
    answer:
      "LTV equals annual contract value (plus upsells) multiplied by average customer lifespan. Lifespan can be estimated as 1 ÷ (1 − retention rate). At 85% retention, average lifespan is ~6.7 years.",
  },
  {
    question: "What retention rate should a pest control company target?",
    answer:
      "Top operators maintain 82–88% annual account retention. Below 80% signals service quality issues, pricing problems, or weak contract renewal processes. Each point of retention improvement compounds LTV significantly.",
  },
  {
    question: "What is a healthy LTV-to-CAC ratio?",
    answer:
      "A healthy LTV-to-CAC ratio for pest control is 3:1 or higher. With $150 acquisition cost and $2,500 LTV, the ratio is ~16:1 — one reason subscription pest control is attractive to investors.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/pest-control-customer-lifetime-value/");
export { pestControlIndustryAverages, formatCurrency, formatPercent };
