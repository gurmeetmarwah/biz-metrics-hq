export const cleaningHubLabels = {
  left: "Cleaning Business",
  breadcrumbHub: { label: "Cleaning Business", href: "/industries/cleaning-business/" },
  exploreHub: { label: "Explore Cleaning Business Hub →", href: "/industries/cleaning-business/" },
} as const;

export const cleaningCalculators = [
  { label: "Revenue Per Cleaner Calculator", href: "/calculators/cleaning-business-revenue-per-cleaner/" },
  { label: "Contract Value Calculator", href: "/calculators/cleaning-business-contract-value/" },
  { label: "Customer LTV Calculator", href: "/calculators/cleaning-business-customer-lifetime-value/" },
  { label: "Profit Margin Calculator", href: "/calculators/cleaning-business-profit-margin/" },
  { label: "Business Valuation Calculator", href: "/calculators/cleaning-business-valuation/" },
] as const;

export const cleaningKpis = {
  annualRevenue: "$200K – $1M",
  netMargin: "10 – 20%",
  ownerComp: "$50K – $120K",
  revenuePerCleaner: "$80K – $150K",
  startup: "$10K – $75K",
  valuation: "1.8× – 3.0× SDE",
  recurringPct: "50 – 75%",
} as const;

export const cleaningRevenueSources = [
  "Residential Recurring Cleaning",
  "Commercial Office Cleaning",
  "Move-In/Move-Out Deep Cleans",
  "Post-Construction Cleanup",
  "Specialty Floor & Carpet Care",
] as const;

export const cleaningRevenueFunnel = [
  "Lead",
  "Estimate",
  "Trial Clean",
  "Recurring Schedule",
  "Upsell/Add-On",
  "Revenue",
] as const;

export const cleaningCustomerFunnel = [
  "Homeowner/Business",
  "Initial Clean",
  "Weekly/Biweekly Visits",
  "Deep Clean Upsell",
  "Renewal",
] as const;

export const cleaningOperatoryFunnel = ["Cleaner/Crew", "Stops", "Revenue"] as const;

export const cleaningMarginTiers = {
  weak: "5 – 9%",
  average: "10 – 15%",
  strong: "16 – 22%",
} as const;

export const cleaningStartupItems = [
  { item: "Cleaning Equipment & Supplies", percent: 20 },
  { item: "Vehicle & Transport", percent: 15 },
  { item: "Marketing Launch", percent: 25 },
  { item: "Working Capital", percent: 40 },
] as const;

export const cleaningStartupSideBySide = {
  equipment: "$2K – $15K",
  vehicles: "$5K – $25K",
  marketing: "$3K – $20K",
  total: "$10K – $75K",
} as const;

export const cleaningValuation = {
  sde: "1.8× – 3.0×",
  revenue: "0.4× – 0.8×",
  ebitda: "3.0× – 5.0×",
  example: { revenue: "$500K", value: "$200K – $360K", note: "2.4× SDE on $120K SDE" },
} as const;

export const cleaningScalingLadder = [
  "Solo Cleaner",
  "Small Crew",
  "Recurring Client Base",
  "Multi-Crew Operation",
] as const;

export const cleaningCapitalEfficiency = {
  revenue: "$350K – $650K",
  profit: "$52K – $117K net profit",
  payback: "1 – 2.5 years",
} as const;

export const cleaningInsuranceHighlight = {
  title: "Lowest Barrier Entry",
  value: "No licensing required",
} as const;
