import {
  formatCurrency,
  formatNumber,
  hvacIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/hvac-calculators-shared";

export const meta = {
  title: "HVAC Revenue Per Technician Calculator & Productivity Tool",
  shortTitle: "HVAC Revenue Per Technician Calculator",
  subtitle:
    "Calculate revenue per technician, daily production, and revenue per job for your HVAC company.",
  description:
    "Free HVAC revenue per technician calculator. Measure field productivity with revenue per tech, jobs per day, and per-job revenue against 420+ HVAC business benchmarks.",
};

export const introContent = {
  lead: "Revenue per technician is the core operating KPI for HVAC staffing, dispatch, and growth planning. This calculator converts annual revenue into technician-level production metrics and benchmarks you against industry norms.",
  bullets: [
    "Revenue Per Technician = Annual Revenue ÷ Field Technicians",
    "Daily Production = Revenue Per Technician ÷ Working Days",
    "Productive HVAC techs often complete 4 – 7 billable jobs per day",
  ],
  audience:
    "Built for HVAC owners, operations managers, and buyers evaluating technician productivity and hiring plans.",
};

export type RevenuePerTechnicianInputs = {
  annualRevenue: number;
  technicians: number;
  workingDays: number;
  jobsPerDay: number;
};

export const defaultInputs: RevenuePerTechnicianInputs = {
  annualRevenue: 2400000,
  technicians: 8,
  workingDays: 250,
  jobsPerDay: 5,
};

export const productivityBenchmarks = [
  { metric: "Revenue Per Technician", range: "$180K – $320K/yr" },
  { metric: "Jobs Per Day", range: "4 – 7" },
  { metric: "Average Service Ticket", range: "$350 – $650" },
  { metric: "Install Ticket", range: "$6K – $14K" },
] as const;

export function calculateRevenuePerTechnician(inputs: RevenuePerTechnicianInputs) {
  const revenuePerTechnician =
    inputs.technicians > 0 ? inputs.annualRevenue / inputs.technicians : 0;
  const dailyProduction =
    inputs.workingDays > 0 ? revenuePerTechnician / inputs.workingDays : 0;
  const revenuePerJob = inputs.jobsPerDay > 0 ? dailyProduction / inputs.jobsPerDay : 0;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (revenuePerTechnician < 180000) tier = "Below";
  else if (revenuePerTechnician >= 300000) tier = "Strong";

  const vsMedian = revenuePerTechnician - hvacIndustryAverages.revenuePerTechnician;

  return {
    revenuePerTechnician,
    dailyProduction,
    revenuePerJob,
    vsMedian,
    tier,
  };
}

export const faqs = [
  {
    question: "What is a good revenue per technician for an HVAC company?",
    answer:
      "Most mixed service/install HVAC companies target $180K–$320K annual revenue per full-time field technician, with a median near $240K. Top performers combine strong maintenance contract penetration, efficient dispatch, and install crews.",
  },
  {
    question: "How many jobs should an HVAC technician complete per day?",
    answer:
      "A typical productivity range is 4–7 completed billable jobs per technician per day for service work. Install crews may complete 1–2 jobs daily depending on system size. Dispatch efficiency and route density heavily influence throughput.",
  },
  {
    question: "How is revenue per job calculated for HVAC?",
    answer:
      "Revenue per job is daily technician production divided by jobs completed per day. For example, $960 daily production across 5 jobs equals about $192 per job — typical for maintenance and repair mix.",
  },
  {
    question: "What drives higher revenue per technician?",
    answer:
      "The highest-impact levers are maintenance contract penetration (35%+ of revenue), average ticket optimization (upsells, membership plans), route density, and minimizing non-billable drive time through territory planning.",
  },
] as const;

export const relatedTools = relatedCalculators(
  "/calculators/hvac-revenue-per-technician/"
);
export { hvacIndustryAverages, formatCurrency, formatNumber };
