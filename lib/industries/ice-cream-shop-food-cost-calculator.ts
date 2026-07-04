import {
  iceCreamShopDataLinks,
  iceCreamShopIndustryAverages,
  formatCurrency,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/ice-cream-shop-calculators-shared";

export const meta = {
  title: "Ice Cream Shop Food Cost Calculator & Dairy Benchmark Tool",
  shortTitle: "Ice Cream Shop Food Cost Calculator",
  subtitle:
    "Calculate dairy and ingredient costs as a share of sales and compare against ice cream shop benchmarks.",
  description:
    "Free ice cream shop food cost calculator with industry benchmarks. Target 24–32% total food cost for independent shops.",
};

export const introContent = {
  lead: "Food cost — dairy, mix-ins, toppings, and waste — directly determines ice cream shop margin. This calculator benchmarks your costs and models profit impact from improvements.",
  bullets: [
    "Food Cost % = (Dairy + Mix-ins + Toppings + Waste) ÷ Food Sales Revenue",
    "Target range for ice cream shops: 24–32% of revenue",
    "A 1% food cost reduction on $720K in sales adds $7,200 straight to profit",
  ],
  audience:
    "Built for ice cream shop owners, managers, and buyers evaluating cost structure.",
};

export type FoodCostInputs = {
  foodSales: number;
  dairyCosts: number;
  mixInCosts: number;
  toppingCosts: number;
  wasteCosts: number;
};

export const defaultInputs: FoodCostInputs = {
  foodSales: 60000,
  dairyCosts: 14400,
  mixInCosts: 1800,
  toppingCosts: 1200,
  wasteCosts: 600,
};

export const benchmarkBands = [
  { label: "Strong", range: "<26%" },
  { label: "Average", range: "26–32%" },
  { label: "High", range: "32%+" },
] as const;

export function getFoodCostRating(pct: number): "Strong" | "Average" | "High" {
  if (pct < 26) return "Strong";
  if (pct <= 32) return "Average";
  return "High";
}

export function calculateFoodCost(inputs: FoodCostInputs) {
  const totalFoodCosts = inputs.dairyCosts + inputs.mixInCosts + inputs.toppingCosts + inputs.wasteCosts;
  const foodCostPct = inputs.foodSales > 0 ? (totalFoodCosts / inputs.foodSales) * 100 : 0;
  const grossProfit = inputs.foodSales - totalFoodCosts;
  const grossMarginPct = inputs.foodSales > 0 ? (grossProfit / inputs.foodSales) * 100 : 0;
  const annualFoodSales = inputs.foodSales * 12;
  const annualSavingsPerPoint = annualFoodSales * 0.01;

  const breakdown = [
    { label: "Dairy & Base", amount: inputs.dairyCosts, pct: inputs.foodSales > 0 ? (inputs.dairyCosts / inputs.foodSales) * 100 : 0 },
    { label: "Mix-ins", amount: inputs.mixInCosts, pct: inputs.foodSales > 0 ? (inputs.mixInCosts / inputs.foodSales) * 100 : 0 },
    { label: "Toppings", amount: inputs.toppingCosts, pct: inputs.foodSales > 0 ? (inputs.toppingCosts / inputs.foodSales) * 100 : 0 },
    { label: "Waste", amount: inputs.wasteCosts, pct: inputs.foodSales > 0 ? (inputs.wasteCosts / inputs.foodSales) * 100 : 0 },
  ];

  return {
    totalFoodCosts,
    foodCostPct,
    grossProfit,
    grossMarginPct,
    rating: getFoodCostRating(foodCostPct),
    breakdown,
    annualSavingsPerPoint,
  };
}

export const faqs = [
  {
    question: "What is a good food cost for an ice cream shop?",
    answer:
      "A healthy ice cream shop total food cost is 24–32% of revenue. Below 26% is strong; above 32% signals portion drift, waste, or pricing issues. Rising dairy prices are a key 2025–2026 risk.",
  },
  {
    question: "How is ice cream shop food cost different from restaurants?",
    answer:
      "Ice cream shops have higher dairy concentration and topping waste. Unlike full restaurants, labor is often lower but seasonality creates inventory spoilage risk in shoulder months.",
  },
  {
    question: "How much does a 1% food cost reduction save?",
    answer:
      "On $720K annual revenue, each 1% reduction in food cost adds approximately $7,200 to net profit — often equivalent to 60+ extra customers per day at median ticket.",
  },
  {
    question: "What drives high food cost in ice cream shops?",
    answer:
      "Over-portioning scoops, premium mix-in waste, unsold seasonal flavors, and rising cream/butter prices. Tight portion standards and vendor contracts are the fastest fixes.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/ice-cream-shop-food-cost/");
export { iceCreamShopIndustryAverages, iceCreamShopDataLinks, formatCurrency, formatPercent };
