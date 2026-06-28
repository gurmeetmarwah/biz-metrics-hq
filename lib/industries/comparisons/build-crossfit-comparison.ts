import type { HealthcareDualComparisonData } from "./healthcare-comparison-types";
import type { FitnessFormatProfile } from "./build-gym-comparison";
import { crossFitProfile } from "./fitness-format-profiles";
import { crossfitCalculators, crossfitHubLabels } from "./crossfit-comparison-shared";

type BuildCrossfitComparisonOptions = {
  slug: string;
  title: string;
  subtitle: string;
  right: FitnessFormatProfile;
  decisionSnapshot: readonly { factor: string; winner: string }[];
  winnerScorecard: readonly { label: string; left: number; right: number; winner: string }[];
  revenueDrivers: readonly { driver: string; left: string; right: string }[];
  memberEconomicsMetrics: readonly { metric: string; left: string; right: string }[];
  staffMetrics: readonly { metric: string; left: string; right: string }[];
  costStructureComparison: readonly { expense: string; left: string; right: string }[];
  recurringComparison: readonly { metric: string; left: string; right: string }[];
  ownerIncomeComparison: readonly { model: string; earnings: string; type: "left" | "right" }[];
  breakEvenComparison: readonly { metric: string; left: string; right: string }[];
  scalingRightTitle: string;
  chooseLeft: readonly string[];
  chooseRight: readonly string[];
  chooseRightTitle: string;
  relatedComparisons: readonly { label: string; href: string }[];
  faqs: readonly { question: string; answer: string }[];
};

export function buildCrossfitComparison(options: BuildCrossfitComparisonOptions): HealthcareDualComparisonData {
  const left = crossFitProfile;
  const { right } = options;

  return {
    comparisonMeta: {
      slug: options.slug,
      title: options.title,
      subtitle: options.subtitle,
      dataVintage: "2025–2026",
    },
    comparisonLabels: {
      ...crossfitHubLabels,
      right: right.label,
    },
    decisionSnapshot: options.decisionSnapshot,
    kpiComparison: [
      { metric: "Annual Revenue", left: left.kpis.annualRevenue, right: right.kpis.annualRevenue },
      { metric: "Net Profit Margin", left: left.kpis.netMargin, right: right.kpis.netMargin },
      { metric: "Owner Compensation", left: left.kpis.ownerComp, right: right.kpis.ownerComp },
      { metric: "Revenue Per Member", left: left.kpis.revenuePerMember, right: right.kpis.revenuePerMember },
      { metric: "Startup Cost", left: left.kpis.startup, right: right.kpis.startup },
      { metric: "Business Value", left: left.kpis.valuation, right: right.kpis.valuation },
      { metric: "Recurring Revenue", left: left.kpis.recurringPct, right: right.kpis.recurringPct },
    ],
    winnerScorecard: options.winnerScorecard,
    leftRevenueSources: left.revenueSources,
    rightRevenueSources: right.revenueSources,
    revenueFunnel: { left: [...left.revenueFunnel], right: [...right.revenueFunnel] },
    revenueDrivers: options.revenueDrivers,
    patientFunnel: { left: [...left.memberFunnel], right: [...right.memberFunnel] },
    patientEconomicsMetrics: options.memberEconomicsMetrics,
    operatoryFunnel: { left: [...left.staffFunnel], right: [...right.staffFunnel] },
    operatoryMetrics: options.staffMetrics,
    marginTiers: { left: left.marginTiers, right: right.marginTiers },
    costStructureComparison: options.costStructureComparison,
    insuranceHighlights: {
      left: left.recurringHighlight,
      right: right.recurringHighlight,
    },
    insuranceComparison: options.recurringComparison,
    ownerIncomeComparison: options.ownerIncomeComparison,
    leftStartupItems: left.startupItems,
    rightStartupItems: right.startupItems,
    startupSideBySide: [
      { category: "Equipment & Buildout", left: left.startupSideBySide.equipment, right: right.startupSideBySide.equipment },
      { category: "Lease & Deposits", left: left.startupSideBySide.lease, right: right.startupSideBySide.lease },
      { category: "Marketing Launch", left: left.startupSideBySide.marketing, right: right.startupSideBySide.marketing },
      { category: "Total Launch Budget", left: left.startupSideBySide.total, right: right.startupSideBySide.total },
    ],
    valuationComparison: [
      { metric: "SDE Multiple", left: left.valuation.sde, right: right.valuation.sde },
      { metric: "Revenue Multiple", left: left.valuation.revenue, right: right.valuation.revenue },
      { metric: "EBITDA Multiple", left: left.valuation.ebitda, right: right.valuation.ebitda },
    ],
    valuationExamples: {
      left: left.valuation.example,
      right: right.valuation.example,
    },
    valuationExampleTitle: "$750K+ Revenue Business → Estimated Value",
    breakEvenComparison: options.breakEvenComparison,
    scalingLadder: {
      left: [...left.scalingLadder],
      right: [...right.scalingLadder],
    },
    scalingLeftTitle: "CrossFit Growth Path",
    scalingRightTitle: options.scalingRightTitle,
    capitalEfficiency: {
      investment: "$150,000",
      left: left.capitalEfficiency,
      right: right.capitalEfficiency,
    },
    chooseLeft: options.chooseLeft,
    chooseRight: options.chooseRight,
    chooseLeftTitle: "Choose CrossFit If",
    chooseRightTitle: options.chooseRightTitle,
    calculators: crossfitCalculators,
    relatedComparisons: options.relatedComparisons,
    faqs: options.faqs,
  };
}
