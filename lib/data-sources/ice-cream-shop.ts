import type { IndustryAttribution } from "@/lib/data-sources/types";

export type IceCreamShopCalculatorId =
  | "profit-margin"
  | "break-even"
  | "startup-cost"
  | "valuation"
  | "food-cost"
  | "labor-cost"
  | "average-ticket";

export const iceCreamShopAttribution: IndustryAttribution = {
  industry: "Ice Cream Shop",
  naics: "722515 (Snack and Nonalcoholic Beverage Bars — ice cream segment)",
  sampleSize: "175+ independent & franchise ice cream shops",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ — ice cream shop operator composite",
      detail: "175+ shop operator panel: revenue, margins, ticket size, seasonality, and startup costs.",
    },
    {
      name: "Business-for-sale listings (food & beverage brokers)",
      detail: "Ice cream and frozen dessert shop listings with disclosed revenue, SDE, and expense ratios (2023–2026).",
    },
    {
      name: "Franchise disclosure documents (FDD context)",
      detail: "Cold Stone, Baskin-Robbins, and regional franchise unit economics for benchmark cross-validation.",
    },
  ],
  macroSources: [
    {
      name: "IBISWorld — Ice Cream & Frozen Dessert Manufacturing / Retail context",
      detail: "Industry revenue trends, dairy input costs, and seasonal demand patterns.",
    },
    {
      name: "USDA ERS — Dairy price forecasts",
      detail: "Milk, cream, and butter price projections affecting food cost benchmarks.",
    },
  ],
  calculations: [
    {
      label: "Annual revenue",
      formula: "Daily Customers × Average Ticket × Days Open",
      note: "Median ~280 customers × $8.40 × ~305 days ≈ $720K.",
    },
    {
      label: "Seasonal revenue split",
      formula: "Summer months often 35–45% of annual revenue in temperate climates",
      note: "Off-season planning critical for cash flow and labor scheduling.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 2.8×)",
      note: "Range 2.0×–3.5× SDE from ice cream shop business-for-sale comps.",
    },
  ],
  limitations: [
    "Ice cream shop economics vary widely by climate, location type, and franchise vs independent model.",
    "Seasonal revenue swings of 40%+ between peak and off-peak months are common in non-year-round climates.",
    "Figures are directional ranges — not substitutes for your own POS and P&L data.",
  ],
};

const calculatorFormulaIndex: Record<IceCreamShopCalculatorId, number> = {
  "profit-margin": 0,
  "break-even": 0,
  "startup-cost": 0,
  "valuation": 2,
  "food-cost": 0,
  "labor-cost": 0,
  "average-ticket": 0,
};

export function getIceCreamShopCalculatorCalculations(id: IceCreamShopCalculatorId) {
  return [iceCreamShopAttribution.calculations[calculatorFormulaIndex[id]]];
}
