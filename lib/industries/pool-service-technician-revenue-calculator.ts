import {
  formatCurrency,
  formatNumber,
  poolServiceIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/pool-service-calculators-shared";

export const meta = {
  title: "Pool Service Technician Revenue Calculator & Productivity Tool",
  shortTitle: "Pool Service Technician Revenue Calculator",
  subtitle:
    "Calculate revenue per technician, pools serviced, and daily production for your pool service company.",
  description:
    "Free pool service technician revenue calculator. Measure field productivity with revenue per tech, pools per week, and per-stop revenue against industry benchmarks.",
};

export const introContent = {
  lead: "Revenue per technician is the core operating KPI for pool service staffing, route planning, and growth. This calculator converts annual revenue into technician-level production metrics and benchmarks you against industry norms.",
  bullets: [
    "Revenue Per Technician = Annual Revenue ÷ Field Technicians",
    "Pools Per Week = Stops Per Day × Working Days ÷ Technicians",
    "Productive pool techs service 55 – 75 pools per week on dense routes",
  ],
  audience:
    "Built for pool service owners, operations managers, and buyers evaluating technician productivity and hiring plans.",
};

export type TechnicianRevenueInputs = {
  annualRevenue: number;
  technicians: number;
  workingDays: number;
  stopsPerDay: number;
};

export const defaultInputs: TechnicianRevenueInputs = {
  annualRevenue: 950000,
  technicians: 5,
  workingDays: 250,
  stopsPerDay: 15,
};

export const productivityBenchmarks = [
  { metric: "Revenue Per Technician", range: "$160K – $220K/yr" },
  { metric: "Pools Per Week", range: "55 – 75" },
  { metric: "Stops Per Day", range: "12 – 18" },
  { metric: "Revenue Per Stop", range: "$65 – $120" },
] as const;

export function calculateTechnicianRevenue(inputs: TechnicianRevenueInputs) {
  const revenuePerTechnician =
    inputs.technicians > 0 ? inputs.annualRevenue / inputs.technicians : 0;
  const dailyProduction =
    inputs.workingDays > 0 ? revenuePerTechnician / inputs.workingDays : 0;
  const revenuePerStop = inputs.stopsPerDay > 0 ? dailyProduction / inputs.stopsPerDay : 0;
  const poolsPerWeek = inputs.stopsPerDay * 5;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (revenuePerTechnician < 160000) tier = "Below";
  else if (revenuePerTechnician >= 210000) tier = "Strong";

  const vsMedian = revenuePerTechnician - poolServiceIndustryAverages.revenuePerTechnician;

  return { revenuePerTechnician, dailyProduction, revenuePerStop, poolsPerWeek, vsMedian, tier };
}

export const faqs = [
  {
    question: "What is a good revenue per technician for pool service?",
    answer:
      "Most productive pool service technicians generate $160K–$220K annual revenue, with a median near $190K. Route-dense operators with commercial accounts can exceed $220K per technician.",
  },
  {
    question: "How many pools can one technician service per week?",
    answer:
      "A full-time pool technician typically services 55–75 pools per week on a well-designed route — about 12–18 stops per day. Dense suburban routes support the high end.",
  },
  {
    question: "How is revenue per stop calculated for pool service?",
    answer:
      "Revenue per stop is daily technician production divided by stops completed per day. For example, $760 daily production across 15 stops equals about $51 per stop before upsells.",
  },
  {
    question: "What drives higher revenue per technician?",
    answer:
      "The highest-impact levers are route density, commercial account mix, repair upsells, minimizing drive time, and standardized service packages that reduce time per stop.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/pool-service-technician-revenue/");
export { poolServiceIndustryAverages, formatCurrency, formatNumber };
