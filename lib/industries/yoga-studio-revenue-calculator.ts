import {
  formatCurrency,
  formatPercent,
  relatedYogaCalculators,
  yogaIndustryAverages,
} from "@/lib/industries/yoga-calculators-shared";

export const meta = {
  title: "Yoga Studio Revenue Calculator & Annual Income Projection Tool",
  shortTitle: "Yoga Studio Revenue Calculator",
  subtitle:
    "Project annual yoga studio revenue from active members, memberships, workshops, teacher training, and retail.",
  description:
    "Free yoga studio revenue calculator. Estimate annual revenue, MRR, and revenue mix from membership fees, class packages, workshops, and teacher training.",
};

export const introContent = {
  lead: "Yoga studio revenue is driven by active members and community engagement — plus workshops, teacher training, and retreats. This calculator projects annual revenue from your membership base and supplemental income streams.",
  bullets: [
    "Membership MRR = Active Members × Average Monthly Dues",
    "Total Revenue = (MRR + Ancillary Monthly) × 12",
    "Median boutique yoga studio revenue is ~$620K with ~88% recurring-weighted income",
  ],
  audience:
    "Built for yoga studio owners forecasting revenue, pricing membership tiers, and modeling workshop and teacher training income.",
};

export type YogaRevenueInputs = {
  activeMembers: number;
  monthlyMembershipFee: number;
  monthlyClassPackages: number;
  monthlyWorkshopsRetreats: number;
  monthlyTeacherTrainingRetail: number;
};

export const defaultInputs: YogaRevenueInputs = {
  activeMembers: 220,
  monthlyMembershipFee: 119,
  monthlyClassPackages: 6_500,
  monthlyWorkshopsRetreats: 5_800,
  monthlyTeacherTrainingRetail: 3_200,
};

export const revenueBenchmarks = [
  { metric: "Median Annual Revenue", range: "$320K – $850K" },
  { metric: "Membership Share of Revenue", range: "38 – 48%" },
  { metric: "Revenue Per Member", range: "$105 – $185/mo" },
  { metric: "Median Active Members", range: "150 – 300" },
] as const;

export function calculateYogaRevenue(inputs: YogaRevenueInputs) {
  const membershipMrr = inputs.activeMembers * inputs.monthlyMembershipFee;
  const ancillaryMrr =
    inputs.monthlyClassPackages + inputs.monthlyWorkshopsRetreats + inputs.monthlyTeacherTrainingRetail;
  const totalMrr = membershipMrr + ancillaryMrr;
  const annualRevenue = totalMrr * 12;
  const membershipPct = totalMrr > 0 ? (membershipMrr / totalMrr) * 100 : 0;
  const revenuePerMember = inputs.activeMembers > 0 ? totalMrr / inputs.activeMembers : 0;
  const vsBenchmarkRevenue = annualRevenue - yogaIndustryAverages.revenue;
  const vsBenchmarkRpc = revenuePerMember - yogaIndustryAverages.revenuePerMemberMonthly;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (annualRevenue < 320_000) tier = "Below";
  else if (annualRevenue >= 850_000) tier = "Strong";

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
    question: "How do you calculate yoga studio revenue?",
    answer:
      "Annual revenue equals total monthly revenue × 12. Total monthly revenue includes membership MRR (active members × average dues) plus class packages, workshops, retreats, teacher training, and retail.",
  },
  {
    question: "What is average yoga studio revenue per member?",
    answer:
      "Well-run boutique yoga studios typically generate $105–$185 per member per month when workshops and retail are included. The median is ~$138/mo across a mature member base.",
  },
  {
    question: "How many members does a $620K studio need?",
    answer:
      "At ~$138/mo revenue per member, roughly 375 member-months of revenue are needed annually — about 180–250 active members when workshop and teacher training income is included.",
  },
] as const;

export const relatedTools = relatedYogaCalculators("/calculators/yoga-studio-revenue/");
export { yogaIndustryAverages, formatCurrency, formatPercent };
