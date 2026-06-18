import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "veterinary-clinic-vs-medical-practice",
  title: "Veterinary Clinic vs Medical Practice",
  subtitle:
    "Compare revenue, profitability, payer mix, owner compensation, startup costs, and valuation outcomes across companion-animal and physician-led care models.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Veterinary Clinic",
  right: "Medical Practice",
  breadcrumbHub: {
    label: "Veterinary Clinic",
    href: "/industries/healthcare/veterinary-clinic/",
  },
  exploreHub: {
    label: "Explore Veterinary Clinic Hub →",
    href: "/industries/healthcare/veterinary-clinic/",
  },
} as const;

export const decisionSnapshot = [
  { factor: "Higher Revenue Ceiling", winner: "Medical Practice" },
  { factor: "Lower Insurance Dependence", winner: "Veterinary Clinic" },
  { factor: "Faster Collections Cycle", winner: "Veterinary Clinic" },
  { factor: "Broader Specialty Upside", winner: "Medical Practice" },
  { factor: "Lower Capital Intensity", winner: "Veterinary Clinic" },
  { factor: "System-Scale Exit Optionality", winner: "Medical Practice" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$600K – $1.8M", right: "$800K – $2.5M" },
  { metric: "EBITDA Margin", left: "15 – 22%", right: "12 – 20%" },
  { metric: "Owner Compensation", left: "$120K – $250K", right: "$180K – $420K" },
  { metric: "Monthly Visits", left: "300 – 700", right: "1,200 – 2,800" },
  { metric: "Revenue Per Patient", left: "$350 – $900/yr", right: "$300 – $850/yr" },
  { metric: "Startup Cost", left: "$350K – $900K", right: "$450K – $1.4M" },
  { metric: "Practice Valuation", left: "2.8× – 4.0× SDE", right: "2.5× – 4.2× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Payer Flexibility", left: 9, right: 4, winner: "Veterinary Clinic" },
  { label: "Revenue Capacity", left: 6, right: 9, winner: "Medical Practice" },
  { label: "Operating Margin Stability", left: 8, right: 6, winner: "Veterinary Clinic" },
  { label: "Scaling Infrastructure", left: 6, right: 8, winner: "Medical Practice" },
] as const;

export const leftRevenueSources = [
  "Preventive wellness exams",
  "Vaccinations and preventive bundles",
  "Diagnostics and imaging",
  "Surgical procedures",
  "Chronic condition management",
  "Pharmacy and retail products",
] as const;

export const rightRevenueSources = [
  "Office consultations",
  "Diagnostic testing and imaging",
  "Procedure and treatment services",
  "Chronic disease follow-up",
  "Ancillary care coordination",
  "Value-based and quality incentives",
] as const;

export const revenueFunnel = {
  left: ["Pet Owner Inquiry", "Exam + Diagnostics", "Treatment Plan", "Point-of-Care Payment"],
  right: ["Patient Intake", "Evaluation + Coding", "Claim Submission", "Insurance + Patient Collections"],
} as const;

export const patientFunnel = {
  left: ["New Pet Client", "Wellness Baseline", "Procedure Acceptance", "Annual Plan Retention"],
  right: ["New Patient", "Primary Visit", "Care Plan Enrollment", "Follow-Up Adherence"],
} as const;

export const operatoryFunnel = {
  left: ["Exam Room Capacity", "Case Mix", "Service Delivery", "Collected Revenue"],
  right: ["Provider Panel Capacity", "Visit Complexity", "Claims Yield", "Net Collections"],
} as const;

export const revenueDrivers = [
  { driver: "Visit Value", left: "$95 – $240 typical encounter", right: "$110 – $280 typical encounter" },
  { driver: "Procedure Ticket Size", left: "$300 – $2,500 major treatment", right: "$450 – $4,000 major treatment" },
  { driver: "Insurance Impact", left: "Low direct insurance exposure", right: "High reimbursement and coding exposure" },
  { driver: "Preventive Recurrence", left: "Annual to semiannual wellness cadence", right: "Quarterly to annual chronic-care cadence" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Annual Revenue Per Active Patient", left: "$350 – $900", right: "$300 – $850" },
  { metric: "Annual Visits Per Patient", left: "1.2 – 2.1", right: "2.0 – 4.5" },
  { metric: "Estimated Lifetime Value", left: "$1,800 – $5,000", right: "$2,000 – $7,500" },
  { metric: "Retention Horizon", left: "4 – 10 years", right: "5 – 12 years" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Chair/Room", left: "$200K – $380K", right: "$220K – $500K" },
  { metric: "Revenue Per Provider", left: "$500K – $900K", right: "$650K – $1.4M" },
  { metric: "Revenue Per Staff Member", left: "$85K – $140K", right: "$95K – $160K" },
] as const;

export const marginTiers = {
  left: { weak: "10 – 14%", average: "17 – 20%", strong: "21 – 24%" },
  right: { weak: "8 – 12%", average: "14 – 18%", strong: "19 – 22%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "30 – 38%", right: "34 – 45%" },
  { expense: "Supplies + Lab/Pharmacy", left: "8 – 14%", right: "6 – 12%" },
  { expense: "Facility Costs", left: "6 – 10%", right: "6 – 11%" },
  { expense: "Administrative Overhead", left: "9 – 14%", right: "11 – 18%" },
] as const;

export const insuranceHighlights = {
  left: { title: "Consumer-Pay Dominant", value: "70 – 95% owner-paid at point of care" },
  right: { title: "Insurance-Heavy Revenue Cycle", value: "60 – 85% reimbursement-driven collections" },
} as const;

export const insuranceComparison = [
  { metric: "Insurance Revenue %", left: "5 – 25%", right: "60 – 85%" },
  { metric: "Cash/Client-Pay Revenue %", left: "70 – 95%", right: "10 – 35%" },
  { metric: "Average Collection Lag", left: "0 – 7 days", right: "25 – 55 days" },
] as const;

export const ownerIncomeComparison = [
  { model: "Single-Site Vet Owner", earnings: "$120K – $250K", type: "left" },
  { model: "Independent Physician Owner", earnings: "$180K – $420K", type: "right" },
  { model: "Multi-Site Vet Owner", earnings: "$300K – $550K+", type: "left" },
  { model: "Multi-Clinic Medical Owner", earnings: "$500K – $1.1M+", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Facility Buildout", percent: 30 },
  { item: "Medical/Surgical Equipment", percent: 28 },
  { item: "Diagnostic + Imaging", percent: 14 },
  { item: "Working Capital", percent: 28 },
] as const;

export const rightStartupItems = [
  { item: "Facility Buildout", percent: 34 },
  { item: "Clinical Equipment", percent: 26 },
  { item: "Technology + EHR", percent: 16 },
  { item: "Working Capital", percent: 24 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: "$120K – $300K", right: "$160K – $450K" },
  { category: "Equipment", left: "$140K – $320K", right: "$150K – $400K" },
  { category: "Technology", left: "$30K – $90K", right: "$45K – $140K" },
  { category: "Working Capital", left: "$90K – $220K", right: "$110K – $300K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: "2.8× – 4.0×", right: "2.5× – 4.2×" },
  { metric: "EBITDA Multiple", left: "4.0× – 6.0×", right: "4.0× – 7.0×" },
  { metric: "Revenue Multiple", left: "0.5× – 0.9×", right: "0.4× – 1.1×" },
] as const;

export const valuationExamples = {
  left: { revenue: "$1.1M", value: "$760K – $1.1M", note: "3.4× SDE on $225K owner benefit" },
  right: { revenue: "$1.6M", value: "$1.0M – $1.7M", note: "3.2× SDE on $430K owner benefit" },
} as const;

export const valuationExampleTitle = "Typical Independent Practice Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Collections Needed", left: "$70K – $110K", right: "$110K – $170K" },
  { metric: "Active Patients Needed", left: "1,400 – 2,400 pets", right: "2,200 – 4,200 patients" },
  { metric: "Months to Break-Even", left: "16 – 28 months", right: "20 – 34 months" },
] as const;

export const scalingLadder = {
  left: ["Single Clinic", "Add Doctor Team", "Multi-Clinic Cluster", "Regional Vet Network"],
  right: ["Solo Medical Office", "Add APP + Services", "Group Practice", "Multi-Site Medical Platform"],
} as const;

export const scalingLeftTitle = "Veterinary Growth Path";
export const scalingRightTitle = "Medical Growth Path";

export const capitalEfficiency = {
  investment: "$500,000",
  left: {
    revenue: "$850K – $1.3M",
    profit: "$130K – $250K EBITDA",
    payback: "3.5 – 5.5 years",
  },
  right: {
    revenue: "$900K – $1.5M",
    profit: "$120K – $260K EBITDA",
    payback: "4 – 6 years",
  },
} as const;

export const chooseLeftTitle = "Choose Veterinary Clinic If";
export const chooseRightTitle = "Choose Medical Practice If";

export const chooseLeft = [
  "You want a consumer-pay model with minimal payer friction",
  "You value predictable cash collections at point of care",
  "You prefer recurring wellness demand with strong local loyalty",
  "You want lower initial capital intensity than many medical builds",
  "You plan to scale through standardized clinic operations",
] as const;

export const chooseRight = [
  "You want a higher top-line ceiling and broader service complexity",
  "You are comfortable managing reimbursement and coding workflows",
  "You value larger provider-panel leverage and referral pathways",
  "You are building toward specialty integration or value-based contracts",
  "You plan to scale with payer contracting and multi-site systems",
] as const;

export const calculators = [
  { label: "Veterinary Clinic Valuation Calculator", href: "/calculators/veterinary-clinic-valuation/" },
  { label: "Veterinary Startup Cost Calculator", href: "/calculators/veterinary-clinic-startup-cost/" },
  { label: "Veterinary EBITDA Margin Calculator", href: "/calculators/veterinary-clinic-ebitda/" },
  { label: "Revenue Per Client Calculator", href: "/calculators/veterinary-clinic-revenue-per-client/" },
  { label: "Break-Even Runway Calculator", href: "/calculators/veterinary-clinic-break-even/" },
] as const;

export const relatedComparisons = [
  { label: "General Vet vs Emergency Vet", href: "/comparisons/general-vet-vs-emergency-vet/" },
  { label: "Dental Practice vs Veterinary Clinic", href: "/comparisons/dental-practice-vs-veterinary-clinic/" },
  { label: "Dental Practice vs Medical Practice", href: "/comparisons/dental-practice-vs-medical-practice/" },
  { label: "Veterinary Clinic Hub", href: "/industries/healthcare/veterinary-clinic/" },
] as const;

export const faqs = [
  {
    question: "Which model typically has the higher revenue ceiling in 2026?",
    answer:
      "Medical practices generally show a higher ceiling ($800K–$2.5M) than independent veterinary clinics ($600K–$1.8M), especially when payer contracting and specialty services are well managed.",
  },
  {
    question: "Why do many veterinary clinics collect cash faster?",
    answer:
      "Veterinary care is primarily consumer-pay, so payment is commonly collected at checkout. Medical practices often rely on claims and reimbursement cycles that extend collections timing.",
  },
  {
    question: "Are veterinary margins actually stronger despite lower revenue?",
    answer:
      "They can be. Well-run veterinary clinics often operate around 15–22% EBITDA versus 12–20% for many independent medical practices, largely due to lower reimbursement pressure and cleaner cash flow.",
  },
  {
    question: "Is medical practice ownership still attractive with insurance friction?",
    answer:
      "Yes, particularly for owners who build strong billing discipline and service mix. Medical can deliver larger absolute owner income at scale, even with higher administrative burden.",
  },
  {
    question: "How different are startup requirements?",
    answer:
      "Veterinary startups commonly range $350K–$900K, while medical offices often land around $450K–$1.4M because of broader compliance, technology, and revenue-cycle infrastructure needs.",
  },
  {
    question: "What does a $500K investment look like in each model?",
    answer:
      "In veterinary, $500K often supports roughly $850K–$1.3M revenue with $130K–$250K EBITDA potential. In medical, the same investment can support about $900K–$1.5M revenue with $120K–$260K EBITDA.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Medical Practice", "Veterinary Clinic", {
    clinicalGeneral: 2,
    clinicalSpecialty: 2,
    revenueModerate: 1,
    revenueHigh: 2,
    revenueVeryHigh: 3,
    insuranceLow: 3,
    insuranceMedium: 2,
    insuranceHigh: 2,
    growthLifestyle: 1,
    growthRegional: 2,
    growthMulti: 3,
  });
}

export const decisionToolCopy = {
  left:
    "Veterinary clinic aligns with your goals if you prioritize consumer-pay revenue, faster collections, and margin resilience in a local loyalty model.",
  right:
    "Medical practice is the better fit if you want a higher top-line ceiling and are comfortable operating an insurance-heavy revenue cycle.",
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
