export const foodTruckHubHref = "/industries/food-beverage/food-truck/";

export const foodTruckIndustryAverages = {
  revenue: 280000,
  marginPct: 14,
  marginRange: "12–18%",
  foodCostPct: 30,
  laborCostPct: 24,
  commissaryPct: 2,
  fuelPct: 5,
  marketingPct: 3,
  otherPct: 22,
  averageTicket: 14,
  customersPerDay: 75,
  daysOpenPerYear: 268,
  sdeMultiple: 2.25,
  startupCostRange: "$60K – $150K",
};

export const allFoodTruckCalculators = [
  {
    label: "Profit Margin Calculator",
    href: "/calculators/food-truck-profit-margin/",
    description: "Calculate net margin and compare against food truck benchmarks.",
  },
  {
    label: "Startup Cost Calculator",
    href: "/calculators/food-truck-startup-cost/",
    description: "Estimate total investment to launch your food truck.",
  },
  {
    label: "Valuation Calculator",
    href: "/calculators/food-truck-valuation/",
    description: "Estimate business value using SDE multiples.",
  },
  {
    label: "Break-Even Calculator",
    href: "/calculators/food-truck-break-even/",
    description: "Find daily customers and revenue needed to break even.",
  },
  {
    label: "Food Cost Calculator",
    href: "/calculators/food-truck-food-cost/",
    description: "Calculate food costs as a share of sales.",
  },
  {
    label: "Revenue Calculator",
    href: "/calculators/food-truck-revenue/",
    description: "Estimate annual revenue from daily volume and events.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allFoodTruckCalculators.filter((c) => c.href !== excludeHref);
}

export const foodTruckDataLinks = [
  {
    label: "Food Truck Revenue Benchmarks",
    href: "/industries/food-beverage/food-truck/#revenue-benchmark",
    description: "Median $280K — revenue by concept and location.",
  },
  {
    label: "Food Truck Owner Salary",
    href: "/industries/food-beverage/food-truck/#owner-economics",
    description: "What food truck owners earn by operating model.",
  },
  {
    label: "Food Truck Valuation Multiples",
    href: "/industries/food-beverage/food-truck/#valuation",
    description: "SDE and revenue multiples for mobile food businesses.",
  },
  {
    label: "Food Truck Startup Costs",
    href: "/industries/food-beverage/food-truck/#startup-costs",
    description: "Typical opening costs range $60K–$150K.",
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
