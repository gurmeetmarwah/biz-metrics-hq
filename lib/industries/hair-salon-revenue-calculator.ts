import {
  formatCurrency,
  formatNumber,
  hairSalonDataLinks,
  relatedCalculators,
} from "@/lib/industries/hair-salon-calculators-shared";

export const meta = {
  title: "Hair Salon Revenue Calculator & Annual Sales Estimator",
  shortTitle: "Hair Salon Revenue Calculator",
  subtitle: "Project annual hair salon revenue from stylists, average ticket, and appointment volume.",
  description:
    "Free hair salon revenue calculator. Estimate annual salon revenue from number of stylists, appointments per day, average ticket, and retail attachment.",
};

export const introContent = {
  lead: "Hair salon revenue is driven by stylist count, booking density, and average ticket. This calculator projects annual service and retail revenue for your salon.",
  bullets: [
    "Revenue = Stylists × Appointments/Day × Days/Week × 50 Weeks × Average Ticket",
    "Retail product sales typically add 8–12% on top of service revenue",
    "Median independent hair salon revenue is ~$320K ($250K–$500K range)",
  ],
  audience: "Built for salon owners and buyers sizing revenue potential from staffing and pricing.",
};

export type RevenueInputs = {
  stylists: number;
  appointmentsPerStylistPerDay: number;
  daysOpenPerWeek: number;
  averageTicket: number;
  retailAttachmentPct: number;
};

export const defaultInputs: RevenueInputs = {
  stylists: 5,
  appointmentsPerStylistPerDay: 6,
  daysOpenPerWeek: 6,
  averageTicket: 65,
  retailAttachmentPct: 10,
};

export const industryBenchmarks = [
  { metric: "Annual Revenue", range: "$250K – $500K" },
  { metric: "Average Ticket", range: "$45 – $85" },
  { metric: "Revenue per Stylist", range: "$60K – $120K" },
  { metric: "Retail Attachment", range: "8 – 12%" },
] as const;

const WEEKS_PER_YEAR = 50;

export function calculateRevenue(inputs: RevenueInputs) {
  const annualAppointments =
    inputs.stylists *
    inputs.appointmentsPerStylistPerDay *
    inputs.daysOpenPerWeek *
    WEEKS_PER_YEAR;
  const serviceRevenue = annualAppointments * inputs.averageTicket;
  const retailRevenue = serviceRevenue * (inputs.retailAttachmentPct / 100);
  const totalRevenue = serviceRevenue + retailRevenue;
  const revenuePerStylist = inputs.stylists > 0 ? totalRevenue / inputs.stylists : 0;
  const monthlyRevenue = totalRevenue / 12;

  return {
    annualAppointments,
    serviceRevenue,
    retailRevenue,
    totalRevenue,
    revenuePerStylist,
    monthlyRevenue,
  };
}

export const faqs = [
  {
    question: "How much revenue does a hair salon generate?",
    answer:
      "A typical independent hair salon generates $250K–$500K in annual revenue, with a median around $320K. Revenue scales with the number of stylists, appointments per day, average ticket, and retail product sales.",
  },
  {
    question: "How do I estimate my salon's annual revenue?",
    answer:
      "Multiply your number of stylists by appointments per day, days open per week, and about 50 working weeks, then multiply by your average ticket. Add 8–12% for retail product sales to estimate total hair salon revenue.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/hair-salon-revenue/");
export { hairSalonDataLinks, formatCurrency, formatNumber };
