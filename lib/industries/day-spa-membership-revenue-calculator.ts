import {
  formatCurrency,
  daySpaDataLinks,
  daySpaIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/day-spa-calculators-shared";

export const meta = {
  title: "Day Spa Membership Revenue Calculator & MRR Tool",
  shortTitle: "Membership Revenue Calculator",
  subtitle: "Model monthly recurring revenue from active members and monthly membership fees.",
  description:
    "Free day spa membership revenue calculator. Estimate MRR, annual membership revenue, and revenue per member against industry benchmarks.",
};

export const introContent = {
  lead: "Membership MRR is a key growth lever for day spas. This calculator models recurring revenue from your active member base and benchmarks against typical spa membership fees.",
  bullets: [
    "Membership MRR = Active Members × Monthly Fee",
    "Annual Membership Revenue = MRR × 12",
    "Membership plans lock in monthly visit cadence and smooth cash flow",
  ],
  audience: "Built for day spa owners tracking MRR growth, pricing tiers, and recurring revenue quality.",
};

export type MembershipRevenueInputs = {
  activeMembers: number;
  monthlyFee: number;
};

export const defaultInputs: MembershipRevenueInputs = {
  activeMembers: 180,
  monthlyFee: 139,
};

export const industryBenchmarks = [
  { metric: "Monthly Membership Fee", range: "$79 – $199/mo" },
  { metric: "Active Members (median)", range: "80 – 250" },
  { metric: "Membership MRR (median)", range: "$15K – $40K/mo" },
  { metric: "Membership Retention", range: "60 – 78%" },
] as const;

export function calculateMembershipRevenue(inputs: MembershipRevenueInputs) {
  const membershipMrr = inputs.activeMembers * inputs.monthlyFee;
  const annualMembershipRevenue = membershipMrr * 12;
  const revenuePerMember = inputs.activeMembers > 0 ? annualMembershipRevenue / inputs.activeMembers : 0;
  const vsBenchmarkMrr = membershipMrr - daySpaIndustryAverages.membershipMrr;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (membershipMrr < 25000) tier = "Below";
  else if (membershipMrr >= 40000) tier = "Strong";

  return { membershipMrr, annualMembershipRevenue, revenuePerMember, vsBenchmarkMrr, tier };
}

export const faqs = [
  {
    question: "What is MRR for a day spa?",
    answer:
      "Membership MRR equals active paying members multiplied by average monthly fee. A day spa with 180 members at $139/mo generates $25,020 in membership MRR — before à la carte treatments and retail.",
  },
  {
    question: "What is a good membership price for a day spa?",
    answer:
      "Day spa membership plans typically range $79–$199/mo depending on included treatments. Plans bundling monthly massage, facial credits, and retail discounts command premium pricing.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/day-spa-membership-revenue/");
export { daySpaDataLinks, formatCurrency, daySpaIndustryAverages };
