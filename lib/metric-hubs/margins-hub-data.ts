import { sortByMargin } from "./industry-benchmarks";

export const marginsHubMeta = {
  title: "Profit Margin Benchmarks by Industry",
  subtitle: "Compare profit margins across hundreds of businesses.",
  dataVintage: "2025–2026",
  sampleSize: "350+ businesses",
} as const;

export const marginRankings = sortByMargin().slice(0, 10).map((b, i) => ({
  rank: i + 1,
  industry: b.name,
  median: b.netMarginLabel,
  range: b.marginRange,
  href: b.marginHref ?? b.hubHref ?? "#",
}));

export const highestMarginBusinesses = [
  { label: "Pest Control", href: "/industries/pest-control/#profitability", median: "18%" },
  { label: "HVAC", href: "/industries/hvac/#profitability", median: "12%" },
  { label: "Dental Practices", href: "/industries/healthcare/dental-practice/#profitability", median: "22%" },
  { label: "Chiropractic Clinics", href: "/industries/healthcare/chiropractic-clinic/#profitability", median: "18%" },
  { label: "Cleaning Business", href: "/industries/cleaning-business/#profitability", median: "15%" },
] as const;

export const lowestMarginBusinesses = [
  { label: "Restaurants", href: "/industries/restaurant/#profit-margins", median: "8%" },
  { label: "Landscaping", href: "/industries/landscaping/#profitability", median: "8%" },
  { label: "Roofing", href: "/industries/roofing/#profitability", median: "10%" },
  { label: "Bakeries", href: "/industries/food-beverage/bakery/", median: "10%" },
] as const;

export const marginLeaderboardBands = [
  {
    label: "10%+",
    description: "Above-average net margin operators",
    industries: ["Pest Control", "Dental", "Chiropractic", "Cleaning", "HVAC", "Plumbing", "Veterinary"],
  },
  {
    label: "20%+",
    description: "Top-quartile profitability",
    industries: ["Dental Practice", "Pest Control", "Chiropractic Clinic"],
  },
  {
    label: "Under 10%",
    description: "Thin-margin industries — volume-driven",
    industries: ["Restaurant", "Landscaping", "Roofing", "Bakery", "Food Truck"],
  },
] as const;

export const marginComparisons = [
  { label: "HVAC vs Plumbing Margins", href: "/comparisons/hvac-vs-plumbing/" },
  { label: "Pest Control vs Cleaning Margins", href: "/comparisons/pest-control-vs-cleaning-business/" },
  { label: "Landscaping vs Roofing Margins", href: "/comparisons/landscaping-vs-roofing/" },
  { label: "Dental vs Veterinary Margins", href: "/comparisons/dental-practice-vs-veterinary-clinic/" },
] as const;

export const marginDrivers = [
  { title: "Labor Efficiency", description: "Revenue per employee and utilization rates are the primary margin lever in service businesses." },
  { title: "Recurring Revenue", description: "Predictable contract income reduces marketing costs and stabilizes margins." },
  { title: "Route Density", description: "Clustered stops and tight scheduling minimize drive time and labor waste." },
  { title: "Commercial Accounts", description: "B2B contracts offer volume but often trade margin for stability." },
  { title: "Pricing Power", description: "Specialized skills, licensing, and brand reputation enable premium pricing." },
] as const;

export const marginsQuickLinks = [
  { label: "Pest control margins", href: "/industries/pest-control/#profitability" },
  { label: "HVAC margins", href: "/industries/hvac/#profitability" },
  { label: "Restaurant margins", href: "/industries/restaurant/#profit-margins" },
  { label: "Dental margins", href: "/industries/healthcare/dental-practice/#profitability" },
] as const;
