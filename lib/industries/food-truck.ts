export const foodTruckMeta = {
  slug: "food-truck",
  name: "Food Truck",
  title: "Food Truck Economics",
  subtitle:
    "Revenue, profit margins, owner income, startup investment and valuation benchmarks for food truck businesses.",
  dataVintage: "2025–2026",
  sampleSize: "320+ food truck operators",
  geography: "United States",
};

export const foodTruckKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$280K",
    sublabel: "median",
    href: "#revenue",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Margin",
    value: "12–18%",
    sublabel: "net range",
    href: "#profit-margins",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Pay",
    value: "$75K",
    sublabel: "median",
    href: "#owner-income",
    accent: "metric-salary",
  },
  {
    id: "startup",
    label: "Startup Cost",
    value: "$60K–$150K",
    sublabel: "typical range",
    href: "#startup",
    accent: "metric-valuation",
  },
] as const;

export const heroExamples = [
  { label: "Tacos", href: "#daily-economics" },
  { label: "BBQ", href: "#daily-economics" },
  { label: "Coffee Truck", href: "#daily-economics" },
  { label: "Dessert Truck", href: "#daily-economics" },
  { label: "Pizza Truck", href: "#daily-economics" },
] as const;

export const kpiContextNote =
  "Unlike brick-and-mortar restaurants, startup cost is a core KPI — most operators can launch for under $100K.";

export const quickSummary = [
  { metric: "Annual Revenue", value: "$180K – $450K" },
  { metric: "Profit Margin", value: "8 – 18%" },
  { metric: "Owner Income", value: "$55K – $95K" },
  { metric: "Startup Cost", value: "$60K – $150K" },
  { metric: "Average Ticket", value: "$10 – $18" },
  { metric: "Daily Customers", value: "60 – 150" },
] as const;

export const businessModelFlow = [
  { label: "Customers", value: "60 – 150/day" },
  { label: "Average Ticket", value: "$10 – $18" },
  { label: "Daily Revenue", value: "$800 – $2,200" },
  { label: "Food Costs", value: "28 – 35%" },
  { label: "Labor Costs", value: "20 – 28%" },
  { label: "Fuel & Events", value: "5 – 12%" },
  { label: "Profit", value: "8 – 18% net" },
] as const;

export const revenueDistribution = {
  lowPerformer: "$180K",
  average: "$280K",
  topQuartile: "$450K",
};

export const revenueByConcept = [
  { type: "Taco Truck", revenue: "$250K – $400K" },
  { type: "BBQ Truck", revenue: "$280K – $450K" },
  { type: "Coffee Truck", revenue: "$200K – $350K" },
  { type: "Dessert Truck", revenue: "$180K – $320K" },
  { type: "Pizza Truck", revenue: "$260K – $420K" },
] as const;

export const revenueByOperatingStyle = [
  { type: "Street Locations", revenue: "$220K – $350K" },
  { type: "Events Only", revenue: "$180K – $300K" },
  { type: "Festivals", revenue: "$250K – $500K" },
  { type: "Corporate Catering", revenue: "$300K – $480K" },
] as const;

export const dailyEconomicsExample = {
  customers: 85,
  averageTicket: 14,
  dailyRevenue: 1190,
  foodCostPct: 30,
  foodCostDaily: 357,
  dailyProfit: 178,
  operatingDays: 280,
};

export const startupCosts = [
  { expense: "Truck Purchase", range: "$25K – $80K" },
  { expense: "Kitchen Equipment", range: "$15K – $40K" },
  { expense: "Permits & Licenses", range: "$3K – $8K" },
  { expense: "Branding & Wrap", range: "$2K – $8K" },
  { expense: "Initial Inventory", range: "$2K – $5K" },
  { expense: "Working Capital", range: "$10K – $25K" },
] as const;

export const investmentRange = {
  budget: "$60K",
  typical: "$100K",
  premium: "$150K",
};

export const marginTiers = {
  weak: "4–6%",
  average: "8–12%",
  strong: "13–16%",
  elite: "17%+",
};

export const costStructure = [
  { category: "Food Cost", percent: "28 – 35%" },
  { category: "Labor", percent: "20 – 28%" },
  { category: "Fuel", percent: "3 – 6%" },
  { category: "Events", percent: "2 – 5%" },
  { category: "Marketing", percent: "2 – 4%" },
] as const;

export const profitDrivers = [
  {
    title: "High Ticket Size",
    range: "$14+ avg",
    description:
      "Premium proteins, combo meals, and add-ons push average ticket above breakeven faster than volume alone.",
  },
  {
    title: "Corporate Catering",
    range: "$1.5K – $5K/event",
    description:
      "Lunch contracts and office park regulars provide predictable weekday revenue with lower marketing cost.",
  },
  {
    title: "Event Bookings",
    range: "15 – 25% of revenue",
    description:
      "Festivals, weddings, and private parties deliver concentrated revenue — often at higher margins than street sales.",
  },
  {
    title: "Repeat Customers",
    range: "Loyalty programs",
    description:
      "Regular lunch crowds at the same location reduce customer acquisition cost and smooth slow days.",
  },
] as const;

export const ownerIncomeTiers = [
  {
    tier: "Owner Operator",
    range: "$55K – $85K",
    description:
      "Single truck, owner does most cooking and driving. Income is profit after modest owner draw.",
  },
  {
    tier: "One Truck",
    range: "$70K – $95K",
    description:
      "Established route with 1–2 employees. Strong festival and catering mix boosts annual take-home.",
  },
  {
    tier: "Multi-Truck Business",
    range: "$120K – $200K+",
    description:
      "2–4 trucks with managers. Owner focuses on bookings, commissary, and expansion.",
  },
] as const;

export const incomeDrivers = [
  "Number of events and catering contracts booked",
  "Menu pricing and average ticket optimization",
  "Truck utilization — days operating per month",
  "Commissary costs and route efficiency",
] as const;

export const breakEvenDefaults = {
  monthlyFixedCosts: 15200,
  averageTicket: 14,
  contributionMarginPct: 62,
  operatingDaysPerMonth: 22,
  cateringRevenuePerEvent: 1800,
};

export const eventEconomics = [
  { eventType: "Festival", revenue: "$2K – $8K/day" },
  { eventType: "Corporate Event", revenue: "$1.5K – $5K" },
  { eventType: "Wedding", revenue: "$3K – $10K" },
  { eventType: "Private Party", revenue: "$800 – $3K" },
] as const;

export const eventProfitability = [
  { eventType: "Festival", margin: "18 – 28%" },
  { eventType: "Corporate Catering", margin: "20 – 30%" },
  { eventType: "Wedding", margin: "22 – 35%" },
  { eventType: "Private Party", margin: "15 – 25%" },
] as const;

export const valuationMultiples = [
  {
    label: "Revenue Multiple",
    range: "0.4x – 0.7x",
    median: "0.55x",
    note: "Applied to trucks with established routes and transferable permits.",
  },
  {
    label: "SDE Multiple",
    range: "1.8x – 2.8x",
    median: "2.25x",
    note: "Lower than restaurants due to owner dependency and equipment depreciation.",
  },
  {
    label: "Business Value",
    range: "Asset + goodwill",
    median: "Varies",
    note: "Truck and equipment value ($40K–$80K) plus 1.5–2.5x SDE for going concern.",
  },
] as const;

export const valuationExample = {
  revenue: "$300K",
  sde: "$80K",
  valuation: "$180K",
  multiple: "2.25x SDE",
};

export const benchmarkThresholds = {
  revenue: { low: 180000, median: 280000, high: 450000 },
  margin: { low: 8, median: 14, high: 18 },
  customersPerDay: { low: 60, median: 85, high: 130 },
};

export const successFactorDefaults = {
  ticketSize: 14,
  customerVolume: 85,
  eventMixPct: 22,
  foodCostPct: 30,
  profitMarginPct: 14,
};

export const comparisons = [
  {
    label: "Food Truck vs Restaurant",
    href: "/industries/comparisons/restaurant-vs-food-truck/",
  },
  {
    label: "Food Truck vs Coffee Shop",
    href: "/comparisons/coffee-shop-vs-food-truck/",
  },
  {
    label: "Food Truck vs Catering Business",
    href: "/compare/food-truck-vs-catering/",
  },
  {
    label: "Food Truck vs Ghost Kitchen",
    href: "/compare/food-truck-vs-ghost-kitchen/",
  },
] as const;

export const calculators = [
  {
    label: "Food Cost Calculator",
    href: "/industries/restaurant/food-cost-calculator/",
  },
  {
    label: "Break-even Calculator",
    href: "/calculators/restaurant-break-even/",
  },
  {
    label: "Profit Margin Calculator",
    href: "/industries/restaurant/profit-margin-calculator/",
  },
  {
    label: "Startup Cost Calculator",
    href: "/calculators/startup-cost/",
  },
] as const;

export const sectionNav = [
  { id: "business-model", label: "Model" },
  { id: "revenue", label: "Revenue" },
  { id: "daily-economics", label: "Daily" },
  { id: "startup", label: "Startup" },
  { id: "profit-margins", label: "Margins" },
  { id: "owner-income", label: "Income" },
  { id: "break-even", label: "Break-even" },
  { id: "events", label: "Events" },
  { id: "valuation", label: "Valuation" },
  { id: "benchmark", label: "Benchmark" },
  { id: "comparisons", label: "Compare" },
  { id: "unit-calculator", label: "Calculator" },
  { id: "success-factors", label: "Score" },
  { id: "calculators", label: "Tools" },
  { id: "faqs", label: "FAQs" },
] as const;

export const faqs = [
  {
    question: "How much revenue does a food truck make?",
    answer:
      "Food trucks typically generate $180K–$450K annually, with a median around $280K. Top performers at festivals and corporate catering push toward $400K–$500K. Revenue is driven by daily customer count (60–150) multiplied by average ticket ($10–$18), plus event and catering income.",
  },
  {
    question: "Are food trucks profitable?",
    answer:
      "Yes — well-run food trucks achieve 12–18% net profit margins, often higher than casual dining restaurants. Lower overhead (no rent, smaller staff) offsets thinner margins on street sales. Event and catering revenue at 20–30% margins significantly boosts overall profitability.",
  },
  {
    question: "How much do food truck owners earn?",
    answer:
      "Owner-operators typically earn $55K–$95K annually, with a median around $75K. Single-truck owners doing street plus events take $70K–$95K. Multi-truck operators with 2–4 units can earn $120K–$200K+. Income is closely tied to days worked and event bookings.",
  },
  {
    question: "What is a good food truck margin?",
    answer:
      "A healthy food truck net margin is 12–15%. Below 8% signals food cost or route problems. Top-quartile operators hit 16–18% through corporate catering, festival bookings, and average tickets above $14. Food cost should stay under 32%; labor under 28% for owner-operators.",
  },
  {
    question: "How much does it cost to start a food truck?",
    answer:
      "Total startup investment ranges from $60K (used truck, basic buildout) to $150K (new truck, premium equipment). Typical all-in cost is $80K–$110K including truck ($25K–$80K), kitchen equipment, permits, branding, inventory, and 2–3 months working capital.",
  },
  {
    question: "How many customers does a food truck need daily?",
    answer:
      "Most food trucks need 60–90 customers per day to break even, assuming a $12–$14 average ticket. At $14 average ticket and 62% contribution margin, 80 customers/day generates roughly $1,120 in revenue — enough to cover daily variable costs plus monthly fixed overhead amortized across operating days.",
  },
] as const;

export function calculateBreakEven(inputs: {
  monthlyFixedCosts: number;
  averageTicket: number;
  contributionMarginPct: number;
  operatingDaysPerMonth: number;
  cateringRevenuePerEvent: number;
}) {
  const breakEvenRevenue =
    inputs.contributionMarginPct > 0
      ? inputs.monthlyFixedCosts / (inputs.contributionMarginPct / 100)
      : 0;

  const customersPerDay =
    inputs.averageTicket > 0 && inputs.operatingDaysPerMonth > 0
      ? breakEvenRevenue /
        inputs.operatingDaysPerMonth /
        inputs.averageTicket
      : 0;

  const eventsPerMonth =
    inputs.cateringRevenuePerEvent > 0
      ? breakEvenRevenue / inputs.cateringRevenuePerEvent
      : 0;

  return {
    breakEvenRevenue,
    customersPerDay,
    eventsPerMonth,
  };
}

export function scoreSuccessFactor(
  value: number,
  targets: { low: number; high: number }
): number {
  if (value >= targets.high) return 95;
  if (value >= targets.low) {
    const range = targets.high - targets.low || 1;
    return Math.round(68 + ((value - targets.low) / range) * 22);
  }
  if (value >= targets.low * 0.85) return 52;
  return 35;
}

export function calculateHealthScore(inputs: {
  ticketSize: number;
  customerVolume: number;
  eventMixPct: number;
  foodCostPct: number;
  profitMarginPct: number;
}) {
  const scores = {
    ticketSize: scoreSuccessFactor(inputs.ticketSize, { low: 10, high: 16 }),
    customerVolume: scoreSuccessFactor(inputs.customerVolume, { low: 60, high: 120 }),
    eventMix: scoreSuccessFactor(inputs.eventMixPct, { low: 15, high: 28 }),
    foodCost: scoreSuccessFactor(35 - inputs.foodCostPct, { low: 3, high: 10 }),
    profitMargin: scoreSuccessFactor(inputs.profitMarginPct, { low: 8, high: 17 }),
  };

  const overall = Math.round(
    Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length
  );

  return { scores, overall };
}
