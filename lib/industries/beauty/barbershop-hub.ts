import { mergeProfitabilityFaqs } from "@/lib/industries/profitability-seo";
import { barbershopProfitabilitySeo } from "@/lib/industries/profitability-seo-data";

export const profitabilitySeo = barbershopProfitabilitySeo;

export const hubMeta = {
  slug: "barbershop",
  parentSlug: "beauty",
  parentLabel: "Beauty & Personal Care",
  title: "Barbershop Business Benchmarks, KPIs & Industry Metrics",
  subtitle:
    "Revenue, profit margins, startup costs, chair utilization, revenue per barber, business valuation, owner salary, and industry benchmarks — helping barbershop owners, buyers, and investors make smarter business decisions with real-world data.",
  dataVintage: "2025–2026",
  sampleSize: "150+ barbershops",
} as const;

export const searchQuickLinks = [
  { label: "Hair Salon", href: "/industries/beauty/hair-salon/" },
  { label: "Nail Salon", href: "/industries/beauty/nail-salon/" },
  { label: "Day Spa", href: "/industries/beauty/day-spa/" },
  { label: "Men's Salon", href: "/industries/mens-salon/", comingSoon: true },
] as const;

export const hubKpis = [
  {
    id: "revenue",
    label: "Average Annual Revenue",
    value: "$280K",
    sublabel: "median independent shop",
    href: "#benchmarks",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Net Profit Margin",
    value: "16%",
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
    value: "$200K",
    sublabel: "typical shop value",
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
    id: "rev-per-barber",
    label: "Revenue per Barber",
    value: "$75K",
    sublabel: "annual service revenue",
    href: "#benchmarks",
    accent: "metric-revenue",
  },
  {
    id: "ticket",
    label: "Average Ticket",
    value: "$35",
    sublabel: "typical cut & groom",
    href: "#benchmarks",
    accent: "metric-margin",
  },
  {
    id: "utilization",
    label: "Chair Utilization",
    value: "78%",
    sublabel: "booked chair hours",
    href: "#kpis",
    accent: "metric-salary",
  },
] as const;

export const businessScorecard = {
  industryName: "Barbershop",
  items: [
    { label: "Profitability", rating: 4 },
    { label: "Recurring Revenue", rating: 4 },
    { label: "Retail Revenue", rating: 3 },
    { label: "Startup Difficulty", rating: 2, higherIsWorse: true },
    { label: "Staffing Dependence", rating: 4, higherIsWorse: true },
    { label: "Exit Potential", rating: 3 },
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
    title: "Industry overview",
    body: "The U.S. barbershop industry is a $5B+ grooming segment built on high-frequency haircuts, beard services, and loyal repeat clients — one of the most accessible beauty businesses to open and operate.",
  },
  {
    title: "Traditional vs modern barbershops",
    body: "Traditional walk-in shops compete on speed and neighborhood relationships. Modern barbershops add appointments, premium grooming, hot-towel shaves, and membership plans that lift average ticket and retention.",
  },
  {
    title: "Independent vs franchise",
    body: "Independents dominate by count and offer full pricing freedom. Franchise concepts (e.g., Sport Clips, Floyd's) win on brand recognition, marketing systems, and standardized training in select markets.",
  },
  {
    title: "Customer demographics",
    body: "Core clients are men aged 18–55 seeking regular grooming every 2–4 weeks. Kids cuts, senior services, and women's short cuts expand the addressable base in many shops.",
  },
  {
    title: "Market growth",
    body: "Men's grooming is growing at roughly 4–6% annually as self-care normalizes. Beard care, fade culture, and premium barbershop experiences continue to expand the category.",
  },
  {
    title: "Grooming industry trends",
    body: "Online booking, membership plans, grooming product retail, and social-media-driven discovery are reshaping barbershop economics in 2026. Shops that combine walk-in convenience with appointment loyalty win on utilization.",
  },
  {
    title: "Business models",
    body: "Most barbershops run commission, booth-rent, or hybrid models. Walk-in volume, appointment scheduling, and monthly membership plans each create different revenue and margin profiles.",
  },
] as const;

export const benchmarkRows = [
  { metric: "Annual Revenue", value: "$180K – $400K" },
  { metric: "Gross Margin", value: "62 – 72%" },
  { metric: "Net Profit Margin", value: "12 – 20%" },
  { metric: "EBITDA Margin", value: "14 – 22%" },
  { metric: "Average Ticket", value: "$25 – $45" },
  { metric: "Revenue per Barber", value: "$55K – $95K" },
  { metric: "Revenue per Chair", value: "$40K – $80K" },
  { metric: "Payroll %", value: "40 – 48%" },
  { metric: "Client Retention", value: "65 – 80%" },
  { metric: "Chair Utilization", value: "70 – 85%" },
] as const;

export const financialMetricCards = [
  {
    label: "Revenue",
    value: "$280K median",
    description: "Estimate annual barbershop revenue from barbers, chair count, and average ticket.",
    href: "/calculators/barbershop-revenue/",
  },
  {
    label: "Profit Margin",
    value: "16% net",
    description: "Model net margin from service revenue, barber payroll, supplies, and overhead.",
    href: "/calculators/barbershop-profit-margin/",
  },
  {
    label: "Startup Cost",
    value: "$110K median",
    description: "Add up buildout, chairs, equipment, licensing, and working capital.",
    href: "/calculators/barbershop-startup-cost/",
  },
  {
    label: "Business Valuation",
    value: "2.0× SDE",
    description: "Estimate barbershop value from SDE and grooming industry sale multiples.",
    href: "/calculators/barbershop-valuation/",
  },
  {
    label: "Owner Salary",
    value: "$65K median",
    description: "See what barbershop owner-operators earn across shop models and sizes.",
    href: "/calculators/barbershop-profit-margin/",
  },
  {
    label: "Break-even",
    value: "12 – 24 months",
    description: "Find the monthly revenue and daily cuts needed to cover fixed costs.",
    href: "/calculators/barbershop-break-even/",
  },
  {
    label: "Cash Flow",
    value: "Positive at 70%+ utilization",
    description: "Model monthly cash flow from walk-ins, appointments, and membership revenue.",
    href: "/calculators/barbershop-membership-revenue/",
  },
  {
    label: "Client LTV",
    value: "$2.75K median",
    description: "Estimate total revenue per client over their relationship with your shop.",
    href: "/calculators/barbershop-client-lifetime-value/",
  },
] as const;

export const hubCalculators = [
  {
    label: "Barbershop Revenue Calculator",
    description: "Project annual revenue from barbers, cuts per day, and average ticket.",
    href: "/calculators/barbershop-revenue/",
  },
  {
    label: "Barbershop Profit Margin Calculator",
    description: "Model net margin from service revenue, payroll, supplies, and overhead.",
    href: "/calculators/barbershop-profit-margin/",
  },
  {
    label: "Barbershop Startup Cost Calculator",
    description: "Estimate total launch investment — buildout, chairs, equipment, and working capital.",
    href: "/calculators/barbershop-startup-cost/",
  },
  {
    label: "Barbershop Break-even Calculator",
    description: "Find the daily cuts and revenue needed to cover fixed costs.",
    href: "/calculators/barbershop-break-even/",
  },
  {
    label: "Barbershop Valuation Calculator",
    description: "Estimate shop value using SDE and barbershop industry multiples.",
    href: "/calculators/barbershop-valuation/",
  },
  {
    label: "Revenue per Barber Calculator",
    description: "Benchmark each barber's annual service revenue against industry ranges.",
    href: "/calculators/barbershop-revenue-per-barber/",
  },
  {
    label: "Revenue per Chair Calculator",
    description: "Measure revenue productivity per chair annually.",
    href: "/calculators/barbershop-revenue-per-chair/",
  },
  {
    label: "Chair Utilization Calculator",
    description: "Measure booked vs available chair hours to spot idle capacity.",
    href: "/calculators/barbershop-chair-utilization/",
  },
  {
    label: "Payroll Percentage Calculator",
    description: "Track barber wages and commissions as a percentage of revenue.",
    href: "/calculators/barbershop-payroll-percentage/",
  },
  {
    label: "Average Ticket Calculator",
    description: "Model average service price from menu mix and grooming upsells.",
    href: "/calculators/barbershop-average-ticket/",
  },
  {
    label: "Customer Lifetime Value Calculator",
    description: "Estimate total revenue per client over their relationship with your shop.",
    href: "/calculators/barbershop-client-lifetime-value/",
  },
  {
    label: "Membership Revenue Calculator",
    description: "Model recurring revenue from membership plans and package enrollments.",
    href: "/calculators/barbershop-membership-revenue/",
  },
] as const;

export const revenueDrivers = [
  { title: "Haircuts", description: "Core service line — fades, tapers, and classic cuts drive the majority of barbershop revenue." },
  { title: "Beard Grooming", description: "Beard trims and line-ups add high-margin upsells to every haircut visit." },
  { title: "Shaves", description: "Hot-towel and straight-razor shaves carry premium tickets with strong perceived value." },
  { title: "Membership Plans", description: "Monthly unlimited-cut plans smooth cash flow and lock in 2–4 week visit cadence." },
  { title: "Retail Product Sales", description: "Pomade, beard oil, and grooming products add 3–6% of revenue at strong margins." },
  { title: "Walk-in Customers", description: "High-visibility locations capture impulse visits and fill schedule gaps between appointments." },
  { title: "Appointments", description: "Online booking reduces no-shows and maximizes chair utilization during peak hours." },
  { title: "Upselling", description: "Add-on services (beard, shampoo, hot towel) raise ticket without new client acquisition cost." },
  { title: "Repeat Customers", description: "Clients returning every 2–4 weeks drive predictable, low-cost revenue." },
  { title: "Premium Services", description: "VIP grooming packages and executive cuts lift average ticket for willing-to-pay clients." },
  { title: "Kids Haircuts", description: "Family-friendly shops add volume during off-peak hours with fast-turn services." },
  { title: "Gift Cards", description: "Holiday and occasion gift sales drive new client acquisition at low marketing cost." },
] as const;

export const expenseMix = [
  { label: "Payroll", share: 44, description: "Barber wages and commissions — largest barbershop cost." },
  { label: "Rent", share: 13, description: "Lease cost for retail-visible shop space." },
  { label: "Barber Supplies", share: 5, description: "Clippers, blades, sanitizers, and consumables." },
  { label: "Retail Inventory", share: 3, description: "Pomade, beard oil, and grooming product stock." },
  { label: "Marketing", share: 5, description: "Local ads, social media, and referral programs." },
  { label: "Software", share: 3, description: "POS, scheduling, and payment processing." },
  { label: "Utilities", share: 4, description: "Power, water, and HVAC for a high-traffic space." },
  { label: "Insurance", share: 3, description: "Liability and property coverage." },
  { label: "Cleaning", share: 2, description: "Sanitation supplies and professional cleaning." },
  { label: "Equipment", share: 4, description: "Chair maintenance, clippers, and tool replacement." },
  { label: "Credit Card Fees", share: 2, description: "Payment processing on card transactions." },
  { label: "Taxes", share: 12, description: "Payroll taxes, sales tax, and business taxes." },
] as const;

export const kpisToTrack = [
  { metric: "Revenue per Barber", value: "$55K – $95K" },
  { metric: "Revenue per Chair", value: "$40K – $80K" },
  { metric: "Chair Utilization", value: "70 – 85%" },
  { metric: "Average Ticket", value: "$25 – $45" },
  { metric: "Customer Retention", value: "65 – 80%" },
  { metric: "Rebooking Rate", value: "55 – 72%" },
  { metric: "Membership Retention", value: "60 – 78%" },
  { metric: "Retail Sales %", value: "3 – 6%" },
  { metric: "Payroll %", value: "40 – 48%" },
  { metric: "Daily Appointments", value: "25 – 45 per barber" },
  { metric: "Customer Lifetime Value", value: "$1.5K – $4K" },
  { metric: "Cancellation Rate", value: "< 8%" },
] as const;

export const treatmentCards = [
  { label: "Haircuts", description: "Highest-volume service — fades, tapers, and classic cuts.", href: "#revenue" },
  { label: "Beard Trims", description: "High-margin add-on to every haircut visit.", href: "#revenue" },
  { label: "Hot Towel Shaves", description: "Premium grooming service with strong ticket uplift.", href: "#revenue" },
  { label: "Hair Coloring", description: "Gray blending and color services for expanding menus.", href: "#benchmarks" },
  { label: "Kids Haircuts", description: "Fast-turn family services during off-peak hours.", href: "#benchmarks" },
  { label: "Senior Haircuts", description: "Discounted or specialized cuts for loyal local clients.", href: "#benchmarks" },
  { label: "Premium Grooming", description: "Executive packages combining cut, beard, and hot towel.", href: "#revenue" },
  { label: "Membership Packages", description: "Monthly unlimited plans — the recurring revenue stabilizer.", href: "#revenue" },
  { label: "Retail Products", description: "Pomade, beard oil, and take-home grooming products.", href: "#benchmarks" },
  { label: "Gift Cards", description: "Occasion-driven new client acquisition channel.", href: "#revenue" },
] as const;

export const ownerSalaryCards = [
  { model: "Solo Owner-Barber", earnings: "$40K – $65K" },
  { model: "Owner-Operator (2–4 Chairs)", earnings: "$55K – $90K" },
  { model: "Established Multi-Chair Shop", earnings: "$90K – $140K" },
  { model: "Multi-Location Operator", earnings: "$150K+" },
] as const;

export const valuationCards = [
  { metric: "SDE Multiple", range: "1.5× – 2.5×" },
  { metric: "EBITDA Multiple", range: "2.0× – 3.5×" },
  { metric: "Revenue Multiple", range: "0.3× – 0.6×" },
  { metric: "Typical Shop Value", range: "$120K – $350K" },
] as const;

export const startupCostBreakdown = [
  { item: "Buildout & Plumbing", range: "$25K – $60K", percent: "32%" },
  { item: "Barber Chairs & Stations", range: "$15K – $35K", percent: "22%" },
  { item: "Equipment & Tools", range: "$8K – $18K", percent: "10%" },
  { item: "Furniture & Fixtures", range: "$5K – $12K", percent: "7%" },
  { item: "Initial Inventory", range: "$3K – $8K", percent: "5%" },
  { item: "Licensing & Permits", range: "$2K – $6K", percent: "4%" },
  { item: "Working Capital", range: "$10K – $25K", percent: "14%" },
  { item: "Branding & Marketing", range: "$3K – $10K", percent: "6%" },
] as const;

export const startupCostTotal = { low: "$60K", median: "$110K", high: "$180K" } as const;

export const industryReports = [
  {
    label: "US Barbershop Industry Report 2026",
    description: "Market size, grooming trends, competition, and the 2026–2034 outlook for barbershops.",
    comingSoon: true,
  },
  {
    label: "Highest Margin Grooming Businesses 2026",
    description: "Ranking grooming and personal-care segments by net profit margin.",
    href: "/industries/beauty/hair-salon/reports/highest-margin-beauty-businesses-2026/",
  },
  {
    label: "Fastest Growing Grooming Businesses 2026",
    description: "Where barbershop, men's grooming, and salon demand is expanding fastest.",
    href: "/industries/beauty/hair-salon/reports/fastest-growing-beauty-businesses-2026/",
  },
  {
    label: "Barbershop Pricing Benchmark Report",
    description: "Cut, fade, and grooming service pricing benchmarks for 2026.",
    comingSoon: true,
  },
  {
    label: "Top Performing Barbershop KPIs",
    description: "Benchmark KPIs that separate high-performing barbershops from average shops.",
    comingSoon: true,
  },
] as const;

export const hubComparisons = [
  { label: "Barbershop vs Hair Salon", href: "/comparisons/hair-salon-vs-barbershop/" },
  { label: "Barbershop vs Men's Salon", comingSoon: true },
  { label: "Barbershop vs Franchise Barbershop", comingSoon: true },
  { label: "Barbershop vs Nail Salon", href: "/comparisons/nail-salon-vs-barbershop/" },
  { label: "Barbershop vs Day Spa", comingSoon: true },
  { label: "Barbershop vs Mobile Barber Business", comingSoon: true },
] as const;

export const relatedBeautyBusinesses = [
  { label: "Hair Salon", href: "/industries/beauty/hair-salon/" },
  { label: "Men's Salon", href: "/industries/mens-salon/", comingSoon: true },
  { label: "Nail Salon", href: "/industries/beauty/nail-salon/" },
  { label: "Day Spa", href: "/industries/beauty/day-spa/" },
  { label: "Medical Spa", href: "/industries/beauty/medical-spa/" },
  { label: "Lash Studio", href: "/industries/lash-studio/", comingSoon: true },
  { label: "Massage Spa", href: "/industries/massage-spa/", comingSoon: true },
  { label: "Waxing Salon", href: "/industries/waxing-salon/", comingSoon: true },
] as const;

const industryFaqs = [
  {
    question: "How much revenue does a barbershop generate?",
    answer:
      "A typical independent barbershop generates $180K–$400K in annual revenue, with a median near $280K. High-volume shops with 4+ barbers, strong walk-in traffic, and membership plans can exceed $500K depending on chair count, average ticket, and location.",
  },
  {
    question: "Is a barbershop a profitable business?",
    answer:
      "Yes — barbershops are among the more profitable beauty businesses when payroll stays near 40–48% of revenue and chair utilization reaches 70–85%. The average barbershop profit margin runs 12–20% net, with top operators reaching 18–24% through membership revenue and high utilization.",
  },
  {
    question: "Is owning a barbershop profitable?",
    answer:
      "Owning a barbershop is profitable when you control labor costs, maintain 70%+ chair utilization, and build a repeat client base on a 2–4 week grooming cadence. Median net profit is ~$45K on $280K revenue; owner-operators who also cut hair earn $55K–$90K total.",
  },
  {
    question: "What is the average barbershop owner salary?",
    answer:
      "The average barbershop owner salary runs $45K–$90K for owner-operators, with a median near $65K. Solo owner-barbers earn $40K–$65K; established multi-chair shop owners reach $90K–$140K depending on barber count and commission structure.",
  },
  {
    question: "How much does it cost to open a barbershop?",
    answer:
      "Opening a barbershop typically costs $60K–$180K, with a median near $110K. Buildout, barber chairs, equipment, licensing, branding, and working capital are the biggest components. Leasing an existing salon space can reduce buildout cost significantly.",
  },
  {
    question: "How much is a barbershop worth?",
    answer:
      "Most barbershops sell for 1.5–2.5× SDE (seller's discretionary earnings), or roughly 0.3–0.6× annual revenue. A typical barbershop is worth $120K–$350K, with value driven by membership revenue, barber retention, and clean financials.",
  },
  {
    question: "What is the average barbershop profit margin?",
    answer:
      "The average barbershop profit margin runs 12–20% net, with a median near 16%. Gross margins on services run 62–72%. Shops below 12% net usually have payroll drift, low utilization, or underpriced service menus.",
  },
  {
    question: "How many barbers should a shop employ?",
    answer:
      "An average barbershop employs 2–5 barbers plus front-desk support. Revenue per barber typically runs $55K–$95K annually. Most successful single-location shops operate 3–6 chairs before considering expansion.",
  },
  {
    question: "How much revenue does each barber generate?",
    answer:
      "Each barber typically generates $55K–$95K in annual service revenue, with top performers exceeding $100K. Productivity depends on chair utilization, average ticket, walk-in volume, and appointment density.",
  },
  {
    question: "What is a good chair utilization rate for a barbershop?",
    answer:
      "A healthy barbershop chair utilization rate is 70–85%. Below 70% usually means idle capacity and lost revenue; consistently above 85% may signal you need more chairs or barbers to meet demand.",
  },
  {
    question: "How many customers should each barber serve daily?",
    answer:
      "A productive barber serves 12–18 clients per day on average, or 25–45 appointments per week depending on service mix. Quick cuts turn faster; premium grooming packages reduce daily volume but lift ticket size.",
  },
  {
    question: "What are the biggest operating expenses for a barbershop?",
    answer:
      "Barber payroll (40–48%), rent (10–15%), supplies (4–7%), marketing (4–6%), and insurance/utilities are the largest barbershop expenses. Controlling payroll and maximizing chair utilization are the highest-impact margin levers.",
  },
  {
    question: "How long does it take a barbershop to break even?",
    answer:
      "Most new barbershops break even within 12–24 months once chair utilization reaches 70%+ and a regular client base builds. Strong local marketing and walk-in visibility accelerate the ramp.",
  },
  {
    question: "What is the average EBITDA for a barbershop?",
    answer:
      "The average barbershop EBITDA margin runs 14–22%, with a median near 18%. EBITDA is the primary valuation metric at sale, with multiples of 2.0–3.5× for established shops above $300K in revenue.",
  },
] as const;

export const hubFaqs = mergeProfitabilityFaqs(profitabilitySeo.faqs, industryFaqs);

export const businessQuestionsSectionTitle = "Business Questions";
