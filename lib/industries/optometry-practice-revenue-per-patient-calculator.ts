import {
  formatCurrency,
  formatNumber,
  optometryDataLinks,
  relatedCalculators,
} from "@/lib/industries/optometry-calculators-shared";

export const meta = {
  title: "Optometry Revenue Per Patient Calculator & Patient Value Tool",
  shortTitle: "Revenue Per Patient Calculator",
  subtitle: "Calculate annual revenue per patient from visits, optical attach, and contact lens supply.",
  description:
    "Free optometry revenue per patient calculator. Estimate annual patient value from exam visits, eyewear purchases, and contact lens revenue.",
};

export const introContent = {
  lead: "Revenue per patient is the core unit economics metric for optometry practices. This calculator breaks down annual patient value from exams, optical, and contact lenses.",
  bullets: [
    "Revenue/Patient = Exam Revenue + Optical Revenue + Contact Lens Revenue",
    "Median active patient generates $380–$520 annually",
    "Optical attach rate is the primary profitability driver",
  ],
  audience: "Built for practice owners tracking patient economics and marketing ROI.",
};

export type RevenuePerPatientInputs = {
  activePatients: number;
  annualVisits: number;
  examFee: number;
  opticalCapturePct: number;
  averageOpticalTicket: number;
  contactLensPatientsPct: number;
  annualContactLensRevenue: number;
};

export const defaultInputs: RevenuePerPatientInputs = {
  activePatients: 3200,
  annualVisits: 6500,
  examFee: 95,
  opticalCapturePct: 62,
  averageOpticalTicket: 480,
  contactLensPatientsPct: 28,
  annualContactLensRevenue: 320,
};

export const industryBenchmarks = [
  { metric: "Revenue Per Patient", range: "$380 – $520" },
  { metric: "Optical Capture Rate", range: "55 – 72%" },
  { metric: "Average Optical Ticket", range: "$350 – $650" },
  { metric: "Annual Visits", range: "4,500 – 8,500" },
] as const;

export function calculateRevenuePerPatient(inputs: RevenuePerPatientInputs) {
  const visitsPerPatient = inputs.activePatients > 0 ? inputs.annualVisits / inputs.activePatients : 0;
  const examRevenuePerPatient = visitsPerPatient * inputs.examFee;
  const opticalRevenuePerPatient = (inputs.opticalCapturePct / 100) * inputs.averageOpticalTicket;
  const contactRevenuePerPatient = (inputs.contactLensPatientsPct / 100) * inputs.annualContactLensRevenue;
  const totalPerPatient = examRevenuePerPatient + opticalRevenuePerPatient + contactRevenuePerPatient;
  const totalRevenue = totalPerPatient * inputs.activePatients;

  return {
    visitsPerPatient,
    examRevenuePerPatient,
    opticalRevenuePerPatient,
    contactRevenuePerPatient,
    totalPerPatient,
    totalRevenue,
  };
}

export const faqs = [
  {
    question: "What is the average revenue per patient for optometry?",
    answer:
      "Average revenue per patient ranges $380–$520 annually, with a median near $420. This includes exam fees, eyewear purchases, contact lens supply, and medical services across the patient relationship.",
  },
  {
    question: "How do I increase revenue per patient?",
    answer:
      "Four levers: improve optical capture rate above 60%, train staff on premium lens upgrades, grow contact lens replenishment programs, and add medical eye care billing (dry eye, glaucoma management).",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/optometry-practice-revenue-per-patient/");
export { optometryDataLinks, formatCurrency, formatNumber };
