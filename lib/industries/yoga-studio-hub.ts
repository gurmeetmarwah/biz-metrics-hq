import {
  benchmarkDefaults,
  benchmarkThresholds,
  boutiqueWellnessBenchmarkMatrix,
  businessQualityScorecard,
  classUtilizationBenchmarks,
  clientEconomicsMetrics,
  clientEconomicsMethodology,
  communityHealthBenchmarks,
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
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
  yogaStudioMeta,
} from "@/lib/industries/yoga-studio";

export const hubMeta = {
  slug: yogaStudioMeta.slug,
  parentSlug: "",
  parentLabel: "Industries",
  title: yogaStudioMeta.title,
  subtitle: yogaStudioMeta.subtitle,
  dataVintage: yogaStudioMeta.dataVintage,
  sampleSize: yogaStudioMeta.sampleSize,
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$620K",
    sublabel: "median annual revenue",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Net Margin",
    value: "19%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Salary",
    value: "$115K",
    sublabel: "median compensation",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Valuation",
    value: "3.3× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
  {
    id: "mrr",
    label: "MRR",
    value: "$48K/mo",
    sublabel: "median membership MRR (est.)",
    href: "#membership-economics",
    accent: "metric-revenue",
  },
] as const;

export const businessScorecard = {
  industryName: "Yoga Studio",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Recurring Revenue", rating: 5 },
    { label: "Community Strength", rating: 5 },
    { label: "Startup Investment", rating: 2, higherIsWorse: true },
    { label: "Scalability", rating: 3 },
    { label: "Retention Importance", rating: 5 },
    { label: "Exit Potential", rating: 3 },
  ],
} as const;

export const searchQuickLinks = [
  { label: "Pilates Studio", href: "/industries/pilates-studio/" },
  { label: "Gym", href: "/industries/gym/" },
  { label: "CrossFit Gym", href: "/industries/crossfit-gym/" },
  { label: "Martial Arts School", href: "/industries/martial-arts-school/" },
] as const;

export const hubSectionNav = [
  { id: "industry-insights", label: "Insights" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "membership-economics", label: "Membership" },
  { id: "community-health", label: "Community" },
  { id: "class-utilization", label: "Classes" },
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
  { id: "wellness-matrix", label: "Wellness Matrix" },
  { id: "calculators", label: "Calculators" },
  { id: "faqs", label: "FAQs" },
] as const;

export const hubComparisons = [
  { label: "Yoga Studio vs Pilates Studio", href: "/comparisons/pilates-studio-vs-yoga-studio/" },
  { label: "Yoga Studio vs Gym", href: "/comparisons/gym-vs-yoga-studio/" },
  { label: "Yoga Studio vs Barre Studio", href: "/comparisons/yoga-studio-vs-barre-studio/" },
  { label: "Yoga Studio vs CrossFit Gym", href: "/comparisons/yoga-studio-vs-crossfit/" },
  { label: "Yoga Studio vs Martial Arts School", href: "/comparisons/yoga-studio-vs-martial-arts-school/" },
] as const;

export const hubCalculators = [
  {
    label: "Yoga Studio Revenue Calculator",
    description: "Project annual revenue from memberships, classes, workshops, and teacher training.",
    href: "/calculators/yoga-studio-revenue/",
  },
  {
    label: "Membership Revenue Calculator",
    description: "Model MRR from active members and average monthly dues.",
    href: "/calculators/yoga-membership-revenue/",
  },
  {
    label: "Class Capacity Calculator",
    description: "Estimate revenue impact from class fill rate and studio capacity utilization.",
    href: "/calculators/yoga-class-capacity/",
  },
  {
    label: "Client Lifetime Value Calculator",
    description: "Calculate LTV from ARPU, retention, and workshop upsells.",
    href: "/calculators/yoga-client-lifetime-value/",
  },
  {
    label: "Instructor Productivity Calculator",
    description: "Benchmark revenue per instructor and teaching-hour economics.",
    href: "/calculators/yoga-instructor-productivity/",
  },
  {
    label: "Yoga Studio Valuation Calculator",
    description: "Estimate studio value using SDE multiples and recurring revenue quality.",
    href: "/calculators/yoga-valuation/",
  },
] as const;

export const relatedFitnessIndustries = [
  { label: "Pilates Studio", href: "/industries/pilates-studio/" },
  { label: "Gym", href: "/industries/gym/" },
  { label: "CrossFit Gym", href: "/industries/crossfit-gym/" },
  { label: "Barre Studio", href: "/industries/fitness/barre-studio/", comingSoon: true },
  { label: "Martial Arts School", href: "/industries/martial-arts-school/" },
  { label: "Personal Training Studio", href: "/industries/fitness/personal-training-studio/", comingSoon: true },
] as const;

export {
  benchmarkDefaults,
  benchmarkThresholds,
  boutiqueWellnessBenchmarkMatrix,
  businessQualityScorecard,
  classUtilizationBenchmarks,
  clientEconomicsMetrics,
  clientEconomicsMethodology,
  communityHealthBenchmarks,
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
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
};
