import type { BeautyDecisionInputs, BeautyDualComparisonData } from "./beauty-comparison-types";
import { scoreBeautyChoice } from "./beauty-comparison-types";
import {
  hairSalonLeftBreakEven,
  hairSalonLeftClientEconomics,
  hairSalonLeftClientFunnel,
  hairSalonLeftCostStructure,
  hairSalonLeftKpis,
  hairSalonLeftMarginTiers,
  hairSalonLeftOwnerIncome,
  hairSalonLeftRecurringComparison,
  hairSalonLeftRecurringHighlight,
  hairSalonLeftRevenueFunnel,
  hairSalonLeftRevenueSources,
  hairSalonLeftScalingLadder,
  hairSalonLeftServiceFunnel,
  hairSalonLeftServiceMetrics,
  hairSalonLeftStartupItems,
  hairSalonLeftStartupSideBySide,
  hairSalonLeftValuation,
} from "./hair-salon-comparison-shared";
import {
  medicalSpaCalculators,
  medicalSpaHubLabels,
  medicalSpaLeftBreakEven,
  medicalSpaLeftClientEconomics,
  medicalSpaLeftClientFunnel,
  medicalSpaLeftCostStructure,
  medicalSpaLeftKpis,
  medicalSpaLeftMarginTiers,
  medicalSpaLeftOwnerIncome,
  medicalSpaLeftRecurringComparison,
  medicalSpaLeftRecurringHighlight,
  medicalSpaLeftRevenueFunnel,
  medicalSpaLeftRevenueSources,
  medicalSpaLeftScalingLadder,
  medicalSpaLeftServiceFunnel,
  medicalSpaLeftServiceMetrics,
  medicalSpaLeftStartupItems,
  medicalSpaLeftStartupSideBySide,
  medicalSpaLeftValuation,
  medicalSpaRelatedComparisons,
} from "./medical-spa-comparison-shared";

export const comparisonMeta = {
  slug: "medical-spa-vs-hair-salon",
  title: "Medical Spa vs Hair Salon",
  subtitle:
    "Compare revenue, average ticket, profit margins, startup costs, owner pay, and valuation between a high-ticket medical spa (med spa) and a full-service hair salon.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...medicalSpaHubLabels,
  right: "Hair Salon",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Average Ticket", winner: "Medical Spa" },
  { factor: "Lower Startup Cost", winner: "Hair Salon" },
  { factor: "Higher Net Margin", winner: "Medical Spa" },
  { factor: "Higher Revenue Ceiling", winner: "Medical Spa" },
  { factor: "Simpler Regulation", winner: "Hair Salon" },
  { factor: "Faster Break-Even", winner: "Hair Salon" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: medicalSpaLeftKpis.annualRevenue, right: hairSalonLeftKpis.annualRevenue },
  { metric: "Net Margin", left: medicalSpaLeftKpis.netMargin, right: hairSalonLeftKpis.netMargin },
  { metric: "Owner Compensation", left: medicalSpaLeftKpis.ownerComp, right: hairSalonLeftKpis.ownerComp },
  { metric: "Monthly Visits", left: medicalSpaLeftKpis.monthlyVisits, right: hairSalonLeftKpis.monthlyVisits },
  { metric: "Average Ticket", left: medicalSpaLeftKpis.revenuePerClient, right: hairSalonLeftKpis.revenuePerClient },
  { metric: "Startup Cost", left: medicalSpaLeftKpis.startup, right: hairSalonLeftKpis.startup },
  { metric: "Valuation", left: medicalSpaLeftKpis.valuation, right: hairSalonLeftKpis.valuation },
] as const;

export const winnerScorecard = [
  { label: "Ticket Size", left: 10, right: 4, winner: "Medical Spa" },
  { label: "Capital Barrier", left: 3, right: 8, winner: "Hair Salon" },
  { label: "Margin Quality", left: 9, right: 5, winner: "Medical Spa" },
  { label: "Regulatory Simplicity", left: 4, right: 9, winner: "Hair Salon" },
] as const;

export const leftRevenueSources = medicalSpaLeftRevenueSources;

export const rightRevenueSources = hairSalonLeftRevenueSources;

export const revenueFunnel = {
  left: [...medicalSpaLeftRevenueFunnel],
  right: [...hairSalonLeftRevenueFunnel],
} as const;

export const clientFunnel = {
  left: [...medicalSpaLeftClientFunnel],
  right: [...hairSalonLeftClientFunnel],
} as const;

export const serviceFunnel = {
  left: [...medicalSpaLeftServiceFunnel],
  right: [...hairSalonLeftServiceFunnel],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$250 – $600 treatment", right: "$45 – $85 service" },
  { driver: "Visit Frequency", left: "Every 3 – 4 months (injectables)", right: "Every 6 – 10 weeks" },
  { driver: "Retail / Membership", left: "25 – 45% membership + medical retail", right: "8 – 12% retail" },
  { driver: "Provider Requirement", left: "Medical director + RN/NP/PA", right: "Cosmetologist license" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: medicalSpaLeftClientEconomics[0].value, right: hairSalonLeftClientEconomics[0].value },
  { metric: "Annual Visits Per Client", left: medicalSpaLeftClientEconomics[1].value, right: hairSalonLeftClientEconomics[1].value },
  { metric: "Estimated Lifetime Value", left: medicalSpaLeftClientEconomics[2].value, right: hairSalonLeftClientEconomics[2].value },
  { metric: "Client Retention", left: medicalSpaLeftClientEconomics[3].value, right: hairSalonLeftClientEconomics[3].value },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Room/Chair", left: medicalSpaLeftServiceMetrics[0].value, right: hairSalonLeftServiceMetrics[0].value },
  { metric: "Revenue Per Provider", left: medicalSpaLeftServiceMetrics[1].value, right: hairSalonLeftServiceMetrics[1].value },
  { metric: "Room Utilization", left: medicalSpaLeftServiceMetrics[2].value, right: hairSalonLeftServiceMetrics[2].value },
] as const;

export const marginTiers = {
  left: medicalSpaLeftMarginTiers,
  right: hairSalonLeftMarginTiers,
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Clinical Labor", left: medicalSpaLeftCostStructure[0].value, right: hairSalonLeftCostStructure[0].value },
  { expense: "Product / Consumables COGS", left: medicalSpaLeftCostStructure[1].value, right: hairSalonLeftCostStructure[1].value },
  { expense: "Rent", left: medicalSpaLeftCostStructure[2].value, right: hairSalonLeftCostStructure[2].value },
  { expense: "Other Overhead", left: medicalSpaLeftCostStructure[3].value, right: hairSalonLeftCostStructure[3].value },
] as const;

export const recurringHighlights = {
  left: medicalSpaLeftRecurringHighlight,
  right: hairSalonLeftRecurringHighlight,
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: medicalSpaLeftRecurringComparison[0].value, right: hairSalonLeftRecurringComparison[0].value },
  { metric: "Retail Attachment", left: medicalSpaLeftRecurringComparison[1].value, right: hairSalonLeftRecurringComparison[1].value },
  { metric: "Membership Adoption", left: medicalSpaLeftRecurringComparison[2].value, right: hairSalonLeftRecurringComparison[2].value },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Med Spa", earnings: medicalSpaLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Established Multi-Provider Med Spa", earnings: medicalSpaLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Owner-Operator Hair Salon", earnings: hairSalonLeftOwnerIncome[0].earnings, type: "right" },
  { model: "Established Hair Salon", earnings: hairSalonLeftOwnerIncome[1].earnings, type: "right" },
] as const;

export const leftStartupItems = medicalSpaLeftStartupItems;

export const rightStartupItems = hairSalonLeftStartupItems;

export const startupSideBySide = [
  { category: "Buildout", left: medicalSpaLeftStartupSideBySide.buildout, right: hairSalonLeftStartupSideBySide.buildout },
  { category: "Equipment / Devices", left: medicalSpaLeftStartupSideBySide.equipment, right: hairSalonLeftStartupSideBySide.equipment },
  { category: "Inventory / Consumables", left: medicalSpaLeftStartupSideBySide.inventory, right: hairSalonLeftStartupSideBySide.inventory },
  { category: "Total Launch Budget", left: medicalSpaLeftStartupSideBySide.total, right: hairSalonLeftStartupSideBySide.total },
] as const;

export const valuationComparison = [
  { metric: "SDE / EBITDA Multiple", left: medicalSpaLeftValuation.sde, right: hairSalonLeftValuation.sde },
  { metric: "Revenue Multiple", left: medicalSpaLeftValuation.revenue, right: hairSalonLeftValuation.revenue },
  { metric: "Typical Value", left: "$700K – $3.0M", right: "$180K – $420K" },
] as const;

export const valuationExamples = {
  left: medicalSpaLeftValuation.example,
  right: hairSalonLeftValuation.example,
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: medicalSpaLeftBreakEven[0].value, right: hairSalonLeftBreakEven[0].value },
  { metric: "Treatments Per Day", left: medicalSpaLeftBreakEven[1].value, right: hairSalonLeftBreakEven[1].value },
  { metric: "Months to Break-Even", left: medicalSpaLeftBreakEven[2].value, right: hairSalonLeftBreakEven[2].value },
] as const;

export const scalingLadder = {
  left: [...medicalSpaLeftScalingLadder],
  right: [...hairSalonLeftScalingLadder],
} as const;

export const scalingLeftTitle = "Medical Spa Growth Path";
export const scalingRightTitle = "Hair Salon Growth Path";

export const capitalEfficiency = {
  investment: "$400,000",
  left: {
    revenue: "$800K – $1.4M",
    profit: "$150K – $350K net profit",
    payback: "2 – 4 years",
  },
  right: {
    revenue: "$400K – $500K",
    profit: "$35K – $65K net profit",
    payback: "6 – 8 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Medical Spa If";
export const chooseRightTitle = "Choose a Hair Salon If";

export const chooseLeft = [
  "You want much higher tickets and net margins",
  "You can partner with a medical director and hire RN/NP/PA injectors",
  "You are targeting a high revenue ceiling and premium valuation",
  "You can fund a larger device-heavy buildout",
  "You want strong membership and medical retail revenue",
] as const;

export const chooseRight = [
  "You want lower startup cost and simpler regulation",
  "You prefer no medical director or clinical licensing requirements",
  "You value hands-on styling work and faster break-even",
  "You want high-frequency repeat visits",
  "You are comfortable with a lower revenue ceiling per location",
] as const;

export const calculators = medicalSpaCalculators;

export const relatedComparisons = medicalSpaRelatedComparisons;

export const faqs = [
  {
    question: "Is a medical spa or hair salon more profitable?",
    answer:
      "A medical spa is typically more profitable in absolute terms — net margins run 15–30% versus 8–15% for a hair salon, on much higher tickets ($250–$600). The trade-off is a far larger startup investment, medical oversight, and a longer ramp than a hair salon.",
  },
  {
    question: "Which is cheaper to open, a med spa or a hair salon?",
    answer:
      "A hair salon is dramatically cheaper to open ($80K–$250K) than a medical spa ($300K–$800K), which requires medical-grade devices, treatment rooms, and a medical director. The lower barrier makes a hair salon far faster to break even.",
  },
  {
    question: "Does a medical spa need a medical director?",
    answer:
      "Yes. In most U.S. states a medical spa must operate under a licensed medical director, with treatments delivered by RNs, NPs, or PAs. A hair salon only requires cosmetology licensing, which is why its regulatory burden is much lower.",
  },
  {
    question: "Which is worth more when you sell it?",
    answer:
      "Medical spas command higher multiples (3.0×–5.5× SDE) than hair salons (1.8×–3.0× SDE) because of recurring memberships, high tickets, and strong margins. A $1.2M med spa can sell for $720K–$1.4M, well above a comparable hair salon.",
  },
  {
    question: "Can a hair salon add med spa services?",
    answer:
      "Some salons add a med spa arm to capture high-ticket injectable and laser revenue, but it requires a medical director, clinical staff, device investment, and compliance infrastructure — effectively running a second, regulated business alongside the salon.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Medical Spa", "Hair Salon", {
    ownerHandsOn: 1,
    ownerManager: 3,
    budgetLow: 1,
    budgetMedium: 1,
    budgetHigh: 1,
    revenueModerate: 1,
    revenueHigh: 1,
    revenueVeryHigh: 1,
    growthLifestyle: 1,
    growthExpand: 1,
    growthMulti: 1,
  });
}

export const decisionToolCopy = {
  left:
    "A medical spa aligns with your goals if you want much higher tickets and margins, can partner with a medical director, and are targeting a premium valuation.",
  right:
    "A hair salon is the better fit — lower startup cost, no medical oversight, faster break-even, and hands-on styling work with a broad client base.",
} as const;

export const beautyDualComparisonData: BeautyDualComparisonData = {
  comparisonMeta,
  comparisonLabels,
  decisionSnapshot,
  kpiComparison,
  winnerScorecard,
  leftRevenueSources,
  rightRevenueSources,
  revenueFunnel,
  revenueDrivers,
  clientFunnel,
  clientEconomicsMetrics,
  serviceFunnel,
  serviceMetrics,
  marginTiers,
  costStructureComparison,
  recurringHighlights,
  recurringComparison,
  ownerIncomeComparison,
  leftStartupItems,
  rightStartupItems,
  startupSideBySide,
  valuationComparison,
  valuationExamples,
  valuationExampleTitle,
  breakEvenComparison,
  scalingLadder,
  scalingLeftTitle,
  scalingRightTitle,
  capitalEfficiency,
  chooseLeft,
  chooseRight,
  chooseLeftTitle,
  chooseRightTitle,
  calculators,
  relatedComparisons,
  faqs,
};
