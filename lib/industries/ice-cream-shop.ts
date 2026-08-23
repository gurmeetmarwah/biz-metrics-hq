export const iceCreamShopMeta = {
  slug: "ice-cream-shop",
  name: "Ice Cream Shop",
  title: "Ice Cream Business Valuation Multiples: What Is a Shop Worth?",
  subtitle:
    "Ice cream business valuation multiples typically run 2.0×–3.5× SDE (median ~2.8×). Compare revenue, margins, owner salaries, and operating metrics for independent and franchise shops.",
  dataVintage: "2025–2026",
  sampleSize: "175+ ice cream shops",
  geography: "United States",
};

export const industrySnapshotRatings = [
  { label: "Category", value: "Food & Beverage", rating: null },
  { label: "Business Model", value: "Retail", rating: null },
  { label: "Recurring Revenue", value: "Low", rating: 1 },
  { label: "Seasonality", value: "High", rating: 5 },
  { label: "Average Transaction", value: "Medium", rating: 3 },
  { label: "Capital Requirement", value: "Medium", rating: 3 },
] as const;

export const industryInsights = [
  {
    title: "Revenue peaks in warmer months",
    body: "Ice cream shops in temperate U.S. markets often generate 35–45% of annual revenue between May and August. Cash reserves and off-season revenue streams (catering, cakes, retail pints) are essential for year-round viability.",
  },
  {
    title: "Profitability depends on foot traffic",
    body: "High-visibility locations with strong walk-by traffic outperform destination-only sites. Median shops need 200–350 daily customers at healthy ticket sizes to support 15–20% net margins.",
  },
  {
    title: "Upselling improves margins",
    body: "Milkshakes, sundaes, and premium toppings lift average ticket from $6–7 base scoops to $8–12+ blended tickets — adding 3–5 margin points without proportional labor increases.",
  },
  {
    title: "Premium brands earn higher tickets",
    body: "Artisan and premium-positioned shops command $9–$14 average tickets vs $5–$8 at volume soft-serve — materially improving revenue per square foot and owner compensation.",
  },
  {
    title: "Location quality drives performance",
    body: "Tourist corridors, beach towns, suburban family centers, and college-adjacent strips outperform low-traffic strip malls. Rent as % of revenue should stay below 10–12% for healthy margins.",
  },
] as const;

export const revenuePercentiles = [
  { percentile: "25th", revenue: "$420K" },
  { percentile: "Median", revenue: "$720K" },
  { percentile: "75th", revenue: "$950K" },
  { percentile: "Top 10%", revenue: "$1.2M+" },
] as const;

export const revenueDistribution = {
  bottom25: "$420K",
  median: "$720K",
  top25: "$950K",
};

export const revenueMix = [
  { label: "Ice Cream", share: 45, description: "Scoops, soft serve, and premium frozen desserts" },
  { label: "Milkshakes", share: 18, description: "Blended shakes and thick shakes — high-margin upsells" },
  { label: "Sundaes", share: 12, description: "Topping-heavy desserts with strong attach rates" },
  { label: "Cakes", share: 10, description: "Ice cream cakes for birthdays and events" },
  { label: "Beverages", share: 8, description: "Floats, smoothies, and seasonal drinks" },
  { label: "Retail Products", share: 7, description: "Take-home pints, merchandise, and gift cards" },
] as const;

export const salesMetrics = [
  { metric: "Average Daily Customers", value: "200 – 350" },
  { metric: "Average Ticket Size", value: "$6.50 – $11.50" },
  { metric: "Transactions Per Day", value: "220 – 380" },
  { metric: "Revenue Per Square Foot", value: "$350 – $650" },
  { metric: "Peak Season Sales", value: "35 – 45% of annual" },
  { metric: "Off-Season Sales", value: "55 – 65% of annual" },
] as const;

export const seasonalPerformance = [
  { metric: "Spring Revenue", value: "18 – 22% of annual" },
  { metric: "Summer Revenue", value: "38 – 45% of annual" },
  { metric: "Fall Revenue", value: "20 – 25% of annual" },
  { metric: "Winter Revenue", value: "12 – 18% of annual" },
  { metric: "Peak Month", value: "July (often 14 – 18% of annual)" },
  { metric: "Slowest Month", value: "January (often 4 – 7% of annual)" },
] as const;

export const menuMixBenchmarks = [
  { item: "Soft Serve", share: "28 – 38%", note: "High volume, lower ticket; drives foot traffic" },
  { item: "Premium Scoops", share: "22 – 32%", note: "Artisan flavors; higher margin per serving" },
  { item: "Sundaes", share: "10 – 16%", note: "Topping upsell; strong summer attach" },
  { item: "Milkshakes", share: "14 – 20%", note: "Premium ticket builder" },
  { item: "Ice Cream Cakes", share: "8 – 14%", note: "Event-driven; year-round birthday revenue" },
  { item: "Take Home Packs", share: "5 – 10%", note: "Retail pints; extends brand beyond visit" },
] as const;

export const marginTiers = {
  poor: "6 – 10%",
  average: "11 – 16%",
  good: "17 – 21%",
  excellent: "22 – 28%",
} as const;

export const marginMetrics = [
  { metric: "Gross Margin", value: "55 – 68%" },
  { metric: "Operating Margin", value: "14 – 22%" },
  { metric: "Net Margin", value: "11 – 20%" },
] as const;

export const startupCostBreakdown = [
  { item: "Lease Improvements", range: "$25K – $80K", percent: "22 – 28%" },
  { item: "Equipment", range: "$35K – $95K", percent: "28 – 35%" },
  { item: "Freezers", range: "$12K – $35K", percent: "10 – 14%" },
  { item: "Furniture", range: "$8K – $25K", percent: "6 – 10%" },
  { item: "POS System", range: "$3K – $12K", percent: "2 – 4%" },
  { item: "Initial Inventory", range: "$5K – $15K", percent: "4 – 6%" },
  { item: "Licenses & Permits", range: "$3K – $10K", percent: "2 – 4%" },
  { item: "Working Capital", range: "$20K – $60K", percent: "15 – 22%" },
] as const;

export const startupCostTotal = {
  low: "$110K",
  median: "$185K",
  high: "$320K",
};

export const ownerEconomicsCards = [
  { model: "Single Store", earnings: "$65K – $95K" },
  { model: "Owner Operator", earnings: "$85K – $120K" },
  { model: "Multi Store Owner", earnings: "$120K – $180K" },
  { model: "Regional Operator", earnings: "$180K – $280K+" },
] as const;

export const valuationMultiples = [
  { metric: "SDE Multiple", range: "2.0× – 3.5×" },
  { metric: "EBITDA Multiple", range: "2.8× – 4.2×" },
  { metric: "Revenue Multiple", range: "0.3× – 0.6×" },
] as const;

export const valuationDefaults = {
  revenue: "720000",
  sde: "122000",
  multiple: "2.8",
  multipleLow: 2.0,
  multipleHigh: 3.5,
  revenueMultiple: 0.45,
  sdeMarginPct: 0.17,
};

export const topPerformerPractices = [
  "Increase average ticket value",
  "Sell premium desserts",
  "Expand catering and event sales",
  "Offer seasonal flavors",
  "Improve operational efficiency",
  "Maintain excellent customer reviews",
] as const;

export const operatingMetrics = [
  { metric: "Average Ticket", value: "$8.40" },
  { metric: "Labor %", value: "22 – 30%" },
  { metric: "Food Cost %", value: "24 – 32%" },
  { metric: "Rent %", value: "8 – 12%" },
  { metric: "Revenue Per Employee", value: "$85K – $120K" },
  { metric: "Sales Per Sq Ft", value: "$350 – $650" },
] as const;

export const industryOpportunities = [
  "Catering",
  "Birthday parties",
  "Corporate events",
  "Delivery apps",
  "Retail pints",
  "Seasonal products",
  "Wholesale supply",
] as const;

export const industryRisks = [
  "Seasonality",
  "Labor costs",
  "Rising dairy prices",
  "Weather",
  "Local competition",
  "Rent increases",
] as const;

export const businessQualityScorecard = {
  industryName: "Typical Ice Cream Shop",
  items: [
    { label: "Revenue Stability", rating: 3 },
    { label: "Growth Potential", rating: 4 },
    { label: "Franchise Potential", rating: 5 },
    { label: "Operational Complexity", rating: 3 },
    { label: "Exit Potential", rating: 3 },
  ],
} as const;

export const dessertBusinessBenchmarkMatrix = {
  columns: ["Ice Cream Shop", "Frozen Yogurt", "Coffee Shop", "Bakery", "Bubble Tea"] as const,
  rows: [
    { metric: "Revenue", values: [3, 3, 4, 3, 3] as const },
    { metric: "Net Margin", values: [3, 3, 3, 3, 4] as const },
    { metric: "Startup Cost", values: [3, 3, 3, 2, 2] as const, higherIsWorse: true },
    { metric: "Average Ticket", values: [3, 3, 3, 4, 3] as const },
    { metric: "Labor Intensity", values: [3, 3, 4, 4, 3] as const, higherIsWorse: true },
    { metric: "Seasonality", values: [5, 5, 2, 2, 2] as const },
    { metric: "Franchise Potential", values: [5, 4, 5, 3, 4] as const },
  ],
} as const;

export const foodBenchmarkRankings = [
  {
    label: "Highest Margin Food Businesses",
    description: "Food formats with strongest net margin profiles — specialty beverage and premium dessert operators.",
    href: "/industries/ice-cream-shop/reports/ice-cream-highest-margin-food-2026/",
  },
  {
    label: "Lowest Startup Cost Food Businesses",
    description: "Capital-efficient food business models vs full buildout concepts.",
    href: "/industries/ice-cream-shop/reports/ice-cream-lowest-startup-cost-food-2026/",
  },
  {
    label: "Highest Valued Food Businesses",
    description: "Food businesses with strongest SDE multiples and transferability at sale.",
    href: "/industries/ice-cream-shop/reports/ice-cream-highest-valued-food-2026/",
  },
  {
    label: "Best Seasonal Businesses",
    description: "How ice cream and seasonal operators manage peak/off-peak cash flow and profitability.",
    href: "/industries/ice-cream-shop/reports/ice-cream-best-seasonal-food-2026/",
  },
  {
    label: "Best Franchise Food Businesses",
    description: "Franchise-ready food formats ranked by unit economics and expansion velocity.",
    href: "/industries/ice-cream-shop/reports/ice-cream-best-franchise-food-2026/",
  },
] as const;

export const benchmarkThresholds = {
  revenue: { low: 420000, median: 720000, high: 950000 },
  profitMargin: { low: 10, median: 17, high: 22 },
  technicians: { low: 180, median: 280, high: 380 },
  maintenancePct: { low: 6.5, median: 8.4, high: 11 },
};

export const benchmarkDefaults = {
  revenue: "720000",
  margin: "17",
  technicians: "280",
  recurringPct: "8.40",
};

export const hubFaqs = [
  {
    question: "How profitable is an ice cream shop?",
    answer:
      "Healthy independent ice cream shops typically achieve 11–20% net profit margin, with a median around 17%. Shops with strong upselling, catering revenue, and efficient labor during peak season can reach 20–24%. High-rent or highly seasonal locations may fall below 12%.",
  },
  {
    question: "How much revenue does an ice cream shop make?",
    answer:
      "The median U.S. ice cream shop generates about $720K in annual revenue. The interquartile range spans $420K (25th percentile) to $950K (75th percentile), with top-performing tourist and multi-unit operators exceeding $1.2M.",
  },
  {
    question: "What is the average profit margin?",
    answer:
      "Gross margins typically run 55–68%; operating margins 14–22%; net margins 11–20%. Food cost (24–32%), labor (22–30%), and rent (8–12%) are the primary P&L levers.",
  },
  {
    question: "How much do ice cream shop owners earn?",
    answer:
      "Owner-operators typically earn $85K–$120K in total compensation, with a median around $105K. Multi-store operators with strong peak-season management can exceed $180K.",
  },
  {
    question: "What is an ice cream shop worth?",
    answer:
      "Ice cream shops typically sell at 2.0×–3.5× SDE, with a median near 2.8×. A shop with $720K revenue and $122K SDE might value between $244K and $427K. Strong location leases, catering revenue, and year-round cash flow support premium multiples.",
  },
  {
    question: "How much does it cost to open an ice cream shop?",
    answer:
      "Most independent ice cream shops launch between $110K and $320K, with a median near $185K. Franchise buildouts can exceed $350K. Equipment, freezers, lease improvements, and working capital for off-season months are the largest line items.",
  },
  {
    question: "What is the average customer ticket?",
    answer:
      "Median average ticket is about $8.40, with a typical range of $6.50–$11.50. Premium artisan shops average $9–$14; volume soft-serve locations may average $5–$8.",
  },
  {
    question: "How seasonal is the business?",
    answer:
      "Highly seasonal in most U.S. climates: summer often represents 38–45% of annual revenue, while winter may be only 12–18%. July is typically the peak month; January the slowest. Year-round operators in warm climates or tourist markets show flatter seasonality.",
  },
] as const;
