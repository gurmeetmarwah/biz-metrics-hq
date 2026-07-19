import {
  formatCurrency,
  barbershopDataLinks,
  barbershopIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/barbershop-calculators-shared";

export const meta = {
  title: "Barbershop Membership Revenue Calculator & MRR Tool",
  shortTitle: "Membership Revenue Calculator",
  subtitle: "Model monthly recurring revenue from active members and monthly membership fees.",
  description:
    "Free barbershop membership revenue calculator. Estimate MRR, annual membership revenue, and revenue per member against industry benchmarks.",
};

export const introContent = {
  lead: "Membership MRR is a key growth lever for barbershops. This calculator models recurring revenue from your active member base and benchmarks against typical membership fees.",
  bullets: [
    "Membership MRR = Active Members × Monthly Fee",
    "Annual Membership Revenue = MRR × 12",
    "Membership plans lock in 2–4 week visit cadence and smooth cash flow",
  ],
  audience: "Built for barbershop owners tracking MRR growth, pricing tiers, and recurring revenue quality.",
};

export type MembershipRevenueInputs = {
  activeMembers: number;
  monthlyFee: number;
};

export const defaultInputs: MembershipRevenueInputs = {
  activeMembers: 120,
  monthlyFee: 65,
};

export const industryBenchmarks = [
  { metric: "Monthly Membership Fee", range: "$49 – $99/mo" },
  { metric: "Active Members (median)", range: "60 – 180" },
  { metric: "Membership MRR (median)", range: "$5K – $12K/mo" },
  { metric: "Membership Retention", range: "60 – 78%" },
] as const;

export function calculateMembershipRevenue(inputs: MembershipRevenueInputs) {
  const membershipMrr = inputs.activeMembers * inputs.monthlyFee;
  const annualMembershipRevenue = membershipMrr * 12;
  const revenuePerMember = inputs.activeMembers > 0 ? annualMembershipRevenue / inputs.activeMembers : 0;
  const vsBenchmarkMrr = membershipMrr - barbershopIndustryAverages.membershipMrr;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (membershipMrr < 8000) tier = "Below";
  else if (membershipMrr >= 12000) tier = "Strong";

  return { membershipMrr, annualMembershipRevenue, revenuePerMember, vsBenchmarkMrr, tier };
}

export const faqs = [
  {
    question: "What is MRR for a barbershop?",
    answer:
      "Membership MRR equals active paying members multiplied by average monthly fee. A barbershop with 120 members at $65/mo generates $7,800 in membership MRR — before walk-in cuts and retail.",
  },
  {
    question: "What is a good membership price for a barbershop?",
    answer:
      "Barbershop membership plans typically range $49–$99/mo depending on included cuts and grooming services. Plans bundling unlimited cuts, beard trims, and product discounts command premium pricing.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/barbershop-membership-revenue/");
export { barbershopDataLinks, formatCurrency, barbershopIndustryAverages };
