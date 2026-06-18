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
  insuranceClaimEconomics,
  marginMetrics,
  marginTiers,
  marketConditions,
  ownerEconomicsCards,
  quickSummary,
  recurringRevenueComparison,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  startupCosts,
  stateBenchmarks,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/roofing";

export const hubMeta = {
  slug: "roofing",
  parentSlug: "",
  parentLabel: "Industries",
  title: "Roofing Industry Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, valuation multiples, and business economics for roofing companies in the United States.",
  dataVintage: "2025–2026",
  sampleSize: "310+ roofing companies",
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$2.0M",
    sublabel: "median annual revenue",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Margin",
    value: "9%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Pay",
    value: "$140K",
    sublabel: "median compensation",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Valuation",
    value: "2.6× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
] as const;

export const businessScorecard = {
  industryName: "Roofing",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Scalability", rating: 5 },
    { label: "Startup Difficulty", rating: 2, higherIsWorse: true },
    { label: "Recurring Revenue", rating: 1 },
    { label: "Recession Resistance", rating: 3 },
    { label: "Weather Dependence", rating: 5, higherIsWorse: true },
    { label: "Growth Potential", rating: 4 },
  ],
} as const;

export const searchQuickLinks = [
  { label: "HVAC", href: "/industries/hvac/" },
  { label: "Plumbing", href: "/industries/plumbing/" },
  { label: "Electrical", href: "/industries/electrical/" },
  { label: "Landscaping", href: "/industries/landscaping/" },
] as const;

export const hubSectionNav = [
  { id: "industry-insights", label: "Insights" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "profitability", label: "Margins" },
  { id: "owner-economics", label: "Owner Pay" },
  { id: "valuation", label: "Valuation" },
  { id: "top-performers", label: "Top Performers" },
  { id: "market-conditions", label: "Market" },
  { id: "recurring-revenue", label: "Recurring Rev" },
  { id: "insurance-claims", label: "Insurance" },
  { id: "geography", label: "Geography" },
  { id: "comparisons", label: "Compare" },
  { id: "calculators", label: "Calculators" },
  { id: "faqs", label: "FAQs" },
] as const;

export const hubComparisons = [
  { label: "Roofing vs HVAC", href: "/comparisons/hvac-vs-roofing/" },
  { label: "Roofing vs Plumbing", href: "/comparisons/plumbing-vs-roofing/" },
  { label: "Roofing vs Electrical", comingSoon: true },
  { label: "Roofing vs Solar", comingSoon: true },
  { label: "Roofing vs Painting", comingSoon: true },
] as const;

export const hubCalculators = [
  {
    label: "Roofing Revenue Calculator",
    description: "Estimate annual revenue by crew count and project mix.",
    href: "/calculators/roofing-revenue/",
  },
  {
    label: "Roofing Profit Calculator",
    description: "Calculate net margin and compare to roofing benchmarks.",
    href: "/calculators/roofing-profit/",
  },
  {
    label: "Crew Productivity Calculator",
    description: "Measure revenue per crew and install throughput.",
    href: "/calculators/roofing-crew-productivity/",
  },
  {
    label: "Business Valuation Calculator",
    description: "Estimate roofing company value using SDE multiples.",
    href: "/calculators/roofing-valuation/",
  },
] as const;

export const relatedHomeServiceIndustries = [
  { label: "HVAC", href: "/industries/hvac/" },
  { label: "Plumbing", href: "/industries/plumbing/" },
  { label: "Electrical", href: "/industries/electrical/" },
  { label: "Landscaping", href: "/industries/landscaping/" },
  { label: "Painting", href: "/industries/painting/", comingSoon: true },
  { label: "Pest Control", href: "/industries/pest-control/" },
  { label: "Tree Services", href: "/industries/tree-service/", comingSoon: true },
  { label: "Cleaning Business", href: "/industries/cleaning-business/" },
] as const;

export const hubFaqs = [
  {
    question: "How profitable is a roofing business?",
    answer:
      "Healthy roofing companies typically achieve 6–13% net profit margin, with a median around 9%. Top-quartile operators with strong sales processes and insurance restoration capabilities can reach 14–18%. Gross margins run 28–38% due to high material costs.",
  },
  {
    question: "What is average roofing company revenue?",
    answer:
      "The median owner-operated roofing company generates about $2.0M in annual revenue. The interquartile range spans $800K (25th percentile) to $3.2M (75th percentile), with top-performing storm-market operators exceeding $4.5M.",
  },
  {
    question: "How much do roofing company owners make?",
    answer:
      "Roofing business owners typically earn $80K–$220K in total compensation, with a median around $140K. Storm-market operators during active seasons can exceed $400K, while owner-operators in steady markets often earn $80K–$130K.",
  },
  {
    question: "What is a roofing business worth?",
    answer:
      "Roofing businesses typically sell at 2.0×–3.2× SDE, with a median near 2.6×. A company with $2.0M revenue and $360K SDE might value between $720K and $1.15M. Companies with transferable sales teams and regional brands command premium multiples.",
  },
  {
    question: "Are roofing businesses recession resistant?",
    answer:
      "Roofing is moderately recession-resistant. Essential repairs continue in downturns, but discretionary replacements and new construction slow. Insurance restoration provides a counter-cyclical buffer in storm markets. Revenue is more volatile than HVAC or plumbing.",
  },
  {
    question: "How do roofing companies generate leads?",
    answer:
      "Top roofing companies use diversified lead channels: door-to-door canvassing, digital marketing (Google, Facebook), referral networks, insurance adjuster relationships, and storm chasing. Marketing typically represents 8–14% of revenue for growth-focused operators.",
  },
  {
    question: "How dependent are roofing companies on storms?",
    answer:
      "Dependence varies by market. In hail and hurricane corridors, insurance restoration can represent 20–40% of annual revenue. Storm events can double or triple monthly revenue temporarily. Operators outside storm markets rely more on aging housing stock and replacement cycles.",
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
  insuranceClaimEconomics,
  marginMetrics,
  marginTiers,
  marketConditions,
  ownerEconomicsCards,
  quickSummary,
  recurringRevenueComparison,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  startupCosts,
  stateBenchmarks,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
};
