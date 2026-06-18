export const breakEvenCalculatorMeta = {
  title: "Restaurant Break-Even Calculator & Daily Customer Targets",
  shortTitle: "Restaurant Break-Even Calculator",
  subtitle:
    "Find out how much revenue, how many customers, and how many orders your restaurant needs to break even.",
  description:
    "Free restaurant break-even calculator with daily customer targets, cost waterfall, industry benchmarks, what-if scenarios, and safety score. See how many customers per day you need to stop losing money.",
};

export const introContent = {
  lead: "Restaurant owners don't think in contribution margin formulas — they think in customers per day. This calculator translates your fixed costs and variable percentages into actionable daily targets: revenue needed, covers required, and orders per hour.",
  bullets: [
    "Break-even revenue = Fixed Costs ÷ Contribution Margin %",
    "Contribution margin = 100% − Food Cost % − Labor % − Other Variable %",
    "At break-even, every customer above your daily target flows straight to profit",
  ],
  audience:
    "Built for owner-operators planning new locations, evaluating slow months, and setting daily sales goals for managers.",
};

export type BreakEvenInputs = {
  fixedCosts: number;
  averageOrderValue: number;
  foodCostPct: number;
  laborCostPct: number;
  otherVariablePct: number;
  daysOpen: number;
  hoursOpenPerDay: number;
  currentRevenue: number;
};

export const defaultBreakEvenInputs: BreakEvenInputs = {
  fixedCosts: 28700,
  averageOrderValue: 35,
  foodCostPct: 30,
  laborCostPct: 32,
  otherVariablePct: 3,
  daysOpen: 26,
  hoursOpenPerDay: 8,
  currentRevenue: 65000,
};

export const industryBenchmarks = [
  { metric: "Food Cost", range: "28–35%", low: 28, high: 35 },
  { metric: "Labor Cost", range: "25–35%", low: 25, high: 35 },
  { metric: "Break-even Revenue", range: "Varies by concept", low: 0, high: 0 },
  { metric: "Average Ticket", range: "$18–$45", low: 18, high: 45 },
] as const;

export const industryComparison = [
  {
    label: "Restaurant",
    dailyCustomers: 90,
    href: "/industries/restaurant/",
  },
  {
    label: "Coffee Shop",
    dailyCustomers: 120,
    href: "/industries/restaurant-types/coffee-shop/",
  },
  {
    label: "Food Truck",
    dailyCustomers: 55,
    href: "/industries/restaurant-types/food-truck/",
  },
  {
    label: "Bakery",
    dailyCustomers: 75,
    href: "/industries/restaurant-types/bakery/",
  },
] as const;

export type SafetyStatus = "below" | "healthy" | "strong";

export function calculateBreakEven(inputs: BreakEvenInputs) {
  const variablePct =
    inputs.foodCostPct + inputs.laborCostPct + inputs.otherVariablePct;
  const contributionMarginPct = Math.max(0, 100 - variablePct);

  const breakEvenRevenue =
    contributionMarginPct > 0
      ? inputs.fixedCosts / (contributionMarginPct / 100)
      : 0;

  const customersPerMonth =
    inputs.averageOrderValue > 0
      ? breakEvenRevenue / inputs.averageOrderValue
      : 0;

  const dailyCustomers =
    inputs.daysOpen > 0 ? customersPerMonth / inputs.daysOpen : 0;

  const dailySales =
    inputs.daysOpen > 0 ? breakEvenRevenue / inputs.daysOpen : 0;

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

  let gaugeStatus: "losing" | "break-even" | "profitable" = "losing";
  if (revenueRatio >= 1.02) gaugeStatus = "profitable";
  else if (revenueRatio >= 0.98) gaugeStatus = "break-even";

  const gaugePosition = Math.min(95, Math.max(5, revenueRatio * 50));

  const foodCostAmount = breakEvenRevenue * (inputs.foodCostPct / 100);
  const laborAmount = breakEvenRevenue * (inputs.laborCostPct / 100);
  const otherAmount = breakEvenRevenue * (inputs.otherVariablePct / 100);
  const profitAtBreakEven =
    breakEvenRevenue -
    foodCostAmount -
    laborAmount -
    otherAmount -
    inputs.fixedCosts;

  const waterfall = [
    {
      label: "Food Cost",
      amount: foodCostAmount,
      pct: inputs.foodCostPct,
      color: "var(--metric-salary)",
    },
    {
      label: "Labor",
      amount: laborAmount,
      pct: inputs.laborCostPct,
      color: "var(--metric-margin)",
    },
    {
      label: "Other Variable",
      amount: otherAmount,
      pct: inputs.otherVariablePct,
      color: "var(--metric-valuation)",
    },
    {
      label: "Fixed Costs",
      amount: inputs.fixedCosts,
      pct:
        breakEvenRevenue > 0
          ? (inputs.fixedCosts / breakEvenRevenue) * 100
          : 0,
      color: "var(--accent)",
    },
    {
      label: "Profit",
      amount: Math.max(0, profitAtBreakEven),
      pct:
        breakEvenRevenue > 0
          ? (Math.max(0, profitAtBreakEven) / breakEvenRevenue) * 100
          : 0,
      color: "var(--metric-revenue)",
    },
  ];

  const benchmarkInsights = getBenchmarkInsights(inputs);

  const safetyScore = calculateSafetyScore(revenueRatio);
  const safetyStatus: SafetyStatus =
    revenueRatio >= 1.05
      ? "strong"
      : revenueRatio >= 1
        ? "healthy"
        : "below";

  const cushionAmount = inputs.currentRevenue - breakEvenRevenue;

  return {
    variablePct,
    contributionMarginPct,
    breakEvenRevenue,
    customersPerMonth,
    dailyCustomers,
    dailySales,
    ordersPerHour,
    progressPct,
    revenueRatio,
    gaugeStatus,
    gaugePosition,
    waterfall,
    benchmarkInsights,
    safetyScore,
    safetyStatus,
    cushionAmount,
  };
}

function getBenchmarkInsights(inputs: BreakEvenInputs) {
  const insights: string[] = [];

  if (inputs.laborCostPct > 35) {
    insights.push("Your labor costs are higher than average.");
  } else if (inputs.laborCostPct < 25) {
    insights.push(
      "Your labor costs are below the typical range — confirm adequate staffing."
    );
  } else {
    insights.push("Your labor costs are within the industry average range.");
  }

  if (inputs.foodCostPct < 28) {
    insights.push("Your food cost is better than industry average.");
  } else if (inputs.foodCostPct > 35) {
    insights.push("Your food cost is above the typical industry range.");
  } else {
    insights.push("Your food cost is within the typical industry range.");
  }

  if (
    inputs.averageOrderValue < 18 ||
    inputs.averageOrderValue > 45
  ) {
    insights.push(
      "Your average ticket is outside the typical $18–$45 range for full-service restaurants."
    );
  }

  return insights;
}

function calculateSafetyScore(revenueRatio: number) {
  if (revenueRatio >= 1.15) return 95;
  if (revenueRatio >= 1.05) return 88;
  if (revenueRatio >= 1.0) return 82;
  if (revenueRatio >= 0.75) return 72;
  if (revenueRatio >= 0.6) return 50;
  return 30;
}

export function simulateAovIncrease(
  inputs: BreakEvenInputs,
  newAov: number
) {
  const base = calculateBreakEven(inputs);
  const updated = calculateBreakEven({ ...inputs, averageOrderValue: newAov });
  return {
    oldDailyCustomers: base.dailyCustomers,
    newDailyCustomers: updated.dailyCustomers,
    drop: base.dailyCustomers - updated.dailyCustomers,
  };
}

export function simulateFoodCostReduction(
  inputs: BreakEvenInputs,
  newFoodPct: number
) {
  const base = calculateBreakEven(inputs);
  const updated = calculateBreakEven({ ...inputs, foodCostPct: newFoodPct });
  return base.breakEvenRevenue - updated.breakEvenRevenue;
}

export function simulateCustomerGap(
  inputs: BreakEvenInputs,
  currentDailyCustomers: number
) {
  const required = calculateBreakEven(inputs).dailyCustomers;
  return {
    current: currentDailyCustomers,
    required,
    gap: Math.max(0, required - currentDailyCustomers),
  };
}

export const relatedCalculators = [
  {
    label: "Food Cost Calculator",
    href: "/industries/restaurant/food-cost-calculator/",
    description: "Track food cost % with industry benchmarks and menu analysis.",
  },
  {
    label: "Profit Margin Calculator",
    href: "/industries/restaurant/profit-margin-calculator/",
    description: "Full P&L margin analysis with industry quartiles.",
  },
  {
    label: "Restaurant Valuation Calculator",
    href: "/industries/restaurant/valuation/",
    description: "Estimate business value using SDE multiples.",
  },
  {
    label: "Menu Pricing Calculator",
    href: "/calculators/menu-pricing/",
    description: "Price menu items for target food cost %.",
  },
] as const;

export const breakEvenFaqs = [
  {
    question: "How do restaurants calculate break-even?",
    answer:
      "Restaurant break-even revenue = Monthly Fixed Costs ÷ Contribution Margin %. Contribution margin is what's left after variable costs (food, labor, supplies) as a percentage of revenue. Divide break-even revenue by your average order value to get customers needed per month, then divide by days open for daily targets.",
  },
  {
    question: "What is a good break-even point?",
    answer:
      "A healthy restaurant breaks even at 60–70% of capacity — meaning you have profit cushion on busy days. If you need 90+ customers daily just to cover costs on a 100-seat restaurant, margins are thin. Aim for break-even at 65% of your realistic peak daily covers.",
  },
  {
    question: "How many customers does a restaurant need?",
    answer:
      "It varies widely by concept and ticket size. A casual dining restaurant with $35 average ticket and $28,700 monthly fixed costs typically needs ~90 customers per day (26 operating days). Coffee shops need more volume at lower tickets; fine dining needs fewer covers at higher prices.",
  },
  {
    question: "How can I lower my break-even point?",
    answer:
      "Four levers: reduce fixed costs (renegotiate rent, optimize staffing schedules), increase average order value (upselling, combo pricing), lower food cost % (portion control, vendor negotiation), and reduce labor % (cross-training, scheduling software). Even a $3 increase in average ticket can drop daily cover requirements by 10+.",
  },
  {
    question: "What costs are included in break-even?",
    answer:
      "Fixed costs include rent, salaried staff, insurance, loan payments, software, and marketing retainers — expenses that don't change with each customer. Variable costs scale with sales: food, hourly labor, paper goods, and credit card fees. This calculator separates them so you see exactly how many customers cover your overhead.",
  },
] as const;

export { formatCurrency } from "@/lib/numbers";

export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`;
}

export function formatNumber(value: number, decimals = 0): string {
  return value.toLocaleString("en-US", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
}
