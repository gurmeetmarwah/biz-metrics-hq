import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "dental-practice-vs-veterinary-clinic",
  title: "Dental Practice vs Veterinary Clinic",
  subtitle:
    "Compare revenue ranges, margin profiles, staffing models, owner income, startup costs, and valuation outcomes across two procedure-driven healthcare models.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Dental Practice",
  right: "Veterinary Clinic",
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
  { factor: "Higher Revenue Ceiling", winner: "Dental Practice" },
  { factor: "Lower Insurance Dependence", winner: "Veterinary Clinic" },
  { factor: "Stronger Owner Compensation", winner: "Dental Practice" },
  { factor: "Recurring Wellness Frequency", winner: "Veterinary Clinic" },
  { factor: "Higher SDE Multiple Range", winner: "Dental Practice" },
  { factor: "Lower Capital at Risk", winner: "Veterinary Clinic" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$1.2M – $2.6M", right: "$600K – $1.8M" },
  { metric: "EBITDA Margin", left: "18 – 30%", right: "15 – 22%" },
  { metric: "Owner Compensation", left: "$220K – $360K", right: "$120K – $250K" },
  { metric: "Monthly Visits", left: "120 – 180", right: "300 – 700" },
  { metric: "Revenue Per Patient", left: "$900 – $1,100/yr", right: "$350 – $900/yr" },
  { metric: "Startup Cost", left: "$515K – $1.0M", right: "$350K – $900K" },
  { metric: "Practice Valuation", left: "3.2× – 4.5× SDE", right: "2.8× – 4.0× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Top-Line Potential", left: 9, right: 6, winner: "Dental Practice" },
  { label: "Payer Flexibility", left: 7, right: 9, winner: "Veterinary Clinic" },
  { label: "Margin Predictability", left: 8, right: 7, winner: "Dental Practice" },
  { label: "Capital Barrier", left: 6, right: 8, winner: "Veterinary Clinic" },
] as const;

export const leftRevenueSources = [
  "Hygiene and preventive recall",
  "Restorative treatment",
  "Prosthodontics",
  "Implants and surgery",
  "Cosmetic dentistry",
  "Emergency visits",
] as const;

export const rightRevenueSources = [
  "Preventive wellness exams",
  "Vaccinations",
  "Diagnostics and imaging",
  "Surgical procedures",
  "Chronic condition management",
  "Pharmacy and retail products",
] as const;

export const revenueFunnel = {
  left: ["Lead/Referral", "Exam + X-rays", "Accepted Plan", "Collections"],
  right: ["Pet Owner Inquiry", "Consult + Diagnostics", "Treatment Plan", "Payment"],
} as const;

export const patientFunnel = {
  left: ["New Patient", "Comprehensive Exam", "Treatment Start", "Recall Retention"],
  right: ["New Pet Client", "Wellness Visit", "Procedure Acceptance", "Annual Care Plan"],
} as const;

export const operatoryFunnel = {
  left: ["Chair Capacity", "Procedure Mix", "Production", "Collected Revenue"],
  right: ["Exam Rooms", "Case Mix", "Service Delivery", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Visit Value", left: "$180 – $320 typical encounter", right: "$95 – $240 typical encounter" },
  { driver: "Procedure Ticket Size", left: "$1,500 – $6,000 major treatment", right: "$300 – $2,500 major treatment" },
  { driver: "Insurance Impact", left: "Moderate-to-high", right: "Low direct insurance exposure" },
  { driver: "Preventive Recurrence", left: "Semiannual hygiene cadence", right: "Annual or semiannual wellness cadence" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Annual Revenue Per Active Patient", left: "$900 – $1,100", right: "$350 – $900" },
  { metric: "Annual Visits Per Patient", left: "1.8 – 2.4", right: "1.2 – 2.1" },
  { metric: "Estimated Lifetime Value", left: "$3,500 – $8,500", right: "$1,800 – $5,000" },
  { metric: "Retention Horizon", left: "5 – 8 years", right: "4 – 10 years" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Chair/Room", left: "$350K – $550K", right: "$200K – $380K" },
  { metric: "Revenue Per Provider", left: "$800K – $1.4M", right: "$500K – $900K" },
  { metric: "Revenue Per Staff Member", left: "$120K – $180K", right: "$85K – $140K" },
] as const;

export const marginTiers = {
  left: { weak: "14 – 18%", average: "22 – 26%", strong: "28 – 30%" },
  right: { weak: "10 – 14%", average: "17 – 20%", strong: "21 – 24%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "28 – 35%", right: "30 – 38%" },
  { expense: "Supplies + Lab/Pharmacy", left: "6 – 10%", right: "8 – 14%" },
  { expense: "Facility Costs", left: "5 – 8%", right: "6 – 10%" },
  { expense: "Administrative Overhead", left: "8 – 12%", right: "9 – 14%" },
] as const;

export const insuranceHighlights = {
  left: { title: "Insurance-Influenced Collections", value: "55 – 70% insurance reimbursement mix" },
  right: { title: "Consumer-Pay Dominant", value: "70 – 95% owner-paid at point of care" },
} as const;

export const insuranceComparison = [
  { metric: "Insurance Revenue %", left: "55 – 70%", right: "5 – 25%" },
  { metric: "Cash/Client-Pay Revenue %", left: "25 – 40%", right: "70 – 95%" },
  { metric: "Average Collection Lag", left: "18 – 32 days", right: "0 – 7 days" },
] as const;

export const ownerIncomeComparison = [
  { model: "Single-Site Dental Owner", earnings: "$220K – $360K", type: "left" },
  { model: "Single-Site Vet Owner", earnings: "$120K – $250K", type: "right" },
  { model: "Multi-Site Dental Owner", earnings: "$450K – $750K+", type: "left" },
  { model: "Multi-Site Vet Owner", earnings: "$300K – $550K+", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Buildout", percent: 28 },
  { item: "Operatories + Equipment", percent: 33 },
  { item: "Technology", percent: 16 },
  { item: "Working Capital", percent: 23 },
] as const;

export const rightStartupItems = [
  { item: "Facility Buildout", percent: 30 },
  { item: "Medical/Surgical Equipment", percent: 28 },
  { item: "Diagnostic + Imaging", percent: 14 },
  { item: "Working Capital", percent: 28 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: "$150K – $350K", right: "$120K – $300K" },
  { category: "Equipment", left: "$250K – $450K", right: "$140K – $320K" },
  { category: "Technology", left: "$40K – $80K", right: "$30K – $90K" },
  { category: "Working Capital", left: "$75K – $150K", right: "$90K – $220K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: "3.2× – 4.5×", right: "2.8× – 4.0×" },
  { metric: "EBITDA Multiple", left: "4.0× – 6.5×", right: "4.0× – 6.0×" },
  { metric: "Revenue Multiple", left: "0.6× – 1.0×", right: "0.5× – 0.9×" },
] as const;

export const valuationExamples = {
  left: { revenue: "$1.6M", value: "$1.2M – $1.8M", note: "3.7× SDE on $420K owner benefit" },
  right: { revenue: "$1.2M", value: "$750K – $1.1M", note: "3.3× SDE on $230K owner benefit" },
} as const;

export const valuationExampleTitle = "Typical Single-Site Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Collections Needed", left: "$120K – $150K", right: "$70K – $110K" },
  { metric: "Active Patients Needed", left: "900 – 1,100", right: "1,400 – 2,400 pets" },
  { metric: "Months to Break-Even", left: "18 – 30 months", right: "16 – 28 months" },
] as const;

export const scalingLadder = {
  left: ["Solo Office", "Add Associate", "Second Site", "Regional Dental Platform"],
  right: ["Single Clinic", "Add Doctor Team", "Multi-Clinic Cluster", "Regional Vet Network"],
} as const;

export const scalingLeftTitle = "Dental Growth Path";
export const scalingRightTitle = "Veterinary Growth Path";

export const capitalEfficiency = {
  investment: "$500,000",
  left: {
    revenue: "$1.2M – $1.8M",
    profit: "$260K – $430K EBITDA",
    payback: "3 – 5 years",
  },
  right: {
    revenue: "$850K – $1.3M",
    profit: "$130K – $250K EBITDA",
    payback: "3.5 – 5.5 years",
  },
} as const;

export const chooseLeftTitle = "Choose Dental Practice If";
export const chooseRightTitle = "Choose Veterinary Clinic If";

export const chooseLeft = [
  "You want higher owner earnings potential at a single site",
  "You value stronger procedure pricing and elective revenue upside",
  "You are comfortable with partial insurance dependence",
  "You want historically stronger private-practice resale demand",
  "You plan to scale through associates and specialty add-ons",
] as const;

export const chooseRight = [
  "You prefer direct consumer-pay and lower payer dependence",
  "You want strong local loyalty through recurring pet wellness care",
  "You are comfortable with broader staffing and schedule variability",
  "You want a lower initial capital threshold in many markets",
  "You plan to build value through multi-clinic operational scale",
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
  { label: "Dental Practice vs Medical Practice", href: "/comparisons/dental-practice-vs-medical-practice/" },
  { label: "Solo vs Group Dental Practice", href: "/comparisons/solo-vs-group-dental-practice/" },
  { label: "Private Practice vs DSO", href: "/comparisons/private-practice-vs-dso/" },
  { label: "Dental Practice Hub", href: "/industries/healthcare/dental-practice/" },
] as const;

export const faqs = [
  {
    question: "Which model has higher owner compensation in 2026?",
    answer:
      "On average, owner dentists earn more at a single location ($220K–$360K) than owner-operated veterinary clinics ($120K–$250K). Multi-site ownership can significantly raise both models, but dental still tends to lead on owner cash flow per site.",
  },
  {
    question: "Does veterinary care have lower insurance risk?",
    answer:
      "Yes. Most vet revenue is direct client-pay at checkout, so clinics are less exposed to reimbursement policy changes than dental practices that depend more on commercial insurance.",
  },
  {
    question: "Why can vet startups be cheaper?",
    answer:
      "Many companion-animal clinics require less buildout and lower fixed equipment spend than full-scope dental offices with multiple operatories, digital imaging, and lab-linked restorative workflows.",
  },
  {
    question: "Is dental still easier to sell?",
    answer:
      "Dental practices generally have deeper buyer pools and more standardized valuation frameworks, which can shorten time to close relative to independent vet clinics in smaller markets.",
  },
  {
    question: "How do margins compare at scale?",
    answer:
      "Well-run dental practices often sustain 22–30% EBITDA, while mature vet clinics more commonly operate around 17–22%. Exceptional clinics in either model can exceed these bands with tight labor management.",
  },
  {
    question: "What does $500K produce in each model?",
    answer:
      "A $500K dental investment often supports $1.2M–$1.8M revenue and $260K–$430K EBITDA. In veterinary care, the same capital typically supports $850K–$1.3M revenue and $130K–$250K EBITDA.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Dental Practice", "Veterinary Clinic", {
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
    "Dental practice is the better fit for your goals with higher per-site earnings, stronger margins, and a well-established private-practice exit market.",
  right:
    "Veterinary clinic aligns with your priorities if you want consumer-pay revenue, lower payer friction, and a growth strategy centered on local loyalty and team-driven scale.",
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
