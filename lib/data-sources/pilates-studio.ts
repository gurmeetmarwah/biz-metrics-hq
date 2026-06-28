import type { IndustryAttribution } from "@/lib/data-sources/types";

export const pilatesStudioAttribution: IndustryAttribution = {
  industry: "Pilates Studio",
  naics: "713940 (Fitness and Recreational Sports Centers — boutique studio segment)",
  sampleSize: "Composite boutique fitness benchmarks",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ — Pilates & reformer studio composite",
      detail: "140+ studio operator panel: revenue, margins, occupancy, instructor productivity, and client economics.",
    },
    {
      name: "Health & Fitness Association (HFA) — boutique context",
      detail: "Club retention and dues benchmarks used as industry floor/reference for boutique formats.",
    },
    {
      name: "Business-for-sale listings (fitness brokers)",
      detail: "Pilates and boutique studio listings with disclosed revenue, SDE, and member counts (2023–2026).",
    },
  ],
  macroSources: [
    {
      name: "IBISWorld — Gym, Health & Fitness Clubs (NAICS 713940)",
      detail: "Industry revenue and establishment trends; boutique studio segment extrapolation.",
    },
    {
      name: "Published boutique fitness ARPU & retention studies",
      detail: "Third-party boutique fitness economics used for ARPU, churn, and LTV ranges.",
    },
  ],
  calculations: [
    {
      label: "Membership MRR",
      formula: "Annual Revenue × Membership Revenue Share ÷ 12",
      note: "Estimated ~$62K/mo for ~$850K studio with ~88% recurring/membership-weighted revenue.",
    },
    {
      label: "Revenue per reformer",
      formula: "Monthly Studio Revenue ÷ Number of Reformers",
      note: "Target $1,800–$3,200/reformer/month at mature occupancy.",
    },
    {
      label: "Client LTV",
      formula: "Monthly ARPU × Average Contract Length (months)",
      note: "Premium studios: $165–$195/mo ARPU × 14–22 month tenure.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 3.8×)",
      note: "Range 2.5×–3.8× SDE from boutique fitness business-for-sale comps.",
    },
  ],
  limitations: [
    "Pilates studio economics vary widely by market (urban premium vs. suburban), reformer count, and private-session mix.",
    "Occupancy and instructor productivity figures are operator-reported composites — not audited industry census data.",
    "MRR and LTV are modeled ranges; use your own billing and attendance data for operational decisions.",
  ],
};
