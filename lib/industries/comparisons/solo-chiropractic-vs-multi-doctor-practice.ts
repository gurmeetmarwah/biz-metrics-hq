import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "solo-chiropractic-vs-multi-doctor-practice",
  title: "Solo Chiropractic vs Multi-Doctor Practice",
  subtitle:
    "Compare owner economics, staffing leverage, throughput, valuation, and scale paths between solo chiropractor practices and multi-doctor chiropractic clinics.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Solo Chiropractic",
  right: "Multi-Doctor Practice",
  breadcrumbHub: {
    label: "Chiropractic Clinic",
    href: "/industries/healthcare/chiropractic-clinic/",
  },
  exploreHub: {
    label: "Explore Chiropractic Clinic Hub →",
    href: "/industries/healthcare/chiropractic-clinic/",
  },
} as const;

export const decisionSnapshot = [
  { factor: "Higher Revenue Per Entity", winner: "Multi-Doctor Practice" },
  { factor: "Higher Margin Per Owner", winner: "Solo Chiropractic" },
  { factor: "Lifestyle Flexibility", winner: "Solo Chiropractic" },
  { factor: "Scale and Delegation", winner: "Multi-Doctor Practice" },
  { factor: "Lower Management Complexity", winner: "Solo Chiropractic" },
  { factor: "Enterprise Exit Optionality", winner: "Multi-Doctor Practice" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$280K – $520K", right: "$650K – $1.1M" },
  { metric: "Net Profit Margin", left: "28 – 36%", right: "24 – 32%" },
  { metric: "Owner Compensation", left: "$80K – $160K", right: "$140K – $280K+" },
  { metric: "Active Patients", left: "450 – 850", right: "900 – 1,800" },
  { metric: "Revenue Per Chiropractor", left: "$280K – $420K", right: "$300K – $400K" },
  { metric: "Startup/Acquisition Cost", left: "$140K – $280K", right: "$400K – $900K" },
  { metric: "Practice Valuation", left: "2.2× – 3.2× SDE", right: "2.5× – 3.8× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Owner Margin Quality", left: 9, right: 7, winner: "Solo Chiropractic" },
  { label: "Growth Capacity", left: 6, right: 10, winner: "Multi-Doctor Practice" },
  { label: "Operational Simplicity", left: 9, right: 5, winner: "Solo Chiropractic" },
  { label: "Valuation Upside", left: 7, right: 9, winner: "Multi-Doctor Practice" },
] as const;

export const leftRevenueSources = [
  "Owner-led adjustments",
  "Wellness membership plans",
  "Cash-pay treatment packages",
  "Community referral patients",
  "Maintenance care visits",
] as const;

export const rightRevenueSources = [
  "Multi-chiropractor throughput",
  "Associate doctor production",
  "Centralized intake and scheduling",
  "Expanded marketing reach",
  "Membership and care-plan scaling",
] as const;

export const revenueFunnel = {
  left: ["Local Marketing", "Consultation", "Care Plan", "Owner Collections"],
  right: ["Multi-Channel Intake", "Central Scheduling", "Provider Routing", "Collections"],
} as const;

export const patientFunnel = {
  left: ["New Patient", "Consultation", "Maintenance Plan", "Long-Term Retention"],
  right: ["Central Intake", "Provider Assignment", "Care Plan Adherence", "System Retention"],
} as const;

export const operatoryFunnel = {
  left: ["Treatment Room", "Owner Throughput", "Collected Revenue"],
  right: ["Multi-Room Capacity", "Provider Mix", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Provider Capacity", left: "1 owner DC + lean support", right: "2–4 DCs + expanded admin team" },
  { driver: "Marketing Scale", left: "Owner-led local brand", right: "Centralized growth and ad spend" },
  { driver: "Schedule Optimization", left: "Owner-dependent throughput", right: "Systemized across multiple DCs" },
  { driver: "Membership Revenue", left: "45 – 65% recurring", right: "50 – 70% recurring at scale" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Annual Revenue Per Patient", left: "$650 – $1,500", right: "$600 – $1,400" },
  { metric: "Annual Visits Per Patient", left: "14 – 26", right: "12 – 22" },
  { metric: "Estimated Lifetime Value", left: "$1,100 – $2,600", right: "$1,200 – $3,000" },
  { metric: "Retention Horizon", left: "2 – 4 years", right: "2 – 5 years" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Treatment Room", left: "$140K – $260K", right: "$160K – $280K" },
  { metric: "Revenue Per Chiropractor", left: "$280K – $420K", right: "$300K – $400K" },
  { metric: "Visits Per Day (Per DC)", left: "22 – 35", right: "20 – 32" },
] as const;

export const marginTiers = {
  left: { weak: "22 – 26%", average: "29 – 33%", strong: "34 – 38%" },
  right: { weak: "20 – 24%", average: "26 – 30%", strong: "31 – 34%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "18 – 24%", right: "26 – 34%" },
  { expense: "Admin + Management", left: "8 – 12%", right: "12 – 18%" },
  { expense: "Facility + Equipment", left: "6 – 10%", right: "7 – 11%" },
  { expense: "Marketing", left: "5 – 9%", right: "7 – 12%" },
] as const;

export const insuranceHighlights = {
  left: {
    title: "Owner-Controlled Operations",
    value: "Lean overhead keeps scheduling, marketing, and payer mix tightly managed",
  },
  right: {
    title: "Production Leverage",
    value: "Multiple DCs reduce key-person risk and increase total clinic throughput",
  },
} as const;

export const insuranceComparison = [
  { metric: "Cash-Pay Revenue", left: "70 – 88%", right: "62 – 82%" },
  { metric: "Insurance Billing", left: "12 – 30%", right: "18 – 38%" },
  { metric: "Owner Clinical Dependence", left: "High", right: "Moderate to low" },
  { metric: "Key-Person Risk", left: "High (owner DC)", right: "Lower (multi-provider)" },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo DC Owner-Operator", earnings: "$80K – $160K", type: "left" },
  { model: "Solo DC + Part-Time Associate", earnings: "$120K – $210K", type: "left" },
  { model: "Lead Multi-Doctor Owner", earnings: "$140K – $280K+", type: "right" },
  { model: "Multi-Location Chiropractic Owner", earnings: "$250K – $450K+", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Buildout", percent: 28 },
  { item: "Equipment", percent: 22 },
  { item: "Technology", percent: 12 },
  { item: "Working Capital", percent: 38 },
] as const;

export const rightStartupItems = [
  { item: "Acquisition / Expansion", percent: 40 },
  { item: "Facility + Equipment", percent: 24 },
  { item: "Technology + Systems", percent: 14 },
  { item: "Working Capital", percent: 22 },
] as const;

export const startupSideBySide = [
  { category: "Buildout / Acquisition", left: "$50K – $120K", right: "$200K – $550K" },
  { category: "Equipment", left: "$30K – $70K", right: "$80K – $180K" },
  { category: "Technology", left: "$12K – $30K", right: "$25K – $60K" },
  { category: "Working Capital", left: "$40K – $90K", right: "$90K – $200K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: "2.2× – 3.2×", right: "2.5× – 3.8×" },
  { metric: "Revenue Multiple", left: "0.5× – 0.8×", right: "0.6× – 0.95×" },
  { metric: "Buyer Universe", left: "Owner-operators + local DC buyers", right: "Regional groups + PE-backed platforms" },
] as const;

export const valuationExamples = {
  left: { revenue: "$420K", value: "$380K – $580K", note: "2.8× SDE on $160K owner benefit" },
  right: { revenue: "$850K", value: "$720K – $1.1M", note: "3.0× SDE on $280K owner benefit" },
} as const;

export const valuationExampleTitle = "Illustrative Valuation at Scale";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$28K – $42K", right: "$55K – $85K" },
  { metric: "Active Patients Needed", left: "380 – 650", right: "750 – 1,400" },
  { metric: "Months to Break-Even", left: "10 – 16 months", right: "16 – 26 months" },
] as const;

export const scalingLadder = {
  left: ["Owner-Operator DC", "Add Part-Time Associate", "Membership Optimization", "Optional Second Site"],
  right: ["Two-Doctor Clinic", "Associate Model", "Multi-Location Brand", "Regional Platform"],
} as const;

export const scalingLeftTitle = "Solo Path";
export const scalingRightTitle = "Multi-Doctor Path";

export const capitalEfficiency = {
  investment: "$350,000",
  left: {
    revenue: "$380K – $520K",
    profit: "$105K – $175K net profit",
    payback: "2 – 3.5 years",
  },
  right: {
    revenue: "$700K – $950K",
    profit: "$165K – $280K net profit",
    payback: "3 – 5 years",
  },
} as const;

export const chooseLeftTitle = "Choose Solo Chiropractic If";
export const chooseRightTitle = "Choose Multi-Doctor Practice If";

export const chooseLeft = [
  "You prioritize higher owner-level margin quality and direct clinic control",
  "You want lower management complexity with fewer staffing layers",
  "You prefer a lifestyle-oriented operating model and selective growth",
  "You value owner-operator autonomy over enterprise scale",
  "You want faster payback on a single-clinic investment",
] as const;

export const chooseRight = [
  "You want larger top-line scale and multi-provider treatment capacity",
  "You are comfortable trading some margin for growth velocity",
  "You plan to build enterprise value and broader exit optionality",
  "You can recruit, train, and manage associate chiropractors",
  "You want less dependence on one owner producer",
] as const;

export const calculators = [
  { label: "Chiropractic Clinic Valuation Calculator", href: "/calculators/chiropractic-clinic-valuation/" },
  { label: "Profit Margin Calculator", href: "/calculators/chiropractic-clinic-profit-margin/" },
  { label: "Revenue Per Patient Calculator", href: "/calculators/chiropractic-clinic-revenue-per-patient/" },
  { label: "Chiropractic Revenue Calculator", href: "/calculators/chiropractic-clinic-revenue/" },
  { label: "Break-Even Calculator", href: "/calculators/chiropractic-clinic-break-even/" },
] as const;

export const relatedComparisons = [
  { label: "Cash-Pay vs Insurance-Based Chiropractic", href: "/comparisons/cash-pay-vs-insurance-chiropractic/" },
  { label: "Family Chiropractic vs Sports Chiropractic", href: "/comparisons/family-chiropractic-vs-sports-chiropractic/" },
  { label: "Physical Therapy vs Chiropractic Clinic", href: "/comparisons/physical-therapy-vs-chiropractic-clinic/" },
  { label: "Solo PT vs Multi-Therapist Practice", href: "/comparisons/solo-pt-vs-multi-therapist-practice/" },
  { label: "Chiropractic Clinic Hub", href: "/industries/healthcare/chiropractic-clinic/" },
] as const;

export const faqs = [
  {
    question: "Why can solo chiropractic practices show higher margins than multi-doctor clinics?",
    answer:
      "Solo DC models carry leaner management layers and tighter overhead controls, so more collected revenue can flow to owner earnings when visit utilization stays strong.",
  },
  {
    question: "Why do multi-doctor practices typically produce more total revenue?",
    answer:
      "Multi-doctor clinics aggregate more provider capacity, broader scheduling availability, and stronger marketing reach, which drives higher visit volume and larger annual collections.",
  },
  {
    question: "Is a multi-doctor model always better for valuation?",
    answer:
      "Not always, but chiropractic clinics with transferable systems, diversified doctor production, and less owner dependence generally command stronger buyer interest than purely owner-centric practices.",
  },
  {
    question: "Which model has lower operational risk?",
    answer:
      "Solo operations are simpler but carry key-person risk tied to one owner DC. Multi-doctor clinics reduce provider concentration risk but introduce hiring, supervision, and coordination complexity.",
  },
  {
    question: "How should owners evaluate compensation trade-offs?",
    answer:
      "Solo owners often retain higher margin per dollar of revenue, while multi-doctor owners may earn more total compensation through aggregate cash flow, delegation leverage, and potential equity value.",
  },
  {
    question: "What can roughly $350K of capital do in solo versus multi-doctor chiropractic?",
    answer:
      "In solo chiropractic, $350K can often reach faster break-even and stronger owner margin quality. In multi-doctor chiropractic, the same capital can unlock higher total revenue but typically with longer payback and more organizational overhead.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Solo Chiropractic Practice", "Multi-Doctor Chiropractic Practice", {
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
    "Solo chiropractic practice fits your priorities with stronger owner-level margins, autonomy, and a more lifestyle-aligned clinic operating model.",
  right:
    "Multi-doctor chiropractic practice matches your goals if you want multi-provider scale, enterprise valuation upside, and growth less dependent on one chiropractor.",
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
