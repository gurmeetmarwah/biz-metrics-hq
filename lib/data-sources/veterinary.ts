import type { IndustryAttribution } from "@/lib/data-sources/types";

export const veterinaryAttribution: IndustryAttribution = {
  industry: "Veterinary Clinic",
  naics: "541940 (Veterinary Services)",
  sampleSize: "240+ veterinary clinics",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ owner-operator panel",
      detail:
        "Survey data from U.S. general and emergency veterinary clinics ($600K–$2M revenue), normalized for associate vs owner-operator models.",
    },
    {
      name: "Business-for-sale listings (BizBuySell, Simmons & Associates)",
      detail:
        "Veterinary clinic listings with disclosed revenue, EBITDA, SDE, and DVM count (2023–2026).",
    },
    {
      name: "AVMA Economic State of the Veterinary Profession",
      detail: "National veterinary practice revenue, expense ratios, and workforce trends.",
    },
    {
      name: "SBA 7(a) loan performance (NAICS 541940)",
      detail: "Loan performance benchmarks for veterinary clinic acquisitions and startups.",
    },
    {
      name: "IRS Statistics of Income — Schedule C (NAICS 541940)",
      detail: "Sole-proprietorship revenue and expense ratios for veterinary services.",
    },
  ],
  calculations: [
    {
      label: "EBITDA margin",
      formula: "(Revenue − Clinical Payroll − Support Staff − Supplies − Overhead) ÷ Revenue × 100",
      note: "Median ~19%; healthy range 15–22% for general veterinary clinics.",
    },
    {
      label: "Revenue per veterinarian",
      formula: "Annual Revenue ÷ Number of Full-Time Veterinarians",
      note: "Median ~$550K per DVM for general practices.",
    },
    {
      label: "Client lifetime value",
      formula: "Average Annual Revenue Per Client × Average Retention Years",
      note: "Typical active client generates $350–$900/year over 4–7 years.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 3.4×)",
      note: "SDE = Net Profit + Owner Veterinarian Compensation + add-backs. Range 2.8×–4.0× SDE.",
    },
  ],
  limitations: [
    "Benchmarks reflect U.S. general and emergency veterinary clinics; specialty referral hospitals vary significantly.",
    "Corporate vs independent clinic economics differ on overhead, compensation, and valuation multiples.",
    "Valuation multiples reflect asking prices; geographic market and service mix affect realizable value.",
    "Figures are directional planning tools — not substitutes for CPA review, practice valuation, or legal advice.",
  ],
};

export {
  getVeterinaryCalculatorCalculations,
  type VeterinaryCalculatorId,
} from "@/lib/data-sources/veterinary-calculators";
