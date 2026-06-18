import {
  formatCurrency,
  formatNumber,
  electricalIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/electrical-calculators-shared";

export const meta = {
  title: "Electrical Revenue Per Electrician Calculator & Productivity Tool",
  shortTitle: "Electrical Revenue Per Electrician Calculator",
  subtitle:
    "Calculate revenue per electrician, daily production, and revenue per job for your electrical contracting business.",
  description:
    "Free electrical revenue per electrician calculator. Measure field productivity with revenue per tech, jobs per day, and per-job revenue against 340+ electrical contracting benchmarks.",
};

export const introContent = {
  lead: "Revenue per electrician is the core operating KPI for electrical staffing, dispatch, and growth planning. This calculator converts annual revenue into technician-level production metrics and benchmarks you against industry norms.",
  bullets: [
    "Revenue Per Electrician = Annual Revenue ÷ Field Electricians",
    "Daily Production = Revenue Per Electrician ÷ Working Days",
    "Productive electricians often complete 3 – 6 billable jobs per day",
  ],
  audience:
    "Built for electrical owners, operations managers, and buyers evaluating electrician productivity and hiring plans.",
};

export type RevenuePerElectricianInputs = {
  annualRevenue: number;
  electricians: number;
  workingDays: number;
  jobsPerDay: number;
};

export const defaultInputs: RevenuePerElectricianInputs = {
  annualRevenue: 2000000,
  electricians: 8,
  workingDays: 250,
  jobsPerDay: 4,
};

export const productivityBenchmarks = [
  { metric: "Revenue Per Electrician", range: "$165K – $295K/yr" },
  { metric: "Jobs Per Day", range: "3 – 6" },
  { metric: "Average Service Ticket", range: "$300 – $600" },
  { metric: "Project Ticket", range: "$3K – $25K" },
] as const;

export function calculateRevenuePerElectrician(inputs: RevenuePerElectricianInputs) {
  const revenuePerElectrician =
    inputs.electricians > 0 ? inputs.annualRevenue / inputs.electricians : 0;
  const dailyProduction =
    inputs.workingDays > 0 ? revenuePerElectrician / inputs.workingDays : 0;
  const revenuePerJob = inputs.jobsPerDay > 0 ? dailyProduction / inputs.jobsPerDay : 0;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (revenuePerElectrician < 165000) tier = "Below";
  else if (revenuePerElectrician >= 280000) tier = "Strong";

  const vsMedian = revenuePerElectrician - electricalIndustryAverages.revenuePerTechnician;

  return {
    revenuePerElectrician,
    dailyProduction,
    revenuePerJob,
    vsMedian,
    tier,
  };
}

export const faqs = [
  {
    question: "What is a good revenue per electrician for an electrical contractor?",
    answer:
      "Most mixed service/project electrical companies target $165K–$295K annual revenue per full-time electrician, with a median near $230K. Top performers combine strong commercial mix, efficient dispatch, and specialized install work (EV, solar, panels).",
  },
  {
    question: "How many jobs should an electrician complete per day?",
    answer:
      "A typical productivity range is 3–6 completed billable jobs per electrician per day for service work. Large commercial or new construction projects may count as fewer jobs with much higher ticket sizes.",
  },
  {
    question: "How is revenue per job calculated for electrical contractors?",
    answer:
      "Revenue per job is daily electrician production divided by jobs completed per day. For example, $920 daily production across 4 jobs equals about $230 per job — typical for mixed service with some larger tickets.",
  },
  {
    question: "What drives higher revenue per electrician?",
    answer:
      "The highest-impact levers are commercial project mix, panel upgrade and EV charger specialization, maintenance contract penetration, route density, and minimizing non-billable drive time and estimating hours.",
  },
] as const;

export const relatedTools = relatedCalculators(
  "/calculators/electrical-revenue-per-electrician/"
);
export { electricalIndustryAverages, formatCurrency, formatNumber };
