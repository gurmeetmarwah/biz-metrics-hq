import {
  formatCurrency,
  formatMultiple,
  formatNumber,
  formatPercent,
  daySpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/day-spa-calculators-shared";

export const meta = {
  title: "Day Spa Valuation Calculator — What Is a Day Spa Worth?",
  shortTitle: "Day Spa Valuation Calculator",
  subtitle: "Estimate what your day spa is worth using SDE and industry sale multiples.",
  description:
    "Free day spa valuation calculator. Estimate spa value from SDE and industry multiples (2.0×–3.5×), with a low-to-high value range and revenue cross-check.",
};

export const introContent = {
  lead: "Most day spas sell on a multiple of SDE (seller's discretionary earnings). This calculator estimates what your spa is worth and shows a realistic value range.",
  bullets: [
    "Spa Value = SDE × Industry Multiple (2.0×–3.5×)",
    "Roughly 0.4×–0.8× of annual revenue as a cross-check",
    "Membership revenue and therapist retention push value toward the top",
  ],
  audience: "Built for day spa owners and buyers estimating a fair spa sale price.",
};

export type ValuationInputs = {
  annualRevenue: number;
  sde: number;
  multiple: number;
};

export const defaultInputs: ValuationInputs = {
  annualRevenue: 750000,
  sde: 105000,
  multiple: 2.8,
};

export const industryBenchmarks = [
  { metric: "SDE Multiple", range: "2.0 – 3.5×" },
  { metric: "Revenue Multiple", range: "0.4 – 0.8×" },
  { metric: "Typical Spa Value", range: "$400K – $1.5M" },
  { metric: "SDE Margin", range: "12 – 18%" },
] as const;

export function calculateValuation(inputs: ValuationInputs) {
  const estimatedValue = inputs.sde * inputs.multiple;
  const lowValue = inputs.sde * 2.0;
  const highValue = inputs.sde * 3.5;
  const revenueCrossCheckLow = inputs.annualRevenue * 0.4;
  const revenueCrossCheckHigh = inputs.annualRevenue * 0.8;
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
    question: "How much is a day spa worth?",
    answer:
      "Most day spas sell for 2.0–3.5× SDE (seller's discretionary earnings), or roughly 0.4–0.8× annual revenue. A typical day spa is worth $400K–$1.5M, with value driven by membership revenue, therapist retention, and clean financials.",
  },
  {
    question: "What increases a day spa's valuation?",
    answer:
      "A day spa's valuation rises with strong EBITDA margins, recurring membership revenue, high client retention, a transferable therapist team, and clean financials. These push the SDE multiple toward the top of the 2.0–3.5× range.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/day-spa-valuation/");
export { daySpaDataLinks, formatCurrency, formatMultiple, formatNumber, formatPercent };
