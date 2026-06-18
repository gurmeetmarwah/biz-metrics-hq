import {
  formatCurrency,
  formatPercent,
  pestControlIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/pest-control-calculators-shared";

export const meta = {
  title: "Pest Control Recurring Revenue Calculator & Subscription Mix Tool",
  shortTitle: "Pest Control Recurring Revenue Calculator",
  subtitle:
    "Model annual recurring revenue from service contracts and compare to industry benchmarks.",
  description:
    "Free pest control recurring revenue calculator. Estimate subscription contract revenue, one-time treatments, and recurring mix against 220+ pest control benchmarks.",
};

export const introContent = {
  lead: "Recurring service contracts are the foundation of pest control business value. This calculator models your subscription revenue from residential and commercial accounts — then benchmarks your recurring mix against top operators.",
  bullets: [
    "Recurring Revenue = Residential Contracts + Commercial Contracts + Termite Bonds",
    "Top operators derive 80–90% of revenue from recurring agreements",
    "Quarterly residential contracts average $85 – $175 per treatment",
  ],
  audience:
    "Built for pest control owners building subscription books, pricing service agreements, and planning recurring revenue growth.",
};

export type RecurringRevenueInputs = {
  residentialContracts: number;
  quarterlyFeePerContract: number;
  commercialMonthlyRevenue: number;
  termiteAnnualRevenue: number;
  oneTimeAnnualRevenue: number;
};

export const defaultInputs: RecurringRevenueInputs = {
  residentialContracts: 600,
  quarterlyFeePerContract: 125,
  commercialMonthlyRevenue: 18000,
  termiteAnnualRevenue: 120000,
  oneTimeAnnualRevenue: 90000,
};

export const recurringBenchmarks = [
  { metric: "Recurring Revenue %", range: "70 – 90%" },
  { metric: "Residential Contracts (Typical)", range: "400 – 1,200" },
  { metric: "Quarterly Fee Per Contract", range: "$85 – $175" },
  { metric: "Commercial Share of Revenue", range: "20 – 40%" },
] as const;

export function calculateRecurringRevenue(inputs: RecurringRevenueInputs) {
  const annualResidentialRevenue = inputs.residentialContracts * inputs.quarterlyFeePerContract * 4;
  const annualCommercialRevenue = inputs.commercialMonthlyRevenue * 12;
  const recurringRevenue =
    annualResidentialRevenue + annualCommercialRevenue + inputs.termiteAnnualRevenue;
  const estimatedAnnualRevenue = recurringRevenue + inputs.oneTimeAnnualRevenue;
  const recurringPct =
    estimatedAnnualRevenue > 0 ? (recurringRevenue / estimatedAnnualRevenue) * 100 : 0;
  const commercialPct =
    estimatedAnnualRevenue > 0 ? (annualCommercialRevenue / estimatedAnnualRevenue) * 100 : 0;
  const residentialPct =
    estimatedAnnualRevenue > 0 ? (annualResidentialRevenue / estimatedAnnualRevenue) * 100 : 0;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (recurringPct < 70) tier = "Below";
  else if (recurringPct >= 85) tier = "Strong";

  const vsBenchmark = recurringPct - pestControlIndustryAverages.recurringRevenuePct;

  return {
    annualResidentialRevenue,
    annualCommercialRevenue,
    recurringRevenue,
    estimatedAnnualRevenue,
    recurringPct,
    commercialPct,
    residentialPct,
    vsBenchmark,
    tier,
  };
}

export const faqs = [
  {
    question: "How much recurring revenue should a pest control company have?",
    answer:
      "Top pest control operators target 80–90% of revenue from recurring service agreements. Below 70% signals heavy dependence on one-time treatments and lower acquisition value.",
  },
  {
    question: "What is a typical pest control service contract worth?",
    answer:
      "Quarterly general pest treatments typically range from $85–$175 per visit depending on property size and market. Annual contract value averages $350–$900 per residential account.",
  },
  {
    question: "How many contracts does a $900K pest control company need?",
    answer:
      "At $500 annual contract value, roughly 1,440 active residential contracts generate ~$720K. Combined with commercial accounts and termite revenue, this supports a $900K+ company with strong recurring mix.",
  },
  {
    question: "Why does recurring revenue increase business value?",
    answer:
      "Predictable subscription revenue improves cash flow stability, reduces owner dependence, and supports premium SDE multiples (2.5×–4.0×). Buyers and PE firms actively seek pest control companies with 80%+ recurring revenue.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/pest-control-recurring-revenue/");
export { pestControlIndustryAverages, formatCurrency, formatPercent };
