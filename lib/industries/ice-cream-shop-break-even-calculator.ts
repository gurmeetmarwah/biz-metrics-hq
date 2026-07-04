import {
  iceCreamShopDataLinks,
  iceCreamShopIndustryAverages,
  formatCurrency,
  formatNumber,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/ice-cream-shop-calculators-shared";

export const meta = {
  title: "Ice Cream Shop Break-Even Calculator & Daily Customer Targets",
  shortTitle: "Ice Cream Shop Break-Even Calculator",
  subtitle:
    "Find out how much revenue and how many daily customers your ice cream shop needs to break even.",
  description:
    "Free ice cream shop break-even calculator with daily customer targets, cost waterfall, industry benchmarks, and safety score.",
};

export const introContent = {
  lead: "Ice cream shop owners plan around daily foot traffic and seasonal swings. This calculator translates fixed costs and variable percentages into daily customer and revenue targets.",
  bullets: [
    "Break-even revenue = Fixed Costs ÷ Contribution Margin %",
    "Contribution margin = 100% − Food Cost % − Labor % − Other Variable %",
    "Most shops need 200–350 customers/day at $6.50–$11.50 average ticket",
  ],
  audience:
    "Built for ice cream shop owners planning locations, managing off-season cash flow, and setting daily sales goals.",
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
  fixedCosts: 38500,
  averageTicket: 8.4,
  foodCostPct: 28,
  laborCostPct: 26,
  otherVariablePct: 6,
  daysOpen: 26,
  hoursOpenPerDay: 10,
  currentRevenue: 52000,
};

export const industryBenchmarks = [
  { metric: "Food Cost", range: "24–32%" },
  { metric: "Labor Cost", range: "22–30%" },
  { metric: "Average Ticket", range: "$6.50 – $11.50" },
  { metric: "Daily Customers", range: "200 – 350" },
] as const;

export function calculateBreakEven(inputs: BreakEvenInputs) {
  const variablePct = inputs.foodCostPct + inputs.laborCostPct + inputs.otherVariablePct;
  const contributionMarginPct = Math.max(0, 100 - variablePct);
  const breakEvenRevenue =
    contributionMarginPct > 0 ? inputs.fixedCosts / (contributionMarginPct / 100) : 0;
  const customersPerMonth = inputs.averageTicket > 0 ? breakEvenRevenue / inputs.averageTicket : 0;
  const dailyCustomers = inputs.daysOpen > 0 ? customersPerMonth / inputs.daysOpen : 0;
  const dailySales = inputs.daysOpen > 0 ? breakEvenRevenue / inputs.daysOpen : 0;
  const customersPerHour = inputs.hoursOpenPerDay > 0 ? dailyCustomers / inputs.hoursOpenPerDay : 0;
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
    question: "How do ice cream shops calculate break-even?",
    answer:
      "Break-even revenue = Monthly Fixed Costs ÷ Contribution Margin %. Divide by average ticket to get customers needed per month, then by days open for daily targets. Account for seasonal revenue — summer months must cover winter shortfalls.",
  },
  {
    question: "How many customers does an ice cream shop need daily?",
    answer:
      "Most independent shops need 200–350 customers per day to break even at a $7–$9 average ticket. Peak summer days may exceed 400; off-season days may fall below 100 in temperate climates.",
  },
  {
    question: "What is a good break-even point for an ice cream shop?",
    answer:
      "A healthy shop breaks even at 60–70% of peak summer daily volume, giving cushion during shoulder seasons. If break-even requires year-round peak traffic, the location or cost structure is too thin.",
  },
  {
    question: "How can I lower my ice cream shop break-even?",
    answer:
      "Four levers: reduce fixed costs (rent, salaried staff), increase average ticket (milkshakes, sundaes, cakes), lower food cost % (portion control, vendor contracts), and add catering or wholesale for off-season revenue.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/ice-cream-shop-break-even/");
export { iceCreamShopIndustryAverages, iceCreamShopDataLinks, formatCurrency, formatPercent, formatNumber };
