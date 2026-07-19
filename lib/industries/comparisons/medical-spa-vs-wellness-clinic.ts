import type { BeautyDecisionInputs, BeautyDualComparisonData } from "./beauty-comparison-types";
import { scoreBeautyChoice } from "./beauty-comparison-types";
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
  slug: "medical-spa-vs-wellness-clinic",
  title: "Medical Spa vs Wellness Clinic",
  subtitle:
    "Compare revenue, profit margins, owner pay, startup costs, and valuation between a high-ticket medical spa and a wellness clinic offering IV therapy, chiropractic, and massage services.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...medicalSpaHubLabels,
  right: "Wellness Clinic",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Average Ticket", winner: "Medical Spa" },
  { factor: "Lower Startup Cost", winner: "Wellness Clinic" },
  { factor: "Higher Net Margin", winner: "Medical Spa" },
  { factor: "Higher Revenue Ceiling", winner: "Medical Spa" },
  { factor: "Broader Service Menu", winner: "Wellness Clinic" },
  { factor: "Faster Break-Even", winner: "Wellness Clinic" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: medicalSpaLeftKpis.annualRevenue, right: "$400K – $1.5M" },
  { metric: "Net Margin", left: medicalSpaLeftKpis.netMargin, right: "12 – 22%" },
  { metric: "Owner Compensation", left: medicalSpaLeftKpis.ownerComp, right: "$80K – $180K" },
  { metric: "Monthly Visits", left: medicalSpaLeftKpis.monthlyVisits, right: "500 – 1,200" },
  { metric: "Average Ticket", left: medicalSpaLeftKpis.revenuePerClient, right: "$80 – $250" },
  { metric: "Startup Cost", left: medicalSpaLeftKpis.startup, right: "$150K – $450K" },
  { metric: "Valuation", left: medicalSpaLeftKpis.valuation, right: "2.5× – 4.0× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Ticket Size", left: 10, right: 5, winner: "Medical Spa" },
  { label: "Capital Barrier", left: 4, right: 8, winner: "Wellness Clinic" },
  { label: "Margin Quality", left: 9, right: 5, winner: "Medical Spa" },
  { label: "Service Breadth", left: 6, right: 9, winner: "Wellness Clinic" },
] as const;

export const leftRevenueSources = medicalSpaLeftRevenueSources;

export const rightRevenueSources = [
  "IV vitamin therapy",
  "Chiropractic adjustments",
  "Massage and bodywork",
  "Functional medicine consults",
  "Weight loss programs",
  "Supplements and retail",
] as const;

export const revenueFunnel = {
  left: [...medicalSpaLeftRevenueFunnel],
  right: ["New Client", "Wellness Assessment", "Treatment Package", "Membership", "Rebooking"],
} as const;

export const clientFunnel = {
  left: [...medicalSpaLeftClientFunnel],
  right: ["New Client", "Initial Visit", "Treatment Plan", "Wellness Member"],
} as const;

export const serviceFunnel = {
  left: [...medicalSpaLeftServiceFunnel],
  right: ["Room / Bay Capacity", "Booked Utilization", "Average Ticket", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$250 – $600 treatment", right: "$80 – $250 visit" },
  { driver: "Visit Frequency", left: "Every 3 – 4 months (injectables)", right: "Weekly to monthly cadence" },
  { driver: "Revenue Mix", left: "Injectables + laser + retail", right: "IV + chiropractic + massage mix" },
  { driver: "Provider Requirement", left: "Medical director + RN/NP/PA", right: "Chiropractor, RN, LMT licenses" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: medicalSpaLeftClientEconomics[0].value, right: "$80 – $250" },
  { metric: "Annual Visits Per Client", left: medicalSpaLeftClientEconomics[1].value, right: "8 – 20" },
  { metric: "Estimated Lifetime Value", left: medicalSpaLeftClientEconomics[2].value, right: "$1,500 – $5,000" },
  { metric: "Client Retention", left: medicalSpaLeftClientEconomics[3].value, right: "50 – 70%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Treatment Room", left: medicalSpaLeftServiceMetrics[0].value, right: "$80K – $200K" },
  { metric: "Revenue Per Provider", left: medicalSpaLeftServiceMetrics[1].value, right: "$120K – $280K" },
  { metric: "Room Utilization", left: medicalSpaLeftServiceMetrics[2].value, right: "55 – 72%" },
] as const;

export const marginTiers = {
  left: medicalSpaLeftMarginTiers,
  right: { weak: "8 – 12%", average: "14 – 18%", strong: "20 – 22%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Clinical Labor", left: medicalSpaLeftCostStructure[0].value, right: "38 – 48%" },
  { expense: "Product / Consumables COGS", left: medicalSpaLeftCostStructure[1].value, right: "10 – 18%" },
  { expense: "Rent", left: medicalSpaLeftCostStructure[2].value, right: "10 – 15%" },
  { expense: "Other Overhead", left: medicalSpaLeftCostStructure[3].value, right: "12 – 18%" },
] as const;

export const recurringHighlights = {
  left: medicalSpaLeftRecurringHighlight,
  right: { title: "Membership + IV Packages", value: "20–35% of revenue from memberships & packages" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: medicalSpaLeftRecurringComparison[0].value, right: "45 – 60%" },
  { metric: "Retail Attachment", left: medicalSpaLeftRecurringComparison[1].value, right: "10 – 20%" },
  { metric: "Membership Adoption", left: medicalSpaLeftRecurringComparison[2].value, right: "20 – 35%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Med Spa", earnings: medicalSpaLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Established Multi-Provider Med Spa", earnings: medicalSpaLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Owner-Operator Wellness Clinic", earnings: "$80K – $140K", type: "right" },
  { model: "Established Multi-Service Wellness Clinic", earnings: "$150K – $220K", type: "right" },
] as const;

export const leftStartupItems = medicalSpaLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout & Treatment Bays", percent: 35 },
  { item: "IV & Therapy Equipment", percent: 22 },
  { item: "Inventory & Supplements", percent: 10 },
  { item: "Working Capital", percent: 18 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: medicalSpaLeftStartupSideBySide.buildout, right: "$60K – $180K" },
  { category: "Equipment", left: medicalSpaLeftStartupSideBySide.equipment, right: "$40K – $120K" },
  { category: "Inventory / Supplies", left: medicalSpaLeftStartupSideBySide.inventory, right: "$15K – $50K" },
  { category: "Total Launch Budget", left: medicalSpaLeftStartupSideBySide.total, right: "$150K – $450K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: medicalSpaLeftValuation.sde, right: "2.5× – 4.0×" },
  { metric: "Revenue Multiple", left: medicalSpaLeftValuation.revenue, right: "0.4× – 0.8×" },
  { metric: "Typical Value", left: "$700K – $3.0M", right: "$250K – $800K" },
] as const;

export const valuationExamples = {
  left: medicalSpaLeftValuation.example,
  right: { revenue: "$800K", value: "$280K – $480K", note: "3.0–3.5× SDE on $110K" },
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: medicalSpaLeftBreakEven[0].value, right: "$30K – $55K" },
  { metric: "Visits Per Day", left: medicalSpaLeftBreakEven[1].value, right: "20 – 40" },
  { metric: "Months to Break-Even", left: medicalSpaLeftBreakEven[2].value, right: "12 – 24 months" },
] as const;

export const scalingLadder = {
  left: [...medicalSpaLeftScalingLadder],
  right: ["Single-Service Clinic", "Add IV + Chiropractic", "Membership Model", "Second Location"],
} as const;

export const scalingLeftTitle = "Medical Spa Growth Path";
export const scalingRightTitle = "Wellness Clinic Growth Path";

export const capitalEfficiency = {
  investment: "$350,000",
  left: {
    revenue: "$800K – $1.4M",
    profit: "$150K – $350K net profit",
    payback: "2 – 4 years",
  },
  right: {
    revenue: "$450K – $800K",
    profit: "$55K – $140K net profit",
    payback: "2 – 4 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Medical Spa If";
export const chooseRightTitle = "Choose a Wellness Clinic If";

export const chooseLeft = [
  "You want much higher tickets and net margins",
  "You are targeting injectables, lasers, and aesthetic medicine",
  "You can partner with a medical director and clinical injectors",
  "You want premium valuation multiples at exit",
  "You can fund device-heavy laser and injectable infrastructure",
] as const;

export const chooseRight = [
  "You want lower startup cost and faster break-even",
  "You prefer a broad wellness menu (IV, chiropractic, massage)",
  "You value high visit frequency over high per-visit tickets",
  "You want to serve health-conscious clients without surgical aesthetics",
  "You plan to build through memberships and package revenue",
] as const;

export const calculators = medicalSpaCalculators;

export const relatedComparisons = medicalSpaRelatedComparisons;

export const faqs = [
  {
    question: "Is a medical spa or wellness clinic more profitable?",
    answer:
      "Medical spas typically earn higher absolute profit — net margins run 15–30% on tickets of $250–$600, versus 12–22% for wellness clinics at $80–$250. Wellness clinics break even faster with lower startup cost, but med spas scale to a much higher revenue ceiling.",
  },
  {
    question: "Which is cheaper to open?",
    answer:
      "A wellness clinic is significantly cheaper to launch ($150K–$450K) than a medical spa ($300K–$800K), which requires laser devices, injectable inventory, and a medical director. IV bays and massage rooms cost far less than aesthetic medical equipment.",
  },
  {
    question: "What is the difference in services?",
    answer:
      "Medical spas focus on aesthetic medicine — injectables, lasers, body contouring, and medical-grade skincare. Wellness clinics blend IV therapy, chiropractic, massage, functional medicine, and supplements with a broader but lower-ticket service menu.",
  },
  {
    question: "Which is worth more when you sell?",
    answer:
      "Medical spas command higher multiples (3.0×–5.5× SDE) than wellness clinics (2.5×–4.0× SDE) because of higher tickets, clinical revenue, and stronger margins. Both benefit from membership revenue and recurring client bases.",
  },
  {
    question: "Can a wellness clinic add med spa services?",
    answer:
      "Some wellness clinics add injectables or laser treatments, but it requires a medical director, clinical staff, device investment, and aesthetic marketing — effectively building a med spa arm alongside the wellness practice.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Medical Spa", "Wellness Clinic", {
    ownerHandsOn: 1,
    ownerManager: 2,
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
    "A medical spa is the better fit if you want much higher tickets and margins, can partner with a medical director, and are targeting premium aesthetic medicine.",
  right:
    "A wellness clinic aligns with your goals if you want lower startup cost, a broad IV/chiropractic/massage menu, and faster break-even without device-heavy aesthetics.",
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
