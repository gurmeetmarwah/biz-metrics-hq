import type { IndustryAttribution } from "@/lib/data-sources/types";

export const fastFoodFranchiseAttribution: IndustryAttribution = {
  industry: "Fast Food Franchise",
  naics: "722513 (Limited-Service Restaurants)",
  sampleSize: "leading U.S. QSR / fast food franchise systems",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "August 2026",
  operatorBenchmarkSources: [
    {
      name: "Franchise Disclosure Documents (FDD) Items 5–7 & 19",
      detail:
        "Initial fees, total investment ranges, and financial performance representations from major QSR franchise systems when disclosed.",
    },
    {
      name: "BizMetricsHQ restaurant & franchise operator panel",
      detail:
        "Directional unit economics from limited-service and fast food operators ($400K–$3.5M+ AUV), normalized for ramp vs mature stores.",
    },
    {
      name: "Public franchise directories and franchisor unit disclosures",
      detail:
        "Published investment ranges, royalty/marketing fee stacks, and average unit volume bands used for brand comparison tables.",
    },
    {
      name: "SBA 7(a) franchise lending profiles (NAICS 722513)",
      detail:
        "Cash injection, CapEx, and working-capital patterns for limited-service restaurant franchise borrowers.",
    },
    {
      name: "BizMetricsHQ restaurant industry benchmarks",
      detail:
        "Cross-check against independent restaurant cost structure (food, labor, rent) at /industries/restaurant/.",
    },
  ],
  macroSources: [
    {
      name: "U.S. Census / NAICS 722513 — Limited-Service Restaurants",
      detail: "Industry classification and establishment context for QSR / fast food formats.",
    },
    {
      name: "IBISWorld & QSR trade publications",
      detail:
        "Category cost structure, drive-through vs inline CapEx differentials, and systemwide AUV trend context for cross-validation.",
    },
    {
      name: "National Restaurant Association industry outlook",
      detail: "Labor, traffic, and operating-cost context for U.S. limited-service restaurants.",
    },
  ],
  calculations: [
    {
      label: "Total startup investment",
      formula:
        "Franchise Fee + Build-out + Equipment + Real Estate + Working Capital + Other Startup Costs",
      note: "Tiered Small / Medium / Large ranges reflect compact sandwich formats through freestanding drive-through pads.",
    },
    {
      label: "Cash required",
      formula: "Total Investment − Loan Amount",
      note: "Compared against available cash to flag shortfalls; many SBA deals inject ~20–40% cash.",
    },
    {
      label: "Estimated operating profit",
      formula: "Annual Revenue × Operating Margin %",
      note: "Margin is an after-royalty planning assumption — not an Item 19 earnings claim.",
    },
    {
      label: "Owner income",
      formula: "Operating Profit × Owner Draw %",
      note: "Illustrates Revenue ≠ Profit ≠ Owner Income after optional debt service in break-even models.",
    },
    {
      label: "Break-even revenue",
      formula: "(Annual Debt Service + Working Capital Buffer) ÷ Operating Margin %",
      note: "Directional threshold to cover financing and a working-capital cushion.",
    },
    {
      label: "Simple payback period",
      formula: "Total Investment ÷ (Operating Profit − Annual Debt Service)",
      note: "Years of free cash flow to recover CapEx; interactive on the break-even calculator.",
    },
    {
      label: "ROI / cash-on-cash",
      formula: "ROI = Operating Profit ÷ Total Investment; Cash-on-Cash = Annual Cash Flow ÷ Cash Required",
      note: "Shown on the investment calculator outputs for concept-level diligence.",
    },
  ],
  limitations: [
    "Brand tables use directional planning ranges — always verify the current FDD for each franchisor.",
    "AUV bands are systemwide / typical-unit estimates and are not guarantees of owner take-home income.",
    "Drive-through and freestanding sites can exceed Large-tier CapEx when land and construction inflate Item 7.",
    "Calculator outputs are illustrative models — not substitutes for CPA review, lender underwriting, or legal advice.",
  ],
};
