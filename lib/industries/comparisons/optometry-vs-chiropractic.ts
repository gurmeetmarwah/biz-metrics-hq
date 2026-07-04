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
  slug: "optometry-vs-chiropractic",
  title: "Optometry Practice vs Chiropractic Clinic",
  subtitle:
    "Compare revenue, margins, owner pay, startup costs, patient economics, insurance vs cash-pay models, and valuation benchmarks across two outpatient care models.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...optometryHubLabels,
  right: "Chiropractic Clinic",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Optometry Practice" },
  { factor: "Higher Profit Margins", winner: "Chiropractic Clinic" },
  { factor: "Lower Startup Cost", winner: "Chiropractic Clinic" },
  { factor: "Retail Revenue Upside", winner: "Optometry Practice" },
  { factor: "Cash-Pay Simplicity", winner: "Chiropractic Clinic" },
  { factor: "Higher Valuation Multiples", winner: "Optometry Practice" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: optometryLeftKpis.annualRevenue, right: "$300K – $800K" },
  { metric: "Net/EBITDA Margin", left: optometryLeftKpis.netMargin, right: "25 – 35%" },
  { metric: "Owner Compensation", left: optometryLeftKpis.ownerComp, right: "$80K – $200K" },
  { metric: "Monthly Visits", left: optometryLeftKpis.monthlyVisits, right: "800 – 1,400" },
  { metric: "Revenue Per Patient", left: optometryLeftKpis.revenuePerPatient, right: "$600 – $1,800/yr" },
  { metric: "Startup Cost", left: optometryLeftKpis.startup, right: "$150K – $350K" },
  { metric: "Practice Valuation", left: optometryLeftKpis.valuation, right: "2.0× – 3.5× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 9, right: 6, winner: "Optometry Practice" },
  { label: "Profit Margin", left: 7, right: 10, winner: "Chiropractic Clinic" },
  { label: "Capital Efficiency", left: 6, right: 9, winner: "Chiropractic Clinic" },
  { label: "Exit Potential", left: 9, right: 6, winner: "Optometry Practice" },
] as const;

export const leftRevenueSources = optometryLeftRevenueSources;

export const rightRevenueSources = [
  "Spinal adjustments",
  "Treatment packages",
  "Wellness membership plans",
  "Maintenance visit programs",
  "Cash-pay ancillary services",
  "Nutritional supplements",
] as const;

export const revenueFunnel = {
  left: [...optometryLeftRevenueFunnel],
  right: ["Consultation", "Adjustment Plan", "Recurring Visits", "Collections"],
} as const;

export const patientFunnel = {
  left: [...optometryLeftPatientFunnel],
  right: ["New Patient", "Treatment Plan", "Recurring Care", "Maintenance Visits"],
} as const;

export const operatoryFunnel = {
  left: [...optometryLeftOperatoryFunnel],
  right: ["Chiropractor", "Adjustments", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Visit Frequency", left: "1.4 – 2.1 visits/yr per patient", right: "12 – 24+ visits/yr per patient" },
  { driver: "Revenue Per Visit", left: "$95 – $165 exam + optical attach", right: "$45 – $85 per adjustment" },
  { driver: "Cash-Pay Mix", left: "35 – 55% retail/cash revenue", right: "60 – 85% cash-pay revenue" },
  { driver: "Recurring Revenue", left: "Annual exam + optical refresh", right: "Monthly wellness visit cadence" },
] as const;

export const patientEconomicsMetrics = [
  {
    metric: "Annual Revenue Per Patient",
    left: optometryLeftPatientEconomics[0].value,
    right: "$600 – $1,800",
  },
  {
    metric: "Annual Visits Per Patient",
    left: optometryLeftPatientEconomics[1].value,
    right: "12 – 24+",
  },
  {
    metric: "Estimated Lifetime Value",
    left: optometryLeftPatientEconomics[2].value,
    right: "$1,000 – $2,800",
  },
  { metric: "Retention Rate", left: "72 – 85%", right: "55 – 75%" },
] as const;

export const operatoryMetrics = [
  {
    metric: "Revenue Per Exam Room",
    left: optometryLeftOperatoryMetrics[0].value,
    right: "$180K – $320K",
  },
  {
    metric: "Revenue Per Provider",
    left: optometryLeftOperatoryMetrics[1].value,
    right: "$250K – $400K",
  },
  {
    metric: "Revenue Per Employee",
    left: optometryLeftOperatoryMetrics[2].value,
    right: "$85K – $140K",
  },
] as const;

export const marginTiers = {
  left: optometryLeftMarginTiers,
  right: { weak: "18 – 22%", average: "26 – 32%", strong: "33 – 38%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: optometryLeftCostStructure[0].value, right: "22 – 30%" },
  { expense: "Supplies/Retail COGS", left: optometryLeftCostStructure[1].value, right: "3 – 6%" },
  { expense: "Facility Costs", left: optometryLeftCostStructure[2].value, right: "5 – 9%" },
  { expense: "Marketing + Admin", left: optometryLeftCostStructure[3].value, right: "12 – 18%" },
] as const;

export const insuranceHighlights = {
  left: optometryLeftInsuranceHighlight,
  right: { title: "Cash-Pay Dominant", value: "60 – 85% direct consumer payment" },
} as const;

export const insuranceComparison = [
  {
    metric: "Insurance Revenue %",
    left: optometryLeftInsuranceComparison[0].value,
    right: "15 – 40%",
  },
  {
    metric: "Cash/Retail Revenue %",
    left: optometryLeftInsuranceComparison[1].value,
    right: "60 – 85%",
  },
  {
    metric: "Average Collection Lag",
    left: optometryLeftInsuranceComparison[2].value,
    right: "0 – 7 days",
  },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo Optometry Owner", earnings: optometryLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Multi-Location Optometry Owner", earnings: optometryLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Solo Chiropractor", earnings: "$80K – $160K", type: "right" },
  { model: "Multi-Location Chiropractic Owner", earnings: "$180K – $350K+", type: "right" },
] as const;

export const leftStartupItems = optometryLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout", percent: 28 },
  { item: "Adjustment Tables", percent: 22 },
  { item: "Imaging Equipment", percent: 18 },
  { item: "Working Capital", percent: 32 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: optometryLeftStartupSideBySide.buildout, right: "$50K – $120K" },
  { category: "Equipment", left: optometryLeftStartupSideBySide.equipment, right: "$35K – $90K" },
  { category: "Inventory/Technology", left: optometryLeftStartupSideBySide.inventory, right: "$15K – $40K" },
  { category: "Total Launch Budget", left: optometryLeftStartupSideBySide.total, right: "$150K – $350K" },
] as const;

export const valuationComparison = [
  { metric: "EBITDA Multiple", left: optometryLeftValuation.ebitda, right: "2.5× – 4.5×" },
  { metric: "Revenue Multiple", left: optometryLeftValuation.revenue, right: "0.5× – 0.9×" },
  { metric: "SDE Multiple", left: "4.5× – 6.5×", right: "2.0× – 3.5×" },
] as const;

export const valuationExamples = {
  left: optometryLeftValuation.example,
  right: { revenue: "$500K", value: "$480K – $720K", note: "2.8× SDE on $200K owner benefit" },
} as const;

export const valuationExampleTitle = "Typical Single-Site Exit Outcomes";

export const breakEvenComparison = [
  {
    metric: "Monthly Collections Needed",
    left: optometryLeftBreakEven[0].value,
    right: "$35K – $55K",
  },
  { metric: "Active Patients Needed", left: "1,800 – 2,400", right: "500 – 900" },
  {
    metric: "Months to Break-Even",
    left: optometryLeftBreakEven[2].value,
    right: "12 – 20 months",
  },
] as const;

export const scalingLadder = {
  left: [...optometryLeftScalingLadder],
  right: ["Solo Practice", "Associate Model", "Second Location", "Regional Brand"],
} as const;

export const scalingLeftTitle = "Optometry Growth Path";
export const scalingRightTitle = "Chiropractic Growth Path";

export const capitalEfficiency = {
  investment: "$400,000",
  left: optometryLeftCapitalEfficiency,
  right: {
    revenue: "$450K – $650K",
    profit: "$115K – $195K EBITDA",
    payback: "2.5 – 4 years",
  },
} as const;

export const chooseLeftTitle = "Choose Optometry Practice If";
export const chooseRightTitle = "Choose Chiropractic Clinic If";

export const chooseLeft = [
  "You want higher revenue potential and stronger practice resale multiples",
  "You value healthcare-plus-retail economics with optical dispensary upside",
  "You prefer annual exam recall with eyewear and contact lens revenue",
  "You are building toward multi-location optometry group scale",
  "You want higher owner compensation at maturity ($180K–$280K+)",
] as const;

export const chooseRight = [
  "You prefer cash-pay models with minimal payer friction",
  "You want lower startup costs and faster break-even timelines",
  "You value lifestyle flexibility with simpler daily operations",
  "You want recurring wellness visits and membership plan revenue",
  "You prefer direct consumer marketing over insurance billing complexity",
] as const;

export const calculators = optometryCalculators;

export const relatedComparisons = [
  { label: "Optometry vs Dentistry", href: "/comparisons/optometry-vs-dentistry/" },
  { label: "Optometry vs Physical Therapy", href: "/comparisons/optometry-vs-physical-therapy/" },
  { label: "Physical Therapy vs Chiropractic", href: "/comparisons/physical-therapy-vs-chiropractic-clinic/" },
  { label: "Cash-Pay vs Insurance Chiropractic", href: "/comparisons/cash-pay-vs-insurance-chiropractic/" },
  { label: "Optometry Practice Hub", href: "/industries/optometry-practice/" },
] as const;

export const faqs = [
  {
    question: "Which generates more annual revenue?",
    answer:
      "Optometry practices typically generate $900K–$1.9M annually versus $300K–$800K for chiropractic clinics. Optometry's optical dispensary and contact lens revenue drive a significantly higher revenue ceiling despite similar patient visit counts.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Chiropractic clinics typically achieve 25–35% net margins due to cash-pay dominance and lean staffing. Optometry practices operate at 18–28% net margin — strong when optical capture exceeds 60%, but inventory and insurance reimbursement add complexity.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Chiropractic startups require $150K–$350K versus $350K–$750K for optometry. Lower equipment costs, smaller buildouts, and no optical inventory reduce chiropractic capital requirements substantially.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Optometry practices trade at 4.5×–6.5× EBITDA with strong buyer demand from regional groups and private equity. Chiropractic clinics sell at 2.0×–3.5× SDE — viable exits exist, but the buyer pool is narrower.",
  },
  {
    question: "Which model has simpler billing?",
    answer:
      "Chiropractic is overwhelmingly cash-pay (60–85%), with collections at the point of service. Optometry balances vision plan reimbursements, medical billing, and retail POS — more complex but with higher revenue per patient when optical attach is strong.",
  },
  {
    question: "What does $400K produce in each model?",
    answer:
      "A $400K optometry investment supports $1.0M–$1.6M revenue and $200K–$380K net profit over 3–5 years. The same capital in chiropractic often supports $450K–$650K revenue and $115K–$195K EBITDA with faster 2.5–4 year payback.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Optometry Practice", "Chiropractic Clinic", {
    clinicalGeneral: 2,
    clinicalSpecialty: 1,
    revenueModerate: 1,
    revenueHigh: 2,
    revenueVeryHigh: 3,
    insuranceLow: 1,
    insuranceMedium: 2,
    insuranceHigh: 2,
    growthLifestyle: 1,
    growthRegional: 2,
    growthMulti: 3,
  });
}

export const decisionToolCopy = {
  left:
    "Optometry practice is the better fit — higher revenue ceiling, retail attach economics, stronger owner pay at scale, and premium valuation multiples.",
  right:
    "Chiropractic clinic aligns with your priorities — cash-pay revenue, higher margins, lower startup costs, lifestyle flexibility, and faster break-even.",
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
