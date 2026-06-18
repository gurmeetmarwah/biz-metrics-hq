import {
  formatCurrency,
  formatNumber,
  relatedCalculators,
  veterinaryIndustryAverages,
} from "@/lib/industries/veterinary-calculators-shared";

export const meta = {
  title: "Veterinary Revenue Per Veterinarian Calculator & DVM Productivity Tool",
  shortTitle: "Revenue Per Veterinarian Calculator",
  subtitle: "Calculate revenue per DVM, daily production, and appointments for your veterinary clinic.",
  description:
    "Free veterinary revenue per veterinarian calculator. Measure DVM productivity against industry benchmarks for general and emergency clinics.",
};

export const introContent = {
  lead: "Revenue per veterinarian is the core productivity metric for clinic valuation and staffing decisions. This calculator breaks down annual and daily production per DVM.",
  bullets: [
    "Revenue Per Vet = Annual Revenue ÷ Full-Time Veterinarians",
    "Median general practice: $450K–$750K per DVM",
    "Top performers exceed $650K per DVM annually",
  ],
  audience:
    "Built for clinic owners evaluating DVM hiring, associate productivity targets, and expansion planning.",
};

export type RevenuePerVetInputs = {
  annualRevenue: number;
  veterinarians: number;
  workingDays: number;
  appointmentsPerDay: number;
};

export const defaultInputs: RevenuePerVetInputs = {
  annualRevenue: 1200000,
  veterinarians: 2,
  workingDays: 250,
  appointmentsPerDay: 20,
};

export const productivityBenchmarks = [
  { metric: "Revenue Per Vet", range: "$450K – $750K/yr" },
  { metric: "Appointments Per Day", range: "16 – 24" },
  { metric: "Revenue Per Appointment", range: "$95 – $165" },
  { metric: "Daily Production", range: "$1,800 – $3,200" },
] as const;

export function calculateRevenuePerVet(inputs: RevenuePerVetInputs) {
  const revenuePerVet = inputs.veterinarians > 0 ? inputs.annualRevenue / inputs.veterinarians : 0;
  const dailyProductionPerVet = inputs.workingDays > 0 ? revenuePerVet / inputs.workingDays : 0;
  const revenuePerAppointment =
    inputs.appointmentsPerDay > 0 ? dailyProductionPerVet / inputs.appointmentsPerDay : 0;
  const totalAppointmentsPerYear = inputs.appointmentsPerDay * inputs.workingDays * inputs.veterinarians;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (revenuePerVet < 450000) tier = "Below";
  else if (revenuePerVet >= 650000) tier = "Strong";

  const vsMedian = revenuePerVet - veterinaryIndustryAverages.revenuePerVet;

  return {
    revenuePerVet,
    dailyProductionPerVet,
    revenuePerAppointment,
    totalAppointmentsPerYear,
    tier,
    vsMedian,
  };
}

export const faqs = [
  {
    question: "What is a good revenue per veterinarian?",
    answer:
      "The median general veterinary clinic generates $450K–$750K per full-time DVM annually. Solo practices often run $500K–$650K; multi-vet clinics with strong support staff can exceed $700K per DVM.",
  },
  {
    question: "How many appointments should a veterinarian see per day?",
    answer:
      "General practice DVMs typically see 16–24 appointments per day, mixing wellness visits, sick exams, and procedures. Emergency veterinarians may see fewer appointments but higher revenue per visit.",
  },
  {
    question: "How do you improve revenue per veterinarian?",
    answer:
      "Four levers: optimize scheduling (reduce gaps), improve treatment plan acceptance, add high-margin services (dentistry, diagnostics), and ensure adequate technician support so DVMs focus on billable procedures.",
  },
  {
    question: "What revenue per vet do buyers expect?",
    answer:
      "Buyers typically expect $500K+ per DVM for general clinics at acquisition. Below $400K per vet signals staffing inefficiency, low pricing, or weak client retention that may reduce valuation multiples.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/veterinary-clinic-revenue-per-veterinarian/");
export { veterinaryIndustryAverages, formatCurrency, formatNumber };
