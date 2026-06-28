import {
  formatCurrency,
  formatPercent,
  relatedCrossfitCalculators,
  crossfitIndustryAverages,
} from "@/lib/industries/crossfit-calculators-shared";

export const meta = {
  title: "CrossFit Gym Revenue Calculator & Annual Income Projection Tool",
  shortTitle: "CrossFit Revenue Calculator",
  subtitle:
    "Project annual CrossFit affiliate revenue from active members, memberships, personal training, nutrition, and ancillary income.",
  description:
    "Free CrossFit gym revenue calculator. Estimate annual revenue, MRR, and revenue mix from membership fees, PT, nutrition coaching, and events.",
};

export const introContent = {
  lead: "CrossFit affiliate revenue is driven by membership MRR and coach-led upsells — personal training, nutrition, foundations programs, and events. This calculator projects annual revenue from your member base and supplemental income streams.",
  bullets: [
    "Membership MRR = Active Members × Average Monthly Dues",
    "Total Revenue = (MRR + Ancillary Monthly) × 12",
    "Median CrossFit affiliate revenue is ~$950K with ~91% recurring-weighted income",
  ],
  audience:
    "Built for CrossFit box owners forecasting revenue, pricing membership tiers, and modeling PT and nutrition income.",
};

export type CrossfitRevenueInputs = {
  activeMembers: number;
  monthlyMembershipFee: number;
  monthlyPersonalTraining: number;
  monthlyNutritionCoaching: number;
  monthlyFoundationsRetail: number;
  monthlyEventsMerch: number;
};

export const defaultInputs: CrossfitRevenueInputs = {
  activeMembers: 320,
  monthlyMembershipFee: 185,
  monthlyPersonalTraining: 8_500,
  monthlyNutritionCoaching: 5_200,
  monthlyFoundationsRetail: 3_800,
  monthlyEventsMerch: 2_100,
};

export const revenueBenchmarks = [
  { metric: "Median Annual Revenue", range: "$520K – $1.25M" },
  { metric: "Membership Share of Revenue", range: "52 – 65%" },
  { metric: "Revenue Per Member", range: "$165 – $285/mo" },
  { metric: "Median Active Members", range: "180 – 380" },
] as const;

export function calculateCrossfitRevenue(inputs: CrossfitRevenueInputs) {
  const membershipMrr = inputs.activeMembers * inputs.monthlyMembershipFee;
  const ancillaryMrr =
    inputs.monthlyPersonalTraining +
    inputs.monthlyNutritionCoaching +
    inputs.monthlyFoundationsRetail +
    inputs.monthlyEventsMerch;
  const totalMrr = membershipMrr + ancillaryMrr;
  const annualRevenue = totalMrr * 12;
  const membershipPct = totalMrr > 0 ? (membershipMrr / totalMrr) * 100 : 0;
  const revenuePerMember = inputs.activeMembers > 0 ? totalMrr / inputs.activeMembers : 0;
  const vsBenchmarkRevenue = annualRevenue - crossfitIndustryAverages.revenue;
  const vsBenchmarkRpc = revenuePerMember - crossfitIndustryAverages.revenuePerMemberMonthly;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (annualRevenue < 520_000) tier = "Below";
  else if (annualRevenue >= 1_000_000) tier = "Strong";

  return {
    membershipMrr,
    ancillaryMrr,
    totalMrr,
    annualRevenue,
    membershipPct,
    revenuePerMember,
    vsBenchmarkRevenue,
    vsBenchmarkRpc,
    tier,
  };
}

export const faqs = [
  {
    question: "How do you calculate CrossFit gym revenue?",
    answer:
      "Annual revenue equals total monthly revenue × 12. Total monthly revenue includes membership MRR (active members × average dues) plus personal training, nutrition coaching, foundations programs, retail, and events.",
  },
  {
    question: "What is average CrossFit gym revenue per member?",
    answer:
      "Well-run CrossFit affiliates typically generate $165–$285 per member per month when PT and nutrition upsells are included. The median is ~$210/mo across a mature member base.",
  },
  {
    question: "How many members does a $950K box need?",
    answer:
      "At ~$210/mo revenue per member, roughly 4,500 member-months of revenue are needed annually — about 280–380 active members when ancillary income is included.",
  },
] as const;

export const relatedTools = relatedCrossfitCalculators("/calculators/crossfit-gym-revenue/");
export { crossfitIndustryAverages, formatCurrency, formatPercent };
