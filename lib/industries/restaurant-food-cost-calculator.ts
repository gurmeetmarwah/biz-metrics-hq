export const foodCostCalculatorMeta = {
  title: "Restaurant Food Cost Calculator & Industry Benchmark Tool",
  shortTitle: "Restaurant Food Cost Calculator",
  subtitle:
    "Calculate food cost percentage, compare against industry benchmarks, and identify opportunities to improve profitability.",
  description:
    "Free restaurant food cost calculator with industry benchmarks, menu item analyzer, waste impact simulator, and weekly tracking. Compare your food cost % against fast casual, pizza, coffee shop, and fine dining targets.",
};

export const introContent = {
  lead: "Food cost is the metric restaurant owners check weekly — not annually. This calculator goes beyond a simple percentage: it benchmarks your costs against real industry targets, analyzes menu item margins, and models how small improvements compound into annual profit.",
  bullets: [
    "Food Cost % = (Ingredients + Beverage + Waste) ÷ Food Sales Revenue",
    "Target ranges vary by concept — coffee shops run 18–25%, fine dining 30–40%",
    "A 1% food cost reduction on $1M in food sales adds $10,000 straight to profit",
  ],
  audience:
    "Built for owner-operators, kitchen managers, and multi-unit operators who track COGS weekly or monthly.",
};

export type TimePeriod = "weekly" | "monthly" | "quarterly";

export type FoodCostInputs = {
  foodSales: number;
  ingredientCosts: number;
  beverageCosts: number;
  wasteCosts: number;
  period: TimePeriod;
  restaurantType: string;
};

export const defaultFoodCostInputs: FoodCostInputs = {
  foodSales: 74800,
  ingredientCosts: 18000,
  beverageCosts: 3000,
  wasteCosts: 1000,
  period: "monthly",
  restaurantType: "casual-dining",
};

export const periodMultipliers: Record<TimePeriod, number> = {
  weekly: 52,
  monthly: 12,
  quarterly: 4,
};

export const benchmarkBands = [
  { label: "Poor", range: "35%+", min: 35, max: 100 },
  { label: "Average", range: "28–35%", min: 28, max: 35 },
  { label: "Strong", range: "<28%", min: 0, max: 28 },
] as const;

export const industryComparison = [
  { type: "Fast Food", range: "25–30%", low: 25, high: 30 },
  { type: "Casual Dining", range: "28–35%", low: 28, high: 35 },
  { type: "Fine Dining", range: "30–40%", low: 30, high: 40 },
  { type: "Pizza", range: "22–28%", low: 22, high: 28 },
  { type: "Coffee Shop", range: "18–25%", low: 18, high: 25 },
  { type: "Bakery", range: "20–30%", low: 20, high: 30 },
] as const;

export const restaurantTypeOptions = [
  { value: "fast-food", label: "Fast Food", ...industryComparison[0] },
  { value: "casual-dining", label: "Casual Dining", ...industryComparison[1] },
  { value: "fine-dining", label: "Fine Dining", ...industryComparison[2] },
  { value: "pizza", label: "Pizza", ...industryComparison[3] },
  { value: "coffee-shop", label: "Coffee Shop", ...industryComparison[4] },
  { value: "bakery", label: "Bakery", ...industryComparison[5] },
];

export const industryTargets = [
  { label: "Fast Casual", range: "25–30%", href: "/industries/restaurant-types/fast-casual/" },
  { label: "Pizza", range: "22–28%", href: "/industries/pizza/" },
  { label: "Coffee Shop", range: "18–25%", href: "/industries/restaurant-types/coffee-shop/" },
  { label: "Bakery", range: "20–30%", href: "/industries/restaurant-types/bakery/" },
] as const;

export const defaultMenuItem = {
  name: "Burger",
  price: 14,
  ingredientCost: 4.2,
};

export type FoodCostRating = "Poor" | "Average" | "Strong";

export function getFoodCostRating(pct: number): FoodCostRating {
  if (pct >= 35) return "Poor";
  if (pct >= 28) return "Average";
  return "Strong";
}

export type MenuItemRating = "Healthy Margin" | "Low Margin Item" | "Average";

export function getMenuItemRating(foodCostPct: number): MenuItemRating {
  if (foodCostPct <= 28) return "Healthy Margin";
  if (foodCostPct >= 35) return "Low Margin Item";
  return "Average";
}

export function calculateFoodCost(inputs: FoodCostInputs) {
  const totalFoodCosts =
    inputs.ingredientCosts + inputs.beverageCosts + inputs.wasteCosts;
  const foodCostPct =
    inputs.foodSales > 0 ? (totalFoodCosts / inputs.foodSales) * 100 : 0;
  const grossProfit = inputs.foodSales - totalFoodCosts;
  const grossMarginPct =
    inputs.foodSales > 0 ? (grossProfit / inputs.foodSales) * 100 : 0;

  const annualFoodSales = inputs.foodSales * periodMultipliers[inputs.period];

  const breakdown = [
    {
      label: "Ingredient Costs",
      amount: inputs.ingredientCosts,
      pct: inputs.foodSales > 0 ? (inputs.ingredientCosts / inputs.foodSales) * 100 : 0,
      color: "var(--metric-salary)",
    },
    {
      label: "Beverage Costs",
      amount: inputs.beverageCosts,
      pct: inputs.foodSales > 0 ? (inputs.beverageCosts / inputs.foodSales) * 100 : 0,
      color: "var(--metric-margin)",
    },
    {
      label: "Waste & Spoilage",
      amount: inputs.wasteCosts,
      pct: inputs.foodSales > 0 ? (inputs.wasteCosts / inputs.foodSales) * 100 : 0,
      color: "var(--metric-valuation)",
    },
  ];

  const typeConfig =
    restaurantTypeOptions.find((t) => t.value === inputs.restaurantType) ??
    restaurantTypeOptions[1];

  const mid = (typeConfig.low + typeConfig.high) / 2;
  let comparisonMessage = "";
  if (foodCostPct < typeConfig.low) {
    comparisonMessage = `Your food cost is better than the average ${typeConfig.label.toLowerCase()} restaurant.`;
  } else if (foodCostPct <= mid) {
    comparisonMessage = `Your food cost is slightly better than the average ${typeConfig.label.toLowerCase()} restaurant.`;
  } else if (foodCostPct <= typeConfig.high) {
    comparisonMessage = `Your food cost is within the typical ${typeConfig.label.toLowerCase()} range (${typeConfig.range}) but above the midpoint.`;
  } else {
    comparisonMessage = `Your food cost is above the typical range for ${typeConfig.label.toLowerCase()} restaurants (${typeConfig.range}).`;
  }

  const wastePct =
    inputs.foodSales > 0 ? (inputs.wasteCosts / inputs.foodSales) * 100 : 0;

  const healthScores = {
    foodCost: scoreFoodCost(foodCostPct),
    waste: scoreWaste(wastePct),
    pricing: scorePricing(grossMarginPct),
  };

  const overallScore = Math.round(
    (healthScores.foodCost.score +
      healthScores.waste.score +
      healthScores.pricing.score) /
      3
  );

  return {
    totalFoodCosts,
    foodCostPct,
    grossProfit,
    grossMarginPct,
    annualFoodSales,
    breakdown,
    rating: getFoodCostRating(foodCostPct),
    comparisonMessage,
    typeConfig,
    healthScores,
    overallScore,
  };
}

function scoreFoodCost(pct: number) {
  if (pct < 28) return { label: "Excellent", score: 95 };
  if (pct < 32) return { label: "Good", score: 78 };
  if (pct < 35) return { label: "Average", score: 62 };
  return { label: "Needs Improvement", score: 40 };
}

function scoreWaste(wastePct: number) {
  if (wastePct < 2) return { label: "Excellent", score: 92 };
  if (wastePct < 4) return { label: "Average", score: 68 };
  return { label: "High", score: 45 };
}

function scorePricing(grossMarginPct: number) {
  if (grossMarginPct >= 72) return { label: "Excellent", score: 90 };
  if (grossMarginPct >= 65) return { label: "Good", score: 75 };
  return { label: "Average", score: 58 };
}

export function calculateMenuItem(price: number, ingredientCost: number) {
  const foodCostPct = price > 0 ? (ingredientCost / price) * 100 : 0;
  return {
    foodCostPct,
    rating: getMenuItemRating(foodCostPct),
    grossProfit: price - ingredientCost,
  };
}

export function simulateFoodCostReduction(
  annualFoodSales: number,
  reductionPct: number
) {
  return Math.round(annualFoodSales * (reductionPct / 100));
}

export function simulateWasteReduction(
  annualFoodSales: number,
  currentWastePct: number,
  wasteReductionPct: number
) {
  const currentWasteDollars = annualFoodSales * (currentWastePct / 100);
  return Math.round(currentWasteDollars * (wasteReductionPct / 100));
}

export const relatedCalculators = [
  {
    label: "Restaurant Profit Margin Calculator",
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
  {
    label: "Break-even Calculator",
    href: "/calculators/restaurant-break-even/",
    description: "Daily customer targets and break-even revenue.",
  },
] as const;

export const foodCostFaqs = [
  {
    question: "What is a good food cost percentage?",
    answer:
      "A good food cost percentage depends on your concept. Coffee shops target 18–25%, pizza 22–28%, fast food 25–30%, casual dining 28–35%, and fine dining 30–40%. Below 28% is generally strong for most full-service concepts. Above 35% signals margin pressure unless your pricing power supports it.",
  },
  {
    question: "How do restaurants calculate food cost?",
    answer:
      "Restaurant food cost percentage = Total Cost of Goods Sold (ingredients + beverages + waste) ÷ Food Sales Revenue × 100. Track this weekly or monthly using invoices, inventory counts, and POS food sales data. Exclude labor, rent, and paper goods — those are separate line items.",
  },
  {
    question: "What food cost should a restaurant target?",
    answer:
      "Most independent restaurants target 28–32% total food cost as a blended average across the menu. High-margin items (pasta, salads) offset premium proteins. The goal is a weighted average that leaves 65–72% gross profit on food before labor and overhead.",
  },
  {
    question: "How can restaurants reduce food costs?",
    answer:
      "Top levers: negotiate vendor pricing quarterly, standardize recipes with exact portion sizes, reduce waste through FIFO inventory rotation, adjust menu mix toward higher-margin items, and audit comps/voids. A 1% food cost reduction on $1M annual food sales adds $10,000 directly to profit.",
  },
  {
    question: "Does food cost include labor?",
    answer:
      "No. Food cost (COGS) covers ingredients, beverages, and waste only. Labor is tracked separately as a percentage of revenue — typically 28–32% for full-service restaurants. Prime cost combines food cost + labor and should stay under 62–65% of revenue.",
  },
] as const;

export { formatCurrency } from "@/lib/numbers";

export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`;
}
