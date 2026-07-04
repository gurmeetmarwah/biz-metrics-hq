import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { flipHomeServicesComparison } from "./flip-home-services-comparison";
import {
  chooseLeft as landscapingChooseLeft,
  chooseRight as landscapingChooseRight,
  homeServicesDualComparisonData as landscapingVsTreeServiceData,
} from "./landscaping-vs-tree-service";
import { treeServiceCalculators, treeServiceHubLabels } from "./tree-service-comparison-shared";

export const comparisonMeta = {
  slug: "tree-service-vs-landscaping",
  title: "Tree Service vs Landscaping",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, crew productivity, equipment requirements, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...treeServiceHubLabels,
  right: "Landscaping",
} as const;

export const faqs = [
  {
    question: "Which is more profitable — tree service or landscaping?",
    answer:
      "Tree service typically achieves higher net margins (14–24% vs 5–12% for landscaping) due to specialized pricing, higher per-job tickets, and less commoditized competition. Landscaping offers more predictable recurring revenue but faces intense price competition on weekly maintenance routes.",
  },
  {
    question: "Which generates more revenue?",
    answer:
      "Tree service median revenue (~$1.25M) is comparable to landscaping (~$1.1M) but with fewer crews. Tree service revenue per crew ($250K–$500K) significantly exceeds landscaping ($200K–$350K). Storm markets can push tree service operators well above $2M.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Landscaping dominates recurring revenue with weekly maintenance contracts representing 35–55% of income. Tree service is overwhelmingly project-based — removals, pruning, and storm work drive 60–80% of revenue with minimal recurring penetration (10–25%).",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Landscaping startups require $75K–$250K versus $150K–$400K for tree service. Tree service needs bucket trucks, chippers, specialized insurance, and often arborist certification. Landscaping can launch with mowers, a truck, and a small crew.",
  },
  {
    question: "Can a landscaping company add tree services?",
    answer:
      "Some full-service landscaping companies offer basic tree pruning and removal, but specialized tree work requires different equipment, insurance, and arborist expertise. Many operators partner with tree service subs rather than bringing it in-house due to liability and capital requirements.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Tree service businesses sell at 2.5×–4.2× SDE (median ~3.7×) while landscaping companies trade at 1.8×–2.8× SDE (median ~2.2×). Buyers pay premiums for tree service's higher margins, specialized barriers, and storm-market revenue potential.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let treeService = 0;
  let landscaping = 0;

  if (inputs.clinicalInterest === "specialty") treeService += 2;
  else landscaping += 2;

  if (inputs.revenueGoal === "very-high") treeService += 2;
  else if (inputs.revenueGoal === "high") {
    landscaping += 1;
    treeService += 2;
  } else landscaping += 2;

  if (inputs.insuranceComfort === "high") landscaping += 2;
  else treeService += 1;

  if (inputs.growthAmbition === "multi-location") treeService += 2;
  else if (inputs.growthAmbition === "regional") {
    landscaping += 2;
    treeService += 2;
  } else landscaping += 2;

  return treeService >= landscaping ? "Tree Service" : "Landscaping";
}

export const decisionToolCopy = {
  left:
    "Tree service is the better fit — higher per-job tickets, premium margins, storm-market upside, and specialized arborist pricing power.",
  right:
    "Landscaping aligns with your goals — recurring maintenance revenue, lower startup costs, route-based operations, and commercial contract scale.",
} as const;

export const homeServicesDualComparisonData = flipHomeServicesComparison(landscapingVsTreeServiceData, {
  comparisonMeta,
  comparisonLabels,
  scalingLeftTitle: "Tree Service Growth Path",
  scalingRightTitle: "Landscaping Growth Path",
  chooseLeftTitle: "Choose Tree Service If",
  chooseRightTitle: "Choose Landscaping If",
  chooseLeft: [...landscapingChooseRight],
  chooseRight: [...landscapingChooseLeft],
  calculators: treeServiceCalculators,
  relatedComparisons: [
    { label: "Landscaping vs Tree Service", href: "/comparisons/landscaping-vs-tree-service/" },
    { label: "Tree Service vs Lawn Care", href: "/comparisons/tree-service-vs-lawn-care/" },
    { label: "Tree Service vs Pool Service", href: "/comparisons/tree-service-vs-pool-service/" },
    { label: "Landscaping vs Pest Control", href: "/comparisons/landscaping-vs-pest-control/" },
    { label: "Tree Service Industry Hub", href: "/industries/tree-service/" },
  ],
  faqs,
});
