import {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  classUtilizationBenchmarks,
  coachProductivityBenchmarks,
  expenseBreakdown,
  fitnessBenchmarkRankings,
  functionalFitnessBenchmarkMatrix,
  hubFaqs,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  marginMetrics,
  marginTiers,
  memberEconomicsMetrics,
  memberEconomicsMethodology,
  memberRetentionBenchmarks,
  membershipEconomics,
  crossfitGymMeta,
  ownerEconomicsCards,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/crossfit-gym";

export const hubMeta = {
  slug: crossfitGymMeta.slug,
  parentSlug: "",
  parentLabel: "Industries",
  title: crossfitGymMeta.title,
  subtitle: crossfitGymMeta.subtitle,
  dataVintage: crossfitGymMeta.dataVintage,
  sampleSize: crossfitGymMeta.sampleSize,
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$950K",
    sublabel: "median annual revenue",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Net Margin",
    value: "21%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Salary",
    value: "$150K",
    sublabel: "median compensation",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Valuation",
    value: "3.7× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
  {
    id: "mrr",
    label: "MRR",
    value: "$72K/mo",
    sublabel: "monthly recurring revenue (est.)",
    href: "#membership-economics",
    accent: "metric-revenue",
  },
] as const;

export const businessScorecard = {
  industryName: "CrossFit Affiliate",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Recurring Revenue", rating: 5 },
    { label: "Community Loyalty", rating: 5 },
    { label: "Coach Productivity", rating: 4 },
    { label: "Scalability", rating: 3 },
    { label: "Startup Investment", rating: 3, higherIsWorse: true },
    { label: "Exit Potential", rating: 4 },
  ],
} as const;

export const searchQuickLinks = [
  { label: "Gym", href: "/industries/gym/" },
  { label: "Pilates Studio", href: "/industries/pilates-studio/" },
  { label: "Yoga Studio", href: "/industries/yoga-studio/" },
  { label: "Martial Arts School", href: "/industries/martial-arts-school/" },
] as const;

export const hubSectionNav = [
  { id: "industry-insights", label: "Insights" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "membership-economics", label: "Membership" },
  { id: "class-utilization", label: "Classes" },
  { id: "coach-productivity", label: "Coaches" },
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
  { id: "fitness-matrix", label: "Fitness Matrix" },
  { id: "calculators", label: "Calculators" },
  { id: "faqs", label: "FAQs" },
] as const;

export const hubComparisons = [
  { label: "CrossFit vs Traditional Gym", href: "/comparisons/gym-vs-crossfit/" },
  { label: "CrossFit vs Pilates Studio", href: "/comparisons/pilates-studio-vs-crossfit/" },
  { label: "CrossFit vs Yoga Studio", href: "/comparisons/yoga-studio-vs-crossfit/" },
  { label: "CrossFit vs Martial Arts School", href: "/comparisons/crossfit-vs-martial-arts-school/" },
  { label: "CrossFit vs Personal Training Studio", href: "/comparisons/crossfit-vs-personal-training-studio/" },
] as const;

export const hubCalculators = [
  {
    label: "CrossFit Revenue Calculator",
    description: "Project annual revenue from memberships, PT, nutrition, and ancillary income.",
    href: "/calculators/crossfit-gym-revenue/",
  },
  {
    label: "Membership Revenue Calculator",
    description: "Model MRR from active members and average monthly dues.",
    href: "/calculators/crossfit-membership-revenue/",
  },
  {
    label: "Coach Productivity Calculator",
    description: "Benchmark revenue per coach, class load, and coaching-hour economics.",
    href: "/calculators/crossfit-coach-productivity/",
  },
  {
    label: "Class Capacity Calculator",
    description: "Estimate revenue impact from class fill rate and box capacity utilization.",
    href: "/calculators/crossfit-class-capacity/",
  },
  {
    label: "Member Lifetime Value Calculator",
    description: "Calculate LTV from ARPU, retention, and ancillary upsells.",
    href: "/calculators/crossfit-member-lifetime-value/",
  },
  {
    label: "CrossFit Gym Valuation Calculator",
    description: "Estimate affiliate value using SDE multiples and recurring revenue quality.",
    href: "/calculators/crossfit-valuation/",
  },
  {
    label: "Break-even Calculator",
    description: "Model member count and revenue needed to cover fixed costs and coach payroll.",
    href: "/calculators/crossfit-break-even/",
  },
] as const;

export const relatedFitnessIndustries = [
  { label: "Gym", href: "/industries/gym/" },
  { label: "Pilates Studio", href: "/industries/pilates-studio/" },
  { label: "Yoga Studio", href: "/industries/yoga-studio/" },
  { label: "Martial Arts School", href: "/industries/martial-arts-school/" },
  { label: "Personal Training Studio", href: "/industries/fitness/personal-training-studio/", comingSoon: true },
  { label: "Bootcamp Fitness", href: "/industries/fitness/bootcamp-fitness/", comingSoon: true },
  { label: "Strength & Conditioning Gym", href: "/industries/fitness/strength-conditioning-gym/", comingSoon: true },
] as const;

export {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  classUtilizationBenchmarks,
  coachProductivityBenchmarks,
  expenseBreakdown,
  fitnessBenchmarkRankings,
  functionalFitnessBenchmarkMatrix,
  hubFaqs,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  marginMetrics,
  marginTiers,
  memberEconomicsMetrics,
  memberEconomicsMethodology,
  memberRetentionBenchmarks,
  membershipEconomics,
  ownerEconomicsCards,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  topPerformerPractices,
  valuationDefaults,
  valuationMultiples,
};
