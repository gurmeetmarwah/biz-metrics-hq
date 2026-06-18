import {
  formatCurrency,
  formatPercent,
  landscapingIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/landscaping-calculators-shared";

export const meta = {
  title: "Landscaping Commercial Contract Calculator & Recurring Revenue Tool",
  shortTitle: "Commercial Contract Calculator",
  subtitle:
    "Model annual recurring revenue from commercial maintenance contracts and compare to industry benchmarks.",
  description:
    "Free landscaping commercial contract calculator. Estimate recurring revenue from commercial accounts, residential maintenance, and project mix against 280+ landscaping benchmarks.",
};

export const introContent = {
  lead: "Commercial maintenance contracts are the foundation of stable landscaping revenue. This calculator models your recurring revenue from commercial accounts, residential routes, and project work — then benchmarks your maintenance mix against top operators.",
  bullets: [
    "Commercial Revenue = Accounts × Monthly Contract × 12",
    "Top operators derive 35–55% of revenue from recurring maintenance",
    "Commercial accounts average $800 – $2,500/month per property",
  ],
  audience:
    "Built for landscaping owners building commercial books, pricing HOA contracts, and planning recurring revenue growth.",
};

export type CommercialContractInputs = {
  commercialAccounts: number;
  monthlyRevenuePerAccount: number;
  residentialMonthlyRevenue: number;
  projectMonthlyRevenue: number;
};

export const defaultInputs: CommercialContractInputs = {
  commercialAccounts: 30,
  monthlyRevenuePerAccount: 1200,
  residentialMonthlyRevenue: 45000,
  projectMonthlyRevenue: 35000,
};

export const contractBenchmarks = [
  { metric: "Commercial Accounts (Typical)", range: "20 – 50" },
  { metric: "Monthly Revenue / Account", range: "$800 – $2,500" },
  { metric: "Maintenance Revenue %", range: "35 – 55%" },
  { metric: "Commercial Share of Revenue", range: "15 – 30%" },
] as const;

export function calculateCommercialContracts(inputs: CommercialContractInputs) {
  const monthlyCommercialRevenue = inputs.commercialAccounts * inputs.monthlyRevenuePerAccount;
  const monthlyTotal =
    monthlyCommercialRevenue + inputs.residentialMonthlyRevenue + inputs.projectMonthlyRevenue;
  const annualCommercialRevenue = monthlyCommercialRevenue * 12;
  const annualResidentialRevenue = inputs.residentialMonthlyRevenue * 12;
  const annualProjectRevenue = inputs.projectMonthlyRevenue * 12;
  const estimatedAnnualRevenue = monthlyTotal * 12;
  const recurringRevenue = annualCommercialRevenue + annualResidentialRevenue;
  const recurringPct =
    estimatedAnnualRevenue > 0 ? (recurringRevenue / estimatedAnnualRevenue) * 100 : 0;
  const commercialPct =
    estimatedAnnualRevenue > 0 ? (annualCommercialRevenue / estimatedAnnualRevenue) * 100 : 0;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (recurringPct < 35) tier = "Below";
  else if (recurringPct >= 50) tier = "Strong";

  const vsBenchmark = recurringPct - landscapingIndustryAverages.maintenanceRevenuePct;

  return {
    monthlyCommercialRevenue,
    annualCommercialRevenue,
    annualResidentialRevenue,
    annualProjectRevenue,
    estimatedAnnualRevenue,
    recurringRevenue,
    recurringPct,
    commercialPct,
    vsBenchmark,
    tier,
  };
}

export const faqs = [
  {
    question: "How much recurring revenue should a landscaping company have?",
    answer:
      "Top landscaping operators target 35–55% of revenue from recurring maintenance (commercial + residential routes). Below 30% signals heavy project dependence and higher revenue volatility.",
  },
  {
    question: "What is a typical commercial landscaping contract worth?",
    answer:
      "Commercial maintenance contracts typically range from $800–$2,500 per month per property depending on scope, property size, and market. HOA and property management accounts often sit in the $1,000–$1,800/month range.",
  },
  {
    question: "How many commercial accounts does a $1M landscaping company need?",
    answer:
      "At $1,200/month average contract value, roughly 35 commercial accounts generate ~$504K annual commercial revenue. Combined with residential routes, this supports a $1M+ company with strong recurring revenue.",
  },
  {
    question: "Why do commercial contracts increase business value?",
    answer:
      "Predictable commercial maintenance revenue improves cash flow stability, reduces owner dependence, and supports higher SDE multiples at sale. Buyers pay premiums for transferable contract books with low churn.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/landscaping-commercial-contract/");
export { landscapingIndustryAverages, formatCurrency, formatPercent };
