import {
  benchmarkThresholds,
  chiropractorProductivityMetrics,
  costStructureFlow,
  expenseBreakdown,
  growthMetrics,
  patientEconomicsFlow,
  patientEconomicsMetrics,
  quickSummary,
  recurringRevenueFlow,
  recurringRevenueMetrics,
  staffingRoles,
  startupCosts,
  valuationMultiples,
  wellnessPlanFlow,
  wellnessPlanTopics,
} from "@/lib/industries/chiropractic-clinic";

export const hubMeta = {
  slug: "chiropractic-clinic",
  parentSlug: "healthcare",
  parentLabel: "Healthcare",
  title: "Chiropractic Clinic Economics & Benchmarks",
  subtitle:
    "Explore chiropractic clinic revenue, profit margins, owner compensation, practice valuations, startup costs, and patient economics.",
  dataVintage: "2025–2026",
  sampleSize: "160+ chiropractic clinics",
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Annual Revenue",
    value: "$500K",
    sublabel: "median clinic revenue",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Profit Margin",
    value: "25–35%",
    sublabel: "healthy range",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Compensation",
    value: "$140K",
    sublabel: "median total comp",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Practice Value",
    value: "2.8× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
  {
    id: "rev-per-dc",
    label: "Revenue Per Chiropractor",
    value: "$320K",
    sublabel: "median per DC",
    href: "#provider-productivity",
    accent: "metric-revenue",
  },
  {
    id: "rev-per-patient",
    label: "Revenue Per Patient",
    value: "$1,100",
    sublabel: "median per year",
    href: "#patient-economics",
    accent: "metric-valuation",
  },
] as const;

export const businessScorecard = {
  industryName: "Chiropractic Clinic",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Scalability", rating: 3 },
    { label: "Startup Difficulty", rating: 3, higherIsWorse: true },
    { label: "Recurring Revenue", rating: 4 },
    { label: "Recession Resistance", rating: 3 },
  ],
} as const;

export const searchQuickLinks = [
  { label: "Revenue", href: "#revenue-benchmark" },
  { label: "Profit Margin", href: "#profitability" },
  { label: "Owner Salary", href: "#owner-economics" },
  { label: "Valuation", href: "#valuation" },
] as const;

export const industrySnapshot = quickSummary;

export const exploreTopics = [
  {
    id: "revenue",
    title: "Revenue",
    subtitle: "Annual revenue, practice size, and chiropractor productivity benchmarks.",
    topics: ["Revenue Benchmarks", "Revenue By Practice Size", "Revenue Per Chiropractor", "Revenue By Location"],
    href: "#revenue-benchmark",
    accent: "metric-revenue",
    buttonLabel: "Explore Revenue →",
  },
  {
    id: "profitability",
    title: "Profitability",
    subtitle: "Net profit margin, expense ratios, owner earnings, and benchmark analysis.",
    topics: ["Profit Margins", "Expense Ratios", "Owner Earnings", "Benchmark Analysis"],
    href: "#profitability",
    accent: "metric-margin",
    buttonLabel: "Explore Profitability →",
  },
  {
    id: "owner-comp",
    title: "Owner Compensation",
    subtitle: "Solo owner income, associate pay, multi-clinic owner benchmarks.",
    topics: [
      "Solo Owner Income",
      "Associate Compensation",
      "Multi-Clinic Owner Income",
      "Practice Manager Compensation",
    ],
    href: "#owner-economics",
    accent: "metric-salary",
    buttonLabel: "Explore Owner Pay →",
  },
  {
    id: "startup",
    title: "Startup Costs",
    subtitle: "Buildout, equipment, technology, and working capital.",
    topics: ["Buildout", "Equipment", "Technology", "Working Capital"],
    href: "#startup-costs",
    accent: "metric-valuation",
    buttonLabel: "Explore Startup Costs →",
  },
  {
    id: "valuation",
    title: "Practice Valuation",
    subtitle: "Revenue multiples, profit multiples, and practice worth.",
    topics: ["Revenue Multiples", "Profit Multiples", "Practice Worth", "Exit Planning"],
    href: "#valuation",
    accent: "metric-valuation",
    buttonLabel: "Explore Valuation →",
  },
  {
    id: "patient-economics",
    title: "Patient Economics",
    subtitle: "Revenue per patient, visits, lifetime value, and retention metrics.",
    topics: ["Revenue Per Patient", "Visits Per Patient", "Lifetime Value", "Retention Metrics"],
    href: "#patient-economics",
    accent: "metric-revenue",
    buttonLabel: "Explore Patient Economics →",
  },
] as const;

export const hubCalculators = [
  {
    label: "Chiropractic Clinic Valuation Calculator",
    description: "Estimate practice value",
    href: "/calculators/chiropractic-clinic-valuation/",
  },
  {
    label: "Revenue Per Patient Calculator",
    description: "Calculate patient value",
    href: "/calculators/chiropractic-clinic-revenue-per-patient/",
  },
  {
    label: "Profit Margin Calculator",
    description: "Calculate profitability",
    href: "/calculators/chiropractic-clinic-profit-margin/",
  },
  {
    label: "Break-Even Calculator",
    description: "Estimate required visits",
    href: "/calculators/chiropractic-clinic-break-even/",
  },
  {
    label: "Revenue Calculator",
    description: "Estimate annual revenue",
    href: "/calculators/chiropractic-clinic-revenue/",
  },
  {
    label: "Startup Cost Calculator",
    description: "Estimate investment",
    href: "/calculators/chiropractic-clinic-startup-cost/",
  },
] as const;

export const practiceTypes = [
  { label: "General Chiropractic Clinic", comingSoon: true },
  { label: "Sports Chiropractic", comingSoon: true },
  { label: "Family Chiropractic", comingSoon: true },
  { label: "Wellness Chiropractic", comingSoon: true },
  { label: "Multi-Doctor Clinic", comingSoon: true },
  { label: "Cash-Pay Chiropractic Practice", comingSoon: true },
] as const;

export const revenueByTypeCards = [
  { label: "General Chiropractic", value: "$400K – $650K", href: "#revenue-benchmark" },
  { label: "Sports Chiropractic", value: "$450K – $750K", href: "#revenue-benchmark" },
  { label: "Family Chiropractic", value: "$350K – $580K", href: "#revenue-benchmark" },
  { label: "Wellness Chiropractic", value: "$420K – $720K", href: "#revenue-benchmark" },
] as const;

export const revenueByChiropractorCountCards = [
  { label: "1 Chiropractor", value: "$280K – $450K", href: "#revenue-benchmark" },
  { label: "2 Chiropractors", value: "$450K – $680K", href: "#revenue-benchmark" },
  { label: "3–5 Chiropractors", value: "$600K – $900K", href: "#revenue-benchmark" },
  { label: "6+ Chiropractors", value: "$850K – $1.4M", href: "#revenue-benchmark" },
] as const;

export const revenueByLocationCards = [
  { label: "Urban", value: "$520K – $850K", href: "#revenue-benchmark" },
  { label: "Suburban", value: "$450K – $720K", href: "#revenue-benchmark" },
  { label: "Rural", value: "$300K – $520K", href: "#revenue-benchmark" },
] as const;

export const ownerEconomicsCards = [
  { model: "Solo Chiropractor", earnings: "$80K – $160K" },
  { model: "Multi-Doctor Owner", earnings: "$120K – $220K" },
  { model: "Multi-Location Owner", earnings: "$250K – $450K+" },
  { model: "Wellness Practice Owner", earnings: "$140K – $280K" },
] as const;

export const valuationTopics = [
  "Practice Worth",
  "Profit Multiples",
  "Revenue Multiples",
  "Exit Planning",
] as const;

export const hubComparisons = [
  { label: "Chiropractic vs Physical Therapy", href: "/comparisons/physical-therapy-vs-chiropractic-clinic/" },
  { label: "Chiropractic vs Massage Therapy", href: "/comparisons/chiropractic-vs-massage-therapy/" },
  { label: "Family Chiropractic vs Sports Chiropractic", href: "/comparisons/family-chiropractic-vs-sports-chiropractic/" },
  { label: "Solo Practice vs Multi-Doctor Practice", href: "/comparisons/solo-chiropractic-vs-multi-doctor-practice/" },
  { label: "Cash-Pay vs Insurance-Based Chiropractic", href: "/comparisons/cash-pay-vs-insurance-chiropractic/" },
] as const;

export const relatedHealthcareIndustries = [
  { label: "Dental Practice", href: "/industries/healthcare/dental-practice/" },
  { label: "Veterinary Clinic", href: "/industries/healthcare/veterinary-clinic/" },
  { label: "Physical Therapy Clinic", href: "/industries/healthcare/physical-therapy-clinic/" },
  { label: "Chiropractic Clinic", href: "/industries/healthcare/chiropractic-clinic/" },
  { label: "Medical Practice", comingSoon: true },
  { label: "Urgent Care", comingSoon: true },
] as const;

export const popularMetrics = [
  { label: "Chiropractic Revenue Benchmarks", href: "#revenue-benchmark" },
  { label: "Chiropractic Profit Margins", href: "#profitability" },
  { label: "Chiropractic Owner Compensation", href: "#owner-economics" },
  { label: "Revenue Per Chiropractor", href: "#provider-productivity" },
  { label: "Patient Lifetime Value", href: "#patient-economics" },
  { label: "Practice Valuation Multiples", href: "#valuation" },
] as const;

export { industryInsights } from "@/lib/industries/healthcare/chiropractic-reports";

export const hubFaqs = [
  {
    question: "How profitable are chiropractic clinics?",
    answer:
      "Well-run chiropractic clinics achieve 25–35% net profit margins, with a median around 30%. Cash-pay and wellness membership models often exceed 32%. Payroll (22–30% of revenue) and marketing (5–10%) are the largest controllable costs.",
  },
  {
    question: "How much revenue does a chiropractic clinic generate?",
    answer:
      "General chiropractic clinics typically generate $300K–$800K annually, with a median around $500K. Solo practices run $280K–$450K; multi-doctor clinics push $600K–$900K+. Wellness and sports specialty clinics can exceed $700K.",
  },
  {
    question: "How much do chiropractic clinic owners earn?",
    answer:
      "Solo chiropractors typically earn $80K–$160K in total compensation, with a median around $140K. Multi-doctor and multi-location owners can earn $120K–$450K+. Associate chiropractors earn $55K–$85K before partnership or buy-in.",
  },
  {
    question: "What is a chiropractic practice worth?",
    answer:
      "Independent chiropractic clinics sell for 2.0×–3.5× SDE, with a median of 2.8×. A clinic with $500K revenue and $200K SDE might be valued around $560K. Strong recurring revenue, membership programs, and cash-pay mix command the high end.",
  },
  {
    question: "What is a good profit margin?",
    answer:
      "A healthy chiropractic clinic net profit margin is 28–32%. Below 25% signals marketing overspend or low visit frequency. Top-quartile clinics hit 35%+ through wellness memberships, efficient scheduling, and minimal insurance dependency.",
  },
  {
    question: "How many patients should a chiropractor see?",
    answer:
      "A productive chiropractor typically handles 20–35 patient visits per day. Clinics maintain 600–1,500 active patients with 1–4 full-time chiropractors. New patient flow of 30–70 per month supports growth in competitive markets.",
  },
] as const;

export const hubSectionNav = [
  { id: "explore", label: "Explore" },
  { id: "calculators", label: "Calculators" },
  { id: "types", label: "Types" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "patient-economics", label: "Patients" },
  { id: "recurring-revenue", label: "Recurring" },
  { id: "wellness-plans", label: "Wellness" },
  { id: "provider-productivity", label: "Productivity" },
  { id: "profitability", label: "Margins" },
  { id: "valuation", label: "Valuation" },
  { id: "comparisons", label: "Compare" },
  { id: "faqs", label: "FAQs" },
] as const;

export {
  benchmarkThresholds,
  chiropractorProductivityMetrics,
  costStructureFlow,
  expenseBreakdown,
  growthMetrics,
  patientEconomicsFlow,
  patientEconomicsMetrics,
  recurringRevenueFlow,
  recurringRevenueMetrics,
  staffingRoles,
  startupCosts,
  valuationMultiples,
  wellnessPlanFlow,
  wellnessPlanTopics,
};

export const valuationDashboard = valuationMultiples;

export const startupCostSummary = startupCosts;

export const staffingBenchmarkCards = staffingRoles;

export const providerProductivityMetrics = chiropractorProductivityMetrics;
