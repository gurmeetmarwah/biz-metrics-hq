import type { IndustryAttribution } from "@/lib/data-sources/types";

export const optometryPracticeAttribution: IndustryAttribution = {
  industry: "Optometry Practice",
  naics: "621320 (Offices of Optometrists)",
  sampleSize: "175+ optometry practices",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ — optometry practice composite",
      detail: "175+ practice operator panel: revenue, optical capture, patient metrics, margins, and valuation multiples.",
    },
    {
      name: "Business-for-sale listings (optometry brokers)",
      detail: "Optometry practice listings with disclosed revenue, EBITDA, and optical revenue mix (2023–2026).",
    },
    {
      name: "AOA Health Policy Institute context",
      detail: "National optometry workforce, practice economics, and vision care market trends.",
    },
  ],
  macroSources: [
    {
      name: "IBISWorld — Optometrists in the US",
      detail: "Industry revenue trends, optical retail mix, and competitive landscape.",
    },
    {
      name: "Vision Council market data",
      detail: "Eyewear sales, lens category trends, and online vs in-practice purchasing patterns.",
    },
  ],
  calculations: [
    {
      label: "Revenue per patient",
      formula: "Annual Revenue ÷ Active Patient Count",
      note: "Median ~3,200 patients × $420 ≈ $1.35M annual revenue.",
    },
    {
      label: "Optical capture rate",
      formula: "Patients Purchasing Eyewear ÷ Total Exam Patients × 100",
      note: "Target 55–72% for above-median profitability.",
    },
    {
      label: "EBITDA valuation",
      formula: "EBITDA × Industry Multiple (median 5.2×)",
      note: "Range 4.5×–6.5× EBITDA from optometry practice transaction comps.",
    },
  ],
  limitations: [
    "Optometry economics vary widely by optical capture rate, insurance mix, and urban vs suburban markets.",
    "De novo vs acquired practices show different margin profiles during ramp-up.",
    "Figures are directional ranges — not substitutes for your own practice financials.",
  ],
};
