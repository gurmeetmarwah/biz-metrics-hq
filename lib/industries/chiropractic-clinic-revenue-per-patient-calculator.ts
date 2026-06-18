import {
  formatCurrency,
  formatNumber,
  relatedCalculators,
  chiropracticIndustryAverages,
} from "@/lib/industries/chiropractic-calculators-shared";

export const meta = {
  title: "Chiropractic Revenue Per Patient Calculator & Patient LTV Tool",
  shortTitle: "Revenue Per Patient Calculator",
  subtitle:
    "Calculate annual revenue per active patient, patient lifetime value, and acquisition payback for your clinic.",
  description:
    "Free chiropractic revenue per patient calculator. Estimate revenue per patient, patient LTV, LTV:CAC ratio, and payback period using chiropractic industry benchmarks.",
};

export const introContent = {
  lead: "Patient economics drive growth, marketing efficiency, and long-term clinic value. This calculator converts your revenue and retention assumptions into revenue per patient, LTV, and CAC efficiency metrics.",
  bullets: [
    "Revenue Per Patient = Annual Revenue ÷ Active Patients",
    "LTV = Revenue Per Patient × Retention Years",
    "Typical chiropractic patient value ranges from $1,000 – $2,800",
  ],
  audience:
    "Built for chiropractic clinic owners and operators evaluating referral ROI, marketing channels, and patient retention strategies.",
};

export type RevenuePerPatientInputs = {
  activePatients: number;
  annualRevenue: number;
  retentionYears: number;
  newPatientsPerMonth: number;
  acquisitionCost: number;
};

export const defaultInputs: RevenuePerPatientInputs = {
  activePatients: 950,
  annualRevenue: 500000,
  retentionYears: 4,
  newPatientsPerMonth: 45,
  acquisitionCost: 180,
};

export const patientBenchmarks = [
  { metric: "Active Patients", range: "600 – 1,500" },
  { metric: "Revenue / Patient", range: "$600 – $1,800/yr" },
  { metric: "Visits / Patient", range: "12 – 24+ per year" },
  { metric: "Patient LTV", range: "$1,000 – $2,800" },
] as const;

export function calculateRevenuePerPatient(inputs: RevenuePerPatientInputs) {
  const revenuePerPatient =
    inputs.activePatients > 0 ? inputs.annualRevenue / inputs.activePatients : 0;
  const ltv = revenuePerPatient * inputs.retentionYears;
  const ltvToCac = inputs.acquisitionCost > 0 ? ltv / inputs.acquisitionCost : 0;
  const paybackMonths =
    revenuePerPatient > 0 ? (inputs.acquisitionCost / revenuePerPatient) * 12 : 0;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (ltv < 1000) tier = "Below";
  else if (ltv >= 2800) tier = "Strong";

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
    question: "What is average revenue per patient for a chiropractic clinic?",
    answer:
      "Many chiropractic clinics generate around $600-$1,800 per active patient per year, with a median near $1,100. Clinics with stronger care-plan adherence, recurring wellness visits, and balanced payer mix often trend toward the high end.",
  },
  {
    question: "How do you calculate patient lifetime value in chiropractic care?",
    answer:
      "Patient LTV is calculated as annual revenue per active patient multiplied by average retention years. If your clinic generates $1,100 per patient annually and retains patients for 4 years, patient LTV is about $4,400.",
  },
  {
    question: "What is a healthy LTV:CAC ratio for chiropractic clinics?",
    answer:
      "A healthy chiropractic target is typically 4:1 or higher, with high-performing referral and digital channels often above 6:1. Ratios below 3:1 usually indicate high acquisition cost, weak retention, or low visit frequency.",
  },
  {
    question: "How quickly should patient acquisition spend pay back?",
    answer:
      "Many chiropractic clinics target CAC payback in under 6 months. Faster payback improves cash flow and supports sustainable growth, especially for owner-operators reinvesting into marketing and staffing.",
  },
] as const;

export const relatedTools = relatedCalculators(
  "/calculators/chiropractic-clinic-revenue-per-patient/",
);
export { chiropracticIndustryAverages, formatCurrency, formatNumber };
