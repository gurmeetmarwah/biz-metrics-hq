import {
  formatCurrency,
  relatedYogaCalculators,
  yogaIndustryAverages,
} from "@/lib/industries/yoga-calculators-shared";

export const meta = {
  title: "Yoga Instructor Productivity Calculator & Revenue Per Teacher Tool",
  shortTitle: "Instructor Productivity Calculator",
  subtitle: "Benchmark revenue per instructor from class load, private sessions, and teaching-hour economics.",
  description:
    "Free yoga instructor productivity calculator. Estimate annual revenue per instructor, utilization, and revenue per teaching hour.",
};

export const introContent = {
  lead: "Instructor productivity defines boutique yoga economics. This calculator models revenue per instructor from group classes and private sessions, then benchmarks against typical studio ranges.",
  bullets: [
    "Weekly Revenue = (Classes × Avg Class Revenue) + (Privates × Private Rate)",
    "Annual Revenue/Instructor = Weekly Revenue × 52",
    "Target: $72K – $125K revenue per instructor annually",
  ],
  audience: "Built for studio owners optimizing schedules, compensation models, and hiring plans.",
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
  instructorCount: 6,
  classesPerInstructorPerWeek: 12,
  privatesPerInstructorPerWeek: 4,
  avgGroupClassRevenue: 240,
  avgPrivateSessionRevenue: 75,
  teachingHoursPerWeek: 22,
};

export const productivityBenchmarks = [
  { metric: "Revenue Per Instructor", range: "$72K – $125K/yr" },
  { metric: "Classes Per Week", range: "10 – 16" },
  { metric: "Private Sessions Per Week", range: "3 – 8" },
  { metric: "Revenue Per Teaching Hour", range: "$55 – $95" },
] as const;

export function calculateInstructorProductivity(inputs: InstructorProductivityInputs) {
  const weeklyRevenuePerInstructor =
    inputs.classesPerInstructorPerWeek * inputs.avgGroupClassRevenue +
    inputs.privatesPerInstructorPerWeek * inputs.avgPrivateSessionRevenue;
  const annualRevenuePerInstructor = weeklyRevenuePerInstructor * 52;
  const totalAnnualRevenue = annualRevenuePerInstructor * inputs.instructorCount;
  const revenuePerTeachingHour =
    inputs.teachingHoursPerWeek > 0 ? weeklyRevenuePerInstructor / inputs.teachingHoursPerWeek : 0;
  const utilizationPct = Math.min(100, (inputs.teachingHoursPerWeek / 30) * 100);
  const vsBenchmark = annualRevenuePerInstructor - yogaIndustryAverages.revenuePerInstructorAnnual;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (annualRevenuePerInstructor < 72_000) tier = "Below";
  else if (annualRevenuePerInstructor >= 115_000) tier = "Strong";

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
    question: "What is good revenue per yoga instructor?",
    answer:
      "Well-utilized instructors generate $72K–$125K in annual studio revenue through a mix of group classes and private sessions. Top performers with strong private-session books exceed $110K.",
  },
  {
    question: "How many classes should a yoga instructor teach per week?",
    answer:
      "Full-time yoga instructors typically teach 10–16 classes per week plus 3–8 private sessions. Beyond ~25 teaching hours, fatigue and quality decline often hurt community retention.",
  },
  {
    question: "How do you calculate revenue per teaching hour?",
    answer:
      "Divide weekly instructor revenue by teaching hours per week. Target $55–$95/hr depending on market pricing and private-session mix.",
  },
] as const;

export const relatedTools = relatedYogaCalculators("/calculators/yoga-instructor-productivity/");
export { yogaIndustryAverages, formatCurrency };
