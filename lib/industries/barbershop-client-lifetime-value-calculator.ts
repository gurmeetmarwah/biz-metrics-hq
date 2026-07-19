import {
  formatCurrency,
  formatNumber,
  formatPercent,
  barbershopDataLinks,
  relatedCalculators,
} from "@/lib/industries/barbershop-calculators-shared";

export const meta = {
  title: "Barbershop Client Lifetime Value Calculator — LTV Tool",
  shortTitle: "Client Lifetime Value Calculator",
  subtitle: "Estimate total revenue per client over their relationship with your barbershop.",
  description:
    "Free barbershop client lifetime value calculator. Estimate LTV from average ticket, visit frequency, and client lifespan with optional gross margin view.",
};

export const introContent = {
  lead: "Client lifetime value (LTV) shows how much each client is worth over time. Regular clients on a 2–4 week grooming cadence build high LTV from repeat visits.",
  bullets: [
    "LTV = Average Ticket × Visits per Year × Client Lifespan (Years)",
    "Regular clients visit 10–14 times per year on a grooming cadence",
    "Typical barbershop client LTV ranges $1,500–$4,000",
  ],
  audience: "Built for barbershop owners sizing marketing spend and membership program ROI.",
};

export type ClientLtvInputs = {
  averageTicket: number;
  visitsPerYear: number;
  clientLifespanYears: number;
  grossMarginPct: number;
};

export const defaultInputs: ClientLtvInputs = {
  averageTicket: 35,
  visitsPerYear: 12,
  clientLifespanYears: 4,
  grossMarginPct: 68,
};

export const industryBenchmarks = [
  { metric: "Average Ticket", range: "$25 – $45" },
  { metric: "Visits per Year", range: "10 – 14" },
  { metric: "Client Lifespan", range: "3 – 5 years" },
  { metric: "Typical LTV", range: "$1.5K – $4K" },
] as const;

export function calculateClientLtv(inputs: ClientLtvInputs) {
  const annualValuePerClient = inputs.averageTicket * inputs.visitsPerYear;
  const lifetimeRevenue = annualValuePerClient * inputs.clientLifespanYears;
  const lifetimeGrossProfit = lifetimeRevenue * (inputs.grossMarginPct / 100);
  const monthlyValuePerClient = annualValuePerClient / 12;

  let status: "low" | "healthy" | "strong" = "healthy";
  if (lifetimeRevenue < 1500) status = "low";
  else if (lifetimeRevenue >= 4000) status = "strong";

  return {
    annualValuePerClient,
    lifetimeRevenue,
    lifetimeGrossProfit,
    monthlyValuePerClient,
    status,
  };
}

export const faqs = [
  {
    question: "What is a good client lifetime value for a barbershop?",
    answer:
      "A healthy barbershop client lifetime value is $1,500–$4,000, depending on visit frequency and add-on services. Clients returning every 2–4 weeks on a grooming cadence drive the highest LTV.",
  },
  {
    question: "How do barbershops increase client lifetime value?",
    answer:
      "Increase barbershop LTV with membership plans, prepaid cut packages, automated rebooking reminders, and grooming product retail. Each extra visit per year compounds lifetime revenue significantly.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/barbershop-client-lifetime-value/");
export { barbershopDataLinks, formatCurrency, formatNumber, formatPercent };
