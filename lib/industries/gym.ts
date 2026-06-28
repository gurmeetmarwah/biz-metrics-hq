export const gymMeta = {
  slug: "gym",
  name: "Gym",
  title: "Gym Industry Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, membership economics and valuation multiples for gym businesses.",
  dataVintage: "2025–2026",
  sampleSize: "290+ gym businesses",
  geography: "United States",
};

export const industrySnapshotRatings = [
  { label: "Category", value: "Fitness & Wellness", rating: null },
  { label: "Business Model", value: "Membership", rating: null },
  { label: "Recurring Revenue", value: "Very High", rating: 5 },
  { label: "Capital Requirement", value: "High", rating: 4 },
  { label: "Labor Dependence", value: "Medium", rating: 3 },
  { label: "Retention Importance", value: "Very High", rating: 5 },
] as const;

export const industryInsights = [
  {
    title: "Membership-driven economics",
    body: "Gym businesses typically generate recurring monthly revenue through memberships while supplementing income through personal training, group classes, and retail sales.",
  },
  {
    title: "Retention beats acquisition",
    body: "Member retention often has a greater impact on profitability than new member acquisition. A 5% improvement in monthly retention can materially change annual profit.",
  },
  {
    title: "MRR is the core metric",
    body: "Monthly recurring revenue (MRR) from memberships is the foundation of gym valuation. Operators who track MRR, churn, and revenue per member make better pricing and staffing decisions.",
  },
  {
    title: "Valuation follows recurring quality",
    body: "Businesses with strong recurring revenue, low churn, and diversified income streams generally achieve higher valuations than single-revenue-model gyms.",
  },
] as const;

export const revenuePercentiles = [
  { percentile: "25th", revenue: "$650K" },
  { percentile: "Median", revenue: "$1.2M" },
  { percentile: "75th", revenue: "$1.8M" },
  { percentile: "Top 10%", revenue: "$2.5M+" },
] as const;

export const revenueDistribution = {
  bottom25: "$650K",
  median: "$1.2M",
  top25: "$1.8M",
};

export const revenueMix = [
  { label: "Membership Revenue", share: 62, description: "Monthly and annual membership dues — the recurring revenue engine" },
  { label: "Personal Training", share: 18, description: "1-on-1 and small-group training packages" },
  { label: "Group Classes", share: 8, description: "Spin, HIIT, yoga, and specialty class fees" },
  { label: "Retail Sales", share: 5, description: "Supplements, apparel, and accessories" },
  { label: "Nutrition Programs", share: 4, description: "Meal plans, coaching, and challenge programs" },
  { label: "Other Revenue", share: 3, description: "Day passes, corporate wellness, and events" },
] as const;

/** Sourced member-level benchmarks — anchored to published HFA data where available. */
export type SourcedMemberMetric = {
  metric: string;
  value: string;
  range?: string;
  description: string;
  source: string;
  formula?: string;
};

export const membershipEconomics: readonly SourcedMemberMetric[] = [
  {
    metric: "Average Membership Fee",
    value: "$38/mo",
    range: "$38 – $69/mo",
    description: "Median monthly dues for U.S. clubs; mean was $69/mo in 2024.",
    source: "Health & Fitness Association (HFA), 2024 U.S. club data",
  },
  {
    metric: "Monthly Recurring Revenue",
    value: "~$62K/mo",
    range: "$50K – $85K/mo",
    description: "Estimated membership MRR for a ~$1.2M-revenue independent gym (~62% from dues).",
    source: "BizMetricsHQ model using HFA dues + revenue-mix benchmarks",
    formula: "Annual Revenue × Membership Share ÷ 12",
  },
  {
    metric: "Average Member Lifetime",
    value: "12 – 18 mo",
    range: "10 – 24 mo",
    description: "Typical tenure before cancel; half of new members leave within six months (HFA).",
    source: "HFA retention research; industry tenure estimates",
    formula: "≈ 1 ÷ Monthly Churn Rate",
  },
  {
    metric: "Member Churn Rate",
    value: "3 – 5%/mo",
    range: "2 – 8%/mo by format",
    description: "Monthly cancellations; budget gyms trend higher, boutique lower.",
    source: "HFA 66.4% annual retention (~3.4% implied monthly); industry ranges",
  },
  {
    metric: "Revenue Per Member",
    value: "~$43/mo",
    range: "$43 – $65/mo",
    description: "Membership plus ancillary revenue; independents with PT skew higher.",
    source: "HFA estimate of $517/member/year",
    formula: "Annual Member Revenue ÷ 12",
  },
] as const;

export const memberEconomicsMetrics: readonly SourcedMemberMetric[] = [
  {
    metric: "Average Membership Fee",
    value: "$38/mo",
    range: "$38 – $69/mo",
    description: "Median monthly dues; mean was $69/mo in 2024 across U.S. clubs.",
    source: "Health & Fitness Association (HFA), 2024 U.S. club data",
  },
  {
    metric: "Revenue Per Member",
    value: "~$43/mo",
    range: "$43 – $65/mo",
    description: "Total monthly revenue per active member including ancillary sales.",
    source: "HFA industry estimate ($517/member/year)",
    formula: "$517 ÷ 12 months",
  },
  {
    metric: "Member Lifetime Value",
    value: "$500 – $900",
    range: "$400 – $1,200",
    description: "Total revenue per member over membership; varies by format and upsell rate.",
    source: "Derived from HFA revenue/member and published tenure benchmarks",
    formula: "Revenue per Member × Average Membership Lifespan (months)",
  },
  {
    metric: "Customer Acquisition Cost",
    value: "$80 – $200",
    range: "$63 – $249+",
    description: "Blended sales + marketing spend per new paying member; referrals lowest.",
    source: "Published fitness marketing CAC benchmarks (budget to mid-range clubs)",
    formula: "(Sales + Marketing Spend) ÷ New Paying Members",
  },
  {
    metric: "Retention Rate",
    value: "66.4%",
    range: "60 – 75% annual",
    description: "Share of members retained year-over-year; boutique studios often higher.",
    source: "HFA 2025 Fitness Industry Benchmarking Report (U.S. clubs)",
  },
] as const;

export const memberEconomicsMethodology = {
  summary:
    "Member economics figures combine publicly reported Health & Fitness Association (HFA) club data with published industry retention and marketing studies. Derived metrics (MRR, LTV) use documented formulas — not single-point estimates from an undisclosed proprietary panel.",
  primarySources: [
    "Health & Fitness Association (HFA) — 2025 Fitness Industry Benchmarking Report (66.4% U.S. member retention; 175-operator sample)",
    "Health & Fitness Association (HFA) — 2024 U.S. monthly dues ($69 mean, $38 median)",
    "HFA industry revenue estimate — ~$517 per member per year",
  ],
} as const;

export const memberRetentionScorecard = [
  { label: "Member Retention", rating: 5 },
  { label: "Monthly Churn", rating: 3 },
  { label: "Referral Rate", rating: 4 },
  { label: "Recurring Revenue", rating: 5 },
] as const;

export const marginTiers = {
  poor: "6 – 10%",
  average: "11 – 15%",
  good: "16 – 20%",
  excellent: "21 – 28%",
} as const;

export const marginMetrics = [
  { metric: "Gross Margin", value: "55 – 68%" },
  { metric: "Net Margin", value: "12 – 22%" },
  { metric: "Owner Salary (normalized)", value: "$85K – $160K" },
] as const;

export const expenseBreakdown = [
  { expense: "Rent & Occupancy", percent: "18 – 28%" },
  { expense: "Payroll & Trainers", percent: "28 – 38%" },
  { expense: "Equipment & Maintenance", percent: "6 – 12%" },
  { expense: "Marketing & Acquisition", percent: "8 – 14%" },
  { expense: "Utilities & Insurance", percent: "5 – 9%" },
  { expense: "Software & Admin", percent: "3 – 6%" },
] as const;

export const ownerEconomicsCards = [
  { model: "Owner Operator", earnings: "$85K – $110K" },
  { model: "Small Gym", earnings: "$110K – $140K" },
  { model: "Multi-location Gym", earnings: "$140K – $220K" },
  { model: "Regional Operator", earnings: "$220K – $350K+" },
] as const;

export const valuationMultiples = [
  { metric: "SDE Multiple", range: "2.8× – 4.2×" },
  { metric: "EBITDA Multiple", range: "4.0× – 6.5×" },
  { metric: "Revenue Multiple", range: "0.6× – 1.1×" },
] as const;

export const topPerformerPractices = [
  "Maintain low member churn",
  "Upsell personal training",
  "Build strong communities",
  "Improve referral rates",
  "Track member retention closely",
  "Diversify revenue streams",
] as const;

export const industryOpportunities = [
  "Health awareness growth",
  "Corporate wellness programs",
  "Hybrid training models",
  "Personal training demand",
  "Boutique fitness expansion",
] as const;

export const industryRisks = [
  "High fixed costs",
  "Member churn",
  "Economic downturns",
  "Local competition",
  "Equipment replacement costs",
] as const;

export const businessQualityScorecard = {
  industryName: "Typical Gym Business",
  items: [
    { label: "Recurring Revenue", rating: 5 },
    { label: "Revenue Stability", rating: 4 },
    { label: "Scalability", rating: 4 },
    { label: "Retention Dependency", rating: 5 },
    { label: "Exit Potential", rating: 3 },
  ],
} as const;

export const fitnessBenchmarkRankings = [
  {
    label: "Highest Margin Fitness Businesses",
    description: "Boutique studios and specialty formats with premium pricing.",
    href: "/industries/gym/reports/highest-margin-fitness-businesses-2026/",
  },
  {
    label: "Highest Valued Fitness Businesses",
    description: "Membership models with low churn and strong MRR.",
    href: "/industries/gym/reports/highest-valued-fitness-businesses-2026/",
  },
  {
    label: "Best Recurring Revenue Fitness Businesses",
    description: "Gyms, CrossFit boxes, and subscription-heavy studios.",
    href: "/industries/gym/reports/best-recurring-revenue-fitness-businesses-2026/",
  },
  {
    label: "Lowest Startup Cost Fitness Businesses",
    description: "Studio formats vs full-service gym buildouts.",
    href: "/industries/gym/reports/lowest-startup-cost-fitness-businesses-2026/",
  },
] as const;

export const fitnessEconomicsComparison = {
  columns: ["Gym", "Pilates", "Yoga", "CrossFit"] as const,
  rows: [
    { metric: "Recurring Revenue", values: [5, 5, 4, 5] },
    { metric: "Startup Cost", values: [4, 3, 2, 3], higherIsWorse: true },
    { metric: "Profit Margin", values: [3, 4, 3, 4] },
    { metric: "Valuation", values: [3, 4, 3, 4] },
  ],
} as const;

export const benchmarkThresholds = {
  revenue: { low: 650000, median: 1200000, high: 1800000 },
  profitMargin: { low: 12, median: 18, high: 22 },
  technicians: { low: 400, median: 850, high: 1400 },
  maintenancePct: { low: 55, median: 70, high: 80 },
};

export const benchmarkDefaults = {
  revenue: "1200000",
  margin: "18",
  technicians: "850",
  recurringPct: "70",
};

export const valuationDefaults = {
  revenue: "1200000",
  sde: "280000",
  multiple: "3.5",
  multipleLow: 2.8,
  multipleHigh: 4.2,
  revenueMultiple: 0.85,
  sdeMarginPct: 0.23,
};

export const hubFaqs = [
  {
    question: "How profitable is a gym?",
    answer:
      "Healthy independent gyms typically achieve 12–22% net profit margin, with a median around 18%. Operators with strong personal training penetration, low churn, and efficient staffing can reach 20%+. High rent markets compress margins below 12%.",
  },
  {
    question: "What is average gym revenue?",
    answer:
      "The median independent gym generates about $1.2M in annual revenue. The interquartile range spans $650K (25th percentile) to $1.8M (75th percentile), with top-performing multi-location operators exceeding $2.5M.",
  },
  {
    question: "How much do gym owners make?",
    answer:
      "Gym owners typically earn $85K–$160K in total compensation, with a median around $120K for owner-operators of established single-location gyms. Multi-location operators with strong MRR and training revenue can exceed $250K.",
  },
  {
    question: "What is a gym business worth?",
    answer:
      "Gym businesses typically sell at 2.8×–4.2× SDE, with a median near 3.5×. A gym with $1.2M revenue and $280K SDE might value between $780K and $1.2M. Low churn and high recurring revenue support premium multiples.",
  },
  {
    question: "How important is member retention?",
    answer:
      "Member retention is critical — it often matters more than new sales. Improving monthly churn from 5% to 4% can add six figures in annual revenue without additional marketing spend. Buyers heavily weight retention when valuing gym businesses.",
  },
  {
    question: "What is a good churn rate for a gym?",
    answer:
      "Industry-wide annual retention is 66.4% per the HFA 2025 Benchmarking Report — roughly one in three members cancels each year. That implies roughly 3–4% monthly churn in a steady-state model. Budget gyms often run 5–8% monthly; boutique and community-driven formats may achieve 2–4%.",
  },
  {
    question: "How many members does a gym need to be profitable?",
    answer:
      "Most independent gyms break even between 350–500 active members depending on rent, payroll, and equipment debt. At HFA median dues (~$38/mo) plus training revenue, 800–1,200+ active members typically supports healthy margins for a single-location operator.",
  },
] as const;
