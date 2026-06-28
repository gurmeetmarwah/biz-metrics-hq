import {
  formatCurrency,
  pilatesIndustryAverages,
  relatedPilatesCalculators,
} from "@/lib/industries/pilates-calculators-shared";

export const meta = {
  title: "Pilates Instructor Productivity Calculator & Revenue Per Teacher Tool",
  shortTitle: "Instructor Productivity Calculator",
  subtitle:
    "Benchmark revenue per instructor from class load, private sessions, and teaching-hour economics.",
  description:
    "Free Pilates instructor productivity calculator. Estimate annual revenue per instructor, utilization, and revenue per teaching hour.",
};

export const introContent = {
  lead: "Instructor productivity defines boutique Pilates economics. This calculator models revenue per instructor from group classes and private sessions, then benchmarks against typical reformer studio ranges.",
  bullets: [
    "Weekly Revenue = (Classes × Avg Class Revenue) + (Privates × Private Rate)",
    "Annual Revenue/Instructor = Weekly Revenue × 52",
    "Target: $95K – $165K revenue per instructor annually",
  ],
  audience:
    "Built for studio owners optimizing schedules, compensation models, and hiring plans.",
};

export type InstructorProductivityInputs = {
  instructorCount: number;
  classesPerInstructorPerWeek: number;
  privatesPerInstructorPerWeek: number;
  avgGroupClassRevenue: number;
  avgPrivateSessionRevenue: number;
  teachingHoursPerWeek: number;
};

export const defaultInputs: InstructorProductivityInputs = {
  instructorCount: 5,
  classesPerInstructorPerWeek: 14,
  privatesPerInstructorPerWeek: 8,
  avgGroupClassRevenue: 220,
  avgPrivateSessionRevenue: 95,
  teachingHoursPerWeek: 28,
};

export const productivityBenchmarks = [
  { metric: "Revenue Per Instructor", range: "$95K – $165K/yr" },
  { metric: "Classes Per Instructor", range: "12 – 20/wk" },
  { metric: "Private Sessions Per Week", range: "6 – 14" },
  { metric: "Revenue Per Teaching Hour", range: "$85 – $145" },
] as const;

export function calculateInstructorProductivity(inputs: InstructorProductivityInputs) {
  const weeklyRevenuePerInstructor =
    inputs.classesPerInstructorPerWeek * inputs.avgGroupClassRevenue +
    inputs.privatesPerInstructorPerWeek * inputs.avgPrivateSessionRevenue;
  const annualRevenuePerInstructor = weeklyRevenuePerInstructor * 52;
  const totalAnnualRevenue = annualRevenuePerInstructor * inputs.instructorCount;
  const revenuePerTeachingHour =
    inputs.teachingHoursPerWeek > 0 ? weeklyRevenuePerInstructor / inputs.teachingHoursPerWeek : 0;
  const utilizationPct = Math.min(100, (inputs.teachingHoursPerWeek / 35) * 100);
  const vsBenchmark = annualRevenuePerInstructor - pilatesIndustryAverages.revenuePerInstructorAnnual;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (annualRevenuePerInstructor < 95_000) tier = "Below";
  else if (annualRevenuePerInstructor >= 150_000) tier = "Strong";

  return {
    weeklyRevenuePerInstructor,
    annualRevenuePerInstructor,
    totalAnnualRevenue,
    revenuePerTeachingHour,
    utilizationPct,
    vsBenchmark,
    tier,
  };
}

export const faqs = [
  {
    question: "What is good revenue per Pilates instructor?",
    answer:
      "Well-utilized instructors generate $95K–$165K in annual studio revenue through a mix of group classes and private sessions. Top performers with strong private-session books exceed $150K.",
  },
  {
    question: "How many classes should a Pilates instructor teach per week?",
    answer:
      "Full-time reformer instructors typically teach 12–20 classes per week plus 6–14 private sessions. Beyond ~25 teaching hours, fatigue and quality decline often hurt retention.",
  },
  {
    question: "How do you calculate revenue per teaching hour?",
    answer:
      "Divide weekly instructor revenue by teaching hours per week. Target $85–$145/hr depending on market pricing and private-session mix.",
  },
] as const;

export const relatedTools = relatedPilatesCalculators("/calculators/pilates-instructor-productivity/");
export { pilatesIndustryAverages, formatCurrency };
