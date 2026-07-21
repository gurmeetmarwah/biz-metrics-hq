import type { HomeServicesFranchiseGuideData } from "@/lib/franchise/beauty/beauty-franchise-guide-types";
import { pestControlFranchiseRankingCards } from "@/lib/franchise/home-services/pest-control-rankings";

function brandHref(slug: string) {
  return `/franchise/home-services/pest-control/brands/${slug}/`;
}

export const pestControlFranchiseBrandSlugs = [
  "orkin",
  "terminix",
  "aptive-environmental",
  "mosquito-joe",
] as const;

export const pestControlFranchiseBrandNames: Record<(typeof pestControlFranchiseBrandSlugs)[number], string> = {
  orkin: "Orkin",
  terminix: "Terminix",
  "aptive-environmental": "Aptive Environmental",
  "mosquito-joe": "Mosquito Joe",
};

export const pestControlFranchiseGuide: HomeServicesFranchiseGuideData = {
  meta: {
    slug: "pest-control",
    categoryLabel: "Home Services",
    shortName: "Pest Control",
    title: "Pest Control Franchise Guide: Compare Costs, ROI, Profit Margins & Top Franchise Opportunities",
    subtitle:
      "Compare startup costs, franchise fees, royalties, owner earnings, investment requirements, and financial performance across leading pest control franchise systems.",
    dataVintage: "2025–2026",
    sampleSize: "leading U.S. pest control franchise systems",
    kpiDashboardTitle: "Pest Control Franchise KPIs",
    kpiDashboardSubtitle: "Directional ranges across national pest control franchise systems.",
    overviewTitle: "Which Pest Control Franchise Fits Your Goals?",
    overviewSubtitle: "Match capital, route-building experience, and multi-territory ambition to the right pest control franchise.",
    compareTitle: "Compare Pest Control Franchise Brands",
    compareSubtitle:
      "Side-by-side snapshot of investment, fees, royalties, footprint, and buyer fit — open a brand for the full investment profile.",
    economicsSubtitle:
      "Industry-average operating ranges for mature U.S. pest control franchise units after royalties.",
    economicsPanelSubtitle: "Typical single-unit performance for national pest control service franchises.",
    startupSubtitle:
      "Where the first $75K–$300K+ typically goes when launching a pest control franchise territory.",
    startupPanelSubtitle:
      "Includes franchise/territory fees, vehicles, chemicals/equipment, technology, and opening working capital.",
    calculatorsSubtitle: "Model route density, recurring revenue, margins, and valuation before you buy a pest control franchise.",
    rankingsSubtitle: "Curated lists for comparing pest control franchises by cost, ROI, growth, and owner fit.",
    prosConsTitle: "Franchise vs Independent Pest Control Business",
    prosConsSubtitle: "Trade brand systems, leads, and buying power for royalties and less operating freedom.",
    shouldBuyHref: "#faq",
    shouldBuyBlurb: "Compare brand economics against independent pest control benchmarks before you commit capital.",
    questionsSubtitle: "High-intent questions pest control franchise buyers ask before investing.",
    finalCtaTitle: "Compare Pest Control Franchise Opportunities",
    finalCtaSubtitle: "Find the right franchise by comparing startup costs, fees, revenue, ROI, and long-term profitability.",
  },
  heroCtas: [
    { label: "Compare Pest Control Franchises", href: "#compare-brands", primary: true },
    { label: "Franchise ROI Calculator", href: "#calculators", primary: false },
  ],
  executiveKpis: [
    {
      id: "investment",
      label: "Average Initial Investment",
      value: "$160K",
      sublabel: "typical total launch range $75K–$300K+",
      href: "#startup-costs",
      accent: "metric-valuation",
    },
    {
      id: "franchise-fee",
      label: "Average Franchise Fee",
      value: "$35K",
      sublabel: "typical range $20K–$45K",
      href: "#compare-brands",
      accent: "metric-valuation",
    },
    {
      id: "revenue",
      label: "Average Annual Revenue",
      value: "$950K",
      sublabel: "mature unit mid-point; range $400K–$2M+",
      href: "#economics",
      accent: "metric-revenue",
    },
    {
      id: "ebitda",
      label: "Average EBITDA Margin",
      value: "18%",
      sublabel: "typical 14–24% before owner add-backs",
      href: "#economics",
      accent: "metric-margin",
    },
    {
      id: "royalty",
      label: "Average Royalty Fee",
      value: "5–8%",
      sublabel: "plus marketing fund in many systems",
      href: "#economics",
      accent: "metric-margin",
    },
    {
      id: "payback",
      label: "Average Payback Period",
      value: "2.5–4.5 yrs",
      sublabel: "cash-on-cash to recover total investment",
      href: "#economics",
      accent: "metric-salary",
    },
    {
      id: "owner-income",
      label: "Estimated Owner Income",
      value: "$120K",
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
      brand: "Mosquito Joe / seasonal specialty",
      detail: "Seasonal, mosquito-only operations keep vehicle and equipment CapEx lower than full-service pest routes.",
    },
    {
      title: "Highest Revenue Potential",
      brand: "Orkin / scaled route density",
      detail: "Mature route-dense territories with strong recurring contracts push toward the top of the revenue band.",
    },
    {
      title: "Best Brand Recognition",
      brand: "Orkin / Terminix",
      detail: "Decades of national advertising support inbound lead flow and pricing power at the door.",
    },
    {
      title: "Best Training Program",
      brand: "Aptive Environmental",
      detail: "Structured sales, technician, and route-building training reduce first-year execution risk for new owners.",
    },
    {
      title: "Best for Existing Pest Control Operators",
      brand: "Orkin / Terminix",
      detail: "Brand conversion pathways often fit operators who already have trucks, technicians, and a local book of business.",
    },
    {
      title: "Best for First-Time Franchise Owners",
      brand: "Aptive Environmental",
      detail: "Turnkey sales and route systems help owners without prior pest control or franchise operating experience.",
    },
    {
      title: "Fastest Growing Network",
      brand: "Aptive Environmental",
      detail: "Aggressive door-to-door sales expansion and territory development continue to outpace legacy brands.",
    },
    {
      title: "Best Multi-Unit Opportunity",
      brand: "Orkin",
      detail: "Repeatable route economics and territory maps support operators planning multiple markets.",
    },
  ],
  franchiseBrands: [
    {
      label: "Orkin",
      slug: "orkin",
      href: brandHref("orkin"),
      investment: "$150K – $300K+",
      franchiseFee: "Program / franchise fees vary",
      royalty: "Varies",
      units: "National",
      bestFor: "Brand + recurring routes",
    },
    {
      label: "Terminix",
      slug: "terminix",
      href: brandHref("terminix"),
      investment: "$140K – $280K",
      franchiseFee: "Program / franchise fees vary",
      royalty: "Varies",
      units: "National",
      bestFor: "National brand density",
    },
    {
      label: "Aptive Environmental",
      slug: "aptive-environmental",
      href: brandHref("aptive-environmental"),
      investment: "$100K – $220K",
      franchiseFee: "$30K – $45K",
      royalty: "5–8% + ads",
      units: "Fast-growing",
      bestFor: "First-timers / growth",
    },
    {
      label: "Mosquito Joe",
      slug: "mosquito-joe",
      href: brandHref("mosquito-joe"),
      investment: "$80K – $175K",
      franchiseFee: "$25K – $40K",
      royalty: "6–8% + ads",
      units: "National",
      bestFor: "Seasonal mosquito specialty / lower CapEx",
    },
  ],
  economicsRows: [
    { metric: "Average Revenue", value: "$400K – $2M+" },
    { metric: "Gross Margin", value: "45 – 60%" },
    { metric: "EBITDA Margin", value: "14 – 24%" },
    { metric: "Net Profit Margin", value: "12 – 22% after royalties" },
    { metric: "Royalty Fee", value: "5 – 8%" },
    { metric: "Marketing Fee", value: "1 – 3%" },
    { metric: "Revenue per Route", value: "$120K – $220K" },
    { metric: "Recurring Revenue %", value: "60 – 85% of sales" },
    { metric: "Average Ticket", value: "$45 – $600" },
    { metric: "Customer Retention", value: "75 – 90% annual" },
  ],
  startupCostBreakdown: [
    { item: "Franchise Fee", range: "$20K – $45K", percent: "18%" },
    { item: "Territory Fee", range: "$5K – $25K", percent: "8%" },
    { item: "Vehicles", range: "$25K – $80K", percent: "24%" },
    { item: "Equipment & Chemicals", range: "$10K – $30K", percent: "10%" },
    { item: "Office Setup", range: "$5K – $20K", percent: "6%" },
    { item: "Working Capital", range: "$25K – $70K", percent: "22%" },
    { item: "Technology", range: "$3K – $15K", percent: "4%" },
    { item: "Training", range: "$2K – $10K", percent: "3%" },
    { item: "Marketing Launch", range: "$8K – $30K", percent: "4%" },
    { item: "Licensing & Certification", range: "$2K – $10K", percent: "1%" },
  ],
  startupCostTotal: {
    low: "$75K",
    median: "$160K",
    high: "$300K+",
  },
  franchiseCalculators: [
    {
      label: "Pest Control Route Density Calculator",
      description: "Benchmark technician route productivity and stop density against franchise unit ranges.",
      href: "/calculators/pest-control-route-density/",
    },
    {
      label: "Pest Control Recurring Revenue Calculator",
      description: "Model subscription and contract mix impact on annual recurring revenue.",
      href: "/calculators/pest-control-recurring-revenue/",
    },
    {
      label: "Pest Control Profit Margin Calculator",
      description: "Model net margin after technician payroll, chemicals, fleet, and royalties.",
      href: "/calculators/pest-control-profit-margin/",
    },
    {
      label: "Pest Control Valuation Calculator",
      description: "Estimate franchise or independent unit value using SDE multiples.",
      href: "/calculators/pest-control-valuation/",
    },
  ],
  franchiseRankings: pestControlFranchiseRankingCards,
  franchiseVsIndependent: [
    { factor: "Startup Cost", franchise: "$75K – $300K+", independent: "$30K – $150K" },
    { factor: "Brand Recognition", franchise: "National brand traffic", independent: "Local brand you build" },
    { factor: "Marketing Support", franchise: "National ads + lead systems", independent: "Owner-led local marketing" },
    { factor: "Royalty Fees", franchise: "Typically 5–8% + marketing", independent: "None" },
    { factor: "Lead Generation", franchise: "Brand + call-center options", independent: "Self-sourced leads" },
    { factor: "Buying Power", franchise: "Chemical & equipment discounts", independent: "Local distributor pricing" },
    { factor: "Profit Margin", franchise: "12 – 22% after fees", independent: "15 – 28% net" },
    { factor: "Business Valuation", franchise: "Often stronger branded comps", independent: "2.5× – 4.0× SDE typical" },
  ],
  businessQuestionFaqs: [
    {
      question: "How much does a pest control franchise cost?",
      answer:
        "A pest control franchise typically costs $75,000 to $300,000+ in total investment, with many operators landing near $160,000. That includes the franchise fee ($20,000–$45,000), territory fees, vehicles, equipment and chemicals, office setup, technology, launch marketing, licensing, and working capital. Seasonal or single-service concepts like mosquito control can land lower, while full-service route operations skew higher. Always rebuild Item 7 with local vehicle and licensing costs before you buy.",
    },
    {
      question: "What is the best pest control franchise?",
      answer:
        "The best pest control franchise depends on your goals. National brands such as Orkin and Terminix often suit buyers prioritizing brand recognition and recurring route density, while Aptive Environmental is frequently shortlisted by first-time or growth-focused franchisees for its sales-led systems. Mosquito Joe can fit buyers wanting a lower-CapEx, seasonal specialty. Rank brands on after-fee cash flow, territory quality, and technician recruiting — not marketing claims alone.",
    },
    {
      question: "How profitable are pest control franchises?",
      answer:
        "Well-run pest control franchises are often profitable at roughly 12–22% net after royalties, with EBITDA commonly in the 14–24% range. Mature units generating $400K–$2M+ can produce strong owner cash flow when route density stays high and recurring contracts grow. Profitability hinges on technician productivity, retention, and royalty load more than brand awareness alone. Top operators outperform through subscription mix, selling efficiency, and multi-territory leverage.",
    },
    {
      question: "How much do pest control franchise owners make?",
      answer:
        "Pest control franchise owners typically make about $75,000 to $175,000 in total owner benefit on a mature single unit, with a mid-point near $120,000. Multi-territory operators can exceed $200,000–$300,000+ as shared management and route density improve. Year-one earnings are usually lower during ramp and hiring. Model owner pay after royalties and advertising fees — not at gross revenue.",
    },
    {
      question: "What are pest control franchise royalty fees?",
      answer:
        "Pest control franchise royalty fees commonly run about 5–8% of revenue, plus a 1–3% marketing or brand fund in many systems. Combined ongoing fees often total roughly 6–10% and are the main reason franchise net margins can trail strong independents. Legacy national brands may use different fee structures than newer sales-led systems. Include the full fee stack in break-even and payback models from day one.",
    },
    {
      question: "How long is the payback period?",
      answer:
        "The typical pest control franchise payback period is two and a half to four and a half years of cumulative free cash flow returning invested capital. Monthly operating break-even can arrive sooner — often within 9–18 months — while full investment recovery takes longer after vehicle financing and royalties. Faster payback favors strong recurring contract books, high route density, and controlled CapEx. Soft territories or technician shortages can push payback beyond five years.",
    },
    {
      question: "Should I buy a franchise or start my own pest control company?",
      answer:
        "Buy a pest control franchise when you want brand recognition, lead systems, training, and chemical/equipment buying power — and you accept royalties. Start or grow an independent pest control company when you already have local demand, licensing, and want higher net margins without fees. Independents often launch cheaper; franchises can ramp faster with sales and route playbooks. Choose based on capital, experience, and whether exclusive territory and brand traffic justify the fee stack.",
    },
    {
      question: "How much working capital is required?",
      answer:
        "Most pest control franchises require $25,000 to $70,000 of working capital inside total investment, and lenders often want additional liquidity beyond the franchise fee. Working capital covers technician payroll, vehicle costs, chemical inventory, royalties, and marketing during the ramp. Undercapitalization shows up quickly when hiring lags or seasonal demand dips. Keep reserves for slower winter months when cash conversion softens.",
    },
    {
      question: "Which pest control franchise has the highest ROI?",
      answer:
        "The highest ROI pest control franchise is usually a strong-territory route business with high technician productivity and a growing recurring contract base — often a scaled Orkin or Aptive unit when CapEx stays controlled. Seasonal or lower-cost conversions can post excellent ROI if existing assets reduce cash invested. Highest revenue brands are not always highest ROI if royalties and fleet costs inflate the denominator. Underwrite site-level cash-on-cash returns after fees.",
    },
    {
      question: "Can existing pest control operators convert to a franchise?",
      answer:
        "Yes — many existing pest control operators convert into franchise programs to gain brand marketing, pricing systems, and recruiting support. Conversion CapEx is often lower when vehicles, licenses, and staff already exist. Watch for culture fit, fee stack economics, and territory conflicts with your current service area. Compare after-royalty margins carefully so brand benefits outweigh reduced bottom-line flexibility.",
    },
  ],
  relatedFranchiseIndustries: [
    { label: "HVAC Franchises", href: "/franchise/home-services/hvac/" },
    { label: "Plumbing Franchises", href: "/franchise/home-services/plumbing/" },
    { label: "Cleaning Franchises", href: "/franchise/home-services/cleaning/" },
  ],
  franchiseFaqs: [
    {
      question: "Which pest control franchise is the most profitable?",
      answer:
        "Profitability varies more by territory, route density, and recurring contract mix than brand alone. Mature units with strong subscription books often lead after royalties.",
    },
    {
      question: "How much capital do I need?",
      answer:
        "Plan for roughly $75K–$300K+ total investment plus liquidity above the franchise fee. Many lenders want working capital for the first 9–18 months of ramp.",
    },
    {
      question: "Do I need pest control experience?",
      answer:
        "Not always — some franchise systems accept non-trade owners who hire licensed technicians and complete brand training. Existing operators often adapt faster.",
    },
    {
      question: "What financing options are available?",
      answer:
        "Common paths include SBA loans, conventional loans, vehicle financing, and franchisor-approved lenders. Preserve cash for hiring and seasonality beyond funded CapEx.",
    },
    {
      question: "How much can a pest control franchise owner earn?",
      answer:
        "Mature single-unit owners often earn about $75K–$175K all-in, with multi-territory operators frequently exceeding $200K depending on scale and structure.",
    },
    {
      question: "What are the ongoing royalty fees?",
      answer:
        "Royalties commonly run 5–8% of revenue, often plus a 1–3% marketing fund. Confirm exact fees in the current FDD.",
    },
    {
      question: "Can I own multiple territories?",
      answer:
        "Yes — multi-territory ownership is common in pest control franchising when territorial rights and development schedules allow. Brands often prefer proven operators.",
    },
    {
      question: "How long does it take to break even?",
      answer:
        "Many units reach monthly operating break-even in roughly 9–18 months, while full investment payback often takes 2.5–4.5 years depending on CapEx and route density.",
    },
  ],
  investmentConsiderations: [
    {
      title: "Initial Investment",
      detail: "Plan for vehicles, chemicals, equipment, working capital, and launch marketing — not just the franchise fee.",
    },
    {
      title: "Required Net Worth",
      detail: "Many systems look for six-figure net worth with liquidity beyond the franchise fee alone.",
    },
    {
      title: "Liquid Capital",
      detail: "Keep cash for ramp payroll, seasonality, and slower winter months before recurring revenue stabilizes.",
    },
    {
      title: "Territory Size",
      detail: "Population density, pest pressure, and competitor saturation drive unit economics more than brand slogans.",
    },
    {
      title: "Exclusive Territories",
      detail: "Confirm exclusive ZIP maps and neighboring franchisee densification rules before signing.",
    },
    {
      title: "Training & Support",
      detail: "Technician licensing, sales, and route-building training quality heavily influence Year-1 ramp speed.",
    },
    {
      title: "National Marketing",
      detail: "Evaluate ad fund ROI, lead quality, and whether local co-op spend is required.",
    },
    {
      title: "Technology Platform",
      detail: "Routing, CRM, billing, and subscription management software are core operating leverage.",
    },
    {
      title: "Licensing & Compliance",
      detail: "State pesticide applicator licensing and insurance requirements vary — confirm timelines before opening.",
    },
    {
      title: "Vendor Discounts",
      detail: "Chemical and equipment buying power can offset part of the royalty stack on service mix.",
    },
  ],
  investmentGuideSubtitle: "Diligence checklist for pest control franchise buyers evaluating capital, territories, and operating support.",
  relatedTitle: "Related Home Service Franchises",
  relatedSubtitle: "Explore franchise economics across other residential trade and property-service categories.",
  shouldBuyCtaLabel: "Should You Buy a Pest Control Franchise?",
  compareCtaLabel: "Compare Pest Control Franchises",
  roiCtaLabel: "Franchise ROI Calculator",
  economicsTitle: "Pest Control Franchise Economics",
  calculatorsTitle: "Pest Control Franchise Calculators",
  rankingsTitle: "Top Pest Control Franchise Rankings",
};
