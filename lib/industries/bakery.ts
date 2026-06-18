export const bakeryMeta = {
  slug: "bakery",
  name: "Bakery",
  title: "Bakery Economics & Benchmarks",
  subtitle:
    "Revenue, profit margins, owner income, startup costs and valuation benchmarks for bakery businesses.",
  dataVintage: "2025–2026",
  sampleSize: "210+ bakery businesses",
  geography: "United States",
};

export const bakeryKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$450K",
    sublabel: "median",
    href: "#revenue",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Margin",
    value: "8–18%",
    sublabel: "net range",
    href: "#profit-margins",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Pay",
    value: "$70K",
    sublabel: "median",
    href: "#owner-salary",
    accent: "metric-salary",
  },
  {
    id: "startup",
    label: "Startup Cost",
    value: "$50K–$300K",
    sublabel: "typical range",
    href: "#startup",
    accent: "metric-valuation",
  },
] as const;

export const heroExamples = [
  { label: "Retail Bakery", href: "#daily-economics" },
  { label: "Artisan Bakery", href: "#daily-economics" },
  { label: "Wholesale Bakery", href: "#wholesale-retail" },
  { label: "Cake Shop", href: "#custom-cakes" },
  { label: "Cupcake Bakery", href: "#product-mix" },
  { label: "Home-Based Bakery", href: "#startup" },
] as const;

export const quickSummary = [
  { metric: "Annual Revenue", value: "$280K – $750K" },
  { metric: "Profit Margin", value: "8 – 18%" },
  { metric: "Owner Salary", value: "$50K – $95K" },
  { metric: "Startup Cost", value: "$50K – $300K" },
  { metric: "Average Order Value", value: "$12 – $35" },
  { metric: "Customers Per Day", value: "40 – 120" },
  { metric: "Employees", value: "3 – 10" },
] as const;

export const businessModelFlow = [
  { label: "Customers", value: "40 – 120/day" },
  { label: "Orders", value: "$12 – $35 avg" },
  { label: "Revenue", value: "$280K – $750K" },
  { label: "Ingredients", value: "25 – 32%" },
  { label: "Labor", value: "28 – 36%" },
  { label: "Rent", value: "7 – 11%" },
  { label: "Profit", value: "8 – 18% net" },
] as const;

export const revenueDistribution = {
  bottom25: "$280K",
  median: "$450K",
  top25: "$750K",
};

export const revenueByType = [
  { type: "Retail Bakery", revenue: "$350K – $550K" },
  { type: "Artisan Bakery", revenue: "$400K – $650K" },
  { type: "Cake Shop", revenue: "$380K – $700K" },
  { type: "Wholesale Bakery", revenue: "$500K – $900K" },
  { type: "Home Bakery", revenue: "$80K – $200K" },
] as const;

export const revenueByLocation = [
  { type: "Downtown", revenue: "$450K – $700K" },
  { type: "Suburban", revenue: "$380K – $580K" },
  { type: "Tourist Area", revenue: "$500K – $800K" },
  { type: "Shopping Center", revenue: "$420K – $650K" },
] as const;

export const dailyEconomicsExample = {
  customersPerDay: 60,
  averageOrder: 25,
  dailyRevenue: 1500,
  monthlyRevenue: 37500,
  daysOpenPerMonth: 25,
  daysOpenPerYear: 300,
  annualRevenue: 450000,
};

export const productMix = [
  { label: "Bread", percent: 28, color: "var(--metric-salary)" },
  { label: "Cakes", percent: 32, color: "var(--metric-valuation)" },
  { label: "Pastries", percent: 22, color: "var(--metric-margin)" },
  { label: "Cookies", percent: 10, color: "var(--accent)" },
  { label: "Custom Orders", percent: 8, color: "var(--metric-revenue)" },
] as const;

export const productMargins = [
  { product: "Bread", margin: "45 – 55%" },
  { product: "Cakes", margin: "55 – 68%" },
  { product: "Pastries", margin: "50 – 62%" },
  { product: "Wedding Cakes", margin: "60 – 75%" },
  { product: "Cookies", margin: "48 – 58%" },
] as const;

export const marginTiers = {
  weak: "3–5%",
  average: "8–12%",
  strong: "13–16%",
  elite: "17%+",
};

export const costStructure = [
  { category: "Ingredients", percent: "25 – 32%" },
  { category: "Labor", percent: "28 – 36%" },
  { category: "Rent", percent: "7 – 11%" },
  { category: "Packaging", percent: "2 – 4%" },
  { category: "Marketing", percent: "2 – 5%" },
] as const;

export const profitDrivers = [
  {
    title: "Custom Cakes",
    range: "60–75% margin",
    description:
      "Wedding and celebration cakes command premium pricing with high perceived value and low ingredient cost ratios.",
  },
  {
    title: "Wholesale Accounts",
    range: "Steady volume",
    description:
      "Coffee shops, restaurants, and grocers provide predictable off-peak production revenue with lower marketing cost.",
  },
  {
    title: "High Average Order",
    range: "$25+ AOV",
    description:
      "Bundling items, pre-order boxes, and catering trays push transaction size without proportional labor increases.",
  },
  {
    title: "Repeat Customers",
    range: "Weekly regulars",
    description:
      "Neighborhood bakeries with subscription bread programs and loyalty rewards build predictable daily volume.",
  },
] as const;

export const ownerSalaryTiers = [
  {
    tier: "Owner Operator",
    range: "$50K – $75K",
    description:
      "Single retail bakery, owner works production and counter. Income blends salary with profit distributions.",
  },
  {
    tier: "Retail Bakery Owner",
    range: "$65K – $95K",
    description:
      "Established shop with staff and custom cake program. Manager handles day-to-day operations.",
  },
  {
    tier: "Multi-Location Owner",
    range: "$120K – $220K+",
    description:
      "2–4 locations or retail plus wholesale commissary. Shared production drives margin improvement.",
  },
] as const;

export const incomeDrivers = [
  "Product mix — custom cakes vs. daily bread sales",
  "Wholesale revenue and B2B accounts",
  "Average order value and catering orders",
  "Number of locations and production capacity",
] as const;

export const startupCosts = [
  { expense: "Leasehold Improvements", range: "$30K – $120K" },
  { expense: "Ovens & Mixers", range: "$20K – $60K" },
  { expense: "Refrigeration", range: "$8K – $25K" },
  { expense: "Display Cases", range: "$10K – $35K" },
  { expense: "POS System", range: "$5K – $15K" },
  { expense: "Initial Inventory", range: "$3K – $10K" },
  { expense: "Working Capital", range: "$15K – $40K" },
] as const;

export const investmentLevels = {
  home: "$50K",
  retail: "$150K",
  commercial: "$300K",
};

export const wholesaleRetailComparison = [
  { metric: "Revenue", retail: "$350K – $550K", wholesale: "$500K – $900K" },
  { metric: "Margin", retail: "10 – 16%", wholesale: "8 – 14%" },
  { metric: "Labor", retail: "32 – 38%", wholesale: "24 – 30%" },
  { metric: "Customer Count", retail: "50 – 120/day", wholesale: "8 – 25 accounts" },
] as const;

export const customCakeRevenue = [
  { source: "Daily Walk-In Sales", percent: 55 },
  { source: "Birthday Cakes", percent: 18 },
  { source: "Wedding Cakes", percent: 15 },
  { source: "Corporate Orders", percent: 12 },
] as const;

export const customCakeProfitability = [
  { category: "Bread", potential: "Moderate" },
  { category: "Pastries", potential: "Good" },
  { category: "Birthday Cakes", potential: "Strong" },
  { category: "Wedding Cakes", potential: "Excellent" },
] as const;

export const breakEvenDefaults = {
  monthlyFixedCosts: 24650,
  averageOrder: 31,
  contributionMarginPct: 58,
  operatingDaysPerMonth: 25,
};

export const seasonality = [
  { season: "Jan–Feb", revenueIndex: 75, note: "Post-holiday slowdown" },
  { season: "Spring", revenueIndex: 90, note: "Easter, graduations, weddings ramp" },
  { season: "Summer", revenueIndex: 95, note: "Steady retail, event catering" },
  { season: "Holiday Season", revenueIndex: 140, note: "Nov–Dec peak: 30–40% of annual profit" },
] as const;

export const valuationMultiples = [
  {
    label: "Revenue Multiple",
    range: "0.4x – 0.7x",
    median: "0.55x",
    note: "Used for established retail bakeries with strong local brand recognition.",
  },
  {
    label: "SDE Multiple",
    range: "2.0x – 3.2x",
    median: "2.8x",
    note: "Standard for independent bakeries under $1M revenue with transferable recipes.",
  },
  {
    label: "EBITDA Multiple",
    range: "3.0x – 4.5x",
    median: "3.8x",
    note: "Applied to multi-location or wholesale operations with management in place.",
  },
] as const;

export const valuationExample = {
  revenue: "$500K",
  sde: "$100K",
  valuation: "$300K",
  multiple: "3.0x SDE",
};

export const benchmarkThresholds = {
  revenue: { low: 280000, median: 450000, high: 750000 },
  margin: { low: 8, median: 12, high: 18 },
  ordersPerDay: { low: 40, median: 60, high: 100 },
};

export const successFactorDefaults = {
  averageOrder: 25,
  dailyOrders: 60,
  customOrdersPct: 25,
  profitMarginPct: 12,
  laborEfficiencyPct: 32,
};

export const comparisons = [
  { label: "Bakery vs Coffee Shop", href: "/comparisons/coffee-shop-vs-bakery/" },
  { label: "Bakery vs Food Truck", href: "/compare/bakery-vs-food-truck/" },
  { label: "Bakery vs Restaurant", href: "/comparisons/restaurant-vs-bakery/" },
  { label: "Bakery vs Home Bakery", href: "/compare/bakery-vs-home-bakery/" },
  { label: "Bakery vs Fast Casual", href: "/compare/bakery-vs-fast-casual/" },
] as const;

export const calculators = [
  {
    label: "Bakery Profit Margin Calculator",
    href: "/calculators/bakery-profit-margin/",
  },
  {
    label: "Bakery Startup Cost Calculator",
    href: "/calculators/bakery-startup-cost/",
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
    label: "Bakery Food Cost Calculator",
    href: "/calculators/bakery-food-cost/",
  },
  {
    label: "Bakery Revenue Calculator",
    href: "/calculators/bakery-revenue/",
  },
] as const;

export const sectionNav = [
  { id: "business-model", label: "Model" },
  { id: "revenue", label: "Revenue" },
  { id: "daily-economics", label: "Daily" },
  { id: "product-mix", label: "Products" },
  { id: "profit-margins", label: "Margins" },
  { id: "owner-salary", label: "Owner Pay" },
  { id: "startup", label: "Startup" },
  { id: "wholesale-retail", label: "Wholesale" },
  { id: "custom-cakes", label: "Cakes" },
  { id: "break-even", label: "Break-even" },
  { id: "valuation", label: "Valuation" },
  { id: "benchmark", label: "Benchmark" },
  { id: "comparisons", label: "Compare" },
  { id: "seasonality", label: "Seasons" },
  { id: "calculators", label: "Tools" },
  { id: "scorecard", label: "Score" },
  { id: "faqs", label: "FAQs" },
] as const;

export const faqs = [
  {
    question: "How much revenue does a bakery make?",
    answer:
      "Independent bakeries typically generate $280K–$750K annually, with a median around $450K. Cake shops and wholesale operations push toward $600K–$900K. Revenue is driven by daily order count (40–120) multiplied by average order value ($12–$35), with holiday seasons contributing 30–40% of annual profit.",
  },
  {
    question: "Are bakeries profitable?",
    answer:
      "Yes — bakeries can be profitable businesses when product mix and labor are managed well. Well-run retail bakeries achieve 8–18% net margins, with custom cake and wedding programs pushing the high end. Ingredient costs run 25–32% and labor 28–36%. Wholesale adds volume but compresses per-unit margin.",
  },
  {
    question: "How much do bakery owners earn?",
    answer:
      "Bakery owners typically earn $50K–$95K annually, with a median around $70K. Owner-operators of single retail shops take $50K–$75K. Established bakeries with custom cake programs earn $65K–$95K. Multi-location or retail-plus-wholesale owners can earn $120K–$220K+.",
  },
  {
    question: "What is a good bakery profit margin?",
    answer:
      "A healthy bakery net margin is 10–14%. Below 8% signals ingredient cost drift or overstaffing. Top-quartile bakeries hit 15–18% through custom cake revenue, wholesale accounts, and efficient production scheduling. Wedding cake programs can carry 60–75% gross margins.",
  },
  {
    question: "How much does it cost to start a bakery?",
    answer:
      "Total startup investment ranges from $50K (home-based, cottage food license) to $300K (full commercial buildout). Typical retail bakery costs $120K–$200K including leasehold improvements ($30K–$120K), ovens ($20K–$60K), display cases, POS, inventory, and 3–6 months working capital.",
  },
  {
    question: "What is a bakery worth?",
    answer:
      "Independent bakeries sell for 2.0x–3.2x SDE, with a median of 2.8x. A bakery with $500K revenue and $100K SDE might be valued around $300K. Strong custom cake reputation, wholesale contracts, and transferable recipes command the high end. Home bakeries typically sell as asset-only transactions.",
  },
] as const;

export function calculateBreakEven(inputs: {
  monthlyFixedCosts: number;
  averageOrder: number;
  contributionMarginPct: number;
  operatingDaysPerMonth: number;
}) {
  const breakEvenRevenue =
    inputs.contributionMarginPct > 0
      ? inputs.monthlyFixedCosts / (inputs.contributionMarginPct / 100)
      : 0;

  const ordersPerDay =
    inputs.averageOrder > 0 && inputs.operatingDaysPerMonth > 0
      ? breakEvenRevenue / inputs.operatingDaysPerMonth / inputs.averageOrder
      : 0;

  const dailyRevenue =
    inputs.operatingDaysPerMonth > 0
      ? breakEvenRevenue / inputs.operatingDaysPerMonth
      : 0;

  return { breakEvenRevenue, ordersPerDay, dailyRevenue, averageOrderRequired: inputs.averageOrder };
}

function scoreFactor(
  value: number,
  targets: { low: number; high: number },
  higherIsBetter = true
) {
  const v = higherIsBetter ? value : targets.high + targets.low - value;
  const { low, high } = targets;
  if (v >= high) return 95;
  if (v >= low) {
    const range = high - low || 1;
    return Math.round(68 + ((v - low) / range) * 22);
  }
  if (v >= low * 0.85) return 52;
  return 35;
}

export function calculateEconomicsScore(inputs: {
  averageOrder: number;
  dailyOrders: number;
  customOrdersPct: number;
  profitMarginPct: number;
  laborEfficiencyPct: number;
}) {
  const scores = {
    averageOrder: scoreFactor(inputs.averageOrder, { low: 12, high: 32 }),
    dailyOrders: scoreFactor(inputs.dailyOrders, { low: 40, high: 95 }),
    customOrders: scoreFactor(inputs.customOrdersPct, { low: 15, high: 35 }),
    profitMargin: scoreFactor(inputs.profitMarginPct, { low: 8, high: 17 }),
    laborEfficiency: scoreFactor(inputs.laborEfficiencyPct, { low: 24, high: 34 }, false),
  };

  const overall = Math.round(
    Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length
  );

  return { scores, overall };
}
