import type { BeautyFranchiseGuideData } from "@/lib/franchise/beauty/beauty-franchise-guide-types";
import { massageFranchiseRankingCards } from "@/lib/franchise/beauty/massage-rankings";

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
  return `/franchise/beauty/massage/brands/${slug}/`;
}

export const massageFranchiseBrandSlugs = [
  "massage-envy",
  "elements-massage",
  "hand-and-stone",
  "lavida-massage",
  "massage-heights",
  "the-woodhouse-spa",
] as const;

export const massageFranchiseBrandNames: Record<(typeof massageFranchiseBrandSlugs)[number], string> = {
  "massage-envy": "Massage Envy",
  "elements-massage": "Elements Massage",
  "hand-and-stone": "Hand & Stone",
  "lavida-massage": "LaVida Massage",
  "massage-heights": "Massage Heights",
  "the-woodhouse-spa": "The Woodhouse Spa",
};

export const massageFranchiseGuide: BeautyFranchiseGuideData = {
  meta: {
    slug: "massage",
    categoryLabel: "Beauty",
    shortName: "Massage",
    title: "Massage Franchise Guide: Costs, ROI, Profit Margins & Best Franchise Opportunities",
    subtitle:
      "Compare startup costs, franchise fees, royalties, member economics, owner earnings, and performance across leading massage franchise brands.",
    dataVintage: "2025–2026",
    sampleSize: "leading U.S. massage franchise brands",
    kpiDashboardTitle: "Massage Franchise KPIs",
    kpiDashboardSubtitle: "Directional ranges across membership and session-based massage franchise systems.",
    overviewTitle: "Which Massage Franchise is Best?",
    overviewSubtitle: "Match capital, membership model, and multi-unit goals to the right massage franchise.",
    compareTitle: "Compare Massage Franchises",
    compareSubtitle:
      "Side-by-side snapshot of investment, fees, royalties, footprint, and buyer fit — open a brand for the full profile.",
    economicsSubtitle: "Industry-average operating ranges for mature U.S. massage franchise units after royalties.",
    economicsPanelSubtitle: "Typical single-studio performance for national membership massage brands.",
    startupSubtitle: "Where the first $250K–$600K typically goes when launching a massage franchise.",
    startupPanelSubtitle: "Includes franchise fee, studio buildout, tables, membership systems, and working capital.",
    calculatorsSubtitle: "Use adjacent spa economics tools to model revenue, margins, break-even, and valuation.",
    rankingsSubtitle: "Curated lists for comparing massage franchises by cost, growth, and profitability.",
    prosConsTitle: "Franchise vs Independent Massage Studio",
    prosConsSubtitle: "Trade brand memberships and booking systems for royalties and less menu freedom.",
    shouldBuyHref: "/comparisons/day-spa-vs-massage-spa/",
    shouldBuyBlurb: "Compare massage studio economics against day spa and franchise membership models before you buy.",
    questionsSubtitle: "Common research questions for buyers evaluating a massage franchise.",
    finalCtaTitle: "Compare Massage Franchise Opportunities",
    finalCtaSubtitle:
      "Find the right franchise by comparing startup costs, membership fees, revenue, ROI, and long-term profitability.",
  },
  heroCtas: [
    { label: "Compare Franchise Brands", href: "#compare-brands", primary: true },
    { label: "Franchise Calculators", href: "#calculators", primary: false },
  ],
  executiveKpis: [
    {
      id: "investment",
      label: "Average Investment",
      value: "$400K",
      sublabel: "typical total launch range $250K–$600K",
      href: "#startup-costs",
      accent: "metric-valuation",
    },
    {
      id: "franchise-fee",
      label: "Average Franchise Fee",
      value: "$45K",
      sublabel: "typical range $30K–$55K",
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
      value: "$750K",
      sublabel: "mature single-unit range $500K–$1.2M",
      href: "#economics",
      accent: "metric-revenue",
    },
    {
      id: "ebitda",
      label: "Estimated EBITDA",
      value: "14%",
      sublabel: "typical 10–20% before owner add-backs",
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
      value: "$90K",
      sublabel: "single-unit; multi-unit $160K–$350K",
      href: "#economics",
      accent: "metric-salary",
    },
    {
      id: "locations",
      label: "Typical Locations",
      value: "Lifestyle retail",
      sublabel: "suburban plazas & wellness corridors",
      href: "#overview",
      accent: "metric-revenue",
    },
  ],
  sectionNav,
  whichIsBestCards: [
    {
      title: "Lowest Investment",
      brand: "Lean studio formats",
      detail: "Fewer rooms and efficient TI packages can keep CapEx toward the $250K–$350K band.",
    },
    {
      title: "Highest ROI",
      brand: "Membership density leaders",
      detail: "High active members per therapist with controlled labor often deliver the best cash-on-cash returns.",
    },
    {
      title: "Fastest Payback",
      brand: "Massage Envy (strong sites)",
      detail: "National brand awareness and membership funnels can accelerate ramp versus cold-start independents.",
    },
    {
      title: "Most Locations",
      brand: "Massage Envy",
      detail: "Largest U.S. massage franchise footprint — useful for comps and multi-unit paths.",
    },
    {
      title: "Best Brand Recognition",
      brand: "Massage Envy / Hand & Stone",
      detail: "Consumer awareness shortens membership sales cycles in competitive suburbs.",
    },
    {
      title: "Best for Multi-unit Owners",
      brand: "Elements / Massage Envy",
      detail: "Standardized rooms and membership systems support 3–8+ studio operators.",
    },
    {
      title: "Best for First-time Franchisees",
      brand: "Elements Massage",
      detail: "Training depth and boutique positioning help new owners learn therapist and membership ops.",
    },
  ],
  franchiseBrands: [
    {
      label: "Massage Envy",
      slug: "massage-envy",
      href: brandHref("massage-envy"),
      investment: "$400K – $600K",
      franchiseFee: "$45K – $55K",
      royalty: "6% + ads",
      units: "1,000+",
      bestFor: "Membership volume model",
    },
    {
      label: "Elements Massage",
      slug: "elements-massage",
      href: brandHref("elements-massage"),
      investment: "$300K – $500K",
      franchiseFee: "$40K – $50K",
      royalty: "6% + ads",
      units: "250+",
      bestFor: "Boutique therapist culture",
    },
    {
      label: "Hand & Stone",
      slug: "hand-and-stone",
      href: brandHref("hand-and-stone"),
      investment: "$350K – $550K",
      franchiseFee: "$40K – $50K",
      royalty: "6% + ads",
      units: "500+",
      bestFor: "Massage + facial combo",
    },
    {
      label: "LaVida Massage",
      slug: "lavida-massage",
      href: brandHref("lavida-massage"),
      investment: "$250K – $450K",
      franchiseFee: "$30K – $45K",
      royalty: "5–6% + ads",
      units: "100+",
      bestFor: "Lower CapEx entry",
    },
    {
      label: "Massage Heights",
      slug: "massage-heights",
      href: brandHref("massage-heights"),
      investment: "$300K – $500K",
      franchiseFee: "$35K – $45K",
      royalty: "6% + ads",
      units: "150+",
      bestFor: "Membership + retail mix",
    },
    {
      label: "The Woodhouse Spa",
      slug: "the-woodhouse-spa",
      href: brandHref("the-woodhouse-spa"),
      investment: "$500K – $900K+",
      franchiseFee: "$45K – $65K",
      royalty: "6% + ads",
      units: "70+",
      bestFor: "Premium day-spa hybrid",
    },
  ],
  economicsRows: [
    { metric: "Revenue", value: "$500K – $1.2M" },
    { metric: "EBITDA", value: "10 – 20%" },
    { metric: "Gross Margin", value: "50 – 65%" },
    { metric: "Net Margin", value: "8 – 15% after royalties" },
    { metric: "Labor %", value: "40 – 50%" },
    { metric: "Rent %", value: "10 – 15%" },
    { metric: "Average Ticket / Session", value: "$70 – $120" },
    { metric: "Revenue per Therapist", value: "$90K – $160K" },
    { metric: "Membership / Recurring Mix", value: "55 – 75%" },
  ],
  startupCostBreakdown: [
    { item: "Franchise Fee", range: "$30K – $55K", percent: "10%" },
    { item: "Leasehold Improvements", range: "$80K – $180K", percent: "30%" },
    { item: "Studio Build-out", range: "$40K – $100K", percent: "16%" },
    { item: "Tables & Equipment", range: "$15K – $40K", percent: "6%" },
    { item: "Furniture & Retail Fixtures", range: "$10K – $30K", percent: "5%" },
    { item: "Working Capital", range: "$30K – $80K", percent: "12%" },
    { item: "Training", range: "$5K – $15K", percent: "2%" },
    { item: "Opening Marketing", range: "$15K – $40K", percent: "8%" },
    { item: "Technology / Booking", range: "$5K – $20K", percent: "3%" },
    { item: "Retail & Supplies", range: "$5K – $20K", percent: "8%" },
  ],
  startupCostTotal: { low: "$250K", median: "$400K", high: "$600K" },
  franchiseCalculators: [
    {
      label: "Day Spa Startup Cost Calculator",
      description: "Proxy CapEx model for treatment-room wellness studios and buildouts.",
      href: "/calculators/day-spa-startup-cost/",
    },
    {
      label: "Day Spa Revenue Calculator",
      description: "Estimate studio revenue from therapists, rooms, and utilization.",
      href: "/calculators/day-spa-revenue/",
    },
    {
      label: "Day Spa Profit Margin Calculator",
      description: "Model labor-heavy wellness margins after rent and overhead.",
      href: "/calculators/day-spa-profit-margin/",
    },
    {
      label: "Day Spa Break-even Calculator",
      description: "Find sessions and membership revenue needed to cover fixed costs.",
      href: "/calculators/day-spa-break-even/",
    },
    {
      label: "Revenue per Therapist Calculator",
      description: "Benchmark therapist productivity against wellness studio ranges.",
      href: "/calculators/day-spa-revenue-per-therapist/",
    },
    {
      label: "Day Spa Valuation Calculator",
      description: "Estimate transfer value using SDE multiples for wellness studios.",
      href: "/calculators/day-spa-valuation/",
    },
  ],
  franchiseRankings: massageFranchiseRankingCards,
  franchiseVsIndependent: [
    { factor: "Startup Cost", franchise: "$250K – $600K", independent: "$100K – $350K" },
    { factor: "Brand Recognition", franchise: "National membership brand traffic", independent: "Local reputation you build" },
    { factor: "Marketing Support", franchise: "National ads + membership funnels", independent: "Owner-led local marketing" },
    { factor: "Royalty Fees", franchise: "Typically 5–6% + ad fund", independent: "None" },
    { factor: "Freedom", franchise: "Brand menus & pricing guardrails", independent: "Full service & pricing control" },
    { factor: "Profit Margin", franchise: "8 – 15% after fees", independent: "10 – 18% net" },
    { factor: "Exit Value", franchise: "Membership book aids transfer", independent: "2.0× – 3.5× SDE typical" },
  ],
  businessQuestionFaqs: [
    {
      question: "How much does a massage franchise cost?",
      answer:
        "A massage franchise typically costs $250,000 to $600,000 in total investment, with many studios near $400,000. That includes the franchise fee ($30,000–$55,000), leasehold improvements, treatment rooms, tables, technology, opening marketing, and working capital. Premium spa hybrids like Woodhouse run higher; leaner boutique formats sit lower. Rebuild Item 7 with local TI estimates before you buy a massage franchise.",
    },
    {
      question: "How profitable is a massage franchise?",
      answer:
        "A well-run massage franchise is typically profitable at roughly 8–15% net after royalties, with EBITDA often in the 10–20% range. Mature studios generating $500,000–$1.2M can produce solid owner cash flow when therapist labor stays near 40–50% of sales and memberships drive recurring utilization. Profitability hinges on member density per room more than brand spend alone. Top multi-unit operators outperform with shared recruiting and management.",
    },
    {
      question: "Which massage franchise has the highest ROI?",
      answer:
        "The highest ROI massage franchise is usually a high-membership studio with controlled CapEx and strong therapist scheduling—often Massage Envy or Elements in dense suburbs. Cash-on-cash return improves when rooms stay booked and payroll stays disciplined after the royalty stack. Lower CapEx formats can post excellent ROI even with slightly lower revenue. Underwrite member churn and labor before ranking brands on marketing claims.",
    },
    {
      question: "How much do massage franchise owners make?",
      answer:
        "Massage franchise owners typically make $60,000 to $130,000 in total owner benefit on a mature single studio, with strong units exceeding that. Multi-unit franchisees often earn $160,000 to $350,000 as management leverage improves. Year-one earnings are usually lower during membership ramp. Model owner pay after royalties and advertising fees—not at gross membership revenue.",
    },
    {
      question: "What are massage franchise royalty fees?",
      answer:
        "Massage franchise royalty fees usually run about 5–6% of gross revenue plus a 2–3% brand or advertising fund. Combined ongoing fees near 7–9% are common and compress net margin versus independents. Royalties fund brand systems, booking tech, and national campaigns that can lower customer acquisition cost. Include the full fee stack in break-even math from day one.",
    },
    {
      question: "How much working capital is required?",
      answer:
        "Most massage franchises require $30,000 to $80,000 of working capital in the investment package, with lenders often wanting extra liquidity beyond the franchise fee. Working capital covers therapist payroll, rent, royalties, and membership marketing during a 12–18 month ramp. Undercapitalized studios struggle when hiring lags. Keep cash for slower winter seasons common in wellness retail.",
    },
    {
      question: "How long is the payback period?",
      answer:
        "The typical massage franchise payback period is three to five years of cumulative free cash flow returning total invested capital. Monthly operating break-even often arrives within 12–18 months if memberships ramp on plan. Faster payback favors lower CapEx and high member utilization. Soft sites or heavy TI can push recovery beyond five years—stress-test pessimistic membership cases.",
    },
    {
      question: "Is a franchise better than opening an independent massage studio?",
      answer:
        "A massage franchise is better when you want national brand awareness, membership playbooks, and booking systems—and you accept royalties. An independent studio usually costs less to open and can keep higher net margins without fees, but you must build demand yourself. Choose franchise for ramp speed and multi-unit systems; choose independent for full price and menu control with local loyalty.",
    },
    {
      question: "How many massage studios can one franchisee own?",
      answer:
        "One franchisee can often own multiple massage franchises—commonly three to eight or more studios—subject to brand territory rules and development agreements. National membership brands actively recruit multi-unit operators. You may need to stabilize studio one before expanding. Multi-unit ownership is where owner income frequently scales past six figures through shared leadership.",
    },
    {
      question: "What is the average EBITDA for a massage franchise?",
      answer:
        "Average EBITDA for a mature massage franchise typically falls around 10–20% of revenue after normalizing owner pay, depending on labor, rent, and royalties. On a $750,000 revenue studio, that implies about $75,000 to $150,000 of EBITDA before debt service. Convert EBITDA to cash flow after membership refunds, CapEx refreshes, and royalties when underwriting a purchase.",
    },
  ],
  relatedFranchiseIndustries: [
    { label: "Hair Salon Franchise", href: "/franchise/beauty/hair-salon/" },
    { label: "Medical Spa Franchise", href: "/franchise/beauty/medical-spa/" },
    { label: "Waxing Franchise", href: "/franchise/beauty/waxing/" },
  ],
  franchiseFaqs: [
    {
      question: "Which massage franchise is most profitable?",
      answer:
        "Membership-dense studios with disciplined therapist scheduling usually lead after royalties. Site quality and labor % matter more than brand name alone.",
    },
    {
      question: "Which massage franchise has the lowest startup cost?",
      answer:
        "Leaner boutique formats such as LaVida Massage often sit toward the lower end of national investment ranges. TI still drives most of the total.",
    },
    {
      question: "How much does a Massage Envy franchise cost?",
      answer:
        "Massage Envy total investment is commonly cited around $400K–$600K including franchise fee, buildout, and working capital. Confirm the current FDD Item 7.",
    },
    {
      question: "How much revenue does a massage franchise generate?",
      answer:
        "Mature units typically generate $500K–$1.2M annually depending on rooms, therapists, and membership density.",
    },
    {
      question: "What is a typical royalty fee?",
      answer:
        "About 5–6% royalties plus a brand/ad fund is common across leading massage franchise systems.",
    },
    {
      question: "Can I own multiple massage franchises?",
      answer:
        "Yes—multi-unit ownership is common. Brands often prefer proven operators who stabilize the first studio before expanding territories.",
    },
  ],
};
