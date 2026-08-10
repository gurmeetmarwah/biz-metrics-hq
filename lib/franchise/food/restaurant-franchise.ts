function brandHref(slug: string) {
  return `/franchise/food/restaurant-franchise/brands/${slug}/`;
}

export const restaurantFranchiseBrandSlugs = [
  "subway",
  "jersey-mikes",
  "wingstop",
  "dunkin",
  "taco-bell",
  "mcdonalds",
] as const;

export type RestaurantFranchiseBrandSlug = (typeof restaurantFranchiseBrandSlugs)[number];

export const restaurantFranchiseBrandNames: Record<RestaurantFranchiseBrandSlug, string> = {
  subway: "Subway",
  "jersey-mikes": "Jersey Mike's",
  wingstop: "Wingstop",
  dunkin: "Dunkin'",
  "taco-bell": "Taco Bell",
  mcdonalds: "McDonald's",
};

/** Preset inputs for the investment calculator (directional Item-7 style ranges). */
export const restaurantFranchiseBrandPresets: Record<
  RestaurantFranchiseBrandSlug,
  {
    franchiseFee: number;
    buildOut: number;
    equipment: number;
    realEstate: number;
    workingCapital: number;
    otherStartup: number;
  }
> = {
  subway: {
    franchiseFee: 15000,
    buildOut: 120000,
    equipment: 45000,
    realEstate: 25000,
    workingCapital: 35000,
    otherStartup: 20000,
  },
  "jersey-mikes": {
    franchiseFee: 18500,
    buildOut: 280000,
    equipment: 90000,
    realEstate: 40000,
    workingCapital: 50000,
    otherStartup: 35000,
  },
  wingstop: {
    franchiseFee: 40000,
    buildOut: 450000,
    equipment: 150000,
    realEstate: 60000,
    workingCapital: 80000,
    otherStartup: 50000,
  },
  dunkin: {
    franchiseFee: 40000,
    buildOut: 380000,
    equipment: 120000,
    realEstate: 55000,
    workingCapital: 70000,
    otherStartup: 45000,
  },
  "taco-bell": {
    franchiseFee: 45000,
    buildOut: 900000,
    equipment: 250000,
    realEstate: 120000,
    workingCapital: 100000,
    otherStartup: 80000,
  },
  mcdonalds: {
    franchiseFee: 45000,
    buildOut: 1400000,
    equipment: 400000,
    realEstate: 200000,
    workingCapital: 150000,
    otherStartup: 120000,
  },
};

export const restaurantFranchiseGuide = {
  meta: {
    title: "Restaurant Franchise Costs, Revenue, Profit & Investment",
    subtitle:
      "Compare restaurant franchise costs, initial investment, franchise fees, royalty rates, revenue potential, profit margins, owner income, and payback periods.",
    dataVintage: "2025–2026",
    sampleSize: "leading U.S. restaurant franchise systems",
    shortName: "Restaurant",
    categoryLabel: "Food",
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
      small: "$15K – $25K",
      medium: "$25K – $40K",
      large: "$40K – $50K",
    },
    {
      metric: "Royalty",
      small: "4% – 5%",
      medium: "5% – 6.5%",
      large: "6.5% – 8%",
    },
    {
      metric: "Annual Revenue",
      small: "$400K – $800K",
      medium: "$800K – $1.5M",
      large: "$1.5M – $3M+",
    },
    {
      metric: "Profit Margin",
      small: "6% – 8%",
      medium: "8% – 12%",
      large: "10% – 15%",
    },
    {
      metric: "Estimated Owner Income",
      small: "$60K – $90K",
      medium: "$90K – $140K",
      large: "$140K – $200K+",
    },
  ] as const,

  sectionNav: [
    { id: "calculator", label: "Calculator" },
    { id: "costs", label: "Costs" },
    { id: "fees", label: "Fees" },
    { id: "opportunities", label: "Opportunities" },
    { id: "revenue", label: "Revenue" },
    { id: "profitability", label: "Profitability" },
    { id: "owner-income", label: "Owner Income" },
    { id: "break-even", label: "Break-Even" },
    { id: "financing", label: "Financing" },
    { id: "vs-independent", label: "vs Independent" },
    { id: "worth-it", label: "Worth It?" },
    { id: "concepts", label: "Concepts" },
    { id: "investment-levels", label: "By Investment" },
    { id: "faq", label: "FAQ" },
  ] as const,

  costBreakdown: [
    {
      item: "Franchise Fee",
      small: "$15K – $25K",
      medium: "$25K – $40K",
      large: "$40K – $50K",
      detail: "One-time fee for brand rights, training access, and territory grant.",
    },
    {
      item: "Real Estate",
      small: "$15K – $40K",
      medium: "$40K – $100K",
      large: "$100K – $250K+",
      detail: "Security deposits, first/last rent, site fees, and landlord TI coordination.",
    },
    {
      item: "Construction / Build-out",
      small: "$80K – $250K",
      medium: "$250K – $600K",
      large: "$600K – $1.5M+",
      detail: "Leasehold improvements, HVAC, plumbing, grease trap, and brand-standard finishes.",
    },
    {
      item: "Kitchen Equipment",
      small: "$30K – $80K",
      medium: "$80K – $180K",
      large: "$180K – $400K+",
      detail: "Cooking lines, refrigeration, hoods, and franchisor-approved vendor packages.",
    },
    {
      item: "Furniture & Fixtures",
      small: "$10K – $30K",
      medium: "$30K – $60K",
      large: "$60K – $120K",
      detail: "Dining room seating, counters, décor packages, and exterior signage.",
    },
    {
      item: "POS / Technology",
      small: "$5K – $12K",
      medium: "$12K – $25K",
      large: "$25K – $40K",
      detail: "POS hardware, kitchen display, online ordering, and brand tech stack fees.",
    },
    {
      item: "Opening Inventory",
      small: "$5K – $12K",
      medium: "$12K – $25K",
      large: "$25K – $40K",
      detail: "Food, packaging, uniforms, and smallwares for launch week.",
    },
    {
      item: "Training & Travel",
      small: "$2K – $8K",
      medium: "$8K – $15K",
      large: "$15K – $25K",
      detail: "Owner/manager training tuition, travel, lodging, and wages during training.",
    },
    {
      item: "Marketing",
      small: "$8K – $20K",
      medium: "$20K – $40K",
      large: "$40K – $75K",
      detail: "Grand-opening campaigns, local store marketing, and required launch spends.",
    },
    {
      item: "Working Capital",
      small: "$25K – $50K",
      medium: "$50K – $100K",
      large: "$100K – $150K+",
      detail: "Cash to cover payroll, rent, royalties, and COGS until the store stabilizes.",
    },
    {
      item: "Other Costs",
      small: "$8K – $20K",
      medium: "$20K – $45K",
      large: "$45K – $80K",
      detail: "Licenses, insurance deposits, professional fees, contingency, and misc. CapEx.",
    },
  ] as const,

  typicalTotalInvestment: {
    small: "$150K – $500K",
    medium: "$500K – $1.2M",
    large: "$1.2M – $2.5M+",
    note: "Small = compact sandwich/coffee formats; Medium = typical fast casual / mid-QSR; Large = full QSR builds. Rebuild Item 7 with local quotes.",
  },

  feeRows: [
    {
      cost: "Initial Franchise Fee",
      small: "$15K – $25K",
      medium: "$25K – $40K",
      large: "$40K – $50K",
      impact: "Paid once at signing; does not scale with sales but raises cash required at close.",
    },
    {
      cost: "Royalty",
      small: "4% – 5%",
      medium: "5% – 6.5%",
      large: "6.5% – 8%",
      impact: "Ongoing % of gross sales — the largest long-term drag on franchise net margin.",
    },
    {
      cost: "Marketing Fee",
      small: "1% – 2%",
      medium: "2% – 3%",
      large: "3% – 4%",
      impact: "National/regional ad fund; reduces local marketing freedom but buys brand demand.",
    },
    {
      cost: "Technology Fee",
      small: "$50 – $150 / mo",
      medium: "$150 – $300 / mo",
      large: "$300 – $500 / mo",
      impact: "POS, loyalty, and ordering platforms — fixed or tiered monthly operating cost.",
    },
    {
      cost: "Renewal Fee",
      small: "$2K – $8K",
      medium: "$8K – $15K",
      large: "$15K – $25K",
      impact: "Due at term renewal; budget as a periodic CapEx-like cash event.",
    },
  ] as const,

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
      label: "Jersey Mike's",
      slug: "jersey-mikes" as const,
      href: brandHref("jersey-mikes"),
      investment: "$300K – $700K",
      franchiseFee: "$18.5K",
      royalty: "6.5%",
      revenue: "$700K – $1.2M",
      size: "Medium",
    },
    {
      label: "Wingstop",
      slug: "wingstop" as const,
      href: brandHref("wingstop"),
      investment: "$400K – $1M",
      franchiseFee: "$40K",
      royalty: "6%",
      revenue: "$1.2M – $1.8M",
      size: "Medium",
    },
    {
      label: "Dunkin'",
      slug: "dunkin" as const,
      href: brandHref("dunkin"),
      investment: "$400K – $1.5M",
      franchiseFee: "$40K",
      royalty: "5.9%",
      revenue: "$800K – $1.5M",
      size: "Medium",
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

  revenuePoints: [
    {
      title: "Average annual sales",
      detail:
        "Small formats often run $400K–$800K AUV; medium concepts $800K–$1.5M; large QSR units $1.5M–$3M+, with daypart mix driving most of the spread.",
    },
    {
      title: "Monthly sales",
      detail:
        "Translate annual AUV into monthly run-rate carefully — Q4 peaks, weather, and local events create month-to-month volatility.",
    },
    {
      title: "Revenue per location",
      detail:
        "Single-unit AUV is the starting point; multi-unit operators often see weaker early units dilute portfolio averages.",
    },
    {
      title: "Sales per square foot",
      detail:
        "Fast food and QSR often outperform casual dining on $/sq ft because of smaller footprints and higher throughput.",
    },
    {
      title: "Differences by concept",
      detail:
        "Pizza, coffee, chicken, burger, and Mexican concepts land in different AUV bands — never average them into one “restaurant” number.",
    },
    {
      title: "New vs mature locations",
      detail:
        "Year-1 stores often run 40–70% of mature AUV while the guest base builds; underwrite ramp, not day-one peak sales.",
    },
  ] as const,

  revenueBenchmark: {
    small: "$400K – $800K",
    medium: "$800K – $1.5M",
    large: "$1.5M – $3M+",
  },

  pnlRows: [
    { label: "Annual Revenue", value: "$1,000,000", kind: "revenue" as const },
    { label: "Food costs", value: "−$280,000 – $320,000", kind: "expense" as const },
    { label: "Labor", value: "−$250,000 – $320,000", kind: "expense" as const },
    { label: "Rent", value: "−$60,000 – $100,000", kind: "expense" as const },
    { label: "Royalty", value: "−$40,000 – $80,000", kind: "expense" as const },
    { label: "Marketing", value: "−$20,000 – $40,000", kind: "expense" as const },
    { label: "Utilities", value: "−$20,000 – $40,000", kind: "expense" as const },
    { label: "Insurance", value: "−$8,000 – $20,000", kind: "expense" as const },
    { label: "Other operating expenses", value: "−$40,000 – $80,000", kind: "expense" as const },
    { label: "Operating Profit", value: "$80,000 – $150,000", kind: "result" as const },
  ],

  profitMarginBenchmark: {
    small: "6% – 8%",
    medium: "8% – 12%",
    large: "10% – 15%",
  },
  profitExample: {
    small: "$1M Revenue → ~$60K–$80K operating profit",
    medium: "$1M Revenue → ~$80K–$120K operating profit",
    large: "$1M Revenue → ~$100K–$150K operating profit",
  },

  ownerIncomeBenchmark: {
    small: "$60K – $90K",
    medium: "$90K – $140K",
    large: "$140K – $200K+",
    note: "Mature single-unit owner benefit by store size; multi-unit operators often earn above the large band.",
  },

  breakEvenExample: {
    investment: "$750,000",
    monthlyProfit: "$15,000",
    annualProfit: "$180,000",
    paybackYears: "~4.2 years",
    disclaimer:
      "Illustrative calculation using directional averages — rebuild with current FDD Item 7 figures, local rent, and your financing terms.",
  },

  financingOptions: [
    {
      title: "SBA loan",
      detail: "Common path for franchise CapEx; often finances a large share of eligible startup costs with longer terms.",
    },
    {
      title: "Conventional business loan",
      detail: "Bank or credit-union term debt when credit, collateral, and experience meet underwriting bars.",
    },
    {
      title: "Franchisor financing",
      detail: "Some brands offer deferred fees, in-house notes, or preferred lender networks — terms vary widely.",
    },
    {
      title: "Equipment financing",
      detail: "Leases or loans secured by kitchen equipment to preserve working-capital cash.",
    },
    {
      title: "Personal capital",
      detail: "Savings, home equity, and retirement rollovers often fund the cash down payment lenders require.",
    },
    {
      title: "Investor / partner capital",
      detail: "Equity partners can cover cash gaps in exchange for ownership and governance rights.",
    },
  ] as const,

  cashRequirementExample: {
    small: { totalInvestment: "$350K", financed: "$245K", cashRequired: "$105K" },
    medium: { totalInvestment: "$800K", financed: "$560K", cashRequired: "$240K" },
    large: { totalInvestment: "$1.8M", financed: "$1.26M", cashRequired: "$540K" },
    note: "Assumes ~70% financing — many SBA deals land near 20–40% borrower cash injection.",
  },

  vsIndependent: [
    { factor: "Brand recognition", franchise: "High", independent: "Low initially" },
    { factor: "Franchise fee", franchise: "Yes", independent: "No" },
    { factor: "Royalties", franchise: "Yes", independent: "No" },
    { factor: "Operating freedom", franchise: "Lower", independent: "Higher" },
    { factor: "Proven model", franchise: "Usually", independent: "Must build" },
    { factor: "Marketing support", franchise: "Usually", independent: "Owner-funded" },
    { factor: "Startup cost", franchise: "Small / Medium / Large tiers", independent: "Varies widely" },
    { factor: "Failure risk", franchise: "Still significant", independent: "Still significant" },
  ] as const,

  advantages: [
    "Established brand",
    "Operating systems",
    "Training",
    "Supplier network",
    "Marketing support",
  ] as const,

  disadvantages: [
    "Franchise fees",
    "Royalties",
    "Marketing fees",
    "Contract restrictions",
    "High initial investment",
    "Location risk",
  ] as const,

  roiScorecard: [
    { factor: "Initial investment", guidance: "Lower CapEx improves cash-on-cash if AUV holds." },
    { factor: "Revenue potential", guidance: "Mature AUV and daypart mix set the ceiling." },
    { factor: "Profit margin", guidance: "After royalty and rent — not pre-fee EBITDA claims." },
    { factor: "Royalty burden", guidance: "Stack royalty + marketing + tech fees annually." },
    { factor: "Break-even period", guidance: "Months to cash-flow positive vs years to payback." },
    { factor: "Owner involvement", guidance: "Absentee vs owner-operator changes labor cost." },
    { factor: "Financing requirement", guidance: "Cash down + reserves often exceed franchise fee." },
  ] as const,

  concepts: [
    { label: "Fast Food Franchise", href: "/franchise/food/restaurant-franchise/fast-food/", comingSoon: true },
    { label: "Fast Casual Franchise", href: "/franchise/food/fast-casual-franchise/", comingSoon: true },
    { label: "Casual Dining Franchise", href: "/franchise/food/restaurant-franchise/casual-dining/", comingSoon: true },
    { label: "Pizza Franchise", href: "/franchise/food/restaurant-franchise/pizza/", comingSoon: true },
    { label: "Coffee & Café Franchise", href: "/franchise/food/coffee-shop-franchise/", comingSoon: true },
    { label: "Chicken Franchise", href: "/franchise/food/restaurant-franchise/chicken/", comingSoon: true },
    { label: "Burger Franchise", href: "/franchise/food/restaurant-franchise/burger/", comingSoon: true },
    { label: "Mexican / Tex-Mex Franchise", href: "/franchise/food/restaurant-franchise/mexican/", comingSoon: true },
    { label: "Asian Restaurant Franchise", href: "/franchise/food/restaurant-franchise/asian/", comingSoon: true },
    { label: "Bakery & Dessert Franchise", href: "/franchise/food/bakery-franchise/", comingSoon: true },
  ] as const,

  investmentLevels: [
    { label: "Under $250K", href: "/franchise/food/restaurant-franchise/under-250k/", comingSoon: true },
    { label: "$250K–$500K", href: "/franchise/food/restaurant-franchise/under-500k/", comingSoon: true },
    { label: "$500K–$1M", href: "/franchise/food/restaurant-franchise/under-1m/", comingSoon: true },
    { label: "$1M–$2M", href: "/franchise/food/restaurant-franchise/1m-2m/", comingSoon: true },
    { label: "Over $2M", href: "/franchise/food/restaurant-franchise/over-2m/", comingSoon: true },
  ] as const,

  faqs: [
    {
      question: "How much does it cost to open a restaurant franchise?",
      answer:
        "Restaurant franchise investment is best planned by size: Small formats typically cost $150K–$500K, Medium $500K–$1.2M, and Large QSR builds $1.2M–$2.5M+. That includes the franchise fee (Small $15K–$25K, Medium $25K–$40K, Large $40K–$50K), build-out, equipment, real estate deposits, tech, inventory, training, marketing, and working capital. Always rebuild Item 7 with local contractor quotes before you buy.",
    },
    {
      question: "How much does a restaurant franchise owner make?",
      answer:
        "Mature single-unit owner income typically falls into Small $60K–$90K, Medium $90K–$140K, or Large $140K–$200K+ depending on AUV and cost control. Revenue is not personal income — operating profit must still cover owner compensation, debt service, and reserves. Multi-unit operators often earn above the large band once shared management is in place.",
    },
    {
      question: "How profitable is a restaurant franchise?",
      answer:
        "Operating margins commonly land around Small 6–8%, Medium 8–12%, and Large/top operators 10–15% after royalties and marketing fees. At $1M revenue, that implies roughly $60K–$80K (small), $80K–$120K (medium), or $100K–$150K (large) operating profit before debt service. Profitability hinges on food cost, labor, rent, and the full fee stack.",
    },
    {
      question: "What is the average restaurant franchise profit margin?",
      answer:
        "Most restaurant franchises cluster in the medium band around 8–12% after fees, with lean small formats nearer 6–8% and strong large operators reaching 10–15%. Franchises often trail well-run independents on net margin because royalties and marketing fees skim several points of sales. Compare brands on after-fee cash flow, not franchisee sales claims alone.",
    },
    {
      question: "How much revenue does a restaurant franchise generate?",
      answer:
        "Annual unit volume typically falls into Small $400K–$800K, Medium $800K–$1.5M, or Large $1.5M–$3M+ depending on concept and location maturity. Monthly sales, sales per square foot, and new-vs-mature store gaps create wide variance inside the same brand. Never assume every franchise earns the same amount.",
    },
    {
      question: "How long does it take to break even on a restaurant franchise?",
      answer:
        "Many units reach monthly operating break-even within roughly 12–24 months, while full investment payback often takes 3–6 years of cumulative free cash flow. A simple illustration: $750K invested at $15K monthly profit implies about 4.2 years to recover capital. Rebuild the model with your CapEx, rent, and financing — national averages are directional only.",
    },
    {
      question: "What restaurant franchises have the lowest startup costs?",
      answer:
        "Small-tier restaurant franchises (typically under $500K) often include compact sandwich, pizza delivery, or limited-service formats when real estate and build-out stay lean. Brands like Subway historically sit in the small CapEx band, though local landlord and renovation costs still dominate the total. Low investment does not automatically mean high ROI — underwrite AUV and after-fee margins.",
    },
    {
      question: "Are restaurant franchises worth buying?",
      answer:
        "A restaurant franchise can be worth it when brand demand, operating systems, and supplier networks produce after-fee cash flow that justifies the CapEx and royalties for your size tier. It is less attractive when fees are high, territory quality is weak, or you already have a differentiated local concept. Score investment, revenue, margin, royalty burden, break-even, owner involvement, and cash required by Small / Medium / Large fit — not a generic yes/no.",
    },
  ] as const,

  exploreRestaurantEconomics: [
    { label: "Restaurant Startup Costs", href: "/industries/restaurant/" },
    { label: "Restaurant Revenue", href: "/industries/restaurant/#revenue" },
    { label: "Restaurant Profit Margin", href: "/industries/restaurant/#profit-margins" },
    { label: "Restaurant Owner Salary", href: "/industries/restaurant/#owner-salary" },
    { label: "Restaurant Valuation", href: "/industries/restaurant/#valuation" },
    { label: "Restaurant Industry Benchmarks", href: "/industries/restaurant/" },
  ] as const,

  exploreOtherFranchises: [
    { label: "Coffee Franchise", href: "/franchise/food/coffee-shop-franchise/", comingSoon: true },
    { label: "Bakery Franchise", href: "/franchise/food/bakery-franchise/", comingSoon: true },
    { label: "Food Truck Franchise", href: "/franchise/food/food-truck-franchise/", comingSoon: true },
    { label: "Gym Franchise", href: "/franchise/fitness/gym/" },
    { label: "Beauty Franchise", href: "/franchise/#beauty" },
    { label: "Home Services Franchise", href: "/franchise/#home-services" },
  ] as const,
};
