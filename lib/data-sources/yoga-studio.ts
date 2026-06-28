import type { IndustryAttribution } from "@/lib/data-sources/types";

export const yogaStudioAttribution: IndustryAttribution = {
  industry: "Yoga Studio",
  naics: "713940 (Fitness and Recreational Sports Centers — boutique studio segment)",
  sampleSize: "Composite boutique wellness benchmarks",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ — yoga studio operator composite",
      detail: "120+ studio operator panel: revenue, margins, membership economics, community retention, and class utilization.",
    },
    {
      name: "Health & Fitness Association (HFA) — boutique context",
      detail: "Club retention and dues benchmarks used as industry floor/reference for boutique formats.",
    },
    {
      name: "Business-for-sale listings (fitness brokers)",
      detail: "Yoga and boutique wellness studio listings with disclosed revenue, SDE, and member counts (2023–2026).",
    },
  ],
  macroSources: [
    {
      name: "IBISWorld — Gym, Health & Fitness Clubs (NAICS 713940)",
      detail: "Industry revenue and establishment trends; yoga and boutique studio segment extrapolation.",
    },
    {
      name: "Published boutique wellness ARPU & retention studies",
      detail: "Third-party boutique fitness economics used for ARPU, churn, and LTV ranges.",
    },
  ],
  calculations: [
    {
      label: "Membership MRR",
      formula: "Annual Revenue × Membership Revenue Share ÷ 12",
      note: "Estimated ~$48K/mo for ~$620K studio with ~92% recurring/membership-weighted revenue.",
    },
    {
      label: "Revenue per class",
      formula: "Monthly Class Revenue ÷ Classes Delivered",
      note: "Target $180–$320/class at 65–80% average occupancy.",
    },
    {
      label: "Client LTV",
      formula: "Monthly ARPU × Average Membership Length (months)",
      note: "Community-driven studios: $110–$145/mo ARPU × 18–28 month tenure.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 3.3×)",
      note: "Range 2.2×–3.5× SDE from boutique wellness business-for-sale comps.",
    },
  ],
  limitations: [
    "Yoga studio economics vary widely by market, class format mix, and teacher training revenue.",
    "Community and attendance metrics are operator-reported composites — not audited industry census data.",
    "MRR and LTV are modeled ranges; use your own billing and attendance data for operational decisions.",
  ],
};
