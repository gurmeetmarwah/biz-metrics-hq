import type { HomeServicesFranchiseGuideData } from "@/lib/franchise/beauty/beauty-franchise-guide-types";
import { cleaningFranchiseRankingCards } from "@/lib/franchise/home-services/cleaning-rankings";

function brandHref(slug: string) {
  return `/franchise/home-services/cleaning/brands/${slug}/`;
}

export const cleaningFranchiseBrandSlugs = [
  "merry-maids",
  "molly-maid",
  "the-cleaning-authority",
  "maidpro",
] as const;

export const cleaningFranchiseBrandNames: Record<(typeof cleaningFranchiseBrandSlugs)[number], string> = {
  "merry-maids": "Merry Maids",
  "molly-maid": "Molly Maid",
  "the-cleaning-authority": "The Cleaning Authority",
  maidpro: "MaidPro",
};

export const cleaningFranchisePageMeta = {
  slug: "cleaning",
  categoryId: "home-services",
  categoryLabel: "Home Services",
  shortName: "Cleaning",
} as const;

export const cleaningFranchiseGuide: HomeServicesFranchiseGuideData = {
  meta: {
    slug: "cleaning",
    categoryLabel: "Home Services",
    shortName: "Cleaning",
    title: "Cleaning Franchise Guide: Compare Costs, ROI, Profit Margins & Top Franchise Opportunities",
    subtitle:
      "Compare startup costs, franchise fees, royalties, owner earnings, investment requirements, and financial performance across leading residential cleaning franchise systems.",
    dataVintage: "2025–2026",
    sampleSize: "leading U.S. residential cleaning franchise systems",
    kpiDashboardTitle: "Cleaning Franchise KPIs",
    kpiDashboardSubtitle: "Directional ranges across national residential cleaning franchise systems.",
    overviewTitle: "Which Cleaning Franchise Fits Your Goals?",
    overviewSubtitle:
      "Match capital, recurring-revenue goals, and multi-territory ambition to the right cleaning franchise system.",
    compareTitle: "Compare Cleaning Franchise Brands",
    compareSubtitle:
      "Side-by-side snapshot of investment, fees, royalties, footprint, and buyer fit — open a brand for the full investment profile.",
    economicsSubtitle:
      "Industry-average operating ranges for mature U.S. residential cleaning franchise units after royalties.",
    economicsPanelSubtitle:
      "Typical single-unit performance for national residential cleaning franchise systems.",
    startupSubtitle:
      "Where the first $50K–$200K+ typically goes when launching a residential cleaning franchise.",
    startupPanelSubtitle:
      "Includes franchise fees, territory rights, vehicles, equipment/supplies, technology, and opening working capital.",
    calculatorsSubtitle:
      "Model cleaner productivity, contract value, margins, and valuation before you buy a cleaning franchise.",
    rankingsSubtitle: "Curated lists for comparing cleaning franchises by cost, ROI, growth, and owner fit.",
    prosConsTitle: "Franchise vs Independent Cleaning Business",
    prosConsSubtitle:
      "Trade brand systems, recurring lead flow, and buying power for royalties and less operating freedom.",
    shouldBuyHref: "#faq",
    shouldBuyBlurb:
      "Compare brand economics against independent residential cleaning benchmarks before you commit capital.",
    questionsSubtitle: "High-intent questions cleaning franchise buyers ask before investing.",
    finalCtaTitle: "Compare Cleaning Franchise Opportunities",
    finalCtaSubtitle:
      "Find the right franchise by comparing startup costs, fees, revenue, ROI, and long-term profitability.",
  },

  heroCtas: [
    { label: "Compare Cleaning Franchises", href: "#compare-brands", primary: true },
    { label: "Franchise ROI Calculator", href: "#calculators", primary: false },
  ],

  executiveKpis: [
    {
      id: "investment",
      label: "Average Initial Investment",
      value: "$110K",
      sublabel: "typical total launch range $50K–$200K+",
      href: "#startup-costs",
      accent: "metric-valuation",
    },
    {
      id: "franchise-fee",
      label: "Average Franchise Fee",
      value: "$25K",
      sublabel: "typical range $15K–$35K",
      href: "#compare-brands",
      accent: "metric-valuation",
    },
    {
      id: "revenue",
      label: "Average Annual Revenue",
      value: "$550K",
      sublabel: "mature unit mid-point; range $250K–$1.2M+",
      href: "#economics",
      accent: "metric-revenue",
    },
    {
      id: "ebitda",
      label: "Average EBITDA Margin",
      value: "15%",
      sublabel: "typical 12–22% before owner add-backs",
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
      value: "2–4 yrs",
      sublabel: "cash-on-cash to recover total investment",
      href: "#economics",
      accent: "metric-salary",
    },
    {
      id: "owner-income",
      label: "Estimated Owner Income",
      value: "$90K",
      sublabel: "single-unit mid-point; multi-territory often higher",
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
      brand: "MaidPro",
      detail: "Leanest fleet and franchise fee requirements among featured national residential cleaning brands.",
    },
    {
      title: "Highest Revenue Potential",
      brand: "The Cleaning Authority",
      detail: "Team-cleaning system built for scaled crews and larger residential accounts pushes toward the top of the revenue band.",
    },
    {
      title: "Best Brand Recognition",
      brand: "Merry Maids / Molly Maid",
      detail: "Decades of national advertising and referral traffic support faster lead flow than an unbranded startup.",
    },
    {
      title: "Best Training Program",
      brand: "Molly Maid",
      detail: "Neighborly systems and structured onboarding reduce first-year execution risk for new owners.",
    },
    {
      title: "Best for Existing Cleaning Operators",
      brand: "The Cleaning Authority",
      detail: "Team-cleaning process and route density fit operators already running crews and looking to convert.",
    },
    {
      title: "Best for First-Time Franchise Owners",
      brand: "Molly Maid",
      detail: "Playbooks, call-center support, and field coaching help owners without prior franchise experience.",
    },
    {
      title: "Fastest Growing Network",
      brand: "National residential cleaning brands",
      detail: "Recurring-revenue demand keeps residential cleaning franchise development active across most U.S. markets.",
    },
    {
      title: "Best Multi-Territory Opportunity",
      brand: "Merry Maids",
      detail: "Repeatable route economics and recurring contracts support operators planning multiple territories.",
    },
  ],

  franchiseBrands: [
    {
      label: "Merry Maids",
      slug: "merry-maids",
      href: brandHref("merry-maids"),
      investment: "$70K – $150K",
      franchiseFee: "$25K – $35K",
      royalty: "5–7% + ads",
      units: "National",
      bestFor: "Residential recurring service households",
    },
    {
      label: "Molly Maid",
      slug: "molly-maid",
      href: brandHref("molly-maid"),
      investment: "$65K – $140K",
      franchiseFee: "$20K – $30K",
      royalty: "5–7% + ads",
      units: "National",
      bestFor: "First-time franchise owners",
    },
    {
      label: "The Cleaning Authority",
      slug: "the-cleaning-authority",
      href: brandHref("the-cleaning-authority"),
      investment: "$80K – $175K",
      franchiseFee: "$25K – $35K",
      royalty: "5–7% + ads",
      units: "National",
      bestFor: "Systems-driven residential operators",
    },
    {
      label: "MaidPro",
      slug: "maidpro",
      href: brandHref("maidpro"),
      investment: "$55K – $125K",
      franchiseFee: "$15K – $28K",
      royalty: "5–7% + ads",
      units: "National",
      bestFor: "Budget-conscious first-time owners",
    },
  ],

  economicsRows: [
    { metric: "Average Revenue", value: "$250K – $1.2M+" },
    { metric: "Gross Margin", value: "45 – 60%" },
    { metric: "EBITDA Margin", value: "12 – 22%" },
    { metric: "Net Profit Margin", value: "10 – 20% after royalties" },
    { metric: "Royalty Fee", value: "5 – 7%" },
    { metric: "Marketing Fee", value: "1 – 2%" },
    { metric: "Revenue per Cleaner", value: "$40K – $70K" },
    { metric: "Jobs per Day", value: "3 – 6 jobs per crew" },
    { metric: "Average Ticket", value: "$120 – $350" },
    { metric: "Recurring Contract Revenue", value: "60 – 85% of sales" },
  ],

  startupCostBreakdown: [
    { item: "Franchise Fee", range: "$15K – $35K", percent: "20%" },
    { item: "Territory Fee", range: "$5K – $20K", percent: "10%" },
    { item: "Vehicles", range: "$10K – $40K", percent: "15%" },
    { item: "Equipment & Supplies", range: "$5K – $20K", percent: "8%" },
    { item: "Office Setup", range: "$5K – $20K", percent: "8%" },
    { item: "Working Capital", range: "$15K – $50K", percent: "20%" },
    { item: "Technology", range: "$3K – $12K", percent: "5%" },
    { item: "Training", range: "$2K – $8K", percent: "4%" },
    { item: "Marketing Launch", range: "$8K – $25K", percent: "8%" },
    { item: "Insurance", range: "$2K – $10K", percent: "2%" },
  ],

  startupCostTotal: {
    low: "$50K",
    median: "$110K",
    high: "$200K+",
  },

  franchiseCalculators: [
    {
      label: "Cleaning Business Revenue per Cleaner Calculator",
      description: "Benchmark cleaner productivity against typical franchise unit ranges.",
      href: "/calculators/cleaning-business-revenue-per-cleaner/",
    },
    {
      label: "Cleaning Business Contract Value Calculator",
      description: "Estimate recurring contract value and retention economics per household.",
      href: "/calculators/cleaning-business-contract-value/",
    },
    {
      label: "Cleaning Business Profit Margin Calculator",
      description: "Model net margin after payroll, supplies, vehicles, and royalties.",
      href: "/calculators/cleaning-business-profit-margin/",
    },
    {
      label: "Cleaning Business Valuation Calculator",
      description: "Estimate franchise or independent unit value using SDE multiples.",
      href: "/calculators/cleaning-business-valuation/",
    },
  ],

  franchiseRankings: cleaningFranchiseRankingCards,

  franchiseVsIndependent: [
    { factor: "Startup Cost", franchise: "$50K – $200K+", independent: "$20K – $100K" },
    { factor: "Brand Recognition", franchise: "National brand traffic", independent: "Local brand you build" },
    { factor: "Marketing Support", franchise: "National ads + lead systems", independent: "Owner-led local marketing" },
    { factor: "Royalty Fees", franchise: "Typically 5–7% + marketing", independent: "None" },
    { factor: "Lead Generation", franchise: "Brand + call-center options", independent: "Self-sourced leads" },
    { factor: "Buying Power", franchise: "Vendor & supply discounts", independent: "Local distributor pricing" },
    { factor: "Profit Margin", franchise: "10 – 20% after fees", independent: "15 – 25% net" },
    { factor: "Business Valuation", franchise: "Often stronger branded comps", independent: "2.0× – 3.2× SDE typical" },
  ],

  businessQuestionFaqs: [
    {
      question: "How much does a cleaning franchise cost?",
      answer:
        "A cleaning franchise typically costs $50,000 to $200,000+ in total investment, with many operators landing near $110,000. That includes the franchise fee ($15,000–$35,000), territory fees, vehicles, equipment and supplies, office setup, technology, launch marketing, insurance, and working capital. Existing cleaning business owners converting into a franchise system can land lower if they already own vehicles and equipment. Always rebuild Item 7 with local vehicle and supply quotes before you buy.",
    },
    {
      question: "What is the best cleaning franchise?",
      answer:
        "The best cleaning franchise depends on your goals. Recurring-revenue systems such as Merry Maids often suit multi-territory growth, while Molly Maid is frequently shortlisted by first-time franchise owners seeking playbooks and support. The Cleaning Authority's team-cleaning process can be a stronger fit for operators prioritizing structured systems, while MaidPro offers a lower entry point. Rank brands on after-fee cash flow, territory quality, and cleaner recruiting — not marketing claims alone.",
    },
    {
      question: "How profitable are cleaning franchises?",
      answer:
        "Well-run cleaning franchises are often profitable at roughly 10–20% net after royalties, with EBITDA commonly in the 12–22% range. Mature units generating $250,000–$1.2M+ can produce strong owner cash flow when crew productivity stays high and recurring contract revenue grows. Profitability hinges on cleaner utilization, average ticket, and royalty load more than brand awareness alone. Top operators outperform through retention, route density, and multi-territory leverage.",
    },
    {
      question: "How much do cleaning franchise owners make?",
      answer:
        "Cleaning franchise owners typically make about $60,000 to $130,000 in total owner benefit on a mature single unit, with a mid-point near $90,000. Multi-territory operators can exceed $150,000–$220,000+ as shared management and route density improve. Year-one earnings are usually lower during ramp and hiring. Model owner pay after royalties and advertising fees — not at gross revenue.",
    },
    {
      question: "What are cleaning franchise royalty fees?",
      answer:
        "Cleaning franchise royalty fees commonly run about 5–7% of revenue, plus a 1–2% marketing or brand fund in many systems. Combined ongoing fees often total roughly 5–9% and are the main reason franchise net margins can trail strong independents. Include the full fee stack in break-even and payback models from day one.",
    },
    {
      question: "How long is the payback period?",
      answer:
        "The typical cleaning franchise payback period is two to four years of cumulative free cash flow returning invested capital. Monthly operating break-even can arrive sooner — often within 6–12 months — while full investment recovery takes longer after fleet and equipment costs and royalties. Faster payback favors strong recurring contract mix, high revenue per cleaner, and controlled CapEx. Soft territories or cleaner shortages can push payback beyond four years.",
    },
    {
      question: "Should I buy a franchise or start my own cleaning business?",
      answer:
        "Buy a cleaning franchise when you want brand recognition, lead systems, training, and vendor programs — and you accept royalties. Start or grow an independent cleaning business when you already have local demand, hiring capability, and want higher net margins without fees. Independents often launch cheaper; franchises can ramp faster with playbooks. Choose based on capital, experience, and whether exclusive territory and brand traffic justify the fee stack.",
    },
    {
      question: "How much working capital is required?",
      answer:
        "Most cleaning franchises require $15,000 to $50,000 of working capital inside total investment, and lenders often want additional liquidity beyond the franchise fee. Working capital covers cleaner payroll, vehicle costs, supplies, royalties, and marketing during the ramp. Undercapitalization shows up quickly when hiring lags or demand softens. Keep seasonal reserves for slower months when cash conversion slows.",
    },
    {
      question: "Which cleaning franchise has the highest ROI?",
      answer:
        "The highest ROI cleaning franchise is usually a strong-territory operation with high crew utilization and a growing recurring contract base — often a scaled Merry Maids or Molly Maid unit when CapEx stays controlled. Conversions from existing operators can post excellent ROI if existing assets reduce cash invested. Highest revenue brands are not always highest ROI if royalties and fleet costs inflate the denominator. Underwrite site-level cash-on-cash returns after fees.",
    },
    {
      question: "Can existing cleaning business owners convert to a franchise?",
      answer:
        "Yes — many existing cleaning business owners convert into franchise systems to gain brand marketing, pricing systems, and recruiting support. Conversion CapEx is often lower when vehicles, equipment, and staff already exist. Watch for culture fit, fee stack economics, and territory conflicts with your current service area. Compare after-royalty margins carefully so brand benefits outweigh reduced bottom-line flexibility.",
    },
  ],

  relatedFranchiseIndustries: [
    { label: "HVAC Franchises", href: "/franchise/home-services/hvac/" },
    { label: "Plumbing Franchises", href: "/franchise/home-services/plumbing/" },
    { label: "Pest Control Franchises", href: "/franchise/home-services/pest-control/" },
  ],

  franchiseFaqs: [
    {
      question: "Which cleaning franchise is the most profitable?",
      answer:
        "Profitability varies more by territory, crew utilization, and recurring contract mix than brand alone. Mature units with strong retention often lead after royalties.",
    },
    {
      question: "How much capital do I need?",
      answer:
        "Plan for roughly $50K–$200K+ total investment plus liquidity above the franchise fee. Many lenders want working capital for the first 6–12 months of ramp.",
    },
    {
      question: "Do I need cleaning industry experience?",
      answer:
        "Not always — most franchise systems accept non-trade owners who hire and train cleaners and complete brand training. Existing operators often adapt faster.",
    },
    {
      question: "What financing options are available?",
      answer:
        "Common paths include SBA loans, conventional loans, vehicle financing, and franchisor-approved lenders. Preserve cash for hiring and seasonality beyond funded CapEx.",
    },
    {
      question: "How much can a cleaning franchise owner earn?",
      answer:
        "Mature single-unit owners often earn about $60K–$130K all-in, with multi-territory operators frequently exceeding $150K depending on scale and structure.",
    },
    {
      question: "What are the ongoing royalty fees?",
      answer:
        "Royalties commonly run 5–7% of revenue, often plus a 1–2% marketing fund. Confirm exact fees in the current FDD.",
    },
    {
      question: "Can I own multiple territories?",
      answer:
        "Yes — multi-territory ownership is common in cleaning franchising when territorial rights and development schedules allow. Brands often prefer proven operators.",
    },
    {
      question: "How long does it take to break even?",
      answer:
        "Many units reach monthly operating break-even in roughly 6–12 months, while full investment payback often takes 2–4 years depending on CapEx and utilization.",
    },
  ],

  investmentConsiderations: [
    {
      title: "Initial Investment",
      detail: "Plan for vehicles, equipment, supplies, working capital, and launch marketing — not just the franchise fee.",
    },
    {
      title: "Required Net Worth",
      detail: "Many systems look for solid net worth with liquidity beyond the franchise fee alone.",
    },
    {
      title: "Liquid Capital",
      detail: "Keep cash for ramp payroll, seasonality, and slower months before recurring revenue stabilizes.",
    },
    {
      title: "Territory Size",
      detail: "Population, housing density, and competitor density drive unit economics more than brand slogans.",
    },
    {
      title: "Exclusive Territories",
      detail: "Confirm exclusive ZIP maps and neighboring franchisee densification rules before signing.",
    },
    {
      title: "Training & Support",
      detail: "Cleaner, CSR, and sales training quality heavily influences Year-1 ramp speed.",
    },
    {
      title: "National Marketing",
      detail: "Evaluate ad fund ROI, lead quality, and whether local co-op spend is required.",
    },
    {
      title: "Technology Platform",
      detail: "Scheduling, CRM, quoting, and recurring-billing software are core operating leverage.",
    },
    {
      title: "Recruitment Support",
      detail: "Cleaner turnover is a top constraint — ask how brands help hire and retain field staff.",
    },
    {
      title: "Vendor Discounts",
      detail: "Supply and equipment buying power can offset part of the royalty stack on recurring service mix.",
    },
  ],
  investmentGuideSubtitle:
    "Diligence checklist for cleaning franchise buyers evaluating capital, territories, and operating support.",
};
