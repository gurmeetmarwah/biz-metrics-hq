import type { IndustryAttribution } from "@/lib/data-sources/types";

export const poolServiceAttribution: IndustryAttribution = {
  industry: "Pool Service",
  naics: "561790 (Other Services to Buildings and Dwellings — pool maintenance segment)",
  sampleSize: "190+ pool service companies",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ — pool service operator composite",
      detail: "190+ company operator panel: revenue, MRR, route density, margins, retention, and startup costs.",
    },
    {
      name: "Business-for-sale listings (home services brokers)",
      detail: "Pool route and pool service company listings with disclosed revenue, SDE, and route counts (2023–2026).",
    },
    {
      name: "Franchise disclosure documents (FDD context)",
      detail: "Pool Scouts, ASP, and regional franchise unit economics for benchmark cross-validation.",
    },
  ],
  macroSources: [
    {
      name: "P.K. Data — U.S. swimming pool market context",
      detail: "Installed pool base, in-ground pool growth, and service market size trends.",
    },
    {
      name: "IBISWorld — Swimming Pool Cleaning Services",
      detail: "Industry revenue trends, labor costs, and competitive landscape.",
    },
  ],
  calculations: [
    {
      label: "Monthly recurring revenue",
      formula: "Active Contracts × Average Monthly Contract Value",
      note: "Median ~580 contracts × $100/mo ≈ $58K MRR on $950K annual revenue.",
    },
    {
      label: "Route density",
      formula: "Pools Serviced Per Week ÷ Technicians",
      note: "Target 55–75 pools per technician per week on optimized routes.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 3.6×)",
      note: "Range 3.0×–4.5× SDE from pool service business-for-sale comps.",
    },
  ],
  limitations: [
    "Pool service economics vary widely by climate, market density, and residential vs commercial mix.",
    "Seasonal markets show 15–25% revenue variance between peak and off-peak months.",
    "Figures are directional ranges — not substitutes for your own route and P&L data.",
  ],
};
