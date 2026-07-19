import {
  formatCurrency,
  formatPercent,
  barbershopDataLinks,
  relatedCalculators,
} from "@/lib/industries/barbershop-calculators-shared";

export const meta = {
  title: "Barbershop Average Ticket Calculator — Service Mix Pricing",
  shortTitle: "Average Ticket Calculator",
  subtitle: "Model average service price from menu mix and grooming upsells.",
  description:
    "Free barbershop average ticket calculator. Compute weighted average ticket from cut, fade, beard, shave, and kids service mix.",
};

export const introContent = {
  lead: "Average ticket is the blended price across your service menu. Beard trims, fades, and hot-towel shaves lift tickets well above basic cut price.",
  bullets: [
    "Avg Ticket = Σ (Service Price × Share of Appointments)",
    "Fades and premium grooming typically command $40–$55+",
    "Healthy barbershop average ticket: $25–$45",
  ],
  audience: "Built for barbershop owners optimizing menu pricing and upsell strategy.",
};

export type AverageTicketInputs = {
  cutPrice: number;
  cutSharePct: number;
  fadePrice: number;
  fadeSharePct: number;
  beardPrice: number;
  beardSharePct: number;
  shavePrice: number;
  shaveSharePct: number;
  kidsPrice: number;
  kidsSharePct: number;
};

export const defaultInputs: AverageTicketInputs = {
  cutPrice: 33,
  cutSharePct: 38,
  fadePrice: 45,
  fadeSharePct: 28,
  beardPrice: 20,
  beardSharePct: 14,
  shavePrice: 55,
  shaveSharePct: 10,
  kidsPrice: 25,
  kidsSharePct: 10,
};

export const industryBenchmarks = [
  { metric: "Average Ticket", range: "$25 – $45" },
  { metric: "Basic Cut", range: "$25 – $35" },
  { metric: "Fade / Premium Cut", range: "$35 – $50" },
  { metric: "Hot Towel Shave", range: "$40 – $60" },
] as const;

export function calculateAverageTicket(inputs: AverageTicketInputs) {
  const totalShare =
    inputs.cutSharePct +
    inputs.fadeSharePct +
    inputs.beardSharePct +
    inputs.shaveSharePct +
    inputs.kidsSharePct;
  const normalizedShare = totalShare > 0 ? 100 / totalShare : 0;

  const weightedTicket =
    inputs.cutPrice * (inputs.cutSharePct / 100) * normalizedShare +
    inputs.fadePrice * (inputs.fadeSharePct / 100) * normalizedShare +
    inputs.beardPrice * (inputs.beardSharePct / 100) * normalizedShare +
    inputs.shavePrice * (inputs.shaveSharePct / 100) * normalizedShare +
    inputs.kidsPrice * (inputs.kidsSharePct / 100) * normalizedShare;

  let status: "below" | "healthy" | "strong" = "healthy";
  if (weightedTicket < 25) status = "below";
  else if (weightedTicket >= 45) status = "strong";

  return { weightedTicket, totalShare, status };
}

export const faqs = [
  {
    question: "What is a good average ticket for a barbershop?",
    answer:
      "A healthy barbershop average ticket is $25–$45, with a median around $35. Shops that upsell beard trims, fades, and hot-towel shaves consistently push tickets toward the top of the range.",
  },
  {
    question: "How do I raise my barbershop average ticket?",
    answer:
      "Raise average ticket by training barbers on beard and shave upsells, bundling cut-and-beard combos, offering premium grooming packages, and pricing fades at market rates. Menu mix is the fastest lever.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/barbershop-average-ticket/");
export { barbershopDataLinks, formatCurrency, formatPercent };
