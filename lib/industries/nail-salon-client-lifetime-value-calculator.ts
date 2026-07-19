import {
  formatCurrency,
  formatNumber,
  formatPercent,
  nailSalonDataLinks,
  relatedCalculators,
} from "@/lib/industries/nail-salon-calculators-shared";

export const meta = {
  title: "Nail Salon Client Lifetime Value Calculator — CLV Tool",
  shortTitle: "Client Lifetime Value Calculator",
  subtitle: "Estimate total revenue per client over their relationship with your nail salon.",
  description:
    "Free nail salon client lifetime value calculator. Estimate CLV from average ticket, visit frequency, and client lifespan with gross profit view.",
};

export const introContent = {
  lead: "Client lifetime value (CLV) shows how much each client is worth over time. Nail salons with strong 2–4 week rebooking cadence build high CLV from repeat visits.",
  bullets: [
    "CLV = Average Ticket × Visits per Year × Client Lifespan (Years)",
    "Nail salon clients visit every 2–4 weeks (12–20 visits/year)",
    "Typical nail salon CLV ranges $1,600–$4,200 per client",
  ],
  audience: "Built for nail salon owners sizing marketing spend and loyalty program ROI.",
};

export type ClvInputs = {
  averageTicket: number;
  visitsPerYear: number;
  clientLifespanYears: number;
  grossMarginPct: number;
};

export const defaultInputs: ClvInputs = {
  averageTicket: 45,
  visitsPerYear: 15,
  clientLifespanYears: 3,
  grossMarginPct: 62,
};

export const industryBenchmarks = [
  { metric: "Average Ticket", range: "$30 – $60" },
  { metric: "Visits per Year", range: "12 – 20" },
  { metric: "Client Lifespan", range: "2 – 5 years" },
  { metric: "Typical CLV", range: "$1,600 – $4,200" },
] as const;

export function calculateClv(inputs: ClvInputs) {
  const annualValuePerClient = inputs.averageTicket * inputs.visitsPerYear;
  const lifetimeRevenue = annualValuePerClient * inputs.clientLifespanYears;
  const lifetimeGrossProfit = lifetimeRevenue * (inputs.grossMarginPct / 100);
  const monthlyValuePerClient = annualValuePerClient / 12;

  let status: "low" | "healthy" | "strong" = "healthy";
  if (lifetimeRevenue < 1600) status = "low";
  else if (lifetimeRevenue >= 3500) status = "strong";

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
    question: "What is a good client lifetime value for a nail salon?",
    answer:
      "A healthy nail salon client lifetime value is $1,600–$4,200, depending on average ticket, visit frequency, and retention. Clients who rebook every 2–3 weeks and stay 3+ years drive the highest CLV.",
  },
  {
    question: "How do nail salons increase client lifetime value?",
    answer:
      "Increase nail salon CLV with automated rebooking reminders, membership or loyalty programs, gel and nail art upsells, and consistent service quality. Each extra visit per year compounds lifetime revenue significantly.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/nail-salon-client-lifetime-value/");
export { nailSalonDataLinks, formatCurrency, formatNumber, formatPercent };
