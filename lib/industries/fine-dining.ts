export const fineDiningMeta = {
  slug: "fine-dining",
  name: "Fine Dining",
  title: "Fine Dining Restaurant Economics",
  subtitle:
    "Revenue, profit margins, owner compensation, valuation multiples and operating benchmarks for fine dining restaurants.",
  dataVintage: "2025–2026",
  sampleSize: "180+ fine dining establishments",
  geography: "United States",
};

export const fineDiningKpis = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$2.8M",
    sublabel: "median",
    href: "#revenue",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Margin",
    value: "6–12%",
    sublabel: "net range",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Pay",
    value: "$180K",
    sublabel: "median",
    href: "#owner-compensation",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Valuation",
    value: "3.5x SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
] as const;

export const heroExamples = [
  { label: "Steakhouse", href: "#unit-economics" },
  { label: "French Restaurant", href: "#unit-economics" },
  { label: "Michelin-Inspired", href: "#unit-economics" },
  { label: "Luxury Dining Concept", href: "#unit-economics" },
] as const;

export const kpiContextNotes = [
  "Higher revenue per seat than fast casual or casual dining",
  "Lower table turnover — typically 1–1.5 turns per service",
  "Higher labor costs driven by skilled kitchen and service staff",
  "Greater valuation variability tied to reputation and lease terms",
] as const;

export const quickSummary = [
  { metric: "Annual Revenue", value: "$1.8M – $4.5M" },
  { metric: "Average Ticket Size", value: "$85 – $250" },
  { metric: "Food Cost %", value: "30 – 40%" },
  { metric: "Labor Cost %", value: "32 – 38%" },
  { metric: "EBITDA Margin", value: "12 – 18%" },
  { metric: "Valuation Multiple", value: "2.5x – 4.5x SDE" },
] as const;

export const economicsFlow = [
  { label: "Guest", value: "85 – 120 covers/day" },
  { label: "Average Check", value: "$85 – $250" },
  { label: "Revenue", value: "$1.8M – $4.5M" },
  { label: "Food Cost", value: "30 – 40%" },
  { label: "Labor Cost", value: "32 – 38%" },
  { label: "Occupancy", value: "7 – 10%" },
  { label: "Profit", value: "6 – 12% net" },
] as const;

export const unitEconomicsExample = {
  seats: 110,
  guestsPerDay: 95,
  averageCheck: 98,
  revenuePerDay: 9310,
  daysOpen: 300,
  revenuePerYear: 2793000,
};

export const revenueDistribution = {
  bottom25: "$1.8M",
  median: "$2.8M",
  top25: "$4.2M",
};

export const revenueByConcept = [
  { concept: "Steakhouse", revenue: "$2.5M – $4.5M" },
  { concept: "Seafood", revenue: "$2.2M – $3.8M" },
  { concept: "French Cuisine", revenue: "$2.0M – $3.5M" },
  { concept: "Tasting Menu", revenue: "$1.8M – $3.2M" },
] as const;

export const revenueByLocation = [
  { location: "Urban Core", revenue: "$3.0M – $4.5M" },
  { location: "Tourist Market", revenue: "$2.5M – $4.0M" },
  { location: "Affluent Suburb", revenue: "$2.0M – $3.2M" },
] as const;

export const checkBreakdown = [
  { label: "Food", percent: 62, color: "var(--metric-salary)" },
  { label: "Wine", percent: 28, color: "var(--metric-valuation)" },
  { label: "Dessert", percent: 5, color: "var(--metric-margin)" },
  { label: "Private Dining", percent: 3, color: "var(--accent)" },
  { label: "Events", percent: 2, color: "var(--metric-revenue)" },
] as const;

export const ticketBenchmarks = [
  { segment: "Casual Dining", check: "$28 – $45" },
  { segment: "Fast Casual", check: "$12 – $18" },
  { segment: "Fine Dining", check: "$85 – $250" },
] as const;

export const marginTiers = {
  weak: "2–4%",
  average: "6–8%",
  strong: "9–11%",
  elite: "12%+",
};

export const costStructure = [
  { category: "Food Cost", percent: "32 – 38%" },
  { category: "Labor", percent: "32 – 38%" },
  { category: "Occupancy", percent: "7 – 10%" },
  { category: "Marketing", percent: "2 – 4%" },
  { category: "Other", percent: "8 – 12%" },
] as const;

export const marginDrivers = [
  {
    title: "Wine Program",
    range: "25–35% of sales",
    description:
      "High-margin wine lists can contribute 40–60% of total profit. Sommelier-curated programs command premium pricing.",
  },
  {
    title: "Private Events",
    range: "8–15% of revenue",
    description:
      "Buyouts, chef's tables, and holiday packages deliver high-margin revenue with predictable scheduling.",
  },
  {
    title: "Chef Reputation",
    range: "Pricing power",
    description:
      "Award recognition and media coverage support $150+ tasting menus and reduce price sensitivity.",
  },
  {
    title: "Location",
    range: "7–10% occupancy",
    description:
      "Prime urban locations drive volume but compress margins. Suburban fine dining often achieves better rent ratios.",
  },
] as const;

export const laborByPosition = [
  { position: "Chef / Executive Chef", share: "8 – 12%" },
  { position: "Kitchen Staff", share: "14 – 18%" },
  { position: "Servers & FOH", share: "10 – 14%" },
  { position: "Management", share: "4 – 6%" },
] as const;

export const laborComparison = [
  { format: "Fast Casual", labor: "26 – 30%" },
  { format: "Casual Dining", labor: "28 – 32%" },
  { format: "Fine Dining", labor: "32 – 38%" },
] as const;

export const laborCostBenchmark = {
  range: "32 – 38%",
  note: "Includes back-of-house, service staff, and management. Fine dining requires higher skill levels and lower covers per labor hour.",
};

export const ownerCompensationTiers = [
  {
    tier: "Independent Owner",
    range: "$140K – $220K",
    description:
      "Single flagship restaurant with strong reputation. Mix of salary, tips allocation, and profit distributions.",
  },
  {
    tier: "Owner-Operator",
    range: "$120K – $180K",
    description:
      "Chef-owner or working owner taking below-market salary early, distributions as the concept matures.",
  },
  {
    tier: "Multi-Unit Operator",
    range: "$300K – $600K+",
    description:
      "2–4 fine dining concepts with executive chef and GM structure at each location.",
  },
] as const;

export const salaryDrivers = [
  "Number of locations and management depth",
  "Chef-owner model vs. absentee ownership",
  "Reputation, awards, and media visibility",
  "Market positioning and average check size",
] as const;

export const valuationMultiples = [
  {
    label: "Revenue Multiple",
    range: "0.5x – 0.9x",
    median: "0.65x",
    note: "Applied to established concepts with strong brand equity and lease transferability.",
  },
  {
    label: "SDE Multiple",
    range: "2.5x – 4.5x",
    median: "3.5x",
    note: "Wide range reflects reputation premium, lease terms, and owner dependency.",
  },
  {
    label: "EBITDA Multiple",
    range: "4.0x – 6.5x",
    median: "5.0x",
    note: "Used for professionally managed groups with institutional-quality financials.",
  },
] as const;

export const valuationExample = {
  revenue: "$3M",
  sde: "$450K",
  valuation: "$1.5M",
  multiple: "3.3x SDE",
};

export const privateEvents = [
  { eventType: "Corporate Event", impact: "$15K – $50K per event" },
  { eventType: "Wedding", impact: "$25K – $80K per event" },
  { eventType: "Private Dining Room", impact: "$3K – $12K per night" },
] as const;

export const revenueMix = [
  { source: "Regular Dining", percent: 72 },
  { source: "Wine Sales", percent: 18 },
  { source: "Events", percent: 6 },
  { source: "Private Dining", percent: 4 },
] as const;

export const benchmarkThresholds = {
  revenue: { low: 1800000, median: 2800000, high: 4200000 },
  averageCheck: { low: 85, median: 120, high: 180 },
  margin: { low: 6, median: 9, high: 12 },
};

export const successFactorDefaults = {
  averageCheck: 98,
  wineRevenuePct: 28,
  tableUtilization: 72,
  privateEventPct: 12,
  retentionPct: 42,
};

export const comparisons = [
  { label: "Fine Dining vs Steakhouse", comingSoon: true },
  { label: "Fine Dining vs Casual Dining", comingSoon: true },
  { label: "Fine Dining vs Fast Casual", comingSoon: true },
  { label: "Fine Dining vs Luxury Hotel Restaurant", comingSoon: true },
] as const;

export const calculators = [
  {
    label: "Food Cost Calculator",
    href: "/industries/restaurant/food-cost-calculator/",
  },
  {
    label: "Break-even Calculator",
    href: "/calculators/restaurant-break-even/",
  },
  {
    label: "Profit Margin Calculator",
    href: "/industries/restaurant/profit-margin-calculator/",
  },
  {
    label: "Restaurant Valuation Calculator",
    href: "/industries/restaurant/valuation/",
  },
] as const;

export const sectionNav = [
  { id: "unit-economics", label: "Unit Econ" },
  { id: "revenue", label: "Revenue" },
  { id: "average-check", label: "Avg Check" },
  { id: "profitability", label: "Margins" },
  { id: "labor", label: "Labor" },
  { id: "owner-compensation", label: "Owner Pay" },
  { id: "valuation", label: "Valuation" },
  { id: "private-events", label: "Events" },
  { id: "benchmark", label: "Benchmark" },
  { id: "comparisons", label: "Compare" },
  { id: "success-factors", label: "Score" },
  { id: "calculators", label: "Tools" },
  { id: "faqs", label: "FAQs" },
] as const;

export const faqs = [
  {
    question: "How profitable are fine dining restaurants?",
    answer:
      "Well-run fine dining restaurants achieve 6–12% net profit margins, with elite operators reaching 12%+. Profitability depends heavily on wine program margins, private event revenue, and labor efficiency. Prime cost (food + labor) typically runs 62–72% of revenue — higher than casual dining but offset by average checks of $85–$250.",
  },
  {
    question: "What is a good fine dining margin?",
    answer:
      "A healthy fine dining net margin is 8–10%. Below 6% signals cost structure pressure — often occupancy above 10% of revenue or labor above 38%. Top-quartile restaurants achieve 11–14% through strong wine sales (25%+ of revenue), private dining, and chef-driven pricing power.",
  },
  {
    question: "How much revenue does a fine dining restaurant generate?",
    answer:
      "Independent fine dining restaurants typically generate $1.8M–$4.5M annually, with a median around $2.8M. Steakhouses and urban flagship locations push toward $3.5M–$4.5M. Revenue is driven by covers per day (80–120) multiplied by average check ($85–$250), with wine and events adding 20–35% to base food revenue.",
  },
  {
    question: "How much do fine dining owners make?",
    answer:
      "Fine dining owners typically earn $140K–$220K annually for a single successful flagship, with a median around $180K. Chef-owners may take lower salary initially. Multi-unit operators with 2–4 concepts can earn $300K–$600K+. Compensation mixes salary, profit distributions, and occasionally tip pool allocations.",
  },
  {
    question: "What valuation multiples do fine dining restaurants sell for?",
    answer:
      "Fine dining restaurants sell for 2.5x–4.5x SDE, with a median of 3.5x. Reputation, lease transferability, and owner dependency create wide variance. A restaurant with $3M revenue and $450K SDE might be valued around $1.5M. Award-winning chef-driven concepts with long lease terms command the high end.",
  },
] as const;

export function scoreSuccessFactor(
  value: number,
  targets: { low: number; high: number }
): number {
  if (value >= targets.high) return 95;
  if (value >= targets.low) {
    const range = targets.high - targets.low || 1;
    return Math.round(70 + ((value - targets.low) / range) * 25);
  }
  if (value >= targets.low * 0.85) return 55;
  return 35;
}

export function calculatePerformanceScore(inputs: {
  averageCheck: number;
  wineRevenuePct: number;
  tableUtilization: number;
  privateEventPct: number;
  retentionPct: number;
}) {
  const scores = {
    averageCheck: scoreSuccessFactor(inputs.averageCheck, { low: 85, high: 150 }),
    wineRevenue: scoreSuccessFactor(inputs.wineRevenuePct, { low: 22, high: 32 }),
    tableUtilization: scoreSuccessFactor(inputs.tableUtilization, { low: 65, high: 80 }),
    privateEventRevenue: scoreSuccessFactor(inputs.privateEventPct, { low: 8, high: 15 }),
    customerRetention: scoreSuccessFactor(inputs.retentionPct, { low: 35, high: 50 }),
  };

  const overall = Math.round(
    Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length
  );

  return { scores, overall };
}
