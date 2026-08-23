import {
  formatCurrency,
  formatNumber,
  medicalSpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/medical-spa-calculators-shared";

export const meta = {
  title: "Spa Revenue Calculator — Medical Spa Annual Sales Estimator",
  shortTitle: "Spa Revenue Calculator (Medical Spa)",
  subtitle: "Spa revenue calculator for med spas — project annual sales from providers, treatments, and average ticket.",
  description:
    "Free spa revenue calculator for medical spas. Estimate annual med spa revenue from providers, treatments per day, average treatment value, and membership revenue — median ~$1.2M.",
  keywords: [
    "spa revenue calculator",
    "medical spa revenue calculator",
    "med spa revenue calculator",
    "spa sales calculator",
  ],
};

export const introContent = {
  lead: "Medical spa revenue is driven by provider count, treatment volume, and average ticket. This calculator projects annual treatment and membership revenue for your practice.",
  bullets: [
    "Revenue = Providers × Treatments/Day × Days/Week × 50 Weeks × Average Treatment",
    "Membership and package revenue typically add 10–20% on top of treatment revenue",
    "Median independent medical spa revenue is ~$1.2M ($600K–$2.5M range)",
  ],
  audience: "Built for medical spa owners and buyers sizing revenue potential from staffing and treatment mix.",
};

export type RevenueInputs = {
  providers: number;
  treatmentsPerProviderPerDay: number;
  daysOpenPerWeek: number;
  averageTreatment: number;
  membershipRevenuePct: number;
};

export const defaultInputs: RevenueInputs = {
  providers: 3,
  treatmentsPerProviderPerDay: 8,
  daysOpenPerWeek: 6,
  averageTreatment: 400,
  membershipRevenuePct: 15,
};

export const industryBenchmarks = [
  { metric: "Annual Revenue", range: "$600K – $2.5M" },
  { metric: "Average Treatment", range: "$250 – $600" },
  { metric: "Revenue per Provider", range: "$300K – $700K" },
  { metric: "Membership Revenue", range: "10 – 20%" },
] as const;

const WEEKS_PER_YEAR = 50;

export function calculateRevenue(inputs: RevenueInputs) {
  const annualTreatments =
    inputs.providers *
    inputs.treatmentsPerProviderPerDay *
    inputs.daysOpenPerWeek *
    WEEKS_PER_YEAR;
  const treatmentRevenue = annualTreatments * inputs.averageTreatment;
  const membershipRevenue = treatmentRevenue * (inputs.membershipRevenuePct / 100);
  const totalRevenue = treatmentRevenue + membershipRevenue;
  const revenuePerProvider = inputs.providers > 0 ? totalRevenue / inputs.providers : 0;
  const monthlyRevenue = totalRevenue / 12;

  return {
    annualTreatments,
    treatmentRevenue,
    membershipRevenue,
    totalRevenue,
    revenuePerProvider,
    monthlyRevenue,
  };
}

export const faqs = [
  {
    question: "How much revenue does a medical spa generate?",
    answer:
      "A typical independent medical spa generates $600K–$2.5M in annual revenue, with a median around $1.2M. Revenue scales with provider count, treatment volume, average ticket, and membership program enrollment.",
  },
  {
    question: "How do I estimate my medical spa's annual revenue?",
    answer:
      "Multiply your number of providers by treatments per day, days open per week, and about 50 working weeks, then multiply by your average treatment value. Add 10–20% for membership and package revenue to estimate total medical spa revenue.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/medical-spa-revenue/");
export { medicalSpaDataLinks, formatCurrency, formatNumber };
