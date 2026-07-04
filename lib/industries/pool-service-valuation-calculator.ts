import {
  formatCurrency,
  poolServiceDataLinks,
  poolServiceIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/pool-service-calculators-shared";

export const meta = {
  title: "Pool Service Business Valuation Calculator & SDE Multiple Tool",
  shortTitle: "Pool Service Valuation Calculator",
  subtitle:
    "Estimate what your pool service company is worth using SDE multiples and revenue benchmarks.",
  description:
    "Free pool service business valuation calculator using SDE and revenue multiples. Compare your company's estimated value against industry benchmarks.",
};

export const introContent = {
  lead: "Pool service business valuation is driven by recurring revenue quality, route density, and customer retention. This calculator applies industry-standard SDE multiples to estimate your company's market value.",
  bullets: [
    "Estimated Value = SDE × Industry Multiple (typically 3.0x–4.5x)",
    "SDE = Net Profit + Owner Salary + Add-backs",
    "Median pool service company sells at ~3.6x SDE",
  ],
  audience:
    "Built for pool service owners planning an exit, buyers evaluating acquisitions, and brokers pricing listings.",
};

export type ValuationInputs = {
  revenue: number;
  netProfit: number;
  ownerSalary: number;
  sde: number;
  sdeMultiple: number;
};

export const defaultInputs: ValuationInputs = {
  revenue: 950000,
  netProfit: 209000,
  ownerSalary: 135000,
  sde: 344000,
  sdeMultiple: 3.6,
};

export const multipleRanges = [
  { label: "Revenue Multiple", range: "0.9x – 1.6x", median: 1.2 },
  { label: "SDE Multiple", range: "3.0x – 4.5x", median: 3.6 },
  { label: "EBITDA Multiple", range: "4.5x – 7.0x", median: 5.8 },
] as const;

export function estimateSde(netProfit: number, ownerSalary: number) {
  return netProfit + ownerSalary;
}

export function calculateValuation(inputs: ValuationInputs) {
  const sdeValue = inputs.sde * inputs.sdeMultiple;
  const revenueValue = inputs.revenue * poolServiceIndustryAverages.revenueMultiple;
  const profitMargin = inputs.revenue > 0 ? (inputs.netProfit / inputs.revenue) * 100 : 0;
  const recommendedValue = sdeValue;
  const valueLow = inputs.sde * 3.0;
  const valueHigh = inputs.sde * 4.5;

  return { sdeValue, revenueValue, recommendedValue, valueLow, valueHigh, profitMargin };
}

export function formatMultiple(value: number): string {
  return `${value.toFixed(1)}x`;
}

export const faqs = [
  {
    question: "How are pool service businesses valued?",
    answer:
      "Most owner-operated pool service companies are valued using SDE multiples, typically 3.0x–4.5x. A company with $344K SDE at 3.6x would be worth ~$1.24M. Revenue multiples (0.9x–1.6x) are used as a cross-check.",
  },
  {
    question: "What is a good SDE multiple for a pool service company?",
    answer:
      "The median SDE multiple for owner-operated pool service businesses is 3.6x. Companies with 80%+ recurring revenue, dense routes, and low churn command 4.0x–4.5x.",
  },
  {
    question: "How much is a pool service company with $950K revenue worth?",
    answer:
      "A pool service company with $950K revenue and $344K SDE typically sells for $1.0M–$1.55M (3.0x–4.5x SDE), with a median around $1.24M at 3.6x. Recurring contract penetration significantly affects value.",
  },
  {
    question: "What increases pool service valuation multiples?",
    answer:
      "High MRR percentage, route density, commercial account mix, documented SOPs, and owner-independent operations all support premium multiples. Heavy owner dependence or high churn compresses value.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/pool-service-valuation/");
export { poolServiceIndustryAverages, poolServiceDataLinks, formatCurrency };
