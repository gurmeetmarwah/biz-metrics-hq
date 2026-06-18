export const pestControlHubLabels = {
  left: "Pest Control",
  breadcrumbHub: { label: "Pest Control", href: "/industries/pest-control/" },
  exploreHub: { label: "Explore Pest Control Hub →", href: "/industries/pest-control/" },
} as const;

export const pestControlCalculators = [
  { label: "Route Density Calculator", href: "/calculators/pest-control-route-density/" },
  { label: "Customer LTV Calculator", href: "/calculators/pest-control-customer-lifetime-value/" },
  { label: "Recurring Revenue Calculator", href: "/calculators/pest-control-recurring-revenue/" },
  { label: "Profit Margin Calculator", href: "/calculators/pest-control-profit-margin/" },
  { label: "Business Valuation Calculator", href: "/calculators/pest-control-valuation/" },
] as const;

export const pestControlKpis = {
  annualRevenue: "$400K – $1.8M",
  netMargin: "15 – 25%",
  ownerComp: "$75K – $180K",
  revenuePerTech: "$120K – $200K",
  startup: "$50K – $150K",
  valuation: "2.5× – 4.0× SDE",
  recurringPct: "70 – 90%",
} as const;

export const pestControlRevenueSources = [
  "Quarterly Pest Treatments",
  "Termite Inspections & Bonds",
  "Rodent & Wildlife Control",
  "Commercial Pest Contracts",
  "One-Time Infestation Remediation",
] as const;

export const pestControlRevenueFunnel = [
  "Lead",
  "Inspection",
  "Treatment Plan",
  "Service",
  "Recurring Contract",
  "Revenue",
] as const;

export const pestControlCustomerFunnel = [
  "Homeowner",
  "Initial Treatment",
  "Quarterly Visits",
  "Upsell/Add-On",
  "Renewal",
] as const;

export const pestControlOperatoryFunnel = ["Technician", "Accounts", "Revenue"] as const;

export const pestControlMarginTiers = {
  weak: "10 – 14%",
  average: "15 – 18%",
  strong: "19 – 22%",
} as const;

export const pestControlStartupItems = [
  { item: "Vehicles & Equipment", percent: 25 },
  { item: "Chemicals & Supplies", percent: 15 },
  { item: "Marketing Launch", percent: 25 },
  { item: "Working Capital", percent: 35 },
] as const;

export const pestControlStartupSideBySide = {
  equipment: "$20K – $60K",
  vehicles: "Included above",
  marketing: "$15K – $40K",
  total: "$50K – $150K",
} as const;

export const pestControlValuation = {
  sde: "2.5× – 4.0×",
  revenue: "0.8× – 1.4×",
  ebitda: "4.5× – 7.0×",
  example: { revenue: "$900K", value: "$625K – $1M", note: "3.2× SDE on $250K SDE" },
} as const;

export const pestControlScalingLadder = [
  "1 Route",
  "2 – 4 Technicians",
  "Subscription Base",
  "Multi-Branch Operation",
] as const;

export const pestControlCapitalEfficiency = {
  revenue: "$700K – $1.3M",
  profit: "$140K – $280K net profit",
  payback: "2 – 3 years",
} as const;

export const pestControlInsuranceHighlight = {
  title: "Subscription Revenue Engine",
  value: "70 – 90% recurring contracts",
} as const;
