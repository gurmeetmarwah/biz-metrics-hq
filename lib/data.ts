import { industryDirectory } from "@/lib/industry-directory";

export const navLinks = [
  { label: "Industries", href: "/industries/" },
  { label: "Calculators", href: "/calculators/" },
  { label: "Benchmarks", href: "/revenue/" },
  { label: "Reports", href: "/industries/" },
  { label: "Comparisons", href: "/comparisons/hvac-vs-plumbing/" },
  { label: "Franchise Economics", href: "/franchise/" },
] as const;

export const popularIndustries = [
  { label: "HVAC", href: "/industries/hvac/" },
  { label: "Restaurant", href: "/industries/restaurant/" },
  { label: "Dental", href: "/industries/healthcare/dental-practice/" },
] as const;

export const industryCategories = industryDirectory.map((category) => ({
  name: category.name,
  key: category.key,
  industries: category.industries.map((industry) => ({
    label: industry.label,
    slug: industry.slug,
    href: industry.href,
    ...(industry.comingSoon ? { comingSoon: true as const } : {}),
  })),
}));

export const metrics = [
  {
    label: "Revenue",
    description: "See typical top-line ranges so you can track growth with confidence",
    href: "/revenue/",
  },
  {
    label: "Profit Margin",
    description: "How to track business profitability metrics against peer margins",
    href: "/margins/",
  },
  {
    label: "Valuation",
    description: "What buyers pay—and how cash flow vs profitability shapes value",
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
  { label: "Easy Small Business Profit Margin Calculator", href: "/calculators/hvac-profit-margin/" },
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
