import {
  formatCurrency,
  formatPercent,
  martialArtsIndustryAverages,
  relatedMartialArtsCalculators,
} from "@/lib/industries/martial-arts-calculators-shared";

export const meta = {
  title: "Martial Arts Student Capacity Calculator & Dojo Utilization Tool",
  shortTitle: "Student Capacity Calculator",
  subtitle: "Estimate class revenue from weekly schedule, dojo capacity, fill rate, and revenue per student.",
  description:
    "Free martial arts student capacity calculator. Model monthly class revenue, revenue per class, and utilization against school benchmarks.",
};

export const introContent = {
  lead: "Class fill rate and dojo capacity drive martial arts profitability. This calculator estimates revenue from your schedule, class size, and occupancy — then benchmarks revenue per class.",
  bullets: [
    "Filled Spots/Week = Classes × Capacity × Occupancy %",
    "Monthly Class Revenue = Filled Spots/Week × Price × 4.33",
    "Target revenue per class: $220 – $320",
  ],
  audience: "Built for school owners optimizing schedules, adding class times, and improving off-peak attendance.",
};

export type StudentCapacityInputs = {
  classesPerWeek: number;
  avgClassCapacity: number;
  avgOccupancyPct: number;
  revenuePerStudentPerClass: number;
};

export const defaultInputs: StudentCapacityInputs = {
  classesPerWeek: 55,
  avgClassCapacity: 18,
  avgOccupancyPct: 72,
  revenuePerStudentPerClass: 16,
};

export const capacityBenchmarks = [
  { metric: "Average Occupancy", range: "65 – 80%" },
  { metric: "Peak Hour Utilization", range: "82 – 95%" },
  { metric: "Revenue Per Class", range: "$220 – $320" },
  { metric: "Classes Per Week", range: "40 – 70" },
] as const;

const WEEKS_PER_MONTH = 4.33;

export function calculateStudentCapacity(inputs: StudentCapacityInputs) {
  const filledSpotsPerClass = inputs.avgClassCapacity * (inputs.avgOccupancyPct / 100);
  const filledSpotsPerWeek = inputs.classesPerWeek * filledSpotsPerClass;
  const revenuePerClass = filledSpotsPerClass * inputs.revenuePerStudentPerClass;
  const weeklyClassRevenue = filledSpotsPerWeek * inputs.revenuePerStudentPerClass;
  const monthlyClassRevenue = weeklyClassRevenue * WEEKS_PER_MONTH;
  const vsBenchmarkPerClass = revenuePerClass - martialArtsIndustryAverages.revenuePerClass;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (revenuePerClass < 220) tier = "Below";
  else if (revenuePerClass >= 300) tier = "Strong";

  return {
    filledSpotsPerWeek,
    revenuePerClass,
    weeklyClassRevenue,
    monthlyClassRevenue,
    annualClassRevenue: monthlyClassRevenue * 12,
    vsBenchmarkPerClass,
    tier,
  };
}

export const faqs = [
  {
    question: "What is a good class fill rate for a martial arts school?",
    answer:
      "Target 65–80% average occupancy across all classes, with peak after-school slots at 82–95%. Below 60% average occupancy usually signals scheduling or program-market fit issues.",
  },
  {
    question: "How do you calculate revenue per class?",
    answer:
      "Multiply average class size by effective revenue per student (tuition allocation or drop-in price). Well-run schools generate $220–$320 per class depending on capacity and pricing mix.",
  },
  {
    question: "How many classes should a martial arts school run per week?",
    answer:
      "Mature schools typically run 40–70 classes per week across kids, teens, and adult programs — optimizing after-school peak before adding off-peak capacity.",
  },
] as const;

export const relatedTools = relatedMartialArtsCalculators("/calculators/martial-arts-student-capacity/");
export { martialArtsIndustryAverages, formatCurrency, formatPercent };
