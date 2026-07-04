export const poolServiceMeta = {
  slug: "pool-service",
  name: "Pool Service",
  title: "Pool Service Business Benchmarks",
  subtitle:
    "Compare revenue, profit margins, startup costs, owner salaries, valuation multiples, and key operating metrics for residential and commercial pool service businesses.",
  dataVintage: "2025–2026",
  sampleSize: "190+ pool service companies",
  geography: "United States",
};

export const industrySnapshotRatings = [
  { label: "Category", value: "Home Services", rating: null },
  { label: "Business Model", value: "Recurring Service", rating: null },
  { label: "Customer Retention", value: "High", rating: 5 },
  { label: "Capital Requirement", value: "Low–Medium", rating: 3 },
  { label: "Seasonality", value: "Moderate", rating: 3 },
  { label: "Average Contract Length", value: "12 Months", rating: null },
] as const;

export const industryInsights = [
  {
    title: "Monthly service contracts drive predictable revenue",
    body: "Weekly and biweekly pool cleaning agreements create subscription-like cash flow — median operators derive 75–85% of revenue from recurring routes, supporting strong MRR visibility and acquisition premiums.",
  },
  {
    title: "Route density significantly impacts profitability",
    body: "Technicians servicing 55–75 pools per week in tight geographic clusters achieve 18–25% higher gross profit per route than spread-out operators. Drive time is the hidden margin killer in pool service.",
  },
  {
    title: "Upselling repairs and equipment increases LTV",
    body: "Equipment repair, saltwater conversions, leak detection, and automation upgrades can add $800–$2,500 per customer in lifetime value beyond base cleaning revenue — top operators cross-sell on 30–40% of routes.",
  },
  {
    title: "Climate affects demand and seasonality",
    body: "Sun Belt markets run year-round routes with minimal off-season dip; temperate climates see 15–25% revenue swings between peak summer and shoulder months. Openings and closings add seasonal revenue spikes.",
  },
  {
    title: "Commercial accounts provide higher stability",
    body: "HOA, apartment, and hotel pool contracts offer higher ticket values ($300–$1,200+/month per account), longer contract terms, and lower churn than residential — a key scale lever for multi-crew operators.",
  },
] as const;

export const revenuePercentiles = [
  { percentile: "25th", revenue: "$550K" },
  { percentile: "Median", revenue: "$950K" },
  { percentile: "75th", revenue: "$1.4M" },
  { percentile: "Top 10%", revenue: "$2M+" },
] as const;

export const revenueDistribution = {
  bottom25: "$550K",
  median: "$950K",
  top25: "$1.4M",
};

export const revenueMix = [
  { label: "Weekly Cleaning", share: 42, description: "Core recurring route revenue — residential and commercial maintenance" },
  { label: "Chemical Treatments", share: 15, description: "Balancing, shock treatments, and specialty chemical services" },
  { label: "Equipment Repair", share: 12, description: "Pump, filter, heater, and automation repairs" },
  { label: "Pool Openings", share: 8, description: "Spring startup services in seasonal markets" },
  { label: "Pool Closings", share: 6, description: "Winterization and off-season prep" },
  { label: "Renovations", share: 7, description: "Resurfacing, tile, and equipment upgrades" },
  { label: "Commercial Contracts", share: 10, description: "HOA, apartment, and hospitality pool accounts" },
] as const;

export const recurringRevenueMetrics = [
  { metric: "Monthly Recurring Revenue", value: "$58K median" },
  { metric: "Customer Retention", value: "85 – 92%" },
  { metric: "Average Contract Length", value: "12 months" },
  { metric: "Recurring Revenue %", value: "75 – 85%" },
  { metric: "Revenue Churn", value: "8 – 15% annual" },
  { metric: "New Monthly Customers", value: "25 – 45" },
] as const;

export const customerMetrics = [
  { metric: "Residential Customers", value: "180 – 350" },
  { metric: "Commercial Customers", value: "15 – 60" },
  { metric: "Pools Serviced Per Week", value: "120 – 220" },
  { metric: "Average Revenue Per Customer", value: "$95 – $165/mo" },
  { metric: "Average Lifetime Value", value: "$2,800 – $6,500" },
  { metric: "Customer Acquisition Cost", value: "$150 – $350" },
] as const;

export const routeEfficiencyMetrics = [
  { metric: "Pools Per Technician", value: "55 – 75 / week" },
  { metric: "Revenue Per Route", value: "$8K – $14K / mo" },
  { metric: "Average Drive Time", value: "45 – 90 min / day" },
  { metric: "Daily Stops", value: "12 – 18" },
  { metric: "Revenue Per Stop", value: "$65 – $120" },
  { metric: "Route Density Score", value: "High (7+ stops/hr)" },
] as const;

export const marginTiers = {
  poor: "12 – 16%",
  average: "17 – 21%",
  good: "22 – 26%",
  excellent: "27 – 32%",
} as const;

export const marginMetrics = [
  { metric: "Gross Margin", value: "58 – 72%" },
  { metric: "Operating Margin", value: "18 – 28%" },
  { metric: "Net Margin", value: "18 – 26%" },
] as const;

export const startupCostBreakdown = [
  { item: "Service Vehicle", range: "$25K – $55K", percent: "28 – 35%" },
  { item: "Cleaning Equipment", range: "$8K – $20K", percent: "10 – 14%" },
  { item: "Vacuum Systems", range: "$5K – $15K", percent: "6 – 10%" },
  { item: "Chemical Inventory", range: "$3K – $8K", percent: "4 – 6%" },
  { item: "Testing Equipment", range: "$2K – $6K", percent: "2 – 4%" },
  { item: "Insurance", range: "$5K – $12K", percent: "6 – 9%" },
  { item: "Licensing", range: "$2K – $8K", percent: "2 – 5%" },
  { item: "Working Capital", range: "$15K – $40K", percent: "15 – 22%" },
] as const;

export const startupCostTotal = {
  low: "$65K",
  median: "$95K",
  high: "$165K",
};

export const ownerEconomicsCards = [
  { model: "Owner-Operator", earnings: "$95K – $125K" },
  { model: "Single Route Business", earnings: "$110K – $145K" },
  { model: "Multi-Crew Business", earnings: "$135K – $200K" },
  { model: "Regional Company", earnings: "$200K – $350K+" },
] as const;

export const valuationMultiples = [
  { metric: "SDE Multiple", range: "3.0× – 4.5×" },
  { metric: "EBITDA Multiple", range: "4.5× – 7.0×" },
  { metric: "Revenue Multiple", range: "0.9× – 1.6×" },
] as const;

export const valuationDefaults = {
  revenue: "950000",
  sde: "209000",
  multiple: "3.6",
  multipleLow: 3.0,
  multipleHigh: 4.5,
  revenueMultiple: 1.2,
  sdeMarginPct: 0.22,
};

export const operatingMetrics = [
  { metric: "Revenue Per Technician", value: "$160K – $220K" },
  { metric: "Revenue Per Truck", value: "$140K – $190K" },
  { metric: "Gross Profit Per Route", value: "$55K – $95K / yr" },
  { metric: "Monthly Contracts", value: "400 – 750" },
  { metric: "Average Service Ticket", value: "$85 – $145" },
  { metric: "Repeat Customer Rate", value: "85 – 92%" },
] as const;

export const industryOpportunities = [
  "Pool automation",
  "Saltwater conversions",
  "Equipment upgrades",
  "Leak detection",
  "Commercial pools",
  "Weekly maintenance plans",
  "Emergency repairs",
] as const;

export const industryRisks = [
  "Weather",
  "Chemical price volatility",
  "Labor shortages",
  "Vehicle costs",
  "Seasonality",
  "Customer churn",
] as const;

export const businessQualityScorecard = {
  industryName: "Typical Pool Service Business",
  items: [
    { label: "Revenue Stability", rating: 5 },
    { label: "Growth Potential", rating: 4 },
    { label: "Operational Complexity", rating: 3 },
    { label: "Franchise Potential", rating: 4 },
    { label: "Exit Potential", rating: 4 },
  ],
} as const;

export const homeServiceRouteEconomicsMatrix = {
  columns: ["Pool Service", "Lawn Care", "Pest Control", "HVAC", "Plumbing"] as const,
  rows: [
    { metric: "Revenue", values: [4, 3, 4, 5, 4] as const },
    { metric: "Net Margin", values: [4, 3, 4, 3, 4] as const },
    { metric: "Recurring Revenue %", values: [5, 4, 5, 4, 3] as const },
    { metric: "Revenue per Technician", values: [4, 3, 4, 4, 4] as const },
    { metric: "Average Customer LTV", values: [4, 3, 4, 4, 3] as const },
    { metric: "Route Density", values: [4, 5, 5, 3, 3] as const },
    { metric: "Startup Cost", values: [2, 2, 2, 3, 2] as const, higherIsWorse: true },
  ],
} as const;

export const homeBenchmarkRankings = [
  {
    label: "Highest Margin Home Services",
    description: "Home service trades with strongest net margin profiles — pool, pest control, and specialty operators.",
    href: "/industries/pool-service/reports/pool-service-highest-margin-home-2026/",
  },
  {
    label: "Best Recurring Revenue Businesses",
    description: "Route-based and contract-heavy models ranked by recurring revenue percentage.",
    href: "/industries/pool-service/reports/pool-service-best-recurring-revenue-home-2026/",
  },
  {
    label: "Lowest Startup Cost Businesses",
    description: "Capital-efficient home service models vs full fleet and equipment buildouts.",
    href: "/industries/pool-service/reports/pool-service-lowest-startup-cost-home-2026/",
  },
  {
    label: "Highest Valued Home Services",
    description: "Trades with strongest SDE multiples and private equity acquisition demand.",
    href: "/industries/pool-service/reports/pool-service-highest-valued-home-2026/",
  },
  {
    label: "Fastest Growing Home Services",
    description: "Home service segments with strongest unit growth and consolidation velocity.",
    href: "/industries/pool-service/reports/pool-service-fastest-growing-home-2026/",
  },
] as const;

export const benchmarkThresholds = {
  revenue: { low: 550000, median: 950000, high: 1400000 },
  profitMargin: { low: 16, median: 22, high: 26 },
  technicians: { low: 2, median: 5, high: 10 },
  maintenancePct: { low: 70, median: 80, high: 88 },
};

export const benchmarkDefaults = {
  revenue: "950000",
  margin: "22",
  technicians: "5",
  recurringPct: "80",
};

export const hubFaqs = [
  {
    question: "How profitable is a pool service business?",
    answer:
      "Healthy pool service companies typically achieve 18–26% net profit margin, with a median around 22%. Operators with dense routes, strong recurring contracts, and repair upsells can reach 26–30%. Gross margins usually run 58–72%.",
  },
  {
    question: "What revenue does a pool service company generate?",
    answer:
      "The median U.S. pool service company generates about $950K in annual revenue. The interquartile range spans $550K (25th percentile) to $1.4M (75th percentile), with top multi-crew operators exceeding $2M.",
  },
  {
    question: "What is the average profit margin?",
    answer:
      "Gross margins typically run 58–72%; operating margins 18–28%; net margins 18–26%. Labor (28–35%), chemicals (8–12%), and fleet costs (6–10%) are the primary P&L levers.",
  },
  {
    question: "How much do pool service owners earn?",
    answer:
      "Owner-operators typically earn $95K–$145K in total compensation, with a median around $135K. Multi-crew operators with commercial accounts and repair revenue can exceed $200K.",
  },
  {
    question: "How many pools can one technician service?",
    answer:
      "A full-time pool technician typically services 55–75 pools per week on a well-designed route — about 12–18 stops per day. Dense suburban routes with minimal drive time support the high end; rural or spread-out territories run lower.",
  },
  {
    question: "What is the average customer retention rate?",
    answer:
      "Strong pool service operators maintain 85–92% annual customer retention. Top-quartile companies achieve 90%+ through consistent service quality, proactive communication, and bundled repair offerings.",
  },
  {
    question: "What does it cost to start a pool service business?",
    answer:
      "Most pool service businesses launch between $65K and $165K, with a median near $95K. Service vehicles, equipment, insurance, and working capital for route ramp-up are the largest line items.",
  },
  {
    question: "How is a pool service business valued?",
    answer:
      "Pool service businesses typically sell at 3.0×–4.5× SDE, with a median near 3.6×. A company with $950K revenue and $209K SDE might value between $627K and $940K. High recurring revenue, route density, and low churn support premium multiples.",
  },
] as const;
