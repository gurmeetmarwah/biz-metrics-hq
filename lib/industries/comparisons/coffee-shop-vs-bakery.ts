export const comparisonMeta = {
  slug: "coffee-shop-vs-bakery",
  title: "Coffee Shop vs Bakery",
  subtitle:
    "Compare startup costs, revenue, profit margins, owner income, workload and business economics to determine which opportunity is right for you.",
  dataVintage: "2025–2026",
};

export const decisionSnapshot = [
  { factor: "Lower Startup Cost", winner: "Bakery" as const },
  { factor: "Higher Revenue Potential", winner: "Coffee Shop" as const },
  { factor: "Simpler Operations", winner: "Coffee Shop" as const },
  { factor: "Premium Products", winner: "Bakery" as const },
  { factor: "Lifestyle Business", winner: "Coffee Shop" as const },
  { factor: "Wholesale Opportunities", winner: "Bakery" as const },
] as const;

export const kpiComparison = [
  { metric: "Startup Cost", coffeeShop: "$80K – $400K", bakery: "$50K – $300K" },
  { metric: "Revenue (median)", coffeeShop: "$550K", bakery: "$450K" },
  { metric: "Profit Margin", coffeeShop: "10 – 18%", bakery: "8 – 18%" },
  { metric: "Owner Salary (median)", coffeeShop: "$85K", bakery: "$70K" },
  { metric: "Employees", coffeeShop: "4 – 12", bakery: "3 – 10" },
  { metric: "Avg Ticket", coffeeShop: "$6 – $12", bakery: "$12 – $35" },
  { metric: "Valuation Multiple", coffeeShop: "3.0x SDE", bakery: "2.8x SDE" },
] as const;

export const winnerScorecard = [
  { label: "Startup Cost", coffeeShop: 8, bakery: 10 },
  { label: "Revenue Potential", coffeeShop: 9, bakery: 7 },
  { label: "Operational Simplicity", coffeeShop: 9, bakery: 7 },
  { label: "Scalability", coffeeShop: 9, bakery: 8 },
] as const;

export const coffeeShopStartupItems = [
  { item: "Espresso Equipment", percent: 30 },
  { item: "Furniture & Fixtures", percent: 18 },
  { item: "POS System", percent: 8 },
  { item: "Lease Improvements", percent: 28 },
  { item: "Initial Inventory", percent: 16 },
] as const;

export const bakeryStartupItems = [
  { item: "Ovens", percent: 22 },
  { item: "Mixers", percent: 12 },
  { item: "Display Cases", percent: 18 },
  { item: "Refrigeration", percent: 15 },
  { item: "Initial Inventory", percent: 14 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", coffeeShop: "$25K – $80K", bakery: "$38K – $120K" },
  { category: "Buildout", coffeeShop: "$40K – $150K", bakery: "$30K – $120K" },
  { category: "Inventory", coffeeShop: "$5K – $15K", bakery: "$3K – $10K" },
  { category: "Working Capital", coffeeShop: "$20K – $60K", bakery: "$15K – $40K" },
] as const;

export const coffeeShopRevenueDist = {
  bottom: "$350K",
  median: "$550K",
  top: "$850K",
};

export const bakeryRevenueDist = {
  bottom: "$280K",
  median: "$450K",
  top: "$750K",
};

export const coffeeShopRevenueDrivers = [
  "Daily customer volume and daypart mix",
  "Drive-thru sales and commuter capture",
  "Loyalty programs and repeat customers",
  "Food attachments and average ticket growth",
] as const;

export const bakeryRevenueDrivers = [
  "Daily walk-in orders and repeat customers",
  "Custom cakes and celebration orders",
  "Wholesale accounts and B2B volume",
  "Seasonal demand and holiday peaks",
] as const;

export const dailyEconomics = {
  coffeeShop: {
    volumeLabel: "Customers/Day",
    volume: 280,
    averageLabel: "Average Ticket",
    averageValue: 6.5,
    dailyRevenue: 1820,
  },
  bakery: {
    volumeLabel: "Orders/Day",
    volume: 60,
    averageLabel: "Average Order",
    averageValue: 25,
    dailyRevenue: 1500,
  },
};

export const marginTiers = {
  coffeeShop: { weak: "4–6%", average: "10–14%", strong: "15–18%" },
  bakery: { weak: "3–5%", average: "8–12%", strong: "13–18%" },
};

export const costStructureComparison = [
  { expense: "Ingredients", coffeeShop: "18 – 25%", bakery: "25 – 32%" },
  { expense: "Labor", coffeeShop: "28 – 35%", bakery: "28 – 36%" },
  { expense: "Rent", coffeeShop: "8 – 12%", bakery: "7 – 11%" },
  { expense: "Packaging", coffeeShop: "1 – 2%", bakery: "2 – 4%" },
  { expense: "Marketing", coffeeShop: "2 – 4%", bakery: "2 – 5%" },
] as const;

export const coffeeShopRevenueMix = [
  { label: "Coffee", percent: 35 },
  { label: "Espresso Drinks", percent: 20 },
  { label: "Pastries", percent: 15 },
  { label: "Sandwiches", percent: 18 },
  { label: "Retail Beans", percent: 12 },
] as const;

export const bakeryRevenueMix = [
  { label: "Bread", percent: 28 },
  { label: "Pastries", percent: 22 },
  { label: "Cookies", percent: 10 },
  { label: "Custom Cakes", percent: 32 },
  { label: "Wholesale Orders", percent: 8 },
] as const;

export const productProfitPotential = [
  { productType: "Core Product", coffeeShop: "Strong (beverages)", bakery: "Moderate (daily bread)" },
  { productType: "Premium Product", coffeeShop: "Good (specialty drinks)", bakery: "Excellent (wedding cakes)" },
  { productType: "Upsell Opportunity", coffeeShop: "Strong (food attach)", bakery: "Good (custom orders)" },
] as const;

export const ownerIncomeComparison = [
  { model: "Coffee Shop Owner", earnings: "$60K – $110K", type: "coffeeShop" as const },
  { model: "Bakery Owner", earnings: "$50K – $95K", type: "bakery" as const },
  { model: "Multi-Cafe Owner", earnings: "$150K – $280K+", type: "coffeeShop" as const },
  { model: "Multi-Bakery Owner", earnings: "$120K – $220K+", type: "bakery" as const },
] as const;

export const workloadComparison = [
  { factor: "Staffing Complexity", coffeeShop: "4 – 12 employees, bar team", bakery: "3 – 10 employees, production + counter" },
  { factor: "Production Complexity", coffeeShop: "Moderate — drink prep, batch pastries", bakery: "Higher — batch baking, custom cakes" },
  { factor: "Customer Service", coffeeShop: "High — daily regulars, speed of service", bakery: "Moderate — counter, pre-orders, pickups" },
  { factor: "Inventory Management", coffeeShop: "Moderate — beans, dairy, pastries", bakery: "Higher — flour, perishables, seasonal SKUs" },
  { factor: "Operational Stress", coffeeShop: "Moderate — morning rush peaks", bakery: "Moderate–High — early production, deadlines" },
] as const;

export const workdayTimeline = {
  coffeeShop: { start: "5 AM", end: "3 PM", label: "Coffee Shop" },
  bakery: { start: "3 AM", end: "2 PM", label: "Bakery" },
};

export const wholesaleRevenueChannels = [
  { source: "Walk-In Customers", coffeeShop: "Primary channel", bakery: "Primary channel" },
  { source: "Catering", coffeeShop: "Moderate", bakery: "Strong" },
  { source: "Wholesale", coffeeShop: "Limited", bakery: "High potential" },
  { source: "Custom Orders", coffeeShop: "Low", bakery: "Excellent" },
] as const;

export const wholesalePotential = {
  coffeeShop: { level: "Limited", note: "Some cafes supply local offices or events, but wholesale is not a core model." },
  bakery: { level: "High", note: "Bakeries supply coffee shops, restaurants, grocers, and corporate accounts with steady B2B volume." },
};

export const breakEvenComparison = [
  { metric: "Revenue Needed (monthly)", coffeeShop: "$38K – $48K", bakery: "$32K – $42K" },
  { metric: "Customers/Orders Needed (daily)", coffeeShop: "160 – 200/day", bakery: "55 – 70/day" },
  { metric: "Months To Break-Even", coffeeShop: "12 – 18 months", bakery: "12 – 18 months" },
] as const;

export const breakEvenExamples = {
  coffeeShop: { volumePerDay: 180, unit: "customers/day", label: "Coffee Shop" },
  bakery: { volumePerDay: 60, unit: "orders/day", label: "Bakery" },
};

export const valuationComparison = [
  { metric: "Revenue Multiple", coffeeShop: "0.5x – 0.8x", bakery: "0.4x – 0.7x" },
  { metric: "SDE Multiple", coffeeShop: "2.5x – 3.5x", bakery: "2.0x – 3.2x" },
  { metric: "Saleability", coffeeShop: "Strong with clean books", bakery: "Moderate — recipe & owner dependent" },
] as const;

export const valuationExamples = {
  coffeeShop: { revenue: "$600K", value: "$350K", note: "~3.0x SDE on $115K SDE" },
  bakery: { revenue: "$450K", value: "$300K", note: "~3.0x SDE on $100K SDE" },
};

export const scalingLadder = {
  coffeeShop: ["1 Cafe", "2 Cafes", "Drive-Thru", "Regional Chain"],
  bakery: ["1 Bakery", "Wholesale", "2 Locations", "Regional Brand"],
};

export const coffeeShopAdvantages = [
  "Simpler day-to-day operations",
  "Strong repeat customer base",
  "Community-oriented neighborhood business",
  "Easier staffing and training",
  "Drive-thru and mobile revenue opportunities",
] as const;

export const bakeryAdvantages = [
  "Wholesale and B2B revenue streams",
  "Premium custom order margins",
  "Lower startup investment",
  "Wedding and event opportunities",
  "Strong seasonal demand peaks",
] as const;

export const chooseCoffeeShop = [
  "You enjoy daily customer interaction",
  "You want recurring daily customers",
  "You value lifestyle balance (5 AM–3 PM)",
  "You prefer simpler beverage-focused production",
] as const;

export const chooseBakery = [
  "You love baking and product creation",
  "You want wholesale revenue opportunities",
  "You enjoy custom orders and celebrations",
  "You want lower startup capital requirements",
] as const;

export const calculators = [
  { label: "Coffee Shop Profit Margin Calculator", href: "/calculators/coffee-shop-profit-margin/" },
  { label: "Bakery Profit Margin Calculator", href: "/calculators/bakery-profit-margin/" },
  { label: "Coffee Shop Valuation Calculator", href: "/calculators/coffee-shop-valuation/" },
  { label: "Bakery Valuation Calculator", href: "/calculators/bakery-valuation/" },
  { label: "Coffee Shop Break-Even Calculator", href: "/calculators/coffee-shop-break-even/" },
] as const;

export const relatedComparisons = [
  { label: "Restaurant vs Coffee Shop", href: "/industries/comparisons/restaurant-vs-coffee-shop/" },
  { label: "Restaurant vs Bakery", href: "/comparisons/restaurant-vs-bakery/" },
  { label: "Bakery vs Food Truck", href: "/compare/bakery-vs-food-truck/" },
  { label: "Bakery vs Home Bakery", href: "/compare/bakery-vs-home-bakery/" },
  { label: "Bakery vs Fast Casual", href: "/compare/bakery-vs-fast-casual/" },
  { label: "Food Truck vs Coffee Shop", href: "/comparisons/coffee-shop-vs-food-truck/" },
] as const;

export const faqs = [
  {
    question: "Is a coffee shop more profitable than a bakery?",
    answer:
      "Coffee shops often achieve slightly higher net margins on average (10–18% vs. 8–18% for bakeries) due to high-margin beverage sales. However, absolute profit depends on revenue — median coffee shop revenue is $550K vs. $450K for bakeries. A cafe at 13% margin earns $71K; a bakery at 12% earns $54K.",
  },
  {
    question: "Which costs less to start?",
    answer:
      "Bakeries typically cost less: $50K–$300K vs. $80K–$400K for coffee shops. A home-style bakery or small retail shop can open under $100K. Coffee shops with drive-thru or premium buildouts push toward $250K–$400K.",
  },
  {
    question: "Which business is easier to run?",
    answer:
      "Coffee shops are generally easier to operate: simpler production (beverages vs. batch baking), more predictable daily routines, and shorter hours (5 AM–3 PM vs. 3 AM–2 PM for bakeries). Bakeries face more complex production schedules and custom order deadlines.",
  },
  {
    question: "Can bakeries make more money than coffee shops?",
    answer:
      "Coffee shops make more total revenue on average ($550K median vs. $450K). However, bakeries with strong wholesale programs and custom cake businesses can reach $700K–$900K. Multi-cafe owners scale further than most bakery operators.",
  },
  {
    question: "Which has better margins?",
    answer:
      "Coffee shops have a slight edge on net margins (10–18% vs. 8–18%) due to 70%+ gross margins on beverages. Bakeries win on premium products — wedding cakes carry 60–75% gross margins. Wholesale bakery volume runs at lower margins but improves efficiency.",
  },
  {
    question: "Which scales better?",
    answer:
      "Coffee shops scale more predictably through multi-unit cafes and drive-thru formats. Franchise and chain models are well-established. Bakeries can scale via wholesale commissaries and regional brands, but production complexity and recipe consistency create bottlenecks.",
  },
] as const;

export type DecisionInputs = {
  budget: "under100k" | "100k-250k" | "250k+";
  experience: "coffee" | "baking" | "business" | "none";
  businessStyle: "community" | "creative" | "growth" | "lifestyle";
  workSchedule: "early-morning" | "flexible" | "long-hours";
};

export function getRecommendation(inputs: DecisionInputs): "Coffee Shop" | "Bakery" {
  let coffeeShopScore = 0;
  let bakeryScore = 0;

  if (inputs.budget === "under100k") bakeryScore += 2;
  else if (inputs.budget === "100k-250k") {
    coffeeShopScore += 1;
    bakeryScore += 1;
  } else coffeeShopScore += 2;

  if (inputs.experience === "baking") bakeryScore += 3;
  else if (inputs.experience === "coffee") coffeeShopScore += 3;
  else if (inputs.experience === "business") {
    coffeeShopScore += 1;
    bakeryScore += 1;
  }

  if (inputs.businessStyle === "community" || inputs.businessStyle === "lifestyle")
    coffeeShopScore += 2;
  else if (inputs.businessStyle === "creative") bakeryScore += 2;
  else if (inputs.businessStyle === "growth") coffeeShopScore += 2;

  if (inputs.workSchedule === "early-morning") bakeryScore += 1;
  else if (inputs.workSchedule === "flexible") coffeeShopScore += 2;
  else if (inputs.workSchedule === "long-hours") coffeeShopScore += 1;

  return coffeeShopScore >= bakeryScore ? "Coffee Shop" : "Bakery";
}
