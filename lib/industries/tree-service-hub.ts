import {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  crewEquipmentEconomicsMatrix,
  equipmentItems,
  equipmentSummary,
  homeBenchmarkRankings,
  hubFaqs as industryFaqs,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  marginMetrics,
  marginTiers,
  operatingMetrics,
  ownerEconomicsCards,
  serviceBenchmarkMatrix,
  serviceMetrics,
  startupCostBreakdown,
  startupCostTotal,
  treeServiceMeta,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/tree-service";
import { mergeProfitabilityFaqs } from "@/lib/industries/profitability-seo";
import { treeServiceProfitabilitySeo } from "@/lib/industries/profitability-seo-data";

export const profitabilitySeo = treeServiceProfitabilitySeo;

export const hubFaqs = mergeProfitabilityFaqs(profitabilitySeo.faqs, industryFaqs);


export const hubMeta = {
  slug: treeServiceMeta.slug,
  parentSlug: "",
  parentLabel: "Industries",
  title: treeServiceMeta.title,
  subtitle: treeServiceMeta.subtitle,
  dataVintage: treeServiceMeta.dataVintage,
  sampleSize: treeServiceMeta.sampleSize,
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Annual Revenue",
    value: "$1.25M",
    sublabel: "median annual revenue",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Net Profit Margin",
    value: "21%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Salary",
    value: "$155K",
    sublabel: "median compensation",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Business Valuation",
    value: "3.7× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
  {
    id: "avg-job",
    label: "Average Job",
    value: "$1,150",
    sublabel: "median job value",
    href: "#service-metrics",
    accent: "metric-revenue",
  },
] as const;

export const businessScorecard = {
  industryName: "Tree Service",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Recurring Revenue", rating: 3 },
    { label: "Scalability", rating: 4 },
    { label: "Startup Cost", rating: 4, higherIsWorse: true },
    { label: "Equipment Intensity", rating: 5, higherIsWorse: true },
    { label: "Emergency Revenue", rating: 4 },
    { label: "Exit Potential", rating: 4 },
  ],
} as const;

export const searchQuickLinks = [
  { label: "Tree Removal", href: "/industries/tree-service/" },
  { label: "Landscaping", href: "/industries/landscaping/" },
  { label: "Lawn Care", href: "/industries/lawn-care/", comingSoon: true },
  { label: "Arborist", href: "/industries/arborist/", comingSoon: true },
  { label: "Pest Control", href: "/industries/pest-control/" },
  { label: "Excavation", href: "/industries/excavation/", comingSoon: true },
] as const;

export const hubSectionNav = [
  { id: "industry-insights", label: "Insights" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "service-metrics", label: "Services" },
  { id: "equipment", label: "Equipment" },
  { id: "profitability", label: "Margins" },
  { id: "startup-costs", label: "Startup" },
  { id: "owner-economics", label: "Owner Pay" },
  { id: "valuation", label: "Valuation" },
  { id: "operating-metrics", label: "Operations" },
  { id: "opportunities-risks", label: "Outlook" },
  { id: "business-quality", label: "Quality" },
  { id: "service-matrix", label: "Service Matrix" },
  { id: "rankings", label: "Rankings" },
  { id: "crew-matrix", label: "Crew Matrix" },
  { id: "calculators", label: "Calculators" },
  { id: "faqs", label: "FAQs" },
] as const;

export const hubComparisons = [
  { label: "Tree Service vs Landscaping", href: "/comparisons/tree-service-vs-landscaping/" },
  { label: "Tree Service vs Lawn Care", href: "/comparisons/tree-service-vs-lawn-care/" },
  { label: "Tree Service vs Pool Service", href: "/comparisons/tree-service-vs-pool-service/" },
  { label: "Tree Service vs Excavation", href: "/comparisons/tree-service-vs-excavation/" },
] as const;

export const hubCalculators = [
  {
    label: "Tree Service Startup Cost Calculator",
    description: "Estimate total launch investment — bucket truck, chipper, insurance, and working capital.",
    comingSoon: true,
  },
  {
    label: "Tree Service Profit Calculator",
    description: "Model net margin from revenue, labor, equipment, and insurance costs.",
    comingSoon: true,
  },
  {
    label: "Tree Service Valuation Calculator",
    description: "Estimate company value using SDE multiples and equipment asset quality.",
    comingSoon: true,
  },
  {
    label: "Equipment ROI Calculator",
    description: "Model payback on bucket trucks, chippers, and stump grinders.",
    comingSoon: true,
  },
  {
    label: "Revenue per Crew Calculator",
    description: "Project crew productivity from jobs completed and average ticket.",
    comingSoon: true,
  },
  {
    label: "Break-even Calculator",
    description: "Find monthly jobs and revenue needed to cover fixed costs.",
    comingSoon: true,
  },
  {
    label: "Job Pricing Calculator",
    description: "Price removal and trimming jobs from labor, disposal, and equipment costs.",
    comingSoon: true,
  },
  {
    label: "Labor Cost Calculator",
    description: "Model crew payroll as a percentage of revenue and per-job labor burden.",
    comingSoon: true,
  },
] as const;

export const relatedIndustries = [
  { label: "Landscaping", href: "/industries/landscaping/" },
  { label: "Lawn Care", href: "/industries/lawn-care/", comingSoon: true },
  { label: "Pressure Washing", href: "/industries/pressure-washing/", comingSoon: true },
  { label: "Pool Service", href: "/industries/pool-service/" },
  { label: "Excavation", href: "/industries/excavation/", comingSoon: true },
  { label: "Snow Removal", href: "/industries/snow-removal/", comingSoon: true },
  { label: "Pest Control", href: "/industries/pest-control/" },
] as const;

export {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  crewEquipmentEconomicsMatrix,
  equipmentItems,
  equipmentSummary,
  homeBenchmarkRankings,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  marginMetrics,
  marginTiers,
  operatingMetrics,
  ownerEconomicsCards,
  serviceBenchmarkMatrix,
  serviceMetrics,
  startupCostBreakdown,
  startupCostTotal,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  valuationDefaults,
  valuationMultiples,
};
