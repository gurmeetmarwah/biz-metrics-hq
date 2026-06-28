import {
  formatNumber,
  formatPercent,
  gymIndustryAverages,
  relatedGymCalculators,
} from "@/lib/industries/gym-calculators-shared";

export const meta = {
  title: "Gym Churn Rate Calculator & Member Retention Tool",
  shortTitle: "Churn Rate Calculator",
  subtitle:
    "Calculate monthly and annual member churn from cancellations, cohort size, and period length.",
  description:
    "Free gym churn rate calculator. Compute monthly churn, annual retention, and members lost from your membership activity data.",
};

export const introContent = {
  lead: "Churn is the metric that silently erodes MRR. This calculator converts your membership activity — starting members, cancellations, and new sign-ups — into monthly churn and implied annual retention.",
  bullets: [
    "Monthly Churn = Cancellations ÷ Members at Start of Period",
    "Annual Retention ≈ (1 − Monthly Churn)^12",
    "HFA industry benchmark: 66.4% annual member retention",
  ],
  audience:
    "Built for gym owners tracking retention KPIs, evaluating programming changes, and preparing acquisition due diligence.",
};

export type ChurnRateInputs = {
  membersAtStart: number;
  cancellations: number;
  newSignups: number;
  periodMonths: number;
};

export const defaultInputs: ChurnRateInputs = {
  membersAtStart: 850,
  cancellations: 408,
  newSignups: 540,
  periodMonths: 12,
};

export const churnBenchmarks = [
  { metric: "Industry Annual Retention (HFA)", range: "66.4%" },
  { metric: "Typical Monthly Churn", range: "3 – 5%" },
  { metric: "Budget Gym Monthly Churn", range: "5 – 8%" },
  { metric: "Boutique / Community Gym", range: "2 – 4%" },
] as const;

export function calculateChurnRate(inputs: ChurnRateInputs) {
  const membersAtEnd = inputs.membersAtStart - inputs.cancellations + inputs.newSignups;
  const avgMembers = (inputs.membersAtStart + membersAtEnd) / 2;
  const monthlyChurnPct =
    inputs.membersAtStart > 0 && inputs.periodMonths > 0
      ? (inputs.cancellations / inputs.membersAtStart / inputs.periodMonths) * 100
      : 0;
  const periodChurnPct =
    inputs.membersAtStart > 0 ? (inputs.cancellations / inputs.membersAtStart) * 100 : 0;
  const impliedAnnualRetention =
    monthlyChurnPct > 0 && monthlyChurnPct < 100
      ? (1 - monthlyChurnPct / 100) ** 12 * 100
      : 100;
  const netMemberChange = membersAtEnd - inputs.membersAtStart;
  const vsBenchmarkRetention = impliedAnnualRetention - gymIndustryAverages.annualRetentionPct;

  let tier: "High Churn" | "Typical" | "Strong Retention" = "Typical";
  if (monthlyChurnPct > 5) tier = "High Churn";
  else if (monthlyChurnPct <= 3.5) tier = "Strong Retention";

  return {
    membersAtEnd,
    avgMembers,
    monthlyChurnPct,
    periodChurnPct,
    impliedAnnualRetention,
    netMemberChange,
    vsBenchmarkRetention,
    tier,
  };
}

export const faqs = [
  {
    question: "How do you calculate gym member churn rate?",
    answer:
      "Monthly churn equals cancellations divided by members at the start of the period (for a single month). Over multiple months, divide total cancellations by starting members and by number of months for an average monthly rate.",
  },
  {
    question: "What is a good churn rate for a gym?",
    answer:
      "Industry-wide annual retention is 66.4% per HFA — roughly 3–4% monthly churn. Budget gyms may run 5–8% monthly; boutique formats with strong community often achieve 2–4%.",
  },
  {
    question: "How do churn and new sign-ups relate?",
    answer:
      "Ending members = Starting members − Cancellations + New sign-ups. You can grow while churn is high if sales outpace cancellations, but high churn increases CAC burden and caps LTV.",
  },
  {
    question: "How do you convert monthly churn to annual retention?",
    answer:
      "Annual retention ≈ (1 − monthly churn)^12. At 4% monthly churn, implied annual retention is about 61%. This is a steady-state estimate; cohort retention curves vary in the first 90 days.",
  },
] as const;

export const relatedTools = relatedGymCalculators("/calculators/gym-churn-rate/");
export { gymIndustryAverages, formatNumber, formatPercent };
