export const coffeeShopMeta = {
  slug: "coffee-shop",
  name: "Coffee Shop",
  title: "Coffee Shop Economics",
  subtitle:
    "Revenue, profit margins, owner income, startup costs and valuation benchmarks for coffee shops and cafes.",
  dataVintage: "2025–2026",
  sampleSize: "290+ coffee shops & cafes",
  geography: "United States",
};

export const coffeeShopKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$550K",
    sublabel: "median",
    href: "#revenue",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Margin",
    value: "10–18%",
    sublabel: "net range",
    href: "#profit-margins",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Pay",
    value: "$85K",
    sublabel: "median",
    href: "#owner-salary",
    accent: "metric-salary",
  },
  {
    id: "startup",
    label: "Startup Cost",
    value: "$80K–$400K",
    sublabel: "typical range",
    href: "#startup",
    accent: "metric-valuation",
  },
] as const;

export const businessScorecard = {
  industryName: "Coffee Shop",
  items: [
    { label: "Profitability", rating: 3 },
    { label: "Scalability", rating: 4 },
    { label: "Startup Difficulty", rating: 2, higherIsWorse: true },
    { label: "Recurring Revenue", rating: 3 },
    { label: "Recession Resistance", rating: 3 },
  ],
} as const;

export const heroExamples = [
  { label: "Independent Cafe", href: "#daily-economics" },
  { label: "Drive-Thru Coffee", href: "#drive-thru" },
  { label: "Neighborhood Coffee Shop", href: "#daily-economics" },
  { label: "Specialty Coffee Roaster", href: "#daily-economics" },
] as const;

export const quickSummary = [
  { metric: "Revenue", value: "$350K – $850K" },
  { metric: "Profit Margin", value: "8 – 18%" },
  { metric: "Owner Salary", value: "$60K – $110K" },
  { metric: "Startup Cost", value: "$80K – $400K" },
  { metric: "Avg Ticket", value: "$6 – $12" },
  { metric: "Customers Per Day", value: "200 – 500" },
  { metric: "Employees", value: "4 – 12" },
] as const;

export const businessModelFlow = [
  { label: "Customers", value: "200 – 500/day" },
  { label: "Average Ticket", value: "$6 – $12" },
  { label: "Revenue", value: "$350K – $850K" },
  { label: "Coffee Cost", value: "18 – 25%" },
  { label: "Labor", value: "28 – 35%" },
  { label: "Rent", value: "8 – 12%" },
  { label: "Profit", value: "10 – 18% net" },
] as const;

export const revenueDistribution = {
  bottom25: "$350K",
  median: "$550K",
  top25: "$850K",
};

export const revenueByConcept = [
  { type: "Neighborhood Cafe", revenue: "$400K – $650K" },
  { type: "Drive-Thru", revenue: "$550K – $900K" },
  { type: "Premium Specialty Cafe", revenue: "$500K – $800K" },
  { type: "Coffee Roastery", revenue: "$450K – $750K" },
  { type: "Multi-Location Cafe", revenue: "$1.2M – $2.5M" },
] as const;

export const revenueByLocation = [
  { type: "Downtown", revenue: "$550K – $850K" },
  { type: "Suburban", revenue: "$450K – $700K" },
  { type: "College Area", revenue: "$500K – $750K" },
  { type: "Transit Hub", revenue: "$600K – $950K" },
] as const;

export const dailyEconomicsExample = {
  customersPerDay: 280,
  averageTicket: 6.5,
  dailyRevenue: 1820,
  monthlyRevenue: 45500,
  daysOpenPerMonth: 25,
  daysOpenPerYear: 300,
  annualRevenue: 546000,
};

export const revenueMix = [
  { label: "Coffee", percent: 55, color: "var(--metric-salary)" },
  { label: "Food", percent: 18, color: "var(--metric-margin)" },
  { label: "Pastries", percent: 15, color: "var(--metric-valuation)" },
  { label: "Retail Beans", percent: 8, color: "var(--accent)" },
  { label: "Merchandise", percent: 4, color: "var(--metric-revenue)" },
] as const;

export const ticketBenchmarks = [
  { type: "Coffee Kiosk", ticket: "$4 – $7" },
  { type: "Standard Cafe", ticket: "$6 – $9" },
  { type: "Premium Specialty Cafe", ticket: "$9 – $14" },
] as const;

export const marginTiers = {
  weak: "4–6%",
  average: "8–12%",
  strong: "13–16%",
  elite: "17%+",
};

export const costStructure = [
  { category: "Coffee & Ingredients", percent: "18 – 25%" },
  { category: "Labor", percent: "28 – 35%" },
  { category: "Rent", percent: "8 – 12%" },
  { category: "Marketing", percent: "2 – 4%" },
  { category: "Other", percent: "10 – 15%" },
] as const;

export const profitDrivers = [
  {
    title: "Drive-Thru Sales",
    range: "+30–50% volume",
    description:
      "Drive-thru lanes capture commuter traffic with lower labor per transaction than full dine-in service.",
  },
  {
    title: "High Ticket Size",
    range: "$9+ avg",
    description:
      "Food programs, specialty drinks, and upsells push average ticket from $6 to $9+ without doubling traffic.",
  },
  {
    title: "Loyal Customers",
    range: "40%+ repeat",
    description:
      "Subscription programs and mobile ordering build predictable daily volume and reduce acquisition cost.",
  },
  {
    title: "Retail Bean Sales",
    range: "8–12% of revenue",
    description:
      "Bagged coffee and merchandise carry 50–65% margins and extend brand beyond the cafe footprint.",
  },
] as const;

export const ownerSalaryTiers = [
  {
    tier: "Owner-Operator",
    range: "$60K – $90K",
    description:
      "Single cafe, owner works bar shifts. Income blends modest salary with profit distributions.",
  },
  {
    tier: "Manager-Operated",
    range: "$80K – $110K",
    description:
      "Established cafe with GM in place. Owner focuses on marketing, vendor relationships, and growth.",
  },
  {
    tier: "Multi-Location Owner",
    range: "$150K – $280K+",
    description:
      "2–5 locations with district manager. Economies of scale on beans, equipment, and training.",
  },
] as const;

export const incomeDrivers = [
  "Location quality and foot traffic patterns",
  "Daily customer volume and daypart mix",
  "Average ticket size and food attach rate",
  "Food program breadth and drive-thru presence",
] as const;

export const startupCosts = [
  { item: "Lease Improvements", range: "$40K – $150K" },
  { item: "Espresso Equipment", range: "$25K – $80K" },
  { item: "Furniture & Fixtures", range: "$15K – $50K" },
  { item: "POS System", range: "$8K – $20K" },
  { item: "Initial Inventory", range: "$5K – $15K" },
  { item: "Working Capital", range: "$20K – $60K" },
] as const;

export const investmentLevels = {
  budget: "$80K",
  standard: "$200K",
  premium: "$400K",
};

export const driveThruComparison = [
  { metric: "Revenue", cafe: "$450K – $650K", driveThru: "$600K – $950K" },
  { metric: "Margin", cafe: "10 – 14%", driveThru: "14 – 20%" },
  { metric: "Labor Cost", cafe: "30 – 35%", driveThru: "22 – 28%" },
  { metric: "Ticket Size", cafe: "$6 – $8", driveThru: "$7 – $10" },
] as const;

export const valuationMultiples = [
  {
    label: "Revenue Multiple",
    range: "0.5x – 0.8x",
    median: "0.65x",
    note: "Used for high-volume cafes with transferable leases and strong morning traffic.",
  },
  {
    label: "SDE Multiple",
    range: "2.5x – 3.5x",
    median: "3.0x",
    note: "Standard for independent single-location coffee shops under $1M revenue.",
  },
  {
    label: "EBITDA Multiple",
    range: "3.5x – 5.0x",
    median: "4.2x",
    note: "Applied to multi-location operators with professional management.",
  },
] as const;

export const valuationExample = {
  revenue: "$600K",
  sde: "$120K",
  valuation: "$360K",
  multiple: "3.0x SDE",
};

export const menuEconomics = [
  { product: "Espresso", margin: "75 – 82%" },
  { product: "Latte", margin: "68 – 76%" },
  { product: "Cold Brew", margin: "72 – 80%" },
  { product: "Pastry", margin: "55 – 65%" },
  { product: "Sandwich", margin: "45 – 58%" },
] as const;

export const breakEvenDefaults = {
  monthlyFixedCosts: 12000,
  averageTicket: 6.5,
  contributionMarginPct: 55,
  operatingDaysPerMonth: 25,
};

export const benchmarkThresholds = {
  revenue: { low: 350000, median: 550000, high: 850000 },
  customersPerDay: { low: 200, median: 280, high: 450 },
  margin: { low: 8, median: 13, high: 18 },
};

export const successFactorDefaults = {
  customerVolume: 280,
  averageTicket: 6.5,
  foodSalesMixPct: 33,
  profitMarginPct: 13,
  laborCostPct: 32,
};

export const comparisons = [
  {
    label: "Coffee Shop vs Bakery",
    href: "/comparisons/coffee-shop-vs-bakery/",
  },
  {
    label: "Coffee Shop vs Food Truck",
    href: "/comparisons/coffee-shop-vs-food-truck/",
  },
  {
    label: "Coffee Shop vs Fast Casual",
    href: "/comparisons/coffee-shop-vs-fast-casual/",
  },
] as const;

export const calculators = [
  {
    label: "Coffee Shop Profit Margin Calculator",
    href: "/calculators/coffee-shop-profit-margin/",
  },
  {
    label: "Coffee Shop Break-Even Calculator",
    href: "/calculators/coffee-shop-break-even/",
  },
  {
    label: "Coffee Shop Startup Cost Calculator",
    href: "/calculators/coffee-shop-startup-cost/",
  },
  {
    label: "Coffee Shop Valuation Calculator",
    href: "/calculators/coffee-shop-valuation/",
  },
] as const;

export const sectionNav = [
  { id: "business-model", label: "Model" },
  { id: "revenue", label: "Revenue" },
  { id: "daily-economics", label: "Daily" },
  { id: "average-ticket", label: "Ticket" },
  { id: "profit-margins", label: "Margins" },
  { id: "owner-salary", label: "Owner Pay" },
  { id: "startup", label: "Startup" },
  { id: "drive-thru", label: "Drive-Thru" },
  { id: "valuation", label: "Valuation" },
  { id: "benchmark", label: "Benchmark" },
  { id: "menu-economics", label: "Menu" },
  { id: "comparisons", label: "Compare" },
  { id: "break-even", label: "Break-even" },
  { id: "calculators", label: "Tools" },
  { id: "scorecard", label: "Score" },
  { id: "faqs", label: "FAQs" },
] as const;

export const faqs = [
  {
    question: "How much revenue does a coffee shop make?",
    answer:
      "Independent coffee shops typically generate $350K–$850K annually, with a median around $550K. Drive-thru locations and transit hubs push toward $700K–$950K. Revenue is driven by daily customer count (200–500) multiplied by average ticket ($6–$12), with food and retail extending ticket size.",
  },
  {
    question: "Are coffee shops profitable?",
    answer:
      "Yes — well-run coffee shops achieve 10–18% net profit margins. Beverage-heavy models carry 70%+ gross margins on drinks, but labor and rent compress net profit. Shops with drive-thru, strong food programs, and retail bean sales consistently outperform neighborhood cafes on margin.",
  },
  {
    question: "How much do coffee shop owners earn?",
    answer:
      "Owner-operators typically earn $60K–$110K annually, with a median around $85K. Manager-operated single locations take $80K–$110K. Multi-location owners with 2–5 cafes can earn $150K–$280K+. Income depends heavily on whether the owner works behind the bar or manages remotely.",
  },
  {
    question: "What is a good coffee shop margin?",
    answer:
      "A healthy coffee shop net margin is 12–15%. Below 8% signals labor or rent burden. Top-quartile operators hit 16–18% through drive-thru volume, $9+ average tickets, and retail bean sales. Coffee COGS should stay under 25%; labor under 32% for manager-operated units.",
  },
  {
    question: "How much does it cost to open a coffee shop?",
    answer:
      "Total startup investment ranges from $80K (kiosk, used equipment) to $400K (premium buildout, drive-thru). Typical neighborhood cafe costs $150K–$250K including lease improvements ($40K–$150K), espresso equipment ($25K–$80K), furniture, POS, inventory, and 3–6 months working capital.",
  },
  {
    question: "How many customers does a coffee shop need daily?",
    answer:
      "Most coffee shops need 180–250 customers per day to break even, assuming a $6–$7 average ticket. At $6.50 average ticket and 55% contribution margin, 200 customers/day generates roughly $1,300 in daily revenue — enough to cover variable costs plus monthly fixed overhead across 25 operating days per month.",
  },
] as const;

export function calculateBreakEven(inputs: {
  monthlyFixedCosts: number;
  averageTicket: number;
  contributionMarginPct: number;
  operatingDaysPerMonth: number;
}) {
  const breakEvenRevenue =
    inputs.contributionMarginPct > 0
      ? inputs.monthlyFixedCosts / (inputs.contributionMarginPct / 100)
      : 0;

  const customersPerDay =
    inputs.averageTicket > 0 && inputs.operatingDaysPerMonth > 0
      ? breakEvenRevenue / inputs.operatingDaysPerMonth / inputs.averageTicket
      : 0;

  return {
    breakEvenRevenue,
    customersPerDay,
    averageTicketRequired: inputs.averageTicket,
  };
}

function scoreFactor(
  value: number,
  targets: { low: number; high: number },
  higherIsBetter = true
) {
  const v = higherIsBetter ? value : targets.high + targets.low - value;
  const low = higherIsBetter ? targets.low : targets.low;
  const high = higherIsBetter ? targets.high : targets.high;
  if (v >= high) return 95;
  if (v >= low) {
    const range = high - low || 1;
    return Math.round(68 + ((v - low) / range) * 22);
  }
  if (v >= low * 0.85) return 52;
  return 35;
}

export function calculateEconomicsScore(inputs: {
  customerVolume: number;
  averageTicket: number;
  foodSalesMixPct: number;
  profitMarginPct: number;
  laborCostPct: number;
}) {
  const scores = {
    customerVolume: scoreFactor(inputs.customerVolume, { low: 200, high: 420 }),
    averageTicket: scoreFactor(inputs.averageTicket, { low: 6, high: 11 }),
    foodSalesMix: scoreFactor(inputs.foodSalesMixPct, { low: 25, high: 40 }),
    profitMargin: scoreFactor(inputs.profitMarginPct, { low: 8, high: 17 }),
    laborCost: scoreFactor(inputs.laborCostPct, { low: 22, high: 32 }, false),
  };

  const overall = Math.round(
    Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length
  );

  return { scores, overall };
}
