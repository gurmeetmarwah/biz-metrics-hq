import {
  formatCurrency,
  relatedYogaCalculators,
  yogaIndustryAverages,
} from "@/lib/industries/yoga-calculators-shared";

export const meta = {
  title: "Yoga Membership Revenue Calculator & MRR Tool",
  shortTitle: "Membership Revenue Calculator",
  subtitle: "Model monthly recurring revenue from active members, average dues, and autopay membership tiers.",
  description:
    "Free yoga membership revenue calculator. Estimate MRR, annual membership revenue, and revenue per member against boutique studio benchmarks.",
};

export const introContent = {
  lead: "Membership MRR is the foundation of yoga studio economics. This calculator models recurring revenue from your active member base and benchmarks against typical boutique yoga studio dues.",
  bullets: [
    "Membership MRR = Active Members × Average Monthly Dues",
    "Annual Membership Revenue = MRR × 12",
    "Median studio MRR is ~$48K/mo at ~220 active members",
  ],
  audience: "Built for studio owners tracking MRR growth, pricing tiers, and recurring revenue quality.",
};

export type MembershipRevenueInputs = {
  activeMembers: number;
  monthlyDues: number;
  autopayMemberPct: number;
};

export const defaultInputs: MembershipRevenueInputs = {
  activeMembers: 220,
  monthlyDues: 119,
  autopayMemberPct: 88,
};

export const membershipBenchmarks = [
  { metric: "Median Monthly Dues", range: "$89 – $165/mo" },
  { metric: "Active Members (median studio)", range: "150 – 300" },
  { metric: "Membership MRR (median)", range: "$35K – $55K/mo" },
  { metric: "Recurring Revenue %", range: "80 – 92%" },
] as const;

export function calculateMembershipRevenue(inputs: MembershipRevenueInputs) {
  const membershipMrr = inputs.activeMembers * inputs.monthlyDues;
  const annualMembershipRevenue = membershipMrr * 12;
  const autopayMrr = membershipMrr * (inputs.autopayMemberPct / 100);
  const vsBenchmarkMrr = membershipMrr - yogaIndustryAverages.mrr;
  const impliedStudioRevenue = annualMembershipRevenue / (yogaIndustryAverages.membershipRevenuePct / 100);

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (membershipMrr < 35_000) tier = "Below";
  else if (membershipMrr >= 55_000) tier = "Strong";

  return { membershipMrr, annualMembershipRevenue, autopayMrr, vsBenchmarkMrr, impliedStudioRevenue, tier };
}

export const faqs = [
  {
    question: "What is MRR for a yoga studio?",
    answer:
      "Membership MRR equals active paying members multiplied by average monthly dues. A studio with 220 members at $119/mo generates $26,180 in membership MRR — before workshops and teacher training.",
  },
  {
    question: "What is a good membership price for a yoga studio?",
    answer:
      "Unlimited or high-frequency memberships typically range $89–$165/mo depending on market. Urban boutique studios charge $130–$165/mo; suburban studios often price $89–$119/mo.",
  },
  {
    question: "How many members should a yoga studio have?",
    answer:
      "Most yoga studios break even between 100–160 active members and reach healthy margins at 180–250 engaged members with strong community retention.",
  },
] as const;

export const relatedTools = relatedYogaCalculators("/calculators/yoga-membership-revenue/");
export { yogaIndustryAverages, formatCurrency };
