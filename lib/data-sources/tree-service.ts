import type { IndustryAttribution } from "@/lib/data-sources/types";

export const treeServiceAttribution: IndustryAttribution = {
  industry: "Tree Service",
  naics: "561730 (Landscaping Services — tree trimming and removal segment)",
  sampleSize: "165+ tree service companies",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ — tree service operator composite",
      detail: "165+ company operator panel: revenue, job mix, crew productivity, equipment investment, margins, and startup costs.",
    },
    {
      name: "Business-for-sale listings (home services brokers)",
      detail: "Tree service and arborist company listings with disclosed revenue, SDE, and equipment inventory (2023–2026).",
    },
    {
      name: "ISA and TCIA industry context",
      detail: "Arborist certification, safety standards, and equipment benchmarks for professional tree care operators.",
    },
  ],
  macroSources: [
    {
      name: "IBISWorld — Tree Trimming Services",
      detail: "Industry revenue trends, labor costs, insurance, and competitive landscape.",
    },
    {
      name: "NOAA storm damage context",
      detail: "Severe weather frequency and regional emergency tree work demand patterns.",
    },
  ],
  calculations: [
    {
      label: "Average job value",
      formula: "Annual Revenue ÷ Jobs Completed",
      note: "Median ~1,085 jobs × $1,150 avg ≈ $1.25M annual revenue.",
    },
    {
      label: "Revenue per crew",
      formula: "Annual Revenue ÷ Active Field Crews",
      note: "Target $250K–$500K per crew annually on well-utilized equipment.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 3.7×)",
      note: "Range 2.5×–4.2× SDE from tree service business-for-sale comps.",
    },
  ],
  limitations: [
    "Tree service economics vary widely by storm exposure, urban vs rural markets, and equipment mix.",
    "Seasonal and weather-driven revenue can swing 20–40% between peak storm months and slow periods.",
    "Figures are directional ranges — not substitutes for your own job costing and P&L data.",
  ],
};
