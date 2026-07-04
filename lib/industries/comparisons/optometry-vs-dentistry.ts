import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import {
  optometryCalculators,
  optometryHubLabels,
  optometryLeftBreakEven,
  optometryLeftCapitalEfficiency,
  optometryLeftCostStructure,
  optometryLeftInsuranceComparison,
  optometryLeftInsuranceHighlight,
  optometryLeftKpis,
  optometryLeftMarginTiers,
  optometryLeftOperatoryFunnel,
  optometryLeftOperatoryMetrics,
  optometryLeftOwnerIncome,
  optometryLeftPatientEconomics,
  optometryLeftPatientFunnel,
  optometryLeftRevenueFunnel,
  optometryLeftRevenueSources,
  optometryLeftScalingLadder,
  optometryLeftStartupItems,
  optometryLeftStartupSideBySide,
  optometryLeftValuation,
} from "./optometry-comparison-shared";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "optometry-vs-dentistry",
  title: "Optometry Practice vs Dental Practice",
  subtitle:
    "Compare revenue ranges, retail vs procedure economics, owner compensation, startup costs, patient retention, and valuation outcomes across two outpatient healthcare models.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...optometryHubLabels,
  right: "Dental Practice",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Revenue Ceiling", winner: "Dental Practice" },
  { factor: "Stronger Retail Revenue Mix", winner: "Optometry Practice" },
  { factor: "Higher Owner Compensation", winner: "Dental Practice" },
  { factor: "Lower Startup Cost", winner: "Optometry Practice" },
  { factor: "Higher Valuation Multiples", winner: "Optometry Practice" },
  { factor: "Larger Procedure Ticket Size", winner: "Dental Practice" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: optometryLeftKpis.annualRevenue, right: "$1.2M – $2.6M" },
  { metric: "Net/EBITDA Margin", left: optometryLeftKpis.netMargin, right: "18 – 30%" },
  { metric: "Owner Compensation", left: optometryLeftKpis.ownerComp, right: "$220K – $360K" },
  { metric: "Monthly Visits", left: optometryLeftKpis.monthlyVisits, right: "900 – 1,400" },
  { metric: "Revenue Per Patient", left: optometryLeftKpis.revenuePerPatient, right: "$900 – $1,100/yr" },
  { metric: "Startup Cost", left: optometryLeftKpis.startup, right: "$515K – $1.0M" },
  { metric: "Practice Valuation", left: optometryLeftKpis.valuation, right: "3.2× – 4.5× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Top-Line Potential", left: 7, right: 9, winner: "Dental Practice" },
  { label: "Retail Upside", left: 10, right: 5, winner: "Optometry Practice" },
  { label: "Capital Barrier", left: 8, right: 6, winner: "Optometry Practice" },
  { label: "Exit Demand", left: 9, right: 8, winner: "Optometry Practice" },
] as const;

export const leftRevenueSources = optometryLeftRevenueSources;

export const rightRevenueSources = [
  "Hygiene and preventive recall",
  "Restorative treatment",
  "Prosthodontics",
  "Implants and oral surgery",
  "Cosmetic dentistry",
  "Emergency visits",
] as const;

export const revenueFunnel = {
  left: [...optometryLeftRevenueFunnel],
  right: ["Lead/Referral", "Exam + X-rays", "Accepted Plan", "Collections"],
} as const;

export const patientFunnel = {
  left: [...optometryLeftPatientFunnel],
  right: ["New Patient", "Comprehensive Exam", "Treatment Start", "Recall Retention"],
} as const;

export const operatoryFunnel = {
  left: [...optometryLeftOperatoryFunnel],
  right: ["Chair Capacity", "Procedure Mix", "Production", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Visit Value", left: "$95 – $165 typical exam + optical", right: "$180 – $320 typical encounter" },
  { driver: "Retail/Procedure Ticket", left: "$350 – $650 optical sale", right: "$1,500 – $6,000 major treatment" },
  { driver: "Insurance Impact", left: "45 – 65% vision/medical mix", right: "55 – 70% insurance reimbursement" },
  { driver: "Preventive Recurrence", left: "Annual exam + optical refresh", right: "Semiannual hygiene cadence" },
] as const;

export const patientEconomicsMetrics = [
  {
    metric: "Annual Revenue Per Patient",
    left: optometryLeftPatientEconomics[0].value,
    right: "$900 – $1,100",
  },
  {
    metric: "Annual Visits Per Patient",
    left: optometryLeftPatientEconomics[1].value,
    right: "1.8 – 2.4",
  },
  {
    metric: "Estimated Lifetime Value",
    left: optometryLeftPatientEconomics[2].value,
    right: "$3,500 – $8,500",
  },
  { metric: "Retention Horizon", left: "5 – 8 years", right: "5 – 8 years" },
] as const;

export const operatoryMetrics = [
  {
    metric: "Revenue Per Chair/Room",
    left: optometryLeftOperatoryMetrics[0].value,
    right: "$350K – $550K",
  },
  {
    metric: "Revenue Per Provider",
    left: optometryLeftOperatoryMetrics[1].value,
    right: "$800K – $1.4M",
  },
  {
    metric: "Revenue Per Staff Member",
    left: optometryLeftOperatoryMetrics[2].value,
    right: "$120K – $180K",
  },
] as const;

export const marginTiers = {
  left: optometryLeftMarginTiers,
  right: { weak: "14 – 18%", average: "22 – 26%", strong: "28 – 30%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: optometryLeftCostStructure[0].value, right: "28 – 35%" },
  { expense: "Supplies + Lab/Retail COGS", left: optometryLeftCostStructure[1].value, right: "6 – 10%" },
  { expense: "Facility Costs", left: optometryLeftCostStructure[2].value, right: "5 – 8%" },
  { expense: "Administrative Overhead", left: optometryLeftCostStructure[3].value, right: "8 – 12%" },
] as const;

export const insuranceHighlights = {
  left: optometryLeftInsuranceHighlight,
  right: { title: "Insurance-Influenced Collections", value: "55 – 70% insurance reimbursement mix" },
} as const;

export const insuranceComparison = [
  {
    metric: "Insurance Revenue %",
    left: optometryLeftInsuranceComparison[0].value,
    right: "55 – 70%",
  },
  {
    metric: "Cash/Retail Revenue %",
    left: optometryLeftInsuranceComparison[1].value,
    right: "25 – 40%",
  },
  {
    metric: "Average Collection Lag",
    left: optometryLeftInsuranceComparison[2].value,
    right: "18 – 32 days",
  },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo Optometry Owner", earnings: optometryLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Multi-Location Optometry Owner", earnings: optometryLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Single-Site Dental Owner", earnings: "$220K – $360K", type: "right" },
  { model: "Multi-Site Dental Owner", earnings: "$450K – $750K+", type: "right" },
] as const;

export const leftStartupItems = optometryLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout", percent: 28 },
  { item: "Operatories + Equipment", percent: 33 },
  { item: "Technology", percent: 16 },
  { item: "Working Capital", percent: 23 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: optometryLeftStartupSideBySide.buildout, right: "$150K – $350K" },
  { category: "Equipment", left: optometryLeftStartupSideBySide.equipment, right: "$250K – $450K" },
  { category: "Inventory/Technology", left: optometryLeftStartupSideBySide.inventory, right: "$40K – $80K" },
  { category: "Total Launch Budget", left: optometryLeftStartupSideBySide.total, right: "$515K – $1.0M" },
] as const;

export const valuationComparison = [
  { metric: "EBITDA Multiple", left: optometryLeftValuation.ebitda, right: "4.0× – 6.5×" },
  { metric: "Revenue Multiple", left: optometryLeftValuation.revenue, right: "0.6× – 1.0×" },
  { metric: "SDE Multiple", left: "4.5× – 6.5×", right: "3.2× – 4.5×" },
] as const;

export const valuationExamples = {
  left: optometryLeftValuation.example,
  right: { revenue: "$1.8M", value: "$1.4M – $2.0M", note: "3.8× SDE on $450K owner benefit" },
} as const;

export const valuationExampleTitle = "Typical Single-Site Exit Outcomes";

export const breakEvenComparison = [
  {
    metric: "Monthly Collections Needed",
    left: optometryLeftBreakEven[0].value,
    right: "$120K – $150K",
  },
  { metric: "Active Patients Needed", left: "1,800 – 2,400", right: "900 – 1,100" },
  {
    metric: "Months to Break-Even",
    left: optometryLeftBreakEven[2].value,
    right: "18 – 30 months",
  },
] as const;

export const scalingLadder = {
  left: [...optometryLeftScalingLadder],
  right: ["Solo Office", "Add Associate", "Second Site", "Regional Dental Platform"],
} as const;

export const scalingLeftTitle = "Optometry Growth Path";
export const scalingRightTitle = "Dental Growth Path";

export const capitalEfficiency = {
  investment: "$400,000",
  left: optometryLeftCapitalEfficiency,
  right: {
    revenue: "$1.2M – $1.8M",
    profit: "$260K – $430K EBITDA",
    payback: "3 – 5 years",
  },
} as const;

export const chooseLeftTitle = "Choose Optometry Practice If";
export const chooseRightTitle = "Choose Dental Practice If";

export const chooseLeft = [
  "You want a healthcare-plus-retail model with strong optical attach economics",
  "You prefer lower startup capital and faster dispensary-driven margin upside",
  "You value higher EBITDA multiples and strong private-practice buyer demand",
  "You want annual exam recall with eyewear and contact lens replenishment revenue",
  "You are comfortable balancing vision plans with cash-pay retail sales",
] as const;

export const chooseRight = [
  "You want higher per-site revenue and larger restorative procedure tickets",
  "You prefer procedure-driven production over retail inventory management",
  "You are targeting stronger single-site owner cash flow ($220K–$360K)",
  "You plan to scale through associates, hygiene capacity, and specialty add-ons",
  "You want a deep, established dental acquisition market with standardized SDE multiples",
] as const;

export const calculators = optometryCalculators;

export const relatedComparisons = [
  { label: "Optometry vs Chiropractic", href: "/comparisons/optometry-vs-chiropractic/" },
  { label: "Optometry vs Physical Therapy", href: "/comparisons/optometry-vs-physical-therapy/" },
  { label: "Dental Practice vs Veterinary Clinic", href: "/comparisons/dental-practice-vs-veterinary-clinic/" },
  { label: "Solo vs Group Dental Practice", href: "/comparisons/solo-vs-group-dental-practice/" },
  { label: "Optometry Practice Hub", href: "/industries/optometry-practice/" },
] as const;

export const faqs = [
  {
    question: "Which model generates more revenue per patient?",
    answer:
      "Dental practices typically generate $900–$1,100 per active patient annually through hygiene recall and restorative treatment, while optometry practices average $380–$520 with strong upside when optical capture exceeds 60%. Dental wins on per-patient revenue; optometry wins on retail attach frequency.",
  },
  {
    question: "Is optometry cheaper to start than a dental practice?",
    answer:
      "Yes. Most optometry launches run $350K–$750K versus $515K–$1.0M for a full-scope dental office. Lower operatory buildout, fewer chairs, and less surgical equipment reduce optometry capital requirements, though optical inventory is a meaningful line item.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Optometry practices often trade at 4.5×–6.5× EBITDA due to retail margin quality and recurring patient panels. Dental practices typically sell at 3.2×–4.5× SDE — strong demand, but multiples are slightly lower than top-quartile optometry exits with optical revenue.",
  },
  {
    question: "Which has better owner compensation?",
    answer:
      "Owner dentists at single sites typically earn $220K–$360K versus $180K–$280K for solo optometrists. Dental leads on owner pay at comparable scale, but optometry owners with strong dispensary economics and multi-location groups can close the gap.",
  },
  {
    question: "How does insurance mix differ?",
    answer:
      "Both models depend partially on insurance, but optometry offsets thin exam reimbursements with 35–55% cash/retail revenue from eyewear and contacts. Dental relies more on insurance collections (55–70%) supplemented by elective cosmetic and implant cash-pay cases.",
  },
  {
    question: "What does $400K produce in each model?",
    answer:
      "A $400K optometry investment often supports $1.0M–$1.6M revenue and $200K–$380K net profit. The same capital in dental typically supports $1.2M–$1.8M revenue and $260K–$430K EBITDA, with a longer ramp to full chair utilization.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Optometry Practice", "Dental Practice", {
    clinicalGeneral: 2,
    clinicalSpecialty: 2,
    revenueModerate: 2,
    revenueHigh: 1,
    revenueVeryHigh: 1,
    insuranceLow: 1,
    insuranceMedium: 2,
    insuranceHigh: 2,
    growthLifestyle: 2,
    growthRegional: 2,
    growthMulti: 1,
  });
}

export const decisionToolCopy = {
  left:
    "Optometry practice is the better fit — lower startup capital, healthcare-plus-retail economics, strong optical attach upside, and premium EBITDA multiples.",
  right:
    "Dental practice aligns with your goals if you want higher per-site revenue, larger procedure tickets, and stronger single-site owner compensation.",
} as const;

export const healthcareDualComparisonData: HealthcareDualComparisonData = {
  comparisonMeta,
  comparisonLabels,
  decisionSnapshot,
  kpiComparison,
  winnerScorecard,
  leftRevenueSources,
  rightRevenueSources,
  revenueFunnel,
  revenueDrivers,
  patientFunnel,
  patientEconomicsMetrics,
  operatoryFunnel,
  operatoryMetrics,
  marginTiers,
  costStructureComparison,
  insuranceHighlights,
  insuranceComparison,
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
