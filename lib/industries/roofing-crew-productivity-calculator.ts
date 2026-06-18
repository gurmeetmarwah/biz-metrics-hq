import {
  formatCurrency,
  formatNumber,
  formatPercent,
  roofingIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/roofing-calculators-shared";

export const meta = {
  title: "Roofing Crew Productivity Calculator & Revenue Per Crew Tool",
  shortTitle: "Roofing Crew Productivity Calculator",
  subtitle:
    "Measure revenue per crew, install throughput, and crew utilization for your roofing company.",
  description:
    "Free roofing crew productivity calculator. Track revenue per crew, monthly installs, and utilization against 310+ roofing business benchmarks.",
};

export const introContent = {
  lead: "Crew productivity defines roofing scalability. Unlike service trades measured in jobs per day, roofing crews are measured in installs per month and revenue per crew. This calculator benchmarks your field production against industry norms.",
  bullets: [
    "Revenue Per Crew = Annual Revenue ÷ Install Crews",
    "Healthy crews target $400K – $900K annual revenue",
    "Weather and seasonality heavily affect crew utilization",
  ],
  audience:
    "Built for roofing owners, operations managers, and buyers evaluating crew capacity and growth plans.",
};

export type CrewProductivityInputs = {
  annualRevenue: number;
  installCrews: number;
  installsPerCrewPerMonth: number;
  workingMonths: number;
  crewUtilizationPct: number;
};

export const defaultInputs: CrewProductivityInputs = {
  annualRevenue: 2000000,
  installCrews: 4,
  installsPerCrewPerMonth: 5,
  workingMonths: 10,
  crewUtilizationPct: 72,
};

export const productivityBenchmarks = [
  { metric: "Revenue Per Crew", range: "$400K – $900K/yr" },
  { metric: "Installs Per Crew / Month", range: "4 – 8" },
  { metric: "Crew Utilization", range: "60 – 85%" },
  { metric: "Revenue Per Install", range: "$8K – $22K" },
] as const;

export type ProductivityTier = "Below" | "Typical" | "Strong";

export function getProductivityTier(revenuePerCrew: number): ProductivityTier {
  if (revenuePerCrew < 400000) return "Below";
  if (revenuePerCrew >= 750000) return "Strong";
  return "Typical";
}

export function calculateCrewProductivity(inputs: CrewProductivityInputs) {
  const revenuePerCrew =
    inputs.installCrews > 0 ? inputs.annualRevenue / inputs.installCrews : 0;
  const totalAnnualInstalls = inputs.installCrews * inputs.installsPerCrewPerMonth * inputs.workingMonths;
  const revenuePerInstall =
    totalAnnualInstalls > 0 ? inputs.annualRevenue / totalAnnualInstalls : 0;
  const installsPerCrewPerYear = inputs.installsPerCrewPerMonth * inputs.workingMonths;
  const vsMedian = revenuePerCrew - roofingIndustryAverages.revenuePerCrew;

  const targetUtilization = 75;
  const utilizationGap = targetUtilization - inputs.crewUtilizationPct;
  const potentialRevenueGain =
    utilizationGap > 0
      ? inputs.annualRevenue * (utilizationGap / 100) * 0.5
      : 0;

  return {
    revenuePerCrew,
    revenuePerInstall,
    installsPerCrewPerYear,
    totalAnnualInstalls,
    vsMedian,
    tier: getProductivityTier(revenuePerCrew),
    potentialRevenueGain,
    utilizationGap,
  };
}

export const faqs = [
  {
    question: "What is a good revenue per crew for a roofing company?",
    answer:
      "Most productive roofing install crews generate $400K–$900K annual revenue, with a median near $650K. Storm-market crews during active seasons can exceed $900K; repair-focused operators may run lower with smaller tickets.",
  },
  {
    question: "How is crew utilization measured in roofing?",
    answer:
      "Crew utilization reflects the percentage of available working days crews are on productive jobs. Weather delays, material shortages, and scheduling gaps reduce utilization. Healthy operators target 60–85% depending on climate.",
  },
  {
    question: "How many installs should a roofing crew complete per month?",
    answer:
      "Residential install crews typically complete 4–8 jobs per month. At 5 installs and $12K average ticket, one crew generates ~$60K monthly install revenue before repairs and supplements.",
  },
  {
    question: "What drives higher crew productivity?",
    answer:
      "Efficient scheduling, weather-aware planning, dedicated sales-to-production handoff, standardized install processes, and maintaining backup crews for overflow during storm seasons.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/roofing-crew-productivity/");
export { roofingIndustryAverages, formatCurrency, formatNumber, formatPercent };
