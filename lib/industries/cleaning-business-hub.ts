import {
  benchmarkDefaults,
  benchmarkThresholds,
  businessModelBenchmark,
  businessQualityScorecard,
  commercialVsResidential,
  contractRevenueBenchmarks,
  costStructureFlow,
  expenseBreakdown,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  laborEfficiencyMetrics,
  marginMetrics,
  marginTiers,
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
} from "@/lib/industries/cleaning-business";

export const hubMeta = {
  slug: "cleaning-business",
  parentSlug: "",
  parentLabel: "Industries",
  title: "Cleaning Business Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, valuation multiples, and business economics for cleaning businesses.",
  dataVintage: "2025–2026",
  sampleSize: "190+ cleaning businesses",
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$500K",
    sublabel: "median annual revenue",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Margin",
    value: "15%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Pay",
    value: "$75K",
    sublabel: "median compensation",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Valuation",
    value: "2.4× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
] as const;

export const businessScorecard = {
  industryName: "Cleaning Business",
  items: [
    { label: "Profitability", rating: 3 },
    { label: "Scalability", rating: 5 },
    { label: "Startup Difficulty", rating: 1, higherIsWorse: true },
    { label: "Recurring Revenue", rating: 5 },
    { label: "Recession Resistance", rating: 4 },
    { label: "Labor Dependence", rating: 5, higherIsWorse: true },
    { label: "Growth Outlook", rating: 4 },
  ],
} as const;

export const searchQuickLinks = [
  { label: "HVAC", href: "/industries/hvac/" },
  { label: "Plumbing", href: "/industries/plumbing/" },
  { label: "Pest Control", href: "/industries/pest-control/" },
  { label: "Landscaping", href: "/industries/landscaping/" },
] as const;

export const hubSectionNav = [
  { id: "industry-insights", label: "Insights" },
  { id: "business-quality", label: "Quality" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "business-model", label: "Revenue Mix" },
  { id: "contract-revenue", label: "Contracts" },
  { id: "profitability", label: "Margins" },
  { id: "owner-economics", label: "Owner Pay" },
  { id: "valuation", label: "Valuation" },
  { id: "top-performers", label: "Top Performers" },
  { id: "labor-efficiency", label: "Labor" },
  { id: "commercial-residential", label: "Comm vs Res" },
  { id: "opportunities-risks", label: "Outlook" },
  { id: "geography", label: "Geography" },
  { id: "comparisons", label: "Compare" },
  { id: "calculators", label: "Calculators" },
  { id: "faqs", label: "FAQs" },
] as const;

export const hubComparisons = [
  { label: "Cleaning vs Pest Control", href: "/comparisons/pest-control-vs-cleaning-business/" },
  { label: "Cleaning vs Landscaping", href: "/comparisons/cleaning-business-vs-landscaping/" },
  { label: "Cleaning vs HVAC", href: "/comparisons/cleaning-business-vs-hvac/" },
  { label: "Cleaning vs Lawn Care", href: "/comparisons/cleaning-business-vs-lawn-care/" },
  { label: "Cleaning vs Janitorial Business", href: "/comparisons/cleaning-business-vs-janitorial-business/" },
] as const;

export const hubCalculators = [
  {
    label: "Revenue Per Cleaner Calculator",
    href: "/calculators/cleaning-business-revenue-per-cleaner/",
    description: "Measure cleaner productivity and revenue per field employee.",
  },
  {
    label: "Contract Value Calculator",
    href: "/calculators/cleaning-business-contract-value/",
    description: "Model annual contract revenue from residential and commercial accounts.",
  },
  {
    label: "Customer Lifetime Value Calculator",
    href: "/calculators/cleaning-business-customer-lifetime-value/",
    description: "Estimate LTV from contract value, retention, and visit frequency.",
  },
  {
    label: "Profit Margin Calculator",
    href: "/calculators/cleaning-business-profit-margin/",
    description: "Calculate net margin and compare to cleaning business benchmarks.",
  },
  {
    label: "Business Valuation Calculator",
    href: "/calculators/cleaning-business-valuation/",
    description: "Estimate cleaning company value using SDE multiples.",
  },
] as const;

export const relatedHomeServiceIndustries = [
  { label: "Pest Control", href: "/industries/pest-control/" },
  { label: "Landscaping", href: "/industries/landscaping/" },
  { label: "HVAC", href: "/industries/hvac/" },
  { label: "Plumbing", href: "/industries/plumbing/" },
  { label: "Electrical", href: "/industries/electrical/" },
  { label: "Lawn Care", href: "/industries/lawn-care/", comingSoon: true },
  { label: "Janitorial Services", href: "/industries/janitorial-services/", comingSoon: true },
  { label: "Property Management", href: "/industries/property-management/", comingSoon: true },
] as const;

export const hubFaqs = [
  {
    question: "How profitable is a cleaning business?",
    answer:
      "Healthy cleaning companies typically achieve 10–20% net profit margin, with a median around 15%. Residential-focused operators with strong route density can reach 18–22%. Commercial-heavy businesses often run 10–14% but benefit from contract stability.",
  },
  {
    question: "What is average cleaning business revenue?",
    answer:
      "The median owner-operated cleaning company generates about $500K in annual revenue. The interquartile range spans $200K (25th percentile) to $800K (75th percentile), with top-performing multi-city operators exceeding $1M.",
  },
  {
    question: "How much do cleaning company owners make?",
    answer:
      "Cleaning business owners typically earn $50K–$120K in total compensation, with a median around $75K. Commercial contractors with strong contract books and multi-crew operations can exceed $150K.",
  },
  {
    question: "What is a cleaning business worth?",
    answer:
      "Cleaning businesses typically sell at 1.8×–3.0× SDE, with a median near 2.4×. A company with $500K revenue and $120K SDE might value between $216K and $360K. Companies with transferable commercial contracts command premium multiples.",
  },
  {
    question: "Is commercial cleaning more profitable than residential cleaning?",
    answer:
      "Residential cleaning typically offers higher margins (12–22% net) due to premium pricing and route density. Commercial cleaning runs lower margins (8–14%) but provides larger, more stable contracts and predictable monthly revenue. Many successful operators blend both models.",
  },
  {
    question: "How important are recurring contracts?",
    answer:
      "Recurring contracts are critical for cleaning business stability. Top operators derive 65–75% of revenue from scheduled weekly, biweekly, or monthly agreements. High contract penetration improves cash flow predictability and supports higher valuation multiples at sale.",
  },
  {
    question: "What is a good revenue per cleaner benchmark?",
    answer:
      "Productive cleaning businesses generate $80K–$150K annual revenue per field cleaner, with a median near $115K. Commercial operators with larger teams may run lower per-cleaner revenue but higher total scale. Route density and labor utilization are the key drivers.",
  },
] as const;

export {
  benchmarkDefaults,
  benchmarkThresholds,
  businessModelBenchmark,
  businessQualityScorecard,
  commercialVsResidential,
  contractRevenueBenchmarks,
  costStructureFlow,
  expenseBreakdown,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  laborEfficiencyMetrics,
  marginMetrics,
  marginTiers,
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
