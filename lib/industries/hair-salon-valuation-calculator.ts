import {
  formatCurrency,
  formatNumber,
  hairSalonDataLinks,
  relatedCalculators,
} from "@/lib/industries/hair-salon-calculators-shared";

export const meta = {
  title: "Hair Salon Valuation Calculator — What Is a Salon Worth?",
  shortTitle: "Hair Salon Valuation Calculator",
  subtitle: "Estimate what your hair salon is worth using SDE and industry sale multiples.",
  description:
    "Free hair salon valuation calculator. Estimate what a salon is worth from SDE and industry multiples, with a low-to-high value range and revenue cross-check.",
};

export const introContent = {
  lead: "Most hair salons sell on a multiple of SDE (seller's discretionary earnings). This calculator estimates what your salon is worth and shows a realistic value range.",
  bullets: [
    "Salon Value = SDE × Industry Multiple (1.8×–3.0×)",
    "Roughly 0.4×–0.7× of annual revenue as a cross-check",
    "Client retention and transferable staff push value toward the top",
  ],
  audience: "Built for salon owners and buyers estimating a fair hair salon sale price.",
};

export type ValuationInputs = {
  annualRevenue: number;
  sde: number;
  multiple: number;
};

export const defaultInputs: ValuationInputs = {
  annualRevenue: 320000,
  sde: 65000,
  multiple: 2.3,
};

export const industryBenchmarks = [
  { metric: "SDE Multiple", range: "1.8 – 3.0×" },
  { metric: "Revenue Multiple", range: "0.4 – 0.7×" },
  { metric: "Typical Salon Value", range: "$180K – $420K" },
  { metric: "SDE Margin", range: "12 – 20%" },
] as const;

export function calculateValuation(inputs: ValuationInputs) {
  const estimatedValue = inputs.sde * inputs.multiple;
  const lowValue = inputs.sde * 1.8;
  const highValue = inputs.sde * 3.0;
  const revenueCrossCheckLow = inputs.annualRevenue * 0.4;
  const revenueCrossCheckHigh = inputs.annualRevenue * 0.7;
  const impliedRevenueMultiple =
    inputs.annualRevenue > 0 ? estimatedValue / inputs.annualRevenue : 0;
  const sdeMargin = inputs.annualRevenue > 0 ? (inputs.sde / inputs.annualRevenue) * 100 : 0;

  return {
    estimatedValue,
    lowValue,
    highValue,
    revenueCrossCheckLow,
    revenueCrossCheckHigh,
    impliedRevenueMultiple,
    sdeMargin,
  };
}

export const faqs = [
  {
    question: "How much is a hair salon worth?",
    answer:
      "Most hair salons sell for 1.8–3.0× SDE (seller's discretionary earnings), or roughly 0.4–0.7× annual revenue. A typical hair salon is worth $180K–$420K, with value driven by profitability, client retention, and transferable staff.",
  },
  {
    question: "What increases a hair salon's valuation?",
    answer:
      "A hair salon's valuation rises with strong net margins, high client retention and rebooking, a transferable stylist team on employment agreements, recurring membership revenue, and clean financials. These push the SDE multiple toward the top of the 1.8–3.0× range.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/hair-salon-valuation/");
export { hairSalonDataLinks, formatCurrency, formatNumber };
