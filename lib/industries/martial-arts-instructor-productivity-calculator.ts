import {
  formatCurrency,
  martialArtsIndustryAverages,
  relatedMartialArtsCalculators,
} from "@/lib/industries/martial-arts-calculators-shared";

export const meta = {
  title: "Martial Arts Instructor Productivity Calculator & Revenue Per Teacher Tool",
  shortTitle: "Instructor Productivity Calculator",
  subtitle: "Benchmark revenue per instructor from class load, private lessons, and teaching-hour economics.",
  description:
    "Free martial arts instructor productivity calculator. Estimate annual revenue per instructor, utilization, and revenue per teaching hour.",
};

export const introContent = {
  lead: "Instructor productivity defines martial arts school economics. This calculator models revenue per instructor from group classes and private lessons, then benchmarks against typical academy ranges.",
  bullets: [
    "Weekly Revenue = (Classes × Avg Class Revenue) + (Privates × Private Rate)",
    "Annual Revenue/Instructor = Weekly Revenue × 52",
    "Target: $110K – $185K revenue per instructor annually",
  ],
  audience: "Built for school owners optimizing schedules, compensation models, and hiring plans.",
};

export type InstructorProductivityInputs = {
  instructorCount: number;
  classesPerInstructorPerWeek: number;
  privatesPerInstructorPerMonth: number;
  avgGroupClassRevenue: number;
  avgPrivateLessonRevenue: number;
  teachingHoursPerWeek: number;
};

export const defaultInputs: InstructorProductivityInputs = {
  instructorCount: 5,
  classesPerInstructorPerWeek: 22,
  privatesPerInstructorPerMonth: 18,
  avgGroupClassRevenue: 285,
  avgPrivateLessonRevenue: 65,
  teachingHoursPerWeek: 26,
};

export const productivityBenchmarks = [
  { metric: "Revenue Per Instructor", range: "$110K – $185K/yr" },
  { metric: "Students Per Instructor", range: "45 – 85 active" },
  { metric: "Classes Per Week", range: "18 – 28" },
  { metric: "Revenue Per Teaching Hour", range: "$75 – $125" },
] as const;

export function calculateInstructorProductivity(inputs: InstructorProductivityInputs) {
  const weeklyGroupRevenue = inputs.classesPerInstructorPerWeek * inputs.avgGroupClassRevenue;
  const weeklyPrivateRevenue = (inputs.privatesPerInstructorPerMonth * inputs.avgPrivateLessonRevenue) / 4.33;
  const weeklyRevenuePerInstructor = weeklyGroupRevenue + weeklyPrivateRevenue;
  const annualRevenuePerInstructor = weeklyRevenuePerInstructor * 52;
  const totalAnnualRevenue = annualRevenuePerInstructor * inputs.instructorCount;
  const revenuePerTeachingHour =
    inputs.teachingHoursPerWeek > 0 ? weeklyRevenuePerInstructor / inputs.teachingHoursPerWeek : 0;
  const utilizationPct = Math.min(100, (inputs.teachingHoursPerWeek / 32) * 100);
  const vsBenchmark = annualRevenuePerInstructor - martialArtsIndustryAverages.revenuePerInstructorAnnual;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (annualRevenuePerInstructor < 110_000) tier = "Below";
  else if (annualRevenuePerInstructor >= 170_000) tier = "Strong";

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
    question: "What is good revenue per martial arts instructor?",
    answer:
      "Well-utilized instructors generate $110K–$185K in annual school revenue through group classes and private lessons. Top performers with strong private lesson books exceed $165K.",
  },
  {
    question: "How many classes should an instructor teach per week?",
    answer:
      "Full-time martial arts instructors typically teach 18–28 classes per week plus private lessons. Beyond ~30 teaching hours, quality and retention often decline.",
  },
  {
    question: "How do you calculate revenue per teaching hour?",
    answer:
      "Divide weekly instructor revenue by teaching hours per week. Target $75–$125/hr depending on market pricing and private-lesson mix.",
  },
] as const;

export const relatedTools = relatedMartialArtsCalculators("/calculators/martial-arts-instructor-productivity/");
export { martialArtsIndustryAverages, formatCurrency };
