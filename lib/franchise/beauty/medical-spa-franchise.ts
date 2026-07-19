import type { BeautyFranchiseGuideData } from "@/lib/franchise/beauty/beauty-franchise-guide-types";
import { medicalSpaFranchiseRankingCards } from "@/lib/franchise/beauty/medical-spa-rankings";

const sectionNav = [
  { id: "overview", label: "Overview" },
  { id: "compare-brands", label: "Compare Brands" },
  { id: "economics", label: "Economics" },
  { id: "startup-costs", label: "Startup Costs" },
  { id: "calculators", label: "Calculators" },
  { id: "rankings", label: "Rankings" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "faq", label: "FAQ" },
] as const;

function brandHref(slug: string) {
  return `/franchise/beauty/medical-spa/brands/${slug}/`;
}

export const medicalSpaFranchiseBrandSlugs = [
  "ideal-image",
  "milan-laser",
  "laseraway",
  "sono-bello",
  "face-foundrie",
  "sev-laser",
] as const;

export const medicalSpaFranchiseBrandNames: Record<(typeof medicalSpaFranchiseBrandSlugs)[number], string> = {
  "ideal-image": "Ideal Image",
  "milan-laser": "Milan Laser",
  laseraway: "LaserAway",
  "sono-bello": "Sono Bello",
  "face-foundrie": "Face Foundrie",
  "sev-laser": "SEV Laser",
};

export const medicalSpaFranchiseGuide: BeautyFranchiseGuideData = {
  meta: {
    slug: "medical-spa",
    categoryLabel: "Beauty",
    shortName: "Medical Spa",
    title: "Medical Spa Franchise Guide: Costs, ROI, Profit Margins & Best Franchise Opportunities",
    subtitle:
      "Compare startup costs, franchise fees, royalties, owner earnings, device CapEx, and unit performance across leading medical spa and aesthetic laser franchises.",
    dataVintage: "2025–2026",
    sampleSize: "leading U.S. med spa & laser franchise brands",
    kpiDashboardTitle: "Medical Spa Franchise KPIs",
    kpiDashboardSubtitle: "Directional ranges across injectable, laser, and aesthetic franchise systems.",
    overviewTitle: "Which Medical Spa Franchise is Best?",
    overviewSubtitle: "Match capital, clinical staffing model, and multi-unit goals to the right aesthetic franchise.",
    compareTitle: "Compare Medical Spa Franchises",
    compareSubtitle:
      "Side-by-side snapshot of investment, fees, royalties, footprint, and buyer fit — open a brand for the full profile.",
    economicsSubtitle:
      "Industry-average operating ranges for mature U.S. medical spa franchise units after royalties and device costs.",
    economicsPanelSubtitle: "Typical single-unit performance for national laser and injectable-forward concepts.",
    startupSubtitle: "Where the first $350K–$1.2M+ typically goes when launching a medical spa franchise.",
    startupPanelSubtitle: "Includes franchise fee, clinical buildout, lasers/devices, inventory, and working capital.",
    calculatorsSubtitle: "Model revenue, margins, EBITDA, break-even, and valuation before you buy a med spa franchise.",
    rankingsSubtitle: "Curated lists for comparing medical spa franchises by cost, growth, and profitability.",
    prosConsTitle: "Franchise vs Independent Medical Spa",
    prosConsSubtitle: "Trade brand systems and patient acquisition for royalties, device standards, and less clinical freedom.",
    shouldBuyHref: "/comparisons/medical-spa-vs-day-spa/",
    shouldBuyBlurb:
      "Compare medical spa economics against day spa and independent aesthetic models before you commit capital.",
    questionsSubtitle: "Common research questions for buyers evaluating a medical spa franchise.",
    finalCtaTitle: "Compare Medical Spa Franchise Opportunities",
    finalCtaSubtitle:
      "Find the right franchise by comparing startup costs, device CapEx, fees, revenue, ROI, and long-term profitability.",
  },
  heroCtas: [
    { label: "Compare Franchise Brands", href: "#compare-brands", primary: true },
    { label: "Franchise Calculators", href: "#calculators", primary: false },
  ],
  executiveKpis: [
    {
      id: "investment",
      label: "Average Investment",
      value: "$650K",
      sublabel: "typical total launch range $350K–$1.2M+",
      href: "#startup-costs",
      accent: "metric-valuation",
    },
    {
      id: "franchise-fee",
      label: "Average Franchise Fee",
      value: "$50K",
      sublabel: "typical range $35K–$75K",
      href: "#compare-brands",
      accent: "metric-valuation",
    },
    {
      id: "royalty",
      label: "Royalty Fee",
      value: "6%",
      sublabel: "plus brand / ad fund (often 2–4%)",
      href: "#economics",
      accent: "metric-margin",
    },
    {
      id: "revenue",
      label: "Average Revenue",
      value: "$1.5M",
      sublabel: "mature single-unit range $800K–$3M+",
      href: "#economics",
      accent: "metric-revenue",
    },
    {
      id: "ebitda",
      label: "Estimated EBITDA",
      value: "18%",
      sublabel: "typical 12–25% before owner add-backs",
      href: "#economics",
      accent: "metric-margin",
    },
    {
      id: "payback",
      label: "Payback Period",
      value: "3–6 yrs",
      sublabel: "cash-on-cash to recover total investment",
      href: "#economics",
      accent: "metric-salary",
    },
    {
      id: "owner-income",
      label: "Average Owner Income",
      value: "$150K",
      sublabel: "single-unit; multi-unit $250K–$600K+",
      href: "#economics",
      accent: "metric-salary",
    },
    {
      id: "locations",
      label: "Typical Locations",
      value: "Medical retail",
      sublabel: "A/B medical & lifestyle retail corridors",
      href: "#overview",
      accent: "metric-revenue",
    },
  ],
  sectionNav,
  whichIsBestCards: [
    {
      title: "Lowest Investment",
      brand: "Facial / light laser concepts",
      detail: "Narrower treatment menus and leased device models can keep CapEx closer to the $350K–$550K band.",
    },
    {
      title: "Highest ROI",
      brand: "High-utilization laser clinics",
      detail: "Dense patient volume on hair removal and package pricing often compresses payback when rent stays disciplined.",
    },
    {
      title: "Fastest Payback",
      brand: "Membership-heavy injectables",
      detail: "Recurring neurotoxin and filler cadence improves cash conversion vs. one-time device tickets alone.",
    },
    {
      title: "Most Locations",
      brand: "Ideal Image / Milan Laser",
      detail: "National footprints provide more resale comps and multi-unit development paths.",
    },
    {
      title: "Best Brand Recognition",
      brand: "Ideal Image / LaserAway",
      detail: "Consumer awareness and package marketing can shorten patient acquisition ramps.",
    },
    {
      title: "Best for Multi-unit Owners",
      brand: "Laser clinic systems",
      detail: "Repeatable room layouts and standardized menus support 3–10+ clinic operators.",
    },
    {
      title: "Best for First-time Franchisees",
      brand: "Turnkey laser brands",
      detail: "Deep training, medical directors, and SOPs reduce clinical + ops risk for non-physician owners.",
    },
  ],
  franchiseBrands: [
    {
      label: "Ideal Image",
      slug: "ideal-image",
      href: brandHref("ideal-image"),
      investment: "$500K – $1.1M",
      franchiseFee: "$40K – $60K",
      royalty: "6% + ads",
      units: "150+",
      bestFor: "Full aesthetic + laser menus",
    },
    {
      label: "Milan Laser",
      slug: "milan-laser",
      href: brandHref("milan-laser"),
      investment: "$450K – $900K",
      franchiseFee: "$45K – $60K",
      royalty: "6% + ads",
      units: "300+",
      bestFor: "Laser hair removal focus",
    },
    {
      label: "LaserAway",
      slug: "laseraway",
      href: brandHref("laseraway"),
      investment: "$400K – $850K",
      franchiseFee: "$40K – $55K",
      royalty: "6% + ads",
      units: "100+",
      bestFor: "Urban laser clinics",
    },
    {
      label: "Sono Bello",
      slug: "sono-bello",
      href: brandHref("sono-bello"),
      investment: "$600K – $1.2M+",
      franchiseFee: "$50K – $75K",
      royalty: "Varies + ads",
      units: "70+",
      bestFor: "Body contour / surgical-adjacent",
    },
    {
      label: "Face Foundrie",
      slug: "face-foundrie",
      href: brandHref("face-foundrie"),
      investment: "$350K – $650K",
      franchiseFee: "$35K – $50K",
      royalty: "6% + ads",
      units: "Growing",
      bestFor: "Facial aesthetics express",
    },
    {
      label: "SEV Laser",
      slug: "sev-laser",
      href: brandHref("sev-laser"),
      investment: "$400K – $800K",
      franchiseFee: "$40K – $55K",
      royalty: "6% + ads",
      units: "Growing",
      bestFor: "Laser-first clinic model",
    },
  ],
  economicsRows: [
    { metric: "Revenue", value: "$800K – $3M+" },
    { metric: "EBITDA", value: "12 – 25%" },
    { metric: "Gross Margin", value: "55 – 75%" },
    { metric: "Net Margin", value: "10 – 20% after royalties" },
    { metric: "Labor %", value: "28 – 40%" },
    { metric: "Rent %", value: "8 – 14%" },
    { metric: "Average Ticket", value: "$250 – $800" },
    { metric: "Revenue per Provider", value: "$350K – $650K" },
    { metric: "Patient Retention / Membership", value: "40 – 65%" },
  ],
  startupCostBreakdown: [
    { item: "Franchise Fee", range: "$35K – $75K", percent: "8%" },
    { item: "Leasehold Improvements", range: "$80K – $250K", percent: "22%" },
    { item: "Clinical Build-out", range: "$60K – $180K", percent: "16%" },
    { item: "Lasers & Devices", range: "$100K – $400K", percent: "28%" },
    { item: "Furniture & Fixtures", range: "$20K – $60K", percent: "5%" },
    { item: "Working Capital", range: "$50K – $150K", percent: "10%" },
    { item: "Training & Medical Oversight", range: "$10K – $40K", percent: "3%" },
    { item: "Opening Marketing", range: "$25K – $80K", percent: "5%" },
    { item: "Technology / EMR", range: "$8K – $30K", percent: "2%" },
    { item: "Injectables & Inventory", range: "$15K – $50K", percent: "1%" },
  ],
  startupCostTotal: { low: "$350K", median: "$650K", high: "$1.2M+" },
  franchiseCalculators: [
    {
      label: "Medical Spa Startup Cost Calculator",
      description: "Estimate franchise fee, devices, buildout, and working capital.",
      href: "/calculators/medical-spa-startup-cost/",
    },
    {
      label: "Medical Spa Revenue Calculator",
      description: "Project revenue from providers, rooms, and treatment mix.",
      href: "/calculators/medical-spa-revenue/",
    },
    {
      label: "Medical Spa Profit Margin Calculator",
      description: "Model net margin after payroll, COGS, rent, and marketing.",
      href: "/calculators/medical-spa-profit-margin/",
    },
    {
      label: "Medical Spa EBITDA Calculator",
      description: "Normalize earnings for underwriting and valuation.",
      href: "/calculators/medical-spa-ebitda/",
    },
    {
      label: "Medical Spa Break-even Calculator",
      description: "Find the monthly revenue needed to cover fixed costs and royalties.",
      href: "/calculators/medical-spa-break-even/",
    },
    {
      label: "Medical Spa Valuation Calculator",
      description: "Estimate transfer value using SDE / EBITDA multiples.",
      href: "/calculators/medical-spa-valuation/",
    },
  ],
  franchiseRankings: medicalSpaFranchiseRankingCards,
  franchiseVsIndependent: [
    { factor: "Startup Cost", franchise: "$350K – $1.2M+", independent: "$250K – $900K" },
    { factor: "Brand Recognition", franchise: "National clinic / laser brand traffic", independent: "Local brand you build" },
    { factor: "Marketing Support", franchise: "National ads + package funnels", independent: "Owner-led patient acquisition" },
    { factor: "Royalty Fees", franchise: "Typically 6% + ad fund", independent: "None" },
    { factor: "Clinical Freedom", franchise: "Brand menus & protocols", independent: "Full treatment & pricing control" },
    { factor: "Profit Margin", franchise: "10 – 20% after fees", independent: "15 – 30% net" },
    { factor: "Exit Value", franchise: "Stronger branded comps", independent: "3.0× – 5.0× SDE typical" },
  ],
  businessQuestionFaqs: [
    {
      question: "How much does a medical spa franchise cost?",
      answer:
        "A medical spa franchise typically costs $350,000 to $1.2 million or more in total investment, with many concepts clustering near $650,000. That includes the franchise fee ($35,000–$75,000), clinical build-out, lasers and devices, injectables inventory, opening marketing, and working capital. Laser-heavy clinics sit higher; express facial aesthetics concepts can land lower. Always rebuild Item 7 with local TI quotes and device financing terms before you buy a med spa franchise.",
    },
    {
      question: "How profitable is a medical spa franchise?",
      answer:
        "A well-run medical spa franchise is often profitable at roughly 10–20% net after royalties, with EBITDA commonly in the 12–25% range. Mature clinics generating $800,000–$3M+ can produce strong owner cash flow when labor stays near 28–40% of sales and device utilization is high. Profitability hinges on package conversion, memberships, and rent discipline more than brand advertising alone. Top multi-unit operators out-earn single clinics through shared medical directors and marketing.",
    },
    {
      question: "Which medical spa franchise has the highest ROI?",
      answer:
        "The highest ROI medical spa franchise is usually a high-utilization laser or membership-driven injectable clinic in an A/B medical retail corridor where CapEx is controlled and patient acquisition cost stays efficient. Brands with dense laser hair-removal volume often compress cash payback when rooms stay booked. Premium surgical-adjacent concepts can post higher revenue but weaker ROI if device and build costs inflate the denominator. Underwrite site-level P&Ls after the royalty stack—not headline revenue.",
    },
    {
      question: "How much do medical spa franchise owners make?",
      answer:
        "Medical spa franchise owners typically make $100,000 to $220,000 in total owner benefit on a mature single clinic, with strong units exceeding that. Multi-unit franchisees often earn $250,000 to $600,000+ as management leverage improves. First-year income is usually lower during ramp and device financing. Earnings track provider productivity, package attach rates, and royalties far more than national brand slogans—so model owner pay after fees.",
    },
    {
      question: "What are medical spa franchise royalty fees?",
      answer:
        "Medical spa franchise royalty fees commonly run about 6% of gross revenue plus a 2–4% advertising or brand fund. Some laser systems also layer technology or product purchasing obligations. Combined ongoing fees often total 6–12% and are the main reason franchise net margins trail independent med spas. Model royalties from day one so break-even and patient volume targets stay realistic when comparing medical spa franchise opportunities.",
    },
    {
      question: "How much working capital is required?",
      answer:
        "Most medical spa franchises require $50,000 to $150,000 of working capital inside the total investment, plus liquidity beyond the franchise fee for lenders. Working capital covers payroll, medical director costs, rent, marketing, injectable restocking, and royalties during a 12–24 month ramp. Undercapitalization is common when owners fund devices fully but skimp on patient-acquisition runway. Keep cash cushion for slower package conversion in the first six months.",
    },
    {
      question: "How long is the payback period?",
      answer:
        "The typical medical spa franchise payback period is three to six years of cumulative free cash flow returning invested capital, depending on CapEx, utilization, and debt service. Monthly operating break-even can arrive sooner—often within 12–24 months—while full investment recovery takes longer after royalties and equipment payments. Faster payback favors controlled device CapEx and high-frequency laser memberships. Heavy build-outs in soft markets can stretch payback past six years.",
    },
    {
      question: "Is a franchise better than opening an independent medical spa?",
      answer:
        "A medical spa franchise is better when you want turnkey protocols, national marketing, and medical oversight systems—and you accept royalties plus brand treatment menus. An independent med spa usually preserves higher net margins (often 15–30%) and full clinical freedom but requires stronger local brand building and compliance setup. Choose franchise for ramp speed and multi-unit playbooks; choose independent if you have physician partnerships, capital for devices, and want pricing flexibility.",
    },
    {
      question: "How many medical spa locations can one franchisee own?",
      answer:
        "One franchisee can often own multiple medical spa franchises—commonly three to ten-plus clinics—subject to territory rules, development schedules, and proven unit performance. Laser and aesthetic systems actively recruit multi-unit operators because room layouts and SOPs scale cleanly. Brands may require you to stabilize clinic one before awarding additional AOIs. Multi-unit ownership is where owner income frequently expands through shared leadership and marketing.",
    },
    {
      question: "What is the average EBITDA for a medical spa franchise?",
      answer:
        "Average EBITDA for a mature medical spa franchise typically falls around 12–25% of revenue after normalizing owner compensation, depending on rent, labor, device financing, and royalties. On a $1.5M revenue clinic, that implies roughly $180,000 to $375,000 of EBITDA before debt service. EBITDA is central to lender underwriting and exit valuation. Convert EBITDA to true cash flow after equipment notes and required CapEx when comparing franchise opportunities.",
    },
  ],
  relatedFranchiseIndustries: [
    { label: "Hair Salon Franchise", href: "/franchise/beauty/hair-salon/" },
    { label: "Massage Franchise", href: "/franchise/beauty/massage/" },
    { label: "Waxing Franchise", href: "/franchise/beauty/waxing/" },
  ],
  franchiseFaqs: [
    {
      question: "Which medical spa franchise is most profitable?",
      answer:
        "Profitability varies more by utilization, labor, and rent than brand alone. Mature laser and membership-driven clinics with disciplined payroll often produce the best cash flow after royalties.",
    },
    {
      question: "Which medical spa franchise has the lowest startup cost?",
      answer:
        "Express facial aesthetics and narrower laser menus often sit toward the low end of the $350K–$650K band. Device CapEx and TI still dominate totals—verify Item 7 carefully.",
    },
    {
      question: "Do I need to be a physician to own a medical spa franchise?",
      answer:
        "Many systems allow non-physician owners with proper medical directors and state-compliant structures. Requirements vary by brand and jurisdiction—confirm FDD and state med spa rules.",
    },
    {
      question: "How much revenue does a medical spa franchise generate?",
      answer:
        "Mature units commonly generate $800K–$3M+ annually depending on rooms, providers, and treatment mix. New clinics typically ramp over 12–24 months.",
    },
    {
      question: "What is a typical royalty fee for med spa franchises?",
      answer:
        "About 6% royalties plus a brand/ad fund is common, bringing total ongoing fees near 6–12% of revenue for many aesthetic franchise systems.",
    },
    {
      question: "Can I finance lasers and build-out?",
      answer:
        "Yes—many franchisees combine SBA lending, equipment financing, and landlord TI. Preserve liquidity for marketing and working capital beyond funded CapEx.",
    },
  ],
};
