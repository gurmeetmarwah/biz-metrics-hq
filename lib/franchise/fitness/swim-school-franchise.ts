import type { HomeServicesFranchiseGuideData } from "@/lib/franchise/beauty/beauty-franchise-guide-types";
import { buildFitnessFranchiseCalculatorCards } from "@/lib/franchise/fitness/franchise-calculators";
import { swimSchoolFranchiseRankingCards } from "@/lib/franchise/fitness/swim-school-rankings";

function brandHref(slug: string) {
  return `/franchise/fitness/swim-school/brands/${slug}/`;
}

export const swimSchoolFranchiseBrandSlugs = [
  "british-swim-school",
  "goldfish-swim-school",
  "aqua-tots",
  "safesplash",
] as const;

export const swimSchoolFranchiseBrandNames: Record<(typeof swimSchoolFranchiseBrandSlugs)[number], string> = {
  "british-swim-school": "British Swim School",
  "goldfish-swim-school": "Goldfish Swim School",
  "aqua-tots": "Aqua-Tots Swim Schools",
  safesplash: "SafeSplash Swim Schools",
};

export const swimSchoolFranchiseGuide: HomeServicesFranchiseGuideData = {
  meta: {
    slug: "swim-school",
    categoryLabel: "Fitness",
    shortName: "Swim School",
    title:
      "Swim School Franchise Guide: Compare Costs, ROI, Profit Margins & Top Aquatic Franchise Opportunities",
    subtitle:
      "Compare startup costs, franchise fees, royalties, investment requirements, revenue potential, and owner earnings across leading swim school franchises.",
    dataVintage: "2025–2026",
    sampleSize: "leading U.S. learn-to-swim & aquatics franchises",
    kpiDashboardTitle: "Swim School Franchise KPIs",
    kpiDashboardSubtitle: "Directional ranges across host-pool and owned-pool learn-to-swim franchise systems.",
    overviewTitle: "Which Swim School Franchise Is Right for You?",
    overviewSubtitle: "Match capital, pool access model, and instructional format to the right swim school franchise.",
    compareTitle: "Compare Swim School Franchise Brands",
    compareSubtitle:
      "Side-by-side snapshot of investment, fees, royalties, footprint, and buyer fit — open a brand for the full investment profile.",
    economicsSubtitle: "Industry-average operating ranges for mature U.S. swim school franchise units after royalties.",
    economicsPanelSubtitle: "Typical single-unit performance for national learn-to-swim franchise systems.",
    startupSubtitle: "Where the first $200K–$1.2M+ typically goes when launching a swim school franchise location.",
    startupPanelSubtitle:
      "Includes franchise fees, pool build/leasehold, equipment, technology, and opening working capital.",
    calculatorsSubtitle: "Model lesson-based revenue, member lifetime value, and valuation before you buy a swim school franchise.",
    rankingsSubtitle: "Curated lists for comparing swim school franchises by cost, ROI, growth, and owner fit.",
    prosConsTitle: "Franchise vs Independent Swim School",
    prosConsSubtitle: "Trade brand curriculum, national marketing, and buying power for royalties and less operating freedom.",
    shouldBuyHref: "#faq",
    shouldBuyBlurb:
      "Compare franchise lesson-booking systems and curriculum support against independent swim school economics before you commit capital.",
    questionsSubtitle: "High-intent questions swim school franchise investors ask before buying.",
    finalCtaTitle: "Compare Swim School Franchise Opportunities",
    finalCtaSubtitle: "Find the right franchise by comparing startup costs, fees, revenue, ROI, and long-term profitability.",
  },
  heroCtas: [
    { label: "Compare Swim School Franchises", href: "#compare-brands", primary: true },
    { label: "Franchise ROI Calculator", href: "#calculators", primary: false },
  ],
  executiveKpis: [
    {
      id: "investment",
      label: "Average Initial Investment",
      value: "$450K",
      sublabel: "typical total launch range $200K–$1.2M+",
      href: "#startup-costs",
      accent: "metric-valuation",
    },
    {
      id: "franchise-fee",
      label: "Average Franchise Fee",
      value: "$55K",
      sublabel: "typical range $40K–$70K",
      href: "#compare-brands",
      accent: "metric-valuation",
    },
    {
      id: "revenue",
      label: "Average Annual Revenue",
      value: "$850K",
      sublabel: "mature unit mid-point; range $400K–$2M+",
      href: "#economics",
      accent: "metric-revenue",
    },
    {
      id: "ebitda",
      label: "Average EBITDA Margin",
      value: "20%",
      sublabel: "typical 15–25% before owner add-backs",
      href: "#economics",
      accent: "metric-margin",
    },
    {
      id: "royalty",
      label: "Average Royalty Fee",
      value: "6–10%",
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
      value: "$130K",
      sublabel: "single-unit mid-point; multi-unit often higher",
      href: "#economics",
      accent: "metric-salary",
    },
    {
      id: "systems",
      label: "Number of Major Swim School Franchises",
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
      brand: "British Swim School",
      detail: "Host-pool partnerships with hotels, gyms, and community centers avoid pool construction CapEx entirely.",
    },
    {
      title: "Highest Revenue Potential",
      brand: "Goldfish Swim School",
      detail: "Owned, climate-controlled indoor facilities support year-round premium pricing and the highest mature-unit revenue.",
    },
    {
      title: "Fastest Payback",
      brand: "British Swim School",
      detail: "Low CapEx and rapid lesson enrollment ramp on a host-pool model help owners recover invested capital sooner.",
    },
    {
      title: "Best Brand Recognition",
      brand: "Goldfish Swim School",
      detail: "A distinctive branded facility and national marketing drive strong inbound family enrollment demand.",
    },
    {
      title: "Best for First-Time Owners",
      brand: "British Swim School",
      detail: "Turnkey host-pool systems, instructor certification, and a proven curriculum reduce first-year execution risk for new operators.",
    },
    {
      title: "Best for Multi-Unit Operators",
      brand: "British Swim School",
      detail: "Repeatable host-pool economics and a dense network support operators planning multiple territories.",
    },
    {
      title: "Best Owned-Facility Brand",
      brand: "Aqua-Tots Swim Schools",
      detail: "A proven mid-size owned or leased pool footprint balances facility control with manageable total investment.",
    },
    {
      title: "Best Year-Round Swim School",
      brand: "Goldfish Swim School",
      detail: "Indoor, climate-controlled pools sustain lesson volume and retention through every season, unlike outdoor-dependent models.",
    },
  ],
  franchiseBrands: [
    {
      label: "British Swim School",
      slug: "british-swim-school",
      href: brandHref("british-swim-school"),
      investment: "$200K – $500K",
      franchiseFee: "$50K",
      royalty: "8% + ads",
      units: "National",
      bestFor: "Capital-efficient operators using host pools",
    },
    {
      label: "Goldfish Swim School",
      slug: "goldfish-swim-school",
      href: brandHref("goldfish-swim-school"),
      investment: "$1M – $1.5M+",
      franchiseFee: "$50K – $70K",
      royalty: "9 – 10% + ads",
      units: "National",
      bestFor: "Well-capitalized owners of standalone aquatic centers",
    },
    {
      label: "Aqua-Tots Swim Schools",
      slug: "aqua-tots",
      href: brandHref("aqua-tots"),
      investment: "$400K – $900K",
      franchiseFee: "$45K – $60K",
      royalty: "7 – 9% + ads",
      units: "National",
      bestFor: "Owners targeting a mid-market indoor facility",
    },
    {
      label: "SafeSplash Swim Schools",
      slug: "safesplash",
      href: brandHref("safesplash"),
      investment: "$250K – $600K",
      franchiseFee: "$40K – $55K",
      royalty: "6 – 8% + ads",
      units: "Expanding",
      bestFor: "Growth-stage operators entering emerging territories",
    },
  ],
  economicsRows: [
    { metric: "Annual Revenue", value: "$400K – $2M+" },
    { metric: "EBITDA Margin", value: "15 – 25%" },
    { metric: "Gross Margin", value: "60 – 80%" },
    { metric: "Net Profit Margin", value: "12 – 22% after royalties" },
    { metric: "Average Lesson Price", value: "$20 – $45 / lesson" },
    { metric: "Revenue per Enrolled Student", value: "$500 – $1,400 / year" },
    { metric: "Average Enrolled Students", value: "400 – 1,800+ per school" },
    { metric: "Student Retention", value: "65 – 85% annual" },
    { metric: "Instructor Cost %", value: "25 – 38% of revenue" },
    { metric: "Pool Occupancy Cost %", value: "8 – 22% of revenue" },
  ],
  startupCostBreakdown: [
    { item: "Franchise Fee", range: "$40K – $70K", percent: "10%" },
    { item: "Pool Build / Leasehold", range: "$0 – $650K", percent: "38%" },
    { item: "Equipment", range: "$15K – $120K", percent: "10%" },
    { item: "Technology", range: "$8K – $50K", percent: "4%" },
    { item: "Furniture", range: "$5K – $35K", percent: "2%" },
    { item: "Signage", range: "$3K – $25K", percent: "2%" },
    { item: "Pre-opening Marketing", range: "$10K – $60K", percent: "5%" },
    { item: "Working Capital", range: "$25K – $180K", percent: "14%" },
    { item: "Training", range: "$5K – $25K", percent: "2%" },
    { item: "Insurance", range: "$4K – $20K", percent: "2%" },
  ],
  startupCostTotal: {
    low: "$200K",
    median: "$450K",
    high: "$1.2M+",
  },
  franchiseCalculators: buildFitnessFranchiseCalculatorCards("swim-school"),
  franchiseRankings: swimSchoolFranchiseRankingCards,
  franchiseVsIndependent: [
    { factor: "Startup Cost", franchise: "$200K – $1.2M+", independent: "$75K – $800K" },
    { factor: "Brand Recognition", franchise: "National brand traffic", independent: "Local brand you build" },
    { factor: "Marketing Support", franchise: "National ads + digital lead systems", independent: "Owner-led local marketing" },
    { factor: "Enrollment Acquisition", franchise: "Brand app + referral systems", independent: "Self-sourced leads and word of mouth" },
    { factor: "Technology", franchise: "Proprietary lesson-booking & progress platform", independent: "Third-party scheduling software" },
    { factor: "Royalty Fees", franchise: "Typically 6 – 10% + marketing", independent: "None" },
    { factor: "Operational Freedom", franchise: "Standardized curriculum and branding", independent: "Full control over programming and pricing" },
    { factor: "Exit Value", franchise: "Often stronger branded comps", independent: "2.0× – 3.5× SDE typical" },
  ],
  businessQuestionFaqs: [
    {
      question: "How much does a swim school franchise cost?",
      answer:
        "A swim school franchise typically costs $200,000 to $1,200,000+ in total investment, with many operators landing near $450,000. That includes the franchise fee ($40,000–$70,000), pool build or leasehold costs, equipment, technology, furniture, signage, pre-opening marketing, training, insurance, and working capital. Host-pool models like British Swim School sit toward the low end since they avoid pool construction, while owned-facility brands like Goldfish Swim School can exceed $1M–$1.5M+. Always rebuild Item 7 with local contractor and facility quotes before you buy.",
    },
    {
      question: "What is the best swim school franchise to open?",
      answer:
        "The best swim school franchise depends on your goals. British Swim School often suits capital-efficient operators who want to run lessons through host-pool partnerships with hotels and gyms, while Goldfish Swim School fits buyers with larger capital who want the highest revenue ceiling and a standalone branded facility. Aqua-Tots Swim Schools appeals to owners targeting a mid-market owned or leased pool footprint, and SafeSplash / SwimLabs suits growth-stage operators entering emerging territories with a leaner entry cost. Rank brands on after-fee cash flow, pool access model, and enrollment retention — not marketing claims alone.",
    },
    {
      question: "How profitable are swim school franchises?",
      answer:
        "Well-run swim school franchises are often profitable at roughly 12–22% net after royalties, with EBITDA commonly in the 15–25% range. Mature units generating $400,000–$2M+ can produce strong owner cash flow when lesson retention stays high and instructor and pool occupancy costs remain controlled. Profitability hinges on enrolled-student volume, average lesson price, and class-to-instructor ratios more than brand awareness alone. Year-round indoor facilities can post steadier margins than seasonal, outdoor-dependent operators.",
    },
    {
      question: "How much do swim school franchise owners make?",
      answer:
        "Swim school franchise owners typically make about $80,000 to $180,000 in total owner benefit on a mature single unit, with a mid-point near $130,000. Multi-unit operators can exceed $200,000–$350,000+ as shared management and scale improve margins. Year-one earnings are usually lower during enrollment ramp and instructor hiring. Model owner pay after royalties and marketing fund contributions — not at gross revenue.",
    },
    {
      question: "What are swim school franchise royalty fees?",
      answer:
        "Swim school franchise royalty fees commonly run about 6–10% of revenue, plus a marketing fund contribution in most systems. Combined ongoing fees often total roughly 8–13% and are a key reason franchise net margins can trail well-run independents. Owned-facility brands with higher fixed costs tend to charge on the higher end of that range. Include the full fee stack in break-even and payback models from day one.",
    },
    {
      question: "How long is the payback period for a swim school franchise?",
      answer:
        "The typical swim school franchise payback period is three to five years of cumulative free cash flow returning invested capital. Monthly operating break-even can arrive sooner — often within 9–18 months for host-pool models — while full investment recovery takes longer for owned-facility brands with heavier CapEx. Faster payback favors strong enrollment ramp, high retention, and controlled instructor labor costs. Underinvesting in pre-opening marketing can slow the initial enrollment base and extend payback well beyond five years.",
    },
    {
      question: "Should I buy a franchise or open an independent swim school?",
      answer:
        "Buy a swim school franchise when you want brand recognition, a proven learn-to-swim curriculum, national marketing, and lesson-booking technology — and you accept royalties. Open an independent swim school when you already have local demand, an existing pool relationship, and want higher net margins without fees. Independents often launch cheaper and retain full pricing and programming freedom; franchises can ramp enrollment faster with playbooks and app-driven acquisition. Choose based on capital, pool access, and whether brand traffic justifies the fee stack.",
    },
    {
      question: "How much working capital is required for a swim school franchise?",
      answer:
        "Most swim school franchises require $25,000 to $180,000+ of working capital inside total investment, and lenders often want additional liquidity beyond the franchise fee. Working capital covers instructor payroll, pool rental or occupancy costs, royalties, and marketing during the enrollment ramp before lesson revenue stabilizes. Undercapitalization shows up quickly when a school opens with a thin founding enrollment base. Keep reserves for the first 6–12 months while retention and referral flywheels build.",
    },
    {
      question: "Which swim school franchise has the highest ROI?",
      answer:
        "The highest ROI swim school franchise is usually a well-located school with strong lesson enrollment density and disciplined instructor and occupancy costs — often a scaled British Swim School unit given lower CapEx from host pools, or a high-volume Goldfish Swim School facility at full enrollment. Highest revenue brands are not always highest ROI if pool construction and equipment inflate the denominator. Underwrite site-level cash-on-cash returns after royalties, not top-line revenue alone.",
    },
    {
      question: "How many students does a swim school franchise need to break even?",
      answer:
        "Break-even enrollment counts vary widely by format — host-pool models may break even with a few hundred enrolled students given lower fixed costs, while owned-facility brands often need well over a thousand students to cover rent or debt service, staffing, and royalties. Average lesson price, class size, and local pool occupancy costs all shift the break-even threshold. Model your specific market's facility and labor costs against realistic enrollment acquisition timelines rather than relying on national averages.",
    },
  ],
  relatedFranchiseIndustries: [
    { label: "Gym Franchises", href: "/franchise/fitness/gym/" },
    { label: "Pilates Franchises", href: "/franchise/fitness/pilates/" },
    { label: "Yoga Studio Franchises", href: "/franchise/fitness/yoga/" },
    { label: "CrossFit Affiliates", href: "/franchise/fitness/crossfit/" },
  ],
  franchiseFaqs: [
    {
      question: "Which swim school franchise is the most profitable?",
      answer:
        "Profitability varies more by location, enrollment density, and cost discipline than brand alone. Year-round indoor facilities with high per-lesson pricing and lean instructor scheduling often lead on margin.",
    },
    {
      question: "How much capital do I need?",
      answer:
        "Plan for roughly $200K–$1.2M+ total investment plus liquidity above the franchise fee. Many lenders want working capital for the first 9–18 months of enrollment ramp.",
    },
    {
      question: "Do I need swim instruction industry experience?",
      answer:
        "Not always — most franchise systems accept non-trade owners who hire certified instructors and managers and complete brand training. Existing aquatics operators often adapt faster.",
    },
    {
      question: "What financing options are available?",
      answer:
        "Common paths include SBA loans, conventional loans, equipment financing, and franchisor-approved lenders. Preserve cash for instructor staffing and marketing beyond funded CapEx.",
    },
    {
      question: "How much can a swim school franchise owner earn?",
      answer:
        "Mature single-unit owners often earn about $80K–$180K all-in, with multi-unit operators frequently exceeding $200K depending on scale and structure.",
    },
    {
      question: "What are the ongoing royalty fees?",
      answer:
        "Royalties commonly run 6–10% of revenue, often plus a marketing fund contribution. Confirm exact fees in the current FDD.",
    },
    {
      question: "Can I own multiple swim school franchise locations?",
      answer:
        "Yes — multi-unit ownership is common in swim school franchising when territorial rights and development schedules allow. Brands often prefer proven operators for additional territories.",
    },
    {
      question: "How long does it take to break even?",
      answer:
        "Many units reach monthly operating break-even in roughly 9–18 months, while full investment payback often takes 3–5 years depending on CapEx and enrollment growth.",
    },
  ],
  investmentConsiderations: [
    {
      title: "Required Net Worth",
      detail: "Many swim school franchise systems look for six-figure net worth with liquidity beyond the franchise fee alone.",
    },
    {
      title: "Liquid Capital",
      detail: "Keep cash for instructor payroll, pool costs, and marketing before lesson revenue stabilizes during the enrollment ramp.",
    },
    {
      title: "Franchise Fee",
      detail: "Typically $40K–$70K, though owned-facility brands may require larger development commitments that scale with territory.",
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
      title: "Pool Access Model",
      detail: "Confirm whether the brand uses host-pool partnerships, leased pool time, or an owned indoor facility — this drives most of the CapEx difference.",
    },
    {
      title: "Territory Protection",
      detail: "Confirm exclusive territory maps and neighboring franchisee densification rules before signing.",
    },
    {
      title: "Training",
      detail: "Owner, manager, and instructor certification programs heavily influence Year-1 enrollment ramp speed and water-safety standards.",
    },
    {
      title: "Site Selection",
      detail: "Population density, host-pool partner quality, and competitor saturation drive unit economics more than brand slogans.",
    },
    {
      title: "Technology Platform",
      detail: "Lesson scheduling, progress tracking, and billing software are core operating leverage for retention.",
    },
  ],
  investmentGuideSubtitle: "Diligence checklist for swim school franchise buyers evaluating capital, pool access, and operating support.",
  relatedTitle: "Related Fitness Franchises",
  relatedSubtitle: "Explore franchise economics across other fitness and studio formats.",
  shouldBuyCtaLabel: "Should You Buy a Swim School Franchise or Open an Independent Swim School?",
  compareCtaLabel: "Compare Swim School Franchises",
  roiCtaLabel: "Franchise ROI Calculator",
  economicsTitle: "Swim School Franchise Economics",
  calculatorsTitle: "Swim School Franchise Calculators",
  rankingsTitle: "Top Swim School Franchise Rankings",
  categoryId: "fitness",
};
