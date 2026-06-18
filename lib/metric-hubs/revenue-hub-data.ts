import { sortByRevenue } from "./industry-benchmarks";

export const revenueHubMeta = {
  title: "Revenue Benchmarks by Industry",
  subtitle: "Search and compare average revenue across hundreds of businesses.",
  dataVintage: "2025–2026",
  sampleSize: "350+ businesses",
} as const;

export const revenueRankings = sortByRevenue().slice(0, 10).map((b, i) => ({
  rank: i + 1,
  industry: b.name,
  median: b.medianRevenueLabel,
  range: b.revenueRange,
  href: b.revenueHref ?? b.hubHref ?? "#",
}));

export const browseByCategory = [
  {
    name: "Home Services",
    industries: [
      { label: "HVAC", href: "/industries/hvac/#revenue-benchmark" },
      { label: "Roofing", href: "/industries/roofing/#revenue-benchmark" },
      { label: "Plumbing", href: "/industries/plumbing/#revenue-benchmark" },
      { label: "Electrical", href: "/industries/electrical/#revenue-benchmark" },
      { label: "Pest Control", href: "/industries/pest-control/#revenue-benchmark" },
      { label: "Landscaping", href: "/industries/landscaping/#revenue-benchmark" },
      { label: "Cleaning Business", href: "/industries/cleaning-business/#revenue-benchmark" },
    ],
  },
  {
    name: "Healthcare",
    industries: [
      { label: "Dental Practice", href: "/industries/healthcare/dental-practice/#revenue-benchmark" },
      { label: "Veterinary Clinic", href: "/industries/healthcare/veterinary-clinic/#revenue-benchmark" },
      { label: "Physical Therapy", href: "/industries/healthcare/physical-therapy-clinic/#revenue-benchmark" },
      { label: "Chiropractic Clinic", href: "/industries/healthcare/chiropractic-clinic/#revenue-benchmark" },
    ],
  },
  {
    name: "Food & Beverage",
    industries: [
      { label: "Restaurant", href: "/industries/restaurant/#revenue" },
      { label: "Coffee Shop", href: "/industries/food-beverage/coffee-shop/" },
      { label: "Bakery", href: "/industries/food-beverage/bakery/" },
      { label: "Food Truck", href: "/industries/food-beverage/food-truck/" },
    ],
  },
  {
    name: "Professional Services",
    industries: [
      { label: "Property Management", comingSoon: true },
      { label: "Accounting Firms", comingSoon: true },
      { label: "Legal Practices", comingSoon: true },
    ],
  },
  {
    name: "Retail",
    industries: [
      { label: "Grocery Stores", comingSoon: true },
      { label: "Convenience Stores", comingSoon: true },
      { label: "Specialty Retail", comingSoon: true },
    ],
  },
  {
    name: "Fitness",
    industries: [
      { label: "Gym / Fitness Studio", comingSoon: true },
      { label: "Yoga Studio", comingSoon: true },
      { label: "CrossFit Box", comingSoon: true },
    ],
  },
] as const;

export const revenueDistributionBands = [
  { label: "Under $500K", description: "Solo operators, early-stage businesses", share: "35%", examples: "Food trucks, chiropractic, cleaning" },
  { label: "$500K – $1M", description: "Established small businesses", share: "28%", examples: "Pest control, coffee shops, PT clinics" },
  { label: "$1M – $5M", description: "Growth-stage operators", share: "26%", examples: "HVAC, plumbing, dental, landscaping" },
  { label: "$5M – $10M", description: "Multi-location operators", share: "7%", examples: "Regional HVAC, roofing, electrical" },
  { label: "$10M+", description: "Scaled platforms & consolidators", share: "4%", examples: "PE-backed home services, DSOs" },
] as const;

export const highestRevenueIndustries = [
  { label: "HVAC Revenue", href: "/industries/hvac/#revenue-benchmark", median: "$2.4M" },
  { label: "Plumbing Revenue", href: "/industries/plumbing/#revenue-benchmark", median: "$1.6M" },
  { label: "Roofing Revenue", href: "/industries/roofing/#revenue-benchmark", median: "$2.0M" },
  { label: "Pest Control Revenue", href: "/industries/pest-control/#revenue-benchmark", median: "$900K" },
  { label: "Electrical Revenue", href: "/industries/electrical/#revenue-benchmark", median: "$2.0M" },
] as const;

export const revenueComparisons = [
  { label: "HVAC vs Plumbing Revenue", href: "/comparisons/hvac-vs-plumbing/" },
  { label: "Roofing vs Landscaping Revenue", href: "/comparisons/landscaping-vs-roofing/" },
  { label: "Pest Control vs Cleaning Revenue", href: "/comparisons/pest-control-vs-cleaning-business/" },
  { label: "Dental vs Veterinary Revenue", href: "/comparisons/dental-practice-vs-veterinary-clinic/" },
] as const;

export const revenueDrivers = [
  { title: "Employees", description: "Revenue scales with field staff count — technicians, cleaners, or clinicians drive top-line growth." },
  { title: "Service Area", description: "Geographic density and market size determine account volume and average contract values." },
  { title: "Pricing", description: "Ticket size, hourly rates, and contract pricing directly impact revenue per customer." },
  { title: "Recurring Revenue", description: "Subscription contracts, maintenance plans, and repeat schedules compound annual revenue." },
  { title: "Commercial Contracts", description: "B2B accounts typically generate higher annual values than residential one-off jobs." },
] as const;

export const revenueQuickLinks = [
  { label: "HVAC revenue", href: "/industries/hvac/#revenue-benchmark" },
  { label: "Dental revenue", href: "/industries/healthcare/dental-practice/#revenue-benchmark" },
  { label: "Restaurant revenue", href: "/industries/restaurant/#revenue" },
  { label: "Pest control revenue", href: "/industries/pest-control/#revenue-benchmark" },
] as const;
