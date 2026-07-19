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
  slug: "medical-spa-vs-dental-practice",
  title: "Medical Spa vs Dental Practice",
  subtitle:
    "Compare revenue, profit margins, owner pay, startup costs, payer mix, and valuation between a cash-pay medical spa and an outpatient dental practice.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...medicalSpaHubLabels,
  right: "Dental Practice",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Cash-Pay Mix", winner: "Medical Spa" },
  { factor: "Higher EBITDA Margin", winner: "Dental Practice" },
  { factor: "Lower Startup Cost", winner: "Medical Spa" },
  { factor: "Higher Average Ticket", winner: "Medical Spa" },
  { factor: "Simpler Billing Operations", winner: "Medical Spa" },
  { factor: "Stronger Exit Multiple", winner: "Dental Practice" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: medicalSpaLeftKpis.annualRevenue, right: "$1.2M – $2.6M" },
  { metric: "Net / EBITDA Margin", left: medicalSpaLeftKpis.netMargin, right: "18 – 30%" },
  { metric: "Owner Compensation", left: medicalSpaLeftKpis.ownerComp, right: "$220K – $360K" },
  { metric: "Monthly Visits", left: medicalSpaLeftKpis.monthlyVisits, right: "120 – 180" },
  { metric: "Revenue Per Patient", left: medicalSpaLeftKpis.revenuePerClient, right: "$900 – $1,100/yr" },
  { metric: "Startup Cost", left: medicalSpaLeftKpis.startup, right: "$515K – $1.0M" },
  { metric: "Valuation", left: medicalSpaLeftKpis.valuation, right: "3.2× – 4.5× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Cash-Pay Flexibility", left: 9, right: 7, winner: "Medical Spa" },
  { label: "Margin Strength", left: 7, right: 9, winner: "Dental Practice" },
  { label: "Capital Barrier", left: 7, right: 5, winner: "Medical Spa" },
  { label: "Revenue Predictability", left: 6, right: 8, winner: "Dental Practice" },
] as const;

export const leftRevenueSources = medicalSpaLeftRevenueSources;

export const rightRevenueSources = [
  "Exams and hygiene recall",
  "Restorative procedures",
  "Crown and bridge",
  "Implants and oral surgery",
  "Cosmetic add-ons",
  "Emergency dentistry",
] as const;

export const revenueFunnel = {
  left: [...medicalSpaLeftRevenueFunnel],
  right: ["Lead/Referral", "Exam + Diagnosis", "Treatment Plan", "Collections"],
} as const;

export const clientFunnel = {
  left: [...medicalSpaLeftClientFunnel],
  right: ["New Patient", "Comprehensive Exam", "Accepted Treatment", "Recall Retention"],
} as const;

export const serviceFunnel = {
  left: [...medicalSpaLeftServiceFunnel],
  right: ["Chair Hours", "Procedures", "Production", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$250 – $600 elective treatment", right: "$600 – $4,500 per treatment plan" },
  { driver: "Payer Mix", left: "85 – 100% cash-pay", right: "55 – 70% insurance, 25 – 40% cash-pay" },
  { driver: "Visit Frequency", left: "Every 3 – 4 months (injectables)", right: "1.8 – 2.4 visits per year" },
  { driver: "Provider Requirement", left: "Medical director + RN/NP/PA", right: "Licensed dentist + hygienists" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: medicalSpaLeftClientEconomics[0].value, right: "$600 – $4,500 per plan" },
  { metric: "Annual Visits Per Client", left: medicalSpaLeftClientEconomics[1].value, right: "1.8 – 2.4" },
  { metric: "Estimated Lifetime Value", left: medicalSpaLeftClientEconomics[2].value, right: "$3,500 – $8,500" },
  { metric: "Client Retention", left: medicalSpaLeftClientEconomics[3].value, right: "5 – 8 year horizon" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Room/Chair", left: medicalSpaLeftServiceMetrics[0].value, right: "$350K – $550K" },
  { metric: "Revenue Per Provider", left: medicalSpaLeftServiceMetrics[1].value, right: "$800K – $1.4M" },
  { metric: "Chair Utilization", left: medicalSpaLeftServiceMetrics[2].value, right: "70 – 85%" },
] as const;

export const marginTiers = {
  left: medicalSpaLeftMarginTiers,
  right: { weak: "14 – 18%", average: "22 – 26%", strong: "28 – 30%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Clinical Labor", left: medicalSpaLeftCostStructure[0].value, right: "28 – 35%" },
  { expense: "Product / Lab COGS", left: medicalSpaLeftCostStructure[1].value, right: "6 – 10%" },
  { expense: "Rent / Facility", left: medicalSpaLeftCostStructure[2].value, right: "5 – 8%" },
  { expense: "Admin + Billing Overhead", left: medicalSpaLeftCostStructure[3].value, right: "12 – 18%" },
] as const;

export const recurringHighlights = {
  left: medicalSpaLeftRecurringHighlight,
  right: { title: "Hygiene Recall + Insurance Panel", value: "55–70% insurance with strong recall cadence" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: medicalSpaLeftRecurringComparison[0].value, right: "65 – 80% recall" },
  { metric: "Cash-Pay Revenue %", left: "85 – 100%", right: "25 – 40%" },
  { metric: "Membership / Package Adoption", left: medicalSpaLeftRecurringComparison[2].value, right: "5 – 15%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Med Spa", earnings: medicalSpaLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Established Multi-Provider Med Spa", earnings: medicalSpaLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Single-Site Dental Owner", earnings: "$220K – $360K", type: "right" },
  { model: "Multi-Site Dental Owner", earnings: "$450K – $750K+", type: "right" },
] as const;

export const leftStartupItems = medicalSpaLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout", percent: 28 },
  { item: "Operatories + Equipment", percent: 33 },
  { item: "Technology", percent: 16 },
  { item: "Working Capital", percent: 23 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: medicalSpaLeftStartupSideBySide.buildout, right: "$150K – $350K" },
  { category: "Equipment / Devices", left: medicalSpaLeftStartupSideBySide.equipment, right: "$250K – $450K" },
  { category: "Technology & Licensing", left: "$20K – $50K", right: "$40K – $80K" },
  { category: "Total Launch Budget", left: medicalSpaLeftStartupSideBySide.total, right: "$515K – $1.0M" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: medicalSpaLeftValuation.sde, right: "3.2× – 4.5×" },
  { metric: "Revenue Multiple", left: medicalSpaLeftValuation.revenue, right: "0.6× – 1.0×" },
  { metric: "Typical Value", left: "$700K – $3.0M", right: "$1.4M – $2.0M" },
] as const;

export const valuationExamples = {
  left: medicalSpaLeftValuation.example,
  right: { revenue: "$1.8M", value: "$1.4M – $2.0M", note: "3.8× SDE on $450K owner benefit" },
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: medicalSpaLeftBreakEven[0].value, right: "$120K – $150K" },
  { metric: "Patients / Treatments Per Day", left: medicalSpaLeftBreakEven[1].value, right: "12 – 20 patients" },
  { metric: "Months to Break-Even", left: medicalSpaLeftBreakEven[2].value, right: "18 – 30 months" },
] as const;

export const scalingLadder = {
  left: [...medicalSpaLeftScalingLadder],
  right: ["Solo Office", "Add Associate", "Second Location", "Regional Dental Group"],
} as const;

export const scalingLeftTitle = "Medical Spa Growth Path";
export const scalingRightTitle = "Dental Practice Growth Path";

export const capitalEfficiency = {
  investment: "$600,000",
  left: {
    revenue: "$800K – $1.4M",
    profit: "$150K – $350K net profit",
    payback: "2 – 4 years",
  },
  right: {
    revenue: "$1.2M – $1.8M",
    profit: "$260K – $430K EBITDA",
    payback: "3 – 5 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Medical Spa If";
export const chooseRightTitle = "Choose a Dental Practice If";

export const chooseLeft = [
  "You want a cash-pay elective model without insurance billing",
  "You prefer aesthetic treatments over clinical dentistry",
  "You can launch with lower capital than a dental office",
  "You want membership-driven recurring aesthetic revenue",
  "You are targeting the growing injectable and laser market",
] as const;

export const chooseRight = [
  "You are a licensed dentist or can recruit one",
  "You want stronger EBITDA margins and predictable recall revenue",
  "You value deep buyer demand from associates and DSOs at exit",
  "You are comfortable with insurance billing and hygiene operations",
  "You plan to scale through associates and operatory capacity",
] as const;

export const calculators = medicalSpaCalculators;

export const relatedComparisons = medicalSpaRelatedComparisons;

export const faqs = [
  {
    question: "Is a medical spa or dental practice more profitable?",
    answer:
      "Dental practices typically run higher EBITDA margins (18–30%) with predictable hygiene recall revenue. Medical spas earn 15–30% net margins on cash-pay aesthetics with lower billing complexity but more marketing-dependent patient acquisition.",
  },
  {
    question: "Which is cheaper to open?",
    answer:
      "A medical spa is generally cheaper to launch ($300K–$800K) than a dental practice ($515K–$1.0M), which requires operatories, digital imaging, lab relationships, and insurance credentialing. Both require significant clinical capital.",
  },
  {
    question: "Which has simpler operations?",
    answer:
      "Medical spas avoid insurance billing, coding, and claims cycles — revenue is collected at point of service. Dental practices manage insurance panels, hygiene recall systems, and lab coordination, but benefit from more predictable patient panels.",
  },
  {
    question: "Which is worth more when you sell?",
    answer:
      "Both command strong multiples. Dental practices sell at 3.2×–4.5× SDE with deep buyer pools. Medical spas trade at 3.0×–5.5× SDE, with premium valuations for membership revenue and multi-provider models.",
  },
  {
    question: "Can a dentist open a medical spa?",
    answer:
      "Yes. Some dentists add med spa services or open standalone aesthetic practices, leveraging clinical licensing and patient trust. However, med spa operations require different staff (injectors, laser techs), devices, and marketing than a dental office.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Medical Spa", "Dental Practice", {
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
    "A medical spa fits if you want cash-pay aesthetics, lower billing complexity, and membership-driven revenue without insurance operations.",
  right:
    "A dental practice aligns with your goals if you are a licensed dentist, want stronger EBITDA margins, and value predictable recall revenue with deep exit demand.",
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
