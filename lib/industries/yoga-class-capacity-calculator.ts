import {
  formatCurrency,
  formatPercent,
  relatedYogaCalculators,
  yogaIndustryAverages,
} from "@/lib/industries/yoga-calculators-shared";

export const meta = {
  title: "Yoga Class Capacity Calculator & Studio Utilization Tool",
  shortTitle: "Class Capacity Calculator",
  subtitle: "Estimate class revenue from weekly schedule, studio capacity, fill rate, and price per student.",
  description:
    "Free yoga class capacity calculator. Model monthly class revenue, revenue per class, and utilization against boutique studio benchmarks.",
};

export const introContent = {
  lead: "Filling underutilized classes is one of the biggest profitability levers for yoga studios. This calculator estimates revenue from your schedule, capacity, and fill rate — then benchmarks revenue per class.",
  bullets: [
    "Filled Spots/Week = Classes × Capacity × Occupancy %",
    "Monthly Class Revenue = Filled Spots/Week × Price × 4.33",
    "Target revenue per class: $180 – $320",
  ],
  audience: "Built for studio owners optimizing schedules, pricing intro offers, and improving off-peak attendance.",
};

export type ClassCapacityInputs = {
  classesPerWeek: number;
  avgClassCapacity: number;
  avgOccupancyPct: number;
  revenuePerStudentPerClass: number;
};

export const defaultInputs: ClassCapacityInputs = {
  classesPerWeek: 50,
  avgClassCapacity: 24,
  avgOccupancyPct: 68,
  revenuePerStudentPerClass: 14,
};

export const capacityBenchmarks = [
  { metric: "Average Occupancy", range: "62 – 75%" },
  { metric: "Peak Hour Utilization", range: "78 – 92%" },
  { metric: "Revenue Per Class", range: "$180 – $320" },
  { metric: "Classes Per Week", range: "35 – 65" },
] as const;

const WEEKS_PER_MONTH = 4.33;

export function calculateClassCapacity(inputs: ClassCapacityInputs) {
  const filledSpotsPerClass = inputs.avgClassCapacity * (inputs.avgOccupancyPct / 100);
  const filledSpotsPerWeek = inputs.classesPerWeek * filledSpotsPerClass;
  const revenuePerClass = filledSpotsPerClass * inputs.revenuePerStudentPerClass;
  const weeklyClassRevenue = filledSpotsPerWeek * inputs.revenuePerStudentPerClass;
  const monthlyClassRevenue = weeklyClassRevenue * WEEKS_PER_MONTH;
  const vsBenchmarkPerClass = revenuePerClass - yogaIndustryAverages.revenuePerClass;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (revenuePerClass < 180) tier = "Below";
  else if (revenuePerClass >= 280) tier = "Strong";

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
    question: "What is a good class fill rate for a yoga studio?",
    answer:
      "Target 62–75% average occupancy across all classes, with peak morning and evening slots at 78–92%. Below 55% average occupancy usually signals scheduling, pricing, or community programming issues.",
  },
  {
    question: "How do you calculate revenue per class?",
    answer:
      "Multiply average class size by effective revenue per student (membership allocation or drop-in price). Well-run studios generate $180–$320 per class depending on capacity and pricing mix.",
  },
  {
    question: "How many classes should a yoga studio run per week?",
    answer:
      "Mature boutique studios typically run 35–65 classes per week across 1–3 rooms — optimizing peak slots before adding off-peak capacity.",
  },
] as const;

export const relatedTools = relatedYogaCalculators("/calculators/yoga-class-capacity/");
export { yogaIndustryAverages, formatCurrency, formatPercent };
