import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "dental-practice-vs-medical-practice",
  title: "Dental Practice vs Medical Practice",
  subtitle:
    "Compare collections, payer mix, overhead, owner pay, startup capital, and valuation ranges to decide which outpatient model best fits your goals.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Dental Practice",
  right: "Medical Practice",
  breadcrumbHub: {
    label: "Dental Practice",
    href: "/industries/healthcare/dental-practice/",
  },
  exploreHub: {
    label: "Explore Dental Practice Hub →",
    href: "/industries/healthcare/dental-practice/",
  },
} as const;

export const decisionSnapshot = [
  { factor: "Lower Startup Cost", winner: "Dental Practice" },
  { factor: "Higher Insurance Complexity Tolerance", winner: "Medical Practice" },
  { factor: "Stronger EBITDA Margin", winner: "Dental Practice" },
  { factor: "Broader Chronic-Care Demand", winner: "Medical Practice" },
  { factor: "Better Cash-Pay Upside", winner: "Dental Practice" },
  { factor: "Easier Billing Operations", winner: "Dental Practice" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$1.2M – $2.6M", right: "$800K – $2.5M" },
  { metric: "EBITDA Margin", left: "18 – 30%", right: "12 – 20%" },
  { metric: "Owner Compensation", left: "$220K – $360K", right: "$200K – $380K" },
  { metric: "Monthly Patient Visits", left: "120 – 180", right: "450 – 900" },
  { metric: "Revenue Per Patient", left: "$900 – $1,100/yr", right: "$350 – $700/yr" },
  { metric: "Startup Cost", left: "$515K – $1.0M", right: "$700K – $1.4M" },
  { metric: "Practice Valuation", left: "3.2× – 4.5× SDE", right: "2.5× – 3.5× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Margin Strength", left: 9, right: 6, winner: "Dental Practice" },
  { label: "Demand Resilience", left: 8, right: 9, winner: "Medical Practice" },
  { label: "Operational Simplicity", left: 8, right: 5, winner: "Dental Practice" },
  { label: "Payer Mix Flexibility", left: 7, right: 5, winner: "Dental Practice" },
] as const;

export const leftRevenueSources = [
  "Exams and hygiene recall",
  "Restorative procedures",
  "Crown and bridge",
  "Implants and oral surgery",
  "Cosmetic add-ons",
  "Emergency dentistry",
] as const;

export const rightRevenueSources = [
  "Evaluation and management visits",
  "Chronic-care management",
  "Minor in-office procedures",
  "Diagnostic testing",
  "Vaccinations and preventive services",
  "Care coordination reimbursements",
] as const;

export const revenueFunnel = {
  left: ["Lead/Referral", "Exam + Diagnosis", "Treatment Plan", "Collections"],
  right: ["Panel Assignment", "Office Visit", "Coding + Claims", "Collections"],
} as const;

export const patientFunnel = {
  left: ["New Patient", "Comprehensive Exam", "Accepted Treatment", "Recall Retention"],
  right: ["New Registration", "Initial Visit", "Follow-up Care", "Annual Retention"],
} as const;

export const operatoryFunnel = {
  left: ["Chair Hours", "Procedures", "Production", "Collected Revenue"],
  right: ["Exam Rooms", "Visits", "Coded Claims", "Net Collections"],
} as const;

export const revenueDrivers = [
  { driver: "Patient Volume", left: "Moderate, higher production/visit", right: "High, lower production/visit" },
  { driver: "Case Value", left: "$600 – $4,500 per treatment plan", right: "$90 – $450 per encounter" },
  { driver: "Payer Mix", left: "55 – 70% insurance, strong cash-pay add-ons", right: "70 – 90% insurance/government" },
  { driver: "Schedule Density", left: "4-day clinical weeks common", right: "5-day, high-throughput templates" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Annual Revenue Per Active Patient", left: "$900 – $1,100", right: "$350 – $700" },
  { metric: "Annual Visits Per Patient", left: "1.8 – 2.4", right: "2.5 – 4.0" },
  { metric: "Estimated Lifetime Value", left: "$3,500 – $8,500", right: "$1,800 – $4,500" },
  { metric: "Retention Horizon", left: "5 – 8 years", right: "4 – 7 years" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Chair/Room", left: "$350K – $550K", right: "$180K – $320K" },
  { metric: "Revenue Per Provider", left: "$800K – $1.4M", right: "$550K – $1.1M" },
  { metric: "Revenue Per Staff Member", left: "$120K – $180K", right: "$90K – $140K" },
] as const;

export const marginTiers = {
  left: { weak: "14 – 18%", average: "22 – 26%", strong: "28 – 30%" },
  right: { weak: "8 – 12%", average: "14 – 17%", strong: "18 – 20%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "28 – 35%", right: "24 – 32%" },
  { expense: "Admin + Billing Payroll", left: "8 – 12%", right: "14 – 22%" },
  { expense: "Supplies + Lab/Medical", left: "6 – 10%", right: "4 – 8%" },
  { expense: "Facility + Compliance", left: "5 – 8%", right: "6 – 10%" },
] as const;

export const insuranceHighlights = {
  left: { title: "Higher Cash-Pay Opportunity", value: "25 – 40% self-pay and elective mix" },
  right: { title: "Higher Insurance Dependence", value: "70 – 90% payer-driven revenue" },
} as const;

export const insuranceComparison = [
  { metric: "Insurance Revenue %", left: "55 – 70%", right: "70 – 90%" },
  { metric: "Cash-Pay Revenue %", left: "25 – 40%", right: "5 – 20%" },
  { metric: "Average Collection Lag", left: "18 – 32 days", right: "30 – 55 days" },
] as const;

export const ownerIncomeComparison = [
  { model: "Single-Site Dental Owner", earnings: "$220K – $360K", type: "left" },
  { model: "Single-Site Medical Owner", earnings: "$200K – $380K", type: "right" },
  { model: "Multi-Site Dental Owner", earnings: "$450K – $750K+", type: "left" },
  { model: "Multi-Site Medical Group Partner", earnings: "$420K – $700K+", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Buildout", percent: 28 },
  { item: "Operatories + Equipment", percent: 33 },
  { item: "Technology", percent: 16 },
  { item: "Working Capital", percent: 23 },
] as const;

export const rightStartupItems = [
  { item: "Buildout", percent: 24 },
  { item: "Medical Equipment", percent: 21 },
  { item: "EHR + RCM Setup", percent: 20 },
  { item: "Working Capital", percent: 35 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: "$150K – $350K", right: "$180K – $450K" },
  { category: "Equipment", left: "$250K – $450K", right: "$180K – $380K" },
  { category: "Technology", left: "$40K – $80K", right: "$90K – $180K" },
  { category: "Working Capital", left: "$75K – $150K", right: "$180K – $400K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: "3.2× – 4.5×", right: "2.5× – 3.5×" },
  { metric: "EBITDA Multiple", left: "4.0× – 6.5×", right: "3.5× – 5.0×" },
  { metric: "Revenue Multiple", left: "0.6× – 1.0×", right: "0.4× – 0.8×" },
] as const;

export const valuationExamples = {
  left: { revenue: "$1.8M", value: "$1.4M – $2.0M", note: "3.8× SDE on $450K owner benefit" },
  right: { revenue: "$1.8M", value: "$950K – $1.4M", note: "3.0× SDE on $320K owner benefit" },
} as const;

export const valuationExampleTitle = "$1.8M Practice Revenue → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Collections Needed", left: "$120K – $150K", right: "$110K – $145K" },
  { metric: "Active Patients Needed", left: "900 – 1,100", right: "2,200 – 3,500" },
  { metric: "Months to Break-Even", left: "18 – 30 months", right: "24 – 36 months" },
] as const;

export const scalingLadder = {
  left: ["Solo Office", "Add Associate", "Second Location", "Regional Dental Group"],
  right: ["Single Clinic", "Provider Expansion", "MSO Support Layer", "Multi-Clinic Network"],
} as const;

export const scalingLeftTitle = "Dental Scaling Path";
export const scalingRightTitle = "Medical Scaling Path";

export const capitalEfficiency = {
  investment: "$500,000",
  left: {
    revenue: "$1.2M – $1.8M",
    profit: "$260K – $430K EBITDA",
    payback: "3 – 5 years",
  },
  right: {
    revenue: "$900K – $1.4M",
    profit: "$110K – $240K EBITDA",
    payback: "4.5 – 7 years",
  },
} as const;

export const chooseLeftTitle = "Choose Dental Practice If";
export const chooseRightTitle = "Choose Medical Practice If";

export const chooseLeft = [
  "You want stronger margin potential and simpler coding requirements",
  "You value cash-pay and elective upsell opportunities",
  "You prefer lower startup and faster owner cash flow",
  "You want better resale multiples for owner-operated practices",
  "You plan to scale through associates and hygiene capacity",
] as const;

export const chooseRight = [
  "You prefer broad primary-care demand and recurring chronic visits",
  "You are comfortable managing heavier insurance administration",
  "You want larger patient panels with predictable visit cadence",
  "You can build robust billing and care-coordination operations",
  "You seek scale through provider teams and payor contracting",
] as const;

export const calculators = [
  { label: "Dental Practice Valuation Calculator", href: "/calculators/dental-practice-valuation/" },
  { label: "Dental Startup Cost Calculator", href: "/calculators/dental-practice-startup-cost/" },
  { label: "Dental EBITDA Margin Calculator", href: "/calculators/dental-practice-ebitda/" },
  { label: "Revenue Per Patient Calculator", href: "/calculators/dental-practice-revenue-per-patient/" },
  { label: "Break-Even Runway Calculator", href: "/calculators/dental-practice-break-even/" },
] as const;

export const relatedComparisons = [
  { label: "Dental Practice vs Orthodontic Practice", href: "/comparisons/dental-practice-vs-orthodontic-practice/" },
  { label: "Dental Practice vs Veterinary Clinic", href: "/comparisons/dental-practice-vs-veterinary-clinic/" },
  { label: "Solo vs Group Dental Practice", href: "/comparisons/solo-vs-group-dental-practice/" },
  { label: "Private Practice vs DSO", href: "/comparisons/private-practice-vs-dso/" },
  { label: "Dental Practice Hub", href: "/industries/healthcare/dental-practice/" },
] as const;

export const faqs = [
  {
    question: "Is a dental practice more profitable than a medical practice?",
    answer:
      "In 2026 benchmarks, dental practices usually run higher EBITDA margins (18–30%) than outpatient medical practices (12–20%). Medical groups can match top-line revenue at scale, but owner take-home is often pressured by payer mix and administrative overhead.",
  },
  {
    question: "Why are dental valuations typically higher?",
    answer:
      "Dental offices often command 3.2×–4.5× SDE because collections are less dependent on government reimbursement, coding is simpler, and buyer demand remains deep from both associates and DSOs.",
  },
  {
    question: "Which model has more insurance complexity?",
    answer:
      "Medical practices usually operate with higher payer complexity, prior-auth burden, and slower claims cycles. Dental still depends on insurance, but many procedures retain clearer fee schedules and faster collection cycles.",
  },
  {
    question: "Which requires more working capital at launch?",
    answer:
      "Medical clinics generally require more working capital due to lower cash-pay mix, longer AR cycles, and higher administrative staffing from day one. Dental launches can still be capital intensive but often recover cash flow sooner.",
  },
  {
    question: "How does owner compensation compare at one location?",
    answer:
      "A typical single-site dental owner earns around $220K–$360K. Comparable outpatient medical owners can earn $200K–$380K, with wider variance depending on specialty mix, payer contracts, and staffing model.",
  },
  {
    question: "What does a $500K investment look like in each model?",
    answer:
      "Around $500K in dental can support $1.2M–$1.8M revenue and $260K–$430K EBITDA. In outpatient medical, the same capital more commonly supports $900K–$1.4M revenue and $110K–$240K EBITDA with longer payback timelines.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Dental Practice", "Medical Practice", {
    clinicalGeneral: 2,
    clinicalSpecialty: 2,
    revenueModerate: 2,
    revenueHigh: 2,
    revenueVeryHigh: 1,
    insuranceLow: 3,
    insuranceMedium: 2,
    insuranceHigh: 1,
    growthLifestyle: 2,
    growthRegional: 2,
    growthMulti: 1,
  });
}

export const decisionToolCopy = {
  left:
    "Dental practice fits your profile with stronger margins, better cash-pay flexibility, and simpler operations for owner-led growth.",
  right:
    "Medical practice aligns with your goals if you want broad patient demand, high-throughput care delivery, and are comfortable with payer-heavy operations.",
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
