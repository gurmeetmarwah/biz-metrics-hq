export const treeServiceHubLabels = {
  left: "Tree Service",
  breadcrumbHub: { label: "Tree Service", href: "/industries/tree-service/" },
  exploreHub: { label: "Explore Tree Service Hub →", href: "/industries/tree-service/" },
} as const;

export const treeServiceCalculators = [
  { label: "Tree Service Startup Cost Calculator", href: "/industries/tree-service/#calculators" },
  { label: "Tree Service Profit Calculator", href: "/industries/tree-service/#calculators" },
  { label: "Tree Service Valuation Calculator", href: "/industries/tree-service/#calculators" },
  { label: "Equipment ROI Calculator", href: "/industries/tree-service/#calculators" },
  { label: "Revenue per Crew Calculator", href: "/industries/tree-service/#calculators" },
  { label: "Break-Even Calculator", href: "/industries/tree-service/#calculators" },
] as const;

export const treeServiceKpis = {
  annualRevenue: "$650K – $2.1M",
  netMargin: "14 – 24%",
  ownerComp: "$95K – $225K",
  revenuePerCrew: "$250K – $500K",
  startup: "$150K – $400K",
  valuation: "2.5× – 4.2× SDE",
  recurringPct: "10 – 25%",
  avgJobValue: "$800 – $4,500",
} as const;

export const treeServiceRevenueSources = [
  "Tree Removal & Stump Grinding",
  "Storm Damage & Emergency Response",
  "Pruning & Canopy Management",
  "Commercial Tree Maintenance",
  "Utility Line Clearance",
] as const;

export const treeServiceRevenueFunnel = [
  "Lead/Storm",
  "Estimate",
  "Crew Dispatch",
  "Removal/Prune",
  "Cleanup",
  "Revenue",
] as const;

export const treeServiceCustomerFunnel = [
  "Property Owner",
  "Assessment",
  "Job Execution",
  "Storm Referral",
  "Repeat Pruning",
] as const;

export const treeServiceOperatoryFunnel = ["Crew", "Jobs", "Revenue"] as const;

export const treeServiceMarginTiers = {
  weak: "10 – 14%",
  average: "15 – 19%",
  strong: "20 – 24%",
} as const;

export const treeServiceStartupItems = [
  { item: "Bucket Trucks & Chippers", percent: 35 },
  { item: "Chainsaws & Safety Gear", percent: 15 },
  { item: "Insurance & Licensing", percent: 20 },
  { item: "Working Capital", percent: 30 },
] as const;

export const treeServiceStartupSideBySide = {
  equipment: "$60K – $200K",
  vehicles: "$40K – $120K",
  insurance: "$15K – $40K",
  total: "$150K – $400K",
} as const;

export const treeServiceValuation = {
  sde: "2.5× – 4.2×",
  revenue: "0.5× – 0.9×",
  ebitda: "4.0× – 6.5×",
  example: { revenue: "$1.25M", value: "$780K – $1.31M", note: "3.7× SDE on $312K SDE" },
} as const;

export const treeServiceScalingLadder = [
  "1 Crew",
  "Bucket Truck",
  "Storm Marketing",
  "Multi-Crew Regional",
] as const;

export const treeServiceCapitalEfficiency = {
  revenue: "$900K – $1.8M",
  profit: "$189K – $432K net profit",
  payback: "2 – 4 years",
} as const;

export const treeServiceInsuranceHighlight = {
  title: "Storm Revenue Driver",
  value: "15 – 35% emergency/storm work",
} as const;
