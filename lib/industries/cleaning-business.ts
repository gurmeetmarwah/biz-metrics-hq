export const cleaningBusinessMeta = {
  slug: "cleaning-business",
  name: "Cleaning Business",
  title: "Cleaning Business Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, valuation multiples, and business economics for cleaning businesses in the United States.",
  dataVintage: "2025–2026",
  sampleSize: "190+ cleaning businesses",
  geography: "United States",
};

export const quickSummary = [
  { metric: "Annual Revenue", value: "$200K – $1M" },
  { metric: "Net Profit Margin", value: "10 – 20%" },
  { metric: "Owner Compensation", value: "$50K – $120K" },
  { metric: "Revenue Per Cleaner", value: "$80K – $150K" },
  { metric: "Recurring Contract %", value: "50 – 75%" },
  { metric: "Business Value", value: "1.8× – 3.0× SDE" },
] as const;

export const industrySnapshotRatings = [
  { label: "Category", value: "Home & Commercial Services", rating: null },
  { label: "Business Model", value: "Recurring Contracts", rating: null },
  { label: "Capital Requirement", value: "Very Low", rating: 1 },
  { label: "Labor Dependency", value: "High", rating: 5, higherIsWorse: true },
  { label: "Recurring Revenue", value: "Very High", rating: 5 },
  { label: "Growth Potential", value: "High", rating: 4 },
] as const;

export const industryInsights = [
  {
    title: "Scheduled contract revenue",
    body: "Cleaning businesses typically generate recurring revenue through scheduled service contracts — weekly residential cleans and monthly commercial janitorial agreements provide predictable cash flow.",
  },
  {
    title: "Commercial vs residential dynamics",
    body: "Commercial cleaning contracts often provide predictable monthly income, while residential cleaning businesses benefit from repeat customers, route density, and higher per-job margins.",
  },
  {
    title: "Low barrier, high execution bar",
    body: "The industry's low startup requirements make entry relatively easy, but long-term success often depends on operational efficiency, employee retention, and customer retention.",
  },
  {
    title: "Labor is the operating lever",
    body: "Cleaning is labor-intensive — payroll represents 45–60% of revenue. Operators who optimize route density, reduce turnover, and maintain contract retention build scalable, valuable businesses.",
  },
] as const;

export const revenuePercentiles = [
  { percentile: "25th", revenue: "$200K" },
  { percentile: "Median", revenue: "$500K" },
  { percentile: "75th", revenue: "$800K" },
  { percentile: "Top 10%", revenue: "$1M+" },
] as const;

export const revenueDistribution = {
  bottom25: "$200K",
  median: "$500K",
  top25: "$800K",
};

export const revenueMix = [
  { label: "Residential Cleaning", share: 30, description: "Weekly and biweekly home cleaning subscriptions" },
  { label: "Commercial Cleaning", share: 28, description: "Office, retail, and facility cleaning contracts" },
  { label: "Janitorial Contracts", share: 17, description: "Long-term building maintenance agreements" },
  { label: "Move-In/Move-Out", share: 12, description: "Deep cleans for rentals, realtors, and property managers" },
  { label: "Post Construction", share: 8, description: "Builder and renovation cleanup projects" },
  { label: "Specialized Cleaning", share: 5, description: "Carpet, window, and specialty surface services" },
] as const;

export const businessModelBenchmark = [
  { label: "Commercial Contracts", share: 45, description: "Office, retail, and facility recurring agreements" },
  { label: "Residential Cleaning", share: 30, description: "Weekly and biweekly home cleaning routes" },
  { label: "Janitorial Services", share: 10, description: "Building maintenance and porter services" },
  { label: "Move-Out Cleaning", share: 10, description: "Rental turnover and real estate deep cleans" },
  { label: "Specialty Cleaning", share: 5, description: "Carpet, window, and post-construction specialty work" },
] as const;

export const contractRevenueBenchmarks = [
  { metric: "Monthly Contract Revenue", value: "$800 – $4,500" },
  { metric: "Annual Contract Value", value: "$1,200 – $8,000" },
  { metric: "Contract Retention Rate", value: "75 – 85%" },
  { metric: "Repeat Customer Rate", value: "70 – 80%" },
] as const;

export const recurringRevenueComparison = [
  { industry: "Cleaning Business", rating: 5, highlight: true },
  { industry: "Pest Control", rating: 5 },
  { industry: "Landscaping", rating: 5 },
  { industry: "Plumbing", rating: 3 },
  { industry: "Roofing", rating: 1 },
] as const;

export const marginTiers = {
  poor: "6 – 9%",
  average: "10 – 14%",
  good: "15 – 18%",
  excellent: "19 – 24%",
} as const;

export const marginMetrics = [
  { metric: "Gross Margin", value: "40 – 55%" },
  { metric: "Net Margin", value: "10 – 20%" },
  { metric: "Owner Salary (normalized)", value: "$50K – $120K" },
] as const;

export const expenseBreakdown = [
  { expense: "Cleaner Payroll", percent: "45 – 60%" },
  { expense: "Supplies & Chemicals", percent: "5 – 10%" },
  { expense: "Fleet & Vehicles", percent: "3 – 7%" },
  { expense: "Marketing", percent: "5 – 10%" },
  { expense: "Office & Admin", percent: "5 – 9%" },
  { expense: "Insurance & Bonding", percent: "2 – 5%" },
] as const;

export const costStructureFlow = [
  { label: "Revenue", percent: 100, href: "#revenue-benchmark", color: "var(--metric-revenue)" },
  { label: "Cleaner Payroll", percent: 52, href: "#profitability", color: "var(--metric-salary)" },
  { label: "Supplies", percent: 7, href: "#profitability", color: "var(--metric-margin)" },
  { label: "Fleet & Overhead", percent: 18, href: "#profitability", color: "var(--metric-valuation)" },
  { label: "Marketing", percent: 8, href: "#profitability", color: "var(--accent)" },
  { label: "Net Profit", percent: 15, href: "#profitability", color: "var(--metric-revenue)" },
] as const;

export const ownerEconomicsCards = [
  { model: "Owner-Operator", earnings: "$50K – $70K" },
  { model: "Small Team Owner", earnings: "$70K – $90K" },
  { model: "Commercial Contractor", earnings: "$90K – $120K" },
  { model: "Multi-City Operator", earnings: "$120K – $200K+" },
] as const;

export const valuationMultiples = [
  { metric: "SDE Multiple", range: "1.8× – 3.0×" },
  { metric: "EBITDA Multiple", range: "3.0× – 5.0×" },
  { metric: "Revenue Multiple", range: "0.4× – 0.8×" },
] as const;

export const topPerformerPractices = [
  "Focus on recurring contracts",
  "Optimize route density",
  "Maintain low employee turnover",
  "Upsell specialized services",
  "Track labor productivity",
  "Build commercial accounts",
] as const;

export const laborEfficiencyMetrics = [
  { metric: "Revenue Per Cleaner", value: "$80K – $150K", description: "Annual revenue generated per field cleaner" },
  { metric: "Jobs Per Crew / Day", value: "4 – 8", description: "Completed jobs per two-person crew on a typical day" },
  { metric: "Labor Utilization", value: "65 – 80%", description: "Billable cleaning hours vs total scheduled hours" },
  { metric: "Customer Retention", value: "75 – 85%", description: "Annual account retention across contract book" },
  { metric: "Average Contract Length", value: "12 – 24 months", description: "Typical duration before churn or contract renewal" },
] as const;

export const commercialVsResidential = {
  commercial: {
    title: "Commercial Cleaning",
    traits: [
      "Higher contract stability",
      "Lower margins (8 – 14% net)",
      "Larger customers and longer sales cycles",
      "Predictable monthly recurring revenue",
      "Requires bonding and insurance credentials",
    ],
  },
  residential: {
    title: "Residential Cleaning",
    traits: [
      "Higher margins (12 – 22% net)",
      "Smaller accounts with faster sales cycles",
      "More scheduling flexibility",
      "Route density drives profitability",
      "Strong repeat customer economics",
    ],
  },
} as const;

export const industryOpportunities = [
  "Commercial office demand",
  "Healthcare facilities",
  "Airbnb and short-term rental cleaning",
  "Property management contracts",
  "Residential subscription services",
  "Post-construction cleaning",
] as const;

export const industryRisks = [
  "Employee turnover",
  "Wage inflation",
  "Customer churn",
  "Price competition",
  "Labor shortages",
] as const;

export const businessQualityScorecard = {
  industryName: "Typical Cleaning Business",
  items: [
    { label: "Revenue Stability", rating: 5 },
    { label: "Recurring Revenue", rating: 5 },
    { label: "Scalability", rating: 5 },
    { label: "Labor Dependency", rating: 5, higherIsWorse: true },
    { label: "Owner Dependence", rating: 3, higherIsWorse: true },
    { label: "Exit Potential", rating: 4 },
  ],
} as const;

export const stateBenchmarks = [
  { state: "Texas", performance: "Above Average", note: "Population growth, commercial expansion, strong residential demand" },
  { state: "Florida", performance: "Above Average", note: "Retirement communities, vacation rentals, year-round service" },
  { state: "California", performance: "Above Average", note: "High commercial density, premium residential pricing" },
  { state: "New York", performance: "Above Average", note: "Dense commercial market, high contract values" },
  { state: "Georgia", performance: "Average", note: "Growing suburban markets, competitive residential pricing" },
  { state: "Ohio", performance: "Average", note: "Stable commercial base, moderate wage pressure" },
] as const;

export const benchmarkThresholds = {
  revenue: { low: 200000, median: 500000, high: 800000 },
  profitMargin: { low: 10, median: 15, high: 20 },
  technicians: { low: 2, median: 6, high: 15 },
  maintenancePct: { low: 50, median: 65, high: 75 },
};

export const benchmarkDefaults = {
  revenue: "500000",
  margin: "15",
  technicians: "6",
  recurringPct: "65",
};

export const valuationDefaults = {
  revenue: "500000",
  sde: "120000",
  multiple: "2.4",
  multipleLow: 1.8,
  multipleHigh: 3.0,
  revenueMultiple: 0.6,
  sdeMarginPct: 0.24,
};

export const startupCosts = [
  { expense: "Equipment & Supplies", range: "$2K – $8K" },
  { expense: "Vehicle", range: "$5K – $25K" },
  { expense: "Marketing Launch", range: "$3K – $15K" },
  { expense: "Working Capital", range: "$5K – $20K" },
] as const;
