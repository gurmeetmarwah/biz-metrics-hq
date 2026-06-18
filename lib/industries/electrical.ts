export const electricalMeta = {
  slug: "electrical",
  name: "Electrical",
  title: "Electrical Industry Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, valuation multiples, and key economics for electrical contracting businesses.",
  dataVintage: "2025–2026",
  sampleSize: "340+ electrical contracting businesses",
  geography: "United States",
};

export const quickSummary = [
  { metric: "Annual Revenue", value: "$1.0M – $3.2M" },
  { metric: "Net Profit Margin", value: "7 – 13%" },
  { metric: "Owner Compensation", value: "$90K – $175K" },
  { metric: "Revenue Per Electrician", value: "$165K – $295K" },
  { metric: "Commercial Revenue %", value: "35 – 55%" },
  { metric: "Business Value", value: "2.3× – 3.4× SDE" },
] as const;

export const industrySnapshotRatings = [
  { label: "Category", value: "Home Services", rating: null },
  { label: "Business Model", value: "Service + Projects", rating: null },
  { label: "Capital Requirement", value: "Low – Medium", rating: 2 },
  { label: "Labor Dependency", value: "High", rating: 5 },
  { label: "Recurring Revenue", value: "Medium", rating: 3 },
  { label: "Growth Outlook", value: "High", rating: 5 },
] as const;

export const industryInsights = [
  {
    title: "Service and project mix",
    body: "Electrical contractors benefit from residential service work, commercial projects, and infrastructure upgrades — creating multiple revenue streams across repair, install, and bid-based work.",
  },
  {
    title: "Emerging technology demand",
    body: "Growth in EV charging stations, solar installations, and smart-home technology continues to create new revenue opportunities for contractors who invest in specialized training and certifications.",
  },
  {
    title: "Commercial vs residential economics",
    body: "Commercial electrical firms often generate larger contract values and multi-phase projects, while residential service businesses benefit from recurring customer demand and faster payment cycles.",
  },
  {
    title: "Labor as growth constraint",
    body: "Skilled electrician shortages remain one of the largest growth constraints across the industry. Companies with apprentice pipelines and competitive compensation scale faster than peers.",
  },
] as const;

export const revenuePercentiles = [
  { percentile: "25th", revenue: "$1.0M" },
  { percentile: "Median", revenue: "$2.0M" },
  { percentile: "75th", revenue: "$2.8M" },
  { percentile: "Top 10%", revenue: "$4.0M+" },
] as const;

export const revenueDistribution = {
  bottom25: "$1.0M",
  median: "$2.0M",
  top25: "$2.8M",
};

export const revenueDrivers = [
  { label: "Residential Service", description: "Repairs, panel upgrades, rewiring, and fixture installs", share: "25 – 40%" },
  { label: "Commercial Projects", description: "Tenant improvements, building electrical, and service contracts", share: "35 – 55%" },
  { label: "New Construction", description: "Rough-in, trim-out, and new build electrical work", share: "20 – 35%" },
  { label: "EV Charger Installations", description: "Level 2 home chargers and commercial EV infrastructure", share: "5 – 12%" },
  { label: "Solar & Energy Systems", description: "Solar tie-ins, battery storage, and energy system integration", share: "5 – 15%" },
  { label: "Maintenance Contracts", description: "Annual service agreements and PM for commercial accounts", share: "8 – 20%" },
] as const;

export const revenueMix = [
  { label: "Service Calls", share: 28, description: "Reactive residential and commercial repair work" },
  { label: "Commercial Projects", share: 32, description: "Bid-based commercial and multi-family projects" },
  { label: "Maintenance Contracts", share: 14, description: "Recurring PM and service agreement revenue" },
  { label: "Emergency Work", share: 10, description: "After-hours and urgent electrical repairs" },
  { label: "Specialized Installations", share: 16, description: "EV, solar, smart-home, and panel upgrades" },
] as const;

export const futureGrowthMarkets = [
  {
    label: "EV Charging",
    description: "Residential and commercial EV charger installs driven by adoption mandates and incentives.",
  },
  {
    label: "Solar Integration",
    description: "Solar tie-ins, interconnection, and electrical upgrades for renewable systems.",
  },
  {
    label: "Battery Storage",
    description: "Home and commercial battery backup systems paired with solar and grid resilience demand.",
  },
  {
    label: "Smart Homes",
    description: "Automation, lighting controls, and connected device installations.",
  },
  {
    label: "Commercial Energy Efficiency",
    description: "LED retrofits, load management, and building electrification projects.",
  },
] as const;

export const marginTiers = {
  poor: "4 – 6%",
  average: "7 – 10%",
  good: "11 – 13%",
  excellent: "14 – 17%",
} as const;

export const marginMetrics = [
  { metric: "Gross Margin", value: "40 – 50%" },
  { metric: "Net Margin", value: "7 – 13%" },
  { metric: "Owner Salary (normalized)", value: "$90K – $175K" },
] as const;

export const expenseBreakdown = [
  { expense: "Electrician Payroll", percent: "32 – 42%" },
  { expense: "Materials & Parts", percent: "20 – 28%" },
  { expense: "Vehicle Fleet", percent: "5 – 9%" },
  { expense: "Marketing", percent: "4 – 8%" },
  { expense: "Office & Admin", percent: "8 – 12%" },
  { expense: "Insurance & Bonding", percent: "4 – 8%" },
] as const;

export const costStructureFlow = [
  { label: "Revenue", percent: 100, href: "#revenue-benchmark", color: "var(--metric-revenue)" },
  { label: "Electrician Payroll", percent: 36, href: "#profitability", color: "var(--metric-salary)" },
  { label: "Materials", percent: 24, href: "#profitability", color: "var(--metric-margin)" },
  { label: "Fleet & Overhead", percent: 18, href: "#profitability", color: "var(--metric-valuation)" },
  { label: "Marketing", percent: 6, href: "#profitability", color: "var(--accent)" },
  { label: "Net Profit", percent: 10, href: "#profitability", color: "var(--metric-revenue)" },
] as const;

export const ownerEconomicsCards = [
  { model: "Owner-Operator", earnings: "$90K – $125K" },
  { model: "Small Team Owner", earnings: "$125K – $155K" },
  { model: "Established Contractor", earnings: "$155K – $200K" },
  { model: "Multi-Crew Business", earnings: "$200K – $350K+" },
] as const;

export const valuationMultiples = [
  { metric: "SDE Multiple", range: "2.3× – 3.4×" },
  { metric: "EBITDA Multiple", range: "3.8× – 5.8×" },
  { metric: "Revenue Multiple", range: "0.5× – 0.9×" },
] as const;

export const topPerformerPractices = [
  "Focus on commercial work and larger contract values",
  "Develop repeat maintenance accounts with property managers",
  "Specialize in high-value installations (EV, solar, panels)",
  "Invest in electrician productivity and dispatch efficiency",
  "Expand service territories strategically",
  "Maintain strong referral networks with GCs and realtors",
] as const;

export const industryOpportunities = [
  "EV charging infrastructure expansion",
  "Residential and commercial solar adoption",
  "Smart-home and automation installations",
  "Commercial building retrofits and electrification",
  "Data center and industrial electrical demand",
  "Grid modernization and utility infrastructure upgrades",
] as const;

export const industryRisks = [
  "Skilled labor shortages and wage inflation",
  "Construction slowdowns affecting new build revenue",
  "Rising material and copper costs",
  "Permit, licensing, and compliance requirements",
  "Large regional competitors and PE-backed consolidators",
] as const;

export const stateBenchmarks = [
  { state: "Texas", performance: "Above Average", note: "Population growth, commercial construction, strong residential demand" },
  { state: "Florida", performance: "Above Average", note: "Retirement migration, hurricane rebuilds, solar and EV growth" },
  { state: "California", performance: "Above Average", note: "Solar mandates, EV adoption, high revenue potential" },
  { state: "Arizona", performance: "Above Average", note: "Rapid housing growth, solar penetration, commercial expansion" },
  { state: "Georgia", performance: "Average", note: "Southeast growth, mixed residential/commercial markets" },
  { state: "Ohio", performance: "Average", note: "Stable demand, manufacturing base, moderate competition" },
] as const;

export const benchmarkThresholds = {
  revenue: { low: 1000000, median: 2000000, high: 3200000 },
  profitMargin: { low: 7, median: 10, high: 13 },
  technicians: { low: 4, median: 8, high: 16 },
  maintenancePct: { low: 8, median: 15, high: 25 },
};

export const benchmarkDefaults = {
  revenue: "2000000",
  margin: "10",
  technicians: "8",
  recurringPct: "15",
};

export const valuationDefaults = {
  revenue: "2000000",
  sde: "380000",
  multiple: "2.8",
  multipleLow: 2.3,
  multipleHigh: 3.4,
  revenueMultiple: 0.7,
  sdeMarginPct: 0.19,
};

export const startupCosts = [
  { expense: "Vehicles & Equipment", range: "$70K – $180K" },
  { expense: "Tools & Testing Equipment", range: "$35K – $90K" },
  { expense: "Marketing Launch", range: "$20K – $55K" },
  { expense: "Working Capital", range: "$50K – $120K" },
] as const;
