import {
  formatCurrency,
  formatNumber,
  nailSalonDataLinks,
  relatedCalculators,
} from "@/lib/industries/nail-salon-calculators-shared";

export const meta = {
  title: "Nail Salon Valuation Calculator — What Is a Nail Salon Worth?",
  shortTitle: "Nail Salon Valuation Calculator",
  subtitle: "Estimate what your nail salon is worth using SDE and industry sale multiples.",
  description:
    "Free nail salon valuation calculator. Estimate what a nail salon is worth from SDE and industry multiples, with a low-to-high value range and revenue cross-check.",
};

export const introContent = {
  lead: "Most nail salons sell on a multiple of SDE (seller's discretionary earnings). This calculator estimates what your salon is worth and shows a realistic value range.",
  bullets: [
    "Salon Value = SDE × Industry Multiple (1.6×–2.6×)",
    "Roughly 0.35×–0.6× of annual revenue as a cross-check",
    "Client retention and transferable technicians push value toward the top",
  ],
  audience: "Built for nail salon owners and buyers estimating a fair nail salon sale price.",
};

export type ValuationInputs = {
  annualRevenue: number;
  sde: number;
  multiple: number;
};

export const defaultInputs: ValuationInputs = {
  annualRevenue: 300000,
  sde: 55000,
  multiple: 2.1,
};

export const industryBenchmarks = [
  { metric: "SDE Multiple", range: "1.6 – 2.6×" },
  { metric: "Revenue Multiple", range: "0.35 – 0.6×" },
  { metric: "Typical Salon Value", range: "$120K – $320K" },
  { metric: "SDE Margin", range: "12 – 20%" },
] as const;

export function calculateValuation(inputs: ValuationInputs) {
  const estimatedValue = inputs.sde * inputs.multiple;
  const lowValue = inputs.sde * 1.6;
  const highValue = inputs.sde * 2.6;
  const revenueCrossCheckLow = inputs.annualRevenue * 0.35;
  const revenueCrossCheckHigh = inputs.annualRevenue * 0.6;
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
    question: "How much is a nail salon worth?",
    answer:
      "Most nail salons sell for 1.6–2.6× SDE (seller's discretionary earnings), or roughly 0.35–0.6× annual revenue. A typical nail salon is worth $120K–$320K, with value driven by profitability, client retention, and transferable technicians.",
  },
  {
    question: "What increases a nail salon's valuation?",
    answer:
      "A nail salon's valuation rises with strong net margins, high client retention and rebooking, a transferable technician team on employment agreements, membership or loyalty programs, and clean financials. These push the SDE multiple toward the top of the 1.6–2.6× range.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/nail-salon-valuation/");
export { nailSalonDataLinks, formatCurrency, formatNumber };
