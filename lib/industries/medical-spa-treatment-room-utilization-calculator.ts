import {
  formatCurrency,
  formatNumber,
  formatPercent,
  medicalSpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/medical-spa-calculators-shared";

export const meta = {
  title: "Medical Spa Treatment Room Utilization Calculator — Occupancy & Idle Capacity",
  shortTitle: "Treatment Room Utilization Calculator",
  subtitle: "Measure booked vs available room hours to find idle capacity and lost revenue.",
  description:
    "Free medical spa treatment room utilization calculator. Measure room occupancy, idle hours, and the revenue upside of reaching target utilization.",
};

export const introContent = {
  lead: "Treatment room utilization shows how much of your practice's available capacity is actually booked. This calculator finds idle hours and the revenue upside of filling them.",
  bullets: [
    "Utilization = Booked Room Hours ÷ Available Room Hours × 100",
    "Target 55–75% utilization on optimized schedules",
    "Idle room time is lost revenue you can recover with better scheduling",
  ],
  audience: "Built for medical spa owners optimizing scheduling and room productivity.",
};

export type UtilizationInputs = {
  treatmentRooms: number;
  availableHoursPerRoomPerWeek: number;
  bookedHoursPerRoomPerWeek: number;
  revenuePerBookedHour: number;
};

export const defaultInputs: UtilizationInputs = {
  treatmentRooms: 4,
  availableHoursPerRoomPerWeek: 50,
  bookedHoursPerRoomPerWeek: 32,
  revenuePerBookedHour: 200,
};

export const industryBenchmarks = [
  { metric: "Room Utilization", range: "55 – 75%" },
  { metric: "Revenue per Booked Hour", range: "$150 – $350" },
  { metric: "Available Hours / Room", range: "45 – 55 / week" },
  { metric: "Idle Capacity Target", range: "< 30%" },
] as const;

const WEEKS_PER_YEAR = 50;

export function calculateUtilization(inputs: UtilizationInputs) {
  const availableRoomHours = inputs.treatmentRooms * inputs.availableHoursPerRoomPerWeek;
  const bookedRoomHours = inputs.treatmentRooms * inputs.bookedHoursPerRoomPerWeek;
  const utilization =
    availableRoomHours > 0 ? (bookedRoomHours / availableRoomHours) * 100 : 0;
  const idleHours = Math.max(0, availableRoomHours - bookedRoomHours);
  const weeklyRevenue = bookedRoomHours * inputs.revenuePerBookedHour;
  const annualRevenue = weeklyRevenue * WEEKS_PER_YEAR;

  const targetBookedHours = availableRoomHours * 0.75;
  const upsideHours = Math.max(0, targetBookedHours - bookedRoomHours);
  const annualRevenueUpside = upsideHours * inputs.revenuePerBookedHour * WEEKS_PER_YEAR;

  let status: "low" | "healthy" | "high" = "healthy";
  if (utilization < 55) status = "low";
  else if (utilization >= 75) status = "high";

  return {
    availableRoomHours,
    bookedRoomHours,
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
    question: "What is a good treatment room utilization rate for a medical spa?",
    answer:
      "A healthy medical spa room utilization rate is 55–75%. Below 55% usually means idle capacity and lost revenue; consistently above 75% may signal you need more rooms or providers to meet demand.",
  },
  {
    question: "How do I improve medical spa treatment room utilization?",
    answer:
      "Improve room utilization with online booking, waitlists for cancellations, combination treatment scheduling, and membership plans that lock in recurring visits. Each recovered idle hour adds directly to revenue.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/medical-spa-treatment-room-utilization/");
export { medicalSpaDataLinks, formatCurrency, formatNumber, formatPercent };
