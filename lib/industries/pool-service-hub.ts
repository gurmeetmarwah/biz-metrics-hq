import {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  customerMetrics,
  homeBenchmarkRankings,
  homeServiceRouteEconomicsMatrix,
  hubFaqs as industryFaqs,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  marginMetrics,
  marginTiers,
  operatingMetrics,
  ownerEconomicsCards,
  poolServiceMeta,
  recurringRevenueMetrics,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  routeEfficiencyMetrics,
  startupCostBreakdown,
  startupCostTotal,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/pool-service";
import { mergeProfitabilityFaqs } from "@/lib/industries/profitability-seo";
import { poolServiceProfitabilitySeo } from "@/lib/industries/profitability-seo-data";

export const profitabilitySeo = poolServiceProfitabilitySeo;

export const hubFaqs = mergeProfitabilityFaqs(profitabilitySeo.faqs, industryFaqs);


export const hubMeta = {
  slug: poolServiceMeta.slug,
  parentSlug: "",
  parentLabel: "Industries",
  title: poolServiceMeta.title,
  subtitle: poolServiceMeta.subtitle,
  dataVintage: poolServiceMeta.dataVintage,
  sampleSize: poolServiceMeta.sampleSize,
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Annual Revenue",
    value: "$950K",
    sublabel: "median annual revenue",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Net Profit Margin",
    value: "22%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Salary",
    value: "$135K",
    sublabel: "median compensation",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Business Valuation",
    value: "3.6× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
  {
    id: "mrr",
    label: "Monthly Recurring Revenue",
    value: "$58K",
    sublabel: "median MRR",
    href: "#recurring-revenue",
    accent: "metric-revenue",
  },
] as const;

export const businessScorecard = {
  industryName: "Pool Service",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Recurring Revenue", rating: 5 },
    { label: "Scalability", rating: 4 },
    { label: "Startup Cost", rating: 2, higherIsWorse: true },
    { label: "Labor Intensity", rating: 3, higherIsWorse: true },
    { label: "Franchise Potential", rating: 4 },
    { label: "Exit Potential", rating: 4 },
  ],
} as const;

export const searchQuickLinks = [
  { label: "Pool Cleaning", href: "/industries/pool-service/" },
  { label: "Pool Repair", href: "/industries/pool-repair/", comingSoon: true },
  { label: "Pool Construction", href: "/industries/pool-construction/", comingSoon: true },
  { label: "Pressure Washing", href: "/industries/pressure-washing/", comingSoon: true },
  { label: "Landscaping", href: "/industries/landscaping/" },
  { label: "Pest Control", href: "/industries/pest-control/" },
] as const;

export const hubSectionNav = [
  { id: "industry-insights", label: "Insights" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "recurring-revenue", label: "MRR" },
  { id: "customer-metrics", label: "Customers" },
  { id: "route-efficiency", label: "Routes" },
  { id: "profitability", label: "Margins" },
  { id: "startup-costs", label: "Startup" },
  { id: "owner-economics", label: "Owner Pay" },
  { id: "valuation", label: "Valuation" },
  { id: "operating-metrics", label: "Operations" },
  { id: "opportunities-risks", label: "Outlook" },
  { id: "business-quality", label: "Quality" },
  { id: "comparisons", label: "Compare" },
  { id: "rankings", label: "Rankings" },
  { id: "route-matrix", label: "Route Matrix" },
  { id: "calculators", label: "Calculators" },
  { id: "faqs", label: "FAQs" },
] as const;

export const hubComparisons = [
  { label: "Pool Service vs Landscaping", href: "/comparisons/pool-service-vs-landscaping/" },
  { label: "Pool Service vs HVAC", href: "/comparisons/pool-service-vs-hvac/" },
  { label: "Pool Service vs Plumbing", href: "/comparisons/pool-service-vs-plumbing/" },
  { label: "Pool Service vs Pest Control", href: "/comparisons/pool-service-vs-pest-control/" },
  { label: "Pool Service vs Pressure Washing", href: "/comparisons/pool-service-vs-pressure-washing/" },
  { label: "Pool Service vs Window Cleaning", href: "/comparisons/pool-service-vs-window-cleaning/" },
] as const;

export const hubCalculators = [
  {
    label: "Pool Service Startup Cost Calculator",
    description: "Estimate total launch investment — vehicle, equipment, chemicals, and working capital.",
    href: "/calculators/pool-service-startup-cost/",
  },
  {
    label: "Pool Service Profit Calculator",
    description: "Model net margin from revenue, labor, chemicals, and fleet costs.",
    href: "/calculators/pool-service-profit/",
  },
  {
    label: "Business Valuation Calculator",
    description: "Estimate company value using SDE multiples and recurring revenue quality.",
    href: "/calculators/pool-service-valuation/",
  },
  {
    label: "Monthly Recurring Revenue Calculator",
    description: "Project MRR from active contracts and average monthly ticket.",
    href: "/calculators/pool-service-monthly-recurring-revenue/",
  },
  {
    label: "Route Profitability Calculator",
    description: "Model gross profit per route from stops, ticket, and drive time.",
    href: "/calculators/pool-service-route-profitability/",
  },
  {
    label: "Customer Lifetime Value Calculator",
    description: "Estimate LTV from contract value, retention, and repair upsells.",
    href: "/calculators/pool-service-customer-lifetime-value/",
  },
  {
    label: "Break-even Calculator",
    description: "Find monthly contracts and revenue needed to cover fixed costs.",
    href: "/calculators/pool-service-break-even/",
  },
  {
    label: "Technician Revenue Calculator",
    description: "Project revenue per technician from pools serviced and average ticket.",
    href: "/calculators/pool-service-technician-revenue/",
  },
] as const;

export const relatedHomeServiceIndustries = [
  { label: "Landscaping", href: "/industries/landscaping/" },
  { label: "Pressure Washing", href: "/industries/pressure-washing/", comingSoon: true },
  { label: "Window Cleaning", href: "/industries/window-cleaning/", comingSoon: true },
  { label: "HVAC", href: "/industries/hvac/" },
  { label: "Plumbing", href: "/industries/plumbing/" },
  { label: "Pest Control", href: "/industries/pest-control/" },
  { label: "Lawn Care", href: "/industries/lawn-care/", comingSoon: true },
] as const;

export {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  customerMetrics,
  homeBenchmarkRankings,
  homeServiceRouteEconomicsMatrix,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  marginMetrics,
  marginTiers,
  operatingMetrics,
  ownerEconomicsCards,
  recurringRevenueMetrics,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  routeEfficiencyMetrics,
  startupCostBreakdown,
  startupCostTotal,
  valuationDefaults,
  valuationMultiples,
};
