import type { IndustryAttribution } from "@/lib/data-sources/types";

export const roofingAttribution: IndustryAttribution = {
  industry: "Roofing",
  naics: "238160 (Roofing Contractors)",
  sampleSize: "310+ roofing companies",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ owner-operator panel",
      detail:
        "Survey data from U.S. roofing contractors ($600K–$5M revenue), normalized for residential vs commercial mix and insurance restoration share.",
    },
    {
      name: "Business-for-sale listings (BizBuySell, roofing brokers)",
      detail: "Roofing company listings with disclosed revenue, SDE, and crew count (2023–2026).",
    },
    {
      name: "NRCA — roofing industry financial benchmarks",
      detail: "National roofing contractor revenue, expense ratios, and crew productivity trends.",
    },
    {
      name: "SBA 7(a) loan performance (NAICS 238160)",
      detail: "Loan performance benchmarks for roofing business acquisitions and startups.",
    },
    {
      name: "IRS Statistics of Income — Schedule C (NAICS 238160)",
      detail: "Sole-proprietorship revenue and expense ratios for roofing contractors.",
    },
  ],
  calculations: [
    {
      label: "Net profit margin",
      formula: "(Revenue − Labor − Materials − Marketing − Fleet − Overhead) ÷ Revenue × 100",
      note: "Median ~9%; healthy range 6–13% for owner-operated roofing companies.",
    },
    {
      label: "Revenue per crew",
      formula: "Annual Revenue ÷ Number of Install Crews",
      note: "Median ~$650K per crew for mixed repair/replacement operators.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 2.6×)",
      note: "SDE = Net Profit + Owner Compensation + add-backs. Range 2.0×–3.2× SDE.",
    },
  ],
  limitations: [
    "Benchmarks reflect U.S. owner-operated roofing contractors; storm-market operators vary significantly.",
    "Insurance restoration-heavy companies show higher revenue volatility and seasonal spikes.",
    "Regional weather patterns heavily influence annual revenue and crew utilization.",
    "Figures are directional planning tools — not substitutes for CPA review, business valuation, or legal advice.",
  ],
};
