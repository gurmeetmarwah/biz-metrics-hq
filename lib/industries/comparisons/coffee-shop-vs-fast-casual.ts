export const comparisonMeta = {
  slug: "coffee-shop-vs-fast-casual",
  title: "Coffee Shop vs Fast Casual Restaurant",
  subtitle:
    "Compare startup costs, revenue, profit margins, owner earnings, labor requirements and scalability to determine which business model fits your goals.",
  dataVintage: "2025–2026",
};

export const decisionSnapshot = [
  { factor: "Lower Startup Cost", winner: "Coffee Shop" as const },
  { factor: "Higher Revenue Potential", winner: "Fast Casual" as const },
  { factor: "Simpler Operations", winner: "Coffee Shop" as const },
  { factor: "Easier Staffing", winner: "Coffee Shop" as const },
  { factor: "Faster Growth", winner: "Fast Casual" as const },
  { factor: "Lifestyle Balance", winner: "Coffee Shop" as const },
] as const;

export const kpiComparison = [
  { metric: "Startup Cost", coffeeShop: "$80K – $400K", fastCasual: "$400K – $900K" },
  { metric: "Revenue (median)", coffeeShop: "$550K", fastCasual: "$1.4M" },
  { metric: "Profit Margin", coffeeShop: "10 – 18%", fastCasual: "8 – 15%" },
  { metric: "Owner Salary (median)", coffeeShop: "$85K", fastCasual: "$120K" },
  { metric: "Employees", coffeeShop: "4 – 12", fastCasual: "18 – 35" },
  { metric: "Avg Ticket", coffeeShop: "$6 – $12", fastCasual: "$12 – $18" },
  { metric: "Valuation Multiple", coffeeShop: "3.0x SDE", fastCasual: "3.2x SDE" },
] as const;

export const winnerScorecard = [
  { label: "Startup Cost", coffeeShop: 10, fastCasual: 6 },
  { label: "Revenue Potential", coffeeShop: 8, fastCasual: 10 },
  { label: "Operational Simplicity", coffeeShop: 10, fastCasual: 6 },
  { label: "Scalability", coffeeShop: 8, fastCasual: 10 },
] as const;

export const businessModelOverview = {
  coffeeShop: {
    primaryRevenue: ["Coffee", "Espresso Drinks", "Pastries", "Grab-and-Go"],
    stabilityLabel: "High Repeat Visits",
    stabilityNote: "Daily morning and afternoon routines drive predictable traffic.",
  },
  fastCasual: {
    primaryRevenue: ["Meals", "Combos", "Drinks", "Delivery"],
    stabilityLabel: "Higher Average Tickets",
    stabilityNote: "Lunch and dinner dayparts plus delivery lift revenue per visit.",
  },
};

export const coffeeShopStartupItems = [
  { item: "Espresso Equipment", percent: 30 },
  { item: "Furniture & Fixtures", percent: 18 },
  { item: "Leasehold Improvements", percent: 28 },
  { item: "POS System", percent: 8 },
  { item: "Initial Inventory", percent: 16 },
] as const;

export const fastCasualStartupItems = [
  { item: "Kitchen Equipment", percent: 28 },
  { item: "Ventilation & Hood", percent: 22 },
  { item: "Buildout", percent: 32 },
  { item: "Furniture & Fixtures", percent: 10 },
  { item: "Initial Inventory", percent: 8 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", coffeeShop: "$25K – $80K", fastCasual: "$80K – $150K" },
  { category: "Buildout", coffeeShop: "$40K – $150K", fastCasual: "$200K – $450K" },
  { category: "Inventory", coffeeShop: "$5K – $15K", fastCasual: "$10K – $25K" },
  { category: "Working Capital", coffeeShop: "$20K – $60K", fastCasual: "$75K – $150K" },
] as const;

export const coffeeShopRevenueDist = {
  bottom: "$350K",
  median: "$550K",
  top: "$850K",
};

export const fastCasualRevenueDist = {
  bottom: "$900K",
  median: "$1.4M",
  top: "$1.8M",
};

export const coffeeShopRevenueDrivers = [
  "Morning traffic and commuter dayparts",
  "Repeat customers and loyalty programs",
  "Drive-thru volume and speed of service",
  "Food attachments and average ticket growth",
] as const;

export const fastCasualRevenueDrivers = [
  "Lunch traffic and office-district volume",
  "Dinner traffic and family meals",
  "Delivery and digital ordering sales",
  "Catering and corporate accounts",
] as const;

export const dailyEconomics = {
  coffeeShop: {
    volumeLabel: "Customers/Day",
    volume: 280,
    averageLabel: "Avg Ticket",
    averageValue: 6.5,
    dailyRevenue: 1820,
  },
  fastCasual: {
    volumeLabel: "Customers/Day",
    volume: 320,
    averageLabel: "Avg Ticket",
    averageValue: 14,
    dailyRevenue: 4480,
  },
};

export const averageTicketComparison = {
  coffeeShop: {
    items: ["Coffee", "Pastry", "Light Food"],
    description: "Low-ticket, high-frequency visits — volume drives revenue.",
  },
  fastCasual: {
    items: ["Meal", "Drink", "Combo", "Family Order"],
    description: "Higher per-visit spend — fewer transactions, larger checks.",
  },
};

export const ticketSizeBenchmark = [
  { metric: "Avg Ticket", coffeeShop: "$6 – $12", fastCasual: "$12 – $18" },
  { metric: "Top Quartile Ticket", coffeeShop: "$10 – $14", fastCasual: "$16 – $22" },
] as const;

export const marginTiers = {
  coffeeShop: { weak: "4–6%", average: "10–14%", strong: "15–18%" },
  fastCasual: { weak: "4–6%", average: "8–12%", strong: "13–15%" },
};

export const costStructureComparison = [
  { expense: "Food Cost", coffeeShop: "18 – 25%", fastCasual: "28 – 32%" },
  { expense: "Labor", coffeeShop: "28 – 35%", fastCasual: "26 – 30%" },
  { expense: "Rent", coffeeShop: "8 – 12%", fastCasual: "6 – 9%" },
  { expense: "Marketing", coffeeShop: "2 – 4%", fastCasual: "2 – 4%" },
] as const;

export const laborIntensityComparison = [
  { metric: "Staff Count", coffeeShop: "4 – 12", fastCasual: "18 – 35" },
  { metric: "Training Complexity", coffeeShop: "Moderate — bar skills, speed", fastCasual: "Higher — kitchen line, food safety" },
  { metric: "Scheduling Difficulty", coffeeShop: "Moderate — morning peaks", fastCasual: "Higher — lunch/dinner peaks, larger team" },
  { metric: "Turnover Risk", coffeeShop: "Moderate", fastCasual: "Higher — competitive hourly market" },
] as const;

export const staffingModels = {
  coffeeShop: ["Baristas", "Shift Lead", "Manager"],
  fastCasual: ["Kitchen Staff", "Cashier", "Prep Staff", "Manager"],
};

export const ownerIncomeComparison = [
  { model: "Independent Coffee Shop", earnings: "$60K – $110K", type: "coffeeShop" as const },
  { model: "Independent Fast Casual", earnings: "$90K – $140K", type: "fastCasual" as const },
  { model: "Multi-Unit Cafe", earnings: "$150K – $280K+", type: "coffeeShop" as const },
  { model: "Multi-Unit Fast Casual", earnings: "$180K – $350K+", type: "fastCasual" as const },
] as const;

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", coffeeShop: "$38K – $48K", fastCasual: "$75K – $95K" },
  { metric: "Customers Needed (daily)", coffeeShop: "160 – 200/day", fastCasual: "110 – 140/day" },
  { metric: "Months To Break-Even", coffeeShop: "12 – 18 months", fastCasual: "18 – 24 months" },
] as const;

export const breakEvenExamples = {
  coffeeShop: { volumePerDay: 180, unit: "customers/day", label: "Coffee Shop" },
  fastCasual: { volumePerDay: 120, unit: "customers/day", label: "Fast Casual" },
};

export const valuationComparison = [
  { metric: "Revenue Multiple", coffeeShop: "0.5x – 0.8x", fastCasual: "0.4x – 0.7x" },
  { metric: "SDE Multiple", coffeeShop: "2.5x – 3.5x", fastCasual: "2.5x – 4.0x" },
  { metric: "Saleability", coffeeShop: "Strong with clean books", fastCasual: "Strong — scalable counter-service model" },
] as const;

export const valuationExamples = {
  coffeeShop: { revenue: "$600K", value: "$350K", note: "~3.0x SDE on $115K SDE" },
  fastCasual: { revenue: "$1.2M", value: "$700K", note: "~3.2x SDE on $220K SDE" },
};

export const scalingLadder = {
  coffeeShop: ["1 Cafe", "2 Cafes", "Drive-Thru", "Regional Chain"],
  fastCasual: ["1 Location", "3 Locations", "10 Locations", "Regional Brand"],
};

export const deliveryEconomics = {
  coffeeShop: {
    label: "Low Delivery Dependence",
    note: "Most revenue is on-premise and drive-thru. Delivery is optional, not core.",
  },
  fastCasual: {
    label: "High Delivery Opportunity",
    note: "Digital ordering and third-party delivery can represent 15–30% of revenue.",
  },
};

export const deliveryComparison = [
  { metric: "Delivery Sales Potential", coffeeShop: "Low – 5–10% of revenue", fastCasual: "High – 15–30% of revenue" },
  { metric: "Catering Potential", coffeeShop: "Moderate", fastCasual: "Strong" },
  { metric: "Off-Premise Revenue", coffeeShop: "20 – 35%", fastCasual: "35 – 55%" },
] as const;

export const capitalEfficiency = {
  investment: "$250,000",
  coffeeShop: {
    revenue: "$550K",
    profit: "$71K",
    paybackYears: "3.5 years",
    note: "Typical fully-capitalized independent cafe at this investment level.",
  },
  fastCasual: {
    revenue: "$900K",
    profit: "$72K",
    paybackYears: "5.5+ years",
    note: "Fast casual typically requires $400K–$900K total. At $250K, operators need additional debt or partners to reach viable scale.",
  },
  summary:
    "Coffee shops generate stronger returns per dollar invested at the $250K level. Fast casual offers higher absolute profit once fully capitalized ($650K+ typical), but requires more capital upfront.",
};

export const coffeeShopAdvantages = [
  "Lower startup cost",
  "Easier day-to-day operations",
  "Strong repeat customer base",
  "Lifestyle-friendly hours",
  "Lower staffing complexity",
] as const;

export const fastCasualAdvantages = [
  "Higher revenue ceiling",
  "Larger average tickets",
  "Strong delivery economics",
  "Better multi-unit scalability",
  "Higher valuation potential at scale",
] as const;

export const chooseCoffeeShop = [
  "You want a lifestyle business",
  "You prefer simpler operations",
  "You enjoy community engagement",
  "You want lower startup risk",
] as const;

export const chooseFastCasual = [
  "You want maximum growth",
  "You can manage larger teams",
  "You want higher revenue potential",
  "You plan to scale locations",
] as const;

export const calculators = [
  { label: "Coffee Shop Profit Margin Calculator", href: "/calculators/coffee-shop-profit-margin/" },
  { label: "Coffee Shop Valuation Calculator", href: "/calculators/coffee-shop-valuation/" },
  { label: "Coffee Shop Break-Even Calculator", href: "/calculators/coffee-shop-break-even/" },
  { label: "Restaurant Profit Margin Calculator", href: "/industries/restaurant/profit-margin-calculator/" },
  { label: "Restaurant Valuation Calculator", href: "/industries/restaurant/valuation/" },
  { label: "Restaurant Break-Even Calculator", href: "/calculators/restaurant-break-even/" },
] as const;

export const relatedComparisons = [
  { label: "Coffee Shop vs Bakery", href: "/comparisons/coffee-shop-vs-bakery/" },
  { label: "Coffee Shop vs Food Truck", href: "/comparisons/coffee-shop-vs-food-truck/" },
  { label: "Bakery vs Fast Casual", href: "/compare/bakery-vs-fast-casual/" },
  { label: "Restaurant vs Fast Casual", comingSoon: true },
  { label: "Coffee Shop vs Drive-Thru Coffee", comingSoon: true },
  { label: "Fast Casual vs Fine Dining", comingSoon: true },
] as const;

export type DecisionInputs = {
  budget: "under150k" | "150k-300k" | "300k+";
  lifestyle: "lifestyle" | "growth" | "balanced";
  revenueGoal: "100k" | "250k" | "500k+";
  staffingComfort: "low" | "medium" | "high";
};

export function getRecommendation(inputs: DecisionInputs): "Coffee Shop" | "Fast Casual" {
  let coffeeShopScore = 0;
  let fastCasualScore = 0;

  if (inputs.budget === "under150k") coffeeShopScore += 3;
  else if (inputs.budget === "150k-300k") {
    coffeeShopScore += 2;
    fastCasualScore += 1;
  } else fastCasualScore += 3;

  if (inputs.lifestyle === "lifestyle") coffeeShopScore += 3;
  else if (inputs.lifestyle === "growth") fastCasualScore += 3;
  else {
    coffeeShopScore += 1;
    fastCasualScore += 1;
  }

  if (inputs.revenueGoal === "100k") coffeeShopScore += 2;
  else if (inputs.revenueGoal === "250k") {
    coffeeShopScore += 1;
    fastCasualScore += 2;
  } else fastCasualScore += 3;

  if (inputs.staffingComfort === "low") coffeeShopScore += 3;
  else if (inputs.staffingComfort === "medium") {
    coffeeShopScore += 1;
    fastCasualScore += 1;
  } else fastCasualScore += 2;

  return coffeeShopScore >= fastCasualScore ? "Coffee Shop" : "Fast Casual";
}
