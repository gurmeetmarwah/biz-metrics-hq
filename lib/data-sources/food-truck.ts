import type { IndustryAttribution } from "@/lib/data-sources/types";

export type FoodTruckCalculatorId =
  | "profit-margin"
  | "break-even"
  | "startup-cost"
  | "valuation"
  | "revenue"
  | "food-cost";

export const foodTruckAttribution: IndustryAttribution = {
  industry: "Food Truck",
  naics: "722330 (Mobile Food Services)",
  sampleSize: "320+ food truck operators",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ owner-operator panel",
      detail:
        "Survey data from U.S. food truck operators ($180K–$500K revenue), including street, event, and catering models.",
    },
    {
      name: "Business-for-sale listings (BizBuySell, BizQuest)",
      detail:
        "Mobile food business listings with disclosed revenue, SDE, route value, and equipment assets (2023–2026).",
    },
    {
      name: "SBA 7(a) loan performance (NAICS 722330)",
      detail: "Loan performance and revenue benchmarks for mobile food service borrowers.",
    },
    {
      name: "IRS Statistics of Income — Schedule C (NAICS 722330)",
      detail: "Sole-proprietorship revenue and expense ratios for mobile food vendors.",
    },
    {
      name: "National Food Truck Association & IBISWorld",
      detail:
        "Industry cost structure, event economics, and mobile food service market trends for cross-validation.",
    },
  ],
  calculations: [
    {
      label: "Net profit margin",
      formula: "(Revenue − Food Cost − Labor − Fuel − Permits − Other) ÷ Revenue × 100",
      note: "Median 14%; healthy range 12–15% (25th–75th percentile: 8–18%).",
    },
    {
      label: "Break-even revenue",
      formula: "Monthly Fixed Costs ÷ Contribution Margin %",
      note: "Contribution margin = 100% − food cost % − labor % − other variable %.",
    },
    {
      label: "Annual revenue projection",
      formula: "Customers/Day × Average Ticket × Days Open/Year + Event Revenue",
      note: "Median inputs: 85 customers × $14 × 280 days ≈ $280K base street revenue.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 2.25×) + equipment asset value",
      note: "SDE = Net Profit + Owner Salary. Range 1.8×–2.8× SDE for going concerns.",
    },
    {
      label: "Event economics",
      formula: "Event Revenue − (Food Cost + Labor + Commissary + Travel)",
      note: "Festivals and weddings typically carry 18–35% net margins vs. 12–18% street average.",
    },
    {
      label: "Food cost percentage",
      formula: "(Food Costs + Supplies + Waste) ÷ Food Sales Revenue × 100",
      note: "Target 28–35% for mobile food operators.",
    },
    {
      label: "Startup cost tiers",
      formula: "Sum of truck, equipment, permits, branding, inventory, and working capital",
      note: "Ranges validated against SBA loan data and mobile food business listings.",
    },
  ],
  limitations: [
    "Benchmarks vary significantly by city permitting, climate seasonality, and event access.",
    "Valuation multiples reflect asking prices; transferable permits and routes affect realizable value.",
    "Event revenue is volatile — annual figures assume a mix of street and booked events.",
    "Figures are directional planning tools — not substitutes for CPA review, professional valuation, or legal advice.",
  ],
};

const calculatorFormulaIndex: Record<FoodTruckCalculatorId, number> = {
  "profit-margin": 0,
  "break-even": 1,
  "startup-cost": 6,
  "valuation": 3,
  "revenue": 2,
  "food-cost": 5,
};

export function getFoodTruckCalculatorCalculations(id: FoodTruckCalculatorId) {
  return [foodTruckAttribution.calculations[calculatorFormulaIndex[id]]];
}
