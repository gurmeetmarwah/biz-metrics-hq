import {
  benchmarkThresholds,
  costStructureFlow,
  expenseBreakdown,
  patientEconomicsFlow,
  patientEconomicsMetrics,
  quickSummary,
  valuationMultiples,
} from "@/lib/industries/dental-practice";

export { industryInsights } from "@/lib/industries/healthcare/dental-reports";

export const hubMeta = {
  slug: "dental-practice",
  parentSlug: "healthcare",
  parentLabel: "Healthcare",
  title: "Dental Practice Economics & Benchmarks",
  subtitle:
    "Explore revenue benchmarks, profit margins, owner compensation, startup costs, valuations, and operating metrics for dental practices.",
  dataVintage: "2025–2026",
  sampleSize: "310+ dental practices",
};

export const hubKpis = [
  {
    id: "revenue",
    label: "Annual Revenue",
    value: "$1.8M",
    sublabel: "median collections",
    href: "#revenue-benchmark",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Profit Margin",
    value: "18–30%",
    sublabel: "EBITDA range",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "owner-pay",
    label: "Owner Compensation",
    value: "$285K",
    sublabel: "median total comp",
    href: "#owner-economics",
    accent: "metric-salary",
  },
  {
    id: "valuation",
    label: "Practice Valuation",
    value: "3.8x SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
] as const;

export const businessScorecard = {
  industryName: "Dental Practice",
  items: [
    { label: "Profitability", rating: 5 },
    { label: "Scalability", rating: 4 },
    { label: "Startup Difficulty", rating: 4, higherIsWorse: true },
    { label: "Recurring Revenue", rating: 4 },
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
    subtitle: "Annual collections, practice size, and operatory benchmarks.",
    topics: ["Revenue Benchmarks", "Revenue By Practice Size", "Revenue Per Dentist", "Revenue Per Operatory"],
    href: "#revenue-benchmark",
    accent: "metric-revenue",
    buttonLabel: "Explore Revenue →",
  },
  {
    id: "profitability",
    title: "Profitability",
    subtitle: "EBITDA margins, net profit, expense ratios, and benchmarking.",
    topics: ["EBITDA Margins", "Net Profit", "Expense Ratios", "Benchmarking"],
    href: "#profitability",
    accent: "metric-margin",
    buttonLabel: "Explore Profitability →",
  },
  {
    id: "owner-comp",
    title: "Owner Compensation",
    subtitle: "Solo, partner, multi-location, and associate pay benchmarks.",
    topics: ["Solo Dentist", "Partner Dentist", "Multi-Location Owner", "Associate Compensation"],
    href: "#owner-economics",
    accent: "metric-salary",
    buttonLabel: "Explore Owner Pay →",
  },
  {
    id: "startup",
    title: "Startup Costs",
    subtitle: "Equipment, buildout, technology, and working capital.",
    topics: ["Equipment", "Buildout", "Technology", "Working Capital"],
    href: "#startup-costs",
    accent: "metric-valuation",
    buttonLabel: "Explore Startup Costs →",
  },
  {
    id: "valuation",
    title: "Valuation",
    subtitle: "Practice multiples, EBITDA multiples, and buyout benchmarks.",
    topics: ["Practice Multiples", "EBITDA Multiples", "Associate Buyouts", "Sale Value"],
    href: "#valuation",
    accent: "metric-valuation",
    buttonLabel: "Explore Valuation →",
  },
  {
    id: "patient-economics",
    title: "Patient Economics",
    subtitle: "Lifetime value, revenue per visit, new patient economics, and retention.",
    topics: ["Patient Lifetime Value", "Revenue Per Patient", "New Patient Economics", "Retention Metrics"],
    href: "#patient-economics",
    accent: "metric-revenue",
    buttonLabel: "Explore Patient Economics →",
  },
] as const;

export const hubCalculators = [
  {
    label: "Dental Practice Valuation Calculator",
    description: "Estimate practice value",
    href: "/calculators/dental-practice-valuation/",
  },
  {
    label: "EBITDA Calculator",
    description: "Calculate profitability",
    href: "/calculators/dental-practice-ebitda/",
  },
  {
    label: "Revenue Per Patient Calculator",
    description: "Calculate patient value",
    href: "/calculators/dental-practice-revenue-per-patient/",
  },
  {
    label: "Break-Even Calculator",
    description: "Estimate required production",
    href: "/calculators/dental-practice-break-even/",
  },
  {
    label: "Associate Compensation Calculator",
    description: "Calculate dentist compensation",
    href: "/calculators/dental-practice-associate-compensation/",
  },
  {
    label: "Startup Cost Calculator",
    description: "Estimate investment",
    href: "/calculators/dental-practice-startup-cost/",
  },
] as const;

export const practiceTypes = [
  { label: "General Dentistry", comingSoon: true },
  { label: "Orthodontics", comingSoon: true },
  { label: "Pediatric Dentistry", comingSoon: true },
  { label: "Endodontics", comingSoon: true },
  { label: "Oral Surgery", comingSoon: true },
  { label: "Cosmetic Dentistry", comingSoon: true },
  { label: "Multi-Specialty Practice", comingSoon: true },
] as const;

export const revenueByTypeCards = [
  { label: "General Dentist", value: "$1.2M – $2.2M", href: "#revenue-benchmark" },
  { label: "Orthodontist", value: "$1.8M – $3.5M", href: "#revenue-benchmark" },
  { label: "Pediatric Dentist", value: "$1.4M – $2.4M", href: "#revenue-benchmark" },
  { label: "Cosmetic Dentist", value: "$1.6M – $2.8M", href: "#revenue-benchmark" },
] as const;

export const revenueBySizeCards = [
  { label: "1 Dentist", value: "$800K – $1.4M", href: "#revenue-benchmark" },
  { label: "2 Dentists", value: "$1.4M – $2.2M", href: "#revenue-benchmark" },
  { label: "3+ Dentists", value: "$2.2M – $3.5M", href: "#revenue-benchmark" },
  { label: "DSO Practice", value: "$2.5M – $4.5M", href: "#revenue-benchmark" },
] as const;

export const revenueByOperatoryCards = [
  { label: "3 Operatories", value: "$900K – $1.4M", href: "#operatory-economics" },
  { label: "5 Operatories", value: "$1.4M – $2.2M", href: "#operatory-economics" },
  { label: "8 Operatories", value: "$2.2M – $3.2M", href: "#operatory-economics" },
  { label: "10+ Operatories", value: "$3.0M – $4.5M", href: "#operatory-economics" },
] as const;

export { costStructureFlow, patientEconomicsFlow, expenseBreakdown, patientEconomicsMetrics, valuationMultiples };

export const operatoryEconomicsLinks = [
  { label: "Revenue Per Chair", href: "#operatory-economics" },
  { label: "Revenue Per Hygienist", href: "#operatory-economics" },
  { label: "Revenue Per Dentist", href: "#operatory-economics" },
  { label: "Production Per Day", href: "#operatory-economics" },
] as const;

export const ownerEconomicsCards = [
  { model: "Solo Practice Owner", earnings: "$220K – $360K", type: "solo" as const },
  { model: "Partner Practice Owner", earnings: "$280K – $420K", type: "partner" as const },
  { model: "Multi-Practice Owner", earnings: "$450K – $750K+", type: "multi" as const },
  { model: "DSO Owner", earnings: "$500K – $1.2M+", type: "dso" as const },
] as const;

export const valuationTopics = [
  "Practice Value",
  "EBITDA Multiples",
  "Associate Buyouts",
  "Transition Planning",
] as const;

export const hubComparisons = [
  { label: "Dental Practice vs Orthodontic Practice", href: "/comparisons/dental-practice-vs-orthodontic-practice/" },
  { label: "Dental Practice vs Medical Practice", href: "/comparisons/dental-practice-vs-medical-practice/" },
  { label: "Dental Practice vs Veterinary Clinic", href: "/comparisons/dental-practice-vs-veterinary-clinic/" },
  { label: "Solo vs Group Dental Practice", href: "/comparisons/solo-vs-group-dental-practice/" },
  { label: "Private Practice vs DSO", href: "/comparisons/private-practice-vs-dso/" },
] as const;

export const relatedHealthcareIndustries = [
  { label: "Veterinary Clinic", href: "/industries/healthcare/veterinary-clinic/" },
  { label: "Physical Therapy Clinic", href: "/industries/healthcare/physical-therapy-clinic/" },
  { label: "Chiropractic Clinic", href: "/industries/healthcare/chiropractic-clinic/" },
] as const;

export const popularMetrics = [
  { label: "Dental Practice Revenue Benchmarks", href: "#revenue-benchmark" },
  { label: "Dental EBITDA Margins", href: "#profitability" },
  { label: "Dental Owner Compensation", href: "#owner-economics" },
  { label: "Dental Startup Costs", href: "#startup-costs" },
  { label: "Dental Practice Valuation", href: "#valuation" },
  { label: "Revenue Per Patient", href: "#patient-economics" },
] as const;

export const hubFaqs = [
  {
    question: "How profitable are dental practices?",
    answer:
      "Well-run general dental practices achieve 18–30% EBITDA margins, with a median around 24%. Net profit after owner doctor compensation typically runs 14–24%. Clinical payroll (28–35% of collections) and supplies (6–10%) are the largest controllable costs.",
  },
  {
    question: "How much revenue does a dental office generate?",
    answer:
      "General dental practices typically collect $1.2M–$2.6M annually, with a median around $1.8M. Solo practices run $800K–$1.4M; multi-dentist groups push $2.2M–$3.5M+. Revenue per operatory averages $350K–$550K per year.",
  },
  {
    question: "How much do dental practice owners earn?",
    answer:
      "Solo practice owners typically earn $220K–$360K in total compensation (salary plus distributions), with a median around $285K. Partner and multi-location owners can earn $280K–$750K+. Associate dentists earn $120K–$180K before buy-in.",
  },
  {
    question: "What is a dental practice worth?",
    answer:
      "Independent dental practices sell for 3.2x–4.5x SDE, with a median of 3.8x. A practice with $1.8M collections and $450K SDE might be valued around $1.7M. Strong hygiene programs, fee-for-service mix, and modern operatories command the high end.",
  },
  {
    question: "What is a good EBITDA margin?",
    answer:
      "A healthy dental practice EBITDA margin is 22–26%. Below 18% signals overhead bloat or low production per operatory. Top-quartile practices hit 28–30% through efficient scheduling, strong case acceptance, and optimized hygiene recall.",
  },
  {
    question: "How many patients should a dentist see?",
    answer:
      "A solo general dentist typically maintains 1,200–1,800 active patients and sees 12–18 patients per day. New patient flow of 25–45 per month supports growth. Retention rates above 80% indicate a healthy recall and hygiene program.",
  },
] as const;

export const hubSectionNav = [
  { id: "explore", label: "Explore" },
  { id: "calculators", label: "Calculators" },
  { id: "types", label: "Types" },
  { id: "revenue-benchmark", label: "Revenue" },
  { id: "patient-economics", label: "Patients" },
  { id: "operatory-economics", label: "Operatories" },
  { id: "profitability", label: "Margins" },
  { id: "valuation", label: "Valuation" },
  { id: "comparisons", label: "Compare" },
  { id: "faqs", label: "FAQs" },
] as const;

export { benchmarkThresholds };

export const startupCostSummary = [
  { item: "Equipment", range: "$250K – $450K" },
  { item: "Buildout", range: "$150K – $350K" },
  { item: "Technology", range: "$40K – $80K" },
  { item: "Working Capital", range: "$75K – $150K" },
] as const;

export const valuationDashboard = valuationMultiples;

export const operatoryBenchmarks = [
  { metric: "Revenue Per Operatory", value: "$350K – $550K/yr" },
  { metric: "Production Per Day (Chair)", value: "$1,200 – $1,800" },
  { metric: "Patients Per Day (Chair)", value: "12 – 18" },
  { metric: "Revenue Per Hygienist", value: "$180K – $280K/yr" },
] as const;
