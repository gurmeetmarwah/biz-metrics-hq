import {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  costStructureFlow,
  expenseBreakdown,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  marginMetrics,
  marginTiers,
  ownerEconomicsCards,
  quickSummary,
  recurringRevenueComparison,
  revenueCompositionBenchmark,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  startupCosts,
  stateBenchmarks,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/landscaping";

export const hubMeta = {
  slug: "landscaping",
  parentSlug: "",
  parentLabel: "Industries",
  title: "Landscaping Industry Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, valuation multiples, and business economics for landscaping businesses.",
  dataVintage: "2025–2026",
  sampleSize: "280+ landscaping companies",
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$1.1M",
    sublabel: "median annual revenue",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Margin",
    value: "8%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Pay",
    value: "$95K",
    sublabel: "median compensation",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Valuation",
    value: "2.2× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
] as const;

export const businessScorecard = {
  industryName: "Landscaping",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Scalability", rating: 4 },
    { label: "Startup Difficulty", rating: 2, higherIsWorse: true },
    { label: "Recurring Revenue", rating: 5 },
    { label: "Recession Resistance", rating: 3 },
    { label: "Seasonality", rating: 4, higherIsWorse: true },
    { label: "Growth Outlook", rating: 4 },
  ],
} as const;

export const searchQuickLinks = [
  { label: "HVAC", href: "/industries/hvac/" },
  { label: "Plumbing", href: "/industries/plumbing/" },
  { label: "Roofing", href: "/industries/roofing/" },
  { label: "Pest Control", href: "/industries/pest-control/" },
] as const;

export const hubSectionNav = [
  { id: "industry-insights", label: "Insights" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "revenue-composition", label: "Revenue Mix" },
  { id: "recurring-revenue", label: "Recurring Rev" },
  { id: "profitability", label: "Margins" },
  { id: "owner-economics", label: "Owner Pay" },
  { id: "valuation", label: "Valuation" },
  { id: "top-performers", label: "Top Performers" },
  { id: "opportunities-risks", label: "Outlook" },
  { id: "business-quality", label: "Quality" },
  { id: "geography", label: "Geography" },
  { id: "comparisons", label: "Compare" },
  { id: "calculators", label: "Calculators" },
  { id: "faqs", label: "FAQs" },
] as const;

export const hubComparisons = [
  { label: "Landscaping vs Lawn Care", href: "/comparisons/landscaping-vs-lawn-care/" },
  { label: "Landscaping vs HVAC", href: "/comparisons/landscaping-vs-hvac/" },
  { label: "Landscaping vs Roofing", href: "/comparisons/landscaping-vs-roofing/" },
  { label: "Landscaping vs Pest Control", href: "/comparisons/landscaping-vs-pest-control/" },
  { label: "Landscaping vs Tree Service", href: "/comparisons/landscaping-vs-tree-service/" },
] as const;

export const hubCalculators = [
  {
    label: "Landscaping Revenue Calculator",
    description: "Estimate annual revenue by crew count and service mix.",
    href: "/calculators/landscaping-revenue/",
  },
  {
    label: "Profit Margin Calculator",
    description: "Calculate net margin and compare to landscaping benchmarks.",
    href: "/calculators/landscaping-profit/",
  },
  {
    label: "Crew Productivity Calculator",
    description: "Measure revenue per crew and route throughput.",
    href: "/calculators/landscaping-crew-productivity/",
  },
  {
    label: "Business Valuation Calculator",
    description: "Estimate landscaping company value using SDE multiples.",
    href: "/calculators/landscaping-valuation/",
  },
  {
    label: "Commercial Contract Calculator",
    description: "Model recurring revenue from commercial maintenance contracts.",
    href: "/calculators/landscaping-commercial-contract/",
  },
] as const;

export const relatedHomeServiceIndustries = [
  { label: "HVAC", href: "/industries/hvac/" },
  { label: "Plumbing", href: "/industries/plumbing/" },
  { label: "Electrical", href: "/industries/electrical/" },
  { label: "Roofing", href: "/industries/roofing/" },
  { label: "Pest Control", href: "/industries/pest-control/" },
  { label: "Tree Services", href: "/industries/tree-service/", comingSoon: true },
  { label: "Painting", href: "/industries/painting/", comingSoon: true },
  { label: "Cleaning Business", href: "/industries/cleaning-business/" },
] as const;

export const hubFaqs = [
  {
    question: "How profitable is a landscaping business?",
    answer:
      "Healthy landscaping companies typically achieve 5–12% net profit margin, with a median around 8%. Maintenance-heavy operators with strong route density and commercial contracts can reach 10–15%. Project-focused hardscaping crews may see higher gross margins but more revenue volatility.",
  },
  {
    question: "What is average landscaping company revenue?",
    answer:
      "The median owner-operated landscaping company generates about $1.1M in annual revenue. The interquartile range spans $600K (25th percentile) to $1.8M (75th percentile), with top-performing design-build operators exceeding $2.5M.",
  },
  {
    question: "How much do landscaping business owners make?",
    answer:
      "Landscaping business owners typically earn $70K–$150K in total compensation, with a median around $95K. Regional operators with strong commercial contract books and enhancement upsell programs can exceed $200K.",
  },
  {
    question: "What is a landscaping company worth?",
    answer:
      "Landscaping businesses typically sell at 1.8×–2.8× SDE, with a median near 2.2×. A company with $1.1M revenue and $200K SDE might value between $360K and $560K. Companies with transferable maintenance contracts and low owner dependence command premium multiples.",
  },
  {
    question: "Are landscaping businesses seasonal?",
    answer:
      "Yes — most landscaping companies experience medium-to-high seasonality. Revenue peaks in spring and summer, with slower fall and winter months. Operators in Sun Belt markets and those with commercial maintenance contracts experience less seasonal volatility than project-only residential businesses.",
  },
  {
    question: "How important are maintenance contracts?",
    answer:
      "Maintenance contracts are critical for landscaping business stability. Top operators derive 35–55% of revenue from recurring maintenance, which improves cash flow predictability, supports higher valuation multiples, and reduces owner dependence on constant new project sales.",
  },
  {
    question: "How many crews are needed to reach $1M revenue?",
    answer:
      "Most landscaping companies need 3–4 productive field crews to reach $1M annual revenue, assuming ~$275K revenue per crew. Maintenance-heavy operators with efficient routing may achieve $1M with fewer crews; design-build focused companies may need more crews due to project scheduling gaps.",
  },
] as const;

export {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  costStructureFlow,
  expenseBreakdown,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  marginMetrics,
  marginTiers,
  ownerEconomicsCards,
  quickSummary,
  recurringRevenueComparison,
  revenueCompositionBenchmark,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  startupCosts,
  stateBenchmarks,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
};
