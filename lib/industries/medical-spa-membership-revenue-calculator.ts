import {
  formatCurrency,
  medicalSpaDataLinks,
  medicalSpaIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/medical-spa-calculators-shared";

export const meta = {
  title: "Medical Spa Membership Revenue Calculator & MRR Tool",
  shortTitle: "Membership Revenue Calculator",
  subtitle: "Model monthly recurring revenue from active members and monthly membership fees.",
  description:
    "Free medical spa membership revenue calculator. Estimate MRR, annual membership revenue, and revenue per member against industry benchmarks.",
};

export const introContent = {
  lead: "Membership MRR is a key growth lever for medical spas. This calculator models recurring revenue from your active member base and benchmarks against typical med spa membership fees.",
  bullets: [
    "Membership MRR = Active Members × Monthly Fee",
    "Annual Membership Revenue = MRR × 12",
    "Membership plans lock in injectable maintenance cadence every 3–4 months",
  ],
  audience: "Built for medical spa owners tracking MRR growth, pricing tiers, and recurring revenue quality.",
};

export type MembershipRevenueInputs = {
  activeMembers: number;
  monthlyFee: number;
};

export const defaultInputs: MembershipRevenueInputs = {
  activeMembers: 200,
  monthlyFee: 199,
};

export const industryBenchmarks = [
  { metric: "Monthly Membership Fee", range: "$99 – $299/mo" },
  { metric: "Active Members (median)", range: "100 – 350" },
  { metric: "Membership MRR (median)", range: "$25K – $55K/mo" },
  { metric: "Membership Retention", range: "65 – 80%" },
] as const;

export function calculateMembershipRevenue(inputs: MembershipRevenueInputs) {
  const membershipMrr = inputs.activeMembers * inputs.monthlyFee;
  const annualMembershipRevenue = membershipMrr * 12;
  const revenuePerMember = inputs.activeMembers > 0 ? annualMembershipRevenue / inputs.activeMembers : 0;
  const vsBenchmarkMrr = membershipMrr - medicalSpaIndustryAverages.membershipMrr;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (membershipMrr < 25000) tier = "Below";
  else if (membershipMrr >= 55000) tier = "Strong";

  return { membershipMrr, annualMembershipRevenue, revenuePerMember, vsBenchmarkMrr, tier };
}

export const faqs = [
  {
    question: "What is MRR for a medical spa?",
    answer:
      "Membership MRR equals active paying members multiplied by average monthly fee. A med spa with 200 members at $199/mo generates $39,800 in membership MRR — before à la carte treatments and retail.",
  },
  {
    question: "What is a good membership price for a medical spa?",
    answer:
      "Medical spa membership plans typically range $99–$299/mo depending on included treatments. Plans bundling Botox units, laser sessions, and skincare discounts command premium pricing.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/medical-spa-membership-revenue/");
export { medicalSpaDataLinks, formatCurrency, medicalSpaIndustryAverages };
