export const optometryPracticeMeta = {
  slug: "optometry-practice",
  name: "Optometry Practice",
  title: "Optometry Practice Business Benchmarks",
  subtitle:
    "Compare revenue, profit margins, startup costs, owner salaries, valuation multiples, patient metrics, and key operating benchmarks for independent and multi-location optometry practices.",
  dataVintage: "2025–2026",
  sampleSize: "175+ optometry practices",
  geography: "United States",
};

export const industrySnapshotRatings = [
  { label: "Category", value: "Medical", rating: null },
  { label: "Business Model", value: "Healthcare + Retail", rating: null },
  { label: "Recurring Patients", value: "High", rating: 5 },
  { label: "Retail Sales", value: "High", rating: 5 },
  { label: "Capital Requirement", value: "Medium", rating: 3 },
  { label: "Insurance Mix", value: "Moderate–High", rating: 4 },
] as const;

export const industryInsights = [
  {
    title: "Eye exams generate recurring patient visits",
    body: "Annual comprehensive exams and follow-up visits create predictable patient flow — median practices see 4,500–8,500 visits per year with 72–85% retention. Exam volume is the top-of-funnel for optical and medical revenue.",
  },
  {
    title: "Eyewear sales often drive profitability",
    body: "Optical dispensary revenue (frames + lenses) represents 50–65% of collections at profitable practices. Optical capture rate above 60% separates top-quartile operators from exam-only clinics struggling on insurance margins.",
  },
  {
    title: "Insurance reimbursements affect margins",
    body: "Vision plan reimbursements for exams run $45–$85 while medical eye care pays higher — practices with 45–65% insurance mix must offset thin exam margins with retail attach and medical billing.",
  },
  {
    title: "Contact lens subscriptions improve recurring revenue",
    body: "Annual supply agreements and direct-ship contact lens programs add $180–$420 per patient in recurring optical revenue — top operators derive 15–22% of revenue from contact lens with strong replenishment rates.",
  },
  {
    title: "Premium lens upgrades increase average revenue",
    body: "Progressive lenses, blue-light coatings, and premium AR packages push average optical tickets from $350 to $550+ — practices training staff on lens upgrades see 35–55% premium lens penetration.",
  },
] as const;

export const revenuePercentiles = [
  { percentile: "25th", revenue: "$900K" },
  { percentile: "Median", revenue: "$1.35M" },
  { percentile: "75th", revenue: "$1.9M" },
  { percentile: "Top 10%", revenue: "$2.5M+" },
] as const;

export const revenueDistribution = {
  bottom25: "$900K",
  median: "$1.35M",
  top25: "$1.9M",
};

export const revenueMix = [
  { label: "Eye Exams", share: 22, description: "Comprehensive exams, refractions, and follow-up visits" },
  { label: "Eyeglasses", share: 35, description: "Frame and lens sales from in-house optical dispensary" },
  { label: "Contact Lenses", share: 18, description: "Annual supply, fittings, and direct-ship programs" },
  { label: "Medical Eye Care", share: 12, description: "Dry eye, glaucoma management, and medical billing" },
  { label: "Vision Therapy", share: 5, description: "Pediatric VT and neuro-optometric rehabilitation" },
  { label: "Insurance Reimbursements", share: 8, description: "Vision plan and medical payer collections" },
] as const;

export const patientMetrics = [
  { metric: "Patients per Day", value: "25 – 45" },
  { metric: "Annual Patient Visits", value: "4,500 – 8,500" },
  { metric: "Average Revenue per Patient", value: "$380 – $520" },
  { metric: "New Patients", value: "400 – 800 / yr" },
  { metric: "Returning Patients", value: "75 – 88%" },
  { metric: "Patient Retention Rate", value: "72 – 85%" },
] as const;

export const retailSalesMetrics = [
  { metric: "Frame Sales", value: "28 – 38% of revenue" },
  { metric: "Lens Sales", value: "22 – 32% of revenue" },
  { metric: "Contact Lens Sales", value: "15 – 22% of revenue" },
  { metric: "Average Optical Ticket", value: "$350 – $650" },
  { metric: "Premium Lens %", value: "35 – 55%" },
  { metric: "Accessory Sales", value: "3 – 8% of revenue" },
] as const;

export const insuranceMetrics = [
  { metric: "Insurance Revenue %", value: "45 – 65%" },
  { metric: "Cash Revenue %", value: "25 – 40%" },
  { metric: "Private Pay %", value: "15 – 30%" },
  { metric: "Average Reimbursement", value: "$85 – $145 / exam" },
  { metric: "Claims Approval Rate", value: "92 – 98%" },
] as const;

export const marginTiers = {
  poor: "14 – 17%",
  average: "18 – 22%",
  good: "23 – 26%",
  excellent: "27 – 32%",
} as const;

export const marginMetrics = [
  { metric: "Gross Margin", value: "58 – 72%" },
  { metric: "Operating Margin", value: "22 – 32%" },
  { metric: "Net Margin", value: "18 – 28%" },
] as const;

export const startupCostBreakdown = [
  { item: "Office Buildout", range: "$80K – $200K", percent: "22 – 30%" },
  { item: "Diagnostic Equipment", range: "$40K – $120K", percent: "12 – 18%" },
  { item: "Optical Inventory", range: "$50K – $150K", percent: "14 – 20%" },
  { item: "Exam Chairs", range: "$15K – $40K", percent: "4 – 6%" },
  { item: "OCT Equipment", range: "$30K – $80K", percent: "6 – 10%" },
  { item: "Computers & EMR", range: "$20K – $50K", percent: "4 – 7%" },
  { item: "Licensing", range: "$10K – $25K", percent: "2 – 4%" },
  { item: "Working Capital", range: "$40K – $100K", percent: "10 – 15%" },
] as const;

export const startupCostTotal = {
  low: "$350K",
  median: "$525K",
  high: "$750K",
};

export const ownerEconomicsCards = [
  { model: "Solo Practice", earnings: "$180K – $250K" },
  { model: "Associate Owner", earnings: "$200K – $280K" },
  { model: "Multi-Location Owner", earnings: "$235K – $400K" },
  { model: "Optometry Group", earnings: "$350K – $600K+" },
] as const;

export const valuationMultiples = [
  { metric: "EBITDA Multiple", range: "4.5× – 6.5×" },
  { metric: "Revenue Multiple", range: "0.8× – 1.4×" },
  { metric: "Practice Value", range: "$1.2M – $2.8M" },
  { metric: "Goodwill Value", range: "60 – 80% of total" },
] as const;

export const valuationDefaults = {
  revenue: "1350000",
  sde: "324000",
  multiple: "5.2",
  multipleLow: 4.5,
  multipleHigh: 6.5,
  revenueMultiple: 1.1,
  sdeMarginPct: 0.24,
};

export const operatingMetrics = [
  { metric: "Revenue per OD", value: "$550K – $750K" },
  { metric: "Revenue per Exam Room", value: "$380K – $520K" },
  { metric: "Optical Capture Rate", value: "55 – 72%" },
  { metric: "Average Daily Exams", value: "25 – 45" },
  { metric: "Revenue per Employee", value: "$120K – $180K" },
  { metric: "Revenue per Square Foot", value: "$350 – $550" },
] as const;

export const practiceEconomicsMatrix = {
  columns: ["Optometry", "Dentistry", "Chiropractic", "Physical Therapy", "Veterinary"] as const,
  rows: [
    { metric: "Revenue", values: [4, 5, 3, 4, 4] as const },
    { metric: "Net Margin", values: [4, 4, 4, 3, 4] as const },
    { metric: "Revenue per Patient", values: [3, 4, 3, 4, 3] as const },
    { metric: "Average Patient Value", values: [4, 5, 3, 4, 4] as const },
    { metric: "Recurring Patient %", values: [4, 4, 4, 4, 3] as const },
    { metric: "Retail Revenue %", values: [5, 2, 1, 1, 2] as const },
    { metric: "Practice Valuation", values: [5, 4, 3, 4, 4] as const },
  ],
} as const;

export const industryOpportunities = [
  "Premium lens packages",
  "Dry eye treatment",
  "Myopia management",
  "Specialty contact lenses",
  "Pediatric eye care",
  "LASIK co-management",
  "Second location",
] as const;

export const industryRisks = [
  "Insurance reimbursement",
  "Retail competition",
  "Online eyewear",
  "Staffing",
  "Inventory costs",
  "Technology upgrades",
] as const;

export const businessQualityScorecard = {
  industryName: "Typical Optometry Practice",
  items: [
    { label: "Revenue Stability", rating: 5 },
    { label: "Growth Potential", rating: 4 },
    { label: "Operational Complexity", rating: 3, higherIsWorse: true },
    { label: "Recurring Revenue", rating: 4 },
    { label: "Exit Potential", rating: 5 },
  ],
} as const;

export const medicalBenchmarkRankings = [
  {
    label: "Highest Margin Medical Practices",
    description: "Medical and dental specialties with strongest net margin and EBITDA profiles.",
    comingSoon: true as const,
  },
  {
    label: "Best Healthcare Businesses",
    description: "Practice models ranked by owner economics, scalability, and acquisition demand.",
    comingSoon: true as const,
  },
  {
    label: "Highest Valued Medical Practices",
    description: "Specialties with strongest EBITDA multiples and private equity interest.",
    comingSoon: true as const,
  },
  {
    label: "Best Recurring Revenue Clinics",
    description: "Healthcare practices with highest patient retention and subscription-like revenue.",
    comingSoon: true as const,
  },
  {
    label: "Fastest Growing Healthcare Businesses",
    description: "Medical segments with strongest de novo growth and consolidation velocity.",
    comingSoon: true as const,
  },
] as const;

export const benchmarkThresholds = {
  revenue: { low: 900000, median: 1350000, high: 1900000 },
  profitMargin: { low: 18, median: 24, high: 28 },
  technicians: { low: 1, median: 2, high: 4 },
  maintenancePct: { low: 35, median: 48, high: 60 },
};

export const benchmarkDefaults = {
  revenue: "1350000",
  margin: "24",
  technicians: "2",
  recurringPct: "48",
};

export const hubFaqs = [
  {
    question: "How profitable is an optometry practice?",
    answer:
      "Healthy optometry practices typically achieve 20–28% net profit margin, with a median around 24%. Practices with strong optical capture (60%+) and medical eye care billing reach 26–32%. Gross margins run 58–72% when retail mix is optimized.",
  },
  {
    question: "How much revenue does an optometry clinic generate?",
    answer:
      "The median U.S. optometry practice generates about $1.35M in annual revenue. The interquartile range spans $900K (25th percentile) to $1.9M (75th percentile), with top multi-location groups exceeding $2.5M.",
  },
  {
    question: "What is the average profit margin?",
    answer:
      "Gross margins typically run 58–72%; operating margins 22–32%; net margins 18–28%. Optical dispensary margin and insurance mix are the primary P&L levers — eyewear sales often drive profitability beyond exam reimbursements.",
  },
  {
    question: "How much do optometrists earn?",
    answer:
      "Owner-operators typically earn $180K–$280K in total compensation, with a median around $235K. Multi-location owners and group practice partners can exceed $350K with strong optical revenue and associate OD productivity.",
  },
  {
    question: "What is an optometry practice worth?",
    answer:
      "Optometry practices typically sell at 4.5×–6.5× EBITDA, with a median near 5.2×. A practice with $1.35M revenue and $324K EBITDA might value between $1.46M and $2.11M. Strong optical capture and recurring patient base support premium multiples.",
  },
  {
    question: "How much does it cost to open an optometry clinic?",
    answer:
      "Most optometry practices launch between $350K and $750K, with a median near $525K. Office buildout, diagnostic equipment, optical inventory, and working capital for ramp-up are the largest line items.",
  },
  {
    question: "What is the average revenue per patient?",
    answer:
      "Average revenue per patient ranges $380–$520 annually, with a median near $420. This includes exam fees, eyewear purchases, contact lens supply, and medical services across the patient relationship.",
  },
  {
    question: "How important are eyewear sales to profitability?",
    answer:
      "Eyewear sales are critical — frames and lenses represent 50–65% of revenue at profitable practices. Optical capture rate above 60% is the single strongest predictor of above-median net margin. Exam-only models struggle without retail attach.",
  },
] as const;
