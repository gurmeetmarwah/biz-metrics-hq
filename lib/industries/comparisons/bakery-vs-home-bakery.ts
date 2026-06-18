export const comparisonMeta = {
  slug: "bakery-vs-home-bakery" as const,
  title: "Bakery vs Home Bakery",
  subtitle:
    "Compare retail bakery and cottage food home bakery economics — startup costs, revenue ceilings, profit margins, wholesale access, and lifestyle trade-offs.",
  dataVintage: "2025–2026",
};

export const comparisonLabels = {
  bakery: "Bakery",
  competitor: "Home Bakery",
  breadcrumbHub: {
    label: "Bakery",
    href: "/industries/food-beverage/bakery/",
  },
  exploreBakery: {
    label: "Explore Bakery Hub →",
    href: "/industries/food-beverage/bakery/",
  },
  exploreCompetitor: {
    label: "Explore Home Bakery Startup →",
    href: "/industries/food-beverage/bakery/#startup-costs",
  },
} as const;

export const decisionSnapshot = [
  { factor: "Lower Startup Cost", winner: "Home Bakery" as const },
  { factor: "Higher Revenue Potential", winner: "Bakery" as const },
  { factor: "Wholesale & B2B Access", winner: "Bakery" as const },
  { factor: "Lifestyle Flexibility", winner: "Home Bakery" as const },
  { factor: "Faster Launch", winner: "Home Bakery" as const },
  { factor: "Scalability & Exit Value", winner: "Bakery" as const },
] as const;

export const kpiComparison = [
  { metric: "Startup Cost", bakery: "$50K – $300K", competitor: "$5K – $50K" },
  { metric: "Revenue (median)", bakery: "$450K", competitor: "$95K" },
  { metric: "Profit Margin", bakery: "8 – 18%", competitor: "15 – 35%" },
  { metric: "Owner Salary (median)", bakery: "$70K", competitor: "$55K" },
  { metric: "Employees", bakery: "3 – 10", competitor: "0 – 2" },
  { metric: "Avg Order Value", bakery: "$12 – $35", competitor: "$25 – $60" },
  { metric: "Valuation Multiple", bakery: "2.8x SDE", competitor: "Limited saleability" },
] as const;

export const visualScorecard = [
  { label: "Startup Cost", bakery: 6, competitor: 10 },
  { label: "Revenue Potential", bakery: 10, competitor: 5 },
  { label: "Wholesale & B2B", bakery: 10, competitor: 2 },
  { label: "Lifestyle Flexibility", bakery: 5, competitor: 9 },
  { label: "Scalability", bakery: 8, competitor: 4 },
  { label: "Exit Value", bakery: 7, competitor: 3 },
] as const;

export const bakeryStartupItems = [
  { item: "Ovens & Mixers", percent: 28 },
  { item: "Display Cases", percent: 18 },
  { item: "Refrigeration", percent: 15 },
  { item: "Lease Improvements", percent: 25 },
  { item: "Initial Inventory", percent: 14 },
] as const;

export const competitorStartupItems = [
  { item: "Home Kitchen Equipment", percent: 35 },
  { item: "Cottage Food License & Permits", percent: 8 },
  { item: "Packaging & Labeling", percent: 15 },
  { item: "Initial Inventory", percent: 20 },
  { item: "Marketing & Website", percent: 12 },
  { item: "Working Capital", percent: 10 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", bakery: "$38K – $120K", competitor: "$2K – $15K" },
  { category: "Buildout / Lease", bakery: "$30K – $120K", competitor: "$0 – $5K" },
  { category: "Inventory", bakery: "$3K – $10K", competitor: "$500 – $3K" },
  { category: "Permits & Licenses", bakery: "$5K – $15K", competitor: "$500 – $2K" },
  { category: "Working Capital", bakery: "$15K – $40K", competitor: "$1K – $10K" },
] as const;

export const bakeryRevenueDist = {
  bottom: "$280K",
  median: "$450K",
  top: "$750K",
};

export const competitorRevenueDist = {
  bottom: "$40K",
  median: "$95K",
  top: "$250K",
};

export const bakeryRevenueDrivers = [
  "Daily walk-in orders and repeat customers",
  "Custom cakes and celebration orders",
  "Wholesale accounts and B2B volume",
  "Seasonal demand and holiday peaks",
] as const;

export const competitorRevenueDrivers = [
  "Custom orders via social media and word of mouth",
  "Farmers markets and local pop-up events",
  "Pre-order pickup and direct-to-consumer sales",
  "Seasonal specialties and holiday gift boxes",
] as const;

export const dailyEconomics = {
  bakery: {
    label: "Orders Per Day",
    volume: 60,
    averageValue: 25,
    dailyRevenue: 1500,
  },
  competitor: {
    label: "Orders Per Week",
    volume: 12,
    averageValue: 35,
    dailyRevenue: 60,
  },
};

export const marginTiers = {
  bakery: { weak: "3–5%", average: "8–12%", strong: "13–18%" },
  competitor: { weak: "10–15%", average: "20–28%", strong: "30–35%" },
};

export const costStructureComparison = [
  { expense: "Ingredients", bakery: "25 – 32%", competitor: "20 – 28%" },
  { expense: "Labor", bakery: "28 – 36%", competitor: "0 – 15%" },
  { expense: "Rent", bakery: "7 – 11%", competitor: "0 – 2%" },
  { expense: "Packaging", bakery: "2 – 4%", competitor: "3 – 6%" },
  { expense: "Marketing", bakery: "2 – 5%", competitor: "3 – 8%" },
] as const;

export const bakeryRevenueMix = [
  { label: "Bread", percent: 28 },
  { label: "Pastries", percent: 22 },
  { label: "Cookies", percent: 10 },
  { label: "Custom Cakes", percent: 32 },
  { label: "Wholesale Orders", percent: 8 },
] as const;

export const competitorRevenueMix = [
  { label: "Custom Orders", percent: 45 },
  { label: "Farmers Markets", percent: 25 },
  { label: "Social Media / Direct", percent: 20 },
  { label: "Holiday & Gift Boxes", percent: 10 },
] as const;

export const profitPotentialComparison = [
  { stream: "Core Product", bakery: "Moderate (daily bread)", competitor: "Good (specialty items)" },
  { stream: "Premium Product", bakery: "Excellent (wedding cakes)", competitor: "Strong (custom cakes)" },
  { stream: "Wholesale Volume", bakery: "High potential", competitor: "Restricted by cottage food law" },
] as const;

export const ownerIncomeComparison = [
  {
    model: "Retail Bakery Owner",
    earnings: "$50K – $95K",
    type: "bakery" as const,
  },
  {
    model: "Home Bakery Owner",
    earnings: "$30K – $80K",
    type: "competitor" as const,
  },
  {
    model: "Multi-Bakery Owner",
    earnings: "$120K – $220K+",
    type: "bakery" as const,
  },
  {
    model: "Top Home Baker (Part-Time)",
    earnings: "$60K – $100K",
    type: "competitor" as const,
  },
] as const;

export const workloadComparison = [
  {
    factor: "Staffing Complexity",
    bakery: "3 – 10 employees, production + counter",
    competitor: "0 – 2 helpers, mostly owner-operated",
  },
  {
    factor: "Production Hours",
    bakery: "Early mornings — 3 AM – 2 PM typical",
    competitor: "Flexible — batch around personal schedule",
  },
  {
    factor: "Regulatory Burden",
    bakery: "Commercial health permits, inspections, zoning",
    competitor: "Cottage food license — product & channel limits",
  },
  {
    factor: "Sales Channels",
    bakery: "Retail storefront, wholesale, catering, delivery",
    competitor: "Direct sales, markets, pre-orders — no wholesale",
  },
  {
    factor: "Operational Stress",
    bakery: "Moderate–High — rent, payroll, production deadlines",
    competitor: "Lower — home kitchen, no lease or staff overhead",
  },
] as const;

export const workdayTimeline = {
  bakery: { start: "3 AM", end: "2 PM", label: "Retail Bakery" },
  competitor: { start: "Flexible", end: "Part-Time Hours", label: "Home Bakery" },
};

export const breakEvenComparison = [
  { metric: "Revenue Needed (monthly)", bakery: "$32K – $42K", competitor: "$2.5K – $5K" },
  { metric: "Orders Needed", bakery: "55 – 70/day", competitor: "8 – 15/week" },
  { metric: "Months To Break-Even", bakery: "12 – 18 months", competitor: "3 – 9 months" },
] as const;

export const breakEvenExamples = {
  bakery: { volumePerDay: 60, unit: "orders/day", label: "Retail Bakery" },
  competitor: { volumePerDay: 12, unit: "orders/week", label: "Home Bakery" },
};

export const wholesaleChannels = [
  {
    channel: "Walk-In Sales",
    potential: "$250K – $400K",
    note: "Daily retail bread, pastries, and impulse purchases",
  },
  {
    channel: "Custom Cakes",
    potential: "$80K – $180K",
    note: "Birthday, wedding, and celebration orders at 60–75% margins",
  },
  {
    channel: "Wholesale Accounts",
    potential: "$100K – $300K",
    note: "Coffee shops, restaurants, and grocers — steady B2B volume",
  },
  {
    channel: "Corporate Orders",
    potential: "$40K – $120K",
    note: "Catering trays, event desserts, and recurring office accounts",
  },
] as const;

export const wholesaleInsight =
  "Retail bakeries can build wholesale programs supplying coffee shops, restaurants, grocers, and corporate accounts — often $100K–$300K in steady B2B revenue that improves production efficiency. Home bakeries under cottage food laws are typically restricted to direct consumer sales: farmers markets, online pre-orders, and in-person pickup. Wholesale, retail storefront, and interstate shipping are prohibited or severely limited in most states.";

export const valuationComparison = [
  { metric: "Revenue Multiple", bakery: "0.4x – 0.7x", competitor: "0.2x – 0.4x" },
  { metric: "SDE Multiple", bakery: "2.0x – 3.2x", competitor: "1.0x – 2.0x" },
  { metric: "Saleability", bakery: "Moderate — recipe & owner dependent", competitor: "Limited — license tied to home kitchen" },
] as const;

export const valuationExamples = {
  bakery: { revenue: "$450K", value: "$300K", note: "~2.8x SDE on $107K SDE" },
  competitor: { revenue: "$95K", value: "$45K", note: "~1.5x SDE on $30K SDE — limited buyer pool" },
};

export const scalingLadder = {
  bakery: ["1 Bakery", "Wholesale", "2 Locations", "Regional Brand"],
  competitor: ["Home Kitchen", "Farmers Markets", "Expanded Cottage Menu", "Retail Upgrade"],
};

export const chooseBakery = [
  "You want wholesale and B2B revenue streams",
  "You plan to exceed $200K in annual revenue",
  "You have $100K+ to invest in equipment and lease",
  "You want a sellable business with exit potential",
  "You need a commercial kitchen for full product range",
] as const;

export const chooseCompetitor = [
  "You want to start under $50K with minimal risk",
  "You prefer part-time or side-business flexibility",
  "You are testing recipes before committing to retail",
  "You enjoy direct customer relationships at markets and online",
  "Cottage food product limits fit your menu scope",
] as const;

export const calculators = [
  {
    label: "Bakery Profit Margin Calculator",
    href: "/calculators/bakery-profit-margin/",
  },
  {
    label: "Bakery Startup Cost Calculator",
    href: "/calculators/bakery-startup-cost/",
  },
  {
    label: "Bakery Valuation Calculator",
    href: "/calculators/bakery-valuation/",
  },
  {
    label: "Bakery Break-Even Calculator",
    href: "/calculators/bakery-break-even/",
  },
  {
    label: "Bakery Economics Hub",
    href: "/industries/food-beverage/bakery/",
  },
] as const;

export const relatedComparisons = [
  { label: "Bakery vs Food Truck", href: "/compare/bakery-vs-food-truck/" },
  { label: "Bakery vs Fast Casual", href: "/compare/bakery-vs-fast-casual/" },
  { label: "Restaurant vs Bakery", href: "/comparisons/restaurant-vs-bakery/" },
  { label: "Coffee Shop vs Bakery", href: "/comparisons/coffee-shop-vs-bakery/" },
  { label: "Bakery vs Fast Casual", href: "/compare/bakery-vs-fast-casual/" },
] as const;

export const faqs = [
  {
    question: "Is a home bakery more profitable than a retail bakery?",
    answer:
      "Home bakeries often achieve higher percentage margins (15–35% vs. 8–18%) because there is no rent, minimal labor, and lower overhead. However, retail bakeries generate far more absolute profit — median revenue is $450K vs. $95K for home bakeries. A retail bakery at 12% margin earns ~$54K; a home bakery at 25% on $95K earns ~$24K.",
  },
  {
    question: "How much does it cost to start a home bakery vs. a retail bakery?",
    answer:
      "Home bakeries under cottage food laws typically cost $5K–$50K for basic equipment, licensing, packaging, and initial inventory. Retail bakeries require $50K–$300K for commercial ovens, leasehold improvements, display cases, and working capital. A typical retail shop opens at $120K–$200K.",
  },
  {
    question: "Can a home bakery sell wholesale?",
    answer:
      "In most states, cottage food operations cannot sell wholesale to restaurants, grocers, or coffee shops. Sales are limited to direct consumer channels — farmers markets, pre-orders, and in-person pickup. Retail bakeries with commercial licenses can pursue B2B accounts that often represent $100K–$300K in annual revenue.",
  },
  {
    question: "When should I upgrade from a home bakery to a retail shop?",
    answer:
      "Consider upgrading when you consistently exceed $150K in revenue, cottage food product restrictions limit your menu, you lose orders due to capacity, or wholesale inquiries you cannot legally fulfill pile up. Most operators upgrade after 2–4 years of profitable home production.",
  },
  {
    question: "Which model has better lifestyle balance?",
    answer:
      "Home bakeries offer more flexibility — part-time hours, no lease obligations, and production on your schedule. Retail bakeries require early mornings (often 3 AM starts), daily staffing, and fixed overhead regardless of sales. Home baking suits side businesses; retail suits full-time operators building a brand.",
  },
  {
    question: "Can you sell a home bakery business?",
    answer:
      "Home bakeries have limited saleability. Cottage food licenses are tied to the owner and home kitchen, so buyers typically acquire recipes and customer lists rather than a transferable business entity. Retail bakeries sell at 2.0x–3.2x SDE when books are clean and production can run without the owner.",
  },
] as const;

export type DecisionInputs = {
  budget: "under50k" | "50k-150k" | "150k-300k" | "300k+";
  experience: "baking" | "food-service" | "business" | "none";
  goal: "wholesale" | "lifestyle" | "scale" | "low-capital";
};

export function getRecommendation(inputs: DecisionInputs): "Bakery" | "Home Bakery" {
  let bakeryScore = 0;
  let competitorScore = 0;

  if (inputs.budget === "under50k") competitorScore += 3;
  else if (inputs.budget === "50k-150k") {
    bakeryScore += 1;
    competitorScore += 2;
  } else if (inputs.budget === "150k-300k") bakeryScore += 2;
  else bakeryScore += 3;

  if (inputs.experience === "baking") {
    bakeryScore += 1;
    competitorScore += 2;
  } else if (inputs.experience === "food-service") bakeryScore += 2;
  else if (inputs.experience === "business") {
    bakeryScore += 2;
    competitorScore += 1;
  }

  if (inputs.goal === "wholesale" || inputs.goal === "scale") bakeryScore += 3;
  else if (inputs.goal === "lifestyle") competitorScore += 3;
  else if (inputs.goal === "low-capital") competitorScore += 3;

  return bakeryScore >= competitorScore ? "Bakery" : "Home Bakery";
}

export const decisionToolCopy = {
  bakery:
    "Retail bakery with wholesale access and commercial production capacity fits your budget and growth goals.",
  competitor:
    "A cottage food home bakery lets you launch with minimal capital, test your market, and keep flexible hours.",
} as const;
