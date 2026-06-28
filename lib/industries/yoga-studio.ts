import type { SourcedMemberMetric } from "@/lib/industries/gym";

export const yogaStudioMeta = {
  slug: "yoga-studio",
  name: "Yoga Studio",
  title: "Yoga Studio Business Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, membership economics and business valuation for yoga studios.",
  dataVintage: "2025–2026",
  sampleSize: "120+ yoga studios",
  geography: "United States",
};

export const industrySnapshotRatings = [
  { label: "Category", value: "Fitness & Wellness", rating: null },
  { label: "Business Model", value: "Membership + Classes", rating: null },
  { label: "Recurring Revenue", value: "Very High", rating: 5 },
  { label: "Capital Requirement", value: "Low–Medium", rating: 2 },
  { label: "Community Dependence", value: "Very High", rating: 5 },
  { label: "Instructor Dependence", value: "High", rating: 4 },
] as const;

export const industryInsights = [
  {
    title: "Recurring membership income",
    body: "Yoga studios typically earn recurring income through memberships and class packages while increasing revenue through workshops, teacher training, retreats, corporate wellness programs, private sessions, and merchandise.",
  },
  {
    title: "Engagement over equipment",
    body: "Unlike gyms, long-term success is driven more by member engagement and retention than equipment utilization. Studios with active communities and consistent attendance often outperform those chasing drop-in volume alone.",
  },
  {
    title: "Community as competitive moat",
    body: "Community is a much bigger differentiator than for gyms. Renewal rates, workshop participation, and referral velocity separate profitable studios from those stuck in promotional discount cycles.",
  },
  {
    title: "Diversified ancillary revenue",
    body: "Teacher training, retreats, and corporate wellness can represent 15–30% of revenue at mature studios — reducing dependence on class-pack pricing and improving annual revenue stability.",
  },
] as const;

export const revenuePercentiles = [
  { percentile: "25th", revenue: "$320K" },
  { percentile: "Median", revenue: "$620K" },
  { percentile: "75th", revenue: "$850K" },
  { percentile: "Top 10%", revenue: "$1.1M+" },
] as const;

export const revenueDistribution = {
  bottom25: "$320K",
  median: "$620K",
  top25: "$850K",
};

export const revenueMix = [
  { label: "Memberships", share: 42, description: "Monthly unlimited and tiered membership plans" },
  { label: "Drop-in Classes", share: 12, description: "Single-class and walk-in revenue" },
  { label: "Class Packages", share: 18, description: "Multi-class packs and intro series" },
  { label: "Teacher Training", share: 12, description: "200-hour and advanced certification programs" },
  { label: "Retreats", share: 8, description: "Weekend intensives and destination retreats" },
  { label: "Retail", share: 8, description: "Apparel, mats, props, and wellness products" },
] as const;

export const membershipEconomics: readonly SourcedMemberMetric[] = [
  {
    metric: "Average Monthly Membership",
    value: "$119/mo",
    range: "$89 – $165/mo",
    description: "Unlimited or high-frequency membership tiers at boutique yoga studios.",
    source: "BizMetricsHQ composite; boutique wellness operator surveys",
  },
  {
    metric: "Revenue Per Member",
    value: "$138/mo",
    range: "$105 – $185/mo",
    description: "Membership plus workshops, retail, and private session attach.",
    source: "Composite from yoga studio revenue/member benchmarks",
    formula: "Total Monthly Member Revenue ÷ Active Members",
  },
  {
    metric: "Monthly Recurring Revenue",
    value: "$48K/mo",
    range: "$28K – $72K/mo",
    description: "Median MRR for a ~$620K annual revenue studio.",
    source: "Derived from membership share and autopay enrollment",
    formula: "Active Members × Average Monthly Dues",
  },
  {
    metric: "Client Lifetime Value",
    value: "$2,100 – $3,600",
    range: "$1,600 – $4,500",
    description: "Community-driven retention supports longer tenure than mass-market gyms.",
    source: "Derived from studio ARPU and 18–26 month average tenure",
    formula: "Revenue per Member per Month × Average Tenure (months)",
  },
  {
    metric: "Monthly Churn",
    value: "4 – 6%",
    range: "3 – 8%",
    description: "Strong community studios retain better; seasonal dips can spike churn in January.",
    source: "Boutique wellness retention benchmarks; HFA club data as floor reference",
  },
  {
    metric: "Average Attendance",
    value: "5 – 8 visits/mo",
    range: "3 – 12 visits/mo",
    description: "Engaged members attend 1.5–2× per week; drives class fill planning.",
    source: "Studio operator attendance tracking benchmarks",
  },
] as const;

export const communityHealthBenchmarks = [
  { metric: "Membership Renewal Rate", value: "68 – 78%" },
  { metric: "Class Attendance Rate", value: "62 – 75%" },
  { metric: "Workshop Participation", value: "18 – 32% of members" },
  { metric: "Referral Rate", value: "22 – 38% of new members" },
  { metric: "Community Engagement Score", value: "72 – 88 / 100" },
] as const;

export const classUtilizationBenchmarks = [
  { metric: "Average Class Size", value: "12 – 18 students" },
  { metric: "Studio Capacity", value: "20 – 35 students" },
  { metric: "Peak Hour Occupancy", value: "78 – 92%" },
  { metric: "Off-Peak Occupancy", value: "35 – 52%" },
  { metric: "Classes Per Week", value: "35 – 65" },
  { metric: "Revenue Per Class", value: "$180 – $320" },
] as const;

export const instructorProductivityBenchmarks = [
  { metric: "Revenue Per Instructor", value: "$72K – $125K/yr" },
  { metric: "Classes Per Week", value: "10 – 16" },
  { metric: "Students Per Class", value: "12 – 18" },
  { metric: "Revenue Per Teaching Hour", value: "$55 – $95" },
  { metric: "Private Session Revenue", value: "$8K – $22K/yr per instructor" },
] as const;

export const clientEconomicsMetrics: readonly SourcedMemberMetric[] = [
  {
    metric: "Revenue Per Member",
    value: "$138/mo",
    range: "$105 – $185/mo",
    description: "Blended monthly revenue including ancillary purchases.",
    source: "BizMetricsHQ yoga studio panel",
  },
  {
    metric: "Client Lifetime Value",
    value: "$2,800",
    range: "$2,100 – $3,600",
    description: "Blended LTV including workshop and retail attach.",
    source: "Composite ARPU × tenure model",
    formula: "Monthly ARPU × Average Membership Length",
  },
  {
    metric: "Average Membership Length",
    value: "20 mo",
    range: "14 – 28 mo",
    description: "Implied tenure before cancel or pause.",
    source: "Derived from churn and renewal benchmarks",
  },
  {
    metric: "Average Monthly Visits",
    value: "6.2/mo",
    range: "4 – 10/mo",
    description: "Engagement frequency for active members.",
    source: "Operator attendance data composite",
  },
  {
    metric: "Monthly Churn",
    value: "4.8%",
    range: "3.5 – 7%",
    description: "Typical boutique yoga studio monthly cancellation rate.",
    source: "Boutique wellness operator benchmarks",
  },
  {
    metric: "Referral Rate",
    value: "28%",
    range: "18 – 38%",
    description: "Share of new members acquired through member referrals.",
    source: "Studio marketing mix composite",
  },
] as const;

export const clientEconomicsMethodology = {
  summary:
    "Client economics combine boutique wellness operator benchmarks, yoga studio revenue-mix data, and published retention studies. Figures are directional ranges — not substitutes for your own studio management reports.",
  primarySources: [
    "BizMetricsHQ — 120+ yoga studio operator composite",
    "Health & Fitness Association (HFA) — boutique retention context",
    "Published boutique wellness CAC and ARPU studies (2024–2026)",
  ],
} as const;

export const marginTiers = {
  poor: "8 – 12%",
  average: "13 – 18%",
  good: "19 – 24%",
  excellent: "25 – 30%",
} as const;

export const marginMetrics = [
  { metric: "Gross Margin", value: "58 – 72%" },
  { metric: "Net Margin", value: "14 – 24%" },
  { metric: "EBITDA Margin", value: "18 – 28%" },
] as const;

export const expenseBreakdown = [
  { expense: "Instructor Payroll", percent: "35 – 45%" },
  { expense: "Rent & Occupancy", percent: "14 – 22%" },
  { expense: "Marketing & Acquisition", percent: "8 – 14%" },
  { expense: "Software & Admin", percent: "4 – 7%" },
  { expense: "Retail & Supplies", percent: "3 – 6%" },
  { expense: "Insurance & Utilities", percent: "4 – 8%" },
] as const;

export const ownerEconomicsCards = [
  { model: "Solo Studio", earnings: "$65K – $95K" },
  { model: "Small Boutique Studio", earnings: "$95K – $130K" },
  { model: "Multi-Studio Owner", earnings: "$130K – $200K" },
  { model: "Regional Brand", earnings: "$200K – $320K+" },
] as const;

export const valuationMultiples = [
  { metric: "SDE Multiple", range: "2.2× – 3.5×" },
  { metric: "EBITDA Multiple", range: "3.0× – 4.8×" },
  { metric: "Revenue Multiple", range: "0.4× – 0.7×" },
] as const;

export const valuationDefaults = {
  revenue: "620000",
  sde: "118000",
  multiple: "3.3",
  multipleLow: 2.2,
  multipleHigh: 3.5,
  revenueMultiple: 0.55,
  sdeMarginPct: 0.19,
};

export const topPerformerPractices = [
  "Build recurring memberships",
  "Maintain active communities",
  "Increase workshop participation",
  "Offer teacher training",
  "Improve referral rates",
  "Diversify revenue streams",
] as const;

export const industryOpportunities = [
  "Growing wellness awareness",
  "Corporate wellness demand",
  "Online and hybrid yoga programs",
  "Retreat and travel experiences",
  "Teacher certification programs",
  "Mindfulness trends",
] as const;

export const industryRisks = [
  "Instructor recruitment",
  "Customer churn",
  "Local competition",
  "Seasonal attendance",
  "Rising lease costs",
  "Pricing pressure",
] as const;

export const businessQualityScorecard = {
  industryName: "Typical Yoga Studio",
  items: [
    { label: "Recurring Revenue", rating: 5 },
    { label: "Revenue Stability", rating: 4 },
    { label: "Community Loyalty", rating: 5 },
    { label: "Premium Pricing", rating: 3 },
    { label: "Scalability", rating: 3 },
    { label: "Exit Potential", rating: 3 },
  ],
} as const;

export const boutiqueWellnessBenchmarkMatrix = {
  columns: ["Yoga", "Pilates", "Gym", "CrossFit", "Barre"] as const,
  rows: [
    { metric: "Recurring Revenue", values: [5, 5, 5, 4, 5] },
    { metric: "Startup Cost", values: [2, 3, 4, 3, 3], higherIsWorse: true },
    { metric: "Revenue per Client", values: [3, 5, 2, 4, 4] },
    { metric: "Community Loyalty", values: [5, 4, 3, 5, 4] },
    { metric: "Profit Margin", values: [4, 4, 3, 4, 4] },
    { metric: "Valuation Potential", values: [3, 4, 3, 4, 3] },
  ],
} as const;

export const fitnessBenchmarkRankings = [
  {
    label: "Highest Margin Fitness Businesses",
    description: "Boutique studios and specialty formats with premium pricing.",
    href: "/industries/yoga-studio/reports/yoga-highest-margin-fitness-2026/",
  },
  {
    label: "Highest Valuation Fitness Businesses",
    description: "Membership models with low churn and strong MRR.",
    href: "/industries/yoga-studio/reports/yoga-highest-valued-fitness-2026/",
  },
  {
    label: "Best Recurring Revenue Fitness Businesses",
    description: "Gyms, CrossFit boxes, and subscription-heavy studios.",
    href: "/industries/yoga-studio/reports/yoga-best-recurring-revenue-fitness-2026/",
  },
  {
    label: "Lowest Startup Cost Fitness Businesses",
    description: "Studio formats vs full-service gym buildouts.",
    href: "/industries/yoga-studio/reports/yoga-lowest-startup-cost-fitness-2026/",
  },
] as const;

export const benchmarkThresholds = {
  revenue: { low: 320000, median: 620000, high: 850000 },
  profitMargin: { low: 12, median: 19, high: 24 },
  technicians: { low: 120, median: 220, high: 350 },
  maintenancePct: { low: 75, median: 88, high: 95 },
};

export const benchmarkDefaults = {
  revenue: "620000",
  margin: "19",
  technicians: "220",
  recurringPct: "88",
};

export const hubFaqs = [
  {
    question: "How profitable is a yoga studio?",
    answer:
      "Healthy yoga studios typically achieve 14–24% net profit margin, with a median around 19%. Studios with strong community retention, workshop revenue, and efficient instructor scheduling can reach 22%+. High rent markets compress margins below 14%.",
  },
  {
    question: "What is the average yoga studio revenue?",
    answer:
      "The median yoga studio generates about $620K in annual revenue. The interquartile range spans $320K (25th percentile) to $850K (75th percentile), with top-performing multi-studio operators exceeding $1.1M.",
  },
  {
    question: "How much do yoga studio owners make?",
    answer:
      "Yoga studio owners typically earn $65K–$140K in total compensation, with a median around $115K for owner-operators of established single-location studios. Multi-studio operators with strong membership and teacher training revenue can exceed $200K.",
  },
  {
    question: "What is a yoga studio worth?",
    answer:
      "Yoga studios typically sell at 2.2×–3.5× SDE, with quality assets near 3.3×. A studio with $620K revenue and $118K SDE might value between $260K and $413K. Low churn, strong community, and diversified revenue support premium multiples.",
  },
  {
    question: "What is a good membership retention rate?",
    answer:
      "Strong yoga studios retain 68–78% of members annually (roughly 3.5–5% monthly churn). Studios below 62% annual retention should audit onboarding, instructor consistency, and community programming before scaling marketing.",
  },
  {
    question: "How many members does a yoga studio need to be profitable?",
    answer:
      "Most yoga studios break even between 100–160 active members depending on rent and instructor payroll. At $119/mo average membership plus workshop upsells, 180–250 engaged members typically supports healthy margins.",
  },
  {
    question: "How important are workshops and retreats?",
    answer:
      "Workshops and retreats can represent 15–25% of revenue at mature studios and materially improve annual revenue stability. They also deepen community engagement — a key driver of membership renewal and referral growth.",
  },
  {
    question: "What is the average revenue per class?",
    answer:
      "Well-run studios generate $180–$320 per class depending on class size, pricing mix, and occupancy. Underutilized off-peak classes below $140/class often signal scheduling mismatch or weak community programming.",
  },
] as const;
