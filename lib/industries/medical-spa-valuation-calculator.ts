import {
  formatCurrency,
  formatMultiple,
  formatNumber,
  formatPercent,
  medicalSpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/medical-spa-calculators-shared";

export const meta = {
  title: "Medical Spa Valuation Calculator — What Is a Med Spa Worth?",
  shortTitle: "Medical Spa Valuation Calculator",
  subtitle: "Estimate what your medical spa is worth using SDE and industry sale multiples.",
  description:
    "Free medical spa valuation calculator. Estimate practice value from SDE and industry multiples (3.0×–5.5×), with a low-to-high value range and revenue cross-check.",
};

export const introContent = {
  lead: "Most medical spas sell on a multiple of SDE (seller's discretionary earnings). This calculator estimates what your practice is worth and shows a realistic value range.",
  bullets: [
    "Practice Value = SDE × Industry Multiple (3.0×–5.5×)",
    "Roughly 0.8×–1.5× of annual revenue as a cross-check",
    "Membership revenue and provider retention push value toward the top",
  ],
  audience: "Built for medical spa owners and buyers estimating a fair practice sale price.",
};

export type ValuationInputs = {
  annualRevenue: number;
  sde: number;
  multiple: number;
};

export const defaultInputs: ValuationInputs = {
  annualRevenue: 1200000,
  sde: 264000,
  multiple: 4.0,
};

export const industryBenchmarks = [
  { metric: "SDE Multiple", range: "3.0 – 5.5×" },
  { metric: "Revenue Multiple", range: "0.8 – 1.5×" },
  { metric: "Typical Practice Value", range: "$800K – $4M" },
  { metric: "SDE Margin", range: "18 – 25%" },
] as const;

export function calculateValuation(inputs: ValuationInputs) {
  const estimatedValue = inputs.sde * inputs.multiple;
  const lowValue = inputs.sde * 3.0;
  const highValue = inputs.sde * 5.5;
  const revenueCrossCheckLow = inputs.annualRevenue * 0.8;
  const revenueCrossCheckHigh = inputs.annualRevenue * 1.5;
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
    question: "How much is a medical spa worth?",
    answer:
      "Most medical spas sell for 3.0–5.5× SDE (seller's discretionary earnings), or roughly 0.8–1.5× annual revenue. A typical medical spa is worth $800K–$4M, with value driven by membership revenue, provider retention, and clean clinical financials.",
  },
  {
    question: "What increases a medical spa's valuation?",
    answer:
      "A medical spa's valuation rises with strong EBITDA margins, recurring membership revenue, high patient retention, a transferable provider team, and clean financials. These push the SDE multiple toward the top of the 3.0–5.5× range.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/medical-spa-valuation/");
export { medicalSpaDataLinks, formatCurrency, formatMultiple, formatNumber, formatPercent };
