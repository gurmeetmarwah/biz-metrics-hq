import type { BeautyDecisionInputs, BeautyDualComparisonData } from "./beauty-comparison-types";
import { scoreBeautyChoice } from "./beauty-comparison-types";
import {
  hairSalonLeftBreakEven,
  hairSalonLeftCapitalEfficiency,
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
  nailSalonCalculators,
  nailSalonHubLabels,
  nailSalonLeftBreakEven,
  nailSalonLeftCapitalEfficiency,
  nailSalonLeftClientEconomics,
  nailSalonLeftClientFunnel,
  nailSalonLeftCostStructure,
  nailSalonLeftKpis,
  nailSalonLeftMarginTiers,
  nailSalonLeftOwnerIncome,
  nailSalonLeftRecurringComparison,
  nailSalonLeftRecurringHighlight,
  nailSalonLeftRevenueFunnel,
  nailSalonLeftRevenueSources,
  nailSalonLeftScalingLadder,
  nailSalonLeftServiceFunnel,
  nailSalonLeftServiceMetrics,
  nailSalonLeftStartupItems,
  nailSalonLeftStartupSideBySide,
  nailSalonLeftValuation,
  nailSalonRelatedComparisons,
} from "./nail-salon-comparison-shared";

export const comparisonMeta = {
  slug: "nail-salon-vs-hair-salon",
  title: "Nail Salon vs Hair Salon",
  subtitle:
    "Compare revenue, average ticket, profit margins, startup costs, owner pay, and valuation between a high-volume nail salon and a full-service hair salon.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...nailSalonHubLabels,
  right: "Hair Salon",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Average Ticket", winner: "Hair Salon" },
  { factor: "Higher Visit Volume", winner: "Nail Salon" },
  { factor: "Stronger Retail Revenue", winner: "Hair Salon" },
  { factor: "Lower Startup Cost", winner: "Nail Salon" },
  { factor: "Higher Revenue Ceiling", winner: "Hair Salon" },
  { factor: "Faster Service Turnover", winner: "Nail Salon" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: nailSalonLeftKpis.annualRevenue, right: hairSalonLeftKpis.annualRevenue },
  { metric: "Net Margin", left: nailSalonLeftKpis.netMargin, right: hairSalonLeftKpis.netMargin },
  { metric: "Owner Compensation", left: nailSalonLeftKpis.ownerComp, right: hairSalonLeftKpis.ownerComp },
  { metric: "Monthly Visits", left: nailSalonLeftKpis.monthlyVisits, right: hairSalonLeftKpis.monthlyVisits },
  { metric: "Average Ticket", left: "$30 – $60", right: hairSalonLeftKpis.revenuePerClient },
  { metric: "Startup Cost", left: nailSalonLeftKpis.startup, right: hairSalonLeftKpis.startup },
  { metric: "Valuation", left: nailSalonLeftKpis.valuation, right: hairSalonLeftKpis.valuation },
] as const;

export const winnerScorecard = [
  { label: "Ticket Size", left: 5, right: 8, winner: "Hair Salon" },
  { label: "Visit Frequency", left: 8, right: 6, winner: "Nail Salon" },
  { label: "Capital Barrier", left: 7, right: 6, winner: "Nail Salon" },
  { label: "Retail Upside", left: 4, right: 8, winner: "Hair Salon" },
] as const;

export const leftRevenueSources = nailSalonLeftRevenueSources;

export const rightRevenueSources = hairSalonLeftRevenueSources;

export const revenueFunnel = {
  left: [...nailSalonLeftRevenueFunnel],
  right: [...hairSalonLeftRevenueFunnel],
} as const;

export const clientFunnel = {
  left: [...nailSalonLeftClientFunnel],
  right: [...hairSalonLeftClientFunnel],
} as const;

export const serviceFunnel = {
  left: [...nailSalonLeftServiceFunnel],
  right: [...hairSalonLeftServiceFunnel],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$30 – $60 service", right: "$45 – $85 service" },
  { driver: "Visit Frequency", left: "Every 2 – 4 weeks", right: "Every 6 – 10 weeks" },
  { driver: "Add-on Mix", left: "Gel, art, extensions", right: "Color, treatments, retail" },
  { driver: "Service Time", left: "30 – 75 min per client", right: "45 – 120 min per client" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: nailSalonLeftClientEconomics[0].value, right: hairSalonLeftClientEconomics[0].value },
  { metric: "Annual Visits Per Client", left: nailSalonLeftClientEconomics[1].value, right: hairSalonLeftClientEconomics[1].value },
  { metric: "Estimated Lifetime Value", left: nailSalonLeftClientEconomics[2].value, right: hairSalonLeftClientEconomics[2].value },
  { metric: "Client Retention", left: nailSalonLeftClientEconomics[3].value, right: hairSalonLeftClientEconomics[3].value },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Station/Chair", left: nailSalonLeftServiceMetrics[0].value, right: hairSalonLeftServiceMetrics[0].value },
  { metric: "Revenue Per Technician", left: nailSalonLeftServiceMetrics[1].value, right: hairSalonLeftServiceMetrics[1].value },
  { metric: "Station Utilization", left: nailSalonLeftServiceMetrics[2].value, right: hairSalonLeftServiceMetrics[2].value },
] as const;

export const marginTiers = {
  left: nailSalonLeftMarginTiers,
  right: hairSalonLeftMarginTiers,
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Commissions", left: nailSalonLeftCostStructure[0].value, right: hairSalonLeftCostStructure[0].value },
  { expense: "Product COGS", left: nailSalonLeftCostStructure[1].value, right: hairSalonLeftCostStructure[1].value },
  { expense: "Rent", left: nailSalonLeftCostStructure[2].value, right: hairSalonLeftCostStructure[2].value },
  { expense: "Other Overhead", left: nailSalonLeftCostStructure[3].value, right: hairSalonLeftCostStructure[3].value },
] as const;

export const recurringHighlights = {
  left: nailSalonLeftRecurringHighlight,
  right: hairSalonLeftRecurringHighlight,
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: nailSalonLeftRecurringComparison[0].value, right: hairSalonLeftRecurringComparison[0].value },
  { metric: "Retail Attachment", left: nailSalonLeftRecurringComparison[1].value, right: hairSalonLeftRecurringComparison[1].value },
  { metric: "Membership Adoption", left: nailSalonLeftRecurringComparison[2].value, right: hairSalonLeftRecurringComparison[2].value },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Nail Salon", earnings: nailSalonLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Multi-Station Nail Salon", earnings: nailSalonLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Owner-Operator Hair Salon", earnings: hairSalonLeftOwnerIncome[0].earnings, type: "right" },
  { model: "Established Hair Salon", earnings: hairSalonLeftOwnerIncome[1].earnings, type: "right" },
] as const;

export const leftStartupItems = nailSalonLeftStartupItems;

export const rightStartupItems = hairSalonLeftStartupItems;

export const startupSideBySide = [
  { category: "Buildout", left: nailSalonLeftStartupSideBySide.buildout, right: hairSalonLeftStartupSideBySide.buildout },
  { category: "Equipment", left: nailSalonLeftStartupSideBySide.equipment, right: hairSalonLeftStartupSideBySide.equipment },
  { category: "Inventory", left: nailSalonLeftStartupSideBySide.inventory, right: hairSalonLeftStartupSideBySide.inventory },
  { category: "Total Launch Budget", left: nailSalonLeftStartupSideBySide.total, right: hairSalonLeftStartupSideBySide.total },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: nailSalonLeftValuation.sde, right: hairSalonLeftValuation.sde },
  { metric: "Revenue Multiple", left: nailSalonLeftValuation.revenue, right: hairSalonLeftValuation.revenue },
  { metric: "Typical Value", left: "$120K – $320K", right: "$180K – $420K" },
] as const;

export const valuationExamples = {
  left: nailSalonLeftValuation.example,
  right: hairSalonLeftValuation.example,
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: nailSalonLeftBreakEven[0].value, right: hairSalonLeftBreakEven[0].value },
  { metric: "Visits Per Day", left: nailSalonLeftBreakEven[1].value, right: hairSalonLeftBreakEven[1].value },
  { metric: "Months to Break-Even", left: nailSalonLeftBreakEven[2].value, right: hairSalonLeftBreakEven[2].value },
] as const;

export const scalingLadder = {
  left: [...nailSalonLeftScalingLadder],
  right: [...hairSalonLeftScalingLadder],
} as const;

export const scalingLeftTitle = "Nail Salon Growth Path";
export const scalingRightTitle = "Hair Salon Growth Path";

export const capitalEfficiency = {
  investment: "$125,000",
  left: nailSalonLeftCapitalEfficiency,
  right: hairSalonLeftCapitalEfficiency,
} as const;

export const chooseLeftTitle = "Choose a Nail Salon If";
export const chooseRightTitle = "Choose a Hair Salon If";

export const chooseLeft = [
  "You want high-frequency repeat visits every 2–4 weeks",
  "You prefer faster service turnover and higher daily volume",
  "You like a focused, teachable service menu",
  "You want strong client loyalty and rebooking cadence",
  "You plan to add waxing or lash services to grow ticket",
] as const;

export const chooseRight = [
  "You want higher average tickets from color and chemical services",
  "You value strong retail attachment and premium upsells",
  "You are targeting a higher revenue ceiling per location",
  "You want a broad service menu across cut, color, and styling",
  "You plan to build a product retail program",
] as const;

export const calculators = nailSalonCalculators;

export const relatedComparisons = nailSalonRelatedComparisons;

export const faqs = [
  {
    question: "Is a nail salon or hair salon more profitable?",
    answer:
      "Both models run comparable net margins — nail salons 10–17% and hair salons 8–15%. Nail salons rely on higher visit frequency and faster turnover, while hair salons earn more per visit through color and retail. Profitability comes down to utilization and average ticket in each model.",
  },
  {
    question: "Which is cheaper to open, a nail salon or a hair salon?",
    answer:
      "Nail salons are often slightly cheaper to open ($70K–$180K) than hair salons ($80K–$250K), though ventilation and station buildout can narrow the gap. Both benefit from leasing existing beauty space to cut buildout cost.",
  },
  {
    question: "Which has more repeat visits?",
    answer:
      "Nail salons see clients more frequently — every 2–4 weeks versus every 6–10 weeks for hair salons. Hair salons make up the difference with higher tickets and stronger retail attachment.",
  },
  {
    question: "Which is easier to value or sell?",
    answer:
      "Hair salons trade at 1.8×–3.0× SDE versus 1.6×–2.6× for nail salons. Transferable staff, recurring clients, and clean books drive value in both, but hair salons benefit from retail revenue and higher tickets.",
  },
  {
    question: "Can a nail salon add hair services?",
    answer:
      "Some nail salons add a hair station or two to lift average ticket and fill downtime. Adding hair services requires licensed stylists and additional buildout but can meaningfully improve station-hour productivity.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Nail Salon", "Hair Salon", {
    ownerHandsOn: 2,
    ownerManager: 2,
    budgetLow: 2,
    budgetMedium: 1,
    budgetHigh: 2,
    revenueModerate: 2,
    revenueHigh: 1,
    revenueVeryHigh: 2,
    growthLifestyle: 2,
    growthExpand: 1,
    growthMulti: 2,
  });
}

export const decisionToolCopy = {
  left:
    "A nail salon aligns with your goals if you want high-frequency repeat visits, faster service turnover, and a focused, teachable service menu.",
  right:
    "A hair salon is the better fit — higher average tickets from color and chemical work, strong retail attachment, and a higher revenue ceiling per location.",
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
