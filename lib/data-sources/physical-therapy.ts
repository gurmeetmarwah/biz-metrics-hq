import type { IndustryAttribution } from "@/lib/data-sources/types";

export const physicalTherapyAttribution: IndustryAttribution = {
  industry: "Physical Therapy Clinic",
  naics: "621340 (Offices of Physical, Occupational and Speech Therapists)",
  sampleSize: "180+ physical therapy clinics",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ owner-operator panel",
      detail:
        "Survey data from U.S. outpatient physical therapy clinics ($500K–$1.8M revenue), normalized for solo vs multi-therapist models.",
    },
    {
      name: "Business-for-sale listings (BizBuySell, PT practice brokers)",
      detail:
        "Physical therapy clinic listings with disclosed revenue, EBITDA, SDE, and therapist count (2023–2026).",
    },
    {
      name: "APTA Private Practice Section benchmarks",
      detail: "National PT practice revenue, visit volume, reimbursement, and staffing trends.",
    },
    {
      name: "SBA 7(a) loan performance (NAICS 621340)",
      detail: "Loan performance benchmarks for PT clinic acquisitions and startups.",
    },
    {
      name: "CMS Medicare Physician Fee Schedule (PT services)",
      detail: "Reimbursement benchmarks for evaluation and treatment codes.",
    },
  ],
  calculations: [
    {
      label: "EBITDA margin",
      formula: "(Revenue − Clinical Payroll − Admin Payroll − Rent − Marketing − Overhead) ÷ Revenue × 100",
      note: "Median ~23%; healthy range 18–28% for outpatient PT clinics.",
    },
    {
      label: "Revenue per therapist",
      formula: "Annual Revenue ÷ Number of Full-Time Physical Therapists",
      note: "Median ~$420K per PT for general outpatient practices.",
    },
    {
      label: "Revenue per visit",
      formula: "Total Collected Revenue ÷ Total Billable Visits",
      note: "Typical $90–$140 per visit depending on payer mix and service level.",
    },
    {
      label: "Patient lifetime value",
      formula: "Revenue Per Episode × Average Episodes Per Patient × Retention Years",
      note: "Typical active patient generates $900–$2,400 over 3–5 years.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 3.2×)",
      note: "SDE = Net Profit + Owner PT Compensation + add-backs. Range 2.5×–4.0× SDE.",
    },
  ],
  limitations: [
    "Benchmarks reflect U.S. outpatient physical therapy clinics; home health and hospital-based PT vary significantly.",
    "Payer mix (Medicare, commercial, workers' comp, cash-pay) materially affects revenue per visit and margins.",
    "Direct-access vs referral-dependent clinics differ on marketing spend and new patient acquisition costs.",
    "Figures are directional planning tools — not substitutes for CPA review, practice valuation, or legal advice.",
  ],
};

export {
  getPhysicalTherapyCalculatorCalculations,
  type PhysicalTherapyCalculatorId,
} from "@/lib/data-sources/physical-therapy-calculators";
