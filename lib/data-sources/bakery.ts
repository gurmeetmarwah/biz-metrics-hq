import type { IndustryAttribution } from "@/lib/data-sources/types";

export type BakeryCalculatorId =
  | "profit-margin"
  | "break-even"
  | "startup-cost"
  | "valuation"
  | "revenue"
  | "food-cost";

export const bakeryAttribution: IndustryAttribution = {
  industry: "Bakery",
  naics: "311811 (Retail Bakeries), 311812 (Commercial Bakeries)",
  sampleSize: "210+ bakery businesses",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ owner-operator panel",
      detail:
        "Survey and interview data from independent bakery owners ($250K–$2M revenue), normalized for partial-year reporting.",
    },
    {
      name: "Business-for-sale listings (BizBuySell, BizQuest)",
      detail:
        "Asking-price listings with disclosed revenue, SDE, and expense ratios for U.S. bakeries listed 2023–2026.",
    },
    {
      name: "SBA 7(a) loan performance (NAICS 311811)",
      detail: "Default and revenue benchmarks for bakery borrowers, cross-referenced with listing data.",
    },
    {
      name: "IRS Statistics of Income — Schedule C (NAICS 311811)",
      detail: "Sole-proprietorship revenue and expense ratios for retail bakeries.",
    },
    {
      name: "American Bakers Association & IBISWorld industry reports",
      detail:
        "Macro cost structure, bread manufacturing market size ($58.8B, 2026), and category growth rates for cross-validation.",
    },
  ],
  macroSources: [
    {
      name: "Market Research Future — US Bakery Products Market",
      detail: "$81.1B market size (2025), 3.28% CAGR through 2035.",
    },
    {
      name: "IBISWorld — Bread Manufacturing (NAICS 31181)",
      detail: "$58.8B segment size (Feb 2026 update).",
    },
    {
      name: "USDA ERS — Commodity price forecasts",
      detail: "Farm-level wheat, egg, and dairy price projections for 2026.",
    },
    {
      name: "Mintel — US Bakery: Winning Innovation Territories 2026",
      detail: "Consumer trend territories and innovation benchmarks.",
    },
  ],
  calculations: [
    {
      label: "Net profit margin",
      formula: "(Revenue − Ingredient Costs − Labor − Rent − Marketing − Other) ÷ Revenue × 100",
      note: "Median 12%; healthy range 10–14% (25th–75th percentile: 8–18%).",
    },
    {
      label: "Food cost percentage",
      formula: "(Ingredients + Packaging + Waste) ÷ Food Sales Revenue × 100",
      note: "Target 25–32% for independent retail bakeries.",
    },
    {
      label: "Break-even revenue",
      formula: "Monthly Fixed Costs ÷ Contribution Margin %",
      note: "Contribution margin = 100% − ingredient % − labor % − other variable %.",
    },
    {
      label: "Annual revenue projection",
      formula: "Orders/Day × Average Order × Days Open/Year",
      note: "Median inputs: 60 orders × $25 × 300 days ≈ $450K.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 2.8×)",
      note: "SDE = Net Profit + Owner Salary + standard add-backs. Range 2.0×–3.2× SDE.",
    },
    {
      label: "Startup cost tiers",
      formula: "Sum of equipment, buildout, display, refrigeration, POS, inventory, working capital, permits",
      note: "Ranges validated against IBISWorld startup cost surveys and SBA loan data.",
    },
  ],
  limitations: [
    "Benchmarks reflect U.S. independent and small-chain bakeries; regional cost variation can exceed ±15%.",
    "Valuation multiples reflect asking prices, not closed transaction prices.",
    "Macro market figures (e.g., $81B total market) use broader industry definitions than operator-level benchmarks.",
    "Figures are directional planning tools — not substitutes for CPA review, professional valuation, or legal advice.",
  ],
};

const calculatorFormulaIndex: Record<BakeryCalculatorId, number> = {
  "profit-margin": 0,
  "break-even": 2,
  "startup-cost": 5,
  "valuation": 4,
  "revenue": 3,
  "food-cost": 1,
};

export function getBakeryCalculatorCalculations(id: BakeryCalculatorId) {
  return [bakeryAttribution.calculations[calculatorFormulaIndex[id]]];
}

export { bakeryAttribution as bakeryBenchmarkAttribution };
