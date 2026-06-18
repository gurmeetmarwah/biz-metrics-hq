export const plumbingHubLabels = {
  left: "Plumbing",
  breadcrumbHub: { label: "Plumbing", href: "/industries/plumbing/" },
  exploreHub: { label: "Explore Plumbing Hub →", href: "/industries/plumbing/" },
} as const;

export const plumbingCalculators = [
  { label: "Plumbing Revenue Per Technician Calculator", href: "/calculators/plumbing-revenue-per-technician/" },
  { label: "Plumbing Profit Margin Calculator", href: "/calculators/plumbing-profit-margin/" },
  { label: "Plumbing Valuation Calculator", href: "/calculators/plumbing-valuation/" },
  { label: "Plumbing Break-Even Calculator", href: "/calculators/plumbing-break-even/" },
] as const;

export const plumbingKpis = {
  annualRevenue: "$800K – $2.5M",
  netMargin: "8 – 14%",
  ownerComp: "$85K – $165K",
  revenuePerTech: "$150K – $280K",
  startup: "$150K – $400K",
  valuation: "2.2× – 3.5× SDE",
  maintenancePct: "10 – 25%",
} as const;

export const plumbingRevenueSources = [
  "Drain & Sewer Service",
  "Water Heater Repair/Replace",
  "Repipe & Remodel Plumbing",
  "Commercial Service",
  "Emergency Leak Response",
] as const;

export const plumbingRevenueFunnel = [
  "Call/Lead",
  "Dispatch",
  "Diagnosis",
  "Repair/Replace",
  "Revenue",
] as const;

export const plumbingCustomerFunnel = [
  "Homeowner",
  "Service Call",
  "Repeat Repairs",
  "Upgrade/Repipe",
  "Referral",
] as const;

export const plumbingOperatoryFunnel = ["Plumber", "Jobs", "Revenue"] as const;

export const plumbingMarginTiers = {
  weak: "4 – 7%",
  average: "8 – 11%",
  strong: "12 – 15%",
} as const;

export const plumbingStartupItems = [
  { item: "Vehicles & Equipment", percent: 30 },
  { item: "Inventory & Tools", percent: 20 },
  { item: "Marketing Launch", percent: 18 },
  { item: "Working Capital", percent: 32 },
] as const;

export const plumbingStartupSideBySide = {
  vehicles: "$60K – $150K",
  inventory: "$30K – $80K",
  marketing: "$20K – $50K",
  total: "$150K – $400K",
} as const;

export const plumbingValuation = {
  sde: "2.2× – 3.5×",
  revenue: "0.5× – 0.9×",
  ebitda: "3.5× – 5.5×",
  example: { revenue: "$1.6M", value: "$700K – $1.12M", note: "2.8× SDE on $320K SDE" },
} as const;

export const plumbingScalingLadder = [
  "1 Truck",
  "2 – 4 Plumbers",
  "Commercial Accounts",
  "Multi-Crew Operation",
] as const;

export const plumbingCapitalEfficiency = {
  revenue: "$1.2M – $2.0M",
  profit: "$144K – $280K net profit",
  payback: "2.5 – 4 years",
} as const;

export const plumbingInsuranceHighlight = {
  title: "Emergency Demand Driver",
  value: "20 – 35% from emergency calls",
} as const;
