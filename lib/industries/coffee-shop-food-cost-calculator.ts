import {
  coffeeShopDataLinks,
  coffeeShopIndustryAverages,
  formatCurrency,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/coffee-shop-calculators-shared";

export const meta = {
  title: "Coffee Shop Food Cost Calculator & Ingredient Benchmark Tool",
  shortTitle: "Coffee Shop Food Cost Calculator",
  subtitle:
    "Calculate coffee, milk, pastry, and waste costs as a share of sales and compare against cafe food-cost benchmarks.",
  description:
    "Free coffee shop food cost calculator with industry benchmarks. Target 18–25% total food & beverage cost for independent cafes and coffee franchises.",
};

export const introContent = {
  lead: "Food and beverage cost — beans, milk, syrups, pastries, and waste — is the second-largest cost lever after labor for most coffee shops. This calculator benchmarks your COGS and models profit impact from improvements.",
  bullets: [
    "Food Cost % = (Coffee + Dairy + Food/Pastry + Waste) ÷ Sales Revenue",
    "Target range for coffee shops: 18–25% of revenue",
    "A 1% food cost reduction on $550K in sales adds $5,500 straight to profit",
  ],
  audience:
    "Built for coffee shop owners, franchise operators, and buyers evaluating beverage and food cost structure.",
};

export type CoffeeShopFoodCostInputs = {
  foodSales: number;
  coffeeBeanCosts: number;
  dairyCosts: number;
  pastryFoodCosts: number;
  wasteCosts: number;
};

export const defaultInputs: CoffeeShopFoodCostInputs = {
  foodSales: 45800,
  coffeeBeanCosts: 4200,
  dairyCosts: 3800,
  pastryFoodCosts: 1800,
  wasteCosts: 500,
};

export const benchmarkBands = [
  { label: "Strong", range: "<20%" },
  { label: "Average", range: "20–25%" },
  { label: "High", range: "25%+" },
] as const;

export function getFoodCostRating(pct: number): "Strong" | "Average" | "High" {
  if (pct < 20) return "Strong";
  if (pct <= 25) return "Average";
  return "High";
}

export function calculateCoffeeShopFoodCost(inputs: CoffeeShopFoodCostInputs) {
  const totalFoodCosts =
    inputs.coffeeBeanCosts + inputs.dairyCosts + inputs.pastryFoodCosts + inputs.wasteCosts;
  const foodCostPct = inputs.foodSales > 0 ? (totalFoodCosts / inputs.foodSales) * 100 : 0;
  const grossProfit = inputs.foodSales - totalFoodCosts;
  const grossMarginPct = inputs.foodSales > 0 ? (grossProfit / inputs.foodSales) * 100 : 0;
  const annualFoodSales = inputs.foodSales * 12;
  const annualSavingsPerPoint = annualFoodSales * 0.01;

  const breakdown = [
    {
      label: "Coffee & Beans",
      amount: inputs.coffeeBeanCosts,
      pct: inputs.foodSales > 0 ? (inputs.coffeeBeanCosts / inputs.foodSales) * 100 : 0,
    },
    {
      label: "Dairy & Alternatives",
      amount: inputs.dairyCosts,
      pct: inputs.foodSales > 0 ? (inputs.dairyCosts / inputs.foodSales) * 100 : 0,
    },
    {
      label: "Pastry & Food",
      amount: inputs.pastryFoodCosts,
      pct: inputs.foodSales > 0 ? (inputs.pastryFoodCosts / inputs.foodSales) * 100 : 0,
    },
    {
      label: "Waste & Spoilage",
      amount: inputs.wasteCosts,
      pct: inputs.foodSales > 0 ? (inputs.wasteCosts / inputs.foodSales) * 100 : 0,
    },
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
    question: "What is a good food cost for a coffee shop?",
    answer:
      "A healthy coffee shop food and beverage cost is typically 18–25% of revenue. Below 20% is strong for beverage-heavy cafes; above 25% often signals over-portioning, dairy waste, pastry spoilage, or underpricing. Franchise operators should also compare against approved supplier cost sheets in the FDD.",
  },
  {
    question: "How is coffee shop food cost different from restaurants?",
    answer:
      "Coffee shops usually run lower total COGS than full restaurants because beverage gross margins are high, but dairy, syrups, and pastry programs can push costs up quickly. Labor often exceeds food cost as the #1 expense — still, a 2–3 point COGS leak compounds every month.",
  },
  {
    question: "How much does a 1% food cost reduction save?",
    answer:
      "On $550K annual revenue, each 1% reduction in food cost adds about $5,500 to profit. On a $1.1M drive-thru coffee franchise, that same 1% is roughly $11,000 per year.",
  },
  {
    question: "What drives high food cost in coffee shops?",
    answer:
      "Over-foamed milk waste, free remakes, pastry spoilage, untracked comps, and premium syrup/milk alternatives without ticket recovery. Portion standards, waste logs, and recipe costing are the fastest fixes.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/coffee-shop-food-cost/");
export { coffeeShopIndustryAverages, coffeeShopDataLinks, formatCurrency, formatPercent };
