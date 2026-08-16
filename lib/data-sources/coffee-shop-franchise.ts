import type { IndustryAttribution } from "@/lib/data-sources/types";

export const coffeeShopFranchiseAttribution: IndustryAttribution = {
  industry: "Coffee Shop Franchise",
  naics: "722515 (Snack and Nonalcoholic Beverage Bars)",
  sampleSize: "leading U.S. coffee franchise systems",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "August 2026",
  operatorBenchmarkSources: [
    {
      name: "Franchise Disclosure Documents (FDD) Items 5–7 & 19",
      detail:
        "Initial fees, total investment ranges, and financial performance representations from major coffee franchise systems when disclosed.",
    },
    {
      name: "BizMetricsHQ coffee & QSR operator panel",
      detail:
        "Directional unit economics from café and drive-thru coffee operators ($200K–$1.7M+ CapEx), normalized for ramp vs mature stores.",
    },
    {
      name: "Public franchise directories and franchisor unit disclosures",
      detail:
        "Published investment ranges, royalty/marketing fee stacks, and average unit volume bands used for brand comparison tables.",
    },
    {
      name: "SBA 7(a) franchise lending profiles (NAICS 722515)",
      detail:
        "Cash injection, CapEx, and working-capital patterns for coffee and beverage-bar franchise borrowers.",
    },
    {
      name: "BizMetricsHQ coffee shop industry benchmarks",
      detail:
        "Cross-check against independent coffee shop cost structure at /industries/food-beverage/coffee-shop/.",
    },
  ],
  macroSources: [
    {
      name: "U.S. Census / NAICS 722515 — Snack and Nonalcoholic Beverage Bars",
      detail: "Industry classification and establishment context for coffee and specialty beverage formats.",
    },
    {
      name: "Specialty coffee & QSR trade publications",
      detail:
        "Drive-thru vs café CapEx differentials, ticket/throughput trends, and systemwide AUV context for cross-validation.",
    },
    {
      name: "National Restaurant Association industry outlook",
      detail: "Labor, traffic, and operating-cost context for U.S. limited-service beverage concepts.",
    },
  ],
  calculations: [
    {
      label: "Annual revenue",
      formula: "Monthly Revenue × 12",
      note: "Planning input — replace with Item 19 / local comps when available.",
    },
    {
      label: "Annual EBITDA (planning)",
      formula:
        "Revenue − COGS − Labor − Rent − Royalty − Marketing − Other OpEx",
      note: "COGS derived from (1 − Gross Margin %). Illustrative after-fee operating profit.",
    },
    {
      label: "Owner cash flow",
      formula: "Annual EBITDA − Annual Debt Service",
      note: "Debt service from loan amount, interest rate, and term.",
    },
    {
      label: "Break-even monthly revenue",
      formula: "(Fixed Annual Costs ÷ Contribution Margin) ÷ 12",
      note: "Fixed costs include rent, other OpEx, and debt service; variable costs scale with sales.",
    },
    {
      label: "Payback / 5-year ROI / cash-on-cash",
      formula:
        "Payback = Investment ÷ Owner Cash Flow; 5-Year ROI = (Cash Flow × 5) ÷ Investment; Cash-on-Cash = Cash Flow ÷ Cash Invested",
      note: "Shown on the coffee franchise ROI calculator.",
    },
  ],
  limitations: [
    "Brand tables use directional planning ranges — always verify the current FDD for each franchisor.",
    "AUV bands are systemwide / typical-unit estimates and are not guarantees of owner take-home income.",
    "Drive-thru pads can exceed Average-tier CapEx when land and construction inflate Item 7.",
    "Calculator outputs are illustrative models — not substitutes for CPA review, lender underwriting, or legal advice.",
  ],
};
