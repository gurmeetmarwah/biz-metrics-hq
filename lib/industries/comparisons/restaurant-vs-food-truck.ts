export const comparisonMeta = {
  slug: "restaurant-vs-food-truck",
  title: "Restaurant vs Food Truck",
  subtitle:
    "Compare startup costs, revenue, profit margins, owner income and business economics to determine which model is right for you.",
  dataVintage: "2025–2026",
};

export const decisionSnapshot = [
  { factor: "Lower Startup Cost", winner: "Food Truck" as const },
  { factor: "Higher Revenue Potential", winner: "Restaurant" as const },
  { factor: "Easier Scaling", winner: "Restaurant" as const },
  { factor: "Faster Break-Even", winner: "Food Truck" as const },
  { factor: "Lifestyle Flexibility", winner: "Food Truck" as const },
] as const;

export const kpiComparison = [
  { metric: "Startup Cost", restaurant: "$275K – $750K", foodTruck: "$60K – $150K" },
  { metric: "Revenue (median)", restaurant: "$850K", foodTruck: "$280K" },
  { metric: "Profit Margin", restaurant: "6 – 10%", foodTruck: "12 – 16%" },
  { metric: "Owner Salary (median)", restaurant: "$92K", foodTruck: "$75K" },
  { metric: "Employees", restaurant: "12 – 28", foodTruck: "2 – 6" },
  { metric: "Break-Even Time", restaurant: "18 – 24 months", foodTruck: "8 – 14 months" },
  { metric: "Valuation Multiple", restaurant: "2.4x SDE", foodTruck: "2.25x SDE" },
] as const;

export const scorecardCategories = [
  { label: "Startup Cost", restaurant: 4, foodTruck: 9, winner: "foodTruck" as const },
  { label: "Revenue", restaurant: 9, foodTruck: 5, winner: "restaurant" as const },
  { label: "Margin", restaurant: 6, foodTruck: 8, winner: "foodTruck" as const },
  { label: "Flexibility", restaurant: 4, foodTruck: 9, winner: "foodTruck" as const },
  { label: "Scalability", restaurant: 9, foodTruck: 5, winner: "restaurant" as const },
  { label: "Risk", restaurant: 5, foodTruck: 7, winner: "foodTruck" as const },
] as const;

export const restaurantStartupItems = [
  { item: "Lease Deposit", percent: 15 },
  { item: "Buildout", percent: 35 },
  { item: "Kitchen Equipment", percent: 25 },
  { item: "Furniture & FF&E", percent: 15 },
  { item: "Permits & Licenses", percent: 10 },
] as const;

export const foodTruckStartupItems = [
  { item: "Truck Purchase", percent: 45 },
  { item: "Kitchen Equipment", percent: 25 },
  { item: "Permits & Licenses", percent: 10 },
  { item: "Branding & Wrap", percent: 10 },
  { item: "Initial Inventory", percent: 10 },
] as const;

export const startupSideBySide = [
  { category: "Buildout / Truck", restaurant: "$200K – $450K", foodTruck: "$25K – $80K" },
  { category: "Equipment", restaurant: "$80K – $150K", foodTruck: "$15K – $40K" },
  { category: "Permits", restaurant: "$15K – $40K", foodTruck: "$3K – $8K" },
  { category: "Working Capital", restaurant: "$50K – $150K", foodTruck: "$10K – $25K" },
] as const;

export const restaurantRevenueDist = {
  bottom: "$450K",
  median: "$850K",
  top: "$1.6M",
};

export const foodTruckRevenueDist = {
  bottom: "$180K",
  median: "$280K",
  top: "$450K",
};

export const restaurantRevenueDrivers = [
  "Seating capacity and table turnover",
  "Fixed location and foot traffic",
  "Average check size and menu breadth",
] as const;

export const foodTruckRevenueDrivers = [
  "Events, festivals, and catering bookings",
  "Street location and commuter foot traffic",
  "Social media and route consistency",
] as const;

export const marginTiers = {
  restaurant: { weak: "2–4%", average: "6–8%", strong: "10–14%" },
  foodTruck: { weak: "4–6%", average: "8–12%", strong: "13–16%" },
};

export const costStructureComparison = [
  { expense: "Food Cost", restaurant: "28 – 35%", foodTruck: "28 – 35%" },
  { expense: "Labor", restaurant: "28 – 32%", foodTruck: "20 – 28%" },
  { expense: "Rent", restaurant: "6 – 10%", foodTruck: "0 – 2%" },
  { expense: "Fuel / Vehicle", restaurant: "N/A", foodTruck: "3 – 6%" },
] as const;

export const breakEvenComparison = {
  restaurantMonths: 21,
  foodTruckMonths: 11,
  restaurantMonthsLabel: "18 – 24 months",
  foodTruckMonthsLabel: "8 – 14 months",
};

export const dailySalesComparison = [
  { metric: "Daily Revenue Needed", restaurant: "$2,800 – $3,500", foodTruck: "$950 – $1,300" },
  { metric: "Customers Needed", restaurant: "100 – 140/day", foodTruck: "65 – 90/day" },
] as const;

export const ownerIncomeComparison = [
  {
    model: "Single Location Restaurant",
    earnings: "$75K – $110K",
    type: "restaurant" as const,
  },
  {
    model: "Single Food Truck",
    earnings: "$55K – $85K",
    type: "foodTruck" as const,
  },
  {
    model: "Multi-Unit Restaurant",
    earnings: "$120K – $250K+",
    type: "restaurant" as const,
  },
  {
    model: "Multi-Truck Fleet",
    earnings: "$120K – $200K+",
    type: "foodTruck" as const,
  },
] as const;

export const lifestyleComparison = [
  { factor: "Schedule Flexibility", restaurant: "Fixed hours, 6–7 days/week", foodTruck: "Route-based, more variable" },
  { factor: "Mobility", restaurant: "Fixed location", foodTruck: "Go where demand is" },
  { factor: "Staffing Needs", restaurant: "12 – 28 employees", foodTruck: "2 – 6 employees" },
  { factor: "Operational Complexity", restaurant: "High — front & back of house", foodTruck: "Moderate — compact ops" },
] as const;

export const scalingLadder = {
  foodTruck: ["1 Truck", "2 Trucks", "3+ Trucks"],
  restaurant: ["1 Location", "2 Locations", "5+ Locations"],
};

export const scalingChallenges = [
  {
    title: "Hiring",
    description: "Restaurants need managers, chefs, and servers at scale. Trucks need drivers and line cooks.",
  },
  {
    title: "Capital",
    description: "Each restaurant location requires $275K–$750K. Additional trucks run $60K–$150K each.",
  },
  {
    title: "Management",
    description: "Multi-unit restaurants need district managers. Fleets need route coordinators and commissary ops.",
  },
  {
    title: "Systems",
    description: "POS, inventory, and training systems must scale — more critical for restaurant groups.",
  },
] as const;

export const valuationComparison = [
  { metric: "Revenue Multiple", restaurant: "0.3x – 0.6x", foodTruck: "0.4x – 0.7x" },
  { metric: "SDE Multiple", restaurant: "1.8x – 3.2x", foodTruck: "1.8x – 2.8x" },
  { metric: "Saleability", restaurant: "Strong with clean books", foodTruck: "Moderate — owner-dependent" },
] as const;

export const valuationExamples = {
  restaurant: { revenue: "$1M", value: "$600K", note: "~2.4x SDE on $250K SDE" },
  foodTruck: { revenue: "$300K", value: "$180K", note: "~2.25x SDE on $80K SDE" },
};

export const chooseFoodTruck = [
  "Limited capital under $150K",
  "Want schedule and location flexibility",
  "Testing a concept before committing to a lease",
  "Prefer events, catering, and mobile revenue",
] as const;

export const chooseRestaurant = [
  "Building a long-term, scalable business",
  "Comfortable managing a larger team",
  "Targeting $800K+ annual revenue",
  "Committed to a fixed high-traffic location",
] as const;

export const calculators = [
  {
    label: "Restaurant Break-Even Calculator",
    href: "/calculators/restaurant-break-even/",
  },
  {
    label: "Food Truck Break-Even Calculator",
    href: "/industries/restaurant-types/food-truck/#break-even",
  },
  {
    label: "Restaurant Valuation Calculator",
    href: "/industries/restaurant/valuation/",
  },
  {
    label: "Food Truck Economics",
    href: "/industries/restaurant-types/food-truck/#valuation",
  },
] as const;

export const relatedComparisons = [
  { label: "Coffee Shop vs Food Truck", href: "/comparisons/coffee-shop-vs-food-truck/" },
  { label: "Food Truck vs Catering", href: "/compare/food-truck-vs-catering/" },
  { label: "Food Truck vs Ghost Kitchen", href: "/compare/food-truck-vs-ghost-kitchen/" },
  { label: "Restaurant vs Coffee Shop", href: "/industries/comparisons/restaurant-vs-coffee-shop/" },
  { label: "Coffee Shop vs Bakery", href: "/comparisons/coffee-shop-vs-bakery/" },
] as const;

export const faqs = [
  {
    question: "Is a food truck more profitable than a restaurant?",
    answer:
      "Food trucks often achieve higher net profit margins (12–16% vs. 6–10% for restaurants) due to lower overhead. However, restaurants generate more total profit dollars because revenue is 2–3x higher. A $850K restaurant at 8% margin earns $68K profit; a $280K truck at 14% earns $39K. Margin vs. absolute profit depends on your goals.",
  },
  {
    question: "What makes more money — a restaurant or food truck?",
    answer:
      "Restaurants make more total money. Median restaurant revenue is $850K vs. $280K for food trucks. Top-quartile restaurants hit $1.6M+; top food trucks reach $450K. Owner income follows: restaurant owners median $92K vs. food truck owners at $75K — but multi-unit restaurants scale further.",
  },
  {
    question: "Which has lower startup costs?",
    answer:
      "Food trucks cost significantly less: $60K–$150K typical vs. $275K–$750K for restaurants. A food truck can launch for under $100K with a used vehicle and commissary kitchen. Restaurants require lease deposits, buildout, and full kitchen installation before opening day.",
  },
  {
    question: "Which business is easier to scale?",
    answer:
      "Restaurants scale more predictably to multi-unit operations with established franchise and management models. Food trucks can add units cheaply ($60K–$150K each) but face permit limitations, route competition, and weather dependency. Restaurant groups attract more buyer interest at exit.",
  },
  {
    question: "Which reaches break-even faster?",
    answer:
      "Food trucks typically break even in 8–14 months vs. 18–24 months for restaurants. Lower fixed costs mean fewer customers needed daily (65–90 vs. 100–140). However, food truck revenue is less predictable due to weather, events, and location access.",
  },
  {
    question: "Which has better margins?",
    answer:
      "Food trucks have better net margins on average: 12–16% vs. 6–10% for independent restaurants. Trucks avoid rent (the biggest fixed cost after labor) and run leaner staffs. Restaurant margins improve with scale, alcohol programs, and higher average tickets.",
  },
] as const;

export type DecisionInputs = {
  budget: "50k" | "100k" | "250k" | "500k";
  risk: "low" | "medium" | "high";
  income: "50k" | "100k" | "200k";
};

export function getRecommendation(inputs: DecisionInputs): "Restaurant" | "Food Truck" {
  let restaurantScore = 0;
  let foodTruckScore = 0;

  if (inputs.budget === "50k" || inputs.budget === "100k") foodTruckScore += 2;
  else if (inputs.budget === "250k") {
    restaurantScore += 1;
    foodTruckScore += 1;
  } else restaurantScore += 2;

  if (inputs.risk === "low") foodTruckScore += 2;
  else if (inputs.risk === "medium") {
    restaurantScore += 1;
    foodTruckScore += 1;
  } else restaurantScore += 2;

  if (inputs.income === "50k") foodTruckScore += 1;
  else if (inputs.income === "100k") {
    restaurantScore += 1;
    foodTruckScore += 1;
  } else restaurantScore += 2;

  return restaurantScore >= foodTruckScore ? "Restaurant" : "Food Truck";
}
