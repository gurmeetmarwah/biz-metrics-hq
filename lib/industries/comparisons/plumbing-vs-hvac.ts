import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { flipHomeServicesComparison } from "./flip-home-services-comparison";
import {
  chooseLeft as hvacChooseLeft,
  chooseRight as hvacChooseRight,
  homeServicesDualComparisonData as hvacVsPlumbingData,
} from "./hvac-vs-plumbing";

const plumbingCalculators = [
  { label: "Plumbing Revenue Per Technician Calculator", href: "/calculators/plumbing-revenue-per-technician/" },
  { label: "Plumbing Profit Margin Calculator", href: "/calculators/plumbing-profit-margin/" },
  { label: "Plumbing Valuation Calculator", href: "/calculators/plumbing-valuation/" },
  { label: "Plumbing Break-Even Calculator", href: "/calculators/plumbing-break-even/" },
] as const;

export const comparisonMeta = {
  slug: "plumbing-vs-hvac",
  title: "Plumbing vs HVAC",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, technician productivity, recurring revenue, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Plumbing",
  right: "HVAC",
  breadcrumbHub: { label: "Plumbing", href: "/industries/plumbing/" },
  exploreHub: { label: "Explore Plumbing Hub →", href: "/industries/plumbing/" },
} as const;

export const faqs = [
  {
    question: "Which business generates more revenue — plumbing or HVAC?",
    answer:
      "HVAC companies typically generate higher annual revenue, with a median around $2.4M versus $1.6M for plumbing contractors. HVAC benefits from larger install tickets and stronger maintenance plan penetration. Plumbing revenue is solid with premium emergency call pricing.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "HVAC and plumbing margins are comparable, with HVAC slightly ahead at a median ~12% net margin versus ~11% for plumbing. HVAC companies with 35%+ maintenance contract revenue often reach 13–16%. Plumbing benefits from lower equipment overhead.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Plumbing startups typically require $150K–$400K all-in versus $200K–$500K for HVAC. HVAC demands more specialized equipment and larger inventory for install jobs. Plumbing can launch leaner with a single truck and basic tool inventory.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "HVAC has a structural advantage. Maintenance agreements commonly represent 25–45% of HVAC revenue. Plumbing maintenance plans exist but are less prevalent, with more revenue from reactive repairs and emergency calls.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "HVAC businesses typically sell at 2.4×–3.8× SDE (median ~3.1×) while plumbing companies trade at 2.2×–3.5× SDE (median ~2.8×). HVAC commands premium multiples due to maintenance contract value and consolidator acquisition interest.",
  },
  {
    question: "What does $250K produce in each trade?",
    answer:
      "A $250K plumbing investment often supports $1.2M–$2.0M revenue with faster 2.5–4 year payback. The same capital in HVAC typically supports $1.8M–$2.8M revenue and $216K–$420K net profit with 3–5 year payback but higher ceiling.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let plumbing = 0;
  let hvac = 0;

  if (inputs.clinicalInterest === "specialty") {
    plumbing += 2;
    hvac += 2;
  } else {
    plumbing += 2;
    hvac += 1;
  }

  if (inputs.revenueGoal === "very-high") hvac += 3;
  else if (inputs.revenueGoal === "high") {
    hvac += 2;
    plumbing += 1;
  } else plumbing += 2;

  if (inputs.insuranceComfort === "high") hvac += 3;
  else if (inputs.insuranceComfort === "medium") {
    hvac += 1;
    plumbing += 1;
  } else plumbing += 1;

  if (inputs.growthAmbition === "multi-location") hvac += 3;
  else if (inputs.growthAmbition === "regional") hvac += 2;
  else plumbing += 2;

  return plumbing >= hvac ? "Plumbing" : "HVAC";
}

export const decisionToolCopy = {
  left:
    "Plumbing aligns with your priorities — lower startup costs, faster break-even, steady emergency demand, less seasonality, and capital-efficient crew-based growth.",
  right:
    "HVAC is the better fit for your goals — higher revenue potential, maintenance contract recurring revenue, stronger valuation multiples, and multi-location scaling in home services.",
} as const;

export const homeServicesDualComparisonData = flipHomeServicesComparison(hvacVsPlumbingData, {
  comparisonMeta,
  comparisonLabels,
  scalingLeftTitle: "Plumbing Growth Path",
  scalingRightTitle: "HVAC Growth Path",
  chooseLeftTitle: "Choose Plumbing If",
  chooseRightTitle: "Choose HVAC If",
  chooseLeft: [...hvacChooseRight],
  chooseRight: [...hvacChooseLeft],
  calculators: plumbingCalculators,
  relatedComparisons: [
    { label: "Plumbing vs Electrical", href: "/comparisons/plumbing-vs-electrical/" },
    { label: "Plumbing vs Roofing", href: "/comparisons/plumbing-vs-roofing/" },
    { label: "Plumbing vs Landscaping", href: "/comparisons/plumbing-vs-landscaping/" },
    { label: "Plumbing Industry Hub", href: "/industries/plumbing/" },
  ],
  faqs,
});
