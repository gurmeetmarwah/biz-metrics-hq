import {
  formatCurrency,
  formatPercent,
  pilatesIndustryAverages,
  relatedPilatesCalculators,
} from "@/lib/industries/pilates-calculators-shared";

export const meta = {
  title: "Pilates Membership Revenue Calculator & MRR Tool",
  shortTitle: "Membership Revenue Calculator",
  subtitle:
    "Model monthly recurring revenue from active members, average dues, and autopay membership tiers.",
  description:
    "Free Pilates membership revenue calculator. Estimate MRR, annual membership revenue, and revenue per member against boutique studio benchmarks.",
};

export const introContent = {
  lead: "Membership MRR is the foundation of Pilates studio economics. This calculator models recurring revenue from your active member base and benchmarks against typical reformer studio dues.",
  bullets: [
    "Membership MRR = Active Members × Average Monthly Dues",
    "Annual Membership Revenue = MRR × 12",
    "Median studio MRR is ~$62K/mo at ~150 active members",
  ],
  audience: "Built for studio owners tracking MRR growth, pricing tiers, and recurring revenue quality.",
};

export type MembershipRevenueInputs = {
  activeMembers: number;
  monthlyDues: number;
  autopayMemberPct: number;
};

export const defaultInputs: MembershipRevenueInputs = {
  activeMembers: 150,
  monthlyDues: 165,
  autopayMemberPct: 92,
};

export const membershipBenchmarks = [
  { metric: "Median Monthly Dues", range: "$120 – $220/mo" },
  { metric: "Active Members (median studio)", range: "100 – 200" },
  { metric: "Membership MRR (median)", range: "$50K – $75K/mo" },
  { metric: "Recurring Revenue %", range: "85 – 95%" },
] as const;

export function calculateMembershipRevenue(inputs: MembershipRevenueInputs) {
  const membershipMrr = inputs.activeMembers * inputs.monthlyDues;
  const annualMembershipRevenue = membershipMrr * 12;
  const autopayMrr = membershipMrr * (inputs.autopayMemberPct / 100);
  const vsBenchmarkMrr = membershipMrr - pilatesIndustryAverages.mrr;
  const impliedStudioRevenue = annualMembershipRevenue / (pilatesIndustryAverages.membershipRevenuePct / 100);

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (membershipMrr < 45_000) tier = "Below";
  else if (membershipMrr >= 70_000) tier = "Strong";

  return {
    membershipMrr,
    annualMembershipRevenue,
    autopayMrr,
    vsBenchmarkMrr,
    impliedStudioRevenue,
    tier,
  };
}

export const faqs = [
  {
    question: "What is MRR for a Pilates studio?",
    answer:
      "Membership MRR equals active paying members multiplied by average monthly dues. A studio with 150 members at $165/mo generates $24,750 in membership MRR — before private sessions and class packages.",
  },
  {
    question: "What is a good membership price for reformer Pilates?",
    answer:
      "Unlimited or high-frequency memberships typically range $120–$220/mo depending on market. Premium urban studios charge $180–$250/mo; suburban studios often price $120–$165/mo.",
  },
  {
    question: "How many members should a Pilates studio have?",
    answer:
      "Most reformer studios break even between 80–120 active members and reach healthy margins at 140–180 engaged members with strong class occupancy.",
  },
] as const;

export const relatedTools = relatedPilatesCalculators("/calculators/pilates-membership-revenue/");
export { pilatesIndustryAverages, formatCurrency, formatPercent };
