import type { IndustryAttribution } from "@/lib/data-sources/types";

export const martialArtsSchoolAttribution: IndustryAttribution = {
  industry: "Martial Arts School",
  naics: "611620 (Sports and Recreation Instruction — martial arts segment)",
  sampleSize: "Composite martial arts school operator benchmarks",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ — martial arts school operator composite",
      detail: "110+ school operator panel: revenue, margins, tuition economics, student retention, and program mix.",
    },
    {
      name: "Health & Fitness Association (HFA) — youth activity context",
      detail: "Membership retention and program enrollment benchmarks used as industry reference.",
    },
    {
      name: "Business-for-sale listings (fitness & education brokers)",
      detail: "Martial arts school listings with disclosed revenue, SDE, and student counts (2023–2026).",
    },
  ],
  macroSources: [
    {
      name: "IBISWorld — Gym, Health & Fitness Clubs / Sports Instruction",
      detail: "Industry revenue trends; martial arts and youth activity segment extrapolation.",
    },
    {
      name: "Published youth sports & after-school program economics",
      detail: "Third-party studies used for tuition ARPU, churn, and LTV ranges.",
    },
  ],
  calculations: [
    {
      label: "Tuition MRR",
      formula: "Annual Revenue × Tuition Revenue Share ÷ 12",
      note: "Estimated ~$58K/mo for ~$780K school with ~89% tuition-weighted recurring revenue.",
    },
    {
      label: "Revenue per student",
      formula: "Monthly Tuition Revenue ÷ Active Students",
      note: "Target $120–$180/mo blended ARPU including camps and belt fees.",
    },
    {
      label: "Student LTV",
      formula: "Monthly ARPU × Average Enrollment Length (months)",
      note: "Kids-focused schools: $140/mo ARPU × 24–36 month tenure.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 3.9×)",
      note: "Range 2.6×–4.2× SDE from martial arts business-for-sale comps.",
    },
  ],
  limitations: [
    "Martial arts school economics vary widely by discipline, market, and kids vs. adult program mix.",
    "Retention and program mix figures are operator-reported composites — not audited census data.",
    "Tuition MRR and LTV are modeled ranges; use your own billing and attendance data for operational decisions.",
  ],
};
