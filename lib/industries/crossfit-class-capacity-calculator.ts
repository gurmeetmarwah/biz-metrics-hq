import {
  formatCurrency,
  formatPercent,
  relatedCrossfitCalculators,
  crossfitIndustryAverages,
} from "@/lib/industries/crossfit-calculators-shared";

export const meta = {
  title: "CrossFit Class Capacity Calculator & Box Utilization Tool",
  shortTitle: "Class Capacity Calculator",
  subtitle: "Estimate class revenue from daily schedule, class capacity, fill rate, and revenue per athlete.",
  description:
    "Free CrossFit class capacity calculator. Model monthly class revenue, revenue per class, and utilization against affiliate benchmarks.",
};

export const introContent = {
  lead: "Filling underutilized classes is one of the biggest profitability levers for CrossFit affiliates. This calculator estimates revenue from your schedule, capacity, and fill rate — then benchmarks revenue per class.",
  bullets: [
    "Filled Spots/Day = Classes × Capacity × Occupancy %",
    "Monthly Class Revenue = Filled Spots/Day × Revenue/Athlete × 30",
    "Target revenue per class: $280 – $420",
  ],
  audience: "Built for box owners optimizing schedules, peak-hour programming, and off-peak attendance.",
};

export type ClassCapacityInputs = {
  classesPerDay: number;
  avgClassCapacity: number;
  avgOccupancyPct: number;
  revenuePerAthletePerClass: number;
};

export const defaultInputs: ClassCapacityInputs = {
  classesPerDay: 10,
  avgClassCapacity: 16,
  avgOccupancyPct: 82,
  revenuePerAthletePerClass: 26,
};

export const capacityBenchmarks = [
  { metric: "Average Occupancy", range: "72 – 88%" },
  { metric: "Peak Hour Utilization", range: "85 – 98%" },
  { metric: "Revenue Per Class", range: "$280 – $420" },
  { metric: "Classes Per Day", range: "8 – 14" },
] as const;

export function calculateClassCapacity(inputs: ClassCapacityInputs) {
  const filledSpotsPerClass = inputs.avgClassCapacity * (inputs.avgOccupancyPct / 100);
  const filledSpotsPerDay = inputs.classesPerDay * filledSpotsPerClass;
  const revenuePerClass = filledSpotsPerClass * inputs.revenuePerAthletePerClass;
  const dailyClassRevenue = filledSpotsPerDay * inputs.revenuePerAthletePerClass;
  const monthlyClassRevenue = dailyClassRevenue * 30;
  const vsBenchmarkPerClass = revenuePerClass - crossfitIndustryAverages.revenuePerClass;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (revenuePerClass < 280) tier = "Below";
  else if (revenuePerClass >= 380) tier = "Strong";

  return {
    filledSpotsPerDay,
    revenuePerClass,
    dailyClassRevenue,
    monthlyClassRevenue,
    annualClassRevenue: monthlyClassRevenue * 12,
    vsBenchmarkPerClass,
    tier,
  };
}

export const faqs = [
  {
    question: "What is a good class fill rate for a CrossFit gym?",
    answer:
      "Target 72–88% average occupancy across all classes, with peak morning and evening slots at 85–98%. Below 65% average occupancy usually signals scheduling, pricing, or coach quality issues.",
  },
  {
    question: "How do you calculate revenue per class?",
    answer:
      "Multiply average class size by effective revenue per athlete (membership allocation plus drop-in/visit value). Well-run affiliates generate $280–$420 per class depending on capacity and pricing mix.",
  },
  {
    question: "How many classes should a CrossFit gym run each day?",
    answer:
      "Mature affiliates typically run 8–14 classes per day across morning, midday, and evening blocks — optimizing peak slots before adding off-peak capacity.",
  },
] as const;

export const relatedTools = relatedCrossfitCalculators("/calculators/crossfit-class-capacity/");
export { crossfitIndustryAverages, formatCurrency, formatPercent };
