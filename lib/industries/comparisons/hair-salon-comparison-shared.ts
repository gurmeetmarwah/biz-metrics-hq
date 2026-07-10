export const hairSalonHubLabels = {
  left: "Hair Salon",
  breadcrumbHub: { label: "Hair Salon", href: "/industries/beauty/hair-salon/" },
  exploreHub: { label: "Explore Hair Salon Hub →", href: "/industries/beauty/hair-salon/" },
} as const;

export const hairSalonCalculators = [
  { label: "Hair Salon Revenue Calculator", href: "/calculators/hair-salon-revenue/" },
  { label: "Hair Salon Profit Margin Calculator", href: "/calculators/hair-salon-profit-margin/" },
  { label: "Hair Salon Startup Cost Calculator", href: "/calculators/hair-salon-startup-cost/" },
  { label: "Hair Salon Valuation Calculator", href: "/calculators/hair-salon-valuation/" },
  { label: "Hair Salon Break-even Calculator", href: "/calculators/hair-salon-break-even/" },
  { label: "Hair Salon Chair Utilization Calculator", href: "/calculators/hair-salon-chair-utilization/" },
] as const;

export const hairSalonLeftKpis = {
  annualRevenue: "$250K – $500K",
  netMargin: "8 – 15%",
  ownerComp: "$40K – $85K",
  monthlyVisits: "900 – 1,600",
  revenuePerClient: "$65 average ticket",
  startup: "$80K – $250K",
  valuation: "1.8× – 3.0× SDE",
} as const;

export const hairSalonLeftRevenueSources = [
  "Haircuts and styling",
  "Color and highlights",
  "Chemical treatments (perms, keratin)",
  "Blowouts and updos",
  "Retail product sales",
  "Memberships and packages",
] as const;

export const hairSalonLeftRevenueFunnel = [
  "New Client",
  "Service Booking",
  "Add-on / Color Upsell",
  "Retail Attach",
  "Rebooking",
] as const;

export const hairSalonLeftClientFunnel = [
  "New Client",
  "First Service",
  "Rebooking",
  "Loyal Repeat Client",
] as const;

export const hairSalonLeftServiceFunnel = [
  "Chair Capacity",
  "Booked Utilization",
  "Average Ticket",
  "Collected Revenue",
] as const;

export const hairSalonLeftMarginTiers = {
  weak: "5 – 8%",
  average: "9 – 13%",
  strong: "16 – 22%",
} as const;

export const hairSalonLeftStartupItems = [
  { item: "Buildout", percent: 35 },
  { item: "Stations & Equipment", percent: 22 },
  { item: "Inventory", percent: 8 },
  { item: "Working Capital", percent: 13 },
] as const;

export const hairSalonLeftStartupSideBySide = {
  buildout: "$30K – $80K",
  equipment: "$20K – $45K",
  inventory: "$5K – $15K",
  total: "$80K – $250K",
} as const;

export const hairSalonLeftValuation = {
  sde: "1.8× – 3.0×",
  revenue: "0.4× – 0.7×",
  example: { revenue: "$320K", value: "$120K – $195K", note: "2.3–3.0× SDE on $65K" },
} as const;

export const hairSalonLeftRecurringHighlight = {
  title: "Rebooking + Retail Hybrid",
  value: "45–60% rebooking with 8–12% retail attach",
} as const;

export const hairSalonLeftClientEconomics = [
  { metric: "Average Ticket", value: "$45 – $85" },
  { metric: "Annual Visits Per Client", value: "5 – 9" },
  { metric: "Estimated Lifetime Value", value: "$1,200 – $3,500" },
  { metric: "Client Retention", value: "60 – 75%" },
] as const;

export const hairSalonLeftServiceMetrics = [
  { metric: "Revenue Per Chair", value: "$45K – $90K" },
  { metric: "Revenue Per Stylist", value: "$60K – $120K" },
  { metric: "Chair Utilization", value: "65 – 80%" },
] as const;

export const hairSalonLeftScalingLadder = [
  "Single Chair / Booth",
  "Full Salon (5–8 chairs)",
  "Add Color Bar & Retail",
  "Second Location",
] as const;

export const hairSalonLeftCapitalEfficiency = {
  revenue: "$300K – $480K",
  profit: "$25K – $55K net profit",
  payback: "3 – 5 years",
} as const;

export const hairSalonLeftCostStructure = [
  { expense: "Payroll & Commissions", value: "45 – 50%" },
  { expense: "Product COGS", value: "10 – 14%" },
  { expense: "Rent", value: "10 – 16%" },
  { expense: "Other Overhead", value: "12 – 18%" },
] as const;

export const hairSalonLeftRecurringComparison = [
  { metric: "Rebooking Rate", value: "45 – 60%" },
  { metric: "Retail Attachment", value: "8 – 12%" },
  { metric: "Membership Adoption", value: "5 – 15%" },
] as const;

export const hairSalonLeftOwnerIncome = [
  { model: "Owner-Operator Hair Salon", earnings: "$40K – $85K" },
  { model: "Established Multi-Stylist Salon", earnings: "$90K – $140K" },
] as const;

export const hairSalonLeftBreakEven = [
  { metric: "Monthly Revenue Needed", value: "$22K – $30K" },
  { metric: "Appointments Per Day", value: "18 – 30" },
  { metric: "Months to Break-Even", value: "12 – 24 months" },
] as const;
