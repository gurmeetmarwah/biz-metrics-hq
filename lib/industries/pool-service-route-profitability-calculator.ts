import {
  formatCurrency,
  formatNumber,
  formatPercent,
  poolServiceIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/pool-service-calculators-shared";

export const meta = {
  title: "Pool Service Route Profitability Calculator & Route Economics Tool",
  shortTitle: "Pool Service Route Profitability Calculator",
  subtitle:
    "Model gross profit per route from stops, average ticket, labor, and drive time for your pool service company.",
  description:
    "Free pool service route profitability calculator. Measure revenue per route, gross profit, stops per day, and route density against industry benchmarks.",
};

export const introContent = {
  lead: "Route profitability is the core operating lever in pool service. Dense routes with minimal drive time generate 18–25% higher gross profit than spread-out territories. This calculator models route-level economics.",
  bullets: [
    "Route Revenue = Stops Per Day × Working Days × Average Ticket",
    "Gross Profit = Route Revenue − Direct Labor − Chemicals − Fleet",
    "Healthy routes target $8K–$14K monthly revenue with 55–65% gross margin",
  ],
  audience:
    "Built for pool service owners optimizing territories, evaluating route acquisitions, and planning technician capacity.",
};

export type RouteProfitabilityInputs = {
  stopsPerDay: number;
  workingDays: number;
  averageTicket: number;
  laborCostPerStop: number;
  chemicalCostPerStop: number;
  fleetCostPerMonth: number;
};

export const defaultInputs: RouteProfitabilityInputs = {
  stopsPerDay: 15,
  workingDays: 22,
  averageTicket: 115,
  laborCostPerStop: 28,
  chemicalCostPerStop: 8,
  fleetCostPerMonth: 1200,
};

export const routeBenchmarks = [
  { metric: "Revenue Per Route", range: "$8K – $14K/mo" },
  { metric: "Gross Profit Per Route", range: "$55K – $95K/yr" },
  { metric: "Stops Per Day", range: "12 – 18" },
  { metric: "Revenue Per Stop", range: "$65 – $120" },
] as const;

export function calculateRouteProfitability(inputs: RouteProfitabilityInputs) {
  const monthlyRevenue = inputs.stopsPerDay * inputs.workingDays * inputs.averageTicket;
  const annualRevenue = monthlyRevenue * 12;
  const monthlyLabor = inputs.stopsPerDay * inputs.workingDays * inputs.laborCostPerStop;
  const monthlyChemicals = inputs.stopsPerDay * inputs.workingDays * inputs.chemicalCostPerStop;
  const monthlyCosts = monthlyLabor + monthlyChemicals + inputs.fleetCostPerMonth;
  const monthlyGrossProfit = monthlyRevenue - monthlyCosts;
  const annualGrossProfit = monthlyGrossProfit * 12;
  const grossMarginPct = monthlyRevenue > 0 ? (monthlyGrossProfit / monthlyRevenue) * 100 : 0;
  const revenuePerStop = inputs.averageTicket;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (monthlyRevenue < 8000) tier = "Below";
  else if (monthlyRevenue >= 12000) tier = "Strong";

  const vsBenchmark = annualGrossProfit - poolServiceIndustryAverages.grossProfitPerRoute;

  return {
    monthlyRevenue,
    annualRevenue,
    monthlyGrossProfit,
    annualGrossProfit,
    grossMarginPct,
    revenuePerStop,
    vsBenchmark,
    tier,
  };
}

export const faqs = [
  {
    question: "What is a profitable pool service route?",
    answer:
      "A profitable route generates $8K–$14K monthly revenue with 55–65% gross margin after direct labor, chemicals, and fleet allocation. Annual gross profit per route typically runs $55K–$95K for well-designed suburban territories.",
  },
  {
    question: "How many stops should a pool route have per day?",
    answer:
      "Efficient routes include 12–18 stops per technician per day. Dense suburban clusters with 7+ stops per hour support the high end. Rural or spread-out territories run 10–12 stops.",
  },
  {
    question: "What is revenue per stop for pool service?",
    answer:
      "Average revenue per stop ranges $65–$120 depending on service frequency, pool size, and whether chemicals are included. Weekly residential cleaning at $115/stop is a common benchmark.",
  },
  {
    question: "How does drive time affect route profitability?",
    answer:
      "Drive time is the hidden margin killer. Technicians spending 90+ minutes daily between stops lose 2–4 billable stops — reducing route revenue 15–25%. Geographic clustering is the highest-ROI operational improvement.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/pool-service-route-profitability/");
export { poolServiceIndustryAverages, formatCurrency, formatNumber, formatPercent };
