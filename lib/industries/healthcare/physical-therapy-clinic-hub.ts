import {
  benchmarkThresholds,
  costStructureFlow,
  expenseBreakdown,
  growthMetrics,
  patientEconomicsFlow,
  patientEconomicsMetrics,
  quickSummary,
  referralEconomicsMetrics,
  staffingRoles,
  startupCosts,
  therapistProductivityMetrics,
  valuationMultiples,
  visitEconomicsMetrics,
} from "@/lib/industries/physical-therapy-clinic";

export const hubMeta = {
  slug: "physical-therapy-clinic",
  parentSlug: "healthcare",
  parentLabel: "Healthcare",
  title: "Physical Therapy Clinic Economics & Benchmarks",
  subtitle:
    "Explore physical therapy clinic revenue, profit margins, owner compensation, practice valuations, patient economics, and operational benchmarks.",
  dataVintage: "2025–2026",
  sampleSize: "180+ physical therapy clinics",
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Annual Revenue",
    value: "$850K",
    sublabel: "median clinic revenue",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "EBITDA Margin",
    value: "18–28%",
    sublabel: "healthy range",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Compensation",
    value: "$165K",
    sublabel: "median total comp",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Practice Value",
    value: "3.2× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
  {
    id: "rev-per-therapist",
    label: "Revenue Per Therapist",
    value: "$420K",
    sublabel: "median per PT",
    href: "#therapist-productivity",
    accent: "metric-revenue",
  },
  {
    id: "rev-per-visit",
    label: "Revenue Per Visit",
    value: "$115",
    sublabel: "median per visit",
    href: "#visit-economics",
    accent: "metric-valuation",
  },
] as const;

export const businessScorecard = {
  industryName: "Physical Therapy Clinic",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Scalability", rating: 4 },
    { label: "Startup Difficulty", rating: 4, higherIsWorse: true },
    { label: "Recurring Revenue", rating: 2 },
    { label: "Recession Resistance", rating: 4 },
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
    subtitle: "Annual revenue, clinic size, and therapist productivity benchmarks.",
    topics: [
      "Revenue Benchmarks",
      "Revenue By Clinic Size",
      "Revenue Per Therapist",
      "Revenue Per Treatment Room",
    ],
    href: "#revenue-benchmark",
    accent: "metric-revenue",
    buttonLabel: "Explore Revenue →",
  },
  {
    id: "profitability",
    title: "Profitability",
    subtitle: "EBITDA margin, net profit, expense ratios, and industry benchmarks.",
    topics: ["EBITDA Margins", "Net Profit", "Expense Ratios", "Industry Benchmarks"],
    href: "#profitability",
    accent: "metric-margin",
    buttonLabel: "Explore Profitability →",
  },
  {
    id: "owner-comp",
    title: "Owner Compensation",
    subtitle: "Owner income, partner pay, associate PT salary, and clinic director benchmarks.",
    topics: [
      "Owner Income",
      "Partner Compensation",
      "Associate PT Salary",
      "Clinic Director Compensation",
    ],
    href: "#owner-economics",
    accent: "metric-salary",
    buttonLabel: "Explore Owner Pay →",
  },
  {
    id: "startup",
    title: "Startup Costs",
    subtitle: "Leasehold improvements, equipment, software, and working capital.",
    topics: ["Leasehold Improvements", "Equipment", "Software", "Working Capital"],
    href: "#startup-costs",
    accent: "metric-valuation",
    buttonLabel: "Explore Startup Costs →",
  },
  {
    id: "valuation",
    title: "Practice Valuation",
    subtitle: "Revenue multiples, EBITDA multiples, and practice worth.",
    topics: ["Revenue Multiples", "EBITDA Multiples", "Practice Worth"],
    href: "#valuation",
    accent: "metric-valuation",
    buttonLabel: "Explore Valuation →",
  },
  {
    id: "patient-economics",
    title: "Patient Economics",
    subtitle: "Revenue per patient, visits per patient, lifetime value, and referral economics.",
    topics: [
      "Revenue Per Patient",
      "Visits Per Patient",
      "Lifetime Value",
      "Referral Economics",
    ],
    href: "#patient-economics",
    accent: "metric-revenue",
    buttonLabel: "Explore Patient Economics →",
  },
] as const;

export const hubCalculators = [
  {
    label: "PT Clinic Valuation Calculator",
    description: "Estimate clinic value",
    href: "/calculators/physical-therapy-clinic-valuation/",
  },
  {
    label: "Revenue Per Patient Calculator",
    description: "Calculate patient value",
    href: "/calculators/physical-therapy-clinic-revenue-per-patient/",
  },
  {
    label: "EBITDA Calculator",
    description: "Calculate profitability",
    href: "/calculators/physical-therapy-clinic-ebitda/",
  },
  {
    label: "Break-Even Calculator",
    description: "Estimate required visits",
    href: "/calculators/physical-therapy-clinic-break-even/",
  },
  {
    label: "Revenue Per Therapist Calculator",
    description: "Measure therapist productivity",
    href: "/calculators/physical-therapy-clinic-revenue-per-therapist/",
  },
  {
    label: "Startup Cost Calculator",
    description: "Estimate investment",
    href: "/calculators/physical-therapy-clinic-startup-cost/",
  },
] as const;

export const practiceTypes = [
  { label: "General PT Clinic", comingSoon: true },
  { label: "Sports Physical Therapy", comingSoon: true },
  { label: "Orthopedic Physical Therapy", comingSoon: true },
  { label: "Pediatric Physical Therapy", comingSoon: true },
  { label: "Home Health Physical Therapy", comingSoon: true },
  { label: "Multi-Location PT Practice", comingSoon: true },
] as const;

export const revenueByTypeCards = [
  { label: "General PT", value: "$650K – $1.1M", href: "#revenue-benchmark" },
  { label: "Sports PT", value: "$800K – $1.4M", href: "#revenue-benchmark" },
  { label: "Orthopedic PT", value: "$750K – $1.3M", href: "#revenue-benchmark" },
  { label: "Pediatric PT", value: "$550K – $950K", href: "#revenue-benchmark" },
] as const;

export const revenueByTherapistCountCards = [
  { label: "1 Therapist", value: "$400K – $650K", href: "#revenue-benchmark" },
  { label: "2–3 Therapists", value: "$650K – $1.0M", href: "#revenue-benchmark" },
  { label: "4–6 Therapists", value: "$950K – $1.5M", href: "#revenue-benchmark" },
  { label: "7+ Therapists", value: "$1.4M – $2.5M", href: "#revenue-benchmark" },
] as const;

export const revenueByLocationCards = [
  { label: "Urban", value: "$900K – $1.5M", href: "#revenue-benchmark" },
  { label: "Suburban", value: "$750K – $1.2M", href: "#revenue-benchmark" },
  { label: "Rural", value: "$500K – $850K", href: "#revenue-benchmark" },
] as const;

export const ownerEconomicsCards = [
  { model: "Solo PT Owner", earnings: "$100K – $180K" },
  { model: "Multi-Therapist Owner", earnings: "$140K – $240K" },
  { model: "Multi-Location Owner", earnings: "$280K – $500K+" },
  { model: "Sports PT Owner", earnings: "$180K – $320K" },
] as const;

export const valuationTopics = [
  "Practice Worth",
  "EBITDA Multiples",
  "Revenue Multiples",
  "Exit Planning",
] as const;

export const hubComparisons = [
  { label: "Physical Therapy vs Chiropractic Clinic", href: "/comparisons/physical-therapy-vs-chiropractic-clinic/" },
  { label: "Physical Therapy vs Occupational Therapy", href: "/comparisons/physical-therapy-vs-occupational-therapy/" },
  { label: "Sports PT vs General PT", href: "/comparisons/sports-pt-vs-general-pt/" },
  { label: "Solo PT vs Multi-Therapist Practice", href: "/comparisons/solo-pt-vs-multi-therapist-practice/" },
  { label: "Private Practice vs Hospital-Based PT", href: "/comparisons/private-practice-vs-hospital-based-pt/" },
] as const;

export const relatedHealthcareIndustries = [
  { label: "Dental Practice", href: "/industries/healthcare/dental-practice/" },
  { label: "Veterinary Clinic", href: "/industries/healthcare/veterinary-clinic/" },
  { label: "Physical Therapy Clinic", href: "/industries/healthcare/physical-therapy-clinic/" },
  { label: "Medical Practice", comingSoon: true },
  { label: "Urgent Care", comingSoon: true },
  { label: "Chiropractic Clinic", href: "/industries/healthcare/chiropractic-clinic/" },
] as const;

export const popularMetrics = [
  { label: "Physical Therapy Revenue Benchmarks", href: "#revenue-benchmark" },
  { label: "Physical Therapy EBITDA Margins", href: "#profitability" },
  { label: "PT Owner Compensation", href: "#owner-economics" },
  { label: "Revenue Per Therapist", href: "#therapist-productivity" },
  { label: "Revenue Per Patient", href: "#patient-economics" },
  { label: "PT Practice Valuation", href: "#valuation" },
] as const;

export { industryInsights } from "@/lib/industries/healthcare/physical-therapy-reports";

export const hubFaqs = [
  {
    question: "How profitable are physical therapy clinics?",
    answer:
      "Well-run outpatient PT clinics achieve 18–28% EBITDA margins, with a median around 23%. Net profit after owner therapist compensation typically runs 12–20%. Clinical payroll (28–36% of revenue) and rent (7–11%) are the largest controllable costs.",
  },
  {
    question: "How much revenue does a PT clinic generate?",
    answer:
      "Outpatient physical therapy clinics typically generate $500K–$1.5M annually, with a median around $850K. Solo practices run $400K–$650K; multi-therapist clinics push $950K–$1.5M+. Sports and orthopedic specialty clinics can exceed $1.2M.",
  },
  {
    question: "How much do PT clinic owners earn?",
    answer:
      "Solo PT owners typically earn $100K–$180K in total compensation, with a median around $165K. Multi-therapist and multi-location owners can earn $140K–$500K+. Associate physical therapists earn $75K–$110K before partnership or buy-in.",
  },
  {
    question: "What is a PT clinic worth?",
    answer:
      "Independent PT clinics sell for 2.5×–4.0× SDE, with a median of 3.2×. A clinic with $850K revenue and $240K SDE might be valued around $770K. Strong referral networks, diversified payer mix, and high therapist utilization command the high end.",
  },
  {
    question: "What is a good EBITDA margin?",
    answer:
      "A healthy PT clinic EBITDA margin is 20–26%. Below 18% signals overhead bloat or low revenue per therapist. Top-quartile clinics hit 28%+ through efficient scheduling, strong referral relationships, and optimized therapist-to-support-staff ratios.",
  },
  {
    question: "How many patients should a therapist see?",
    answer:
      "A productive outpatient PT typically handles 12–18 visits per day at 72–88% utilization. Clinics maintain 800–2,000 active patients with 2–6 full-time therapists. New patient flow of 25–55 per month supports growth.",
  },
] as const;

export const hubSectionNav = [
  { id: "explore", label: "Explore" },
  { id: "calculators", label: "Calculators" },
  { id: "types", label: "Types" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "patient-economics", label: "Patients" },
  { id: "referral-economics", label: "Referrals" },
  { id: "therapist-productivity", label: "Productivity" },
  { id: "visit-economics", label: "Visits" },
  { id: "profitability", label: "Margins" },
  { id: "valuation", label: "Valuation" },
  { id: "comparisons", label: "Compare" },
  { id: "faqs", label: "FAQs" },
] as const;

export {
  benchmarkThresholds,
  costStructureFlow,
  expenseBreakdown,
  growthMetrics,
  patientEconomicsFlow,
  patientEconomicsMetrics,
  referralEconomicsMetrics,
  staffingRoles,
  startupCosts,
  therapistProductivityMetrics,
  valuationMultiples,
  visitEconomicsMetrics,
};

export const valuationDashboard = valuationMultiples;

export const startupCostSummary = startupCosts;

export const staffingBenchmarkCards = staffingRoles;
