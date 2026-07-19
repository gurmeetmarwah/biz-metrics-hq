import {
  formatCurrency,
  formatNumber,
  nailSalonDataLinks,
  relatedCalculators,
} from "@/lib/industries/nail-salon-calculators-shared";

export const meta = {
  title: "Nail Salon Revenue Calculator & Annual Sales Estimator",
  shortTitle: "Nail Salon Revenue Calculator",
  subtitle: "Project annual nail salon revenue from technicians, average ticket, and appointment volume.",
  description:
    "Free nail salon revenue calculator. Estimate annual salon revenue from number of technicians, appointments per day, average ticket, and retail attachment.",
};

export const introContent = {
  lead: "Nail salon revenue is driven by technician count, booking density, and average ticket. This calculator projects annual service and retail revenue for your salon.",
  bullets: [
    "Revenue = Technicians × Appointments/Day × Days/Week × 50 Weeks × Average Ticket",
    "Retail product sales typically add 3–7% on top of service revenue",
    "Median independent nail salon revenue is ~$300K ($200K–$450K range)",
  ],
  audience: "Built for nail salon owners and buyers sizing revenue potential from staffing and pricing.",
};

export type RevenueInputs = {
  technicians: number;
  appointmentsPerTechnicianPerDay: number;
  daysOpenPerWeek: number;
  averageTicket: number;
  retailAttachmentPct: number;
};

export const defaultInputs: RevenueInputs = {
  technicians: 4,
  appointmentsPerTechnicianPerDay: 8,
  daysOpenPerWeek: 6,
  averageTicket: 45,
  retailAttachmentPct: 5,
};

export const industryBenchmarks = [
  { metric: "Annual Revenue", range: "$200K – $450K" },
  { metric: "Average Ticket", range: "$30 – $60" },
  { metric: "Revenue per Technician", range: "$50K – $90K" },
  { metric: "Retail Attachment", range: "3 – 7%" },
] as const;

const WEEKS_PER_YEAR = 50;

export function calculateRevenue(inputs: RevenueInputs) {
  const annualAppointments =
    inputs.technicians *
    inputs.appointmentsPerTechnicianPerDay *
    inputs.daysOpenPerWeek *
    WEEKS_PER_YEAR;
  const serviceRevenue = annualAppointments * inputs.averageTicket;
  const retailRevenue = serviceRevenue * (inputs.retailAttachmentPct / 100);
  const totalRevenue = serviceRevenue + retailRevenue;
  const revenuePerTechnician = inputs.technicians > 0 ? totalRevenue / inputs.technicians : 0;
  const monthlyRevenue = totalRevenue / 12;

  return {
    annualAppointments,
    serviceRevenue,
    retailRevenue,
    totalRevenue,
    revenuePerTechnician,
    monthlyRevenue,
  };
}

export const faqs = [
  {
    question: "How much revenue does a nail salon generate?",
    answer:
      "A typical independent nail salon generates $200K–$450K in annual revenue, with a median around $300K. Revenue scales with the number of technicians, appointments per day, average ticket, and retail product sales.",
  },
  {
    question: "How do I estimate my nail salon's annual revenue?",
    answer:
      "Multiply your number of technicians by appointments per day, days open per week, and about 50 working weeks, then multiply by your average ticket. Add 3–7% for retail product sales to estimate total nail salon revenue.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/nail-salon-revenue/");
export { nailSalonDataLinks, formatCurrency, formatNumber };
