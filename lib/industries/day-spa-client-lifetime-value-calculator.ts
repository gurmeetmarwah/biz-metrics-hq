import {
  formatCurrency,
  formatNumber,
  formatPercent,
  daySpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/day-spa-calculators-shared";

export const meta = {
  title: "Day Spa Client Lifetime Value Calculator — LTV Tool",
  shortTitle: "Client Lifetime Value Calculator",
  subtitle: "Estimate total revenue per client over their relationship with your day spa.",
  description:
    "Free day spa client lifetime value calculator. Estimate LTV from average treatment, visit frequency, and client lifespan with optional gross margin view.",
};

export const introContent = {
  lead: "Client lifetime value (LTV) shows how much each client is worth over time. Membership clients on a monthly visit cadence build high LTV from repeat appointments.",
  bullets: [
    "LTV = Average Treatment × Visits per Year × Client Lifespan (Years)",
    "Membership clients visit 6–10 times per year on recurring plans",
    "Typical day spa client LTV ranges $2,500–$7,500",
  ],
  audience: "Built for day spa owners sizing marketing spend and membership program ROI.",
};

export type ClientLtvInputs = {
  averageTreatment: number;
  visitsPerYear: number;
  clientLifespanYears: number;
  grossMarginPct: number;
};

export const defaultInputs: ClientLtvInputs = {
  averageTreatment: 175,
  visitsPerYear: 8,
  clientLifespanYears: 4,
  grossMarginPct: 58,
};

export const industryBenchmarks = [
  { metric: "Average Treatment", range: "$120 – $250" },
  { metric: "Visits per Year", range: "6 – 10" },
  { metric: "Client Lifespan", range: "3 – 6 years" },
  { metric: "Typical LTV", range: "$2.5K – $7.5K" },
] as const;

export function calculateClientLtv(inputs: ClientLtvInputs) {
  const annualValuePerClient = inputs.averageTreatment * inputs.visitsPerYear;
  const lifetimeRevenue = annualValuePerClient * inputs.clientLifespanYears;
  const lifetimeGrossProfit = lifetimeRevenue * (inputs.grossMarginPct / 100);
  const monthlyValuePerClient = annualValuePerClient / 12;

  let status: "low" | "healthy" | "strong" = "healthy";
  if (lifetimeRevenue < 2500) status = "low";
  else if (lifetimeRevenue >= 7500) status = "strong";

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
    question: "What is a good client lifetime value for a day spa?",
    answer:
      "A healthy day spa client lifetime value is $2,500–$7,500, depending on membership status and visit frequency. Monthly membership clients with regular massage and facial cadence drive the highest LTV.",
  },
  {
    question: "How do day spas increase client lifetime value?",
    answer:
      "Increase day spa LTV with membership programs, prepaid treatment packages, automated rebooking reminders, and skincare retail. Each extra visit per year compounds lifetime revenue significantly.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/day-spa-client-lifetime-value/");
export { daySpaDataLinks, formatCurrency, formatNumber, formatPercent };
