export const iceCreamShopHubHref = "/industries/ice-cream-shop/";

export const iceCreamShopIndustryAverages = {
  revenue: 720000,
  marginPct: 17,
  marginRange: "11–20%",
  foodCostPct: 28,
  laborCostPct: 26,
  rentPct: 10,
  marketingPct: 3,
  otherPct: 16,
  averageTicket: 8.4,
  customersPerDay: 280,
  daysOpenPerYear: 305,
  sdeMultiple: 2.8,
  startupCostRange: "$110K – $320K",
};

export const allIceCreamShopCalculators = [
  {
    label: "Startup Cost Calculator",
    href: "/calculators/ice-cream-shop-startup-cost/",
    description: "Estimate total launch investment for equipment, freezers, and buildout.",
  },
  {
    label: "Profit Margin Calculator",
    href: "/calculators/ice-cream-shop-profit-margin/",
    description: "Calculate net margin from revenue, food cost, labor, and rent.",
  },
  {
    label: "Valuation Calculator",
    href: "/calculators/ice-cream-shop-valuation/",
    description: "Estimate shop value using SDE multiples.",
  },
  {
    label: "Break-Even Calculator",
    href: "/calculators/ice-cream-shop-break-even/",
    description: "Find daily customers and revenue needed to break even.",
  },
  {
    label: "Food Cost Calculator",
    href: "/calculators/ice-cream-shop-food-cost/",
    description: "Benchmark dairy and ingredient cost as a percentage of sales.",
  },
  {
    label: "Labor Cost Calculator",
    href: "/calculators/ice-cream-shop-labor-cost/",
    description: "Model labor percentage for peak and off-season staffing.",
  },
  {
    label: "Average Ticket Calculator",
    href: "/calculators/ice-cream-shop-average-ticket/",
    description: "Project revenue impact from ticket size and upsell mix.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allIceCreamShopCalculators.filter((c) => c.href !== excludeHref);
}

export const iceCreamShopDataLinks = [
  {
    label: "Ice Cream Shop Revenue Benchmarks",
    href: "/industries/ice-cream-shop/#revenue-benchmark",
    description: "Median $720K — revenue percentiles and seasonal patterns.",
  },
  {
    label: "Ice Cream Shop Owner Salary",
    href: "/industries/ice-cream-shop/#owner-economics",
    description: "What ice cream shop owners earn by scale.",
  },
  {
    label: "Ice Cream Shop Valuation Multiples",
    href: "/industries/ice-cream-shop/#valuation",
    description: "SDE and revenue multiples for shop sales.",
  },
  {
    label: "Ice Cream Shop Startup Costs",
    href: "/industries/ice-cream-shop/#startup-costs",
    description: "Typical opening costs range $110K–$320K.",
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
