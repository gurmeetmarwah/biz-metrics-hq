import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "physical-therapy-vs-occupational-therapy",
  title: "Physical Therapy vs Occupational Therapy",
  subtitle:
    "Compare revenue, margins, referral dynamics, patient mix, startup economics, and long-term scaling potential across PT and OT clinic models.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Physical Therapy",
  right: "Occupational Therapy",
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
  { factor: "MSK Rehab Revenue Ceiling", winner: "Physical Therapy" },
  { factor: "Pediatric Niche Defensibility", winner: "Occupational Therapy" },
  { factor: "Referral-Driven Demand", winner: "Tie" },
  { factor: "Per-Therapist Production", winner: "Physical Therapy" },
  { factor: "Margin Potential In Specialty Segments", winner: "Occupational Therapy" },
  { factor: "Multi-Site Scaling", winner: "Physical Therapy" },
  { factor: "School & Community Contract Fit", winner: "Occupational Therapy" },
  { factor: "Enterprise Roll-Up Attractiveness", winner: "Physical Therapy" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$500K – $1.5M", right: "$400K – $900K" },
  { metric: "EBITDA Margin", left: "18 – 28%", right: "20 – 30%" },
  { metric: "Owner Compensation", left: "$110K – $240K", right: "$100K – $220K" },
  { metric: "Revenue Per Therapist", left: "$350K – $550K", right: "$260K – $420K" },
  { metric: "Patient Mix", left: "Orthopedic & post-op heavy", right: "Pediatric, workers comp, schools" },
  { metric: "Startup Cost", left: "$220K – $520K", right: "$180K – $420K" },
  { metric: "Practice Value", left: "2.8× – 4.3× SDE", right: "2.6× – 4.0× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 10, right: 7, winner: "Physical Therapy" },
  { label: "Profit Margin", left: 8, right: 9, winner: "Occupational Therapy" },
  { label: "Scalability", left: 10, right: 7, winner: "Physical Therapy" },
  { label: "Capital Efficiency", left: 8, right: 8, winner: "Tie" },
] as const;

export const leftRevenueSources = [
  "Initial Evaluations",
  "MSK Treatment Visits",
  "Post-Surgical Rehab Programs",
  "Sports Rehab Add-Ons",
  "Employer Injury Programs",
] as const;

export const rightRevenueSources = [
  "Pediatric OT Episodes",
  "ADL / Functional Rehab Visits",
  "Workers Comp Contracts",
  "School-Based Therapy Contracts",
  "Neuro-Rehab Programs",
] as const;

export const revenueFunnel = {
  left: ["Physician/Employer Referral", "Evaluation", "Plan of Care", "8-14 Visits", "Revenue"],
  right: ["Referral / School Contract", "Functional Assessment", "Goal Plan", "10-18 Visits", "Revenue"],
} as const;

export const patientFunnel = {
  left: ["Referral", "Patient", "Episode Completion", "Discharge / Home Program"],
  right: ["Referral", "Patient / Family Intake", "Functional Goal Cycles", "Discharge / Follow-Up"],
} as const;

export const operatoryFunnel = {
  left: ["PT Therapist", "Daily Visits", "Clinic Revenue"],
  right: ["OT Therapist", "Daily Visits", "Clinic Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Patient Volume", left: "850 – 2,100 active patients", right: "700 – 1,600 active patients" },
  { driver: "Revenue Per Visit", left: "$95 – $145", right: "$85 – $135" },
  { driver: "Visits Per Episode", left: "8 – 14", right: "10 – 18" },
  { driver: "Contract Revenue Share", left: "8 – 20%", right: "20 – 40%" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Revenue Per Patient", left: "$950 – $2,500", right: "$1,000 – $2,300" },
  { metric: "Visits Per Patient", left: "8 – 14 per episode", right: "10 – 18 per episode" },
  { metric: "Lifetime Value", left: "$1,300 – $3,600", right: "$1,400 – $3,400" },
  { metric: "Retention", left: "70 – 84% completion", right: "72 – 88% completion" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Therapist", left: "$350K – $550K", right: "$260K – $420K" },
  { metric: "Visits Per Day", left: "12 – 18", right: "9 – 15" },
  { metric: "Revenue Per Visit", left: "$95 – $145", right: "$85 – $135" },
] as const;

export const marginTiers = {
  left: { weak: "14 – 18%", average: "20 – 26%", strong: "27 – 30%" },
  right: { weak: "16 – 20%", average: "22 – 28%", strong: "29 – 33%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "29 – 37%", right: "27 – 35%" },
  { expense: "Admin / Scheduling", left: "8 – 12%", right: "9 – 13%" },
  { expense: "Facility Cost", left: "7 – 11%", right: "6 – 10%" },
  { expense: "Marketing", left: "3 – 6%", right: "3 – 7%" },
] as const;

export const insuranceHighlights = {
  left: {
    title: "Orthopedic Referral Engine",
    value: "Physician, surgeon, and employer referral networks",
  },
  right: {
    title: "Functional Outcome Referral Mix",
    value: "Pediatric, workers comp, school systems, and neuro referrals",
  },
} as const;

export const insuranceComparison = [
  { metric: "Referral Dependence", left: "55 – 75%", right: "50 – 70%" },
  { metric: "Contract / Institutional Share", left: "10 – 25%", right: "20 – 45%" },
  { metric: "Lead Cost", left: "$75 – $170/referral", right: "$70 – $160/referral" },
  { metric: "Case Complexity", left: "Moderate-high MSK complexity", right: "High functional / pediatric complexity" },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo PT Clinic Owner", earnings: "$110K – $190K", type: "left" },
  { model: "Multi-Therapist PT Owner", earnings: "$160K – $280K", type: "left" },
  { model: "Solo OT Clinic Owner", earnings: "$100K – $180K", type: "right" },
  { model: "Pediatric / Contract-Heavy OT Owner", earnings: "$150K – $260K", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Leasehold Improvements", percent: 33 },
  { item: "Therapy Equipment", percent: 27 },
  { item: "Software / EMR", percent: 14 },
  { item: "Working Capital", percent: 26 },
] as const;

export const rightStartupItems = [
  { item: "Buildout", percent: 30 },
  { item: "Sensory / ADL Equipment", percent: 24 },
  { item: "Documentation / Billing Tech", percent: 14 },
  { item: "Working Capital", percent: 32 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: "$65K – $155K", right: "$45K – $120K" },
  { category: "Buildout", left: "$85K – $210K", right: "$70K – $180K" },
  { category: "Technology", left: "$25K – $60K", right: "$22K – $55K" },
  { category: "Launch Budget", left: "$220K – $520K", right: "$180K – $420K" },
] as const;

export const valuationComparison = [
  { metric: "EBITDA Multiple", left: "3.1× – 5.0×", right: "3.0× – 4.8×" },
  { metric: "Revenue Multiple", left: "0.6× – 1.0×", right: "0.6× – 1.0×" },
  { metric: "Practice Value (SDE)", left: "2.8× – 4.3×", right: "2.6× – 4.0×" },
] as const;

export const valuationExamples = {
  left: { revenue: "$1.0M", value: "$920K – $1.20M", note: "3.5× SDE on $265K owner benefit" },
  right: { revenue: "$700K", value: "$700K – $980K", note: "3.3× SDE on $215K owner benefit" },
} as const;

export const valuationExampleTitle = "$1M Revenue Practice → Estimated Value";

export const breakEvenComparison = [
  { metric: "Patients Needed", left: "850 – 1,250 active", right: "700 – 1,050 active" },
  { metric: "Visits Needed", left: "700 – 980/mo", right: "580 – 860/mo" },
  { metric: "Monthly Revenue Needed", left: "$70K – $90K", right: "$55K – $75K" },
  { metric: "Months To Break-Even", left: "18 – 28 months", right: "16 – 24 months" },
] as const;

export const scalingLadder = {
  left: ["Solo PT Owner", "Multi-Therapist Clinic", "Regional PT Group", "Multi-Location PT Platform"],
  right: ["Solo OT Clinic", "Pediatric / Functional Niche", "Contract-Backed Multi-Site", "Regional OT Network"],
} as const;

export const scalingLeftTitle = "Physical Therapy Growth Path";
export const scalingRightTitle = "Occupational Therapy Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: {
    revenue: "$680K – $980K",
    profit: "$130K – $230K EBITDA",
    payback: "3.5 – 5 years",
  },
  right: {
    revenue: "$560K – $840K",
    profit: "$125K – $220K EBITDA",
    payback: "3.0 – 4.5 years",
  },
} as const;

export const chooseLeftTitle = "Choose Physical Therapy If";
export const chooseRightTitle = "Choose Occupational Therapy If";

export const chooseLeft = [
  "You want the largest revenue ceiling in outpatient rehab",
  "You prefer MSK, orthopedic, and post-surgical treatment pathways",
  "You want stronger multi-location and enterprise scaling options",
  "You are comfortable managing larger therapist teams and throughput",
  "You value referral leverage from surgeons, physicians, and employers",
] as const;

export const chooseRight = [
  "You want to specialize in pediatric, school, or functional-rehab niches",
  "You prefer ADL-focused care plans and family-centered treatment",
  "You want contract-heavy diversification through schools and workers comp",
  "You prioritize margin resilience from differentiated service mix",
  "You value a specialty model with defensible local positioning",
] as const;

export const calculators = [
  { label: "PT Clinic Valuation Calculator", href: "/calculators/physical-therapy-clinic-valuation/" },
  { label: "Revenue Per Patient Calculator", href: "/calculators/physical-therapy-clinic-revenue-per-patient/" },
  { label: "EBITDA Calculator", href: "/calculators/physical-therapy-clinic-ebitda/" },
  { label: "Break-Even Calculator", href: "/calculators/physical-therapy-clinic-break-even/" },
  { label: "Revenue Per Therapist Calculator", href: "/calculators/physical-therapy-clinic-revenue-per-therapist/" },
] as const;

export const relatedComparisons = [
  { label: "Physical Therapy vs Chiropractic Clinic", href: "/comparisons/physical-therapy-vs-chiropractic-clinic/" },
  { label: "Sports PT vs General PT", href: "/comparisons/sports-pt-vs-general-pt/" },
  { label: "Dental Practice vs Medical Practice", href: "/comparisons/dental-practice-vs-medical-practice/" },
  { label: "PT Clinic vs Veterinary Clinic", href: "/comparisons/dental-practice-vs-veterinary-clinic/" },
  { label: "Physical Therapy Clinic Hub", href: "/industries/healthcare/physical-therapy-clinic/" },
] as const;

export const faqs = [
  {
    question: "Which model has higher total revenue potential in 2026?",
    answer:
      "Physical therapy clinics generally carry the higher top-end revenue ceiling at roughly $500K-$1.5M versus $400K-$900K for many OT-led outpatient models, largely due to higher visit throughput and broader orthopedic demand.",
  },
  {
    question: "Does occupational therapy usually earn better margins?",
    answer:
      "In many niche-heavy OT models, EBITDA can run 20-30% compared with 18-28% in PT, especially when pediatric or contract-backed caseloads are well managed and clinical staffing utilization is disciplined.",
  },
  {
    question: "How similar are referral dynamics between PT and OT?",
    answer:
      "Both are referral-driven businesses, but service mix differs. PT often leans into orthopedic and post-op physician pipelines, while OT more often blends pediatric specialists, workers comp, schools, and functional-care referrals.",
  },
  {
    question: "Which is easier to scale to multiple locations?",
    answer:
      "PT typically scales faster into multi-site outpatient footprints because standardized MSK workflows and larger addressable demand support higher therapist utilization across locations.",
  },
  {
    question: "Where does OT hold a strategic advantage?",
    answer:
      "OT can outperform in defensible niches such as pediatrics, neuro-functional rehab, and school-linked contracts, where differentiated expertise can support stronger retention and more stable margins.",
  },
  {
    question: "How should owners decide between PT and OT?",
    answer:
      "Choose PT when your priority is larger revenue and platform scaling; choose OT when you want a specialty-led practice with strong functional outcomes and niche margin potential tied to pediatric or institutional demand.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Physical Therapy Clinic", "Occupational Therapy Clinic", {
    clinicalGeneral: 2,
    clinicalSpecialty: 2,
    revenueModerate: 2,
    revenueHigh: 3,
    revenueVeryHigh: 1,
    insuranceLow: 1,
    insuranceMedium: 2,
    insuranceHigh: 3,
    growthLifestyle: 1,
    growthRegional: 3,
    growthMulti: 1,
  });
}

export const decisionToolCopy = {
  left:
    "Physical therapy clinic best matches your priorities — higher total revenue potential, stronger MSK demand, larger team throughput, and better multi-location scaling.",
  right:
    "Occupational therapy clinic is the better fit for your goals — specialty-driven positioning, pediatric/functional-rehab niches, and margin strength in focused service lines.",
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
