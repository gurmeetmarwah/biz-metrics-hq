import type { HomeServicesFranchiseGuideData } from "@/lib/franchise/beauty/beauty-franchise-guide-types";
import { plumbingFranchiseRankingCards } from "@/lib/franchise/home-services/plumbing-rankings";

function brandHref(slug: string) {
  return `/franchise/home-services/plumbing/brands/${slug}/`;
}

export const plumbingFranchiseBrandSlugs = [
  "mr-rooter",
  "benjamin-franklin-plumbing",
  "roto-rooter",
  "rooter-man",
] as const;

export const plumbingFranchiseBrandNames: Record<(typeof plumbingFranchiseBrandSlugs)[number], string> = {
  "mr-rooter": "Mr. Rooter",
  "benjamin-franklin-plumbing": "Benjamin Franklin Plumbing",
  "roto-rooter": "Roto-Rooter",
  "rooter-man": "Rooter-Man",
};

export const plumbingFranchiseGuide: HomeServicesFranchiseGuideData = {
  meta: {
    slug: "plumbing",
    categoryLabel: "Home Services",
    shortName: "Plumbing",
    title: "Plumbing Franchise Guide: Compare Costs, ROI, Profit Margins & Top Franchise Opportunities",
    subtitle:
      "Compare startup costs, franchise fees, royalties, owner earnings, and financial performance across leading plumbing franchise systems.",
    dataVintage: "2025–2026",
    sampleSize: "leading U.S. plumbing franchise & licensed systems",
    kpiDashboardTitle: "Plumbing Franchise KPIs",
    kpiDashboardSubtitle: "Directional ranges across national plumbing franchise and licensed operator programs.",
    overviewTitle: "Which Plumbing Franchise Fits Your Goals?",
    overviewSubtitle: "Match capital, contractor experience, and multi-unit ambition to the right plumbing franchise or licensed system.",
    compareTitle: "Compare Plumbing Franchise Brands",
    compareSubtitle: "Side-by-side snapshot of investment, fees, royalties, footprint, and buyer fit — open a brand for the full investment profile.",
    economicsSubtitle: "Industry-average operating ranges for mature U.S. plumbing franchise and licensed units after royalties.",
    economicsPanelSubtitle: "Typical single-unit performance for national plumbing service franchises and licensed programs.",
    startupSubtitle: "Where the first $100K–$400K+ typically goes when launching a plumbing franchise or licensed operation.",
    startupPanelSubtitle: "Includes franchise/territory fees, fleet, tools, inventory, technology, and opening working capital.",
    calculatorsSubtitle: "Model technician productivity, margins, break-even, and valuation before you buy a plumbing franchise.",
    rankingsSubtitle: "Curated lists for comparing plumbing franchises by cost, ROI, growth, and owner fit.",
    prosConsTitle: "Franchise vs Independent Plumbing Business",
    prosConsSubtitle: "Trade brand systems, leads, and buying power for royalties and less operating freedom.",
    shouldBuyHref: "#faq",
    shouldBuyBlurb: "Compare brand economics against independent plumbing benchmarks before you commit capital.",
    questionsSubtitle: "High-intent questions plumbing franchise buyers ask before investing.",
    finalCtaTitle: "Compare Plumbing Franchise Opportunities",
    finalCtaSubtitle: "Find the right franchise by comparing startup costs, fees, revenue, ROI, and long-term profitability.",
  },
  compareCtaLabel: "Compare Plumbing Franchises",
  shouldBuyCtaLabel: "Should You Buy a Plumbing Franchise?",
  roiCtaLabel: "Franchise ROI Calculator",
  economicsTitle: "Plumbing Franchise Economics",
  calculatorsTitle: "Plumbing Franchise Calculators",
  rankingsTitle: "Top Plumbing Franchise Rankings",
  relatedTitle: "Related Home Service Franchises",
  relatedSubtitle: "Explore franchise economics across other residential trade and property-service categories.",
  investmentGuideSubtitle: "Diligence checklist for plumbing franchise buyers evaluating capital, territories, and operating support.",

  heroCtas: [
    { label: "Compare Plumbing Franchises", href: "#compare-brands", primary: true },
    { label: "Franchise ROI Calculator", href: "#calculators", primary: false },
  ],

  executiveKpis: [
    {
      id: "investment",
      label: "Average Initial Investment",
      value: "$220K",
      sublabel: "typical total launch range $100K–$400K+",
      href: "#startup-costs",
      accent: "metric-valuation",
    },
    {
      id: "franchise-fee",
      label: "Average Franchise Fee",
      value: "$40K",
      sublabel: "typical range $25K–$50K",
      href: "#compare-brands",
      accent: "metric-valuation",
    },
    {
      id: "revenue",
      label: "Average Annual Revenue",
      value: "$1.8M",
      sublabel: "mature unit mid-point; range $900K–$3.5M+",
      href: "#economics",
      accent: "metric-revenue",
    },
    {
      id: "ebitda",
      label: "Average EBITDA Margin",
      value: "13%",
      sublabel: "typical 10–18% before owner add-backs",
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
      value: "$120K",
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
  ],

  sectionNav: [
    { id: "overview", label: "Overview" },
    { id: "compare-brands", label: "Compare Franchises" },
    { id: "economics", label: "Economics" },
    { id: "startup-costs", label: "Startup Costs" },
    { id: "calculators", label: "Calculators" },
    { id: "rankings", label: "Rankings" },
    { id: "investment-guide", label: "Investment Guide" },
    { id: "faq", label: "FAQ" },
  ],

  whichIsBestCards: [
    {
      title: "Lowest Startup Cost",
      brand: "Licensed programs / lean fleets",
      detail: "Existing contractors converting into brand systems can keep CapEx lower than greenfield franchise builds.",
    },
    {
      title: "Highest Revenue Potential",
      brand: "Mr. Rooter / scaled multi-truck",
      detail: "Mature multi-truck franchise units with strong drain and repair mix often push toward the top of the revenue band.",
    },
    {
      title: "Best Brand Recognition",
      brand: "Roto-Rooter",
      detail: "Decades of national brand awareness support install confidence and drain-cleaning demand generation.",
    },
    {
      title: "Best Training Program",
      brand: "Benjamin Franklin Plumbing / Mr. Rooter",
      detail: "Systems with structured tech and sales training reduce first-year execution risk for new owners.",
    },
    {
      title: "Best for Existing Plumbing Contractors",
      brand: "Roto-Rooter / Rooter-Man",
      detail: "Licensed and conversion pathways often fit contractors who already have trucks, techs, and local demand.",
    },
    {
      title: "Best for First-Time Franchise Owners",
      brand: "Benjamin Franklin Plumbing",
      detail: "Playbooks, call-center options, and field support help owners without prior franchise operating experience.",
    },
    {
      title: "Fastest Growing Network",
      brand: "National plumbing service brands",
      detail: "Home-service consolidators and franchise networks continue expanding where residential repair and repipe demand is strong.",
    },
    {
      title: "Best Multi-Unit Opportunity",
      brand: "Mr. Rooter",
      detail: "Repeatable truck economics and territory maps support operators planning multiple markets.",
    },
  ],

  franchiseBrands: [
    {
      label: "Mr. Rooter",
      slug: "mr-rooter",
      href: brandHref("mr-rooter"),
      investment: "$150K – $350K",
      franchiseFee: "$35K – $48K",
      royalty: "5–7% + ads",
      units: "National",
      bestFor: "Multi-truck residential service",
    },
    {
      label: "Benjamin Franklin Plumbing",
      slug: "benjamin-franklin-plumbing",
      href: brandHref("benjamin-franklin-plumbing"),
      investment: "$140K – $320K",
      franchiseFee: "$33K – $45K",
      royalty: "5–7% + ads",
      units: "National",
      bestFor: "First-time franchise owners",
    },
    {
      label: "Roto-Rooter",
      slug: "roto-rooter",
      href: brandHref("roto-rooter"),
      investment: "$125K – $300K+",
      franchiseFee: "Program / franchise varies",
      royalty: "Varies",
      units: "National / licensed",
      bestFor: "Brand recognition & drain specialty",
    },
    {
      label: "Rooter-Man",
      slug: "rooter-man",
      href: brandHref("rooter-man"),
      investment: "$110K – $280K",
      franchiseFee: "$25K – $40K",
      royalty: "5–7% + ads",
      units: "Expanding",
      bestFor: "Lower CapEx operators",
    },
  ],

  economicsRows: [
    { metric: "Average Revenue", value: "$900K – $3.5M+" },
    { metric: "Gross Margin", value: "40 – 55%" },
    { metric: "EBITDA Margin", value: "10 – 18%" },
    { metric: "Net Profit Margin", value: "8 – 15% after royalties" },
    { metric: "Royalty Fee", value: "5 – 7%" },
    { metric: "Marketing Fee", value: "1 – 3%" },
    { metric: "Revenue per Technician", value: "$200K – $400K" },
    { metric: "Revenue per Truck", value: "$250K – $500K" },
    { metric: "Average Ticket Size", value: "$250 – $6,000+" },
    { metric: "Maintenance Agreement Revenue", value: "10 – 30% of sales" },
  ],

  startupCostBreakdown: [
    { item: "Franchise Fee", range: "$25K – $50K", percent: "16%" },
    { item: "Territory Fee", range: "$8K – $35K", percent: "7%" },
    { item: "Vehicle Fleet", range: "$30K – $120K", percent: "22%" },
    { item: "Tools & Equipment", range: "$12K – $40K", percent: "9%" },
    { item: "Inventory", range: "$8K – $30K", percent: "6%" },
    { item: "Office Setup", range: "$8K – $30K", percent: "6%" },
    { item: "Working Capital", range: "$35K – $100K", percent: "20%" },
    { item: "Technology", range: "$5K – $20K", percent: "4%" },
    { item: "Training", range: "$3K – $12K", percent: "3%" },
    { item: "Marketing Launch", range: "$12K – $40K", percent: "7%" },
  ],

  startupCostTotal: {
    low: "$100K",
    median: "$220K",
    high: "$400K+",
  },

  franchiseCalculators: [
    {
      label: "Plumbing Revenue per Technician Calculator",
      description: "Benchmark technician productivity against typical franchise unit ranges.",
      href: "/calculators/plumbing-revenue-per-technician/",
    },
    {
      label: "Plumbing Profit Margin Calculator",
      description: "Model net margin after payroll, vehicles, rent, and royalties.",
      href: "/calculators/plumbing-profit-margin/",
    },
    {
      label: "Plumbing Break-even Calculator",
      description: "Estimate jobs and revenue needed to cover fixed costs and fees.",
      href: "/calculators/plumbing-break-even/",
    },
    {
      label: "Plumbing Business Valuation Calculator",
      description: "Estimate franchise or independent unit value using SDE multiples.",
      href: "/calculators/plumbing-valuation/",
    },
  ],

  franchiseRankings: plumbingFranchiseRankingCards,

  franchiseVsIndependent: [
    { factor: "Startup Cost", franchise: "$100K – $400K+", independent: "$40K – $200K" },
    { factor: "Brand Recognition", franchise: "National brand traffic", independent: "Local brand you build" },
    { factor: "Marketing Support", franchise: "National ads + lead systems", independent: "Owner-led local marketing" },
    { factor: "Royalty Fees", franchise: "Typically 5–7% + marketing", independent: "None" },
    { factor: "Lead Generation", franchise: "Brand + call-center options", independent: "Self-sourced leads" },
    { factor: "Buying Power", franchise: "Vendor & parts discounts", independent: "Local distributor pricing" },
    { factor: "Profit Margin", franchise: "8 – 15% after fees", independent: "10 – 18% net" },
    { factor: "Business Valuation", franchise: "Often stronger branded comps", independent: "2.2× – 3.6× SDE typical" },
  ],

  investmentConsiderations: [
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
      detail: "Keep cash for ramp payroll, seasonality, and slower months before service-agreement revenue stabilizes.",
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
      detail: "Licensed plumber scarcity is the #1 constraint — ask how brands help hire and retain technicians.",
    },
    {
      title: "Vendor Discounts",
      detail: "Parts and fixture buying power can offset part of the royalty stack on install and repair mix.",
    },
  ],

  businessQuestionFaqs: [
    {
      question: "How much does a plumbing franchise cost?",
      answer:
        "A plumbing franchise typically costs $100,000 to $400,000+ in total investment, with many operators landing near $220,000. That includes the franchise fee ($25,000–$50,000), territory fees, vehicles, tools, inventory, office setup, technology, launch marketing, and working capital. Existing contractors converting into licensed or franchise systems can land lower if they already own trucks and equipment. Always rebuild Item 7 with local vehicle and facility quotes before you buy.",
    },
    {
      question: "What is the best plumbing franchise?",
      answer:
        "The best plumbing franchise depends on your goals. Service-forward systems such as Mr. Rooter often suit multi-truck growth, while Benjamin Franklin Plumbing is frequently shortlisted by first-time franchise owners seeking playbooks and support. Roto-Rooter can be a stronger fit for buyers prioritizing national brand recognition and drain-cleaning specialty, and Rooter-Man suits operators seeking lower CapEx entry. Rank brands on after-fee cash flow, territory quality, and technician recruiting — not marketing claims alone.",
    },
    {
      question: "How profitable are plumbing franchises?",
      answer:
        "Well-run plumbing franchises are often profitable at roughly 8–15% net after royalties, with EBITDA commonly in the 10–18% range. Mature units generating $900K–$3.5M+ can produce strong owner cash flow when truck productivity stays high and service agreements grow. Profitability hinges on technician utilization, average ticket, and royalty load more than brand awareness alone. Top operators outperform through memberships, selling efficiency, and multi-unit leverage.",
    },
    {
      question: "How much do plumbing franchise owners make?",
      answer:
        "Plumbing franchise owners typically make about $85,000 to $160,000 in total owner benefit on a mature single unit, with a mid-point near $120,000. Multi-unit operators can exceed $200,000–$300,000+ as shared management and fleet density improve. Year-one earnings are usually lower during ramp and hiring. Model owner pay after royalties and advertising fees — not at gross revenue.",
    },
    {
      question: "What are plumbing franchise royalty fees?",
      answer:
        "Plumbing franchise royalty fees commonly run about 5–7% of revenue, plus a 1–3% marketing or brand fund in many systems. Combined ongoing fees often total roughly 6–10% and are the main reason franchise net margins can trail strong independents. Licensed programs may use different fee structures tied to service standards. Include the full fee stack in break-even and payback models from day one.",
    },
    {
      question: "How long is the payback period?",
      answer:
        "The typical plumbing franchise payback period is three to five years of cumulative free cash flow returning invested capital. Monthly operating break-even can arrive sooner — often within 12–24 months — while full investment recovery takes longer after fleet financing and royalties. Faster payback favors strong service-agreement books, high revenue per truck, and controlled CapEx. Soft territories or technician shortages can push payback beyond five years.",
    },
    {
      question: "Should I buy a franchise or start my own plumbing company?",
      answer:
        "Buy a plumbing franchise when you want brand recognition, lead systems, training, and vendor programs — and you accept royalties. Start or grow an independent plumbing company when you already have local demand, hiring capability, and want higher net margins without fees. Independents often launch cheaper; franchises can ramp faster with playbooks. Choose based on capital, experience, and whether exclusive territory and brand traffic justify the fee stack.",
    },
    {
      question: "How much working capital is required?",
      answer:
        "Most plumbing franchises require $35,000 to $100,000 of working capital inside total investment, and lenders often want additional liquidity beyond the franchise fee. Working capital covers technician payroll, truck costs, parts inventory, royalties, and marketing during the ramp. Undercapitalization shows up quickly when hiring lags or seasonal demand softens. Keep reserves for shoulder months when cash conversion slows.",
    },
    {
      question: "Which plumbing franchise has the highest ROI?",
      answer:
        "The highest ROI plumbing franchise is usually a strong-territory service business with high truck utilization and a growing service-agreement base — often a scaled Mr. Rooter or Benjamin Franklin Plumbing unit when CapEx stays controlled. Licensed conversions can post excellent ROI if existing assets reduce cash invested. Highest revenue brands are not always highest ROI if royalties and fleet costs inflate the denominator. Underwrite site-level cash-on-cash returns after fees.",
    },
    {
      question: "Can existing plumbing contractors convert to a franchise?",
      answer:
        "Yes — many existing plumbing contractors convert into franchise or licensed programs to gain brand marketing, pricing systems, and recruiting support. Conversion CapEx is often lower when trucks, tools, and staff already exist. Watch for culture fit, fee stack economics, and territory conflicts with your current service area. Compare after-royalty margins carefully so brand benefits outweigh reduced bottom-line flexibility.",
    },
  ],

  relatedFranchiseIndustries: [
    { label: "HVAC Franchises", href: "/franchise/home-services/hvac/" },
    { label: "Cleaning Franchises", href: "/franchise/home-services/cleaning/" },
    { label: "Pest Control Franchises", href: "/franchise/home-services/pest-control/" },
  ],

  franchiseFaqs: [
    {
      question: "Which plumbing franchise is the most profitable?",
      answer:
        "Profitability varies more by territory, truck utilization, and service-agreement mix than brand alone. Mature service-forward units with strong membership books often lead after royalties.",
    },
    {
      question: "How much capital do I need?",
      answer:
        "Plan for roughly $100K–$400K+ total investment plus liquidity above the franchise fee. Many lenders want working capital for the first 12–24 months of ramp.",
    },
    {
      question: "Do I need plumbing experience?",
      answer:
        "Not always — some franchise systems accept non-trade owners who hire licensed plumbers and complete brand training. Existing contractors often adapt faster.",
    },
    {
      question: "What financing options are available?",
      answer:
        "Common paths include SBA loans, conventional loans, vehicle financing, and franchisor-approved lenders. Preserve cash for hiring and seasonality beyond funded CapEx.",
    },
    {
      question: "How much can a plumbing franchise owner earn?",
      answer:
        "Mature single-unit owners often earn about $85K–$160K all-in, with multi-unit operators frequently exceeding $200K depending on scale and structure.",
    },
    {
      question: "What are the ongoing royalty fees?",
      answer:
        "Royalties commonly run 5–7% of revenue, often plus a 1–3% marketing fund. Confirm exact fees in the current FDD or licensed agreement.",
    },
    {
      question: "Can I own multiple territories?",
      answer:
        "Yes — multi-unit ownership is common in plumbing franchising when territorial rights and development schedules allow. Brands often prefer proven operators.",
    },
    {
      question: "How long does it take to break even?",
      answer:
        "Many units reach monthly operating break-even in roughly 12–24 months, while full investment payback often takes 3–5 years depending on CapEx and utilization.",
    },
  ],
};

export const plumbingFranchisePageMeta = {
  slug: plumbingFranchiseGuide.meta.slug,
  categoryId: "home-services",
  categoryLabel: plumbingFranchiseGuide.meta.categoryLabel,
  shortName: plumbingFranchiseGuide.meta.shortName,
  title: plumbingFranchiseGuide.meta.title,
  subtitle: plumbingFranchiseGuide.meta.subtitle,
  dataVintage: plumbingFranchiseGuide.meta.dataVintage,
  sampleSize: plumbingFranchiseGuide.meta.sampleSize,
  kpiDashboardTitle: plumbingFranchiseGuide.meta.kpiDashboardTitle,
  kpiDashboardSubtitle: plumbingFranchiseGuide.meta.kpiDashboardSubtitle,
} as const;
