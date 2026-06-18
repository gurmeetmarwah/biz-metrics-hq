import {
  formatCurrency,
  formatNumber,
  physicalTherapyIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/physical-therapy-calculators-shared";

export const meta = {
  title: "Physical Therapy Revenue Per Patient Calculator & Patient LTV Tool",
  shortTitle: "Revenue Per Patient Calculator",
  subtitle:
    "Calculate annual revenue per active patient, patient lifetime value, and acquisition payback for your PT clinic.",
  description:
    "Free physical therapy revenue per patient calculator. Estimate revenue per patient, patient LTV, LTV:CAC ratio, and payback period using PT industry benchmarks.",
};

export const introContent = {
  lead: "Patient economics drive growth, marketing efficiency, and long-term clinic value. This calculator converts your revenue and retention assumptions into revenue per patient, LTV, and CAC efficiency metrics.",
  bullets: [
    "Revenue Per Patient = Annual Revenue ÷ Active Patients",
    "LTV = Revenue Per Patient × Retention Years",
    "Typical PT patient value ranges from $1,200 – $3,500",
  ],
  audience:
    "Built for PT clinic owners and operators evaluating referral ROI, marketing channels, and patient retention strategies.",
};

export type RevenuePerPatientInputs = {
  activePatients: number;
  annualRevenue: number;
  retentionYears: number;
  newPatientsPerMonth: number;
  acquisitionCost: number;
};

export const defaultInputs: RevenuePerPatientInputs = {
  activePatients: 1400,
  annualRevenue: 850000,
  retentionYears: 3,
  newPatientsPerMonth: 35,
  acquisitionCost: 210,
};

export const patientBenchmarks = [
  { metric: "Active Patients", range: "800 – 2,000" },
  { metric: "Revenue / Patient", range: "$450 – $850/yr" },
  { metric: "Visits / Episode", range: "8 – 14 visits" },
  { metric: "Patient LTV", range: "$1,200 – $3,500" },
] as const;

export function calculateRevenuePerPatient(inputs: RevenuePerPatientInputs) {
  const revenuePerPatient =
    inputs.activePatients > 0 ? inputs.annualRevenue / inputs.activePatients : 0;
  const ltv = revenuePerPatient * inputs.retentionYears;
  const ltvToCac = inputs.acquisitionCost > 0 ? ltv / inputs.acquisitionCost : 0;
  const paybackMonths =
    revenuePerPatient > 0 ? (inputs.acquisitionCost / revenuePerPatient) * 12 : 0;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (ltv < 1200) tier = "Below";
  else if (ltv >= 3000) tier = "Strong";

  return {
    revenuePerPatient,
    ltv,
    ltvToCac,
    paybackMonths,
    tier,
  };
}

export const faqs = [
  {
    question: "What is average revenue per patient for a PT clinic?",
    answer:
      "Many outpatient PT clinics generate around $450–$850 per active patient per year, with a median near $607. Clinics with higher visit completion, stronger payer mix, and cash-pay programs often trend toward the high end.",
  },
  {
    question: "How do you calculate patient lifetime value in physical therapy?",
    answer:
      "Patient LTV is calculated as annual revenue per active patient multiplied by average retention years. If your clinic generates $600 per patient annually and retains patients for 3 years, patient LTV is about $1,800.",
  },
  {
    question: "What is a healthy LTV:CAC ratio for PT clinics?",
    answer:
      "A healthy PT target is typically 4:1 or higher, with top-performing referral and marketing channels often above 6:1. Ratios below 3:1 usually indicate either high acquisition cost, weak retention, or low revenue per patient.",
  },
  {
    question: "How quickly should patient acquisition spend pay back?",
    answer:
      "Many PT clinics target CAC payback in under 6 months. Faster payback improves cash flow and supports sustainable growth, especially for clinics funding expansion through retained earnings or debt.",
  },
] as const;

export const relatedTools = relatedCalculators(
  "/calculators/physical-therapy-clinic-revenue-per-patient/"
);
export { physicalTherapyIndustryAverages, formatCurrency, formatNumber };
