import {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  expenseBreakdown,
  fitnessBenchmarkRankings,
  fitnessEconomicsComparison,
  hubFaqs,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  marginMetrics,
  marginTiers,
  memberEconomicsMetrics,
  memberEconomicsMethodology,
  memberRetentionScorecard,
  membershipEconomics,
  ownerEconomicsCards,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/gym";

export const hubMeta = {
  slug: "gym",
  parentSlug: "",
  parentLabel: "Industries",
  title: "Gym Industry Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, membership economics and valuation multiples for gym businesses.",
  dataVintage: "2025–2026",
  sampleSize: "290+ gym businesses",
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$1.2M",
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
    value: "$120K",
    sublabel: "median compensation",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Valuation",
    value: "3.5× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
  {
    id: "mrr",
    label: "MRR",
    value: "~$62K/mo",
    sublabel: "median membership MRR (est.)",
    href: "#membership-economics",
    accent: "metric-revenue",
  },
] as const;

export const businessScorecard = {
  industryName: "Gym",
  items: [
    { label: "Profitability", rating: 3 },
    { label: "Scalability", rating: 4 },
    { label: "Recurring Revenue", rating: 5 },
    { label: "Customer Retention", rating: 3 },
    { label: "Growth Potential", rating: 4 },
  ],
} as const;

export const searchQuickLinks = [
  { label: "Revenue", href: "#revenue-benchmark" },
  { label: "Profit Margin", href: "#profitability" },
  { label: "Owner Salary", href: "#owner-economics" },
  { label: "Valuation", href: "#valuation" },
] as const;

export const hubSectionNav = [
  { id: "industry-insights", label: "Insights" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "membership-economics", label: "Membership" },
  { id: "member-retention", label: "Retention" },
  { id: "profitability", label: "Margins" },
  { id: "owner-economics", label: "Owner Pay" },
  { id: "valuation", label: "Valuation" },
  { id: "top-performers", label: "Top Performers" },
  { id: "member-economics", label: "Member Econ" },
  { id: "opportunities-risks", label: "Outlook" },
  { id: "business-quality", label: "Quality" },
  { id: "comparisons", label: "Compare" },
  { id: "rankings", label: "Rankings" },
  { id: "fitness-dashboard", label: "Fitness Econ" },
  { id: "calculators", label: "Calculators" },
  { id: "faqs", label: "FAQs" },
] as const;

export const hubComparisons = [
  { label: "Gym vs Pilates Studio", href: "/comparisons/gym-vs-pilates-studio/" },
  { label: "Gym vs CrossFit", href: "/comparisons/gym-vs-crossfit/" },
  { label: "Gym vs Yoga Studio", href: "/comparisons/gym-vs-yoga-studio/" },
  { label: "Gym vs Martial Arts School", href: "/comparisons/gym-vs-martial-arts-school/" },
] as const;

export const hubCalculators = [
  {
    label: "Gym Revenue Calculator",
    description: "Project annual revenue from membership dues, training, and ancillary income.",
    href: "/calculators/gym-revenue/",
  },
  {
    label: "Membership Growth Calculator",
    description: "Model member adds, churn, and net membership growth over 12 months.",
    href: "/calculators/gym-membership-growth/",
  },
  {
    label: "Member Lifetime Value Calculator",
    description: "Estimate LTV from average dues, retention, and upsell revenue.",
    href: "/calculators/gym-member-lifetime-value/",
  },
  {
    label: "Churn Rate Calculator",
    description: "Calculate monthly and annual churn from member activity data.",
    href: "/calculators/gym-churn-rate/",
  },
  {
    label: "Gym Valuation Calculator",
    description: "Estimate gym value using SDE multiples and recurring revenue quality.",
    href: "/calculators/gym-valuation/",
  },
] as const;

export const relatedFitnessIndustries = [
  { label: "Pilates Studio", href: "/industries/pilates-studio/" },
  { label: "Yoga Studio", href: "/industries/yoga-studio/" },
  { label: "CrossFit Gym", href: "/industries/crossfit-gym/" },
  { label: "Martial Arts School", href: "/industries/martial-arts-school/" },
  { label: "Personal Training Studio", href: "/industries/fitness/personal-training-studio/", comingSoon: true },
] as const;

export {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  expenseBreakdown,
  fitnessBenchmarkRankings,
  fitnessEconomicsComparison,
  hubFaqs,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  marginMetrics,
  marginTiers,
  memberEconomicsMetrics,
  memberEconomicsMethodology,
  memberRetentionScorecard,
  membershipEconomics,
  ownerEconomicsCards,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
};
