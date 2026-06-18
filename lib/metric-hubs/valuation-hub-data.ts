import { sortByValuation } from "./industry-benchmarks";

export const valuationHubMeta = {
  title: "Business Valuation Benchmarks",
  subtitle: "Discover what businesses are worth and how valuation multiples compare.",
  dataVintage: "2025–2026",
  sampleSize: "350+ businesses",
} as const;

export const valuationRankings = sortByValuation().slice(0, 10).map((b, i) => ({
  rank: i + 1,
  industry: b.name,
  median: b.sdeMultipleLabel,
  range: b.sdeRange,
  href: b.valuationHref ?? b.hubHref ?? "#",
}));

export const valuationIndustryCards = [
  { label: "HVAC Valuation", href: "/industries/hvac/#valuation", multiple: "3.1× SDE" },
  { label: "Plumbing Valuation", href: "/industries/plumbing/#valuation", multiple: "2.8× SDE" },
  { label: "Pest Control Valuation", href: "/industries/pest-control/#valuation", multiple: "3.2× SDE" },
  { label: "Electrical Valuation", href: "/industries/electrical/#valuation", multiple: "2.8× SDE" },
  { label: "Landscaping Valuation", href: "/industries/landscaping/#valuation", multiple: "2.2× SDE" },
] as const;

export const valuationDrivers = [
  { title: "Recurring Revenue", description: "Maintenance plans and subscription contracts command premium multiples at exit." },
  { title: "Customer Retention", description: "Low churn signals durable cash flow and reduces buyer risk." },
  { title: "Growth Rate", description: "Consistent year-over-year revenue growth supports higher valuation ranges." },
  { title: "Profit Margin", description: "Strong SDE margins relative to industry peers increase buyer confidence." },
  { title: "Owner Dependence", description: "Transferable management and systems reduce key-person discount." },
] as const;

export const valuationComparisons = [
  { label: "HVAC vs Roofing", href: "/comparisons/hvac-vs-roofing/" },
  { label: "Pest Control vs Landscaping", href: "/comparisons/landscaping-vs-pest-control/" },
  { label: "Plumbing vs Electrical", href: "/comparisons/plumbing-vs-electrical/" },
  { label: "Dental vs Veterinary", href: "/comparisons/dental-practice-vs-veterinary-clinic/" },
] as const;

export const acquisitionHotList = [
  { label: "Pest Control", href: "/industries/pest-control/#valuation", note: "PE consolidator interest · 3.2× SDE" },
  { label: "HVAC", href: "/industries/hvac/#valuation", note: "Active M&A market · 3.1× SDE" },
  { label: "Dental Practices", href: "/industries/healthcare/dental-practice/#valuation", note: "DSO acquisition demand · 3.8× SDE" },
  { label: "Veterinary Clinics", href: "/industries/healthcare/veterinary-clinic/#valuation", note: "Corporate roll-up activity · 3.4× SDE" },
  { label: "Physical Therapy", href: "/industries/healthcare/physical-therapy-clinic/#valuation", note: "Platform buyer interest · 3.2× SDE" },
] as const;

export const featuredCalculator = {
  label: "Business Valuation Calculator",
  description: "Estimate your company's market value using SDE multiples and industry benchmarks.",
  href: "/calculators/pest-control-valuation/",
  altHref: "/calculators/hvac-valuation/",
} as const;

export const valuationQuickLinks = [
  { label: "HVAC valuation", href: "/industries/hvac/#valuation" },
  { label: "Pest control valuation", href: "/industries/pest-control/#valuation" },
  { label: "Dental valuation", href: "/industries/healthcare/dental-practice/#valuation" },
  { label: "Valuation calculator", href: "/calculators/pest-control-valuation/" },
] as const;
