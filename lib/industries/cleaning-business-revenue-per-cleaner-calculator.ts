import {
  formatCurrency,
  formatNumber,
  formatPercent,
  cleaningBusinessIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/cleaning-business-calculators-shared";

export const meta = {
  title: "Cleaning Business Revenue Per Cleaner Calculator & Labor Productivity Tool",
  shortTitle: "Revenue Per Cleaner Calculator",
  subtitle:
    "Measure revenue per cleaner, jobs per crew, and labor utilization for your cleaning company.",
  description:
    "Free cleaning business revenue per cleaner calculator. Track cleaner productivity, jobs per day, and utilization against 190+ cleaning business benchmarks.",
};

export const introContent = {
  lead: "Revenue per cleaner is the core operating KPI for cleaning businesses. Labor is your largest cost — this calculator benchmarks your field productivity against industry norms and identifies utilization gaps.",
  bullets: [
    "Revenue Per Cleaner = Annual Revenue ÷ Field Cleaners",
    "Healthy operators target $80K – $150K annual revenue per cleaner",
    "Top crews complete 4 – 8 jobs per two-person crew per day",
  ],
  audience:
    "Built for cleaning business owners, operations managers, and buyers evaluating crew capacity and growth plans.",
};

export type RevenuePerCleanerInputs = {
  annualRevenue: number;
  cleaners: number;
  jobsPerCrewPerDay: number;
  workingDays: number;
  laborUtilizationPct: number;
};

export const defaultInputs: RevenuePerCleanerInputs = {
  annualRevenue: 500000,
  cleaners: 6,
  jobsPerCrewPerDay: 6,
  workingDays: 250,
  laborUtilizationPct: 72,
};

export const productivityBenchmarks = [
  { metric: "Revenue Per Cleaner", range: "$80K – $150K/yr" },
  { metric: "Jobs Per Crew / Day", range: "4 – 8" },
  { metric: "Labor Utilization", range: "65 – 80%" },
  { metric: "Revenue Per Job", range: "$120 – $350" },
] as const;

export type ProductivityTier = "Below" | "Typical" | "Strong";

export function getProductivityTier(revenuePerCleaner: number): ProductivityTier {
  if (revenuePerCleaner < 80000) return "Below";
  if (revenuePerCleaner >= 130000) return "Strong";
  return "Typical";
}

export function calculateRevenuePerCleaner(inputs: RevenuePerCleanerInputs) {
  const revenuePerCleaner = inputs.cleaners > 0 ? inputs.annualRevenue / inputs.cleaners : 0;
  const crews = Math.max(1, Math.ceil(inputs.cleaners / 2));
  const totalAnnualJobs = crews * inputs.jobsPerCrewPerDay * inputs.workingDays;
  const revenuePerJob = totalAnnualJobs > 0 ? inputs.annualRevenue / totalAnnualJobs : 0;
  const jobsPerCleanerPerYear = inputs.cleaners > 0 ? totalAnnualJobs / inputs.cleaners : 0;
  const vsMedian = revenuePerCleaner - cleaningBusinessIndustryAverages.revenuePerCleaner;

  const targetUtilization = 75;
  const utilizationGap = targetUtilization - inputs.laborUtilizationPct;
  const potentialRevenueGain =
    utilizationGap > 0 ? inputs.annualRevenue * (utilizationGap / 100) * 0.4 : 0;

  return {
    revenuePerCleaner,
    revenuePerJob,
    jobsPerCleanerPerYear,
    totalAnnualJobs,
    vsMedian,
    tier: getProductivityTier(revenuePerCleaner),
    potentialRevenueGain,
    utilizationGap,
  };
}

export const faqs = [
  {
    question: "What is a good revenue per cleaner for a cleaning business?",
    answer:
      "Most productive cleaning operators generate $80K–$150K annual revenue per field cleaner, with a median near $115K. Commercial-heavy operators with dense routes can exceed $130K per cleaner.",
  },
  {
    question: "How many jobs should a cleaning crew complete per day?",
    answer:
      "Efficient two-person crews typically complete 4–8 jobs per day depending on job size, travel distance, and service type. Residential routes with tight geographic clustering achieve higher job counts.",
  },
  {
    question: "How is labor utilization measured in cleaning businesses?",
    answer:
      "Labor utilization reflects the percentage of scheduled hours cleaners spend on billable jobs. Scheduling gaps, drive time, and callbacks reduce utilization. Healthy operators target 65–80%.",
  },
  {
    question: "What drives higher revenue per cleaner?",
    answer:
      "Route density, recurring contract penetration, upselling specialty services, minimizing non-billable drive time, and maintaining low employee turnover are the highest-impact levers.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/cleaning-business-revenue-per-cleaner/");
export { cleaningBusinessIndustryAverages, formatCurrency, formatNumber, formatPercent };
