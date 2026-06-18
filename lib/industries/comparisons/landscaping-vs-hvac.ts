import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { flipHomeServicesComparison } from "./flip-home-services-comparison";
import {
  chooseLeft as hvacChooseLeft,
  chooseRight as hvacChooseRight,
  homeServicesDualComparisonData as hvacVsLandscapingData,
} from "./hvac-vs-landscaping";
import { landscapingCalculators } from "./landscaping-comparison-shared";

export const comparisonMeta = {
  slug: "landscaping-vs-hvac",
  title: "Landscaping vs HVAC",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, labor economics, seasonality, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Landscaping",
  right: "HVAC",
  breadcrumbHub: { label: "Landscaping", href: "/industries/landscaping/" },
  exploreHub: { label: "Explore Landscaping Hub →", href: "/industries/landscaping/" },
} as const;

export const faqs = [
  {
    question: "Which makes more money — landscaping or HVAC?",
    answer:
      "HVAC owners typically earn significantly more, with median compensation around $145K versus $95K for landscaping operators. HVAC median revenue (~$2.4M) is roughly 2× landscaping median (~$1.1M). The skilled trade premium and higher ticket sizes drive the gap.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "HVAC margins are materially higher — median ~12% net versus ~8% for landscaping. Landscaping is labor-heavy (40–55% payroll) with intense price competition on weekly maintenance routes. HVAC benefits from higher tickets and maintenance plan pricing power.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Landscaping is the lower-capital trade at $75K–$250K startup versus $200K–$500K for HVAC. Basic mowers, trucks, and crew hiring can launch a landscaping route business quickly. HVAC requires licensing, specialized tools, and higher vehicle inventory.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Both rely on recurring models. Landscaping weekly contracts represent 35–55% of revenue. HVAC maintenance agreements represent 25–45%. Landscaping has higher visit frequency; HVAC has higher dollar value per contract.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "HVAC businesses sell at 2.4×–3.8× SDE (median ~3.1×) while landscaping companies trade at 1.8×–2.8× SDE (median ~2.2×). Buyers pay premiums for HVAC's skilled trade barrier, higher margins, and consolidator acquisition activity.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "Landscaping offers lower barriers — less licensing, lower capital, and faster break-even. HVAC offers higher long-term earnings but requires technical training, licensing, and more capital. Landscaping suits route-building entrepreneurs; HVAC suits skilled tradespeople seeking premium compensation.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let landscaping = 0;
  let hvac = 0;

  if (inputs.clinicalInterest === "specialty") hvac += 2;
  else landscaping += 2;

  if (inputs.revenueGoal === "very-high") hvac += 3;
  else if (inputs.revenueGoal === "high") hvac += 2;
  else landscaping += 2;

  if (inputs.insuranceComfort === "high") {
    hvac += 2;
    landscaping += 2;
  } else if (inputs.insuranceComfort === "medium") {
    hvac += 1;
    landscaping += 2;
  } else landscaping += 2;

  if (inputs.growthAmbition === "multi-location") hvac += 3;
  else if (inputs.growthAmbition === "regional") hvac += 2;
  else landscaping += 2;

  return landscaping >= hvac ? "Landscaping" : "HVAC";
}

export const decisionToolCopy = {
  left:
    "Landscaping aligns with your goals — low startup capital, outdoor route-based work, fast break-even, and strong recurring maintenance contracts.",
  right:
    "HVAC is the better fit — higher revenue, stronger margins, skilled-trade pricing power, and premium valuation multiples.",
} as const;

export const homeServicesDualComparisonData = flipHomeServicesComparison(hvacVsLandscapingData, {
  comparisonMeta,
  comparisonLabels,
  scalingLeftTitle: "Landscaping Growth Path",
  scalingRightTitle: "HVAC Growth Path",
  chooseLeftTitle: "Choose Landscaping If",
  chooseRightTitle: "Choose HVAC If",
  chooseLeft: [...hvacChooseRight],
  chooseRight: [...hvacChooseLeft],
  calculators: landscapingCalculators,
  relatedComparisons: [
    { label: "Landscaping vs Plumbing", href: "/comparisons/landscaping-vs-plumbing/" },
    { label: "Landscaping vs Roofing", href: "/comparisons/landscaping-vs-roofing/" },
    { label: "Landscaping vs Pest Control", href: "/comparisons/landscaping-vs-pest-control/" },
    { label: "Landscaping Industry Hub", href: "/industries/landscaping/" },
  ],
  faqs,
});
