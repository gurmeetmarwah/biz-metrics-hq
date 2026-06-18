import type { IndustryAttribution } from "@/lib/data-sources/types";

export const plumbingAttribution: IndustryAttribution = {
  industry: "Plumbing",
  naics: "238220 (Plumbing, Heating, and Air-Conditioning Contractors — plumbing segment)",
  sampleSize: "380+ plumbing businesses",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ owner-operator panel",
      detail:
        "Survey data from U.S. plumbing contractors ($600K–$4M revenue), normalized for residential vs commercial mix and emergency service share.",
    },
    {
      name: "Business-for-sale listings (BizBuySell, plumbing brokers)",
      detail: "Plumbing company listings with disclosed revenue, SDE, and technician count (2023–2026).",
    },
    {
      name: "PHCC — plumbing industry financial benchmarks",
      detail: "National plumbing contractor revenue, expense ratios, and labor productivity trends.",
    },
    {
      name: "SBA 7(a) loan performance (NAICS 238220)",
      detail: "Loan performance benchmarks for plumbing business acquisitions and startups.",
    },
    {
      name: "IRS Statistics of Income — Schedule C (NAICS 238220)",
      detail: "Sole-proprietorship revenue and expense ratios for plumbing contractors.",
    },
  ],
  calculations: [
    {
      label: "Net profit margin",
      formula: "(Revenue − Payroll − Materials − Fleet − Marketing − Overhead) ÷ Revenue × 100",
      note: "Median ~11%; healthy range 8–14% for owner-operated plumbing companies.",
    },
    {
      label: "Revenue per technician",
      formula: "Annual Revenue ÷ Number of Full-Time Plumbers",
      note: "Median ~$215K per plumber for mixed service/install companies.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 2.8×)",
      note: "SDE = Net Profit + Owner Compensation + add-backs. Range 2.2×–3.5× SDE.",
    },
  ],
  limitations: [
    "Benchmarks reflect U.S. owner-operated plumbing contractors; large mechanical firms vary significantly.",
    "Residential-heavy vs commercial-heavy companies have different margin and ticket profiles.",
    "Emergency-heavy operators show higher revenue volatility but stronger average tickets.",
    "Figures are directional planning tools — not substitutes for CPA review, business valuation, or legal advice.",
  ],
};
