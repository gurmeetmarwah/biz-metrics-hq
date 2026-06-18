import {
  formatCurrency,
  formatNumber,
  formatPercent,
  landscapingIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/landscaping-calculators-shared";

export const meta = {
  title: "Landscaping Crew Productivity Calculator & Revenue Per Crew Tool",
  shortTitle: "Landscaping Crew Productivity Calculator",
  subtitle:
    "Measure revenue per crew, properties per week, and route efficiency for your landscaping company.",
  description:
    "Free landscaping crew productivity calculator. Track revenue per crew, weekly properties, and utilization against 280+ landscaping business benchmarks.",
};

export const introContent = {
  lead: "Crew productivity defines landscaping scalability. Revenue per crew and properties per route are the core operating KPIs. This calculator benchmarks your field production against industry norms.",
  bullets: [
    "Revenue Per Crew = Annual Revenue ÷ Field Crews",
    "Healthy crews target $200K – $350K annual revenue",
    "Route density and properties per day drive crew efficiency",
  ],
  audience:
    "Built for landscaping owners, operations managers, and buyers evaluating crew capacity and growth plans.",
};

export type CrewProductivityInputs = {
  annualRevenue: number;
  fieldCrews: number;
  propertiesPerCrewPerWeek: number;
  workingWeeks: number;
  crewUtilizationPct: number;
};

export const defaultInputs: CrewProductivityInputs = {
  annualRevenue: 1100000,
  fieldCrews: 4,
  propertiesPerCrewPerWeek: 45,
  workingWeeks: 40,
  crewUtilizationPct: 78,
};

export const productivityBenchmarks = [
  { metric: "Revenue Per Crew", range: "$200K – $350K/yr" },
  { metric: "Properties Per Crew / Week", range: "35 – 60" },
  { metric: "Crew Utilization", range: "70 – 90%" },
  { metric: "Revenue Per Property / Visit", range: "$100 – $180" },
] as const;

export type ProductivityTier = "Below" | "Typical" | "Strong";

export function getProductivityTier(revenuePerCrew: number): ProductivityTier {
  if (revenuePerCrew < 200000) return "Below";
  if (revenuePerCrew >= 300000) return "Strong";
  return "Typical";
}

export function calculateCrewProductivity(inputs: CrewProductivityInputs) {
  const revenuePerCrew =
    inputs.fieldCrews > 0 ? inputs.annualRevenue / inputs.fieldCrews : 0;
  const totalAnnualVisits = inputs.fieldCrews * inputs.propertiesPerCrewPerWeek * inputs.workingWeeks;
  const revenuePerVisit =
    totalAnnualVisits > 0 ? inputs.annualRevenue / totalAnnualVisits : 0;
  const visitsPerCrewPerYear = inputs.propertiesPerCrewPerWeek * inputs.workingWeeks;
  const vsMedian = revenuePerCrew - landscapingIndustryAverages.revenuePerCrew;

  const targetUtilization = 85;
  const utilizationGap = targetUtilization - inputs.crewUtilizationPct;
  const potentialRevenueGain =
    utilizationGap > 0
      ? inputs.annualRevenue * (utilizationGap / 100) * 0.4
      : 0;

  return {
    revenuePerCrew,
    revenuePerVisit,
    visitsPerCrewPerYear,
    totalAnnualVisits,
    vsMedian,
    tier: getProductivityTier(revenuePerCrew),
    potentialRevenueGain,
    utilizationGap,
  };
}

export const faqs = [
  {
    question: "What is a good revenue per crew for a landscaping company?",
    answer:
      "Most productive landscaping crews generate $200K–$350K annual revenue, with a median near $275K. Commercial-heavy operators with larger property tickets can exceed $350K per crew.",
  },
  {
    question: "How many properties should a landscaping crew service per week?",
    answer:
      "Maintenance crews typically service 35–60 properties per week depending on property size, drive time, and service scope. Higher route density improves margins significantly.",
  },
  {
    question: "How is crew utilization measured in landscaping?",
    answer:
      "Crew utilization reflects the percentage of available working hours crews spend on billable properties. Weather delays, equipment issues, and scheduling gaps reduce utilization. Healthy operators target 70–90%.",
  },
  {
    question: "What drives higher crew productivity?",
    answer:
      "Route density, geographic clustering, standardized service packages, commercial contract pricing, and minimizing non-billable drive time between properties.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/landscaping-crew-productivity/");
export { landscapingIndustryAverages, formatCurrency, formatNumber, formatPercent };
