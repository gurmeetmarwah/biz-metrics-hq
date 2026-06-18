import {
  benchmarkThresholds,
  costStructureFlow,
  expenseBreakdown,
  growthMetrics,
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
  valuationMultiples,
} from "@/lib/industries/hvac";

export const hubMeta = {
  slug: "hvac",
  parentSlug: "",
  parentLabel: "Industries",
  title: "HVAC Industry Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, valuation multiples, and key economics for HVAC businesses in the United States.",
  dataVintage: "2025–2026",
  sampleSize: "420+ HVAC businesses",
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$2.4M",
    sublabel: "median annual revenue",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Margin",
    value: "12%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Pay",
    value: "$145K",
    sublabel: "median compensation",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Valuation",
    value: "3.1× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
] as const;

export const businessScorecard = {
  industryName: "HVAC",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Scalability", rating: 5 },
    { label: "Startup Difficulty", rating: 3, higherIsWorse: true },
    { label: "Recurring Revenue", rating: 5 },
    { label: "Recession Resistance", rating: 4 },
  ],
} as const;

export const searchQuickLinks = [
  { label: "Revenue", href: "#revenue-benchmark" },
  { label: "Profit Margin", href: "#profitability" },
  { label: "Owner Salary", href: "#owner-economics" },
  { label: "Valuation", href: "#valuation" },
] as const;

export const industrySnapshot = quickSummary;

export const hubSectionNav = [
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "profitability", label: "Margins" },
  { id: "owner-economics", label: "Owner Pay" },
  { id: "valuation", label: "Valuation" },
  { id: "geography", label: "Geography" },
  { id: "comparisons", label: "Compare" },
  { id: "calculators", label: "Calculators" },
  { id: "faqs", label: "FAQs" },
] as const;

export const hubComparisons = [
  { label: "HVAC vs Plumbing", href: "/comparisons/hvac-vs-plumbing/" },
  { label: "HVAC vs Electrical", href: "/comparisons/hvac-vs-electrical/" },
  { label: "HVAC vs Roofing", href: "/comparisons/hvac-vs-roofing/" },
  { label: "HVAC vs Landscaping", href: "/comparisons/hvac-vs-landscaping/" },
] as const;

export const hubCalculators = [
  {
    label: "Revenue Per Technician Calculator",
    description: "Measure technician productivity and revenue per tech.",
    href: "/calculators/hvac-revenue-per-technician/",
  },
  {
    label: "Profit Margin Calculator",
    description: "Calculate net margin and compare to HVAC benchmarks.",
    href: "/calculators/hvac-profit-margin/",
  },
  {
    label: "Business Valuation Calculator",
    description: "Estimate HVAC company value using SDE multiples.",
    href: "/calculators/hvac-valuation/",
  },
  {
    label: "Break-Even Calculator",
    description: "Estimate required revenue and jobs to break even.",
    href: "/calculators/hvac-break-even/",
  },
] as const;

export const relatedMetrics = [
  { label: "HVAC Revenue", href: "#revenue-benchmark" },
  { label: "HVAC Profit Margin", href: "/calculators/hvac-profit-margin/" },
  { label: "HVAC Owner Salary", href: "#owner-economics" },
  { label: "HVAC Valuation", href: "/calculators/hvac-valuation/" },
  { label: "HVAC Startup Costs", href: "#startup-costs", comingSoon: true },
] as const;

export const relatedHomeServiceIndustries = [
  { label: "Plumbing", href: "/industries/plumbing/" },
  { label: "Electrical", href: "/industries/electrical/" },
  { label: "Roofing", href: "/industries/roofing/" },
  { label: "Landscaping", href: "/industries/landscaping/" },
  { label: "Pest Control", href: "/industries/pest-control/" },
  { label: "Painting", href: "/industries/painting/", comingSoon: true },
] as const;

export const hubFaqs = [
  {
    question: "How profitable is an HVAC business?",
    answer:
      "Healthy HVAC companies typically achieve 8–16% net profit margin, with a median around 12%. Top-quartile operators with strong maintenance contract penetration and disciplined labor management can reach 17–22%. Gross margins usually run 45–55% before overhead.",
  },
  {
    question: "What is average HVAC revenue?",
    answer:
      "The median owner-operated HVAC company generates about $2.4M in annual revenue. The interquartile range spans $1.2M (25th percentile) to $3.2M (75th percentile), with top-performing companies exceeding $5M. Revenue varies significantly based on technician count, service area, and maintenance contract mix.",
  },
  {
    question: "How much do HVAC owners earn?",
    answer:
      "HVAC business owners typically earn $95K–$185K in total compensation, with a median around $145K. Small single-truck operators often earn $95K–$120K, while multi-location operators can exceed $350K when combining owner salary and profit distributions.",
  },
  {
    question: "What is an HVAC company worth?",
    answer:
      "HVAC businesses typically sell at 2.4×–3.8× SDE, with a median near 3.1×. A company with $2.4M revenue and $400K SDE might value between $960K and $1.52M. Companies with high recurring maintenance revenue and transferable management often command premium multiples.",
  },
  {
    question: "Are HVAC businesses recession resistant?",
    answer:
      "HVAC is moderately recession-resistant. Emergency repairs and essential heating/cooling needs persist in downturns, and maintenance contracts provide recurring revenue stability. However, discretionary installations and commercial new construction can slow. Companies with 35%+ maintenance revenue tend to weather cycles better.",
  },
] as const;

export {
  benchmarkThresholds,
  costStructureFlow,
  expenseBreakdown,
  growthMetrics,
  industrySnapshotRatings,
  marginMetrics,
  marginTiers,
  ownerEconomicsCards,
  revenueDistribution,
  revenueDrivers,
  revenuePercentiles,
  startupCosts,
  stateBenchmarks,
  technicianProductivityMetrics,
  valuationMultiples,
};
