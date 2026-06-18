import type { IndustryAttribution } from "@/lib/data-sources/types";

export const cleaningBusinessAttribution: IndustryAttribution = {
  industry: "Cleaning Business",
  naics: "561720 (Janitorial Services)",
  sampleSize: "190+ cleaning businesses",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ owner-operator panel",
      detail:
        "Survey data from U.S. residential and commercial cleaning operators ($150K–$1.5M revenue), normalized for contract mix and labor model.",
    },
    {
      name: "Business-for-sale listings (BizBuySell, cleaning brokers)",
      detail: "Cleaning company listings with disclosed revenue, SDE, and crew count (2023–2026).",
    },
    {
      name: "ISSA — Worldwide Cleaning Industry Association",
      detail: "Industry financial benchmarks, commercial contract trends, and labor productivity data.",
    },
    {
      name: "SBA 7(a) loan performance (NAICS 561720)",
      detail: "Loan performance benchmarks for cleaning business acquisitions and startups.",
    },
    {
      name: "IRS Statistics of Income — Schedule C (NAICS 561720)",
      detail: "Sole-proprietorship revenue and expense ratios for janitorial and cleaning services.",
    },
  ],
  calculations: [
    {
      label: "Net profit margin",
      formula: "(Revenue − Cleaner Payroll − Supplies − Fleet − Marketing − Overhead) ÷ Revenue × 100",
      note: "Median ~15%; healthy range 10–20% for owner-operated cleaning companies.",
    },
    {
      label: "Revenue per cleaner",
      formula: "Annual Revenue ÷ Number of Field Cleaners",
      note: "Median ~$115K per cleaner for mixed residential and commercial operators.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 2.4×)",
      note: "SDE = Net Profit + Owner Compensation + add-backs. Range 1.8×–3.0× SDE.",
    },
  ],
  limitations: [
    "Benchmarks reflect U.S. owner-operated cleaning companies; residential vs commercial mix varies significantly.",
    "Commercial-heavy operators show more stable revenue but lower margins than residential-focused businesses.",
    "Labor costs and turnover heavily influence profitability across markets.",
    "Figures are directional planning tools — not substitutes for CPA review, business valuation, or legal advice.",
  ],
};
