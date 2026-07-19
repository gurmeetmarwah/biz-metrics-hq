import { mergeProfitabilityFaqs } from "@/lib/industries/profitability-seo";
import { daySpaProfitabilitySeo } from "@/lib/industries/profitability-seo-data";

export const profitabilitySeo = daySpaProfitabilitySeo;

export const hubMeta = {
  slug: "day-spa",
  parentSlug: "beauty",
  parentLabel: "Beauty & Personal Care",
  title: "Day Spa Benchmarks, KPIs & Business Metrics",
  subtitle:
    "Revenue, profit margins, startup costs, EBITDA, valuation, client lifetime value, treatment room utilization, and industry benchmarks — helping day spa owners, buyers, and investors make smarter business decisions with real-world data.",
  dataVintage: "2025–2026",
  sampleSize: "100+ day spas",
} as const;

export const searchQuickLinks = [
  { label: "Hair Salon", href: "/industries/beauty/hair-salon/" },
  { label: "Nail Salon", href: "/industries/beauty/nail-salon/" },
  { label: "Medical Spa", href: "/industries/beauty/medical-spa/" },
  { label: "Massage Spa", href: "/industries/massage-spa/", comingSoon: true },
] as const;

export const hubKpis = [
  {
    id: "revenue",
    label: "Average Annual Revenue",
    value: "$750K",
    sublabel: "median independent day spa",
    href: "#benchmarks",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Net Profit Margin",
    value: "14%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "ebitda",
    label: "EBITDA Margin",
    value: "16%",
    sublabel: "median EBITDA",
    href: "#benchmarks",
    accent: "metric-margin",
  },
  {
    id: "startup",
    label: "Startup Cost",
    value: "$300K",
    sublabel: "median launch investment",
    href: "#startup-costs",
    accent: "metric-valuation",
  },
  {
    id: "valuation",
    label: "Business Valuation",
    value: "2.8× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
  {
    id: "owner-income",
    label: "Owner Income",
    value: "$110K",
    sublabel: "median owner-operator",
    href: "#owner-salary",
    accent: "metric-salary",
  },
  {
    id: "rev-per-room",
    label: "Revenue per Treatment Room",
    value: "$135K",
    sublabel: "annual room revenue",
    href: "#benchmarks",
    accent: "metric-revenue",
  },
  {
    id: "ltv",
    label: "Client Lifetime Value",
    value: "$5K",
    sublabel: "median client LTV",
    href: "#kpis",
    accent: "metric-salary",
  },
] as const;

export const businessScorecard = {
  industryName: "Day Spa",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Recurring Revenue", rating: 5 },
    { label: "Retail Revenue", rating: 4 },
    { label: "Startup Difficulty", rating: 4, higherIsWorse: true },
    { label: "Staffing Dependence", rating: 5, higherIsWorse: true },
    { label: "Exit Potential", rating: 4 },
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
    body: "The U.S. day spa industry is a $20B+ wellness segment built on massage, facials, body treatments, and membership-driven repeat visits across suburban and urban markets.",
  },
  {
    title: "Industry growth",
    body: "Day spas are growing at roughly 5–8% annually as consumers prioritize self-care, stress relief, and skincare. Membership models and package pricing are accelerating recurring revenue.",
  },
  {
    title: "Common services",
    body: "Core revenue drivers include massage therapy, facials and skincare, body wraps and scrubs, waxing, aromatherapy, and couples packages. Massage and facials typically account for 55–70% of revenue.",
  },
  {
    title: "Independent vs franchise",
    body: "Independents dominate by count and offer full menu and pricing flexibility. Franchise and resort-affiliated spas win on brand trust, marketing systems, and built-in foot traffic.",
  },
  {
    title: "Membership business model",
    body: "Most successful day spas operate on a membership and package model — monthly plans, prepaid series, and loyalty tiers lift average ticket and improve cash flow predictability.",
  },
  {
    title: "Demand drivers",
    body: "Workplace stress, wellness culture, gift certificate sales, and social media discovery sustain demand. Monthly membership cadence creates a natural recurring revenue stream.",
  },
  {
    title: "Growth trends",
    body: "Membership programs, medical-grade skincare retail, couples and group packages, and hybrid wellness offerings (yoga, infrared sauna) are the growth levers in 2026.",
  },
] as const;

export const benchmarkRows = [
  { metric: "Annual Revenue", value: "$400K – $1.2M" },
  { metric: "Gross Margin", value: "55 – 68%" },
  { metric: "EBITDA Margin", value: "12 – 20%" },
  { metric: "Net Profit Margin", value: "10 – 18%" },
  { metric: "Average Treatment Value", value: "$120 – $250" },
  { metric: "Client Lifetime Value", value: "$2.5K – $7.5K" },
  { metric: "Revenue per Therapist", value: "$110K – $200K" },
  { metric: "Revenue per Treatment Room", value: "$90K – $180K" },
  { metric: "Payroll %", value: "42 – 50%" },
  { metric: "Marketing %", value: "6 – 12%" },
] as const;

export const financialMetricCards = [
  {
    label: "Revenue",
    value: "$750K median",
    description: "Estimate annual day spa revenue from treatment rooms, therapists, and average ticket.",
    href: "/calculators/day-spa-revenue/",
  },
  {
    label: "Profit Margin",
    value: "14% net",
    description: "Model net margin from service revenue, therapist payroll, supplies, and overhead.",
    href: "/calculators/day-spa-profit-margin/",
  },
  {
    label: "EBITDA",
    value: "16% median",
    description: "Calculate EBITDA from revenue, labor, product COGS, and operating expenses.",
    href: "/calculators/day-spa-ebitda/",
  },
  {
    label: "Startup Cost",
    value: "$300K median",
    description: "Add up buildout, treatment rooms, equipment, licensing, and working capital.",
    href: "/calculators/day-spa-startup-cost/",
  },
  {
    label: "Business Valuation",
    value: "2.8× SDE",
    description: "Estimate day spa value from SDE and spa industry sale multiples.",
    href: "/calculators/day-spa-valuation/",
  },
  {
    label: "Owner Salary",
    value: "$110K median",
    description: "See what day spa owner-operators earn across practice models and sizes.",
    href: "/calculators/day-spa-profit-margin/",
  },
  {
    label: "Break-even",
    value: "18 – 30 months",
    description: "Find the monthly revenue and appointment volume needed to cover fixed costs.",
    href: "/calculators/day-spa-break-even/",
  },
  {
    label: "Cash Flow",
    value: "Positive at 60%+ utilization",
    description: "Model monthly cash flow from membership revenue, packages, and seasonality.",
    href: "/calculators/day-spa-membership-revenue/",
  },
] as const;

export const hubCalculators = [
  {
    label: "Day Spa Revenue Calculator",
    description: "Project annual revenue from treatment rooms, therapists, and average ticket.",
    href: "/calculators/day-spa-revenue/",
  },
  {
    label: "Day Spa Profit Margin Calculator",
    description: "Model net margin from service revenue, payroll, supplies, and overhead.",
    href: "/calculators/day-spa-profit-margin/",
  },
  {
    label: "Day Spa EBITDA Calculator",
    description: "Calculate EBITDA margin from revenue and operating expense structure.",
    href: "/calculators/day-spa-ebitda/",
  },
  {
    label: "Day Spa Startup Cost Calculator",
    description: "Estimate total launch investment — buildout, rooms, equipment, and working capital.",
    href: "/calculators/day-spa-startup-cost/",
  },
  {
    label: "Day Spa Break-even Calculator",
    description: "Find the monthly revenue and appointments needed to cover fixed costs.",
    href: "/calculators/day-spa-break-even/",
  },
  {
    label: "Day Spa Valuation Calculator",
    description: "Estimate spa value using SDE and day spa industry multiples.",
    href: "/calculators/day-spa-valuation/",
  },
  {
    label: "Revenue per Therapist Calculator",
    description: "Benchmark each therapist's annual service revenue against industry ranges.",
    href: "/calculators/day-spa-revenue-per-therapist/",
  },
  {
    label: "Revenue per Treatment Room Calculator",
    description: "Measure revenue productivity per treatment room annually.",
    href: "/calculators/day-spa-revenue-per-treatment-room/",
  },
  {
    label: "Client Lifetime Value Calculator",
    description: "Estimate total revenue per client over their relationship with your spa.",
    href: "/calculators/day-spa-client-lifetime-value/",
  },
  {
    label: "Treatment Room Utilization Calculator",
    description: "Measure booked vs available room hours to spot idle capacity.",
    href: "/calculators/day-spa-treatment-room-utilization/",
  },
  {
    label: "Membership Revenue Calculator",
    description: "Model recurring revenue from membership plans and package enrollments.",
    href: "/calculators/day-spa-membership-revenue/",
  },
  {
    label: "Payroll Percentage Calculator",
    description: "Track therapist wages and commissions as a percentage of revenue.",
    href: "/calculators/day-spa-payroll-percentage/",
  },
] as const;

export const revenueDrivers = [
  { title: "Massage Volume", description: "Massage therapy is the highest-volume core service line for most day spas." },
  { title: "Facial & Skincare", description: "Facials carry premium tickets and strong retail product attachment." },
  { title: "Membership Programs", description: "Monthly membership plans smooth cash flow and lock in visit cadence." },
  { title: "Repeat Clients", description: "Membership clients return monthly — the foundation of predictable spa revenue." },
  { title: "Retail Product Sales", description: "Skincare retail adds 15–25% of revenue at the highest gross margins." },
  { title: "Package Pricing", description: "Prepaid treatment series improve cash flow and increase visit commitment." },
  { title: "Therapist Productivity", description: "Revenue per licensed therapist is the clearest measure of service productivity." },
  { title: "Treatment Room Utilization", description: "Booked room hours directly drive revenue — target 60–78% utilization." },
  { title: "Upselling", description: "Add-on treatments (hot stones, aromatherapy, scalp massage) raise ticket at the room." },
  { title: "Gift Certificates", description: "Holiday and occasion gift sales drive new client acquisition at low marketing cost." },
  { title: "Seasonality", description: "Q4 gifting and January wellness peaks lift volume — plan staffing around seasonal demand." },
] as const;

export const expenseMix = [
  { label: "Therapist Payroll", share: 46, description: "Massage therapists and estheticians — largest day spa cost." },
  { label: "Product & Consumables", share: 10, description: "Massage oils, skincare, waxing supplies, and linens." },
  { label: "Facility Rent", share: 12, description: "Retail-visible or wellness-center lease cost." },
  { label: "Marketing", share: 8, description: "Digital ads, social media, local partnerships, and referral programs." },
  { label: "Retail Inventory", share: 5, description: "Skincare and wellness product stock." },
  { label: "Software", share: 3, description: "Scheduling, POS, CRM, and payment processing." },
  { label: "Insurance", share: 3, description: "Liability and property coverage." },
  { label: "Licensing", share: 2, description: "State licenses, permits, and compliance." },
  { label: "Utilities", share: 4, description: "Power, water, HVAC, and laundry for treatment rooms." },
  { label: "Laundry & Linens", share: 3, description: "Towel service, robes, and treatment linens." },
  { label: "Credit Card Fees", share: 2, description: "Payment processing on card transactions." },
  { label: "Taxes", share: 2, description: "Payroll taxes, sales tax, and business taxes." },
] as const;

export const kpisToTrack = [
  { metric: "Client Lifetime Value", value: "$2.5K – $7.5K" },
  { metric: "Revenue per Therapist", value: "$110K – $200K" },
  { metric: "Revenue per Treatment Room", value: "$90K – $180K" },
  { metric: "Average Treatment Value", value: "$120 – $250" },
  { metric: "Membership Retention", value: "60 – 78%" },
  { metric: "Rebooking Rate", value: "55 – 72%" },
  { metric: "Therapist Utilization", value: "58 – 75%" },
  { metric: "Treatment Room Occupancy", value: "60 – 78%" },
  { metric: "Retail Attachment", value: "15 – 25%" },
  { metric: "Gift Certificate Redemption", value: "65 – 80%" },
  { metric: "Cancellation Rate", value: "< 8%" },
  { metric: "Payroll Percentage", value: "42 – 50%" },
] as const;

export const treatmentCards = [
  { label: "Swedish Massage", description: "Highest-volume service — core recurring revenue driver.", href: "#revenue" },
  { label: "Deep Tissue Massage", description: "Premium tickets with strong therapist upsell potential.", href: "#revenue" },
  { label: "Custom Facials", description: "High-ticket skincare with retail product attachment.", href: "#revenue" },
  { label: "Body Wraps & Scrubs", description: "Premium add-on treatments that lift average ticket.", href: "#benchmarks" },
  { label: "Waxing Services", description: "Recurring hair removal with monthly rebooking cadence.", href: "#benchmarks" },
  { label: "Aromatherapy", description: "Low-cost add-on that enhances treatment experience.", href: "#benchmarks" },
  { label: "Couples Packages", description: "Dual-room bookings carry premium package pricing.", href: "#revenue" },
  { label: "Hot Stone Therapy", description: "Premium massage upgrade with minimal supply cost.", href: "#benchmarks" },
  { label: "Reflexology", description: "Specialty service with loyal repeat client base.", href: "#benchmarks" },
  { label: "Membership Plans", description: "Monthly recurring revenue — the margin stabilizer.", href: "#revenue" },
] as const;

export const ownerSalaryCards = [
  { model: "Owner-Therapist", earnings: "$60K – $100K" },
  { model: "Owner-Operator (Non-Service)", earnings: "$80K – $140K" },
  { model: "Established Multi-Room Spa", earnings: "$120K – $180K" },
  { model: "Multi-Location Operator", earnings: "$200K+" },
] as const;

export const valuationCards = [
  { metric: "SDE Multiple", range: "2.0× – 3.5×" },
  { metric: "EBITDA Multiple", range: "2.5× – 4.5×" },
  { metric: "Revenue Multiple", range: "0.4× – 0.8×" },
  { metric: "Typical Spa Value", range: "$400K – $1.5M" },
] as const;

export const startupCostBreakdown = [
  { item: "Buildout & Treatment Rooms", range: "$80K – $180K", percent: "38%" },
  { item: "Massage Tables & Equipment", range: "$25K – $60K", percent: "14%" },
  { item: "Furniture & Fixtures", range: "$20K – $45K", percent: "10%" },
  { item: "Skincare & Product Inventory", range: "$15K – $35K", percent: "8%" },
  { item: "Licensing & Permits", range: "$8K – $20K", percent: "5%" },
  { item: "Working Capital", range: "$40K – $80K", percent: "18%" },
  { item: "Branding & Marketing", range: "$12K – $30K", percent: "7%" },
] as const;

export const startupCostTotal = { low: "$150K", median: "$300K", high: "$500K" } as const;

export const industryReports = [
  {
    label: "US Day Spa Industry Report 2026",
    description: "Market size, service trends, competition, and the 2026–2034 outlook for day spas.",
    comingSoon: true,
  },
  {
    label: "Highest Margin Beauty Businesses 2026",
    description: "Ranking beauty and wellness segments by net profit margin.",
    href: "/industries/beauty/hair-salon/reports/highest-margin-beauty-businesses-2026/",
  },
  {
    label: "Fastest Growing Beauty Businesses 2026",
    description: "Where spa, wellness, and treatment demand is expanding fastest.",
    href: "/industries/beauty/hair-salon/reports/fastest-growing-beauty-businesses-2026/",
  },
  {
    label: "Best Recurring Revenue Beauty Businesses 2026",
    description: "Which beauty models build the most predictable recurring revenue.",
    href: "/industries/beauty/hair-salon/reports/best-recurring-revenue-beauty-businesses-2026/",
  },
  {
    label: "Salon Pricing Trends 2026",
    description: "How beauty and spa service pricing is shifting across segments.",
    href: "/industries/beauty/hair-salon/reports/salon-pricing-trends-2026/",
  },
] as const;

export const hubComparisons = [
  { label: "Day Spa vs Hair Salon", href: "/comparisons/hair-salon-vs-day-spa/" },
  { label: "Day Spa vs Nail Salon", href: "/comparisons/nail-salon-vs-day-spa/" },
  { label: "Day Spa vs Medical Spa", href: "/comparisons/medical-spa-vs-day-spa/" },
  { label: "Day Spa vs Massage Spa", href: "/comparisons/day-spa-vs-massage-spa/" },
  { label: "Day Spa vs Wellness Clinic", href: "/comparisons/day-spa-vs-wellness-clinic/" },
  { label: "Day Spa vs Facial Studio", href: "/comparisons/day-spa-vs-facial-studio/" },
] as const;

export const relatedBeautyBusinesses = [
  { label: "Medical Spa", href: "/industries/beauty/medical-spa/" },
  { label: "Hair Salon", href: "/industries/beauty/hair-salon/" },
  { label: "Nail Salon", href: "/industries/beauty/nail-salon/" },
  { label: "Massage Spa", href: "/industries/massage-spa/", comingSoon: true },
  { label: "Facial Studio", href: "/industries/facial-studio/", comingSoon: true },
  { label: "Lash Studio", href: "/industries/lash-studio/", comingSoon: true },
  { label: "Wellness Clinic", href: "/industries/wellness-clinic/", comingSoon: true },
  { label: "Barbershop", href: "/industries/beauty/barbershop/" },
] as const;

const industryFaqs = [
  {
    question: "How much does a day spa make annually?",
    answer:
      "A typical independent day spa generates $400K–$1.2M in annual revenue, with a median near $750K. High-performing day spas with strong membership programs, 6+ treatment rooms, and retail attachment can exceed $1.5M depending on location, service mix, and therapist count.",
  },
  {
    question: "Is owning a day spa profitable?",
    answer:
      "Yes — day spas are profitable when payroll stays near 42–50% of revenue and treatment room utilization reaches 60–78%. The average day spa profit margin runs 10–18% net, with top operators reaching 18–24% through membership revenue and retail attachment.",
  },
  {
    question: "What is a healthy profit margin for a day spa?",
    answer:
      "A healthy day spa net margin is 10–18%, with EBITDA margins of 12–20%. Gross margins on services run 55–68%. Spas below 10% net usually have payroll drift, low utilization, or underpriced treatment menus.",
  },
  {
    question: "What services generate the most revenue?",
    answer:
      "Massage therapy and facials generate the most revenue — typically 55–70% of day spa income combined. Body treatments, waxing, and membership plans follow. Retail skincare adds 15–25% at the highest gross margins.",
  },
  {
    question: "What equipment is required to open a day spa?",
    answer:
      "Core equipment includes massage tables, facial beds, hot towel cabinets, sterilization equipment, waxing supplies, and scheduling software. Buildout for treatment rooms and relaxation areas adds $80K–$180K — the largest startup expense.",
  },
  {
    question: "How much working capital is needed?",
    answer:
      "Plan for $40K–$80K in working capital to cover product inventory, payroll during ramp, marketing, and 3–6 months of operating expenses. Day spas with membership revenue need less buffer once recurring income stabilizes.",
  },
  {
    question: "How is a day spa valued?",
    answer:
      "Most day spas sell for 2.0–3.5× SDE (seller's discretionary earnings), or roughly 0.4–0.8× annual revenue. A typical day spa is worth $400K–$1.5M, with value driven by membership revenue, therapist retention, and clean financials.",
  },
  {
    question: "What are the biggest operating costs?",
    answer:
      "Therapist payroll (42–50%), rent (10–16%), product and consumables (8–14%), and marketing (6–12%) are the largest day spa expenses. Controlling payroll and maximizing room utilization are the highest-impact margin levers.",
  },
  {
    question: "How many treatment rooms are optimal?",
    answer:
      "Most successful single-location day spas operate 4–8 treatment rooms. Revenue per room typically runs $90K–$180K annually. Adding rooms before filling existing capacity dilutes utilization — target 60–78% occupancy before expanding.",
  },
  {
    question: "How many therapists should a day spa employ?",
    answer:
      "An average day spa employs 4–10 licensed massage therapists and estheticians plus front-desk and management staff. Revenue per therapist typically runs $110K–$200K annually, making therapist productivity the strongest revenue driver.",
  },
  {
    question: "What is a good client lifetime value?",
    answer:
      "A healthy day spa client lifetime value is $2,500–$7,500, depending on membership status and visit frequency. Monthly membership clients drive the highest LTV; occasional gift-certificate visitors sit at the lower end.",
  },
  {
    question: "How long does it take a day spa to break even?",
    answer:
      "Most new day spas break even within 18–30 months once treatment room utilization reaches 60%+ and a recurring membership base builds. Strong local marketing and a compelling membership offer accelerate the ramp.",
  },
  {
    question: "What is the average EBITDA for a day spa?",
    answer:
      "The average day spa EBITDA margin runs 12–20%, with a median near 16%. EBITDA is the primary valuation metric for larger spas, with multiples of 2.5–4.5× at transaction for practices above $1M in revenue.",
  },
] as const;

export const hubFaqs = mergeProfitabilityFaqs(profitabilitySeo.faqs, industryFaqs);

export const businessQuestionsSectionTitle = "Business Questions";
