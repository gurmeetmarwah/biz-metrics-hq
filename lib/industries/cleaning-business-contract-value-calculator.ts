import {
  formatCurrency,
  formatPercent,
  cleaningBusinessIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/cleaning-business-calculators-shared";

export const meta = {
  title: "Cleaning Business Contract Value Calculator & Recurring Revenue Tool",
  shortTitle: "Cleaning Contract Value Calculator",
  subtitle:
    "Model annual contract revenue from commercial and residential cleaning accounts.",
  description:
    "Free cleaning business contract value calculator. Estimate recurring revenue from commercial contracts, residential routes, and one-time services against 190+ cleaning benchmarks.",
};

export const introContent = {
  lead: "Scheduled service contracts are the foundation of cleaning business value. This calculator models your recurring revenue from commercial accounts and residential routes — then benchmarks your contract mix against top operators.",
  bullets: [
    "Contract Revenue = Commercial Accounts + Residential Routes + Recurring Agreements",
    "Top operators derive 50–75% of revenue from recurring contracts",
    "Commercial accounts average $800 – $4,500 per month",
  ],
  audience:
    "Built for cleaning business owners building contract books, pricing service agreements, and planning recurring revenue growth.",
};

export type ContractValueInputs = {
  commercialAccounts: number;
  monthlyRevenuePerAccount: number;
  residentialMonthlyRevenue: number;
  oneTimeMonthlyRevenue: number;
};

export const defaultInputs: ContractValueInputs = {
  commercialAccounts: 25,
  monthlyRevenuePerAccount: 1500,
  residentialMonthlyRevenue: 22000,
  oneTimeMonthlyRevenue: 8000,
};

export const contractBenchmarks = [
  { metric: "Monthly Contract Revenue", range: "$800 – $4,500" },
  { metric: "Annual Contract Value", range: "$1,200 – $8,000" },
  { metric: "Recurring Revenue %", range: "50 – 75%" },
  { metric: "Contract Retention Rate", range: "75 – 85%" },
] as const;

export function calculateContractValue(inputs: ContractValueInputs) {
  const monthlyCommercialRevenue = inputs.commercialAccounts * inputs.monthlyRevenuePerAccount;
  const monthlyTotal =
    monthlyCommercialRevenue + inputs.residentialMonthlyRevenue + inputs.oneTimeMonthlyRevenue;
  const annualCommercialRevenue = monthlyCommercialRevenue * 12;
  const annualResidentialRevenue = inputs.residentialMonthlyRevenue * 12;
  const annualOneTimeRevenue = inputs.oneTimeMonthlyRevenue * 12;
  const estimatedAnnualRevenue = monthlyTotal * 12;
  const recurringRevenue = annualCommercialRevenue + annualResidentialRevenue;
  const recurringPct =
    estimatedAnnualRevenue > 0 ? (recurringRevenue / estimatedAnnualRevenue) * 100 : 0;
  const commercialPct =
    estimatedAnnualRevenue > 0 ? (annualCommercialRevenue / estimatedAnnualRevenue) * 100 : 0;
  const avgAnnualContractValue =
    inputs.commercialAccounts > 0
      ? annualCommercialRevenue / inputs.commercialAccounts
      : cleaningBusinessIndustryAverages.annualContractValue;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (recurringPct < 50) tier = "Below";
  else if (recurringPct >= 70) tier = "Strong";

  const vsBenchmark = recurringPct - cleaningBusinessIndustryAverages.recurringRevenuePct;

  return {
    monthlyCommercialRevenue,
    annualCommercialRevenue,
    annualResidentialRevenue,
    annualOneTimeRevenue,
    estimatedAnnualRevenue,
    recurringRevenue,
    recurringPct,
    commercialPct,
    avgAnnualContractValue,
    vsBenchmark,
    tier,
  };
}

export const faqs = [
  {
    question: "How much recurring revenue should a cleaning business have?",
    answer:
      "Top cleaning operators target 50–75% of revenue from recurring service contracts. Below 50% signals heavy dependence on one-time jobs and lower acquisition value.",
  },
  {
    question: "What is a typical commercial cleaning contract worth?",
    answer:
      "Commercial cleaning contracts typically range from $800–$4,500 per month depending on facility size, scope, and market. Office and retail accounts often sit in the $1,200–$2,500/month range.",
  },
  {
    question: "How many contracts does a $500K cleaning business need?",
    answer:
      "At $1,500/month average commercial contract value, roughly 20 commercial accounts generate ~$360K annual revenue. Combined with residential routes, this supports a $500K+ company with strong recurring mix.",
  },
  {
    question: "Why does contract revenue increase business value?",
    answer:
      "Predictable recurring revenue improves cash flow stability, reduces owner dependence, and supports premium SDE multiples (1.8×–3.0×). Buyers actively seek cleaning companies with 65%+ recurring contract revenue.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/cleaning-business-contract-value/");
export { cleaningBusinessIndustryAverages, formatCurrency, formatPercent };
