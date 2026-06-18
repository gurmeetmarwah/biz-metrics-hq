export const fastCasualMeta = {
  slug: "fast-casual",
  name: "Fast Casual",
  title: "Fast Casual Restaurant Economics",
  subtitle:
    "Revenue, profit margins, startup costs, owner salaries and valuation benchmarks for fast casual restaurants.",
  dataVintage: "2025–2026",
  sampleSize: "240+ fast casual locations",
  geography: "United States",
};

export const fastCasualKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$1.4M",
    sublabel: "median",
    href: "#revenue",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Margin",
    value: "12%",
    sublabel: "net median",
    href: "#profit-margins",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Pay",
    value: "$120K",
    sublabel: "median",
    href: "#owner-salary",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Valuation",
    value: "3.2x SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
] as const;

export const heroExamples = [
  { label: "Chipotle-style", href: "#economics" },
  { label: "Sweetgreen-style", href: "#economics" },
  { label: "CAVA-style", href: "#economics" },
] as const;

export const quickSummary = [
  { metric: "Annual Revenue", value: "$900K – $1.8M" },
  { metric: "Profit Margin", value: "8% – 15%" },
  { metric: "Employees", value: "18 – 35" },
  { metric: "Avg Ticket Size", value: "$12 – $18" },
  { metric: "Startup Cost", value: "$400K – $900K" },
  { metric: "EBITDA Margin", value: "10% – 18%" },
] as const;

export const economicsFlow = [
  { label: "Customer", value: "High daily volume" },
  { label: "Average Ticket", value: "$12 – $18" },
  { label: "Revenue", value: "$900K – $1.8M" },
  { label: "Food Cost", value: "28 – 32%" },
  { label: "Labor", value: "26 – 30%" },
  { label: "Rent", value: "6 – 9%" },
  { label: "Profit", value: "8 – 15% net" },
] as const;

export const economicsAdvantages = [
  "Counter service eliminates full waitstaff — labor runs 4–6 points lower than full-service dining.",
  "Standardized menus and prep lines drive 3–5x higher throughput per square foot.",
  "Premium positioning supports $14+ average tickets without fine-dining overhead.",
  "Digital ordering and loyalty programs lift repeat visits and average check size.",
] as const;

export const revenueDistribution = {
  bottom25: "$900K",
  median: "$1.4M",
  top25: "$1.8M",
};

export const revenueByStoreSize = [
  { type: "Small (under 1,800 sq ft)", revenue: "$850K – $1.1M" },
  { type: "Medium (1,800 – 2,500 sq ft)", revenue: "$1.2M – $1.5M" },
  { type: "Large (2,500+ sq ft)", revenue: "$1.5M – $2.0M" },
] as const;

export const revenueByLocation = [
  { type: "Urban", revenue: "$1.5M – $2.0M" },
  { type: "Suburban", revenue: "$1.1M – $1.4M" },
  { type: "Mall", revenue: "$1.0M – $1.3M" },
  { type: "Transit Hub", revenue: "$1.3M – $1.7M" },
] as const;

export const marginTiers = {
  poor: "4–6%",
  average: "8–10%",
  strong: "11–13%",
  elite: "14%+",
};

export const marginDrivers = [
  {
    title: "Food Cost",
    range: "28–32%",
    description:
      "Portion-controlled bowls, burritos, and salads keep COGS predictable. Premium proteins push the high end.",
  },
  {
    title: "Labor Cost",
    range: "26–30%",
    description:
      "Line cooks and cashiers replace servers and bussers. Peak-hour scheduling is the main lever.",
  },
  {
    title: "Occupancy Cost",
    range: "6–9%",
    description:
      "Urban fast casual pays more rent but offsets with volume. Target under 8% of revenue.",
  },
  {
    title: "Marketing",
    range: "2–4%",
    description:
      "Digital-first brands spend on app promos and loyalty. Established locations rely more on organic traffic.",
  },
] as const;

export const marginByFormat = [
  { type: "Fast Casual", margin: "8–15%" },
  { type: "Full Service", margin: "5–9%" },
  { type: "Fine Dining", margin: "8–14%" },
  { type: "Food Truck", margin: "10–18%" },
] as const;

export const laborByRevenue = [
  { level: "$500K", employees: "10 – 14" },
  { level: "$1M", employees: "16 – 22" },
  { level: "$2M", employees: "28 – 38" },
] as const;

export const laborCostBenchmark = {
  range: "26–30%",
  note: "Includes hourly kitchen and front-of-house staff. Management salaries often classified separately in larger units.",
};

export const ownerSalaryTiers = [
  {
    tier: "Single Unit Owner",
    range: "$90K – $140K",
    description:
      "Owner-operator of one fast casual location doing $1M–$1.5M. Mix of salary and distributions.",
  },
  {
    tier: "Multi-Unit Owner",
    range: "$180K – $350K+",
    description:
      "2–5 locations with area managers. Economics improve with shared commissary and purchasing.",
  },
  {
    tier: "Franchise Owner",
    range: "$80K – $160K",
    description:
      "Single franchise unit after royalties (5–8%) and marketing fees. Volume and brand matter significantly.",
  },
] as const;

export const valuationMultiples = [
  {
    label: "Revenue Multiple",
    range: "0.4x – 0.7x",
    median: "0.55x",
    note: "Used for high-volume, proven concepts with strong brand recognition.",
  },
  {
    label: "SDE Multiple",
    range: "2.5x – 4.0x",
    median: "3.2x",
    note: "Standard for independent and franchise fast casual under $3M revenue.",
  },
  {
    label: "EBITDA Multiple",
    range: "3.5x – 5.5x",
    median: "4.5x",
    note: "Common for multi-unit operators with professional management.",
  },
] as const;

export const valuationExample = {
  revenue: "$1.5M",
  sde: "$220K",
  valuation: "$700K",
  multiple: "3.2x SDE",
};

export const startupCosts = [
  { item: "Buildout", range: "$200K – $450K" },
  { item: "Equipment", range: "$80K – $150K" },
  { item: "POS System", range: "$15K – $35K" },
  { item: "Initial Inventory", range: "$10K – $25K" },
  { item: "Working Capital", range: "$75K – $150K" },
] as const;

export const totalInvestment = {
  low: "$400K",
  typical: "$650K",
  high: "$900K",
};

export const unitEconomicsExample = {
  customersPerDay: 320,
  averageTicket: 14,
  daysOpen: 365,
  revenuePerDay: 4480,
  revenuePerYear: 1635200,
};

export const comparisons = [
  { label: "Fast Casual vs Full Service", comingSoon: true },
  { label: "Fast Casual vs Food Truck", comingSoon: true },
  { label: "Fast Casual vs Coffee Shop", href: "/comparisons/coffee-shop-vs-fast-casual/" },
  { label: "Fast Casual vs Bakery", comingSoon: true },
] as const;

export const leadingBrands = [
  { brand: "Chipotle Mexican Grill", positioning: "Premium fast casual" },
  { brand: "CAVA", positioning: "Premium Mediterranean" },
  { brand: "Sweetgreen", positioning: "Premium health-forward" },
  { brand: "Panera Bread", positioning: "Broad-appeal fast casual" },
  { brand: "Shake Shack", positioning: "Premium burger fast casual" },
] as const;

export const calculators = [
  {
    label: "Food Cost Calculator",
    href: "/industries/restaurant/food-cost-calculator/",
  },
  {
    label: "Profit Margin Calculator",
    href: "/industries/restaurant/profit-margin-calculator/",
  },
  {
    label: "Break-even Calculator",
    href: "/calculators/restaurant-break-even/",
  },
  {
    label: "Valuation Calculator",
    href: "/industries/restaurant/valuation/",
  },
] as const;

export const benchmarkThresholds = {
  revenue: { low: 900000, median: 1400000, high: 1800000 },
  margin: { low: 8, median: 12, high: 15 },
  ownerSalary: { low: 90000, median: 120000, high: 140000 },
};

export const sectionNav = [
  { id: "economics", label: "Economics" },
  { id: "revenue", label: "Revenue" },
  { id: "profit-margins", label: "Margins" },
  { id: "labor", label: "Labor" },
  { id: "owner-salary", label: "Owner Pay" },
  { id: "valuation", label: "Valuation" },
  { id: "startup", label: "Startup" },
  { id: "unit-economics", label: "Unit Econ" },
  { id: "benchmark", label: "Benchmark" },
  { id: "comparisons", label: "Compare" },
  { id: "calculators", label: "Tools" },
  { id: "faqs", label: "FAQs" },
] as const;

export const faqs = [
  {
    question: "How profitable are fast casual restaurants?",
    answer:
      "Well-run fast casual restaurants achieve 8–15% net profit margins, with a median around 12%. Top-quartile operators hit 14%+ through labor efficiency, strong average tickets ($14–$18), and high daily transaction counts. Prime cost (food + labor) should stay under 60% of revenue.",
  },
  {
    question: "How much revenue does a fast casual restaurant generate?",
    answer:
      "Independent fast casual locations typically generate $900K–$1.8M annually, with a median around $1.4M. Urban locations and larger footprints push toward $1.5M–$2.0M. Revenue is driven by daily customer count (250–400/day) multiplied by average ticket size.",
  },
  {
    question: "What is a good profit margin for fast casual?",
    answer:
      "A healthy fast casual net margin is 10–12%. Below 8% signals cost structure issues — often labor scheduling or food cost drift. Elite operators at 14%+ typically have strong digital ordering, loyalty repeat rates, and rent under 8% of revenue.",
  },
  {
    question: "How much does it cost to start a fast casual restaurant?",
    answer:
      "Total investment ranges from $400K (converted space, limited buildout) to $900K (premium urban buildout). Typical all-in cost is $550K–$700K including buildout ($200K–$450K), equipment, POS, initial inventory, and 3–6 months working capital.",
  },
  {
    question: "What are typical fast casual valuation multiples?",
    answer:
      "Fast casual restaurants sell for 2.5x–4.0x SDE, with a median of 3.2x — higher than traditional full-service due to scalability and brand premium. A location with $1.5M revenue and $220K SDE might be valued around $700K. Revenue multiples of 0.4x–0.7x apply for high-volume concepts.",
  },
] as const;
