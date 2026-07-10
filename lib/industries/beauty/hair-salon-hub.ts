import { mergeProfitabilityFaqs } from "@/lib/industries/profitability-seo";
import { hairSalonProfitabilitySeo } from "@/lib/industries/profitability-seo-data";

export const profitabilitySeo = hairSalonProfitabilitySeo;

export const hubMeta = {
  slug: "hair-salon",
  parentSlug: "beauty",
  parentLabel: "Beauty & Personal Care",
  title: "Hair Salon Industry Benchmarks & Business Metrics",
  subtitle:
    "Revenue, profit margins, startup costs, valuation, owner salary, and operating benchmarks — helping salon owners, buyers, and investors make smarter business decisions with real-world data.",
  dataVintage: "2025–2026",
  sampleSize: "210+ hair salons",
} as const;

export const searchQuickLinks = [
  { label: "Barbershop", href: "/industries/barbershop/", comingSoon: true },
  { label: "Nail Salon", href: "/industries/nail-salon/", comingSoon: true },
  { label: "Day Spa", href: "/industries/day-spa/", comingSoon: true },
  { label: "Medical Spa", href: "/industries/medical-spa/", comingSoon: true },
] as const;

export const hubKpis = [
  {
    id: "revenue",
    label: "Average Annual Revenue",
    value: "$320K",
    sublabel: "median independent salon",
    href: "#benchmarks",
    accent: "metric-revenue",
  },
  {
    id: "margin",
    label: "Profit Margin",
    value: "11%",
    sublabel: "median net margin",
    href: "#profitability",
    accent: "metric-margin",
  },
  {
    id: "startup",
    label: "Startup Cost",
    value: "$120K",
    sublabel: "median launch investment",
    href: "#startup-costs",
    accent: "metric-valuation",
  },
  {
    id: "valuation",
    label: "Business Valuation",
    value: "2.3× SDE",
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
    id: "rev-per-stylist",
    label: "Revenue per Stylist",
    value: "$85K",
    sublabel: "annual service revenue",
    href: "#benchmarks",
    accent: "metric-revenue",
  },
] as const;

export const businessScorecard = {
  industryName: "Hair Salon",
  items: [
    { label: "Profitability", rating: 3 },
    { label: "Recurring Revenue", rating: 4 },
    { label: "Retail Revenue", rating: 3 },
    { label: "Startup Difficulty", rating: 3, higherIsWorse: true },
    { label: "Staffing Dependence", rating: 4, higherIsWorse: true },
    { label: "Exit Potential", rating: 3 },
  ],
} as const;

export const hubSectionNav = [
  { id: "overview", label: "Overview" },
  { id: "benchmarks", label: "Benchmarks" },
  { id: "revenue", label: "Revenue" },
  { id: "profitability", label: "Profitability" },
  { id: "expenses", label: "Expenses" },
  { id: "kpis", label: "KPIs" },
  { id: "startup-costs", label: "Startup Costs" },
  { id: "owner-salary", label: "Owner Salary" },
  { id: "valuation", label: "Valuation" },
  { id: "calculators", label: "Calculators" },
  { id: "reports", label: "Reports" },
  { id: "comparisons", label: "Comparisons" },
  { id: "faqs", label: "FAQ" },
] as const;

export const overviewPoints = [
  {
    title: "Industry size",
    body: "The U.S. hair salon industry generates roughly $55–60B in annual revenue across 850,000+ establishments, making it one of the largest and most fragmented segments in beauty and personal care.",
  },
  {
    title: "Market trends",
    body: "Online booking, memberships, and retail add-ons are lifting average tickets, while stylist wage pressure and booth-rental models continue to reshape salon economics.",
  },
  {
    title: "Typical business model",
    body: "Most salons run a commission or booth-rental model. Revenue comes from services (cut, color, styling) plus retail product sales, with a small but growing membership base.",
  },
  {
    title: "Independent vs franchise",
    body: "Independents dominate by count and offer premium service pricing; franchise salons (e.g., value cut and blow-dry concepts) win on volume, systems, and marketing scale.",
  },
  {
    title: "Service mix",
    body: "Color and chemical services drive the highest tickets and margins; haircuts anchor visit frequency; retail attachment and add-ons lift per-visit revenue.",
  },
  {
    title: "Growth outlook",
    body: "Steady low-single-digit growth, with the strongest gains for salons that convert new clients into rebookings, memberships, and consistent retail buyers.",
  },
] as const;

export const benchmarkRows = [
  { metric: "Revenue", value: "$250K – $500K" },
  { metric: "Gross Margin", value: "55 – 65%" },
  { metric: "Net Margin", value: "8 – 15%" },
  { metric: "EBITDA", value: "10 – 18%" },
  { metric: "Average Ticket", value: "$45 – $85" },
  { metric: "Revenue per Stylist", value: "$60K – $120K" },
  { metric: "Chair Utilization", value: "65 – 80%" },
  { metric: "Client Retention", value: "60 – 75%" },
  { metric: "Retail Product Sales %", value: "8 – 12%" },
  { metric: "Payroll %", value: "45 – 50%" },
] as const;

export const financialMetricCards = [
  {
    label: "Revenue",
    value: "$320K median",
    description: "Estimate annual salon revenue from stylists, tickets, and visit volume.",
    href: "/calculators/hair-salon-revenue/",
  },
  {
    label: "Profit Margin",
    value: "11% net",
    description: "Model net margin from service revenue, payroll, product, and overhead.",
    href: "/calculators/hair-salon-profit-margin/",
  },
  {
    label: "Startup Cost",
    value: "$120K median",
    description: "Add up buildout, stations, equipment, inventory, and working capital.",
    href: "/calculators/hair-salon-startup-cost/",
  },
  {
    label: "Owner Salary",
    value: "$65K median",
    description: "See what owner-operators earn across salon models and sizes.",
    href: "/calculators/hair-salon-profit-margin/",
  },
  {
    label: "Business Valuation",
    value: "2.3× SDE",
    description: "Estimate salon value from SDE and business-for-sale multiples.",
    href: "/calculators/hair-salon-valuation/",
  },
  {
    label: "Break-even Time",
    value: "12 – 24 months",
    description: "Find the revenue and chair volume needed to cover fixed costs.",
    href: "/calculators/hair-salon-break-even/",
  },
] as const;

export const hubCalculators = [
  {
    label: "Hair Salon Revenue Calculator",
    description: "Project annual revenue from stylists, average ticket, and appointments per day.",
    href: "/calculators/hair-salon-revenue/",
  },
  {
    label: "Hair Salon Profit Margin Calculator",
    description: "Model net margin from service revenue, payroll, product COGS, and overhead.",
    href: "/calculators/hair-salon-profit-margin/",
  },
  {
    label: "Hair Salon Startup Cost Calculator",
    description: "Estimate total launch investment — buildout, stations, equipment, and inventory.",
    href: "/calculators/hair-salon-startup-cost/",
  },
  {
    label: "Hair Salon Break-even Calculator",
    description: "Find the daily bookings and revenue needed to cover fixed costs.",
    href: "/calculators/hair-salon-break-even/",
  },
  {
    label: "Hair Salon Chair Utilization Calculator",
    description: "Measure booked vs available chair hours to spot idle capacity.",
    href: "/calculators/hair-salon-chair-utilization/",
  },
  {
    label: "Hair Salon Revenue per Stylist Calculator",
    description: "Benchmark each stylist's service revenue against industry ranges.",
    href: "/calculators/hair-salon-revenue-per-stylist/",
  },
  {
    label: "Hair Salon Payroll Percentage Calculator",
    description: "Track payroll and commissions as a percentage of revenue.",
    href: "/calculators/hair-salon-payroll-percentage/",
  },
  {
    label: "Hair Salon Valuation Calculator",
    description: "Estimate salon value using SDE and industry sale multiples.",
    href: "/calculators/hair-salon-valuation/",
  },
] as const;

export const revenueDrivers = [
  { title: "Average Ticket", description: "Higher color and add-on mix lifts per-visit revenue and margin." },
  { title: "Number of Stylists", description: "More productive chairs scale service capacity and total revenue." },
  { title: "Appointments per Day", description: "Booking density directly drives daily and monthly revenue." },
  { title: "Retail Product Sales", description: "Take-home product adds 8–12% of revenue at strong margins." },
  { title: "Chair Occupancy", description: "Utilization of 65–80% keeps fixed costs covered per station." },
  { title: "Repeat Customers", description: "Retention and rebooking drive predictable, low-cost revenue." },
  { title: "Membership Revenue", description: "Recurring plans smooth cash flow and lock in visit frequency." },
  { title: "Upselling", description: "Treatments, styling, and add-ons raise ticket without new clients." },
] as const;

export const expenseMix = [
  { label: "Payroll & Commissions", share: 45, description: "Stylist wages and commissions — the largest salon cost." },
  { label: "Rent", share: 14, description: "Lease cost for retail-visible salon space." },
  { label: "Products & Color", share: 12, description: "Back-bar color, chemicals, and consumables." },
  { label: "Taxes & Other", share: 7, description: "Payroll taxes, fees, and miscellaneous overhead." },
  { label: "Marketing", share: 6, description: "Local ads, promotions, and referral programs." },
  { label: "Equipment", share: 4, description: "Station tools, dryers, and maintenance." },
  { label: "Utilities", share: 4, description: "Power, water, and heating for a high-usage space." },
  { label: "Insurance", share: 3, description: "Liability and property coverage." },
  { label: "Software & Booking", share: 3, description: "POS, scheduling, and payment processing." },
  { label: "Laundry", share: 2, description: "Towel and cape laundering or linen service." },
] as const;

export const kpisToTrack = [
  { metric: "Client Retention", value: "60 – 75%" },
  { metric: "Rebooking Rate", value: "45 – 60%" },
  { metric: "Revenue per Chair", value: "$45K – $90K" },
  { metric: "Revenue per Stylist", value: "$60K – $120K" },
  { metric: "Retail Attachment Rate", value: "8 – 12%" },
  { metric: "Chair Utilization", value: "65 – 80%" },
  { metric: "Customer Lifetime Value", value: "$1.2K – $3.5K" },
  { metric: "Average Ticket", value: "$45 – $85" },
  { metric: "Labor Cost %", value: "45 – 50%" },
  { metric: "Cancellation Rate", value: "< 8%" },
] as const;

export const ownerSalaryCards = [
  { model: "Booth-Rent / Solo Owner", earnings: "$40K – $60K" },
  { model: "Commission Salon Owner", earnings: "$55K – $85K" },
  { model: "Established Multi-Stylist", earnings: "$90K – $140K" },
  { model: "Small Salon Chain", earnings: "$150K+" },
] as const;

export const valuationCards = [
  { metric: "SDE Multiple", range: "1.8 – 3.0×" },
  { metric: "Revenue Multiple", range: "0.4 – 0.7×" },
  { metric: "Typical Salon Value", range: "$180K – $420K" },
  { metric: "Goodwill / Book", range: "0.3 – 0.6×" },
] as const;

export const startupCostBreakdown = [
  { item: "Buildout & Renovation", range: "$30K – $80K", percent: "35%" },
  { item: "Stations & Equipment", range: "$20K – $45K", percent: "22%" },
  { item: "Furniture & Fixtures", range: "$8K – $20K", percent: "12%" },
  { item: "Initial Inventory", range: "$5K – $15K", percent: "8%" },
  { item: "Working Capital", range: "$10K – $25K", percent: "13%" },
  { item: "Branding & Marketing", range: "$3K – $10K", percent: "6%" },
  { item: "Licensing & Permits", range: "$2K – $6K", percent: "4%" },
] as const;

export const startupCostTotal = { low: "$80K", median: "$120K", high: "$250K" } as const;

export const industryReports = [
  {
    label: "U.S. Hair Salon Industry Report 2026",
    description: "Market size, segmentation, trends, competition, and the 2026–2034 outlook.",
    href: "/industries/beauty/hair-salon/reports/us-hair-salon-industry-report-2026/",
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
    label: "Salon Pricing Trends 2026",
    description: "How service pricing and average tickets are shifting by market.",
    href: "/industries/beauty/hair-salon/reports/salon-pricing-trends-2026/",
  },
  {
    label: "Best Recurring Revenue Beauty Businesses 2026",
    description: "Which beauty models build the most predictable recurring revenue.",
    href: "/industries/beauty/hair-salon/reports/best-recurring-revenue-beauty-businesses-2026/",
  },
] as const;

export const hubComparisons = [
  { label: "Hair Salon vs Barbershop", href: "/comparisons/hair-salon-vs-barbershop/" },
  { label: "Hair Salon vs Nail Salon", href: "/comparisons/hair-salon-vs-nail-salon/" },
  { label: "Hair Salon vs Day Spa", href: "/comparisons/hair-salon-vs-day-spa/" },
  { label: "Hair Salon vs Medical Spa", href: "/comparisons/hair-salon-vs-medical-spa/" },
  { label: "Hair Salon vs Franchise Salon", href: "/comparisons/hair-salon-vs-franchise-salon/" },
  { label: "Hair Salon vs Mobile Salon", href: "/comparisons/hair-salon-vs-mobile-salon/" },
] as const;

export const relatedBeautyBusinesses = [
  { label: "Nail Salon", href: "/industries/nail-salon/", comingSoon: true },
  { label: "Day Spa", href: "/industries/day-spa/", comingSoon: true },
  { label: "Medical Spa", href: "/industries/medical-spa/", comingSoon: true },
  { label: "Lash Studio", href: "/industries/lash-studio/", comingSoon: true },
  { label: "Waxing Salon", href: "/industries/waxing-salon/", comingSoon: true },
  { label: "Massage Spa", href: "/industries/massage-spa/", comingSoon: true },
  { label: "Barbershop", href: "/industries/barbershop/", comingSoon: true },
] as const;

const industryFaqs = [
  {
    question: "How much revenue does a hair salon generate?",
    answer:
      "A typical independent hair salon generates $250K–$500K in annual revenue, with a median near $320K. Larger multi-stylist hair salons and busy franchise locations can exceed $700K depending on chair count, average ticket, and utilization.",
  },
  {
    question: "What is the average profit margin?",
    answer:
      "The average hair salon profit margin runs 8–15% net, with a median around 11%. Well-run hair salons that keep payroll near 45–50% of revenue and add strong retail attachment can push net margins to 16–22%.",
  },
  {
    question: "How much does it cost to open a salon?",
    answer:
      "Opening a hair salon typically costs $80K–$250K, with a median near $120K. Buildout, stations, equipment, initial inventory, licensing, and working capital are the biggest line items for a new hair salon.",
  },
  {
    question: "How much does a salon owner make?",
    answer:
      "A hair salon owner-operator typically earns $40K–$85K, with established multi-stylist salons paying owners $90K–$140K and small chains $150K+. Owner pay depends on whether the owner also works a chair and on the salon's commission vs booth-rent model.",
  },
  {
    question: "What is a good EBITDA margin?",
    answer:
      "A healthy hair salon EBITDA margin is roughly 10–18%. Salons below that range usually carry high rent or payroll, while top operators exceed 18% through disciplined labor cost control and retail sales.",
  },
  {
    question: "How much is a salon worth?",
    answer:
      "Most hair salons sell for 1.8–3.0× SDE (seller's discretionary earnings), or about 0.4–0.7× annual revenue. A typical hair salon is worth $180K–$420K, with value driven by profitability, client retention, and transferable staff.",
  },
  {
    question: "How many stylists does an average salon employ?",
    answer:
      "An average hair salon employs 4–8 stylists plus front-desk and assistant staff. Revenue per stylist typically runs $60K–$120K in annual service revenue, so stylist productivity is one of the strongest drivers of salon revenue.",
  },
  {
    question: "How long does it take to break even?",
    answer:
      "Most new hair salons break even within 12–24 months once chair utilization reaches 65–80% and rebooking builds a repeat client base. Salons that ramp bookings and retention quickly reach break-even sooner.",
  },
] as const;

export const hubFaqs = mergeProfitabilityFaqs(profitabilitySeo.faqs, industryFaqs);
