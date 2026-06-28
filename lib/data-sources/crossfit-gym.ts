import type { IndustryAttribution } from "@/lib/data-sources/types";

export const crossfitGymAttribution: IndustryAttribution = {
  industry: "CrossFit Gym",
  naics: "713940 (Fitness and Recreational Sports Centers — boutique affiliate segment)",
  sampleSize: "Composite CrossFit affiliate operator benchmarks",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ — CrossFit affiliate operator composite",
      detail: "95+ affiliate operator panel: revenue, margins, membership economics, coach productivity, and class utilization.",
    },
    {
      name: "Health & Fitness Association (HFA) — boutique context",
      detail: "Club retention and dues benchmarks used as industry floor/reference for coached fitness formats.",
    },
    {
      name: "Business-for-sale listings (fitness brokers)",
      detail: "CrossFit affiliate listings with disclosed revenue, SDE, and member counts (2023–2026).",
    },
  ],
  macroSources: [
    {
      name: "IBISWorld — Gym, Health & Fitness Clubs (NAICS 713940)",
      detail: "Industry revenue and establishment trends; functional fitness and affiliate segment extrapolation.",
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
      note: "Estimated ~$72K/mo for ~$950K affiliate with ~91% recurring/membership-weighted revenue.",
    },
    {
      label: "Revenue per class",
      formula: "Monthly Class Revenue ÷ Classes Delivered",
      note: "Target $280–$420/class at 75–90% average coach utilization.",
    },
    {
      label: "Member LTV",
      formula: "Monthly ARPU × Average Membership Length (months)",
      note: "Community-driven affiliates: $185–$225/mo ARPU × 18–28 month tenure.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 3.7×)",
      note: "Range 2.8×–4.2× SDE from CrossFit affiliate business-for-sale comps.",
    },
  ],
  limitations: [
    "CrossFit affiliate economics vary widely by market, coach quality, and membership density.",
    "Class utilization and coach productivity figures are operator-reported composites — not audited census data.",
    "MRR and LTV are modeled ranges; use your own billing and attendance data for operational decisions.",
  ],
};
