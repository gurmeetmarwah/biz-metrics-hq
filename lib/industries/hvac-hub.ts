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
import { mergeProfitabilityFaqs } from "@/lib/industries/profitability-seo";
import { hvacProfitabilitySeo } from "@/lib/industries/profitability-seo-data";

export const profitabilitySeo = hvacProfitabilitySeo;

export const hubMeta = {
  slug: "hvac",
  parentSlug: "",
  parentLabel: "Industries",
  title: "Are HVAC Businesses Profitable?",
  subtitle:
    "Yes — typical net margins run 8–16% (median ~12%), or about $190K–$380K profit on $2.4M revenue. See 2026 benchmarks for margins, owner pay, maintenance mix, and valuation.",
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
    label: "Profit Margin",
    value: "12%",
    sublabel: "median net profit margin",
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
  { label: "Are They Profitable?", href: "#profitability" },
  { label: "Revenue", href: "#revenue-benchmark" },
  { label: "Owner Pay", href: "#owner-economics" },
  { label: "Valuation", href: "#valuation" },
] as const;

export const industrySnapshot = quickSummary;

export const hubSectionNav = [
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "profitability", label: "Profitability" },
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
    description: "Are HVAC businesses profitable? Calculate your net margin vs 8–16% benchmarks.",
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
  { label: "Are HVAC Businesses Profitable?", href: "#profitability" },
  { label: "HVAC Profit Margin", href: "#profitability" },
  { label: "HVAC Revenue", href: "#revenue-benchmark" },
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

const baseFaqs = [
  {
    question: "Are HVAC businesses profitable?",
    answer:
      "Yes. Healthy HVAC companies typically achieve 8–16% net profit margin (median ~12%), or about $190K–$380K a year at median $2.4M revenue. Top operators with strong maintenance contracts and disciplined payroll often reach 17–22%. Thin margins usually mean labor bloat or a weak recurring mix.",
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

export const hubFaqs = mergeProfitabilityFaqs(profitabilitySeo.faqs, baseFaqs);

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
