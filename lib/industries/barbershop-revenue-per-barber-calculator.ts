import {
  formatCurrency,
  barbershopDataLinks,
  relatedCalculators,
} from "@/lib/industries/barbershop-calculators-shared";

export const meta = {
  title: "Barbershop Revenue per Barber Calculator & Productivity Benchmark",
  shortTitle: "Revenue per Barber Calculator",
  subtitle: "Benchmark each barber's annual service revenue against industry ranges.",
  description:
    "Free barbershop revenue per barber calculator. Benchmark barber productivity from annual service revenue and headcount.",
};

export const introContent = {
  lead: "Revenue per barber is the clearest measure of service productivity in a barbershop. This calculator benchmarks each barber's annual service revenue.",
  bullets: [
    "Revenue per Barber = Annual Service Revenue ÷ Number of Barbers",
    "Established barbers produce $55K–$95K in annual revenue",
    "Low revenue per barber signals idle chairs or pricing below market",
  ],
  audience: "Built for barbershop owners benchmarking barber productivity and staffing levels.",
};

export type RevenuePerBarberInputs = {
  annualServiceRevenue: number;
  numberOfBarbers: number;
};

export const defaultInputs: RevenuePerBarberInputs = {
  annualServiceRevenue: 300000,
  numberOfBarbers: 4,
};

export const industryBenchmarks = [
  { metric: "Revenue per Barber", range: "$55K – $95K" },
  { metric: "Top-Performer Barber", range: "$100K+" },
  { metric: "Monthly per Barber", range: "$4.5K – $8K" },
  { metric: "Weekly per Barber", range: "$1.1K – $1.9K" },
] as const;

export function calculateRevenuePerBarber(inputs: RevenuePerBarberInputs) {
  const perBarber =
    inputs.numberOfBarbers > 0 ? inputs.annualServiceRevenue / inputs.numberOfBarbers : 0;
  const monthlyPerBarber = perBarber / 12;
  const weeklyPerBarber = perBarber / 50;

  let status: "below" | "healthy" | "strong" = "healthy";
  if (perBarber < 55000) status = "below";
  else if (perBarber >= 95000) status = "strong";

  return { perBarber, monthlyPerBarber, weeklyPerBarber, status };
}

export const faqs = [
  {
    question: "How many barbers should a shop employ?",
    answer:
      "An average barbershop employs 2–5 barbers plus front-desk support. Revenue per barber typically runs $55K–$95K annually. Most successful single-location shops operate 3–6 chairs before considering expansion.",
  },
  {
    question: "What is a good revenue per barber for a barbershop?",
    answer:
      "A good barbershop revenue per barber is $55K–$95K in annual service revenue, with top performers exceeding $100K. Figures below $55K usually point to idle chairs, low walk-in volume, or pricing below the local market.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/barbershop-revenue-per-barber/");
export { barbershopDataLinks, formatCurrency };
