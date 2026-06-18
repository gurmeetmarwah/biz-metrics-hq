export const comparisonMeta = {
  slug: "restaurant-vs-coffee-shop",
  title: "Restaurant vs Coffee Shop",
  subtitle:
    "Compare startup costs, revenue, profit margins, owner income, workload and valuation potential to determine which business model fits you best.",
  dataVintage: "2025–2026",
};

export const decisionSnapshot = [
  { factor: "Lower Startup Cost", winner: "Coffee Shop" as const },
  { factor: "Higher Revenue Potential", winner: "Restaurant" as const },
  { factor: "Easier Operations", winner: "Coffee Shop" as const },
  { factor: "Faster Break-Even", winner: "Coffee Shop" as const },
  { factor: "Higher Scaling Potential", winner: "Restaurant" as const },
  { factor: "Lifestyle Balance", winner: "Coffee Shop" as const },
] as const;

export const kpiComparison = [
  { metric: "Startup Cost", restaurant: "$275K – $750K", coffeeShop: "$80K – $400K" },
  { metric: "Revenue (median)", restaurant: "$850K", coffeeShop: "$550K" },
  { metric: "Profit Margin", restaurant: "6 – 10%", coffeeShop: "10 – 18%" },
  { metric: "Owner Salary (median)", restaurant: "$92K", coffeeShop: "$85K" },
  { metric: "Employees", restaurant: "12 – 28", coffeeShop: "4 – 12" },
  { metric: "Average Ticket", restaurant: "$22 – $35", coffeeShop: "$6 – $12" },
  { metric: "Valuation Multiple", restaurant: "2.4x SDE", coffeeShop: "3.0x SDE" },
] as const;

export const visualScorecard = [
  { label: "Revenue Potential", restaurant: 9, competitor: 6 },
  { label: "Ease of Operations", restaurant: 5, competitor: 9 },
  { label: "Lifestyle", restaurant: 5, competitor: 8 },
] as const;

export const restaurantStartupItems = [
  { item: "Lease Deposit", percent: 12 },
  { item: "Kitchen Buildout", percent: 32 },
  { item: "Dining Area", percent: 18 },
  { item: "Furniture & FF&E", percent: 18 },
  { item: "POS & Systems", percent: 5 },
  { item: "Working Capital", percent: 15 },
] as const;

export const coffeeShopStartupItems = [
  { item: "Espresso Equipment", percent: 30 },
  { item: "Lease Improvements", percent: 28 },
  { item: "Furniture & Fixtures", percent: 18 },
  { item: "POS System", percent: 8 },
  { item: "Initial Inventory", percent: 6 },
  { item: "Working Capital", percent: 10 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", restaurant: "$200K – $450K", coffeeShop: "$40K – $150K" },
  { category: "Equipment", restaurant: "$80K – $150K", coffeeShop: "$25K – $80K" },
  { category: "Inventory", restaurant: "$15K – $40K", coffeeShop: "$5K – $15K" },
  { category: "Working Capital", restaurant: "$50K – $150K", coffeeShop: "$20K – $60K" },
] as const;

export const restaurantRevenueDist = {
  bottom: "$450K",
  median: "$850K",
  top: "$1.6M",
};

export const coffeeShopRevenueDist = {
  bottom: "$350K",
  median: "$550K",
  top: "$850K",
};

export const restaurantRevenueDrivers = [
  "Seating capacity and table turnover",
  "Average check size and menu breadth",
  "Location, parking, and foot traffic",
] as const;

export const coffeeShopRevenueDrivers = [
  "Daily customer volume and daypart mix",
  "Drive-thru lane and commuter capture",
  "Average ticket and food attach rate",
] as const;

export const dailyEconomics = {
  restaurant: {
    customersPerDay: 120,
    averageTicket: 28,
    dailyRevenue: 3360,
  },
  coffeeShop: {
    customersPerDay: 280,
    averageTicket: 6.5,
    dailyRevenue: 1820,
  },
};

export const marginTiers = {
  restaurant: { weak: "2–4%", average: "6–8%", strong: "10–14%" },
  coffeeShop: { weak: "4–6%", average: "8–12%", strong: "13–18%" },
};

export const costStructureComparison = [
  { expense: "Food Cost", restaurant: "28 – 35%", coffeeShop: "18 – 25%" },
  { expense: "Labor", restaurant: "28 – 32%", coffeeShop: "28 – 35%" },
  { expense: "Rent", restaurant: "6 – 10%", coffeeShop: "8 – 12%" },
  { expense: "Marketing", restaurant: "2 – 4%", coffeeShop: "2 – 4%" },
] as const;

export const restaurantProfitDrivers = [
  "Alcohol sales and bar program",
  "Private events and catering",
  "Menu upselling and specials",
] as const;

export const coffeeShopProfitDrivers = [
  "Drive-thru volume and speed",
  "Pastries and food attach",
  "Loyalty programs and subscriptions",
] as const;

export const ownerIncomeComparison = [
  {
    model: "Independent Restaurant Owner",
    earnings: "$75K – $110K",
    type: "restaurant" as const,
  },
  {
    model: "Independent Coffee Shop Owner",
    earnings: "$60K – $90K",
    type: "coffeeShop" as const,
  },
  {
    model: "Multi-Location Restaurant Owner",
    earnings: "$120K – $250K+",
    type: "restaurant" as const,
  },
  {
    model: "Multi-Cafe Owner",
    earnings: "$150K – $280K+",
    type: "coffeeShop" as const,
  },
] as const;

export const workloadComparison = [
  {
    factor: "Staff Management",
    restaurant: "12 – 28 employees, FOH + BOH",
    coffeeShop: "4 – 12 employees, lean bar team",
  },
  {
    factor: "Hours Open",
    restaurant: "11 AM – 11 PM, 6–7 days/week",
    coffeeShop: "6 AM – 3 PM typical, 6 days/week",
  },
  {
    factor: "Inventory Complexity",
    restaurant: "High — perishables, wine, proteins",
    coffeeShop: "Moderate — beans, dairy, pastries",
  },
  {
    factor: "Menu Complexity",
    restaurant: "50+ SKUs, seasonal changes",
    coffeeShop: "15 – 30 items, simpler prep",
  },
  {
    factor: "Operational Stress",
    restaurant: "High — dinner rush, service issues",
    coffeeShop: "Moderate — morning peak, predictable",
  },
] as const;

export const workdayTimeline = {
  restaurant: { start: "11 AM", end: "11 PM", label: "Restaurant Owner" },
  coffeeShop: { start: "6 AM", end: "3 PM", label: "Coffee Shop Owner" },
};

export const breakEvenComparison = [
  { metric: "Revenue Needed (monthly)", restaurant: "$72K – $85K", coffeeShop: "$38K – $48K" },
  { metric: "Customers Needed (daily)", restaurant: "100 – 120/day", coffeeShop: "160 – 200/day" },
  { metric: "Months To Break Even", restaurant: "18 – 24 months", coffeeShop: "12 – 18 months" },
] as const;

export const breakEvenExamples = {
  restaurant: { customersPerDay: 100, label: "Restaurant" },
  coffeeShop: { customersPerDay: 180, label: "Coffee Shop" },
};

export const valuationComparison = [
  { metric: "Revenue Multiple", restaurant: "0.3x – 0.6x", coffeeShop: "0.5x – 0.8x" },
  { metric: "SDE Multiple", restaurant: "1.8x – 3.2x", coffeeShop: "2.5x – 3.5x" },
  { metric: "EBITDA Multiple", restaurant: "2.5x – 4.5x", coffeeShop: "3.5x – 5.0x" },
] as const;

export const valuationExamples = {
  restaurant: { revenue: "$1.2M", value: "$700K", note: "~2.4x SDE on $290K SDE" },
  coffeeShop: { revenue: "$600K", value: "$350K", note: "~3.0x SDE on $115K SDE" },
};

export const scalingLadder = {
  coffeeShop: ["1 Cafe", "2 Cafes", "Drive-Thru", "Micro Chain"],
  restaurant: ["1 Location", "2 Locations", "5 Locations", "10 Locations"],
};

export const scalingChallenges = [
  {
    title: "Hiring",
    description:
      "Restaurants need chefs, managers, and servers at each unit. Cafes need baristas and shift leads with lower headcount per location.",
  },
  {
    title: "Training",
    description:
      "Coffee shops standardize drink recipes quickly. Restaurants require longer culinary and service training pipelines.",
  },
  {
    title: "Capital",
    description:
      "Each restaurant location runs $275K–$750K. Additional cafes cost $80K–$400K — cheaper per unit but thinner margins at scale.",
  },
  {
    title: "Management Systems",
    description:
      "Multi-unit restaurants need district managers and kitchen systems. Cafe chains focus on bean sourcing, equipment, and barista consistency.",
  },
] as const;

export const chooseCoffeeShop = [
  "Prefer simpler day-to-day operations",
  "Lower startup budget under $250K",
  "Want a community-oriented neighborhood business",
  "Better work-life balance with shorter hours",
] as const;

export const chooseRestaurant = [
  "Want higher total revenue potential",
  "Enjoy hospitality and full-service dining",
  "Comfortable managing larger teams",
  "Long-term growth and multi-unit focus",
] as const;

export const calculators = [
  {
    label: "Restaurant Profit Margin Calculator",
    href: "/industries/restaurant/profit-margin-calculator/",
  },
  {
    label: "Coffee Shop Profit Margin Calculator",
    href: "/calculators/coffee-shop-profit-margin/",
  },
  {
    label: "Restaurant Valuation Calculator",
    href: "/industries/restaurant/valuation/",
  },
  {
    label: "Coffee Shop Valuation Calculator",
    href: "/calculators/coffee-shop-valuation/",
  },
] as const;

export const relatedComparisons = [
  { label: "Coffee Shop vs Bakery", href: "/comparisons/coffee-shop-vs-bakery/" },
  { label: "Restaurant vs Food Truck", href: "/industries/comparisons/restaurant-vs-food-truck/" },
  { label: "Bakery vs Coffee Shop", comingSoon: true },
  { label: "Coffee Shop vs Drive-Thru Coffee", comingSoon: true },
  { label: "Restaurant vs Fast Casual", comingSoon: true },
] as const;

export const faqs = [
  {
    question: "Is a coffee shop more profitable than a restaurant?",
    answer:
      "Coffee shops often achieve higher net profit margins (10–18% vs. 6–10% for restaurants) due to simpler operations and lower food costs. However, restaurants generate more total profit dollars because median revenue is $850K vs. $550K for coffee shops. A restaurant at 8% margin earns $68K profit; a cafe at 13% earns $71K — similar absolute profit with far less capital.",
  },
  {
    question: "Which business costs less to start?",
    answer:
      "Coffee shops cost significantly less: $80K–$400K typical vs. $275K–$750K for restaurants. A neighborhood cafe can open for under $150K with used equipment and a modest lease. Restaurants require full kitchen buildout, dining room, and higher working capital before opening day.",
  },
  {
    question: "Which business makes more money?",
    answer:
      "Restaurants make more total revenue. Median restaurant revenue is $850K vs. $550K for coffee shops. Top-quartile restaurants hit $1.6M+; top coffee shops reach $850K. Owner income is comparable at the single-unit level ($75K–$110K restaurant vs. $60K–$90K cafe), but multi-unit restaurants scale further.",
  },
  {
    question: "Which business is easier to run?",
    answer:
      "Coffee shops are easier to operate: smaller teams (4–12 vs. 12–28), simpler menus, shorter hours (6 AM–3 PM vs. 11 AM–11 PM), and less inventory complexity. Restaurants require coordinating front-of-house service, kitchen timing, and larger staff schedules.",
  },
  {
    question: "Which has better margins?",
    answer:
      "Coffee shops have better net margins on average: 10–18% vs. 6–10% for independent restaurants. Lower food costs (18–25% vs. 28–35%), simpler prep, and high-margin beverage sales drive cafe profitability. Restaurant margins improve with alcohol programs and higher average checks.",
  },
  {
    question: "Which has a better lifestyle?",
    answer:
      "Coffee shops offer better lifestyle balance for most owners: morning-focused hours, smaller teams, and predictable daily routines. Restaurant owners work evenings and weekends, manage larger staffs, and face higher operational stress during dinner service. Cafes suit owners who want community presence without late-night demands.",
  },
] as const;

export type DecisionInputs = {
  budget: "under100k" | "100k-250k" | "250k-500k" | "500k+";
  income: "50k" | "100k" | "200k+";
  workLife: "low" | "medium" | "high";
  staffComfort: "low" | "medium" | "high";
};

export function getRecommendation(
  inputs: DecisionInputs
): "Restaurant" | "Coffee Shop" {
  let restaurantScore = 0;
  let coffeeShopScore = 0;

  if (inputs.budget === "under100k" || inputs.budget === "100k-250k")
    coffeeShopScore += 2;
  else if (inputs.budget === "250k-500k") {
    restaurantScore += 1;
    coffeeShopScore += 1;
  } else restaurantScore += 2;

  if (inputs.income === "50k") coffeeShopScore += 1;
  else if (inputs.income === "100k") {
    restaurantScore += 1;
    coffeeShopScore += 1;
  } else restaurantScore += 2;

  if (inputs.workLife === "high") coffeeShopScore += 2;
  else if (inputs.workLife === "medium") {
    restaurantScore += 1;
    coffeeShopScore += 1;
  } else restaurantScore += 1;

  if (inputs.staffComfort === "low") coffeeShopScore += 2;
  else if (inputs.staffComfort === "medium") {
    restaurantScore += 1;
    coffeeShopScore += 1;
  } else restaurantScore += 2;

  return restaurantScore >= coffeeShopScore ? "Restaurant" : "Coffee Shop";
}
