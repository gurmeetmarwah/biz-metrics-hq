import {
  formatCurrency,
  medicalSpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/medical-spa-calculators-shared";

export const meta = {
  title: "Medical Spa Revenue per Treatment Room Calculator",
  shortTitle: "Revenue per Treatment Room Calculator",
  subtitle: "Measure annual revenue productivity per treatment room against industry benchmarks.",
  description:
    "Free medical spa revenue per treatment room calculator. Benchmark room productivity from annual treatment revenue and room count.",
};

export const introContent = {
  lead: "Revenue per treatment room shows how efficiently your physical capacity generates income. This calculator benchmarks annual revenue per room.",
  bullets: [
    "Revenue per Room = Annual Treatment Revenue ÷ Number of Treatment Rooms",
    "Treatment rooms typically produce $200K–$500K annually",
    "Add rooms only after existing capacity reaches 55–75% utilization",
  ],
  audience: "Built for medical spa owners evaluating room count, expansion, and capacity planning.",
};

export type RevenuePerRoomInputs = {
  annualTreatmentRevenue: number;
  numberOfTreatmentRooms: number;
};

export const defaultInputs: RevenuePerRoomInputs = {
  annualTreatmentRevenue: 1200000,
  numberOfTreatmentRooms: 4,
};

export const industryBenchmarks = [
  { metric: "Revenue per Room", range: "$200K – $500K" },
  { metric: "Top-Performing Room", range: "$550K+" },
  { metric: "Monthly per Room", range: "$17K – $42K" },
  { metric: "Optimal Room Count", range: "3 – 6 rooms" },
] as const;

export function calculateRevenuePerRoom(inputs: RevenuePerRoomInputs) {
  const perRoom =
    inputs.numberOfTreatmentRooms > 0
      ? inputs.annualTreatmentRevenue / inputs.numberOfTreatmentRooms
      : 0;
  const monthlyPerRoom = perRoom / 12;
  const weeklyPerRoom = perRoom / 50;

  let status: "below" | "healthy" | "strong" = "healthy";
  if (perRoom < 200000) status = "below";
  else if (perRoom >= 500000) status = "strong";

  return { perRoom, monthlyPerRoom, weeklyPerRoom, status };
}

export const faqs = [
  {
    question: "How many treatment rooms are optimal for a medical spa?",
    answer:
      "Most successful single-location medical spas operate 3–6 treatment rooms. Revenue per room typically runs $200K–$500K annually. Adding rooms before filling existing capacity dilutes utilization.",
  },
  {
    question: "What is a good revenue per treatment room?",
    answer:
      "A healthy medical spa generates $200K–$500K in annual revenue per treatment room. Rooms below $200K usually indicate low utilization, underpriced services, or scheduling inefficiencies.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/medical-spa-revenue-per-treatment-room/");
export { medicalSpaDataLinks, formatCurrency };
