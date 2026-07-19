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
  slug: "medical-spa-vs-dermatology-practice",
  title: "Medical Spa vs Dermatology Practice",
  subtitle:
    "Compare revenue, margins, owner pay, payer mix, startup costs, and valuation between a cash-pay medical spa and a dermatology practice blending insurance and elective aesthetics.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...medicalSpaHubLabels,
  right: "Dermatology Practice",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Cash-Pay Mix", winner: "Medical Spa" },
  { factor: "Higher Revenue Ceiling", winner: "Dermatology Practice" },
  { factor: "Lower Startup Cost", winner: "Medical Spa" },
  { factor: "Simpler Clinical Scope", winner: "Medical Spa" },
  { factor: "Higher Valuation Multiple", winner: "Dermatology Practice" },
  { factor: "Faster Owner Ramp", winner: "Medical Spa" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: medicalSpaLeftKpis.annualRevenue, right: "$800K – $3M" },
  { metric: "Net Margin", left: medicalSpaLeftKpis.netMargin, right: "20 – 35%" },
  { metric: "Owner Compensation", left: medicalSpaLeftKpis.ownerComp, right: "$250K – $600K" },
  { metric: "Monthly Visits", left: medicalSpaLeftKpis.monthlyVisits, right: "400 – 1,200" },
  { metric: "Average Ticket", left: medicalSpaLeftKpis.revenuePerClient, right: "$150 – $450" },
  { metric: "Startup Cost", left: medicalSpaLeftKpis.startup, right: "$500K – $1.2M" },
  { metric: "Valuation", left: medicalSpaLeftKpis.valuation, right: "4.0× – 7.0× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Cash-Pay Flexibility", left: 9, right: 6, winner: "Medical Spa" },
  { label: "Revenue Ceiling", left: 7, right: 9, winner: "Dermatology Practice" },
  { label: "Capital Barrier", left: 7, right: 4, winner: "Medical Spa" },
  { label: "Exit Premium", left: 7, right: 9, winner: "Dermatology Practice" },
] as const;

export const leftRevenueSources = medicalSpaLeftRevenueSources;

export const rightRevenueSources = [
  "Medical dermatology visits",
  "Mohs surgery and biopsies",
  "Cosmetic injectables and lasers",
  "Insurance-reimbursed procedures",
  "Cash-pay aesthetic treatments",
  "Medical-grade skincare retail",
] as const;

export const revenueFunnel = {
  left: [...medicalSpaLeftRevenueFunnel],
  right: ["Patient Intake", "Diagnosis / Consult", "Treatment Plan", "Insurance + Cash Collections"],
} as const;

export const clientFunnel = {
  left: [...medicalSpaLeftClientFunnel],
  right: ["New Patient", "Clinical Exam", "Treatment Series", "Recall Retention"],
} as const;

export const serviceFunnel = {
  left: [...medicalSpaLeftServiceFunnel],
  right: ["Exam Room Capacity", "Provider Utilization", "Procedure Mix", "Net Collections"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$250 – $600 elective treatment", right: "$150 – $450 blended visit" },
  { driver: "Payer Mix", left: "85 – 100% cash-pay", right: "40 – 60% insurance, 40 – 60% cash-pay" },
  { driver: "Visit Frequency", left: "Every 3 – 4 months (injectables)", right: "Annual clinical + elective cadence" },
  { driver: "Provider Requirement", left: "Medical director + RN/NP/PA", right: "Board-certified dermatologist" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: medicalSpaLeftClientEconomics[0].value, right: "$150 – $450" },
  { metric: "Annual Visits Per Client", left: medicalSpaLeftClientEconomics[1].value, right: "2 – 5" },
  { metric: "Estimated Lifetime Value", left: medicalSpaLeftClientEconomics[2].value, right: "$3,500 – $12,000" },
  { metric: "Client Retention", left: medicalSpaLeftClientEconomics[3].value, right: "60 – 78%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Treatment Room", left: medicalSpaLeftServiceMetrics[0].value, right: "$250K – $600K" },
  { metric: "Revenue Per Provider", left: medicalSpaLeftServiceMetrics[1].value, right: "$500K – $1.2M" },
  { metric: "Room Utilization", left: medicalSpaLeftServiceMetrics[2].value, right: "65 – 82%" },
] as const;

export const marginTiers = {
  left: medicalSpaLeftMarginTiers,
  right: { weak: "14 – 18%", average: "22 – 28%", strong: "30 – 35%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Clinical Labor", left: medicalSpaLeftCostStructure[0].value, right: "28 – 36%" },
  { expense: "Product / Consumables COGS", left: medicalSpaLeftCostStructure[1].value, right: "8 – 14%" },
  { expense: "Rent", left: medicalSpaLeftCostStructure[2].value, right: "6 – 10%" },
  { expense: "Billing & Admin Overhead", left: medicalSpaLeftCostStructure[3].value, right: "12 – 18%" },
] as const;

export const recurringHighlights = {
  left: medicalSpaLeftRecurringHighlight,
  right: { title: "Insurance + Elective Hybrid", value: "40–60% recurring clinical + aesthetic revenue" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: medicalSpaLeftRecurringComparison[0].value, right: "55 – 72%" },
  { metric: "Cash-Pay Revenue %", left: "85 – 100%", right: "40 – 60%" },
  { metric: "Membership / Package Adoption", left: medicalSpaLeftRecurringComparison[2].value, right: "15 – 30%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Med Spa", earnings: medicalSpaLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Established Multi-Provider Med Spa", earnings: medicalSpaLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Solo Dermatology Owner", earnings: "$250K – $450K", type: "right" },
  { model: "Multi-Provider Derm Practice", earnings: "$450K – $600K+", type: "right" },
] as const;

export const leftStartupItems = medicalSpaLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout & Exam Rooms", percent: 28 },
  { item: "Medical Devices & Mohs", percent: 30 },
  { item: "EHR & Billing Setup", percent: 18 },
  { item: "Working Capital", percent: 16 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: medicalSpaLeftStartupSideBySide.buildout, right: "$150K – $350K" },
  { category: "Equipment / Devices", left: medicalSpaLeftStartupSideBySide.equipment, right: "$200K – $500K" },
  { category: "Technology & Licensing", left: "$20K – $50K", right: "$80K – $150K" },
  { category: "Total Launch Budget", left: medicalSpaLeftStartupSideBySide.total, right: "$500K – $1.2M" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: medicalSpaLeftValuation.sde, right: "4.0× – 7.0×" },
  { metric: "Revenue Multiple", left: medicalSpaLeftValuation.revenue, right: "1.0× – 1.8×" },
  { metric: "Typical Value", left: "$700K – $3.0M", right: "$1.2M – $5.0M" },
] as const;

export const valuationExamples = {
  left: medicalSpaLeftValuation.example,
  right: { revenue: "$1.8M", value: "$1.4M – $2.8M", note: "5.0–6.5× SDE on $380K" },
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: medicalSpaLeftBreakEven[0].value, right: "$70K – $130K" },
  { metric: "Patients Per Day", left: medicalSpaLeftBreakEven[1].value, right: "15 – 35" },
  { metric: "Months to Break-Even", left: medicalSpaLeftBreakEven[2].value, right: "24 – 42 months" },
] as const;

export const scalingLadder = {
  left: [...medicalSpaLeftScalingLadder],
  right: ["Solo Dermatologist", "Add PA/NP", "Mohs / Cosmetic Expansion", "Multi-Location Derm Group"],
} as const;

export const scalingLeftTitle = "Medical Spa Growth Path";
export const scalingRightTitle = "Dermatology Practice Growth Path";

export const capitalEfficiency = {
  investment: "$600,000",
  left: {
    revenue: "$800K – $1.4M",
    profit: "$150K – $350K net profit",
    payback: "2 – 4 years",
  },
  right: {
    revenue: "$1.0M – $2.0M",
    profit: "$250K – $500K net profit",
    payback: "3 – 5 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Medical Spa If";
export const chooseRightTitle = "Choose a Dermatology Practice If";

export const chooseLeft = [
  "You want a cash-pay, elective-treatment model without insurance billing",
  "You can launch with lower capital than a full dermatology practice",
  "You prefer injectables, lasers, and wellness aesthetics over clinical dermatology",
  "You want faster ramp without building an insurance panel",
  "You are targeting membership-driven aesthetic revenue",
] as const;

export const chooseRight = [
  "You are a board-certified dermatologist or can recruit one",
  "You want the highest revenue ceiling with insurance + cash-pay mix",
  "You value premium exit multiples from clinical + aesthetic revenue",
  "You can manage insurance billing, coding, and compliance infrastructure",
  "You plan to add Mohs surgery or medical dermatology procedures",
] as const;

export const calculators = medicalSpaCalculators;

export const relatedComparisons = medicalSpaRelatedComparisons;

export const faqs = [
  {
    question: "Is a medical spa or dermatology practice more profitable?",
    answer:
      "Dermatology practices often reach higher owner compensation ($250K–$600K) with 20–35% margins on blended insurance and cash-pay revenue. Medical spas run 15–30% margins with lower overhead complexity, but typically on a smaller revenue base unless scaled to multiple providers.",
  },
  {
    question: "Which is cheaper to open?",
    answer:
      "A medical spa is generally cheaper to launch ($300K–$800K) than a dermatology practice ($500K–$1.2M), which requires exam rooms, EHR, billing infrastructure, and often Mohs or surgical equipment. Med spas avoid insurance panel setup and clinical coding complexity at launch.",
  },
  {
    question: "Do dermatology practices do med spa treatments?",
    answer:
      "Many dermatology practices offer the same injectables, lasers, and aesthetic treatments as med spas, plus medical dermatology and insurance-reimbursed visits. The difference is payer mix — derms blend insurance and cash-pay, while med spas are typically 85–100% cash-pay.",
  },
  {
    question: "Which commands a higher valuation?",
    answer:
      "Dermatology practices typically command higher multiples (4.0×–7.0× SDE) due to clinical revenue, physician ownership, and deep buyer demand from PE and DSO-style consolidators. Medical spas sell at 3.0×–5.5× SDE with strong demand from aesthetic-focused buyers.",
  },
  {
    question: "Can a med spa become a dermatology practice?",
    answer:
      "Expanding from med spa to full dermatology requires a board-certified dermatologist, insurance credentialing, clinical exam infrastructure, and medical billing operations — a significant regulatory and capital step beyond aesthetic services alone.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Medical Spa", "Dermatology Practice", {
    ownerHandsOn: 2,
    ownerManager: 2,
    budgetLow: 2,
    budgetMedium: 1,
    budgetHigh: 1,
    revenueModerate: 1,
    revenueHigh: 1,
    revenueVeryHigh: 1,
    growthLifestyle: 2,
    growthExpand: 1,
    growthMulti: 1,
  });
}

export const decisionToolCopy = {
  left:
    "A medical spa fits if you want a cash-pay aesthetic model with lower startup complexity, faster ramp, and no insurance billing infrastructure.",
  right:
    "A dermatology practice aligns with your goals if you can recruit a dermatologist, manage insurance operations, and target the highest revenue ceiling and exit multiples.",
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
