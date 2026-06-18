import {
  dentalIndustryAverages,
  formatCurrency,
  formatNumber,
  relatedCalculators,
} from "@/lib/industries/dental-calculators-shared";

export const meta = {
  title: "Dental Revenue Per Patient Calculator & Patient LTV Tool",
  shortTitle: "Revenue Per Patient Calculator",
  subtitle:
    "Calculate annual revenue per active patient and patient lifetime value for your dental practice.",
  description:
    "Free dental revenue per patient calculator. Estimate annual production per active patient, patient lifetime value, and compare against industry benchmarks for general dentistry.",
};

export const introContent = {
  lead: "Patient economics drive dental practice valuation and marketing ROI. This calculator computes annual revenue per active patient and lifetime value based on retention assumptions.",
  bullets: [
    "Annual Revenue Per Patient = Total Collections ÷ Active Patients",
    "LTV = Annual Revenue Per Patient × Retention Years",
    "Median active patient generates $900–$1,100/year",
  ],
  audience:
    "Built for practice owners evaluating patient acquisition costs, marketing spend, and growth strategies.",
};

export type RevenuePerPatientInputs = {
  activePatients: number;
  annualCollections: number;
  retentionYears: number;
  newPatientsPerMonth: number;
  acquisitionCost: number;
};

export const defaultInputs: RevenuePerPatientInputs = {
  activePatients: 1500,
  annualCollections: 1800000,
  retentionYears: 7,
  newPatientsPerMonth: 15,
  acquisitionCost: 250,
};

export const patientBenchmarks = [
  { metric: "Active Patients", range: "1,200 – 1,800" },
  { metric: "Revenue / Patient", range: "$900 – $1,100/yr" },
  { metric: "Retention", range: "5 – 8 years" },
  { metric: "LTV", range: "$5,000 – $8,000" },
] as const;

export function calculateRevenuePerPatient(inputs: RevenuePerPatientInputs) {
  const revenuePerPatient =
    inputs.activePatients > 0 ? inputs.annualCollections / inputs.activePatients : 0;
  const ltv = revenuePerPatient * inputs.retentionYears;
  const annualNewPatients = inputs.newPatientsPerMonth * 12;
  const annualAcquisitionSpend = annualNewPatients * inputs.acquisitionCost;
  const paybackMonths =
    revenuePerPatient > 0 ? (inputs.acquisitionCost / revenuePerPatient) * 12 : 0;
  const ltvToCac = inputs.acquisitionCost > 0 ? ltv / inputs.acquisitionCost : 0;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (revenuePerPatient < 900) tier = "Below";
  else if (revenuePerPatient >= 1100) tier = "Strong";

  return {
    revenuePerPatient,
    ltv,
    annualNewPatients,
    annualAcquisitionSpend,
    paybackMonths,
    ltvToCac,
    tier,
  };
}

export const faqs = [
  {
    question: "What is the average revenue per patient for a dental practice?",
    answer:
      "The median general dentistry practice generates $900–$1,100 per active patient annually. Practices with strong hygiene recall and treatment acceptance can exceed $1,200/patient; Medicaid-heavy practices may be below $800.",
  },
  {
    question: "How do you calculate patient lifetime value for a dental practice?",
    answer:
      "Patient LTV = Annual Revenue Per Active Patient × Average Retention Years. With $1,000/year revenue and 7-year retention, LTV is approximately $7,000. This helps evaluate marketing spend and new patient acquisition ROI.",
  },
  {
    question: "How many active patients does a dental practice need?",
    answer:
      "A solo general practice typically maintains 1,200–1,800 active patients (seen within 18 months). At $1,000/patient/year, 1,500 active patients supports ~$1.5M in annual collections before new patient growth.",
  },
  {
    question: "What is a good patient acquisition cost for dentistry?",
    answer:
      "Typical new patient acquisition costs range $150–$350 depending on market and channel. With $7,000 LTV and $250 CAC, the LTV:CAC ratio of 28:1 is healthy. Payback within 3–4 months is the target.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/dental-practice-revenue-per-patient/");
export { dentalIndustryAverages, formatCurrency, formatNumber };
