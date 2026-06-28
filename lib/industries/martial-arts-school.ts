import type { SourcedMemberMetric } from "@/lib/industries/gym";

export const martialArtsSchoolMeta = {
  slug: "martial-arts-school",
  name: "Martial Arts School",
  title: "Martial Arts School Business Benchmarks",
  subtitle:
    "Revenue, profit margins, owner salaries, tuition economics and business valuation for martial arts schools.",
  dataVintage: "2025–2026",
  sampleSize: "110+ martial arts schools",
  geography: "United States",
};

export const industrySnapshotRatings = [
  { label: "Category", value: "Fitness & Youth Education", rating: null },
  { label: "Business Model", value: "Monthly Tuition", rating: null },
  { label: "Recurring Revenue", value: "Very High", rating: 5 },
  { label: "Capital Requirement", value: "Medium", rating: 3 },
  { label: "Primary Audience", value: "Children & Families", rating: null },
  { label: "Retention Importance", value: "Very High", rating: 5 },
] as const;

export const industryInsights = [
  {
    title: "Stable tuition-based revenue",
    body: "Martial arts schools generate stable recurring revenue through monthly tuition while increasing customer value with belt testing fees, private lessons, summer camps, birthday parties, merchandise, tournament fees, and leadership programs.",
  },
  {
    title: "Progression drives retention",
    body: "Unlike traditional gyms, long-term revenue is heavily influenced by student progression and family retention. Belt advancement, goal-setting, and parent engagement create multi-year enrollment cycles.",
  },
  {
    title: "Kids programs anchor economics",
    body: "Children's after-school programs often represent 55–75% of enrollment at profitable schools. Family plans and sibling discounts increase household LTV while reducing acquisition cost per student.",
  },
  {
    title: "Ancillary revenue compounds margin",
    body: "Belt testing, camps, and retail can represent 20–35% of revenue at mature academies — improving annual stability and reducing dependence on pure tuition growth.",
  },
] as const;

export const revenuePercentiles = [
  { percentile: "25th", revenue: "$420K" },
  { percentile: "Median", revenue: "$780K" },
  { percentile: "75th", revenue: "$1.05M" },
  { percentile: "Top 10%", revenue: "$1.3M+" },
] as const;

export const revenueDistribution = {
  bottom25: "$420K",
  median: "$780K",
  top25: "$1.05M",
};

export const revenueMix = [
  { label: "Monthly Tuition", share: 52, description: "Recurring program tuition and family plans" },
  { label: "Private Lessons", share: 12, description: "1-on-1 and small-group instruction" },
  { label: "Belt Testing", share: 10, description: "Promotion fees and graduation events" },
  { label: "Summer Camps", share: 11, description: "Seasonal camps and school-break programs" },
  { label: "Merchandise", share: 8, description: "Uniforms, gear, and branded apparel" },
  { label: "Competitions & Events", share: 7, description: "Tournament fees, seminars, and birthday parties" },
] as const;

export const tuitionEconomics: readonly SourcedMemberMetric[] = [
  {
    metric: "Average Monthly Tuition",
    value: "$145/mo",
    range: "$110 – $195/mo",
    description: "Typical unlimited or multi-class program tuition per student.",
    source: "BizMetricsHQ composite; martial arts operator surveys",
  },
  {
    metric: "Recurring Monthly Revenue",
    value: "$58K/mo",
    range: "$38K – $78K/mo",
    description: "Median tuition MRR for a ~$780K annual revenue school.",
    source: "Derived from tuition share and autopay enrollment",
    formula: "Active Students × Average Monthly Tuition",
  },
  {
    metric: "Revenue Per Student",
    value: "$168/mo",
    range: "$120 – $220/mo",
    description: "Tuition plus belt fees, camps, and retail attach.",
    source: "Composite from school revenue/student benchmarks",
    formula: "Total Monthly Student Revenue ÷ Active Students",
  },
  {
    metric: "Student Lifetime Value",
    value: "$3,800 – $6,200",
    range: "$2,800 – $7,500",
    description: "Higher than adult gyms due to multi-year kids enrollment and family plans.",
    source: "Derived from ARPU and 22–38 month average tenure",
    formula: "Revenue per Student per Month × Average Enrollment (months)",
  },
  {
    metric: "Average Membership Length",
    value: "28 mo",
    range: "18 – 42 mo",
    description: "Kids programs often retain longer than adult boutique fitness.",
    source: "Operator retention and progression benchmarks",
  },
  {
    metric: "Tuition Renewal Rate",
    value: "72 – 82%",
    range: "65 – 88%",
    description: "Annual contract or program renewal among active families.",
    source: "Martial arts school operator panel",
  },
] as const;

export const studentRetentionBenchmarks = [
  { metric: "Student Retention", value: "★★★★★", isRating: true as const },
  { metric: "Average Membership Length", value: "22 – 38 months" },
  { metric: "Belt Advancement Rate", value: "68 – 85% promote annually" },
  { metric: "Monthly Churn", value: "3 – 5%" },
  { metric: "Family Retention Rate", value: "74 – 86%" },
] as const;

export const programPerformanceBenchmarks = [
  { metric: "Kids Program Revenue", value: "55 – 75% of total" },
  { metric: "Adult Program Revenue", value: "15 – 30% of total" },
  { metric: "Private Lesson Revenue", value: "8 – 16% of total" },
  { metric: "Competition Program Revenue", value: "4 – 12% of total" },
  { metric: "Leadership Program Revenue", value: "3 – 10% of total" },
] as const;

export const instructorProductivityBenchmarks = [
  { metric: "Revenue Per Instructor", value: "$110K – $185K/yr" },
  { metric: "Students Per Instructor", value: "45 – 85 active" },
  { metric: "Classes Per Week", value: "18 – 28" },
  { metric: "Private Lessons Per Month", value: "12 – 35" },
  { metric: "Revenue Per Teaching Hour", value: "$75 – $125" },
] as const;

export const studentEconomicsMetrics: readonly SourcedMemberMetric[] = [
  {
    metric: "Revenue Per Student",
    value: "$168/mo",
    range: "$120 – $220/mo",
    description: "Blended monthly revenue including ancillary purchases.",
    source: "BizMetricsHQ martial arts school panel",
  },
  {
    metric: "Lifetime Value",
    value: "$4,700",
    range: "$3,800 – $6,200",
    description: "Blended LTV including belt testing and camp upsells.",
    source: "Composite ARPU × tenure model",
    formula: "Monthly ARPU × Average Enrollment Length",
  },
  {
    metric: "Monthly Churn",
    value: "3.8%",
    range: "2.5 – 6%",
    description: "Typical monthly student cancellation rate.",
    source: "Youth activity operator benchmarks",
  },
  {
    metric: "Average Attendance",
    value: "2.1 classes/wk",
    range: "1.5 – 3 classes/wk",
    description: "Engagement frequency for enrolled students.",
    source: "School attendance tracking composite",
  },
  {
    metric: "Average Tuition",
    value: "$145/mo",
    range: "$110 – $195/mo",
    description: "Core program tuition before ancillary revenue.",
    source: "Tuition tier benchmarks",
  },
  {
    metric: "Referral Rate",
    value: "32%",
    range: "22 – 45%",
    description: "Share of new students acquired through family referrals.",
    source: "School marketing mix composite",
  },
] as const;

export const studentEconomicsMethodology = {
  summary:
    "Student economics combine martial arts operator benchmarks, tuition revenue-mix data, and published youth retention studies. Figures are directional ranges — not substitutes for your own school management reports.",
  primarySources: [
    "BizMetricsHQ — 110+ martial arts school operator composite",
    "Health & Fitness Association (HFA) — youth activity retention context",
    "Published after-school program ARPU & retention studies (2024–2026)",
  ],
} as const;

export const marginTiers = {
  poor: "10 – 14%",
  average: "15 – 20%",
  good: "21 – 26%",
  excellent: "27 – 32%",
} as const;

export const marginMetrics = [
  { metric: "Gross Margin", value: "62 – 76%" },
  { metric: "Net Margin", value: "18 – 28%" },
  { metric: "EBITDA Margin", value: "22 – 32%" },
] as const;

export const expenseBreakdown = [
  { expense: "Instructor Payroll", percent: "32 – 42%" },
  { expense: "Rent & Occupancy", percent: "14 – 22%" },
  { expense: "Marketing & Acquisition", percent: "8 – 14%" },
  { expense: "Equipment & Mats", percent: "4 – 8%" },
  { expense: "Software & Admin", percent: "4 – 7%" },
  { expense: "Insurance & Utilities", percent: "5 – 9%" },
] as const;

export const ownerEconomicsCards = [
  { model: "Single Location Owner", earnings: "$95K – $140K" },
  { model: "Growing Academy", earnings: "$140K – $185K" },
  { model: "Multi-School Owner", earnings: "$185K – $280K" },
  { model: "Regional Brand", earnings: "$280K – $420K+" },
] as const;

export const valuationMultiples = [
  { metric: "SDE Multiple", range: "2.6× – 4.2×" },
  { metric: "EBITDA Multiple", range: "3.4× – 5.4×" },
  { metric: "Revenue Multiple", range: "0.5× – 0.9×" },
] as const;

export const valuationDefaults = {
  revenue: "780000",
  sde: "187000",
  multiple: "3.9",
  multipleLow: 2.6,
  multipleHigh: 4.2,
  revenueMultiple: 0.65,
  sdeMarginPct: 0.24,
};

export const topPerformerPractices = [
  "Focus on children's enrollment",
  "Improve student retention",
  "Build leadership programs",
  "Increase private lesson sales",
  "Promote referrals",
  "Develop instructor career paths",
] as const;

export const industryOpportunities = [
  "Increasing youth sports participation",
  "Parent demand for character-building activities",
  "After-school programs",
  "Women's self-defense classes",
  "Family memberships",
  "Corporate wellness and team-building",
] as const;

export const industryRisks = [
  "Instructor recruitment",
  "Student churn",
  "Facility lease costs",
  "Competition from low-cost fitness options",
  "Seasonal enrollment fluctuations",
] as const;

export const businessQualityScorecard = {
  industryName: "Typical Martial Arts School",
  items: [
    { label: "Recurring Revenue", rating: 5 },
    { label: "Revenue Stability", rating: 5 },
    { label: "Community Loyalty", rating: 5 },
    { label: "Premium Pricing", rating: 4 },
    { label: "Scalability", rating: 4 },
    { label: "Exit Potential", rating: 4 },
  ],
} as const;

export const youthActivityBenchmarkMatrix = {
  columns: ["Martial Arts", "Dance Studio", "Gym", "Yoga Studio", "Swim School"] as const,
  rows: [
    { metric: "Recurring Revenue", values: [5, 5, 5, 5, 5] },
    { metric: "Child-Focused Revenue", values: [5, 5, 1, 1, 5] },
    { metric: "Student Retention", values: [5, 4, 3, 4, 4] },
    { metric: "Revenue per Student", values: [4, 4, 2, 3, 4] },
    { metric: "Profit Margin", values: [4, 4, 3, 4, 4] },
    { metric: "Valuation Potential", values: [4, 3, 3, 3, 4] },
  ],
} as const;

export const fitnessBenchmarkRankings = [
  {
    label: "Highest Margin Fitness Businesses",
    description: "Boutique studios and specialty formats with premium pricing.",
    href: "/industries/martial-arts-school/reports/martial-arts-highest-margin-fitness-2026/",
  },
  {
    label: "Highest Valuation Fitness Businesses",
    description: "Membership and tuition models with low churn and strong MRR.",
    href: "/industries/martial-arts-school/reports/martial-arts-highest-valued-fitness-2026/",
  },
  {
    label: "Best Recurring Revenue Fitness Businesses",
    description: "Gyms, martial arts schools, and subscription-heavy formats.",
    href: "/industries/martial-arts-school/reports/martial-arts-best-recurring-revenue-fitness-2026/",
  },
  {
    label: "Lowest Startup Cost Fitness Businesses",
    description: "Studio formats vs full-service gym buildouts.",
    href: "/industries/martial-arts-school/reports/martial-arts-lowest-startup-cost-fitness-2026/",
  },
  {
    label: "Best Children's Activity Businesses",
    description: "Martial arts, dance, swim, and youth enrichment formats ranked by retention and LTV.",
    href: "/industries/martial-arts-school/reports/martial-arts-best-childrens-activity-businesses-2026/",
  },
] as const;

export const benchmarkThresholds = {
  revenue: { low: 420000, median: 780000, high: 1050000 },
  profitMargin: { low: 14, median: 24, high: 28 },
  technicians: { low: 120, median: 220, high: 350 },
  maintenancePct: { low: 78, median: 89, high: 95 },
};

export const benchmarkDefaults = {
  revenue: "780000",
  margin: "24",
  technicians: "220",
  recurringPct: "89",
};

export const hubFaqs = [
  {
    question: "How profitable is a martial arts school?",
    answer:
      "Healthy martial arts schools typically achieve 18–28% net profit margin, with a median around 24%. Schools with strong kids enrollment, high retention, and diversified camp and belt revenue can reach 26%+. High rent markets compress margins below 16%.",
  },
  {
    question: "What is the average martial arts school revenue?",
    answer:
      "The median martial arts school generates about $780K in annual revenue. The interquartile range spans $420K (25th percentile) to $1.05M (75th percentile), with top-performing multi-location operators exceeding $1.3M.",
  },
  {
    question: "How much do martial arts school owners make?",
    answer:
      "Martial arts school owners typically earn $95K–$200K in total compensation, with a median around $160K for owner-operators of established single-location schools. Multi-school operators with strong kids programs can exceed $280K.",
  },
  {
    question: "What is a martial arts school worth?",
    answer:
      "Martial arts schools typically sell at 2.6×–4.2× SDE, with quality assets near 3.9×. A school with $780K revenue and $187K SDE might value between $486K and $785K. Low churn, strong kids pipeline, and transferable instructor systems support premium multiples.",
  },
  {
    question: "How many students are needed to be profitable?",
    answer:
      "Most martial arts schools break even between 100–150 active students depending on rent and instructor payroll. At $145/mo average tuition plus belt and camp upsells, 180–250 engaged students typically supports healthy margins.",
  },
  {
    question: "What is a good student retention rate?",
    answer:
      "Strong schools retain 72–82% of students annually on tuition programs (roughly 2.5–4% monthly churn). Schools below 65% annual retention should audit onboarding, belt progression, and parent communication before scaling marketing.",
  },
  {
    question: "How important are children's programs?",
    answer:
      "Children's programs often represent 55–75% of revenue at profitable schools and drive the longest enrollment cycles. After-school pickup, character development positioning, and family plans are core to martial arts economics.",
  },
  {
    question: "How much revenue comes from belt testing and camps?",
    answer:
      "Belt testing typically represents 8–12% of annual revenue; summer camps and school-break programs add another 8–14%. Combined ancillary revenue of 20–35% is common at mature academies with active progression systems.",
  },
] as const;
