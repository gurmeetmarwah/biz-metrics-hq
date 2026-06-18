import {
  bakeryIndustryAverages,
  formatCurrency,
  formatNumber,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/bakery-calculators-shared";

export const meta = {
  title: "Bakery Break-Even Calculator & Daily Order Targets",
  shortTitle: "Bakery Break-Even Calculator",
  subtitle:
    "Find out how much revenue and how many orders your bakery needs to break even each day.",
  description:
    "Free bakery break-even calculator with daily order targets, cost waterfall, industry benchmarks, and safety score. See how many orders per day you need to stop losing money.",
};

export const introContent = {
  lead: "Bakery owners think in orders per day, not contribution margin formulas. This calculator translates your fixed costs and variable percentages into actionable daily targets: revenue needed, orders required, and progress toward break-even.",
  bullets: [
    "Break-even revenue = Fixed Costs ÷ Contribution Margin %",
    "Contribution margin = 100% − Ingredient Cost % − Labor % − Other Variable %",
    "Most bakeries need 55–70 orders/day at $20–$30 average order",
  ],
  audience:
    "Built for bakery owners planning new locations, evaluating slow seasons, and setting daily sales goals.",
};

export type BreakEvenInputs = {
  fixedCosts: number;
  averageOrder: number;
  ingredientCostPct: number;
  laborCostPct: number;
  otherVariablePct: number;
  daysOpen: number;
  hoursOpenPerDay: number;
  currentRevenue: number;
};

export const defaultInputs: BreakEvenInputs = {
  fixedCosts: 24650,
  averageOrder: 25,
  ingredientCostPct: 28,
  laborCostPct: 32,
  otherVariablePct: 5,
  daysOpen: 25,
  hoursOpenPerDay: 12,
  currentRevenue: 37500,
};

export const industryBenchmarks = [
  { metric: "Ingredient Cost", range: "25–32%" },
  { metric: "Labor Cost", range: "28–36%" },
  { metric: "Average Order", range: "$12–$35" },
  { metric: "Daily Orders", range: "55–70" },
] as const;

export function calculateBreakEven(inputs: BreakEvenInputs) {
  const variablePct = inputs.ingredientCostPct + inputs.laborCostPct + inputs.otherVariablePct;
  const contributionMarginPct = Math.max(0, 100 - variablePct);
  const breakEvenRevenue =
    contributionMarginPct > 0 ? inputs.fixedCosts / (contributionMarginPct / 100) : 0;
  const ordersPerMonth = inputs.averageOrder > 0 ? breakEvenRevenue / inputs.averageOrder : 0;
  const dailyOrders = inputs.daysOpen > 0 ? ordersPerMonth / inputs.daysOpen : 0;
  const dailySales = inputs.daysOpen > 0 ? breakEvenRevenue / inputs.daysOpen : 0;
  const ordersPerHour = inputs.hoursOpenPerDay > 0 ? dailyOrders / inputs.hoursOpenPerDay : 0;
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
    ordersPerMonth,
    dailyOrders,
    dailySales,
    ordersPerHour,
    progressPct,
    revenueRatio,
    safetyScore,
    safetyStatus,
    cushionAmount,
  };
}

export const faqs = [
  {
    question: "How do bakeries calculate break-even?",
    answer:
      "Break-even revenue = Monthly Fixed Costs ÷ Contribution Margin %. Contribution margin is what's left after variable costs (ingredients, labor, packaging) as a percentage of revenue. Divide by average order to get orders needed per month, then by days open for daily targets.",
  },
  {
    question: "How many orders does a bakery need daily?",
    answer:
      "Most retail bakeries need 55–70 orders per day to break even, assuming a $20–$30 average order. At $25 average order and 35% contribution margin, 60 orders/day generates enough to cover variable costs plus monthly fixed overhead.",
  },
  {
    question: "What is a good break-even point for a bakery?",
    answer:
      "A healthy bakery breaks even at 60–70% of peak daily volume — giving profit cushion during slow weeks. If you need 100+ orders daily just to cover costs at a neighborhood bakery, margins are thin.",
  },
  {
    question: "How can I lower my bakery break-even point?",
    answer:
      "Four levers: reduce fixed costs (rent, salaried staff), increase average order (custom cakes, catering trays), lower ingredient cost % (vendor contracts, waste reduction), and add wholesale accounts for off-peak production.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/bakery-break-even/");
export { bakeryIndustryAverages, formatCurrency, formatPercent, formatNumber };
