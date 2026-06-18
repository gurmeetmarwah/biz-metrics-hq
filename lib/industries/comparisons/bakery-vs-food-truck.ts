export const comparisonMeta = {
  slug: "bakery-vs-food-truck" as const,
  title: "Bakery vs Food Truck",
  subtitle:
    "Compare startup costs, revenue, profit margins, owner income, wholesale opportunities, mobility and valuation to determine which business is right for you.",
  dataVintage: "2025–2026",
};

export const comparisonLabels = {
  bakery: "Bakery",
  competitor: "Food Truck",
  breadcrumbHub: {
    label: "Bakery",
    href: "/industries/food-beverage/bakery/",
  },
  exploreBakery: {
    label: "Explore Bakery Hub →",
    href: "/industries/food-beverage/bakery/",
  },
  exploreCompetitor: {
    label: "Explore Food Truck Hub →",
    href: "/industries/food-beverage/food-truck/",
  },
} as const;

export const decisionSnapshot = [
  { factor: "Lower Startup Cost", winner: "Food Truck" as const },
  { factor: "Higher Revenue Potential", winner: "Bakery" as const },
  { factor: "Wholesale & B2B Revenue", winner: "Bakery" as const },
  { factor: "Lifestyle Flexibility", winner: "Food Truck" as const },
  { factor: "Faster Break-Even", winner: "Food Truck" as const },
  { factor: "Better Exit Valuation", winner: "Bakery" as const },
] as const;

export const kpiComparison = [
  { metric: "Startup Cost", bakery: "$50K – $300K", competitor: "$60K – $150K" },
  { metric: "Revenue (median)", bakery: "$450K", competitor: "$280K" },
  { metric: "Profit Margin", bakery: "8 – 18%", competitor: "12 – 18%" },
  { metric: "Owner Salary (median)", bakery: "$70K", competitor: "$75K" },
  { metric: "Employees", bakery: "3 – 10", competitor: "2 – 6" },
  { metric: "Avg Order Value", bakery: "$12 – $35", competitor: "$10 – $18" },
  { metric: "Valuation Multiple", bakery: "2.8x SDE", competitor: "2.25x SDE" },
] as const;

export const visualScorecard = [
  { label: "Revenue Potential", bakery: 8, competitor: 6 },
  { label: "Operational Complexity", bakery: 6, competitor: 5 },
  { label: "Lifestyle Flexibility", bakery: 5, competitor: 9 },
  { label: "Scalability", bakery: 7, competitor: 6 },
] as const;

export const bakeryStartupItems = [
  { item: "Ovens & Mixers", percent: 28 },
  { item: "Display Cases", percent: 18 },
  { item: "Refrigeration", percent: 15 },
  { item: "Lease Improvements", percent: 25 },
  { item: "Initial Inventory", percent: 14 },
] as const;

export const competitorStartupItems = [
  { item: "Truck Purchase", percent: 45 },
  { item: "Kitchen Equipment", percent: 25 },
  { item: "Permits & Licenses", percent: 10 },
  { item: "Branding & Wrap", percent: 10 },
  { item: "Initial Inventory", percent: 10 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", bakery: "$38K – $120K", competitor: "$15K – $40K" },
  { category: "Buildout / Vehicle", bakery: "$30K – $120K", competitor: "$25K – $80K" },
  { category: "Inventory", bakery: "$3K – $10K", competitor: "$3K – $8K" },
  { category: "Permits", bakery: "$5K – $15K", competitor: "$3K – $8K" },
  { category: "Working Capital", bakery: "$15K – $40K", competitor: "$10K – $25K" },
] as const;

export const bakeryRevenueDist = {
  bottom: "$280K",
  median: "$450K",
  top: "$750K",
};

export const competitorRevenueDist = {
  bottom: "$180K",
  median: "$280K",
  top: "$450K",
};

export const bakeryRevenueDrivers = [
  "Daily walk-in orders and repeat customers",
  "Custom cakes and celebration orders",
  "Wholesale accounts and corporate catering",
  "Seasonal demand and holiday peaks",
] as const;

export const competitorRevenueDrivers = [
  "Events, festivals, and private bookings",
  "High-traffic street locations and rotations",
  "Corporate catering and recurring contracts",
  "Social media and route consistency",
] as const;

export const dailyEconomics = {
  bakery: {
    label: "Orders Per Day",
    volume: 60,
    averageValue: 25,
    dailyRevenue: 1500,
  },
  competitor: {
    label: "Customers Per Day",
    volume: 85,
    averageValue: 14,
    dailyRevenue: 1190,
  },
};

export const marginTiers = {
  bakery: { weak: "3–5%", average: "8–12%", strong: "13–18%" },
  competitor: { weak: "4–6%", average: "8–12%", strong: "13–18%" },
};

export const costStructureComparison = [
  { expense: "Ingredients", bakery: "25 – 32%", competitor: "28 – 35%" },
  { expense: "Labor", bakery: "28 – 36%", competitor: "20 – 28%" },
  { expense: "Rent", bakery: "7 – 11%", competitor: "0 – 2%" },
  { expense: "Fuel / Vehicle", bakery: "N/A", competitor: "3 – 6%" },
  { expense: "Marketing", bakery: "2 – 5%", competitor: "2 – 5%" },
] as const;

export const bakeryRevenueMix = [
  { label: "Bread", percent: 28 },
  { label: "Pastries", percent: 22 },
  { label: "Cookies", percent: 10 },
  { label: "Custom Cakes", percent: 32 },
  { label: "Wholesale", percent: 8 },
] as const;

export const competitorRevenueMix = [
  { label: "Street Sales", percent: 42 },
  { label: "Events & Festivals", percent: 28 },
  { label: "Catering", percent: 18 },
  { label: "Pre-Orders", percent: 12 },
] as const;

export const profitPotentialComparison = [
  { stream: "Core Product", bakery: "Moderate margins (bread, pastries)", competitor: "Moderate (daily menu items)" },
  { stream: "Premium Product", bakery: "Excellent (wedding cakes)", competitor: "Good (event catering)" },
  { stream: "Recurring Revenue", bakery: "Strong (wholesale B2B)", competitor: "Moderate (corporate contracts)" },
] as const;

export const ownerIncomeComparison = [
  {
    model: "Bakery Owner",
    earnings: "$50K – $95K",
    type: "bakery" as const,
  },
  {
    model: "Food Truck Owner",
    earnings: "$55K – $95K",
    type: "competitor" as const,
  },
  {
    model: "Multi-Bakery Owner",
    earnings: "$120K – $220K+",
    type: "bakery" as const,
  },
  {
    model: "Multi-Truck Owner",
    earnings: "$120K – $200K+",
    type: "competitor" as const,
  },
] as const;

export const workloadComparison = [
  {
    factor: "Staffing Complexity",
    bakery: "3 – 10 employees, production + counter",
    competitor: "2 – 6 employees, often owner-operated",
  },
  {
    factor: "Inventory Complexity",
    bakery: "Moderate — flour, dairy, seasonal ingredients",
    competitor: "Compact — daily prep, limited menu",
  },
  {
    factor: "Customer Service",
    bakery: "Counter service, pre-orders, pickup windows",
    competitor: "Walk-up sales, event logistics, social engagement",
  },
  {
    factor: "Production Complexity",
    bakery: "Moderate — batch production, custom cake deadlines",
    competitor: "Moderate — compact kitchen, event-driven volume",
  },
  {
    factor: "Operational Stress",
    bakery: "Moderate — early morning production peaks",
    competitor: "Moderate — route planning, weather, permit access",
  },
] as const;

export const workdayTimeline = {
  bakery: { start: "3 AM", end: "2 PM", label: "Bakery Owner" },
  competitor: { start: "9 AM", end: "8 PM", label: "Food Truck Owner" },
};

export const breakEvenComparison = [
  { metric: "Revenue Needed (monthly)", bakery: "$32K – $42K", competitor: "$18K – $28K" },
  { metric: "Customers/Orders Needed (daily)", bakery: "55 – 70/day", competitor: "65 – 90/day" },
  { metric: "Months To Break-Even", bakery: "12 – 18 months", competitor: "8 – 14 months" },
] as const;

export const breakEvenExamples = {
  bakery: { volumePerDay: 60, unit: "orders/day", label: "Bakery" },
  competitor: { volumePerDay: 80, unit: "customers/day", label: "Food Truck" },
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

export const wholesaleInsight =
  "Bakeries build predictable off-peak revenue through wholesale and corporate accounts — production runs even when the counter is quiet. Food trucks capture event and festival spikes instead, but revenue follows bookings and route access rather than recurring B2B contracts. A bakery with strong wholesale can smooth seasonality; a truck with diversified events reduces location dependency.";

export const valuationComparison = [
  { metric: "Revenue Multiple", bakery: "0.4x – 0.7x", competitor: "0.4x – 0.7x" },
  { metric: "SDE Multiple", bakery: "2.0x – 3.2x", competitor: "1.8x – 2.8x" },
  { metric: "Saleability", bakery: "Moderate — recipe & owner dependent", competitor: "Moderate — owner & route dependent" },
] as const;

export const valuationExamples = {
  bakery: { revenue: "$450K", value: "$300K", note: "~3.0x SDE on $100K SDE" },
  competitor: { revenue: "$280K", value: "$180K", note: "~2.25x SDE on $80K SDE" },
};

export const scalingLadder = {
  bakery: ["1 Bakery", "Wholesale", "2 Locations", "Regional Brand"],
  competitor: ["1 Truck", "2 Trucks", "Fleet", "Catering Business"],
};

export const chooseBakery = [
  "Want higher revenue potential with a fixed retail location",
  "Strong baking expertise or passion for product creation",
  "Interest in wholesale, B2B, and custom cake revenue",
  "Prefer predictable daily foot traffic over event bookings",
  "Value higher exit multiples and transferable recipes",
] as const;

export const chooseCompetitor = [
  "Have limited startup capital under $150K",
  "Enjoy mobility, events, and route-based selling",
  "Want faster market entry without a lease commitment",
  "Prefer lean staffing with 2–6 employees",
  "Plan to test a concept before opening a brick-and-mortar bakery",
] as const;

export const calculators = [
  {
    label: "Bakery Profit Margin Calculator",
    href: "/calculators/bakery-profit-margin/",
  },
  {
    label: "Bakery Valuation Calculator",
    href: "/calculators/bakery-valuation/",
  },
  {
    label: "Bakery Break-Even Calculator",
    href: "/calculators/bakery-break-even/",
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
    label: "Food Truck Break-Even Calculator",
    href: "/calculators/food-truck-break-even/",
  },
] as const;

export const relatedComparisons = [
  { label: "Bakery vs Coffee Shop", href: "/comparisons/coffee-shop-vs-bakery/" },
  { label: "Bakery vs Restaurant", href: "/comparisons/restaurant-vs-bakery/" },
  { label: "Coffee Shop vs Food Truck", href: "/comparisons/coffee-shop-vs-food-truck/" },
  { label: "Restaurant vs Food Truck", href: "/industries/comparisons/restaurant-vs-food-truck/" },
  { label: "Bakery vs Home Bakery", href: "/compare/bakery-vs-home-bakery/" },
  { label: "Food Truck vs Catering", href: "/compare/food-truck-vs-catering/" },
] as const;

export const faqs = [
  {
    question: "Is a bakery more profitable than a food truck?",
    answer:
      "Bakeries often generate more absolute profit because median revenue is $450K vs. $280K for food trucks. A bakery at 12% margin earns ~$54K; a truck at 14% earns ~$39K. Food trucks can match or beat bakery margins percentage-wise (12–18% vs. 8–18%) but on a smaller revenue base with lower fixed overhead.",
  },
  {
    question: "Which costs less to start?",
    answer:
      "Food trucks typically cost less for a standard launch: $60K–$150K vs. $50K–$300K for bakeries. A small bakery can open under $100K with used equipment, but a full retail buildout pushes toward $200K–$300K. A used food truck or basic buildout often launches under $80K.",
  },
  {
    question: "Which is easier to operate?",
    answer:
      "Food trucks are simpler at small scale — leaner teams (2–6 vs. 3–10), no rent, and a compact menu. Bakeries require batch production schedules, custom order deadlines, and earlier hours (3 AM–2 PM vs. 9 AM–8 PM for trucks). Trucks add route planning, permits, and event logistics that bakeries avoid.",
  },
  {
    question: "Can a food truck make more money than a bakery?",
    answer:
      "Rarely at the single-unit level. Bakery median revenue is $450K vs. $280K for food trucks. Top trucks at festivals and with strong catering can reach $400K–$450K, but bakeries with wholesale and custom cakes routinely hit $600K–$750K. Multi-bakery owners also scale further than most truck fleets.",
  },
  {
    question: "What are typical bakery margins?",
    answer:
      "Independent bakeries average 8–12% net profit margin, with strong performers reaching 13–18%. Custom cakes and wedding orders carry 60–75% gross margins. Wholesale accounts add volume at slightly lower margins but improve production efficiency and reduce marketing costs.",
  },
  {
    question: "What are typical food truck margins?",
    answer:
      "Well-run food trucks achieve 12–18% net profit margins due to no rent and lean staffing. Street sales run thinner; event and catering revenue at 20–30% margins boosts overall profitability. Labor and food cost management are the biggest margin levers — trucks with 30%+ food cost rarely exceed 12% net margin.",
  },
] as const;

export type DecisionInputs = {
  budget: "under50k" | "50k-150k" | "150k-300k" | "300k+";
  experience: "baking" | "food-service" | "business" | "none";
  goal: "wholesale" | "lifestyle" | "scale" | "low-capital";
};

export function getRecommendation(inputs: DecisionInputs): "Bakery" | "Food Truck" {
  let bakeryScore = 0;
  let competitorScore = 0;

  if (inputs.budget === "under50k" || inputs.budget === "50k-150k") competitorScore += 2;
  else if (inputs.budget === "150k-300k") {
    bakeryScore += 1;
    competitorScore += 1;
  } else bakeryScore += 2;

  if (inputs.experience === "baking") bakeryScore += 3;
  else if (inputs.experience === "food-service") competitorScore += 3;
  else if (inputs.experience === "business") {
    bakeryScore += 1;
    competitorScore += 1;
  }

  if (inputs.goal === "wholesale" || inputs.goal === "scale") bakeryScore += 2;
  else if (inputs.goal === "lifestyle") competitorScore += 2;
  else if (inputs.goal === "low-capital") competitorScore += 3;

  return bakeryScore >= competitorScore ? "Bakery" : "Food Truck";
}

export const decisionToolCopy = {
  bakery:
    "Fixed-location revenue, wholesale channels, and custom orders fit your profile — build retail and B2B volume from a bakery base.",
  competitor:
    "Lower capital, mobility, and event-driven revenue align with your goals — launch a truck to test demand before committing to a lease.",
} as const;
