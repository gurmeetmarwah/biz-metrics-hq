import {
  foodTruckIndustryAverages,
  formatCurrency,
  formatNumber,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/food-truck-calculators-shared";

export const meta = {
  title: "Food Truck Break-Even Calculator & Daily Customer Targets",
  shortTitle: "Food Truck Break-Even Calculator",
  subtitle:
    "Find out how much revenue and how many customers your food truck needs to break even each day.",
  description:
    "Free food truck break-even calculator with daily customer targets, cost waterfall, industry benchmarks, and safety score. See how many customers per day you need to stop losing money.",
};

export const introContent = {
  lead: "Food truck owners think in customers per day and events per month — not contribution margin formulas. This calculator translates your fixed costs and variable percentages into actionable daily targets.",
  bullets: [
    "Break-even revenue = Fixed Costs ÷ Contribution Margin %",
    "Contribution margin = 100% − Food Cost % − Labor % − Other Variable %",
    "Most trucks need 65–90 customers/day at $12–$16 average ticket",
  ],
  audience:
    "Built for food truck owners planning routes, evaluating slow seasons, and setting daily sales goals.",
};

export type BreakEvenInputs = {
  fixedCosts: number;
  averageTicket: number;
  foodCostPct: number;
  laborCostPct: number;
  otherVariablePct: number;
  daysOpen: number;
  hoursOpenPerDay: number;
  currentRevenue: number;
};

export const defaultInputs: BreakEvenInputs = {
  fixedCosts: 8500,
  averageTicket: 14,
  foodCostPct: 30,
  laborCostPct: 24,
  otherVariablePct: 8,
  daysOpen: 22,
  hoursOpenPerDay: 8,
  currentRevenue: 22000,
};

export const industryBenchmarks = [
  { metric: "Food Cost", range: "28–35%" },
  { metric: "Labor Cost", range: "20–28%" },
  { metric: "Average Ticket", range: "$10–$18" },
  { metric: "Daily Customers", range: "65–90" },
] as const;

export function calculateBreakEven(inputs: BreakEvenInputs) {
  const variablePct = inputs.foodCostPct + inputs.laborCostPct + inputs.otherVariablePct;
  const contributionMarginPct = Math.max(0, 100 - variablePct);
  const breakEvenRevenue =
    contributionMarginPct > 0 ? inputs.fixedCosts / (contributionMarginPct / 100) : 0;
  const customersPerMonth =
    inputs.averageTicket > 0 ? breakEvenRevenue / inputs.averageTicket : 0;
  const dailyCustomers = inputs.daysOpen > 0 ? customersPerMonth / inputs.daysOpen : 0;
  const dailySales = inputs.daysOpen > 0 ? breakEvenRevenue / inputs.daysOpen : 0;
  const customersPerHour =
    inputs.hoursOpenPerDay > 0 ? dailyCustomers / inputs.hoursOpenPerDay : 0;
  const progressPct =
    breakEvenRevenue > 0 ? Math.min(100, (inputs.currentRevenue / breakEvenRevenue) * 100) : 0;
  const revenueRatio = breakEvenRevenue > 0 ? inputs.currentRevenue / breakEvenRevenue : 0;
  const safetyScore =
    revenueRatio >= 1.15 ? 95 : revenueRatio >= 1.05 ? 88 : revenueRatio >= 1 ? 82 : revenueRatio >= 0.75 ? 65 : 40;
  const safetyStatus =
    revenueRatio >= 1.05 ? "strong" : revenueRatio >= 1 ? "healthy" : "below";
  const cushionAmount = inputs.currentRevenue - breakEvenRevenue;

  return {
    contributionMarginPct,
    breakEvenRevenue,
    customersPerMonth,
    dailyCustomers,
    dailySales,
    customersPerHour,
    progressPct,
    revenueRatio,
    safetyScore,
    safetyStatus,
    cushionAmount,
  };
}

export const faqs = [
  {
    question: "How do food trucks calculate break-even?",
    answer:
      "Break-even revenue = Monthly Fixed Costs ÷ Contribution Margin %. Contribution margin is what's left after variable costs (food, labor, fuel, supplies) as a percentage of revenue. Divide by average ticket to get customers needed per month, then by operating days for daily targets.",
  },
  {
    question: "How many customers does a food truck need daily?",
    answer:
      "Most food trucks need 65–90 customers per day to break even, assuming a $12–$16 average ticket. At $14 average ticket and 38% contribution margin, 75 customers/day generates enough to cover variable costs plus monthly fixed overhead.",
  },
  {
    question: "What is a good break-even point for a food truck?",
    answer:
      "A healthy truck breaks even at 60–70% of peak daily volume — giving profit cushion on festival days and catering upsells. If you need 120+ customers daily just to cover costs on a street route, margins are thin.",
  },
  {
    question: "How can I lower my food truck break-even point?",
    answer:
      "Four levers: reduce fixed costs (commissary fees, insurance, loan payments), increase average ticket (combos, catering minimums), lower food cost % (vendor contracts, prep efficiency), and add high-margin event bookings.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/food-truck-break-even/");
export { foodTruckIndustryAverages, formatCurrency, formatPercent, formatNumber };
