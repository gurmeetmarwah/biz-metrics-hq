import {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  hubFaqs as industryFaqs,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  insuranceMetrics,
  marginMetrics,
  marginTiers,
  medicalBenchmarkRankings,
  operatingMetrics,
  optometryPracticeMeta,
  ownerEconomicsCards,
  patientMetrics,
  practiceEconomicsMatrix,
  retailSalesMetrics,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  startupCostBreakdown,
  startupCostTotal,
  valuationDefaults,
  valuationMultiples,
} from "@/lib/industries/optometry-practice";
import { mergeProfitabilityFaqs } from "@/lib/industries/profitability-seo";
import { optometryPracticeProfitabilitySeo } from "@/lib/industries/profitability-seo-data";

export const profitabilitySeo = optometryPracticeProfitabilitySeo;

export const hubFaqs = mergeProfitabilityFaqs(profitabilitySeo.faqs, industryFaqs);


export const hubMeta = {
  slug: optometryPracticeMeta.slug,
  parentSlug: "healthcare",
  parentLabel: "Healthcare",
  title: optometryPracticeMeta.title,
  subtitle: optometryPracticeMeta.subtitle,
  dataVintage: optometryPracticeMeta.dataVintage,
  sampleSize: optometryPracticeMeta.sampleSize,
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Annual Revenue",
    value: "$1.35M",
    sublabel: "median practice revenue",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Net Profit Margin",
    value: "24%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Salary",
    value: "$235K",
    sublabel: "median compensation",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Business Valuation",
    value: "5.2× EBITDA",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
  {
    id: "rev-per-patient",
    label: "Revenue per Patient",
    value: "$420",
    sublabel: "median annual",
    href: "#patient-metrics",
    accent: "metric-revenue",
  },
] as const;

export const businessScorecard = {
  industryName: "Optometry Practice",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Recurring Revenue", rating: 4 },
    { label: "Retail Revenue", rating: 5 },
    { label: "Insurance Dependence", rating: 4, higherIsWorse: true },
    { label: "Capital Requirement", rating: 3, higherIsWorse: true },
    { label: "Exit Potential", rating: 5 },
  ],
} as const;

export const searchQuickLinks = [
  { label: "Dental Practice", href: "/industries/healthcare/dental-practice/" },
  { label: "Physical Therapy", href: "/industries/healthcare/physical-therapy-clinic/" },
  { label: "Chiropractic", href: "/industries/healthcare/chiropractic-clinic/" },
  { label: "Dermatology", href: "/industries/dermatology/", comingSoon: true },
  { label: "Veterinary Clinic", href: "/industries/healthcare/veterinary-clinic/" },
  { label: "Ophthalmology", href: "/industries/ophthalmology/", comingSoon: true },
] as const;

export const hubSectionNav = [
  { id: "industry-insights", label: "Insights" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "patient-metrics", label: "Patients" },
  { id: "retail-sales", label: "Retail" },
  { id: "insurance-metrics", label: "Insurance" },
  { id: "profitability", label: "Margins" },
  { id: "startup-costs", label: "Startup" },
  { id: "owner-economics", label: "Owner Pay" },
  { id: "valuation", label: "Valuation" },
  { id: "operating-metrics", label: "Operations" },
  { id: "opportunities-risks", label: "Outlook" },
  { id: "business-quality", label: "Quality" },
  { id: "comparisons", label: "Compare" },
  { id: "rankings", label: "Rankings" },
  { id: "practice-matrix", label: "Matrix" },
  { id: "calculators", label: "Calculators" },
  { id: "faqs", label: "FAQs" },
] as const;

export const hubComparisons = [
  { label: "Optometry vs Dentistry", href: "/comparisons/optometry-vs-dentistry/" },
  { label: "Optometry vs Chiropractic", href: "/comparisons/optometry-vs-chiropractic/" },
  { label: "Optometry vs Physical Therapy", href: "/comparisons/optometry-vs-physical-therapy/" },
  { label: "Optometry vs Dermatology", href: "/comparisons/optometry-vs-dermatology/" },
  { label: "Optometry vs Veterinary Clinic", href: "/comparisons/optometry-vs-veterinary/" },
] as const;

export const hubCalculators = [
  {
    label: "Optometry Startup Cost Calculator",
    description: "Estimate total launch investment — buildout, equipment, optical inventory, and working capital.",
    href: "/calculators/optometry-practice-startup-cost/",
  },
  {
    label: "Practice Profit Calculator",
    description: "Model net margin from collections, payroll, optical COGS, and overhead.",
    href: "/calculators/optometry-practice-profit/",
  },
  {
    label: "Practice Valuation Calculator",
    description: "Estimate practice value using EBITDA multiples and optical revenue quality.",
    href: "/calculators/optometry-practice-valuation/",
  },
  {
    label: "Revenue per Patient Calculator",
    description: "Calculate annual revenue per patient from visits and optical attach.",
    href: "/calculators/optometry-practice-revenue-per-patient/",
  },
  {
    label: "Insurance Mix Calculator",
    description: "Model margin impact from vision plan vs medical vs private-pay mix.",
    href: "/calculators/optometry-practice-insurance-mix/",
  },
  {
    label: "Optical Capture Rate Calculator",
    description: "Measure dispensary conversion from exams to eyewear sales.",
    href: "/calculators/optometry-practice-optical-capture-rate/",
  },
  {
    label: "Break-even Calculator",
    description: "Find daily exams and optical sales needed to cover fixed costs.",
    href: "/calculators/optometry-practice-break-even/",
  },
  {
    label: "Staffing Cost Calculator",
    description: "Model staff payroll as a percentage of revenue and per-OD burden.",
    href: "/calculators/optometry-practice-staffing-cost/",
  },
] as const;

export const relatedHealthcareIndustries = [
  { label: "Dentistry", href: "/industries/healthcare/dental-practice/" },
  { label: "Chiropractic", href: "/industries/healthcare/chiropractic-clinic/" },
  { label: "Physical Therapy", href: "/industries/healthcare/physical-therapy-clinic/" },
  { label: "Veterinary Clinic", href: "/industries/healthcare/veterinary-clinic/" },
  { label: "Dermatology", href: "/industries/dermatology/", comingSoon: true },
  { label: "Audiology", href: "/industries/audiology/", comingSoon: true },
  { label: "Urgent Care", href: "/industries/urgent-care/", comingSoon: true },
] as const;

export {
  benchmarkDefaults,
  benchmarkThresholds,
  businessQualityScorecard,
  industryInsights,
  industryOpportunities,
  industryRisks,
  industrySnapshotRatings,
  insuranceMetrics,
  marginMetrics,
  marginTiers,
  medicalBenchmarkRankings,
  operatingMetrics,
  ownerEconomicsCards,
  patientMetrics,
  practiceEconomicsMatrix,
  retailSalesMetrics,
  revenueDistribution,
  revenueMix,
  revenuePercentiles,
  startupCostBreakdown,
  startupCostTotal,
  valuationDefaults,
  valuationMultiples,
};
