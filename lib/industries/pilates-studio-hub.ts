import {
  benchmarkDefaults,
  benchmarkThresholds,
  boutiqueFitnessPerformanceIndex,
  businessQualityScorecard,
  clientEconomicsMetrics,
  clientEconomicsMethodology,
  expenseBreakdown,
  fitnessBenchmarkRankings,
  hubFaqs,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  instructorProductivityBenchmarks,
  marginMetrics,
  marginTiers,
  membershipEconomics,
  ownerEconomicsCards,
  pilatesStudioMeta,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  studioUtilizationBenchmarks,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/pilates-studio";

export const hubMeta = {
  slug: pilatesStudioMeta.slug,
  parentSlug: "",
  parentLabel: "Industries",
  title: pilatesStudioMeta.title,
  subtitle: pilatesStudioMeta.subtitle,
  dataVintage: pilatesStudioMeta.dataVintage,
  sampleSize: pilatesStudioMeta.sampleSize,
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$850K",
    sublabel: "median annual revenue",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Net Margin",
    value: "22%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Salary",
    value: "$145K",
    sublabel: "median compensation",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Valuation",
    value: "3.8× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
  {
    id: "mrr",
    label: "MRR",
    value: "$62K/mo",
    sublabel: "median membership MRR (est.)",
    href: "#membership-economics",
    accent: "metric-revenue",
  },
] as const;

export const businessScorecard = {
  industryName: "Pilates Studio",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Recurring Revenue", rating: 5 },
    { label: "Premium Pricing", rating: 5 },
    { label: "Client Retention", rating: 4 },
    { label: "Startup Investment", rating: 3, higherIsWorse: true },
    { label: "Scalability", rating: 4 },
    { label: "Exit Potential", rating: 4 },
  ],
} as const;

export const searchQuickLinks = [
  { label: "Gym", href: "/industries/gym/" },
  { label: "Yoga Studio", href: "/industries/yoga-studio/" },
  { label: "CrossFit Gym", href: "/industries/crossfit-gym/" },
  { label: "Physical Therapy Clinic", href: "/industries/healthcare/physical-therapy-clinic/" },
] as const;

export const hubSectionNav = [
  { id: "industry-insights", label: "Insights" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "membership-economics", label: "Membership" },
  { id: "studio-utilization", label: "Utilization" },
  { id: "instructor-productivity", label: "Instructors" },
  { id: "profitability", label: "Margins" },
  { id: "owner-economics", label: "Owner Pay" },
  { id: "valuation", label: "Valuation" },
  { id: "top-performers", label: "Top Performers" },
  { id: "client-economics", label: "Client Econ" },
  { id: "opportunities-risks", label: "Outlook" },
  { id: "business-quality", label: "Quality" },
  { id: "comparisons", label: "Compare" },
  { id: "rankings", label: "Rankings" },
  { id: "boutique-index", label: "Boutique Index" },
  { id: "calculators", label: "Calculators" },
  { id: "faqs", label: "FAQs" },
] as const;

export const hubComparisons = [
  { label: "Pilates Studio vs Gym", href: "/comparisons/gym-vs-pilates-studio/" },
  { label: "Pilates Studio vs Yoga Studio", href: "/comparisons/pilates-studio-vs-yoga-studio/" },
  { label: "Pilates Studio vs CrossFit", href: "/comparisons/pilates-studio-vs-crossfit/" },
  { label: "Pilates Studio vs Barre Studio", href: "/comparisons/pilates-studio-vs-barre-studio/" },
  { label: "Pilates Studio vs Physical Therapy Clinic", href: "/comparisons/pilates-studio-vs-physical-therapy-clinic/" },
] as const;

export const hubCalculators = [
  {
    label: "Pilates Studio Revenue Calculator",
    description: "Project annual revenue from memberships, classes, and private sessions.",
    href: "/calculators/pilates-studio-revenue/",
  },
  {
    label: "Membership Revenue Calculator",
    description: "Model MRR from active members and average monthly dues.",
    href: "/calculators/pilates-membership-revenue/",
  },
  {
    label: "Class Occupancy Calculator",
    description: "Estimate revenue impact from class fill rate and reformer utilization.",
    href: "/calculators/pilates-class-occupancy/",
  },
  {
    label: "Client Lifetime Value Calculator",
    description: "Calculate LTV from ARPU, retention, and private session upsells.",
    href: "/calculators/pilates-client-lifetime-value/",
  },
  {
    label: "Instructor Productivity Calculator",
    description: "Benchmark revenue per instructor and teaching-hour economics.",
    href: "/calculators/pilates-instructor-productivity/",
  },
  {
    label: "Pilates Studio Valuation Calculator",
    description: "Estimate studio value using SDE multiples and recurring revenue quality.",
    href: "/calculators/pilates-valuation/",
  },
] as const;

export const relatedFitnessIndustries = [
  { label: "Gym", href: "/industries/gym/" },
  { label: "Yoga Studio", href: "/industries/yoga-studio/" },
  { label: "CrossFit Gym", href: "/industries/crossfit-gym/" },
  { label: "Barre Studio", href: "/industries/fitness/barre-studio/", comingSoon: true },
  { label: "Martial Arts School", href: "/industries/martial-arts-school/" },
  { label: "Personal Training Studio", href: "/industries/fitness/personal-training-studio/", comingSoon: true },
  { label: "Physical Therapy Clinic", href: "/industries/healthcare/physical-therapy-clinic/" },
] as const;

export {
  benchmarkDefaults,
  benchmarkThresholds,
  boutiqueFitnessPerformanceIndex,
  businessQualityScorecard,
  clientEconomicsMetrics,
  clientEconomicsMethodology,
  expenseBreakdown,
  fitnessBenchmarkRankings,
  hubFaqs,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  instructorProductivityBenchmarks,
  marginMetrics,
  marginTiers,
  membershipEconomics,
  ownerEconomicsCards,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  studioUtilizationBenchmarks,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
};
