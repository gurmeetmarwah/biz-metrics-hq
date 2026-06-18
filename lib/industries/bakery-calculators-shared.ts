export const bakeryHubHref = "/industries/food-beverage/bakery/";

export const bakeryIndustryAverages = {
  revenue: 450000,
  marginPct: 12,
  marginRange: "8–18%",
  ingredientCostPct: 28,
  laborCostPct: 32,
  rentPct: 9,
  packagingPct: 3,
  marketingPct: 3,
  otherPct: 15,
  averageOrder: 25,
  ordersPerDay: 60,
  daysOpenPerYear: 300,
  sdeMultiple: 2.8,
  startupCostRange: "$50K – $300K",
};

export const allBakeryCalculators = [
  {
    label: "Profit Margin Calculator",
    href: "/calculators/bakery-profit-margin/",
    description: "Calculate net margin and compare against bakery benchmarks.",
  },
  {
    label: "Startup Cost Calculator",
    href: "/calculators/bakery-startup-cost/",
    description: "Estimate total investment to open your bakery.",
  },
  {
    label: "Valuation Calculator",
    href: "/calculators/bakery-valuation/",
    description: "Estimate business value using SDE multiples.",
  },
  {
    label: "Break-Even Calculator",
    href: "/calculators/bakery-break-even/",
    description: "Find daily orders and revenue needed to break even.",
  },
  {
    label: "Food Cost Calculator",
    href: "/calculators/bakery-food-cost/",
    description: "Calculate ingredient and packaging costs as a share of sales.",
  },
  {
    label: "Revenue Calculator",
    href: "/calculators/bakery-revenue/",
    description: "Estimate annual revenue from daily orders and average ticket.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allBakeryCalculators.filter((c) => c.href !== excludeHref);
}

export const bakeryDataLinks = [
  {
    label: "Bakery Revenue Benchmarks",
    href: "/industries/food-beverage/bakery/#revenue-benchmark",
    description: "Median $450K — revenue by bakery type and location.",
  },
  {
    label: "Bakery Owner Salary",
    href: "/industries/food-beverage/bakery/#owner-economics",
    description: "What bakery owners earn by concept and scale.",
  },
  {
    label: "Bakery Valuation Multiples",
    href: "/industries/food-beverage/bakery/#valuation",
    description: "SDE and revenue multiples for bakery sales.",
  },
  {
    label: "Bakery Startup Costs",
    href: "/industries/food-beverage/bakery/#startup-costs",
    description: "Typical opening costs range $50K–$300K.",
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
