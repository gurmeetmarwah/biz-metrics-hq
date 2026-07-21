import type {
  FranchiseGuideBenchmarkRow,
  FranchiseGuideBestCard,
  FranchiseGuideBrand,
  FranchiseGuideCalculator,
  FranchiseGuideCta,
  FranchiseGuideFaq,
  FranchiseGuideKpi,
  FranchiseGuideLinkCard,
  FranchiseGuideStartupItem,
  FranchiseGuideVsRow,
} from "@/lib/franchise/beauty/beauty-franchise-guide-types";
import { hvacFranchiseRankingCards } from "@/lib/franchise/home-services/hvac-rankings";

function brandHref(slug: string) {
  return `/franchise/home-services/hvac/brands/${slug}/`;
}

export const hvacFranchiseBrandSlugs = [
  "one-hour-heating-air",
  "aire-serv",
  "bryant-dealer",
  "lennox-premier-dealer",
] as const;

export const hvacFranchiseBrandNames: Record<(typeof hvacFranchiseBrandSlugs)[number], string> = {
  "one-hour-heating-air": "One Hour Heating & Air Conditioning",
  "aire-serv": "Aire Serv",
  "bryant-dealer": "Bryant Dealer Program",
  "lennox-premier-dealer": "Lennox Premier Dealer",
};

export const hvacFranchisePageMeta = {
  slug: "hvac",
  categoryId: "home-services",
  categoryLabel: "Home Services",
  shortName: "HVAC",
  title: "HVAC Franchise Guide: Compare Costs, ROI, Profit Margins & Top Franchise Opportunities",
  subtitle:
    "Compare startup costs, franchise fees, royalties, owner earnings, investment requirements, and financial performance across leading HVAC franchise systems.",
  dataVintage: "2025–2026",
  sampleSize: "leading U.S. HVAC franchise & dealer systems",
  kpiDashboardTitle: "HVAC Franchise KPIs",
  kpiDashboardSubtitle: "Directional ranges across national HVAC franchise and premium dealer programs.",
} as const;

export const heroCtas: readonly FranchiseGuideCta[] = [
  { label: "Compare HVAC Franchises", href: "#compare-brands", primary: true },
  { label: "Franchise ROI Calculator", href: "#calculators", primary: false },
];

export const executiveKpis: readonly FranchiseGuideKpi[] = [
  {
    id: "investment",
    label: "Average Initial Investment",
    value: "$275K",
    sublabel: "typical total launch range $125K–$500K+",
    href: "#startup-costs",
    accent: "metric-valuation",
  },
  {
    id: "franchise-fee",
    label: "Average Franchise Fee",
    value: "$45K",
    sublabel: "typical range $25K–$60K",
    href: "#compare-brands",
    accent: "metric-valuation",
  },
  {
    id: "revenue",
    label: "Average Annual Revenue",
    value: "$2.4M",
    sublabel: "mature unit mid-point; range $1.2M–$5M+",
    href: "#economics",
    accent: "metric-revenue",
  },
  {
    id: "ebitda",
    label: "Average EBITDA Margin",
    value: "14%",
    sublabel: "typical 10–20% before owner add-backs",
    href: "#economics",
    accent: "metric-margin",
  },
  {
    id: "royalty",
    label: "Average Royalty Fee",
    value: "5–7%",
    sublabel: "plus marketing fund in many systems",
    href: "#economics",
    accent: "metric-margin",
  },
  {
    id: "payback",
    label: "Average Payback Period",
    value: "3–5 yrs",
    sublabel: "cash-on-cash to recover total investment",
    href: "#economics",
    accent: "metric-salary",
  },
  {
    id: "owner-income",
    label: "Estimated Owner Income",
    value: "$145K",
    sublabel: "single-unit mid-point; multi-unit often higher",
    href: "#economics",
    accent: "metric-salary",
  },
  {
    id: "systems",
    label: "Major Franchise Systems",
    value: "4+",
    sublabel: "featured national brands on this guide",
    href: "#compare-brands",
    accent: "metric-revenue",
  },
];

export const sectionNav = [
  { id: "overview", label: "Overview" },
  { id: "compare-brands", label: "Compare Franchises" },
  { id: "economics", label: "Economics" },
  { id: "startup-costs", label: "Startup Costs" },
  { id: "calculators", label: "Calculators" },
  { id: "rankings", label: "Rankings" },
  { id: "investment-guide", label: "Investment Guide" },
  { id: "faq", label: "FAQ" },
] as const;

export const whichIsBestCards: readonly FranchiseGuideBestCard[] = [
  {
    title: "Lowest Startup Cost",
    brand: "Dealer programs / lean fleets",
    detail: "Existing contractors converting into brand systems can keep CapEx lower than greenfield franchise builds.",
  },
  {
    title: "Highest Revenue Potential",
    brand: "One Hour / scaled multi-truck",
    detail: "Mature multi-truck franchise units with strong maintenance books often push toward the top of the revenue band.",
  },
  {
    title: "Best Brand Recognition",
    brand: "Bryant / Lennox dealer brands",
    detail: "OEM brand awareness can support install confidence and equipment-led marketing.",
  },
  {
    title: "Best Training Program",
    brand: "Aire Serv / One Hour",
    detail: "Systems with structured tech and sales training reduce first-year execution risk for new owners.",
  },
  {
    title: "Best for Existing HVAC Contractors",
    brand: "Bryant / Lennox Premier",
    detail: "Dealer pathways often fit contractors who already have trucks, techs, and local demand.",
  },
  {
    title: "Best for First-Time Franchise Owners",
    brand: "Aire Serv",
    detail: "Playbooks, call-center options, and field support help owners without prior franchise operating experience.",
  },
  {
    title: "Fastest Growing Network",
    brand: "National service brands",
    detail: "Home-service consolidators and franchise networks continue expanding where residential install/replace demand is strong.",
  },
  {
    title: "Best Multi-Unit Opportunity",
    brand: "One Hour Heating & Air",
    detail: "Repeatable truck economics and territory maps support operators planning multiple markets.",
  },
];

export const franchiseBrands: readonly FranchiseGuideBrand[] = [
  {
    label: "One Hour Heating & Air Conditioning",
    slug: "one-hour-heating-air",
    href: brandHref("one-hour-heating-air"),
    investment: "$180K – $450K",
    franchiseFee: "$40K – $55K",
    royalty: "5–7% + ads",
    units: "National",
    bestFor: "Multi-truck residential service",
  },
  {
    label: "Aire Serv",
    slug: "aire-serv",
    href: brandHref("aire-serv"),
    investment: "$150K – $400K",
    franchiseFee: "$35K – $50K",
    royalty: "5–7% + ads",
    units: "National",
    bestFor: "First-time franchise owners",
  },
  {
    label: "Bryant Dealer Program",
    slug: "bryant-dealer",
    href: brandHref("bryant-dealer"),
    investment: "$125K – $350K+",
    franchiseFee: "Program / dealer fees",
    royalty: "Varies by program",
    units: "Dealer network",
    bestFor: "Existing HVAC contractors",
  },
  {
    label: "Lennox Premier Dealer",
    slug: "lennox-premier-dealer",
    href: brandHref("lennox-premier-dealer"),
    investment: "$125K – $375K+",
    franchiseFee: "Program / dealer fees",
    royalty: "Varies by program",
    units: "Dealer network",
    bestFor: "Install-focused contractors",
  },
];

export const economicsRows: readonly FranchiseGuideBenchmarkRow[] = [
  { metric: "Average Revenue", value: "$1.2M – $5M+" },
  { metric: "Gross Margin", value: "40 – 55%" },
  { metric: "EBITDA Margin", value: "10 – 20%" },
  { metric: "Net Profit Margin", value: "8 – 16% after royalties" },
  { metric: "Royalty Fee", value: "5 – 7%" },
  { metric: "Marketing Fee", value: "1 – 3%" },
  { metric: "Revenue per Technician", value: "$250K – $450K" },
  { metric: "Revenue per Truck", value: "$300K – $550K" },
  { metric: "Average Ticket Size", value: "$350 – $8,000+" },
  { metric: "Maintenance Agreement Revenue", value: "15 – 40% of sales" },
];

export const startupCostBreakdown: readonly FranchiseGuideStartupItem[] = [
  { item: "Franchise Fee", range: "$25K – $60K", percent: "12%" },
  { item: "Territory Fee", range: "$10K – $50K", percent: "8%" },
  { item: "Vehicle Fleet", range: "$40K – $150K", percent: "25%" },
  { item: "Equipment & Tools", range: "$15K – $45K", percent: "8%" },
  { item: "Inventory", range: "$10K – $40K", percent: "7%" },
  { item: "Office Setup", range: "$10K – $35K", percent: "6%" },
  { item: "Working Capital", range: "$40K – $120K", percent: "20%" },
  { item: "Technology", range: "$5K – $25K", percent: "4%" },
  { item: "Training", range: "$3K – $15K", percent: "3%" },
  { item: "Marketing Launch", range: "$15K – $50K", percent: "7%" },
];

export const startupCostTotal = {
  low: "$125K",
  median: "$275K",
  high: "$500K+",
} as const;

export const franchiseCalculators: readonly FranchiseGuideCalculator[] = [
  {
    label: "HVAC Revenue per Technician Calculator",
    description: "Benchmark technician productivity against typical franchise unit ranges.",
    href: "/calculators/hvac-revenue-per-technician/",
  },
  {
    label: "HVAC Profit Margin Calculator",
    description: "Model net margin after payroll, vehicles, rent, and royalties.",
    href: "/calculators/hvac-profit-margin/",
  },
  {
    label: "HVAC Break-even Calculator",
    description: "Estimate jobs and revenue needed to cover fixed costs and fees.",
    href: "/calculators/hvac-break-even/",
  },
  {
    label: "HVAC Business Valuation Calculator",
    description: "Estimate franchise or independent unit value using SDE multiples.",
    href: "/calculators/hvac-valuation/",
  },
];

export const franchiseRankings = hvacFranchiseRankingCards;

export const franchiseVsIndependent: readonly FranchiseGuideVsRow[] = [
  { factor: "Startup Cost", franchise: "$125K – $500K+", independent: "$50K – $250K" },
  { factor: "Brand Recognition", franchise: "National / OEM brand traffic", independent: "Local brand you build" },
  { factor: "Marketing Support", franchise: "National ads + lead systems", independent: "Owner-led local marketing" },
  { factor: "Royalty Fees", franchise: "Typically 5–7% + marketing", independent: "None" },
  { factor: "Lead Generation", franchise: "Brand + call-center options", independent: "Self-sourced leads" },
  { factor: "Buying Power", franchise: "Vendor & equipment discounts", independent: "Local distributor pricing" },
  { factor: "Profit Margin", franchise: "8 – 16% after fees", independent: "10 – 18% net" },
  { factor: "Business Valuation", franchise: "Often stronger branded comps", independent: "2.4× – 3.8× SDE typical" },
];

export const investmentConsiderations = [
  {
    title: "Initial Investment",
    detail: "Plan for trucks, tools, working capital, and launch marketing — not just the franchise fee.",
  },
  {
    title: "Required Net Worth",
    detail: "Many systems look for six-figure net worth with liquidity beyond the franchise fee alone.",
  },
  {
    title: "Liquid Capital",
    detail: "Keep cash for ramp payroll, seasonality, and slower months before maintenance revenue stabilizes.",
  },
  {
    title: "Territory Size",
    detail: "Population, housing stock, and competitor density drive unit economics more than brand slogans.",
  },
  {
    title: "Exclusive Territories",
    detail: "Confirm exclusive ZIP maps and neighboring franchisee densification rules before signing.",
  },
  {
    title: "Training & Support",
    detail: "Technician, CSR, and sales training quality heavily influences Year-1 ramp speed.",
  },
  {
    title: "National Marketing",
    detail: "Evaluate ad fund ROI, lead quality, and whether local co-op spend is required.",
  },
  {
    title: "Technology Platform",
    detail: "Dispatch, CRM, flat-rate pricing, and membership software are core operating leverage.",
  },
  {
    title: "Recruitment Support",
    detail: "Technician scarcity is the #1 constraint — ask how brands help hire and retain techs.",
  },
  {
    title: "Vendor Discounts",
    detail: "Equipment and parts buying power can offset part of the royalty stack on install mix.",
  },
] as const;

export const businessQuestionFaqs: readonly FranchiseGuideFaq[] = [
  {
    question: "How much does an HVAC franchise cost?",
    answer:
      "An HVAC franchise typically costs $125,000 to $500,000+ in total investment, with many operators landing near $275,000. That includes the franchise fee ($25,000–$60,000), territory fees, vehicles, tools, inventory, office setup, technology, launch marketing, and working capital. Existing contractors converting into dealer or franchise systems can land lower if they already own trucks and equipment. Always rebuild Item 7 with local vehicle and facility quotes before you buy.",
  },
  {
    question: "What is the best HVAC franchise?",
    answer:
      "The best HVAC franchise depends on your goals. Service-forward systems such as One Hour Heating & Air Conditioning often suit multi-truck growth, while Aire Serv is frequently shortlisted by first-time franchise owners seeking playbooks and support. Bryant and Lennox dealer programs can be stronger fits for existing contractors prioritizing OEM brand and install mix. Rank brands on after-fee cash flow, territory quality, and technician recruiting — not marketing claims alone.",
  },
  {
    question: "How profitable are HVAC franchises?",
    answer:
      "Well-run HVAC franchises are often profitable at roughly 8–16% net after royalties, with EBITDA commonly in the 10–20% range. Mature units generating $1.2M–$5M+ can produce strong owner cash flow when truck productivity stays high and maintenance agreements grow. Profitability hinges on technician utilization, average ticket, and royalty load more than brand awareness alone. Top operators outperform through memberships, selling efficiency, and multi-unit leverage.",
  },
  {
    question: "How much do HVAC franchise owners make?",
    answer:
      "HVAC franchise owners typically make about $95,000 to $185,000 in total owner benefit on a mature single unit, with a mid-point near $145,000. Multi-unit operators can exceed $250,000–$350,000+ as shared management and fleet density improve. Year-one earnings are usually lower during ramp and hiring. Model owner pay after royalties and advertising fees — not at gross revenue.",
  },
  {
    question: "What are HVAC franchise royalty fees?",
    answer:
      "HVAC franchise royalty fees commonly run about 5–7% of revenue, plus a 1–3% marketing or brand fund in many systems. Combined ongoing fees often total roughly 6–10% and are the main reason franchise net margins can trail strong independents. Dealer programs may use different fee structures tied to equipment brand requirements. Include the full fee stack in break-even and payback models from day one.",
  },
  {
    question: "How long is the payback period?",
    answer:
      "The typical HVAC franchise payback period is three to five years of cumulative free cash flow returning invested capital. Monthly operating break-even can arrive sooner — often within 12–24 months — while full investment recovery takes longer after fleet financing and royalties. Faster payback favors strong maintenance books, high revenue per truck, and controlled CapEx. Soft territories or technician shortages can push payback beyond five years.",
  },
  {
    question: "Should I buy a franchise or start my own HVAC company?",
    answer:
      "Buy an HVAC franchise when you want brand recognition, lead systems, training, and vendor programs — and you accept royalties. Start or grow an independent HVAC company when you already have local demand, hiring capability, and want higher net margins without fees. Independents often launch cheaper; franchises can ramp faster with playbooks. Choose based on capital, experience, and whether exclusive territory and brand traffic justify the fee stack.",
  },
  {
    question: "How much working capital is required?",
    answer:
      "Most HVAC franchises require $40,000 to $120,000 of working capital inside total investment, and lenders often want additional liquidity beyond the franchise fee. Working capital covers technician payroll, truck costs, parts inventory, royalties, and marketing during the ramp. Undercapitalization shows up quickly when hiring lags or weather softens install demand. Keep seasonal reserves for shoulder months when cash conversion slows.",
  },
  {
    question: "Which HVAC franchise has the highest ROI?",
    answer:
      "The highest ROI HVAC franchise is usually a strong-territory service business with high truck utilization and a growing maintenance agreement base — often a scaled One Hour or Aire Serv unit when CapEx stays controlled. Dealer conversions can post excellent ROI if existing assets reduce cash invested. Highest revenue brands are not always highest ROI if royalties and fleet costs inflate the denominator. Underwrite site-level cash-on-cash returns after fees.",
  },
  {
    question: "Can existing HVAC contractors convert to a franchise?",
    answer:
      "Yes — many existing HVAC contractors convert into franchise or OEM dealer programs to gain brand marketing, pricing systems, and recruiting support. Conversion CapEx is often lower when trucks, tools, and staff already exist. Watch for culture fit, fee stack economics, and territory conflicts with your current service area. Compare after-royalty margins carefully so brand benefits outweigh reduced bottom-line flexibility.",
  },
];

export const relatedFranchiseIndustries: readonly FranchiseGuideLinkCard[] = [
  { label: "Plumbing Franchises", href: "/franchise/home-services/plumbing/" },
  { label: "Cleaning Franchises", href: "/franchise/home-services/cleaning/" },
  { label: "Pest Control Franchises", href: "/franchise/home-services/pest-control/" },
];

export const franchiseFaqs: readonly FranchiseGuideFaq[] = [
  {
    question: "Which HVAC franchise is the most profitable?",
    answer:
      "Profitability varies more by territory, truck utilization, and maintenance mix than brand alone. Mature service-forward units with strong membership books often lead after royalties.",
  },
  {
    question: "How much capital do I need?",
    answer:
      "Plan for roughly $125K–$500K+ total investment plus liquidity above the franchise fee. Many lenders want working capital for the first 12–24 months of ramp.",
  },
  {
    question: "Do I need HVAC experience?",
    answer:
      "Not always — some franchise systems accept non-trade owners who hire licensed technicians and complete brand training. Existing contractors often adapt faster.",
  },
  {
    question: "What financing options are available?",
    answer:
      "Common paths include SBA loans, conventional loans, vehicle financing, and franchisor-approved lenders. Preserve cash for hiring and seasonality beyond funded CapEx.",
  },
  {
    question: "How much can an HVAC franchise owner earn?",
    answer:
      "Mature single-unit owners often earn about $95K–$185K all-in, with multi-unit operators frequently exceeding $250K depending on scale and structure.",
  },
  {
    question: "What are the ongoing royalty fees?",
    answer:
      "Royalties commonly run 5–7% of revenue, often plus a 1–3% marketing fund. Confirm exact fees in the current FDD or dealer agreement.",
  },
  {
    question: "Can I own multiple territories?",
    answer:
      "Yes — multi-unit ownership is common in HVAC franchising when territorial rights and development schedules allow. Brands often prefer proven operators.",
  },
  {
    question: "How long does it take to break even?",
    answer:
      "Many units reach monthly operating break-even in roughly 12–24 months, while full investment payback often takes 3–5 years depending on CapEx and utilization.",
  },
];
