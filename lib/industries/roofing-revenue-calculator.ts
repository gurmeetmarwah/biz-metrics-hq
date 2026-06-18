import {
  formatCurrency,
  formatNumber,
  roofingIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/roofing-calculators-shared";

export const meta = {
  title: "Roofing Revenue Calculator & Annual Revenue Estimator",
  shortTitle: "Roofing Revenue Calculator",
  subtitle:
    "Estimate annual roofing revenue from crew count, install volume, and average project value.",
  description:
    "Free roofing revenue calculator. Project annual revenue from install crews, jobs per month, and average ticket size against 310+ roofing company benchmarks.",
};

export const introContent = {
  lead: "Roofing revenue is driven by crew capacity and project mix more than daily service calls. This calculator estimates annual revenue from your install crews, monthly job volume, and average project value — then benchmarks against industry norms.",
  bullets: [
    "Install Revenue = Crews × Installs/Crew/Month × Avg Ticket × 12",
    "Median roofing company generates ~$2.0M annually",
    "Top crews produce $400K – $900K revenue per year",
  ],
  audience:
    "Built for roofing owners planning capacity, storm-season scaling, and growth targets.",
};

export type RoofingRevenueInputs = {
  installCrews: number;
  installsPerCrewPerMonth: number;
  averageInstallTicket: number;
  monthlyRepairRevenue: number;
};

export const defaultInputs: RoofingRevenueInputs = {
  installCrews: 4,
  installsPerCrewPerMonth: 5,
  averageInstallTicket: 12000,
  monthlyRepairRevenue: 15000,
};

export const revenueBenchmarks = [
  { metric: "Median Annual Revenue", range: "$2.0M" },
  { metric: "Revenue Per Crew", range: "$400K – $900K" },
  { metric: "Installs Per Crew / Month", range: "4 – 8" },
  { metric: "Replacement Ticket", range: "$8K – $22K" },
] as const;

export function calculateRoofingRevenue(inputs: RoofingRevenueInputs) {
  const monthlyInstallRevenue =
    inputs.installCrews * inputs.installsPerCrewPerMonth * inputs.averageInstallTicket;
  const monthlyTotal = monthlyInstallRevenue + inputs.monthlyRepairRevenue;
  const estimatedAnnualRevenue = monthlyTotal * 12;
  const revenuePerCrew =
    inputs.installCrews > 0 ? estimatedAnnualRevenue / inputs.installCrews : 0;
  const annualInstalls = inputs.installCrews * inputs.installsPerCrewPerMonth * 12;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (estimatedAnnualRevenue < 1200000) tier = "Below";
  else if (estimatedAnnualRevenue >= 2800000) tier = "Strong";

  const vsMedian = estimatedAnnualRevenue - roofingIndustryAverages.revenue;

  return {
    estimatedAnnualRevenue,
    monthlyInstallRevenue,
    monthlyTotal,
    revenuePerCrew,
    annualInstalls,
    vsMedian,
    tier,
  };
}

export const faqs = [
  {
    question: "How much revenue can a roofing crew generate?",
    answer:
      "A productive install crew typically generates $400K–$900K annual revenue, with a median near $650K. At 5 installs/month and $12K average ticket, one crew produces ~$720K/year before repair and service add-ons.",
  },
  {
    question: "How many roof installs should a crew complete per month?",
    answer:
      "Most residential install crews complete 4–8 jobs per month depending on project size, weather, and crew size. Large commercial projects may count as fewer jobs with much higher ticket values.",
  },
  {
    question: "What is average roofing company revenue?",
    answer:
      "The median owner-operated roofing company generates about $2.0M annually. Storm-market operators with 4–6 active crews often exceed $3M during peak seasons.",
  },
  {
    question: "How does repair revenue affect total roofing revenue?",
    answer:
      "Repair and service work typically adds 15–30% on top of install revenue for mixed operators. Insurance restoration companies may see install-heavy revenue with fewer small repairs.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/roofing-revenue/");
export { roofingIndustryAverages, formatCurrency, formatNumber };
