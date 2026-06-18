export const landscapingHubLabels = {
  left: "Landscaping",
  breadcrumbHub: { label: "Landscaping", href: "/industries/landscaping/" },
  exploreHub: { label: "Explore Landscaping Hub →", href: "/industries/landscaping/" },
} as const;

export const landscapingCalculators = [
  { label: "Landscaping Revenue Calculator", href: "/calculators/landscaping-revenue/" },
  { label: "Landscaping Profit Calculator", href: "/calculators/landscaping-profit/" },
  { label: "Crew Productivity Calculator", href: "/calculators/landscaping-crew-productivity/" },
  { label: "Landscaping Valuation Calculator", href: "/calculators/landscaping-valuation/" },
  { label: "Commercial Contract Calculator", href: "/calculators/landscaping-commercial-contract/" },
] as const;

export const landscapingKpis = {
  annualRevenue: "$600K – $2.5M",
  netMargin: "5 – 12%",
  ownerComp: "$70K – $150K",
  revenuePerCrew: "$200K – $350K",
  startup: "$75K – $250K",
  valuation: "1.8× – 2.8× SDE",
  maintenancePct: "35 – 55%",
} as const;

export const landscapingRevenueSources = [
  "Residential Maintenance Routes",
  "Commercial Grounds Contracts",
  "Landscape Design & Install",
  "Hardscape & Outdoor Living",
  "Irrigation & Enhancements",
] as const;

export const landscapingRevenueFunnel = [
  "Lead",
  "Estimate",
  "Crew Dispatch",
  "Service/Install",
  "Recurring Contract",
  "Revenue",
] as const;

export const landscapingCustomerFunnel = [
  "Property Owner",
  "Weekly Service",
  "Seasonal Upsells",
  "Design Project",
  "Renewal",
] as const;

export const landscapingOperatoryFunnel = ["Crew", "Properties", "Revenue"] as const;

export const landscapingMarginTiers = {
  weak: "3 – 5%",
  average: "6 – 8%",
  strong: "9 – 12%",
} as const;

export const landscapingStartupItems = [
  { item: "Mowers & Equipment", percent: 30 },
  { item: "Trucks & Trailers", percent: 25 },
  { item: "Marketing Launch", percent: 15 },
  { item: "Working Capital", percent: 30 },
] as const;

export const landscapingStartupSideBySide = {
  equipment: "$25K – $80K",
  vehicles: "$20K – $60K",
  marketing: "$15K – $40K",
  total: "$75K – $250K",
} as const;

export const landscapingValuation = {
  sde: "1.8× – 2.8×",
  revenue: "0.35× – 0.65×",
  ebitda: "2.8× – 4.5×",
  example: { revenue: "$1.1M", value: "$356K – $554K", note: "2.2× SDE on $198K SDE" },
} as const;

export const landscapingScalingLadder = [
  "1 Crew",
  "Weekly Route Density",
  "3 – 5 Crews",
  "Commercial Contracts",
] as const;

export const landscapingCapitalEfficiency = {
  revenue: "$800K – $1.4M",
  profit: "$64K – $154K net profit",
  payback: "2 – 4 years",
} as const;

export const landscapingInsuranceHighlight = {
  title: "Contract Recurrence",
  value: "35 – 55% recurring maintenance",
} as const;
