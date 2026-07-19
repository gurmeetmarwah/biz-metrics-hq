import { mergeProfitabilityFaqs } from "@/lib/industries/profitability-seo";
import { nailSalonProfitabilitySeo } from "@/lib/industries/profitability-seo-data";

export const profitabilitySeo = nailSalonProfitabilitySeo;

export const hubMeta = {
  slug: "nail-salon",
  parentSlug: "beauty",
  parentLabel: "Beauty & Personal Care",
  title: "Nail Salon Industry Benchmarks & Business Metrics",
  subtitle:
    "Revenue, profit margins, startup costs, valuation, owner salary, technician productivity, KPIs, and industry benchmarks — helping nail salon owners, buyers, and investors make smarter business decisions with real-world data.",
  dataVintage: "2025–2026",
  sampleSize: "180+ nail salons",
} as const;

export const searchQuickLinks = [
  { label: "Hair Salon", href: "/industries/beauty/hair-salon/" },
  { label: "Day Spa", href: "/industries/beauty/day-spa/" },
  { label: "Medical Spa", href: "/industries/beauty/medical-spa/" },
  { label: "Barbershop", href: "/industries/beauty/barbershop/" },
] as const;

export const hubKpis = [
  {
    id: "revenue",
    label: "Average Annual Revenue",
    value: "$300K",
    sublabel: "median independent salon",
    href: "#benchmarks",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Net Profit Margin",
    value: "13%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "startup",
    label: "Startup Cost",
    value: "$110K",
    sublabel: "median launch investment",
    href: "#startup-costs",
    accent: "metric-valuation",
  },
  {
    id: "valuation",
    label: "Business Valuation",
    value: "2.1× SDE",
    sublabel: "median multiple",
    href: "#valuation",
    accent: "metric-valuation",
  },
  {
    id: "owner-salary",
    label: "Owner Salary",
    value: "$65K",
    sublabel: "median owner-operator",
    href: "#owner-salary",
    accent: "metric-salary",
  },
  {
    id: "rev-per-tech",
    label: "Revenue per Technician",
    value: "$70K",
    sublabel: "annual service revenue",
    href: "#benchmarks",
    accent: "metric-revenue",
  },
  {
    id: "ticket",
    label: "Average Ticket Size",
    value: "$45",
    sublabel: "typical service ticket",
    href: "#benchmarks",
    accent: "metric-margin",
  },
  {
    id: "retention",
    label: "Client Retention Rate",
    value: "68%",
    sublabel: "repeat client base",
    href: "#kpis",
    accent: "metric-salary",
  },
] as const;

export const businessScorecard = {
  industryName: "Nail Salon",
  items: [
    { label: "Profitability", rating: 3 },
    { label: "Recurring Revenue", rating: 4 },
    { label: "Retail Revenue", rating: 2 },
    { label: "Startup Difficulty", rating: 3, higherIsWorse: true },
    { label: "Staffing Dependence", rating: 4, higherIsWorse: true },
    { label: "Exit Potential", rating: 3 },
  ],
} as const;

export const hubSectionNav = [
  { id: "overview", label: "Overview" },
  { id: "revenue", label: "Revenue" },
  { id: "profitability", label: "Profitability" },
  { id: "startup-costs", label: "Startup Costs" },
  { id: "kpis", label: "KPIs" },
  { id: "calculators", label: "Calculators" },
  { id: "comparisons", label: "Comparisons" },
  { id: "reports", label: "Reports" },
  { id: "faqs", label: "FAQ" },
] as const;

export const overviewPoints = [
  {
    title: "Market overview",
    body: "The U.S. nail salon industry is a large, fragmented segment within the $60B+ beauty and personal care market, with strong demand for manicures, pedicures, and nail enhancements across all demographics.",
  },
  {
    title: "Industry size",
    body: "Roughly 50,000+ nail salons operate nationwide, generating billions in annual service revenue. Median independent nail salon revenue lands at $200K–$450K, with high-volume locations exceeding $600K.",
  },
  {
    title: "Typical services",
    body: "Core services include manicures, pedicures, gel polish, dip powder, acrylics, nail art, and waxing add-ons. Gel and dip services carry higher tickets and drive the fastest revenue growth.",
  },
  {
    title: "Independent vs franchise",
    body: "Independents dominate by count and offer full menu flexibility; franchise and chain concepts win on brand recognition, standardized operations, and marketing scale in select markets.",
  },
  {
    title: "Revenue model",
    body: "Most nail salons earn from per-service tickets, walk-in volume, and rebooking every 2–4 weeks. Memberships, retail polish sales, and upsells (nail art, extensions) lift average ticket.",
  },
  {
    title: "Trends & growth outlook",
    body: "Gel, acrylic, nail art, and membership plans are the growth drivers in 2026. Steady low-single-digit industry growth is supported by high visit frequency and expanding male grooming demand.",
  },
] as const;

export const benchmarkRows = [
  { metric: "Annual Revenue", value: "$200K – $450K" },
  { metric: "Gross Margin", value: "58 – 68%" },
  { metric: "Net Profit Margin", value: "10 – 17%" },
  { metric: "EBITDA Margin", value: "12 – 20%" },
  { metric: "Average Ticket", value: "$30 – $60" },
  { metric: "Revenue per Technician", value: "$50K – $90K" },
  { metric: "Client Retention", value: "60 – 78%" },
  { metric: "Retail Product Sales %", value: "3 – 7%" },
  { metric: "Payroll %", value: "42 – 50%" },
  { metric: "Station Occupancy Rate", value: "65 – 82%" },
] as const;

export const financialMetricCards = [
  {
    label: "Revenue",
    value: "$300K median",
    description: "Estimate annual nail salon revenue from technicians, tickets, and daily appointments.",
    href: "/calculators/nail-salon-revenue/",
  },
  {
    label: "Profit Margin",
    value: "13% net",
    description: "Model net margin from service revenue, payroll, supplies, and overhead.",
    href: "/calculators/nail-salon-profit-margin/",
  },
  {
    label: "Startup Cost",
    value: "$110K median",
    description: "Add up buildout, stations, ventilation, inventory, and working capital.",
    href: "/calculators/nail-salon-startup-cost/",
  },
  {
    label: "Business Valuation",
    value: "2.1× SDE",
    description: "Estimate nail salon value from SDE and business-for-sale multiples.",
    href: "/calculators/nail-salon-valuation/",
  },
  {
    label: "Owner Salary",
    value: "$65K median",
    description: "See what nail salon owner-operators earn across salon models and sizes.",
    href: "/calculators/nail-salon-profit-margin/",
  },
  {
    label: "Break-even",
    value: "10 – 20 months",
    description: "Find the daily appointments and revenue needed to cover fixed costs.",
    href: "/calculators/nail-salon-break-even/",
  },
  {
    label: "Payroll %",
    value: "42 – 50%",
    description: "Track technician wages and commissions as a percentage of revenue.",
    href: "/calculators/nail-salon-payroll-percentage/",
  },
  {
    label: "Revenue per Technician",
    value: "$70K median",
    description: "Benchmark each technician's annual service revenue against industry ranges.",
    href: "/calculators/nail-salon-revenue-per-technician/",
  },
] as const;

export const hubCalculators = [
  {
    label: "Nail Salon Revenue Calculator",
    description: "Project annual revenue from technicians, average ticket, and appointments per day.",
    href: "/calculators/nail-salon-revenue/",
  },
  {
    label: "Nail Salon Profit Margin Calculator",
    description: "Model net margin from service revenue, payroll, supplies, and overhead.",
    href: "/calculators/nail-salon-profit-margin/",
  },
  {
    label: "Nail Salon Startup Cost Calculator",
    description: "Estimate total launch investment — buildout, stations, ventilation, and inventory.",
    href: "/calculators/nail-salon-startup-cost/",
  },
  {
    label: "Nail Salon Break-even Calculator",
    description: "Find the daily appointments and revenue needed to cover fixed costs.",
    href: "/calculators/nail-salon-break-even/",
  },
  {
    label: "Nail Salon Valuation Calculator",
    description: "Estimate salon value using SDE and industry sale multiples.",
    href: "/calculators/nail-salon-valuation/",
  },
  {
    label: "Revenue per Nail Technician Calculator",
    description: "Benchmark each technician's service revenue against industry ranges.",
    href: "/calculators/nail-salon-revenue-per-technician/",
  },
  {
    label: "Payroll Percentage Calculator",
    description: "Track payroll and commissions as a percentage of revenue.",
    href: "/calculators/nail-salon-payroll-percentage/",
  },
  {
    label: "Client Lifetime Value Calculator",
    description: "Estimate total revenue per client over their relationship with your salon.",
    href: "/calculators/nail-salon-client-lifetime-value/",
  },
  {
    label: "Average Ticket Calculator",
    description: "Model average service price from menu mix and upsell attachment.",
    href: "/calculators/nail-salon-average-ticket/",
  },
  {
    label: "Chair/Station Utilization Calculator",
    description: "Measure booked vs available station hours to spot idle capacity.",
    href: "/calculators/nail-salon-station-utilization/",
  },
] as const;

export const revenueDrivers = [
  { title: "Number of Nail Technicians", description: "More productive stations scale service capacity and total revenue." },
  { title: "Appointments Per Day", description: "Booking density and walk-in volume directly drive daily revenue." },
  { title: "Average Service Price", description: "Gel, dip, and nail art upsells lift per-visit ticket and margin." },
  { title: "Retail Product Sales", description: "Polish and care products add 3–7% of revenue at strong margins." },
  { title: "Membership Revenue", description: "Recurring plans smooth cash flow and lock in 2–4 week visit cadence." },
  { title: "Upselling", description: "Nail art, extensions, and add-ons raise ticket without new clients." },
  { title: "Walk-in Traffic", description: "High-visibility locations capture impulse visits and fill schedule gaps." },
  { title: "Repeat Clients", description: "Rebooking every 2–4 weeks drives predictable, low-cost revenue." },
] as const;

export const expenseMix = [
  { label: "Payroll", share: 46, description: "Technician wages and commissions — the largest nail salon cost." },
  { label: "Rent", share: 13, description: "Lease cost for retail-visible salon space." },
  { label: "Nail Supplies", share: 10, description: "Gel, acrylic, dip powder, and consumables." },
  { label: "Retail Inventory", share: 4, description: "Polish, cuticle oil, and take-home care products." },
  { label: "Marketing", share: 5, description: "Local ads, social media, and referral programs." },
  { label: "Software", share: 3, description: "POS, scheduling, and payment processing." },
  { label: "Insurance", share: 3, description: "Liability and property coverage." },
  { label: "Utilities", share: 4, description: "Power, water, and ventilation for a high-usage space." },
  { label: "Laundry", share: 2, description: "Towel and linen service." },
  { label: "Cleaning", share: 2, description: "Sanitation supplies and professional cleaning." },
  { label: "Credit Card Fees", share: 2, description: "Payment processing on card transactions." },
  { label: "Taxes", share: 6, description: "Payroll taxes, sales tax, and business taxes." },
] as const;

export const kpisToTrack = [
  { metric: "Revenue per Technician", value: "$50K – $90K" },
  { metric: "Average Ticket", value: "$30 – $60" },
  { metric: "Repeat Client Rate", value: "50 – 68%" },
  { metric: "Client Retention", value: "60 – 78%" },
  { metric: "Technician Utilization", value: "65 – 82%" },
  { metric: "Retail Sales %", value: "3 – 7%" },
  { metric: "Payroll %", value: "42 – 50%" },
  { metric: "Booking Rate", value: "70 – 85%" },
  { metric: "Cancellation Rate", value: "< 10%" },
  { metric: "Online Review Score", value: "4.3 – 4.8 stars" },
  { metric: "Revenue per Station", value: "$40K – $80K" },
] as const;

export const ownerSalaryCards = [
  { model: "Solo Owner-Technician", earnings: "$45K – $70K" },
  { model: "Commission Salon Owner", earnings: "$55K – $95K" },
  { model: "Established Multi-Station", earnings: "$90K – $150K" },
  { model: "Small Nail Salon Chain", earnings: "$140K+" },
] as const;

export const valuationCards = [
  { metric: "SDE Multiple", range: "1.6 – 2.6×" },
  { metric: "Revenue Multiple", range: "0.35 – 0.6×" },
  { metric: "Typical Salon Value", range: "$120K – $320K" },
  { metric: "Goodwill / Book", range: "0.25 – 0.5×" },
] as const;

export const startupCostBreakdown = [
  { item: "Buildout & Ventilation", range: "$30K – $70K", percent: "36%" },
  { item: "Stations & Equipment", range: "$15K – $40K", percent: "22%" },
  { item: "Furniture & Fixtures", range: "$8K – $18K", percent: "10%" },
  { item: "Initial Inventory", range: "$5K – $15K", percent: "8%" },
  { item: "Working Capital", range: "$10K – $22K", percent: "12%" },
  { item: "Branding & Marketing", range: "$3K – $10K", percent: "6%" },
  { item: "Licensing & Permits", range: "$2K – $8K", percent: "6%" },
] as const;

export const startupCostTotal = { low: "$70K", median: "$110K", high: "$180K" } as const;

export const industryReports = [
  {
    label: "US Nail Salon Industry Report 2026",
    description: "Market size, service trends, competition, and the 2026–2034 outlook for nail salons.",
    href: "/industries/beauty/nail-salon/reports/us-nail-salon-industry-report-2026/",
  },
  {
    label: "Highest Margin Beauty Businesses 2026",
    description: "Ranking beauty and personal care segments by net profit margin.",
    href: "/industries/beauty/hair-salon/reports/highest-margin-beauty-businesses-2026/",
  },
  {
    label: "Fastest Growing Beauty Businesses 2026",
    description: "Where salon, spa, and studio demand is expanding fastest.",
    href: "/industries/beauty/hair-salon/reports/fastest-growing-beauty-businesses-2026/",
  },
  {
    label: "Beauty Industry Benchmark Report",
    description: "Cross-segment beauty benchmarks for revenue, margins, and valuation.",
    href: "/industries/beauty/hair-salon/reports/us-hair-salon-industry-report-2026/",
  },
  {
    label: "Best Recurring Revenue Beauty Businesses 2026",
    description: "Which beauty models build the most predictable recurring revenue.",
    href: "/industries/beauty/hair-salon/reports/best-recurring-revenue-beauty-businesses-2026/",
  },
] as const;

export const hubComparisons = [
  { label: "Nail Salon vs Hair Salon", href: "/comparisons/nail-salon-vs-hair-salon/" },
  { label: "Nail Salon vs Lash Studio", href: "/comparisons/nail-salon-vs-lash-studio/" },
  { label: "Nail Salon vs Day Spa", href: "/comparisons/nail-salon-vs-day-spa/" },
  { label: "Nail Salon vs Medical Spa", href: "/comparisons/nail-salon-vs-medical-spa/" },
  { label: "Nail Salon vs Waxing Salon", href: "/comparisons/nail-salon-vs-waxing-salon/" },
  { label: "Nail Salon vs Barbershop", href: "/comparisons/nail-salon-vs-barbershop/" },
] as const;

export const relatedBeautyBusinesses = [
  { label: "Hair Salon", href: "/industries/beauty/hair-salon/" },
  { label: "Medical Spa", href: "/industries/beauty/medical-spa/" },
  { label: "Day Spa", href: "/industries/beauty/day-spa/" },
  { label: "Lash Studio", href: "/industries/lash-studio/", comingSoon: true },
  { label: "Waxing Salon", href: "/industries/waxing-salon/", comingSoon: true },
  { label: "Brow Studio", href: "/industries/brow-studio/", comingSoon: true },
  { label: "Massage Spa", href: "/industries/massage-spa/", comingSoon: true },
  { label: "Facial Studio", href: "/industries/facial-studio/", comingSoon: true },
] as const;

const industryFaqs = [
  {
    question: "What is the average revenue of a nail salon?",
    answer:
      "A typical independent nail salon generates $200K–$450K in annual revenue, with a median near $300K. High-volume nail salons with 6+ technicians and strong walk-in traffic can exceed $600K depending on station count, average ticket, and location.",
  },
  {
    question: "Is owning a nail salon profitable?",
    answer:
      "Yes — a nail salon is profitable when payroll stays near 42–50% of revenue and station utilization reaches 65–82%. The average nail salon profit margin runs 10–17% net, with top operators reaching 17–22% through disciplined scheduling and upselling.",
  },
  {
    question: "How much does a nail salon owner earn?",
    answer:
      "A nail salon owner-operator typically earns $45K–$95K, with established multi-station salons paying owners $90K–$150K. Owner pay depends on whether the owner also works a station and on the salon's commission vs booth-rent model.",
  },
  {
    question: "What services generate the highest profit?",
    answer:
      "Gel manicures, dip powder, acrylic sets, and nail art carry the highest tickets and margins. Basic manicures and pedicures anchor visit frequency; upselling gel, art, and extensions on every visit lifts average ticket and profitability.",
  },
  {
    question: "What is the average startup cost?",
    answer:
      "Opening a nail salon typically costs $70K–$180K, with a median near $110K. Buildout, ventilation, stations, equipment, initial inventory, licensing, and working capital are the biggest line items for a new nail salon.",
  },
  {
    question: "How much is a nail salon worth?",
    answer:
      "Most nail salons sell for 1.6–2.6× SDE (seller's discretionary earnings), or about 0.35–0.6× annual revenue. A typical nail salon is worth $120K–$320K, with value driven by profitability, client retention, and transferable staff.",
  },
  {
    question: "How many appointments should each technician complete daily?",
    answer:
      "A productive nail technician completes 6–10 appointments per day depending on service mix — faster manicures allow more volume, while acrylic and pedicure services reduce daily capacity. Target 35–60 total salon appointments per day across all stations.",
  },
  {
    question: "What is a healthy payroll percentage?",
    answer:
      "Healthy nail salon payroll runs 42–50% of revenue, including technician wages and commissions. Salons above 50% usually need pricing adjustments or better utilization; below 42% may signal underinvestment in technician quality or retention.",
  },
  {
    question: "How many nail technicians should a salon employ?",
    answer:
      "An average nail salon employs 4–8 technicians plus front-desk staff. Revenue per technician typically runs $50K–$90K in annual service revenue, so technician productivity and retention are among the strongest drivers of nail salon revenue.",
  },
  {
    question: "How long does it take to break even?",
    answer:
      "Most new nail salons break even within 10–20 months once station utilization reaches 65–82% and rebooking builds a repeat client base every 2–4 weeks. Salons in high-traffic locations with strong walk-in volume reach break-even sooner.",
  },
  {
    question: "What are the biggest expenses for a nail salon?",
    answer:
      "Payroll (42–50%), rent (10–15%), nail supplies (8–12%), and taxes/overhead (10–16%) are the largest nail salon expenses. Controlling payroll and maximizing station utilization are the two highest-impact levers on net margin.",
  },
  {
    question: "What KPIs should every nail salon track?",
    answer:
      "Track revenue per technician, average ticket, repeat client rate, technician utilization, payroll %, booking rate, cancellation rate, and revenue per station. These KPIs separate high-performing nail salons from break-even operators.",
  },
] as const;

export const hubFaqs = mergeProfitabilityFaqs(profitabilitySeo.faqs, industryFaqs);

export const businessQuestionsSectionTitle = "Business Questions";
