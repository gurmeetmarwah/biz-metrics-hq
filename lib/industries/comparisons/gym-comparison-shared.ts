export const gymHubLabels = {
  left: "Gym",
  breadcrumbHub: { label: "Gym", href: "/industries/gym/" },
  exploreHub: { label: "Explore Gym Hub →", href: "/industries/gym/" },
} as const;

export const gymCalculators = [
  { label: "Gym Revenue Calculator", href: "/calculators/gym-revenue/" },
  { label: "Membership Growth Calculator", href: "/calculators/gym-membership-growth/" },
  { label: "Member LTV Calculator", href: "/calculators/gym-member-lifetime-value/" },
  { label: "Churn Rate Calculator", href: "/calculators/gym-churn-rate/" },
  { label: "Gym Valuation Calculator", href: "/calculators/gym-valuation/" },
] as const;

export const gymKpis = {
  annualRevenue: "$650K – $1.8M",
  netMargin: "12 – 22%",
  ownerComp: "$85K – $160K",
  revenuePerMember: "$43 – $65/mo",
  startup: "$250K – $600K",
  valuation: "2.8× – 4.2× SDE",
  recurringPct: "55 – 70% MRR",
} as const;

export const gymRevenueSources = [
  "Monthly Membership Dues",
  "Personal Training Packages",
  "Group Fitness Classes",
  "Retail & Supplements",
  "Day Passes & Corporate Wellness",
] as const;

export const gymRevenueFunnel = [
  "Lead",
  "Tour / Trial",
  "Membership Sign-up",
  "Onboarding",
  "Retention & Upsell",
  "Revenue",
] as const;

export const gymMemberFunnel = [
  "Prospect",
  "Trial / Guest Pass",
  "Member",
  "Personal Training Upsell",
  "Referral",
] as const;

export const gymStaffFunnel = ["Member", "Visit Frequency", "Revenue"] as const;

export const gymMarginTiers = {
  weak: "6 – 10%",
  average: "11 – 15%",
  strong: "16 – 22%",
} as const;

export const gymStartupItems = [
  { item: "Equipment & Buildout", percent: 38 },
  { item: "Lease & Deposits", percent: 22 },
  { item: "Marketing Launch", percent: 18 },
  { item: "Working Capital", percent: 22 },
] as const;

export const gymStartupSideBySide = {
  equipment: "$120K – $350K",
  lease: "$40K – $120K",
  marketing: "$25K – $75K",
  total: "$250K – $600K",
} as const;

export const gymValuation = {
  sde: "2.8× – 4.2×",
  revenue: "0.6× – 1.1×",
  ebitda: "4.0× – 6.5×",
  example: { revenue: "$1.2M", value: "$780K – $1.2M", note: "3.5× SDE on $280K SDE" },
} as const;

export const gymScalingLadder = [
  "Single Location",
  "850+ Members",
  "Personal Training Penetration",
  "Multi-Location Operator",
] as const;

export const gymCapitalEfficiency = {
  revenue: "$900K – $1.5M",
  profit: "$108K – $270K net profit",
  payback: "4 – 7 years",
} as const;

export const gymRecurringHighlight = {
  title: "Membership MRR Engine",
  value: "55 – 70% from dues",
} as const;

export const gymRelatedComparisons = [
  { label: "Gym vs Pilates Studio", href: "/comparisons/gym-vs-pilates-studio/" },
  { label: "Gym vs CrossFit", href: "/comparisons/gym-vs-crossfit/" },
  { label: "Gym vs Yoga Studio", href: "/comparisons/gym-vs-yoga-studio/" },
  { label: "Gym vs Martial Arts School", href: "/comparisons/gym-vs-martial-arts-school/" },
  { label: "Gym Industry Hub", href: "/industries/gym/" },
] as const;
