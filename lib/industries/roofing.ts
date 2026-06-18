export const roofingMeta = {
  slug: "roofing",
  name: "Roofing",
  title: "Roofing Industry Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, valuation multiples, and business economics for roofing companies in the United States.",
  dataVintage: "2025–2026",
  sampleSize: "310+ roofing companies",
  geography: "United States",
};

export const quickSummary = [
  { metric: "Annual Revenue", value: "$800K – $4.5M" },
  { metric: "Net Profit Margin", value: "6 – 15%" },
  { metric: "Owner Compensation", value: "$80K – $220K" },
  { metric: "Revenue Per Crew", value: "$400K – $900K" },
  { metric: "Recurring Revenue %", value: "5 – 15%" },
  { metric: "Business Value", value: "2.0× – 3.2× SDE" },
] as const;

export const industrySnapshotRatings = [
  { label: "Category", value: "Home Services", rating: null },
  { label: "Primary Revenue Model", value: "Project-Based", rating: null },
  { label: "Capital Requirement", value: "Medium", rating: 3 },
  { label: "Sales Dependency", value: "Very High", rating: 5 },
  { label: "Recurring Revenue", value: "Low", rating: 1 },
  { label: "Seasonality", value: "Medium", rating: 3 },
] as const;

export const industryInsights = [
  {
    title: "Project-based revenue model",
    body: "Roofing companies typically generate revenue through roof replacements, repairs, and insurance-related projects — with larger average ticket sizes than most home service trades.",
  },
  {
    title: "Low recurring revenue",
    body: "Unlike HVAC and plumbing businesses, roofing revenue is highly project-based, resulting in larger average tickets but far less recurring customer activity. Maintenance contracts represent only 5–15% of revenue for most operators.",
  },
  {
    title: "Storm-driven demand spikes",
    body: "Storm events can significantly increase local demand, creating periods of rapid revenue growth for established operators with insurance restoration capabilities and strong sales processes.",
  },
  {
    title: "Sales over utilization",
    body: "Lead generation and sales conversion often have a larger impact on roofing profitability than crew utilization alone. Companies that master inspection-to-close workflows outperform peers on margin.",
  },
] as const;

export const revenuePercentiles = [
  { percentile: "25th", revenue: "$800K" },
  { percentile: "Median", revenue: "$2.0M" },
  { percentile: "75th", revenue: "$3.2M" },
  { percentile: "Top 10%", revenue: "$4.5M+" },
] as const;

export const revenueDistribution = {
  bottom25: "$800K",
  median: "$2.0M",
  top25: "$3.2M",
};

export const revenueMix = [
  { label: "Roof Replacements", share: 42, description: "Full tear-off and replacement — highest ticket residential work" },
  { label: "Roof Repairs", share: 18, description: "Leak repairs, patch work, and storm damage fixes" },
  { label: "Insurance Claims", share: 28, description: "Storm restoration and hail/wind damage projects" },
  { label: "Commercial Roofing", share: 8, description: "Flat roof, TPO, and commercial building projects" },
  { label: "Maintenance Work", share: 4, description: "Annual inspections, gutter cleaning, and minor upkeep" },
] as const;

export const marginTiers = {
  poor: "3 – 6%",
  average: "7 – 10%",
  good: "11 – 13%",
  excellent: "14 – 18%",
} as const;

export const marginMetrics = [
  { metric: "Gross Margin", value: "28 – 38%" },
  { metric: "Net Margin", value: "6 – 13%" },
  { metric: "Owner Salary (normalized)", value: "$80K – $220K" },
] as const;

export const expenseBreakdown = [
  { expense: "Crew Labor", percent: "25 – 35%" },
  { expense: "Materials", percent: "30 – 42%" },
  { expense: "Marketing & Lead Gen", percent: "8 – 14%" },
  { expense: "Fleet & Equipment", percent: "5 – 8%" },
  { expense: "Office & Admin", percent: "6 – 10%" },
  { expense: "Insurance & Bonding", percent: "4 – 8%" },
] as const;

export const costStructureFlow = [
  { label: "Revenue", percent: 100, href: "#revenue-benchmark", color: "var(--metric-revenue)" },
  { label: "Crew Labor", percent: 30, href: "#profitability", color: "var(--metric-salary)" },
  { label: "Materials", percent: 36, href: "#profitability", color: "var(--metric-margin)" },
  { label: "Marketing", percent: 11, href: "#profitability", color: "var(--accent)" },
  { label: "Fleet & Overhead", percent: 14, href: "#profitability", color: "var(--metric-valuation)" },
  { label: "Net Profit", percent: 9, href: "#profitability", color: "var(--metric-revenue)" },
] as const;

export const ownerEconomicsCards = [
  { model: "Owner-Operator", earnings: "$80K – $130K" },
  { model: "Small Roofing Firm", earnings: "$130K – $175K" },
  { model: "Regional Roofing Company", earnings: "$175K – $280K" },
  { model: "Multi-City Operator", earnings: "$280K – $400K+" },
] as const;

export const valuationMultiples = [
  { metric: "SDE Multiple", range: "2.0× – 3.2×" },
  { metric: "EBITDA Multiple", range: "3.0× – 5.0×" },
  { metric: "Revenue Multiple", range: "0.4× – 0.8×" },
] as const;

export const topPerformerPractices = [
  "Generate high-quality leads consistently through diversified channels",
  "Maintain strong sales processes from inspection to signed contract",
  "Specialize in insurance claims and adjuster relationships",
  "Diversify between repair and replacement work",
  "Focus on reputation, reviews, and referral networks",
  "Manage crews efficiently with weather-aware scheduling",
] as const;

export const industryOpportunities = [
  "Aging housing stock driving replacement cycles",
  "Severe weather events increasing restoration demand",
  "Insurance-funded project volume in storm markets",
  "Commercial flat-roof and industrial demand",
  "Solar roofing and integrated panel installations",
  "Population growth in Sun Belt and suburban markets",
] as const;

export const industryRisks = [
  "Storm-driven revenue volatility and off-season slowdowns",
  "Insurance claim complexity and adjuster negotiations",
  "Skilled labor shortages for install crews",
  "Material price fluctuations (shingles, lumber, metal)",
  "Safety and liability exposure on every job site",
  "Increased local competition and storm chaser saturation",
] as const;

export const marketConditions = [
  { driver: "Housing Activity", status: "Moderate", rating: 3, note: "Replacement demand tied to home age and turnover" },
  { driver: "Storm Activity", status: "Elevated", rating: 4, note: "Sun Belt and coastal markets see frequent hail/wind events" },
  { driver: "Insurance Claims", status: "Strong", rating: 4, note: "20–40% of revenue in active storm markets" },
  { driver: "Material Costs", status: "Volatile", rating: 3, note: "Shingle and supply chain pricing affects gross margin" },
  { driver: "Labor Availability", status: "Tight", rating: 2, note: "Experienced roofers in short supply nationwide" },
] as const;

export const recurringRevenueComparison = [
  { industry: "HVAC", rating: 5 },
  { industry: "Plumbing", rating: 3 },
  { industry: "Electrical", rating: 3 },
  { industry: "Roofing", rating: 1, highlight: true },
] as const;

export const businessQualityScorecard = {
  industryName: "Typical Roofing Business",
  items: [
    { label: "Revenue Stability", rating: 2 },
    { label: "Growth Potential", rating: 5 },
    { label: "Recurring Revenue", rating: 1 },
    { label: "Scalability", rating: 5 },
    { label: "Owner Dependence", rating: 4, higherIsWorse: true },
    { label: "Exit Potential", rating: 4 },
  ],
} as const;

export const insuranceClaimEconomics = [
  {
    factor: "Insurance Claim Revenue",
    value: "20 – 40% of revenue",
    revenueImpact: "Can dominate revenue in storm seasons",
    marginImpact: "Comparable to retail installs when scoped well",
  },
  {
    factor: "Typical Project Value",
    value: "$12K – $28K",
    revenueImpact: "Higher than repair-only work",
    marginImpact: "10 – 14% net when managed efficiently",
  },
  {
    factor: "Claim Approval Factors",
    value: "Documentation & adjuster relationships",
    revenueImpact: "Faster approvals accelerate cash flow",
    marginImpact: "Supplements and scope accuracy protect margin",
  },
  {
    factor: "Storm Market Operators",
    value: "$150K – $400K+ owner pay",
    revenueImpact: "2–3× normal monthly revenue during events",
    marginImpact: "Volume leverage improves overhead absorption",
  },
] as const;

export const stateBenchmarks = [
  { state: "Texas", performance: "Above Average", note: "Hail corridors, population growth, strong insurance market" },
  { state: "Florida", performance: "Above Average", note: "Hurricane restoration, high replacement demand" },
  { state: "California", performance: "Average", note: "High revenue potential, regulatory and labor costs" },
  { state: "Colorado", performance: "Above Average", note: "Hail storms, growing housing stock, insurance claims" },
  { state: "Georgia", performance: "Above Average", note: "Southeast storm activity, suburban expansion" },
  { state: "Ohio", performance: "Average", note: "Steady replacement demand, seasonal weather patterns" },
] as const;

export const benchmarkThresholds = {
  revenue: { low: 800000, median: 2000000, high: 3500000 },
  profitMargin: { low: 6, median: 9, high: 13 },
  technicians: { low: 2, median: 4, high: 8 },
  maintenancePct: { low: 5, median: 10, high: 15 },
};

export const benchmarkDefaults = {
  revenue: "2000000",
  margin: "9",
  technicians: "4",
  recurringPct: "10",
};

export const valuationDefaults = {
  revenue: "2000000",
  sde: "360000",
  multiple: "2.6",
  multipleLow: 2.0,
  multipleHigh: 3.2,
  revenueMultiple: 0.6,
  sdeMarginPct: 0.18,
};

export const startupCosts = [
  { expense: "Trucks & Equipment", range: "$40K – $120K" },
  { expense: "Tools & Safety Gear", range: "$15K – $50K" },
  { expense: "Marketing Launch", range: "$30K – $80K" },
  { expense: "Working Capital", range: "$35K – $90K" },
] as const;
