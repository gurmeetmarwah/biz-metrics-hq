import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "private-practice-vs-dso",
  title: "Private Practice vs DSO-Affiliated Practice",
  subtitle:
    "Compare autonomy, EBITDA retention, compensation structure, scale economics, and risk profile between independent private practices and DSO-affiliated models.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Private Dental Practice",
  right: "DSO-Affiliated Practice",
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
  { factor: "Clinical and Operational Autonomy", winner: "Private Dental Practice" },
  { factor: "Back-Office Support", winner: "DSO-Affiliated Practice" },
  { factor: "Owner Margin Retention", winner: "Private Dental Practice" },
  { factor: "Speed to Multi-Site Scale", winner: "DSO-Affiliated Practice" },
  { factor: "Income Stability for Non-Operators", winner: "DSO-Affiliated Practice" },
  { factor: "Long-Term Equity Control", winner: "Private Dental Practice" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue Per Site", left: "$1.2M – $2.6M", right: "$1.5M – $3.2M" },
  { metric: "EBITDA Margin", left: "20 – 30%", right: "14 – 22%" },
  { metric: "Owner/Lead Doctor Compensation", left: "$240K – $420K", right: "$180K – $320K + incentives" },
  { metric: "Monthly Patient Visits", left: "120 – 190", right: "180 – 320" },
  { metric: "Revenue Per Patient", left: "$900 – $1,150/yr", right: "$750 – $1,000/yr" },
  { metric: "Startup/Entry Cost", left: "$515K – $1.0M", right: "$250K – $700K personal capital" },
  { metric: "Valuation Basis", left: "3.2× – 4.5× SDE", right: "5.0× – 8.5× EBITDA platform-level" },
] as const;

export const winnerScorecard = [
  { label: "Owner Control", left: 10, right: 4, winner: "Private Dental Practice" },
  { label: "Operational Support", left: 6, right: 9, winner: "DSO-Affiliated Practice" },
  { label: "Per-Site Margin Capture", left: 9, right: 6, winner: "Private Dental Practice" },
  { label: "Scale and Risk Diversification", left: 6, right: 9, winner: "DSO-Affiliated Practice" },
] as const;

export const leftRevenueSources = [
  "Owner-led hygiene and recall",
  "Restorative and prosthodontic care",
  "Elective cosmetic cases",
  "Implants and surgery referrals retained",
  "Membership plans",
  "Emergency and same-day care",
] as const;

export const rightRevenueSources = [
  "Centralized marketing-driven new patients",
  "High-throughput hygiene lines",
  "Standardized restorative production",
  "Cross-site specialty referral capture",
  "Payer contract optimization",
  "Ancillary financing programs",
] as const;

export const revenueFunnel = {
  left: ["Local Reputation", "Consult + Plan", "Owner-Led Acceptance", "Collections"],
  right: ["Central Marketing", "Call Center Routing", "Standardized Treatment", "Collections"],
} as const;

export const patientFunnel = {
  left: ["New Patient", "Doctor Relationship", "Plan Acceptance", "Recall Loyalty"],
  right: ["Central Intake", "Provider Assignment", "Protocol-Based Care", "System Retention"],
} as const;

export const operatoryFunnel = {
  left: ["Owned Capacity", "Provider Production", "Case Mix Control", "Collected Revenue"],
  right: ["Network Capacity", "Provider Utilization", "Standardized Throughput", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Decision Speed", left: "Owner decides same-day", right: "Governance + policy approvals" },
  { driver: "Marketing Engine", left: "Local, referral heavy", right: "Centralized digital + call center" },
  { driver: "Service Standardization", left: "Customized by owner philosophy", right: "Protocol-based consistency" },
  { driver: "Capacity Leverage", left: "Single-site constrained", right: "Cross-site staffing flexibility" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Annual Revenue Per Active Patient", left: "$900 – $1,150", right: "$750 – $1,000" },
  { metric: "Annual Visits Per Patient", left: "1.9 – 2.5", right: "2.1 – 2.9" },
  { metric: "Estimated Lifetime Value", left: "$4,000 – $9,500", right: "$3,800 – $8,500" },
  { metric: "Retention Horizon", left: "6 – 10 years", right: "5 – 8 years" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Chair", left: "$360K – $560K", right: "$320K – $520K" },
  { metric: "Revenue Per Provider", left: "$850K – $1.5M", right: "$700K – $1.2M" },
  { metric: "Revenue Per Staff Member", left: "$125K – $185K", right: "$110K – $165K" },
] as const;

export const marginTiers = {
  left: { weak: "16 – 20%", average: "23 – 27%", strong: "28 – 30%" },
  right: { weak: "10 – 14%", average: "16 – 19%", strong: "20 – 22%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "27 – 34%", right: "30 – 38%" },
  { expense: "Administrative Overhead", left: "7 – 11%", right: "10 – 16%" },
  { expense: "Corporate/Management Fees", left: "0 – 3%", right: "8 – 14%" },
  { expense: "Marketing + Patient Acquisition", left: "3 – 6%", right: "5 – 9%" },
] as const;

export const insuranceHighlights = {
  left: { title: "Contract Flexibility", value: "Owner can tune payer participation by market" },
  right: { title: "Contracting Leverage", value: "Network scale can improve negotiated rates" },
} as const;

export const insuranceComparison = [
  { metric: "Insurance Revenue %", left: "50 – 68%", right: "60 – 78%" },
  { metric: "Cash + Membership Revenue %", left: "28 – 45%", right: "18 – 35%" },
  { metric: "Average Net Collection Rate", left: "93 – 97%", right: "92 – 96%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Independent Owner-Operator", earnings: "$240K – $420K", type: "left" },
  { model: "DSO Lead Dentist/Partner", earnings: "$180K – $320K + bonus", type: "right" },
  { model: "Independent Multi-Site Owner", earnings: "$500K – $900K+", type: "left" },
  { model: "DSO Equity Participant", earnings: "$300K – $800K+ (liquidity event dependent)", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Buildout/Acquisition", percent: 34 },
  { item: "Operatories + Equipment", percent: 31 },
  { item: "Technology", percent: 13 },
  { item: "Working Capital", percent: 22 },
] as const;

export const rightStartupItems = [
  { item: "Equity Buy-In", percent: 28 },
  { item: "Working Capital Reserve", percent: 22 },
  { item: "Transition + Legal", percent: 16 },
  { item: "Performance Growth Investment", percent: 34 },
] as const;

export const startupSideBySide = [
  { category: "Entry Capital", left: "$515K – $1.0M", right: "$250K – $700K" },
  { category: "Equipment Exposure", left: "$250K – $450K", right: "Often shared/platform-funded" },
  { category: "Systems Investment", left: "$40K – $80K", right: "Included in network stack" },
  { category: "Working Capital", left: "$75K – $150K", right: "$80K – $220K" },
] as const;

export const valuationComparison = [
  { metric: "Primary Valuation Lens", left: "SDE-focused private market", right: "EBITDA-focused platform market" },
  { metric: "Typical Multiple Range", left: "3.2× – 4.5× SDE", right: "5.0× – 8.5× EBITDA" },
  { metric: "Liquidity Path", left: "Individual practice sale", right: "Recap or platform transaction" },
] as const;

export const valuationExamples = {
  left: { revenue: "$1.9M", value: "$1.5M – $2.2M", note: "4.0× SDE on $470K owner benefit" },
  right: { revenue: "$2.3M site equivalent", value: "$2.0M – $3.1M enterprise implied", note: "6.2× EBITDA on $410K site EBITDA" },
} as const;

export const valuationExampleTitle = "Private Exit vs Platform Economics";

export const breakEvenComparison = [
  { metric: "Monthly Collections Needed", left: "$120K – $155K", right: "$130K – $190K per site target" },
  { metric: "Active Patients Needed", left: "900 – 1,200", right: "1,200 – 2,000 per site" },
  { metric: "Months to Break-Even", left: "18 – 30 months", right: "12 – 24 months (affiliation pathway)" },
] as const;

export const scalingLadder = {
  left: ["Independent Solo", "Add Associate", "Second Private Site", "Regional Independent Group"],
  right: ["Affiliated Site", "Multi-Site Pod", "Regional Platform", "National Roll-Up"],
} as const;

export const scalingLeftTitle = "Independent Ownership Path";
export const scalingRightTitle = "DSO Affiliation Path";

export const capitalEfficiency = {
  investment: "$500,000",
  left: {
    revenue: "$1.2M – $1.8M",
    profit: "$280K – $460K EBITDA",
    payback: "2.8 – 4.8 years",
  },
  right: {
    revenue: "$1.5M – $2.3M (site-level)",
    profit: "$230K – $420K EBITDA",
    payback: "3.0 – 5.0 years",
  },
} as const;

export const chooseLeftTitle = "Choose Private Practice If";
export const chooseRightTitle = "Choose DSO Affiliation If";

export const chooseLeft = [
  "You want full control over clinical standards and culture",
  "You prioritize retaining more per-site EBITDA and owner income",
  "You prefer building independent equity over minority platform economics",
  "You are comfortable managing recruiting, billing, and operations directly",
  "You value flexibility in payer participation and service mix",
] as const;

export const chooseRight = [
  "You want centralized support for recruiting, marketing, and RCM",
  "You prefer reduced solo operator risk and shared infrastructure",
  "You are willing to trade some autonomy for scale resources",
  "You want to grow across locations with standardized systems",
  "You are targeting upside through platform-level liquidity events",
] as const;

export const calculators = [
  { label: "Dental Practice Valuation Calculator", href: "/calculators/dental-practice-valuation/" },
  { label: "Owner Compensation Calculator", href: "/calculators/dental-practice-associate-compensation/" },
  { label: "Practice Margin Calculator", href: "/calculators/dental-practice-ebitda/" },
  { label: "Acquisition ROI Calculator", href: "/calculators/dental-practice-valuation/" },
  { label: "Break-Even Runway Calculator", href: "/calculators/dental-practice-break-even/" },
] as const;

export const relatedComparisons = [
  { label: "Dental Practice vs Orthodontic Practice", href: "/comparisons/dental-practice-vs-orthodontic-practice/" },
  { label: "Dental Practice vs Medical Practice", href: "/comparisons/dental-practice-vs-medical-practice/" },
  { label: "Dental Practice vs Veterinary Clinic", href: "/comparisons/dental-practice-vs-veterinary-clinic/" },
  { label: "Solo vs Group Dental Practice", href: "/comparisons/solo-vs-group-dental-practice/" },
  { label: "Dental Practice Hub", href: "/industries/healthcare/dental-practice/" },
] as const;

export const faqs = [
  {
    question: "Do private practices usually have higher margins than DSO-affiliated sites?",
    answer:
      "Often yes. Independent owners can retain more per-site EBITDA, while DSO models absorb additional corporate overhead and management fees in exchange for support infrastructure.",
  },
  {
    question: "Why do some dentists still choose DSOs?",
    answer:
      "DSOs reduce administrative burden, provide recruiting and marketing support, and can lower operational risk for dentists who prefer clinical focus over business management.",
  },
  {
    question: "Is owner compensation always lower in DSOs?",
    answer:
      "Base compensation is often lower than fully independent ownership, but incentive plans and equity participation can create upside depending on platform performance and exit timing.",
  },
  {
    question: "Which model offers better long-term autonomy?",
    answer:
      "Private ownership offers significantly more autonomy in staffing, payer strategy, clinical protocols, and reinvestment priorities.",
  },
  {
    question: "How should I evaluate DSO equity value?",
    answer:
      "Assess vesting terms, dilution, recap assumptions, and debt structure. DSO equity upside can be meaningful, but outcomes vary widely by platform quality and market cycle.",
  },
  {
    question: "What does $500K of capital look like in both paths?",
    answer:
      "In private practice, $500K typically builds meaningful direct equity and stronger per-site cash flow. In DSO pathways, the same capital may fund partial ownership and growth participation with lower operational burden but less direct control.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Private Dental Practice", "DSO-Affiliated Practice", {
    clinicalGeneral: 2,
    clinicalSpecialty: 2,
    revenueModerate: 3,
    revenueHigh: 2,
    revenueVeryHigh: 1,
    insuranceLow: 3,
    insuranceMedium: 2,
    insuranceHigh: 1,
    growthLifestyle: 3,
    growthRegional: 1,
    growthMulti: 1,
  });
}

export const decisionToolCopy = {
  left:
    "Private practice aligns with your priorities: greater autonomy, stronger owner-level margin retention, and long-term independent equity control.",
  right:
    "DSO affiliation fits your goals if you want scale support, lower operator risk, and a growth model backed by centralized infrastructure.",
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
