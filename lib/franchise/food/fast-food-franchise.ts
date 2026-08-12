function brandHref(slug: string) {
  return `/franchise/food/restaurant-franchise/fast-food/brands/${slug}/`;
}

export const fastFoodFranchiseBrandSlugs = [
  "subway",
  "dairy-queen",
  "popeyes",
  "wendys",
  "taco-bell",
  "mcdonalds",
] as const;

export type FastFoodFranchiseBrandSlug = (typeof fastFoodFranchiseBrandSlugs)[number];

export const fastFoodFranchiseBrandNames: Record<FastFoodFranchiseBrandSlug, string> = {
  subway: "Subway",
  "dairy-queen": "Dairy Queen",
  popeyes: "Popeyes",
  wendys: "Wendy's",
  "taco-bell": "Taco Bell",
  mcdonalds: "McDonald's",
};

/** Directional Item-7 style presets for the investment calculator. */
export const fastFoodFranchiseBrandPresets: Record<
  FastFoodFranchiseBrandSlug,
  {
    franchiseFee: number;
    buildOut: number;
    equipment: number;
    realEstate: number;
    workingCapital: number;
    otherStartup: number;
    /** Typical mature-unit annual revenue assumption. */
    annualRevenue: number;
    operatingMarginPct: number;
  }
> = {
  subway: {
    franchiseFee: 15000,
    buildOut: 140000,
    equipment: 50000,
    realEstate: 30000,
    workingCapital: 40000,
    otherStartup: 25000,
    annualRevenue: 550000,
    operatingMarginPct: 10,
  },
  "dairy-queen": {
    franchiseFee: 35000,
    buildOut: 320000,
    equipment: 120000,
    realEstate: 55000,
    workingCapital: 65000,
    otherStartup: 45000,
    annualRevenue: 900000,
    operatingMarginPct: 11,
  },
  popeyes: {
    franchiseFee: 50000,
    buildOut: 550000,
    equipment: 180000,
    realEstate: 80000,
    workingCapital: 90000,
    otherStartup: 60000,
    annualRevenue: 1400000,
    operatingMarginPct: 12,
  },
  wendys: {
    franchiseFee: 40000,
    buildOut: 900000,
    equipment: 280000,
    realEstate: 150000,
    workingCapital: 120000,
    otherStartup: 90000,
    annualRevenue: 1800000,
    operatingMarginPct: 11,
  },
  "taco-bell": {
    franchiseFee: 45000,
    buildOut: 950000,
    equipment: 260000,
    realEstate: 140000,
    workingCapital: 110000,
    otherStartup: 85000,
    annualRevenue: 1900000,
    operatingMarginPct: 12,
  },
  mcdonalds: {
    franchiseFee: 45000,
    buildOut: 1400000,
    equipment: 400000,
    realEstate: 220000,
    workingCapital: 160000,
    otherStartup: 130000,
    annualRevenue: 3200000,
    operatingMarginPct: 13,
  },
};

export const fastFoodFranchiseGuide = {
  meta: {
    title: "Fast Food Franchise Guide: Costs, Revenue, Profit & Investment",
    subtitle:
      "Compare fast food franchise costs, cheapest QSR options under $500K, franchise fees, royalties, revenue, profit margins, owner income, cash required, and payback periods.",
    dataVintage: "2025–2026",
    sampleSize: "leading U.S. QSR / fast food franchise systems",
    shortName: "Fast Food",
    categoryLabel: "Food",
    parentLabel: "Restaurant",
    parentHref: "/franchise/food/restaurant-franchise/",
  },

  heroBenchmarks: [
    {
      metric: "Initial Investment",
      small: "$150K – $500K",
      medium: "$500K – $1.2M",
      large: "$1.2M – $2.5M+",
    },
    {
      metric: "Franchise Fee",
      small: "$10K – $25K",
      medium: "$25K – $45K",
      large: "$40K – $50K",
    },
    {
      metric: "Royalty",
      small: "4% – 5%",
      medium: "5% – 6.5%",
      large: "4% – 8%",
    },
    {
      metric: "Annual Revenue",
      small: "$400K – $800K",
      medium: "$800K – $1.8M",
      large: "$1.8M – $3.5M+",
    },
    {
      metric: "Profit Margin",
      small: "6% – 10%",
      medium: "8% – 13%",
      large: "10% – 15%",
    },
    {
      metric: "Owner Income",
      small: "$55K – $95K",
      medium: "$95K – $160K",
      large: "$160K – $250K+",
    },
  ] as const,

  sectionNav: [
    { id: "calculator", label: "Calculator" },
    { id: "costs", label: "Costs" },
    { id: "compare-brands", label: "Brands" },
    { id: "investment-levels", label: "By Investment" },
    { id: "fees", label: "Fees" },
    { id: "revenue", label: "Revenue" },
    { id: "profitability", label: "Profit" },
    { id: "owner-income", label: "Owner Income" },
    { id: "break-even", label: "Break-Even" },
    { id: "roi", label: "ROI" },
    { id: "drive-through", label: "Drive-Through" },
    { id: "vs-independent", label: "vs Independent" },
    { id: "worth-it", label: "Worth It?" },
    { id: "types", label: "Types" },
    { id: "faq", label: "FAQ" },
    { id: "data-sources", label: "Sources" },
  ] as const,

  costBreakdown: [
    {
      item: "Franchise fee",
      small: "$10K – $25K",
      medium: "$25K – $45K",
      large: "$40K – $50K",
      detail: "One-time brand rights, training access, and territory grant.",
    },
    {
      item: "Real estate",
      small: "$15K – $45K",
      medium: "$45K – $120K",
      large: "$120K – $300K+",
      detail: "Deposits, site fees, and landlord coordination — higher for freestanding pads.",
    },
    {
      item: "Construction",
      small: "$80K – $250K",
      medium: "$250K – $700K",
      large: "$700K – $1.6M+",
      detail: "Leasehold improvements, drive-through lanes, HVAC, and brand finishes.",
    },
    {
      item: "Kitchen equipment",
      small: "$35K – $90K",
      medium: "$90K – $220K",
      large: "$220K – $450K+",
      detail: "Cooking lines, fryers, refrigeration, hoods, and franchisor packages.",
    },
    {
      item: "Furniture",
      small: "$10K – $30K",
      medium: "$30K – $70K",
      large: "$70K – $140K",
      detail: "Dining room seating, counters, décor, and exterior signage.",
    },
    {
      item: "POS / technology",
      small: "$6K – $15K",
      medium: "$15K – $30K",
      large: "$30K – $50K",
      detail: "POS, kitchen display, drive-through timers, and loyalty platforms.",
    },
    {
      item: "Initial inventory",
      small: "$6K – $15K",
      medium: "$15K – $30K",
      large: "$30K – $50K",
      detail: "Food, packaging, uniforms, and smallwares for opening week.",
    },
    {
      item: "Training",
      small: "$2K – $10K",
      medium: "$10K – $20K",
      large: "$20K – $35K",
      detail: "Owner/manager training tuition, travel, lodging, and wages.",
    },
    {
      item: "Insurance",
      small: "$3K – $8K",
      medium: "$8K – $18K",
      large: "$18K – $35K",
      detail: "Liability, property, workers’ comp deposits, and required coverage.",
    },
    {
      item: "Pre-opening marketing",
      small: "$8K – $20K",
      medium: "$20K – $45K",
      large: "$45K – $80K",
      detail: "Grand opening campaigns and required local store marketing.",
    },
    {
      item: "Working capital",
      small: "$25K – $55K",
      medium: "$55K – $110K",
      large: "$110K – $180K+",
      detail: "Cash for payroll, rent, royalties, and COGS until sales stabilize.",
    },
  ] as const,

  typicalTotalInvestment: {
    small: "$150K – $500K",
    medium: "$500K – $1.2M",
    large: "$1.2M – $2.5M+",
    note:
      "Costs vary substantially by site type: freestanding and drive-through pads cost more than strip-center, mall, or inline locations because of land, construction, and equipment intensity.",
  },

  franchiseBrands: [
    {
      label: "Subway",
      slug: "subway" as const,
      href: brandHref("subway"),
      investment: "$150K – $400K",
      franchiseFee: "$15K",
      royalty: "8%",
      revenue: "$400K – $700K",
      size: "Small",
    },
    {
      label: "Dairy Queen",
      slug: "dairy-queen" as const,
      href: brandHref("dairy-queen"),
      investment: "$400K – $1.0M",
      franchiseFee: "$35K",
      royalty: "4% + ads",
      revenue: "$700K – $1.2M",
      size: "Medium",
    },
    {
      label: "Popeyes",
      slug: "popeyes" as const,
      href: brandHref("popeyes"),
      investment: "$500K – $1.5M",
      franchiseFee: "$50K",
      royalty: "5%",
      revenue: "$1.0M – $1.8M",
      size: "Medium",
    },
    {
      label: "Wendy's",
      slug: "wendys" as const,
      href: brandHref("wendys"),
      investment: "$1.0M – $3.5M+",
      franchiseFee: "$40K",
      royalty: "4% + ads",
      revenue: "$1.5M – $2.5M+",
      size: "Large",
    },
    {
      label: "Taco Bell",
      slug: "taco-bell" as const,
      href: brandHref("taco-bell"),
      investment: "$1.2M – $2.5M+",
      franchiseFee: "$45K",
      royalty: "5.5%",
      revenue: "$1.5M – $2.5M+",
      size: "Large",
    },
    {
      label: "McDonald's",
      slug: "mcdonalds" as const,
      href: brandHref("mcdonalds"),
      investment: "$1.5M – $2.5M+",
      franchiseFee: "$45K",
      royalty: "~4% + rent",
      revenue: "$2.5M – $4M+",
      size: "Large",
    },
  ] as const,

  investmentLevels: [
    {
      label: "Under $250K",
      detail: "Lower-investment concepts and cheapest fast food franchises",
      href: "#compare-brands",
      filter: "Small",
    },
    {
      label: "$250K–$500K",
      detail: "Mid-range opportunities and fast food franchises under $500K",
      href: "#compare-brands",
      filter: "Small",
    },
    {
      label: "$500K–$1M",
      detail: "Established restaurant formats",
      href: "#compare-brands",
      filter: "Medium",
    },
    {
      label: "$1M+",
      detail: "Large-format / drive-through concepts",
      href: "#compare-brands",
      filter: "Large",
    },
  ] as const,

  feeRows: [
    {
      cost: "Initial Franchise Fee",
      small: "$10K – $25K",
      medium: "$25K – $45K",
      large: "$40K – $50K",
      impact: "Paid once at signing; raises cash at close but does not scale with sales.",
    },
    {
      cost: "Royalty Fee",
      small: "4% – 5%",
      medium: "5% – 6.5%",
      large: "4% – 8%",
      impact: "Ongoing % of gross sales — usually the largest long-term margin drag.",
    },
    {
      cost: "Marketing Fee",
      small: "1% – 2%",
      medium: "2% – 3.5%",
      large: "3% – 4.5%",
      impact: "National/regional ad fund; buys brand demand but reduces local spend freedom.",
    },
    {
      cost: "Technology Fee",
      small: "$50 – $150 / mo",
      medium: "$150 – $350 / mo",
      large: "$300 – $600 / mo",
      impact: "POS, loyalty, drive-through, and ordering platforms as fixed OpEx.",
    },
    {
      cost: "Renewal Fee",
      small: "$2K – $8K",
      medium: "$8K – $18K",
      large: "$15K – $25K",
      impact: "Due at term renewal; budget as a periodic CapEx-like cash event.",
    },
  ] as const,

  feeInsight:
    "A franchise with a lower initial fee isn't necessarily cheaper to operate. Ongoing royalty and marketing fees can have a much larger effect on long-term profitability than the one-time franchise fee.",

  revenuePoints: [
    {
      title: "Average annual sales",
      detail:
        "Mature fast food AUVs commonly land Small $400K–$800K, Medium $800K–$1.8M, and Large $1.8M–$3.5M+ depending on daypart and drive-through volume.",
    },
    {
      title: "Monthly revenue",
      detail:
        "Translate annual AUV carefully — weather, local events, and Q4 promotions create month-to-month volatility.",
    },
    {
      title: "Revenue per location",
      detail:
        "Single-unit AUV is the planning baseline; multi-unit portfolios often include weaker early stores that dilute averages.",
    },
    {
      title: "Revenue per square foot",
      detail:
        "QSR and drive-through formats often outperform traditional dining on $/sq ft because of smaller footprints and higher throughput.",
    },
    {
      title: "Sales growth",
      detail:
        "Year-1 stores frequently run 40–70% of mature AUV while guest traffic builds — underwrite ramp, not day-one peak sales.",
    },
  ] as const,

  revenueBenchmark: {
    small: "$400K – $800K",
    medium: "$800K – $1.8M",
    large: "$1.8M – $3.5M+",
    note: "Figures reflect typical average unit volume (AUV) bands — not a guarantee of owner take-home revenue.",
  },

  pnlRows: [
    { label: "Revenue", value: "$1,200,000", kind: "revenue" as const },
    { label: "Food & packaging", value: "−$300,000 – $360,000", kind: "expense" as const },
    { label: "Labor", value: "−$280,000 – $360,000", kind: "expense" as const },
    { label: "Rent", value: "−$70,000 – $120,000", kind: "expense" as const },
    { label: "Royalty", value: "−$48,000 – $96,000", kind: "expense" as const },
    { label: "Marketing", value: "−$24,000 – $48,000", kind: "expense" as const },
    { label: "Utilities", value: "−$24,000 – $48,000", kind: "expense" as const },
    { label: "Insurance", value: "−$10,000 – $24,000", kind: "expense" as const },
    { label: "Other operating expenses", value: "−$48,000 – $96,000", kind: "expense" as const },
    { label: "Operating Profit", value: "$100,000 – $180,000", kind: "result" as const },
  ],

  profitMarginBenchmark: {
    small: "6% – 10%",
    medium: "8% – 13%",
    large: "10% – 15%",
  },
  profitExample: {
    small: "$1M Revenue → ~$60K–$100K operating profit",
    medium: "$1M Revenue → ~$80K–$130K operating profit",
    large: "$1M Revenue → ~$100K–$150K operating profit",
  },
  profitDisclaimer:
    "Illustrative estimates for planning — rebuild with current FDD Item 19 / Item 7 figures and local operating costs. Not reported franchise earnings claims.",

  ownerIncomeExample: [
    { metric: "Revenue", value: "$1,200,000" },
    { metric: "Operating Profit", value: "$180,000" },
    { metric: "Debt Service", value: "$60,000" },
    { metric: "Owner Compensation", value: "$120,000" },
  ] as const,

  ownerIncomeDrivers: [
    "Number of locations",
    "Owner involvement (operator vs absentee)",
    "Financing and debt service",
    "Labor costs and scheduling",
    "Rent as a percent of sales",
    "Location performance / AUV",
  ] as const,

  ownerIncomeBenchmark: {
    small: "$55K – $95K",
    medium: "$95K – $160K",
    large: "$160K – $250K+",
    note: "Mature single-unit owner benefit by store size. Revenue ≠ profit ≠ owner income.",
  },

  breakEvenDefaults: {
    investment: 750000,
    annualRevenue: 1200000,
    operatingMarginPct: 12.5,
    financedPct: 70,
    interestRatePct: 8.5,
    ownerDrawPct: 40,
  },

  roiMetrics: [
    {
      title: "ROI",
      formula: "Annual profit ÷ invested capital",
      detail: "Measures how hard total CapEx works after operating profit.",
    },
    {
      title: "Cash-on-Cash Return",
      formula: "Annual cash flow ÷ cash invested",
      detail: "Focuses on your down payment and reserves — often the metric buyers care about most.",
    },
    {
      title: "Payback Period",
      formula: "Initial investment ÷ annual cash flow",
      detail: "Simple years to recover invested capital from free cash flow.",
    },
  ] as const,

  driveThroughVsTraditional: [
    { metric: "Investment", driveThrough: "Higher", traditional: "Lower" },
    { metric: "Real estate", driveThrough: "Larger", traditional: "Smaller" },
    { metric: "Revenue potential", driveThrough: "Higher", traditional: "Varies" },
    { metric: "Staffing", driveThrough: "Higher", traditional: "Lower" },
    { metric: "Operating complexity", driveThrough: "Higher", traditional: "Moderate" },
    { metric: "Location dependence", driveThrough: "Very high", traditional: "High" },
  ] as const,

  vsIndependent: [
    { factor: "Brand", franchise: "Established", independent: "Build yourself" },
    { factor: "Franchise fee", franchise: "Yes", independent: "No" },
    { factor: "Royalty", franchise: "Yes", independent: "No" },
    { factor: "Systems", franchise: "Established", independent: "Build yourself" },
    { factor: "Menu flexibility", franchise: "Limited", independent: "High" },
    { factor: "Marketing", franchise: "Franchisor support", independent: "Owner-funded" },
    { factor: "Startup risk", franchise: "Still significant", independent: "Higher uncertainty" },
  ] as const,

  scorecard: [
    { factor: "Initial investment", importance: "High" },
    { factor: "Revenue potential", importance: "High" },
    { factor: "Profit margin", importance: "High" },
    { factor: "Royalty burden", importance: "High" },
    { factor: "Location economics", importance: "Very High" },
    { factor: "Break-even period", importance: "High" },
    { factor: "Owner involvement", importance: "Medium" },
    { factor: "Financing requirement", importance: "High" },
  ] as const,

  bestSuitedFor: [
    "Investors with sufficient capital and liquidity reserves",
    "Operators comfortable managing employees and peak-hour throughput",
    "Multi-unit operators seeking repeatable QSR systems",
    "Buyers willing to follow a proven operating system and brand standards",
  ] as const,

  types: [
    { label: "Burger Franchises", href: "/franchise/food/restaurant-franchise/fast-food/burger/", comingSoon: true },
    { label: "Chicken Franchises", href: "/franchise/food/restaurant-franchise/fast-food/chicken/", comingSoon: true },
    { label: "Pizza Franchises", href: "/franchise/food/restaurant-franchise/fast-food/pizza/", comingSoon: true },
    { label: "Mexican Fast Food", href: "/franchise/food/restaurant-franchise/fast-food/mexican/", comingSoon: true },
    { label: "Sandwich Franchises", href: "/franchise/food/restaurant-franchise/fast-food/sandwich/", comingSoon: true },
    { label: "Asian Fast Food", href: "/franchise/food/restaurant-franchise/fast-food/asian/", comingSoon: true },
    { label: "Breakfast Franchises", href: "/franchise/food/restaurant-franchise/fast-food/breakfast/", comingSoon: true },
    { label: "Healthy Fast Food", href: "/franchise/food/restaurant-franchise/fast-food/healthy/", comingSoon: true },
    { label: "Ice Cream & Dessert Franchises", href: "/franchise/food/restaurant-franchise/fast-food/dessert/", comingSoon: true },
  ] as const,

  faqs: [
    {
      question: "How much does a fast food franchise cost?",
      answer:
        "Fast food franchise costs typically fall into Small $150K–$500K, Medium $500K–$1.2M, and Large $1.2M–$2.5M+ total initial investment. That includes the franchise fee, real estate deposits, construction, kitchen equipment, furniture, POS/technology, inventory, training, insurance, pre-opening marketing, and working capital. Freestanding and drive-through sites cost more than strip-center or inline locations. Always rebuild Item 7 with local contractor quotes.",
    },
    {
      question: "How much does a fast food franchise owner make?",
      answer:
        "Mature single-unit owner income commonly lands Small $55K–$95K, Medium $95K–$160K, or Large $160K–$250K+ depending on AUV, rent, labor, and debt service. Revenue is not personal income — operating profit must still cover owner compensation and loan payments. Multi-unit operators can earn more once shared management is in place.",
    },
    {
      question: "How profitable is a fast food franchise?",
      answer:
        "Well-run fast food franchises often post roughly 6–15% operating margins after royalties and marketing fees, with medium formats clustering near 8–13%. At $1M revenue, that implies about $60K–$150K operating profit before debt service depending on cost control. Location throughput and royalty burden drive most of the spread.",
    },
    {
      question: "What is the average fast food franchise profit margin?",
      answer:
        "Average fast food franchise profit margins typically sit around 8–13% after ongoing fees for solid operators, with lean small formats nearer 6–10% and strong large/drive-through units reaching 10–15%. Compare brands on after-fee cash flow, not top-line sales claims alone.",
    },
    {
      question: "How much revenue does a fast food franchise generate?",
      answer:
        "Annual unit volume commonly ranges Small $400K–$800K, Medium $800K–$1.8M, and Large $1.8M–$3.5M+. Drive-through volume, daypart mix, and site quality create wide variance inside the same brand. Distinguish systemwide AUV from your actual owner economics.",
    },
    {
      question: "What are the cheapest fast food franchises?",
      answer:
        "The cheapest fast food franchises usually sit in the Small investment band under about $500K — often compact sandwich or limited-service formats like Subway when build-out stays lean. Low CapEx does not automatically mean high ROI; underwrite AUV and after-fee margins carefully.",
    },
    {
      question: "What fast food franchises cost under $500K?",
      answer:
        "Fast food franchises under $500K typically include compact sandwich, dessert, or limited-service concepts with strip-center or inline footprints rather than freestanding drive-through pads. Confirm current FDD Item 7 ranges — landlord TI and equipment quotes can push a “sub-$500K” concept over the line.",
    },
    {
      question: "How long does it take to recover a fast food franchise investment?",
      answer:
        "Many fast food units reach monthly operating break-even in roughly 12–24 months, while full investment payback often takes about 3–6 years of cumulative free cash flow. A simple illustration: $750K invested at $150K annual operating profit implies about a 5-year simple payback. Rebuild with your CapEx, margin, and financing.",
    },
    {
      question: "Are fast food franchises worth it?",
      answer:
        "A fast food franchise can be worth it when location economics, after-fee margins, and capital requirements fit your goals — especially for multi-unit operators who want proven systems. It is less attractive when royalties are high, territory quality is weak, or you lack liquidity for working capital. Score investment, revenue, margin, royalty burden, break-even, and owner involvement before buying.",
    },
    {
      question: "How much cash do I need to open a fast food franchise?",
      answer:
        "Cash required is usually 20–40% of total investment after financing. On a Medium ~$800K project at ~70% financing, plan for roughly $240K cash plus liquidity reserves. Large drive-through builds can require $400K–$600K+ cash at close. Lenders often want working capital beyond the franchise fee alone.",
    },
  ] as const,

  exploreLinks: [
    { label: "Restaurant Franchise Guide", href: "/franchise/food/restaurant-franchise/" },
    { label: "Restaurant Franchise vs Independent", href: "/franchise/food/restaurant-franchise/#vs-independent" },
    { label: "Restaurant Startup Costs", href: "/industries/restaurant/" },
    { label: "Restaurant Profit Margin", href: "/industries/restaurant/#profit-margins" },
    { label: "Restaurant Owner Salary", href: "/industries/restaurant/#owner-salary" },
    { label: "Gym Franchise Costs", href: "/franchise/fitness/gym/" },
    { label: "Hair Salon Franchise", href: "/franchise/beauty/hair-salon/" },
    { label: "Franchise Economics Hub", href: "/franchise/" },
    { label: "Coffee Franchise", href: "/franchise/food/coffee-shop-franchise/", comingSoon: true },
  ] as const,
};
