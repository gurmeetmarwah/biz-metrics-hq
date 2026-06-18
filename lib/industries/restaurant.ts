export const restaurantMeta = {
  slug: "restaurant",
  name: "Restaurant",
  title: "Restaurant Industry Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, valuation multiples and key industry metrics for independent restaurants.",
  dataVintage: "2025–2026",
  sampleSize: "680+ businesses",
  geography: "United States",
};

export const restaurantKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$850K",
    sublabel: "median",
    href: "#revenue",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Margin",
    value: "8%",
    sublabel: "net median",
    href: "#profit-margins",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Pay",
    value: "$92K",
    sublabel: "median",
    href: "#owner-salary",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Valuation",
    value: "2.4x SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
] as const;

export const businessScorecard = {
  industryName: "Restaurant",
  items: [
    { label: "Profitability", rating: 3 },
    { label: "Scalability", rating: 4 },
    { label: "Startup Difficulty", rating: 4, higherIsWorse: true },
    { label: "Recurring Revenue", rating: 2 },
    { label: "Recession Resistance", rating: 2 },
  ],
} as const;

export const quickSummary = [
  { metric: "Revenue Range", value: "$450K – $1.6M" },
  { metric: "Profit Margin", value: "4% – 12%" },
  { metric: "Owner Salary", value: "$55K – $120K" },
  { metric: "Employees", value: "12 – 28" },
  { metric: "Startup Cost", value: "$275K – $750K" },
  { metric: "Valuation Multiple", value: "1.8x – 3.2x SDE" },
] as const;

export const revenueDistribution = {
  bottom25: "$450K",
  median: "$850K",
  top25: "$1.6M",
};

export const revenueByType = [
  { type: "Fast Casual", revenue: "$920K" },
  { type: "Casual Dining", revenue: "$1.1M" },
  { type: "Fine Dining", revenue: "$1.8M" },
  { type: "Food Truck", revenue: "$380K" },
] as const;

export const revenueDrivers = [
  {
    title: "Location",
    description: "Urban high-traffic sites drive 30–50% higher revenue than suburban locations.",
  },
  {
    title: "Seating capacity",
    description: "Revenue scales with covers until kitchen or service bottlenecks cap throughput.",
  },
  {
    title: "Table turnover",
    description: "Fast casual averages 3–4 turns per day; fine dining often 1–1.5.",
  },
  {
    title: "Average ticket size",
    description: "A $2 increase in average check can add $80K+ annually at moderate volume.",
  },
] as const;

export const marginDistribution = {
  poor: "2–4%",
  average: "6–8%",
  topQuartile: "10–14%",
};

export const marginByType = [
  { type: "Fast Food", margin: "6–10%" },
  { type: "Casual Dining", margin: "5–9%" },
  { type: "Fine Dining", margin: "8–14%" },
] as const;

export const costBreakdown = [
  { label: "Food Cost", percent: 32, color: "var(--metric-salary)" },
  { label: "Labor Cost", percent: 30, color: "var(--metric-margin)" },
  { label: "Rent", percent: 8, color: "var(--metric-revenue)" },
  { label: "Marketing", percent: 4, color: "var(--metric-valuation)" },
  { label: "Other", percent: 18, color: "var(--ink-faint)" },
] as const;

export const ownerSalaryTiers = [
  {
    tier: "Small Restaurant",
    range: "$45K – $75K",
    description: "Owner-operator, single location, under $600K revenue.",
  },
  {
    tier: "Average Restaurant",
    range: "$75K – $110K",
    description: "Established independent, $700K–$1.2M revenue.",
  },
  {
    tier: "Multi-location Owner",
    range: "$120K – $250K+",
    description: "2–4 units or strong single flagship doing $1.5M+.",
  },
] as const;

export const salaryFactors = [
  "Ownership structure (sole proprietor vs. S-corp salary + distributions)",
  "Location and rent burden as % of revenue",
  "Number of locations and management layer",
] as const;

export const valuationMultiples = [
  {
    label: "Revenue Multiple",
    range: "0.3x – 0.6x",
    median: "0.45x",
    note: "Used for high-volume, thin-margin concepts.",
  },
  {
    label: "SDE Multiple",
    range: "1.8x – 3.2x",
    median: "2.4x",
    note: "Standard for independent restaurants under $3M revenue.",
  },
  {
    label: "EBITDA Multiple",
    range: "2.5x – 4.5x",
    median: "3.5x",
    note: "Common for multi-unit or absentee-owned operations.",
  },
] as const;

export const valuationExample = {
  revenue: "$1M",
  sde: "$200K",
  valuation: "$480K",
  multiple: "2.4x SDE",
};

export const benchmarkThresholds = {
  revenue: { low: 450000, median: 850000, high: 1600000 },
  margin: { low: 4, median: 8, high: 12 },
  ownerSalary: { low: 55000, median: 92000, high: 120000 },
};

export const restaurantTypes = [
  { label: "Fast Casual Economics", href: "/industries/restaurant-types/fast-casual/" },
  { label: "Fine Dining Economics", href: "/industries/restaurant-types/fine-dining/" },
  { label: "Food Truck Economics", href: "/industries/restaurant-types/food-truck/" },
  { label: "Coffee Shop Economics", href: "/industries/food-beverage/coffee-shop/" },
  { label: "Bakery Economics", href: "/industries/food-beverage/bakery/" },
] as const;

export const comparisons = [
  { label: "Restaurant vs Food Truck", href: "/industries/comparisons/restaurant-vs-food-truck/" },
  { label: "Restaurant vs Coffee Shop", href: "/industries/comparisons/restaurant-vs-coffee-shop/" },
  { label: "Restaurant vs Bakery", href: "/comparisons/restaurant-vs-bakery/" },
] as const;

export const calculators = [
  { label: "Profit Margin Calculator", href: "/industries/restaurant/profit-margin-calculator/" },
  { label: "Restaurant Valuation Calculator", href: "/industries/restaurant/valuation/" },
  { label: "Food Cost Calculator", href: "/industries/restaurant/food-cost-calculator/" },
  { label: "Break-even Calculator", href: "/calculators/restaurant-break-even/" },
] as const;

export const faqs = [
  {
    question: "How much revenue does a restaurant make?",
    answer:
      "Independent restaurants typically generate $450K–$1.6M in annual revenue, with a median around $850K. Fast casual averages ~$920K, casual dining ~$1.1M, and food trucks ~$380K. Location, seating, and average ticket size are the primary drivers.",
  },
  {
    question: "What is a good restaurant profit margin?",
    answer:
      "A healthy net profit margin for an independent restaurant is 6–8%. Top-quartile operators achieve 10–14%. Below 4% is considered thin and vulnerable to cost shocks. Food and labor together consume 60–65% of revenue for most concepts.",
  },
  {
    question: "How much do restaurant owners earn?",
    answer:
      "Owner-operators typically earn $55K–$120K annually, with a median around $92K. Small single-location owners often take $45K–$75K; established independents $75K–$110K; multi-location owners can earn $120K–$250K+ depending on scale and structure.",
  },
  {
    question: "What is a restaurant worth?",
    answer:
      "Most independent restaurants sell for 1.8x–3.2x SDE, with a median of 2.4x. A restaurant with $1M revenue and $200K SDE might be valued around $480K. Revenue multiples (0.3x–0.6x) are sometimes used for high-volume, lower-margin concepts.",
  },
] as const;

export const relatedIndustries = [
  { label: "Coffee Shop", href: "/industries/food-beverage/coffee-shop/" },
  { label: "Bakery", href: "/industries/food-beverage/bakery/" },
  { label: "Food Truck", href: "/industries/restaurant-types/food-truck/" },
  { label: "Bar", href: "/industries/bar/" },
  { label: "Catering Business", href: "/industries/catering/" },
] as const;

export const sectionNav = [
  { id: "revenue", label: "Revenue" },
  { id: "profit-margins", label: "Margins" },
  { id: "owner-salary", label: "Owner Salary" },
  { id: "valuation", label: "Valuation" },
  { id: "benchmark", label: "Benchmark" },
  { id: "types", label: "Types" },
  { id: "comparisons", label: "Compare" },
  { id: "calculators", label: "Calculators" },
  { id: "faqs", label: "FAQs" },
] as const;

export const popularIndustries = [
  { label: "HVAC", href: "/industries/hvac/" },
  { label: "Dental", href: "/industries/healthcare/dental-practice/" },
  { label: "Gym", href: "/industries/gym/" },
] as const;
