import type { HomeServicesFranchiseGuideData } from "@/lib/franchise/beauty/beauty-franchise-guide-types";
import { buildFitnessFranchiseCalculatorCards } from "@/lib/franchise/fitness/franchise-calculators";
import { yogaFranchiseRankingCards } from "@/lib/franchise/fitness/yoga-rankings";

function brandHref(slug: string) {
  return `/franchise/fitness/yoga/brands/${slug}/`;
}

export const yogaFranchiseBrandSlugs = [
  "yoga-six",
  "hotworx",
  "corepower-yoga",
  "yoga-pod",
] as const;

export const yogaFranchiseBrandNames: Record<(typeof yogaFranchiseBrandSlugs)[number], string> = {
  "yoga-six": "YogaSix",
  hotworx: "Hotworx",
  "corepower-yoga": "CorePower Yoga",
  "yoga-pod": "Yoga Pod",
};

export const yogaFranchiseGuide: HomeServicesFranchiseGuideData = {
  meta: {
    slug: "yoga",
    categoryLabel: "Fitness",
    shortName: "Yoga",
    title: "Top Yoga Franchises 2026: Costs, ROI & Best Brands to Buy",
    subtitle:
      "See the top yoga franchises of 2026 — YogaSix, Hotworx, CorePower Yoga, and Yoga Pod ranked by cost, fees, royalties, profit margins, owner income, and ROI.",
    dataVintage: "2025–2026",
    sampleSize: "leading U.S. yoga & boutique studio franchises",
    kpiDashboardTitle: "Yoga Franchise KPIs",
    kpiDashboardSubtitle: "Directional ranges across national boutique yoga studio franchise systems.",
    overviewTitle: "Which of the Top Yoga Franchises Is Right for You?",
    overviewSubtitle: "Match capital, class format, and membership model to the right yoga studio franchise.",
    compareTitle: "Compare Top Yoga Franchises Side by Side",
    compareSubtitle:
      "Side-by-side snapshot of investment, fees, royalties, footprint, and buyer fit — open a brand for the full investment profile.",
    economicsSubtitle: "Industry-average operating ranges for mature U.S. yoga studio franchise units after royalties.",
    economicsPanelSubtitle: "Typical single-unit performance for national yoga and boutique studio franchises.",
    startupSubtitle: "Where the first $150K–$550K typically goes when launching a yoga franchise studio.",
    startupPanelSubtitle:
      "Includes franchise fees, leasehold improvements, studio buildout, technology, and opening working capital.",
    calculatorsSubtitle: "Model membership revenue, class capacity, client lifetime value, and valuation before you buy a yoga franchise.",
    rankingsSubtitle:
      "Curated rankings of the top yoga franchises by cost, ROI, growth, and owner fit — start with our 2026 leaderboard.",
    prosConsTitle: "Franchise vs Independent Yoga Studio",
    prosConsSubtitle: "Trade brand systems, national marketing, and teacher training pipelines for royalties and less operating freedom.",
    shouldBuyHref: "#faq",
    shouldBuyBlurb:
      "Compare franchise membership systems and teacher training pipelines against independent yoga studio economics before you commit capital.",
    questionsSubtitle: "High-intent questions yoga franchise investors ask before buying the top brands.",
    finalCtaTitle: "Compare the Top Yoga Franchise Opportunities",
    finalCtaSubtitle: "Find the right franchise by comparing startup costs, fees, revenue, ROI, and long-term profitability.",
  },
  heroCtas: [
    { label: "See Top Yoga Franchises", href: "#compare-brands", primary: true },
    { label: "Franchise ROI Calculator", href: "#calculators", primary: false },
  ],
  executiveKpis: [
    {
      id: "investment",
      label: "Average Initial Investment",
      value: "$320K",
      sublabel: "typical total launch range $150K–$550K",
      href: "#startup-costs",
      accent: "metric-valuation",
    },
    {
      id: "franchise-fee",
      label: "Average Franchise Fee",
      value: "$45K",
      sublabel: "typical range $30K–$60K",
      href: "#compare-brands",
      accent: "metric-valuation",
    },
    {
      id: "revenue",
      label: "Average Annual Revenue",
      value: "$550K",
      sublabel: "mature unit mid-point; range $300K–$1.2M+",
      href: "#economics",
      accent: "metric-revenue",
    },
    {
      id: "ebitda",
      label: "Average EBITDA Margin",
      value: "16%",
      sublabel: "typical 13–20% before owner add-backs",
      href: "#economics",
      accent: "metric-margin",
    },
    {
      id: "royalty",
      label: "Average Royalty Fee",
      value: "6–9%",
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
      value: "$100K",
      sublabel: "single-unit mid-point; multi-unit often higher",
      href: "#economics",
      accent: "metric-salary",
    },
    {
      id: "systems",
      label: "Number of Major Yoga Franchises",
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
      brand: "Hotworx",
      detail: "Infrared sauna pods and virtual instructor-led workouts keep leasehold improvements and staffing CapEx well below the category median.",
    },
    {
      title: "Highest Revenue Potential",
      brand: "YogaSix",
      detail: "The largest boutique yoga franchise network drives the highest mature-unit revenue through membership volume and retail attach.",
    },
    {
      title: "Fastest Payback",
      brand: "Hotworx",
      detail: "Lean staffing and a 24/7 self-guided format help owners recover invested capital sooner than staffed studio models.",
    },
    {
      title: "Best Brand Recognition",
      brand: "CorePower Yoga",
      detail: "A premium national footprint and deep teacher training pipeline drive strong inbound membership demand.",
    },
    {
      title: "Best for First-Time Owners",
      brand: "Hotworx",
      detail: "Turnkey virtual instruction and a proven low-staff model reduce first-year execution risk for new operators.",
    },
    {
      title: "Best for Multi-Unit Operators",
      brand: "YogaSix",
      detail: "Repeatable unit economics and a dense national network support operators planning multiple territories.",
    },
    {
      title: "Best Boutique Yoga Brand",
      brand: "CorePower Yoga",
      detail: "Premium studio positioning and teacher training pipeline drive strong pricing power and member loyalty.",
    },
    {
      title: "Best Value Entry Point",
      brand: "Yoga Pod",
      detail: "A flexible class format and lower total investment make this an accessible entry into boutique yoga ownership.",
    },
  ],
  franchiseBrands: [
    {
      label: "YogaSix",
      slug: "yoga-six",
      href: brandHref("yoga-six"),
      investment: "$300K – $550K",
      franchiseFee: "$50K – $60K",
      royalty: "7% + ads",
      units: "National",
      bestFor: "Boutique studio operators scaling multi-unit",
    },
    {
      label: "Hotworx",
      slug: "hotworx",
      href: brandHref("hotworx"),
      investment: "$180K – $400K",
      franchiseFee: "$40K – $50K",
      royalty: "7% + ads",
      units: "National (fast-growing)",
      bestFor: "Low-staff, high-margin 24/7 studio operators",
    },
    {
      label: "CorePower Yoga",
      slug: "corepower-yoga",
      href: brandHref("corepower-yoga"),
      investment: "$350K – $550K+",
      franchiseFee: "Program/varies",
      royalty: "varies",
      units: "National",
      bestFor: "Well-capitalized premium yoga studio operators",
    },
    {
      label: "Yoga Pod",
      slug: "yoga-pod",
      href: brandHref("yoga-pod"),
      investment: "$200K – $420K",
      franchiseFee: "$35K – $50K",
      royalty: "6–8% + ads",
      units: "Expanding",
      bestFor: "Value-focused boutique yoga studio entrants",
    },
  ],
  economicsRows: [
    { metric: "Annual Revenue", value: "$300K – $1.2M+" },
    { metric: "EBITDA Margin", value: "13 – 20%" },
    { metric: "Gross Margin", value: "60 – 78%" },
    { metric: "Net Profit Margin", value: "10 – 18% after royalties" },
    { metric: "Average Membership Fee", value: "$99 – $199 / month" },
    { metric: "Revenue per Member", value: "$700 – $1,600 / year" },
    { metric: "Average Members", value: "300 – 1,200+ per studio" },
    { metric: "Member Retention", value: "55 – 75% annual" },
    { metric: "Staff Cost %", value: "20 – 35% of revenue" },
    { metric: "Occupancy Cost %", value: "12 – 22% of revenue" },
  ],
  startupCostBreakdown: [
    { item: "Franchise Fee", range: "$30K – $60K", percent: "12%" },
    { item: "Leasehold Improvements", range: "$50K – $220K", percent: "30%" },
    { item: "Studio Equipment", range: "$20K – $90K", percent: "16%" },
    { item: "Technology", range: "$8K – $40K", percent: "5%" },
    { item: "Furniture & Fixtures", range: "$6K – $35K", percent: "4%" },
    { item: "Signage", range: "$4K – $25K", percent: "2%" },
    { item: "Pre-opening Marketing", range: "$10K – $50K", percent: "6%" },
    { item: "Working Capital", range: "$20K – $120K", percent: "15%" },
    { item: "Training", range: "$3K – $18K", percent: "3%" },
    { item: "Insurance", range: "$3K – $18K", percent: "2%" },
  ],
  startupCostTotal: {
    low: "$150K",
    median: "$320K",
    high: "$550K",
  },
  franchiseCalculators: buildFitnessFranchiseCalculatorCards("yoga"),
  franchiseRankings: yogaFranchiseRankingCards,
  franchiseVsIndependent: [
    { factor: "Startup Cost", franchise: "$150K – $550K", independent: "$75K – $350K" },
    { factor: "Brand Recognition", franchise: "National brand traffic", independent: "Local brand you build" },
    { factor: "Marketing Support", franchise: "National ads + digital lead systems", independent: "Owner-led local marketing" },
    { factor: "Member Acquisition", franchise: "Brand app + referral systems", independent: "Self-sourced leads and word of mouth" },
    { factor: "Technology", franchise: "Proprietary member/booking platform", independent: "Third-party studio management software" },
    { factor: "Royalty Fees", franchise: "Typically 6 – 9% + marketing", independent: "None" },
    { factor: "Operational Freedom", franchise: "Standardized systems and branding", independent: "Full control over programming and pricing" },
    { factor: "Exit Value", franchise: "Often stronger branded comps", independent: "1.8× – 3.0× SDE typical" },
  ],
  businessQuestionFaqs: [
    {
      question: "What are the top yoga franchises?",
      answer:
        "The top yoga franchises in 2026 typically include YogaSix, Hotworx, CorePower Yoga, and Yoga Pod. YogaSix often leads on network scale and membership systems; Hotworx ranks high for lower CapEx and lean staffing; CorePower Yoga suits premium multi-room operators; Yoga Pod is a flexible, lower-entry boutique option. Rank the top brands on after-fee cash flow, territory quality, and member retention — not marketing claims alone.",
    },
    {
      question: "How much does a yoga franchise cost?",
      answer:
        "A yoga franchise typically costs $150,000 to $550,000 in total investment, with many operators landing near $320,000. That includes the franchise fee ($30,000–$60,000), leasehold improvements, studio equipment, technology, furniture, signage, pre-opening marketing, training, insurance, and working capital. Lower-CapEx formats like Hotworx sit toward the low end given their infrared pod and virtual-coaching layout, while premium multi-room studios like CorePower Yoga can exceed $550,000. Always rebuild Item 7 with local contractor and equipment quotes before you buy.",
    },
    {
      question: "What is the best yoga franchise to open?",
      answer:
        "The best yoga franchise depends on your goals. YogaSix often suits operators seeking the largest boutique network and strongest membership systems for multi-unit growth, while Hotworx fits buyers wanting a lower-CapEx, low-staff 24/7 format with strong margins. CorePower Yoga appeals to well-capitalized owners targeting a premium studio brand with a deep teacher training pipeline, and Yoga Pod suits capital-constrained buyers wanting a flexible, lower-cost entry point. Rank brands on after-fee cash flow, territory quality, and membership retention — not marketing claims alone.",
    },
    {
      question: "How profitable are yoga franchises?",
      answer:
        "Well-run yoga franchises are often profitable at roughly 10–18% net after royalties, with EBITDA commonly in the 13–20% range. Mature units generating $300,000–$1.2M+ can produce strong owner cash flow when member retention stays high and staff and occupancy costs remain controlled. Profitability hinges on class fill rates, average dues, and ancillary revenue (retail, workshops, teacher training) more than brand awareness alone. Lower-staff formats can post higher margins per dollar of revenue despite smaller total footprints.",
    },
    {
      question: "How much do yoga franchise owners make?",
      answer:
        "Yoga franchise owners typically make about $60,000 to $140,000 in total owner benefit on a mature single unit, with a mid-point near $100,000. Multi-unit operators can exceed $180,000–$300,000+ as shared management and scale improve margins. Year-one earnings are usually lower during membership ramp and instructor staffing buildout. Model owner pay after royalties and marketing fund contributions — not at gross revenue.",
    },
    {
      question: "What are yoga franchise royalty fees?",
      answer:
        "Yoga franchise royalty fees commonly run about 6–9% of revenue, plus a marketing fund contribution in most systems. Combined ongoing fees often total roughly 8–13% and are a key reason franchise net margins can trail well-run independents. Premium studio brands and infrared/virtual formats can structure fees differently, so confirm the exact stack in the current FDD. Include the full fee stack in break-even and payback models from day one.",
    },
    {
      question: "How long is the payback period for a yoga franchise?",
      answer:
        "The typical yoga franchise payback period is three to five years of cumulative free cash flow returning invested capital. Monthly operating break-even can arrive sooner — often within 9–18 months — while full investment recovery takes longer for premium multi-room studios with heavier build-out costs. Faster payback favors strong membership ramp, high class fill rates, and controlled build-out costs. Underinvesting in pre-opening marketing can slow the initial membership base and extend payback well beyond five years.",
    },
    {
      question: "Should I buy a franchise or open an independent yoga studio?",
      answer:
        "Buy a yoga franchise when you want brand recognition, proven membership systems, national marketing, and a teacher training pipeline — and you accept royalties. Open an independent studio when you already have local demand, a distinct concept, and want higher net margins without fees. Independents often launch cheaper and retain full pricing and programming freedom; franchises can ramp membership faster with playbooks and app-driven acquisition. Choose based on capital, experience, and whether brand traffic justifies the fee stack.",
    },
    {
      question: "How much working capital is required for a yoga franchise?",
      answer:
        "Most yoga franchises require $20,000 to $120,000+ of working capital inside total investment, and lenders often want additional liquidity beyond the franchise fee. Working capital covers instructor payroll, rent, royalties, and marketing during the membership ramp before dues revenue stabilizes. Undercapitalization shows up quickly when a studio opens with a thin founding membership base. Keep reserves for the first 6–12 months while retention and referral flywheels build.",
    },
    {
      question: "Which yoga franchise has the highest ROI?",
      answer:
        "The highest ROI yoga franchise is usually a well-located studio with strong class fill rates and disciplined staffing and occupancy costs — often a scaled Hotworx unit given lower CapEx and low staffing, or a high-volume YogaSix studio at full membership. Highest revenue brands are not always highest ROI if leasehold improvements and equipment inflate the denominator. Underwrite site-level cash-on-cash returns after royalties, not top-line revenue alone.",
    },
    {
      question: "How many members does a yoga franchise studio need to break even?",
      answer:
        "Break-even membership counts vary widely by format — lower-CapEx, low-staff studios may break even with a couple hundred members given lower fixed costs, while premium multi-room studios often need 500–800+ members to cover rent, instructor payroll, and royalties. Average dues, class fill rates, and local occupancy costs all shift the break-even threshold. Model your specific market's rent and labor costs against realistic membership acquisition timelines rather than relying on national averages.",
    },
  ],
  relatedFranchiseIndustries: [
    { label: "Gym Franchises", href: "/franchise/fitness/gym/" },
    { label: "Pilates Franchises", href: "/franchise/fitness/pilates/" },
    { label: "CrossFit Affiliates", href: "/franchise/fitness/crossfit/" },
    { label: "Swim School Franchises", href: "/franchise/fitness/swim-school/" },
  ],
  franchiseFaqs: [
    {
      question: "Which yoga franchise is the most profitable?",
      answer:
        "Profitability varies more by location, class fill rate, and cost discipline than brand alone. Low-staff, infrared/virtual formats with lean payroll often lead on margin.",
    },
    {
      question: "How much capital do I need?",
      answer:
        "Plan for roughly $150K–$550K total investment plus liquidity above the franchise fee. Many lenders want working capital for the first 9–18 months of membership ramp.",
    },
    {
      question: "Do I need yoga teaching experience?",
      answer:
        "Not always — some franchise systems accept non-trade owners who hire certified instructors and managers and complete brand training. Existing studio operators often adapt faster.",
    },
    {
      question: "What financing options are available?",
      answer:
        "Common paths include SBA loans, conventional loans, equipment financing, and franchisor-approved lenders. Preserve cash for staffing and marketing beyond funded CapEx.",
    },
    {
      question: "How much can a yoga franchise owner earn?",
      answer:
        "Mature single-unit owners often earn about $60K–$140K all-in, with multi-unit operators frequently exceeding $180K depending on scale and structure.",
    },
    {
      question: "What are the ongoing royalty fees?",
      answer:
        "Royalties commonly run 6–9% of revenue, often plus a marketing fund contribution. Confirm exact fees in the current FDD.",
    },
    {
      question: "Can I own multiple yoga franchise locations?",
      answer:
        "Yes — multi-unit ownership is common in yoga franchising when territorial rights and development schedules allow. Brands often prefer proven operators for additional territories.",
    },
    {
      question: "How long does it take to break even?",
      answer:
        "Many units reach monthly operating break-even in roughly 9–18 months, while full investment payback often takes 3–5 years depending on CapEx and membership growth.",
    },
  ],
  investmentConsiderations: [
    {
      title: "Required Net Worth",
      detail: "Many yoga franchise systems look for mid six-figure net worth with liquidity beyond the franchise fee alone.",
    },
    {
      title: "Liquid Capital",
      detail: "Keep cash for instructor payroll, rent, and marketing before dues revenue stabilizes during the membership ramp.",
    },
    {
      title: "Franchise Fee",
      detail: "Typically $30K–$60K, though premium or program-based systems may structure fees that scale with territory.",
    },
    {
      title: "Royalty Fee",
      detail: "Ongoing royalties of 6–9% plus a marketing fund contribution reduce net margin — underwrite them from day one.",
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
      title: "Studio Buildout",
      detail: "Flooring, mirrors, heating/infrared systems, and HVAC are often the largest single CapEx line — compare vendor programs.",
    },
    {
      title: "Technology Platform",
      detail: "Member management, class booking, access-control, and billing software are core operating leverage for retention.",
    },
  ],
  investmentGuideSubtitle: "Diligence checklist for yoga franchise buyers evaluating capital, territories, and operating support.",
  relatedTitle: "Related Fitness Franchises",
  relatedSubtitle: "Explore franchise economics across other fitness and studio formats.",
  shouldBuyCtaLabel: "Should You Buy a Yoga Franchise or Open an Independent Studio?",
  compareCtaLabel: "Compare Top Yoga Franchises",
  roiCtaLabel: "Franchise ROI Calculator",
  economicsTitle: "Yoga Franchise Economics",
  calculatorsTitle: "Yoga Franchise Calculators",
  rankingsTitle: "Top Yoga Franchises Rankings",
  categoryId: "fitness",
};
