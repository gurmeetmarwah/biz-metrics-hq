import type { IndustryAttribution } from "@/lib/data-sources/types";

export const electricalAttribution: IndustryAttribution = {
  industry: "Electrical Contracting",
  naics: "238210 (Electrical Contractors and Other Wiring Installation Contractors)",
  sampleSize: "340+ electrical contracting businesses",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ owner-operator panel",
      detail:
        "Survey data from U.S. electrical contractors ($800K–$5M revenue), normalized for residential vs commercial mix and project vs service revenue.",
    },
    {
      name: "Business-for-sale listings (BizBuySell, electrical brokers)",
      detail: "Electrical contracting company listings with disclosed revenue, SDE, and electrician count (2023–2026).",
    },
    {
      name: "NECA — electrical contracting industry benchmarks",
      detail: "National electrical contractor revenue, expense ratios, and labor productivity trends.",
    },
    {
      name: "SBA 7(a) loan performance (NAICS 238210)",
      detail: "Loan performance benchmarks for electrical business acquisitions and startups.",
    },
    {
      name: "IRS Statistics of Income — Schedule C (NAICS 238210)",
      detail: "Sole-proprietorship revenue and expense ratios for electrical contractors.",
    },
  ],
  calculations: [
    {
      label: "Net profit margin",
      formula: "(Revenue − Payroll − Materials − Fleet − Marketing − Overhead) ÷ Revenue × 100",
      note: "Median ~10%; healthy range 7–13% for owner-operated electrical contractors.",
    },
    {
      label: "Revenue per electrician",
      formula: "Annual Revenue ÷ Number of Full-Time Electricians",
      note: "Median ~$230K per electrician for mixed service/project companies.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 2.8×)",
      note: "SDE = Net Profit + Owner Compensation + add-backs. Range 2.3×–3.4× SDE.",
    },
  ],
  limitations: [
    "Benchmarks reflect U.S. owner-operated electrical contractors; large commercial firms vary significantly.",
    "Residential service-heavy vs commercial project-heavy companies have different margin and ticket profiles.",
    "New construction exposure increases revenue volatility in downturns.",
    "Figures are directional planning tools — not substitutes for CPA review, business valuation, or legal advice.",
  ],
};
