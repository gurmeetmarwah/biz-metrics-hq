import type { HomeServicesFranchiseGuideData } from "@/lib/franchise/beauty/beauty-franchise-guide-types";
import { buildFitnessFranchiseCalculatorCards } from "@/lib/franchise/fitness/franchise-calculators";
import { crossfitFranchiseRankingCards } from "@/lib/franchise/fitness/crossfit-rankings";

function brandHref(slug: string) {
  return `/franchise/fitness/crossfit/brands/${slug}/`;
}

export const crossfitFranchiseBrandSlugs = [
  "crossfit-affiliate",
  "f45-training",
  "nine-round",
  "d1-training",
] as const;

export const crossfitFranchiseBrandNames: Record<(typeof crossfitFranchiseBrandSlugs)[number], string> = {
  "crossfit-affiliate": "CrossFit Affiliate",
  "f45-training": "F45 Training",
  "nine-round": "9Round",
  "d1-training": "D1 Training",
};

export const crossfitFranchiseGuide: HomeServicesFranchiseGuideData = {
  meta: {
    slug: "crossfit",
    categoryLabel: "Fitness",
    shortName: "CrossFit",
    title: "CrossFit Franchise Guide 2026: Affiliate vs F45 Costs, ROI & Brands",
    subtitle:
      "CrossFit franchise options compared — CrossFit Affiliate, F45, 9Round, and D1. See startup costs, dues vs royalties, profit margins, owner income, and ROI before you buy.",
    dataVintage: "2025–2026",
    sampleSize: "CrossFit affiliates and leading U.S. functional fitness / HIIT franchise systems",
    kpiDashboardTitle: "CrossFit Franchise KPIs",
    kpiDashboardSubtitle: "Directional ranges across the CrossFit affiliate model and franchised functional fitness / HIIT systems.",
    overviewTitle: "Is CrossFit or a Functional Fitness Franchise Right for You?",
    overviewSubtitle: "Match capital, community-building appetite, and business model to the right box or franchise.",
    compareTitle: "Compare CrossFit & Functional Fitness Brands",
    compareSubtitle:
      "Side-by-side snapshot of investment, fees, royalties, footprint, and buyer fit — open a brand for the full investment profile.",
    economicsSubtitle: "Industry-average operating ranges for mature U.S. CrossFit affiliates and functional fitness franchise units after fees.",
    economicsPanelSubtitle: "Typical single-unit performance for CrossFit affiliates and national functional fitness / HIIT franchise systems.",
    startupSubtitle: "Where the first $100K–$450K+ typically goes when launching a CrossFit box or functional fitness franchise.",
    startupPanelSubtitle:
      "Includes affiliate or franchise fees, leasehold improvements, fitness equipment, technology, and opening working capital.",
    calculatorsSubtitle: "Model member growth, coach productivity, member lifetime value, and valuation before you open or buy.",
    rankingsSubtitle: "Curated lists for comparing CrossFit and functional fitness franchises by cost, ROI, growth, and owner fit.",
    prosConsTitle: "Franchise vs Independent CrossFit Box",
    prosConsSubtitle: "Trade brand systems, national marketing, and buying power for royalties (or affiliate dues) and less operating freedom.",
    shouldBuyHref: "#faq",
    shouldBuyBlurb:
      "Compare the low-cost CrossFit affiliate agreement, franchised HIIT systems, and independent box economics before you commit capital.",
    questionsSubtitle: "High-intent questions CrossFit and functional fitness franchise buyers ask before opening.",
    finalCtaTitle: "Compare CrossFit & Functional Fitness Franchise Opportunities",
    finalCtaSubtitle: "Find the right model by comparing startup costs, fees, revenue, ROI, and long-term profitability.",
  },
  heroCtas: [
    { label: "Compare CrossFit Franchises", href: "#compare-brands", primary: true },
    { label: "Franchise ROI Calculator", href: "#calculators", primary: false },
  ],
  executiveKpis: [
    {
      id: "investment",
      label: "Average Initial Investment",
      value: "$250K",
      sublabel: "typical total launch range $100K–$450K+",
      href: "#startup-costs",
      accent: "metric-valuation",
    },
    {
      id: "franchise-fee",
      label: "Affiliate Fee / Franchise Fee",
      value: "$3K – $50K",
      sublabel: "CrossFit annual affiliate dues vs. $25K–$50K franchise fee at F45, 9Round, D1",
      href: "#compare-brands",
      accent: "metric-valuation",
    },
    {
      id: "revenue",
      label: "Average Annual Revenue",
      value: "$520K",
      sublabel: "mature unit mid-point; range $250K–$1.2M+",
      href: "#economics",
      accent: "metric-revenue",
    },
    {
      id: "ebitda",
      label: "Average EBITDA Margin",
      value: "17%",
      sublabel: "typical 12–22% before owner add-backs",
      href: "#economics",
      accent: "metric-margin",
    },
    {
      id: "royalty",
      label: "Royalty / Affiliate Dues",
      value: "Dues or 6–9%",
      sublabel: "CrossFit uses flat annual dues; franchised brands charge 6–9% + ads",
      href: "#economics",
      accent: "metric-margin",
    },
    {
      id: "payback",
      label: "Average Payback Period",
      value: "2.5 – 5 yrs",
      sublabel: "cash-on-cash to recover total investment",
      href: "#economics",
      accent: "metric-salary",
    },
    {
      id: "owner-income",
      label: "Estimated Owner Income",
      value: "$105K",
      sublabel: "single-unit mid-point; multi-unit often higher",
      href: "#economics",
      accent: "metric-salary",
    },
    {
      id: "systems",
      label: "Number of Major Brands",
      value: "4+",
      sublabel: "featured CrossFit affiliate & functional fitness brands on this guide",
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
      brand: "CrossFit Affiliate",
      detail: "A low-cost affiliate agreement (annual dues, not a traditional franchise fee) keeps total launch capital well below franchised HIIT systems.",
    },
    {
      title: "Highest Revenue Potential",
      brand: "F45 Training",
      detail: "Systemized group HIIT programming, app-driven bookings, and national ad support push mature-unit revenue toward the top of the category.",
    },
    {
      title: "Fastest Payback",
      brand: "CrossFit Affiliate",
      detail: "Minimal upfront affiliate cost and flat annual dues (instead of a percentage royalty) help owners recover invested capital sooner.",
    },
    {
      title: "Best Brand Recognition",
      brand: "CrossFit Affiliate",
      detail: "Decades of category-defining branding and a passionate global community drive strong organic member acquisition.",
    },
    {
      title: "Best for First-Time Owners",
      brand: "9Round",
      detail: "A simple 30-minute kickboxing circuit format, structured training, and turnkey systems reduce first-year execution risk.",
    },
    {
      title: "Best for Multi-Unit Operators",
      brand: "D1 Training",
      detail: "An expanding athletic performance network with a repeatable training curriculum supports operators planning multiple locations.",
    },
    {
      title: "Best HIIT Studio Franchise",
      brand: "F45 Training",
      detail: "Class-based, app-programmed HIIT workouts drive premium pricing and strong member engagement versus community box models.",
    },
    {
      title: "Best Athletic Performance Franchise",
      brand: "D1 Training",
      detail: "Purpose-built for sports performance training, appealing to youth athletes and adults seeking structured strength and conditioning.",
    },
  ],
  franchiseBrands: [
    {
      label: "CrossFit Affiliate",
      slug: "crossfit-affiliate",
      href: brandHref("crossfit-affiliate"),
      investment: "$120K – $350K",
      franchiseFee: "$3K – $5K/yr (affiliate fee, not a franchise fee)",
      royalty: "Annual affiliate dues (no % royalty)",
      units: "Global (10,000+ affiliates)",
      bestFor: "Coach-owners building a community box",
    },
    {
      label: "F45 Training",
      slug: "f45-training",
      href: brandHref("f45-training"),
      investment: "$250K – $450K",
      franchiseFee: "$50K",
      royalty: "7 – 8% + ads",
      units: "National",
      bestFor: "High-volume boutique HIIT studio operators",
    },
    {
      label: "9Round",
      slug: "nine-round",
      href: brandHref("nine-round"),
      investment: "$100K – $250K",
      franchiseFee: "$25K – $40K",
      royalty: "6 – 8% + ads",
      units: "National",
      bestFor: "First-timers wanting a simple circuit format",
    },
    {
      label: "D1 Training",
      slug: "d1-training",
      href: brandHref("d1-training"),
      investment: "$200K – $400K",
      franchiseFee: "$40K – $55K",
      royalty: "6 – 8% + ads",
      units: "Expanding",
      bestFor: "Performance-training multi-unit operators",
    },
  ],
  economicsRows: [
    { metric: "Annual Revenue", value: "$250K – $1.2M+" },
    { metric: "EBITDA Margin", value: "12 – 22%" },
    { metric: "Gross Margin", value: "55 – 75%" },
    { metric: "Net Profit Margin", value: "10 – 20% after fees" },
    { metric: "Average Membership / Dues", value: "$150 – $250 / month" },
    { metric: "Revenue per Member", value: "$1,800 – $3,000 / year" },
    { metric: "Average Members", value: "150 – 400+ per box/location" },
    { metric: "Member Retention", value: "55 – 75% annual" },
    { metric: "Coach / Staff Cost %", value: "20 – 35% of revenue" },
    { metric: "Occupancy Cost %", value: "12 – 22% of revenue" },
  ],
  startupCostBreakdown: [
    { item: "Affiliate Fee / Franchise Fee", range: "$3K – $55K", percent: "10%" },
    { item: "Leasehold Improvements", range: "$30K – $180K", percent: "30%" },
    { item: "Fitness Equipment (rigs, plates, rowers, bikes)", range: "$25K – $120K", percent: "25%" },
    { item: "Technology (booking, timing, apps)", range: "$5K – $25K", percent: "4%" },
    { item: "Flooring & Safety", range: "$8K – $30K", percent: "5%" },
    { item: "Signage", range: "$3K – $15K", percent: "2%" },
    { item: "Pre-opening Marketing", range: "$8K – $40K", percent: "5%" },
    { item: "Working Capital", range: "$15K – $100K", percent: "15%" },
    { item: "Training / Certification", range: "$2K – $15K", percent: "2%" },
    { item: "Insurance", range: "$3K – $18K", percent: "2%" },
  ],
  startupCostTotal: {
    low: "$100K",
    median: "$250K",
    high: "$450K+",
  },
  franchiseCalculators: buildFitnessFranchiseCalculatorCards("crossfit"),
  franchiseRankings: crossfitFranchiseRankingCards,
  franchiseVsIndependent: [
    { factor: "Startup Cost", franchise: "$100K – $450K+", independent: "$80K – $300K" },
    { factor: "Fee Structure", franchise: "Affiliate dues (CrossFit) or 6–9% royalty (franchised brands)", independent: "None" },
    { factor: "Brand Recognition", franchise: "Global community brand or national HIIT brand traffic", independent: "Local brand you build" },
    { factor: "Marketing Support", franchise: "Brand awareness + digital lead systems (franchised brands)", independent: "Owner-led local marketing" },
    { factor: "Programming", franchise: "Standardized methodology or app-programmed workouts", independent: "Fully custom programming" },
    { factor: "Technology", franchise: "Brand booking/app platform (franchised brands)", independent: "Third-party gym management software" },
    { factor: "Operational Freedom", franchise: "Standardized systems and branding (varies by model)", independent: "Full control over programming and pricing" },
    { factor: "Exit Value", franchise: "Often stronger branded comps for franchised systems", independent: "1.8× – 3.0× SDE typical" },
  ],
  businessQuestionFaqs: [
    {
      question: "How much does a CrossFit franchise or affiliate cost?",
      answer:
        "A CrossFit affiliate typically costs $120,000 to $350,000 in total investment, well below most franchised functional fitness brands, because CrossFit uses a low-cost annual affiliate agreement ($3,000–$5,000/year) rather than a traditional franchise fee. Franchised competitors like F45 Training, 9Round, and D1 Training run $100,000–$450,000+ including a $25,000–$55,000 franchise fee. Either way, expect leasehold improvements, fitness equipment, technology, and working capital to make up the bulk of spend. Always rebuild the total with local contractor and equipment quotes.",
    },
    {
      question: "Is CrossFit a franchise?",
      answer:
        "No — CrossFit is not a traditional franchise. It licenses its trademark and training methodology through an affiliate agreement, charging flat annual dues instead of a percentage-of-revenue royalty and franchise fee. This gives CrossFit Affiliate owners more pricing and programming freedom than a typical franchisee, but also less standardized marketing and operational support than franchised brands like F45 Training, 9Round, or D1 Training.",
    },
    {
      question: "What is the best CrossFit or functional fitness franchise to open?",
      answer:
        "The best choice depends on your goals. CrossFit Affiliate suits coach-owners who want low-cost entry, programming freedom, and a tight-knit community model. F45 Training fits buyers seeking the highest revenue ceiling through systemized group HIIT and national marketing. 9Round is a strong fit for first-time owners wanting a simple, turnkey circuit format, while D1 Training suits operators targeting athletic performance training and multi-unit growth. Rank options on after-fee cash flow and community fit — not marketing claims alone.",
    },
    {
      question: "How profitable are CrossFit affiliates and functional fitness franchises?",
      answer:
        "Well-run CrossFit affiliates and functional fitness franchises are often profitable at roughly 10–20% net after fees, with EBITDA commonly in the 12–22% range. Mature units generating $250,000–$1.2M+ can produce strong owner cash flow when member retention and class utilization stay high. Profitability hinges more on coach productivity, class capacity, and member retention than on brand affiliation alone. CrossFit's flat affiliate dues can help owners retain more revenue per dollar versus a percentage royalty as the box scales.",
    },
    {
      question: "How much do CrossFit box and franchise owners make?",
      answer:
        "CrossFit affiliate and functional fitness franchise owners typically make about $65,000 to $150,000 in total owner benefit on a mature single unit, with a mid-point near $105,000. Multi-unit franchise operators (F45 Training, D1 Training) can exceed $200,000–$300,000+ as shared management and scale improve margins. Year-one earnings are usually lower during member ramp and coach hiring. Model owner pay after affiliate dues or royalties and marketing spend — not at gross revenue.",
    },
    {
      question: "What are CrossFit and functional fitness franchise fees?",
      answer:
        "CrossFit charges flat annual affiliate dues of roughly $3,000–$5,000 rather than a percentage royalty. Franchised functional fitness and HIIT brands like F45 Training, 9Round, and D1 Training commonly charge 6–9% royalty plus an advertising fund contribution. Combined ongoing fees for franchised systems often total roughly 7–12% of revenue, while CrossFit's flat-dues structure can be more favorable as a box's revenue grows. Include the full fee stack in your break-even and payback models from day one.",
    },
    {
      question: "How long is the payback period for a CrossFit or functional fitness franchise?",
      answer:
        "The typical payback period across CrossFit affiliates and functional fitness franchises is roughly two-and-a-half to five years of cumulative free cash flow returning invested capital. CrossFit Affiliate's lower upfront cost and flat dues structure often produce the fastest payback, while franchise-fee brands with higher build-out costs can take longer. Monthly operating break-even can arrive sooner — often within 9–18 months — while full investment recovery depends on membership ramp and class utilization.",
    },
    {
      question: "Should I open a CrossFit affiliate, buy a franchise, or start an independent gym?",
      answer:
        "Open a CrossFit affiliate when you want a globally recognized methodology and community with low fixed fees and high programming freedom. Buy a franchised functional fitness brand (F45 Training, 9Round, D1 Training) when you want standardized systems, national marketing, and a proven playbook — and accept a franchise fee plus royalty. Start an independent box when you already have local demand and want full control with no ongoing licensing fees. Choose based on capital, coaching background, and how much you value brand systems versus flexibility.",
    },
    {
      question: "How much working capital is required to open a CrossFit box or functional fitness franchise?",
      answer:
        "Most CrossFit affiliates and functional fitness franchises require $15,000 to $100,000+ of working capital inside total investment, and lenders often want additional liquidity beyond the affiliate or franchise fee. Working capital covers coach payroll, rent, dues or royalties, and marketing during the member ramp before class schedules fill. Undercapitalization shows up quickly when a box opens with a thin founding member base. Keep reserves for the first 6–12 months while retention and referral flywheels build.",
    },
    {
      question: "Which CrossFit or functional fitness franchise has the highest ROI?",
      answer:
        "The highest ROI is usually a well-coached CrossFit Affiliate with strong community retention and low fixed costs given its minimal affiliate fee, or a high-utilization F45 Training studio at full class capacity. Highest revenue brands are not always highest ROI if franchise fees and build-out costs inflate the denominator. Underwrite site-level cash-on-cash returns after fees, not top-line revenue alone.",
    },
  ],
  relatedFranchiseIndustries: [
    { label: "Gym Franchises", href: "/franchise/fitness/gym/" },
    { label: "Pilates Franchises", href: "/franchise/fitness/pilates/" },
    { label: "Yoga Studio Franchises", href: "/franchise/fitness/yoga/" },
    { label: "Swim School Franchises", href: "/franchise/fitness/swim-school/" },
  ],
  franchiseFaqs: [
    {
      question: "Which is more profitable: a CrossFit affiliate or a franchised HIIT brand?",
      answer:
        "It varies by location and coach productivity, but CrossFit's flat annual dues (versus a percentage royalty) can let profitable, high-retention boxes keep more revenue as they scale.",
    },
    {
      question: "How much capital do I need?",
      answer:
        "Plan for roughly $100K–$450K+ total investment plus liquidity above the affiliate or franchise fee. Many lenders want working capital for the first 9–18 months of member ramp.",
    },
    {
      question: "Do I need a coaching background?",
      answer:
        "Not always — some franchised systems accept non-trade owners who hire certified coaches and complete brand training. CrossFit affiliate owners are often coaches themselves, but can also hire head coaches.",
    },
    {
      question: "What financing options are available?",
      answer:
        "Common paths include SBA loans, conventional loans, equipment financing, and franchisor-approved lenders for franchised brands. Preserve cash for coaching payroll and marketing beyond funded CapEx.",
    },
    {
      question: "How much can an owner earn?",
      answer:
        "Mature single-unit owners often earn about $65K–$150K all-in, with multi-unit franchise operators frequently exceeding $200K depending on scale and structure.",
    },
    {
      question: "What are the ongoing fees?",
      answer:
        "CrossFit charges flat annual affiliate dues (~$3K–$5K); franchised brands commonly charge 6–9% royalty plus a marketing fund. Confirm exact fees in the current affiliate agreement or FDD.",
    },
    {
      question: "Can I own multiple locations?",
      answer:
        "Yes — multi-unit ownership is common among franchised functional fitness brands when territorial rights allow. CrossFit affiliate owners can also open additional boxes under separate affiliate agreements.",
    },
    {
      question: "How long does it take to break even?",
      answer:
        "Many locations reach monthly operating break-even in roughly 9–18 months, while full investment payback often takes 2.5–5 years depending on CapEx and member growth.",
    },
  ],
  investmentConsiderations: [
    {
      title: "Affiliate vs. Franchise Structure",
      detail: "Understand whether you're signing a low-cost CrossFit affiliate agreement or a traditional franchise agreement with a fee and royalty — the economics differ substantially.",
    },
    {
      title: "Required Net Worth",
      detail: "Franchised functional fitness systems often look for six-figure net worth with liquidity beyond the franchise fee; CrossFit's affiliate model has a much lower bar.",
    },
    {
      title: "Liquid Capital",
      detail: "Keep cash for coaching payroll, rent, and marketing before dues revenue stabilizes during the member ramp.",
    },
    {
      title: "Affiliate Dues / Franchise Fee",
      detail: "CrossFit charges roughly $3K–$5K/year in dues; franchised brands typically charge $25K–$55K upfront plus ongoing royalty.",
    },
    {
      title: "Royalty & Marketing Fund",
      detail: "Franchised brands' 6–9% royalty plus ad fund reduce net margin — underwrite them from day one; CrossFit has no percentage royalty.",
    },
    {
      title: "Coaching Talent",
      detail: "Certified coach quality and retention drive class experience and member retention more than brand affiliation alone.",
    },
    {
      title: "Territory Protection",
      detail: "Franchised brands typically offer exclusive territory maps; CrossFit affiliates have looser geographic exclusivity — confirm before signing.",
    },
    {
      title: "Training & Certification",
      detail: "Owner and coach certification requirements (e.g., CrossFit Level 1, brand-specific certifications) influence Year-1 ramp speed.",
    },
    {
      title: "Equipment & Build-Out",
      detail: "Rigs, plates, rowers, and flooring are often the largest single CapEx line — compare leasing versus purchase and vendor discount programs.",
    },
    {
      title: "Technology Platform",
      detail: "Class booking, member management, and billing software are core operating leverage for retention across both affiliate and franchise models.",
    },
  ],
  investmentGuideSubtitle: "Diligence checklist for CrossFit affiliate and functional fitness franchise buyers evaluating capital, structure, and support.",
  relatedTitle: "Related Fitness Franchises",
  relatedSubtitle: "Explore franchise economics across other fitness and studio formats.",
  shouldBuyCtaLabel: "Should You Open a CrossFit Affiliate, Buy a Franchise, or Open an Independent Box?",
  compareCtaLabel: "Compare CrossFit & Functional Fitness Franchises",
  roiCtaLabel: "Franchise ROI Calculator",
  economicsTitle: "CrossFit & Functional Fitness Franchise Economics",
  calculatorsTitle: "CrossFit Franchise Calculators",
  rankingsTitle: "Top CrossFit & Functional Fitness Franchise Rankings",
  categoryId: "fitness",
};
