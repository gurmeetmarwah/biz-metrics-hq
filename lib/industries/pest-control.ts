export const pestControlMeta = {
  slug: "pest-control",
  name: "Pest Control",
  title: "Pest Control Industry Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, valuation multiples, and business economics for pest control businesses in the United States.",
  dataVintage: "2025–2026",
  sampleSize: "220+ pest control companies",
  geography: "United States",
};

export const quickSummary = [
  { metric: "Annual Revenue", value: "$400K – $1.8M" },
  { metric: "Net Profit Margin", value: "15 – 25%" },
  { metric: "Owner Compensation", value: "$75K – $180K" },
  { metric: "Revenue Per Technician", value: "$120K – $200K" },
  { metric: "Recurring Contract %", value: "70 – 90%" },
  { metric: "Business Value", value: "2.5× – 4.0× SDE" },
] as const;

export const industrySnapshotRatings = [
  { label: "Category", value: "Home Services", rating: null },
  { label: "Business Model", value: "Recurring Service", rating: null },
  { label: "Capital Requirement", value: "Low", rating: 2 },
  { label: "Recurring Revenue", value: "Very High", rating: 5 },
  { label: "Customer Retention", value: "High", rating: 5 },
  { label: "Growth Potential", value: "High", rating: 4 },
] as const;

export const industryInsights = [
  {
    title: "Predictable recurring revenue",
    body: "Pest control businesses generate predictable recurring revenue through ongoing service contracts and quarterly treatment plans — creating strong revenue visibility compared to project-based trades.",
  },
  {
    title: "High visit frequency builds LTV",
    body: "Unlike project-based industries such as roofing, pest control operators often visit customers multiple times per year, creating strong customer lifetime value and compounding route density economics.",
  },
  {
    title: "Retention drives valuation",
    body: "The combination of recurring revenue and high retention rates typically leads to stronger business valuations compared to many other home service industries — a key reason private equity actively consolidates pest control.",
  },
  {
    title: "Subscription model advantage",
    body: "Quarterly treatment contracts, termite bonds, and mosquito programs create a subscription-like revenue engine that supports premium exit multiples and predictable cash flow for operators.",
  },
] as const;

export const revenuePercentiles = [
  { percentile: "25th", revenue: "$400K" },
  { percentile: "Median", revenue: "$900K" },
  { percentile: "75th", revenue: "$1.4M" },
  { percentile: "Top 10%", revenue: "$1.8M+" },
] as const;

export const revenueDistribution = {
  bottom25: "$400K",
  median: "$900K",
  top25: "$1.4M",
};

export const revenueMix = [
  { label: "Residential Contracts", share: 35, description: "Quarterly general pest treatments and annual service agreements" },
  { label: "Commercial Contracts", share: 22, description: "Restaurants, property management, and institutional accounts" },
  { label: "Termite Services", share: 18, description: "Inspections, treatments, bonds, and renewal programs" },
  { label: "Mosquito Programs", share: 10, description: "Seasonal mosquito control and outdoor treatment plans" },
  { label: "Wildlife Control", share: 8, description: "Rodent exclusion, trapping, and wildlife remediation" },
  { label: "One-Time Treatments", share: 7, description: "Initial infestations, move-in treatments, and emergency calls" },
] as const;

export const recurringRevenueBenchmarks = [
  { metric: "Average Recurring Revenue %", value: "80%" },
  { metric: "Top Quartile Recurring %", value: "90%+" },
  { metric: "Customer Retention Rate", value: "82 – 88%" },
  { metric: "Annual Contract Penetration", value: "75 – 85%" },
] as const;

export const recurringRevenueComparison = [
  { industry: "Pest Control", rating: 5, highlight: true },
  { industry: "HVAC", rating: 5 },
  { industry: "Landscaping", rating: 5 },
  { industry: "Plumbing", rating: 3 },
  { industry: "Roofing", rating: 1 },
] as const;

export const marginTiers = {
  poor: "10 – 14%",
  average: "15 – 18%",
  good: "19 – 22%",
  excellent: "23 – 28%",
} as const;

export const marginMetrics = [
  { metric: "Gross Margin", value: "55 – 68%" },
  { metric: "Net Margin", value: "15 – 25%" },
  { metric: "Owner Salary (normalized)", value: "$75K – $180K" },
] as const;

export const expenseBreakdown = [
  { expense: "Technician Payroll", percent: "25 – 35%" },
  { expense: "Chemicals & Supplies", percent: "8 – 14%" },
  { expense: "Fleet & Vehicles", percent: "6 – 10%" },
  { expense: "Marketing", percent: "8 – 14%" },
  { expense: "Office & Admin", percent: "5 – 9%" },
  { expense: "Insurance & Licensing", percent: "3 – 6%" },
] as const;

export const costStructureFlow = [
  { label: "Revenue", percent: 100, href: "#revenue-benchmark", color: "var(--metric-revenue)" },
  { label: "Technician Payroll", percent: 30, href: "#profitability", color: "var(--metric-salary)" },
  { label: "Chemicals & Supplies", percent: 11, href: "#profitability", color: "var(--metric-margin)" },
  { label: "Fleet & Overhead", percent: 22, href: "#profitability", color: "var(--metric-valuation)" },
  { label: "Marketing", percent: 11, href: "#profitability", color: "var(--accent)" },
  { label: "Net Profit", percent: 18, href: "#profitability", color: "var(--metric-revenue)" },
] as const;

export const ownerEconomicsCards = [
  { model: "Owner-Operator", earnings: "$75K – $95K" },
  { model: "Small Operator", earnings: "$95K – $120K" },
  { model: "Multi-Route Business", earnings: "$120K – $180K" },
  { model: "Regional Operator", earnings: "$180K – $280K+" },
] as const;

export const valuationMultiples = [
  { metric: "SDE Multiple", range: "2.5× – 4.0×" },
  { metric: "EBITDA Multiple", range: "4.5× – 7.0×" },
  { metric: "Revenue Multiple", range: "0.8× – 1.4×" },
] as const;

export const topPerformerPractices = [
  "Build recurring service agreements",
  "Focus on customer retention",
  "Reduce contract cancellations",
  "Expand technician route density",
  "Cross-sell termite services",
  "Develop commercial accounts",
] as const;

export const customerRetentionMetrics = [
  { metric: "Average Retention Rate", value: "82 – 88%", description: "Annual account retention across residential and commercial routes" },
  { metric: "Annual Contract Renewal %", value: "78 – 85%", description: "Percentage of service agreements renewed each year" },
  { metric: "Customer Lifetime Value", value: "$1,500 – $4,000", description: "Total revenue per customer over the relationship" },
  { metric: "Route Density Score", value: "High", description: "Stops per technician per day — top operators achieve 14–18 accounts" },
] as const;

export const industryOpportunities = [
  "Growing suburban populations",
  "Increased pest awareness",
  "Commercial contract expansion",
  "Mosquito control demand",
  "Termite prevention services",
  "Recurring subscription models",
] as const;

export const industryRisks = [
  "Seasonal fluctuations",
  "Chemical regulations",
  "Customer churn",
  "Labor shortages",
  "Local competition",
] as const;

export const businessQualityScorecard = {
  industryName: "Typical Pest Control Business",
  items: [
    { label: "Recurring Revenue", rating: 5 },
    { label: "Revenue Stability", rating: 5 },
    { label: "Customer Retention", rating: 5 },
    { label: "Scalability", rating: 4 },
    { label: "Owner Dependence", rating: 3, higherIsWorse: true },
    { label: "Exit Potential", rating: 5 },
  ],
} as const;

export const investorAttractivenessScore = {
  title: "Pest Control Investment Score",
  overallRating: 9.2,
  items: [
    { label: "Recurring Revenue", rating: 5 },
    { label: "Customer Retention", rating: 5 },
    { label: "Cash Flow Stability", rating: 5 },
    { label: "Scalability", rating: 4 },
    { label: "Exit Multiple", rating: 5 },
  ],
} as const;

export const stateBenchmarks = [
  { state: "Florida", performance: "Above Average", note: "Year-round pest pressure, termite market, strong suburban growth" },
  { state: "Texas", performance: "Above Average", note: "Population growth, fire ant and termite demand, long service seasons" },
  { state: "Arizona", performance: "Above Average", note: "Scorpion and termite services, desert climate pest cycles" },
  { state: "California", performance: "Above Average", note: "High commercial density, termite bonds, regulatory compliance premium" },
  { state: "Georgia", performance: "Average", note: "Strong termite market, humid climate drives recurring treatments" },
  { state: "North Carolina", performance: "Average", note: "Growing suburban markets, mosquito program demand" },
] as const;

export const benchmarkThresholds = {
  revenue: { low: 400000, median: 900000, high: 1400000 },
  profitMargin: { low: 15, median: 18, high: 25 },
  technicians: { low: 2, median: 5, high: 10 },
  maintenancePct: { low: 70, median: 80, high: 90 },
};

export const benchmarkDefaults = {
  revenue: "900000",
  margin: "18",
  technicians: "5",
  recurringPct: "80",
};

export const valuationDefaults = {
  revenue: "900000",
  sde: "250000",
  multiple: "3.2",
  multipleLow: 2.5,
  multipleHigh: 4.0,
  revenueMultiple: 1.1,
  sdeMarginPct: 0.28,
};

export const startupCosts = [
  { expense: "Vehicles & Equipment", range: "$20K – $60K" },
  { expense: "Chemicals & Supplies", range: "$8K – $25K" },
  { expense: "Marketing Launch", range: "$15K – $40K" },
  { expense: "Working Capital", range: "$15K – $35K" },
] as const;
