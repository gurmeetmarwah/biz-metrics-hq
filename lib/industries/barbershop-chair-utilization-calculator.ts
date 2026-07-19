import {
  formatCurrency,
  formatNumber,
  formatPercent,
  barbershopDataLinks,
  relatedCalculators,
} from "@/lib/industries/barbershop-calculators-shared";

export const meta = {
  title: "Barbershop Chair Utilization Calculator — Occupancy & Idle Capacity",
  shortTitle: "Chair Utilization Calculator",
  subtitle: "Measure booked vs available chair hours to find idle capacity and lost revenue.",
  description:
    "Free barbershop chair utilization calculator. Measure chair occupancy, idle hours, and the revenue upside of reaching target utilization.",
};

export const introContent = {
  lead: "Chair utilization shows how much of your shop's available capacity is actually booked. This calculator finds idle hours and the revenue upside of filling them.",
  bullets: [
    "Utilization = Booked Chair Hours ÷ Available Chair Hours × 100",
    "Target 70–85% utilization on optimized schedules",
    "Idle chair time is lost revenue you can recover with better scheduling",
  ],
  audience: "Built for barbershop owners optimizing scheduling and chair productivity.",
};

export type UtilizationInputs = {
  chairs: number;
  availableHoursPerChairPerWeek: number;
  bookedHoursPerChairPerWeek: number;
  revenuePerBookedHour: number;
};

export const defaultInputs: UtilizationInputs = {
  chairs: 4,
  availableHoursPerChairPerWeek: 50,
  bookedHoursPerChairPerWeek: 39,
  revenuePerBookedHour: 45,
};

export const industryBenchmarks = [
  { metric: "Chair Utilization", range: "70 – 85%" },
  { metric: "Revenue per Booked Hour", range: "$35 – $60" },
  { metric: "Available Hours / Chair", range: "45 – 55 / week" },
  { metric: "Idle Capacity Target", range: "< 30%" },
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

  const targetBookedHours = availableChairHours * 0.85;
  const upsideHours = Math.max(0, targetBookedHours - bookedChairHours);
  const annualRevenueUpside = upsideHours * inputs.revenuePerBookedHour * WEEKS_PER_YEAR;

  let status: "low" | "healthy" | "high" = "healthy";
  if (utilization < 70) status = "low";
  else if (utilization >= 85) status = "high";

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
    question: "What is a good chair utilization rate for a barbershop?",
    answer:
      "A healthy barbershop chair utilization rate is 70–85%. Below 70% usually means idle capacity and lost revenue; consistently above 85% may signal you need more chairs or barbers to meet demand.",
  },
  {
    question: "How do I improve barbershop chair utilization?",
    answer:
      "Improve chair utilization with online booking, walk-in traffic management, waitlists for cancellations, and membership plans that lock in recurring visits. Each recovered idle hour adds directly to revenue.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/barbershop-chair-utilization/");
export { barbershopDataLinks, formatCurrency, formatNumber, formatPercent };
