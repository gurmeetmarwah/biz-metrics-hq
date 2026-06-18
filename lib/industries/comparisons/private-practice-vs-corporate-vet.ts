import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "private-practice-vs-corporate-vet",
  title: "Private Practice vs Corporate Vet",
  subtitle:
    "Compare autonomy, EBITDA retention, compensation structure, scale economics, and risk profile between independent veterinary clinics and corporate-owned veterinary models.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Private Vet Practice",
  right: "Corporate Vet Clinic",
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
  { factor: "Clinical and Operational Autonomy", winner: "Private Vet Practice" },
  { factor: "Back-Office Support", winner: "Corporate Vet Clinic" },
  { factor: "Owner Margin Retention", winner: "Private Vet Practice" },
  { factor: "Speed to Multi-Site Scale", winner: "Corporate Vet Clinic" },
  { factor: "Income Stability for Non-Operators", winner: "Corporate Vet Clinic" },
  { factor: "Long-Term Equity Control", winner: "Private Vet Practice" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue Per Site", left: "$700K – $1.6M", right: "$1.1M – $2.1M" },
  { metric: "EBITDA Margin", left: "17 – 24%", right: "12 – 19%" },
  { metric: "Owner/Lead Veterinarian Compensation", left: "$140K – $260K", right: "$120K – $220K + incentives" },
  { metric: "Monthly Patient Visits", left: "220 – 520", right: "360 – 780" },
  { metric: "Revenue Per Patient", left: "$360 – $900/yr", right: "$320 – $760/yr" },
  { metric: "Startup/Entry Cost", left: "$350K – $900K", right: "$200K – $650K personal capital" },
  { metric: "Valuation Basis", left: "2.8× – 4.2× SDE", right: "5.0× – 8.0× EBITDA platform-level" },
] as const;

export const winnerScorecard = [
  { label: "Owner Control", left: 10, right: 4, winner: "Private Vet Practice" },
  { label: "Operational Support", left: 6, right: 9, winner: "Corporate Vet Clinic" },
  { label: "Per-Site Margin Capture", left: 9, right: 6, winner: "Private Vet Practice" },
  { label: "Scale and Risk Diversification", left: 6, right: 9, winner: "Corporate Vet Clinic" },
] as const;

export const leftRevenueSources = [
  "Owner-led wellness and preventive care",
  "Diagnostics and imaging",
  "Surgical and procedure revenue",
  "Chronic care management",
  "Pharmacy and preventive products",
  "Urgent and same-day visits",
] as const;

export const rightRevenueSources = [
  "Centralized marketing-driven new clients",
  "High-throughput preventive care lines",
  "Standardized diagnostics and procedures",
  "Cross-site referral capture",
  "Procurement and pricing optimization",
  "Ancillary wellness and membership plans",
] as const;

export const revenueFunnel = {
  left: ["Local Reputation", "Consult + Diagnostics", "Owner-Led Plan Acceptance", "Collections"],
  right: ["Central Marketing", "Contact Center Routing", "Protocol-Based Care", "Collections"],
} as const;

export const patientFunnel = {
  left: ["New Pet Client", "Doctor Relationship", "Care Plan Acceptance", "Long-Term Loyalty"],
  right: ["Central Intake", "Provider Assignment", "Standardized Care Pathway", "System Retention"],
} as const;

export const operatoryFunnel = {
  left: ["Owned Capacity", "Provider Production", "Case Mix Control", "Collected Revenue"],
  right: ["Network Capacity", "Provider Utilization", "Standardized Throughput", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Decision Speed", left: "Owner decides same-day", right: "Governance and policy approvals" },
  { driver: "Marketing Engine", left: "Local and referral heavy", right: "Centralized digital and contact center" },
  { driver: "Service Standardization", left: "Customized by owner philosophy", right: "Protocol-based consistency" },
  { driver: "Capacity Leverage", left: "Single-site constrained", right: "Cross-site staffing flexibility" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Annual Revenue Per Active Patient", left: "$360 – $900", right: "$320 – $760" },
  { metric: "Annual Visits Per Patient", left: "1.4 – 2.2", right: "1.7 – 2.8" },
  { metric: "Estimated Lifetime Value", left: "$1,900 – $5,600", right: "$1,700 – $4,800" },
  { metric: "Retention Horizon", left: "5 – 10 years", right: "4 – 8 years" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Exam Room", left: "$210K – $360K", right: "$240K – $390K" },
  { metric: "Revenue Per Provider", left: "$520K – $920K", right: "$450K – $780K" },
  { metric: "Revenue Per Staff Member", left: "$88K – $135K", right: "$90K – $145K" },
] as const;

export const marginTiers = {
  left: { weak: "13 – 16%", average: "18 – 21%", strong: "22 – 24%" },
  right: { weak: "9 – 12%", average: "14 – 17%", strong: "18 – 19%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "29 – 37%", right: "32 – 41%" },
  { expense: "Administrative Overhead", left: "8 – 12%", right: "11 – 17%" },
  { expense: "Corporate/Management Fees", left: "0 – 3%", right: "8 – 15%" },
  { expense: "Marketing + Client Acquisition", left: "3 – 6%", right: "5 – 10%" },
] as const;

export const insuranceHighlights = {
  left: { title: "Pricing and Service Flexibility", value: "Owner controls fee strategy and care model by market" },
  right: { title: "Scale Procurement Leverage", value: "Corporate scale can improve purchasing and technology access" },
} as const;

export const insuranceComparison = [
  { metric: "Insurance Revenue %", left: "5 – 20%", right: "8 – 25%" },
  { metric: "Direct Client-Pay Revenue %", left: "75 – 95%", right: "70 – 92%" },
  { metric: "Average Collection Lag", left: "0 – 7 days", right: "2 – 12 days" },
] as const;

export const ownerIncomeComparison = [
  { model: "Independent Vet Owner-Operator", earnings: "$140K – $260K", type: "left" },
  { model: "Corporate Lead Veterinarian", earnings: "$120K – $220K + bonus", type: "right" },
  { model: "Independent Multi-Site Owner", earnings: "$300K – $600K+", type: "left" },
  { model: "Corporate Equity Participant", earnings: "$220K – $700K+ (liquidity event dependent)", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Buildout/Acquisition", percent: 33 },
  { item: "Medical Equipment", percent: 29 },
  { item: "Technology", percent: 12 },
  { item: "Working Capital", percent: 26 },
] as const;

export const rightStartupItems = [
  { item: "Equity Buy-In", percent: 30 },
  { item: "Working Capital Reserve", percent: 21 },
  { item: "Transition + Legal", percent: 16 },
  { item: "Performance Growth Investment", percent: 33 },
] as const;

export const startupSideBySide = [
  { category: "Entry Capital", left: "$350K – $900K", right: "$200K – $650K" },
  { category: "Equipment Exposure", left: "$130K – $320K", right: "Often shared or platform-funded" },
  { category: "Systems Investment", left: "$30K – $80K", right: "Included in network stack" },
  { category: "Working Capital", left: "$90K – $220K", right: "$70K – $200K" },
] as const;

export const valuationComparison = [
  { metric: "Primary Valuation Lens", left: "SDE-focused private market", right: "EBITDA-focused corporate market" },
  { metric: "Typical Multiple Range", left: "2.8× – 4.2× SDE", right: "5.0× – 8.0× EBITDA" },
  { metric: "Liquidity Path", left: "Individual clinic sale", right: "Recap or platform transaction" },
] as const;

export const valuationExamples = {
  left: { revenue: "$1.2M", value: "$900K – $1.4M", note: "3.6× SDE on $310K owner benefit" },
  right: { revenue: "$1.6M site equivalent", value: "$1.8M – $2.9M enterprise implied", note: "6.0× EBITDA on $300K site EBITDA" },
} as const;

export const valuationExampleTitle = "Private Exit vs Corporate Platform Economics";

export const breakEvenComparison = [
  { metric: "Monthly Collections Needed", left: "$80K – $115K", right: "$95K – $150K per site target" },
  { metric: "Active Patients Needed", left: "1,500 – 2,700", right: "2,200 – 4,000 per site" },
  { metric: "Months to Break-Even", left: "16 – 28 months", right: "12 – 24 months (affiliation pathway)" },
] as const;

export const scalingLadder = {
  left: ["Independent Solo Clinic", "Add Associate Vet", "Second Private Clinic", "Regional Independent Group"],
  right: ["Corporate-Affiliated Site", "Multi-Site Pod", "Regional Platform", "National Roll-Up"],
} as const;

export const scalingLeftTitle = "Independent Ownership Path";
export const scalingRightTitle = "Corporate Affiliation Path";

export const capitalEfficiency = {
  investment: "$500,000",
  left: {
    revenue: "$850K – $1.3M",
    profit: "$150K – $280K EBITDA",
    payback: "2.9 – 4.9 years",
  },
  right: {
    revenue: "$1.1M – $1.7M (site-level)",
    profit: "$140K – $250K EBITDA",
    payback: "3.2 – 5.2 years",
  },
} as const;

export const chooseLeftTitle = "Choose Private Vet Practice If";
export const chooseRightTitle = "Choose Corporate Vet Clinic If";

export const chooseLeft = [
  "You want full control over clinical standards and culture",
  "You prioritize retaining more per-site EBITDA and owner income",
  "You prefer building independent equity over minority platform economics",
  "You are comfortable managing recruiting, billing, and operations directly",
  "You value flexibility in service mix, staffing, and reinvestment decisions",
] as const;

export const chooseRight = [
  "You want centralized support for recruiting, marketing, and back-office functions",
  "You prefer reduced solo operator risk and shared infrastructure",
  "You are willing to trade some autonomy for scale resources",
  "You want to grow across locations with standardized systems",
  "You are targeting upside through platform-level liquidity events",
] as const;

export const calculators = [
  { label: "Veterinary Clinic Valuation Calculator", href: "/calculators/veterinary-clinic-valuation/" },
  { label: "Owner Compensation Calculator", href: "/calculators/veterinary-clinic-revenue-per-veterinarian/" },
  { label: "Practice Margin Calculator", href: "/calculators/veterinary-clinic-ebitda/" },
  { label: "Revenue Per Client Calculator", href: "/calculators/veterinary-clinic-revenue-per-client/" },
  { label: "Break-Even Runway Calculator", href: "/calculators/veterinary-clinic-break-even/" },
] as const;

export const relatedComparisons = [
  { label: "Solo Vet vs Multi-Doctor Practice", href: "/comparisons/solo-vet-vs-multi-doctor-practice/" },
  { label: "Dental Practice vs Veterinary Clinic", href: "/comparisons/dental-practice-vs-veterinary-clinic/" },
  { label: "Private Practice vs DSO", href: "/comparisons/private-practice-vs-dso/" },
  { label: "Solo vs Group Dental Practice", href: "/comparisons/solo-vs-group-dental-practice/" },
  { label: "Veterinary Clinic Hub", href: "/industries/healthcare/veterinary-clinic/" },
] as const;

export const faqs = [
  {
    question: "Do private vet practices usually retain higher margins than corporate sites?",
    answer:
      "Often yes. Independent owners usually keep more per-site EBITDA, while corporate models include additional management overhead in exchange for shared support infrastructure.",
  },
  {
    question: "Why do many veterinarians still choose corporate groups?",
    answer:
      "Corporate groups can reduce administrative load, offer recruiting and technology support, and lower operational burden for clinicians who prefer focusing on medicine over management.",
  },
  {
    question: "Is veterinarian compensation always lower in corporate models?",
    answer:
      "Base compensation can be lower than fully independent ownership, but bonus structures and equity programs can create upside depending on platform performance and exit timing.",
  },
  {
    question: "Which model offers better long-term autonomy?",
    answer:
      "Private ownership offers significantly greater autonomy in staffing, pricing, service mix, clinical protocols, and reinvestment priorities.",
  },
  {
    question: "How should I evaluate corporate vet equity upside?",
    answer:
      "Review vesting terms, dilution risk, leverage structure, and recap assumptions. Equity upside can be meaningful, but outcomes vary widely by corporate operator quality and market cycle.",
  },
  {
    question: "What does $500K of capital look like in each path?",
    answer:
      "In private practice, $500K typically creates stronger direct ownership and per-site cash flow. In corporate pathways, the same capital often buys partial participation and lower administrative burden with less control.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Private Vet Practice", "Corporate Vet Clinic", {
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
    "Private vet practice aligns with your priorities: greater autonomy, stronger owner-level margin retention, and long-term independent equity control.",
  right:
    "Corporate vet clinic fits your goals if you want scale support, lower operator burden, and growth backed by centralized infrastructure.",
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
