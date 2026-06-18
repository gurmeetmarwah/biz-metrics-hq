export const coffeeShopHubHref = "/industries/food-beverage/coffee-shop/";

export const coffeeShopIndustryAverages = {
  revenue: 550000,
  marginPct: 13,
  marginRange: "10–18%",
  ingredientCostPct: 22,
  laborCostPct: 32,
  rentPct: 10,
  marketingPct: 3,
  otherPct: 20,
  averageTicket: 6.5,
  customersPerDay: 280,
  daysOpenPerYear: 300,
  sdeMultiple: 3.0,
  startupCostRange: "$80K – $400K",
};

export const allCoffeeShopCalculators = [
  {
    label: "Profit Margin Calculator",
    href: "/calculators/coffee-shop-profit-margin/",
    description: "Calculate net margin and compare against cafe benchmarks.",
  },
  {
    label: "Startup Cost Calculator",
    href: "/calculators/coffee-shop-startup-cost/",
    description: "Estimate total investment to open your coffee shop.",
  },
  {
    label: "Valuation Calculator",
    href: "/calculators/coffee-shop-valuation/",
    description: "Estimate business value using SDE multiples.",
  },
  {
    label: "Break-Even Calculator",
    href: "/calculators/coffee-shop-break-even/",
    description: "Find daily customers and revenue needed to break even.",
  },
  {
    label: "Labor Cost Calculator",
    href: "/calculators/coffee-shop-labor-cost/",
    description: "Calculate staffing costs as a share of revenue.",
  },
  {
    label: "Revenue Calculator",
    href: "/calculators/coffee-shop-revenue/",
    description: "Estimate annual revenue from daily volume and ticket size.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allCoffeeShopCalculators.filter((c) => c.href !== excludeHref);
}

export const coffeeShopDataLinks = [
  {
    label: "Coffee Shop Revenue Benchmarks",
    href: "/industries/food-beverage/coffee-shop/#revenue-benchmark",
    description: "Median $550K — revenue by location and concept.",
  },
  {
    label: "Coffee Shop Owner Salary",
    href: "/industries/food-beverage/coffee-shop/#owner-income",
    description: "What owner-operators earn by cafe type.",
  },
  {
    label: "Coffee Shop Valuation Multiples",
    href: "/industries/food-beverage/coffee-shop/#valuation",
    description: "SDE and revenue multiples for cafe sales.",
  },
  {
    label: "Coffee Shop Startup Costs",
    href: "/industries/food-beverage/coffee-shop/#startup-costs",
    description: "Typical opening costs range $80K–$400K.",
  },
] as const;

export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`;
}

export function formatNumber(value: number, decimals = 0): string {
  return value.toLocaleString("en-US", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
}

export { formatCurrency } from "@/lib/numbers";
