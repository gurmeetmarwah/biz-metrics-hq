import {
  formatCurrency,
  formatPercent,
  poolServiceIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/pool-service-calculators-shared";

export const meta = {
  title: "Pool Service Customer Lifetime Value Calculator & LTV Tool",
  shortTitle: "Pool Service Customer LTV Calculator",
  subtitle:
    "Estimate customer lifetime value from monthly contract value, retention rate, and repair upsells.",
  description:
    "Free pool service customer lifetime value calculator. Model LTV from contract value, retention, and equipment repair upsells against industry benchmarks.",
};

export const introContent = {
  lead: "Customer lifetime value drives pool service economics. Monthly service contracts with high retention create compounding revenue — this calculator estimates LTV from your contract economics and benchmarks against top operators.",
  bullets: [
    "LTV = (Monthly Contract Value × 12 + Annual Upsells) × Average Customer Lifespan",
    "Industry median LTV ranges from $2,800 – $6,500 per customer",
    "Retention above 85% significantly increases lifetime value",
  ],
  audience:
    "Built for pool service owners pricing contracts, evaluating marketing CAC payback, and planning retention programs.",
};

export type LtvInputs = {
  monthlyContractValue: number;
  retentionRatePct: number;
  annualUpsellRevenue: number;
  acquisitionCost: number;
};

export const defaultInputs: LtvInputs = {
  monthlyContractValue: 125,
  retentionRatePct: 88,
  annualUpsellRevenue: 200,
  acquisitionCost: 250,
};

export const ltvBenchmarks = [
  { metric: "Monthly Contract Value", range: "$95 – $165" },
  { metric: "Customer Retention Rate", range: "85 – 92%" },
  { metric: "Customer Lifetime Value", range: "$2,800 – $6,500" },
  { metric: "Customer Acquisition Cost", range: "$150 – $350" },
] as const;

export function calculateAverageLifespan(retentionRatePct: number): number {
  if (retentionRatePct <= 0 || retentionRatePct >= 100) return 1;
  return 1 / (1 - retentionRatePct / 100);
}

export function calculateCustomerLtv(inputs: LtvInputs) {
  const annualValue = inputs.monthlyContractValue * 12 + inputs.annualUpsellRevenue;
  const avgLifespanYears = calculateAverageLifespan(inputs.retentionRatePct);
  const lifetimeValue = annualValue * avgLifespanYears;
  const ltvToCacRatio = inputs.acquisitionCost > 0 ? lifetimeValue / inputs.acquisitionCost : 0;
  const vsBenchmark = lifetimeValue - poolServiceIndustryAverages.customerLtv;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (lifetimeValue < 2800) tier = "Below";
  else if (lifetimeValue >= 5000) tier = "Strong";

  return { annualValue, avgLifespanYears, lifetimeValue, ltvToCacRatio, vsBenchmark, tier };
}

export const faqs = [
  {
    question: "What is a good customer lifetime value for pool service?",
    answer:
      "Strong pool service operators achieve $2,800–$6,500 customer lifetime value, with a median near $4,200. Higher LTV comes from repair upsells, saltwater conversions, and retention above 88%.",
  },
  {
    question: "How do you calculate pool service customer LTV?",
    answer:
      "LTV equals annual contract value (monthly fee × 12 plus upsells) multiplied by average customer lifespan. At 88% retention, average lifespan is ~8.3 years.",
  },
  {
    question: "What retention rate should a pool service target?",
    answer:
      "Top operators maintain 85–92% annual account retention. Below 80% signals service quality issues, pricing problems, or weak contract renewal processes.",
  },
  {
    question: "What is a healthy LTV-to-CAC ratio for pool service?",
    answer:
      "A healthy LTV-to-CAC ratio for pool service is 3:1 or higher. With $250 acquisition cost and $4,200 LTV, the ratio is ~16:1 — supporting aggressive route growth marketing.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/pool-service-customer-lifetime-value/");
export { poolServiceIndustryAverages, formatCurrency, formatPercent };
