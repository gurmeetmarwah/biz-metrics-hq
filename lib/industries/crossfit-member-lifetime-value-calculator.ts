import {
  formatCurrency,
  formatPercent,
  relatedCrossfitCalculators,
  crossfitIndustryAverages,
} from "@/lib/industries/crossfit-calculators-shared";

export const meta = {
  title: "CrossFit Member Lifetime Value Calculator & LTV Tool",
  shortTitle: "Member Lifetime Value Calculator",
  subtitle: "Estimate member lifetime value from monthly ARPU, churn rate, and acquisition cost.",
  description:
    "Free CrossFit member LTV calculator. Model lifetime value from revenue per member, monthly churn, and CAC against affiliate benchmarks.",
};

export const introContent = {
  lead: "Member lifetime value tells you how much a paying CrossFit member is worth over their full membership — and whether your marketing spend pays back. Community-driven affiliates often see $3,400–$5,800 LTV due to nutrition and PT upsells.",
  bullets: [
    "Avg. Lifespan (months) ≈ 1 ÷ Monthly Churn Rate",
    "LTV = Monthly ARPU × Average Lifespan (months)",
    "Healthy LTV:CAC ratio is 3:1 or higher",
  ],
  audience: "Built for box owners evaluating intro offers, referral programs, and community retention investments.",
};

export type MemberLtvInputs = {
  monthlyRevenuePerMember: number;
  monthlyChurnPct: number;
  acquisitionCost: number;
};

export const defaultInputs: MemberLtvInputs = {
  monthlyRevenuePerMember: 210,
  monthlyChurnPct: 4.2,
  acquisitionCost: 180,
};

export const ltvBenchmarks = [
  { metric: "Revenue Per Member", range: "$165 – $285/mo" },
  { metric: "Monthly Churn", range: "2.8 – 6.5%" },
  { metric: "Member LTV", range: "$3,400 – $5,800" },
  { metric: "Customer Acquisition Cost", range: "$120 – $280" },
] as const;

export function calculateAverageLifespanMonths(monthlyChurnPct: number): number {
  if (monthlyChurnPct <= 0) return 60;
  if (monthlyChurnPct >= 100) return 1;
  return 1 / (monthlyChurnPct / 100);
}

export function calculateMemberLtv(inputs: MemberLtvInputs) {
  const avgLifespanMonths = calculateAverageLifespanMonths(inputs.monthlyChurnPct);
  const lifetimeValue = inputs.monthlyRevenuePerMember * avgLifespanMonths;
  const ltvToCacRatio = inputs.acquisitionCost > 0 ? lifetimeValue / inputs.acquisitionCost : 0;
  const annualRetentionPct = (1 - inputs.monthlyChurnPct / 100) ** 12 * 100;
  const vsBenchmark = lifetimeValue - crossfitIndustryAverages.memberLtv;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (lifetimeValue < 3_400) tier = "Below";
  else if (lifetimeValue >= 5_200) tier = "Strong";

  let cacTier: "Weak" | "Healthy" | "Strong" = "Healthy";
  if (ltvToCacRatio < 2) cacTier = "Weak";
  else if (ltvToCacRatio >= 4) cacTier = "Strong";

  return { avgLifespanMonths, lifetimeValue, ltvToCacRatio, annualRetentionPct, vsBenchmark, tier, cacTier };
}

export const faqs = [
  {
    question: "How do you calculate CrossFit member LTV?",
    answer:
      "LTV equals monthly revenue per member multiplied by average membership lifespan in months. Lifespan can be estimated as 1 ÷ monthly churn rate. At $210/mo and 4.2% churn, lifespan is ~24 months and LTV is ~$5,040.",
  },
  {
    question: "What is a good member LTV for a CrossFit gym?",
    answer:
      "Community-driven affiliates typically see $3,400–$5,800 LTV depending on PT and nutrition upsells. Higher ARPU and lower churn drive top-quartile LTV.",
  },
  {
    question: "What LTV:CAC ratio should a CrossFit gym target?",
    answer:
      "A 3:1 LTV:CAC ratio is the minimum for sustainable growth. Top affiliates achieve 4:1+ by lowering CAC through member referrals while improving foundations-to-membership conversion.",
  },
] as const;

export const relatedTools = relatedCrossfitCalculators("/calculators/crossfit-member-lifetime-value/");
export { crossfitIndustryAverages, formatCurrency, formatPercent };
