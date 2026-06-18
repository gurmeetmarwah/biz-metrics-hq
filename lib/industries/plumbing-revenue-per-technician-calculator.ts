import {
  formatCurrency,
  formatNumber,
  plumbingIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/plumbing-calculators-shared";

export const meta = {
  title: "Plumbing Revenue Per Technician Calculator & Productivity Tool",
  shortTitle: "Plumbing Revenue Per Technician Calculator",
  subtitle:
    "Calculate revenue per plumber, daily production, and revenue per job for your plumbing company.",
  description:
    "Free plumbing revenue per technician calculator. Measure field productivity with revenue per plumber, jobs per day, and per-job revenue against 380+ plumbing business benchmarks.",
};

export const introContent = {
  lead: "Revenue per plumber is the core operating KPI for plumbing staffing, dispatch, and growth planning. This calculator converts annual revenue into technician-level production metrics and benchmarks you against industry norms.",
  bullets: [
    "Revenue Per Plumber = Annual Revenue ÷ Field Plumbers",
    "Daily Production = Revenue Per Plumber ÷ Working Days",
    "Productive plumbers often complete 4 – 8 billable jobs per day",
  ],
  audience:
    "Built for plumbing owners, operations managers, and buyers evaluating plumber productivity and hiring plans.",
};

export type RevenuePerTechnicianInputs = {
  annualRevenue: number;
  technicians: number;
  workingDays: number;
  jobsPerDay: number;
};

export const defaultInputs: RevenuePerTechnicianInputs = {
  annualRevenue: 1600000,
  technicians: 6,
  workingDays: 250,
  jobsPerDay: 6,
};

export const productivityBenchmarks = [
  { metric: "Revenue Per Plumber", range: "$150K – $280K/yr" },
  { metric: "Jobs Per Day", range: "4 – 8" },
  { metric: "Average Service Ticket", range: "$275 – $525" },
  { metric: "Water Heater Install", range: "$1.8K – $3.5K" },
] as const;

export function calculateRevenuePerTechnician(inputs: RevenuePerTechnicianInputs) {
  const revenuePerTechnician =
    inputs.technicians > 0 ? inputs.annualRevenue / inputs.technicians : 0;
  const dailyProduction =
    inputs.workingDays > 0 ? revenuePerTechnician / inputs.workingDays : 0;
  const revenuePerJob = inputs.jobsPerDay > 0 ? dailyProduction / inputs.jobsPerDay : 0;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (revenuePerTechnician < 150000) tier = "Below";
  else if (revenuePerTechnician >= 270000) tier = "Strong";

  const vsMedian = revenuePerTechnician - plumbingIndustryAverages.revenuePerTechnician;

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
    question: "What is a good revenue per plumber for a plumbing company?",
    answer:
      "Most mixed service/install plumbing companies target $150K–$280K annual revenue per full-time plumber, with a median near $215K. Top performers combine strong emergency dispatch, maintenance contracts, and route density.",
  },
  {
    question: "How many jobs should a plumber complete per day?",
    answer:
      "A typical productivity range is 4–8 completed billable jobs per plumber per day for service work. Drain cleaning and emergency calls can push higher; repipe and water heater installs lower daily job counts but raise ticket size.",
  },
  {
    question: "How is revenue per job calculated for plumbing?",
    answer:
      "Revenue per job is daily plumber production divided by jobs completed per day. For example, $860 daily production across 6 jobs equals about $143 per job — typical for drain and repair mix with some larger tickets.",
  },
  {
    question: "What drives higher revenue per plumber?",
    answer:
      "The highest-impact levers are emergency call response speed, commercial maintenance contracts, average ticket optimization (water heater upsells, membership plans), route density, and minimizing non-billable drive time.",
  },
] as const;

export const relatedTools = relatedCalculators(
  "/calculators/plumbing-revenue-per-technician/"
);
export { plumbingIndustryAverages, formatCurrency, formatNumber };
