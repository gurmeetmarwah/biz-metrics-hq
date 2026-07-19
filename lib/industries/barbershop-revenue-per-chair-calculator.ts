import {
  formatCurrency,
  barbershopDataLinks,
  relatedCalculators,
} from "@/lib/industries/barbershop-calculators-shared";

export const meta = {
  title: "Barbershop Revenue per Chair Calculator",
  shortTitle: "Revenue per Chair Calculator",
  subtitle: "Measure annual revenue productivity per chair against industry benchmarks.",
  description:
    "Free barbershop revenue per chair calculator. Benchmark chair productivity from annual service revenue and chair count.",
};

export const introContent = {
  lead: "Revenue per chair shows how efficiently your physical capacity generates income. This calculator benchmarks annual revenue per chair.",
  bullets: [
    "Revenue per Chair = Annual Service Revenue ÷ Number of Chairs",
    "Barber chairs typically produce $40K–$80K annually",
    "Add chairs only after existing capacity reaches 70–85% utilization",
  ],
  audience: "Built for barbershop owners evaluating chair count, expansion, and capacity planning.",
};

export type RevenuePerChairInputs = {
  annualServiceRevenue: number;
  numberOfChairs: number;
};

export const defaultInputs: RevenuePerChairInputs = {
  annualServiceRevenue: 280000,
  numberOfChairs: 4,
};

export const industryBenchmarks = [
  { metric: "Revenue per Chair", range: "$40K – $80K" },
  { metric: "Top-Performing Chair", range: "$90K+" },
  { metric: "Monthly per Chair", range: "$3.3K – $6.7K" },
  { metric: "Optimal Chair Count", range: "3 – 6 chairs" },
] as const;

export function calculateRevenuePerChair(inputs: RevenuePerChairInputs) {
  const perChair =
    inputs.numberOfChairs > 0 ? inputs.annualServiceRevenue / inputs.numberOfChairs : 0;
  const monthlyPerChair = perChair / 12;
  const weeklyPerChair = perChair / 50;

  let status: "below" | "healthy" | "strong" = "healthy";
  if (perChair < 40000) status = "below";
  else if (perChair >= 80000) status = "strong";

  return { perChair, monthlyPerChair, weeklyPerChair, status };
}

export const faqs = [
  {
    question: "How many chairs are optimal for a barbershop?",
    answer:
      "Most successful single-location barbershops operate 3–6 chairs. Revenue per chair typically runs $40K–$80K annually. Adding chairs before filling existing capacity dilutes utilization.",
  },
  {
    question: "What is a good revenue per chair?",
    answer:
      "A healthy barbershop generates $40K–$80K in annual revenue per chair. Chairs below $40K usually indicate low utilization, underpriced services, or scheduling inefficiencies.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/barbershop-revenue-per-chair/");
export { barbershopDataLinks, formatCurrency };
