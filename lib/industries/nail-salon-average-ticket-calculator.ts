import {
  formatCurrency,
  formatPercent,
  nailSalonDataLinks,
  relatedCalculators,
} from "@/lib/industries/nail-salon-calculators-shared";

export const meta = {
  title: "Nail Salon Average Ticket Calculator — Service Mix Pricing",
  shortTitle: "Average Ticket Calculator",
  subtitle: "Model average service price from menu mix and upsell attachment.",
  description:
    "Free nail salon average ticket calculator. Compute weighted average ticket from manicure, gel, pedicure, and nail art service mix.",
};

export const introContent = {
  lead: "Average ticket is the blended price across your service menu. Gel, dip, and nail art upsells lift tickets well above basic manicure price.",
  bullets: [
    "Avg Ticket = Σ (Service Price × Share of Appointments)",
    "Gel and nail art services typically command $45–$75+",
    "Healthy nail salon average ticket: $30–$60",
  ],
  audience: "Built for nail salon owners optimizing menu pricing and upsell strategy.",
};

export type AverageTicketInputs = {
  manicurePrice: number;
  manicureSharePct: number;
  gelPrice: number;
  gelSharePct: number;
  pedicurePrice: number;
  pedicureSharePct: number;
  addonPrice: number;
  addonSharePct: number;
};

export const defaultInputs: AverageTicketInputs = {
  manicurePrice: 28,
  manicureSharePct: 40,
  gelPrice: 45,
  gelSharePct: 35,
  pedicurePrice: 55,
  pedicureSharePct: 15,
  addonPrice: 75,
  addonSharePct: 10,
};

export const industryBenchmarks = [
  { metric: "Average Ticket", range: "$30 – $60" },
  { metric: "Basic Manicure", range: "$20 – $35" },
  { metric: "Gel / Dip Service", range: "$40 – $65" },
  { metric: "Nail Art / Extensions", range: "$60 – $120+" },
] as const;

export function calculateAverageTicket(inputs: AverageTicketInputs) {
  const totalShare =
    inputs.manicureSharePct +
    inputs.gelSharePct +
    inputs.pedicureSharePct +
    inputs.addonSharePct;
  const normalizedShare = totalShare > 0 ? 100 / totalShare : 0;

  const weightedTicket =
    inputs.manicurePrice * (inputs.manicureSharePct / 100) * normalizedShare +
    inputs.gelPrice * (inputs.gelSharePct / 100) * normalizedShare +
    inputs.pedicurePrice * (inputs.pedicureSharePct / 100) * normalizedShare +
    inputs.addonPrice * (inputs.addonSharePct / 100) * normalizedShare;

  let status: "below" | "healthy" | "strong" = "healthy";
  if (weightedTicket < 30) status = "below";
  else if (weightedTicket >= 55) status = "strong";

  return { weightedTicket, totalShare, status };
}

export const faqs = [
  {
    question: "What is a good average ticket for a nail salon?",
    answer:
      "A healthy nail salon average ticket is $30–$60, with a median around $45. Salons that upsell gel, dip, and nail art services consistently push tickets toward the top of the range.",
  },
  {
    question: "How do I raise my nail salon average ticket?",
    answer:
      "Raise average ticket by training technicians on gel and nail art upsells, bundling manicure-pedicure combos, offering add-on treatments, and pricing premium services at market rates. Menu mix is the fastest lever.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/nail-salon-average-ticket/");
export { nailSalonDataLinks, formatCurrency, formatPercent };
