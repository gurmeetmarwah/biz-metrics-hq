export const treeServiceMeta = {
  slug: "tree-service",
  name: "Tree Service",
  title: "Tree Service Business Benchmarks",
  subtitle:
    "Compare revenue, profit margins, startup costs, owner salaries, valuation multiples, and operating benchmarks for tree removal, trimming, stump grinding, and arborist businesses.",
  dataVintage: "2025–2026",
  sampleSize: "165+ tree service companies",
  geography: "United States",
};

export const industrySnapshotRatings = [
  { label: "Category", value: "Home Services", rating: null },
  { label: "Business Model", value: "Project + Maintenance", rating: null },
  { label: "Capital Requirement", value: "High", rating: 4 },
  { label: "Seasonality", value: "Moderate", rating: 3 },
  { label: "Average Ticket", value: "High", rating: 5 },
  { label: "Labor Skill Level", value: "High", rating: 5 },
] as const;

export const industryInsights = [
  {
    title: "Tree removals generate the highest revenue",
    body: "Full removals with stump grinding and debris hauling command $1,800–$4,500+ per job — often 40%+ of company revenue. Operators with crane-assisted capability and efficient chipper workflows capture premium storm and hazard-removal work.",
  },
  {
    title: "Storm seasons create emergency demand",
    body: "Hurricane, ice storm, and wind-event markets see 15–35% of annual revenue from emergency response. Companies with pre-positioned crews, bucket trucks, and storm marketing lists can double monthly revenue during peak events.",
  },
  {
    title: "Commercial contracts stabilize cash flow",
    body: "HOA, property management, utility line clearance, and municipal pruning contracts provide predictable work between residential peaks — top operators derive 20–40% of revenue from commercial and utility accounts.",
  },
  {
    title: "Specialized equipment drives margins",
    body: "Bucket trucks, chippers, and stump grinders create high barriers to entry but enable 45–62% gross margins on removal work. Equipment utilization above 75% is the primary lever separating profitable crews from break-even operators.",
  },
  {
    title: "Certified arborists command premium pricing",
    body: "ISA-certified arborists and plant health care programs support 15–25% pricing premiums on pruning, diagnostics, and preservation work — differentiating from low-price \"cut-and-run\" competitors.",
  },
] as const;

export const revenuePercentiles = [
  { percentile: "25th", revenue: "$650K" },
  { percentile: "Median", revenue: "$1.25M" },
  { percentile: "75th", revenue: "$2.1M" },
  { percentile: "Top 10%", revenue: "$3.5M+" },
] as const;

export const revenueDistribution = {
  bottom25: "$650K",
  median: "$1.25M",
  top25: "$2.1M",
};

export const revenueMix = [
  { label: "Tree Removal", share: 38, description: "Full removals, hazard trees, and crane-assisted takedowns" },
  { label: "Tree Trimming", share: 22, description: "Pruning, canopy reduction, and crown maintenance" },
  { label: "Stump Grinding", share: 12, description: "Standalone and bundled stump removal services" },
  { label: "Emergency Calls", share: 15, description: "Storm damage, fallen trees, and urgent hazard response" },
  { label: "Arborist Consulting", share: 5, description: "Assessments, preservation plans, and expert reports" },
  { label: "Commercial Maintenance", share: 8, description: "HOA, utility, and municipal pruning contracts" },
] as const;

export const serviceMetrics = [
  { metric: "Average Job Value", value: "$800 – $4,500" },
  { metric: "Jobs Per Week", value: "12 – 28" },
  { metric: "Emergency Jobs %", value: "15 – 35%" },
  { metric: "Commercial Revenue %", value: "20 – 40%" },
  { metric: "Residential Revenue %", value: "60 – 80%" },
  { metric: "Repeat Customers", value: "35 – 55%" },
] as const;

export const equipmentItems = [
  { item: "Bucket Trucks", range: "$55K – $150K", note: "Core production asset — 35′ to 75′ reach" },
  { item: "Chippers", range: "$25K – $75K", note: "12″ to 18″ capacity for debris processing" },
  { item: "Stump Grinders", range: "$15K – $45K", note: "Track and tow-behind models" },
  { item: "Chainsaws", range: "$8K – $20K", note: "Professional fleet — Stihl, Husqvarna, Echo" },
  { item: "Mini Skid Steers", range: "$20K – $55K", note: "Land clearing and material handling" },
  { item: "Log Loaders", range: "$30K – $80K", note: "Commercial and land-clearing operations" },
] as const;

export const equipmentSummary = [
  { metric: "Average Equipment Investment", value: "$120K – $280K" },
  { metric: "Equipment Replacement Cycle", value: "7 – 12 years" },
  { metric: "Equipment Cost as % of Revenue", value: "12 – 20%" },
] as const;

export const marginTiers = {
  poor: "10 – 14%",
  average: "15 – 19%",
  good: "20 – 24%",
  excellent: "25 – 30%",
} as const;

export const marginMetrics = [
  { metric: "Gross Margin", value: "45 – 62%" },
  { metric: "Operating Margin", value: "16 – 26%" },
  { metric: "Net Margin", value: "14 – 24%" },
] as const;

export const startupCostBreakdown = [
  { item: "Bucket Truck", range: "$55K – $150K", percent: "30 – 38%" },
  { item: "Wood Chipper", range: "$25K – $75K", percent: "14 – 20%" },
  { item: "Chainsaws", range: "$8K – $20K", percent: "4 – 6%" },
  { item: "Safety Equipment", range: "$5K – $12K", percent: "2 – 4%" },
  { item: "Insurance", range: "$12K – $30K", percent: "6 – 10%" },
  { item: "Trailer", range: "$8K – $25K", percent: "3 – 6%" },
  { item: "Licensing", range: "$5K – $15K", percent: "2 – 4%" },
  { item: "Working Capital", range: "$30K – $75K", percent: "12 – 18%" },
] as const;

export const startupCostTotal = {
  low: "$150K",
  median: "$245K",
  high: "$400K",
};

export const ownerEconomicsCards = [
  { model: "Owner-Operator", earnings: "$110K – $145K" },
  { model: "2-Crew Company", earnings: "$135K – $175K" },
  { model: "5-Crew Company", earnings: "$155K – $225K" },
  { model: "Regional Tree Company", earnings: "$225K – $400K+" },
] as const;

export const valuationMultiples = [
  { metric: "SDE Multiple", range: "2.5× – 4.2×" },
  { metric: "EBITDA Multiple", range: "4.0× – 6.5×" },
  { metric: "Revenue Multiple", range: "0.5× – 0.9×" },
] as const;

export const valuationDefaults = {
  revenue: "1250000",
  sde: "312500",
  multiple: "3.7",
  multipleLow: 2.5,
  multipleHigh: 4.2,
  revenueMultiple: 0.7,
  sdeMarginPct: 0.25,
};

export const operatingMetrics = [
  { metric: "Revenue Per Crew", value: "$250K – $500K" },
  { metric: "Revenue Per Truck", value: "$180K – $350K" },
  { metric: "Average Job Duration", value: "3 – 8 hours" },
  { metric: "Jobs Completed Weekly", value: "12 – 28" },
  { metric: "Crew Utilization", value: "70 – 88%" },
  { metric: "Equipment Utilization", value: "65 – 85%" },
] as const;

export const serviceBenchmarkMatrix = [
  { service: "Tree Removal", avgTicket: "$1,800 – $4,500", margin: "High", startupCost: "Very High", recurringRevenue: "Low" },
  { service: "Tree Trimming", avgTicket: "$450 – $1,200", margin: "Medium–High", startupCost: "High", recurringRevenue: "Medium" },
  { service: "Stump Grinding", avgTicket: "$250 – $600", margin: "High", startupCost: "Medium", recurringRevenue: "Low" },
  { service: "Arborist Services", avgTicket: "$350 – $900", margin: "Very High", startupCost: "Medium", recurringRevenue: "Medium" },
  { service: "Land Clearing", avgTicket: "$2,500 – $8,000+", margin: "High", startupCost: "Very High", recurringRevenue: "Low" },
] as const;

export const crewEquipmentEconomicsMatrix = {
  columns: ["Tree Service", "Landscaping", "Pool Service", "HVAC", "Plumbing"] as const,
  rows: [
    { metric: "Revenue per Crew", values: [5, 4, 4, 4, 4] as const },
    { metric: "Average Job Value", values: [5, 2, 2, 4, 3] as const },
    { metric: "Equipment Investment", values: [5, 3, 2, 3, 3] as const, higherIsWorse: true },
    { metric: "Net Margin", values: [4, 3, 4, 3, 4] as const },
    { metric: "Commercial Revenue %", values: [3, 4, 3, 4, 3] as const },
    { metric: "Emergency Revenue %", values: [5, 2, 2, 4, 4] as const },
    { metric: "SDE Multiple", values: [4, 3, 4, 4, 3] as const },
  ],
} as const;

export const industryOpportunities = [
  "Emergency storm response",
  "Commercial contracts",
  "Municipal contracts",
  "Plant health care",
  "Firewood sales",
  "Land clearing",
  "Crane-assisted removals",
] as const;

export const industryRisks = [
  "Worker safety",
  "Insurance costs",
  "Equipment maintenance",
  "Weather",
  "Fuel prices",
  "Labor shortages",
] as const;

export const businessQualityScorecard = {
  industryName: "Typical Tree Service Business",
  items: [
    { label: "Revenue Stability", rating: 4 },
    { label: "Growth Potential", rating: 4 },
    { label: "Capital Requirement", rating: 4, higherIsWorse: true },
    { label: "Operational Complexity", rating: 4, higherIsWorse: true },
    { label: "Exit Potential", rating: 4 },
  ],
} as const;

export const homeBenchmarkRankings = [
  {
    label: "Highest Margin Home Services",
    description: "Outdoor and specialty trades with strongest net margin profiles — tree service, pest control, and pool operators.",
    href: "/industries/tree-service/reports/tree-service-highest-margin-home-2026/",
  },
  {
    label: "Highest Ticket Home Services",
    description: "Trades ranked by average job value and project ticket size.",
    href: "/industries/tree-service/reports/tree-service-highest-ticket-home-2026/",
  },
  {
    label: "Most Recession-Resistant Services",
    description: "Home service models with emergency demand and essential-work characteristics.",
    href: "/industries/tree-service/reports/tree-service-recession-resistant-home-2026/",
  },
  {
    label: "Best Commercial Service Businesses",
    description: "Trades with strongest HOA, utility, and municipal contract economics.",
    href: "/industries/tree-service/reports/tree-service-commercial-service-home-2026/",
  },
  {
    label: "Fastest Growing Outdoor Businesses",
    description: "Outdoor service segments with strongest unit growth and consolidation velocity.",
    href: "/industries/tree-service/reports/tree-service-fastest-growing-outdoor-2026/",
  },
] as const;

export const benchmarkThresholds = {
  revenue: { low: 650000, median: 1250000, high: 2100000 },
  profitMargin: { low: 14, median: 21, high: 24 },
  technicians: { low: 2, median: 4, high: 8 },
  maintenancePct: { low: 10, median: 18, high: 30 },
};

export const benchmarkDefaults = {
  revenue: "1250000",
  margin: "21",
  technicians: "4",
  recurringPct: "18",
};

export const hubFaqs = [
  {
    question: "How profitable is a tree service business?",
    answer:
      "Healthy tree service companies typically achieve 18–24% net profit margin, with a median around 21%. Storm-market operators with efficient equipment utilization can reach 25–30%. Gross margins on removal work often run 45–62%.",
  },
  {
    question: "What revenue does a tree service company generate?",
    answer:
      "The median U.S. tree service company generates about $1.25M in annual revenue. The interquartile range spans $650K (25th percentile) to $2.1M (75th percentile), with top multi-crew operators exceeding $3.5M.",
  },
  {
    question: "What is the average profit margin?",
    answer:
      "Gross margins typically run 45–62%; operating margins 16–26%; net margins 14–24%. Labor (30–45%), equipment depreciation (8–14%), and insurance (8–14%) are the primary P&L levers.",
  },
  {
    question: "How much do tree service owners earn?",
    answer:
      "Owner-operators typically earn $110K–$175K in total compensation, with a median around $155K. Multi-crew operators in storm markets with commercial contracts can exceed $225K.",
  },
  {
    question: "How much does it cost to start a tree service business?",
    answer:
      "Most tree service businesses launch between $150K and $400K, with a median near $245K. Bucket trucks, chippers, insurance, and working capital for crew ramp-up are the largest line items.",
  },
  {
    question: "What equipment is required?",
    answer:
      "Core equipment includes a bucket truck ($55K–$150K), wood chipper ($25K–$75K), chainsaws and safety gear ($13K–$32K), and often a stump grinder ($15K–$45K). Total equipment investment typically runs $120K–$280K.",
  },
  {
    question: "How many jobs can a crew complete each week?",
    answer:
      "A productive tree crew completes 12–28 jobs per week depending on job mix — trimming routes run higher volume; large removals may yield 3–8 jobs weekly. Median operators average 15–20 jobs per crew per week.",
  },
  {
    question: "What is a tree service business worth?",
    answer:
      "Tree service businesses typically sell at 2.5×–4.2× SDE, with a median near 3.7×. A company with $1.25M revenue and $312K SDE might value between $780K and $1.31M. Equipment quality, storm revenue, and commercial contracts support premium multiples.",
  },
] as const;
