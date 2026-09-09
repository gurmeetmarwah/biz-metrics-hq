import type { HomeServicesFranchiseGuideData } from "@/lib/franchise/beauty/beauty-franchise-guide-types";
import { buildFitnessFranchiseCalculatorCards } from "@/lib/franchise/fitness/franchise-calculators";
import { gymFranchiseRankingCards } from "@/lib/franchise/fitness/gym-rankings";

function brandHref(slug: string) {
  return `/franchise/fitness/gym/brands/${slug}/`;
}

export const gymFranchiseBrandSlugs = [
  "anytime-fitness",
  "planet-fitness",
  "orangetheory-fitness",
  "snap-fitness",
] as const;

export const gymFranchiseBrandNames: Record<(typeof gymFranchiseBrandSlugs)[number], string> = {
  "anytime-fitness": "Anytime Fitness",
  "planet-fitness": "Planet Fitness",
  "orangetheory-fitness": "Orangetheory Fitness",
  "snap-fitness": "Snap Fitness",
};

export const gymFranchiseGuide: HomeServicesFranchiseGuideData = {
  meta: {
    slug: "gym",
    categoryLabel: "Fitness",
    shortName: "Gym",
    title: "Best Gym Franchises 2026: Costs, ROI & Top Brands",
    subtitle:
      "Compare the best gym franchises — Anytime Fitness, Planet Fitness, Orangetheory, and Snap Fitness. See startup costs, franchise fees, royalties, profit margins, owner income, and ROI before you buy.",
    dataVintage: "2025–2026",
    sampleSize: "leading U.S. gym & boutique fitness franchises",
    kpiDashboardTitle: "Gym Franchise KPIs",
    kpiDashboardSubtitle: "Directional ranges across national 24/7 gym clubs and boutique fitness franchise systems.",
    overviewTitle: "Best Gym Franchises — Which Brand Fits You?",
    overviewSubtitle: "Match capital, real estate footprint, and membership model to the right gym franchise.",
    compareTitle: "Compare the Best Gym Franchises Side by Side",
    compareSubtitle:
      "Side-by-side snapshot of investment, fees, royalties, footprint, and buyer fit — open a brand for the full investment profile.",
    economicsSubtitle: "Industry-average operating ranges for mature U.S. gym franchise units after royalties.",
    economicsPanelSubtitle: "Typical single-unit performance for national gym and boutique fitness franchises.",
    startupSubtitle: "Where the first $200K–$4M+ typically goes when launching a gym franchise location.",
    startupPanelSubtitle:
      "Includes franchise fees, leasehold improvements, gym equipment, technology, and opening working capital.",
    calculatorsSubtitle: "Model membership growth, member lifetime value, churn, and valuation before you buy a gym franchise.",
    rankingsSubtitle: "Curated best gym franchises lists ranked by cost, ROI, growth, and owner fit.",
    prosConsTitle: "Franchise vs Independent Gym",
    prosConsSubtitle: "Trade brand systems, national marketing, and buying power for royalties and less operating freedom.",
    shouldBuyHref: "#faq",
    shouldBuyBlurb:
      "Compare franchise membership systems and buying power against independent gym economics before you commit capital.",
    questionsSubtitle: "High-intent questions gym franchise investors ask before buying.",
    finalCtaTitle: "Compare Gym Franchise Opportunities",
    finalCtaSubtitle: "Find the right franchise by comparing startup costs, fees, revenue, ROI, and long-term profitability.",
  },
  heroCtas: [
    { label: "Compare Gym Franchises", href: "#compare-brands", primary: true },
    { label: "Franchise ROI Calculator", href: "#calculators", primary: false },
  ],
  executiveKpis: [
    {
      id: "investment",
      label: "Average Initial Investment",
      value: "$550K",
      sublabel: "typical total launch range $200K–$4M+",
      href: "#startup-costs",
      accent: "metric-valuation",
    },
    {
      id: "franchise-fee",
      label: "Average Franchise Fee",
      value: "$40K",
      sublabel: "typical range $25K–$60K",
      href: "#compare-brands",
      accent: "metric-valuation",
    },
    {
      id: "revenue",
      label: "Average Annual Revenue",
      value: "$1.1M",
      sublabel: "mature unit mid-point; range $400K–$3M+",
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
      value: "3–6 yrs",
      sublabel: "cash-on-cash to recover total investment",
      href: "#economics",
      accent: "metric-salary",
    },
    {
      id: "owner-income",
      label: "Estimated Owner Income",
      value: "$135K",
      sublabel: "single-unit mid-point; multi-unit often higher",
      href: "#economics",
      accent: "metric-salary",
    },
    {
      id: "systems",
      label: "Number of Major Gym Franchises",
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
      brand: "Snap Fitness",
      detail: "Smaller-box 24/7 clubs keep leasehold improvements and equipment CapEx well below the category median.",
    },
    {
      title: "Highest Revenue Potential",
      brand: "Planet Fitness",
      detail: "High-volume, low-price clubs at scale generate the largest mature-unit revenue among major gym franchise systems.",
    },
    {
      title: "Fastest Payback",
      brand: "Anytime Fitness",
      detail: "Rapid membership ramp and lean staffing on a compact footprint help owners recover invested capital sooner.",
    },
    {
      title: "Best Brand Recognition",
      brand: "Planet Fitness",
      detail: "Decades of national advertising and a distinctive positioning drive strong inbound membership demand.",
    },
    {
      title: "Best for First-Time Owners",
      brand: "Anytime Fitness",
      detail: "Turnkey systems, staffing playbooks, and a proven 24/7 model reduce first-year execution risk for new operators.",
    },
    {
      title: "Best for Multi-Unit Operators",
      brand: "Anytime Fitness",
      detail: "Repeatable unit economics and a dense global network support operators planning multiple territories.",
    },
    {
      title: "Best Boutique Fitness Brand",
      brand: "Orangetheory Fitness",
      detail: "Class-based, heart-rate-tracked workouts drive premium pricing and strong member engagement versus big-box gyms.",
    },
    {
      title: "Best 24/7 Gym Franchise",
      brand: "Anytime Fitness / Snap Fitness",
      detail: "Both brands built their model around unstaffed, round-the-clock access with lean fixed labor costs.",
    },
  ],
  franchiseBrands: [
    {
      label: "Anytime Fitness",
      slug: "anytime-fitness",
      href: brandHref("anytime-fitness"),
      investment: "$300K – $700K",
      franchiseFee: "$35K – $45K",
      royalty: "5% + ads",
      units: "National (4,000+)",
      bestFor: "24/7 multi-unit operators",
    },
    {
      label: "Planet Fitness",
      slug: "planet-fitness",
      href: brandHref("planet-fitness"),
      investment: "$1.5M – $4M+",
      franchiseFee: "Area/dev varies",
      royalty: "~7% + ads",
      units: "National",
      bestFor: "High-volume low-price clubs",
    },
    {
      label: "Orangetheory Fitness",
      slug: "orangetheory-fitness",
      href: brandHref("orangetheory-fitness"),
      investment: "$500K – $1.2M",
      franchiseFee: "$60K",
      royalty: "8% + ads",
      units: "National",
      bestFor: "Boutique studio operators",
    },
    {
      label: "Snap Fitness",
      slug: "snap-fitness",
      href: brandHref("snap-fitness"),
      investment: "$200K – $500K",
      franchiseFee: "$25K – $40K",
      royalty: "5–6% + ads",
      units: "National",
      bestFor: "Lower CapEx 24/7 gyms",
    },
  ],
  economicsRows: [
    { metric: "Annual Revenue", value: "$400K – $3M+" },
    { metric: "EBITDA Margin", value: "12 – 22%" },
    { metric: "Gross Margin", value: "55 – 75%" },
    { metric: "Net Profit Margin", value: "8 – 18% after royalties" },
    { metric: "Average Membership Fee", value: "$10 – $159 / month" },
    { metric: "Revenue per Member", value: "$180 – $700 / year" },
    { metric: "Average Members", value: "1,500 – 8,000+ per club" },
    { metric: "Member Retention", value: "60 – 80% annual" },
    { metric: "Staff Cost %", value: "12 – 25% of revenue" },
    { metric: "Occupancy Cost %", value: "10 – 20% of revenue" },
  ],
  startupCostBreakdown: [
    { item: "Franchise Fee", range: "$25K – $60K", percent: "6%" },
    { item: "Leasehold Improvements", range: "$75K – $1.8M", percent: "35%" },
    { item: "Gym Equipment", range: "$60K – $1.2M", percent: "25%" },
    { item: "Technology", range: "$10K – $80K", percent: "4%" },
    { item: "Furniture", range: "$8K – $60K", percent: "3%" },
    { item: "Signage", range: "$5K – $40K", percent: "2%" },
    { item: "Pre-opening Marketing", range: "$10K – $75K", percent: "4%" },
    { item: "Working Capital", range: "$25K – $250K", percent: "12%" },
    { item: "Training", range: "$3K – $20K", percent: "1%" },
    { item: "Insurance", range: "$4K – $25K", percent: "1%" },
  ],
  startupCostTotal: {
    low: "$200K",
    median: "$550K",
    high: "$4M+",
  },
  franchiseCalculators: buildFitnessFranchiseCalculatorCards("gym"),
  franchiseRankings: gymFranchiseRankingCards,
  franchiseVsIndependent: [
    { factor: "Startup Cost", franchise: "$200K – $4M+", independent: "$100K – $1M" },
    { factor: "Brand Recognition", franchise: "National brand traffic", independent: "Local brand you build" },
    { factor: "Marketing Support", franchise: "National ads + digital lead systems", independent: "Owner-led local marketing" },
    { factor: "Member Acquisition", franchise: "Brand app + referral systems", independent: "Self-sourced leads and word of mouth" },
    { factor: "Technology", franchise: "Proprietary member/booking platform", independent: "Third-party gym management software" },
    { factor: "Royalty Fees", franchise: "Typically 5 – 9% + marketing", independent: "None" },
    { factor: "Operational Freedom", franchise: "Standardized systems and branding", independent: "Full control over programming and pricing" },
    { factor: "Exit Value", franchise: "Often stronger branded comps", independent: "2.0× – 3.5× SDE typical" },
  ],
  businessQuestionFaqs: [
    {
      question: "How much does a gym franchise cost?",
      answer:
        "A gym franchise typically costs $200,000 to $4,000,000+ in total investment, with many operators landing near $550,000. That includes the franchise fee ($25,000–$60,000), leasehold improvements, gym equipment, technology, furniture, signage, pre-opening marketing, training, insurance, and working capital. Compact 24/7 clubs like Snap Fitness sit toward the low end, while large-format low-price clubs like Planet Fitness can exceed $1.5M–$4M+. Always rebuild Item 7 with local contractor and equipment quotes before you buy.",
    },
    {
      question: "What are the best gym franchises?",
      answer:
        "The best gym franchises depend on your goals. Anytime Fitness often suits multi-unit operators seeking a compact 24/7 footprint and lean staffing, while Planet Fitness fits buyers with larger capital who want the highest revenue ceiling and strongest brand recognition. Orangetheory Fitness appeals to boutique studio operators targeting premium, class-based memberships, and Snap Fitness suits capital-constrained buyers wanting a lower-CapEx 24/7 club. Rank brands on after-fee cash flow, territory quality, and membership retention — not marketing claims alone.",
    },
    {
      question: "How profitable are gym franchises?",
      answer:
        "Well-run gym franchises are often profitable at roughly 8–18% net after royalties, with EBITDA commonly in the 12–22% range. Mature units generating $400,000–$3M+ can produce strong owner cash flow when member retention stays high and staff and occupancy costs remain controlled. Profitability hinges on membership volume, average dues, and ancillary revenue (personal training, retail) more than brand awareness alone. Boutique studio formats can post higher margins per member despite lower total volume.",
    },
    {
      question: "How much do gym franchise owners make?",
      answer:
        "Gym franchise owners typically make about $80,000 to $200,000 in total owner benefit on a mature single unit, with a mid-point near $135,000. Multi-unit operators can exceed $250,000–$400,000+ as shared management and scale improve margins. Year-one earnings are usually lower during membership ramp and staffing buildout. Model owner pay after royalties and marketing fund contributions — not at gross revenue.",
    },
    {
      question: "What are gym franchise royalty fees?",
      answer:
        "Gym franchise royalty fees commonly run about 5–9% of revenue, plus a marketing fund contribution in most systems. Combined ongoing fees often total roughly 7–12% and are a key reason franchise net margins can trail well-run independents. Boutique fitness brands like Orangetheory tend to charge higher royalty rates than large-format low-price clubs. Include the full fee stack in break-even and payback models from day one.",
    },
    {
      question: "How long is the payback period for a gym franchise?",
      answer:
        "The typical gym franchise payback period is three to six years of cumulative free cash flow returning invested capital. Monthly operating break-even can arrive sooner — often within 12–24 months — while full investment recovery takes longer for large-format clubs with heavier CapEx. Faster payback favors strong membership ramp, high retention, and controlled build-out costs. Underinvesting in pre-opening marketing can slow the initial membership base and extend payback well beyond six years.",
    },
    {
      question: "Should I buy a franchise or open an independent gym?",
      answer:
        "Buy a gym franchise when you want brand recognition, proven membership systems, national marketing, and vendor buying power on equipment — and you accept royalties. Open an independent gym when you already have local demand, a distinct concept, and want higher net margins without fees. Independents often launch cheaper and retain full pricing and programming freedom; franchises can ramp membership faster with playbooks and app-driven acquisition. Choose based on capital, experience, and whether brand traffic justifies the fee stack.",
    },
    {
      question: "How much working capital is required for a gym franchise?",
      answer:
        "Most gym franchises require $25,000 to $250,000+ of working capital inside total investment, and lenders often want additional liquidity beyond the franchise fee. Working capital covers staff payroll, rent, royalties, and marketing during the membership ramp before dues revenue stabilizes. Undercapitalization shows up quickly when a club opens with a thin founding membership base. Keep reserves for the first 6–18 months while retention and referral flywheels build.",
    },
    {
      question: "Which gym franchise has the highest ROI?",
      answer:
        "The highest ROI gym franchise is usually a well-located club with strong membership density and disciplined staffing and occupancy costs — often a scaled Anytime Fitness or Snap Fitness unit given lower CapEx, or a high-volume Planet Fitness club at full membership. Highest revenue brands are not always highest ROI if leasehold improvements and equipment inflate the denominator. Underwrite site-level cash-on-cash returns after royalties, not top-line revenue alone.",
    },
    {
      question: "How many members does a gym franchise need to break even?",
      answer:
        "Break-even membership counts vary widely by format — compact 24/7 clubs may break even with several hundred members given lower fixed costs, while large-format low-price clubs often need several thousand members to cover rent, staffing, and royalties. Average dues, ancillary revenue, and local occupancy costs all shift the break-even threshold. Model your specific market's rent and labor costs against realistic membership acquisition timelines rather than relying on national averages.",
    },
  ],
  relatedFranchiseIndustries: [
    { label: "Pilates Franchises", href: "/franchise/fitness/pilates/" },
    { label: "Yoga Studio Franchises", href: "/franchise/fitness/yoga/" },
    { label: "CrossFit Affiliates", href: "/franchise/fitness/crossfit/" },
    { label: "Swim School Franchises", href: "/franchise/fitness/swim-school/" },
  ],
  franchiseFaqs: [
    {
      question: "Which gym franchise is the most profitable?",
      answer:
        "Profitability varies more by location, membership density, and cost discipline than brand alone. Boutique formats with high per-member pricing and lean staffing often lead on margin.",
    },
    {
      question: "How much capital do I need?",
      answer:
        "Plan for roughly $200K–$4M+ total investment plus liquidity above the franchise fee. Many lenders want working capital for the first 12–24 months of membership ramp.",
    },
    {
      question: "Do I need fitness industry experience?",
      answer:
        "Not always — some franchise systems accept non-trade owners who hire certified trainers and managers and complete brand training. Existing gym operators often adapt faster.",
    },
    {
      question: "What financing options are available?",
      answer:
        "Common paths include SBA loans, conventional loans, equipment financing, and franchisor-approved lenders. Preserve cash for staffing and marketing beyond funded CapEx.",
    },
    {
      question: "How much can a gym franchise owner earn?",
      answer:
        "Mature single-unit owners often earn about $80K–$200K all-in, with multi-unit operators frequently exceeding $250K depending on scale and structure.",
    },
    {
      question: "What are the ongoing royalty fees?",
      answer:
        "Royalties commonly run 5–9% of revenue, often plus a marketing fund contribution. Confirm exact fees in the current FDD.",
    },
    {
      question: "Can I own multiple gym franchise locations?",
      answer:
        "Yes — multi-unit ownership is common in gym franchising when territorial rights and development schedules allow. Brands often prefer proven operators for additional territories.",
    },
    {
      question: "How long does it take to break even?",
      answer:
        "Many units reach monthly operating break-even in roughly 12–24 months, while full investment payback often takes 3–6 years depending on CapEx and membership growth.",
    },
  ],
  investmentConsiderations: [
    {
      title: "Required Net Worth",
      detail: "Many gym franchise systems look for six- to seven-figure net worth with liquidity beyond the franchise fee alone.",
    },
    {
      title: "Liquid Capital",
      detail: "Keep cash for staffing, rent, and marketing before dues revenue stabilizes during the membership ramp.",
    },
    {
      title: "Franchise Fee",
      detail: "Typically $25K–$60K, though large-format low-price clubs may use area development fees that scale with territory.",
    },
    {
      title: "Royalty Fee",
      detail: "Ongoing royalties of 5–9% plus a marketing fund contribution reduce net margin — underwrite them from day one.",
    },
    {
      title: "Marketing Fund",
      detail: "Evaluate national ad fund ROI, app-driven lead flow, and whether local co-op spend is required.",
    },
    {
      title: "Territory Protection",
      detail: "Confirm exclusive territory maps and neighboring franchisee densification rules before signing.",
    },
    {
      title: "Training",
      detail: "Owner, manager, and trainer certification programs heavily influence Year-1 membership ramp speed.",
    },
    {
      title: "Site Selection",
      detail: "Population density, parking, visibility, and competitor saturation drive unit economics more than brand slogans.",
    },
    {
      title: "Equipment Financing",
      detail: "Gym equipment is often the largest single CapEx line — compare leasing versus purchase and vendor discount programs.",
    },
    {
      title: "Technology Platform",
      detail: "Member management, booking, access-control, and billing software are core operating leverage for retention.",
    },
  ],
  investmentGuideSubtitle: "Diligence checklist for gym franchise buyers evaluating capital, territories, and operating support.",
  relatedTitle: "Related Fitness Franchises",
  relatedSubtitle: "Explore franchise economics across other fitness and studio formats.",
  shouldBuyCtaLabel: "Should You Buy a Gym Franchise or Open an Independent Gym?",
  compareCtaLabel: "Compare Gym Franchises",
  roiCtaLabel: "Franchise ROI Calculator",
  economicsTitle: "Gym Franchise Economics",
  calculatorsTitle: "Gym Franchise Calculators",
  rankingsTitle: "Best Gym Franchises — Rankings & Shortlists",
  categoryId: "fitness",
};
