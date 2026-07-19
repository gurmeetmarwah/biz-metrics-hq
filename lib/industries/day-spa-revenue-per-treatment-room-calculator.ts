import {
  formatCurrency,
  daySpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/day-spa-calculators-shared";

export const meta = {
  title: "Day Spa Revenue per Treatment Room Calculator",
  shortTitle: "Revenue per Treatment Room Calculator",
  subtitle: "Measure annual revenue productivity per treatment room against industry benchmarks.",
  description:
    "Free day spa revenue per treatment room calculator. Benchmark room productivity from annual service revenue and room count.",
};

export const introContent = {
  lead: "Revenue per treatment room shows how efficiently your physical capacity generates income. This calculator benchmarks annual revenue per room.",
  bullets: [
    "Revenue per Room = Annual Service Revenue ÷ Number of Treatment Rooms",
    "Treatment rooms typically produce $90K–$180K annually",
    "Add rooms only after existing capacity reaches 60–78% utilization",
  ],
  audience: "Built for day spa owners evaluating room count, expansion, and capacity planning.",
};

export type RevenuePerRoomInputs = {
  annualServiceRevenue: number;
  numberOfTreatmentRooms: number;
};

export const defaultInputs: RevenuePerRoomInputs = {
  annualServiceRevenue: 750000,
  numberOfTreatmentRooms: 6,
};

export const industryBenchmarks = [
  { metric: "Revenue per Room", range: "$90K – $180K" },
  { metric: "Top-Performing Room", range: "$200K+" },
  { metric: "Monthly per Room", range: "$7.5K – $15K" },
  { metric: "Optimal Room Count", range: "4 – 8 rooms" },
] as const;

export function calculateRevenuePerRoom(inputs: RevenuePerRoomInputs) {
  const perRoom =
    inputs.numberOfTreatmentRooms > 0
      ? inputs.annualServiceRevenue / inputs.numberOfTreatmentRooms
      : 0;
  const monthlyPerRoom = perRoom / 12;
  const weeklyPerRoom = perRoom / 50;

  let status: "below" | "healthy" | "strong" = "healthy";
  if (perRoom < 90000) status = "below";
  else if (perRoom >= 180000) status = "strong";

  return { perRoom, monthlyPerRoom, weeklyPerRoom, status };
}

export const faqs = [
  {
    question: "How many treatment rooms are optimal for a day spa?",
    answer:
      "Most successful single-location day spas operate 4–8 treatment rooms. Revenue per room typically runs $90K–$180K annually. Adding rooms before filling existing capacity dilutes utilization.",
  },
  {
    question: "What is a good revenue per treatment room?",
    answer:
      "A healthy day spa generates $90K–$180K in annual revenue per treatment room. Rooms below $90K usually indicate low utilization, underpriced services, or scheduling inefficiencies.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/day-spa-revenue-per-treatment-room/");
export { daySpaDataLinks, formatCurrency };
