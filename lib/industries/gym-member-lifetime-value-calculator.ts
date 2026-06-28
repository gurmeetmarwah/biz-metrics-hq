import {
  formatCurrency,
  formatPercent,
  gymIndustryAverages,
  relatedGymCalculators,
} from "@/lib/industries/gym-calculators-shared";

export const meta = {
  title: "Gym Member Lifetime Value Calculator & LTV Tool",
  shortTitle: "Member Lifetime Value Calculator",
  subtitle:
    "Estimate member lifetime value from monthly revenue per member, churn rate, and acquisition cost.",
  description:
    "Free gym member LTV calculator. Model lifetime value from revenue per member, monthly churn, and CAC against HFA-informed fitness benchmarks.",
};

export const introContent = {
  lead: "Member lifetime value tells you how much a paying member is worth over their full membership — and whether your marketing spend pays back. This calculator uses monthly revenue and churn to estimate LTV and LTV:CAC ratio.",
  bullets: [
    "Avg. Lifespan (months) ≈ 1 ÷ Monthly Churn Rate",
    "LTV = Monthly Revenue per Member × Average Lifespan (months)",
    "Healthy LTV:CAC ratio is 3:1 or higher",
  ],
  audience:
    "Built for gym owners evaluating marketing ROI, referral programs, and retention investments.",
};

export type MemberLtvInputs = {
  monthlyRevenuePerMember: number;
  monthlyChurnPct: number;
  acquisitionCost: number;
};

export const defaultInputs: MemberLtvInputs = {
  monthlyRevenuePerMember: 43,
  monthlyChurnPct: 4,
  acquisitionCost: 140,
};

export const ltvBenchmarks = [
  { metric: "Revenue Per Member", range: "$43 – $65/mo" },
  { metric: "Monthly Churn", range: "3 – 5%" },
  { metric: "Member LTV", range: "$500 – $900" },
  { metric: "Customer Acquisition Cost", range: "$80 – $200" },
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
  const vsBenchmark = lifetimeValue - gymIndustryAverages.memberLtv;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (lifetimeValue < 500) tier = "Below";
  else if (lifetimeValue >= 900) tier = "Strong";

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
    question: "How do you calculate gym member LTV?",
    answer:
      "LTV equals monthly revenue per member multiplied by average membership lifespan in months. Lifespan can be estimated as 1 ÷ monthly churn rate. At $43/mo and 4% churn, lifespan is ~25 months and LTV is ~$1,075.",
  },
  {
    question: "What is a good member LTV for a gym?",
    answer:
      "Mid-market independent gyms typically see $500–$900 LTV depending on upsell revenue and retention. Higher LTV comes from personal training penetration, low churn, and premium pricing tiers.",
  },
  {
    question: "What LTV:CAC ratio should a gym target?",
    answer:
      "A 3:1 LTV:CAC ratio is the widely cited minimum for sustainable growth. Top operators achieve 4:1 or higher, often by lowering CAC through referrals while improving retention.",
  },
  {
    question: "How does churn affect member LTV?",
    answer:
      "Churn has an outsized impact because lifespan is 1 ÷ churn. Reducing monthly churn from 5% to 4% extends average lifespan from 20 to 25 months — a 25% LTV increase at the same revenue per member.",
  },
] as const;

export const relatedTools = relatedGymCalculators("/calculators/gym-member-lifetime-value/");
export { gymIndustryAverages, formatCurrency, formatPercent };
