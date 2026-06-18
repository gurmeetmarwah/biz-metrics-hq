export const comparisonMeta = {
  slug: "food-truck-vs-ghost-kitchen" as const,
  title: "Food Truck vs Ghost Kitchen",
  subtitle:
    "Compare startup costs, delivery economics, profit margins, and scalability between mobile food trucks and delivery-only ghost kitchen brands.",
  dataVintage: "2025–2026",
};

export const comparisonLabels = {
  primary: "Ghost Kitchen",
  foodTruck: "Food Truck",
  breadcrumbHub: {
    label: "Food Truck",
    href: "/industries/food-beverage/food-truck/",
  },
  explorePrimary: {
    label: "Explore Delivery-Only Models →",
    href: "/industries/food-beverage/food-truck/#delivery",
  },
  exploreFoodTruck: {
    label: "Explore Food Truck Hub →",
    href: "/industries/food-beverage/food-truck/",
  },
} as const;

export const decisionSnapshot = [
  { factor: "Lower Startup Cost", winner: "Ghost Kitchen" as const },
  { factor: "Higher Margin (no platform fees)", winner: "Food Truck" as const },
  { factor: "Brand Visibility", winner: "Food Truck" as const },
  { factor: "Multi-Brand Scalability", winner: "Ghost Kitchen" as const },
  { factor: "Weather Independence", winner: "Ghost Kitchen" as const },
] as const;

export const kpiComparison = [
  { metric: "Startup Cost", primary: "$30K – $120K", foodTruck: "$60K – $150K" },
  { metric: "Revenue (median)", primary: "$350K", foodTruck: "$280K" },
  { metric: "Profit Margin", primary: "10 – 18%", foodTruck: "12 – 16%" },
  { metric: "Owner Salary (median)", primary: "$80K", foodTruck: "$75K" },
  { metric: "Employees", primary: "3 – 10", foodTruck: "2 – 6" },
  { metric: "Break-Even Time", primary: "10 – 16 months", foodTruck: "8 – 14 months" },
  { metric: "Valuation Multiple", primary: "2.0x – 2.6x SDE", foodTruck: "2.25x SDE" },
] as const;

export const scorecardCategories = [
  { label: "Startup Cost", primary: 8, foodTruck: 6, winner: "primary" as const },
  { label: "Revenue", primary: 7, foodTruck: 6, winner: "primary" as const },
  { label: "Margin", primary: 6, foodTruck: 8, winner: "foodTruck" as const },
  { label: "Flexibility", primary: 5, foodTruck: 9, winner: "foodTruck" as const },
  { label: "Scalability", primary: 9, foodTruck: 5, winner: "primary" as const },
  { label: "Platform Risk", primary: 4, foodTruck: 8, winner: "foodTruck" as const },
] as const;

export const primaryStartupItems = [
  { item: "Kitchen Lease / Shared Space", percent: 35 },
  { item: "Equipment & Smallwares", percent: 25 },
  { item: "Branding & Menu Development", percent: 15 },
  { item: "Delivery Platform Setup", percent: 15 },
  { item: "Initial Inventory & Working Capital", percent: 10 },
] as const;

export const foodTruckStartupItems = [
  { item: "Truck Purchase", percent: 45 },
  { item: "Kitchen Equipment", percent: 25 },
  { item: "Permits & Licenses", percent: 10 },
  { item: "Branding & Wrap", percent: 10 },
  { item: "Initial Inventory", percent: 10 },
] as const;

export const startupSideBySide = [
  { category: "Facility / Vehicle", primary: "$15K – $50K", foodTruck: "$25K – $80K" },
  { category: "Equipment", primary: "$20K – $45K", foodTruck: "$15K – $40K" },
  { category: "Permits & Licenses", primary: "$5K – $15K", foodTruck: "$3K – $8K" },
  { category: "Working Capital", primary: "$10K – $25K", foodTruck: "$10K – $25K" },
] as const;

export const primaryRevenueDist = {
  bottom: "$200K",
  median: "$350K",
  top: "$550K",
};

export const foodTruckRevenueDist = {
  bottom: "$180K",
  median: "$280K",
  top: "$450K",
};

export const primaryRevenueDrivers = [
  "Delivery app orders (DoorDash, Uber Eats, Grubhub)",
  "Multiple virtual brands from one kitchen",
  "Higher order volume without dine-in overhead",
] as const;

export const foodTruckRevenueDrivers = [
  "Direct customer sales — no 15–30% platform fees",
  "Events, festivals, and catering upsells",
  "Physical brand presence and social proof",
] as const;

export const marginTiers = {
  primary: { weak: "4–8%", average: "10–14%", strong: "15–20%" },
  foodTruck: { weak: "4–6%", average: "8–12%", strong: "13–16%" },
};

export const costStructureComparison = [
  { expense: "Food Cost", primary: "28 – 35%", foodTruck: "28 – 35%" },
  { expense: "Labor", primary: "25 – 32%", foodTruck: "20 – 28%" },
  { expense: "Rent / Commissary", primary: "8 – 15%", foodTruck: "0 – 2%" },
  { expense: "Delivery Platform Fees", primary: "15 – 30%", foodTruck: "0 – 5%" },
] as const;

export const breakEvenComparison = {
  primaryMonths: 13,
  foodTruckMonths: 11,
  primaryMonthsLabel: "10 – 16 months",
  foodTruckMonthsLabel: "8 – 14 months",
};

export const dailySalesComparison = [
  { metric: "Daily Revenue Needed", primary: "$1,100 – $1,500", foodTruck: "$950 – $1,300" },
  { metric: "Orders / Customers Needed", primary: "45 – 80 orders/day", foodTruck: "65 – 90/day" },
] as const;

export const ownerIncomeComparison = [
  {
    model: "Single Ghost Kitchen Brand",
    earnings: "$60K – $95K",
    type: "primary" as const,
  },
  {
    model: "Single Food Truck",
    earnings: "$55K – $85K",
    type: "foodTruck" as const,
  },
  {
    model: "Multi-Brand Ghost Kitchen",
    earnings: "$100K – $180K+",
    type: "primary" as const,
  },
  {
    model: "Multi-Truck Fleet",
    earnings: "$120K – $200K+",
    type: "foodTruck" as const,
  },
] as const;

export const lifestyleComparison = [
  {
    factor: "Schedule Flexibility",
    primary: "Kitchen hours tied to delivery demand",
    foodTruck: "Route-based — more outdoor variety",
  },
  {
    factor: "Customer Interaction",
    primary: "Minimal — orders via apps",
    foodTruck: "Direct — face-to-face daily",
  },
  {
    factor: "Staffing Needs",
    primary: "3 – 10 kitchen & dispatch staff",
    foodTruck: "2 – 6 full-time or part-time",
  },
  {
    factor: "Operational Complexity",
    primary: "Platform algorithms & multi-brand ops",
    foodTruck: "Moderate — vehicle, route, and permits",
  },
] as const;

export const scalingLadder = {
  foodTruck: ["1 Truck", "2 Trucks", "Truck + Catering"],
  primary: ["1 Brand", "2–3 Virtual Brands", "Multi-Kitchen Network"],
};

export const scalingChallenges = [
  {
    title: "Platform Dependency",
    description:
      "Ghost kitchens rely on DoorDash and Uber Eats for discovery. Food trucks own customer relationships at the window.",
  },
  {
    title: "Capital",
    description:
      "Adding virtual brands is cheap inside an existing kitchen. Each new truck still costs $60K–$150K.",
  },
  {
    title: "Competition",
    description:
      "Delivery marketplaces are crowded — ranking and reviews matter. Trucks compete on location and consistency.",
  },
  {
    title: "Margin Pressure",
    description:
      "15–30% platform fees compress ghost kitchen margins. Trucks keep more per transaction but face weather risk.",
  },
] as const;

export const valuationComparison = [
  { metric: "Revenue Multiple", primary: "0.3x – 0.55x", foodTruck: "0.4x – 0.7x" },
  { metric: "SDE Multiple", primary: "1.6x – 2.6x", foodTruck: "1.8x – 2.8x" },
  { metric: "Saleability", primary: "Moderate — platform-dependent", foodTruck: "Moderate — owner-dependent" },
] as const;

export const valuationExamples = {
  primary: { revenue: "$400K", value: "$220K", note: "~2.2x SDE on $100K SDE" },
  foodTruck: { revenue: "$300K", value: "$180K", note: "~2.25x SDE on $80K SDE" },
};

export const choosePrimary = [
  "Want delivery revenue without buying a vehicle",
  "Plan to launch multiple virtual brands from one kitchen",
  "Prefer indoor operations regardless of weather",
  "Comfortable optimizing for delivery app algorithms",
] as const;

export const chooseFoodTruck = [
  "Want to avoid 15–30% third-party delivery fees",
  "Building a visible street brand and community presence",
  "Prefer direct customer relationships over app orders",
  "Targeting events, festivals, and catering upsells",
] as const;

export const calculators = [
  {
    label: "Food Truck Break-Even Calculator",
    href: "/calculators/food-truck-break-even/",
  },
  {
    label: "Food Truck Profit Margin Calculator",
    href: "/calculators/food-truck-profit-margin/",
  },
  {
    label: "Food Truck Valuation Calculator",
    href: "/calculators/food-truck-valuation/",
  },
  {
    label: "Food Truck Economics Hub",
    href: "/industries/food-beverage/food-truck/",
  },
] as const;

export const relatedComparisons = [
  { label: "Restaurant vs Food Truck", href: "/industries/comparisons/restaurant-vs-food-truck/" },
  { label: "Coffee Shop vs Food Truck", href: "/comparisons/coffee-shop-vs-food-truck/" },
  { label: "Food Truck vs Catering", href: "/compare/food-truck-vs-catering/" },
  { label: "Restaurant vs Coffee Shop", href: "/industries/comparisons/restaurant-vs-coffee-shop/" },
  { label: "Coffee Shop vs Fast Casual", href: "/comparisons/coffee-shop-vs-fast-casual/" },
] as const;

export const faqs = [
  {
    question: "Is a ghost kitchen more profitable than a food truck?",
    answer:
      "Ghost kitchens can generate higher revenue ($350K median vs. $280K for trucks) by running multiple brands from one kitchen. However, delivery platform fees (15–30%) often compress net margins to 10–18%, while food trucks keep more per sale at 12–16% margins. Profit depends on order volume vs. fee structure.",
  },
  {
    question: "Which has lower startup costs?",
    answer:
      "Ghost kitchens typically launch for $30K–$120K using shared commercial kitchen space — no vehicle purchase. Food trucks require $60K–$150K for the truck, wrap, and mobile kitchen. Ghost kitchens skip fuel and vehicle maintenance but pay kitchen rent and platform fees.",
  },
  {
    question: "Can a food truck operate as a ghost kitchen?",
    answer:
      "Some operators use commissary kitchens for delivery-only brands while running a truck separately. This comparison contrasts a delivery-first ghost kitchen model vs. a truck-first street sales model. Hybrid operators exist but face split focus and higher total overhead.",
  },
  {
    question: "Which scales faster?",
    answer:
      "Ghost kitchens scale by adding virtual brands within the same kitchen — marginal cost per brand is low. Food trucks scale by purchasing additional vehicles ($60K–$150K each) and securing permits per market. Multi-brand ghost operators can hit $500K+ revenue faster with the right delivery ranking.",
  },
  {
    question: "Which is less risky?",
    answer:
      "Food trucks avoid platform algorithm changes and fee hikes but face weather, permit, and location risk. Ghost kitchens have predictable indoor operations but depend on third-party apps for customer acquisition. Diversifying across platforms reduces but doesn't eliminate delivery dependency.",
  },
  {
    question: "Which is better for brand building?",
    answer:
      "Food trucks build visible street presence — customers see your brand daily. Ghost kitchens are invisible to diners; brand equity lives inside delivery apps. Operators who want community recognition and event revenue lean truck; those optimizing for delivery volume lean ghost kitchen.",
  },
] as const;

export type DecisionInputs = {
  budget: "50k" | "100k" | "250k" | "500k";
  risk: "low" | "medium" | "high";
  income: "50k" | "100k" | "200k";
};

export function getRecommendation(
  inputs: DecisionInputs
): "Ghost Kitchen" | "Food Truck" {
  let primaryScore = 0;
  let foodTruckScore = 0;

  if (inputs.budget === "50k" || inputs.budget === "100k") primaryScore += 2;
  else if (inputs.budget === "250k") {
    primaryScore += 1;
    foodTruckScore += 1;
  } else {
    primaryScore += 2;
    foodTruckScore += 1;
  }

  if (inputs.risk === "low") foodTruckScore += 2;
  else if (inputs.risk === "medium") {
    primaryScore += 1;
    foodTruckScore += 1;
  } else primaryScore += 2;

  if (inputs.income === "50k") foodTruckScore += 1;
  else if (inputs.income === "100k") {
    primaryScore += 1;
    foodTruckScore += 1;
  } else primaryScore += 2;

  return primaryScore >= foodTruckScore ? "Ghost Kitchen" : "Food Truck";
}

export const decisionToolCopy = {
  primary:
    "Delivery-only operations and multi-brand scalability fit your profile — optimize kitchen throughput and app rankings.",
  foodTruck:
    "Direct sales without platform fees and stronger brand visibility align with your goals.",
} as const;
