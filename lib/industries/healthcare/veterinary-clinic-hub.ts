import {
  benchmarkThresholds,
  clientEconomicsFlow,
  clientEconomicsMetrics,
  costStructureFlow,
  expenseBreakdown,
  growthMetrics,
  quickSummary,
  serviceMixFlow,
  serviceMixSources,
  staffingRoles,
  startupCosts,
  valuationMultiples,
  vetProductivityMetrics,
} from "@/lib/industries/veterinary-clinic";

export const hubMeta = {
  slug: "veterinary-clinic",
  parentSlug: "healthcare",
  parentLabel: "Healthcare",
  title: "Veterinary Clinic Economics & Benchmarks",
  subtitle:
    "Explore veterinary clinic revenue, profit margins, owner compensation, practice valuations, startup costs, and operating benchmarks.",
  dataVintage: "2025–2026",
  sampleSize: "240+ veterinary clinics",
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Annual Revenue",
    value: "$1.2M",
    sublabel: "median clinic revenue",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "EBITDA Margin",
    value: "15–22%",
    sublabel: "healthy range",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Compensation",
    value: "$185K",
    sublabel: "median total comp",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Practice Value",
    value: "3.4× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
  {
    id: "rev-per-vet",
    label: "Revenue Per Veterinarian",
    value: "$550K",
    sublabel: "median per DVM",
    href: "#vet-productivity",
    accent: "metric-revenue",
  },
  {
    id: "rev-per-room",
    label: "Revenue Per Exam Room",
    value: "$400K",
    sublabel: "median per room",
    href: "#vet-productivity",
    accent: "metric-valuation",
  },
] as const;

export const businessScorecard = {
  industryName: "Veterinary Clinic",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Scalability", rating: 4 },
    { label: "Startup Difficulty", rating: 5, higherIsWorse: true },
    { label: "Recurring Revenue", rating: 4 },
    { label: "Recession Resistance", rating: 5 },
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
    subtitle: "Annual revenue, practice size, and productivity benchmarks.",
    topics: [
      "Revenue Benchmarks",
      "Revenue By Practice Size",
      "Revenue Per Veterinarian",
      "Revenue Per Exam Room",
    ],
    href: "#revenue-benchmark",
    accent: "metric-revenue",
    buttonLabel: "Explore Revenue →",
  },
  {
    id: "profitability",
    title: "Profitability",
    subtitle: "EBITDA margin, net profit, expense ratios, and benchmarking.",
    topics: ["EBITDA Margin", "Net Profit", "Expense Ratios", "Benchmarking"],
    href: "#profitability",
    accent: "metric-margin",
    buttonLabel: "Explore Profitability →",
  },
  {
    id: "owner-comp",
    title: "Owner Compensation",
    subtitle: "Owner income, associate vet pay, and multi-location benchmarks.",
    topics: [
      "Owner Income",
      "Associate Vet Salary",
      "Practice Manager Salary",
      "Multi-Location Owner Pay",
    ],
    href: "#owner-economics",
    accent: "metric-salary",
    buttonLabel: "Explore Owner Pay →",
  },
  {
    id: "startup",
    title: "Startup Costs",
    subtitle: "Buildout, medical equipment, technology, and working capital.",
    topics: ["Buildout", "Medical Equipment", "Technology", "Working Capital"],
    href: "#startup-costs",
    accent: "metric-valuation",
    buttonLabel: "Explore Startup Costs →",
  },
  {
    id: "valuation",
    title: "Practice Valuation",
    subtitle: "Revenue multiples, EBITDA multiples, and clinic worth.",
    topics: ["Revenue Multiples", "EBITDA Multiples", "Practice Worth"],
    href: "#valuation",
    accent: "metric-valuation",
    buttonLabel: "Explore Valuation →",
  },
  {
    id: "client-economics",
    title: "Client Economics",
    subtitle: "Revenue per client, lifetime value, retention, and new client economics.",
    topics: [
      "Revenue Per Client",
      "Lifetime Value",
      "Retention Metrics",
      "New Client Economics",
    ],
    href: "#client-economics",
    accent: "metric-revenue",
    buttonLabel: "Explore Client Economics →",
  },
] as const;

export const hubCalculators = [
  {
    label: "Veterinary Clinic Valuation Calculator",
    description: "Estimate clinic value",
    href: "/calculators/veterinary-clinic-valuation/",
  },
  {
    label: "Revenue Per Client Calculator",
    description: "Calculate client value",
    href: "/calculators/veterinary-clinic-revenue-per-client/",
  },
  {
    label: "EBITDA Calculator",
    description: "Calculate profitability",
    href: "/calculators/veterinary-clinic-ebitda/",
  },
  {
    label: "Break-Even Calculator",
    description: "Estimate required revenue",
    href: "/calculators/veterinary-clinic-break-even/",
  },
  {
    label: "Revenue Per Veterinarian Calculator",
    description: "Measure productivity",
    href: "/calculators/veterinary-clinic-revenue-per-veterinarian/",
  },
  {
    label: "Startup Cost Calculator",
    description: "Estimate investment",
    href: "/calculators/veterinary-clinic-startup-cost/",
  },
] as const;

export const practiceTypes = [
  { label: "General Veterinary Clinic", comingSoon: true },
  { label: "Emergency Veterinary Hospital", comingSoon: true },
  { label: "Specialty Veterinary Practice", comingSoon: true },
  { label: "Mobile Veterinary Practice", comingSoon: true },
  { label: "Multi-Doctor Veterinary Practice", comingSoon: true },
  { label: "Corporate Veterinary Clinic", comingSoon: true },
] as const;

export const revenueByTypeCards = [
  { label: "General Vet", value: "$850K – $1.4M", href: "#revenue-benchmark" },
  { label: "Emergency Vet", value: "$1.2M – $2.2M", href: "#revenue-benchmark" },
  { label: "Specialty Vet", value: "$1.5M – $3.0M", href: "#revenue-benchmark" },
  { label: "Mobile Vet", value: "$400K – $900K", href: "#revenue-benchmark" },
] as const;

export const revenueByVetCountCards = [
  { label: "1 Vet", value: "$600K – $950K", href: "#revenue-benchmark" },
  { label: "2 Vets", value: "$950K – $1.4M", href: "#revenue-benchmark" },
  { label: "3–5 Vets", value: "$1.4M – $2.0M", href: "#revenue-benchmark" },
  { label: "6+ Vets", value: "$2.0M – $3.5M", href: "#revenue-benchmark" },
] as const;

export const revenueByLocationCards = [
  { label: "Urban", value: "$1.1M – $1.8M", href: "#revenue-benchmark" },
  { label: "Suburban", value: "$950K – $1.5M", href: "#revenue-benchmark" },
  { label: "Rural", value: "$650K – $1.1M", href: "#revenue-benchmark" },
] as const;

export const ownerEconomicsCards = [
  { model: "Solo Clinic Owner", earnings: "$120K – $220K" },
  { model: "Multi-Vet Clinic Owner", earnings: "$180K – $280K" },
  { model: "Multi-Location Owner", earnings: "$350K – $600K+" },
  { model: "Specialty Clinic Owner", earnings: "$250K – $450K" },
] as const;

export const valuationTopics = [
  "Practice Worth",
  "EBITDA Multiples",
  "Revenue Multiples",
  "Exit Planning",
] as const;

export const hubComparisons = [
  {
    label: "Veterinary Clinic vs Dental Practice",
    href: "/comparisons/dental-practice-vs-veterinary-clinic/",
  },
  {
    label: "Veterinary Clinic vs Medical Practice",
    href: "/comparisons/veterinary-clinic-vs-medical-practice/",
  },
  {
    label: "General Vet vs Emergency Vet",
    href: "/comparisons/general-vet-vs-emergency-vet/",
  },
  {
    label: "Solo Vet vs Multi-Doctor Practice",
    href: "/comparisons/solo-vet-vs-multi-doctor-practice/",
  },
  {
    label: "Private Practice vs Corporate Vet",
    href: "/comparisons/private-practice-vs-corporate-vet/",
  },
] as const;

export const relatedHealthcareIndustries = [
  { label: "Dental Practice", href: "/industries/healthcare/dental-practice/" },
  { label: "Medical Practice", comingSoon: true },
  { label: "Physical Therapy Clinic", href: "/industries/healthcare/physical-therapy-clinic/" },
  { label: "Urgent Care", comingSoon: true },
  { label: "Chiropractic Clinic", href: "/industries/healthcare/chiropractic-clinic/" },
] as const;

export const popularMetrics = [
  { label: "Veterinary Revenue Benchmarks", href: "#revenue-benchmark" },
  { label: "Veterinary EBITDA Margins", href: "#profitability" },
  { label: "Veterinary Owner Compensation", href: "#owner-economics" },
  { label: "Revenue Per Veterinarian", href: "#vet-productivity" },
  { label: "Veterinary Practice Valuation", href: "#valuation" },
  { label: "Client Lifetime Value", href: "#client-economics" },
] as const;

export { industryInsights } from "@/lib/industries/healthcare/veterinary-reports";

export const hubFaqs = [
  {
    question: "How profitable are veterinary clinics?",
    answer:
      "Well-run general veterinary clinics achieve 15–22% EBITDA margins, with a median around 19%. Net profit after owner veterinarian compensation typically runs 10–18%. Clinical payroll (22–28% of revenue) and support staff (18–24%) are the largest controllable costs.",
  },
  {
    question: "How much revenue does a veterinary clinic generate?",
    answer:
      "General veterinary clinics typically generate $600K–$1.8M annually, with a median around $1.2M. Solo practices run $600K–$950K; multi-vet clinics push $1.4M–$2.0M+. Emergency and specialty hospitals can exceed $2M.",
  },
  {
    question: "How much do veterinary clinic owners earn?",
    answer:
      "Solo clinic owners typically earn $120K–$220K in total compensation, with a median around $185K. Multi-vet and multi-location owners can earn $180K–$600K+. Associate veterinarians earn $90K–$140K before partnership or buy-in.",
  },
  {
    question: "What is a veterinary clinic worth?",
    answer:
      "Independent veterinary clinics sell for 2.8×–4.0× SDE, with a median of 3.4×. A clinic with $1.2M revenue and $320K SDE might be valued around $1.1M. Strong wellness programs, diversified service mix, and modern facilities command the high end.",
  },
  {
    question: "What is a good EBITDA margin?",
    answer:
      "A healthy veterinary clinic EBITDA margin is 17–21%. Below 15% signals overhead bloat or low revenue per veterinarian. Top-quartile clinics hit 22%+ through efficient scheduling, strong preventive care enrollment, and optimized staffing ratios.",
  },
  {
    question: "How many clients should a veterinarian serve?",
    answer:
      "A general veterinary clinic typically maintains 2,000–4,500 active clients with 1–3 full-time veterinarians. New client flow of 35–75 per month supports growth. Retention rates above 75% indicate a healthy wellness and recall program.",
  },
] as const;

export const hubSectionNav = [
  { id: "explore", label: "Explore" },
  { id: "calculators", label: "Calculators" },
  { id: "types", label: "Types" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "client-economics", label: "Clients" },
  { id: "vet-productivity", label: "Productivity" },
  { id: "profitability", label: "Margins" },
  { id: "valuation", label: "Valuation" },
  { id: "comparisons", label: "Compare" },
  { id: "faqs", label: "FAQs" },
] as const;

export {
  benchmarkThresholds,
  clientEconomicsFlow,
  clientEconomicsMetrics,
  costStructureFlow,
  expenseBreakdown,
  growthMetrics,
  serviceMixFlow,
  serviceMixSources,
  staffingRoles,
  startupCosts,
  valuationMultiples,
  vetProductivityMetrics,
};

export const valuationDashboard = valuationMultiples;

export const startupCostSummary = startupCosts;

export const staffingBenchmarkCards = staffingRoles;
