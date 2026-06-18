import type { IndustryAttribution } from "@/lib/data-sources/types";

export const dentalAttribution: IndustryAttribution = {
  industry: "Dental Practice",
  naics: "621210 (Offices of Dentists)",
  sampleSize: "310+ dental practices",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ owner-operator panel",
      detail:
        "Survey data from U.S. general and specialty dental practices ($1M–$4M collections), normalized for associate vs owner-operator models.",
    },
    {
      name: "Business-for-sale listings (BizBuySell, ADS Dental Transitions)",
      detail:
        "Dental practice listings with disclosed collections, EBITDA, SDE, and operatory count (2023–2026).",
    },
    {
      name: "ADA Health Policy Institute — Economic Outlook",
      detail: "National dental practice revenue, expense ratios, and workforce trends.",
    },
    {
      name: "SBA 7(a) loan performance (NAICS 621210)",
      detail: "Loan performance benchmarks for dental practice acquisitions.",
    },
    {
      name: "IRS Statistics of Income — Schedule C (NAICS 621210)",
      detail: "Sole-proprietorship and partnership revenue and expense ratios for dental offices.",
    },
  ],
  calculations: [
    {
      label: "EBITDA margin",
      formula: "(Collections − Clinical Payroll − Supplies − Admin − Overhead) ÷ Collections × 100",
      note: "Median 24%; healthy range 18–30% for general dentistry.",
    },
    {
      label: "Revenue per operatory",
      formula: "Annual Collections ÷ Number of Operatories",
      note: "Median ~$350K per operatory for general practices.",
    },
    {
      label: "Patient lifetime value",
      formula: "Average Annual Production Per Active Patient × Average Retention Years",
      note: "Typical active patient generates $800–$1,200/year over 5–8 years.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 3.8×)",
      note: "SDE = Net Profit + Owner Doctor Compensation + add-backs. Range 3.2×–4.5× SDE.",
    },
  ],
  limitations: [
    "Benchmarks reflect U.S. general dentistry; specialty practices (ortho, oral surgery) vary significantly.",
    "DSO-affiliated vs private practice economics differ on overhead and owner compensation.",
    "Valuation multiples reflect asking prices; payer mix and geographic market affect realizable value.",
    "Figures are directional planning tools — not substitutes for CPA review, practice valuation, or legal advice.",
  ],
};

export {
  getDentalCalculatorCalculations,
  type DentalCalculatorId,
} from "@/lib/data-sources/dental-calculators";
