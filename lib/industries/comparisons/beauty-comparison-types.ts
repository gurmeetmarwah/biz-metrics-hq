export type SideRow = { label: string; left: string; right: string };

export type BeautyDualComparisonData = {
  comparisonMeta: {
    slug: string;
    title: string;
    subtitle: string;
    dataVintage: string;
  };
  comparisonLabels: {
    left: string;
    right: string;
    breadcrumbHub: { label: string; href: string };
    exploreHub: { label: string; href: string };
  };
  decisionSnapshot: readonly { factor: string; winner: string }[];
  kpiComparison: readonly { metric: string; left: string; right: string }[];
  winnerScorecard: readonly { label: string; left: number; right: number; winner: string }[];
  leftRevenueSources: readonly string[];
  rightRevenueSources: readonly string[];
  revenueFunnel: { left: readonly string[]; right: readonly string[] };
  revenueDrivers: readonly { driver: string; left: string; right: string }[];
  clientFunnel: { left: readonly string[]; right: readonly string[] };
  clientEconomicsMetrics: readonly { metric: string; left: string; right: string }[];
  serviceFunnel: { left: readonly string[]; right: readonly string[] };
  serviceMetrics: readonly { metric: string; left: string; right: string }[];
  marginTiers: {
    left: { weak: string; average: string; strong: string };
    right: { weak: string; average: string; strong: string };
  };
  costStructureComparison: readonly { expense: string; left: string; right: string }[];
  recurringHighlights: {
    left: { title: string; value: string };
    right: { title: string; value: string };
  };
  recurringComparison: readonly { metric: string; left: string; right: string }[];
  ownerIncomeComparison: readonly {
    model: string;
    earnings: string;
    type: "left" | "right";
  }[];
  leftStartupItems: readonly { item: string; percent: number }[];
  rightStartupItems: readonly { item: string; percent: number }[];
  startupSideBySide: readonly { category: string; left: string; right: string }[];
  valuationComparison: readonly { metric: string; left: string; right: string }[];
  valuationExamples: {
    left: { revenue: string; value: string; note: string };
    right: { revenue: string; value: string; note: string };
  };
  valuationExampleTitle?: string;
  breakEvenComparison: readonly { metric: string; left: string; right: string }[];
  scalingLadder: { left: readonly string[]; right: readonly string[] };
  scalingLeftTitle: string;
  scalingRightTitle: string;
  capitalEfficiency: {
    investment: string;
    left: { revenue: string; profit: string; payback: string };
    right: { revenue: string; profit: string; payback: string };
  };
  chooseLeft: readonly string[];
  chooseRight: readonly string[];
  chooseLeftTitle: string;
  chooseRightTitle: string;
  calculators: readonly { label: string; href: string }[];
  relatedComparisons: readonly { label: string; href?: string; comingSoon?: boolean }[];
  faqs: readonly { question: string; answer: string }[];
};

export type BeautyDecisionInputs = {
  ownerRole: "hands-on" | "manager";
  startupBudget: "low" | "medium" | "high";
  revenueGoal: "moderate" | "high" | "very-high";
  growthAmbition: "lifestyle" | "expand" | "multi-location";
};

export type BeautyDecisionConfig = {
  leftLabel: string;
  rightLabel: string;
  leftCopy: string;
  rightCopy: string;
  getRecommendation: (inputs: BeautyDecisionInputs) => string;
};

export function scoreBeautyChoice(
  inputs: BeautyDecisionInputs,
  leftLabel: string,
  rightLabel: string,
  leftWeight: {
    ownerHandsOn?: number;
    ownerManager?: number;
    budgetLow?: number;
    budgetMedium?: number;
    budgetHigh?: number;
    revenueModerate?: number;
    revenueHigh?: number;
    revenueVeryHigh?: number;
    growthLifestyle?: number;
    growthExpand?: number;
    growthMulti?: number;
  },
): string {
  let left = 0;
  let right = 0;

  if (inputs.ownerRole === "hands-on") left += leftWeight.ownerHandsOn ?? 2;
  else right += leftWeight.ownerManager ?? 2;

  if (inputs.startupBudget === "low") left += leftWeight.budgetLow ?? 2;
  else if (inputs.startupBudget === "medium") {
    left += leftWeight.budgetMedium ?? 1;
    right += leftWeight.budgetMedium ?? 1;
  } else right += leftWeight.budgetHigh ?? 2;

  if (inputs.revenueGoal === "moderate") left += leftWeight.revenueModerate ?? 2;
  else if (inputs.revenueGoal === "high") {
    left += leftWeight.revenueHigh ?? 1;
    right += (leftWeight.revenueHigh ?? 1) + 1;
  } else right += leftWeight.revenueVeryHigh ?? 3;

  if (inputs.growthAmbition === "lifestyle") left += leftWeight.growthLifestyle ?? 2;
  else if (inputs.growthAmbition === "expand") {
    left += leftWeight.growthExpand ?? 1;
    right += (leftWeight.growthExpand ?? 1) + 1;
  } else right += leftWeight.growthMulti ?? 3;

  return left >= right ? leftLabel : rightLabel;
}
