import type { HealthcareDualComparisonData } from "./healthcare-comparison-types";
import {
  gymCalculators,
  gymCapitalEfficiency,
  gymHubLabels,
  gymKpis,
  gymMarginTiers,
  gymMemberFunnel,
  gymRecurringHighlight,
  gymRevenueFunnel,
  gymRevenueSources,
  gymScalingLadder,
  gymStaffFunnel,
  gymStartupItems,
  gymStartupSideBySide,
  gymValuation,
} from "./gym-comparison-shared";

export type FitnessFormatProfile = {
  label: string;
  kpis: {
    annualRevenue: string;
    netMargin: string;
    ownerComp: string;
    revenuePerMember: string;
    startup: string;
    valuation: string;
    recurringPct: string;
  };
  revenueSources: readonly string[];
  revenueFunnel: readonly string[];
  memberFunnel: readonly string[];
  staffFunnel: readonly string[];
  marginTiers: { weak: string; average: string; strong: string };
  startupItems: readonly { item: string; percent: number }[];
  startupSideBySide: { equipment: string; lease: string; marketing: string; total: string };
  valuation: {
    sde: string;
    revenue: string;
    ebitda: string;
    example: { revenue: string; value: string; note: string };
  };
  scalingLadder: readonly string[];
  capitalEfficiency: { revenue: string; profit: string; payback: string };
  recurringHighlight: { title: string; value: string };
};

type BuildGymComparisonOptions = {
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

export function buildGymComparison(options: BuildGymComparisonOptions): HealthcareDualComparisonData {
  const { right } = options;

  return {
    comparisonMeta: {
      slug: options.slug,
      title: options.title,
      subtitle: options.subtitle,
      dataVintage: "2025–2026",
    },
    comparisonLabels: {
      ...gymHubLabels,
      right: right.label,
    },
    decisionSnapshot: options.decisionSnapshot,
    kpiComparison: [
      { metric: "Annual Revenue", left: gymKpis.annualRevenue, right: right.kpis.annualRevenue },
      { metric: "Net Profit Margin", left: gymKpis.netMargin, right: right.kpis.netMargin },
      { metric: "Owner Compensation", left: gymKpis.ownerComp, right: right.kpis.ownerComp },
      { metric: "Revenue Per Member", left: gymKpis.revenuePerMember, right: right.kpis.revenuePerMember },
      { metric: "Startup Cost", left: gymKpis.startup, right: right.kpis.startup },
      { metric: "Business Value", left: gymKpis.valuation, right: right.kpis.valuation },
      { metric: "Recurring Revenue", left: gymKpis.recurringPct, right: right.kpis.recurringPct },
    ],
    winnerScorecard: options.winnerScorecard,
    leftRevenueSources: gymRevenueSources,
    rightRevenueSources: right.revenueSources,
    revenueFunnel: { left: [...gymRevenueFunnel], right: [...right.revenueFunnel] },
    revenueDrivers: options.revenueDrivers,
    patientFunnel: { left: [...gymMemberFunnel], right: [...right.memberFunnel] },
    patientEconomicsMetrics: options.memberEconomicsMetrics,
    operatoryFunnel: { left: [...gymStaffFunnel], right: [...right.staffFunnel] },
    operatoryMetrics: options.staffMetrics,
    marginTiers: { left: gymMarginTiers, right: right.marginTiers },
    costStructureComparison: options.costStructureComparison,
    insuranceHighlights: {
      left: gymRecurringHighlight,
      right: right.recurringHighlight,
    },
    insuranceComparison: options.recurringComparison,
    ownerIncomeComparison: options.ownerIncomeComparison,
    leftStartupItems: gymStartupItems,
    rightStartupItems: right.startupItems,
    startupSideBySide: [
      { category: "Equipment & Buildout", left: gymStartupSideBySide.equipment, right: right.startupSideBySide.equipment },
      { category: "Lease & Deposits", left: gymStartupSideBySide.lease, right: right.startupSideBySide.lease },
      { category: "Marketing Launch", left: gymStartupSideBySide.marketing, right: right.startupSideBySide.marketing },
      { category: "Total Launch Budget", left: gymStartupSideBySide.total, right: right.startupSideBySide.total },
    ],
    valuationComparison: [
      { metric: "SDE Multiple", left: gymValuation.sde, right: right.valuation.sde },
      { metric: "Revenue Multiple", left: gymValuation.revenue, right: right.valuation.revenue },
      { metric: "EBITDA Multiple", left: gymValuation.ebitda, right: right.valuation.ebitda },
    ],
    valuationExamples: {
      left: gymValuation.example,
      right: right.valuation.example,
    },
    valuationExampleTitle: "$1M+ Revenue Business → Estimated Value",
    breakEvenComparison: options.breakEvenComparison,
    scalingLadder: {
      left: [...gymScalingLadder],
      right: [...right.scalingLadder],
    },
    scalingLeftTitle: "Gym Growth Path",
    scalingRightTitle: options.scalingRightTitle,
    capitalEfficiency: {
      investment: "$350,000",
      left: gymCapitalEfficiency,
      right: right.capitalEfficiency,
    },
    chooseLeft: options.chooseLeft,
    chooseRight: options.chooseRight,
    chooseLeftTitle: "Choose Gym If",
    chooseRightTitle: options.chooseRightTitle,
    calculators: gymCalculators,
    relatedComparisons: options.relatedComparisons,
    faqs: options.faqs,
  };
}
