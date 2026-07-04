import {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  dessertBusinessBenchmarkMatrix,
  foodBenchmarkRankings,
  hubFaqs as industryFaqs,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  iceCreamShopMeta,
  marginMetrics,
  marginTiers,
  menuMixBenchmarks,
  operatingMetrics,
  ownerEconomicsCards,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  salesMetrics,
  seasonalPerformance,
  startupCostBreakdown,
  startupCostTotal,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/ice-cream-shop";
import { mergeProfitabilityFaqs } from "@/lib/industries/profitability-seo";
import { iceCreamShopProfitabilitySeo } from "@/lib/industries/profitability-seo-data";

export const profitabilitySeo = iceCreamShopProfitabilitySeo;

export const hubFaqs = mergeProfitabilityFaqs(profitabilitySeo.faqs, industryFaqs);


export const hubMeta = {
  slug: iceCreamShopMeta.slug,
  parentSlug: "",
  parentLabel: "Industries",
  title: iceCreamShopMeta.title,
  subtitle: iceCreamShopMeta.subtitle,
  dataVintage: iceCreamShopMeta.dataVintage,
  sampleSize: iceCreamShopMeta.sampleSize,
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Annual Revenue",
    value: "$720K",
    sublabel: "median annual revenue",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Net Profit Margin",
    value: "17%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Salary",
    value: "$105K",
    sublabel: "median compensation",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Business Valuation",
    value: "2.8× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
  {
    id: "ticket",
    label: "Average Ticket Size",
    value: "$8.40",
    sublabel: "median per transaction",
    href: "#sales-metrics",
    accent: "metric-revenue",
  },
] as const;

export const businessScorecard = {
  industryName: "Ice Cream Shop",
  items: [
    { label: "Profitability", rating: 3 },
    { label: "Scalability", rating: 4 },
    { label: "Seasonality", rating: 5 },
    { label: "Recurring Revenue", rating: 1 },
    { label: "Startup Investment", rating: 3, higherIsWorse: true },
    { label: "Franchise Potential", rating: 5 },
    { label: "Exit Potential", rating: 3 },
  ],
} as const;

export const searchQuickLinks = [
  { label: "Coffee Shop", href: "/industries/food-beverage/coffee-shop/" },
  { label: "Bakery", href: "/industries/food-beverage/bakery/" },
  { label: "Frozen Yogurt Shop", href: "/industries/frozen-yogurt-shop/", comingSoon: true },
  { label: "Dessert Cafe", href: "/industries/dessert-cafe/", comingSoon: true },
  { label: "Bubble Tea Shop", href: "/industries/bubble-tea-shop/", comingSoon: true },
] as const;

export const hubSectionNav = [
  { id: "industry-insights", label: "Insights" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "sales-metrics", label: "Sales" },
  { id: "seasonal-performance", label: "Seasonality" },
  { id: "menu-mix", label: "Menu Mix" },
  { id: "profitability", label: "Margins" },
  { id: "startup-costs", label: "Startup" },
  { id: "owner-economics", label: "Owner Pay" },
  { id: "valuation", label: "Valuation" },
  { id: "top-performers", label: "Top Performers" },
  { id: "operating-metrics", label: "Operations" },
  { id: "opportunities-risks", label: "Outlook" },
  { id: "business-quality", label: "Quality" },
  { id: "comparisons", label: "Compare" },
  { id: "rankings", label: "Rankings" },
  { id: "dessert-matrix", label: "Dessert Matrix" },
  { id: "calculators", label: "Calculators" },
  { id: "faqs", label: "FAQs" },
] as const;

export const hubComparisons = [
  { label: "Ice Cream Shop vs Frozen Yogurt", href: "/comparisons/ice-cream-shop-vs-frozen-yogurt/" },
  { label: "Ice Cream Shop vs Coffee Shop", href: "/comparisons/ice-cream-shop-vs-coffee-shop/" },
  { label: "Ice Cream Shop vs Bakery", href: "/comparisons/ice-cream-shop-vs-bakery/" },
  { label: "Ice Cream Shop vs Dessert Cafe", href: "/comparisons/ice-cream-shop-vs-dessert-cafe/" },
  { label: "Ice Cream Shop vs Bubble Tea Shop", href: "/comparisons/ice-cream-shop-vs-bubble-tea/" },
] as const;

export const hubCalculators = [
  {
    label: "Ice Cream Shop Startup Cost Calculator",
    description: "Estimate total launch investment — equipment, freezers, buildout, and working capital.",
    href: "/calculators/ice-cream-shop-startup-cost/",
  },
  {
    label: "Ice Cream Shop Profit Calculator",
    description: "Model net margin from revenue, food cost, labor, and rent.",
    href: "/calculators/ice-cream-shop-profit-margin/",
  },
  {
    label: "Ice Cream Shop Valuation Calculator",
    description: "Estimate shop value using SDE multiples and seasonal revenue quality.",
    href: "/calculators/ice-cream-shop-valuation/",
  },
  {
    label: "Break-even Calculator",
    description: "Find daily customers and revenue needed to cover fixed costs.",
    href: "/calculators/ice-cream-shop-break-even/",
  },
  {
    label: "Food Cost Calculator",
    description: "Benchmark ingredient and dairy cost as a percentage of revenue.",
    href: "/calculators/ice-cream-shop-food-cost/",
  },
  {
    label: "Labor Cost Calculator",
    description: "Model labor percentage for peak and off-season staffing.",
    href: "/calculators/ice-cream-shop-labor-cost/",
  },
  {
    label: "Average Ticket Calculator",
    description: "Project revenue impact from ticket size and upsell mix.",
    href: "/calculators/ice-cream-shop-average-ticket/",
  },
] as const;

export const relatedFoodIndustries = [
  { label: "Coffee Shop", href: "/industries/food-beverage/coffee-shop/" },
  { label: "Bakery", href: "/industries/food-beverage/bakery/" },
  { label: "Dessert Cafe", href: "/industries/dessert-cafe/", comingSoon: true },
  { label: "Frozen Yogurt Shop", href: "/industries/frozen-yogurt-shop/", comingSoon: true },
  { label: "Bubble Tea Shop", href: "/industries/bubble-tea-shop/", comingSoon: true },
  { label: "Juice Bar", href: "/industries/juice-bar/", comingSoon: true },
  { label: "Donut Shop", href: "/industries/donut-shop/", comingSoon: true },
] as const;

export {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  dessertBusinessBenchmarkMatrix,
  foodBenchmarkRankings,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  marginMetrics,
  marginTiers,
  menuMixBenchmarks,
  operatingMetrics,
  ownerEconomicsCards,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  salesMetrics,
  seasonalPerformance,
  startupCostBreakdown,
  startupCostTotal,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
};
