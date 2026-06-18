import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "sports-pt-vs-general-pt",
  title: "Sports PT vs General PT",
  subtitle:
    "Compare revenue model, margins, payer mix, visit pricing, patient economics, and scaling potential between sports-focused and general outpatient PT clinics.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Sports Physical Therapy",
  right: "General Physical Therapy",
  breadcrumbHub: {
    label: "Physical Therapy Clinic",
    href: "/industries/healthcare/physical-therapy-clinic/",
  },
  exploreHub: {
    label: "Explore Physical Therapy Hub →",
    href: "/industries/healthcare/physical-therapy-clinic/",
  },
} as const;

export const decisionSnapshot = [
  { factor: "Cash-Pay Pricing Power", winner: "Sports Physical Therapy" },
  { factor: "Referral Base Breadth", winner: "General Physical Therapy" },
  { factor: "Athlete / Team Contract Upside", winner: "Sports Physical Therapy" },
  { factor: "Payer Diversification", winner: "General Physical Therapy" },
  { factor: "Revenue Per Visit", winner: "Sports Physical Therapy" },
  { factor: "Volume Stability Across Seasons", winner: "General Physical Therapy" },
  { factor: "Brand Differentiation", winner: "Sports Physical Therapy" },
  { factor: "Repeatable Multi-Clinic Expansion", winner: "General Physical Therapy" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$800K – $1.4M", right: "$650K – $1.1M" },
  { metric: "EBITDA Margin", left: "20 – 30%", right: "18 – 27%" },
  { metric: "Owner Compensation", left: "$150K – $300K", right: "$120K – $250K" },
  { metric: "Revenue Per Visit", left: "$120 – $180", right: "$90 – $140" },
  { metric: "Revenue Per Therapist", left: "$400K – $620K", right: "$330K – $520K" },
  { metric: "Startup Cost", left: "$260K – $620K", right: "$220K – $520K" },
  { metric: "Practice Value", left: "3.0× – 4.8× SDE", right: "2.8× – 4.3× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 10, right: 8, winner: "Sports Physical Therapy" },
  { label: "Profit Margin", left: 9, right: 8, winner: "Sports Physical Therapy" },
  { label: "Scalability", left: 8, right: 9, winner: "General Physical Therapy" },
  { label: "Capital Efficiency", left: 7, right: 8, winner: "General Physical Therapy" },
] as const;

export const leftRevenueSources = [
  "Athlete Evaluations",
  "Performance Rehab Programs",
  "Cash-Pay Return-to-Sport Packages",
  "Team / Club Contracts",
  "Performance Testing Add-Ons",
] as const;

export const rightRevenueSources = [
  "Physician-Referred Evaluations",
  "General Outpatient Treatment Visits",
  "Post-Surgical Rehab",
  "Workers Comp Episodes",
  "Medicare / Commercial Insurance Mix",
] as const;

export const revenueFunnel = {
  left: ["Athlete / Team Lead", "Sports Evaluation", "Performance Plan", "8-16 Visits", "Revenue"],
  right: ["Physician Referral", "Initial Evaluation", "Plan of Care", "8-14 Visits", "Revenue"],
} as const;

export const patientFunnel = {
  left: ["Athlete Intake", "Goal-Based Episode", "Return-to-Play Milestones", "Maintenance / Prevention"],
  right: ["Referral Intake", "General Rehab Episode", "Functional Recovery", "Discharge"],
} as const;

export const operatoryFunnel = {
  left: ["Sports PT", "Visits + Programs", "Revenue"],
  right: ["General PT", "Visits", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Patient Volume", left: "700 – 1,500 active patients", right: "900 – 2,100 active patients" },
  { driver: "Revenue Per Visit", left: "$120 – $180", right: "$90 – $140" },
  { driver: "Cash-Pay Revenue", left: "35 – 65%", right: "10 – 30%" },
  { driver: "Contract Revenue", left: "15 – 35% team/club", right: "8 – 20% employer/contract" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Revenue Per Patient", left: "$1,300 – $3,200", right: "$950 – $2,500" },
  { metric: "Visits Per Patient", left: "8 – 16 per episode", right: "8 – 14 per episode" },
  { metric: "Lifetime Value", left: "$1,700 – $4,200", right: "$1,300 – $3,500" },
  { metric: "Retention", left: "72 – 86% completion", right: "68 – 82% completion" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Therapist", left: "$400K – $620K", right: "$330K – $520K" },
  { metric: "Visits Per Day", left: "10 – 16", right: "12 – 18" },
  { metric: "Revenue Per Visit", left: "$120 – $180", right: "$90 – $140" },
] as const;

export const marginTiers = {
  left: { weak: "16 – 20%", average: "22 – 28%", strong: "29 – 33%" },
  right: { weak: "14 – 18%", average: "20 – 25%", strong: "26 – 30%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "30 – 38%", right: "29 – 37%" },
  { expense: "Admin / Front Desk", left: "8 – 12%", right: "8 – 12%" },
  { expense: "Facility Cost", left: "8 – 13%", right: "7 – 11%" },
  { expense: "Marketing", left: "5 – 10%", right: "3 – 7%" },
] as const;

export const insuranceHighlights = {
  left: {
    title: "Hybrid Cash + Contract Model",
    value: "Athlete cash-pay pathways plus team and club referral relationships",
  },
  right: {
    title: "Broad Insurance Referral Engine",
    value: "Physician, hospital, and payer-network outpatient referrals",
  },
} as const;

export const insuranceComparison = [
  { metric: "Referral Dependence", left: "40 – 65%", right: "60 – 80%" },
  { metric: "Cash-Pay Dependence", left: "35 – 65%", right: "10 – 30%" },
  { metric: "Lead Cost", left: "$90 – $220/athlete lead", right: "$75 – $170/referral" },
  { metric: "Collection Complexity", left: "Moderate (hybrid model)", right: "Moderate-high (insurance-heavy)" },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo Sports PT Owner", earnings: "$150K – $240K", type: "left" },
  { model: "Multi-Therapist Sports PT Owner", earnings: "$220K – $360K", type: "left" },
  { model: "Solo General PT Owner", earnings: "$120K – $210K", type: "right" },
  { model: "Multi-Clinic General PT Owner", earnings: "$180K – $320K", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Buildout / Turf / Performance Zone", percent: 34 },
  { item: "Equipment", percent: 29 },
  { item: "Technology / Testing Tools", percent: 13 },
  { item: "Working Capital", percent: 24 },
] as const;

export const rightStartupItems = [
  { item: "Buildout", percent: 33 },
  { item: "Therapy Equipment", percent: 27 },
  { item: "Software / EMR", percent: 14 },
  { item: "Working Capital", percent: 26 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: "$80K – $200K", right: "$60K – $155K" },
  { category: "Buildout", left: "$100K – $250K", right: "$85K – $210K" },
  { category: "Technology", left: "$30K – $70K", right: "$25K – $60K" },
  { category: "Launch Budget", left: "$260K – $620K", right: "$220K – $520K" },
] as const;

export const valuationComparison = [
  { metric: "EBITDA Multiple", left: "3.2× – 5.2×", right: "3.0× – 5.0×" },
  { metric: "Revenue Multiple", left: "0.7× – 1.1×", right: "0.6× – 1.0×" },
  { metric: "Practice Value (SDE)", left: "3.0× – 4.8×", right: "2.8× – 4.3×" },
] as const;

export const valuationExamples = {
  left: { revenue: "$1.2M", value: "$1.10M – $1.50M", note: "3.8× SDE on $320K owner benefit" },
  right: { revenue: "$900K", value: "$840K – $1.14M", note: "3.4× SDE on $280K owner benefit" },
} as const;

export const valuationExampleTitle = "$1M Revenue Practice → Estimated Value";

export const breakEvenComparison = [
  { metric: "Patients Needed", left: "750 – 1,050 active", right: "850 – 1,250 active" },
  { metric: "Visits Needed", left: "600 – 850/mo", right: "700 – 980/mo" },
  { metric: "Monthly Revenue Needed", left: "$75K – $100K", right: "$70K – $90K" },
  { metric: "Months To Break-Even", left: "20 – 30 months", right: "18 – 28 months" },
] as const;

export const scalingLadder = {
  left: ["Local Sports PT Brand", "Team Contract Portfolio", "Regional Athlete Centers", "Premium Sports PT Platform"],
  right: ["General Outpatient PT Clinic", "Multi-Therapist Model", "Regional PT Group", "Multi-Location PT Network"],
} as const;

export const scalingLeftTitle = "Sports PT Growth Path";
export const scalingRightTitle = "General PT Growth Path";

export const capitalEfficiency = {
  investment: "$300,000",
  left: {
    revenue: "$780K – $1.08M",
    profit: "$170K – $290K EBITDA",
    payback: "3.5 – 5.5 years",
  },
  right: {
    revenue: "$720K – $980K",
    profit: "$145K – $240K EBITDA",
    payback: "3.0 – 4.8 years",
  },
} as const;

export const chooseLeftTitle = "Choose Sports PT If";
export const chooseRightTitle = "Choose General PT If";

export const chooseLeft = [
  "You want higher cash-pay pricing and premium performance positioning",
  "You enjoy athlete-focused rehab and return-to-sport programming",
  "You can build team and club referral contracts in your local market",
  "You are comfortable with more branding and community partnership work",
  "You want top-end per-visit and per-therapist revenue upside",
] as const;

export const chooseRight = [
  "You want a broad, stable referral base across orthopedic populations",
  "You prefer predictable outpatient workflows and payer mix diversification",
  "You value easier replication into multi-site general outpatient clinics",
  "You want lower marketing intensity and less sports-season concentration risk",
  "You prioritize steady volume from physician and hospital relationships",
] as const;

export const calculators = [
  { label: "PT Clinic Valuation Calculator", href: "/calculators/physical-therapy-clinic-valuation/" },
  { label: "Revenue Per Patient Calculator", href: "/calculators/physical-therapy-clinic-revenue-per-patient/" },
  { label: "EBITDA Calculator", href: "/calculators/physical-therapy-clinic-ebitda/" },
  { label: "Break-Even Calculator", href: "/calculators/physical-therapy-clinic-break-even/" },
  { label: "Revenue Per Therapist Calculator", href: "/calculators/physical-therapy-clinic-revenue-per-therapist/" },
] as const;

export const relatedComparisons = [
  { label: "Physical Therapy vs Occupational Therapy", href: "/comparisons/physical-therapy-vs-occupational-therapy/" },
  { label: "Physical Therapy vs Chiropractic Clinic", href: "/comparisons/physical-therapy-vs-chiropractic-clinic/" },
  { label: "Solo Vet vs Multi-Doctor Practice", href: "/comparisons/solo-vet-vs-multi-doctor-practice/" },
  { label: "Dental Practice vs Medical Practice", href: "/comparisons/dental-practice-vs-medical-practice/" },
  { label: "Physical Therapy Clinic Hub", href: "/industries/healthcare/physical-therapy-clinic/" },
] as const;

export const faqs = [
  {
    question: "Which PT model has higher revenue per visit?",
    answer:
      "Sports PT usually commands higher visit pricing, often around $120-$180 per visit, while general outpatient PT commonly runs closer to $90-$140 because of broader insurance-driven pricing dynamics.",
  },
  {
    question: "Is sports PT more profitable than general PT?",
    answer:
      "Sports PT can produce higher margins when cash-pay mix and athlete demand are strong, but outcomes depend on contract quality, seasonality, and utilization. General PT often delivers steadier margins through larger referral depth.",
  },
  {
    question: "Which model has a more stable referral pipeline?",
    answer:
      "General PT usually has the broader and more stable referral base because it serves a wider outpatient population through physicians, surgeons, and health-system channels year-round.",
  },
  {
    question: "Does sports PT require more startup capital?",
    answer:
      "Typically yes. Sports-focused buildouts, performance space, and specialized testing equipment can lift startup budgets to around $260K-$620K versus roughly $220K-$520K for many general PT clinics.",
  },
  {
    question: "Which model scales better across multiple sites?",
    answer:
      "General PT often scales more predictably due to repeatable operations and broad demand. Sports PT can scale well too, but growth usually depends more on local brand, athlete ecosystems, and team-partnership density.",
  },
  {
    question: "How should founders choose between sports and general PT?",
    answer:
      "Choose sports PT when you want premium positioning and athlete-driven pricing upside. Choose general PT when you prioritize consistent referral flow, broader patient access, and cleaner multi-site operational repeatability.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "General Physical Therapy Clinic", "Sports Physical Therapy Clinic", {
    clinicalGeneral: 3,
    clinicalSpecialty: 2,
    revenueModerate: 2,
    revenueHigh: 2,
    revenueVeryHigh: 2,
    insuranceLow: 1,
    insuranceMedium: 2,
    insuranceHigh: 3,
    growthLifestyle: 2,
    growthRegional: 2,
    growthMulti: 1,
  });
}

export const decisionToolCopy = {
  left:
    "Sports physical therapy is the better fit for your goals — higher cash-pay potential, stronger athlete positioning, and superior per-visit revenue upside.",
  right:
    "General physical therapy better matches your priorities — broader referral stability, operational repeatability, and more predictable scaling across locations.",
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
