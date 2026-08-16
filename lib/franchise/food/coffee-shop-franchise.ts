function brandHref(slug: string) {
  return `/franchise/food/coffee-shop-franchise/brands/${slug}/`;
}

export const coffeeShopFranchiseBrandSlugs = [
  "dunkin",
  "dutch-bros",
  "scooters-coffee",
  "7-brew",
  "the-human-bean",
  "pjs-coffee",
  "tim-hortons",
  "biggby-coffee",
] as const;

export type CoffeeShopFranchiseBrandSlug = (typeof coffeeShopFranchiseBrandSlugs)[number];

export const coffeeShopFranchiseBrandNames: Record<CoffeeShopFranchiseBrandSlug, string> = {
  dunkin: "Dunkin'",
  "dutch-bros": "Dutch Bros",
  "scooters-coffee": "Scooter's Coffee",
  "7-brew": "7 Brew",
  "the-human-bean": "The Human Bean",
  "pjs-coffee": "PJ's Coffee",
  "tim-hortons": "Tim Hortons",
  "biggby-coffee": "Biggby Coffee",
};

export type CoffeeInvestmentBand = "under-250k" | "250k-500k" | "500k-plus";
export type CoffeeBusinessModel = "drive-thru" | "cafe" | "drive-thru-cafe" | "kiosk";
export type CoffeeInvestorType = "first-time" | "owner-operator" | "multi-unit";

/** Directional Item-7 style presets for the ROI calculator. */
export const coffeeShopFranchiseBrandPresets: Record<
  CoffeeShopFranchiseBrandSlug,
  {
    franchiseFee: number;
    initialInvestment: number;
    monthlyRevenue: number;
    grossMarginPct: number;
    laborPct: number;
    monthlyRent: number;
    royaltyPct: number;
    marketingPct: number;
    otherMonthlyOpEx: number;
    loanPct: number;
  }
> = {
  dunkin: {
    franchiseFee: 40000,
    initialInvestment: 650000,
    monthlyRevenue: 85000,
    grossMarginPct: 68,
    laborPct: 28,
    monthlyRent: 6500,
    royaltyPct: 5.9,
    marketingPct: 5,
    otherMonthlyOpEx: 4500,
    loanPct: 70,
  },
  "dutch-bros": {
    franchiseFee: 30000,
    initialInvestment: 750000,
    monthlyRevenue: 110000,
    grossMarginPct: 70,
    laborPct: 26,
    monthlyRent: 5500,
    royaltyPct: 5,
    marketingPct: 2,
    otherMonthlyOpEx: 5000,
    loanPct: 70,
  },
  "scooters-coffee": {
    franchiseFee: 40000,
    initialInvestment: 550000,
    monthlyRevenue: 70000,
    grossMarginPct: 69,
    laborPct: 27,
    monthlyRent: 4500,
    royaltyPct: 6,
    marketingPct: 2,
    otherMonthlyOpEx: 3800,
    loanPct: 65,
  },
  "7-brew": {
    franchiseFee: 35000,
    initialInvestment: 600000,
    monthlyRevenue: 95000,
    grossMarginPct: 71,
    laborPct: 25,
    monthlyRent: 4800,
    royaltyPct: 6,
    marketingPct: 2,
    otherMonthlyOpEx: 4200,
    loanPct: 70,
  },
  "the-human-bean": {
    franchiseFee: 30000,
    initialInvestment: 420000,
    monthlyRevenue: 55000,
    grossMarginPct: 70,
    laborPct: 26,
    monthlyRent: 3800,
    royaltyPct: 5,
    marketingPct: 1.5,
    otherMonthlyOpEx: 3200,
    loanPct: 65,
  },
  "pjs-coffee": {
    franchiseFee: 25000,
    initialInvestment: 480000,
    monthlyRevenue: 60000,
    grossMarginPct: 67,
    laborPct: 28,
    monthlyRent: 5200,
    royaltyPct: 5,
    marketingPct: 2,
    otherMonthlyOpEx: 3600,
    loanPct: 65,
  },
  "tim-hortons": {
    franchiseFee: 50000,
    initialInvestment: 900000,
    monthlyRevenue: 100000,
    grossMarginPct: 66,
    laborPct: 29,
    monthlyRent: 7500,
    royaltyPct: 6,
    marketingPct: 4,
    otherMonthlyOpEx: 5500,
    loanPct: 70,
  },
  "biggby-coffee": {
    franchiseFee: 20000,
    initialInvestment: 320000,
    monthlyRevenue: 42000,
    grossMarginPct: 68,
    laborPct: 28,
    monthlyRent: 3500,
    royaltyPct: 5,
    marketingPct: 2,
    otherMonthlyOpEx: 2800,
    loanPct: 60,
  },
};

export const coffeeShopFranchiseGuide = {
  meta: {
    title: "Coffee Shop Franchise: Costs, Profit Margins, ROI & Top Franchise Opportunities",
    subtitle:
      "Compare coffee shop franchise startup costs, franchise fees, royalties, revenue potential, profitability, and investment requirements across leading coffee franchise brands.",
    dataVintage: "2025–2026",
    sampleSize: "leading U.S. coffee franchise systems",
    shortName: "Coffee Shop",
    categoryLabel: "Food",
  },

  keywords: [
    "coffee shop franchise",
    "coffee franchise cost",
    "dunkin franchise",
    "dutch bros franchise",
    "scooters coffee franchise",
    "7 brew franchise",
    "coffee franchise ROI",
    "drive thru coffee franchise",
    "cheapest coffee franchise",
    "coffee franchise profit margin",
    "how much does a coffee franchise owner make",
    "coffee shop franchise investment",
  ],

  investmentDashboard: [
    { metric: "Average Initial Investment", value: "$450K – $750K" },
    { metric: "Franchise Fee", value: "$20K – $50K" },
    { metric: "Royalty Fee", value: "5% – 6%" },
    { metric: "Marketing Fee", value: "1.5% – 5%" },
    { metric: "Average Annual Revenue", value: "$550K – $1.1M" },
    { metric: "EBITDA Margin", value: "10% – 16%" },
    { metric: "Estimated Owner Income", value: "$70K – $160K" },
    { metric: "Payback Period", value: "3.5 – 5.5 years" },
  ] as const,

  sectionNav: [
    { id: "overview", label: "Overview" },
    { id: "compare-brands", label: "Compare Franchises" },
    { id: "costs", label: "Costs" },
    { id: "economics", label: "Economics" },
    { id: "roi", label: "ROI" },
    { id: "rankings", label: "Rankings" },
    { id: "franchise-profiles", label: "Franchise Profiles" },
    { id: "calculators", label: "Calculators" },
    { id: "faq", label: "FAQ" },
  ] as const,

  franchiseBrands: [
    {
      label: "Dunkin'",
      slug: "dunkin" as const,
      href: brandHref("dunkin"),
      investment: "$400K – $1.7M+",
      franchiseFee: "$40K – $90K",
      royalty: "5.9%",
      locations: "9,000+",
      businessModel: "Full-service coffee / QSR",
      investmentBand: "500k-plus" as CoffeeInvestmentBand,
      models: ["cafe", "drive-thru-cafe", "kiosk"] as CoffeeBusinessModel[],
      investorTypes: ["first-time", "owner-operator", "multi-unit"] as CoffeeInvestorType[],
    },
    {
      label: "Dutch Bros",
      slug: "dutch-bros" as const,
      href: brandHref("dutch-bros"),
      investment: "$500K – $1.2M+",
      franchiseFee: "$30K",
      royalty: "~5%",
      locations: "900+",
      businessModel: "Drive-thru",
      investmentBand: "500k-plus" as CoffeeInvestmentBand,
      models: ["drive-thru"] as CoffeeBusinessModel[],
      investorTypes: ["multi-unit", "owner-operator"] as CoffeeInvestorType[],
    },
    {
      label: "Scooter's Coffee",
      slug: "scooters-coffee" as const,
      href: brandHref("scooters-coffee"),
      investment: "$400K – $900K",
      franchiseFee: "$40K",
      royalty: "6%",
      locations: "700+",
      businessModel: "Drive-thru",
      investmentBand: "250k-500k" as CoffeeInvestmentBand,
      models: ["drive-thru"] as CoffeeBusinessModel[],
      investorTypes: ["first-time", "owner-operator", "multi-unit"] as CoffeeInvestorType[],
    },
    {
      label: "7 Brew",
      slug: "7-brew" as const,
      href: brandHref("7-brew"),
      investment: "$450K – $1.0M",
      franchiseFee: "$35K",
      royalty: "6%",
      locations: "400+",
      businessModel: "Drive-thru",
      investmentBand: "500k-plus" as CoffeeInvestmentBand,
      models: ["drive-thru"] as CoffeeBusinessModel[],
      investorTypes: ["multi-unit", "owner-operator"] as CoffeeInvestorType[],
    },
    {
      label: "The Human Bean",
      slug: "the-human-bean" as const,
      href: brandHref("the-human-bean"),
      investment: "$280K – $650K",
      franchiseFee: "$30K",
      royalty: "5%",
      locations: "300+",
      businessModel: "Drive-thru",
      investmentBand: "250k-500k" as CoffeeInvestmentBand,
      models: ["drive-thru"] as CoffeeBusinessModel[],
      investorTypes: ["first-time", "owner-operator"] as CoffeeInvestorType[],
    },
    {
      label: "PJ's Coffee",
      slug: "pjs-coffee" as const,
      href: brandHref("pjs-coffee"),
      investment: "$300K – $800K",
      franchiseFee: "$25K",
      royalty: "5%",
      locations: "140+",
      businessModel: "Café / drive-thru",
      investmentBand: "250k-500k" as CoffeeInvestmentBand,
      models: ["cafe", "drive-thru-cafe"] as CoffeeBusinessModel[],
      investorTypes: ["first-time", "owner-operator"] as CoffeeInvestorType[],
    },
    {
      label: "Tim Hortons",
      slug: "tim-hortons" as const,
      href: brandHref("tim-hortons"),
      investment: "$500K – $2.0M+",
      franchiseFee: "$50K",
      royalty: "6% + ads",
      locations: "4,500+",
      businessModel: "Café / QSR",
      investmentBand: "500k-plus" as CoffeeInvestmentBand,
      models: ["cafe", "drive-thru-cafe"] as CoffeeBusinessModel[],
      investorTypes: ["owner-operator", "multi-unit"] as CoffeeInvestorType[],
    },
    {
      label: "Biggby Coffee",
      slug: "biggby-coffee" as const,
      href: brandHref("biggby-coffee"),
      investment: "$200K – $450K",
      franchiseFee: "$20K",
      royalty: "5%",
      locations: "300+",
      businessModel: "Café / kiosk",
      investmentBand: "under-250k" as CoffeeInvestmentBand,
      models: ["cafe", "kiosk"] as CoffeeBusinessModel[],
      investorTypes: ["first-time", "owner-operator"] as CoffeeInvestorType[],
    },
  ] as const,

  bestFitCards: [
    {
      title: "Best Brand Recognition",
      detail: "For investors prioritizing consumer awareness.",
      brand: "Dunkin'",
      href: brandHref("dunkin"),
    },
    {
      title: "Best Drive-Thru Model",
      detail: "For investors focused on throughput and smaller footprints.",
      brand: "Dutch Bros",
      href: brandHref("dutch-bros"),
    },
    {
      title: "Lowest Investment",
      detail: "For investors with limited capital.",
      brand: "Biggby Coffee",
      href: brandHref("biggby-coffee"),
    },
    {
      title: "Best Multi-Unit Opportunity",
      detail: "For investors planning to scale.",
      brand: "7 Brew",
      href: brandHref("7-brew"),
    },
    {
      title: "Best Premium Coffee Positioning",
      detail: "For investors targeting higher-ticket customers.",
      brand: "PJ's Coffee",
      href: brandHref("pjs-coffee"),
    },
    {
      title: "Best for First-Time Franchisees",
      detail: "For investors prioritizing training and operational support.",
      brand: "Scooter's Coffee",
      href: brandHref("scooters-coffee"),
    },
  ] as const,

  economicsRows: [
    { metric: "Average Annual Revenue", benchmark: "$550K – $1.1M" },
    { metric: "Revenue per Location", benchmark: "$45K – $95K / month mature" },
    { metric: "Average Ticket Size", benchmark: "$6 – $9" },
    { metric: "Customers per Day", benchmark: "250 – 600+" },
    { metric: "Gross Margin", benchmark: "65% – 72%" },
    { metric: "EBITDA Margin", benchmark: "10% – 16%" },
    { metric: "Labor Cost %", benchmark: "25% – 32%" },
    { metric: "Food & Beverage Cost %", benchmark: "28% – 35%" },
    { metric: "Occupancy Cost %", benchmark: "6% – 10%" },
    { metric: "Marketing %", benchmark: "1.5% – 5%" },
    { metric: "Royalty %", benchmark: "5% – 6%" },
  ] as const,

  costFlow: [
    { item: "Franchise Fee", range: "$20K – $50K" },
    { item: "Real Estate / Lease", range: "$15K – $80K" },
    { item: "Build-out", range: "$120K – $450K" },
    { item: "Coffee Equipment", range: "$40K – $150K" },
    { item: "Furniture & Fixtures", range: "$15K – $60K" },
    { item: "POS / Technology", range: "$8K – $30K" },
    { item: "Initial Inventory", range: "$8K – $25K" },
    { item: "Pre-opening Marketing", range: "$10K – $40K" },
    { item: "Training", range: "$3K – $20K" },
    { item: "Working Capital", range: "$30K – $100K" },
  ] as const,

  typicalInvestmentRange: {
    low: "$200K – $350K",
    average: "$450K – $750K",
    high: "$900K – $1.7M+",
    note: "Low = café / kiosk conversions · Average = dual-lane drive-thru · High = full Dunkin' / Tim Hortons QSR builds.",
  },

  driveThruVsCafe: [
    { metric: "Startup Cost", driveThru: "$350K – $900K", cafe: "$200K – $650K" },
    { metric: "Footprint", driveThru: "400 – 900 sq ft pad", cafe: "1,200 – 2,500 sq ft" },
    { metric: "Average Ticket", driveThru: "$6 – $8", cafe: "$7 – $10" },
    { metric: "Transactions/Day", driveThru: "350 – 700+", cafe: "200 – 450" },
    { metric: "Labor Cost", driveThru: "Lower % (throughput)", cafe: "Higher (floor staff)" },
    { metric: "Rent", driveThru: "Often lower $/mo", cafe: "Higher street retail" },
    { metric: "Revenue Potential", driveThru: "Higher AUV upside", cafe: "Moderate / seating-limited" },
    { metric: "EBITDA Potential", driveThru: "12% – 16%", cafe: "9% – 14%" },
    { metric: "Scalability", driveThru: "Strong multi-unit", cafe: "Site-by-site" },
  ] as const,

  rankingMethodology: [
    { factor: "Investment Cost", weight: "20%" },
    { factor: "Revenue Potential", weight: "20%" },
    { factor: "Profitability", weight: "20%" },
    { factor: "Brand Strength", weight: "15%" },
    { factor: "Scalability", weight: "15%" },
    { factor: "Franchise Support", weight: "10%" },
  ] as const,

  rankings: [
    {
      title: "Best Overall Coffee Franchise",
      detail: "Balanced CapEx, brand demand, and after-fee cash flow.",
      brand: "Dunkin'",
      href: brandHref("dunkin"),
    },
    {
      title: "Best Low-Cost Coffee Franchise",
      detail: "Lowest total investment band with workable unit economics.",
      brand: "Biggby Coffee",
      href: brandHref("biggby-coffee"),
    },
    {
      title: "Best Drive-Thru Coffee Franchise",
      detail: "Throughput-first model with strong multi-unit playbooks.",
      brand: "Dutch Bros",
      href: brandHref("dutch-bros"),
    },
    {
      title: "Best Coffee Franchise for First-Time Owners",
      detail: "Training depth and operating systems for newer franchisees.",
      brand: "Scooter's Coffee",
      href: brandHref("scooters-coffee"),
    },
    {
      title: "Best Coffee Franchise for Multi-Unit Investors",
      detail: "Territory growth and repeatable drive-thru formats.",
      brand: "7 Brew",
      href: brandHref("7-brew"),
    },
    {
      title: "Highest Potential ROI",
      detail: "Strong AUV relative to CapEx when labor stays controlled.",
      brand: "The Human Bean",
      href: brandHref("the-human-bean"),
    },
    {
      title: "Best Premium Coffee Franchise",
      detail: "Higher ticket positioning and café/drive-thru flexibility.",
      brand: "PJ's Coffee",
      href: brandHref("pjs-coffee"),
    },
  ] as const,

  featuredProfiles: [
    {
      label: "Dunkin'",
      href: brandHref("dunkin"),
      investment: "$400K – $1.7M+",
      royalty: "5.9%",
      locations: "9,000+",
      businessModel: "Full-service coffee / QSR",
    },
    {
      label: "Scooter's Coffee",
      href: brandHref("scooters-coffee"),
      investment: "$400K – $900K",
      royalty: "6%",
      locations: "700+",
      businessModel: "Drive-thru",
    },
    {
      label: "The Human Bean",
      href: brandHref("the-human-bean"),
      investment: "$280K – $650K",
      royalty: "5%",
      locations: "300+",
      businessModel: "Drive-thru",
    },
    {
      label: "PJ's Coffee",
      href: brandHref("pjs-coffee"),
      investment: "$300K – $800K",
      royalty: "5%",
      locations: "140+",
      businessModel: "Café / drive-thru",
    },
    {
      label: "Dutch Bros",
      href: brandHref("dutch-bros"),
      investment: "$500K – $1.2M+",
      royalty: "~5%",
      locations: "900+",
      businessModel: "Drive-thru",
    },
    {
      label: "7 Brew",
      href: brandHref("7-brew"),
      investment: "$450K – $1.0M",
      royalty: "6%",
      locations: "400+",
      businessModel: "Drive-thru",
    },
  ] as const,

  vsIndependent: [
    { factor: "Startup Cost", franchise: "$200K – $1.7M+", independent: "$80K – $400K" },
    { factor: "Brand Recognition", franchise: "Immediate", independent: "Build over years" },
    { factor: "Royalty Fees", franchise: "5% – 6% of sales", independent: "None" },
    { factor: "Marketing Support", franchise: "National / regional funds", independent: "Owner-funded" },
    { factor: "Supplier Purchasing", franchise: "Approved vendors", independent: "Full flexibility" },
    { factor: "Menu Flexibility", franchise: "Limited", independent: "High" },
    { factor: "Operational Support", franchise: "Training + playbooks", independent: "Self-built" },
    { factor: "Profit Margin", franchise: "After-fee 10% – 16%", independent: "Often higher net if successful" },
    { factor: "Scalability", franchise: "Territory-ready", independent: "Harder to clone" },
    { factor: "Exit Value", franchise: "Brand multiples help", independent: "Buyer diligence heavier" },
  ] as const,

  investmentFactors: [
    { title: "Initial Investment", detail: "Total CapEx including fee, build-out, equipment, and working capital." },
    { title: "Franchise Fee", detail: "One-time brand rights and training access paid at signing." },
    { title: "Royalty Fee", detail: "Ongoing % of gross sales — usually the largest long-term margin drag." },
    { title: "Marketing Fee", detail: "National or regional ad fund contribution required by most systems." },
    { title: "Real Estate", detail: "Deposits, site fees, and landlord TI — higher for freestanding pads." },
    { title: "Build-out", detail: "Leasehold improvements, drive-thru lanes, HVAC, and brand finishes." },
    { title: "Equipment", detail: "Espresso machines, grinders, ice, refrigeration, and drive-thru tech." },
    { title: "Working Capital", detail: "Cash for payroll, rent, royalties, and COGS until sales stabilize." },
    { title: "Territory", detail: "Exclusive radius quality drives AUV more than brand slogans." },
    { title: "Training", detail: "Owner/manager tuition, travel, lodging, and wages during ramp." },
    { title: "Supplier Costs", detail: "Approved beverage and food costs affect gross margin daily." },
    { title: "Technology", detail: "POS, loyalty, mobile order, and drive-thru timers as fixed OpEx." },
  ] as const,

  calculators: [
    { label: "Coffee Shop Franchise ROI Calculator", href: "/calculators/coffee-shop-franchise-roi/" },
    { label: "Coffee Shop Startup Cost Calculator", href: "/calculators/coffee-shop-startup-cost/" },
    { label: "Coffee Shop Break-even Calculator", href: "/calculators/coffee-shop-break-even/" },
    { label: "Coffee Shop Profit Margin Calculator", href: "/calculators/coffee-shop-profit-margin/" },
    { label: "Coffee Shop Revenue Calculator", href: "/calculators/coffee-shop-revenue/" },
    { label: "Franchise Royalty Calculator", href: "/calculators/coffee-shop-franchise-royalty/" },
    { label: "Coffee Shop Payback Calculator", href: "/calculators/coffee-shop-payback/" },
    { label: "Coffee Shop Valuation Calculator", href: "/calculators/coffee-shop-valuation/" },
    { label: "Coffee Shop Labor Cost Calculator", href: "/calculators/coffee-shop-labor-cost/" },
    { label: "Coffee Shop Food Cost Calculator", href: "/calculators/coffee-shop-food-cost/" },
  ] as const,

  investmentQuestions: [
    { question: "How much does a coffee shop franchise cost?", href: "#costs" },
    { question: "How profitable is a coffee shop franchise?", href: "#economics" },
    { question: "How much does a coffee franchise owner make?", href: "#faq" },
    { question: "What is the average coffee shop franchise revenue?", href: "#economics" },
    { question: "What is the profit margin for a coffee shop franchise?", href: "#economics" },
    { question: "How long does it take to break even?", href: "#roi" },
    { question: "What is the best coffee franchise to own?", href: "#rankings" },
    { question: "What is the cheapest coffee franchise?", href: "#compare-brands" },
    { question: "Are coffee shop franchises profitable?", href: "#faq" },
    { question: "How much money do I need to open a coffee franchise?", href: "#costs" },
    { question: "Is a coffee franchise better than an independent coffee shop?", href: "#vs-independent" },
    { question: "How much does a drive-thru coffee franchise cost?", href: "#drive-thru-vs-cafe" },
  ] as const,

  relatedFranchises: [
    { label: "Bakery Franchise", href: "/franchise/food/bakery-franchise/", comingSoon: true },
    { label: "Donut Franchise", href: "/franchise/food/donut-franchise/", comingSoon: true },
    { label: "Bubble Tea Franchise", href: "/franchise/food/bubble-tea-franchise/", comingSoon: true },
    { label: "Ice Cream Franchise", href: "/franchise/food/ice-cream-franchise/", comingSoon: true },
    { label: "Fast Food Franchise", href: "/franchise/food/restaurant-franchise/fast-food/" },
    { label: "Restaurant Franchise", href: "/franchise/food/restaurant-franchise/" },
  ] as const,

  faqs: [
    {
      question: "How much does a coffee shop franchise cost?",
      answer:
        "Most coffee shop franchises cost about $200K–$1.7M+ in total initial investment. Compact café and kiosk formats often land nearer $200K–$450K, while dual-lane drive-thru builds commonly fall in the $450K–$900K band. Full Dunkin' or Tim Hortons QSR builds can exceed $1M–$1.7M+. Always rebuild FDD Item 7 with local contractor and equipment quotes.",
    },
    {
      question: "What is the average ROI of a coffee franchise?",
      answer:
        "Well-run coffee franchises often target roughly 12–20% cash-on-cash returns once mature, with simple CapEx payback commonly in the 3.5–5.5 year range. ROI depends more on AUV, labor %, rent, and royalty load than brand awareness alone. Model debt service separately — leveraged deals change cash-on-cash dramatically.",
    },
    {
      question: "Which coffee franchise has the lowest startup cost?",
      answer:
        "Among widely searched U.S. coffee franchises, Biggby Coffee and some Human Bean / PJ's café conversions often sit in the lower CapEx bands (roughly under $450K when build-out stays lean). “Cheapest” is not the same as highest ROI — underwrite after-fee margins and territory quality.",
    },
    {
      question: "How much does a coffee shop franchise owner make?",
      answer:
        "Mature single-unit owner income commonly lands around $70K–$160K depending on AUV, rent, labor, and debt service. High-volume drive-thru units can clear more; early-year stores often earn less while traffic ramps. Revenue is not personal income — subtract royalties, OpEx, and loan payments first.",
    },
    {
      question: "Are drive-thru coffee franchises more profitable?",
      answer:
        "Drive-thru formats often post higher AUV and EBITDA potential (commonly ~12–16%) because of throughput and smaller footprints, but CapEx and site selection risk are also higher. Traditional cafés can work well in dense retail with seating demand, usually at moderate revenue and slightly lower margin bands.",
    },
    {
      question: "Do I need restaurant experience to own a coffee franchise?",
      answer:
        "Many coffee franchisors accept first-time franchisees if they meet liquidity and net-worth requirements and complete training. Foodservice or retail management experience helps with hiring and peak-hour throughput, but it is not always mandatory. Multi-unit brands may prefer operators with proven people leadership.",
    },
  ] as const,
};
