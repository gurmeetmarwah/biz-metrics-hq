import {
  formatCurrency,
  formatNumber,
  landscapingIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/landscaping-calculators-shared";

export const meta = {
  title: "Landscaping Revenue Calculator & Annual Revenue Estimator",
  shortTitle: "Landscaping Revenue Calculator",
  subtitle:
    "Estimate annual landscaping revenue from crew count, maintenance routes, and project volume.",
  description:
    "Free landscaping revenue calculator. Project annual revenue from field crews, weekly route revenue, and project work against 280+ landscaping company benchmarks.",
};

export const introContent = {
  lead: "Landscaping revenue blends recurring maintenance routes with seasonal project work. This calculator estimates annual revenue from your field crews, weekly production, and monthly project volume — then benchmarks against industry norms.",
  bullets: [
    "Route Revenue = Crews × Weekly Revenue/Crew × Working Weeks",
    "Median landscaping company generates ~$1.1M annually",
    "Top crews produce $200K – $350K revenue per year",
  ],
  audience:
    "Built for landscaping owners planning crew capacity, route growth, and revenue targets.",
};

export type LandscapingRevenueInputs = {
  fieldCrews: number;
  weeklyRevenuePerCrew: number;
  workingWeeks: number;
  monthlyProjectRevenue: number;
};

export const defaultInputs: LandscapingRevenueInputs = {
  fieldCrews: 4,
  weeklyRevenuePerCrew: 5500,
  workingWeeks: 40,
  monthlyProjectRevenue: 35000,
};

export const revenueBenchmarks = [
  { metric: "Median Annual Revenue", range: "$1.1M" },
  { metric: "Revenue Per Crew", range: "$200K – $350K" },
  { metric: "Working Weeks / Year", range: "38 – 44" },
  { metric: "Weekly Revenue / Crew", range: "$4K – $7K" },
] as const;

export function calculateLandscapingRevenue(inputs: LandscapingRevenueInputs) {
  const annualRouteRevenue = inputs.fieldCrews * inputs.weeklyRevenuePerCrew * inputs.workingWeeks;
  const annualProjectRevenue = inputs.monthlyProjectRevenue * 12;
  const estimatedAnnualRevenue = annualRouteRevenue + annualProjectRevenue;
  const revenuePerCrew =
    inputs.fieldCrews > 0 ? estimatedAnnualRevenue / inputs.fieldCrews : 0;
  const maintenancePct =
    estimatedAnnualRevenue > 0 ? (annualRouteRevenue / estimatedAnnualRevenue) * 100 : 0;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (estimatedAnnualRevenue < 750000) tier = "Below";
  else if (estimatedAnnualRevenue >= 1600000) tier = "Strong";

  const vsMedian = estimatedAnnualRevenue - landscapingIndustryAverages.revenue;

  return {
    estimatedAnnualRevenue,
    annualRouteRevenue,
    annualProjectRevenue,
    revenuePerCrew,
    maintenancePct,
    vsMedian,
    tier,
  };
}

export const faqs = [
  {
    question: "How much revenue can a landscaping crew generate?",
    answer:
      "A productive maintenance crew typically generates $200K–$350K annual revenue, with a median near $275K. At $5,500/week across 40 working weeks, one crew produces ~$220K in route revenue before project add-ons.",
  },
  {
    question: "How many weeks do landscaping crews work per year?",
    answer:
      "Most landscaping companies operate 38–44 billable weeks annually depending on climate. Sun Belt operators often work longer seasons; northern operators may supplement with snow removal.",
  },
  {
    question: "What is average landscaping company revenue?",
    answer:
      "The median owner-operated landscaping company generates about $1.1M annually. Operators with strong commercial contract books and design-build capabilities often exceed $1.8M.",
  },
  {
    question: "How does project revenue affect total landscaping revenue?",
    answer:
      "Project work (hardscaping, irrigation, outdoor living) typically adds 25–45% on top of maintenance route revenue for mixed operators. Maintenance-heavy companies may run 55–70% recurring revenue.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/landscaping-revenue/");
export { landscapingIndustryAverages, formatCurrency, formatNumber };
