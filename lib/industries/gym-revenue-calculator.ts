import {
  formatCurrency,
  formatPercent,
  gymIndustryAverages,
  relatedGymCalculators,
} from "@/lib/industries/gym-calculators-shared";

export const meta = {
  title: "Gym Revenue Calculator & Annual Income Projection Tool",
  shortTitle: "Gym Revenue Calculator",
  subtitle:
    "Project annual gym revenue from active members, membership dues, personal training, and ancillary income.",
  description:
    "Free gym revenue calculator. Estimate annual revenue, MRR, and revenue mix from membership fees, PT, classes, and retail against industry benchmarks.",
};

export const introContent = {
  lead: "Gym revenue is driven by active members and revenue per member — not just headcount. This calculator projects annual revenue from your membership base and ancillary income streams, then benchmarks against typical independent gym economics.",
  bullets: [
    "Membership MRR = Active Members × Average Monthly Dues",
    "Total Revenue = (MRR + Ancillary Monthly) × 12",
    "Median independent gym revenue is ~$1.2M with ~62% from memberships",
  ],
  audience:
    "Built for gym owners forecasting revenue, pricing membership tiers, and modeling personal training penetration.",
};

export type GymRevenueInputs = {
  activeMembers: number;
  monthlyMembershipFee: number;
  monthlyPersonalTraining: number;
  monthlyClasses: number;
  monthlyRetailOther: number;
};

export const defaultInputs: GymRevenueInputs = {
  activeMembers: 1200,
  monthlyMembershipFee: 48,
  monthlyPersonalTraining: 25_000,
  monthlyClasses: 11_000,
  monthlyRetailOther: 6_400,
};

export const revenueBenchmarks = [
  { metric: "Median Annual Revenue", range: "$650K – $1.8M" },
  { metric: "Membership Share of Revenue", range: "55 – 70%" },
  { metric: "Revenue Per Member", range: "$43 – $65/mo" },
  { metric: "Median Active Members", range: "400 – 1,400" },
] as const;

export function calculateGymRevenue(inputs: GymRevenueInputs) {
  const membershipMrr = inputs.activeMembers * inputs.monthlyMembershipFee;
  const ancillaryMrr =
    inputs.monthlyPersonalTraining + inputs.monthlyClasses + inputs.monthlyRetailOther;
  const totalMrr = membershipMrr + ancillaryMrr;
  const annualRevenue = totalMrr * 12;
  const membershipPct = totalMrr > 0 ? (membershipMrr / totalMrr) * 100 : 0;
  const revenuePerMember = inputs.activeMembers > 0 ? totalMrr / inputs.activeMembers : 0;
  const vsBenchmarkRevenue = annualRevenue - gymIndustryAverages.revenue;
  const vsBenchmarkRpm = revenuePerMember - gymIndustryAverages.revenuePerMemberMonthly;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (annualRevenue < 650_000) tier = "Below";
  else if (annualRevenue >= 1_500_000) tier = "Strong";

  return {
    membershipMrr,
    ancillaryMrr,
    totalMrr,
    annualRevenue,
    membershipPct,
    revenuePerMember,
    vsBenchmarkRevenue,
    vsBenchmarkRpm,
    tier,
  };
}

export const faqs = [
  {
    question: "How do you calculate gym revenue?",
    answer:
      "Annual gym revenue equals total monthly revenue × 12. Total monthly revenue includes membership MRR (active members × average dues) plus personal training, group classes, retail, and other ancillary income.",
  },
  {
    question: "What is average gym revenue per member?",
    answer:
      "HFA industry data suggests ~$517 per member per year (~$43/mo). Independent gyms with strong personal training penetration often reach $50–$65 per member per month.",
  },
  {
    question: "How many members does a $1.2M gym need?",
    answer:
      "At $43/mo revenue per member, roughly 2,325 member-months of revenue are needed — about 850–1,000 active members when ancillary income is included. At dues-only economics ($38/mo median), you need more members or higher upsell revenue.",
  },
  {
    question: "What percentage of gym revenue should come from memberships?",
    answer:
      "Typical independent gyms derive 55–70% of revenue from membership dues, with personal training and classes providing margin-rich supplemental income. Heavy PT penetration lowers membership share but can increase total revenue per member.",
  },
] as const;

export const relatedTools = relatedGymCalculators("/calculators/gym-revenue/");
export { gymIndustryAverages, formatCurrency, formatPercent };
