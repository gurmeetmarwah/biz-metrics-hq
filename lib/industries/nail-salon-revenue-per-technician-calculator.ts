import {
  formatCurrency,
  nailSalonDataLinks,
  relatedCalculators,
} from "@/lib/industries/nail-salon-calculators-shared";

export const meta = {
  title: "Nail Salon Revenue per Technician Calculator & Productivity Benchmark",
  shortTitle: "Revenue per Nail Technician Calculator",
  subtitle: "Benchmark each technician's annual service revenue against industry ranges.",
  description:
    "Free nail salon revenue per technician calculator. Benchmark technician productivity from annual service revenue and headcount against industry ranges.",
};

export const introContent = {
  lead: "Revenue per technician is the clearest measure of productivity in a nail salon. This calculator benchmarks each technician's annual service revenue.",
  bullets: [
    "Revenue per Technician = Annual Service Revenue ÷ Number of Technicians",
    "Established technicians produce $50K–$90K in annual service revenue",
    "Low revenue per technician signals idle stations or pricing below market",
  ],
  audience: "Built for nail salon owners benchmarking technician productivity and staffing levels.",
};

export type RevenuePerTechnicianInputs = {
  annualServiceRevenue: number;
  numberOfTechnicians: number;
};

export const defaultInputs: RevenuePerTechnicianInputs = {
  annualServiceRevenue: 300000,
  numberOfTechnicians: 4,
};

export const industryBenchmarks = [
  { metric: "Revenue per Technician", range: "$50K – $90K" },
  { metric: "Top-Performer Technician", range: "$100K+" },
  { metric: "Monthly per Technician", range: "$4K – $7.5K" },
  { metric: "Weekly per Technician", range: "$1K – $1.8K" },
] as const;

export function calculateRevenuePerTechnician(inputs: RevenuePerTechnicianInputs) {
  const perTechnician =
    inputs.numberOfTechnicians > 0 ? inputs.annualServiceRevenue / inputs.numberOfTechnicians : 0;
  const monthlyPerTechnician = perTechnician / 12;
  const weeklyPerTechnician = perTechnician / 50;

  let status: "below" | "healthy" | "strong" = "healthy";
  if (perTechnician < 50000) status = "below";
  else if (perTechnician >= 90000) status = "strong";

  return { perTechnician, monthlyPerTechnician, weeklyPerTechnician, status };
}

export const faqs = [
  {
    question: "How many technicians does an average nail salon employ?",
    answer:
      "An average nail salon employs 3–6 technicians plus front-desk staff. Revenue per technician typically runs $50K–$90K in annual service revenue, so technician productivity is one of the strongest drivers of nail salon revenue.",
  },
  {
    question: "What is a good revenue per technician for a nail salon?",
    answer:
      "A good nail salon revenue per technician is $50K–$90K in annual service revenue, with top performers exceeding $100K. Figures below $50K usually point to idle stations, low rebooking, or pricing below the local market.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/nail-salon-revenue-per-technician/");
export { nailSalonDataLinks, formatCurrency };
