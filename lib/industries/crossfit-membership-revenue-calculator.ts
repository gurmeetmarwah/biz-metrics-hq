import {
  formatCurrency,
  relatedCrossfitCalculators,
  crossfitIndustryAverages,
} from "@/lib/industries/crossfit-calculators-shared";

export const meta = {
  title: "CrossFit Membership Revenue Calculator & MRR Tool",
  shortTitle: "Membership Revenue Calculator",
  subtitle: "Model monthly recurring revenue from active members, average dues, and autopay membership tiers.",
  description:
    "Free CrossFit membership revenue calculator. Estimate MRR, annual membership revenue, and revenue per member against affiliate benchmarks.",
};

export const introContent = {
  lead: "Membership MRR is the foundation of CrossFit affiliate economics. This calculator models recurring revenue from your active member base and benchmarks against typical box dues.",
  bullets: [
    "Membership MRR = Active Members × Average Monthly Dues",
    "Annual Membership Revenue = MRR × 12",
    "Median affiliate MRR is ~$72K/mo at ~320 active members",
  ],
  audience: "Built for box owners tracking MRR growth, pricing tiers, and recurring revenue quality.",
};

export type MembershipRevenueInputs = {
  activeMembers: number;
  monthlyDues: number;
  autopayMemberPct: number;
};

export const defaultInputs: MembershipRevenueInputs = {
  activeMembers: 320,
  monthlyDues: 185,
  autopayMemberPct: 92,
};

export const membershipBenchmarks = [
  { metric: "Median Monthly Dues", range: "$150 – $250/mo" },
  { metric: "Active Members (median box)", range: "180 – 380" },
  { metric: "Membership MRR (median)", range: "$48K – $95K/mo" },
  { metric: "Recurring Revenue %", range: "85 – 95%" },
] as const;

export function calculateMembershipRevenue(inputs: MembershipRevenueInputs) {
  const membershipMrr = inputs.activeMembers * inputs.monthlyDues;
  const annualMembershipRevenue = membershipMrr * 12;
  const autopayMrr = membershipMrr * (inputs.autopayMemberPct / 100);
  const vsBenchmarkMrr = membershipMrr - crossfitIndustryAverages.mrr;
  const impliedBoxRevenue = annualMembershipRevenue / (crossfitIndustryAverages.membershipRevenuePct / 100);

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (membershipMrr < 48_000) tier = "Below";
  else if (membershipMrr >= 85_000) tier = "Strong";

  return { membershipMrr, annualMembershipRevenue, autopayMrr, vsBenchmarkMrr, impliedBoxRevenue, tier };
}

export const faqs = [
  {
    question: "What is MRR for a CrossFit gym?",
    answer:
      "Membership MRR equals active paying members multiplied by average monthly dues. A box with 320 members at $185/mo generates $59,200 in membership MRR — before PT and nutrition upsells.",
  },
  {
    question: "What is a good membership price for a CrossFit gym?",
    answer:
      "Unlimited memberships typically range $150–$250/mo depending on market. Urban affiliates charge $200–$250/mo; suburban boxes often price $150–$185/mo.",
  },
  {
    question: "How many members should a CrossFit gym have?",
    answer:
      "Most affiliates break even between 80–120 active members and reach healthy margins at 180–320 engaged members with strong coach productivity.",
  },
] as const;

export const relatedTools = relatedCrossfitCalculators("/calculators/crossfit-membership-revenue/");
export { crossfitIndustryAverages, formatCurrency };
