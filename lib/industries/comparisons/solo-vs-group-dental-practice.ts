import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "solo-vs-group-dental-practice",
  title: "Solo vs Group Dental Practice",
  subtitle:
    "Compare owner economics, staffing leverage, throughput, valuation, and scaling paths between solo-owner practices and multi-doctor group dental models.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Solo Dental Practice",
  right: "Group Dental Practice",
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
  { factor: "Higher Revenue Per Entity", winner: "Group Dental Practice" },
  { factor: "Higher Margin Per Owner", winner: "Solo Dental Practice" },
  { factor: "Lifestyle Flexibility", winner: "Solo Dental Practice" },
  { factor: "Scale and Delegation", winner: "Group Dental Practice" },
  { factor: "Lower Management Complexity", winner: "Solo Dental Practice" },
  { factor: "Enterprise Exit Optionality", winner: "Group Dental Practice" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$1.2M – $1.9M", right: "$2.5M – $6.5M" },
  { metric: "EBITDA Margin", left: "22 – 30%", right: "16 – 24%" },
  { metric: "Owner Compensation", left: "$260K – $420K", right: "$300K – $700K (lead owner)" },
  { metric: "Monthly Patient Visits", left: "110 – 160", right: "300 – 700" },
  { metric: "Revenue Per Patient", left: "$950 – $1,200/yr", right: "$800 – $1,050/yr" },
  { metric: "Startup/Acquisition Cost", left: "$515K – $1.0M", right: "$1.2M – $4.0M" },
  { metric: "Practice Valuation", left: "3.2× – 4.3× SDE", right: "4.5× – 7.0× EBITDA" },
] as const;

export const winnerScorecard = [
  { label: "Owner Margin Quality", left: 9, right: 6, winner: "Solo Dental Practice" },
  { label: "Growth Capacity", left: 6, right: 10, winner: "Group Dental Practice" },
  { label: "Operational Simplicity", left: 9, right: 5, winner: "Solo Dental Practice" },
  { label: "Valuation Upside", left: 7, right: 9, winner: "Group Dental Practice" },
] as const;

export const leftRevenueSources = [
  "Hygiene recall",
  "Restorative procedures",
  "Crowns and bridge",
  "Emergency visits",
  "Selective specialty referrals retained",
  "Cosmetic upgrades",
] as const;

export const rightRevenueSources = [
  "Multi-provider hygiene streams",
  "Comprehensive restorative lines",
  "In-house specialty services",
  "Implant and surgery centers",
  "Membership plans across sites",
  "Cross-location referrals",
] as const;

export const revenueFunnel = {
  left: ["Local Leads", "Exam + Plan", "Treatment Acceptance", "Collections"],
  right: ["Multi-Channel Marketing", "Triage + Scheduling", "Provider Routing", "Collections"],
} as const;

export const patientFunnel = {
  left: ["New Patient", "Comprehensive Exam", "Single-Doctor Care Plan", "Recall Retention"],
  right: ["Central Intake", "Provider Assignment", "Multi-Service Utilization", "System Retention"],
} as const;

export const operatoryFunnel = {
  left: ["Chair Utilization", "Production Blocks", "Doctor-Led Treatment", "Collected Revenue"],
  right: ["Site Utilization", "Provider Mix", "Shared Capacity", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Provider Capacity", left: "1 doctor + 1–2 hygienists", right: "2–8 doctors + expanded hygiene teams" },
  { driver: "Service Mix", left: "General dentistry heavy", right: "General + specialty blend" },
  { driver: "Marketing Scale", left: "Primarily local referral-driven", right: "Centralized paid + referral engines" },
  { driver: "Schedule Optimization", left: "Doctor-dependent throughput", right: "Systemized multi-provider templates" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Annual Revenue Per Active Patient", left: "$950 – $1,200", right: "$800 – $1,050" },
  { metric: "Annual Visits Per Patient", left: "1.8 – 2.3", right: "2.0 – 2.8" },
  { metric: "Estimated Lifetime Value", left: "$4,000 – $9,000", right: "$4,500 – $10,500" },
  { metric: "Retention Horizon", left: "5 – 8 years", right: "6 – 10 years" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Chair", left: "$380K – $560K", right: "$300K – $500K" },
  { metric: "Revenue Per Provider", left: "$900K – $1.5M", right: "$750K – $1.2M" },
  { metric: "Revenue Per Staff Member", left: "$130K – $185K", right: "$110K – $165K" },
] as const;

export const marginTiers = {
  left: { weak: "18 – 22%", average: "24 – 27%", strong: "28 – 30%" },
  right: { weak: "12 – 16%", average: "18 – 21%", strong: "22 – 24%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "27 – 33%", right: "30 – 38%" },
  { expense: "Admin + Management", left: "8 – 11%", right: "12 – 18%" },
  { expense: "Supplies + Lab", left: "6 – 10%", right: "6 – 9%" },
  { expense: "Marketing + Brand", left: "3 – 6%", right: "5 – 9%" },
] as const;

export const insuranceHighlights = {
  left: { title: "Owner-Controlled Payer Strategy", value: "Often 50 – 65% insurance mix" },
  right: { title: "Negotiated Scale Contracts", value: "Often 60 – 75% insurance mix at group level" },
} as const;

export const insuranceComparison = [
  { metric: "Insurance Revenue %", left: "50 – 65%", right: "60 – 75%" },
  { metric: "Cash + Membership Revenue %", left: "30 – 45%", right: "20 – 35%" },
  { metric: "Average Net Collection Rate", left: "93 – 97%", right: "91 – 96%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo Owner-Operator", earnings: "$260K – $420K", type: "left" },
  { model: "Lead Group Owner (Single Group)", earnings: "$300K – $700K", type: "right" },
  { model: "Solo Owner + Associate", earnings: "$350K – $550K", type: "left" },
  { model: "Regional Group Equity Owner", earnings: "$600K – $1.2M+", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Acquisition/Buildout", percent: 35 },
  { item: "Operatories + Equipment", percent: 30 },
  { item: "Technology", percent: 12 },
  { item: "Working Capital", percent: 23 },
] as const;

export const rightStartupItems = [
  { item: "Multi-Site Acquisition", percent: 44 },
  { item: "Equipment + Fit-outs", percent: 23 },
  { item: "Central Ops + Tech", percent: 15 },
  { item: "Working Capital", percent: 18 },
] as const;

export const startupSideBySide = [
  { category: "Acquisition/Buildout", left: "$220K – $450K", right: "$700K – $2.2M" },
  { category: "Equipment", left: "$180K – $320K", right: "$250K – $900K" },
  { category: "Technology + Systems", left: "$30K – $70K", right: "$120K – $350K" },
  { category: "Working Capital", left: "$85K – $160K", right: "$180K – $550K" },
] as const;

export const valuationComparison = [
  { metric: "SDE/EBITDA Multiple", left: "3.2× – 4.3× SDE", right: "4.5× – 7.0× EBITDA" },
  { metric: "Revenue Multiple", left: "0.6× – 0.95×", right: "0.9× – 1.5×" },
  { metric: "Buyer Universe", left: "Associates + local buyers + DSOs", right: "DSOs + PE-backed platforms" },
] as const;

export const valuationExamples = {
  left: { revenue: "$1.6M", value: "$1.2M – $1.7M", note: "4.0× SDE on $410K owner benefit" },
  right: { revenue: "$4.2M", value: "$4.0M – $6.1M", note: "5.5× EBITDA on $740K EBITDA" },
} as const;

export const valuationExampleTitle = "Illustrative Valuation at Scale";

export const breakEvenComparison = [
  { metric: "Monthly Collections Needed", left: "$115K – $145K", right: "$240K – $420K" },
  { metric: "Active Patients Needed", left: "850 – 1,100", right: "2,800 – 5,500" },
  { metric: "Months to Break-Even", left: "16 – 28 months", right: "24 – 42 months" },
] as const;

export const scalingLadder = {
  left: ["Owner-Operator", "Add Associate", "High-Performance Solo", "Optional Second Site"],
  right: ["Two-Doctor Group", "Multi-Doctor Hub", "Multi-Site Regional Group", "Platform Expansion"],
} as const;

export const scalingLeftTitle = "Solo Path";
export const scalingRightTitle = "Group Path";

export const capitalEfficiency = {
  investment: "$500,000",
  left: {
    revenue: "$1.1M – $1.6M",
    profit: "$250K – $420K EBITDA",
    payback: "2.8 – 4.5 years",
  },
  right: {
    revenue: "$1.6M – $2.6M",
    profit: "$260K – $470K EBITDA",
    payback: "3.5 – 5.5 years",
  },
} as const;

export const chooseLeftTitle = "Choose Solo Practice If";
export const chooseRightTitle = "Choose Group Practice If";

export const chooseLeft = [
  "You prioritize margin quality and direct control of decisions",
  "You want lower organizational complexity and fewer management layers",
  "You prefer a lifestyle-oriented schedule with selective growth",
  "You value owner-operator autonomy over enterprise scale",
  "You want faster payback on a single-site investment",
] as const;

export const chooseRight = [
  "You want larger top-line scale and multi-provider capacity",
  "You are comfortable trading some margin for growth velocity",
  "You plan to build enterprise value for strategic exit",
  "You can manage systems, middle management, and recruiting at scale",
  "You want to reduce dependence on a single producer",
] as const;

export const calculators = [
  { label: "Dental Practice Valuation Calculator", href: "/calculators/dental-practice-valuation/" },
  { label: "Solo Practice EBITDA Calculator", href: "/calculators/dental-practice-ebitda/" },
  { label: "Group Practice Capacity Calculator", href: "/calculators/dental-practice-revenue-per-patient/" },
  { label: "Revenue Per Chair Calculator", href: "/calculators/dental-practice-revenue-per-patient/" },
  { label: "Break-Even Runway Calculator", href: "/calculators/dental-practice-break-even/" },
] as const;

export const relatedComparisons = [
  { label: "Dental Practice vs Orthodontic Practice", href: "/comparisons/dental-practice-vs-orthodontic-practice/" },
  { label: "Dental Practice vs Medical Practice", href: "/comparisons/dental-practice-vs-medical-practice/" },
  { label: "Dental Practice vs Veterinary Clinic", href: "/comparisons/dental-practice-vs-veterinary-clinic/" },
  { label: "Private Practice vs DSO", href: "/comparisons/private-practice-vs-dso/" },
  { label: "Dental Practice Hub", href: "/industries/healthcare/dental-practice/" },
] as const;

export const faqs = [
  {
    question: "Why can solo practices have higher margins per owner?",
    answer:
      "Solo offices often run leaner management structures and lower overhead layers, allowing a larger share of collections to flow to the owner when production is consistent.",
  },
  {
    question: "Why do group practices usually generate more revenue?",
    answer:
      "Groups combine multiple providers, broader service mix, and centralized marketing, which increases patient throughput and total collections across the organization.",
  },
  {
    question: "Is group ownership always better for valuation?",
    answer:
      "Not always, but larger groups with transferable systems and diversified provider dependence can attract higher EBITDA multiples than single-owner practices.",
  },
  {
    question: "Which model is less risky operationally?",
    answer:
      "Solo practices carry key-person risk tied to one owner-doctor. Groups reduce that concentration risk but add complexity in staffing, management, and governance.",
  },
  {
    question: "How should I think about owner compensation in groups?",
    answer:
      "Lead owners in groups may take lower per-doctor margin but can earn more total compensation through larger cash flow, management fees, and equity value creation.",
  },
  {
    question: "What does $500K capital do in solo vs group models?",
    answer:
      "In solo settings, $500K can often reach stronger margin efficiency quickly. In group models, the same capital can unlock more total revenue but typically with a longer payback due to scale overhead.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Solo Dental Practice", "Group Dental Practice", {
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
    "Solo dental practice fits your priorities with stronger owner-level margins, autonomy, and a more lifestyle-aligned operating model.",
  right:
    "Group dental practice matches your goals if you want multi-provider scale, enterprise valuation upside, and growth less dependent on one clinician.",
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
