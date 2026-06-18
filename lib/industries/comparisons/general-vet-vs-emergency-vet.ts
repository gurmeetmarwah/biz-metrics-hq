import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "general-vet-vs-emergency-vet",
  title: "General Vet vs Emergency Vet",
  subtitle:
    "Compare scheduled wellness model economics versus emergency hospital intensity across revenue, margins, staffing complexity, startup capital, and valuation outcomes.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "General Vet Clinic",
  right: "Emergency Vet Hospital",
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
  { factor: "Predictable Scheduling", winner: "General Vet Clinic" },
  { factor: "Higher Revenue Ceiling", winner: "Emergency Vet Hospital" },
  { factor: "Stronger Margin Stability", winner: "General Vet Clinic" },
  { factor: "24/7 Case Acuity", winner: "Emergency Vet Hospital" },
  { factor: "Lower Capital Barrier", winner: "General Vet Clinic" },
  { factor: "Referral-Based Growth Upside", winner: "Emergency Vet Hospital" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$850K – $1.4M", right: "$1.2M – $2.2M" },
  { metric: "EBITDA Margin", left: "17 – 21%", right: "12 – 18%" },
  { metric: "Owner Compensation", left: "$170K – $290K", right: "$220K – $420K" },
  { metric: "Monthly Visits", left: "380 – 780", right: "260 – 520" },
  { metric: "Revenue Per Patient", left: "$380 – $780/yr", right: "$700 – $1,900/yr" },
  { metric: "Startup Cost", left: "$420K – $900K", right: "$850K – $2.0M" },
  { metric: "Practice Valuation", left: "3.0× – 4.2× SDE", right: "2.8× – 4.5× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Schedule Control", left: 9, right: 4, winner: "General Vet Clinic" },
  { label: "High-Acuity Revenue Power", left: 6, right: 9, winner: "Emergency Vet Hospital" },
  { label: "Labor Intensity Risk", left: 8, right: 5, winner: "General Vet Clinic" },
  { label: "Regional Referral Moat", left: 5, right: 8, winner: "Emergency Vet Hospital" },
] as const;

export const leftRevenueSources = [
  "Wellness exams and preventive bundles",
  "Vaccinations and routine diagnostics",
  "Elective procedures",
  "Chronic condition management",
  "In-house pharmacy and retail",
  "Basic urgent appointments",
] as const;

export const rightRevenueSources = [
  "After-hours emergency consults",
  "Critical care hospitalization",
  "Emergency surgery",
  "Advanced diagnostics and imaging",
  "Referral overflow cases",
  "Specialty emergency procedures",
] as const;

export const revenueFunnel = {
  left: ["Client Scheduling", "Exam + Baseline Diagnostics", "Treatment Plan", "Checkout Payment"],
  right: ["Emergency Intake", "Triage + Stabilization", "Advanced Treatment", "Discharge + Collection"],
} as const;

export const patientFunnel = {
  left: ["New Pet Client", "Routine Care Enrollment", "Plan Adherence", "Annual Wellness Retention"],
  right: ["Critical Intake", "Inpatient/Procedure", "Discharge Follow-Up", "Referring Vet Continuity"],
} as const;

export const operatoryFunnel = {
  left: ["Exam Room Capacity", "Scheduled Case Mix", "Procedure Throughput", "Collected Revenue"],
  right: ["ER Bay Capacity", "High-Acuity Case Mix", "24/7 Team Throughput", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Visit Value", left: "$90 – $210 typical encounter", right: "$250 – $900 typical encounter" },
  { driver: "Procedure Ticket Size", left: "$250 – $1,800 major treatment", right: "$900 – $6,500 major treatment" },
  { driver: "Insurance Impact", left: "Low direct insurance exposure", right: "Low insurance, high client financing use" },
  { driver: "Demand Pattern", left: "Scheduled wellness and preventive cadence", right: "Unscheduled acute and referral-driven demand" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Annual Revenue Per Active Patient", left: "$380 – $780", right: "$700 – $1,900" },
  { metric: "Annual Visits Per Patient", left: "1.4 – 2.3", right: "0.6 – 1.2" },
  { metric: "Estimated Lifetime Value", left: "$2,200 – $5,800", right: "$1,600 – $4,500" },
  { metric: "Retention Horizon", left: "5 – 10 years", right: "1 – 4 years direct relationship" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Chair/Room", left: "$240K – $420K", right: "$300K – $700K" },
  { metric: "Revenue Per Provider", left: "$550K – $920K", right: "$700K – $1.4M" },
  { metric: "Revenue Per Staff Member", left: "$90K – $145K", right: "$110K – $180K" },
] as const;

export const marginTiers = {
  left: { weak: "13 – 16%", average: "17 – 20%", strong: "21 – 24%" },
  right: { weak: "8 – 11%", average: "12 – 16%", strong: "17 – 20%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "31 – 38%", right: "38 – 50%" },
  { expense: "Supplies + Pharmacy", left: "9 – 13%", right: "11 – 18%" },
  { expense: "Facility Costs", left: "6 – 10%", right: "8 – 14%" },
  { expense: "Administrative Overhead", left: "9 – 13%", right: "10 – 16%" },
] as const;

export const insuranceHighlights = {
  left: { title: "Wellness-Driven Client Pay", value: "70 – 90% collected directly from owners" },
  right: { title: "Emergency Point-of-Care Collection", value: "80 – 95% client pay with financing options" },
} as const;

export const insuranceComparison = [
  { metric: "Insurance Revenue %", left: "5 – 20%", right: "3 – 15%" },
  { metric: "Cash/Client-Pay Revenue %", left: "70 – 90%", right: "80 – 95%" },
  { metric: "Average Collection Lag", left: "0 – 7 days", right: "0 – 5 days" },
] as const;

export const ownerIncomeComparison = [
  { model: "General Vet Owner-Operator", earnings: "$170K – $290K", type: "left" },
  { model: "Emergency Vet Owner", earnings: "$220K – $420K", type: "right" },
  { model: "Multi-Site General Vet Owner", earnings: "$350K – $620K+", type: "left" },
  { model: "Emergency Hospital Group Owner", earnings: "$500K – $1.2M+", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Facility Buildout", percent: 30 },
  { item: "Medical Equipment", percent: 27 },
  { item: "Diagnostics + IT", percent: 14 },
  { item: "Working Capital", percent: 29 },
] as const;

export const rightStartupItems = [
  { item: "24/7 Facility + Buildout", percent: 34 },
  { item: "Critical Care Equipment", percent: 30 },
  { item: "Advanced Imaging + Monitoring", percent: 18 },
  { item: "Working Capital", percent: 18 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: "$130K – $300K", right: "$280K – $700K" },
  { category: "Equipment", left: "$140K – $310K", right: "$260K – $650K" },
  { category: "Technology", left: "$35K – $90K", right: "$80K – $220K" },
  { category: "Working Capital", left: "$100K – $240K", right: "$220K – $430K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: "3.0× – 4.2×", right: "2.8× – 4.5×" },
  { metric: "EBITDA Multiple", left: "4.3× – 6.2×", right: "5.0× – 8.0×" },
  { metric: "Revenue Multiple", left: "0.6× – 1.0×", right: "0.7× – 1.3×" },
] as const;

export const valuationExamples = {
  left: { revenue: "$1.1M", value: "$900K – $1.3M", note: "3.6× SDE on $280K owner benefit" },
  right: { revenue: "$1.8M", value: "$1.4M – $2.4M", note: "6.0× EBITDA on $300K EBITDA" },
} as const;

export const valuationExampleTitle = "Representative Exit Profiles by Model";

export const breakEvenComparison = [
  { metric: "Monthly Collections Needed", left: "$85K – $120K", right: "$150K – $240K" },
  { metric: "Active Patients Needed", left: "1,600 – 2,500 pets", right: "850 – 1,600 acute cases" },
  { metric: "Months to Break-Even", left: "16 – 26 months", right: "24 – 40 months" },
] as const;

export const scalingLadder = {
  left: ["Single General Clinic", "Add Preventive Plan Base", "Second Neighborhood Site", "Regional GP Vet Network"],
  right: ["Single ER Hospital", "Expand 24/7 Coverage", "Add Referral Catchment", "Multi-City Emergency Platform"],
} as const;

export const scalingLeftTitle = "General Vet Growth Path";
export const scalingRightTitle = "Emergency Vet Growth Path";

export const capitalEfficiency = {
  investment: "$500,000",
  left: {
    revenue: "$900K – $1.25M",
    profit: "$155K – $250K EBITDA",
    payback: "3 – 5 years",
  },
  right: {
    revenue: "$700K – $1.1M",
    profit: "$80K – $170K EBITDA",
    payback: "4.5 – 7 years",
  },
} as const;

export const chooseLeftTitle = "Choose General Vet Clinic If";
export const chooseRightTitle = "Choose Emergency Vet Hospital If";

export const chooseLeft = [
  "You want predictable daytime scheduling and recurring wellness demand",
  "You prioritize steadier EBITDA margins with lower labor volatility",
  "You want lower startup capex and faster path to operational stability",
  "You prefer long-term client retention and preventive care plans",
  "You plan measured growth through neighborhood clinic replication",
] as const;

export const chooseRight = [
  "You want high-acuity case economics and stronger top-line potential",
  "You can manage 24/7 staffing, specialist coverage, and shift complexity",
  "You are prepared for higher capex and longer break-even timelines",
  "You want regional referral moat potential with limited local competition",
  "You plan to scale through emergency hubs and centralized operations",
] as const;

export const calculators = [
  { label: "Veterinary Clinic Valuation Calculator", href: "/calculators/veterinary-clinic-valuation/" },
  { label: "Veterinary Startup Cost Calculator", href: "/calculators/veterinary-clinic-startup-cost/" },
  { label: "Veterinary EBITDA Margin Calculator", href: "/calculators/veterinary-clinic-ebitda/" },
  { label: "Revenue Per Client Calculator", href: "/calculators/veterinary-clinic-revenue-per-client/" },
  { label: "Break-Even Runway Calculator", href: "/calculators/veterinary-clinic-break-even/" },
] as const;

export const relatedComparisons = [
  { label: "Veterinary Clinic vs Medical Practice", href: "/comparisons/veterinary-clinic-vs-medical-practice/" },
  { label: "Dental Practice vs Veterinary Clinic", href: "/comparisons/dental-practice-vs-veterinary-clinic/" },
  { label: "Dental Practice vs Medical Practice", href: "/comparisons/dental-practice-vs-medical-practice/" },
  { label: "Veterinary Clinic Hub", href: "/industries/healthcare/veterinary-clinic/" },
] as const;

export const faqs = [
  {
    question: "Why can emergency vet hospitals produce more revenue per case?",
    answer:
      "Emergency hospitals handle high-acuity, time-sensitive cases with larger diagnostics and procedure tickets, which raises average revenue per encounter versus wellness-focused general practice.",
  },
  {
    question: "Why are emergency margins often lower despite bigger revenue?",
    answer:
      "24/7 staffing, overnight shift differentials, and critical-care equipment costs create heavier fixed labor and operating loads, which typically compress EBITDA margins.",
  },
  {
    question: "Is general practice still better for first-time owners?",
    answer:
      "For many owners, yes. General clinics usually offer lower startup risk, more predictable schedules, and steadier retention-based demand, which can simplify early execution.",
  },
  {
    question: "How much more capital does emergency care usually need?",
    answer:
      "Emergency models often require materially higher capex, with many projects in the $850K–$2.0M range versus about $420K–$900K for general vet clinics.",
  },
  {
    question: "Do both models rely mostly on direct client pay?",
    answer:
      "Yes. Both models are primarily consumer-pay with rapid collections, though emergency hospitals more frequently use financing workflows due to larger urgent invoices.",
  },
  {
    question: "Which model is easier to scale across multiple locations?",
    answer:
      "General clinics are often easier to replicate operationally. Emergency platforms can scale powerfully too, but they usually require deeper talent pipelines and tighter 24/7 operating systems.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "General Vet Clinic", "Emergency Vet Hospital", {
    clinicalGeneral: 3,
    clinicalSpecialty: 2,
    revenueModerate: 2,
    revenueHigh: 2,
    revenueVeryHigh: 3,
    insuranceLow: 1,
    insuranceMedium: 1,
    insuranceHigh: 1,
    growthLifestyle: 3,
    growthRegional: 2,
    growthMulti: 3,
  });
}

export const decisionToolCopy = {
  left:
    "General vet clinic is the better match if you want scheduled wellness economics, steadier margins, and a lower-capital path to owner-operated scale.",
  right:
    "Emergency vet hospital fits best if you are targeting high-acuity revenue upside and can execute a 24/7, staffing-intensive operating model.",
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
