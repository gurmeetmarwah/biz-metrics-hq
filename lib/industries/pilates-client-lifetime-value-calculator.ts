import {
  formatCurrency,
  formatPercent,
  pilatesIndustryAverages,
  relatedPilatesCalculators,
} from "@/lib/industries/pilates-calculators-shared";

export const meta = {
  title: "Pilates Client Lifetime Value Calculator & LTV Tool",
  shortTitle: "Client Lifetime Value Calculator",
  subtitle:
    "Estimate client lifetime value from monthly ARPU, churn rate, and acquisition cost.",
  description:
    "Free Pilates client LTV calculator. Model lifetime value from revenue per client, monthly churn, and CAC against boutique studio benchmarks.",
};

export const introContent = {
  lead: "Client lifetime value tells you how much a paying Pilates client is worth over their full membership — and whether your marketing spend pays back. Premium studios often see $2,400–$4,200 LTV due to higher ARPU and private session upsells.",
  bullets: [
    "Avg. Lifespan (months) ≈ 1 ÷ Monthly Churn Rate",
    "LTV = Monthly ARPU × Average Lifespan (months)",
    "Healthy LTV:CAC ratio is 3:1 or higher",
  ],
  audience:
    "Built for studio owners evaluating intro offers, referral programs, and retention investments.",
};

export type ClientLtvInputs = {
  monthlyRevenuePerClient: number;
  monthlyChurnPct: number;
  acquisitionCost: number;
};

export const defaultInputs: ClientLtvInputs = {
  monthlyRevenuePerClient: 195,
  monthlyChurnPct: 3.8,
  acquisitionCost: 180,
};

export const ltvBenchmarks = [
  { metric: "Revenue Per Client", range: "$150 – $280/mo" },
  { metric: "Monthly Churn", range: "2.5 – 6%" },
  { metric: "Client LTV", range: "$2,400 – $4,200" },
  { metric: "Customer Acquisition Cost", range: "$120 – $280" },
] as const;

export function calculateAverageLifespanMonths(monthlyChurnPct: number): number {
  if (monthlyChurnPct <= 0) return 60;
  if (monthlyChurnPct >= 100) return 1;
  return 1 / (monthlyChurnPct / 100);
}

export function calculateClientLtv(inputs: ClientLtvInputs) {
  const avgLifespanMonths = calculateAverageLifespanMonths(inputs.monthlyChurnPct);
  const lifetimeValue = inputs.monthlyRevenuePerClient * avgLifespanMonths;
  const ltvToCacRatio = inputs.acquisitionCost > 0 ? lifetimeValue / inputs.acquisitionCost : 0;
  const annualRetentionPct = (1 - inputs.monthlyChurnPct / 100) ** 12 * 100;
  const vsBenchmark = lifetimeValue - pilatesIndustryAverages.clientLtv;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (lifetimeValue < 2_400) tier = "Below";
  else if (lifetimeValue >= 4_000) tier = "Strong";

  let cacTier: "Weak" | "Healthy" | "Strong" = "Healthy";
  if (ltvToCacRatio < 2) cacTier = "Weak";
  else if (ltvToCacRatio >= 4) cacTier = "Strong";

  return {
    avgLifespanMonths,
    lifetimeValue,
    ltvToCacRatio,
    annualRetentionPct,
    vsBenchmark,
    tier,
    cacTier,
  };
}

export const faqs = [
  {
    question: "How do you calculate Pilates client LTV?",
    answer:
      "LTV equals monthly revenue per client multiplied by average membership lifespan in months. Lifespan can be estimated as 1 ÷ monthly churn rate. At $195/mo and 3.8% churn, lifespan is ~26 months and LTV is ~$5,070 before capping outliers.",
  },
  {
    question: "What is a good client LTV for a Pilates studio?",
    answer:
      "Premium reformer studios typically see $2,400–$4,200 LTV depending on private session upsells and retention. Higher ARPU and lower churn drive top-quartile LTV.",
  },
  {
    question: "What LTV:CAC ratio should a Pilates studio target?",
    answer:
      "A 3:1 LTV:CAC ratio is the minimum for sustainable growth. Top studios achieve 4:1+ by lowering CAC through referrals while improving intro-to-membership conversion.",
  },
] as const;

export const relatedTools = relatedPilatesCalculators("/calculators/pilates-client-lifetime-value/");
export { pilatesIndustryAverages, formatCurrency, formatPercent };
