import type { IndustryAttribution } from "@/lib/data-sources/types";

export const pestControlAttribution: IndustryAttribution = {
  industry: "Pest Control",
  naics: "561710 (Exterminating and Pest Control Services)",
  sampleSize: "220+ pest control companies",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ owner-operator panel",
      detail:
        "Survey data from U.S. pest control operators ($300K–$2M revenue), normalized for residential vs commercial mix and recurring contract penetration.",
    },
    {
      name: "Business-for-sale listings (BizBuySell, pest control brokers)",
      detail: "Pest control company listings with disclosed revenue, SDE, and route count (2023–2026).",
    },
    {
      name: "NPMA — National Pest Management Association",
      detail: "Industry financial benchmarks, technician productivity, and subscription contract trends.",
    },
    {
      name: "SBA 7(a) loan performance (NAICS 561710)",
      detail: "Loan performance benchmarks for pest control business acquisitions and startups.",
    },
    {
      name: "IRS Statistics of Income — Schedule C (NAICS 561710)",
      detail: "Sole-proprietorship revenue and expense ratios for exterminating and pest control services.",
    },
  ],
  calculations: [
    {
      label: "Net profit margin",
      formula: "(Revenue − Technician Payroll − Chemicals − Fleet − Marketing − Overhead) ÷ Revenue × 100",
      note: "Median ~18%; healthy range 15–25% for owner-operated pest control companies.",
    },
    {
      label: "Revenue per technician",
      formula: "Annual Revenue ÷ Number of Field Technicians",
      note: "Median ~$160K per technician for route-dense subscription operators.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 3.2×)",
      note: "SDE = Net Profit + Owner Compensation + add-backs. Range 2.5×–4.0× SDE.",
    },
  ],
  limitations: [
    "Benchmarks reflect U.S. owner-operated pest control companies; termite and wildlife mix varies by region.",
    "Subscription-heavy operators show more stable revenue and higher multiples than one-time treatment businesses.",
    "Climate and pest pressure heavily influence service frequency and revenue per account.",
    "Figures are directional planning tools — not substitutes for CPA review, business valuation, or legal advice.",
  ],
};
