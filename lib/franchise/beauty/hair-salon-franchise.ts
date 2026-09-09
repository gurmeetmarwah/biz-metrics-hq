export const franchisePageMeta = {
  slug: "hair-salon",
  categoryId: "beauty",
  categoryLabel: "Beauty",
  title: "Best Hair Salon Franchises 2026: Costs, ROI & Top Brands",
  subtitle:
    "Compare the best hair salon franchises — startup costs, franchise fees, royalties, owner earnings, and ROI across leading salon franchise brands.",
  dataVintage: "2025–2026",
  sampleSize: "leading U.S. salon franchise brands",
} as const;

export const heroCtas = [
  { label: "Compare Franchise Brands", href: "#compare-brands", primary: true },
  { label: "Franchise ROI Calculator", href: "#calculators", primary: false },
] as const;

export const executiveKpis = [
  {
    id: "investment",
    label: "Average Investment",
    value: "$225K",
    sublabel: "typical total launch range $150K–$400K",
    href: "#startup-costs",
    accent: "metric-valuation",
  },
  {
    id: "franchise-fee",
    label: "Average Franchise Fee",
    value: "$35K",
    sublabel: "typical range $20K–$50K",
    href: "#compare-brands",
    accent: "metric-valuation",
  },
  {
    id: "royalty",
    label: "Royalty Fee",
    value: "6%",
    sublabel: "plus 2–5% brand / ad fund",
    href: "#economics",
    accent: "metric-margin",
  },
  {
    id: "revenue",
    label: "Average Revenue",
    value: "$450K",
    sublabel: "mature single-unit range $300K–$700K",
    href: "#economics",
    accent: "metric-revenue",
  },
  {
    id: "ebitda",
    label: "Estimated EBITDA",
    value: "12%",
    sublabel: "typical 8–16% before owner add-backs",
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
    value: "$75K",
    sublabel: "single-unit; multi-unit $150K–$350K",
    href: "#economics",
    accent: "metric-salary",
  },
  {
    id: "locations",
    label: "Typical Locations",
    value: "Retail strip",
    sublabel: "high-visibility plaza & power-center sites",
    href: "#overview",
    accent: "metric-revenue",
  },
] as const;

export const sectionNav = [
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
  return `/franchise/beauty/hair-salon/brands/${slug}/`;
}

export const franchiseBrands = [
  {
    label: "Great Clips",
    slug: "great-clips",
    href: brandHref("great-clips"),
    investment: "$150K – $350K",
    franchiseFee: "$20K – $45K",
    royalty: "6% + ads",
    units: "4,000+",
    bestFor: "High-volume value cuts",
  },
  {
    label: "Supercuts",
    slug: "supercuts",
    href: brandHref("supercuts"),
    investment: "$160K – $340K",
    franchiseFee: "$30K – $40K",
    royalty: "6% + ads",
    units: "2,000+",
    bestFor: "Family & convenience traffic",
  },
  {
    label: "Sport Clips",
    slug: "sport-clips",
    href: brandHref("sport-clips"),
    investment: "$250K – $400K",
    franchiseFee: "$30K – $50K",
    royalty: "6% + ads",
    units: "1,800+",
    bestFor: "Men’s sports-themed salons",
  },
  {
    label: "Fantastic Sams",
    slug: "fantastic-sams",
    href: brandHref("fantastic-sams"),
    investment: "$170K – $320K",
    franchiseFee: "$25K – $40K",
    royalty: "6% + ads",
    units: "900+",
    bestFor: "Full-service neighborhood salons",
  },
  {
    label: "Cost Cutters",
    slug: "cost-cutters",
    href: brandHref("cost-cutters"),
    investment: "$140K – $300K",
    franchiseFee: "$20K – $35K",
    royalty: "6% + ads",
    units: "500+",
    bestFor: "Value pricing & multi-unit",
  },
  {
    label: "Regis",
    slug: "regis",
    href: brandHref("regis"),
    investment: "$180K – $380K",
    franchiseFee: "$25K – $45K",
    royalty: "6% + ads",
    units: "Brand portfolio",
    bestFor: "Mall & chain salon formats",
  },
] as const;

export const brandSlugs = [
  ...franchiseBrands.map((b) => b.slug),
  "drybar",
  "blo-blow-dry-bar",
] as const;

export const brandDisplayNames: Record<(typeof brandSlugs)[number], string> = {
  "great-clips": "Great Clips",
  supercuts: "Supercuts",
  "sport-clips": "Sport Clips",
  "fantastic-sams": "Fantastic Sams",
  "cost-cutters": "Cost Cutters",
  regis: "Regis",
  drybar: "Drybar",
  "blo-blow-dry-bar": "Blo Blow Dry Bar",
};

export const whichIsBestCards = [
  {
    title: "Lowest Investment",
    brand: "Cost Cutters / Great Clips",
    detail: "Value-cut concepts often launch toward the lower end of the $140K–$300K band.",
  },
  {
    title: "Highest ROI",
    brand: "Mature high-volume units",
    detail: "Busy plazas with strong utilization and tight labor control compress payback.",
  },
  {
    title: "Fastest Payback",
    brand: "Great Clips (strong sites)",
    detail: "App-driven traffic and standardized service can ramp units faster than boutique builds.",
  },
  {
    title: "Most Locations",
    brand: "Great Clips",
    detail: "Largest U.S. salon franchise footprint — useful for multi-unit and resale comps.",
  },
  {
    title: "Best Brand Recognition",
    brand: "Great Clips / Sport Clips",
    detail: "National marketing and consumer awareness accelerate first-year bookings.",
  },
  {
    title: "Best for Multi-unit Owners",
    brand: "Great Clips / Sport Clips",
    detail: "Repeatable ops playbooks and territory systems support 3–10+ unit operators.",
  },
  {
    title: "Best for First-time Franchisees",
    brand: "Great Clips / Fantastic Sams",
    detail: "Training depth and turnkey systems reduce launch execution risk for new owners.",
  },
] as const;

export const economicsRows = [
  { metric: "Revenue", value: "$300K – $700K" },
  { metric: "EBITDA", value: "8 – 16%" },
  { metric: "Gross Margin", value: "55 – 70%" },
  { metric: "Net Margin", value: "6 – 12% after royalties" },
  { metric: "Labor %", value: "42 – 48%" },
  { metric: "Rent %", value: "10 – 15%" },
  { metric: "Average Ticket", value: "$22 – $45" },
  { metric: "Revenue per Stylist", value: "$55K – $100K" },
  { metric: "Client Retention", value: "55 – 70%" },
] as const;

export const startupCostBreakdown = [
  { item: "Franchise Fee", range: "$20K – $50K", percent: "12%" },
  { item: "Leasehold Improvements", range: "$40K – $120K", percent: "28%" },
  { item: "Salon Build-out", range: "$30K – $80K", percent: "18%" },
  { item: "Equipment", range: "$15K – $40K", percent: "10%" },
  { item: "Furniture", range: "$8K – $25K", percent: "6%" },
  { item: "Working Capital", range: "$20K – $50K", percent: "12%" },
  { item: "Training", range: "$2K – $8K", percent: "2%" },
  { item: "Opening Marketing", range: "$5K – $20K", percent: "5%" },
  { item: "Technology", range: "$3K – $12K", percent: "3%" },
  { item: "Inventory", range: "$5K – $15K", percent: "4%" },
] as const;

export const startupCostTotal = {
  low: "$150K",
  median: "$225K",
  high: "$400K",
} as const;

export const franchiseCalculators = [
  {
    label: "Hair Salon Franchise Startup Cost Calculator",
    description: "Model franchise fee, buildout, equipment, and working capital.",
    href: "/calculators/hair-salon-startup-cost/",
  },
  {
    label: "Break-even Calculator",
    description: "Find the daily visits and revenue needed to cover fixed costs and royalties.",
    href: "/calculators/hair-salon-break-even/",
  },
  {
    label: "Owner Salary Calculator",
    description: "Model owner draw vs W-2 / SDE for single- and multi-unit salons.",
    href: "/calculators/hair-salon-profit-margin/",
  },
  {
    label: "Valuation Calculator",
    description: "Estimate transfer value using SDE multiples for franchise salon units.",
    href: "/calculators/hair-salon-valuation/",
  },
] as const;

export const franchiseRankings = [
  {
    label: "Best Hair Salon Franchises",
    description: "Balanced ranking by economics, support, and brand strength.",
    href: "/franchise/beauty/hair-salon/rankings/best-hair-salon-franchises-2026/",
  },
  {
    label: "Lowest Cost Hair Salon Franchises",
    description: "Franchise concepts with the lowest total investment bands.",
    href: "/franchise/beauty/hair-salon/rankings/lowest-cost-hair-salon-franchises-2026/",
  },
  {
    label: "Highest Revenue Hair Salon Franchises",
    description: "Brands where mature units tend to produce the highest sales.",
    href: "/franchise/beauty/hair-salon/rankings/highest-revenue-hair-salon-franchises-2026/",
  },
  {
    label: "Fastest Growing Hair Salon Franchises",
    description: "Where unit growth and territory expansion are strongest.",
    href: "/franchise/beauty/hair-salon/rankings/fastest-growing-hair-salon-franchises-2026/",
  },
  {
    label: "Best Franchise for First-time Owners",
    description: "Training depth, ops systems, and ramp support for new franchisees.",
    href: "/franchise/beauty/hair-salon/rankings/best-franchise-for-first-time-owners-2026/",
  },
  {
    label: "Most Profitable Hair Salon Franchises",
    description: "Net margin and cash-flow leaders after royalties and ad fees.",
    href: "/franchise/beauty/hair-salon/rankings/most-profitable-hair-salon-franchises-2026/",
  },
] as const;

export const franchiseVsIndependent = [
  { factor: "Startup Cost", franchise: "$150K – $400K", independent: "$80K – $250K" },
  { factor: "Brand Recognition", franchise: "National / regional brand traffic", independent: "Local brand you build" },
  { factor: "Marketing Support", franchise: "National ads + booking systems", independent: "Owner-led local marketing" },
  { factor: "Royalty Fees", franchise: "6 – 12% of revenue", independent: "None" },
  { factor: "Freedom", franchise: "Brand standards & menus", independent: "Full creative & pricing control" },
  { factor: "Profit Margin", franchise: "6 – 12% after fees", independent: "8 – 15% net" },
  { factor: "Exit Value", franchise: "2.0× – 3.0× SDE (transferable brand)", independent: "1.8× – 3.0× SDE" },
] as const;

export const businessQuestionLinks = [
  {
    label: "How much does a hair salon franchise cost?",
    href: "/franchise/beauty/hair-salon/questions/how-much-does-a-hair-salon-franchise-cost/",
  },
  {
    label: "How profitable is a hair salon franchise?",
    href: "/franchise/beauty/hair-salon/questions/how-profitable-is-a-hair-salon-franchise/",
  },
  {
    label: "Which hair salon franchise has the highest ROI?",
    href: "/franchise/beauty/hair-salon/questions/highest-roi/",
  },
  {
    label: "How much do franchise owners make?",
    href: "/franchise/beauty/hair-salon/questions/owner-earnings/",
  },
  {
    label: "What are franchise royalty fees?",
    href: "/franchise/beauty/hair-salon/questions/royalty-fees/",
  },
  {
    label: "How much working capital is required?",
    href: "/franchise/beauty/hair-salon/questions/working-capital/",
  },
  {
    label: "How long is the payback period?",
    href: "/franchise/beauty/hair-salon/questions/payback-period/",
  },
  {
    label: "Is a franchise better than opening an independent salon?",
    href: "/comparisons/hair-salon-vs-franchise-salon/",
  },
  {
    label: "How many salons can one franchisee own?",
    href: "/franchise/beauty/hair-salon/questions/multi-unit-ownership/",
  },
  {
    label: "What is the average EBITDA?",
    href: "/franchise/beauty/hair-salon/questions/average-ebitda/",
  },
] as const;

export const relatedFranchiseIndustries = [
  { label: "Medical Spa Franchise", href: "/franchise/beauty/medical-spa/" },
  { label: "Massage Franchise", href: "/franchise/beauty/massage/" },
  { label: "Waxing Franchise", href: "/franchise/beauty/waxing/" },
] as const;

export const franchiseFaqs = [
  {
    question: "Which hair salon franchise is most profitable?",
    answer:
      "Profitability varies more by site, labor discipline, and utilization than by brand alone. Mature high-volume value-cut units with strong plaza traffic often produce the best cash flow after 6–12% royalty and ad fees. Compare net margin after royalties, not top-line alone.",
  },
  {
    question: "Which franchise has the lowest startup cost?",
    answer:
      "Value-cut concepts such as Cost Cutters and Great Clips often sit toward the lower end of the hair salon franchise investment range ($140K–$350K). Exact totals still depend on leasehold improvements, landlord TI, and working capital requirements in your market.",
  },
  {
    question: "How much does a Great Clips franchise cost?",
    answer:
      "Great Clips total investment is typically cited in a broad band around $150K–$350K including franchise fee, buildout, equipment, inventory, and working capital. Review the current FDD Item 7 for the official range and required fees before committing.",
  },
  {
    question: "How much revenue does a franchise salon generate?",
    answer:
      "Mature hair salon franchise units commonly generate $300K–$700K in annual revenue, with many clustering around a $400K–$500K mid-point depending on chair count, ticket, and visit volume. New units typically ramp over 12–24 months.",
  },
  {
    question: "What is a typical royalty fee?",
    answer:
      "Most hair salon franchises charge about 6% of revenue in royalties plus a 2–5% advertising or brand fund. Combined ongoing fees of 6–12% are common and are the primary reason franchise net margins run below comparable independents.",
  },
  {
    question: "Can I own multiple salon franchises?",
    answer:
      "Yes — multi-unit ownership is common in salon franchising. Brands with standardized ops and booking systems (especially high-volume value-cut concepts) are designed for owners who want three or more locations after proving a first unit.",
  },
  {
    question: "Is financing available?",
    answer:
      "Many franchisees combine SBA loans, conventional bank financing, liquid capital, and franchisor-approved lending partners. Expect lenders to require liquidity beyond the franchise fee and a credible working-capital cushion for the ramp period.",
  },
] as const;
