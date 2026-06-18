import {
  coffeeShopIndustryAverages,
  formatCurrency,
  formatNumber,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/coffee-shop-calculators-shared";

export const meta = {
  title: "Coffee Shop Break-Even Calculator & Daily Customer Targets",
  shortTitle: "Coffee Shop Break-Even Calculator",
  subtitle:
    "Find out how much revenue and how many customers your coffee shop needs to break even each day.",
  description:
    "Free coffee shop break-even calculator with daily customer targets, cost waterfall, industry benchmarks, and safety score. See how many customers per day you need to stop losing money.",
};

export const introContent = {
  lead: "Coffee shop owners think in customers per day, not contribution margin formulas. This calculator translates your fixed costs and variable percentages into actionable daily targets: revenue needed, customers required, and progress toward break-even.",
  bullets: [
    "Break-even revenue = Fixed Costs ÷ Contribution Margin %",
    "Contribution margin = 100% − Ingredient Cost % − Labor % − Other Variable %",
    "Most cafes need 180–250 customers/day at $6–$7 average ticket",
  ],
  audience:
    "Built for cafe owners planning new locations, evaluating slow months, and setting daily sales goals.",
};

export type BreakEvenInputs = {
  fixedCosts: number;
  averageTicket: number;
  ingredientCostPct: number;
  laborCostPct: number;
  otherVariablePct: number;
  daysOpen: number;
  hoursOpenPerDay: number;
  currentRevenue: number;
};

export const defaultInputs: BreakEvenInputs = {
  fixedCosts: 12000,
  averageTicket: 6.5,
  ingredientCostPct: 22,
  laborCostPct: 32,
  otherVariablePct: 5,
  daysOpen: 25,
  hoursOpenPerDay: 12,
  currentRevenue: 42000,
};

export const industryBenchmarks = [
  { metric: "Ingredient Cost", range: "18–25%" },
  { metric: "Labor Cost", range: "28–35%" },
  { metric: "Average Ticket", range: "$6–$12" },
  { metric: "Daily Customers", range: "180–250" },
] as const;

export function calculateBreakEven(inputs: BreakEvenInputs) {
  const variablePct =
    inputs.ingredientCostPct + inputs.laborCostPct + inputs.otherVariablePct;
  const contributionMarginPct = Math.max(0, 100 - variablePct);
  const breakEvenRevenue =
    contributionMarginPct > 0
      ? inputs.fixedCosts / (contributionMarginPct / 100)
      : 0;
  const customersPerMonth =
    inputs.averageTicket > 0 ? breakEvenRevenue / inputs.averageTicket : 0;
  const dailyCustomers =
    inputs.daysOpen > 0 ? customersPerMonth / inputs.daysOpen : 0;
  const dailySales = inputs.daysOpen > 0 ? breakEvenRevenue / inputs.daysOpen : 0;
  const ordersPerHour =
    inputs.hoursOpenPerDay > 0
      ? dailyCustomers / inputs.hoursOpenPerDay
      : 0;
  const progressPct =
    breakEvenRevenue > 0
      ? Math.min(100, (inputs.currentRevenue / breakEvenRevenue) * 100)
      : 0;
  const revenueRatio =
    breakEvenRevenue > 0 ? inputs.currentRevenue / breakEvenRevenue : 0;
  const gaugePosition = Math.min(95, Math.max(5, revenueRatio * 50));
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
    ordersPerHour,
    progressPct,
    revenueRatio,
    gaugePosition,
    safetyScore,
    safetyStatus,
    cushionAmount,
  };
}

export const faqs = [
  {
    question: "How do coffee shops calculate break-even?",
    answer:
      "Break-even revenue = Monthly Fixed Costs ÷ Contribution Margin %. Contribution margin is what's left after variable costs (ingredients, labor, supplies) as a percentage of revenue. Divide by average ticket to get customers needed per month, then by days open for daily targets.",
  },
  {
    question: "How many customers does a coffee shop need daily?",
    answer:
      "Most coffee shops need 180–250 customers per day to break even, assuming a $6–$7 average ticket. At $6.50 average ticket and 41% contribution margin, 200 customers/day generates enough to cover variable costs plus monthly fixed overhead.",
  },
  {
    question: "What is a good break-even point for a cafe?",
    answer:
      "A healthy cafe breaks even at 60–70% of peak daily volume — giving profit cushion on busy mornings. If you need 280+ customers daily just to cover costs, margins are thin. Drive-thru locations can handle higher volume targets more efficiently.",
  },
  {
    question: "How can I lower my break-even point?",
    answer:
      "Four levers: reduce fixed costs (rent negotiation, optimize salaried staff), increase average ticket (food attach, upsells), lower ingredient cost % (vendor contracts, waste reduction), and improve labor efficiency (scheduling software, cross-training).",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/coffee-shop-break-even/");
export { coffeeShopIndustryAverages, formatCurrency, formatPercent, formatNumber };
