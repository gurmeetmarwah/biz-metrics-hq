import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "solo-pt-vs-multi-therapist-practice",
  title: "Solo PT vs Multi-Therapist Practice",
  subtitle:
    "Compare owner economics, staffing leverage, throughput, valuation, and scale paths between solo physical therapy clinics and multi-therapist PT practice models.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Solo PT Practice",
  right: "Multi-Therapist PT Practice",
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
  { factor: "Higher Revenue Per Entity", winner: "Multi-Therapist PT Practice" },
  { factor: "Higher Margin Per Owner", winner: "Solo PT Practice" },
  { factor: "Lifestyle Flexibility", winner: "Solo PT Practice" },
  { factor: "Scale and Delegation", winner: "Multi-Therapist PT Practice" },
  { factor: "Lower Management Complexity", winner: "Solo PT Practice" },
  { factor: "Enterprise Exit Optionality", winner: "Multi-Therapist PT Practice" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$400K – $650K", right: "$950K – $1.5M" },
  { metric: "EBITDA Margin", left: "22 – 28%", right: "18 – 24%" },
  { metric: "Owner Compensation", left: "$100K – $180K", right: "$140K – $240K+" },
  { metric: "Monthly Patient Visits", left: "320 – 620", right: "900 – 1,700" },
  { metric: "Revenue Per Patient", left: "$950 – $2,200/yr", right: "$900 – $1,900/yr" },
  { metric: "Startup/Acquisition Cost", left: "$180K – $420K", right: "$550K – $1.3M" },
  { metric: "Practice Valuation", left: "2.6× – 3.8× SDE", right: "4.0× – 6.0× EBITDA" },
] as const;

export const winnerScorecard = [
  { label: "Owner Margin Quality", left: 9, right: 7, winner: "Solo PT Practice" },
  { label: "Growth Capacity", left: 6, right: 10, winner: "Multi-Therapist PT Practice" },
  { label: "Operational Simplicity", left: 9, right: 5, winner: "Solo PT Practice" },
  { label: "Valuation Upside", left: 7, right: 9, winner: "Multi-Therapist PT Practice" },
] as const;

export const leftRevenueSources = [
  "Initial evaluations",
  "Plan-of-care treatment visits",
  "Post-surgical rehabilitation episodes",
  "Cash-pay performance programs",
  "Employer and injury prevention programs",
  "Tele-rehab follow-up sessions",
] as const;

export const rightRevenueSources = [
  "Multi-therapist treatment throughput",
  "Specialty program lines (sports, neuro, pelvic health)",
  "Hospital and physician referral streams",
  "Employer contracts and on-site therapy",
  "Ancillary cash-pay performance services",
  "Centralized intake and continuity care",
] as const;

export const revenueFunnel = {
  left: ["Local Referrals", "Evaluation", "Plan of Care", "Collections"],
  right: ["Multi-Channel Intake", "Central Triage", "Therapist Routing", "Collections"],
} as const;

export const patientFunnel = {
  left: ["New Patient", "Evaluation", "Episode Completion", "Discharge Retention"],
  right: ["Central Intake", "Provider Assignment", "Program Utilization", "System Retention"],
} as const;

export const operatoryFunnel = {
  left: ["Treatment Room Capacity", "Therapist Throughput", "Owner-Led Utilization", "Collected Revenue"],
  right: ["Clinic Capacity", "Provider Mix", "Shared Room Utilization", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Provider Capacity", left: "1 PT owner + lean support staff", right: "3–7 therapists + expanded clinical/admin teams" },
  { driver: "Service Mix", left: "General outpatient and post-op rehab heavy", right: "General + specialty program portfolio blend" },
  { driver: "Marketing Scale", left: "Local referral partners and neighborhood trust", right: "Centralized growth engine and referral development teams" },
  { driver: "Schedule Optimization", left: "Owner-therapist dependent throughput", right: "Systemized templates across multiple therapists" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Annual Revenue Per Active Patient", left: "$950 – $2,200", right: "$900 – $1,900" },
  { metric: "Annual Visits Per Patient", left: "9 – 16", right: "10 – 18" },
  { metric: "Estimated Lifetime Value", left: "$1,500 – $4,200", right: "$1,800 – $5,200" },
  { metric: "Retention Horizon", left: "1.5 – 3 years", right: "2 – 4 years" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Treatment Room", left: "$120K – $220K", right: "$135K – $260K" },
  { metric: "Revenue Per Therapist", left: "$380K – $620K", right: "$260K – $420K" },
  { metric: "Revenue Per Staff Member", left: "$90K – $150K", right: "$95K – $145K" },
] as const;

export const marginTiers = {
  left: { weak: "17 – 21%", average: "22 – 25%", strong: "26 – 28%" },
  right: { weak: "14 – 17%", average: "19 – 22%", strong: "23 – 24%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "30 – 36%", right: "36 – 45%" },
  { expense: "Admin + Management", left: "9 – 13%", right: "13 – 20%" },
  { expense: "Facility + Equipment", left: "8 – 12%", right: "8 – 13%" },
  { expense: "Marketing + Referral Development", left: "3 – 6%", right: "4 – 8%" },
] as const;

export const insuranceHighlights = {
  left: { title: "Owner-Controlled Operations", value: "Fewer layers keep scheduling, staffing, and payer mix tightly managed" },
  right: { title: "Scale Contracting Leverage", value: "Larger visit volume supports broader payer and referral contracting power" },
} as const;

export const insuranceComparison = [
  { metric: "Insurance Revenue %", left: "60 – 78%", right: "65 – 82%" },
  { metric: "Direct Cash-Pay Revenue %", left: "22 – 40%", right: "18 – 35%" },
  { metric: "Average Collection Lag", left: "16 – 30 days", right: "21 – 38 days" },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo PT Owner-Operator", earnings: "$100K – $180K", type: "left" },
  { model: "Lead Multi-Therapist Owner", earnings: "$140K – $240K+", type: "right" },
  { model: "Solo PT Owner + Associate", earnings: "$150K – $230K", type: "left" },
  { model: "Regional Multi-Site PT Owner", earnings: "$300K – $520K+", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Buildout + Leasehold", percent: 31 },
  { item: "Treatment Equipment", percent: 24 },
  { item: "EMR + Billing Systems", percent: 13 },
  { item: "Working Capital", percent: 32 },
] as const;

export const rightStartupItems = [
  { item: "Acquisition/Expansion Buy-In", percent: 42 },
  { item: "Facility + Equipment Upgrades", percent: 22 },
  { item: "Central Ops + Technology", percent: 16 },
  { item: "Working Capital", percent: 20 },
] as const;

export const startupSideBySide = [
  { category: "Acquisition/Buildout", left: "$70K – $180K", right: "$260K – $760K" },
  { category: "Equipment", left: "$45K – $120K", right: "$140K – $320K" },
  { category: "Technology + Systems", left: "$20K – $50K", right: "$70K – $180K" },
  { category: "Working Capital", left: "$45K – $120K", right: "$140K – $360K" },
] as const;

export const valuationComparison = [
  { metric: "SDE/EBITDA Multiple", left: "2.6× – 3.8× SDE", right: "4.0× – 6.0× EBITDA" },
  { metric: "Revenue Multiple", left: "0.45× – 0.8×", right: "0.75× – 1.25×" },
  { metric: "Buyer Universe", left: "Owner-operators + local buyers + clinicians", right: "Strategics + PE-backed PT platforms" },
] as const;

export const valuationExamples = {
  left: { revenue: "$600K", value: "$430K – $700K", note: "3.2× SDE on $180K owner benefit" },
  right: { revenue: "$1.3M", value: "$1.5M – $2.5M", note: "5.0× EBITDA on $300K EBITDA" },
} as const;

export const valuationExampleTitle = "Illustrative Valuation at Scale";

export const breakEvenComparison = [
  { metric: "Monthly Collections Needed", left: "$45K – $62K", right: "$110K – $170K" },
  { metric: "Active Patients Needed", left: "450 – 750", right: "1,300 – 2,500" },
  { metric: "Months to Break-Even", left: "12 – 20 months", right: "18 – 30 months" },
] as const;

export const scalingLadder = {
  left: ["Owner-Operator PT", "Add Associate Therapist", "High-Performance Solo", "Optional Second Site"],
  right: ["Two-Therapist Clinic", "Multi-Therapist Hub", "Multi-Clinic Regional Group", "Platform Expansion"],
} as const;

export const scalingLeftTitle = "Solo Path";
export const scalingRightTitle = "Multi-Therapist Path";

export const capitalEfficiency = {
  investment: "$400,000",
  left: {
    revenue: "$500K – $780K",
    profit: "$115K – $190K EBITDA",
    payback: "2.8 – 4.4 years",
  },
  right: {
    revenue: "$900K – $1.4M",
    profit: "$160K – $280K EBITDA",
    payback: "3.4 – 5.4 years",
  },
} as const;

export const chooseLeftTitle = "Choose Solo PT Practice If";
export const chooseRightTitle = "Choose Multi-Therapist Practice If";

export const chooseLeft = [
  "You prioritize higher owner-level margin quality and direct clinic control",
  "You want lower management complexity with fewer staffing layers",
  "You prefer a lifestyle-oriented operating model and selective growth",
  "You value owner-operator autonomy over enterprise scale",
  "You want faster payback on a single-clinic PT investment",
] as const;

export const chooseRight = [
  "You want larger top-line scale and multi-provider treatment capacity",
  "You are comfortable trading some margin for growth velocity",
  "You plan to build enterprise value and broader exit optionality",
  "You can recruit, train, and manage systems across larger teams",
  "You want less dependence on one therapist producer",
] as const;

export const calculators = [
  { label: "PT Clinic Valuation Calculator", href: "/calculators/physical-therapy-clinic-valuation/" },
  { label: "PT Clinic EBITDA Calculator", href: "/calculators/physical-therapy-clinic-ebitda/" },
  { label: "Revenue Per Patient Calculator", href: "/calculators/physical-therapy-clinic-revenue-per-patient/" },
  { label: "Revenue Per Therapist Calculator", href: "/calculators/physical-therapy-clinic-revenue-per-therapist/" },
  { label: "PT Clinic Break-Even Calculator", href: "/calculators/physical-therapy-clinic-break-even/" },
] as const;

export const relatedComparisons = [
  { label: "Private Practice vs Hospital-Based PT", href: "/comparisons/private-practice-vs-hospital-based-pt/" },
  { label: "Physical Therapy vs Chiropractic Clinic", href: "/comparisons/physical-therapy-vs-chiropractic-clinic/" },
  { label: "Private Practice vs DSO", href: "/comparisons/private-practice-vs-dso/" },
  { label: "Dental Practice vs Medical Practice", href: "/comparisons/dental-practice-vs-medical-practice/" },
  { label: "Physical Therapy Clinic Hub", href: "/industries/healthcare/physical-therapy-clinic/" },
] as const;

export const faqs = [
  {
    question: "Why can solo PT practices show higher margins than multi-therapist clinics?",
    answer:
      "Solo PT models often carry leaner management layers and tighter overhead controls, so more collected revenue can flow to owner earnings when therapist utilization stays strong.",
  },
  {
    question: "Why do multi-therapist PT practices typically produce more total revenue?",
    answer:
      "Multi-therapist clinics aggregate more provider capacity, broader scheduling availability, and stronger referral coverage, which drives higher visit volume and larger annual collections.",
  },
  {
    question: "Is a multi-therapist model always better for valuation?",
    answer:
      "Not always, but PT clinics with transferable systems, diversified therapist production, and less owner dependence generally command stronger EBITDA-based buyer interest than purely owner-centric practices.",
  },
  {
    question: "Which model has lower operational risk?",
    answer:
      "Solo PT operations are simpler but carry key-person risk tied to one owner therapist. Multi-therapist clinics reduce provider concentration risk but introduce hiring, supervision, and coordination complexity.",
  },
  {
    question: "How should PT owners evaluate compensation trade-offs?",
    answer:
      "Solo owners often retain higher margin per dollar of revenue, while multi-therapist owners may earn more total compensation through aggregate cash flow, delegation leverage, and potential equity value.",
  },
  {
    question: "What can roughly $400K of capital do in solo versus multi-therapist PT?",
    answer:
      "In solo PT, $400K can often reach faster break-even and stronger owner margin quality. In multi-therapist PT, the same capital can unlock higher total revenue, but typically with longer payback and more organizational overhead.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Solo PT Practice", "Multi-Therapist PT Practice", {
    clinicalGeneral: 2,
    clinicalSpecialty: 2,
    revenueModerate: 3,
    revenueHigh: 2,
    revenueVeryHigh: 1,
    insuranceLow: 2,
    insuranceMedium: 2,
    insuranceHigh: 1,
    growthLifestyle: 3,
    growthRegional: 1,
    growthMulti: 1,
  });
}

export const decisionToolCopy = {
  left:
    "Solo PT practice fits your priorities with stronger owner-level margins, autonomy, and a more lifestyle-aligned clinic operating model.",
  right:
    "Multi-therapist PT practice matches your goals if you want multi-provider scale, enterprise valuation upside, and growth less dependent on one therapist.",
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
