import {
  formatCurrency,
  formatNumber,
  formatPercent,
  nailSalonDataLinks,
  relatedCalculators,
} from "@/lib/industries/nail-salon-calculators-shared";

export const meta = {
  title: "Nail Salon Station Utilization Calculator — Occupancy & Idle Capacity",
  shortTitle: "Station Utilization Calculator",
  subtitle: "Measure booked vs available station hours to find idle capacity and lost revenue.",
  description:
    "Free nail salon station utilization calculator. Measure station occupancy, idle hours, and the revenue upside of reaching target utilization.",
};

export const introContent = {
  lead: "Station utilization shows how much of your salon's available capacity is actually booked. This calculator finds idle hours and the revenue upside of filling them.",
  bullets: [
    "Utilization = Booked Station Hours ÷ Available Station Hours × 100",
    "Target 65–82% utilization on optimized schedules",
    "Idle station time is lost revenue you can recover with rebooking",
  ],
  audience: "Built for nail salon owners optimizing scheduling and technician productivity.",
};

export type UtilizationInputs = {
  stations: number;
  availableHoursPerStationPerWeek: number;
  bookedHoursPerStationPerWeek: number;
  revenuePerBookedHour: number;
};

export const defaultInputs: UtilizationInputs = {
  stations: 5,
  availableHoursPerStationPerWeek: 46,
  bookedHoursPerStationPerWeek: 32,
  revenuePerBookedHour: 55,
};

export const industryBenchmarks = [
  { metric: "Station Utilization", range: "65 – 82%" },
  { metric: "Revenue per Booked Hour", range: "$40 – $70" },
  { metric: "Available Hours / Station", range: "40 – 50 / week" },
  { metric: "Idle Capacity Target", range: "< 25%" },
] as const;

const WEEKS_PER_YEAR = 50;

export function calculateUtilization(inputs: UtilizationInputs) {
  const availableStationHours = inputs.stations * inputs.availableHoursPerStationPerWeek;
  const bookedStationHours = inputs.stations * inputs.bookedHoursPerStationPerWeek;
  const utilization =
    availableStationHours > 0 ? (bookedStationHours / availableStationHours) * 100 : 0;
  const idleHours = Math.max(0, availableStationHours - bookedStationHours);
  const weeklyRevenue = bookedStationHours * inputs.revenuePerBookedHour;
  const annualRevenue = weeklyRevenue * WEEKS_PER_YEAR;

  const targetBookedHours = availableStationHours * 0.82;
  const upsideHours = Math.max(0, targetBookedHours - bookedStationHours);
  const annualRevenueUpside = upsideHours * inputs.revenuePerBookedHour * WEEKS_PER_YEAR;

  let status: "low" | "healthy" | "high" = "healthy";
  if (utilization < 65) status = "low";
  else if (utilization >= 82) status = "high";

  return {
    availableStationHours,
    bookedStationHours,
    utilization,
    idleHours,
    weeklyRevenue,
    annualRevenue,
    annualRevenueUpside,
    status,
  };
}

export const faqs = [
  {
    question: "What is a good station utilization rate for a nail salon?",
    answer:
      "A healthy nail salon station utilization rate is 65–82%. Below 65% usually means idle capacity and lost revenue; consistently above 82% may signal you need more stations or technicians to meet demand.",
  },
  {
    question: "How do I improve nail salon station utilization?",
    answer:
      "Improve nail salon station utilization with strong rebooking, online booking, waitlists for cancellations, and smarter scheduling of longer services. Each recovered idle hour adds directly to revenue.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/nail-salon-station-utilization/");
export { nailSalonDataLinks, formatCurrency, formatNumber, formatPercent };
