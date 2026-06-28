import {
  formatCurrency,
  formatPercent,
  relatedYogaCalculators,
  yogaIndustryAverages,
} from "@/lib/industries/yoga-calculators-shared";

export const meta = {
  title: "Yoga Client Lifetime Value Calculator & LTV Tool",
  shortTitle: "Client Lifetime Value Calculator",
  subtitle: "Estimate client lifetime value from monthly ARPU, churn rate, and acquisition cost.",
  description:
    "Free yoga client LTV calculator. Model lifetime value from revenue per member, monthly churn, and CAC against boutique studio benchmarks.",
};

export const introContent = {
  lead: "Client lifetime value tells you how much a paying yoga member is worth over their full membership — and whether your marketing spend pays back. Community-driven studios often see $2,100–$3,600 LTV due to workshop upsells and strong retention.",
  bullets: [
    "Avg. Lifespan (months) ≈ 1 ÷ Monthly Churn Rate",
    "LTV = Monthly ARPU × Average Lifespan (months)",
    "Healthy LTV:CAC ratio is 3:1 or higher",
  ],
  audience: "Built for studio owners evaluating intro offers, referral programs, and community retention investments.",
};

export type ClientLtvInputs = {
  monthlyRevenuePerMember: number;
  monthlyChurnPct: number;
  acquisitionCost: number;
};

export const defaultInputs: ClientLtvInputs = {
  monthlyRevenuePerMember: 138,
  monthlyChurnPct: 4.8,
  acquisitionCost: 140,
};

export const ltvBenchmarks = [
  { metric: "Revenue Per Member", range: "$105 – $185/mo" },
  { metric: "Monthly Churn", range: "3.5 – 7%" },
  { metric: "Client LTV", range: "$2,100 – $3,600" },
  { metric: "Customer Acquisition Cost", range: "$80 – $220" },
] as const;

export function calculateAverageLifespanMonths(monthlyChurnPct: number): number {
  if (monthlyChurnPct <= 0) return 60;
  if (monthlyChurnPct >= 100) return 1;
  return 1 / (monthlyChurnPct / 100);
}

export function calculateClientLtv(inputs: ClientLtvInputs) {
  const avgLifespanMonths = calculateAverageLifespanMonths(inputs.monthlyChurnPct);
  const lifetimeValue = inputs.monthlyRevenuePerMember * avgLifespanMonths;
  const ltvToCacRatio = inputs.acquisitionCost > 0 ? lifetimeValue / inputs.acquisitionCost : 0;
  const annualRetentionPct = (1 - inputs.monthlyChurnPct / 100) ** 12 * 100;
  const vsBenchmark = lifetimeValue - yogaIndustryAverages.clientLtv;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (lifetimeValue < 2_100) tier = "Below";
  else if (lifetimeValue >= 3_400) tier = "Strong";

  let cacTier: "Weak" | "Healthy" | "Strong" = "Healthy";
  if (ltvToCacRatio < 2) cacTier = "Weak";
  else if (ltvToCacRatio >= 4) cacTier = "Strong";

  return { avgLifespanMonths, lifetimeValue, ltvToCacRatio, annualRetentionPct, vsBenchmark, tier, cacTier };
}

export const faqs = [
  {
    question: "How do you calculate yoga client LTV?",
    answer:
      "LTV equals monthly revenue per member multiplied by average membership lifespan in months. Lifespan can be estimated as 1 ÷ monthly churn rate. At $138/mo and 4.8% churn, lifespan is ~21 months and LTV is ~$2,898.",
  },
  {
    question: "What is a good client LTV for a yoga studio?",
    answer:
      "Community-driven yoga studios typically see $2,100–$3,600 LTV depending on workshop upsells and retention. Higher ARPU and lower churn drive top-quartile LTV.",
  },
  {
    question: "What LTV:CAC ratio should a yoga studio target?",
    answer:
      "A 3:1 LTV:CAC ratio is the minimum for sustainable growth. Top studios achieve 4:1+ by lowering CAC through member referrals while improving intro-to-membership conversion.",
  },
] as const;

export const relatedTools = relatedYogaCalculators("/calculators/yoga-client-lifetime-value/");
export { yogaIndustryAverages, formatCurrency, formatPercent };
