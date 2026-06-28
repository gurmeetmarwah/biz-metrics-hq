import {
  formatCurrency,
  relatedCrossfitCalculators,
  crossfitIndustryAverages,
} from "@/lib/industries/crossfit-calculators-shared";

export const meta = {
  title: "CrossFit Coach Productivity Calculator & Revenue Per Coach Tool",
  shortTitle: "Coach Productivity Calculator",
  subtitle: "Benchmark revenue per coach from class load, personal training, and coaching-hour economics.",
  description:
    "Free CrossFit coach productivity calculator. Estimate annual revenue per coach, utilization, and revenue per coaching hour.",
};

export const introContent = {
  lead: "Coach productivity defines CrossFit affiliate economics. This calculator models revenue per coach from group classes and personal training, then benchmarks against typical box ranges.",
  bullets: [
    "Weekly Revenue = (Classes × Avg Class Revenue) + (PT Sessions × PT Rate)",
    "Annual Revenue/Coach = Weekly Revenue × 52",
    "Target: $125K – $210K revenue per coach annually",
  ],
  audience: "Built for box owners optimizing schedules, compensation models, and hiring plans.",
};

export type CoachProductivityInputs = {
  coachCount: number;
  classesPerCoachPerWeek: number;
  ptSessionsPerCoachPerWeek: number;
  avgGroupClassRevenue: number;
  avgPtSessionRevenue: number;
  coachingHoursPerWeek: number;
};

export const defaultInputs: CoachProductivityInputs = {
  coachCount: 4,
  classesPerCoachPerWeek: 18,
  ptSessionsPerCoachPerWeek: 6,
  avgGroupClassRevenue: 340,
  avgPtSessionRevenue: 85,
  coachingHoursPerWeek: 28,
};

export const productivityBenchmarks = [
  { metric: "Revenue Per Coach", range: "$125K – $210K/yr" },
  { metric: "Classes Per Week", range: "14 – 22" },
  { metric: "PT Sessions Per Week", range: "4 – 12" },
  { metric: "Revenue Per Coaching Hour", range: "$85 – $145" },
] as const;

export function calculateCoachProductivity(inputs: CoachProductivityInputs) {
  const weeklyRevenuePerCoach =
    inputs.classesPerCoachPerWeek * inputs.avgGroupClassRevenue +
    inputs.ptSessionsPerCoachPerWeek * inputs.avgPtSessionRevenue;
  const annualRevenuePerCoach = weeklyRevenuePerCoach * 52;
  const totalAnnualRevenue = annualRevenuePerCoach * inputs.coachCount;
  const revenuePerCoachingHour =
    inputs.coachingHoursPerWeek > 0 ? weeklyRevenuePerCoach / inputs.coachingHoursPerWeek : 0;
  const utilizationPct = Math.min(100, (inputs.coachingHoursPerWeek / 35) * 100);
  const vsBenchmark = annualRevenuePerCoach - crossfitIndustryAverages.revenuePerCoachAnnual;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (annualRevenuePerCoach < 125_000) tier = "Below";
  else if (annualRevenuePerCoach >= 190_000) tier = "Strong";

  return {
    weeklyRevenuePerCoach,
    annualRevenuePerCoach,
    totalAnnualRevenue,
    revenuePerCoachingHour,
    utilizationPct,
    vsBenchmark,
    tier,
  };
}

export const faqs = [
  {
    question: "What is good revenue per CrossFit coach?",
    answer:
      "Well-utilized coaches generate $125K–$210K in annual box revenue through group classes and personal training. Top performers with strong PT books exceed $180K.",
  },
  {
    question: "How many classes should a CrossFit coach teach per week?",
    answer:
      "Full-time coaches typically teach 14–22 classes per week plus 4–12 PT sessions. Beyond ~35 coaching hours, fatigue and quality decline often hurt member retention.",
  },
  {
    question: "How do you calculate revenue per coaching hour?",
    answer:
      "Divide weekly coach revenue by coaching hours per week. Target $85–$145/hr depending on market pricing and personal training mix.",
  },
] as const;

export const relatedTools = relatedCrossfitCalculators("/calculators/crossfit-coach-productivity/");
export { crossfitIndustryAverages, formatCurrency };
