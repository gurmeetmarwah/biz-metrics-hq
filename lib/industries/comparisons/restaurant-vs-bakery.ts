export const comparisonMeta = {
  slug: "restaurant-vs-bakery",
  title: "Restaurant vs Bakery",
  subtitle:
    "Compare startup costs, revenue, profit margins, owner income, operating complexity and valuation potential to determine which business is right for you.",
  dataVintage: "2025–2026",
};

export const decisionSnapshot = [
  { factor: "Lower Startup Cost", winner: "Bakery" as const },
  { factor: "Higher Revenue Potential", winner: "Restaurant" as const },
  { factor: "Simpler Operations", winner: "Bakery" as const },
  { factor: "Faster Break-Even", winner: "Bakery" as const },
  { factor: "Lifestyle Balance", winner: "Bakery" as const },
  { factor: "Multi-Location Scaling", winner: "Restaurant" as const },
] as const;

export const kpiComparison = [
  { metric: "Startup Cost", restaurant: "$275K – $750K", bakery: "$50K – $300K" },
  { metric: "Revenue (median)", restaurant: "$850K", bakery: "$450K" },
  { metric: "Profit Margin", restaurant: "6 – 10%", bakery: "8 – 18%" },
  { metric: "Owner Salary (median)", restaurant: "$92K", bakery: "$70K" },
  { metric: "Employees", restaurant: "12 – 28", bakery: "3 – 10" },
  { metric: "Avg Order Value", restaurant: "$22 – $35", bakery: "$12 – $35" },
  { metric: "Valuation Multiple", restaurant: "2.4x SDE", bakery: "2.8x SDE" },
] as const;

export const visualScorecard = [
  { label: "Revenue Potential", restaurant: 9, competitor: 7 },
  { label: "Operational Complexity", restaurant: 8, competitor: 5 },
  { label: "Lifestyle", restaurant: 5, competitor: 8 },
  { label: "Scalability", restaurant: 9, competitor: 6 },
] as const;

export const restaurantStartupItems = [
  { item: "Kitchen Buildout", percent: 35 },
  { item: "Dining Area", percent: 22 },
  { item: "Furniture & FF&E", percent: 18 },
  { item: "POS & Systems", percent: 5 },
  { item: "Working Capital", percent: 20 },
] as const;

export const bakeryStartupItems = [
  { item: "Ovens & Mixers", percent: 28 },
  { item: "Display Cases", percent: 18 },
  { item: "Refrigeration", percent: 15 },
  { item: "Lease Improvements", percent: 25 },
  { item: "Initial Inventory", percent: 14 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", restaurant: "$200K – $450K", bakery: "$30K – $120K" },
  { category: "Equipment", restaurant: "$80K – $150K", bakery: "$38K – $120K" },
  { category: "Inventory", restaurant: "$15K – $40K", bakery: "$3K – $10K" },
  { category: "Permits", restaurant: "$15K – $40K", bakery: "$5K – $15K" },
  { category: "Working Capital", restaurant: "$50K – $150K", bakery: "$15K – $40K" },
] as const;

export const restaurantRevenueDist = {
  bottom: "$450K",
  median: "$850K",
  top: "$1.6M",
};

export const bakeryRevenueDist = {
  bottom: "$280K",
  median: "$450K",
  top: "$750K",
};

export const restaurantRevenueDrivers = [
  "Seating capacity and table turnover",
  "Average check size and menu breadth",
  "Location, parking, and dinner traffic",
] as const;

export const bakeryRevenueDrivers = [
  "Daily walk-in orders and repeat customers",
  "Custom cakes and celebration orders",
  "Wholesale accounts and corporate catering",
] as const;

export const dailyEconomics = {
  restaurant: {
    label: "Customers Per Day",
    volume: 120,
    averageValue: 28,
    dailyRevenue: 3360,
  },
  bakery: {
    label: "Orders Per Day",
    volume: 60,
    averageValue: 25,
    dailyRevenue: 1500,
  },
};

export const marginTiers = {
  restaurant: { weak: "2–4%", average: "6–8%", strong: "10–14%" },
  bakery: { weak: "3–5%", average: "8–12%", strong: "13–18%" },
};

export const costStructureComparison = [
  { expense: "Ingredients", restaurant: "28 – 35%", bakery: "25 – 32%" },
  { expense: "Labor", restaurant: "28 – 32%", bakery: "28 – 36%" },
  { expense: "Rent", restaurant: "6 – 10%", bakery: "7 – 11%" },
  { expense: "Packaging", restaurant: "1 – 2%", bakery: "2 – 4%" },
  { expense: "Marketing", restaurant: "2 – 4%", bakery: "2 – 5%" },
] as const;

export const restaurantRevenueMix = [
  { label: "Food", percent: 55 },
  { label: "Drinks", percent: 25 },
  { label: "Desserts", percent: 12 },
  { label: "Events", percent: 8 },
] as const;

export const bakeryRevenueMix = [
  { label: "Bread", percent: 28 },
  { label: "Pastries", percent: 22 },
  { label: "Cookies", percent: 10 },
  { label: "Custom Cakes", percent: 32 },
  { label: "Wholesale", percent: 8 },
] as const;

export const profitPotentialComparison = [
  { stream: "Core Product", restaurant: "Moderate margins", bakery: "Moderate margins" },
  { stream: "Premium Product", restaurant: "Strong (alcohol, steaks)", bakery: "Strong (wedding cakes)" },
  { stream: "Custom Orders", restaurant: "Moderate (catering)", bakery: "Excellent (celebration cakes)" },
] as const;

export const ownerIncomeComparison = [
  {
    model: "Restaurant Owner",
    earnings: "$75K – $110K",
    type: "restaurant" as const,
  },
  {
    model: "Bakery Owner",
    earnings: "$50K – $95K",
    type: "bakery" as const,
  },
  {
    model: "Multi-Location Restaurant Owner",
    earnings: "$120K – $250K+",
    type: "restaurant" as const,
  },
  {
    model: "Multi-Bakery Owner",
    earnings: "$120K – $220K+",
    type: "bakery" as const,
  },
] as const;

export const workloadComparison = [
  {
    factor: "Staffing Complexity",
    restaurant: "12 – 28 employees, FOH + BOH",
    bakery: "3 – 10 employees, production + counter",
  },
  {
    factor: "Inventory Complexity",
    restaurant: "High — perishables, wine, proteins",
    bakery: "Moderate — flour, dairy, seasonal ingredients",
  },
  {
    factor: "Customer Service",
    restaurant: "Full table service, reservations, complaints",
    bakery: "Counter service, pre-orders, pickup windows",
  },
  {
    factor: "Production Complexity",
    restaurant: "High — live cooking, timing, waste",
    bakery: "Moderate — batch production, early prep",
  },
  {
    factor: "Operational Stress",
    restaurant: "High — dinner rush, staffing gaps",
    bakery: "Moderate — morning production peaks",
  },
] as const;

export const workdayTimeline = {
  restaurant: { start: "11 AM", end: "11 PM", label: "Restaurant Owner" },
  bakery: { start: "4 AM", end: "2 PM", label: "Bakery Owner" },
};

export const breakEvenComparison = [
  { metric: "Revenue Needed (monthly)", restaurant: "$72K – $85K", bakery: "$32K – $42K" },
  { metric: "Customers/Orders Needed (daily)", restaurant: "100 – 120/day", bakery: "55 – 70/day" },
  { metric: "Months To Break-Even", restaurant: "18 – 24 months", bakery: "12 – 18 months" },
] as const;

export const breakEvenExamples = {
  restaurant: { volumePerDay: 100, unit: "customers/day", label: "Restaurant" },
  bakery: { volumePerDay: 60, unit: "orders/day", label: "Bakery" },
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

export const valuationComparison = [
  { metric: "Revenue Multiple", restaurant: "0.3x – 0.6x", bakery: "0.4x – 0.7x" },
  { metric: "SDE Multiple", restaurant: "1.8x – 3.2x", bakery: "2.0x – 3.2x" },
  { metric: "Saleability", restaurant: "Strong with clean books", bakery: "Moderate — recipe & owner dependent" },
] as const;

export const valuationExamples = {
  restaurant: { revenue: "$1M", value: "$600K", note: "~2.4x SDE on $250K SDE" },
  bakery: { revenue: "$500K", value: "$300K", note: "~3.0x SDE on $100K SDE" },
};

export const scalingLadder = {
  bakery: ["1 Bakery", "Wholesale", "2 Locations", "Regional Brand"],
  restaurant: ["1 Location", "2 Locations", "5 Locations", "10 Locations"],
};

export const chooseBakery = [
  "Want simpler day-to-day operations",
  "Lower startup budget under $250K",
  "Strong baking expertise or passion",
  "Interest in wholesale and B2B revenue",
  "Better lifestyle balance with earlier hours",
] as const;

export const chooseRestaurant = [
  "Want maximum revenue potential",
  "Enjoy hospitality and full-service dining",
  "Comfortable managing larger teams",
  "Interested in multi-unit expansion",
] as const;

export const calculators = [
  {
    label: "Restaurant Profit Margin Calculator",
    href: "/industries/restaurant/profit-margin-calculator/",
  },
  {
    label: "Bakery Profit Margin Calculator",
    href: "/calculators/bakery-profit-margin/",
  },
  {
    label: "Restaurant Valuation Calculator",
    href: "/industries/restaurant/valuation/",
  },
  {
    label: "Bakery Valuation Calculator",
    href: "/calculators/bakery-valuation/",
  },
  {
    label: "Restaurant Break-Even Calculator",
    href: "/calculators/restaurant-break-even/",
  },
] as const;

export const relatedComparisons = [
  { label: "Bakery vs Coffee Shop", href: "/comparisons/coffee-shop-vs-bakery/" },
  { label: "Bakery vs Food Truck", href: "/compare/bakery-vs-food-truck/" },
  { label: "Bakery vs Home Bakery", href: "/compare/bakery-vs-home-bakery/" },
  { label: "Bakery vs Fast Casual", href: "/compare/bakery-vs-fast-casual/" },
  { label: "Restaurant vs Coffee Shop", href: "/industries/comparisons/restaurant-vs-coffee-shop/" },
] as const;

export const faqs = [
  {
    question: "Is a bakery more profitable than a restaurant?",
    answer:
      "Bakeries often achieve higher net profit margins (8–18% vs. 6–10% for restaurants) due to batch production and lower service overhead. However, restaurants generate more total profit dollars because median revenue is $850K vs. $450K for bakeries. A restaurant at 8% margin earns $68K profit; a bakery at 12% earns $54K — similar absolute profit with far less capital invested.",
  },
  {
    question: "Which business costs less to start?",
    answer:
      "Bakeries cost significantly less: $50K–$300K typical vs. $275K–$750K for restaurants. A retail bakery can open for under $150K with used equipment and a modest lease. Restaurants require full kitchen buildout, dining room, and higher working capital before opening day.",
  },
  {
    question: "Which is easier to operate?",
    answer:
      "Bakeries are easier to operate: smaller teams (3–10 vs. 12–28), counter service instead of table service, earlier hours (4 AM–2 PM vs. 11 AM–11 PM), and batch production instead of live cooking. Restaurants require coordinating front-of-house service, kitchen timing, and larger staff schedules.",
  },
  {
    question: "Can bakeries make more money than restaurants?",
    answer:
      "Rarely at the single-unit level. Median restaurant revenue is $850K vs. $450K for bakeries. However, bakeries with strong wholesale programs and custom cake businesses can reach $700K–$900K. Multi-unit restaurant groups scale further, but bakery wholesale models can be highly capital-efficient.",
  },
  {
    question: "What are typical bakery margins?",
    answer:
      "Independent bakeries average 8–12% net profit margin, with strong performers reaching 13–18%. Custom cakes and wedding orders carry 60–75% gross margins. Wholesale accounts add volume at slightly lower margins but improve production efficiency and reduce marketing costs.",
  },
  {
    question: "What are typical restaurant margins?",
    answer:
      "Independent restaurants average 6–8% net profit margin, with strong performers reaching 10–14%. Alcohol programs, events, and higher average checks improve margins. Labor and rent are the biggest margin pressures — restaurants with 30%+ labor cost rarely exceed 8% net margin.",
  },
] as const;

export type DecisionInputs = {
  budget: "under100k" | "100k-250k" | "250k-500k" | "500k+";
  experience: "hospitality" | "baking" | "business" | "none";
  lifestyle: "work-life" | "growth" | "semi-passive" | "community";
};

export function getRecommendation(inputs: DecisionInputs): "Restaurant" | "Bakery" {
  let restaurantScore = 0;
  let bakeryScore = 0;

  if (inputs.budget === "under100k" || inputs.budget === "100k-250k") bakeryScore += 2;
  else if (inputs.budget === "250k-500k") {
    restaurantScore += 1;
    bakeryScore += 1;
  } else restaurantScore += 2;

  if (inputs.experience === "baking") bakeryScore += 3;
  else if (inputs.experience === "hospitality") restaurantScore += 3;
  else if (inputs.experience === "business") {
    restaurantScore += 1;
    bakeryScore += 1;
  }

  if (inputs.lifestyle === "work-life" || inputs.lifestyle === "community") bakeryScore += 2;
  else if (inputs.lifestyle === "semi-passive") bakeryScore += 1;
  else if (inputs.lifestyle === "growth") restaurantScore += 2;

  return restaurantScore >= bakeryScore ? "Restaurant" : "Bakery";
}
