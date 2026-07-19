import {
  formatCurrency,
  daySpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/day-spa-calculators-shared";

export const meta = {
  title: "Day Spa Revenue per Therapist Calculator & Productivity Benchmark",
  shortTitle: "Revenue per Therapist Calculator",
  subtitle: "Benchmark each therapist's annual service revenue against industry ranges.",
  description:
    "Free day spa revenue per therapist calculator. Benchmark therapist productivity from annual service revenue and headcount.",
};

export const introContent = {
  lead: "Revenue per therapist is the clearest measure of service productivity in a day spa. This calculator benchmarks each therapist's annual service revenue.",
  bullets: [
    "Revenue per Therapist = Annual Service Revenue ÷ Number of Therapists",
    "Established therapists produce $110K–$200K in annual revenue",
    "Low revenue per therapist signals idle rooms or pricing below market",
  ],
  audience: "Built for day spa owners benchmarking therapist productivity and staffing levels.",
};

export type RevenuePerTherapistInputs = {
  annualServiceRevenue: number;
  numberOfTherapists: number;
};

export const defaultInputs: RevenuePerTherapistInputs = {
  annualServiceRevenue: 750000,
  numberOfTherapists: 6,
};

export const industryBenchmarks = [
  { metric: "Revenue per Therapist", range: "$110K – $200K" },
  { metric: "Top-Performer Therapist", range: "$220K+" },
  { metric: "Monthly per Therapist", range: "$9K – $17K" },
  { metric: "Weekly per Therapist", range: "$2.2K – $4K" },
] as const;

export function calculateRevenuePerTherapist(inputs: RevenuePerTherapistInputs) {
  const perTherapist =
    inputs.numberOfTherapists > 0 ? inputs.annualServiceRevenue / inputs.numberOfTherapists : 0;
  const monthlyPerTherapist = perTherapist / 12;
  const weeklyPerTherapist = perTherapist / 50;

  let status: "below" | "healthy" | "strong" = "healthy";
  if (perTherapist < 110000) status = "below";
  else if (perTherapist >= 200000) status = "strong";

  return { perTherapist, monthlyPerTherapist, weeklyPerTherapist, status };
}

export const faqs = [
  {
    question: "How many therapists should a day spa employ?",
    answer:
      "An average day spa employs 4–10 licensed massage therapists and estheticians plus front-desk and management staff. Revenue per therapist typically runs $110K–$200K annually.",
  },
  {
    question: "What is a good revenue per therapist for a day spa?",
    answer:
      "A good day spa revenue per therapist is $110K–$200K in annual service revenue, with top performers exceeding $220K. Figures below $110K usually point to idle rooms, low booking density, or pricing below the local market.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/day-spa-revenue-per-therapist/");
export { daySpaDataLinks, formatCurrency };
