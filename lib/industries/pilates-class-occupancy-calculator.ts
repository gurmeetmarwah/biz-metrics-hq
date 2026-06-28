import {
  formatCurrency,
  formatPercent,
  pilatesIndustryAverages,
  relatedPilatesCalculators,
} from "@/lib/industries/pilates-calculators-shared";

export const meta = {
  title: "Pilates Class Occupancy Calculator & Reformer Utilization Tool",
  shortTitle: "Class Occupancy Calculator",
  subtitle:
    "Estimate class revenue from reformer count, weekly class schedule, fill rate, and price per client.",
  description:
    "Free Pilates class occupancy calculator. Model monthly class revenue, revenue per reformer, and utilization against boutique studio benchmarks.",
};

export const introContent = {
  lead: "Class occupancy is one of the most important operational metrics for boutique Pilates studios. This calculator estimates revenue from your schedule, capacity, and fill rate — then benchmarks revenue per reformer.",
  bullets: [
    "Filled Spots/Week = Classes × Capacity × Occupancy %",
    "Monthly Class Revenue = Filled Spots/Week × Price × 4.33",
    "Target revenue per reformer: $1,800 – $3,200/mo",
  ],
  audience:
    "Built for studio owners optimizing schedules, pricing intro offers, and evaluating reformer ROI.",
};

export type ClassOccupancyInputs = {
  reformerCount: number;
  classesPerWeek: number;
  avgClassCapacity: number;
  avgOccupancyPct: number;
  revenuePerClientPerClass: number;
};

export const defaultInputs: ClassOccupancyInputs = {
  reformerCount: 8,
  classesPerWeek: 60,
  avgClassCapacity: 10,
  avgOccupancyPct: 72,
  revenuePerClientPerClass: 28,
};

export const occupancyBenchmarks = [
  { metric: "Average Occupancy", range: "65 – 78%" },
  { metric: "Peak Hour Utilization", range: "85 – 95%" },
  { metric: "Revenue Per Reformer", range: "$1,800 – $3,200/mo" },
  { metric: "Classes Per Week", range: "45 – 75" },
] as const;

const WEEKS_PER_MONTH = 4.33;

export function calculateClassOccupancy(inputs: ClassOccupancyInputs) {
  const filledSpotsPerClass = inputs.avgClassCapacity * (inputs.avgOccupancyPct / 100);
  const filledSpotsPerWeek = inputs.classesPerWeek * filledSpotsPerClass;
  const weeklyClassRevenue = filledSpotsPerWeek * inputs.revenuePerClientPerClass;
  const monthlyClassRevenue = weeklyClassRevenue * WEEKS_PER_MONTH;
  const revenuePerReformer =
    inputs.reformerCount > 0 ? monthlyClassRevenue / inputs.reformerCount : 0;
  const classesPerReformerPerWeek =
    inputs.reformerCount > 0 ? inputs.classesPerWeek / inputs.reformerCount : 0;
  const vsBenchmarkReformer = revenuePerReformer - pilatesIndustryAverages.revenuePerReformerMonthly;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (revenuePerReformer < 1_800) tier = "Below";
  else if (revenuePerReformer >= 2_800) tier = "Strong";

  return {
    filledSpotsPerWeek,
    weeklyClassRevenue,
    monthlyClassRevenue,
    annualClassRevenue: monthlyClassRevenue * 12,
    revenuePerReformer,
    classesPerReformerPerWeek,
    vsBenchmarkReformer,
    tier,
  };
}

export const faqs = [
  {
    question: "What is a good class occupancy rate for a Pilates studio?",
    answer:
      "Target 65–78% average occupancy across all classes, with peak morning and evening slots at 85–95%. Below 60% average occupancy usually signals scheduling, pricing, or instructor-market fit issues.",
  },
  {
    question: "How do you calculate revenue per reformer?",
    answer:
      "Divide total monthly class revenue by the number of reformers in use. Well-run studios generate $1,800–$3,200 per reformer per month depending on class density and pricing.",
  },
  {
    question: "How many classes should a reformer studio run per week?",
    answer:
      "Mature studios typically run 45–75 classes per week across 6–10 reformers — roughly 6–9 classes per reformer weekly when schedules are optimized.",
  },
] as const;

export const relatedTools = relatedPilatesCalculators("/calculators/pilates-class-occupancy/");
export { pilatesIndustryAverages, formatCurrency, formatPercent };
