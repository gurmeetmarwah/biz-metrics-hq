export const navLinks = [
  { label: "Industries", href: "/" },
  { label: "Revenue", href: "/revenue/" },
  { label: "Margins", href: "/margins/" },
  { label: "Valuation", href: "/valuation/" },
  { label: "Calculators", href: "/calculators/" },
] as const;

export const popularIndustries = [
  { label: "HVAC", href: "/industries/hvac/" },
  { label: "Restaurant", href: "/industries/restaurant/" },
  { label: "Dental", href: "/industries/healthcare/dental-practice/" },
] as const;

/** Live platform counts — update when adding industries, pages, or benchmark data. */
export const platformStats = {
  industries: 6,
  benchmarks: 350,
  dataPages: 45,
  coreMetrics: 4,
} as const;

export const quickStats = [
  { value: `${platformStats.industries}+`, label: "Industries" },
  { value: `${platformStats.benchmarks}+`, label: "Benchmarks" },
  { value: `${platformStats.dataPages}+`, label: "Data Pages" },
  { value: "4 Core", label: "Metrics" },
] as const;

export const industryCategories = [
  {
    name: "Food & Beverage",
    industries: [
      { label: "Restaurant", href: "/industries/restaurant/" },
      { label: "Coffee Shop", href: "/industries/restaurant-types/coffee-shop/" },
      { label: "Bakery", href: "/industries/food-beverage/bakery/" },
      { label: "Food Truck", href: "/industries/food-beverage/food-truck/" },
    ],
  },
  {
    name: "Healthcare",
    industries: [
      { label: "Dental Practice", href: "/industries/healthcare/dental-practice/" },
      { label: "Veterinary Clinic", href: "/industries/healthcare/veterinary-clinic/" },
      { label: "Physical Therapy Clinic", href: "/industries/healthcare/physical-therapy-clinic/" },
      { label: "Chiropractic Clinic", href: "/industries/healthcare/chiropractic-clinic/" },
    ],
  },
  {
    name: "Home Services",
    industries: [
      { label: "HVAC", href: "/industries/hvac/" },
      { label: "Plumbing", href: "/industries/plumbing/" },
      { label: "Electrical", href: "/industries/electrical/" },
      { label: "Roofing", href: "/industries/roofing/" },
      { label: "Landscaping", href: "/industries/landscaping/" },
      { label: "Pest Control", href: "/industries/pest-control/" },
      { label: "Cleaning Business", href: "/industries/cleaning-business/" },
    ],
  },
] as const;

export const metrics = [
  {
    label: "Revenue",
    description: "Interquartile revenue ranges by industry",
    href: "/revenue/",
  },
  {
    label: "Profit Margin",
    description: "Net margin ranges with median benchmarks",
    href: "/margins/",
  },
  {
    label: "Valuation",
    description: "SDE multiple ranges with methodology",
    href: "/valuation/",
  },
] as const;

export const comparisons = [
  { label: "HVAC vs Plumbing", href: "/compare/hvac-vs-plumbing/" },
  { label: "Restaurant vs Food Truck", href: "/industries/comparisons/restaurant-vs-food-truck/" },
  { label: "Dental vs Veterinary", href: "/comparisons/dental-practice-vs-veterinary-clinic/" },
] as const;

export const calculators = [
  { label: "Business Valuation Calculator", href: "/calculators/pest-control-valuation/" },
  { label: "Profit Margin Calculator", href: "/calculators/hvac-profit-margin/" },
  { label: "Break-even Calculator", href: "/calculators/restaurant-break-even/" },
  { label: "Revenue Per Technician", href: "/calculators/hvac-revenue-per-technician/" },
] as const;

export const reports = [
  {
    title: "Restaurant Economics Report 2026",
    href: "/reports/restaurant-economics-2026/",
  },
  {
    title: "HVAC Industry Benchmarks 2026",
    href: "/reports/hvac-benchmarks-2026/",
  },
  {
    title: "Dental Practice Economic Report 2026",
    href: "/reports/dental-practice-economics-2026/",
  },
] as const;
