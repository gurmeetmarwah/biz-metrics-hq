export const comparisonMeta = {
  slug: "bakery-vs-fast-casual" as const,
  title: "Bakery vs Fast Casual",
  subtitle:
    "Compare startup costs, revenue, profit margins, owner income, staffing requirements and scalability to determine which food business model fits your goals.",
  dataVintage: "2025–2026",
};

export const comparisonLabels = {
  bakery: "Bakery",
  competitor: "Fast Casual",
  breadcrumbHub: {
    label: "Bakery",
    href: "/industries/food-beverage/bakery/",
  },
  exploreBakery: {
    label: "Explore Bakery Hub →",
    href: "/industries/food-beverage/bakery/",
  },
  exploreCompetitor: {
    label: "Explore Fast Casual Economics →",
    href: "/industries/restaurant-types/fast-casual/",
  },
} as const;

export const decisionSnapshot = [
  { factor: "Lower Startup Cost", winner: "Bakery" as const },
  { factor: "Higher Revenue Potential", winner: "Fast Casual" as const },
  { factor: "Simpler Operations", winner: "Bakery" as const },
  { factor: "Easier Staffing", winner: "Bakery" as const },
  { factor: "Faster Multi-Unit Growth", winner: "Fast Casual" as const },
  { factor: "Wholesale & B2B Revenue", winner: "Bakery" as const },
] as const;

export const kpiComparison = [
  { metric: "Startup Cost", bakery: "$50K – $300K", competitor: "$400K – $900K" },
  { metric: "Revenue (median)", bakery: "$450K", competitor: "$1.4M" },
  { metric: "Profit Margin", bakery: "8 – 18%", competitor: "8 – 15%" },
  { metric: "Owner Salary (median)", bakery: "$70K", competitor: "$120K" },
  { metric: "Employees", bakery: "3 – 10", competitor: "18 – 35" },
  { metric: "Avg Ticket", bakery: "$12 – $35", competitor: "$12 – $18" },
  { metric: "Valuation Multiple", bakery: "2.8x SDE", competitor: "3.2x SDE" },
] as const;

export const visualScorecard = [
  { label: "Startup Cost", bakery: 10, competitor: 4 },
  { label: "Revenue Potential", bakery: 6, competitor: 10 },
  { label: "Operational Simplicity", bakery: 9, competitor: 5 },
  { label: "Scalability", bakery: 7, competitor: 10 },
  { label: "Lifestyle Balance", bakery: 8, competitor: 5 },
  { label: "Capital Efficiency", bakery: 9, competitor: 5 },
] as const;

export const bakeryStartupItems = [
  { item: "Ovens & Mixers", percent: 28 },
  { item: "Display Cases", percent: 18 },
  { item: "Refrigeration", percent: 15 },
  { item: "Lease Improvements", percent: 25 },
  { item: "Initial Inventory", percent: 14 },
] as const;

export const competitorStartupItems = [
  { item: "Kitchen Equipment", percent: 28 },
  { item: "Ventilation & Hood", percent: 22 },
  { item: "Buildout", percent: 32 },
  { item: "Furniture & Fixtures", percent: 10 },
  { item: "Initial Inventory", percent: 8 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", bakery: "$38K – $120K", competitor: "$80K – $150K" },
  { category: "Buildout", bakery: "$30K – $120K", competitor: "$200K – $450K" },
  { category: "Inventory", bakery: "$3K – $10K", competitor: "$10K – $25K" },
  { category: "Working Capital", bakery: "$15K – $40K", competitor: "$75K – $150K" },
] as const;

export const bakeryRevenueDist = {
  bottom: "$280K",
  median: "$450K",
  top: "$750K",
};

export const competitorRevenueDist = {
  bottom: "$900K",
  median: "$1.4M",
  top: "$1.8M",
};

export const bakeryRevenueDrivers = [
  "Daily walk-in orders and repeat customers",
  "Custom cakes and celebration orders",
  "Wholesale accounts and B2B volume",
  "Seasonal demand and holiday peaks",
] as const;

export const competitorRevenueDrivers = [
  "Lunch traffic and office-district volume",
  "Dinner traffic and family meals",
  "Delivery and digital ordering sales",
  "Catering and corporate accounts",
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
    volume: 320,
    averageValue: 14,
    dailyRevenue: 4480,
  },
};

export const marginTiers = {
  bakery: { weak: "3–5%", average: "8–12%", strong: "13–18%" },
  competitor: { weak: "4–6%", average: "8–12%", strong: "13–15%" },
};

export const costStructureComparison = [
  { expense: "Ingredients", bakery: "25 – 32%", competitor: "28 – 32%" },
  { expense: "Labor", bakery: "28 – 36%", competitor: "26 – 30%" },
  { expense: "Rent", bakery: "7 – 11%", competitor: "6 – 9%" },
  { expense: "Packaging", bakery: "2 – 4%", competitor: "1 – 2%" },
  { expense: "Marketing", bakery: "2 – 5%", competitor: "2 – 4%" },
] as const;

export const bakeryRevenueMix = [
  { label: "Bread", percent: 28 },
  { label: "Pastries", percent: 22 },
  { label: "Cookies", percent: 10 },
  { label: "Custom Cakes", percent: 32 },
  { label: "Wholesale", percent: 8 },
] as const;

export const competitorRevenueMix = [
  { label: "Meals", percent: 52 },
  { label: "Combos", percent: 18 },
  { label: "Drinks", percent: 15 },
  { label: "Delivery", percent: 15 },
] as const;

export const profitPotentialComparison = [
  { stream: "Core Product", bakery: "Moderate (daily bread)", competitor: "Moderate (bowls, burritos)" },
  { stream: "Premium Product", bakery: "Excellent (wedding cakes)", competitor: "Good (premium proteins)" },
  { stream: "Recurring Revenue", bakery: "Strong (wholesale B2B)", competitor: "Strong (loyalty & delivery)" },
] as const;

export const ownerIncomeComparison = [
  { model: "Bakery Owner", earnings: "$50K – $95K", type: "bakery" as const },
  { model: "Fast Casual Owner", earnings: "$90K – $140K", type: "competitor" as const },
  { model: "Multi-Bakery Owner", earnings: "$120K – $220K+", type: "bakery" as const },
  { model: "Multi-Unit Fast Casual", earnings: "$180K – $350K+", type: "competitor" as const },
] as const;

export const workloadComparison = [
  {
    factor: "Staffing Complexity",
    bakery: "3 – 10 employees, production + counter",
    competitor: "18 – 35 employees, kitchen line + FOH",
  },
  {
    factor: "Production Complexity",
    bakery: "Moderate — batch baking, custom cakes",
    competitor: "Higher — live kitchen line, food safety, speed",
  },
  {
    factor: "Customer Service",
    bakery: "Moderate — counter, pre-orders, pickups",
    competitor: "High — high-volume counter, digital orders, complaints",
  },
  {
    factor: "Inventory Management",
    bakery: "Moderate — flour, perishables, seasonal SKUs",
    competitor: "High — proteins, produce, sauces, daily prep",
  },
  {
    factor: "Operational Stress",
    bakery: "Moderate — early production, order deadlines",
    competitor: "Higher — lunch/dinner peaks, larger team coordination",
  },
] as const;

export const workdayTimeline = {
  bakery: { start: "3 AM", end: "2 PM", label: "Bakery Owner" },
  competitor: { start: "10 AM", end: "9 PM", label: "Fast Casual Owner" },
};

export const breakEvenComparison = [
  { metric: "Revenue Needed (monthly)", bakery: "$32K – $42K", competitor: "$75K – $95K" },
  { metric: "Customers/Orders Needed (daily)", bakery: "55 – 70/day", competitor: "110 – 140/day" },
  { metric: "Months To Break-Even", bakery: "12 – 18 months", competitor: "18 – 24 months" },
] as const;

export const breakEvenExamples = {
  bakery: { volumePerDay: 60, unit: "orders/day", label: "Bakery" },
  competitor: { volumePerDay: 120, unit: "customers/day", label: "Fast Casual" },
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
  "Bakeries can diversify revenue through wholesale B2B accounts — supplying coffee shops, restaurants, and grocers with bread and pastries at lower margins but higher volume efficiency. Fast casual restaurants focus almost entirely on direct consumer meal sales, with catering and delivery as secondary channels. A bakery with 20–30% wholesale revenue often stabilizes cash flow; fast casual operators must drive daily foot traffic and digital orders to hit $1M+ revenue targets.";

export const valuationComparison = [
  { metric: "Revenue Multiple", bakery: "0.4x – 0.7x", competitor: "0.4x – 0.7x" },
  { metric: "SDE Multiple", bakery: "2.0x – 3.2x", competitor: "2.5x – 4.0x" },
  { metric: "Saleability", bakery: "Moderate — recipe & owner dependent", competitor: "Strong — scalable counter-service model" },
] as const;

export const valuationExamples = {
  bakery: { revenue: "$450K", value: "$280K", note: "~2.8x SDE on $100K SDE" },
  competitor: { revenue: "$1.2M", value: "$700K", note: "~3.2x SDE on $220K SDE" },
};

export const scalingLadder = {
  bakery: ["1 Bakery", "Wholesale", "2 Locations", "Regional Brand"],
  competitor: ["1 Location", "3 Locations", "10 Locations", "Regional Brand"],
};

export const chooseBakery = [
  "You want lower startup capital under $300K",
  "You love baking and product creation",
  "You want wholesale and B2B revenue streams",
  "You prefer smaller teams and earlier hours",
  "You value lifestyle balance over maximum scale",
] as const;

export const chooseCompetitor = [
  "You want maximum revenue potential",
  "You can manage larger teams (18–35 staff)",
  "You have $400K+ in startup capital",
  "You plan to scale multiple locations",
  "You want higher owner income at scale",
] as const;

export const calculators = [
  { label: "Bakery Profit Margin Calculator", href: "/calculators/bakery-profit-margin/" },
  { label: "Bakery Valuation Calculator", href: "/calculators/bakery-valuation/" },
  { label: "Bakery Break-Even Calculator", href: "/calculators/bakery-break-even/" },
  { label: "Restaurant Profit Margin Calculator", href: "/industries/restaurant/profit-margin-calculator/" },
  { label: "Restaurant Valuation Calculator", href: "/industries/restaurant/valuation/" },
  { label: "Restaurant Break-Even Calculator", href: "/calculators/restaurant-break-even/" },
] as const;

export const relatedComparisons = [
  { label: "Bakery vs Coffee Shop", href: "/comparisons/coffee-shop-vs-bakery/" },
  { label: "Bakery vs Food Truck", href: "/compare/bakery-vs-food-truck/" },
  { label: "Bakery vs Home Bakery", href: "/compare/bakery-vs-home-bakery/" },
  { label: "Coffee Shop vs Fast Casual", href: "/comparisons/coffee-shop-vs-fast-casual/" },
  { label: "Restaurant vs Bakery", href: "/comparisons/restaurant-vs-bakery/" },
  { label: "Fast Casual vs Fine Dining", comingSoon: true },
] as const;

export const faqs = [
  {
    question: "Is a bakery more profitable than a fast casual restaurant?",
    answer:
      "Bakeries often achieve similar or slightly higher net margins (8–18% vs. 8–15% for fast casual) on a smaller revenue base. A bakery at 12% margin on $450K revenue earns ~$54K profit; a fast casual at 10% on $1.4M earns ~$140K. Fast casual wins on absolute profit dollars; bakeries win on capital efficiency per dollar invested.",
  },
  {
    question: "Which costs less to start?",
    answer:
      "Bakeries cost significantly less: $50K–$300K typical vs. $400K–$900K for fast casual. A retail bakery can open for under $150K with used equipment. Fast casual requires full kitchen buildout, ventilation, dining area, and $75K–$150K working capital before opening day.",
  },
  {
    question: "Which business is easier to run?",
    answer:
      "Bakeries are easier to operate: smaller teams (3–10 vs. 18–35), batch production instead of live kitchen lines, and earlier hours (3 AM–2 PM vs. 10 AM–9 PM). Fast casual requires coordinating larger staff, managing lunch and dinner peaks, and maintaining food safety across a full menu.",
  },
  {
    question: "Can a bakery make more money than a fast casual restaurant?",
    answer:
      "Rarely at the single-unit level. Fast casual median revenue is $1.4M vs. $450K for bakeries — roughly 3x higher. However, bakeries with strong wholesale programs and custom cake businesses can reach $700K–$900K. Multi-unit fast casual owners scale further ($180K–$350K+ owner income vs. $120K–$220K for multi-bakery operators).",
  },
  {
    question: "Which has better margins?",
    answer:
      "Bakeries have a slight edge on net margin range (8–18% vs. 8–15%) due to batch production efficiency and premium custom order margins. Fast casual wins on volume — higher daily customer counts and average tickets drive more total profit dollars even at similar margin percentages.",
  },
  {
    question: "Which scales better?",
    answer:
      "Fast casual scales more predictably through multi-unit expansion, standardized menus, and franchise models. Bakery scaling is limited by production complexity, recipe consistency, and early-morning labor requirements. Fast casual brands like Chipotle and CAVA demonstrate clear multi-location playbooks; bakery regional chains are less common.",
  },
] as const;

export type DecisionInputs = {
  budget: "under50k" | "50k-150k" | "150k-300k" | "300k+";
  experience: "baking" | "food-service" | "business" | "none";
  goal: "wholesale" | "lifestyle" | "scale" | "low-capital";
};

export function getRecommendation(inputs: DecisionInputs): "Bakery" | "Fast Casual" {
  let bakeryScore = 0;
  let competitorScore = 0;

  if (inputs.budget === "under50k" || inputs.budget === "50k-150k") bakeryScore += 3;
  else if (inputs.budget === "150k-300k") bakeryScore += 2;
  else competitorScore += 3;

  if (inputs.experience === "baking") bakeryScore += 3;
  else if (inputs.experience === "food-service") competitorScore += 3;
  else if (inputs.experience === "business") {
    bakeryScore += 1;
    competitorScore += 1;
  }

  if (inputs.goal === "wholesale" || inputs.goal === "lifestyle" || inputs.goal === "low-capital")
    bakeryScore += 3;
  else if (inputs.goal === "scale") competitorScore += 3;

  return bakeryScore >= competitorScore ? "Bakery" : "Fast Casual";
}

export const decisionToolCopy = {
  bakery:
    "Lower capital requirements, wholesale revenue, and lifestyle-friendly hours fit your profile — focus on product quality and B2B accounts.",
  competitor:
    "Higher revenue potential and multi-unit scalability align with your goals — plan for $400K+ capital and a larger team.",
} as const;
