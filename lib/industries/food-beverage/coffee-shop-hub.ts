import { benchmarkThresholds, quickSummary, businessScorecard } from "@/lib/industries/coffee-shop";

export { businessScorecard };

export const hubMeta = {
  slug: "coffee-shop",
  parentSlug: "food-beverage",
  parentLabel: "Food & Beverage",
  title: "Coffee Shop Economics & Benchmarks",
  subtitle:
    "Explore revenue benchmarks, profit margins, startup costs, owner salaries, valuations, and operating metrics for coffee shops.",
  dataVintage: "2025–2026",
  sampleSize: "290+ coffee shops & cafes",
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$550K",
    sublabel: "median annual",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Profit",
    value: "10–18%",
    sublabel: "net margin range",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Pay",
    value: "$85K",
    sublabel: "median salary",
    href: "#owner-income",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Valuation",
    value: "3.0x SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
] as const;

export const searchQuickLinks = [
  { label: "Revenue", href: "#revenue-benchmark" },
  { label: "Profit Margin", href: "#profitability" },
  { label: "Startup Cost", href: "#startup-costs" },
  { label: "Valuation", href: "#valuation" },
] as const;

export const industrySnapshot = quickSummary;

export const exploreTopics = [
  {
    id: "revenue",
    title: "Coffee Shop Revenue",
    subtitle: "Annual revenue, location, size, and concept benchmarks.",
    topics: ["Annual Revenue", "Revenue By Location", "Revenue By Size", "Revenue By Concept"],
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "profitability",
    title: "Coffee Shop Profit Margins",
    subtitle: "Net profit, gross margin, and cost structure analysis.",
    topics: ["Net Profit", "Gross Margin", "Cost Structure", "Benchmarking"],
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "startup",
    title: "Coffee Shop Startup Costs",
    subtitle: "Equipment, buildout, inventory, and working capital.",
    topics: ["Equipment", "Leasehold Improvements", "Inventory", "Working Capital"],
    href: "#startup-costs",
    accent: "metric-valuation",
  },
  {
    id: "owner-income",
    title: "Coffee Shop Owner Salary",
    subtitle: "Owner-operator, manager-run, and multi-location income.",
    topics: ["Owner Operator", "Manager Run", "Multi-Location"],
    href: "#owner-income",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    title: "Coffee Shop Valuation",
    subtitle: "SDE, EBITDA multiples, and sale price benchmarks.",
    topics: ["SDE Multiples", "EBITDA Multiples", "Sale Price Benchmarks"],
    href: "#valuation",
    accent: "metric-valuation",
  },
  {
    id: "break-even",
    title: "Coffee Shop Break-Even Analysis",
    subtitle: "Customers needed, revenue targets, and payback period.",
    topics: ["Customers Needed", "Revenue Needed", "Payback Period"],
    href: "#break-even",
    accent: "metric-revenue",
  },
] as const;

export const hubCalculators = [
  {
    label: "Profit Margin Calculator",
    description: "Calculate profitability",
    href: "/calculators/coffee-shop-profit-margin/",
  },
  {
    label: "Startup Cost Calculator",
    description: "Estimate investment",
    href: "/calculators/coffee-shop-startup-cost/",
  },
  {
    label: "Valuation Calculator",
    description: "Estimate business value",
    href: "/calculators/coffee-shop-valuation/",
  },
  {
    label: "Break-Even Calculator",
    description: "Estimate required sales",
    href: "/calculators/coffee-shop-break-even/",
  },
  {
    label: "Labor Cost Calculator",
    description: "Calculate staffing costs",
    href: "/calculators/coffee-shop-labor-cost/",
  },
  {
    label: "Revenue Calculator",
    description: "Estimate annual revenue",
    href: "/calculators/coffee-shop-revenue/",
  },
] as const;

export const coffeeShopTypes = [
  {
    label: "Independent Cafe",
    href: "/industries/restaurant-types/coffee-shop/#daily-economics",
  },
  {
    label: "Specialty Coffee Shop",
    href: "/industries/restaurant-types/coffee-shop/#revenue",
  },
  {
    label: "Drive-Thru Coffee",
    href: "/industries/restaurant-types/coffee-shop/#drive-thru",
  },
  {
    label: "Coffee Roastery",
    href: "/industries/restaurant-types/coffee-shop/#revenue",
  },
  {
    label: "Franchise Coffee Shop",
    href: "/industries/restaurant-types/coffee-shop/#revenue",
  },
  {
    label: "Mobile Coffee Cart",
    href: "/industries/restaurant-types/coffee-shop/#startup",
  },
] as const;

export const revenueByLocationCards = [
  { label: "Urban", value: "$550K – $850K", href: "#revenue-benchmark" },
  { label: "Suburban", value: "$450K – $700K", href: "#revenue-benchmark" },
  { label: "College Area", value: "$500K – $750K", href: "#revenue-benchmark" },
  { label: "Tourist Area", value: "$520K – $800K", href: "#revenue-benchmark" },
] as const;

export const revenueBySizeCards = [
  { label: "Small Cafe", value: "$350K – $500K", href: "#revenue-benchmark" },
  { label: "Medium Cafe", value: "$500K – $700K", href: "#revenue-benchmark" },
  { label: "Large Cafe", value: "$700K – $950K", href: "#revenue-benchmark" },
] as const;

export const revenueByConceptCards = [
  { label: "Drive-Thru", value: "$550K – $900K", href: "#revenue-benchmark" },
  { label: "Cafe", value: "$400K – $650K", href: "#revenue-benchmark" },
  { label: "Roastery", value: "$450K – $750K", href: "#revenue-benchmark" },
  { label: "Hybrid Cafe", value: "$500K – $800K", href: "#revenue-benchmark" },
] as const;

export const costStructureFlow = [
  { label: "Revenue", percent: 100, href: "#revenue-benchmark", color: "var(--metric-revenue)" },
  { label: "Ingredients", percent: 22, href: "#profitability", color: "var(--metric-salary)" },
  { label: "Labor", percent: 32, href: "#profitability", color: "var(--metric-margin)" },
  { label: "Rent", percent: 10, href: "#profitability", color: "var(--metric-valuation)" },
  { label: "Other Expenses", percent: 23, href: "#profitability", color: "var(--accent)" },
  { label: "Profit", percent: 13, href: "#profitability", color: "var(--metric-revenue)" },
] as const;

export const hubComparisons = [
  { label: "Coffee Shop vs Bakery", href: "/comparisons/coffee-shop-vs-bakery/" },
  { label: "Coffee Shop vs Restaurant", href: "/industries/comparisons/restaurant-vs-coffee-shop/" },
  { label: "Coffee Shop vs Food Truck", href: "/comparisons/coffee-shop-vs-food-truck/" },
  { label: "Coffee Shop vs Fast Casual", href: "/comparisons/coffee-shop-vs-fast-casual/" },
  { label: "Coffee Shop vs Bubble Tea Shop", comingSoon: true },
] as const;

export const relatedFoodBeverageIndustries = [
  { label: "Bakery Economics", href: "/industries/food-beverage/bakery/" },
  { label: "Restaurant Economics", href: "/industries/restaurant/" },
  { label: "Food Truck Economics", href: "/industries/food-beverage/food-truck/" },
  { label: "Fast Casual Economics", href: "/industries/restaurant-types/fast-casual/" },
  { label: "Fine Dining Economics", href: "/industries/restaurant-types/fine-dining/" },
  { label: "Catering Economics", href: "/industries/catering/" },
] as const;

export const popularMetrics = [
  { label: "Coffee Shop Revenue Benchmarks", href: "#revenue-benchmark" },
  { label: "Coffee Shop Profit Margin Benchmarks", href: "#profitability" },
  { label: "Coffee Shop Startup Costs", href: "#startup-costs" },
  { label: "Coffee Shop Owner Salaries", href: "#owner-income" },
  { label: "Coffee Shop Valuation Multiples", href: "#valuation" },
  { label: "Coffee Shop Break-Even Metrics", href: "#break-even" },
] as const;

export const industryInsights = [
  {
    title: "How Much Revenue Does a Coffee Shop Make?",
    href: "#revenue-benchmark",
    metric: "$550K median",
  },
  {
    title: "What Is a Good Coffee Shop Profit Margin?",
    href: "#profitability",
    metric: "12–15% target",
  },
  {
    title: "How Much Do Coffee Shop Owners Earn?",
    href: "#owner-income",
    metric: "$85K median",
  },
  {
    title: "What Is a Coffee Shop Worth?",
    href: "#valuation",
    metric: "3.0x SDE",
  },
] as const;

export const hubFaqs = [
  {
    question: "How profitable are coffee shops?",
    answer:
      "Well-run coffee shops achieve 10–18% net profit margins. Beverage-heavy models carry 70%+ gross margins on drinks, but labor and rent compress net profit. Shops with drive-thru, strong food programs, and retail bean sales consistently outperform neighborhood cafes.",
  },
  {
    question: "How much revenue does a coffee shop make?",
    answer:
      "Independent coffee shops typically generate $350K–$850K annually, with a median around $550K. Drive-thru locations and transit hubs push toward $700K–$950K. Revenue is driven by daily customer count (200–500) multiplied by average ticket ($6–$12).",
  },
  {
    question: "How much do coffee shop owners earn?",
    answer:
      "Owner-operators typically earn $60K–$110K annually, with a median around $85K. Manager-operated single locations take $80K–$110K. Multi-location owners with 2–5 cafes can earn $150K–$280K+.",
  },
  {
    question: "How much does it cost to open a coffee shop?",
    answer:
      "Total startup investment ranges from $80K (kiosk, used equipment) to $400K (premium buildout, drive-thru). Typical neighborhood cafe costs $150K–$250K including lease improvements, espresso equipment, furniture, POS, inventory, and working capital.",
  },
  {
    question: "What is a good profit margin?",
    answer:
      "A healthy coffee shop net margin is 12–15%. Below 8% signals labor or rent burden. Top-quartile operators hit 16–18% through drive-thru volume, $9+ average tickets, and retail bean sales. Coffee COGS should stay under 25%; labor under 32%.",
  },
  {
    question: "How are coffee shops valued?",
    answer:
      "Most independent coffee shops sell for 2.5x–3.5x SDE, with a median of 3.0x. A cafe with $600K revenue and $120K SDE might be valued around $360K. Revenue multiples (0.5x–0.8x) apply to high-volume locations with transferable leases.",
  },
] as const;

export const hubSectionNav = [
  { id: "explore", label: "Explore" },
  { id: "calculators", label: "Calculators" },
  { id: "types", label: "Types" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "profitability", label: "Margins" },
  { id: "comparisons", label: "Compare" },
  { id: "faqs", label: "FAQs" },
] as const;

export { benchmarkThresholds };

export const ownerIncomeSummary = [
  { tier: "Owner-Operator", range: "$60K – $90K" },
  { tier: "Manager-Operated", range: "$80K – $110K" },
  { tier: "Multi-Location Owner", range: "$150K – $280K+" },
] as const;

export const valuationSummary = [
  { metric: "Revenue Multiple", value: "0.5x – 0.8x" },
  { metric: "SDE Multiple", value: "2.5x – 3.5x" },
  { metric: "EBITDA Multiple", value: "3.5x – 5.0x" },
] as const;

export const startupCostSummary = [
  { item: "Espresso Equipment", range: "$25K – $80K" },
  { item: "Lease Improvements", range: "$40K – $150K" },
  { item: "Initial Inventory", range: "$5K – $15K" },
  { item: "Working Capital", range: "$20K – $60K" },
] as const;

export const breakEvenSummary = {
  customersPerDay: "180 – 250",
  monthlyRevenue: "$38K – $48K",
  paybackMonths: "12 – 18",
};
