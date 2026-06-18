export const hvacMeta = {
  slug: "hvac",
  name: "HVAC",
  title: "HVAC Industry Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, valuation multiples, and key economics for HVAC businesses in the United States.",
  dataVintage: "2025–2026",
  sampleSize: "420+ HVAC businesses",
  geography: "United States",
};

export const quickSummary = [
  { metric: "Annual Revenue", value: "$1.2M – $3.8M" },
  { metric: "Net Profit Margin", value: "8 – 16%" },
  { metric: "Owner Compensation", value: "$95K – $185K" },
  { metric: "Revenue Per Technician", value: "$180K – $320K" },
  { metric: "Maintenance Contract %", value: "25 – 45%" },
  { metric: "Business Value", value: "2.4× – 3.8× SDE" },
] as const;

export const industrySnapshotRatings = [
  { label: "Industry Type", value: "Home Services", rating: null },
  { label: "Demand", value: "High", rating: 5 },
  { label: "Competition", value: "Medium", rating: 3 },
  { label: "Capital Requirement", value: "Medium", rating: 3 },
  { label: "Scalability", value: "High", rating: 5 },
  { label: "Recurring Revenue", value: "High", rating: 5 },
] as const;

export const revenuePercentiles = [
  { percentile: "25th", revenue: "$1.2M" },
  { percentile: "Median", revenue: "$2.4M" },
  { percentile: "75th", revenue: "$3.2M" },
  { percentile: "Top 10%", revenue: "$5M+" },
] as const;

export const revenueDistribution = {
  bottom25: "$1.2M",
  median: "$2.4M",
  top25: "$3.2M",
};

export const revenueDrivers = [
  { label: "Residential Service", description: "Repair, tune-ups, and seasonal maintenance for homeowners", share: "35 – 45%" },
  { label: "Commercial Service", description: "RTU, chiller, and building system contracts", share: "20 – 30%" },
  { label: "Maintenance Plans", description: "Annual service agreements and PM contracts", share: "25 – 40%" },
  { label: "New Installations", description: "System replacements and new construction HVAC", share: "25 – 35%" },
  { label: "Emergency Calls", description: "After-hours and priority dispatch premium pricing", share: "10 – 18%" },
] as const;

export const marginTiers = {
  poor: "4 – 7%",
  average: "8 – 12%",
  good: "13 – 16%",
  excellent: "17 – 22%",
} as const;

export const marginMetrics = [
  { metric: "Gross Margin", value: "45 – 55%" },
  { metric: "Net Margin", value: "8 – 16%" },
  { metric: "Owner Salary (normalized)", value: "$95K – $185K" },
] as const;

export const expenseBreakdown = [
  { expense: "Technician Payroll", percent: "28 – 38%" },
  { expense: "Materials & Equipment", percent: "18 – 26%" },
  { expense: "Vehicle Fleet", percent: "6 – 10%" },
  { expense: "Marketing", percent: "5 – 9%" },
  { expense: "Office & Admin", percent: "8 – 12%" },
  { expense: "Insurance", percent: "4 – 7%" },
] as const;

export const costStructureFlow = [
  { label: "Revenue", percent: 100, href: "#revenue-benchmark", color: "var(--metric-revenue)" },
  { label: "Technician Payroll", percent: 32, href: "#profitability", color: "var(--metric-salary)" },
  { label: "Materials", percent: 22, href: "#profitability", color: "var(--metric-margin)" },
  { label: "Fleet & Overhead", percent: 18, href: "#profitability", color: "var(--metric-valuation)" },
  { label: "Marketing", percent: 7, href: "#profitability", color: "var(--accent)" },
  { label: "Net Profit", percent: 12, href: "#profitability", color: "var(--metric-revenue)" },
] as const;

export const ownerEconomicsCards = [
  { model: "Small Business Owner", earnings: "$95K – $120K" },
  { model: "Median Operator", earnings: "$145K" },
  { model: "Multi-Location Operator", earnings: "$185K – $350K+" },
] as const;

export const valuationMultiples = [
  { metric: "SDE Multiple", range: "2.4× – 3.8×" },
  { metric: "EBITDA Multiple", range: "4.0× – 6.5×" },
  { metric: "Revenue Multiple", range: "0.6× – 1.1×" },
] as const;

export const stateBenchmarks = [
  { state: "Texas", performance: "Above Average", note: "Population growth, extreme heat, strong new construction" },
  { state: "Florida", performance: "Above Average", note: "Year-round cooling demand, hurricane replacement cycles" },
  { state: "California", performance: "Average", note: "High revenue potential offset by labor and regulatory costs" },
  { state: "Arizona", performance: "Above Average", note: "Rapid suburban growth, extreme summer cooling load" },
  { state: "Georgia", performance: "Above Average", note: "Southeast expansion corridor, mixed residential/commercial" },
  { state: "Ohio", performance: "Average", note: "Stable demand, moderate competition, seasonal heating/cooling" },
] as const;

export const benchmarkThresholds = {
  revenue: { low: 1200000, median: 2400000, high: 3800000 },
  profitMargin: { low: 8, median: 12, high: 16 },
  technicians: { low: 3, median: 8, high: 18 },
  maintenancePct: { low: 25, median: 35, high: 45 },
};

export const technicianProductivityMetrics = [
  { metric: "Revenue Per Technician", value: "$180K – $320K/yr" },
  { metric: "Jobs Per Day", value: "4 – 7" },
  { metric: "Average Ticket (Service)", value: "$350 – $650" },
  { metric: "Average Ticket (Install)", value: "$6K – $14K" },
] as const;

export const startupCosts = [
  { expense: "Vehicles & Equipment", range: "$80K – $200K" },
  { expense: "Inventory & Tools", range: "$40K – $100K" },
  { expense: "Marketing Launch", range: "$25K – $60K" },
  { expense: "Working Capital", range: "$50K – $120K" },
] as const;

export const growthMetrics = [
  { metric: "Maintenance Plan Penetration", value: "25 – 45%" },
  { metric: "Customer Retention", value: "70 – 85%" },
  { metric: "Revenue Growth", value: "6 – 14%/yr" },
  { metric: "Technician Utilization", value: "75 – 88%" },
] as const;
