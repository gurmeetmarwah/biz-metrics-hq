import {
  bakeryDataLinks,
  bakeryIndustryAverages,
  formatCurrency,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/bakery-calculators-shared";

export const meta = {
  title: "Bakery Food Cost Calculator & Ingredient Benchmark Tool",
  shortTitle: "Bakery Food Cost Calculator",
  subtitle:
    "Calculate ingredient and packaging costs as a share of sales and compare against bakery benchmarks.",
  description:
    "Free bakery food cost calculator with industry benchmarks, cost breakdown, and quartile comparison. Target 25–32% total food cost for independent bakeries.",
};

export const introContent = {
  lead: "Food cost is the metric bakery owners track weekly — ingredients, packaging, and waste directly determine margin. This calculator benchmarks your costs against independent bakery targets and models profit impact from improvements.",
  bullets: [
    "Food Cost % = (Ingredients + Packaging + Waste) ÷ Food Sales Revenue",
    "Target range for bakeries: 25–32% of revenue",
    "A 1% food cost reduction on $450K in sales adds $4,500 straight to profit",
  ],
  audience:
    "Built for bakery owners, production managers, and buyers evaluating cost structure.",
};

export type FoodCostInputs = {
  foodSales: number;
  ingredientCosts: number;
  packagingCosts: number;
  wasteCosts: number;
};

export const defaultInputs: FoodCostInputs = {
  foodSales: 37500,
  ingredientCosts: 10500,
  packagingCosts: 1125,
  wasteCosts: 750,
};

export const benchmarkBands = [
  { label: "Strong", range: "<28%", min: 0, max: 28 },
  { label: "Average", range: "28–32%", min: 28, max: 32 },
  { label: "High", range: "32%+", min: 32, max: 100 },
] as const;

export type FoodCostRating = "Strong" | "Average" | "High";

export function getFoodCostRating(pct: number): FoodCostRating {
  if (pct < 28) return "Strong";
  if (pct <= 32) return "Average";
  return "High";
}

export function calculateFoodCost(inputs: FoodCostInputs) {
  const totalFoodCosts = inputs.ingredientCosts + inputs.packagingCosts + inputs.wasteCosts;
  const foodCostPct = inputs.foodSales > 0 ? (totalFoodCosts / inputs.foodSales) * 100 : 0;
  const grossProfit = inputs.foodSales - totalFoodCosts;
  const grossMarginPct = inputs.foodSales > 0 ? (grossProfit / inputs.foodSales) * 100 : 0;
  const annualFoodSales = inputs.foodSales * 12;
  const annualSavingsPerPoint = annualFoodSales * 0.01;

  const breakdown = [
    { label: "Ingredients", amount: inputs.ingredientCosts, pct: inputs.foodSales > 0 ? (inputs.ingredientCosts / inputs.foodSales) * 100 : 0 },
    { label: "Packaging", amount: inputs.packagingCosts, pct: inputs.foodSales > 0 ? (inputs.packagingCosts / inputs.foodSales) * 100 : 0 },
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
    question: "What is a good food cost for a bakery?",
    answer:
      "A healthy bakery total food cost (ingredients + packaging + waste) is 25–32% of revenue. Below 28% is strong; above 32% signals waste, over-portioning, or pricing issues. Custom cake programs often run lower ingredient percentages due to premium pricing.",
  },
  {
    question: "How is bakery food cost different from restaurants?",
    answer:
      "Bakeries typically run higher ingredient percentages (25–32%) than coffee shops (18–25%) due to flour, dairy, and perishable inputs. However, bakeries avoid beverage COGS and often achieve strong gross margins on custom cakes and wedding orders.",
  },
  {
    question: "How can bakeries reduce food cost?",
    answer:
      "Track waste daily, standardize recipes with exact yields, negotiate bulk flour and dairy contracts, optimize production batches to minimize spoilage, and price custom orders to reflect true ingredient and labor cost.",
  },
  {
    question: "Should packaging be included in food cost?",
    answer:
      "Yes — boxes, bags, and labels are part of product COGS for bakeries, typically 2–4% of revenue. Including packaging gives a true picture of product-level profitability.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/bakery-food-cost/");
export { bakeryIndustryAverages, bakeryDataLinks, formatCurrency, formatPercent };
