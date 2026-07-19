import {
  formatCurrency,
  formatNumber,
  formatPercent,
  medicalSpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/medical-spa-calculators-shared";

export const meta = {
  title: "Medical Spa Patient Lifetime Value Calculator — LTV Tool",
  shortTitle: "Patient Lifetime Value Calculator",
  subtitle: "Estimate total revenue per patient over their relationship with your medical spa.",
  description:
    "Free medical spa patient lifetime value calculator. Estimate LTV from average treatment, visit frequency, and patient lifespan with optional gross margin view.",
};

export const introContent = {
  lead: "Patient lifetime value (LTV) shows how much each patient is worth over time. Injectable patients on a 3–4 month maintenance cadence build high LTV from repeat visits.",
  bullets: [
    "LTV = Average Treatment × Visits per Year × Patient Lifespan (Years)",
    "Injectable patients visit 3–4 times per year on maintenance plans",
    "Typical medical spa patient LTV ranges $4,000–$15,000",
  ],
  audience: "Built for medical spa owners sizing marketing spend and membership program ROI.",
};

export type PatientLtvInputs = {
  averageTreatment: number;
  visitsPerYear: number;
  patientLifespanYears: number;
  grossMarginPct: number;
};

export const defaultInputs: PatientLtvInputs = {
  averageTreatment: 400,
  visitsPerYear: 4,
  patientLifespanYears: 5,
  grossMarginPct: 65,
};

export const industryBenchmarks = [
  { metric: "Average Treatment", range: "$250 – $600" },
  { metric: "Visits per Year", range: "3 – 6" },
  { metric: "Patient Lifespan", range: "3 – 8 years" },
  { metric: "Typical LTV", range: "$4K – $15K" },
] as const;

export function calculatePatientLtv(inputs: PatientLtvInputs) {
  const annualValuePerPatient = inputs.averageTreatment * inputs.visitsPerYear;
  const lifetimeRevenue = annualValuePerPatient * inputs.patientLifespanYears;
  const lifetimeGrossProfit = lifetimeRevenue * (inputs.grossMarginPct / 100);
  const monthlyValuePerPatient = annualValuePerPatient / 12;

  let status: "low" | "healthy" | "strong" = "healthy";
  if (lifetimeRevenue < 4000) status = "low";
  else if (lifetimeRevenue >= 12000) status = "strong";

  return {
    annualValuePerPatient,
    lifetimeRevenue,
    lifetimeGrossProfit,
    monthlyValuePerPatient,
    status,
  };
}

export const faqs = [
  {
    question: "What is a good patient lifetime value for a medical spa?",
    answer:
      "A healthy medical spa patient lifetime value is $4,000–$15,000, depending on treatment mix and retention. Injectable patients on a 3–4 month cadence with membership plans drive the highest LTV.",
  },
  {
    question: "How do medical spas increase patient lifetime value?",
    answer:
      "Increase medical spa LTV with membership programs, combination treatment packages, automated rebooking reminders, and medical-grade skincare retail. Each extra visit per year compounds lifetime revenue significantly.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/medical-spa-patient-lifetime-value/");
export { medicalSpaDataLinks, formatCurrency, formatNumber, formatPercent };
