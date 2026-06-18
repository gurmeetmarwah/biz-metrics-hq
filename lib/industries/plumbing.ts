export const plumbingMeta = {
  slug: "plumbing",
  name: "Plumbing",
  title: "Plumbing Industry Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, valuation multiples, and business economics for plumbing companies in the United States.",
  dataVintage: "2025–2026",
  sampleSize: "380+ plumbing businesses",
  geography: "United States",
};

export const quickSummary = [
  { metric: "Annual Revenue", value: "$800K – $2.5M" },
  { metric: "Net Profit Margin", value: "8 – 14%" },
  { metric: "Owner Compensation", value: "$85K – $165K" },
  { metric: "Revenue Per Plumber", value: "$150K – $280K" },
  { metric: "Service Contract %", value: "10 – 25%" },
  { metric: "Business Value", value: "2.2× – 3.5× SDE" },
] as const;

export const industrySnapshotRatings = [
  { label: "Industry Category", value: "Home Services", rating: null },
  { label: "Demand Stability", value: "High", rating: 5 },
  { label: "Capital Requirement", value: "Low – Medium", rating: 2 },
  { label: "Recurring Revenue", value: "Medium", rating: 3 },
  { label: "Growth Potential", value: "High", rating: 4 },
  { label: "Competition", value: "High", rating: 4 },
] as const;

export const industryInsights = [
  {
    title: "Non-discretionary demand",
    body: "Plumbing businesses benefit from non-discretionary demand because water, sewer, and pipe failures require immediate repairs — homeowners and businesses cannot defer most plumbing emergencies.",
  },
  {
    title: "Emergency service premium",
    body: "Unlike many construction-related trades, plumbing companies generate significant revenue from emergency service calls, which often command premium pricing and after-hours rates.",
  },
  {
    title: "Recurring commercial revenue",
    body: "Commercial maintenance contracts and service agreements can create recurring revenue streams and improve business stability, especially for operators serving property managers and multi-family accounts.",
  },
  {
    title: "Labor as growth constraint",
    body: "Labor availability remains a major growth constraint for many operators. Companies that invest in apprentice pipelines, competitive compensation, and dispatch efficiency tend to scale faster than peers.",
  },
] as const;

export const revenuePercentiles = [
  { percentile: "25th", revenue: "$800K" },
  { percentile: "Median", revenue: "$1.6M" },
  { percentile: "75th", revenue: "$2.2M" },
  { percentile: "Top 10%", revenue: "$3.5M+" },
] as const;

export const revenueDistribution = {
  bottom25: "$800K",
  median: "$1.6M",
  top25: "$2.2M",
};

export const revenueDrivers = [
  { label: "Emergency Repairs", description: "Burst pipes, leaks, and urgent failures with premium pricing", share: "20 – 35%" },
  { label: "Residential Service", description: "Repairs, fixture installs, and repipe work for homeowners", share: "35 – 50%" },
  { label: "Commercial Service", description: "Building maintenance, backflow, and commercial plumbing", share: "20 – 35%" },
  { label: "Drain Cleaning", description: "High-frequency service with strong route density economics", share: "12 – 22%" },
  { label: "Water Heater Installations", description: "Replacement and upgrade projects with solid ticket size", share: "10 – 18%" },
  { label: "Maintenance Contracts", description: "Annual service agreements and PM for commercial accounts", share: "10 – 25%" },
] as const;

export const marginTiers = {
  poor: "4 – 7%",
  average: "8 – 11%",
  good: "12 – 14%",
  excellent: "15 – 18%",
} as const;

export const marginMetrics = [
  { metric: "Gross Margin", value: "42 – 52%" },
  { metric: "Net Margin", value: "8 – 14%" },
  { metric: "Owner Salary (normalized)", value: "$85K – $165K" },
] as const;

export const expenseBreakdown = [
  { expense: "Plumber Payroll", percent: "30 – 40%" },
  { expense: "Materials & Parts", percent: "16 – 24%" },
  { expense: "Vehicle Fleet", percent: "5 – 9%" },
  { expense: "Marketing", percent: "6 – 10%" },
  { expense: "Office & Admin", percent: "8 – 12%" },
  { expense: "Insurance", percent: "4 – 8%" },
] as const;

export const costStructureFlow = [
  { label: "Revenue", percent: 100, href: "#revenue-benchmark", color: "var(--metric-revenue)" },
  { label: "Plumber Payroll", percent: 34, href: "#profitability", color: "var(--metric-salary)" },
  { label: "Materials", percent: 20, href: "#profitability", color: "var(--metric-margin)" },
  { label: "Fleet & Overhead", percent: 17, href: "#profitability", color: "var(--metric-valuation)" },
  { label: "Marketing", percent: 8, href: "#profitability", color: "var(--accent)" },
  { label: "Net Profit", percent: 11, href: "#profitability", color: "var(--metric-revenue)" },
] as const;

export const ownerEconomicsCards = [
  { model: "Owner-Operator", earnings: "$85K – $115K" },
  { model: "Small Team Owner", earnings: "$115K – $145K" },
  { model: "Established Business", earnings: "$145K – $185K" },
  { model: "Multi-Location Business", earnings: "$185K – $320K+" },
] as const;

export const valuationMultiples = [
  { metric: "SDE Multiple", range: "2.2× – 3.5×" },
  { metric: "EBITDA Multiple", range: "3.5× – 5.5×" },
  { metric: "Revenue Multiple", range: "0.5× – 0.9×" },
] as const;

export const topPerformerPractices = [
  "Maintain high plumber utilization (4 – 8 jobs/day)",
  "Respond quickly to emergency calls with premium dispatch",
  "Upsell maintenance plans and annual service agreements",
  "Generate repeat customers through membership programs",
  "Invest in dispatch efficiency and route density",
  "Track and optimize average invoice size",
] as const;

export const industryOpportunities = [
  "Aging infrastructure driving repipe and replacement demand",
  "Housing construction and remodel activity",
  "Water conservation upgrades and fixture retrofits",
  "Commercial maintenance contract demand",
  "Population growth in Sun Belt and suburban markets",
] as const;

export const industryRisks = [
  "Skilled labor shortages and wage inflation",
  "Vehicle, fuel, and fleet operating costs",
  "Increased competition from franchise and PE-backed operators",
  "Economic slowdown in new construction segments",
  "Rising insurance and liability costs",
] as const;

export const stateBenchmarks = [
  { state: "Texas", performance: "Above Average", note: "Population growth, new construction, strong emergency demand" },
  { state: "Florida", performance: "Above Average", note: "Retirement migration, humidity-related plumbing issues" },
  { state: "California", performance: "Average", note: "High revenue potential, elevated labor and regulatory costs" },
  { state: "Arizona", performance: "Above Average", note: "Rapid housing growth, hard water and repipe demand" },
  { state: "Georgia", performance: "Above Average", note: "Southeast expansion, mixed residential/commercial" },
  { state: "Ohio", performance: "Average", note: "Stable demand, aging housing stock, moderate competition" },
] as const;

export const benchmarkThresholds = {
  revenue: { low: 800000, median: 1600000, high: 2500000 },
  profitMargin: { low: 8, median: 11, high: 14 },
  technicians: { low: 2, median: 6, high: 14 },
  maintenancePct: { low: 10, median: 18, high: 25 },
};

export const technicianProductivityMetrics = [
  { metric: "Revenue Per Plumber", value: "$150K – $280K/yr" },
  { metric: "Jobs Per Day", value: "4 – 8" },
  { metric: "Average Ticket (Service)", value: "$275 – $525" },
  { metric: "Average Ticket (Water Heater)", value: "$1.8K – $3.5K" },
] as const;

export const startupCosts = [
  { expense: "Vehicles & Equipment", range: "$60K – $150K" },
  { expense: "Inventory & Tools", range: "$30K – $80K" },
  { expense: "Marketing Launch", range: "$20K – $50K" },
  { expense: "Working Capital", range: "$40K – $100K" },
] as const;

export const benchmarkDefaults = {
  revenue: "1600000",
  margin: "11",
  technicians: "6",
  recurringPct: "18",
};

export const valuationDefaults = {
  revenue: "1600000",
  sde: "320000",
  multiple: "2.8",
  multipleLow: 2.2,
  multipleHigh: 3.5,
  revenueMultiple: 0.7,
  sdeMarginPct: 0.2,
};
