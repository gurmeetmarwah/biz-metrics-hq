export const comparisonMeta = {
  slug: "coffee-shop-vs-food-truck",
  title: "Coffee Shop vs Food Truck",
  subtitle:
    "Compare startup costs, revenue, profit margins, owner income, workload, scalability and lifestyle to determine which business is right for you.",
  dataVintage: "2025–2026",
};

export const decisionSnapshot = [
  { factor: "Lower Startup Cost", winner: "Food Truck" as const },
  { factor: "Higher Revenue Potential", winner: "Coffee Shop" as const },
  { factor: "Lifestyle Flexibility", winner: "Food Truck" as const },
  { factor: "Easier Scaling", winner: "Coffee Shop" as const },
  { factor: "Community Building", winner: "Coffee Shop" as const },
  { factor: "Faster Launch", winner: "Food Truck" as const },
] as const;

export const kpiComparison = [
  { metric: "Startup Cost", coffeeShop: "$80K – $400K", foodTruck: "$60K – $150K" },
  { metric: "Revenue (median)", coffeeShop: "$550K", foodTruck: "$280K" },
  { metric: "Profit Margin", coffeeShop: "10 – 18%", foodTruck: "12 – 18%" },
  { metric: "Owner Salary (median)", coffeeShop: "$85K", foodTruck: "$75K" },
  { metric: "Employees", coffeeShop: "4 – 12", foodTruck: "2 – 6" },
  { metric: "Avg Ticket", coffeeShop: "$6 – $12", foodTruck: "$10 – $18" },
  { metric: "Valuation Multiple", coffeeShop: "3.0x SDE", foodTruck: "2.25x SDE" },
] as const;

export const winnerScorecard = [
  { label: "Startup Cost", coffeeShop: 7, foodTruck: 10 },
  { label: "Revenue Potential", coffeeShop: 9, foodTruck: 8 },
  { label: "Lifestyle Flexibility", coffeeShop: 6, foodTruck: 10 },
  { label: "Scalability", coffeeShop: 10, foodTruck: 7 },
] as const;

export const coffeeShopStartupItems = [
  { item: "Espresso Equipment", percent: 30 },
  { item: "Furniture & Fixtures", percent: 18 },
  { item: "Leasehold Improvements", percent: 28 },
  { item: "POS System", percent: 8 },
  { item: "Initial Inventory", percent: 16 },
] as const;

export const foodTruckStartupItems = [
  { item: "Truck Purchase", percent: 45 },
  { item: "Kitchen Equipment", percent: 25 },
  { item: "Permits & Licenses", percent: 10 },
  { item: "Branding & Wrap", percent: 10 },
  { item: "Initial Inventory", percent: 10 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", coffeeShop: "$25K – $80K", foodTruck: "$15K – $40K" },
  { category: "Buildout", coffeeShop: "$40K – $150K", foodTruck: "$25K – $80K" },
  { category: "Inventory", coffeeShop: "$5K – $15K", foodTruck: "$3K – $8K" },
  { category: "Working Capital", coffeeShop: "$20K – $60K", foodTruck: "$10K – $25K" },
] as const;

export const coffeeShopRevenueDist = {
  bottom: "$350K",
  median: "$550K",
  top: "$850K",
};

export const foodTruckRevenueDist = {
  bottom: "$180K",
  median: "$280K",
  top: "$450K",
};

export const coffeeShopRevenueDrivers = [
  "Daily customer volume and morning rush",
  "Repeat customers and loyalty programs",
  "Drive-thru traffic and commuter capture",
  "Food attachments and average ticket growth",
] as const;

export const foodTruckRevenueDrivers = [
  "Events, festivals, and private bookings",
  "High-traffic street locations and rotations",
  "Corporate catering and recurring contracts",
  "Social media and route consistency",
] as const;

export const dailyEconomics = {
  coffeeShop: {
    volumeLabel: "Customers/Day",
    volume: 280,
    averageLabel: "Average Ticket",
    averageValue: 6.5,
    dailyRevenue: 1820,
  },
  foodTruck: {
    volumeLabel: "Customers/Day",
    volume: 85,
    averageLabel: "Average Ticket",
    averageValue: 14,
    dailyRevenue: 1190,
  },
};

export const marginTiers = {
  coffeeShop: { weak: "4–6%", average: "10–14%", strong: "15–18%" },
  foodTruck: { weak: "4–6%", average: "8–12%", strong: "13–18%" },
};

export const costStructureComparison = [
  { expense: "Ingredients", coffeeShop: "18 – 25%", foodTruck: "28 – 35%" },
  { expense: "Labor", coffeeShop: "28 – 35%", foodTruck: "20 – 28%" },
  { expense: "Rent", coffeeShop: "8 – 12%", foodTruck: "0 – 2%" },
  { expense: "Fuel", coffeeShop: "N/A", foodTruck: "3 – 6%" },
  { expense: "Marketing", coffeeShop: "2 – 4%", foodTruck: "2 – 5%" },
] as const;

export const businessModelComparison = {
  coffeeShop: {
    headline: "Fixed Location",
    traits: ["Recurring Customers", "Predictable Traffic"],
    description:
      "Coffee shops anchor to a neighborhood or commuter corridor. Success builds through daily regulars, local brand recognition, and consistent foot traffic.",
  },
  foodTruck: {
    headline: "Mobile",
    traits: ["Event Driven", "Location Dependent"],
    description:
      "Food trucks go where demand is — festivals, office parks, catering gigs. Revenue follows your route, bookings, and permit access rather than a fixed address.",
  },
};

export const revenueStability = {
  coffeeShop: 10,
  foodTruck: 6,
  note: "Coffee shops generally win on predictability — daily regulars and fixed hours create steadier revenue than event-driven truck schedules.",
};

export const ownerIncomeComparison = [
  { model: "Coffee Shop Owner", earnings: "$60K – $110K", type: "coffeeShop" as const },
  { model: "Food Truck Owner", earnings: "$55K – $95K", type: "foodTruck" as const },
  { model: "Multi-Cafe Owner", earnings: "$150K – $280K+", type: "coffeeShop" as const },
  { model: "Multi-Truck Owner", earnings: "$120K – $200K+", type: "foodTruck" as const },
] as const;

export const workloadComparison = [
  { factor: "Staffing", coffeeShop: "4 – 12 employees, bar team", foodTruck: "2 – 6 employees, often owner-operated" },
  { factor: "Inventory", coffeeShop: "Moderate — beans, dairy, pastries", foodTruck: "Compact — daily prep, limited menu" },
  { factor: "Mobility", coffeeShop: "Fixed location only", foodTruck: "High — route planning, permits, travel" },
  { factor: "Operational Complexity", coffeeShop: "Moderate — drink prep, customer flow", foodTruck: "Moderate — compact kitchen, event logistics" },
  { factor: "Schedule Flexibility", coffeeShop: "Fixed hours (typically 5 AM – 3 PM)", foodTruck: "Variable — event-driven, route-based" },
] as const;

export const workdayTimeline = {
  coffeeShop: { start: "5 AM", end: "3 PM", label: "Coffee Shop", startHour: 5, endHour: 15 },
  foodTruck: { start: "Event Driven", end: "Variable Hours", label: "Food Truck", startHour: 9, endHour: 19 },
};

export const locationDependency = {
  coffeeShop: {
    title: "Coffee Shop",
    factors: ["Foot Traffic", "Drive-Thru Access", "Neighborhood Demographics"],
    riskType: "Location Risk",
    riskNote: "A weak lease site is hard to fix — you depend on local density, visibility, and commuter patterns.",
  },
  foodTruck: {
    title: "Food Truck",
    factors: ["Events & Festivals", "Permits & Zoning", "Location Rotation", "Catering Bookings"],
    riskType: "Event Revenue Risk",
    riskNote: "Revenue swings with bookings, weather, and permit availability — diversification across routes reduces risk.",
  },
};

export const breakEvenComparison = [
  { metric: "Revenue Needed (monthly)", coffeeShop: "$38K – $48K", foodTruck: "$18K – $28K" },
  { metric: "Customers Needed (daily)", coffeeShop: "160 – 200/day", foodTruck: "65 – 90/day" },
  { metric: "Months To Break-Even", coffeeShop: "12 – 18 months", foodTruck: "8 – 14 months" },
] as const;

export const breakEvenExamples = {
  coffeeShop: { volumePerDay: 180, unit: "customers/day", label: "Coffee Shop" },
  foodTruck: { volumePerDay: 80, unit: "customers/day", label: "Food Truck" },
};

export const valuationComparison = [
  { metric: "Revenue Multiple", coffeeShop: "0.5x – 0.8x", foodTruck: "0.4x – 0.7x" },
  { metric: "SDE Multiple", coffeeShop: "2.5x – 3.5x", foodTruck: "1.8x – 2.8x" },
  { metric: "Saleability", coffeeShop: "Strong with clean books", foodTruck: "Moderate — owner & route dependent" },
] as const;

export const valuationExamples = {
  coffeeShop: { revenue: "$600K", value: "$350K", note: "~3.0x SDE on $115K SDE" },
  foodTruck: { revenue: "$300K", value: "$180K", note: "~2.5x SDE on $72K SDE" },
};

export const scalingLadder = {
  coffeeShop: ["1 Cafe", "2 Cafes", "Drive-Thru", "Regional Chain"],
  foodTruck: ["1 Truck", "2 Trucks", "Fleet", "Catering Business"],
};

export const coffeeShopAdvantages = [
  "Stable recurring daily customers",
  "Community brand and local presence",
  "Higher valuation potential at scale",
  "Easier financing and SBA lending",
  "More predictable day-to-day operations",
] as const;

export const foodTruckAdvantages = [
  "Lower startup investment",
  "Faster launch timeline",
  "Mobility — go where demand is",
  "Event and festival revenue opportunities",
  "Lower fixed overhead (no rent)",
] as const;

export const chooseCoffeeShop = [
  "You want a long-term local brand",
  "You prefer predictable daily traffic",
  "You enjoy community engagement",
  "You plan to build multiple locations",
] as const;

export const chooseFoodTruck = [
  "You have limited startup capital",
  "You enjoy mobility and variety",
  "You want faster market entry",
  "You plan to test concepts before opening a location",
] as const;

export const calculators = [
  { label: "Coffee Shop Profit Margin Calculator", href: "/calculators/coffee-shop-profit-margin/" },
  { label: "Coffee Shop Valuation Calculator", href: "/calculators/coffee-shop-valuation/" },
  { label: "Coffee Shop Break-Even Calculator", href: "/calculators/coffee-shop-break-even/" },
  { label: "Restaurant Break-Even Calculator", href: "/calculators/restaurant-break-even/" },
  { label: "Food Truck Economics Hub", href: "/industries/restaurant-types/food-truck/" },
] as const;

export const relatedComparisons = [
  { label: "Restaurant vs Food Truck", href: "/industries/comparisons/restaurant-vs-food-truck/" },
  { label: "Food Truck vs Catering", href: "/compare/food-truck-vs-catering/" },
  { label: "Food Truck vs Ghost Kitchen", href: "/compare/food-truck-vs-ghost-kitchen/" },
  { label: "Coffee Shop vs Bakery", href: "/comparisons/coffee-shop-vs-bakery/" },
  { label: "Restaurant vs Coffee Shop", href: "/industries/comparisons/restaurant-vs-coffee-shop/" },
] as const;

export const faqs = [
  {
    question: "Is a coffee shop more profitable than a food truck?",
    answer:
      "Coffee shops typically generate more absolute profit due to higher revenue ($550K median vs. $280K for food trucks). A cafe at 13% margin earns ~$71K; a truck at 14% earns ~$39K. Food trucks can match or beat cafe margins percentage-wise (12–18% vs. 10–18%) but on a smaller revenue base.",
  },
  {
    question: "Which costs less to start?",
    answer:
      "Food trucks cost significantly less: $60K–$150K vs. $80K–$400K for coffee shops. A used coffee truck or basic buildout can launch under $80K. Coffee shops with premium buildouts, drive-thru, or prime leases push toward $250K–$400K.",
  },
  {
    question: "Which business is easier to run?",
    answer:
      "Coffee shops are easier once established — fixed hours, recurring customers, and simpler daily routines. Food trucks require route planning, permit management, and event booking, but have fewer staff and no rent. Owner-operators often find trucks simpler at small scale.",
  },
  {
    question: "Can a food truck make more money than a coffee shop?",
    answer:
      "Rarely on a single unit. Coffee shop median revenue is nearly 2x food trucks ($550K vs. $280K). Top food trucks at festivals and with strong catering can reach $400K–$500K, but multi-cafe owners scale further ($150K–$280K+ owner income vs. $120K–$200K for multi-truck operators).",
  },
  {
    question: "Which has better margins?",
    answer:
      "Food trucks often achieve slightly higher net margins (12–18% vs. 10–18%) due to no rent and lean staffing. Coffee shops win on beverage gross margins (70%+ on drinks). Trucks offset higher food cost percentages with lower fixed overhead.",
  },
  {
    question: "Which scales better?",
    answer:
      "Coffee shops scale more predictably through multi-unit cafes, drive-thru formats, and franchise models. Food trucks scale via fleet expansion and catering businesses, but route consistency and owner dependence create bottlenecks. Regional coffee chains are more common than regional truck fleets.",
  },
] as const;

export type DecisionInputs = {
  budget: "under100k" | "100k-250k" | "250k+";
  lifestyle: "flexible" | "community" | "growth";
  revenueGoal: "75k" | "150k" | "250k+";
  businessStyle: "mobile" | "fixed" | "either";
};

export function getRecommendation(inputs: DecisionInputs): "Coffee Shop" | "Food Truck" {
  let coffeeShopScore = 0;
  let foodTruckScore = 0;

  if (inputs.budget === "under100k") foodTruckScore += 3;
  else if (inputs.budget === "100k-250k") {
    coffeeShopScore += 1;
    foodTruckScore += 2;
  } else coffeeShopScore += 3;

  if (inputs.lifestyle === "flexible") foodTruckScore += 3;
  else if (inputs.lifestyle === "community") coffeeShopScore += 3;
  else if (inputs.lifestyle === "growth") coffeeShopScore += 2;

  if (inputs.revenueGoal === "75k") foodTruckScore += 1;
  else if (inputs.revenueGoal === "150k") {
    coffeeShopScore += 1;
    foodTruckScore += 1;
  } else coffeeShopScore += 3;

  if (inputs.businessStyle === "mobile") foodTruckScore += 3;
  else if (inputs.businessStyle === "fixed") coffeeShopScore += 3;
  else {
    coffeeShopScore += 1;
    foodTruckScore += 1;
  }

  return coffeeShopScore >= foodTruckScore ? "Coffee Shop" : "Food Truck";
}
