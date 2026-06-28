import {
  formatCurrency,
  formatPercent,
  pilatesIndustryAverages,
  relatedPilatesCalculators,
} from "@/lib/industries/pilates-calculators-shared";

export const meta = {
  title: "Pilates Studio Revenue Calculator & Annual Income Projection Tool",
  shortTitle: "Pilates Studio Revenue Calculator",
  subtitle:
    "Project annual Pilates studio revenue from active clients, memberships, private sessions, and ancillary income.",
  description:
    "Free Pilates studio revenue calculator. Estimate annual revenue, MRR, and revenue mix from membership fees, private sessions, class packages, and retail.",
};

export const introContent = {
  lead: "Pilates studio revenue is driven by active clients and revenue per client — especially private sessions and class utilization. This calculator projects annual revenue from your membership base and supplemental income streams.",
  bullets: [
    "Membership MRR = Active Clients × Average Monthly Dues",
    "Total Revenue = (MRR + Ancillary Monthly) × 12",
    "Median reformer studio revenue is ~$850K with ~88% recurring-weighted income",
  ],
  audience:
    "Built for Pilates studio owners forecasting revenue, pricing membership tiers, and modeling private session mix.",
};

export type PilatesRevenueInputs = {
  activeClients: number;
  monthlyMembershipFee: number;
  monthlyPrivateSessions: number;
  monthlyClassPackages: number;
  monthlyWorkshopsRetail: number;
};

export const defaultInputs: PilatesRevenueInputs = {
  activeClients: 150,
  monthlyMembershipFee: 165,
  monthlyPrivateSessions: 18_000,
  monthlyClassPackages: 8_500,
  monthlyWorkshopsRetail: 4_200,
};

export const revenueBenchmarks = [
  { metric: "Median Annual Revenue", range: "$420K – $1.1M" },
  { metric: "Membership Share of Revenue", range: "45 – 55%" },
  { metric: "Revenue Per Client", range: "$150 – $280/mo" },
  { metric: "Median Active Clients", range: "100 – 200" },
] as const;

export function calculatePilatesRevenue(inputs: PilatesRevenueInputs) {
  const membershipMrr = inputs.activeClients * inputs.monthlyMembershipFee;
  const ancillaryMrr =
    inputs.monthlyPrivateSessions + inputs.monthlyClassPackages + inputs.monthlyWorkshopsRetail;
  const totalMrr = membershipMrr + ancillaryMrr;
  const annualRevenue = totalMrr * 12;
  const membershipPct = totalMrr > 0 ? (membershipMrr / totalMrr) * 100 : 0;
  const revenuePerClient = inputs.activeClients > 0 ? totalMrr / inputs.activeClients : 0;
  const vsBenchmarkRevenue = annualRevenue - pilatesIndustryAverages.revenue;
  const vsBenchmarkRpc = revenuePerClient - pilatesIndustryAverages.revenuePerClientMonthly;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (annualRevenue < 420_000) tier = "Below";
  else if (annualRevenue >= 1_000_000) tier = "Strong";

  return {
    membershipMrr,
    ancillaryMrr,
    totalMrr,
    annualRevenue,
    membershipPct,
    revenuePerClient,
    vsBenchmarkRevenue,
    vsBenchmarkRpc,
    tier,
  };
}

export const faqs = [
  {
    question: "How do you calculate Pilates studio revenue?",
    answer:
      "Annual revenue equals total monthly revenue × 12. Total monthly revenue includes membership MRR (active clients × average dues) plus private sessions, class packages, workshops, and retail.",
  },
  {
    question: "What is average Pilates studio revenue per client?",
    answer:
      "Well-run reformer studios typically generate $150–$280 per client per month when private sessions and class packages are included. The median is ~$195/mo across a mature client base.",
  },
  {
    question: "How many clients does an $850K studio need?",
    answer:
      "At ~$195/mo revenue per client, roughly 360 client-months of revenue are needed annually — about 140–170 active clients when private session income is included.",
  },
  {
    question: "What percentage of revenue should come from memberships?",
    answer:
      "Typical reformer studios derive 45–55% of revenue from unlimited or tiered memberships, with private sessions and class packages providing premium supplemental income.",
  },
] as const;

export const relatedTools = relatedPilatesCalculators("/calculators/pilates-studio-revenue/");
export { pilatesIndustryAverages, formatCurrency, formatPercent };
