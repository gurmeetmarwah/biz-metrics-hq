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
  slug: "optometry-vs-veterinary",
  title: "Optometry Practice vs Veterinary Clinic",
  subtitle:
    "Compare revenue ranges, margin profiles, retail vs consumer-pay models, owner compensation, startup costs, patient/client economics, and valuation outcomes.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...optometryHubLabels,
  right: "Veterinary Clinic",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Owner Compensation", winner: "Optometry Practice" },
  { factor: "Lower Insurance Dependence", winner: "Veterinary Clinic" },
  { factor: "Retail Revenue Mix", winner: "Optometry Practice" },
  { factor: "Consumer-Pay Collections", winner: "Veterinary Clinic" },
  { factor: "Higher Valuation Multiples", winner: "Optometry Practice" },
  { factor: "Recurring Wellness Frequency", winner: "Veterinary Clinic" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: optometryLeftKpis.annualRevenue, right: "$600K – $1.8M" },
  { metric: "Net/EBITDA Margin", left: optometryLeftKpis.netMargin, right: "15 – 22%" },
  { metric: "Owner Compensation", left: optometryLeftKpis.ownerComp, right: "$120K – $250K" },
  { metric: "Monthly Visits", left: optometryLeftKpis.monthlyVisits, right: "1,200 – 2,800" },
  { metric: "Revenue Per Patient/Client", left: optometryLeftKpis.revenuePerPatient, right: "$350 – $900/yr" },
  { metric: "Startup Cost", left: optometryLeftKpis.startup, right: "$350K – $900K" },
  { metric: "Practice Valuation", left: optometryLeftKpis.valuation, right: "2.8× – 4.0× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Owner Earnings", left: 9, right: 6, winner: "Optometry Practice" },
  { label: "Payer Flexibility", left: 7, right: 9, winner: "Veterinary Clinic" },
  { label: "Retail Upside", left: 10, right: 5, winner: "Optometry Practice" },
  { label: "Exit Potential", left: 9, right: 7, winner: "Optometry Practice" },
] as const;

export const leftRevenueSources = optometryLeftRevenueSources;

export const rightRevenueSources = [
  "Preventive wellness exams",
  "Vaccinations",
  "Diagnostics and imaging",
  "Surgical procedures",
  "Chronic condition management",
  "Pharmacy and retail products",
] as const;

export const revenueFunnel = {
  left: [...optometryLeftRevenueFunnel],
  right: ["Pet Owner Inquiry", "Consult + Diagnostics", "Treatment Plan", "Payment"],
} as const;

export const patientFunnel = {
  left: [...optometryLeftPatientFunnel],
  right: ["New Pet Client", "Wellness Visit", "Procedure Acceptance", "Annual Care Plan"],
} as const;

export const operatoryFunnel = {
  left: [...optometryLeftOperatoryFunnel],
  right: ["Exam Rooms", "Case Mix", "Service Delivery", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Visit Value", left: "$95 – $165 exam + optical", right: "$95 – $240 typical encounter" },
  { driver: "Retail/Product Revenue", left: "50 – 65% optical retail mix", right: "20 – 30% pharmacy/retail" },
  { driver: "Insurance Impact", left: "45 – 65% vision/medical mix", right: "5 – 25% direct insurance" },
  { driver: "Preventive Cadence", left: "Annual exam recall", right: "Annual or semiannual wellness" },
] as const;

export const patientEconomicsMetrics = [
  {
    metric: "Annual Revenue Per Active Patient/Client",
    left: optometryLeftPatientEconomics[0].value,
    right: "$350 – $900",
  },
  {
    metric: "Annual Visits Per Patient/Client",
    left: optometryLeftPatientEconomics[1].value,
    right: "1.2 – 2.1",
  },
  {
    metric: "Estimated Lifetime Value",
    left: optometryLeftPatientEconomics[2].value,
    right: "$1,800 – $5,000",
  },
  { metric: "Retention Horizon", left: "5 – 8 years", right: "4 – 10 years" },
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
    right: "$450K – $750K",
  },
  {
    metric: "Revenue Per Employee",
    left: optometryLeftOperatoryMetrics[2].value,
    right: "$85K – $140K",
  },
] as const;

export const marginTiers = {
  left: optometryLeftMarginTiers,
  right: { weak: "10 – 14%", average: "17 – 20%", strong: "21 – 24%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: optometryLeftCostStructure[0].value, right: "30 – 38%" },
  { expense: "Supplies/Pharmacy COGS", left: optometryLeftCostStructure[1].value, right: "8 – 14%" },
  { expense: "Facility Costs", left: optometryLeftCostStructure[2].value, right: "6 – 10%" },
  { expense: "Administrative Overhead", left: optometryLeftCostStructure[3].value, right: "9 – 14%" },
] as const;

export const insuranceHighlights = {
  left: optometryLeftInsuranceHighlight,
  right: { title: "Consumer-Pay Dominant", value: "70 – 95% owner-paid at point of care" },
} as const;

export const insuranceComparison = [
  {
    metric: "Insurance Revenue %",
    left: optometryLeftInsuranceComparison[0].value,
    right: "5 – 25%",
  },
  {
    metric: "Cash/Client-Pay Revenue %",
    left: optometryLeftInsuranceComparison[1].value,
    right: "70 – 95%",
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
  { model: "Single-Site Vet Owner", earnings: "$120K – $250K", type: "right" },
  { model: "Multi-Site Vet Owner", earnings: "$300K – $550K+", type: "right" },
] as const;

export const leftStartupItems = optometryLeftStartupItems;

export const rightStartupItems = [
  { item: "Facility Buildout", percent: 30 },
  { item: "Medical/Surgical Equipment", percent: 28 },
  { item: "Diagnostic + Imaging", percent: 14 },
  { item: "Working Capital", percent: 28 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: optometryLeftStartupSideBySide.buildout, right: "$120K – $300K" },
  { category: "Equipment", left: optometryLeftStartupSideBySide.equipment, right: "$140K – $320K" },
  { category: "Inventory/Technology", left: optometryLeftStartupSideBySide.inventory, right: "$30K – $90K" },
  { category: "Total Launch Budget", left: optometryLeftStartupSideBySide.total, right: "$350K – $900K" },
] as const;

export const valuationComparison = [
  { metric: "EBITDA Multiple", left: optometryLeftValuation.ebitda, right: "3.5× – 5.5×" },
  { metric: "Revenue Multiple", left: optometryLeftValuation.revenue, right: "0.7× – 1.1×" },
  { metric: "SDE Multiple", left: "4.5× – 6.5×", right: "2.8× – 4.0×" },
] as const;

export const valuationExamples = {
  left: optometryLeftValuation.example,
  right: { revenue: "$1.2M", value: "$750K – $1.1M", note: "3.3× SDE on $230K owner benefit" },
} as const;

export const valuationExampleTitle = "Typical Single-Site Exit Outcomes";

export const breakEvenComparison = [
  {
    metric: "Monthly Collections Needed",
    left: optometryLeftBreakEven[0].value,
    right: "$70K – $110K",
  },
  { metric: "Active Patients/Clients Needed", left: "1,800 – 2,400", right: "1,400 – 2,400 pets" },
  {
    metric: "Months to Break-Even",
    left: optometryLeftBreakEven[2].value,
    right: "16 – 28 months",
  },
] as const;

export const scalingLadder = {
  left: [...optometryLeftScalingLadder],
  right: ["Single Clinic", "Add Doctor Team", "Multi-Clinic Cluster", "Regional Vet Network"],
} as const;

export const scalingLeftTitle = "Optometry Growth Path";
export const scalingRightTitle = "Veterinary Growth Path";

export const capitalEfficiency = {
  investment: "$400,000",
  left: optometryLeftCapitalEfficiency,
  right: {
    revenue: "$850K – $1.3M",
    profit: "$130K – $250K EBITDA",
    payback: "3.5 – 5.5 years",
  },
} as const;

export const chooseLeftTitle = "Choose Optometry Practice If";
export const chooseRightTitle = "Choose Veterinary Clinic If";

export const chooseLeft = [
  "You want higher owner compensation ($180K–$280K+) at a single site",
  "You value healthcare-plus-retail economics with optical dispensary upside",
  "You prefer stronger EBITDA multiples and optometry buyer demand",
  "You want annual exam recall with eyewear and contact lens revenue",
  "You are comfortable balancing vision plans with retail cash collections",
] as const;

export const chooseRight = [
  "You prefer direct consumer-pay with minimal payer friction",
  "You want strong local loyalty through recurring pet wellness care",
  "You are passionate about animal health and companion-animal medicine",
  "You want point-of-service collections with 0–7 day cash cycles",
  "You plan to build value through multi-clinic operational scale",
] as const;

export const calculators = optometryCalculators;

export const relatedComparisons = [
  { label: "Optometry vs Dentistry", href: "/comparisons/optometry-vs-dentistry/" },
  { label: "Optometry vs Dermatology", href: "/comparisons/optometry-vs-dermatology/" },
  { label: "Dental Practice vs Veterinary Clinic", href: "/comparisons/dental-practice-vs-veterinary-clinic/" },
  { label: "Veterinary Clinic vs Medical Practice", href: "/comparisons/veterinary-clinic-vs-medical-practice/" },
  { label: "Optometry Practice Hub", href: "/industries/optometry-practice/" },
] as const;

export const faqs = [
  {
    question: "Which model has higher owner compensation?",
    answer:
      "Owner optometrists typically earn $180K–$280K at a single location versus $120K–$250K for owner-operated veterinary clinics. Optometry's optical retail margin and higher EBITDA multiples support stronger owner economics at comparable scale.",
  },
  {
    question: "Does veterinary care have lower insurance risk?",
    answer:
      "Yes. Most vet revenue is direct client-pay at checkout (70–95%), so clinics face less reimbursement policy risk than optometry practices with 45–65% vision and medical insurance mix.",
  },
  {
    question: "How do retail economics compare?",
    answer:
      "Optometry has a structural retail advantage — eyewear and contacts represent 50–65% of revenue at profitable practices. Veterinary retail (pharmacy, food, products) is typically 20–30% of revenue, with service delivery driving most income.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Optometry practices trade at 4.5×–6.5× EBITDA. Veterinary clinics sell at 2.8×–4.0× SDE — viable exits exist, especially in dense markets, but buyer pools and multiples are generally lower than top-quartile optometry.",
  },
  {
    question: "Which has simpler collections?",
    answer:
      "Veterinary collections are overwhelmingly at point of care with 0–7 day lag. Optometry balances vision plan reimbursements, medical billing, and retail POS — more complex but offset by higher owner pay when optical capture is strong.",
  },
  {
    question: "What does $400K produce in each model?",
    answer:
      "A $400K optometry investment supports $1.0M–$1.6M revenue and $200K–$380K net profit. The same capital in veterinary care typically supports $850K–$1.3M revenue and $130K–$250K EBITDA.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Optometry Practice", "Veterinary Clinic", {
    clinicalGeneral: 2,
    clinicalSpecialty: 2,
    revenueModerate: 2,
    revenueHigh: 2,
    revenueVeryHigh: 2,
    insuranceLow: 1,
    insuranceMedium: 2,
    insuranceHigh: 2,
    growthLifestyle: 1,
    growthRegional: 2,
    growthMulti: 2,
  });
}

export const decisionToolCopy = {
  left:
    "Optometry practice is the better fit — higher owner compensation, retail attach economics, premium EBITDA multiples, and strong private-practice buyer demand.",
  right:
    "Veterinary clinic aligns with your priorities — consumer-pay revenue, lower payer friction, recurring pet wellness loyalty, and point-of-care collections.",
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
