import {
  benchmarkDefaults,
  benchmarkThresholds,
  costStructureFlow,
  expenseBreakdown,
  futureGrowthMarkets,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  marginMetrics,
  marginTiers,
  ownerEconomicsCards,
  quickSummary,
  revenueDistribution,
  revenueDrivers,
  revenueMix,
  revenuePercentiles,
  startupCosts,
  stateBenchmarks,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/electrical";

export const hubMeta = {
  slug: "electrical",
  parentSlug: "",
  parentLabel: "Industries",
  title: "Electrical Industry Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, valuation multiples, and key economics for electrical contracting businesses.",
  dataVintage: "2025–2026",
  sampleSize: "340+ electrical contracting businesses",
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
    value: "10%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Pay",
    value: "$130K",
    sublabel: "median compensation",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Valuation",
    value: "2.8× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
] as const;

export const businessScorecard = {
  industryName: "Electrical",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Scalability", rating: 4 },
    { label: "Startup Difficulty", rating: 2, higherIsWorse: true },
    { label: "Recurring Revenue", rating: 3 },
    { label: "Recession Resistance", rating: 4 },
    { label: "Labor Availability", rating: 2, higherIsWorse: true },
    { label: "Growth Outlook", rating: 5 },
  ],
} as const;

export const searchQuickLinks = [
  { label: "HVAC", href: "/industries/hvac/" },
  { label: "Plumbing", href: "/industries/plumbing/" },
  { label: "Roofing", href: "/industries/roofing/" },
  { label: "Landscaping", href: "/industries/landscaping/" },
] as const;

export const hubSectionNav = [
  { id: "industry-insights", label: "Insights" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "profitability", label: "Margins" },
  { id: "owner-economics", label: "Owner Pay" },
  { id: "valuation", label: "Valuation" },
  { id: "top-performers", label: "Top Performers" },
  { id: "recurring-revenue", label: "Revenue Mix" },
  { id: "future-growth", label: "Growth Markets" },
  { id: "geography", label: "Geography" },
  { id: "comparisons", label: "Compare" },
  { id: "calculators", label: "Calculators" },
  { id: "faqs", label: "FAQs" },
] as const;

export const hubComparisons = [
  { label: "Electrical vs HVAC", href: "/comparisons/hvac-vs-electrical/" },
  { label: "Electrical vs Plumbing", href: "/comparisons/plumbing-vs-electrical/" },
  { label: "Roofing vs Electrical", comingSoon: true },
  { label: "Electrical vs Solar Business", comingSoon: true },
  { label: "Electrical vs General Contracting", comingSoon: true },
] as const;

export const hubCalculators = [
  {
    label: "Revenue Per Electrician Calculator",
    description: "Measure electrician productivity and revenue per field tech.",
    href: "/calculators/electrical-revenue-per-electrician/",
  },
  {
    label: "Profit Margin Calculator",
    description: "Calculate net margin and compare to electrical benchmarks.",
    href: "/calculators/electrical-profit-margin/",
  },
  {
    label: "Labor Utilization Calculator",
    description: "Track billable hours and electrician utilization rates.",
    href: "/calculators/electrical-labor-utilization/",
  },
  {
    label: "Business Valuation Calculator",
    description: "Estimate electrical company value using SDE multiples.",
    href: "/calculators/electrical-valuation/",
  },
] as const;

export const relatedHomeServiceIndustries = [
  { label: "HVAC", href: "/industries/hvac/" },
  { label: "Plumbing", href: "/industries/plumbing/" },
  { label: "Roofing", href: "/industries/roofing/" },
  { label: "Landscaping", href: "/industries/landscaping/" },
  { label: "Pest Control", href: "/industries/pest-control/" },
  { label: "Painting", href: "/industries/painting/", comingSoon: true },
  { label: "Tree Service", href: "/industries/tree-service/", comingSoon: true },
  { label: "Cleaning Business", href: "/industries/cleaning-business/" },
] as const;

export const hubFaqs = [
  {
    question: "How profitable is an electrical business?",
    answer:
      "Healthy electrical contracting companies typically achieve 7–13% net profit margin, with a median around 10%. Top-quartile operators with strong commercial mix, maintenance contracts, and disciplined labor management can reach 14–17%. Gross margins usually run 40–50% before overhead.",
  },
  {
    question: "How much revenue does an electrical contractor generate?",
    answer:
      "The median owner-operated electrical contractor generates about $2.0M in annual revenue. The interquartile range spans $1.0M (25th percentile) to $2.8M (75th percentile), with top-performing companies exceeding $4.0M. Revenue varies based on electrician count, commercial mix, and project pipeline.",
  },
  {
    question: "How much do electrical company owners make?",
    answer:
      "Electrical business owners typically earn $90K–$175K in total compensation, with a median around $130K. Owner-operators often earn $90K–$125K, while established multi-crew contractors can exceed $350K when combining owner salary and profit distributions.",
  },
  {
    question: "What is an electrical contracting company worth?",
    answer:
      "Electrical businesses typically sell at 2.3×–3.4× SDE, with a median near 2.8×. A company with $2.0M revenue and $380K SDE might value between $874K and $1.29M. Companies with commercial contracts and transferable management often command premium multiples.",
  },
  {
    question: "Are electrical businesses recession resistant?",
    answer:
      "Electrical is moderately recession-resistant. Essential repair and maintenance work continues in downturns, but new construction and large commercial projects can slow significantly. Companies with maintenance contracts and diversified service revenue weather recessions better than construction-heavy operators.",
  },
  {
    question: "What is the average revenue per electrician?",
    answer:
      "The median electrical contractor generates $165K–$295K revenue per full-time electrician, with a midpoint near $230K. Commercial-focused firms with larger project tickets often exceed $280K per electrician; residential service-heavy shops may run $165K–$220K.",
  },
] as const;

export {
  benchmarkDefaults,
  benchmarkThresholds,
  costStructureFlow,
  expenseBreakdown,
  futureGrowthMarkets,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  marginMetrics,
  marginTiers,
  ownerEconomicsCards,
  quickSummary,
  revenueDistribution,
  revenueDrivers,
  revenueMix,
  revenuePercentiles,
  startupCosts,
  stateBenchmarks,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
};
