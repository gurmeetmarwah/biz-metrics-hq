import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "private-practice-vs-hospital-based-pt",
  title: "Private Practice vs Hospital-Based PT",
  subtitle:
    "Compare autonomy, margins, referral stability, compensation paths, and long-term value creation between owner-operated private PT clinics and hospital-based physical therapy models.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Private PT Practice",
  right: "Hospital-Based PT",
  breadcrumbHub: {
    label: "Physical Therapy Clinic",
    href: "/industries/healthcare/physical-therapy-clinic/",
  },
  exploreHub: {
    label: "Explore Physical Therapy Clinic Hub →",
    href: "/industries/healthcare/physical-therapy-clinic/",
  },
} as const;

export const decisionSnapshot = [
  { factor: "Owner Upside Potential", winner: "Private PT Practice" },
  { factor: "Income Stability", winner: "Hospital-Based PT" },
  { factor: "Operational Autonomy", winner: "Private PT Practice" },
  { factor: "Referral Pipeline Stability", winner: "Hospital-Based PT" },
  { factor: "Capital Requirement", winner: "Hospital-Based PT" },
  { factor: "Enterprise Value Creation", winner: "Private PT Practice" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$500K – $1.5M", right: "N/A (employed department model)" },
  { metric: "EBITDA Margin", left: "18 – 28%", right: "System-level, not owner EBITDA" },
  { metric: "Owner/Lead Compensation", left: "$165K owner-operator benchmark", right: "$85K – $130K employed salary" },
  { metric: "Ownership Structure", left: "Owner-operator or partner-owned", right: "Employed within health system" },
  { metric: "Valuation Benchmark", left: "2.5× – 4.0× SDE", right: "No direct owner-equity multiple" },
  { metric: "Capital Exposure", left: "Owner-funded growth and working capital", right: "Hospital-funded infrastructure and systems" },
] as const;

export const winnerScorecard = [
  { label: "Autonomy", left: 10, right: 4, winner: "Private PT Practice" },
  { label: "Margin Potential", left: 9, right: 4, winner: "Private PT Practice" },
  { label: "Referral Stability", left: 6, right: 9, winner: "Hospital-Based PT" },
  { label: "Lifestyle Predictability", left: 6, right: 9, winner: "Hospital-Based PT" },
] as const;

export const leftRevenueSources = [
  "Evaluation and treatment visit billing",
  "Specialty rehab programs",
  "Cash-pay and performance offerings",
  "Employer and direct access programs",
  "Ancillary services and care pathways",
  "Contracted payer reimbursement streams",
] as const;

export const rightRevenueSources = [
  "Hospital referral-fed outpatient PT volume",
  "Post-acute and post-surgical therapy episodes",
  "Integrated care pathway volume allocation",
  "System-based payer reimbursement contracts",
  "Inpatient-to-outpatient continuity referrals",
  "Cross-specialty service line utilization",
] as const;

export const revenueFunnel = {
  left: ["Market Demand", "Referral + Direct Access", "Plan of Care", "Collections"],
  right: ["System Referrals", "Department Intake", "Clinical Routing", "System Collections"],
} as const;

export const patientFunnel = {
  left: ["New PT Patient", "Evaluation", "Plan Completion", "Follow-Up Retention"],
  right: ["Internal Referral", "Scheduling", "Episode Completion", "System Continuity"],
} as const;

export const operatoryFunnel = {
  left: ["Clinic Capacity", "Provider Utilization", "Owner-Managed Throughput", "Collected Revenue"],
  right: ["Department Capacity", "Staffed Provider Slots", "System Throughput", "Allocated Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Autonomy", left: "Owner controls services, hours, and payer strategy", right: "System protocols and leadership-defined service parameters" },
  { driver: "Referral Pipeline", left: "Built through physician outreach, marketing, and reputation", right: "Built-in from health system integration and internal referrals" },
  { driver: "Capital Support", left: "Owner supplies growth capital and absorbs downside", right: "Hospital funds facilities, technology, and shared operations" },
  { driver: "Scheduling Flexibility", left: "Owner can optimize productivity and mix rapidly", right: "Templates and staffing often governed by system policy" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Revenue Per Patient Episode", left: "$900 – $2,400", right: "Tracked at system level" },
  { metric: "Visits Per Episode", left: "8 – 16", right: "8 – 14 (protocol-dependent)" },
  { metric: "Estimated Value Capture", left: "Owner retains margin after overhead", right: "Salary model with no direct equity capture" },
  { metric: "Retention Horizon", left: "2 – 4 years relationship value", right: "Episode-driven within broader system network" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Provider", left: "$320K – $600K", right: "Internal KPI, non-owner metric" },
  { metric: "Visits Per Provider Per Day", left: "10 – 17", right: "9 – 15 (policy and acuity adjusted)" },
  { metric: "Compensation Model", left: "Owner draw + profit distribution", right: "Salary + benefits + possible bonus plan" },
] as const;

export const marginTiers = {
  left: { weak: "14 – 17%", average: "18 – 24%", strong: "25 – 28%" },
  right: { weak: "N/A", average: "N/A", strong: "N/A" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "30 – 40%", right: "System-managed labor pool" },
  { expense: "Admin + Billing Overhead", left: "10 – 16%", right: "Shared central services allocation" },
  { expense: "Facility + Equipment", left: "8 – 14%", right: "Hospital infrastructure budget" },
  { expense: "Marketing + Referral Development", left: "3 – 8%", right: "Low direct clinic marketing burden" },
] as const;

export const insuranceHighlights = {
  left: { title: "Margin Capture Control", value: "Owner controls payer mix, service packaging, and cost discipline" },
  right: { title: "System Integration Stability", value: "Referral continuity and infrastructure support reduce ownership burden" },
} as const;

export const insuranceComparison = [
  { metric: "Insurance Revenue %", left: "60 – 85%", right: "High, embedded in system contracts" },
  { metric: "Cash-Pay Revenue %", left: "15 – 40%", right: "Low to moderate; policy and market dependent" },
  { metric: "Collection/Denial Burden", left: "Owner-managed billing risk", right: "Centralized revenue cycle support" },
] as const;

export const ownerIncomeComparison = [
  { model: "Private PT Owner-Operator", earnings: "$165K benchmark (range varies by scale)", type: "left" },
  { model: "Private PT Associate/Clinical Director", earnings: "$100K – $150K", type: "left" },
  { model: "Hospital-Based PT Staff", earnings: "$85K – $130K", type: "right" },
  { model: "Hospital Rehab Leadership Track", earnings: "$120K – $170K", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Buildout + Leasehold", percent: 30 },
  { item: "Equipment + Technology", percent: 24 },
  { item: "Credentialing + Launch", percent: 11 },
  { item: "Working Capital", percent: 35 },
] as const;

export const rightStartupItems = [
  { item: "Personal Startup Capital", percent: 5 },
  { item: "Licensing + Onboarding", percent: 10 },
  { item: "Career Transition Cost", percent: 15 },
  { item: "System-Funded Infrastructure", percent: 70 },
] as const;

export const startupSideBySide = [
  { category: "Facility + Buildout", left: "$80K – $300K", right: "$0 personal (system-funded)" },
  { category: "Equipment + Tech", left: "$60K – $220K", right: "$0 personal (system-funded)" },
  { category: "Working Capital", left: "$90K – $400K", right: "$5K – $25K transition reserve" },
  { category: "Total Owner Capital", left: "$230K – $920K", right: "$5K – $25K" },
] as const;

export const valuationComparison = [
  { metric: "SDE/EBITDA Multiple", left: "2.5× – 4.0× SDE", right: "Not applicable (no owner equity)" },
  { metric: "Revenue Multiple", left: "0.6× – 1.1×", right: "Not applicable for employed role" },
  { metric: "Buyer Universe", left: "Independents + strategics + PE-backed PT platforms", right: "Career progression within health systems" },
] as const;

export const valuationExamples = {
  left: { revenue: "$1.1M", value: "$1.0M – $1.6M", note: "3.3× SDE on $320K owner benefit" },
  right: { revenue: "N/A", value: "Salary-driven earning path", note: "$85K – $130K employed compensation baseline" },
} as const;

export const valuationExampleTitle = "Illustrative Ownership Value vs Employment Income";

export const breakEvenComparison = [
  { metric: "Monthly Collections Needed", left: "$60K – $95K", right: "N/A (salary model)" },
  { metric: "Patient Volume Needed", left: "650 – 1,200 active episodes", right: "System-assigned capacity targets" },
  { metric: "Months to Break-Even", left: "16 – 30 months", right: "Immediate salary stability" },
] as const;

export const scalingLadder = {
  left: ["Owner-Operator Clinic", "Add Therapists + Programs", "Multi-Site Group", "Strategic Exit or HoldCo"],
  right: ["Staff Therapist", "Senior Therapist", "Department Leadership", "Regional Health System Leadership"],
} as const;

export const scalingLeftTitle = "Private Ownership Path";
export const scalingRightTitle = "Hospital Employment Path";

export const capitalEfficiency = {
  investment: "$300,000",
  left: {
    revenue: "$650K – $1.1M",
    profit: "$125K – $250K EBITDA",
    payback: "3.0 – 5.0 years",
  },
  right: {
    revenue: "No personal ownership revenue",
    profit: "$85K – $130K salary",
    payback: "Immediate income, no equity payback model",
  },
} as const;

export const chooseLeftTitle = "Choose Private PT Practice If";
export const chooseRightTitle = "Choose Hospital-Based PT If";

export const chooseLeft = [
  "You want autonomy over clinical model, pricing, and strategic direction",
  "You are targeting higher long-term owner upside and equity creation",
  "You can build and maintain a durable referral and marketing pipeline",
  "You are comfortable with capital risk and operating responsibility",
  "You want flexibility to design schedule, culture, and growth pace",
] as const;

export const chooseRight = [
  "You prioritize compensation stability and employer-backed benefits",
  "You value built-in system referrals over independent business development",
  "You prefer lower personal financial risk and no startup burden",
  "You want integrated clinical collaboration within a larger health system",
  "You prefer a predictable lifestyle with clearer role boundaries",
] as const;

export const calculators = [
  { label: "PT Clinic Valuation Calculator", href: "/calculators/physical-therapy-clinic-valuation/" },
  { label: "PT Clinic EBITDA Calculator", href: "/calculators/physical-therapy-clinic-ebitda/" },
  { label: "Revenue Per Patient Calculator", href: "/calculators/physical-therapy-clinic-revenue-per-patient/" },
  { label: "PT Clinic Break-Even Calculator", href: "/calculators/physical-therapy-clinic-break-even/" },
  { label: "Revenue Per Therapist Calculator", href: "/calculators/physical-therapy-clinic-revenue-per-therapist/" },
] as const;

export const relatedComparisons = [
  { label: "Solo PT vs Multi-Therapist Practice", href: "/comparisons/solo-pt-vs-multi-therapist-practice/" },
  { label: "Physical Therapy vs Chiropractic Clinic", href: "/comparisons/physical-therapy-vs-chiropractic-clinic/" },
  { label: "Private Practice vs DSO", href: "/comparisons/private-practice-vs-dso/" },
  { label: "Dental Practice vs Medical Practice", href: "/comparisons/dental-practice-vs-medical-practice/" },
  { label: "Physical Therapy Clinic Hub", href: "/industries/healthcare/physical-therapy-clinic/" },
] as const;

export const faqs = [
  {
    question: "How do earnings compare between private PT ownership and hospital employment?",
    answer:
      "Hospital-based PT roles commonly pay stable salaries in the $85K–$130K range, while private owners can target around $165K in owner compensation with upside tied to margin and scale performance.",
  },
  {
    question: "Why can private PT produce higher long-term upside?",
    answer:
      "Private owners retain operating profit and can build transferable equity value, so earnings are not capped by salary bands and can expand with therapist capacity, payer optimization, and clinic replication.",
  },
  {
    question: "What is the main trade-off for hospital-based PT?",
    answer:
      "Hospital-based roles offer stronger stability, built-in referrals, and lower personal financial risk, but usually limit autonomy and eliminate direct ownership equity upside.",
  },
  {
    question: "How important is referral pipeline strength in private practice?",
    answer:
      "It is a core decision factor. Private owners must actively develop physician relationships, direct-access channels, and market presence, while hospital models typically inherit internal referral flow.",
  },
  {
    question: "Which model requires more capital and risk tolerance?",
    answer:
      "Private ownership generally requires meaningful startup or acquisition capital plus working capital reserves, while hospital-based employment requires minimal personal capital outlay.",
  },
  {
    question: "Which option usually supports better lifestyle predictability?",
    answer:
      "Hospital-based PT often provides more schedule predictability and clearer role boundaries, whereas private owners gain autonomy but take on staffing, billing, and growth responsibilities that can reduce short-term lifestyle stability.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Private PT Practice", "Hospital-Based PT", {
    clinicalGeneral: 2,
    clinicalSpecialty: 2,
    revenueModerate: 2,
    revenueHigh: 2,
    revenueVeryHigh: 2,
    insuranceLow: 1,
    insuranceMedium: 2,
    insuranceHigh: 3,
    growthLifestyle: 2,
    growthRegional: 2,
    growthMulti: 2,
  });
}

export const decisionToolCopy = {
  left:
    "Private PT practice is the better fit if you prioritize autonomy, ownership upside, margin control, and long-term enterprise value creation.",
  right:
    "Hospital-based PT aligns with your priorities if you value compensation stability, integrated referral pipelines, lower capital risk, and predictable lifestyle structure.",
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
