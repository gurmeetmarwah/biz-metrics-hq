import type { SourcedMemberMetric } from "@/lib/industries/gym";

export const pilatesStudioMeta = {
  slug: "pilates-studio",
  name: "Pilates Studio",
  title: "Pilates Studio Business Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, membership economics and business valuation for Pilates studios.",
  dataVintage: "2025–2026",
  sampleSize: "140+ Pilates studios",
  geography: "United States",
};

export const industrySnapshotRatings = [
  { label: "Category", value: "Fitness & Wellness", rating: null },
  { label: "Business Model", value: "Membership + Class Packs", rating: null },
  { label: "Recurring Revenue", value: "Very High", rating: 5 },
  { label: "Pricing Position", value: "Premium", rating: 5 },
  { label: "Capital Requirement", value: "Medium", rating: 3 },
  { label: "Instructor Dependence", value: "High", rating: 4 },
] as const;

export const industryInsights = [
  {
    title: "Premium recurring income",
    body: "Pilates studios typically generate recurring monthly income through memberships while increasing average customer value with private sessions, reformer classes, small-group sessions, workshops, teacher training, and retail products.",
  },
  {
    title: "Utilization over volume",
    body: "Unlike a traditional gym, revenue is driven more by class utilization and premium pricing than by total member count. A studio with 150 engaged members and high occupancy often outperforms one with 300 low-attendance members.",
  },
  {
    title: "Instructor productivity is core",
    body: "Revenue per instructor, classes per week, and private-session mix define boutique economics. Scheduling optimization often matters more than adding equipment.",
  },
  {
    title: "Retention through community",
    body: "Pilates clients pay premium dues for coaching quality and community. Studios with strong intro-to-membership conversion and low monthly churn achieve the highest valuations.",
  },
] as const;

export const revenuePercentiles = [
  { percentile: "25th", revenue: "$420K" },
  { percentile: "Median", revenue: "$850K" },
  { percentile: "75th", revenue: "$1.1M" },
  { percentile: "Top 10%", revenue: "$1.4M+" },
] as const;

export const revenueDistribution = {
  bottom25: "$420K",
  median: "$850K",
  top25: "$1.1M",
};

export const revenueMix = [
  { label: "Memberships", share: 48, description: "Monthly unlimited and tiered membership plans" },
  { label: "Class Packages", share: 18, description: "Multi-class packs and intro series" },
  { label: "Private Sessions", share: 16, description: "1-on-1 and duet reformer sessions" },
  { label: "Teacher Training", share: 8, description: "Certification programs and workshops" },
  { label: "Retail", share: 5, description: "Apparel, grip socks, and accessories" },
  { label: "Workshops", share: 5, description: "Intensives, retreats, and specialty events" },
] as const;

export const membershipEconomics: readonly SourcedMemberMetric[] = [
  {
    metric: "Average Monthly Membership",
    value: "$165/mo",
    range: "$120 – $220/mo",
    description: "Unlimited or high-frequency membership tiers at reformer studios.",
    source: "BizMetricsHQ composite; boutique fitness operator surveys",
  },
  {
    metric: "Average Revenue Per Member",
    value: "$195/mo",
    range: "$150 – $280/mo",
    description: "Membership plus private sessions and retail attach.",
    source: "Composite from reformer studio revenue/member benchmarks",
    formula: "Total Monthly Client Revenue ÷ Active Members",
  },
  {
    metric: "Client Lifetime Value",
    value: "$2,400 – $4,200",
    range: "$1,800 – $5,500",
    description: "Higher than mass-market gyms due to premium dues and private upsells.",
    source: "Derived from studio ARPU and 14–22 month average tenure",
    formula: "Revenue per Client per Month × Average Tenure (months)",
  },
  {
    metric: "Monthly Churn",
    value: "3 – 5%",
    range: "2 – 7%",
    description: "Boutique studios often retain better than HVLP gyms when community is strong.",
    source: "Boutique fitness retention benchmarks; HFA club data as floor reference",
  },
  {
    metric: "Average Attendance",
    value: "6 – 10 visits/mo",
    range: "4 – 14 visits/mo",
    description: "Engaged members attend 2–3× per week; drives occupancy planning.",
    source: "Studio operator attendance tracking benchmarks",
  },
  {
    metric: "Recurring Revenue %",
    value: "85 – 95%",
    range: "80 – 96%",
    description: "Membership and autopay class subscriptions dominate revenue.",
    source: "Pilates studio revenue-mix composite",
  },
] as const;

export const studioUtilizationBenchmarks = [
  { metric: "Class Capacity", value: "8 – 12 clients" },
  { metric: "Average Occupancy", value: "65 – 78%" },
  { metric: "Peak Hour Utilization", value: "85 – 95%" },
  { metric: "Off-Peak Utilization", value: "40 – 55%" },
  { metric: "Revenue Per Reformer", value: "$1,800 – $3,200/mo" },
  { metric: "Classes Per Week", value: "45 – 75" },
] as const;

export const instructorProductivityBenchmarks = [
  { metric: "Revenue Per Instructor", value: "$95K – $165K/yr" },
  { metric: "Classes Per Instructor", value: "12 – 20/wk" },
  { metric: "Private Sessions Per Week", value: "6 – 14" },
  { metric: "Instructor Utilization", value: "70 – 85%" },
  { metric: "Revenue Per Teaching Hour", value: "$85 – $145" },
] as const;

export const clientEconomicsMetrics: readonly SourcedMemberMetric[] = [
  {
    metric: "Average Monthly Membership Fee",
    value: "$165/mo",
    range: "$120 – $220/mo",
    description: "Core unlimited or high-tier membership price point.",
    source: "BizMetricsHQ Pilates studio panel",
  },
  {
    metric: "Client Lifetime Value",
    value: "$3,100",
    range: "$2,400 – $4,200",
    description: "Blended LTV including private session upsells.",
    source: "Composite ARPU × tenure model",
    formula: "Monthly ARPU × Average Contract Length",
  },
  {
    metric: "Monthly Churn",
    value: "3.8%",
    range: "2.5 – 6%",
    description: "Typical reformer studio monthly cancellation rate.",
    source: "Boutique fitness operator benchmarks",
  },
  {
    metric: "Revenue Per Visit",
    value: "$28 – $42",
    range: "$22 – $55",
    description: "Varies by membership vs. pack pricing and private mix.",
    source: "Studio revenue ÷ monthly visits",
  },
  {
    metric: "Average Visits Per Member",
    value: "7.5/mo",
    range: "5 – 12/mo",
    description: "Engagement frequency for active members.",
    source: "Operator attendance data composite",
  },
  {
    metric: "Average Contract Length",
    value: "16 mo",
    range: "12 – 22 mo",
    description: "Implied tenure before cancel or pause.",
    source: "Derived from churn and retention benchmarks",
  },
] as const;

export const clientEconomicsMethodology = {
  summary:
    "Client economics combine boutique fitness operator benchmarks, reformer studio revenue-mix data, and published retention studies. Figures are directional ranges — not substitutes for your own studio management reports.",
  primarySources: [
    "BizMetricsHQ — 140+ Pilates and reformer studio operator composite",
    "Health & Fitness Association (HFA) — boutique retention context",
    "Published boutique fitness CAC and ARPU studies (2024–2026)",
  ],
} as const;

export const marginTiers = {
  poor: "10 – 14%",
  average: "15 – 20%",
  good: "21 – 25%",
  excellent: "26 – 32%",
} as const;

export const marginMetrics = [
  { metric: "Gross Margin", value: "55 – 68%" },
  { metric: "Net Margin", value: "18 – 28%" },
  { metric: "EBITDA Margin", value: "22 – 32%" },
] as const;

export const expenseBreakdown = [
  { expense: "Instructor Payroll", percent: "32 – 42%" },
  { expense: "Rent & Occupancy", percent: "15 – 22%" },
  { expense: "Equipment & Maintenance", percent: "6 – 10%" },
  { expense: "Marketing & Acquisition", percent: "8 – 12%" },
  { expense: "Software & Admin", percent: "4 – 7%" },
  { expense: "Insurance & Utilities", percent: "4 – 8%" },
] as const;

export const ownerEconomicsCards = [
  { model: "Solo Studio Owner", earnings: "$90K – $120K" },
  { model: "Small Boutique Studio", earnings: "$120K – $160K" },
  { model: "Multi-Studio Owner", earnings: "$160K – $240K" },
  { model: "Regional Operator", earnings: "$240K – $380K+" },
] as const;

export const valuationMultiples = [
  { metric: "SDE Multiple", range: "2.5× – 3.8×" },
  { metric: "EBITDA Multiple", range: "3.5× – 5.5×" },
  { metric: "Revenue Multiple", range: "0.5× – 0.9×" },
] as const;

export const valuationDefaults = {
  revenue: "850000",
  sde: "195000",
  multiple: "3.8",
  multipleLow: 2.5,
  multipleHigh: 3.8,
  revenueMultiple: 0.7,
  sdeMarginPct: 0.23,
};

export const topPerformerPractices = [
  "Maintain high class occupancy",
  "Increase member retention",
  "Offer premium private sessions",
  "Upsell workshops and teacher training",
  "Optimize instructor schedules",
  "Build recurring memberships rather than relying on drop-ins",
] as const;

export const industryOpportunities = [
  "Aging population seeking low-impact exercise",
  "Growing demand for boutique fitness",
  "Corporate wellness programs",
  "Premium health and wellness spending",
  "Hybrid in-person and virtual memberships",
] as const;

export const industryRisks = [
  "Instructor recruitment",
  "Studio occupancy management",
  "High lease costs",
  "Equipment investment",
  "Local competition",
  "Client retention",
] as const;

export const businessQualityScorecard = {
  industryName: "Typical Pilates Studio",
  items: [
    { label: "Recurring Revenue", rating: 5 },
    { label: "Revenue Stability", rating: 4 },
    { label: "Premium Pricing", rating: 5 },
    { label: "Client Retention", rating: 4 },
    { label: "Scalability", rating: 4 },
    { label: "Exit Potential", rating: 4 },
  ],
} as const;

export const boutiqueFitnessPerformanceIndex = {
  columns: ["Pilates", "Gym", "Yoga", "CrossFit", "Barre"] as const,
  rows: [
    { metric: "Recurring Revenue", values: [5, 5, 4, 4, 5] },
    { metric: "Revenue per Client", values: [5, 2, 3, 4, 4] },
    { metric: "Profit Margin", values: [4, 3, 4, 4, 4] },
    { metric: "Startup Cost", values: [3, 5, 4, 3, 3], higherIsWorse: true },
    { metric: "Valuation Potential", values: [4, 3, 4, 4, 4] },
  ],
} as const;

export const fitnessBenchmarkRankings = [
  {
    label: "Highest Margin Fitness Businesses",
    description: "Boutique studios and specialty formats with premium pricing.",
    href: "/industries/pilates-studio/reports/pilates-highest-margin-fitness-2026/",
  },
  {
    label: "Highest Valuation Fitness Businesses",
    description: "Membership models with low churn and strong MRR.",
    href: "/industries/pilates-studio/reports/pilates-highest-valued-fitness-2026/",
  },
  {
    label: "Best Recurring Revenue Fitness Businesses",
    description: "Gyms, CrossFit boxes, and subscription-heavy studios.",
    href: "/industries/pilates-studio/reports/pilates-best-recurring-revenue-fitness-2026/",
  },
  {
    label: "Lowest Startup Cost Fitness Businesses",
    description: "Studio formats vs full-service gym buildouts.",
    href: "/industries/pilates-studio/reports/pilates-lowest-startup-cost-fitness-2026/",
  },
] as const;

export const benchmarkThresholds = {
  revenue: { low: 420000, median: 850000, high: 1100000 },
  profitMargin: { low: 14, median: 22, high: 28 },
  technicians: { low: 80, median: 150, high: 220 },
  maintenancePct: { low: 80, median: 90, high: 95 },
};

export const benchmarkDefaults = {
  revenue: "850000",
  margin: "22",
  technicians: "150",
  recurringPct: "90",
};

export const hubFaqs = [
  {
    question: "How profitable is a Pilates studio?",
    answer:
      "Healthy reformer studios typically achieve 18–28% net profit margin, with a median around 22%. Studios with high class occupancy, strong private-session mix, and efficient instructor scheduling can reach 25%+. High rent markets compress margins below 16%.",
  },
  {
    question: "What is the average Pilates studio revenue?",
    answer:
      "The median Pilates studio generates about $850K in annual revenue. The interquartile range spans $420K (25th percentile) to $1.1M (75th percentile), with top-performing multi-studio operators exceeding $1.4M.",
  },
  {
    question: "How much do Pilates studio owners make?",
    answer:
      "Pilates studio owners typically earn $90K–$170K in total compensation, with a median around $145K for owner-operators of established single-location studios. Multi-studio operators with strong membership and private revenue can exceed $240K.",
  },
  {
    question: "What is a Pilates studio worth?",
    answer:
      "Pilates studios typically sell at 2.5×–3.8× SDE, with quality assets near 3.8×. A studio with $850K revenue and $195K SDE might value between $490K and $740K. Low churn and high recurring revenue support premium multiples.",
  },
  {
    question: "What is a good membership retention rate?",
    answer:
      "Strong Pilates studios retain 70–78% of members annually (roughly 2.5–3.5% monthly churn). Studios below 65% annual retention should audit onboarding, instructor consistency, and pricing before scaling marketing.",
  },
  {
    question: "How many members does a Pilates studio need to be profitable?",
    answer:
      "Most reformer studios break even between 80–120 active members depending on rent, instructor payroll, and reformer count. At $165/mo average membership plus private upsells, 140–180 engaged members typically supports healthy margins.",
  },
  {
    question: "How important is class occupancy?",
    answer:
      "Class occupancy is one of the most important operational metrics for boutique studios. Target 65–78% average occupancy and 85%+ at peak hours. Low occupancy signals scheduling mismatch, pricing issues, or instructor-market fit problems.",
  },
  {
    question: "What is the average revenue per reformer?",
    answer:
      "Well-run studios generate $1,800–$3,200 per reformer per month depending on class density, private session mix, and market pricing. Underutilized reformers below $1,500/mo often indicate scheduling or demand problems.",
  },
] as const;
