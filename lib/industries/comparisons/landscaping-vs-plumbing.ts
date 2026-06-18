import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { flipHomeServicesComparison } from "./flip-home-services-comparison";
import {
  chooseLeft as plumbingChooseLeft,
  chooseRight as plumbingChooseRight,
  homeServicesDualComparisonData as plumbingVsLandscapingData,
} from "./plumbing-vs-landscaping";
import { landscapingCalculators } from "./landscaping-comparison-shared";

export const comparisonMeta = {
  slug: "landscaping-vs-plumbing",
  title: "Landscaping vs Plumbing",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, labor economics, seasonality, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Landscaping",
  right: "Plumbing",
  breadcrumbHub: { label: "Landscaping", href: "/industries/landscaping/" },
  exploreHub: { label: "Explore Landscaping Hub →", href: "/industries/landscaping/" },
} as const;

export const faqs = [
  {
    question: "Which makes more money — landscaping or plumbing?",
    answer:
      "Plumbing owners typically earn significantly more, with median compensation around $125K versus $95K for landscaping operators. Plumbing median revenue (~$1.6M) is roughly 1.5× landscaping median (~$1.1M). The skilled trade premium and higher ticket sizes drive the gap.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Plumbing margins are materially higher — median ~11% net versus ~8% for landscaping. Landscaping is labor-heavy (40–55% payroll) with intense price competition on weekly maintenance routes. Plumbing benefits from higher tickets and emergency call pricing power.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Landscaping is the lower-capital trade at $75K–$250K startup versus $150K–$400K for plumbing. Basic mowers, trucks, and crew hiring can launch a landscaping route business quickly. Plumbing requires licensing, specialized tools, and higher vehicle inventory.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Landscaping weekly contracts represent 35–55% of revenue. Plumbing maintenance agreements represent 10–25%. Landscaping has higher contract frequency; plumbing has higher dollar value per service call.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Plumbing businesses sell at 2.2×–3.5× SDE (median ~2.8×) while landscaping companies trade at 1.8×–2.8× SDE (median ~2.2×). Buyers pay premiums for plumbing's skilled trade barrier, higher margins, and recession-resistant demand.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "Landscaping offers lower barriers — less licensing, lower capital, and faster break-even. Plumbing offers higher long-term earnings but requires technical training, licensing, and more capital. Landscaping suits route-building entrepreneurs; plumbing suits skilled tradespeople seeking premium compensation.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let landscaping = 0;
  let plumbing = 0;

  if (inputs.clinicalInterest === "specialty") plumbing += 2;
  else landscaping += 2;

  if (inputs.revenueGoal === "very-high") plumbing += 3;
  else if (inputs.revenueGoal === "high") plumbing += 2;
  else landscaping += 2;

  if (inputs.insuranceComfort === "high") {
    plumbing += 2;
    landscaping += 2;
  } else if (inputs.insuranceComfort === "medium") {
    plumbing += 1;
    landscaping += 2;
  } else landscaping += 2;

  if (inputs.growthAmbition === "multi-location") plumbing += 3;
  else if (inputs.growthAmbition === "regional") plumbing += 2;
  else landscaping += 2;

  return landscaping >= plumbing ? "Landscaping" : "Plumbing";
}

export const decisionToolCopy = {
  left:
    "Landscaping aligns with your goals — low startup capital, outdoor route-based work, fast break-even, and recurring weekly contracts.",
  right:
    "Plumbing is the better fit — higher revenue, stronger margins, skilled-trade pricing power, and premium valuation multiples.",
} as const;

export const homeServicesDualComparisonData = flipHomeServicesComparison(plumbingVsLandscapingData, {
  comparisonMeta,
  comparisonLabels,
  scalingLeftTitle: "Landscaping Growth Path",
  scalingRightTitle: "Plumbing Growth Path",
  chooseLeftTitle: "Choose Landscaping If",
  chooseRightTitle: "Choose Plumbing If",
  chooseLeft: [...plumbingChooseRight],
  chooseRight: [...plumbingChooseLeft],
  calculators: landscapingCalculators,
  relatedComparisons: [
    { label: "Landscaping vs HVAC", href: "/comparisons/landscaping-vs-hvac/" },
    { label: "Landscaping vs Roofing", href: "/comparisons/landscaping-vs-roofing/" },
    { label: "Landscaping vs Pest Control", href: "/comparisons/landscaping-vs-pest-control/" },
    { label: "Landscaping Industry Hub", href: "/industries/landscaping/" },
  ],
  faqs,
});
