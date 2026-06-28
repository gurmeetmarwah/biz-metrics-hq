import {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
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
  martialArtsSchoolMeta,
  ownerEconomicsCards,
  programPerformanceBenchmarks,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  studentEconomicsMetrics,
  studentEconomicsMethodology,
  studentRetentionBenchmarks,
  topPerformerPractices,
  tuitionEconomics,
  valuationDefaults,
  valuationMultiples,
  youthActivityBenchmarkMatrix,
} from "@/lib/industries/martial-arts-school";

export const hubMeta = {
  slug: martialArtsSchoolMeta.slug,
  parentSlug: "",
  parentLabel: "Industries",
  title: martialArtsSchoolMeta.title,
  subtitle: martialArtsSchoolMeta.subtitle,
  dataVintage: martialArtsSchoolMeta.dataVintage,
  sampleSize: martialArtsSchoolMeta.sampleSize,
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$780K",
    sublabel: "median annual revenue",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Net Margin",
    value: "24%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Salary",
    value: "$160K",
    sublabel: "median compensation",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Valuation",
    value: "3.9× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
  {
    id: "mrr",
    label: "Tuition MRR",
    value: "$58K/mo",
    sublabel: "monthly recurring tuition (est.)",
    href: "#tuition-economics",
    accent: "metric-revenue",
  },
] as const;

export const businessScorecard = {
  industryName: "Martial Arts School",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Recurring Revenue", rating: 5 },
    { label: "Student Retention", rating: 5 },
    { label: "Scalability", rating: 4 },
    { label: "Startup Investment", rating: 2, higherIsWorse: true },
    { label: "Community Loyalty", rating: 5 },
    { label: "Exit Potential", rating: 4 },
  ],
} as const;

export const searchQuickLinks = [
  { label: "Gym", href: "/industries/gym/" },
  { label: "Pilates Studio", href: "/industries/pilates-studio/" },
  { label: "Yoga Studio", href: "/industries/yoga-studio/" },
  { label: "Dance Studio", href: "/industries/fitness/dance-studio/" },
] as const;

export const hubSectionNav = [
  { id: "industry-insights", label: "Insights" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "tuition-economics", label: "Tuition" },
  { id: "student-retention", label: "Retention" },
  { id: "program-performance", label: "Programs" },
  { id: "instructor-productivity", label: "Instructors" },
  { id: "profitability", label: "Margins" },
  { id: "owner-economics", label: "Owner Pay" },
  { id: "valuation", label: "Valuation" },
  { id: "top-performers", label: "Top Performers" },
  { id: "student-economics", label: "Student Econ" },
  { id: "opportunities-risks", label: "Outlook" },
  { id: "business-quality", label: "Quality" },
  { id: "comparisons", label: "Compare" },
  { id: "rankings", label: "Rankings" },
  { id: "youth-matrix", label: "Youth Matrix" },
  { id: "calculators", label: "Calculators" },
  { id: "faqs", label: "FAQs" },
] as const;

export const hubComparisons = [
  { label: "Martial Arts School vs Gym", href: "/comparisons/gym-vs-martial-arts-school/" },
  { label: "Martial Arts School vs Pilates Studio", href: "/comparisons/martial-arts-school-vs-pilates-studio/" },
  { label: "Martial Arts School vs Yoga Studio", href: "/comparisons/yoga-studio-vs-martial-arts-school/" },
  { label: "Martial Arts School vs Dance Studio", href: "/comparisons/martial-arts-school-vs-dance-studio/" },
  { label: "Martial Arts School vs Swim School", href: "/comparisons/martial-arts-school-vs-swim-school/" },
  { label: "CrossFit vs Martial Arts School", href: "/comparisons/crossfit-vs-martial-arts-school/" },
] as const;

export const hubCalculators = [
  {
    label: "Martial Arts School Revenue Calculator",
    description: "Project annual revenue from tuition, belt testing, camps, and ancillary income.",
    href: "/calculators/martial-arts-school-revenue/",
  },
  {
    label: "Tuition Revenue Calculator",
    description: "Model tuition MRR from active students and average monthly program fees.",
    href: "/calculators/martial-arts-tuition-revenue/",
  },
  {
    label: "Student Lifetime Value Calculator",
    description: "Calculate LTV from tuition ARPU, retention, and family enrollment length.",
    href: "/calculators/martial-arts-student-lifetime-value/",
  },
  {
    label: "Student Capacity Calculator",
    description: "Estimate revenue impact from class fill rate and dojo capacity utilization.",
    href: "/calculators/martial-arts-student-capacity/",
  },
  {
    label: "Instructor Productivity Calculator",
    description: "Benchmark revenue per instructor and teaching-hour economics.",
    href: "/calculators/martial-arts-instructor-productivity/",
  },
  {
    label: "Martial Arts School Valuation Calculator",
    description: "Estimate school value using SDE multiples and tuition recurring quality.",
    href: "/calculators/martial-arts-valuation/",
  },
  {
    label: "Belt Testing Revenue Calculator",
    description: "Model promotion fee revenue from testing cycles and student progression.",
    href: "/calculators/martial-arts-belt-testing-revenue/",
  },
] as const;

export const relatedFitnessIndustries = [
  { label: "Gym", href: "/industries/gym/" },
  { label: "Pilates Studio", href: "/industries/pilates-studio/" },
  { label: "Yoga Studio", href: "/industries/yoga-studio/" },
  { label: "Dance Studio", href: "/industries/fitness/dance-studio/", comingSoon: true },
  { label: "CrossFit Gym", href: "/industries/crossfit-gym/" },
  { label: "Swim School", href: "/industries/fitness/swim-school/", comingSoon: true },
  { label: "Personal Training Studio", href: "/industries/fitness/personal-training-studio/", comingSoon: true },
] as const;

export {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
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
  ownerEconomicsCards,
  programPerformanceBenchmarks,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  studentEconomicsMetrics,
  studentEconomicsMethodology,
  studentRetentionBenchmarks,
  topPerformerPractices,
  tuitionEconomics,
  valuationDefaults,
  valuationMultiples,
  youthActivityBenchmarkMatrix,
};
