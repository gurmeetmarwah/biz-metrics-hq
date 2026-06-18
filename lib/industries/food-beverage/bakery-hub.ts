import { benchmarkThresholds, quickSummary } from "@/lib/industries/bakery";
import { industryInsights } from "@/lib/industries/food-beverage/bakery-us-industry-report-2026";

export { industryInsights };

export const hubMeta = {
  slug: "bakery",
  parentSlug: "food-beverage",
  parentLabel: "Food & Beverage",
  title: "Bakery Economics & Benchmarks",
  subtitle:
    "Explore bakery revenue benchmarks, profit margins, startup costs, owner salaries, valuations, and operating metrics.",
  dataVintage: "2025–2026",
  sampleSize: "210+ bakery businesses",
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$450K",
    sublabel: "median annual",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Profit Margin",
    value: "8–18%",
    sublabel: "net margin range",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Salary",
    value: "$70K",
    sublabel: "median salary",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Valuation",
    value: "2.8x SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
] as const;

export const businessScorecard = {
  industryName: "Bakery",
  items: [
    { label: "Profitability", rating: 3 },
    { label: "Scalability", rating: 3 },
    { label: "Startup Difficulty", rating: 2, higherIsWorse: true },
    { label: "Recurring Revenue", rating: 3 },
    { label: "Recession Resistance", rating: 3 },
  ],
} as const;

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
    title: "Bakery Revenue",
    subtitle: "Annual revenue, location, size, and concept benchmarks.",
    topics: ["Revenue Benchmarks", "Revenue By Size", "Revenue By Location", "Revenue By Concept"],
    href: "#revenue-benchmark",
    accent: "metric-revenue",
    buttonLabel: "Explore Revenue →",
  },
  {
    id: "profitability",
    title: "Bakery Profit Margins",
    subtitle: "Gross margin, net profit, cost structure, and benchmarks.",
    topics: ["Gross Margin", "Net Profit", "Cost Structure", "Industry Benchmarks"],
    href: "#profitability",
    accent: "metric-margin",
    buttonLabel: "Explore Profitability →",
  },
  {
    id: "startup",
    title: "Bakery Startup Costs",
    subtitle: "Equipment, buildout, inventory, and working capital.",
    topics: ["Equipment", "Leasehold Improvements", "Inventory", "Working Capital"],
    href: "#startup-costs",
    accent: "metric-valuation",
    buttonLabel: "Explore Startup Costs →",
  },
  {
    id: "owner-income",
    title: "Bakery Owner Salary",
    subtitle: "Owner-operator, manager-run, and multi-location income.",
    topics: ["Owner Operator", "Manager Run", "Multi-Location"],
    href: "#owner-economics",
    accent: "metric-salary",
    buttonLabel: "Explore Owner Income →",
  },
  {
    id: "valuation",
    title: "Bakery Valuation",
    subtitle: "Revenue, SDE, and EBITDA multiples at exit.",
    topics: ["Revenue Multiples", "SDE Multiples", "EBITDA Multiples"],
    href: "#valuation",
    accent: "metric-valuation",
    buttonLabel: "Explore Valuation →",
  },
  {
    id: "break-even",
    title: "Bakery Break-Even Analysis",
    subtitle: "Orders needed, revenue targets, and payback period.",
    topics: ["Orders Needed", "Revenue Needed", "Payback Period"],
    href: "#break-even",
    accent: "metric-revenue",
    buttonLabel: "Explore Break-Even →",
  },
] as const;

export const hubCalculators = [
  {
    label: "Profit Margin Calculator",
    description: "Calculate profitability",
    href: "/calculators/bakery-profit-margin/",
  },
  {
    label: "Startup Cost Calculator",
    description: "Estimate investment",
    href: "/calculators/bakery-startup-cost/",
  },
  {
    label: "Valuation Calculator",
    description: "Estimate business value",
    href: "/calculators/bakery-valuation/",
  },
  {
    label: "Break-Even Calculator",
    description: "Estimate required sales",
    href: "/calculators/bakery-break-even/",
  },
  {
    label: "Food Cost Calculator",
    description: "Calculate food costs",
    href: "/calculators/bakery-food-cost/",
  },
  {
    label: "Revenue Calculator",
    description: "Estimate annual revenue",
    href: "/calculators/bakery-revenue/",
  },
] as const;

export const bakeryTypes = [
  { label: "Retail Bakery", href: "/industries/restaurant-types/bakery/#revenue" },
  { label: "Artisan Bakery", href: "/industries/restaurant-types/bakery/#revenue" },
  { label: "Cake Bakery", href: "/industries/restaurant-types/bakery/#custom-cakes" },
  { label: "Wholesale Bakery", href: "/industries/restaurant-types/bakery/#wholesale-retail" },
  { label: "Home Bakery", href: "/industries/restaurant-types/bakery/#startup" },
  { label: "Franchise Bakery", href: "/industries/restaurant-types/bakery/#revenue" },
] as const;

export const revenueByTypeCards = [
  { label: "Retail Bakery", value: "$350K – $550K", href: "#revenue-benchmark" },
  { label: "Artisan Bakery", value: "$400K – $650K", href: "#revenue-benchmark" },
  { label: "Cake Bakery", value: "$380K – $700K", href: "#revenue-benchmark" },
  { label: "Wholesale Bakery", value: "$500K – $900K", href: "#revenue-benchmark" },
] as const;

export const revenueBySizeCards = [
  { label: "Small Bakery", value: "$280K – $400K", href: "#revenue-benchmark" },
  { label: "Medium Bakery", value: "$400K – $550K", href: "#revenue-benchmark" },
  { label: "Large Bakery", value: "$550K – $750K", href: "#revenue-benchmark" },
] as const;

export const revenueByLocationCards = [
  { label: "Urban", value: "$450K – $700K", href: "#revenue-benchmark" },
  { label: "Suburban", value: "$380K – $580K", href: "#revenue-benchmark" },
  { label: "Tourist Area", value: "$500K – $800K", href: "#revenue-benchmark" },
  { label: "Downtown", value: "$450K – $700K", href: "#revenue-benchmark" },
] as const;

export const productMixFlow = [
  { label: "Bread", percent: 28, color: "var(--metric-salary)" },
  { label: "Pastries", percent: 22, color: "var(--metric-margin)" },
  { label: "Cookies", percent: 10, color: "var(--accent)" },
  { label: "Cakes", percent: 32, color: "var(--metric-valuation)" },
  { label: "Wholesale", percent: 8, color: "var(--metric-revenue)" },
] as const;

export const revenueStreamAnalysis = [
  { source: "Bread", contribution: "28%" },
  { source: "Pastries", contribution: "22%" },
  { source: "Cakes", contribution: "32%" },
  { source: "Wholesale", contribution: "8%" },
  { source: "Cookies & Other", contribution: "10%" },
] as const;

export const costStructureFlow = [
  { label: "Revenue", percent: 100, href: "#revenue-benchmark", color: "var(--metric-revenue)" },
  { label: "Ingredients", percent: 28, href: "#profitability", color: "var(--metric-salary)" },
  { label: "Labor", percent: 32, href: "#profitability", color: "var(--metric-margin)" },
  { label: "Rent", percent: 9, href: "#profitability", color: "var(--metric-valuation)" },
  { label: "Packaging", percent: 3, href: "#profitability", color: "var(--accent)" },
  { label: "Profit", percent: 12, href: "#profitability", color: "var(--metric-revenue)" },
] as const;

export const wholesaleTopics = [
  "Restaurants",
  "Coffee Shops",
  "Hotels",
  "Grocery Stores",
] as const;

export const wholesaleCards = [
  { label: "Wholesale Revenue", value: "$500K – $900K", href: "#wholesale" },
  { label: "Wholesale Margins", value: "8 – 14% net", href: "#wholesale" },
  { label: "Wholesale Pricing", value: "40 – 55% of retail", href: "#wholesale" },
  { label: "Wholesale Startup Costs", value: "$150K – $300K", href: "#startup-costs" },
] as const;

export const ownerEconomicsCards = [
  { model: "Single Bakery", earnings: "$50K – $95K", type: "retail" as const },
  { model: "Multi-Bakery", earnings: "$120K – $220K+", type: "multi" as const },
  { model: "Wholesale Bakery", earnings: "$65K – $110K", type: "wholesale" as const },
  { model: "Cake Bakery", earnings: "$60K – $100K", type: "cake" as const },
] as const;

export const hubComparisons = [
  { label: "Bakery vs Coffee Shop", href: "/comparisons/coffee-shop-vs-bakery/" },
  { label: "Bakery vs Restaurant", href: "/comparisons/restaurant-vs-bakery/" },
  { label: "Bakery vs Food Truck", href: "/compare/bakery-vs-food-truck/" },
  { label: "Bakery vs Home Bakery", href: "/compare/bakery-vs-home-bakery/" },
  { label: "Bakery vs Fast Casual", href: "/compare/bakery-vs-fast-casual/" },
] as const;

export const relatedFoodBeverageIndustries = [
  { label: "Coffee Shop Economics", href: "/industries/food-beverage/coffee-shop/" },
  { label: "Restaurant Economics", href: "/industries/restaurant/" },
  { label: "Food Truck Economics", href: "/industries/food-beverage/food-truck/" },
  { label: "Fast Casual Economics", href: "/industries/restaurant-types/fast-casual/" },
  { label: "Fine Dining Economics", href: "/industries/restaurant-types/fine-dining/" },
  { label: "Catering Economics", href: "/industries/catering/" },
] as const;

export const popularMetrics = [
  { label: "Bakery Revenue Benchmarks", href: "#revenue-benchmark" },
  { label: "Bakery Profit Margin Benchmarks", href: "#profitability" },
  { label: "Bakery Startup Costs", href: "#startup-costs" },
  { label: "Bakery Owner Salaries", href: "#owner-economics" },
  { label: "Bakery Valuation Multiples", href: "#valuation" },
  { label: "Bakery Break-Even Metrics", href: "#break-even" },
] as const;

export const hubFaqs = [
  {
    question: "How profitable are bakeries?",
    answer:
      "Well-run bakeries achieve 8–18% net profit margins. Custom cake and wedding programs push the high end (15–18%). Ingredient costs run 25–32% and labor 28–36%. Wholesale adds volume but compresses per-unit margin.",
  },
  {
    question: "How much revenue does a bakery make?",
    answer:
      "Independent bakeries typically generate $280K–$750K annually, with a median around $450K. Cake shops and wholesale operations push toward $600K–$900K. Revenue is driven by daily order count (40–120) multiplied by average order value ($12–$35).",
  },
  {
    question: "How much do bakery owners earn?",
    answer:
      "Bakery owners typically earn $50K–$95K annually, with a median around $70K. Owner-operators of single retail shops take $50K–$75K. Multi-location or retail-plus-wholesale owners can earn $120K–$220K+.",
  },
  {
    question: "What is a good bakery profit margin?",
    answer:
      "A healthy bakery net margin is 10–14%. Below 8% signals ingredient cost drift or overstaffing. Top-quartile bakeries hit 15–18% through custom cake revenue, wholesale accounts, and efficient production scheduling.",
  },
  {
    question: "How much does it cost to open a bakery?",
    answer:
      "Total startup investment ranges from $50K (home-based) to $300K (full commercial buildout). Typical retail bakery costs $120K–$200K including leasehold improvements, ovens, display cases, POS, inventory, and working capital.",
  },
  {
    question: "How are bakeries valued?",
    answer:
      "Independent bakeries sell for 2.0x–3.2x SDE, with a median of 2.8x. A bakery with $500K revenue and $100K SDE might be valued around $300K. Strong custom cake reputation and wholesale contracts command the high end.",
  },
] as const;

export const hubSectionNav = [
  { id: "explore", label: "Explore" },
  { id: "calculators", label: "Calculators" },
  { id: "types", label: "Types" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "product-mix", label: "Products" },
  { id: "wholesale", label: "Wholesale" },
  { id: "profitability", label: "Margins" },
  { id: "comparisons", label: "Compare" },
  { id: "faqs", label: "FAQs" },
] as const;

export { benchmarkThresholds };

export const startupCostSummary = [
  { item: "Ovens & Mixers", range: "$20K – $60K" },
  { item: "Leasehold Improvements", range: "$30K – $120K" },
  { item: "Display & Refrigeration", range: "$18K – $60K" },
  { item: "Working Capital", range: "$15K – $40K" },
] as const;

export const valuationSummary = [
  { metric: "Revenue Multiple", value: "0.4x – 0.7x" },
  { metric: "SDE Multiple", value: "2.0x – 3.2x" },
  { metric: "EBITDA Multiple", value: "3.0x – 4.5x" },
] as const;

export const breakEvenSummary = {
  ordersPerDay: "55 – 70",
  monthlyRevenue: "$32K – $42K",
  paybackMonths: "12 – 18",
};
