import {
  benchmarkDefaults,
  benchmarkThresholds,
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
  revenueDistribution,
  revenueDrivers,
  revenuePercentiles,
  startupCosts,
  stateBenchmarks,
  technicianProductivityMetrics,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/plumbing";

export const hubMeta = {
  slug: "plumbing",
  parentSlug: "",
  parentLabel: "Industries",
  title: "Plumbing Industry Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, valuation multiples, and business economics for plumbing companies in the United States.",
  dataVintage: "2025–2026",
  sampleSize: "380+ plumbing businesses",
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$1.6M",
    sublabel: "median annual revenue",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Net Margin",
    value: "11%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Salary",
    value: "$125K",
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
  industryName: "Plumbing",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Scalability", rating: 4 },
    { label: "Startup Difficulty", rating: 2, higherIsWorse: true },
    { label: "Recurring Revenue", rating: 3 },
    { label: "Recession Resistance", rating: 5 },
  ],
} as const;

export const searchQuickLinks = [
  { label: "HVAC", href: "/industries/hvac/" },
  { label: "Electrical", href: "/industries/electrical/" },
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
  { id: "geography", label: "Geography" },
  { id: "comparisons", label: "Compare" },
  { id: "calculators", label: "Calculators" },
  { id: "faqs", label: "FAQs" },
] as const;

export const hubComparisons = [
  { label: "Plumbing vs HVAC", href: "/comparisons/plumbing-vs-hvac/" },
  { label: "Plumbing vs Electrical", href: "/comparisons/plumbing-vs-electrical/" },
  { label: "Plumbing vs Roofing", href: "/comparisons/plumbing-vs-roofing/" },
  { label: "Plumbing vs Landscaping", href: "/comparisons/plumbing-vs-landscaping/" },
  { label: "Plumbing vs Pest Control", href: "/comparisons/plumbing-vs-pest-control/" },
] as const;

export const hubCalculators = [
  {
    label: "Revenue Per Technician Calculator",
    description: "Measure plumber productivity and revenue per tech.",
    href: "/calculators/plumbing-revenue-per-technician/",
  },
  {
    label: "Profit Margin Calculator",
    description: "Calculate net margin and compare to plumbing benchmarks.",
    href: "/calculators/plumbing-profit-margin/",
  },
  {
    label: "Break-Even Calculator",
    description: "Estimate required revenue and jobs to break even.",
    href: "/calculators/plumbing-break-even/",
  },
  {
    label: "Business Valuation Calculator",
    description: "Estimate plumbing company value using SDE multiples.",
    href: "/calculators/plumbing-valuation/",
  },
] as const;

export const relatedMetrics = [
  { label: "Plumbing Revenue", href: "#revenue-benchmark" },
  { label: "Plumbing Profit Margin", href: "#profitability" },
  { label: "Plumbing Owner Salary", href: "#owner-economics" },
  { label: "Plumbing Valuation", href: "#valuation" },
  { label: "Plumbing Startup Costs", href: "#startup-costs" },
] as const;

export const relatedHomeServiceIndustries = [
  { label: "HVAC", href: "/industries/hvac/" },
  { label: "Electrical", href: "/industries/electrical/" },
  { label: "Roofing", href: "/industries/roofing/" },
  { label: "Landscaping", href: "/industries/landscaping/" },
  { label: "Pest Control", href: "/industries/pest-control/" },
  { label: "Painting", href: "/industries/painting/", comingSoon: true },
  { label: "Tree Service", href: "/industries/tree-service/", comingSoon: true },
  { label: "Cleaning Business", href: "/industries/cleaning-business/" },
] as const;

export const hubFaqs = [
  {
    question: "How profitable is a plumbing business?",
    answer:
      "Healthy plumbing companies typically achieve 8–14% net profit margin, with a median around 11%. Top-quartile operators with strong emergency dispatch, maintenance contracts, and disciplined labor management can reach 15–18%. Gross margins usually run 42–52% before overhead.",
  },
  {
    question: "What is average plumbing company revenue?",
    answer:
      "The median owner-operated plumbing company generates about $1.6M in annual revenue. The interquartile range spans $800K (25th percentile) to $2.2M (75th percentile), with top-performing companies exceeding $3.5M. Revenue varies based on plumber count, service area, and emergency vs contract mix.",
  },
  {
    question: "How much do plumbing company owners make?",
    answer:
      "Plumbing business owners typically earn $85K–$165K in total compensation, with a median around $125K. Owner-operators often earn $85K–$115K, while established multi-crew operators can exceed $320K when combining owner salary and profit distributions.",
  },
  {
    question: "What is a plumbing business worth?",
    answer:
      "Plumbing businesses typically sell at 2.2×–3.5× SDE, with a median near 2.8×. A company with $1.6M revenue and $320K SDE might value between $704K and $1.12M. Companies with commercial contracts and transferable management often command premium multiples.",
  },
  {
    question: "How many plumbers are needed to reach $1M revenue?",
    answer:
      "At median productivity of ~$215K revenue per plumber, reaching $1M typically requires 4–5 full-time plumbers plus owner production. High-performing shops with strong emergency tickets and route density can reach $1M with 3–4 plumbers; lower-ticket operators may need 5–6.",
  },
  {
    question: "Are plumbing businesses recession resistant?",
    answer:
      "Plumbing is highly recession-resistant. Water and sewer failures require immediate repair regardless of economic conditions, and emergency calls often increase as deferred maintenance catches up. Companies with commercial maintenance contracts add stability during construction slowdowns.",
  },
] as const;

export {
  benchmarkDefaults,
  benchmarkThresholds,
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
  revenueDistribution,
  revenueDrivers,
  revenuePercentiles,
  startupCosts,
  stateBenchmarks,
  technicianProductivityMetrics,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
};
