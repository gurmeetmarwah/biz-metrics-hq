import {
  formatCurrency,
  hairSalonDataLinks,
  relatedCalculators,
} from "@/lib/industries/hair-salon-calculators-shared";

export const meta = {
  title: "Hair Salon Revenue per Stylist Calculator & Productivity Benchmark",
  shortTitle: "Hair Salon Revenue per Stylist Calculator",
  subtitle: "Benchmark each stylist's annual service revenue against industry ranges.",
  description:
    "Free hair salon revenue per stylist calculator. Benchmark stylist productivity from annual service revenue and headcount against industry ranges.",
};

export const introContent = {
  lead: "Revenue per stylist is the clearest measure of productivity in a hair salon. This calculator benchmarks each stylist's annual service revenue.",
  bullets: [
    "Revenue per Stylist = Annual Service Revenue ÷ Number of Stylists",
    "Established stylists produce $60K–$120K in annual service revenue",
    "Low revenue per stylist signals idle chairs or pricing below market",
  ],
  audience: "Built for salon owners benchmarking stylist productivity and staffing levels.",
};

export type RevenuePerStylistInputs = {
  annualServiceRevenue: number;
  numberOfStylists: number;
};

export const defaultInputs: RevenuePerStylistInputs = {
  annualServiceRevenue: 425000,
  numberOfStylists: 5,
};

export const industryBenchmarks = [
  { metric: "Revenue per Stylist", range: "$60K – $120K" },
  { metric: "Top-Performer Stylist", range: "$150K+" },
  { metric: "Monthly per Stylist", range: "$5K – $10K" },
  { metric: "Weekly per Stylist", range: "$1.2K – $2.3K" },
] as const;

export function calculateRevenuePerStylist(inputs: RevenuePerStylistInputs) {
  const perStylist =
    inputs.numberOfStylists > 0 ? inputs.annualServiceRevenue / inputs.numberOfStylists : 0;
  const monthlyPerStylist = perStylist / 12;
  const weeklyPerStylist = perStylist / 50;

  let status: "below" | "healthy" | "strong" = "healthy";
  if (perStylist < 60000) status = "below";
  else if (perStylist >= 120000) status = "strong";

  return { perStylist, monthlyPerStylist, weeklyPerStylist, status };
}

export const faqs = [
  {
    question: "How many stylists does an average hair salon employ?",
    answer:
      "An average hair salon employs 4–8 stylists plus front-desk and assistant staff. Revenue per stylist typically runs $60K–$120K in annual service revenue, so stylist productivity is one of the strongest drivers of hair salon revenue.",
  },
  {
    question: "What is a good revenue per stylist for a hair salon?",
    answer:
      "A good hair salon revenue per stylist is $60K–$120K in annual service revenue, with top performers exceeding $150K. Figures below $60K usually point to idle chairs, low rebooking, or pricing below the local market.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/hair-salon-revenue-per-stylist/");
export { hairSalonDataLinks, formatCurrency };
