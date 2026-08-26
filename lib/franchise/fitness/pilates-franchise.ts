import type { HomeServicesFranchiseGuideData } from "@/lib/franchise/beauty/beauty-franchise-guide-types";
import { buildFitnessFranchiseCalculatorCards } from "@/lib/franchise/fitness/franchise-calculators";
import { pilatesFranchiseRankingCards } from "@/lib/franchise/fitness/pilates-rankings";

function brandHref(slug: string) {
  return `/franchise/fitness/pilates/brands/${slug}/`;
}

export const pilatesFranchiseBrandSlugs = [
  "club-pilates",
  "solidcore",
  "kinrgy",
  "bodybar-pilates",
] as const;

export const pilatesFranchiseBrandNames: Record<(typeof pilatesFranchiseBrandSlugs)[number], string> = {
  "club-pilates": "Club Pilates",
  solidcore: "Solidcore",
  kinrgy: "Kinrgy",
  "bodybar-pilates": "BodyBar Pilates",
};

export const pilatesFranchiseGuide: HomeServicesFranchiseGuideData = {
  meta: {
    slug: "pilates",
    categoryLabel: "Fitness",
    shortName: "Pilates",
    title: "Best Pilates Franchises 2026: Costs, ROI & Top Brands",
    subtitle:
      "Compare the best Pilates franchises — Club Pilates, Solidcore, Kinrgy, and BodyBar. See $250K–$700K startup costs, franchise fees, royalties, profit margins, owner income, and ROI before you buy.",
    dataVintage: "2025–2026",
    sampleSize: "leading U.S. boutique Pilates and reformer studio franchises",
    kpiDashboardTitle: "Pilates Franchise KPIs",
    kpiDashboardSubtitle: "Directional ranges across national reformer, megaformer, and fusion Pilates studio franchise systems.",
    overviewTitle: "Best Pilates Franchises — Which Brand Fits You?",
    overviewSubtitle:
      "Match capital, studio format, and class model to the best Pilates franchise for first-time owners, multi-unit investors, or boutique reformer buyers.",
    compareTitle: "Compare the Best Pilates Franchises Side by Side",
    compareSubtitle:
      "Side-by-side snapshot of investment, fees, royalties, footprint, and buyer fit — open a brand for the full investment profile.",
    economicsSubtitle: "Industry-average operating ranges for mature U.S. Pilates studio franchise units after royalties.",
    economicsPanelSubtitle: "Typical single-unit performance for national reformer and boutique Pilates studio franchises.",
    startupSubtitle: "How Much Does a Pilates Franchise Cost? Startup Breakdown",
    startupPanelSubtitle:
      "Includes franchise fees, leasehold improvements, reformer equipment, technology, and opening working capital.",
    calculatorsSubtitle: "Model studio revenue, client lifetime value, instructor productivity, and valuation before you buy a Pilates franchise.",
    rankingsSubtitle:
      "Curated best Pilates franchises lists ranked by cost, ROI, growth, first-time fit, and profitability.",
    prosConsTitle: "Pilates Franchise vs Independent Studio",
    prosConsSubtitle: "Trade brand systems, national marketing, and instructor certification pipelines for royalties and less operating freedom.",
    shouldBuyHref: "#faq",
    shouldBuyBlurb:
      "Compare franchise studio systems and instructor pipelines against independent Pilates studio economics before you commit capital.",
    questionsSubtitle:
      "High-intent questions buyers ask when searching for the best Pilates franchises, costs, and owner earnings.",
    finalCtaTitle: "Compare the Best Pilates Franchise Opportunities",
    finalCtaSubtitle:
      "Find the best Pilates franchises by comparing startup costs, fees, revenue, ROI, and long-term profitability.",
  },
  heroCtas: [
    { label: "Compare Best Pilates Franchises", href: "#compare-brands", primary: true },
    { label: "Pilates Franchise ROI Calculator", href: "#calculators", primary: false },
  ],
  executiveKpis: [
    {
      id: "investment",
      label: "Average Initial Investment",
      value: "$420K",
      sublabel: "typical total launch range $250K–$700K",
      href: "#startup-costs",
      accent: "metric-valuation",
    },
    {
      id: "franchise-fee",
      label: "Average Franchise Fee",
      value: "$60K",
      sublabel: "typical range $40K–$70K",
      href: "#compare-brands",
      accent: "metric-valuation",
    },
    {
      id: "revenue",
      label: "Average Annual Revenue",
      value: "$750K",
      sublabel: "mature unit mid-point; range $400K–$1.4M+",
      href: "#economics",
      accent: "metric-revenue",
    },
    {
      id: "ebitda",
      label: "Average EBITDA Margin",
      value: "16%",
      sublabel: "typical 14–22% before owner add-backs",
      href: "#economics",
      accent: "metric-margin",
    },
    {
      id: "royalty",
      label: "Average Royalty Fee",
      value: "7–8%",
      sublabel: "plus marketing fund in most systems",
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
      value: "$110K",
      sublabel: "single-unit mid-point; multi-unit often higher",
      href: "#economics",
      accent: "metric-salary",
    },
    {
      id: "systems",
      label: "Number of Major Pilates Franchises",
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
      brand: "BodyBar Pilates",
      detail: "Smaller-footprint studios and leaner reformer counts keep leasehold improvements and equipment CapEx below the category median.",
    },
    {
      title: "Highest Revenue Potential",
      brand: "Club Pilates",
      detail: "The largest reformer studio network and deepest class scheduling systems drive the highest mature-unit revenue among major Pilates franchise systems.",
    },
    {
      title: "Fastest Payback",
      brand: "Club Pilates",
      detail: "Rapid membership ramp, packed class schedules, and lean instructor staffing help owners recover invested capital sooner.",
    },
    {
      title: "Best Brand Recognition",
      brand: "Club Pilates",
      detail: "The largest national footprint and years of category-defining marketing drive strong inbound studio demand.",
    },
    {
      title: "Best for First-Time Owners",
      brand: "Kinrgy",
      detail: "A fusion class format, moderate CapEx, and turnkey training reduce first-year execution risk for new studio operators.",
    },
    {
      title: "Best for Multi-Unit Operators",
      brand: "Club Pilates",
      detail: "Repeatable unit economics and a dense national network support operators planning multiple studio territories.",
    },
    {
      title: "Best Boutique Reformer Brand",
      brand: "Solidcore",
      detail: "Megaformer-based intensity classes drive premium pricing and strong member engagement versus traditional reformer studios.",
    },
    {
      title: "Best Low CapEx Studio",
      brand: "BodyBar Pilates",
      detail: "A leaner equipment package and smaller footprint make this an accessible entry point into boutique Pilates ownership.",
    },
  ],
  franchiseBrands: [
    {
      label: "Club Pilates",
      slug: "club-pilates",
      href: brandHref("club-pilates"),
      investment: "$350K – $650K",
      franchiseFee: "$60K",
      royalty: "8% + ads",
      units: "National",
      bestFor: "Reformer boutique multi-unit operators",
    },
    {
      label: "Solidcore",
      slug: "solidcore",
      href: brandHref("solidcore"),
      investment: "$400K – $700K",
      franchiseFee: "$60K+",
      royalty: "9% + ads",
      units: "National",
      bestFor: "Megaformer intensity studio operators",
    },
    {
      label: "Kinrgy",
      slug: "kinrgy",
      href: brandHref("kinrgy"),
      investment: "$280K – $550K",
      franchiseFee: "$45K – $60K",
      royalty: "7–8% + ads",
      units: "Expanding",
      bestFor: "First-timers / fusion studio format",
    },
    {
      label: "BodyBar Pilates",
      slug: "bodybar-pilates",
      href: brandHref("bodybar-pilates"),
      investment: "$250K – $480K",
      franchiseFee: "$40K – $55K",
      royalty: "6–8% + ads",
      units: "Expanding",
      bestFor: "Lower CapEx boutique studio buyers",
    },
  ],
  economicsRows: [
    { metric: "Annual Revenue", value: "$400K – $1.4M+" },
    { metric: "EBITDA Margin", value: "14 – 22%" },
    { metric: "Gross Margin", value: "60 – 78%" },
    { metric: "Net Profit Margin", value: "10 – 18% after royalties" },
    { metric: "Average Membership Fee", value: "$150 – $350 / month" },
    { metric: "Revenue per Member", value: "$1,800 – $4,200 / year" },
    { metric: "Average Members", value: "300 – 900 per studio" },
    { metric: "Member Retention", value: "55 – 75% annual" },
    { metric: "Instructor Cost %", value: "25 – 38% of revenue" },
    { metric: "Occupancy Cost %", value: "10 – 18% of revenue" },
  ],
  startupCostBreakdown: [
    { item: "Franchise Fee", range: "$40K – $70K", percent: "13%" },
    { item: "Leasehold Improvements", range: "$60K – $220K", percent: "28%" },
    { item: "Reformer/Equipment", range: "$50K – $180K", percent: "24%" },
    { item: "Technology", range: "$8K – $35K", percent: "5%" },
    { item: "Furniture", range: "$5K – $25K", percent: "3%" },
    { item: "Signage", range: "$4K – $20K", percent: "2%" },
    { item: "Pre-opening Marketing", range: "$10K – $40K", percent: "5%" },
    { item: "Working Capital", range: "$30K – $120K", percent: "15%" },
    { item: "Training", range: "$5K – $20K", percent: "2%" },
    { item: "Insurance", range: "$3K – $15K", percent: "1%" },
  ],
  startupCostTotal: {
    low: "$250K",
    median: "$420K",
    high: "$700K",
  },
  franchiseCalculators: buildFitnessFranchiseCalculatorCards("pilates"),
  franchiseRankings: pilatesFranchiseRankingCards,
  franchiseVsIndependent: [
    { factor: "Startup Cost", franchise: "$250K – $700K", independent: "$150K – $500K" },
    { factor: "Brand Recognition", franchise: "National brand traffic", independent: "Local brand you build" },
    { factor: "Marketing Support", franchise: "National ads + digital lead systems", independent: "Owner-led local marketing" },
    { factor: "Client Acquisition", franchise: "Brand app + referral systems", independent: "Self-sourced leads and word of mouth" },
    { factor: "Technology", franchise: "Proprietary booking/membership platform", independent: "Third-party studio management software" },
    { factor: "Royalty Fees", franchise: "Typically 6 – 10% + marketing", independent: "None" },
    { factor: "Operational Freedom", franchise: "Standardized class formats and branding", independent: "Full control over programming and pricing" },
    { factor: "Exit Value", franchise: "Often stronger branded comps", independent: "2.0× – 3.5× SDE typical" },
  ],
  businessQuestionFaqs: [
    {
      question: "How much does a Pilates franchise cost?",
      answer:
        "A Pilates franchise typically costs $250,000 to $700,000 in total investment, with many operators landing near $420,000. That includes the franchise fee ($40,000–$70,000), leasehold improvements, reformer or megaformer equipment, technology, furniture, signage, pre-opening marketing, training, insurance, and working capital. Lower-CapEx brands like BodyBar Pilates sit toward the low end, while intensity-format studios like Solidcore can push toward $700,000. Always rebuild Item 7 with local contractor and equipment quotes before you buy.",
    },
    {
      question: "What are the best Pilates franchises?",
      answer:
        "The best Pilates franchises depend on your goals. Club Pilates often suits multi-unit operators seeking the largest reformer studio network and highest revenue ceiling, while Solidcore fits buyers targeting premium, high-intensity megaformer classes. Kinrgy appeals to first-time owners wanting a fusion class format with turnkey training, and BodyBar Pilates suits capital-constrained buyers wanting a lower-CapEx boutique studio. Rank brands on after-fee cash flow, territory quality, and membership retention — not marketing claims alone.",
    },
    {
      question: "What is the best Pilates franchise to open?",
      answer:
        "Buyers searching for the best Pilates franchise to open should shortlist Club Pilates for scale, Solidcore for premium intensity revenue, Kinrgy for first-timer support, and BodyBar Pilates for lower CapEx. Rebuild each brand’s FDD Item 7 and Item 19 (if disclosed) with local rent and instructor labor before deciding.",
    },
    {
      question: "How profitable are Pilates franchises?",
      answer:
        "Well-run Pilates franchises are often profitable at roughly 10–18% net after royalties, with EBITDA commonly in the 14–22% range. Mature units generating $400,000–$1.4M+ can produce strong owner cash flow when class utilization and retention stay high and instructor and occupancy costs remain controlled. Profitability hinges on class fill rate, average package pricing, and retail attach more than brand awareness alone. Intensity-format studios can post higher revenue per member despite smaller total membership counts.",
    },
    {
      question: "How much do Pilates franchise owners make?",
      answer:
        "Pilates franchise owners typically make about $70,000 to $160,000 in total owner benefit on a mature single unit, with a mid-point near $110,000. Multi-unit operators can exceed $180,000–$300,000+ as shared management and scale improve margins. Year-one earnings are usually lower during membership ramp and instructor hiring. Model owner pay after royalties and marketing fund contributions — not at gross revenue.",
    },
    {
      question: "What are Pilates franchise royalty fees?",
      answer:
        "Pilates franchise royalty fees commonly run about 6–10% of revenue, plus a marketing fund contribution in most systems. Combined ongoing fees often total roughly 7–10% and are a key reason franchise net margins can trail well-run independents. Intensity-format brands like Solidcore tend to charge higher royalty rates than traditional reformer studios. Include the full fee stack in break-even and payback models from day one.",
    },
    {
      question: "How long is the payback period for a Pilates franchise?",
      answer:
        "The typical Pilates franchise payback period is three to five years of cumulative free cash flow returning invested capital. Monthly operating break-even can arrive sooner — often within 10–18 months — while full investment recovery takes longer for studios with heavier reformer CapEx. Faster payback favors strong membership ramp, high class utilization, and controlled build-out costs. Underinvesting in pre-opening marketing can slow the initial membership base and extend payback well beyond five years.",
    },
    {
      question: "Should I buy a franchise or open an independent Pilates studio?",
      answer:
        "Buy a Pilates franchise when you want brand recognition, proven class systems, instructor certification pipelines, national marketing, and vendor buying power on reformer equipment — and you accept royalties. Open an independent studio when you already have local demand, a distinct instructor talent pool, and want higher net margins without fees. Independents often launch cheaper and retain full pricing and programming freedom; franchises can ramp membership faster with playbooks and app-driven acquisition. Choose based on capital, experience, and whether brand traffic justifies the fee stack.",
    },
    {
      question: "How much working capital is required for a Pilates franchise?",
      answer:
        "Most Pilates franchises require $30,000 to $120,000+ of working capital inside total investment, and lenders often want additional liquidity beyond the franchise fee. Working capital covers instructor payroll, rent, royalties, and marketing during the membership ramp before package revenue stabilizes. Undercapitalization shows up quickly when a studio opens with a thin founding membership base. Keep reserves for the first 6–12 months while retention and referral flywheels build.",
    },
    {
      question: "Which Pilates franchise has the highest ROI?",
      answer:
        "The highest ROI Pilates franchise is usually a well-located studio with strong class utilization and disciplined instructor and occupancy costs — often a scaled Club Pilates or BodyBar Pilates unit given lower CapEx, or a high-demand Solidcore studio at full class capacity. Highest revenue brands are not always highest ROI if leasehold improvements and equipment inflate the denominator. Underwrite site-level cash-on-cash returns after royalties, not top-line revenue alone.",
    },
    {
      question: "How many members does a Pilates studio franchise need to break even?",
      answer:
        "Break-even membership counts vary by format — leaner boutique studios may break even with a couple hundred members given lower fixed costs, while larger reformer studios with more equipment often need 400–600+ members to cover rent, instructor payroll, and royalties. Average package pricing, retail attach, and local occupancy costs all shift the break-even threshold. Model your specific market's rent and instructor labor costs against realistic membership acquisition timelines rather than relying on national averages.",
    },
  ],
  relatedFranchiseIndustries: [
    { label: "Gym Franchises", href: "/franchise/fitness/gym/" },
    { label: "Yoga Studio Franchises", href: "/franchise/fitness/yoga/" },
    { label: "CrossFit Affiliates", href: "/franchise/fitness/crossfit/" },
    { label: "Swim School Franchises", href: "/franchise/fitness/swim-school/" },
  ],
  franchiseFaqs: [
    {
      question: "Which Pilates franchise is the most profitable?",
      answer:
        "Profitability varies more by location, class utilization, and cost discipline than brand alone. Boutique formats with high per-class pricing and lean instructor staffing often lead on margin.",
    },
    {
      question: "How much capital do I need?",
      answer:
        "Plan for roughly $250K–$700K total investment plus liquidity above the franchise fee. Many lenders want working capital for the first 10–18 months of membership ramp.",
    },
    {
      question: "Do I need fitness industry experience?",
      answer:
        "Not always — some franchise systems accept non-trade owners who hire certified instructors and managers and complete brand training. Existing studio operators often adapt faster.",
    },
    {
      question: "What financing options are available?",
      answer:
        "Common paths include SBA loans, conventional loans, equipment financing, and franchisor-approved lenders. Preserve cash for staffing and marketing beyond funded CapEx.",
    },
    {
      question: "How much can a Pilates franchise owner earn?",
      answer:
        "Mature single-unit owners often earn about $70K–$160K all-in, with multi-unit operators frequently exceeding $180K depending on scale and structure.",
    },
    {
      question: "What are the ongoing royalty fees?",
      answer:
        "Royalties commonly run 6–10% of revenue, often plus a marketing fund contribution. Confirm exact fees in the current FDD.",
    },
    {
      question: "Can I own multiple Pilates franchise locations?",
      answer:
        "Yes — multi-unit ownership is common in Pilates franchising when territorial rights and development schedules allow. Brands often prefer proven operators for additional territories.",
    },
    {
      question: "How long does it take to break even?",
      answer:
        "Many studios reach monthly operating break-even in roughly 10–18 months, while full investment payback often takes 3–5 years depending on CapEx and membership growth.",
    },
  ],
  investmentConsiderations: [
    {
      title: "Required Net Worth",
      detail: "Many Pilates franchise systems look for six-figure net worth with liquidity beyond the franchise fee alone.",
    },
    {
      title: "Liquid Capital",
      detail: "Keep cash for instructor payroll, rent, and marketing before package revenue stabilizes during the membership ramp.",
    },
    {
      title: "Franchise Fee",
      detail: "Typically $40K–$70K, though intensity-format brands may charge at or above the top of that range.",
    },
    {
      title: "Royalty Fee",
      detail: "Ongoing royalties of 6–10% plus a marketing fund contribution reduce net margin — underwrite them from day one.",
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
      detail: "Owner, manager, and instructor certification programs heavily influence Year-1 membership ramp speed.",
    },
    {
      title: "Site Selection",
      detail: "Population density, parking, visibility, and competitor saturation drive unit economics more than brand slogans.",
    },
    {
      title: "Equipment Financing",
      detail: "Reformer and megaformer equipment is often the largest single CapEx line — compare leasing versus purchase and vendor discount programs.",
    },
    {
      title: "Technology Platform",
      detail: "Booking, class scheduling, membership billing, and retention software are core operating leverage for member retention.",
    },
  ],
  investmentGuideSubtitle: "Diligence checklist for Pilates franchise buyers evaluating capital, territories, and operating support.",
  relatedTitle: "Related Fitness Franchises",
  relatedSubtitle: "Explore franchise economics across other fitness and studio formats.",
  shouldBuyCtaLabel: "Should You Buy a Pilates Franchise or Open an Independent Studio?",
  compareCtaLabel: "Compare Pilates Franchises",
  roiCtaLabel: "Franchise ROI Calculator",
  economicsTitle: "Pilates Franchise Economics",
  calculatorsTitle: "Pilates Franchise Calculators",
  rankingsTitle: "Best Pilates Franchises — Rankings & Shortlists",
  categoryId: "fitness",
};
