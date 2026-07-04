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
  slug: "optometry-vs-physical-therapy",
  title: "Optometry Practice vs Physical Therapy Clinic",
  subtitle:
    "Compare revenue, margins, owner compensation, startup costs, patient economics, referral vs retail models, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...optometryHubLabels,
  right: "Physical Therapy Clinic",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Optometry Practice" },
  { factor: "Retail Revenue Upside", winner: "Optometry Practice" },
  { factor: "Referral-Driven Growth", winner: "Physical Therapy" },
  { factor: "Higher Valuation Multiples", winner: "Optometry Practice" },
  { factor: "Multi-Location Scale", winner: "Physical Therapy" },
  { factor: "Lower Insurance Complexity", winner: "Optometry Practice" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: optometryLeftKpis.annualRevenue, right: "$500K – $1.5M" },
  { metric: "Net/EBITDA Margin", left: optometryLeftKpis.netMargin, right: "18 – 28%" },
  { metric: "Owner Compensation", left: optometryLeftKpis.ownerComp, right: "$100K – $220K" },
  { metric: "Monthly Visits", left: optometryLeftKpis.monthlyVisits, right: "650 – 1,200" },
  { metric: "Revenue Per Patient", left: optometryLeftKpis.revenuePerPatient, right: "$900 – $2,400 LTV" },
  { metric: "Startup Cost", left: optometryLeftKpis.startup, right: "$215K – $505K" },
  { metric: "Practice Valuation", left: optometryLeftKpis.valuation, right: "2.5× – 4.0× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 9, right: 7, winner: "Optometry Practice" },
  { label: "Retail Upside", left: 10, right: 2, winner: "Optometry Practice" },
  { label: "Scalability", left: 7, right: 9, winner: "Physical Therapy" },
  { label: "Exit Potential", left: 9, right: 7, winner: "Optometry Practice" },
] as const;

export const leftRevenueSources = optometryLeftRevenueSources;

export const rightRevenueSources = [
  "Initial evaluations",
  "Treatment visit episodes",
  "Sports rehabilitation",
  "Post-surgical rehab",
  "Employer wellness programs",
  "Workers' compensation cases",
] as const;

export const revenueFunnel = {
  left: [...optometryLeftRevenueFunnel],
  right: ["Referral", "Evaluation", "Treatment Plan", "Visits", "Collections"],
} as const;

export const patientFunnel = {
  left: [...optometryLeftPatientFunnel],
  right: ["Referral", "Patient", "Multiple Visits", "Discharge"],
} as const;

export const operatoryFunnel = {
  left: [...optometryLeftOperatoryFunnel],
  right: ["Therapist", "Visits", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Patient Volume", left: "4,500 – 8,500 annual visits", right: "800 – 2,000 active patients" },
  { driver: "Revenue Per Visit", left: "$95 – $165 exam + optical", right: "$90 – $140 per treatment visit" },
  { driver: "Episode Economics", left: "Annual exam + optical refresh", right: "8 – 14 visits per episode" },
  { driver: "Acquisition Channel", left: "Recall, vision plans, local marketing", right: "55 – 75% physician referrals" },
] as const;

export const patientEconomicsMetrics = [
  {
    metric: "Annual Revenue Per Patient",
    left: optometryLeftPatientEconomics[0].value,
    right: "$900 – $2,400",
  },
  {
    metric: "Visits Per Patient",
    left: optometryLeftPatientEconomics[1].value,
    right: "8 – 14 per episode",
  },
  {
    metric: "Estimated Lifetime Value",
    left: optometryLeftPatientEconomics[2].value,
    right: "$1,200 – $3,500",
  },
  { metric: "Retention", left: "72 – 85%", right: "68 – 82% completion" },
] as const;

export const operatoryMetrics = [
  {
    metric: "Revenue Per Exam Room",
    left: optometryLeftOperatoryMetrics[0].value,
    right: "$200K – $380K",
  },
  {
    metric: "Revenue Per Provider",
    left: optometryLeftOperatoryMetrics[1].value,
    right: "$350K – $550K",
  },
  {
    metric: "Revenue Per Employee",
    left: optometryLeftOperatoryMetrics[2].value,
    right: "$90K – $140K",
  },
] as const;

export const marginTiers = {
  left: optometryLeftMarginTiers,
  right: { weak: "14 – 18%", average: "20 – 26%", strong: "27 – 30%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: optometryLeftCostStructure[0].value, right: "28 – 36%" },
  { expense: "Supplies/Retail COGS", left: optometryLeftCostStructure[1].value, right: "3 – 6%" },
  { expense: "Facility Costs", left: optometryLeftCostStructure[2].value, right: "7 – 11%" },
  { expense: "Admin + Marketing", left: optometryLeftCostStructure[3].value, right: "10 – 16%" },
] as const;

export const insuranceHighlights = {
  left: optometryLeftInsuranceHighlight,
  right: { title: "Referral-Driven Acquisition", value: "Physician, employer & hospital referrals" },
} as const;

export const insuranceComparison = [
  {
    metric: "Insurance Revenue %",
    left: optometryLeftInsuranceComparison[0].value,
    right: "55 – 75%",
  },
  {
    metric: "Cash/Retail Revenue %",
    left: optometryLeftInsuranceComparison[1].value,
    right: "15 – 30%",
  },
  {
    metric: "Average Collection Lag",
    left: optometryLeftInsuranceComparison[2].value,
    right: "21 – 45 days",
  },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo Optometry Owner", earnings: optometryLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Multi-Location Optometry Owner", earnings: optometryLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Solo PT Owner", earnings: "$100K – $180K", type: "right" },
  { model: "Multi-Therapist PT Owner", earnings: "$140K – $240K", type: "right" },
] as const;

export const leftStartupItems = optometryLeftStartupItems;

export const rightStartupItems = [
  { item: "Leasehold Improvements", percent: 32 },
  { item: "Rehab Equipment", percent: 28 },
  { item: "EMR + Software", percent: 14 },
  { item: "Working Capital", percent: 26 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: optometryLeftStartupSideBySide.buildout, right: "$80K – $200K" },
  { category: "Equipment", left: optometryLeftStartupSideBySide.equipment, right: "$60K – $150K" },
  { category: "Inventory/Technology", left: optometryLeftStartupSideBySide.inventory, right: "$25K – $55K" },
  { category: "Total Launch Budget", left: optometryLeftStartupSideBySide.total, right: "$215K – $505K" },
] as const;

export const valuationComparison = [
  { metric: "EBITDA Multiple", left: optometryLeftValuation.ebitda, right: "3.0× – 5.0×" },
  { metric: "Revenue Multiple", left: optometryLeftValuation.revenue, right: "0.6× – 1.0×" },
  { metric: "SDE Multiple", left: "4.5× – 6.5×", right: "2.5× – 4.0×" },
] as const;

export const valuationExamples = {
  left: optometryLeftValuation.example,
  right: { revenue: "$850K", value: "$770K – $960K", note: "3.2× SDE on $240K owner benefit" },
} as const;

export const valuationExampleTitle = "Typical Single-Site Exit Outcomes";

export const breakEvenComparison = [
  {
    metric: "Monthly Collections Needed",
    left: optometryLeftBreakEven[0].value,
    right: "$65K – $85K",
  },
  { metric: "Active Patients Needed", left: "1,800 – 2,400", right: "800 – 1,200" },
  {
    metric: "Months to Break-Even",
    left: optometryLeftBreakEven[2].value,
    right: "18 – 28 months",
  },
] as const;

export const scalingLadder = {
  left: [...optometryLeftScalingLadder],
  right: ["Solo Therapist", "Multi-Therapist Clinic", "Regional Group", "Multi-Location Network"],
} as const;

export const scalingLeftTitle = "Optometry Growth Path";
export const scalingRightTitle = "Physical Therapy Growth Path";

export const capitalEfficiency = {
  investment: "$400,000",
  left: optometryLeftCapitalEfficiency,
  right: {
    revenue: "$650K – $950K",
    profit: "$130K – $220K EBITDA",
    payback: "3.5 – 5 years",
  },
} as const;

export const chooseLeftTitle = "Choose Optometry Practice If";
export const chooseRightTitle = "Choose Physical Therapy Clinic If";

export const chooseLeft = [
  "You want higher revenue potential and stronger practice resale multiples",
  "You value healthcare-plus-retail economics with optical dispensary upside",
  "You prefer annual exam recall with predictable patient panels",
  "You want higher owner compensation at maturity ($180K–$280K+)",
  "You are building a practice with strong local brand and retail conversion",
] as const;

export const chooseRight = [
  "You want referral-driven growth through physician and employer relationships",
  "You enjoy rehabilitation care and episodic treatment planning",
  "You want multi-therapist teams and healthcare-system integration",
  "You prefer higher revenue per patient through intensive visit episodes",
  "You plan multi-location expansion with employer contract pathways",
] as const;

export const calculators = optometryCalculators;

export const relatedComparisons = [
  { label: "Optometry vs Dentistry", href: "/comparisons/optometry-vs-dentistry/" },
  { label: "Optometry vs Chiropractic", href: "/comparisons/optometry-vs-chiropractic/" },
  { label: "Physical Therapy vs Chiropractic", href: "/comparisons/physical-therapy-vs-chiropractic-clinic/" },
  { label: "Sports PT vs General PT", href: "/comparisons/sports-pt-vs-general-pt/" },
  { label: "Optometry Practice Hub", href: "/industries/optometry-practice/" },
] as const;

export const faqs = [
  {
    question: "Which generates more annual revenue?",
    answer:
      "Optometry practices typically generate $900K–$1.9M annually versus $500K–$1.5M for PT clinics. Optical dispensary revenue and higher daily exam throughput give optometry a structural top-line advantage at comparable locations.",
  },
  {
    question: "Which has higher revenue per patient?",
    answer:
      "Physical therapy generates $900–$2,400 in lifetime value per patient through 8–14 visit episodes, while optometry averages $380–$520 annually with multi-year retention. PT wins on episodic LTV; optometry wins on recurring annual revenue per active patient.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Optometry practices trade at 4.5×–6.5× EBITDA with strong regional group and PE buyer interest. PT clinics sell at 2.5×–4.0× SDE — solid demand exists, but multiples are lower than top-quartile optometry exits.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "PT clinics require $215K–$505K versus $350K–$750K for optometry. PT has lower optical inventory needs but similar buildout and equipment costs. Optometry's optical inventory adds capital but drives margin upside.",
  },
  {
    question: "How do growth models differ?",
    answer:
      "PT scales through physician referrals, employer contracts, and multi-therapist clinic teams. Optometry scales through exam volume, optical capture rate, associate ODs, and dispensary expansion — less dependent on external referral pipelines.",
  },
  {
    question: "What does $400K produce in each model?",
    answer:
      "A $400K optometry investment supports $1.0M–$1.6M revenue and $200K–$380K net profit. The same capital in PT typically supports $650K–$950K revenue and $130K–$220K EBITDA over 3.5–5 years.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Optometry Practice", "Physical Therapy Clinic", {
    clinicalGeneral: 2,
    clinicalSpecialty: 2,
    revenueModerate: 1,
    revenueHigh: 2,
    revenueVeryHigh: 2,
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
    "Optometry practice is the better fit — higher revenue ceiling, retail attach economics, stronger owner pay, and premium valuation multiples.",
  right:
    "Physical therapy clinic aligns with your goals — referral-driven growth, episodic patient LTV, multi-therapist teams, and enterprise scaling through employer contracts.",
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
