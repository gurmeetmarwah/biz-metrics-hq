import {
  formatCurrency,
  formatNumber,
  formatPercent,
  hairSalonDataLinks,
  relatedCalculators,
} from "@/lib/industries/hair-salon-calculators-shared";

export const meta = {
  title: "Hair Salon Chair Utilization Calculator — Occupancy & Idle Capacity",
  shortTitle: "Hair Salon Chair Utilization Calculator",
  subtitle: "Measure booked vs available chair hours to find idle capacity and lost revenue.",
  description:
    "Free hair salon chair utilization calculator. Measure chair occupancy, idle hours, and the revenue upside of reaching target utilization.",
};

export const introContent = {
  lead: "Chair utilization shows how much of your salon's available capacity is actually booked. This calculator finds idle hours and the revenue upside of filling them.",
  bullets: [
    "Utilization = Booked Chair Hours ÷ Available Chair Hours × 100",
    "Target 65–80% utilization on optimized schedules",
    "Idle chair time is lost revenue you can recover with rebooking",
  ],
  audience: "Built for salon owners optimizing scheduling and stylist productivity.",
};

export type UtilizationInputs = {
  chairs: number;
  availableHoursPerChairPerWeek: number;
  bookedHoursPerChairPerWeek: number;
  revenuePerBookedHour: number;
};

export const defaultInputs: UtilizationInputs = {
  chairs: 6,
  availableHoursPerChairPerWeek: 48,
  bookedHoursPerChairPerWeek: 34,
  revenuePerBookedHour: 75,
};

export const industryBenchmarks = [
  { metric: "Chair Utilization", range: "65 – 80%" },
  { metric: "Revenue per Booked Hour", range: "$55 – $110" },
  { metric: "Available Hours / Chair", range: "40 – 55 / week" },
  { metric: "Idle Capacity Target", range: "< 25%" },
] as const;

const WEEKS_PER_YEAR = 50;

export function calculateUtilization(inputs: UtilizationInputs) {
  const availableChairHours = inputs.chairs * inputs.availableHoursPerChairPerWeek;
  const bookedChairHours = inputs.chairs * inputs.bookedHoursPerChairPerWeek;
  const utilization =
    availableChairHours > 0 ? (bookedChairHours / availableChairHours) * 100 : 0;
  const idleHours = Math.max(0, availableChairHours - bookedChairHours);
  const weeklyRevenue = bookedChairHours * inputs.revenuePerBookedHour;
  const annualRevenue = weeklyRevenue * WEEKS_PER_YEAR;

  const targetBookedHours = availableChairHours * 0.8;
  const upsideHours = Math.max(0, targetBookedHours - bookedChairHours);
  const annualRevenueUpside = upsideHours * inputs.revenuePerBookedHour * WEEKS_PER_YEAR;

  let status: "low" | "healthy" | "high" = "healthy";
  if (utilization < 65) status = "low";
  else if (utilization >= 80) status = "high";

  return {
    availableChairHours,
    bookedChairHours,
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
    question: "What is a good chair utilization rate for a hair salon?",
    answer:
      "A healthy hair salon chair utilization rate is 65–80%. Below 65% usually means idle capacity and lost revenue; consistently above 80% may signal you need more chairs or stylists to meet demand.",
  },
  {
    question: "How do I improve salon chair utilization?",
    answer:
      "Improve hair salon chair utilization with strong rebooking, online booking, waitlists for cancellations, and smarter scheduling of longer color services. Each recovered idle hour adds directly to revenue.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/hair-salon-chair-utilization/");
export { hairSalonDataLinks, formatCurrency, formatNumber, formatPercent };
