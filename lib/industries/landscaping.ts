export const landscapingMeta = {
  slug: "landscaping",
  name: "Landscaping",
  title: "Landscaping Industry Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, valuation multiples, and business economics for landscaping businesses in the United States.",
  dataVintage: "2025–2026",
  sampleSize: "280+ landscaping companies",
  geography: "United States",
};

export const quickSummary = [
  { metric: "Annual Revenue", value: "$600K – $2.5M" },
  { metric: "Net Profit Margin", value: "5 – 12%" },
  { metric: "Owner Compensation", value: "$70K – $150K" },
  { metric: "Revenue Per Crew", value: "$200K – $350K" },
  { metric: "Maintenance Contract %", value: "35 – 55%" },
  { metric: "Business Value", value: "1.8× – 2.8× SDE" },
] as const;

export const industrySnapshotRatings = [
  { label: "Category", value: "Home Services", rating: null },
  { label: "Business Model", value: "Maintenance + Projects", rating: null },
  { label: "Capital Requirement", value: "Low – Medium", rating: 2 },
  { label: "Recurring Revenue", value: "High", rating: 5 },
  { label: "Seasonality", value: "Medium – High", rating: 4, higherIsWorse: true },
  { label: "Growth Potential", value: "High", rating: 4 },
] as const;

export const industryInsights = [
  {
    title: "Maintenance + project revenue mix",
    body: "Landscaping businesses often combine recurring maintenance contracts with higher-ticket project work such as hardscaping, irrigation, and outdoor living installations.",
  },
  {
    title: "Commercial contract stability",
    body: "Commercial maintenance contracts can provide stable recurring revenue, while design-build projects create opportunities for margin expansion and upsell.",
  },
  {
    title: "Balanced operators win",
    body: "Businesses that successfully balance maintenance and project revenue tend to achieve greater stability, higher valuation multiples, and lower owner dependence.",
  },
  {
    title: "Retention drives value",
    body: "Customer retention on weekly routes and annual enhancement programs compounds revenue predictability — a key differentiator versus project-only competitors.",
  },
] as const;

export const revenuePercentiles = [
  { percentile: "25th", revenue: "$600K" },
  { percentile: "Median", revenue: "$1.1M" },
  { percentile: "75th", revenue: "$1.8M" },
  { percentile: "Top 10%", revenue: "$2.5M+" },
] as const;

export const revenueDistribution = {
  bottom25: "$600K",
  median: "$1.1M",
  top25: "$1.8M",
};

export const revenueMix = [
  { label: "Residential Maintenance", share: 25, description: "Weekly mowing, trimming, and seasonal cleanups for homeowners" },
  { label: "Commercial Maintenance", share: 20, description: "HOA, property management, and commercial grounds contracts" },
  { label: "Landscape Design", share: 12, description: "Design fees, plant installs, and bed renovation projects" },
  { label: "Hardscaping", share: 18, description: "Patios, retaining walls, pavers, and outdoor structures" },
  { label: "Irrigation", share: 12, description: "System installs, repairs, and smart controller upgrades" },
  { label: "Outdoor Living Projects", share: 13, description: "Fire pits, outdoor kitchens, lighting, and full backyard builds" },
] as const;

export const revenueCompositionBenchmark = [
  { label: "Maintenance Contracts", share: 45, description: "Recurring weekly and monthly service agreements" },
  { label: "Commercial Accounts", share: 20, description: "Property management, HOA, and institutional contracts" },
  { label: "Hardscaping", share: 15, description: "Patios, walls, and structural landscape construction" },
  { label: "Irrigation", share: 10, description: "Install, repair, and water-efficiency upgrades" },
  { label: "Other Services", share: 10, description: "Snow removal, tree work, lighting, and enhancements" },
] as const;

export const marginTiers = {
  poor: "3 – 5%",
  average: "6 – 8%",
  good: "9 – 11%",
  excellent: "12 – 15%",
} as const;

export const marginMetrics = [
  { metric: "Gross Margin", value: "35 – 45%" },
  { metric: "Net Margin", value: "5 – 12%" },
  { metric: "Owner Salary (normalized)", value: "$70K – $150K" },
] as const;

export const expenseBreakdown = [
  { expense: "Crew Labor", percent: "40 – 55%" },
  { expense: "Materials & Plants", percent: "12 – 20%" },
  { expense: "Fleet & Equipment", percent: "8 – 14%" },
  { expense: "Marketing", percent: "4 – 8%" },
  { expense: "Office & Admin", percent: "6 – 10%" },
  { expense: "Fuel & Maintenance", percent: "5 – 9%" },
] as const;

export const costStructureFlow = [
  { label: "Revenue", percent: 100, href: "#revenue-benchmark", color: "var(--metric-revenue)" },
  { label: "Crew Labor", percent: 47, href: "#profitability", color: "var(--metric-salary)" },
  { label: "Materials", percent: 16, href: "#profitability", color: "var(--metric-margin)" },
  { label: "Fleet & Fuel", percent: 12, href: "#profitability", color: "var(--metric-valuation)" },
  { label: "Marketing & Overhead", percent: 17, href: "#profitability", color: "var(--accent)" },
  { label: "Net Profit", percent: 8, href: "#profitability", color: "var(--metric-revenue)" },
] as const;

export const ownerEconomicsCards = [
  { model: "Owner-Operator", earnings: "$70K – $95K" },
  { model: "Small Crew Owner", earnings: "$95K – $120K" },
  { model: "Established Company", earnings: "$120K – $150K" },
  { model: "Regional Operator", earnings: "$150K – $220K+" },
] as const;

export const valuationMultiples = [
  { metric: "SDE Multiple", range: "1.8× – 2.8×" },
  { metric: "EBITDA Multiple", range: "2.8× – 4.5×" },
  { metric: "Revenue Multiple", range: "0.35× – 0.65×" },
] as const;

export const topPerformerPractices = [
  "Build recurring maintenance contracts",
  "Focus on customer retention and route density",
  "Upsell irrigation and landscape enhancements",
  "Diversify project and maintenance revenue",
  "Track crew productivity closely",
  "Generate recurring commercial accounts",
] as const;

export const industryOpportunities = [
  "Outdoor living demand",
  "Residential home improvement spending",
  "Commercial property maintenance growth",
  "Irrigation and water-efficiency upgrades",
  "Water-efficient and drought-tolerant landscaping",
  "HOA and property management contracts",
] as const;

export const industryRisks = [
  "Labor shortages",
  "Seasonal demand swings",
  "Weather dependency",
  "Rising fuel costs",
  "Customer concentration risk",
] as const;

export const recurringRevenueComparison = [
  { industry: "HVAC", rating: 5 },
  { industry: "Landscaping", rating: 5, highlight: true },
  { industry: "Plumbing", rating: 3 },
  { industry: "Electrical", rating: 3 },
  { industry: "Roofing", rating: 1 },
] as const;

export const businessQualityScorecard = {
  industryName: "Typical Landscaping Business",
  items: [
    { label: "Revenue Stability", rating: 5 },
    { label: "Recurring Revenue", rating: 5 },
    { label: "Growth Potential", rating: 4 },
    { label: "Scalability", rating: 4 },
    { label: "Owner Dependence", rating: 3, higherIsWorse: true },
    { label: "Exit Potential", rating: 4 },
  ],
} as const;

export const stateBenchmarks = [
  { state: "Florida", performance: "Above Average", note: "Year-round growing season, strong HOA and commercial demand" },
  { state: "Texas", performance: "Above Average", note: "Population growth, suburban expansion, long service seasons" },
  { state: "Arizona", performance: "Above Average", note: "Water-efficient landscaping, commercial property growth" },
  { state: "California", performance: "Above Average", note: "High project tickets, drought-tolerant design demand" },
  { state: "Georgia", performance: "Average", note: "Strong residential maintenance, seasonal project peaks" },
  { state: "Ohio", performance: "Average", note: "Seasonal revenue swings, snow removal add-on potential" },
] as const;

export const benchmarkThresholds = {
  revenue: { low: 600000, median: 1100000, high: 1800000 },
  profitMargin: { low: 5, median: 8, high: 12 },
  technicians: { low: 2, median: 4, high: 8 },
  maintenancePct: { low: 30, median: 45, high: 60 },
};

export const benchmarkDefaults = {
  revenue: "1100000",
  margin: "8",
  technicians: "4",
  recurringPct: "45",
};

export const valuationDefaults = {
  revenue: "1100000",
  sde: "198000",
  multiple: "2.2",
  multipleLow: 1.8,
  multipleHigh: 2.8,
  revenueMultiple: 0.5,
  sdeMarginPct: 0.18,
};

export const startupCosts = [
  { expense: "Trucks & Mowers", range: "$25K – $80K" },
  { expense: "Tools & Equipment", range: "$10K – $35K" },
  { expense: "Marketing Launch", range: "$15K – $40K" },
  { expense: "Working Capital", range: "$25K – $60K" },
] as const;
