export const comparisonMeta = {
  slug: "food-truck-vs-catering" as const,
  title: "Food Truck vs Catering Business",
  subtitle:
    "Compare startup costs, revenue, profit margins, event economics, and owner income to decide between mobile street sales and event-based catering.",
  dataVintage: "2025–2026",
};

export const comparisonLabels = {
  primary: "Catering Business",
  foodTruck: "Food Truck",
  breadcrumbHub: {
    label: "Food Truck",
    href: "/industries/food-beverage/food-truck/",
  },
  explorePrimary: {
    label: "Explore Catering Economics →",
    href: "/industries/food-beverage/food-truck/#catering",
  },
  exploreFoodTruck: {
    label: "Explore Food Truck Hub →",
    href: "/industries/food-beverage/food-truck/",
  },
} as const;

export const decisionSnapshot = [
  { factor: "Lower Startup Cost", winner: "Catering Business" as const },
  { factor: "Higher Daily Revenue Potential", winner: "Food Truck" as const },
  { factor: "Higher Margin on Large Events", winner: "Catering Business" as const },
  { factor: "Faster Break-Even", winner: "Catering Business" as const },
  { factor: "Location & Brand Visibility", winner: "Food Truck" as const },
] as const;

export const kpiComparison = [
  { metric: "Startup Cost", primary: "$15K – $75K", foodTruck: "$60K – $150K" },
  { metric: "Revenue (median)", primary: "$320K", foodTruck: "$280K" },
  { metric: "Profit Margin", primary: "15 – 25%", foodTruck: "12 – 16%" },
  { metric: "Owner Salary (median)", primary: "$85K", foodTruck: "$75K" },
  { metric: "Employees", primary: "2 – 8", foodTruck: "2 – 6" },
  { metric: "Break-Even Time", primary: "6 – 12 months", foodTruck: "8 – 14 months" },
  { metric: "Valuation Multiple", primary: "2.0x – 2.8x SDE", foodTruck: "2.25x SDE" },
] as const;

export const scorecardCategories = [
  { label: "Startup Cost", primary: 9, foodTruck: 6, winner: "primary" as const },
  { label: "Revenue", primary: 7, foodTruck: 6, winner: "primary" as const },
  { label: "Margin", primary: 9, foodTruck: 7, winner: "primary" as const },
  { label: "Flexibility", primary: 6, foodTruck: 9, winner: "foodTruck" as const },
  { label: "Scalability", primary: 7, foodTruck: 6, winner: "primary" as const },
  { label: "Predictability", primary: 5, foodTruck: 6, winner: "foodTruck" as const },
] as const;

export const primaryStartupItems = [
  { item: "Commissary / Prep Kitchen", percent: 30 },
  { item: "Transport & Serving Equipment", percent: 25 },
  { item: "Permits & Insurance", percent: 15 },
  { item: "Branding & Marketing", percent: 15 },
  { item: "Initial Inventory", percent: 15 },
] as const;

export const foodTruckStartupItems = [
  { item: "Truck Purchase", percent: 45 },
  { item: "Kitchen Equipment", percent: 25 },
  { item: "Permits & Licenses", percent: 10 },
  { item: "Branding & Wrap", percent: 10 },
  { item: "Initial Inventory", percent: 10 },
] as const;

export const startupSideBySide = [
  { category: "Vehicle / Transport", primary: "$5K – $25K", foodTruck: "$25K – $80K" },
  { category: "Kitchen Setup", primary: "$8K – $30K", foodTruck: "$15K – $40K" },
  { category: "Permits & Insurance", primary: "$2K – $8K", foodTruck: "$3K – $8K" },
  { category: "Working Capital", primary: "$5K – $20K", foodTruck: "$10K – $25K" },
] as const;

export const primaryRevenueDist = {
  bottom: "$150K",
  median: "$320K",
  top: "$600K",
};

export const foodTruckRevenueDist = {
  bottom: "$180K",
  median: "$280K",
  top: "$450K",
};

export const primaryRevenueDrivers = [
  "Corporate events and wedding contracts",
  "Higher average check per guest ($25–$45)",
  "Repeat B2B clients and seasonal peaks",
] as const;

export const foodTruckRevenueDrivers = [
  "Daily street sales and lunch routes",
  "Festivals, farmers markets, and pop-ups",
  "Social media and consistent location branding",
] as const;

export const marginTiers = {
  primary: { weak: "8–12%", average: "15–20%", strong: "22–28%" },
  foodTruck: { weak: "4–6%", average: "8–12%", strong: "13–16%" },
};

export const costStructureComparison = [
  { expense: "Food Cost", primary: "25 – 32%", foodTruck: "28 – 35%" },
  { expense: "Labor", primary: "22 – 30%", foodTruck: "20 – 28%" },
  { expense: "Rent / Commissary", primary: "3 – 8%", foodTruck: "0 – 2%" },
  { expense: "Fuel / Vehicle", primary: "2 – 5%", foodTruck: "3 – 6%" },
] as const;

export const breakEvenComparison = {
  primaryMonths: 9,
  foodTruckMonths: 11,
  primaryMonthsLabel: "6 – 12 months",
  foodTruckMonthsLabel: "8 – 14 months",
};

export const dailySalesComparison = [
  { metric: "Daily Revenue Needed", primary: "$850 – $1,200 (active days)", foodTruck: "$950 – $1,300" },
  { metric: "Customers / Guests Needed", primary: "25 – 60/event", foodTruck: "65 – 90/day" },
] as const;

export const ownerIncomeComparison = [
  {
    model: "Solo Catering Operator",
    earnings: "$55K – $90K",
    type: "primary" as const,
  },
  {
    model: "Single Food Truck",
    earnings: "$55K – $85K",
    type: "foodTruck" as const,
  },
  {
    model: "Multi-Event Catering Company",
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
    primary: "Event-driven — peaks on weekends",
    foodTruck: "Route-based — more daily consistency",
  },
  {
    factor: "Sales Channel",
    primary: "Bookings, proposals, and contracts",
    foodTruck: "Walk-up, social, and location traffic",
  },
  {
    factor: "Staffing Needs",
    primary: "2 – 8 per event crew",
    foodTruck: "2 – 6 full-time or part-time",
  },
  {
    factor: "Operational Complexity",
    primary: "High per event — logistics & timing",
    foodTruck: "Moderate — compact daily ops",
  },
] as const;

export const scalingLadder = {
  foodTruck: ["1 Truck", "2 Trucks", "Truck + Catering"],
  primary: ["Solo Operator", "Event Crew", "Multi-City Catering"],
};

export const scalingChallenges = [
  {
    title: "Capacity",
    description:
      "Catering scales by crew size and commissary throughput. Food trucks scale by adding routes or second units.",
  },
  {
    title: "Sales Cycle",
    description:
      "Catering requires lead generation and proposals. Food trucks rely on location access and daily foot traffic.",
  },
  {
    title: "Capital",
    description:
      "Additional catering capacity needs vans, chafers, and staff. Each new truck runs $60K–$150K.",
  },
  {
    title: "Seasonality",
    description:
      "Both models spike in summer and holidays. Catering feels it more on wedding and corporate calendars.",
  },
] as const;

export const valuationComparison = [
  { metric: "Revenue Multiple", primary: "0.35x – 0.65x", foodTruck: "0.4x – 0.7x" },
  { metric: "SDE Multiple", primary: "1.8x – 2.8x", foodTruck: "1.8x – 2.8x" },
  { metric: "Saleability", primary: "Moderate — client relationships", foodTruck: "Moderate — owner-dependent" },
] as const;

export const valuationExamples = {
  primary: { revenue: "$350K", value: "$200K", note: "~2.4x SDE on $85K SDE" },
  foodTruck: { revenue: "$300K", value: "$180K", note: "~2.25x SDE on $80K SDE" },
};

export const choosePrimary = [
  "Prefer event-based revenue with higher per-guest checks",
  "Want to launch with under $75K and no vehicle wrap",
  "Strong at sales, proposals, and client relationships",
  "Targeting corporate, wedding, or private event contracts",
] as const;

export const chooseFoodTruck = [
  "Want daily street sales and public brand visibility",
  "Prefer a mobile kitchen over event logistics",
  "Building a recognizable route or festival presence",
  "Testing a menu before offering full-service catering",
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
  { label: "Food Truck vs Ghost Kitchen", href: "/compare/food-truck-vs-ghost-kitchen/" },
  { label: "Restaurant vs Coffee Shop", href: "/industries/comparisons/restaurant-vs-coffee-shop/" },
  { label: "Coffee Shop vs Bakery", href: "/comparisons/coffee-shop-vs-bakery/" },
] as const;

export const faqs = [
  {
    question: "Is catering more profitable than a food truck?",
    answer:
      "Dedicated catering often achieves higher net margins (15–25% vs. 12–16% for food trucks) because events command premium per-guest pricing and lower daily fixed costs. Food trucks can win on total daily volume in strong locations. A $320K catering business at 18% margin earns ~$58K; a $280K truck at 14% earns ~$39K.",
  },
  {
    question: "Can a food truck also do catering?",
    answer:
      "Yes — many operators use trucks for daily routes and book off-site events. The comparison here is between a truck-first model vs. a catering-first model without daily street sales. Catering-first operators often skip the vehicle investment and focus on commissary prep and event logistics.",
  },
  {
    question: "Which has lower startup costs?",
    answer:
      "Catering businesses typically launch for $15K–$75K using a commissary kitchen, transport equipment, and permits — no $60K+ truck required. Food trucks need the vehicle, wrap, and mobile kitchen buildout, pushing typical startup to $60K–$150K.",
  },
  {
    question: "Which model is easier to scale?",
    answer:
      "Catering scales by adding event crews and sales staff — revenue can jump with a few large corporate contracts. Food trucks scale by adding units or combining catering bookings. Catering companies with recurring B2B clients often grow faster without capital-heavy truck purchases.",
  },
  {
    question: "Which reaches break-even faster?",
    answer:
      "Catering often breaks even in 6–12 months with a few anchor clients. Food trucks typically need 8–14 months of consistent routes. Catering revenue can be lumpy (seasonal), while trucks depend on daily location performance.",
  },
  {
    question: "Which is better for lifestyle flexibility?",
    answer:
      "Food trucks offer more daily autonomy over routes and hours. Catering is event-driven — intense on weekends and holidays, quieter mid-week. Operators who dislike sales and proposals often prefer truck operations; those who enjoy client relationships lean toward catering.",
  },
] as const;

export type DecisionInputs = {
  budget: "50k" | "100k" | "250k" | "500k";
  risk: "low" | "medium" | "high";
  income: "50k" | "100k" | "200k";
};

export function getRecommendation(
  inputs: DecisionInputs
): "Catering Business" | "Food Truck" {
  let primaryScore = 0;
  let foodTruckScore = 0;

  if (inputs.budget === "50k") primaryScore += 3;
  else if (inputs.budget === "100k") {
    primaryScore += 2;
    foodTruckScore += 1;
  } else if (inputs.budget === "250k") {
    primaryScore += 1;
    foodTruckScore += 2;
  } else foodTruckScore += 2;

  if (inputs.risk === "low") primaryScore += 2;
  else if (inputs.risk === "medium") {
    primaryScore += 1;
    foodTruckScore += 1;
  } else foodTruckScore += 2;

  if (inputs.income === "50k") {
    primaryScore += 1;
    foodTruckScore += 1;
  } else if (inputs.income === "100k") {
    primaryScore += 2;
    foodTruckScore += 1;
  } else primaryScore += 2;

  return primaryScore >= foodTruckScore ? "Catering Business" : "Food Truck";
}

export const decisionToolCopy = {
  primary:
    "Event-based revenue and lower startup costs fit your profile — focus on contracts and repeat clients.",
  foodTruck:
    "Daily mobile sales and brand visibility align with your goals — build a route before adding catering.",
} as const;
