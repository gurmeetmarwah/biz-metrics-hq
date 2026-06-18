import {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  costStructureFlow,
  customerRetentionMetrics,
  expenseBreakdown,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  investorAttractivenessScore,
  marginMetrics,
  marginTiers,
  ownerEconomicsCards,
  quickSummary,
  recurringRevenueBenchmarks,
  recurringRevenueComparison,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  startupCosts,
  stateBenchmarks,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/pest-control";

export const hubMeta = {
  slug: "pest-control",
  parentSlug: "",
  parentLabel: "Industries",
  title: "Pest Control Industry Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, valuation multiples, and business economics for pest control businesses.",
  dataVintage: "2025–2026",
  sampleSize: "220+ pest control companies",
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$900K",
    sublabel: "median annual revenue",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Margin",
    value: "18%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Pay",
    value: "$110K",
    sublabel: "median compensation",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Valuation",
    value: "3.2× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
] as const;

export const businessScorecard = {
  industryName: "Pest Control",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Scalability", rating: 4 },
    { label: "Startup Difficulty", rating: 2, higherIsWorse: true },
    { label: "Recurring Revenue", rating: 5 },
    { label: "Recession Resistance", rating: 5 },
    { label: "Customer Retention", rating: 5 },
    { label: "Growth Outlook", rating: 4 },
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
  { id: "business-quality", label: "Quality" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "recurring-revenue", label: "Recurring Rev" },
  { id: "profitability", label: "Margins" },
  { id: "owner-economics", label: "Owner Pay" },
  { id: "valuation", label: "Valuation" },
  { id: "top-performers", label: "Top Performers" },
  { id: "customer-retention", label: "Retention" },
  { id: "opportunities-risks", label: "Outlook" },
  { id: "geography", label: "Geography" },
  { id: "investor-score", label: "Investor Score" },
  { id: "comparisons", label: "Compare" },
  { id: "calculators", label: "Calculators" },
  { id: "faqs", label: "FAQs" },
] as const;

export const hubComparisons = [
  { label: "Pest Control vs HVAC", href: "/comparisons/pest-control-vs-hvac/" },
  { label: "Pest Control vs Landscaping", href: "/comparisons/landscaping-vs-pest-control/" },
  { label: "Pest Control vs Plumbing", href: "/comparisons/plumbing-vs-pest-control/" },
  { label: "Pest Control vs Cleaning Business", href: "/comparisons/pest-control-vs-cleaning-business/" },
  { label: "Pest Control vs Lawn Care", href: "/comparisons/pest-control-vs-lawn-care/" },
] as const;

export const hubCalculators = [
  {
    label: "Route Density Calculator",
    description: "Measure stops per technician and route throughput efficiency.",
    href: "/calculators/pest-control-route-density/",
  },
  {
    label: "Customer Lifetime Value Calculator",
    description: "Estimate LTV from contract value, retention, and visit frequency.",
    href: "/calculators/pest-control-customer-lifetime-value/",
  },
  {
    label: "Recurring Revenue Calculator",
    description: "Model subscription contract revenue and annual penetration.",
    href: "/calculators/pest-control-recurring-revenue/",
  },
  {
    label: "Profit Margin Calculator",
    description: "Calculate net margin and compare to pest control benchmarks.",
    href: "/calculators/pest-control-profit-margin/",
  },
  {
    label: "Business Valuation Calculator",
    description: "Estimate pest control company value using SDE multiples.",
    href: "/calculators/pest-control-valuation/",
  },
] as const;

export const relatedHomeServiceIndustries = [
  { label: "HVAC", href: "/industries/hvac/" },
  { label: "Plumbing", href: "/industries/plumbing/" },
  { label: "Electrical", href: "/industries/electrical/" },
  { label: "Roofing", href: "/industries/roofing/" },
  { label: "Landscaping", href: "/industries/landscaping/" },
  { label: "Tree Service", href: "/industries/tree-service/", comingSoon: true },
  { label: "Cleaning Business", href: "/industries/cleaning-business/" },
  { label: "Lawn Care", href: "/industries/lawn-care/", comingSoon: true },
] as const;

export const hubFaqs = [
  {
    question: "How profitable is a pest control business?",
    answer:
      "Healthy pest control companies typically achieve 15–25% net profit margin, with a median around 18%. Subscription-heavy operators with strong route density and low churn can reach 22–28%. Gross margins usually run 55–68% before overhead.",
  },
  {
    question: "What is average pest control company revenue?",
    answer:
      "The median owner-operated pest control company generates about $900K in annual revenue. The interquartile range spans $400K (25th percentile) to $1.4M (75th percentile), with top-performing multi-route operators exceeding $1.8M.",
  },
  {
    question: "How much do pest control owners make?",
    answer:
      "Pest control business owners typically earn $75K–$180K in total compensation, with a median around $110K. Multi-route operators with strong commercial contract books and termite programs can exceed $250K.",
  },
  {
    question: "What is a pest control company worth?",
    answer:
      "Pest control businesses typically sell at 2.5×–4.0× SDE, with a median near 3.2×. A company with $900K revenue and $250K SDE might value between $625K and $1M. Companies with high recurring revenue and low owner dependence command premium multiples.",
  },
  {
    question: "Why do pest control businesses sell for high multiples?",
    answer:
      "Buyers pay premiums for pest control's subscription revenue (70–90% recurring), high customer retention (82–88%), predictable cash flow, and active private equity consolidation. These factors create acquisition demand that pushes multiples above most home service trades.",
  },
  {
    question: "How important are recurring contracts?",
    answer:
      "Recurring contracts are the foundation of pest control business value. Top operators derive 80–90% of revenue from quarterly treatment agreements and annual service plans. High contract penetration improves cash flow predictability, supports premium valuation multiples, and reduces owner dependence on constant new sales.",
  },
  {
    question: "What is a good customer retention rate?",
    answer:
      "Strong pest control operators maintain 82–88% annual account retention. Top-quartile companies achieve 85%+ renewal rates through proactive communication, service quality, and bundled termite and mosquito programs. Retention above 80% is a key indicator of a healthy, acquisition-ready business.",
  },
] as const;

export {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  costStructureFlow,
  customerRetentionMetrics,
  expenseBreakdown,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  investorAttractivenessScore,
  marginMetrics,
  marginTiers,
  ownerEconomicsCards,
  quickSummary,
  recurringRevenueBenchmarks,
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
