import type { BeautyFranchiseGuideData } from "@/lib/franchise/beauty/beauty-franchise-guide-types";
import { waxingFranchiseRankingCards } from "@/lib/franchise/beauty/waxing-rankings";

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
  return `/franchise/beauty/waxing/brands/${slug}/`;
}

export const waxingFranchiseBrandSlugs = [
  "european-wax-center",
  "waxing-the-city",
  "ideal-image",
  "the-waxing-company",
  "sugar-sugar",
  "brow-bar-express",
] as const;

export const waxingFranchiseBrandNames: Record<(typeof waxingFranchiseBrandSlugs)[number], string> = {
  "european-wax-center": "European Wax Center",
  "waxing-the-city": "Waxing the City",
  "ideal-image": "Ideal Image (laser)",
  "the-waxing-company": "The Waxing Company",
  "sugar-sugar": "Sugar Sugar",
  "brow-bar-express": "Brow / Express formats",
};

export const waxingFranchiseGuide: BeautyFranchiseGuideData = {
  meta: {
    slug: "waxing",
    categoryLabel: "Beauty",
    shortName: "Waxing",
    title: "Waxing Franchise Guide: Costs, ROI, Profit Margins & Best Franchise Opportunities",
    subtitle:
      "Compare startup costs, franchise fees, royalties, member packages, owner earnings, and performance across leading waxing and hair-removal franchise brands.",
    dataVintage: "2025–2026",
    sampleSize: "leading U.S. waxing & hair-removal franchise brands",
    kpiDashboardTitle: "Waxing Franchise KPIs",
    kpiDashboardSubtitle: "Directional ranges across soft-wax, sugaring, and hybrid laser concepts.",
    overviewTitle: "Which Waxing Franchise is Best?",
    overviewSubtitle: "Match capital, membership model, and multi-unit goals to the right hair-removal franchise.",
    compareTitle: "Compare Waxing Franchises",
    compareSubtitle:
      "Side-by-side snapshot of investment, fees, royalties, footprint, and buyer fit — open a brand for the full profile.",
    economicsSubtitle: "Industry-average operating ranges for mature U.S. waxing franchise units after royalties.",
    economicsPanelSubtitle: "Typical single-studio performance for national wax membership brands.",
    startupSubtitle: "Where the first $200K–$500K typically goes when launching a waxing franchise.",
    startupPanelSubtitle: "Includes franchise fee, studio buildout, treatment rooms, inventory, and working capital.",
    calculatorsSubtitle: "Use adjacent beauty spa tools to model CapEx, margins, break-even, and valuation.",
    rankingsSubtitle: "Curated lists for comparing waxing franchises by cost, growth, and profitability.",
    prosConsTitle: "Franchise vs Independent Waxing Studio",
    prosConsSubtitle: "Trade brand memberships and booking systems for royalties and less pricing freedom.",
    shouldBuyHref: "/comparisons/nail-salon-vs-waxing-salon/",
    shouldBuyBlurb: "Compare waxing economics against related beauty formats before you commit capital.",
    questionsSubtitle: "Common research questions for buyers evaluating a waxing franchise.",
    finalCtaTitle: "Compare Waxing Franchise Opportunities",
    finalCtaSubtitle:
      "Find the right franchise by comparing startup costs, membership packages, revenue, ROI, and long-term profitability.",
  },
  heroCtas: [
    { label: "Compare Franchise Brands", href: "#compare-brands", primary: true },
    { label: "Franchise Calculators", href: "#calculators", primary: false },
  ],
  executiveKpis: [
    {
      id: "investment",
      label: "Average Investment",
      value: "$325K",
      sublabel: "typical total launch range $200K–$500K",
      href: "#startup-costs",
      accent: "metric-valuation",
    },
    {
      id: "franchise-fee",
      label: "Average Franchise Fee",
      value: "$45K",
      sublabel: "typical range $35K–$60K",
      href: "#compare-brands",
      accent: "metric-valuation",
    },
    {
      id: "royalty",
      label: "Royalty Fee",
      value: "6%",
      sublabel: "plus brand / ad fund (often 2–3%)",
      href: "#economics",
      accent: "metric-margin",
    },
    {
      id: "revenue",
      label: "Average Revenue",
      value: "$550K",
      sublabel: "mature single-unit range $350K–$900K",
      href: "#economics",
      accent: "metric-revenue",
    },
    {
      id: "ebitda",
      label: "Estimated EBITDA",
      value: "15%",
      sublabel: "typical 10–22% before owner add-backs",
      href: "#economics",
      accent: "metric-margin",
    },
    {
      id: "payback",
      label: "Payback Period",
      value: "3–5 yrs",
      sublabel: "cash-on-cash to recover total investment",
      href: "#economics",
      accent: "metric-salary",
    },
    {
      id: "owner-income",
      label: "Average Owner Income",
      value: "$85K",
      sublabel: "single-unit; multi-unit $150K–$300K",
      href: "#economics",
      accent: "metric-salary",
    },
    {
      id: "locations",
      label: "Typical Locations",
      value: "Lifestyle plaza",
      sublabel: "high-traffic beauty & retail corridors",
      href: "#overview",
      accent: "metric-revenue",
    },
  ],
  sectionNav,
  whichIsBestCards: [
    {
      title: "Lowest Investment",
      brand: "Express / boutique formats",
      detail: "Smaller footprints and focused menus can keep CapEx near the $200K–$300K band.",
    },
    {
      title: "Highest ROI",
      brand: "Membership wax studios",
      detail: "High visit frequency and low service times improve room productivity after royalties.",
    },
    {
      title: "Fastest Payback",
      brand: "European Wax Center (strong sites)",
      detail: "National brand awareness and package memberships can accelerate client ramp.",
    },
    {
      title: "Most Locations",
      brand: "European Wax Center",
      detail: "Largest dedicated waxing franchise footprint among national soft-wax concepts.",
    },
    {
      title: "Best Brand Recognition",
      brand: "European Wax Center",
      detail: "Consumer awareness reduces CAC versus unknown local wax studios.",
    },
    {
      title: "Best for Multi-unit Owners",
      brand: "EWC / Waxing the City",
      detail: "Repeatable room layouts and membership systems support multi-studio growth.",
    },
    {
      title: "Best for First-time Franchisees",
      brand: "Waxing the City",
      detail: "Training systems and membership ops help new owners learn high-frequency beauty retail.",
    },
  ],
  franchiseBrands: [
    {
      label: "European Wax Center",
      slug: "european-wax-center",
      href: brandHref("european-wax-center"),
      investment: "$350K – $500K",
      franchiseFee: "$45K – $60K",
      royalty: "6% + ads",
      units: "900+",
      bestFor: "Membership soft-wax model",
    },
    {
      label: "Waxing the City",
      slug: "waxing-the-city",
      href: brandHref("waxing-the-city"),
      investment: "$250K – $420K",
      franchiseFee: "$40K – $50K",
      royalty: "6% + ads",
      units: "150+",
      bestFor: "Boutique wax studios",
    },
    {
      label: "Ideal Image (laser)",
      slug: "ideal-image",
      href: brandHref("ideal-image"),
      investment: "$500K – $1.1M",
      franchiseFee: "$40K – $60K",
      royalty: "6% + ads",
      units: "150+",
      bestFor: "Laser hair-removal hybrid",
    },
    {
      label: "The Waxing Company",
      slug: "the-waxing-company",
      href: brandHref("the-waxing-company"),
      investment: "$200K – $380K",
      franchiseFee: "$30K – $45K",
      royalty: "5–6% + ads",
      units: "Growing",
      bestFor: "Lower CapEx markets",
    },
    {
      label: "Sugar Sugar",
      slug: "sugar-sugar",
      href: brandHref("sugar-sugar"),
      investment: "$220K – $400K",
      franchiseFee: "$35K – $45K",
      royalty: "6% + ads",
      units: "Growing",
      bestFor: "Sugaring specialty",
    },
    {
      label: "Brow / Express formats",
      slug: "brow-bar-express",
      href: brandHref("brow-bar-express"),
      investment: "$180K – $350K",
      franchiseFee: "$25K – $40K",
      royalty: "5–6% + ads",
      units: "Varies",
      bestFor: "Brow + express wax add-ons",
    },
  ],
  economicsRows: [
    { metric: "Revenue", value: "$350K – $900K" },
    { metric: "EBITDA", value: "10 – 22%" },
    { metric: "Gross Margin", value: "55 – 70%" },
    { metric: "Net Margin", value: "8 – 16% after royalties" },
    { metric: "Labor %", value: "35 – 45%" },
    { metric: "Rent %", value: "10 – 16%" },
    { metric: "Average Ticket", value: "$45 – $90" },
    { metric: "Revenue per Esthetician", value: "$80K – $150K" },
    { metric: "Membership / Package Mix", value: "40 – 70%" },
  ],
  startupCostBreakdown: [
    { item: "Franchise Fee", range: "$25K – $60K", percent: "12%" },
    { item: "Leasehold Improvements", range: "$60K – $150K", percent: "28%" },
    { item: "Studio Build-out", range: "$30K – $80K", percent: "16%" },
    { item: "Equipment & Stations", range: "$10K – $35K", percent: "6%" },
    { item: "Furniture & Fixtures", range: "$8K – $25K", percent: "5%" },
    { item: "Working Capital", range: "$25K – $70K", percent: "12%" },
    { item: "Training", range: "$3K – $12K", percent: "2%" },
    { item: "Opening Marketing", range: "$12K – $40K", percent: "8%" },
    { item: "Technology / Booking", range: "$4K – $15K", percent: "3%" },
    { item: "Wax & Retail Inventory", range: "$5K – $20K", percent: "8%" },
  ],
  startupCostTotal: { low: "$200K", median: "$325K", high: "$500K" },
  franchiseCalculators: [
    {
      label: "Day Spa Startup Cost Calculator",
      description: "Proxy CapEx model for treatment-room beauty studios and buildouts.",
      href: "/calculators/day-spa-startup-cost/",
    },
    {
      label: "Day Spa Break-even Calculator",
      description: "Estimate visits and package revenue needed to cover fixed costs.",
      href: "/calculators/day-spa-break-even/",
    },
    {
      label: "Day Spa Profit Margin Calculator",
      description: "Model labor and rent impact on beauty studio net margin.",
      href: "/calculators/day-spa-profit-margin/",
    },
    {
      label: "Nail Salon Average Ticket Calculator",
      description: "Adjacent beauty ticket benchmarking for high-frequency services.",
      href: "/calculators/nail-salon-average-ticket/",
    },
    {
      label: "Day Spa Valuation Calculator",
      description: "Estimate transfer value using SDE multiples for beauty studios.",
      href: "/calculators/day-spa-valuation/",
    },
    {
      label: "Medical Spa Startup Cost Calculator",
      description: "Useful when comparing wax studios to laser hair-removal CapEx.",
      href: "/calculators/medical-spa-startup-cost/",
    },
  ],
  franchiseRankings: waxingFranchiseRankingCards,
  franchiseVsIndependent: [
    { factor: "Startup Cost", franchise: "$200K – $500K", independent: "$80K – $250K" },
    { factor: "Brand Recognition", franchise: "National wax membership brand", independent: "Local brand you build" },
    { factor: "Marketing Support", franchise: "National ads + package funnels", independent: "Owner-led local marketing" },
    { factor: "Royalty Fees", franchise: "Typically 5–6% + ad fund", independent: "None" },
    { factor: "Freedom", franchise: "Brand protocols & pricing", independent: "Full service & pricing control" },
    { factor: "Profit Margin", franchise: "8 – 16% after fees", independent: "12 – 22% net" },
    { factor: "Exit Value", franchise: "Membership book aids transfer", independent: "2.0× – 3.5× SDE typical" },
  ],
  businessQuestionFaqs: [
    {
      question: "How much does a waxing franchise cost?",
      answer:
        "A waxing franchise typically costs $200,000 to $500,000 in total investment, with many soft-wax studios near $325,000. That includes the franchise fee ($25,000–$60,000), leasehold improvements, treatment rooms, inventory, technology, opening marketing, and working capital. Express formats can sit lower; laser hybrids cost significantly more. Rebuild Item 7 with local TI estimates before you buy a waxing franchise.",
    },
    {
      question: "How profitable is a waxing franchise?",
      answer:
        "A well-run waxing franchise is typically profitable at roughly 8–16% net after royalties, with EBITDA often in the 10–22% range. Mature studios generating $350,000–$900,000 can produce solid owner cash flow when labor stays near 35–45% of sales and memberships drive repeat visits. Profitability hinges on chair utilization and package attach rates more than brand advertising alone. Multi-unit operators often outperform single sites.",
    },
    {
      question: "Which waxing franchise has the highest ROI?",
      answer:
        "The highest ROI waxing franchise is usually a membership soft-wax studio with strong plaza traffic and controlled CapEx—commonly European Wax Center or Waxing the City in the right trade area. Fast service cycles and high visit frequency improve cash-on-cash returns after royalties. Laser hybrids can earn more revenue but may dilute ROI if device CapEx is heavy. Always underwrite the site P&L, not national averages alone.",
    },
    {
      question: "How much do waxing franchise owners make?",
      answer:
        "Waxing franchise owners typically make $55,000 to $120,000 in total owner benefit on a mature single studio, with strong units higher. Multi-unit franchisees often earn $150,000 to $300,000 as systems and staffing leverage improve. First-year income is usually lower during membership ramp. Model owner pay after royalty and ad-fund fees for a realistic waxing franchise salary picture.",
    },
    {
      question: "What are waxing franchise royalty fees?",
      answer:
        "Waxing franchise royalty fees usually run about 5–6% of gross revenue plus a 2–3% advertising or brand fund. Combined ongoing fees near 7–9% are common and are the main reason franchise net margins trail independents. Royalties support brand systems, training, and national marketing that can lower client acquisition cost. Include the full fee stack in break-even planning from day one.",
    },
    {
      question: "How much working capital is required?",
      answer:
        "Most waxing franchises require $25,000 to $70,000 of working capital inside total investment, with lenders often wanting additional liquidity beyond the franchise fee. Working capital covers payroll, rent, royalties, wax supplies, and membership marketing during a 12–18 month ramp. Undercapitalization shows up quickly when hiring lags. Keep a seasonal cash buffer for slower months.",
    },
    {
      question: "How long is the payback period?",
      answer:
        "The typical waxing franchise payback period is three to five years of cumulative free cash flow returning invested capital. Monthly operating break-even often arrives within 12–18 months when memberships ramp on plan. Faster payback favors lower CapEx and high room utilization. Weak sites or expensive TI can extend recovery beyond five years—stress-test pessimistic cases before closing.",
    },
    {
      question: "Is a franchise better than opening an independent waxing studio?",
      answer:
        "A waxing franchise is better when you want national brand recognition, membership systems, and training—and you accept royalties. An independent wax studio usually costs less to open and can keep higher net margins without fees, but requires stronger local marketing. Choose franchise for ramp speed and multi-unit playbooks; choose independent for full pricing control and lower ongoing fees.",
    },
    {
      question: "How many waxing studios can one franchisee own?",
      answer:
        "One franchisee can often own multiple waxing franchises—commonly three to ten studios—subject to territory maps and development agreements. National wax brands actively recruit multi-unit operators because room designs and memberships scale cleanly. Brands may require you to prove unit-one performance first. Multi-unit ownership is where owner income frequently expands into the mid–high six figures.",
    },
    {
      question: "What is the average EBITDA for a waxing franchise?",
      answer:
        "Average EBITDA for a mature waxing franchise typically falls around 10–22% of revenue after normalizing owner compensation, depending on labor, rent, and royalties. On a $550,000 revenue studio, that implies about $55,000 to $120,000 of EBITDA before debt service. Convert EBITDA to owner cash flow after CapEx refreshes and fees when underwriting a waxing franchise purchase.",
    },
  ],
  relatedFranchiseIndustries: [
    { label: "Hair Salon Franchise", href: "/franchise/beauty/hair-salon/" },
    { label: "Medical Spa Franchise", href: "/franchise/beauty/medical-spa/" },
    { label: "Massage Franchise", href: "/franchise/beauty/massage/" },
  ],
  franchiseFaqs: [
    {
      question: "Which waxing franchise is most profitable?",
      answer:
        "Membership soft-wax studios with high room utilization and disciplined labor usually lead after royalties. Site quality matters as much as brand.",
    },
    {
      question: "Which waxing franchise has the lowest startup cost?",
      answer:
        "Express and boutique formats often sit toward the $180K–$300K end of national ranges. Laser hybrids cost substantially more.",
    },
    {
      question: "How much does a European Wax Center franchise cost?",
      answer:
        "European Wax Center total investment is commonly cited around $350K–$500K including fee, buildout, and working capital. Verify the current FDD Item 7.",
    },
    {
      question: "How much revenue does a waxing franchise generate?",
      answer:
        "Mature units typically generate $350K–$900K annually depending on rooms, memberships, and ticket mix.",
    },
    {
      question: "What is a typical royalty fee?",
      answer:
        "About 5–6% royalties plus a brand/ad fund is common across leading waxing franchise systems.",
    },
    {
      question: "Can I own multiple waxing franchises?",
      answer:
        "Yes—multi-unit ownership is common. Most brands want demonstrated performance on the first studio before awarding additional territories.",
    },
  ],
};
