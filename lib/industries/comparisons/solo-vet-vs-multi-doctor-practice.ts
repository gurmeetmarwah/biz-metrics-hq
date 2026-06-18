import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "solo-vet-vs-multi-doctor-practice",
  title: "Solo Vet vs Multi-Doctor Practice",
  subtitle:
    "Compare owner economics, team leverage, throughput, valuation, and scaling paths between solo-veterinarian clinics and multi-doctor veterinary practice models.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Solo Vet Practice",
  right: "Multi-Doctor Vet Practice",
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
  { factor: "Higher Revenue Per Entity", winner: "Multi-Doctor Vet Practice" },
  { factor: "Higher Margin Per Owner", winner: "Solo Vet Practice" },
  { factor: "Lifestyle Flexibility", winner: "Solo Vet Practice" },
  { factor: "Scale and Delegation", winner: "Multi-Doctor Vet Practice" },
  { factor: "Lower Management Complexity", winner: "Solo Vet Practice" },
  { factor: "Enterprise Exit Optionality", winner: "Multi-Doctor Vet Practice" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$600K – $950K", right: "$1.4M – $2.0M" },
  { metric: "EBITDA Margin", left: "19 – 24%", right: "15 – 20%" },
  { metric: "Owner Compensation", left: "$120K – $220K", right: "$180K – $280K+ (lead owner)" },
  { metric: "Monthly Patient Visits", left: "180 – 320", right: "420 – 900" },
  { metric: "Revenue Per Patient", left: "$350 – $900/yr", right: "$320 – $760/yr" },
  { metric: "Startup/Acquisition Cost", left: "$350K – $800K", right: "$900K – $2.4M" },
  { metric: "Practice Valuation", left: "2.8× – 4.0× SDE", right: "4.5× – 7.0× EBITDA" },
] as const;

export const winnerScorecard = [
  { label: "Owner Margin Quality", left: 9, right: 6, winner: "Solo Vet Practice" },
  { label: "Growth Capacity", left: 6, right: 10, winner: "Multi-Doctor Vet Practice" },
  { label: "Operational Simplicity", left: 9, right: 5, winner: "Solo Vet Practice" },
  { label: "Valuation Upside", left: 7, right: 9, winner: "Multi-Doctor Vet Practice" },
] as const;

export const leftRevenueSources = [
  "Preventive wellness exams",
  "Vaccinations and routine care",
  "Diagnostics and imaging",
  "Basic surgeries and procedures",
  "Pharmacy and preventive products",
  "Urgent care visits",
] as const;

export const rightRevenueSources = [
  "Multi-doctor wellness streams",
  "Expanded diagnostics and surgery",
  "Specialty and referral services",
  "Urgent and extended-hours care",
  "Membership and preventive plans",
  "Cross-provider continuity visits",
] as const;

export const revenueFunnel = {
  left: ["Local Demand", "Consult + Workup", "Treatment Plan", "Collections"],
  right: ["Multi-Channel Intake", "Triage + Routing", "Provider Assignment", "Collections"],
} as const;

export const patientFunnel = {
  left: ["New Pet Client", "Wellness Visit", "Doctor-Led Care Plan", "Annual Retention"],
  right: ["Central Intake", "Provider Assignment", "Multi-Service Utilization", "System Retention"],
} as const;

export const operatoryFunnel = {
  left: ["Exam Room Utilization", "Daily Procedure Mix", "Doctor-Led Throughput", "Collected Revenue"],
  right: ["Clinic Capacity", "Provider Mix", "Shared Capacity", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Provider Capacity", left: "1 veterinarian + compact support team", right: "3–5 veterinarians + expanded nurse/tech teams" },
  { driver: "Service Mix", left: "General practice and preventive heavy", right: "General + advanced diagnostics and surgery blend" },
  { driver: "Marketing Scale", left: "Local referral and neighborhood visibility", right: "Centralized campaigns and local referral engines" },
  { driver: "Schedule Optimization", left: "Veterinarian-dependent throughput", right: "Systemized multi-provider templates" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Annual Revenue Per Active Patient", left: "$350 – $900", right: "$320 – $760" },
  { metric: "Annual Visits Per Patient", left: "1.3 – 2.1", right: "1.6 – 2.8" },
  { metric: "Estimated Lifetime Value", left: "$1,800 – $5,000", right: "$2,300 – $6,500" },
  { metric: "Retention Horizon", left: "4 – 8 years", right: "5 – 10 years" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Exam Room", left: "$200K – $330K", right: "$220K – $380K" },
  { metric: "Revenue Per Provider", left: "$500K – $900K", right: "$450K – $760K" },
  { metric: "Revenue Per Staff Member", left: "$85K – $130K", right: "$90K – $140K" },
] as const;

export const marginTiers = {
  left: { weak: "14 – 18%", average: "19 – 22%", strong: "23 – 24%" },
  right: { weak: "11 – 14%", average: "16 – 18%", strong: "19 – 20%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "29 – 36%", right: "32 – 41%" },
  { expense: "Admin + Management", left: "8 – 12%", right: "12 – 19%" },
  { expense: "Medical Supplies + Pharmacy", left: "9 – 14%", right: "9 – 13%" },
  { expense: "Marketing + Client Acquisition", left: "3 – 6%", right: "5 – 9%" },
] as const;

export const insuranceHighlights = {
  left: { title: "Owner-Controlled Pricing", value: "Most revenue remains direct-pay and clinic-controlled" },
  right: { title: "Scale Contracting Leverage", value: "Higher purchasing power on labs, drugs, and systems" },
} as const;

export const insuranceComparison = [
  { metric: "Insurance Revenue %", left: "5 – 20%", right: "8 – 25%" },
  { metric: "Direct Client-Pay Revenue %", left: "75 – 95%", right: "70 – 92%" },
  { metric: "Average Collection Lag", left: "0 – 7 days", right: "2 – 12 days" },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo Owner-Operator", earnings: "$120K – $220K", type: "left" },
  { model: "Lead Multi-Doctor Owner", earnings: "$180K – $280K+", type: "right" },
  { model: "Solo Owner + Associate", earnings: "$170K – $260K", type: "left" },
  { model: "Regional Multi-Site Vet Owner", earnings: "$350K – $600K+", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Acquisition/Buildout", percent: 34 },
  { item: "Medical Equipment", percent: 28 },
  { item: "Technology + PMS", percent: 12 },
  { item: "Working Capital", percent: 26 },
] as const;

export const rightStartupItems = [
  { item: "Multi-Doctor Acquisition", percent: 43 },
  { item: "Facility + Equipment Upgrades", percent: 24 },
  { item: "Central Ops + Tech", percent: 14 },
  { item: "Working Capital", percent: 19 },
] as const;

export const startupSideBySide = [
  { category: "Acquisition/Buildout", left: "$130K – $300K", right: "$450K – $1.5M" },
  { category: "Equipment", left: "$120K – $260K", right: "$250K – $700K" },
  { category: "Technology + Systems", left: "$25K – $60K", right: "$90K – $240K" },
  { category: "Working Capital", left: "$75K – $180K", right: "$180K – $500K" },
] as const;

export const valuationComparison = [
  { metric: "SDE/EBITDA Multiple", left: "2.8× – 4.0× SDE", right: "4.5× – 7.0× EBITDA" },
  { metric: "Revenue Multiple", left: "0.5× – 0.9×", right: "0.8× – 1.4×" },
  { metric: "Buyer Universe", left: "Local buyers + associates + independent vets", right: "Corporate groups + PE-backed platforms" },
] as const;

export const valuationExamples = {
  left: { revenue: "$850K", value: "$600K – $980K", note: "3.4× SDE on $230K owner benefit" },
  right: { revenue: "$1.8M", value: "$2.0M – $3.2M", note: "5.8× EBITDA on $360K EBITDA" },
} as const;

export const valuationExampleTitle = "Illustrative Valuation at Scale";

export const breakEvenComparison = [
  { metric: "Monthly Collections Needed", left: "$70K – $95K", right: "$180K – $280K" },
  { metric: "Active Patients Needed", left: "1,300 – 2,100", right: "3,500 – 7,000" },
  { metric: "Months to Break-Even", left: "14 – 24 months", right: "22 – 36 months" },
] as const;

export const scalingLadder = {
  left: ["Owner-Operator", "Add Associate Vet", "High-Performance Solo", "Optional Second Clinic"],
  right: ["Two-Doctor Clinic", "Multi-Doctor Hub", "Multi-Clinic Regional Group", "Platform Expansion"],
} as const;

export const scalingLeftTitle = "Solo Path";
export const scalingRightTitle = "Multi-Doctor Path";

export const capitalEfficiency = {
  investment: "$500,000",
  left: {
    revenue: "$700K – $1.1M",
    profit: "$130K – $230K EBITDA",
    payback: "2.9 – 4.6 years",
  },
  right: {
    revenue: "$1.1M – $1.8M",
    profit: "$170K – $300K EBITDA",
    payback: "3.6 – 5.6 years",
  },
} as const;

export const chooseLeftTitle = "Choose Solo Vet Practice If";
export const chooseRightTitle = "Choose Multi-Doctor Practice If";

export const chooseLeft = [
  "You prioritize margin quality and direct control over clinic decisions",
  "You want lower organizational complexity and fewer management layers",
  "You prefer a lifestyle-oriented schedule with selective growth",
  "You value owner-operator autonomy over enterprise scale",
  "You want faster payback on a single-clinic investment",
] as const;

export const chooseRight = [
  "You want larger top-line scale and multi-provider capacity",
  "You are comfortable trading some margin for growth velocity",
  "You plan to build enterprise value for a strategic exit",
  "You can manage systems, middle management, and recruiting at scale",
  "You want less dependence on a single veterinarian producer",
] as const;

export const calculators = [
  { label: "Veterinary Clinic Valuation Calculator", href: "/calculators/veterinary-clinic-valuation/" },
  { label: "Veterinary Clinic EBITDA Calculator", href: "/calculators/veterinary-clinic-ebitda/" },
  { label: "Revenue Per Client Calculator", href: "/calculators/veterinary-clinic-revenue-per-client/" },
  { label: "Revenue Per Veterinarian Calculator", href: "/calculators/veterinary-clinic-revenue-per-veterinarian/" },
  { label: "Break-Even Runway Calculator", href: "/calculators/veterinary-clinic-break-even/" },
] as const;

export const relatedComparisons = [
  { label: "Dental Practice vs Veterinary Clinic", href: "/comparisons/dental-practice-vs-veterinary-clinic/" },
  { label: "Private Practice vs Corporate Vet", href: "/comparisons/private-practice-vs-corporate-vet/" },
  { label: "Solo vs Group Dental Practice", href: "/comparisons/solo-vs-group-dental-practice/" },
  { label: "Private Practice vs DSO", href: "/comparisons/private-practice-vs-dso/" },
  { label: "Veterinary Clinic Hub", href: "/industries/healthcare/veterinary-clinic/" },
] as const;

export const faqs = [
  {
    question: "Why can solo vet practices have higher margins per owner?",
    answer:
      "Solo clinics typically run with leaner management layers and tighter overhead, allowing a larger share of collected revenue to flow to the owner when doctor utilization is healthy.",
  },
  {
    question: "Why do multi-doctor clinics usually produce more revenue?",
    answer:
      "Multi-doctor practices combine several producers, broader service capacity, and stronger scheduling density, which raises overall visit volume and procedure throughput.",
  },
  {
    question: "Is multi-doctor ownership always better for valuation?",
    answer:
      "Not always, but larger clinics with transferable systems and less dependence on one veterinarian generally attract stronger EBITDA-based buyer interest than solo-owner operations.",
  },
  {
    question: "Which model is less risky operationally?",
    answer:
      "Solo practices carry key-person risk tied to one veterinarian. Multi-doctor practices reduce clinician concentration risk but add complexity in staffing, management, and governance.",
  },
  {
    question: "How should owners think about compensation in multi-doctor models?",
    answer:
      "Lead owners may retain lower per-doctor margin but can earn higher total compensation through larger aggregate cash flow, management leverage, and eventual equity value creation.",
  },
  {
    question: "What can $500K of capital do in solo vs multi-doctor vet models?",
    answer:
      "In solo settings, $500K often reaches stronger margin efficiency and faster payback. In multi-doctor models, the same capital can unlock higher total revenue but usually with longer payback because of scale overhead.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Solo Vet Practice", "Multi-Doctor Vet Practice", {
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
    "Solo vet practice fits your priorities with stronger owner-level margins, autonomy, and a more lifestyle-aligned operating model.",
  right:
    "Multi-doctor vet practice matches your goals if you want multi-provider scale, valuation upside, and growth less dependent on one veterinarian.",
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
