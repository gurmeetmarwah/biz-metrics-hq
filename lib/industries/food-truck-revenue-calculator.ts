import {
  foodTruckDataLinks,
  foodTruckIndustryAverages,
  formatCurrency,
  formatNumber,
  relatedCalculators,
} from "@/lib/industries/food-truck-calculators-shared";

export const meta = {
  title: "Food Truck Revenue Calculator & Annual Sales Estimator",
  shortTitle: "Food Truck Revenue Calculator",
  subtitle:
    "Estimate annual revenue from daily customer volume, average ticket, operating days, and event income.",
  description:
    "Free food truck revenue calculator. Project annual sales from customers per day, average ticket, days open, and event revenue — with industry benchmark comparison.",
};

export const introContent = {
  lead: "Food truck revenue combines street sales and event bookings. This calculator projects annual revenue from daily volume plus catering and festival income, then compares your projections against industry benchmarks.",
  bullets: [
    "Street Revenue = Customers/Day × Average Ticket × Days Open/Year",
    "Total Revenue = Street Revenue + Annual Event Income",
    "Median food truck: ~$280K (75 customers × $14 × 268 days + events)",
  ],
  audience:
    "Built for business plan writers, aspiring food truck owners, and operators evaluating growth scenarios.",
};

export type RevenueInputs = {
  customersPerDay: number;
  averageTicket: number;
  daysOpenPerYear: number;
  eventRevenueAnnual: number;
};

export const defaultInputs: RevenueInputs = {
  customersPerDay: 75,
  averageTicket: 14,
  daysOpenPerYear: 268,
  eventRevenueAnnual: 35000,
};

export const scenarios = [
  { label: "Slow Route Day", customersPerDay: 50, averageTicket: 12 },
  { label: "Average Day", customersPerDay: 75, averageTicket: 14 },
  { label: "Festival Day", customersPerDay: 200, averageTicket: 16 },
] as const;

export function calculateRevenue(inputs: RevenueInputs) {
  const dailyRevenue = inputs.customersPerDay * inputs.averageTicket;
  const streetRevenue = dailyRevenue * inputs.daysOpenPerYear;
  const annualRevenue = streetRevenue + inputs.eventRevenueAnnual;
  const monthlyRevenue = annualRevenue / 12;
  const eventPct = annualRevenue > 0 ? (inputs.eventRevenueAnnual / annualRevenue) * 100 : 0;
  const streetPct = 100 - eventPct;

  let tier: "Bottom Quartile" | "Average" | "Top Quartile" = "Average";
  if (annualRevenue < 180000) tier = "Bottom Quartile";
  else if (annualRevenue >= 400000) tier = "Top Quartile";

  return {
    dailyRevenue,
    streetRevenue,
    annualRevenue,
    monthlyRevenue,
    eventPct,
    streetPct,
    tier,
    customersPerYear: inputs.customersPerDay * inputs.daysOpenPerYear,
  };
}

export const faqs = [
  {
    question: "How much revenue does a food truck make?",
    answer:
      "Food trucks typically generate $180K–$450K annually, with a median around $280K. At 75 customers/day, $14 average ticket, 268 operating days, plus $35K in events, annual revenue is approximately $316K.",
  },
  {
    question: "How many customers does a food truck need?",
    answer:
      "Most food trucks target 60–150 customers per day depending on concept and location. Street routes average 65–90; festival days can exceed 200. Below 50 customers/day on a regular route makes profitability difficult at typical margins.",
  },
  {
    question: "How much do events contribute to food truck revenue?",
    answer:
      "Event and catering revenue typically represents 10–30% of total annual income for successful operators. Corporate catering and festivals carry higher margins (18–30%) than street sales, making them critical for profitability.",
  },
  {
    question: "How do I increase food truck revenue?",
    answer:
      "Four levers: increase daily customer count (better routes, social media), raise average ticket (combos, premium items), book more events and catering, and extend operating season with indoor commissary pop-ups.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/food-truck-revenue/");
export { foodTruckIndustryAverages, foodTruckDataLinks, formatCurrency, formatNumber };
