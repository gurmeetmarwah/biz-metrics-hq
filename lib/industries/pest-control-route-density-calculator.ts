import {
  formatCurrency,
  formatNumber,
  formatPercent,
  pestControlIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/pest-control-calculators-shared";

export const meta = {
  title: "Pest Control Route Density Calculator & Technician Productivity Tool",
  shortTitle: "Pest Control Route Density Calculator",
  subtitle:
    "Measure revenue per technician, stops per route, and route efficiency for your pest control company.",
  description:
    "Free pest control route density calculator. Track revenue per technician, daily stops, and utilization against 220+ pest control business benchmarks.",
};

export const introContent = {
  lead: "Route density defines pest control scalability. Revenue per technician and stops per route are the core operating KPIs for subscription-based operators. This calculator benchmarks your field production against industry norms.",
  bullets: [
    "Revenue Per Technician = Annual Revenue ÷ Field Technicians",
    "Healthy routes target $120K – $200K annual revenue per technician",
    "Top operators achieve 14 – 18 stops per technician per day",
  ],
  audience:
    "Built for pest control owners, operations managers, and buyers evaluating route capacity and growth plans.",
};

export type RouteDensityInputs = {
  annualRevenue: number;
  technicians: number;
  stopsPerTechPerDay: number;
  workingDays: number;
  routeUtilizationPct: number;
};

export const defaultInputs: RouteDensityInputs = {
  annualRevenue: 900000,
  technicians: 5,
  stopsPerTechPerDay: 14,
  workingDays: 240,
  routeUtilizationPct: 82,
};

export const routeBenchmarks = [
  { metric: "Revenue Per Technician", range: "$120K – $200K/yr" },
  { metric: "Stops Per Technician / Day", range: "10 – 18" },
  { metric: "Route Utilization", range: "75 – 90%" },
  { metric: "Revenue Per Stop", range: "$85 – $175" },
] as const;

export type RouteDensityTier = "Below" | "Typical" | "Strong";

export function getRouteDensityTier(revenuePerTech: number): RouteDensityTier {
  if (revenuePerTech < 120000) return "Below";
  if (revenuePerTech >= 180000) return "Strong";
  return "Typical";
}

export function calculateRouteDensity(inputs: RouteDensityInputs) {
  const revenuePerTech = inputs.technicians > 0 ? inputs.annualRevenue / inputs.technicians : 0;
  const totalAnnualStops = inputs.technicians * inputs.stopsPerTechPerDay * inputs.workingDays;
  const revenuePerStop = totalAnnualStops > 0 ? inputs.annualRevenue / totalAnnualStops : 0;
  const stopsPerTechPerYear = inputs.stopsPerTechPerDay * inputs.workingDays;
  const vsMedian = revenuePerTech - pestControlIndustryAverages.revenuePerTechnician;

  const targetUtilization = 85;
  const utilizationGap = targetUtilization - inputs.routeUtilizationPct;
  const potentialRevenueGain =
    utilizationGap > 0 ? inputs.annualRevenue * (utilizationGap / 100) * 0.35 : 0;

  return {
    revenuePerTech,
    revenuePerStop,
    stopsPerTechPerYear,
    totalAnnualStops,
    vsMedian,
    tier: getRouteDensityTier(revenuePerTech),
    potentialRevenueGain,
    utilizationGap,
  };
}

export const faqs = [
  {
    question: "What is a good revenue per technician for pest control?",
    answer:
      "Most productive pest control technicians generate $120K–$200K annual revenue, with a median near $160K. Route-dense operators with strong commercial accounts can exceed $200K per technician.",
  },
  {
    question: "How many stops should a pest control technician make per day?",
    answer:
      "Efficient routes typically include 10–18 stops per technician per day depending on geography, service type, and treatment scope. Higher route density improves margins significantly.",
  },
  {
    question: "How is route utilization measured in pest control?",
    answer:
      "Route utilization reflects the percentage of available working hours technicians spend on billable stops. Scheduling gaps, callbacks, and drive time reduce utilization. Healthy operators target 75–90%.",
  },
  {
    question: "What drives higher route density?",
    answer:
      "Geographic clustering, subscription contract density, standardized treatment packages, commercial account routing, and minimizing non-billable drive time between stops.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/pest-control-route-density/");
export { pestControlIndustryAverages, formatCurrency, formatNumber, formatPercent };
