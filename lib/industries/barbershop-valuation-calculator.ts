import {
  formatCurrency,
  formatMultiple,
  formatNumber,
  formatPercent,
  barbershopDataLinks,
  relatedCalculators,
} from "@/lib/industries/barbershop-calculators-shared";

export const meta = {
  title: "Barbershop Valuation Calculator — What Is a Barbershop Worth?",
  shortTitle: "Barbershop Valuation Calculator",
  subtitle: "Estimate what your barbershop is worth using SDE and industry sale multiples.",
  description:
    "Free barbershop valuation calculator. Estimate shop value from SDE and industry multiples (1.5×–2.5×), with a low-to-high value range and revenue cross-check.",
};

export const introContent = {
  lead: "Most barbershops sell on a multiple of SDE (seller's discretionary earnings). This calculator estimates what your shop is worth and shows a realistic value range.",
  bullets: [
    "Shop Value = SDE × Industry Multiple (1.5×–2.5×)",
    "Roughly 0.3×–0.6× of annual revenue as a cross-check",
    "Membership revenue and barber retention push value toward the top",
  ],
  audience: "Built for barbershop owners and buyers estimating a fair shop sale price.",
};

export type ValuationInputs = {
  annualRevenue: number;
  sde: number;
  multiple: number;
};

export const defaultInputs: ValuationInputs = {
  annualRevenue: 280000,
  sde: 45000,
  multiple: 2.0,
};

export const industryBenchmarks = [
  { metric: "SDE Multiple", range: "1.5 – 2.5×" },
  { metric: "Revenue Multiple", range: "0.3 – 0.6×" },
  { metric: "Typical Shop Value", range: "$120K – $350K" },
  { metric: "SDE Margin", range: "14 – 20%" },
] as const;

export function calculateValuation(inputs: ValuationInputs) {
  const estimatedValue = inputs.sde * inputs.multiple;
  const lowValue = inputs.sde * 1.5;
  const highValue = inputs.sde * 2.5;
  const revenueCrossCheckLow = inputs.annualRevenue * 0.3;
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
    question: "How much is a barbershop worth?",
    answer:
      "Most barbershops sell for 1.5–2.5× SDE (seller's discretionary earnings), or roughly 0.3–0.6× annual revenue. A typical barbershop is worth $120K–$350K, with value driven by membership revenue, barber retention, and clean financials.",
  },
  {
    question: "What increases a barbershop's valuation?",
    answer:
      "A barbershop's valuation rises with strong margins, recurring membership revenue, high client retention, a transferable barber team, and clean financials. These push the SDE multiple toward the top of the 1.5–2.5× range.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/barbershop-valuation/");
export { barbershopDataLinks, formatCurrency, formatMultiple, formatNumber, formatPercent };
