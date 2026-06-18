import type { IndustryAttribution } from "@/lib/data-sources/types";

export const hvacAttribution: IndustryAttribution = {
  industry: "HVAC",
  naics: "238220 (Plumbing, Heating, and Air-Conditioning Contractors)",
  sampleSize: "420+ HVAC businesses",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ owner-operator panel",
      detail:
        "Survey data from U.S. HVAC companies ($800K–$6M revenue), normalized for residential vs commercial mix and maintenance contract penetration.",
    },
    {
      name: "Business-for-sale listings (BizBuySell, HVAC business brokers)",
      detail: "HVAC company listings with disclosed revenue, SDE, and technician count (2023–2026).",
    },
    {
      name: "ACCA — HVAC industry financial benchmarks",
      detail: "National HVAC contractor revenue, expense ratios, and labor productivity trends.",
    },
    {
      name: "SBA 7(a) loan performance (NAICS 238220)",
      detail: "Loan performance benchmarks for HVAC business acquisitions and startups.",
    },
    {
      name: "IRS Statistics of Income — Schedule C (NAICS 238220)",
      detail: "Sole-proprietorship revenue and expense ratios for HVAC contractors.",
    },
  ],
  calculations: [
    {
      label: "Net profit margin",
      formula: "(Revenue − Payroll − Materials − Fleet − Marketing − Overhead) ÷ Revenue × 100",
      note: "Median ~12%; healthy range 8–16% for owner-operated HVAC companies.",
    },
    {
      label: "Revenue per technician",
      formula: "Annual Revenue ÷ Number of Full-Time Field Technicians",
      note: "Median ~$240K per technician for mixed service/install companies.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 3.1×)",
      note: "SDE = Net Profit + Owner Compensation + add-backs. Range 2.4×–3.8× SDE.",
    },
    {
      label: "Maintenance contract penetration",
      formula: "Maintenance Revenue ÷ Total Revenue × 100",
      note: "Target 35%+ for recession-resilient revenue mix.",
    },
  ],
  limitations: [
    "Benchmarks reflect U.S. owner-operated HVAC contractors; large mechanical contractors and union shops vary significantly.",
    "Residential-heavy vs commercial-heavy companies have materially different margin and revenue-per-employee profiles.",
    "Seasonal markets (Northern heating, Southern cooling) affect monthly cash flow patterns not captured in annual figures.",
    "Figures are directional planning tools — not substitutes for CPA review, business valuation, or legal advice.",
  ],
};
