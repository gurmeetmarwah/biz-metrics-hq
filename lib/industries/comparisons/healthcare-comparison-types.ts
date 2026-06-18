export type SideRow = { label: string; left: string; right: string };

export type HealthcareDualComparisonData = {
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
  patientFunnel: { left: readonly string[]; right: readonly string[] };
  patientEconomicsMetrics: readonly { metric: string; left: string; right: string }[];
  operatoryFunnel: { left: readonly string[]; right: readonly string[] };
  operatoryMetrics: readonly { metric: string; left: string; right: string }[];
  marginTiers: {
    left: { weak: string; average: string; strong: string };
    right: { weak: string; average: string; strong: string };
  };
  costStructureComparison: readonly { expense: string; left: string; right: string }[];
  insuranceHighlights: {
    left: { title: string; value: string };
    right: { title: string; value: string };
  };
  insuranceComparison: readonly { metric: string; left: string; right: string }[];
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

export type HealthcareDecisionInputs = {
  clinicalInterest: "general" | "specialty";
  revenueGoal: "moderate" | "high" | "very-high";
  insuranceComfort: "low" | "medium" | "high";
  growthAmbition: "lifestyle" | "regional" | "multi-location";
};

export type HealthcareDecisionConfig = {
  leftLabel: string;
  rightLabel: string;
  leftCopy: string;
  rightCopy: string;
  getRecommendation: (inputs: HealthcareDecisionInputs) => string;
};
