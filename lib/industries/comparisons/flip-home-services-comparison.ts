import type { HealthcareDualComparisonData } from "./healthcare-comparison-types";

type FlipOverrides = Pick<
  HealthcareDualComparisonData,
  | "comparisonMeta"
  | "comparisonLabels"
  | "calculators"
  | "relatedComparisons"
  | "faqs"
  | "scalingLeftTitle"
  | "scalingRightTitle"
  | "chooseLeftTitle"
  | "chooseRightTitle"
  | "chooseLeft"
  | "chooseRight"
> & {
  valuationExampleTitle?: string;
};

function swapWinner(winner: string, oldLeft: string, oldRight: string): string {
  if (winner === oldLeft) return oldRight;
  if (winner === oldRight) return oldLeft;
  return winner;
}

export function flipHomeServicesComparison(
  data: HealthcareDualComparisonData,
  overrides: FlipOverrides
): HealthcareDualComparisonData {
  const oldLeft = data.comparisonLabels.left;
  const oldRight = data.comparisonLabels.right;

  return {
    comparisonMeta: overrides.comparisonMeta,
    comparisonLabels: overrides.comparisonLabels,
    decisionSnapshot: data.decisionSnapshot.map((row) => ({
      factor: row.factor,
      winner: swapWinner(row.winner, oldLeft, oldRight),
    })),
    kpiComparison: data.kpiComparison.map((row) => ({
      metric: row.metric,
      left: row.right,
      right: row.left,
    })),
    winnerScorecard: data.winnerScorecard.map((row) => ({
      label: row.label,
      left: row.right,
      right: row.left,
      winner: swapWinner(row.winner, oldLeft, oldRight),
    })),
    leftRevenueSources: data.rightRevenueSources,
    rightRevenueSources: data.leftRevenueSources,
    revenueFunnel: { left: data.revenueFunnel.right, right: data.revenueFunnel.left },
    revenueDrivers: data.revenueDrivers.map((row) => ({
      driver: row.driver,
      left: row.right,
      right: row.left,
    })),
    patientFunnel: { left: data.patientFunnel.right, right: data.patientFunnel.left },
    patientEconomicsMetrics: data.patientEconomicsMetrics.map((row) => ({
      metric: row.metric,
      left: row.right,
      right: row.left,
    })),
    operatoryFunnel: { left: data.operatoryFunnel.right, right: data.operatoryFunnel.left },
    operatoryMetrics: data.operatoryMetrics.map((row) => ({
      metric: row.metric,
      left: row.right,
      right: row.left,
    })),
    marginTiers: { left: data.marginTiers.right, right: data.marginTiers.left },
    costStructureComparison: data.costStructureComparison.map((row) => ({
      expense: row.expense,
      left: row.right,
      right: row.left,
    })),
    insuranceHighlights: {
      left: data.insuranceHighlights.right,
      right: data.insuranceHighlights.left,
    },
    insuranceComparison: data.insuranceComparison.map((row) => ({
      metric: row.metric,
      left: row.right,
      right: row.left,
    })),
    ownerIncomeComparison: data.ownerIncomeComparison.map((row) => ({
      model: row.model,
      earnings: row.earnings,
      type: row.type === "left" ? "right" : "left",
    })),
    leftStartupItems: data.rightStartupItems,
    rightStartupItems: data.leftStartupItems,
    startupSideBySide: data.startupSideBySide.map((row) => ({
      category: row.category,
      left: row.right,
      right: row.left,
    })),
    valuationComparison: data.valuationComparison.map((row) => ({
      metric: row.metric,
      left: row.right,
      right: row.left,
    })),
    valuationExamples: {
      left: data.valuationExamples.right,
      right: data.valuationExamples.left,
    },
    valuationExampleTitle: overrides.valuationExampleTitle ?? data.valuationExampleTitle,
    breakEvenComparison: data.breakEvenComparison.map((row) => ({
      metric: row.metric,
      left: row.right,
      right: row.left,
    })),
    scalingLadder: { left: data.scalingLadder.right, right: data.scalingLadder.left },
    scalingLeftTitle: overrides.scalingLeftTitle,
    scalingRightTitle: overrides.scalingRightTitle,
    capitalEfficiency: {
      investment: data.capitalEfficiency.investment,
      left: data.capitalEfficiency.right,
      right: data.capitalEfficiency.left,
    },
    chooseLeft: overrides.chooseLeft,
    chooseRight: overrides.chooseRight,
    chooseLeftTitle: overrides.chooseLeftTitle,
    chooseRightTitle: overrides.chooseRightTitle,
    calculators: overrides.calculators,
    relatedComparisons: overrides.relatedComparisons,
    faqs: overrides.faqs,
  };
}
