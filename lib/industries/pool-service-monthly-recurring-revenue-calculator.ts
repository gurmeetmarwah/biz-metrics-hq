import {
  formatCurrency,
  formatPercent,
  poolServiceIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/pool-service-calculators-shared";

export const meta = {
  title: "Pool Service Monthly Recurring Revenue Calculator & MRR Tool",
  shortTitle: "Pool Service MRR Calculator",
  subtitle:
    "Project monthly recurring revenue from active pool service contracts and compare to industry benchmarks.",
  description:
    "Free pool service MRR calculator. Estimate monthly recurring revenue from residential and commercial contracts against 190+ pool service benchmarks.",
};

export const introContent = {
  lead: "Monthly recurring revenue is the foundation of pool service business value. This calculator models your MRR from residential and commercial service contracts — then benchmarks your recurring mix against top operators.",
  bullets: [
    "MRR = (Residential Accounts × Monthly Fee) + Commercial Monthly Revenue",
    "Top operators derive 75–85% of annual revenue from recurring routes",
    "Residential contracts average $95–$165 per month",
  ],
  audience:
    "Built for pool service owners building route books, pricing service agreements, and planning MRR growth.",
};

export type MrrInputs = {
  residentialAccounts: number;
  monthlyFeePerAccount: number;
  commercialMonthlyRevenue: number;
  repairMonthlyRevenue: number;
  seasonalMonthlyRevenue: number;
};

export const defaultInputs: MrrInputs = {
  residentialAccounts: 420,
  monthlyFeePerAccount: 125,
  commercialMonthlyRevenue: 12000,
  repairMonthlyRevenue: 8000,
  seasonalMonthlyRevenue: 3000,
};

export const mrrBenchmarks = [
  { metric: "Recurring Revenue %", range: "75 – 85%" },
  { metric: "Residential Accounts (Typical)", range: "180 – 350" },
  { metric: "Monthly Fee Per Account", range: "$95 – $165" },
  { metric: "Median MRR", range: "$58K" },
] as const;

export function calculateMrr(inputs: MrrInputs) {
  const residentialMrr = inputs.residentialAccounts * inputs.monthlyFeePerAccount;
  const recurringMrr = residentialMrr + inputs.commercialMonthlyRevenue;
  const totalMrr = recurringMrr + inputs.repairMonthlyRevenue + inputs.seasonalMonthlyRevenue;
  const annualRevenue = totalMrr * 12;
  const recurringPct = annualRevenue > 0 ? (recurringMrr * 12 / annualRevenue) * 100 : 0;
  const commercialPct = annualRevenue > 0 ? (inputs.commercialMonthlyRevenue * 12 / annualRevenue) * 100 : 0;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (recurringPct < 70) tier = "Below";
  else if (recurringPct >= 82) tier = "Strong";

  const vsBenchmark = recurringMrr - poolServiceIndustryAverages.monthlyRecurringRevenue;

  return {
    residentialMrr,
    recurringMrr,
    totalMrr,
    annualRevenue,
    recurringPct,
    commercialPct,
    vsBenchmark,
    tier,
  };
}

export const faqs = [
  {
    question: "How much MRR should a pool service company have?",
    answer:
      "Median-performing pool service companies generate about $58K in monthly recurring revenue. At $950K annual revenue with 80% recurring mix, MRR typically ranges $58K–$70K.",
  },
  {
    question: "What is a typical pool service monthly contract worth?",
    answer:
      "Weekly residential pool cleaning typically ranges from $95–$165 per month depending on pool size, chemicals included, and market. Commercial accounts run $300–$1,200+ per month.",
  },
  {
    question: "How many accounts does a $950K pool service need?",
    answer:
      "At $125/month average residential fee, roughly 530 residential accounts generate ~$66K MRR. Combined with commercial contracts and repair revenue, this supports a $950K+ company.",
  },
  {
    question: "Why does MRR increase pool service business value?",
    answer:
      "Predictable monthly contract revenue improves cash flow stability, reduces owner dependence, and supports premium SDE multiples (3.0x–4.5x). Buyers actively seek pool service companies with 80%+ recurring revenue.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/pool-service-monthly-recurring-revenue/");
export { poolServiceIndustryAverages, formatCurrency, formatPercent };
