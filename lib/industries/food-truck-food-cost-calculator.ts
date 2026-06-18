import {
  foodTruckDataLinks,
  foodTruckIndustryAverages,
  formatCurrency,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/food-truck-calculators-shared";

export const meta = {
  title: "Food Truck Food Cost Calculator & COGS Benchmark Tool",
  shortTitle: "Food Truck Food Cost Calculator",
  subtitle:
    "Calculate food and supply costs as a share of sales and compare against food truck benchmarks.",
  description:
    "Free food truck food cost calculator with industry benchmarks, cost breakdown, and quartile comparison. Target 28–35% total food cost for mobile food operators.",
};

export const introContent = {
  lead: "Food cost is the metric food truck owners track weekly — ingredients, supplies, and waste directly determine margin on every ticket. This calculator benchmarks your costs against mobile food targets and models profit impact from improvements.",
  bullets: [
    "Food Cost % = (Food Costs + Supplies + Waste) ÷ Food Sales Revenue",
    "Target range for food trucks: 28–35% of revenue",
    "A 1% food cost reduction on $280K in sales adds $2,800 straight to profit",
  ],
  audience:
    "Built for food truck owners, commissary operators, and buyers evaluating cost structure.",
};

export type FoodCostInputs = {
  foodSales: number;
  foodCosts: number;
  suppliesCosts: number;
  wasteCosts: number;
};

export const defaultInputs: FoodCostInputs = {
  foodSales: 22000,
  foodCosts: 6160,
  suppliesCosts: 660,
  wasteCosts: 440,
};

export const benchmarkBands = [
  { label: "Strong", range: "<30%", min: 0, max: 30 },
  { label: "Average", range: "30–35%", min: 30, max: 35 },
  { label: "High", range: "35%+", min: 35, max: 100 },
] as const;

export type FoodCostRating = "Strong" | "Average" | "High";

export function getFoodCostRating(pct: number): FoodCostRating {
  if (pct < 30) return "Strong";
  if (pct <= 35) return "Average";
  return "High";
}

export function calculateFoodCost(inputs: FoodCostInputs) {
  const totalFoodCosts = inputs.foodCosts + inputs.suppliesCosts + inputs.wasteCosts;
  const foodCostPct = inputs.foodSales > 0 ? (totalFoodCosts / inputs.foodSales) * 100 : 0;
  const grossProfit = inputs.foodSales - totalFoodCosts;
  const grossMarginPct = inputs.foodSales > 0 ? (grossProfit / inputs.foodSales) * 100 : 0;
  const annualFoodSales = inputs.foodSales * 12;
  const annualSavingsPerPoint = annualFoodSales * 0.01;

  const breakdown = [
    { label: "Food Costs", amount: inputs.foodCosts, pct: inputs.foodSales > 0 ? (inputs.foodCosts / inputs.foodSales) * 100 : 0 },
    { label: "Supplies", amount: inputs.suppliesCosts, pct: inputs.foodSales > 0 ? (inputs.suppliesCosts / inputs.foodSales) * 100 : 0 },
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
    question: "What is a good food cost for a food truck?",
    answer:
      "A healthy food truck total food cost (ingredients + supplies + waste) is 28–35% of revenue. Below 30% is strong; above 35% signals over-portioning, menu pricing issues, or prep waste. Event menus with premium pricing often run lower percentages.",
  },
  {
    question: "How is food truck food cost different from restaurants?",
    answer:
      "Food trucks run similar food cost percentages (28–35%) but face tighter storage and prep constraints. Commissary prep and batch cooking help control costs. Trucks without commissary access often see higher waste from limited refrigeration.",
  },
  {
    question: "How can food trucks reduce food cost?",
    answer:
      "Standardize recipes with exact yields, prep in commissary batches, negotiate vendor contracts for high-volume items, track waste daily, and price catering menus to reflect true food and labor cost per guest.",
  },
  {
    question: "Should supplies be included in food cost?",
    answer:
      "Yes — gloves, napkins, containers, and fuel for generators are part of product COGS for food trucks, typically 2–4% of revenue. Including supplies gives a true picture of product-level profitability.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/food-truck-food-cost/");
export { foodTruckIndustryAverages, foodTruckDataLinks, formatCurrency, formatPercent };
