import { mergeProfitabilityFaqs } from "@/lib/industries/profitability-seo";
import { medicalSpaProfitabilitySeo } from "@/lib/industries/profitability-seo-data";

export const profitabilitySeo = medicalSpaProfitabilitySeo;

export const hubMeta = {
  slug: "medical-spa",
  parentSlug: "beauty",
  parentLabel: "Beauty & Personal Care",
  title: "Medical Spa Profit Margin: What's Typical in 2026?",
  subtitle:
    "Medical spa profit margins typically run 15–30% net (median ~22%), or about $180K–$360K on $1.2M revenue. See owner pay, injectables mix, treatment economics, and valuation multiples.",
  dataVintage: "2025–2026",
  sampleSize: "120+ medical spas",
} as const;

export const searchQuickLinks = [
  { label: "Hair Salon", href: "/industries/beauty/hair-salon/" },
  { label: "Nail Salon", href: "/industries/beauty/nail-salon/" },
  { label: "Day Spa", href: "/industries/beauty/day-spa/" },
  { label: "Dermatology Practice", href: "/industries/dermatology-practice/", comingSoon: true },
] as const;

export const hubKpis = [
  {
    id: "revenue",
    label: "Average Annual Revenue",
    value: "$1.2M",
    sublabel: "median independent med spa",
    href: "#benchmarks",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Net Profit Margin",
    value: "22%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "ebitda",
    label: "EBITDA Margin",
    value: "24%",
    sublabel: "median EBITDA",
    href: "#benchmarks",
    accent: "metric-margin",
  },
  {
    id: "startup",
    label: "Startup Cost",
    value: "$500K",
    sublabel: "median launch investment",
    href: "#startup-costs",
    accent: "metric-valuation",
  },
  {
    id: "valuation",
    label: "Business Valuation",
    value: "4.0× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
  {
    id: "owner-income",
    label: "Owner Income",
    value: "$180K",
    sublabel: "median owner-operator",
    href: "#owner-salary",
    accent: "metric-salary",
  },
  {
    id: "rev-per-provider",
    label: "Revenue per Provider",
    value: "$450K",
    sublabel: "annual clinical revenue",
    href: "#benchmarks",
    accent: "metric-revenue",
  },
  {
    id: "ltv",
    label: "Patient Lifetime Value",
    value: "$8K",
    sublabel: "median patient LTV",
    href: "#kpis",
    accent: "metric-salary",
  },
] as const;

export const businessScorecard = {
  industryName: "Medical Spa",
  items: [
    { label: "Profitability", rating: 5 },
    { label: "Recurring Revenue", rating: 5 },
    { label: "Retail Revenue", rating: 4 },
    { label: "Startup Difficulty", rating: 5, higherIsWorse: true },
    { label: "Staffing Dependence", rating: 4, higherIsWorse: true },
    { label: "Exit Potential", rating: 5 },
  ],
} as const;

export const hubSectionNav = [
  { id: "overview", label: "Overview" },
  { id: "benchmarks", label: "Financial Benchmarks" },
  { id: "revenue", label: "Revenue Drivers" },
  { id: "calculators", label: "Calculators" },
  { id: "kpis", label: "KPIs" },
  { id: "reports", label: "Reports" },
  { id: "comparisons", label: "Comparisons" },
  { id: "faqs", label: "FAQ" },
] as const;

export const overviewPoints = [
  {
    title: "Market overview",
    body: "The U.S. medical spa industry is a fast-growing segment within the $18B+ aesthetic medicine market, driven by injectables, laser devices, and cash-pay wellness treatments across all adult demographics.",
  },
  {
    title: "Industry growth",
    body: "Medical spas are growing at roughly 8–12% annually — among the fastest segments in beauty and personal care. Demand for Botox, fillers, laser hair removal, and body contouring continues to expand as treatments normalize.",
  },
  {
    title: "Common treatments",
    body: "Core revenue drivers include Botox and dermal fillers, laser hair removal, chemical peels, microneedling, HydraFacial, CoolSculpting, PRP therapy, and body contouring. Injectables typically account for 40–55% of revenue.",
  },
  {
    title: "Independent vs franchise",
    body: "Independents dominate by count and offer full menu and pricing flexibility. Franchise and national aesthetic brands win on brand trust, marketing systems, and standardized protocols in select markets.",
  },
  {
    title: "Cash-pay business model",
    body: "Most medical spas operate on a cash-pay, elective-treatment model without insurance reimbursement. Memberships, packages, and financing plans lift average ticket and improve cash flow predictability.",
  },
  {
    title: "Demand drivers",
    body: "Aging demographics, social media visibility, male grooming adoption, and workplace wellness trends sustain demand. Injectable maintenance every 3–4 months creates a natural recurring revenue cadence.",
  },
  {
    title: "Growth trends",
    body: "Membership programs, combination treatment packages, medical-grade skincare retail, and telehealth consults are the growth levers in 2026. Operators adding body contouring and regenerative treatments see the fastest ticket growth.",
  },
] as const;

export const benchmarkRows = [
  { metric: "Annual Revenue", value: "$600K – $2.5M" },
  { metric: "Gross Margin", value: "60 – 75%" },
  { metric: "EBITDA Margin", value: "18 – 28%" },
  { metric: "Net Profit Margin", value: "15 – 30%" },
  { metric: "Average Treatment Value", value: "$250 – $600" },
  { metric: "Patient Lifetime Value", value: "$4K – $15K" },
  { metric: "Revenue per Provider", value: "$300K – $700K" },
  { metric: "Revenue per Treatment Room", value: "$200K – $500K" },
  { metric: "Payroll %", value: "30 – 40%" },
  { metric: "Marketing %", value: "8 – 15%" },
] as const;

export const financialMetricCards = [
  {
    label: "Revenue",
    value: "$1.2M median",
    description: "Estimate annual medical spa revenue from providers, treatment mix, and room utilization.",
    href: "/calculators/medical-spa-revenue/",
  },
  {
    label: "Profit Margin",
    value: "22% net",
    description: "Model net margin from treatment revenue, payroll, supplies, and overhead.",
    href: "/calculators/medical-spa-profit-margin/",
  },
  {
    label: "EBITDA",
    value: "24% median",
    description: "Calculate EBITDA from revenue, clinical labor, COGS, and operating expenses.",
    href: "/calculators/medical-spa-ebitda/",
  },
  {
    label: "Startup Cost",
    value: "$500K median",
    description: "Add up buildout, laser devices, injectable inventory, licensing, and working capital.",
    href: "/calculators/medical-spa-startup-cost/",
  },
  {
    label: "Business Valuation",
    value: "4.0× SDE",
    description: "Estimate medical spa value from SDE and aesthetic practice sale multiples.",
    href: "/calculators/medical-spa-valuation/",
  },
  {
    label: "Owner Salary",
    value: "$180K median",
    description: "See what medical spa owner-operators earn across practice models and sizes.",
    href: "/calculators/medical-spa-profit-margin/",
  },
  {
    label: "Break-even",
    value: "18 – 36 months",
    description: "Find the monthly revenue and treatment volume needed to cover fixed costs.",
    href: "/calculators/medical-spa-break-even/",
  },
  {
    label: "Cash Flow",
    value: "Positive at 55%+ utilization",
    description: "Model monthly cash flow from membership revenue, device payments, and seasonality.",
    href: "/calculators/medical-spa-membership-revenue/",
  },
] as const;

export const hubCalculators = [
  {
    label: "Medical Spa Revenue Calculator",
    description: "Project annual revenue from providers, treatment volume, and average ticket.",
    href: "/calculators/medical-spa-revenue/",
  },
  {
    label: "Medical Spa Profit Margin Calculator",
    description: "Model net margin from treatment revenue, payroll, supplies, and overhead.",
    href: "/calculators/medical-spa-profit-margin/",
  },
  {
    label: "Medical Spa EBITDA Calculator",
    description: "Calculate EBITDA margin from revenue and operating expense structure.",
    href: "/calculators/medical-spa-ebitda/",
  },
  {
    label: "Medical Spa Startup Cost Calculator",
    description: "Estimate total launch investment — buildout, devices, inventory, and working capital.",
    href: "/calculators/medical-spa-startup-cost/",
  },
  {
    label: "Medical Spa Break-even Calculator",
    description: "Find the monthly revenue and treatments needed to cover fixed costs.",
    href: "/calculators/medical-spa-break-even/",
  },
  {
    label: "Medical Spa Valuation Calculator",
    description: "Estimate practice value using SDE and medical spa industry multiples.",
    href: "/calculators/medical-spa-valuation/",
  },
  {
    label: "Revenue per Provider Calculator",
    description: "Benchmark each provider's annual treatment revenue against industry ranges.",
    href: "/calculators/medical-spa-revenue-per-provider/",
  },
  {
    label: "Revenue per Treatment Room Calculator",
    description: "Measure revenue productivity per treatment room annually.",
    href: "/calculators/medical-spa-revenue-per-treatment-room/",
  },
  {
    label: "Patient Lifetime Value Calculator",
    description: "Estimate total revenue per patient over their relationship with your med spa.",
    href: "/calculators/medical-spa-patient-lifetime-value/",
  },
  {
    label: "Treatment Room Utilization Calculator",
    description: "Measure booked vs available room hours to spot idle capacity.",
    href: "/calculators/medical-spa-treatment-room-utilization/",
  },
  {
    label: "Marketing ROI Calculator",
    description: "Track marketing spend against new patient acquisition and revenue generated.",
    href: "/calculators/medical-spa-marketing-roi/",
  },
  {
    label: "Membership Revenue Calculator",
    description: "Model recurring revenue from membership plans and package enrollments.",
    href: "/calculators/medical-spa-membership-revenue/",
  },
] as const;

export const revenueDrivers = [
  { title: "Botox Volume", description: "Injectable neurotoxin treatments are the highest-volume, highest-margin core revenue line." },
  { title: "Dermal Fillers", description: "Filler appointments carry premium tickets and strong upsell potential with complementary treatments." },
  { title: "Laser Treatments", description: "Laser hair removal, IPL, and skin resurfacing drive device ROI and recurring treatment plans." },
  { title: "Membership Programs", description: "Monthly membership plans smooth cash flow and lock in 3–4 month injectable cadence." },
  { title: "Repeat Patients", description: "Injectable patients return every 3–4 months — the foundation of predictable med spa revenue." },
  { title: "Retail Product Sales", description: "Medical-grade skincare adds 15–25% of revenue at the highest gross margins." },
  { title: "Provider Productivity", description: "Revenue per injector/laser provider is the clearest measure of clinical productivity." },
  { title: "Treatment Room Utilization", description: "Booked room hours directly drive revenue — target 55–75% utilization." },
  { title: "Upselling", description: "Combination packages (e.g., Botox + filler + skincare) raise ticket without new patient acquisition cost." },
  { title: "Packages", description: "Prepaid treatment series improve cash flow and increase visit commitment." },
  { title: "Seasonality", description: "Q1 and pre-summer peaks lift volume — plan marketing and staffing around seasonal demand.",
  },
] as const;

export const expenseMix = [
  { label: "Provider Payroll", share: 32, description: "RN, NP, PA, and injector wages — largest med spa cost." },
  { label: "Medical Supplies", share: 8, description: "Disposables, PPE, and treatment consumables." },
  { label: "Injectables", share: 12, description: "Botox, filler, and biostimulator product COGS." },
  { label: "Laser Equipment", share: 6, description: "Device lease payments and depreciation." },
  { label: "Facility Rent", share: 10, description: "Retail-visible or medical-suite lease cost." },
  { label: "Marketing", share: 10, description: "Digital ads, social media, events, and referral programs." },
  { label: "Software", share: 3, description: "EMR, scheduling, CRM, and payment processing." },
  { label: "Insurance", share: 4, description: "Malpractice, general liability, and property coverage." },
  { label: "Licensing", share: 2, description: "Medical director fees, state licenses, and compliance." },
  { label: "Utilities", share: 3, description: "Power, HVAC, and water for treatment rooms." },
  { label: "Financing", share: 5, description: "Device loans, line of credit, and patient financing fees." },
  { label: "Taxes", share: 5, description: "Payroll taxes, sales tax, and business taxes." },
] as const;

export const kpisToTrack = [
  { metric: "Patient Lifetime Value", value: "$4K – $15K" },
  { metric: "Revenue per Provider", value: "$300K – $700K" },
  { metric: "Revenue per Treatment Room", value: "$200K – $500K" },
  { metric: "Average Treatment Value", value: "$250 – $600" },
  { metric: "Membership Retention", value: "65 – 80%" },
  { metric: "Rebooking Rate", value: "55 – 72%" },
  { metric: "Provider Utilization", value: "60 – 78%" },
  { metric: "Treatment Room Occupancy", value: "55 – 75%" },
  { metric: "Marketing ROI", value: "3× – 6×" },
  { metric: "Cost per Lead", value: "$40 – $120" },
  { metric: "Conversion Rate", value: "25 – 45%" },
  { metric: "Payroll Percentage", value: "30 – 40%" },
] as const;

export const treatmentCards = [
  { label: "Botox", description: "Highest-volume injectable — core recurring revenue driver.", href: "#revenue" },
  { label: "Dermal Fillers", description: "Premium tickets with strong combination-treatment upsell.", href: "#revenue" },
  { label: "Laser Hair Removal", description: "Multi-session packages drive predictable recurring visits.", href: "#revenue" },
  { label: "Skin Rejuvenation", description: "IPL, fractional laser, and RF treatments lift average ticket.", href: "#benchmarks" },
  { label: "Chemical Peels", description: "Entry-level aesthetic service with strong rebooking cadence.", href: "#benchmarks" },
  { label: "Microneedling", description: "Collagen-induction treatments with add-on serum upsells.", href: "#benchmarks" },
  { label: "HydraFacial", description: "High-demand facial protocol with retail product attachment.", href: "#benchmarks" },
  { label: "CoolSculpting", description: "Body contouring packages carry premium multi-session revenue.", href: "#revenue" },
  { label: "PRP Therapy", description: "Regenerative treatments with growing demand and high margins.", href: "#benchmarks" },
  { label: "Body Contouring", description: "RF, ultrasound, and cryolipolysis drive highest ticket growth.", href: "#revenue" },
] as const;

export const ownerSalaryCards = [
  { model: "Owner-Injector (NP/PA)", earnings: "$120K – $220K" },
  { model: "Owner-Operator (Non-Clinical)", earnings: "$140K – $280K" },
  { model: "Established Multi-Room Med Spa", earnings: "$250K – $400K" },
  { model: "Multi-Location Operator", earnings: "$400K+" },
] as const;

export const valuationCards = [
  { metric: "SDE Multiple", range: "3.0× – 5.5×" },
  { metric: "EBITDA Multiple", range: "4.0× – 7.0×" },
  { metric: "Revenue Multiple", range: "0.8× – 1.5×" },
  { metric: "Typical Practice Value", range: "$800K – $4M" },
] as const;

export const startupCostBreakdown = [
  { item: "Buildout & Treatment Rooms", range: "$120K – $250K", percent: "32%" },
  { item: "Laser & Medical Devices", range: "$150K – $350K", percent: "38%" },
  { item: "Furniture & Fixtures", range: "$30K – $60K", percent: "8%" },
  { item: "Initial Inventory (Injectables)", range: "$25K – $50K", percent: "7%" },
  { item: "Medical Director & Licensing", range: "$20K – $40K", percent: "6%" },
  { item: "Working Capital", range: "$50K – $100K", percent: "12%" },
  { item: "Branding & Marketing", range: "$15K – $40K", percent: "5%" },
] as const;

export const startupCostTotal = { low: "$300K", median: "$500K", high: "$800K" } as const;

export const industryReports = [
  {
    label: "US Medical Spa Industry Report 2026",
    description: "Market size, treatment trends, competition, and the 2026–2034 outlook for medical spas.",
    href: "/industries/beauty/medical-spa/reports/us-medical-spa-industry-report-2026/",
  },
  {
    label: "Highest Margin Beauty Businesses 2026",
    description: "Ranking beauty and aesthetic segments by net profit margin.",
    href: "/industries/beauty/hair-salon/reports/highest-margin-beauty-businesses-2026/",
  },
  {
    label: "Fastest Growing Aesthetic Businesses 2026",
    description: "Where med spa, laser, and injectable demand is expanding fastest.",
    href: "/industries/beauty/hair-salon/reports/fastest-growing-beauty-businesses-2026/",
  },
  {
    label: "Medical Spa Pricing Report",
    description: "Treatment pricing benchmarks for injectables, laser, and body contouring.",
    href: "/industries/beauty/medical-spa/reports/medical-spa-pricing-report-2026/",
  },
  {
    label: "Top Performing Medical Spa KPIs",
    description: "Benchmark KPIs that separate high-performing med spas from average operators.",
    href: "/industries/beauty/medical-spa/reports/top-performing-medical-spa-kpis-2026/",
  },
] as const;

export const hubComparisons = [
  { label: "Medical Spa vs Dermatology Practice", href: "/comparisons/medical-spa-vs-dermatology-practice/" },
  { label: "Medical Spa vs Plastic Surgery Clinic", href: "/comparisons/medical-spa-vs-plastic-surgery-clinic/" },
  { label: "Medical Spa vs Day Spa", href: "/comparisons/medical-spa-vs-day-spa/" },
  { label: "Medical Spa vs Hair Salon", href: "/comparisons/medical-spa-vs-hair-salon/" },
  { label: "Medical Spa vs Dental Practice", href: "/comparisons/medical-spa-vs-dental-practice/" },
  { label: "Medical Spa vs Wellness Clinic", href: "/comparisons/medical-spa-vs-wellness-clinic/" },
] as const;

export const relatedBeautyBusinesses = [
  { label: "Day Spa", href: "/industries/beauty/day-spa/" },
  { label: "Hair Salon", href: "/industries/beauty/hair-salon/" },
  { label: "Nail Salon", href: "/industries/beauty/nail-salon/" },
  { label: "Lash Studio", href: "/industries/lash-studio/", comingSoon: true },
  { label: "Facial Studio", href: "/industries/facial-studio/", comingSoon: true },
  { label: "Massage Spa", href: "/industries/massage-spa/", comingSoon: true },
  { label: "Dermatology Practice", href: "/industries/dermatology-practice/", comingSoon: true },
  { label: "Plastic Surgery Clinic", href: "/industries/plastic-surgery-clinic/", comingSoon: true },
] as const;

const industryFaqs = [
  {
    question: "How much does a medical spa make annually?",
    answer:
      "A typical independent medical spa generates $600K–$2.5M in annual revenue, with a median near $1.2M. High-performing med spas with strong injectable volume, membership programs, and 4+ treatment rooms can exceed $3M depending on provider count, average ticket, and market.",
  },
  {
    question: "Is owning a medical spa profitable?",
    answer:
      "Yes — medical spas are among the most profitable beauty businesses when payroll stays near 30–40% of revenue and treatment room utilization reaches 55–75%. The average medical spa profit margin runs 15–30% net, with top operators reaching 28–35% through membership revenue and injectable volume.",
  },
  {
    question: "What is a healthy profit margin for a medical spa?",
    answer:
      "A healthy medical spa net margin is 15–30%, with EBITDA margins of 18–28%. Gross margins on injectables and laser treatments run 60–75%. Salons below 15% net usually have payroll drift, low utilization, or underpriced treatment menus.",
  },
  {
    question: "What treatments generate the most revenue?",
    answer:
      "Botox and dermal fillers generate the most revenue — typically 40–55% of med spa income. Laser hair removal, body contouring, and medical-grade facials follow. Combination packages and membership plans lift average ticket across all service lines.",
  },
  {
    question: "What equipment is required to open a medical spa?",
    answer:
      "Core equipment includes laser/IPL devices, injectable supplies, treatment beds, sterilization equipment, and EMR software. Laser devices are the largest capital expense ($150K–$350K), often financed. Buildout for HIPAA-compliant treatment rooms adds $120K–$250K.",
  },
  {
    question: "How much working capital is needed?",
    answer:
      "Plan for $50K–$100K in working capital to cover injectable inventory, payroll during ramp, marketing, and 3–6 months of operating expenses. Medical spas with device financing need additional buffer for loan payments during the break-even period.",
  },
  {
    question: "How is a medical spa valued?",
    answer:
      "Most medical spas sell for 3.0–5.5× SDE (seller's discretionary earnings), or roughly 0.8–1.5× annual revenue. A typical medical spa is worth $800K–$4M, with value driven by membership revenue, provider retention, and clean clinical financials.",
  },
  {
    question: "What are the biggest operating costs?",
    answer:
      "Provider payroll (30–40%), injectable COGS (12–18%), marketing (8–15%), rent (8–14%), and device financing (5–8%) are the largest medical spa expenses. Controlling payroll and maximizing room utilization are the highest-impact margin levers.",
  },
  {
    question: "How many treatment rooms are optimal?",
    answer:
      "Most successful single-location medical spas operate 3–6 treatment rooms. Revenue per room typically runs $200K–$500K annually. Adding rooms before filling existing capacity dilutes utilization — target 55–75% occupancy before expanding.",
  },
  {
    question: "How many providers should a medical spa employ?",
    answer:
      "An average medical spa employs 2–5 clinical providers (RN, NP, PA, or licensed injector) plus front-desk and marketing staff. Revenue per provider typically runs $300K–$700K annually, making provider productivity the strongest revenue driver.",
  },
  {
    question: "What is a good patient lifetime value?",
    answer:
      "A healthy medical spa patient lifetime value is $4,000–$15,000, depending on treatment mix and retention. Injectable patients on a 3–4 month cadence with membership plans drive the highest LTV; one-time laser package patients sit at the lower end.",
  },
  {
    question: "How long does it take a medical spa to break even?",
    answer:
      "Most new medical spas break even within 18–36 months once treatment room utilization reaches 55%+ and a recurring injectable patient base builds. Strong digital marketing and a medical director partnership accelerate the ramp.",
  },
  {
    question: "What is the average EBITDA for a medical spa?",
    answer:
      "The average medical spa EBITDA margin runs 18–28%, with a median near 24%. EBITDA is the primary valuation metric for larger med spas, with multiples of 4.0–7.0× at transaction for practices above $1.5M in revenue.",
  },
] as const;

export const hubFaqs = mergeProfitabilityFaqs(profitabilitySeo.faqs, industryFaqs);

export const businessQuestionsSectionTitle = "Business Questions";
