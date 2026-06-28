import {
  formatNumber,
  formatPercent,
  gymIndustryAverages,
  relatedGymCalculators,
} from "@/lib/industries/gym-calculators-shared";

export const meta = {
  title: "Gym Membership Growth Calculator & Net Member Projection Tool",
  shortTitle: "Membership Growth Calculator",
  subtitle:
    "Model member adds, monthly churn, and net membership growth over a 12-month period.",
  description:
    "Free gym membership growth calculator. Project active members month-by-month from new sign-ups and churn against industry retention benchmarks.",
};

export const introContent = {
  lead: "Net membership growth determines MRR trajectory. This calculator simulates 12 months of member adds and churn so you can see whether your sales pace outpaces cancellations.",
  bullets: [
    "Each month: Members = Prior Month × (1 − Churn) + New Sign-ups",
    "HFA industry annual retention is 66.4% (~3–4% monthly churn)",
    "Improving retention often beats increasing marketing spend",
  ],
  audience:
    "Built for gym owners planning growth targets, setting sales quotas, and evaluating retention initiatives.",
};

export type MembershipGrowthInputs = {
  startingMembers: number;
  newMembersPerMonth: number;
  monthlyChurnPct: number;
  months: number;
};

export const defaultInputs: MembershipGrowthInputs = {
  startingMembers: 850,
  newMembersPerMonth: 45,
  monthlyChurnPct: 4,
  months: 12,
};

export const growthBenchmarks = [
  { metric: "Industry Annual Retention", range: "66.4% (HFA)" },
  { metric: "Typical Monthly Churn", range: "3 – 5%" },
  { metric: "New Members / Month (Mid-size gym)", range: "30 – 60" },
  { metric: "Net Growth Target", range: "2 – 5% monthly" },
] as const;

export type MonthProjection = {
  month: number;
  startingMembers: number;
  churned: number;
  newMembers: number;
  endingMembers: number;
  netChange: number;
};

export function projectMembershipGrowth(inputs: MembershipGrowthInputs): MonthProjection[] {
  const rows: MonthProjection[] = [];
  let members = inputs.startingMembers;
  const churnRate = inputs.monthlyChurnPct / 100;

  for (let month = 1; month <= inputs.months; month++) {
    const starting = members;
    const churned = Math.round(starting * churnRate);
    const ending = Math.max(0, starting - churned + inputs.newMembersPerMonth);
    rows.push({
      month,
      startingMembers: starting,
      churned,
      newMembers: inputs.newMembersPerMonth,
      endingMembers: ending,
      netChange: ending - starting,
    });
    members = ending;
  }

  return rows;
}

export function calculateMembershipGrowth(inputs: MembershipGrowthInputs) {
  const projections = projectMembershipGrowth(inputs);
  const endingMembers = projections[projections.length - 1]?.endingMembers ?? inputs.startingMembers;
  const netGrowth = endingMembers - inputs.startingMembers;
  const netGrowthPct =
    inputs.startingMembers > 0 ? (netGrowth / inputs.startingMembers) * 100 : 0;
  const avgNetPerMonth = inputs.months > 0 ? netGrowth / inputs.months : 0;
  const totalChurned = projections.reduce((sum, row) => sum + row.churned, 0);
  const totalAcquired = inputs.newMembersPerMonth * inputs.months;
  const impliedAnnualRetention =
    inputs.monthlyChurnPct > 0 && inputs.monthlyChurnPct < 100
      ? (1 - inputs.monthlyChurnPct / 100) ** 12 * 100
      : 0;

  let tier: "Shrinking" | "Flat" | "Growing" = "Flat";
  if (netGrowthPct < -2) tier = "Shrinking";
  else if (netGrowthPct >= 5) tier = "Growing";

  return {
    projections,
    endingMembers,
    netGrowth,
    netGrowthPct,
    avgNetPerMonth,
    totalChurned,
    totalAcquired,
    impliedAnnualRetention,
    tier,
  };
}

export const faqs = [
  {
    question: "How do you project gym membership growth?",
    answer:
      "Start with active members, subtract monthly churn (cancellations), then add new sign-ups. Repeat each month. Churn is applied to members at the start of each month before new sales are added.",
  },
  {
    question: "What is a good net membership growth rate?",
    answer:
      "Healthy independent gyms target 2–5% net member growth per month. If churn matches or exceeds new sales, membership and MRR flatten or decline even with marketing spend.",
  },
  {
    question: "How does monthly churn affect annual retention?",
    answer:
      "At 4% monthly churn, implied annual retention is about 61% (0.96^12). HFA reports 66.4% industry annual retention, which aligns with roughly 3–3.5% monthly churn in a steady-state model.",
  },
  {
    question: "Should I focus on new members or retention?",
    answer:
      "Retention often has higher ROI. Reducing monthly churn from 5% to 4% on 850 members keeps ~8 more members per month — nearly 100 member-months of revenue annually without extra acquisition cost.",
  },
] as const;

export const relatedTools = relatedGymCalculators("/calculators/gym-membership-growth/");
export { gymIndustryAverages, formatNumber, formatPercent };
