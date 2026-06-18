import {
  formatCurrency,
  formatPercent,
  cleaningBusinessIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/cleaning-business-calculators-shared";

export const meta = {
  title: "Cleaning Business Customer Lifetime Value Calculator & LTV Tool",
  shortTitle: "Cleaning Business Customer LTV Calculator",
  subtitle:
    "Estimate customer lifetime value from contract value, retention rate, and upsell revenue.",
  description:
    "Free cleaning business customer lifetime value calculator. Model LTV from annual contract value, retention, and specialty upsells against industry benchmarks.",
};

export const introContent = {
  lead: "Customer lifetime value drives cleaning business economics. Recurring contracts with high retention create compounding revenue — this calculator estimates LTV from your contract economics and benchmarks against top operators.",
  bullets: [
    "LTV = (Annual Contract Value + Upsells) × Average Customer Lifespan",
    "Industry median LTV ranges from $1,200 – $6,000 per customer",
    "Retention above 80% significantly increases lifetime value",
  ],
  audience:
    "Built for cleaning business owners pricing contracts, evaluating marketing CAC payback, and planning customer retention programs.",
};

export type LtvInputs = {
  annualContractValue: number;
  retentionRatePct: number;
  annualUpsellRevenue: number;
  acquisitionCost: number;
};

export const defaultInputs: LtvInputs = {
  annualContractValue: 2400,
  retentionRatePct: 80,
  annualUpsellRevenue: 150,
  acquisitionCost: 120,
};

export const ltvBenchmarks = [
  { metric: "Annual Contract Value", range: "$1,200 – $8,000" },
  { metric: "Customer Retention Rate", range: "75 – 85%" },
  { metric: "Customer Lifetime Value", range: "$1,200 – $6,000" },
  { metric: "Customer Acquisition Cost", range: "$80 – $200" },
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
  const vsBenchmark = lifetimeValue - cleaningBusinessIndustryAverages.customerLtv;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (lifetimeValue < 1200) tier = "Below";
  else if (lifetimeValue >= 4000) tier = "Strong";

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
    question: "What is a good customer lifetime value for a cleaning business?",
    answer:
      "Strong cleaning operators achieve $1,200–$6,000 customer lifetime value, with a median near $2,000. Higher LTV comes from weekly residential contracts, commercial accounts, and retention above 80%.",
  },
  {
    question: "How do you calculate cleaning business customer LTV?",
    answer:
      "LTV equals annual contract value (plus upsells) multiplied by average customer lifespan. Lifespan can be estimated as 1 ÷ (1 − retention rate). At 80% retention, average lifespan is ~5 years.",
  },
  {
    question: "What retention rate should a cleaning business target?",
    answer:
      "Top operators maintain 75–85% annual account retention. Below 70% signals service quality issues, pricing problems, or weak contract renewal processes. Each point of retention improvement compounds LTV significantly.",
  },
  {
    question: "What is a healthy LTV-to-CAC ratio for cleaning?",
    answer:
      "A healthy LTV-to-CAC ratio for cleaning businesses is 3:1 or higher. With $120 acquisition cost and $2,000 LTV, the ratio is ~16:1 — one reason recurring cleaning contracts are attractive to buyers.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/cleaning-business-customer-lifetime-value/");
export { cleaningBusinessIndustryAverages, formatCurrency, formatPercent };
