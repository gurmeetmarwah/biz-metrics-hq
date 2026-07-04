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
  slug: "optometry-vs-dermatology",
  title: "Optometry Practice vs Dermatology Practice",
  subtitle:
    "Compare revenue ranges, margin profiles, cosmetic vs retail economics, owner compensation, startup costs, patient panels, and valuation outcomes across two specialty outpatient models.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...optometryHubLabels,
  right: "Dermatology Practice",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Revenue Ceiling", winner: "Dermatology Practice" },
  { factor: "Lower Startup Cost", winner: "Optometry Practice" },
  { factor: "Stronger Owner Compensation", winner: "Dermatology Practice" },
  { factor: "Retail Revenue Mix", winner: "Optometry Practice" },
  { factor: "Cash-Pay Cosmetic Upside", winner: "Dermatology Practice" },
  { factor: "Faster Path to Ownership", winner: "Optometry Practice" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: optometryLeftKpis.annualRevenue, right: "$1.4M – $3.2M" },
  { metric: "Net/EBITDA Margin", left: optometryLeftKpis.netMargin, right: "24 – 38%" },
  { metric: "Owner Compensation", left: optometryLeftKpis.ownerComp, right: "$300K – $520K" },
  { metric: "Monthly Visits", left: optometryLeftKpis.monthlyVisits, right: "700 – 1,300" },
  { metric: "Revenue Per Patient", left: optometryLeftKpis.revenuePerPatient, right: "$550 – $950/yr" },
  { metric: "Startup Cost", left: optometryLeftKpis.startup, right: "$480K – $1.1M" },
  { metric: "Practice Valuation", left: optometryLeftKpis.valuation, right: "4.0× – 6.0× EBITDA" },
] as const;

export const winnerScorecard = [
  { label: "Top-Line Potential", left: 7, right: 10, winner: "Dermatology Practice" },
  { label: "Capital Barrier", left: 8, right: 5, winner: "Optometry Practice" },
  { label: "Retail Economics", left: 9, right: 6, winner: "Optometry Practice" },
  { label: "Owner Earnings", left: 7, right: 10, winner: "Dermatology Practice" },
] as const;

export const leftRevenueSources = optometryLeftRevenueSources;

export const rightRevenueSources = [
  "Medical dermatology visits",
  "Mohs micrographic surgery",
  "Cosmetic injectables",
  "Laser and energy treatments",
  "Aesthetic retail products",
  "Pathology and biopsies",
] as const;

export const revenueFunnel = {
  left: [...optometryLeftRevenueFunnel],
  right: ["Patient Inquiry", "Consult + Diagnosis", "Treatment Plan", "Procedure/Revenue"],
} as const;

export const patientFunnel = {
  left: [...optometryLeftPatientFunnel],
  right: ["New Patient", "Clinical Evaluation", "Procedure Acceptance", "Annual Retention"],
} as const;

export const operatoryFunnel = {
  left: [...optometryLeftOperatoryFunnel],
  right: ["Exam Rooms", "Procedure Mix", "Provider Production", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Visit Value", left: "$95 – $165 exam + optical", right: "$180 – $450 medical visit" },
  { driver: "Procedure Ticket", left: "$350 – $650 optical sale", right: "$400 – $2,500 cosmetic procedure" },
  { driver: "Cash-Pay Mix", left: "35 – 55% retail/cash", right: "30 – 55% cosmetic cash-pay" },
  { driver: "Patient Cadence", left: "Annual exam recall", right: "Annual skin checks + cosmetic refresh" },
] as const;

export const patientEconomicsMetrics = [
  {
    metric: "Annual Revenue Per Patient",
    left: optometryLeftPatientEconomics[0].value,
    right: "$550 – $950",
  },
  {
    metric: "Annual Visits Per Patient",
    left: optometryLeftPatientEconomics[1].value,
    right: "1.5 – 2.8",
  },
  {
    metric: "Estimated Lifetime Value",
    left: optometryLeftPatientEconomics[2].value,
    right: "$2,800 – $7,500",
  },
  { metric: "Retention Horizon", left: "5 – 8 years", right: "5 – 10 years" },
] as const;

export const operatoryMetrics = [
  {
    metric: "Revenue Per Exam Room",
    left: optometryLeftOperatoryMetrics[0].value,
    right: "$420K – $680K",
  },
  {
    metric: "Revenue Per Provider",
    left: optometryLeftOperatoryMetrics[1].value,
    right: "$900K – $1.6M",
  },
  {
    metric: "Revenue Per Employee",
    left: optometryLeftOperatoryMetrics[2].value,
    right: "$140K – $220K",
  },
] as const;

export const marginTiers = {
  left: optometryLeftMarginTiers,
  right: { weak: "18 – 22%", average: "26 – 32%", strong: "34 – 38%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: optometryLeftCostStructure[0].value, right: "24 – 32%" },
  { expense: "Supplies/Retail COGS", left: optometryLeftCostStructure[1].value, right: "8 – 14%" },
  { expense: "Facility Costs", left: optometryLeftCostStructure[2].value, right: "5 – 9%" },
  { expense: "Admin + Billing", left: optometryLeftCostStructure[3].value, right: "10 – 16%" },
] as const;

export const insuranceHighlights = {
  left: optometryLeftInsuranceHighlight,
  right: { title: "Medical + Cosmetic Hybrid", value: "45 – 70% insurance with 30 – 55% cash-pay cosmetic" },
} as const;

export const insuranceComparison = [
  {
    metric: "Insurance Revenue %",
    left: optometryLeftInsuranceComparison[0].value,
    right: "45 – 70%",
  },
  {
    metric: "Cash/Cosmetic Revenue %",
    left: optometryLeftInsuranceComparison[1].value,
    right: "30 – 55%",
  },
  {
    metric: "Average Collection Lag",
    left: optometryLeftInsuranceComparison[2].value,
    right: "21 – 42 days",
  },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo Optometry Owner", earnings: optometryLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Multi-Location Optometry Owner", earnings: optometryLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Solo Dermatology Owner", earnings: "$300K – $450K", type: "right" },
  { model: "Multi-Provider Derm Group", earnings: "$450K – $700K+", type: "right" },
] as const;

export const leftStartupItems = optometryLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout", percent: 26 },
  { item: "Laser + Surgical Equipment", percent: 32 },
  { item: "EMR + RCM Setup", percent: 16 },
  { item: "Working Capital", percent: 26 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: optometryLeftStartupSideBySide.buildout, right: "$140K – $320K" },
  { category: "Equipment", left: optometryLeftStartupSideBySide.equipment, right: "$180K – $420K" },
  { category: "Inventory/Technology", left: optometryLeftStartupSideBySide.inventory, right: "$80K – $200K" },
  { category: "Total Launch Budget", left: optometryLeftStartupSideBySide.total, right: "$480K – $1.1M" },
] as const;

export const valuationComparison = [
  { metric: "EBITDA Multiple", left: optometryLeftValuation.ebitda, right: "4.0× – 6.0×" },
  { metric: "Revenue Multiple", left: optometryLeftValuation.revenue, right: "0.9× – 1.5×" },
  { metric: "SDE Multiple", left: "4.5× – 6.5×", right: "3.5× – 5.0×" },
] as const;

export const valuationExamples = {
  left: optometryLeftValuation.example,
  right: { revenue: "$2.1M", value: "$2.0M – $2.9M", note: "4.8× EBITDA on $480K" },
} as const;

export const valuationExampleTitle = "Typical Single-Site Exit Outcomes";

export const breakEvenComparison = [
  {
    metric: "Monthly Collections Needed",
    left: optometryLeftBreakEven[0].value,
    right: "$130K – $175K",
  },
  { metric: "Active Patients Needed", left: "1,800 – 2,400", right: "2,500 – 4,000" },
  {
    metric: "Months to Break-Even",
    left: optometryLeftBreakEven[2].value,
    right: "20 – 32 months",
  },
] as const;

export const scalingLadder = {
  left: [...optometryLeftScalingLadder],
  right: ["Solo Practice", "Add Associate MD/PA", "Cosmetic Expansion", "Multi-Location Derm Group"],
} as const;

export const scalingLeftTitle = "Optometry Growth Path";
export const scalingRightTitle = "Dermatology Growth Path";

export const capitalEfficiency = {
  investment: "$400,000",
  left: optometryLeftCapitalEfficiency,
  right: {
    revenue: "$1.4M – $2.2M",
    profit: "$340K – $620K EBITDA",
    payback: "3 – 5 years",
  },
} as const;

export const chooseLeftTitle = "Choose Optometry Practice If";
export const chooseRightTitle = "Choose Dermatology Practice If";

export const chooseLeft = [
  "You want lower startup capital and a faster path to practice ownership",
  "You prefer healthcare-plus-retail economics with optical dispensary revenue",
  "You value annual exam recall with eyewear and contact lens attach",
  "You want strong EBITDA multiples without MD-level training requirements",
  "You are building a practice with manageable insurance and retail billing complexity",
] as const;

export const chooseRight = [
  "You want the highest owner compensation potential ($300K–$520K+)",
  "You prefer medical specialty care with cosmetic cash-pay procedure upside",
  "You are comfortable with higher capital requirements for lasers and surgical equipment",
  "You want stronger per-provider revenue ($900K–$1.6M) and procedure ticket sizes",
  "You plan to build value through Mohs, injectables, and aesthetic service expansion",
] as const;

export const calculators = optometryCalculators;

export const relatedComparisons = [
  { label: "Optometry vs Dentistry", href: "/comparisons/optometry-vs-dentistry/" },
  { label: "Optometry vs Veterinary Clinic", href: "/comparisons/optometry-vs-veterinary/" },
  { label: "Dental Practice vs Medical Practice", href: "/comparisons/dental-practice-vs-medical-practice/" },
  { label: "Optometry vs Physical Therapy", href: "/comparisons/optometry-vs-physical-therapy/" },
  { label: "Optometry Practice Hub", href: "/industries/optometry-practice/" },
] as const;

export const faqs = [
  {
    question: "Which model has higher owner compensation?",
    answer:
      "Dermatology practice owners typically earn $300K–$520K at a single site versus $180K–$280K for solo optometrists. Cosmetic procedure revenue, Mohs surgery, and higher per-provider production drive dermatology's owner pay advantage.",
  },
  {
    question: "Is optometry cheaper to start than dermatology?",
    answer:
      "Yes. Optometry launches run $350K–$750K versus $480K–$1.1M for dermatology. Laser equipment, surgical suites, and higher buildout standards for medical dermatology add significant capital requirements beyond optometry's diagnostic and optical inventory needs.",
  },
  {
    question: "How do margins compare?",
    answer:
      "Dermatology practices often sustain 24–38% EBITDA with strong cosmetic cash-pay mix. Optometry operates at 18–28% net margin — competitive when optical capture exceeds 60%, but generally below top-quartile dermatology operators.",
  },
  {
    question: "Which has better retail economics?",
    answer:
      "Optometry has a structural retail advantage — eyewear and contact lenses represent 50–65% of revenue at profitable practices. Dermatology's retail is primarily aesthetic products and skincare, typically 8–15% of revenue versus procedure-driven income.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Both specialties command premium multiples. Optometry trades at 4.5×–6.5× EBITDA; dermatology at 4.0×–6.0× EBITDA. Strong cosmetic revenue and Mohs capabilities can push dermatology exits toward the upper band.",
  },
  {
    question: "What does $400K produce in each model?",
    answer:
      "A $400K optometry investment supports $1.0M–$1.6M revenue and $200K–$380K net profit. The same capital in dermatology is typically insufficient for a full launch — dermatology generally requires $480K+ for equipment-heavy de novos.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Optometry Practice", "Dermatology Practice", {
    clinicalGeneral: 2,
    clinicalSpecialty: 1,
    revenueModerate: 2,
    revenueHigh: 1,
    revenueVeryHigh: 1,
    insuranceLow: 1,
    insuranceMedium: 2,
    insuranceHigh: 2,
    growthLifestyle: 2,
    growthRegional: 1,
    growthMulti: 2,
  });
}

export const decisionToolCopy = {
  left:
    "Optometry practice is the better fit — lower startup capital, healthcare-plus-retail economics, faster ownership path, and strong EBITDA multiples without MD training requirements.",
  right:
    "Dermatology practice aligns with your goals if you want the highest owner compensation, cosmetic procedure upside, and medical specialty revenue per provider.",
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
