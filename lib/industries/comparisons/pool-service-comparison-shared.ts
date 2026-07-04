export const poolServiceHubLabels = {
  left: "Pool Service",
  breadcrumbHub: { label: "Pool Service", href: "/industries/pool-service/" },
  exploreHub: { label: "Explore Pool Service Hub →", href: "/industries/pool-service/" },
} as const;

export const poolServiceCalculators = [
  { label: "Pool Service Startup Cost Calculator", href: "/calculators/pool-service-startup-cost/" },
  { label: "Pool Service Profit Calculator", href: "/calculators/pool-service-profit/" },
  { label: "Pool Service Valuation Calculator", href: "/calculators/pool-service-valuation/" },
  { label: "Monthly Recurring Revenue Calculator", href: "/calculators/pool-service-monthly-recurring-revenue/" },
  { label: "Route Profitability Calculator", href: "/calculators/pool-service-route-profitability/" },
  { label: "Customer LTV Calculator", href: "/calculators/pool-service-customer-lifetime-value/" },
  { label: "Break-Even Calculator", href: "/calculators/pool-service-break-even/" },
  { label: "Technician Revenue Calculator", href: "/calculators/pool-service-technician-revenue/" },
] as const;

export const poolServiceKpis = {
  annualRevenue: "$550K – $1.4M",
  netMargin: "18 – 26%",
  ownerComp: "$95K – $200K",
  revenuePerTech: "$160K – $220K",
  startup: "$65K – $165K",
  valuation: "3.0× – 4.5× SDE",
  recurringPct: "75 – 85%",
} as const;

export const poolServiceRevenueSources = [
  "Weekly Pool Cleaning Routes",
  "Chemical Treatments & Balancing",
  "Equipment Repair & Upgrades",
  "Pool Openings & Closings",
  "Commercial Pool Contracts",
] as const;

export const poolServiceRevenueFunnel = [
  "Lead",
  "Route Estimate",
  "Service Agreement",
  "Weekly Service",
  "Repair Upsell",
  "Revenue",
] as const;

export const poolServiceCustomerFunnel = [
  "Homeowner",
  "Weekly Cleaning",
  "Chemical Program",
  "Equipment Repair",
  "Renewal",
] as const;

export const poolServiceOperatoryFunnel = ["Technician", "Pools", "Revenue"] as const;

export const poolServiceMarginTiers = {
  weak: "12 – 16%",
  average: "17 – 21%",
  strong: "22 – 26%",
} as const;

export const poolServiceStartupItems = [
  { item: "Service Vehicle", percent: 32 },
  { item: "Equipment & Vacuum", percent: 22 },
  { item: "Chemicals & Insurance", percent: 18 },
  { item: "Working Capital", percent: 28 },
] as const;

export const poolServiceStartupSideBySide = {
  vehicle: "$25K – $55K",
  equipment: "$15K – $35K",
  marketing: "$5K – $15K",
  total: "$65K – $165K",
} as const;

export const poolServiceValuation = {
  sde: "3.0× – 4.5×",
  revenue: "0.9× – 1.6×",
  ebitda: "4.5× – 7.0×",
  example: { revenue: "$950K", value: "$1.0M – $1.55M", note: "3.6× SDE on $344K SDE" },
} as const;

export const poolServiceScalingLadder = [
  "1 Route",
  "2 – 4 Technicians",
  "MRR Base",
  "Multi-Crew / Commercial",
] as const;

export const poolServiceCapitalEfficiency = {
  revenue: "$750K – $1.2M",
  profit: "$165K – $312K net profit",
  payback: "2 – 4 years",
} as const;

export const poolServiceInsuranceHighlight = {
  title: "Recurring Route Revenue",
  value: "75 – 85% monthly contracts",
} as const;
