export const meta = {
  title: "Coffee Shop Franchise ROI Calculator: Cost, Cash Flow & Payback",
  shortTitle: "Coffee Shop Franchise ROI Calculator",
  subtitle:
    "Model coffee franchise investment, royalties, margins, financing, owner cash flow, payback, and 5-year ROI.",
  description:
    "Free coffee shop franchise ROI calculator with brand presets for Dunkin', Dutch Bros, Scooter's Coffee, 7 Brew, and more. Estimate EBITDA, cash-on-cash return, and payback.",
};

export const introContent = {
  lead: "Coffee franchise ROI depends on CapEx, AUV, royalty load, labor, rent, and financing — not brand slogans. Use brand presets or custom inputs to stress-test cash flow before you buy.",
  bullets: [
    "Owner Cash Flow = EBITDA − Annual Debt Service",
    "Cash-on-Cash = Owner Cash Flow ÷ Cash Invested",
    "5-Year ROI = (Owner Cash Flow × 5) ÷ Total Investment",
  ],
  audience:
    "Built for coffee franchise buyers comparing drive-thru and café concepts across leading U.S. brands.",
};

export const faqs = [
  {
    question: "What is a good ROI for a coffee shop franchise?",
    answer:
      "Well-run coffee franchises often target roughly 12–20% cash-on-cash once mature, with simple CapEx payback commonly in the 3.5–5.5 year range. Early-year stores usually underperform mature AUV while traffic ramps.",
  },
  {
    question: "Does this calculator use FDD Item 19 earnings?",
    answer:
      "No. Outputs are directional planning estimates. Rebuild with current FDD Item 7 / Item 19 figures, local contractor quotes, and lender terms before investing.",
  },
  {
    question: "Which inputs matter most?",
    answer:
      "Monthly revenue (AUV), labor %, rent, royalty/marketing fees, and cash invested after financing. Small changes in throughput or labor often move ROI more than a 1-point royalty difference.",
  },
  {
    question: "Should I use brand presets?",
    answer:
      "Presets give a starting underwrite for highly searched brands like Dunkin', Dutch Bros, Scooter's, and 7 Brew. Always override with your territory's rents, build-out bids, and franchisor disclosures.",
  },
] as const;

export const relatedTools = [
  {
    label: "Franchise Royalty Calculator",
    href: "/calculators/coffee-shop-franchise-royalty/",
    description: "Isolate royalty and marketing fund cost.",
  },
  {
    label: "Coffee Shop Payback Calculator",
    href: "/calculators/coffee-shop-payback/",
    description: "Simple CapEx recovery timeline.",
  },
  {
    label: "Coffee Shop Startup Cost Calculator",
    href: "/calculators/coffee-shop-startup-cost/",
    description: "Independent cafe opening cost model.",
  },
  {
    label: "Coffee Shop Franchise Guide",
    href: "/franchise/food/coffee-shop-franchise/",
    description: "Full costs, rankings, and brand comparison.",
  },
] as const;

export const franchiseDataLinks = [
  {
    label: "Compare Coffee Franchises",
    href: "/franchise/food/coffee-shop-franchise/#compare-brands",
    description: "Investment and fee tables with filters.",
  },
  {
    label: "Coffee Franchise Economics",
    href: "/franchise/food/coffee-shop-franchise/#economics",
    description: "Industry AUV, ticket, and margin benchmarks.",
  },
  {
    label: "Featured Franchise Profiles",
    href: "/franchise/food/coffee-shop-franchise/#franchise-profiles",
    description: "Dunkin', Scooter's, Human Bean, PJ's, and more.",
  },
  {
    label: "Independent Coffee Shop Hub",
    href: "/industries/food-beverage/coffee-shop/",
    description: "Benchmarks without franchise fee stacks.",
  },
] as const;
