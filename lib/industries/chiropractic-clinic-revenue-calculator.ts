import {
  formatCurrency,
  formatNumber,
  relatedCalculators,
  chiropracticDataLinks,
  chiropracticIndustryAverages,
} from "@/lib/industries/chiropractic-calculators-shared";

export const meta = {
  title: "Chiropractic Clinic Revenue Calculator & Productivity Estimator",
  shortTitle: "Chiro Clinic Revenue Calculator",
  subtitle: "Estimate annual chiropractic clinic revenue from provider count, visit volume, and pricing.",
  description:
    "Free chiropractic clinic revenue calculator. Project annual revenue from chiropractors, visits per day, working days, and revenue per visit, with productivity benchmark context.",
};

export const introContent = {
  lead: "Revenue forecasting starts with provider productivity. This calculator estimates annual clinic revenue based on chiropractor count, daily visit throughput, annual working days, and average revenue per visit.",
  bullets: [
    "Annual revenue = Chiropractors × Visits/day × Working days × Revenue/visit",
    "Productive chiropractors often complete 20–35 visits per day",
    "Typical revenue per visit ranges from $45 to $85",
  ],
  audience:
    "Built for chiropractic owners, operators, and lenders evaluating production targets, hiring plans, and growth scenarios.",
};

export type RevenueInputs = {
  chiropractors: number;
  visitsPerDay: number;
  workingDays: number;
  revenuePerVisit: number;
};

export const defaultInputs: RevenueInputs = {
  chiropractors: 2,
  visitsPerDay: 24,
  workingDays: 245,
  revenuePerVisit: 65,
};

export const productivityBenchmarks = [
  { metric: "Visits Per Day Per Chiropractor", range: "20 – 35" },
  { metric: "Revenue Per Visit", range: "$45 – $85" },
  { metric: "Revenue Per Chiropractor", range: "$250K – $400K/yr" },
  { metric: "Daily Revenue Per Chiropractor", range: "$1,050 – $2,250" },
] as const;

export function calculateRevenue(inputs: RevenueInputs) {
  const annualVisits = inputs.chiropractors * inputs.visitsPerDay * inputs.workingDays;
  const annualRevenue = annualVisits * inputs.revenuePerVisit;
  const monthlyRevenue = annualRevenue / 12;
  const dailyClinicRevenue = inputs.chiropractors * inputs.visitsPerDay * inputs.revenuePerVisit;
  const revenuePerChiropractor = inputs.chiropractors > 0 ? annualRevenue / inputs.chiropractors : 0;
  const dailyRevenuePerChiropractor = inputs.workingDays > 0 ? revenuePerChiropractor / inputs.workingDays : 0;
  const vsMedian = revenuePerChiropractor - chiropracticIndustryAverages.revenuePerChiropractor;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (revenuePerChiropractor < 250000) tier = "Below";
  else if (revenuePerChiropractor >= 400000) tier = "Strong";

  return {
    annualVisits,
    annualRevenue,
    monthlyRevenue,
    dailyClinicRevenue,
    revenuePerChiropractor,
    dailyRevenuePerChiropractor,
    tier,
    vsMedian,
  };
}

export const faqs = [
  {
    question: "How do I estimate annual revenue for a chiropractic clinic?",
    answer:
      "Multiply chiropractors by visits per day, working days per year, and revenue per visit. Example: 2 chiropractors × 24 visits/day × 245 days × $65 = about $764K annual revenue.",
  },
  {
    question: "What is a typical revenue per chiropractor benchmark?",
    answer:
      "Many general outpatient clinics run around $250K-$400K annual revenue per full-time chiropractor, with a median near $320K. High-performing clinics typically pair strong throughput with solid visit pricing.",
  },
  {
    question: "How many visits per day should a chiropractor complete?",
    answer:
      "A common productivity range is 20-35 completed visits per chiropractor per day, depending on care model and appointment length. Most clinics target the mid-20s as a sustainable baseline.",
  },
  {
    question: "What revenue per visit should I assume in projections?",
    answer:
      "A practical planning range is $45-$85 per visit, with many mixed-model clinics near $65. Final value depends on payer mix, cash-pay share, care plans, and coding patterns.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/chiropractic-clinic-revenue/");
export { chiropracticIndustryAverages, chiropracticDataLinks, formatCurrency, formatNumber };
