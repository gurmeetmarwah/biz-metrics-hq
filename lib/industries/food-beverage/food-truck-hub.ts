import {
  benchmarkThresholds,
  eventEconomics,
  eventProfitability,
  quickSummary,
  revenueByConcept,
  startupCosts,
  valuationMultiples,
} from "@/lib/industries/food-truck";

export const hubMeta = {
  slug: "food-truck",
  parentSlug: "food-beverage",
  parentLabel: "Food & Beverage",
  title: "Food Truck Economics & Benchmarks",
  subtitle:
    "Explore food truck revenue benchmarks, profit margins, startup costs, owner salaries, valuations, and operating metrics.",
  dataVintage: "2025–2026",
  sampleSize: "320+ food truck operators",
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$280K",
    sublabel: "median annual",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Profit Margin",
    value: "12–18%",
    sublabel: "net margin range",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Salary",
    value: "$75K",
    sublabel: "median income",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Valuation",
    value: "2.25x SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
] as const;

export const businessScorecard = {
  industryName: "Food Truck",
  items: [
    { label: "Profitability", rating: 3 },
    { label: "Scalability", rating: 3 },
    { label: "Startup Difficulty", rating: 2, higherIsWorse: true },
    { label: "Recurring Revenue", rating: 2 },
    { label: "Recession Resistance", rating: 2 },
  ],
} as const;

export const searchQuickLinks = [
  { label: "Revenue", href: "#revenue-benchmark" },
  { label: "Profit Margin", href: "#profitability" },
  { label: "Startup Cost", href: "#startup-costs" },
  { label: "Break-Even", href: "#break-even" },
] as const;

export const industrySnapshot = [
  { metric: "Revenue", value: "$180K – $450K" },
  { metric: "Profit Margin", value: "8 – 18%" },
  { metric: "Startup Cost", value: "$60K – $150K" },
  { metric: "Owner Salary", value: "$55K – $95K" },
  { metric: "Average Ticket", value: "$10 – $18" },
  { metric: "Employees", value: "1 – 4" },
] as const;

export const exploreTopics = [
  {
    id: "revenue",
    title: "Food Truck Revenue",
    subtitle: "Annual revenue by concept, location, and event type.",
    topics: ["Revenue Benchmarks", "Revenue By Concept", "Revenue By Location", "Revenue By Event Type"],
    href: "#revenue-benchmark",
    accent: "metric-revenue",
    buttonLabel: "Explore Revenue →",
  },
  {
    id: "profitability",
    title: "Food Truck Profit Margins",
    subtitle: "Gross margin, net profit, cost structure, and benchmarking.",
    topics: ["Gross Margin", "Net Profit", "Cost Structure", "Benchmarking"],
    href: "#profitability",
    accent: "metric-margin",
    buttonLabel: "Explore Profitability →",
  },
  {
    id: "startup",
    title: "Food Truck Startup Costs",
    subtitle: "Truck purchase, kitchen equipment, permits, and working capital.",
    topics: ["Truck Purchase", "Kitchen Equipment", "Permits", "Working Capital"],
    href: "#startup-costs",
    accent: "metric-valuation",
    buttonLabel: "Explore Startup Costs →",
  },
  {
    id: "owner-income",
    title: "Food Truck Owner Salary",
    subtitle: "Owner-operator, single truck, and multi-truck fleet income.",
    topics: ["Owner Operator", "Single Truck", "Multi-Truck Fleet"],
    href: "#owner-economics",
    accent: "metric-salary",
    buttonLabel: "Explore Owner Income →",
  },
  {
    id: "valuation",
    title: "Food Truck Valuation",
    subtitle: "Revenue multiples, SDE multiples, and business value at exit.",
    topics: ["Revenue Multiples", "SDE Multiples", "Business Value"],
    href: "#valuation",
    accent: "metric-valuation",
    buttonLabel: "Explore Valuation →",
  },
  {
    id: "break-even",
    title: "Food Truck Break-Even Analysis",
    subtitle: "Daily sales needed, events required, and payback period.",
    topics: ["Daily Sales Needed", "Events Needed", "Payback Period"],
    href: "#break-even",
    accent: "metric-revenue",
    buttonLabel: "Explore Break-Even →",
  },
] as const;

export const hubCalculators = [
  {
    label: "Profit Margin Calculator",
    description: "Calculate profitability",
    href: "/calculators/food-truck-profit-margin/",
  },
  {
    label: "Startup Cost Calculator",
    description: "Estimate investment",
    href: "/calculators/food-truck-startup-cost/",
  },
  {
    label: "Valuation Calculator",
    description: "Estimate business value",
    href: "/calculators/food-truck-valuation/",
  },
  {
    label: "Break-Even Calculator",
    description: "Estimate required sales",
    href: "/calculators/food-truck-break-even/",
  },
  {
    label: "Food Cost Calculator",
    description: "Calculate food costs",
    href: "/calculators/food-truck-food-cost/",
  },
  {
    label: "Revenue Calculator",
    description: "Estimate annual revenue",
    href: "/calculators/food-truck-revenue/",
  },
] as const;

export const foodTruckTypes = [
  { label: "Taco Truck", href: "/industries/restaurant-types/food-truck/#revenue" },
  { label: "Burger Truck", href: "/industries/restaurant-types/food-truck/#revenue" },
  { label: "BBQ Truck", href: "/industries/restaurant-types/food-truck/#revenue" },
  { label: "Dessert Truck", href: "/industries/restaurant-types/food-truck/#revenue" },
  { label: "Coffee Truck", href: "/industries/restaurant-types/food-truck/#revenue" },
  { label: "Ice Cream Truck", href: "/industries/restaurant-types/food-truck/#revenue" },
  { label: "Pizza Truck", href: "/industries/restaurant-types/food-truck/#revenue" },
  { label: "Ethnic Cuisine Truck", href: "/industries/restaurant-types/food-truck/#revenue" },
] as const;

export const revenueByConceptCards = [
  { label: "Taco Truck", value: "$250K – $400K", href: "#revenue-benchmark" },
  { label: "Burger Truck", value: "$240K – $380K", href: "#revenue-benchmark" },
  { label: "BBQ Truck", value: "$280K – $450K", href: "#revenue-benchmark" },
  { label: "Pizza Truck", value: "$260K – $420K", href: "#revenue-benchmark" },
] as const;

export const revenueByLocationCards = [
  { label: "Urban", value: "$280K – $420K", href: "#location-strategy" },
  { label: "Suburban", value: "$220K – $350K", href: "#location-strategy" },
  { label: "Tourist Area", value: "$300K – $480K", href: "#location-strategy" },
  { label: "Downtown", value: "$260K – $400K", href: "#location-strategy" },
] as const;

export const revenueByEventTypeCards = [
  { label: "Street Service", value: "$220K – $350K", href: "#event-economics" },
  { label: "Corporate Events", value: "$300K – $480K", href: "#event-economics" },
  { label: "Festivals", value: "$250K – $500K", href: "#event-economics" },
  { label: "Catering", value: "$280K – $450K", href: "#event-economics" },
] as const;

export const eventEconomicsFlow = [
  { label: "Festival", value: "$2K – $8K/day" },
  { label: "Customers", value: "150 – 400/day" },
  { label: "Revenue", value: "$2K – $8K" },
  { label: "Food Cost", value: "28 – 35%" },
  { label: "Profit", value: "18 – 28% net" },
] as const;

export const eventCompareRows = [
  { eventType: "Festival", revenue: "$2K – $8K/day" },
  { eventType: "Fair", revenue: "$1.5K – $6K/day" },
  { eventType: "Corporate Event", revenue: "$1.5K – $5K" },
  { eventType: "Wedding", revenue: "$3K – $10K" },
  { eventType: "Private Catering", revenue: "$800 – $3K" },
] as const;

export const costStructureFlow = [
  { label: "Revenue", percent: 100, href: "#revenue-benchmark", color: "var(--metric-revenue)" },
  { label: "Food Cost", percent: 30, href: "#profitability", color: "var(--metric-salary)" },
  { label: "Labor", percent: 24, href: "#profitability", color: "var(--metric-margin)" },
  { label: "Fuel", percent: 5, href: "#profitability", color: "var(--metric-valuation)" },
  { label: "Permits", percent: 3, href: "#startup-costs", color: "var(--accent)" },
  { label: "Profit", percent: 14, href: "#profitability", color: "var(--metric-revenue)" },
] as const;

export const locationTopics = [
  "Street Locations",
  "Business Districts",
  "Office Parks",
  "Universities",
  "Events",
  "Tourist Areas",
] as const;

export const locationCompareRows = [
  { locationType: "Downtown", revenue: "$280K – $420K" },
  { locationType: "Business District", revenue: "$260K – $400K" },
  { locationType: "University", revenue: "$240K – $380K" },
  { locationType: "Event Venue", revenue: "$300K – $500K" },
] as const;

export const ownerEconomicsCards = [
  { model: "Single Truck Owner", earnings: "$55K – $85K" },
  { model: "Multi-Truck Fleet Owner", earnings: "$120K – $200K+" },
  { model: "Catering-Focused Truck", earnings: "$70K – $110K" },
  { model: "Event-Focused Truck", earnings: "$65K – $100K" },
] as const;

export const hubComparisons = [
  { label: "Food Truck vs Restaurant", href: "/industries/comparisons/restaurant-vs-food-truck/" },
  { label: "Food Truck vs Coffee Shop", href: "/comparisons/coffee-shop-vs-food-truck/" },
  { label: "Food Truck vs Bakery", href: "/comparisons/restaurant-vs-bakery/" },
  { label: "Food Truck vs Catering", href: "/compare/food-truck-vs-catering/" },
  { label: "Food Truck vs Ghost Kitchen", href: "/compare/food-truck-vs-ghost-kitchen/" },
  { label: "Food Truck vs Fast Casual", href: "/industries/restaurant-types/fast-casual/" },
] as const;

export const relatedFoodBeverageIndustries = [
  { label: "Restaurant Economics", href: "/industries/restaurant/" },
  { label: "Coffee Shop Economics", href: "/industries/food-beverage/coffee-shop/" },
  { label: "Bakery Economics", href: "/industries/food-beverage/bakery/" },
  { label: "Fast Casual Economics", href: "/industries/restaurant-types/fast-casual/" },
  { label: "Fine Dining Economics", href: "/industries/restaurant-types/fine-dining/" },
  { label: "Catering Economics", href: "/industries/catering/" },
] as const;

export const popularMetrics = [
  { label: "Food Truck Revenue Benchmarks", href: "#revenue-benchmark" },
  { label: "Food Truck Profit Margins", href: "#profitability" },
  { label: "Food Truck Startup Costs", href: "#startup-costs" },
  { label: "Food Truck Owner Salaries", href: "#owner-economics" },
  { label: "Food Truck Valuation Multiples", href: "#valuation" },
  { label: "Food Truck Break-Even Metrics", href: "#break-even" },
] as const;

export const industryInsights = [
  {
    title: "How Much Revenue Does a Food Truck Make?",
    href: "#revenue-benchmark",
    metric: "$280K median",
  },
  {
    title: "How Profitable Are Food Trucks?",
    href: "#profitability",
    metric: "12–18% target",
  },
  {
    title: "How Much Do Food Truck Owners Earn?",
    href: "#owner-economics",
    metric: "$75K median",
  },
  {
    title: "How Much Does It Cost To Start A Food Truck?",
    href: "#startup-costs",
    metric: "$60K – $150K typical",
  },
  {
    title: "What Is A Food Truck Worth?",
    href: "#valuation",
    metric: "2.25x SDE",
  },
] as const;

export const hubFaqs = [
  {
    question: "How profitable are food trucks?",
    answer:
      "Well-run food trucks achieve 12–18% net profit margins, often higher than casual dining restaurants. Lower overhead (no rent, smaller staff) offsets thinner margins on street sales. Event and catering revenue at 20–30% margins significantly boosts overall profitability.",
  },
  {
    question: "How much revenue does a food truck make?",
    answer:
      "Food trucks typically generate $180K–$450K annually, with a median around $280K. Top performers at festivals and corporate catering push toward $400K–$500K. Revenue is driven by daily customer count (60–150) multiplied by average ticket ($10–$18), plus event and catering income.",
  },
  {
    question: "How much does it cost to start a food truck?",
    answer:
      "Total startup investment ranges from $60K (used truck, basic buildout) to $150K (new truck, premium equipment). Typical all-in cost is $80K–$110K including truck ($25K–$80K), kitchen equipment, permits, branding, inventory, and 2–3 months working capital.",
  },
  {
    question: "How much do food truck owners earn?",
    answer:
      "Owner-operators typically earn $55K–$95K annually, with a median around $75K. Single-truck owners doing street plus events take $70K–$95K. Multi-truck operators with 2–4 units can earn $120K–$200K+.",
  },
  {
    question: "What is a good food truck profit margin?",
    answer:
      "A healthy food truck net margin is 12–15%. Below 8% signals food cost or route problems. Top-quartile operators hit 16–18% through corporate catering, festival bookings, and average tickets above $14.",
  },
  {
    question: "How are food trucks valued?",
    answer:
      "Food trucks sell for 1.8x–2.8x SDE, with a median of 2.25x. A truck with $300K revenue and $80K SDE might be valued around $180K. Asset value (truck + equipment $40K–$80K) plus goodwill based on routes, permits, and catering contracts.",
  },
] as const;

export const hubSectionNav = [
  { id: "explore", label: "Explore" },
  { id: "calculators", label: "Calculators" },
  { id: "types", label: "Types" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "event-economics", label: "Events" },
  { id: "profitability", label: "Margins" },
  { id: "location-strategy", label: "Locations" },
  { id: "comparisons", label: "Compare" },
  { id: "faqs", label: "FAQs" },
] as const;

export { benchmarkThresholds };

export const startupCostSummary = startupCosts.map((item) => ({
  item: item.expense,
  range: item.range,
}));

export const valuationSummary = valuationMultiples.map((row) => ({
  metric: row.label,
  value: row.range,
}));

export const breakEvenSummary = {
  customersPerDay: "60 – 90",
  eventsPerMonth: "8 – 12",
  paybackMonths: "8 – 14",
};

export { quickSummary, revenueByConcept, eventEconomics, eventProfitability };
