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
  slug: "medical-spa-vs-plastic-surgery-clinic",
  title: "Medical Spa vs Plastic Surgery Clinic",
  subtitle:
    "Compare revenue, procedure economics, profit margins, startup costs, owner pay, and valuation between a medical spa and a plastic surgery clinic performing surgical and non-surgical aesthetics.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...medicalSpaHubLabels,
  right: "Plastic Surgery Clinic",
} as const;

export const decisionSnapshot = [
  { factor: "Lower Startup Cost", winner: "Medical Spa" },
  { factor: "Higher Procedure Ticket", winner: "Plastic Surgery Clinic" },
  { factor: "Higher Net Margin", winner: "Plastic Surgery Clinic" },
  { factor: "Faster Patient Ramp", winner: "Medical Spa" },
  { factor: "Higher Revenue Ceiling", winner: "Plastic Surgery Clinic" },
  { factor: "Simpler Operations", winner: "Medical Spa" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: medicalSpaLeftKpis.annualRevenue, right: "$2M – $8M" },
  { metric: "Net Margin", left: medicalSpaLeftKpis.netMargin, right: "25 – 40%" },
  { metric: "Owner Compensation", left: medicalSpaLeftKpis.ownerComp, right: "$400K – $1M+" },
  { metric: "Monthly Visits", left: medicalSpaLeftKpis.monthlyVisits, right: "200 – 600" },
  { metric: "Average Ticket", left: medicalSpaLeftKpis.revenuePerClient, right: "$3K – $15K" },
  { metric: "Startup Cost", left: medicalSpaLeftKpis.startup, right: "$800K – $2.5M" },
  { metric: "Valuation", left: medicalSpaLeftKpis.valuation, right: "5.0× – 10.0× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Procedure Ticket", left: 6, right: 10, winner: "Plastic Surgery Clinic" },
  { label: "Capital Barrier", left: 8, right: 2, winner: "Medical Spa" },
  { label: "Margin Quality", left: 7, right: 9, winner: "Plastic Surgery Clinic" },
  { label: "Ramp Speed", left: 8, right: 4, winner: "Medical Spa" },
] as const;

export const leftRevenueSources = medicalSpaLeftRevenueSources;

export const rightRevenueSources = [
  "Surgical procedures (facelift, lipo, breast)",
  "Non-surgical injectables and lasers",
  "Consultation and surgical fees",
  "Operating room and anesthesia fees",
  "Post-operative care packages",
  "Medical-grade skincare retail",
] as const;

export const revenueFunnel = {
  left: [...medicalSpaLeftRevenueFunnel],
  right: ["Consultation", "Surgical Plan", "Procedure Day", "Post-Op Care", "Referral Loop"],
} as const;

export const clientFunnel = {
  left: [...medicalSpaLeftClientFunnel],
  right: ["New Consult", "Surgical Candidate", "Procedure Completed", "Repeat Aesthetic Patient"],
} as const;

export const serviceFunnel = {
  left: [...medicalSpaLeftServiceFunnel],
  right: ["OR / Suite Capacity", "Surgeon Utilization", "Procedure Mix", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$250 – $600 treatment", right: "$3K – $15K procedure" },
  { driver: "Visit Frequency", left: "Every 3 – 4 months (injectables)", right: "Surgical once; injectables quarterly" },
  { driver: "Revenue Mix", left: "85 – 100% non-surgical", right: "40 – 70% surgical, 30 – 60% non-surgical" },
  { driver: "Provider Requirement", left: "Medical director + RN/NP/PA", right: "Board-certified plastic surgeon" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: medicalSpaLeftClientEconomics[0].value, right: "$3,000 – $15,000" },
  { metric: "Annual Visits Per Client", left: medicalSpaLeftClientEconomics[1].value, right: "1 – 4" },
  { metric: "Estimated Lifetime Value", left: medicalSpaLeftClientEconomics[2].value, right: "$8,000 – $40,000" },
  { metric: "Client Retention", left: medicalSpaLeftClientEconomics[3].value, right: "50 – 68%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Treatment Room", left: medicalSpaLeftServiceMetrics[0].value, right: "$400K – $1.2M" },
  { metric: "Revenue Per Surgeon", left: medicalSpaLeftServiceMetrics[1].value, right: "$1.5M – $4M" },
  { metric: "Suite Utilization", left: medicalSpaLeftServiceMetrics[2].value, right: "50 – 70%" },
] as const;

export const marginTiers = {
  left: medicalSpaLeftMarginTiers,
  right: { weak: "18 – 22%", average: "28 – 34%", strong: "36 – 40%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Clinical Labor", left: medicalSpaLeftCostStructure[0].value, right: "22 – 32%" },
  { expense: "Product / Consumables COGS", left: medicalSpaLeftCostStructure[1].value, right: "10 – 18%" },
  { expense: "Facility / OR Overhead", left: medicalSpaLeftCostStructure[2].value, right: "10 – 16%" },
  { expense: "Marketing & Admin", left: medicalSpaLeftCostStructure[3].value, right: "12 – 20%" },
] as const;

export const recurringHighlights = {
  left: medicalSpaLeftRecurringHighlight,
  right: { title: "Surgical + Injectable Hybrid", value: "30–50% recurring non-surgical revenue" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: medicalSpaLeftRecurringComparison[0].value, right: "45 – 62%" },
  { metric: "Non-Surgical Revenue %", left: "85 – 100%", right: "30 – 60%" },
  { metric: "Membership / Package Adoption", left: medicalSpaLeftRecurringComparison[2].value, right: "10 – 25%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Med Spa", earnings: medicalSpaLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Established Multi-Provider Med Spa", earnings: medicalSpaLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Solo Plastic Surgeon", earnings: "$400K – $700K", type: "right" },
  { model: "Established Surgical Practice", earnings: "$700K – $1M+", type: "right" },
] as const;

export const leftStartupItems = medicalSpaLeftStartupItems;

export const rightStartupItems = [
  { item: "Surgical Suite Buildout", percent: 36 },
  { item: "OR Equipment & Devices", percent: 28 },
  { item: "Licensing & Credentialing", percent: 12 },
  { item: "Working Capital", percent: 16 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: medicalSpaLeftStartupSideBySide.buildout, right: "$300K – $800K" },
  { category: "Equipment / Devices", left: medicalSpaLeftStartupSideBySide.equipment, right: "$250K – $700K" },
  { category: "Licensing & Credentialing", left: "$20K – $50K", right: "$80K – $200K" },
  { category: "Total Launch Budget", left: medicalSpaLeftStartupSideBySide.total, right: "$800K – $2.5M" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: medicalSpaLeftValuation.sde, right: "5.0× – 10.0×" },
  { metric: "Revenue Multiple", left: medicalSpaLeftValuation.revenue, right: "1.2× – 2.5×" },
  { metric: "Typical Value", left: "$700K – $3.0M", right: "$2M – $10M+" },
] as const;

export const valuationExamples = {
  left: medicalSpaLeftValuation.example,
  right: { revenue: "$4M", value: "$2.8M – $5.5M", note: "6.5–8.0× SDE on $650K" },
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: medicalSpaLeftBreakEven[0].value, right: "$120K – $250K" },
  { metric: "Procedures Per Month", left: medicalSpaLeftBreakEven[1].value, right: "8 – 20 surgical + non-surgical" },
  { metric: "Months to Break-Even", left: medicalSpaLeftBreakEven[2].value, right: "30 – 48 months" },
] as const;

export const scalingLadder = {
  left: [...medicalSpaLeftScalingLadder],
  right: ["Solo Surgeon", "Add OR Days", "Non-Surgical Expansion", "Multi-Surgeon Group"],
} as const;

export const scalingLeftTitle = "Medical Spa Growth Path";
export const scalingRightTitle = "Plastic Surgery Clinic Growth Path";

export const capitalEfficiency = {
  investment: "$800,000",
  left: {
    revenue: "$800K – $1.4M",
    profit: "$150K – $350K net profit",
    payback: "2 – 4 years",
  },
  right: {
    revenue: "$2.5M – $4.5M",
    profit: "$700K – $1.4M net profit",
    payback: "3 – 6 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Medical Spa If";
export const chooseRightTitle = "Choose a Plastic Surgery Clinic If";

export const chooseLeft = [
  "You want lower startup cost and faster patient ramp",
  "You prefer non-surgical injectables and laser treatments",
  "You can operate without a board-certified surgeon on staff",
  "You want membership-driven recurring revenue from day one",
  "You are targeting a premium but accessible aesthetic market",
] as const;

export const chooseRight = [
  "You are a board-certified plastic surgeon or can recruit one",
  "You want the highest procedure tickets ($3K–$15K) and margins",
  "You can fund surgical suite buildout and OR infrastructure",
  "You are targeting the highest revenue ceiling and exit multiples",
  "You plan to blend high-margin surgical cases with injectable maintenance",
] as const;

export const calculators = medicalSpaCalculators;

export const relatedComparisons = medicalSpaRelatedComparisons;

export const faqs = [
  {
    question: "Is a medical spa or plastic surgery clinic more profitable?",
    answer:
      "Plastic surgery clinics typically generate higher absolute owner income ($400K–$1M+) with 25–40% margins on surgical and non-surgical revenue. Medical spas earn strong returns ($120K–$350K owner pay) at 15–30% margins with far lower capital requirements and faster ramp.",
  },
  {
    question: "Which is cheaper to open?",
    answer:
      "A medical spa is significantly cheaper ($300K–$800K) than a plastic surgery clinic ($800K–$2.5M), which requires a surgical suite, OR equipment, anesthesia infrastructure, and surgeon credentialing. Med spas can launch with treatment rooms and devices only.",
  },
  {
    question: "Do plastic surgeons also run med spa services?",
    answer:
      "Most plastic surgery clinics offer non-surgical injectables and lasers alongside surgical procedures. The surgical cases drive the highest tickets and margins, while injectables provide recurring revenue between surgical patients.",
  },
  {
    question: "Which commands a higher valuation?",
    answer:
      "Plastic surgery clinics command the highest aesthetic multiples (5.0×–10.0× SDE) due to surgeon-owned goodwill, surgical revenue, and limited competition. Medical spas sell at 3.0×–5.5× SDE with strong buyer demand from aesthetic consolidators.",
  },
  {
    question: "Can a med spa add surgical procedures?",
    answer:
      "Adding surgical procedures requires a board-certified plastic surgeon, accredited surgical facility, anesthesia capabilities, and malpractice coverage at surgical levels — a fundamentally different capital and regulatory model than a non-surgical med spa.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Medical Spa", "Plastic Surgery Clinic", {
    ownerHandsOn: 2,
    ownerManager: 2,
    budgetLow: 3,
    budgetMedium: 2,
    budgetHigh: 1,
    revenueModerate: 2,
    revenueHigh: 1,
    revenueVeryHigh: 1,
    growthLifestyle: 2,
    growthExpand: 1,
    growthMulti: 1,
  });
}

export const decisionToolCopy = {
  left:
    "A medical spa fits if you want lower startup cost, faster ramp, and a non-surgical aesthetic model with strong membership revenue.",
  right:
    "A plastic surgery clinic aligns with your goals if you can recruit a surgeon, fund surgical infrastructure, and target the highest procedure tickets and exit multiples.",
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
