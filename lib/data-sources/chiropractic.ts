import type { IndustryAttribution } from "@/lib/data-sources/types";

export const chiropracticAttribution: IndustryAttribution = {
  industry: "Chiropractic Clinic",
  naics: "621310 (Offices of Chiropractors)",
  sampleSize: "160+ chiropractic clinics",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ owner-operator panel",
      detail:
        "Survey data from U.S. chiropractic clinics ($300K–$900K revenue), normalized for solo vs multi-doctor and cash-pay vs hybrid models.",
    },
    {
      name: "Business-for-sale listings (BizBuySell, chiropractic practice brokers)",
      detail:
        "Chiropractic clinic listings with disclosed revenue, SDE, and doctor count (2023–2026).",
    },
    {
      name: "ACA Practice Analysis of Chiropractic",
      detail: "National chiropractic practice revenue, expense ratios, and patient visit trends.",
    },
    {
      name: "SBA 7(a) loan performance (NAICS 621310)",
      detail: "Loan performance benchmarks for chiropractic clinic acquisitions and startups.",
    },
    {
      name: "IRS Statistics of Income — Schedule C (NAICS 621310)",
      detail: "Sole-proprietorship revenue and expense ratios for chiropractic services.",
    },
  ],
  calculations: [
    {
      label: "Net profit margin",
      formula: "(Revenue − Payroll − Rent − Marketing − Admin − Overhead) ÷ Revenue × 100",
      note: "Median ~30%; healthy range 25–35% for cash-pay chiropractic clinics.",
    },
    {
      label: "Revenue per chiropractor",
      formula: "Annual Revenue ÷ Number of Full-Time Chiropractors",
      note: "Median ~$320K per DC for general outpatient practices.",
    },
    {
      label: "Revenue per patient",
      formula: "Total Collected Revenue ÷ Active Patients (12-month)",
      note: "Typical $600–$1,800 per active patient annually depending on visit frequency.",
    },
    {
      label: "Patient lifetime value",
      formula: "Annual Revenue Per Patient × Average Retention Years",
      note: "Typical active patient generates $1,000–$2,800 over 3–6 years.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 2.8×)",
      note: "SDE = Net Profit + Owner DC Compensation + add-backs. Range 2.0×–3.5× SDE.",
    },
  ],
  limitations: [
    "Benchmarks reflect U.S. outpatient chiropractic clinics; integrated medical-chiropractic hybrids vary significantly.",
    "Cash-pay vs insurance-based models materially affect revenue per visit, margins, and marketing spend.",
    "Wellness membership and subscription models can shift recurring revenue percentages above typical ranges.",
    "Figures are directional planning tools — not substitutes for CPA review, practice valuation, or legal advice.",
  ],
};

export {
  getChiropracticCalculatorCalculations,
  type ChiropracticCalculatorId,
} from "@/lib/data-sources/chiropractic-calculators";
