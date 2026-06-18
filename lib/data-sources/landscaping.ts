import type { IndustryAttribution } from "@/lib/data-sources/types";

export const landscapingAttribution: IndustryAttribution = {
  industry: "Landscaping",
  naics: "561730 (Landscaping Services)",
  sampleSize: "280+ landscaping companies",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ owner-operator panel",
      detail:
        "Survey data from U.S. landscaping contractors ($400K–$3M revenue), normalized for residential vs commercial mix and maintenance contract penetration.",
    },
    {
      name: "Business-for-sale listings (BizBuySell, landscape brokers)",
      detail: "Landscaping company listings with disclosed revenue, SDE, and crew count (2023–2026).",
    },
    {
      name: "NALP — National Association of Landscape Professionals",
      detail: "Industry financial benchmarks, maintenance contract trends, and labor productivity data.",
    },
    {
      name: "SBA 7(a) loan performance (NAICS 561730)",
      detail: "Loan performance benchmarks for landscaping business acquisitions and startups.",
    },
    {
      name: "IRS Statistics of Income — Schedule C (NAICS 561730)",
      detail: "Sole-proprietorship revenue and expense ratios for landscaping services.",
    },
  ],
  calculations: [
    {
      label: "Net profit margin",
      formula: "(Revenue − Crew Labor − Materials − Fleet − Marketing − Overhead) ÷ Revenue × 100",
      note: "Median ~8%; healthy range 5–12% for owner-operated landscaping companies.",
    },
    {
      label: "Revenue per crew",
      formula: "Annual Revenue ÷ Number of Field Crews",
      note: "Median ~$275K per crew for mixed maintenance and project operators.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 2.2×)",
      note: "SDE = Net Profit + Owner Compensation + add-backs. Range 1.8×–2.8× SDE.",
    },
  ],
  limitations: [
    "Benchmarks reflect U.S. owner-operated landscaping contractors; snow removal and design-build mix varies by region.",
    "Maintenance-heavy operators show more stable revenue than project-only landscapers.",
    "Climate and growing season length heavily influence annual revenue and crew utilization.",
    "Figures are directional planning tools — not substitutes for CPA review, business valuation, or legal advice.",
  ],
};
