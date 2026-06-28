import type { SourcedMemberMetric } from "@/lib/industries/gym";

export const crossfitGymMeta = {
  slug: "crossfit-gym",
  name: "CrossFit Gym",
  title: "CrossFit Gym Business Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, membership economics, coaching metrics and business valuation for CrossFit affiliates.",
  dataVintage: "2025–2026",
  sampleSize: "95+ CrossFit affiliates",
  geography: "United States",
};

export const industrySnapshotRatings = [
  { label: "Category", value: "Fitness & Wellness", rating: null },
  { label: "Business Model", value: "Monthly Membership", rating: null },
  { label: "Recurring Revenue", value: "Very High", rating: 5 },
  { label: "Average Class Size", value: "Small Group", rating: null },
  { label: "Capital Requirement", value: "Medium", rating: 3 },
  { label: "Community Dependence", value: "Very High", rating: 5 },
] as const;

export const industryInsights = [
  {
    title: "Membership-driven recurring revenue",
    body: "CrossFit gyms generate recurring monthly revenue through memberships while increasing customer value with personal training, foundations/on-ramp programs, nutrition coaching, specialty courses, merchandise, competitions, and kids and teen programs.",
  },
  {
    title: "Coach quality is the product",
    body: "Unlike traditional gyms, success depends heavily on coach quality, member retention, and class utilization. A box with 120 engaged members and high coach productivity often outperforms one with 200 low-attendance members.",
  },
  {
    title: "Community as retention engine",
    body: "Tribal community culture drives referral growth and low churn relative to volume clubs. Members who attend 3+ classes per week and participate in events show materially higher LTV.",
  },
  {
    title: "Ancillary revenue compounds margin",
    body: "Nutrition coaching, foundations programs, and personal training can represent 20–35% of revenue at mature affiliates — improving margin without proportional rent increases.",
  },
] as const;

export const revenuePercentiles = [
  { percentile: "25th", revenue: "$520K" },
  { percentile: "Median", revenue: "$950K" },
  { percentile: "75th", revenue: "$1.25M" },
  { percentile: "Top 10%", revenue: "$1.5M+" },
] as const;

export const revenueDistribution = {
  bottom25: "$520K",
  median: "$950K",
  top25: "$1.25M",
};

export const revenueMix = [
  { label: "Membership Revenue", share: 58, description: "Unlimited and tiered monthly membership plans" },
  { label: "Personal Training", share: 14, description: "1-on-1 and semi-private coaching sessions" },
  { label: "Nutrition Coaching", share: 10, description: "Challenges, macro coaching, and accountability programs" },
  { label: "Foundations Program", share: 8, description: "On-ramp and fundamentals course fees" },
  { label: "Retail", share: 5, description: "Apparel, supplements, and branded merchandise" },
  { label: "Events & Competitions", share: 5, description: "In-house throwdowns, seminars, and competition entries" },
] as const;

export const membershipEconomics: readonly SourcedMemberMetric[] = [
  {
    metric: "Monthly Membership Fee",
    value: "$185/mo",
    range: "$150 – $250/mo",
    description: "Unlimited or high-frequency membership tiers at affiliate boxes.",
    source: "BizMetricsHQ composite; CrossFit affiliate operator surveys",
  },
  {
    metric: "Recurring Monthly Revenue",
    value: "$72K/mo",
    range: "$48K – $95K/mo",
    description: "Median MRR for a ~$950K annual revenue affiliate.",
    source: "Derived from membership share and autopay enrollment",
    formula: "Active Members × Average Monthly Dues",
  },
  {
    metric: "Revenue Per Member",
    value: "$210/mo",
    range: "$165 – $285/mo",
    description: "Membership plus PT, nutrition, and retail attach.",
    source: "Composite from affiliate revenue/member benchmarks",
    formula: "Total Monthly Member Revenue ÷ Active Members",
  },
  {
    metric: "Member Lifetime Value",
    value: "$3,400 – $5,800",
    range: "$2,600 – $6,500",
    description: "Community-driven retention supports strong LTV vs mass-market gyms.",
    source: "Derived from ARPU and 18–26 month average tenure",
    formula: "Revenue per Member per Month × Average Tenure (months)",
  },
  {
    metric: "Monthly Churn",
    value: "3.5 – 5.5%",
    range: "2.5 – 7%",
    description: "Strong community affiliates retain better; economic dips can spike churn.",
    source: "Boutique fitness retention benchmarks; HFA club data as floor reference",
  },
  {
    metric: "Average Visits Per Member",
    value: "8 – 12 visits/mo",
    range: "5 – 16 visits/mo",
    description: "Engaged members attend 2–3× per week; drives class fill planning.",
    source: "Affiliate operator attendance tracking benchmarks",
  },
] as const;

export const classUtilizationBenchmarks = [
  { metric: "Average Class Size", value: "12 – 16 athletes" },
  { metric: "Peak Hour Occupancy", value: "85 – 98%" },
  { metric: "Off-Peak Occupancy", value: "45 – 62%" },
  { metric: "Classes Per Day", value: "8 – 14" },
  { metric: "Revenue Per Class", value: "$280 – $420" },
  { metric: "Coach Utilization", value: "72 – 88%" },
] as const;

export const coachProductivityBenchmarks = [
  { metric: "Revenue Per Coach", value: "$125K – $210K/yr" },
  { metric: "Members Per Coach", value: "35 – 65 active" },
  { metric: "Classes Per Coach", value: "14 – 22/wk" },
  { metric: "Personal Training Revenue", value: "$12K – $35K/yr per coach" },
  { metric: "Revenue Per Coaching Hour", value: "$85 – $145" },
  { metric: "Coach Retention", value: "78 – 92% annual" },
] as const;

export const memberRetentionBenchmarks = [
  { metric: "Member Retention", value: "★★★★★", isRating: true as const },
  { metric: "Average Membership Length", value: "18 – 28 months" },
  { metric: "Referral Rate", value: "25 – 40% of new members" },
  { metric: "Monthly Churn", value: "3.5 – 5.5%" },
  { metric: "Attendance Frequency", value: "2.5 – 3.5 classes/wk" },
] as const;

export const memberEconomicsMetrics: readonly SourcedMemberMetric[] = [
  {
    metric: "Revenue Per Member",
    value: "$210/mo",
    range: "$165 – $285/mo",
    description: "Blended monthly revenue including ancillary purchases.",
    source: "BizMetricsHQ CrossFit affiliate panel",
  },
  {
    metric: "Lifetime Value",
    value: "$4,200",
    range: "$3,400 – $5,800",
    description: "Blended LTV including nutrition and PT upsells.",
    source: "Composite ARPU × tenure model",
    formula: "Monthly ARPU × Average Membership Length",
  },
  {
    metric: "Monthly Churn",
    value: "4.2%",
    range: "2.8 – 6.5%",
    description: "Typical affiliate monthly cancellation rate.",
    source: "Boutique fitness operator benchmarks",
  },
  {
    metric: "Average Membership Fee",
    value: "$185/mo",
    range: "$150 – $250/mo",
    description: "Core unlimited membership price point.",
    source: "Affiliate dues benchmarks",
  },
  {
    metric: "Average Visits Per Month",
    value: "9.5/mo",
    range: "6 – 14/mo",
    description: "Engagement frequency for active members.",
    source: "Operator attendance data composite",
  },
  {
    metric: "Referral Rate",
    value: "30%",
    range: "20 – 40%",
    description: "Share of new members acquired through member referrals.",
    source: "Affiliate marketing mix composite",
  },
] as const;

export const memberEconomicsMethodology = {
  summary:
    "Member economics combine CrossFit affiliate operator benchmarks, revenue-mix data, and published retention studies. Figures are directional ranges — not substitutes for your own gym management reports.",
  primarySources: [
    "BizMetricsHQ — 95+ CrossFit affiliate operator composite",
    "Health & Fitness Association (HFA) — boutique retention context",
    "Published boutique fitness CAC and ARPU studies (2024–2026)",
  ],
} as const;

export const marginTiers = {
  poor: "9 – 13%",
  average: "14 – 19%",
  good: "20 – 24%",
  excellent: "25 – 30%",
} as const;

export const marginMetrics = [
  { metric: "Gross Margin", value: "58 – 72%" },
  { metric: "Net Margin", value: "15 – 25%" },
  { metric: "EBITDA Margin", value: "19 – 28%" },
] as const;

export const expenseBreakdown = [
  { expense: "Coach Payroll", percent: "35 – 45%" },
  { expense: "Rent & Occupancy", percent: "14 – 22%" },
  { expense: "Affiliate & Software Fees", percent: "4 – 8%" },
  { expense: "Marketing & Acquisition", percent: "8 – 14%" },
  { expense: "Equipment & Maintenance", percent: "5 – 10%" },
  { expense: "Insurance & Utilities", percent: "5 – 9%" },
] as const;

export const ownerEconomicsCards = [
  { model: "Owner-Coach", earnings: "$75K – $110K" },
  { model: "Single Affiliate", earnings: "$110K – $165K" },
  { model: "Multi-Affiliate Owner", earnings: "$165K – $250K" },
  { model: "Regional Fitness Operator", earnings: "$250K – $380K+" },
] as const;

export const valuationMultiples = [
  { metric: "SDE Multiple", range: "2.8× – 4.2×" },
  { metric: "EBITDA Multiple", range: "3.6× – 5.6×" },
  { metric: "Revenue Multiple", range: "0.5× – 1.0×" },
] as const;

export const valuationDefaults = {
  revenue: "950000",
  sde: "200000",
  multiple: "3.7",
  multipleLow: 2.8,
  multipleHigh: 4.2,
  revenueMultiple: 0.7,
  sdeMarginPct: 0.21,
};

export const topPerformerPractices = [
  "Maintain strong member retention",
  "Keep classes consistently full",
  "Develop high-performing coaches",
  "Upsell nutrition coaching",
  "Offer specialty programs",
  "Build an engaged community",
] as const;

export const industryOpportunities = [
  "Functional fitness demand",
  "Small-group training popularity",
  "Corporate wellness partnerships",
  "Nutrition coaching",
  "Youth fitness programs",
  "Online programming",
] as const;

export const industryRisks = [
  "Coach recruitment",
  "Member churn",
  "Economic sensitivity",
  "Facility lease costs",
  "Affiliate fee obligations",
  "Local competition",
] as const;

export const businessQualityScorecard = {
  industryName: "Typical CrossFit Affiliate",
  items: [
    { label: "Recurring Revenue", rating: 5 },
    { label: "Revenue Stability", rating: 4 },
    { label: "Community Engagement", rating: 5 },
    { label: "Premium Pricing", rating: 4 },
    { label: "Scalability", rating: 3 },
    { label: "Exit Potential", rating: 4 },
  ],
} as const;

export const functionalFitnessBenchmarkMatrix = {
  columns: ["CrossFit", "Gym", "Pilates", "Yoga", "Personal Training"] as const,
  rows: [
    { metric: "Recurring Revenue", values: [5, 5, 5, 5, 3] },
    { metric: "Revenue per Member", values: [4, 2, 5, 3, 5] },
    { metric: "Coach Dependency", values: [5, 2, 4, 4, 5] },
    { metric: "Community Loyalty", values: [5, 3, 4, 5, 3] },
    { metric: "Profit Margin", values: [4, 3, 4, 4, 4] },
    { metric: "Valuation Potential", values: [4, 3, 4, 3, 3] },
  ],
} as const;

export const fitnessBenchmarkRankings = [
  {
    label: "Highest Margin Fitness Businesses",
    description: "Why CrossFit affiliates rank among the highest-margin coached fitness models — coach productivity, class utilization, and nutrition upsells.",
    href: "/industries/crossfit-gym/reports/crossfit-highest-margin-fitness-2026/",
  },
  {
    label: "Highest Valuation Fitness Businesses",
    description: "CrossFit affiliate SDE multiples, M&A comps, and what drives premium exit prices for community-driven boxes.",
    href: "/industries/crossfit-gym/reports/crossfit-highest-valued-fitness-2026/",
  },
  {
    label: "Best Recurring Revenue Fitness Businesses",
    description: "CrossFit membership MRR models, autopay economics, and why affiliates lead subscription coached fitness.",
    href: "/industries/crossfit-gym/reports/crossfit-best-recurring-revenue-fitness-2026/",
  },
  {
    label: "Lowest Startup Cost Fitness Businesses",
    description: "CrossFit affiliate launch capex, capital efficiency vs gyms, and break-even member targets for new boxes.",
    href: "/industries/crossfit-gym/reports/crossfit-lowest-startup-cost-fitness-2026/",
  },
  {
    label: "Fastest Growing Fitness Businesses",
    description: "Functional fitness growth trends, same-store revenue levers, and multi-affiliate expansion for CrossFit operators.",
    href: "/industries/crossfit-gym/reports/crossfit-fastest-growing-fitness-2026/",
  },
] as const;

export const benchmarkThresholds = {
  revenue: { low: 520000, median: 950000, high: 1250000 },
  profitMargin: { low: 13, median: 21, high: 25 },
  technicians: { low: 100, median: 180, high: 280 },
  maintenancePct: { low: 78, median: 88, high: 95 },
};

export const benchmarkDefaults = {
  revenue: "950000",
  margin: "21",
  technicians: "180",
  recurringPct: "91",
};

export const hubFaqs = [
  {
    question: "How profitable is a CrossFit gym?",
    answer:
      "Healthy CrossFit affiliates typically achieve 15–25% net profit margin, with a median around 21%. Boxes with strong coach productivity, high class utilization, and nutrition upsells can reach 24%+. High rent markets compress margins below 14%.",
  },
  {
    question: "What is the average CrossFit gym revenue?",
    answer:
      "The median CrossFit affiliate generates about $950K in annual revenue. The interquartile range spans $520K (25th percentile) to $1.25M (75th percentile), with top-performing multi-box operators exceeding $1.5M.",
  },
  {
    question: "How much do CrossFit gym owners make?",
    answer:
      "CrossFit gym owners typically earn $75K–$200K in total compensation, with a median around $150K for owner-operators of established single-location affiliates. Multi-box operators with strong membership and coach systems can exceed $250K.",
  },
  {
    question: "What is a CrossFit affiliate worth?",
    answer:
      "CrossFit affiliates typically sell at 2.8×–4.2× SDE, with quality assets near 3.7×. A box with $950K revenue and $200K SDE might value between $560K and $840K. Low churn, coach systems, and strong community support premium multiples.",
  },
  {
    question: "How many members are needed to be profitable?",
    answer:
      "Most CrossFit affiliates break even between 80–120 active members depending on rent and coach payroll. At $185/mo average membership plus PT upsells, 140–200 engaged members typically supports healthy margins.",
  },
  {
    question: "What is a healthy member retention rate?",
    answer:
      "Strong affiliates retain 70–80% of members annually (roughly 3–5% monthly churn). Boxes below 65% annual retention should audit onboarding, coach consistency, and programming before scaling marketing.",
  },
  {
    question: "How much revenue should each coach generate?",
    answer:
      "Well-utilized coaches generate $125K–$210K in annual box revenue through group classes and personal training. Top performers with strong PT books exceed $180K per coach annually.",
  },
  {
    question: "How many classes should a CrossFit gym run each day?",
    answer:
      "Mature affiliates typically run 8–14 classes per day across morning, midday, and evening blocks. Peak-hour classes should run near capacity before adding off-peak slots.",
  },
] as const;
