import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "family-chiropractic-vs-sports-chiropractic",
  title: "Family Chiropractic vs Sports Chiropractic",
  subtitle:
    "Compare revenue models, patient demographics, visit pricing, marketing channels, margins, and scaling paths between family wellness and sports-focused chiropractic clinics.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Family Chiropractic",
  right: "Sports Chiropractic",
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
  { factor: "Recurring Wellness Revenue", winner: "Family Chiropractic" },
  { factor: "Revenue Per Visit", winner: "Sports Chiropractic" },
  { factor: "Patient Volume Stability", winner: "Family Chiropractic" },
  { factor: "Cash-Pay Pricing Power", winner: "Sports Chiropractic" },
  { factor: "Membership Model Fit", winner: "Family Chiropractic" },
  { factor: "Team / Athlete Contract Upside", winner: "Sports Chiropractic" },
  { factor: "Local SEO & Community Marketing", winner: "Family Chiropractic" },
  { factor: "Brand Differentiation", winner: "Sports Chiropractic" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$350K – $700K", right: "$450K – $900K" },
  { metric: "Net Profit Margin", left: "28 – 35%", right: "24 – 32%" },
  { metric: "Owner Compensation", left: "$90K – $170K", right: "$120K – $250K" },
  { metric: "Revenue Per Visit", left: "$45 – $75", right: "$65 – $110" },
  { metric: "Revenue Per Chiropractor", left: "$280K – $380K", right: "$350K – $480K" },
  { metric: "Startup Cost", left: "$140K – $280K", right: "$180K – $380K" },
  { metric: "Practice Value", left: "2.2× – 3.2× SDE", right: "2.5× – 3.8× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 7, right: 9, winner: "Sports Chiropractic" },
  { label: "Profit Margin", left: 9, right: 8, winner: "Family Chiropractic" },
  { label: "Predictability", left: 9, right: 7, winner: "Family Chiropractic" },
  { label: "Premium Pricing", left: 6, right: 10, winner: "Sports Chiropractic" },
] as const;

export const leftRevenueSources = [
  "Family Wellness Plans",
  "Pediatric Adjustments",
  "Maintenance Care",
  "Membership Subscriptions",
  "Referral-Based New Patients",
] as const;

export const rightRevenueSources = [
  "Athlete Evaluations",
  "Performance Rehab Programs",
  "Return-to-Sport Packages",
  "Team & Club Contracts",
  "Cash-Pay Performance Add-Ons",
] as const;

export const revenueFunnel = {
  left: ["Community Referral", "Consultation", "Wellness Plan", "Recurring Visits", "Revenue"],
  right: ["Athlete / Coach Lead", "Sports Evaluation", "Performance Plan", "Program Visits", "Revenue"],
} as const;

export const patientFunnel = {
  left: ["Family Intake", "Care Plan", "Monthly Maintenance", "Multi-Year Retention"],
  right: ["Athlete Intake", "Goal-Based Episode", "Return-to-Play", "Prevention Program"],
} as const;

export const operatoryFunnel = {
  left: ["Chiropractor", "Adjustments", "Membership Revenue"],
  right: ["Sports DC", "Evaluations + Programs", "Premium Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Patient Demographics", left: "Families, seniors, general wellness", right: "Athletes, active adults, teams" },
  { driver: "Visit Frequency", left: "2 – 4 visits/month maintenance", right: "Episodic + performance blocks" },
  { driver: "Pricing Model", left: "Membership + per-visit hybrid", right: "Package + cash-pay premium" },
  { driver: "Marketing Channel", left: "Local SEO, community, word of mouth", right: "Sports networks, gyms, teams" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Revenue Per Patient", left: "$700 – $1,600/yr", right: "$900 – $2,200/yr" },
  { metric: "Visits Per Patient", left: "14 – 28 per year", right: "10 – 20 per episode" },
  { metric: "Lifetime Value", left: "$1,200 – $3,000", right: "$1,500 – $4,000" },
  { metric: "Retention", left: "60 – 78% maintenance", right: "45 – 65% repeat athletes" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Chiropractor", left: "$280K – $380K", right: "$350K – $480K" },
  { metric: "Visits Per Day", left: "22 – 32", right: "18 – 28" },
  { metric: "Revenue Per Visit", left: "$45 – $75", right: "$65 – $110" },
] as const;

export const marginTiers = {
  left: { weak: "20 – 24%", average: "28 – 32%", strong: "33 – 38%" },
  right: { weak: "18 – 22%", average: "25 – 29%", strong: "30 – 35%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "22 – 28%", right: "24 – 32%" },
  { expense: "Marketing", left: "6 – 10%", right: "8 – 14%" },
  { expense: "Facility Cost", left: "5 – 9%", right: "6 – 10%" },
  { expense: "Technology + Admin", left: "10 – 16%", right: "11 – 17%" },
] as const;

export const insuranceHighlights = {
  left: {
    title: "Membership & Recurring Revenue",
    value: "Wellness plans and family packages drive 45–70% recurring revenue",
  },
  right: {
    title: "Premium Cash-Pay Positioning",
    value: "Performance packages and athlete contracts support higher per-visit pricing",
  },
} as const;

export const insuranceComparison = [
  { metric: "Cash-Pay Revenue", left: "65 – 82%", right: "75 – 92%" },
  { metric: "Insurance Billing", left: "18 – 35%", right: "8 – 25%" },
  { metric: "Marketing Dependence", left: "55 – 75%", right: "60 – 80%" },
  { metric: "Referral Source Mix", left: "Patient & family referrals", right: "Coaches, trainers, gyms" },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo Family DC", earnings: "$90K – $150K", type: "left" },
  { model: "Multi-DC Family Clinic Owner", earnings: "$160K – $280K", type: "left" },
  { model: "Solo Sports DC", earnings: "$120K – $220K", type: "right" },
  { model: "Sports Clinic + Team Contracts", earnings: "$200K – $380K+", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "General Clinic Buildout", percent: 26 },
  { item: "Adjustment Tables & Equipment", percent: 20 },
  { item: "Membership Software", percent: 14 },
  { item: "Working Capital", percent: 40 },
] as const;

export const rightStartupItems = [
  { item: "Sports-Focused Buildout", percent: 28 },
  { item: "Rehab & Performance Equipment", percent: 26 },
  { item: "Marketing & Brand Launch", percent: 16 },
  { item: "Working Capital", percent: 30 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: "$30K – $70K", right: "$45K – $110K" },
  { category: "Buildout", left: "$45K – $100K", right: "$55K – $130K" },
  { category: "Technology", left: "$12K – $30K", right: "$18K – $45K" },
  { category: "Launch Budget", left: "$140K – $280K", right: "$180K – $380K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: "2.2× – 3.2×", right: "2.5× – 3.8×" },
  { metric: "Recurring Revenue Premium", left: "Strong membership base", right: "Premium brand + contracts" },
  { metric: "Buyer Interest", left: "Wellness-focused acquirers", right: "Sports medicine + performance buyers" },
] as const;

export const valuationExamples = {
  left: { revenue: "$520K", value: "$500K – $680K", note: "2.8× SDE on $200K with strong membership base" },
  right: { revenue: "$680K", value: "$640K – $950K", note: "3.2× SDE on $240K with sports brand positioning" },
} as const;

export const valuationExampleTitle = "Illustrative Clinic Valuation";

export const breakEvenComparison = [
  { metric: "Active Patients Needed", left: "450 – 750", right: "350 – 600" },
  { metric: "Monthly Revenue Needed", left: "$32K – $48K", right: "$38K – $58K" },
  { metric: "Months To Break-Even", left: "10 – 18 months", right: "14 – 22 months" },
  { metric: "Marketing Spend at Launch", left: "$8K – $18K", right: "$15K – $35K" },
] as const;

export const scalingLadder = {
  left: ["Solo Family Practice", "Membership Model", "Associate DC", "Second Community Location"],
  right: ["Solo Sports DC", "Performance Program Line", "Team Contracts", "Multi-Sport Clinic Brand"],
} as const;

export const scalingLeftTitle = "Family Chiropractic Path";
export const scalingRightTitle = "Sports Chiropractic Path";

export const capitalEfficiency = {
  investment: "$220,000",
  left: {
    revenue: "$420K – $580K",
    profit: "$120K – $185K net profit",
    payback: "2 – 3.5 years",
  },
  right: {
    revenue: "$480K – $720K",
    profit: "$115K – $200K net profit",
    payback: "2.5 – 4 years",
  },
} as const;

export const chooseLeftTitle = "Choose Family Chiropractic If";
export const chooseRightTitle = "Choose Sports Chiropractic If";

export const chooseLeft = [
  "You want predictable recurring revenue through wellness memberships",
  "You prefer serving families, seniors, and general community patients",
  "You value local SEO and word-of-mouth over sports network selling",
  "You want higher margins with simpler service delivery",
  "You are building a long-retention maintenance care model",
] as const;

export const chooseRight = [
  "You want premium cash-pay pricing and performance-oriented care",
  "You have access to athlete, gym, and team referral networks",
  "You enjoy goal-based treatment episodes and return-to-play outcomes",
  "You want brand differentiation in a competitive local market",
  "You are targeting higher revenue per chiropractor through specialty positioning",
] as const;

export const calculators = [
  { label: "Chiropractic Clinic Valuation Calculator", href: "/calculators/chiropractic-clinic-valuation/" },
  { label: "Revenue Per Patient Calculator", href: "/calculators/chiropractic-clinic-revenue-per-patient/" },
  { label: "Profit Margin Calculator", href: "/calculators/chiropractic-clinic-profit-margin/" },
  { label: "Chiropractic Revenue Calculator", href: "/calculators/chiropractic-clinic-revenue/" },
  { label: "Startup Cost Calculator", href: "/calculators/chiropractic-clinic-startup-cost/" },
] as const;

export const relatedComparisons = [
  { label: "Chiropractic vs Massage Therapy", href: "/comparisons/chiropractic-vs-massage-therapy/" },
  { label: "Physical Therapy vs Chiropractic Clinic", href: "/comparisons/physical-therapy-vs-chiropractic-clinic/" },
  { label: "Solo vs Multi-Doctor Chiropractic", href: "/comparisons/solo-chiropractic-vs-multi-doctor-practice/" },
  { label: "Cash-Pay vs Insurance-Based Chiropractic", href: "/comparisons/cash-pay-vs-insurance-chiropractic/" },
  { label: "Chiropractic Clinic Hub", href: "/industries/healthcare/chiropractic-clinic/" },
] as const;

export const faqs = [
  {
    question: "Which chiropractic model generates more revenue?",
    answer:
      "Sports chiropractic clinics often reach $450K–$900K through premium visit pricing and performance packages. Family chiropractic typically runs $350K–$700K but can exceed sports revenue with strong membership models and multi-doctor scaling.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Family chiropractic often achieves 28–35% net margins due to recurring membership revenue and lower marketing intensity per visit. Sports chiropractic runs 24–32% with higher equipment and brand marketing costs offset by premium pricing.",
  },
  {
    question: "Is sports chiropractic harder to market?",
    answer:
      "Sports chiropractic requires relationship building with coaches, trainers, and athletic communities. Family chiropractic relies more on local SEO, community presence, and patient referrals — both are marketing-dependent but through different channels.",
  },
  {
    question: "Can a family chiropractor add sports services?",
    answer:
      "Yes. Many successful clinics blend family wellness with sports performance lines. The key is separating marketing messages and pricing tiers so premium sports packages do not commoditize general maintenance care.",
  },
  {
    question: "Which model has more predictable revenue?",
    answer:
      "Family chiropractic with membership plans typically produces more predictable monthly recurring revenue. Sports chiropractic revenue can be more episodic and seasonal, tied to athletic calendars and injury cycles.",
  },
  {
    question: "What does $220K produce in each model?",
    answer:
      "Family chiropractic at $220K investment often reaches $420K–$580K revenue with faster payback via membership models. Sports chiropractic at the same capital level can reach $480K–$720K revenue but typically needs longer brand and network development.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Family Chiropractic", "Sports Chiropractic", {
    clinicalGeneral: 3,
    clinicalSpecialty: 1,
    revenueModerate: 3,
    revenueHigh: 2,
    revenueVeryHigh: 1,
    insuranceLow: 2,
    insuranceMedium: 2,
    insuranceHigh: 2,
    growthLifestyle: 3,
    growthRegional: 2,
    growthMulti: 1,
  });
}

export const decisionToolCopy = {
  left:
    "Family chiropractic fits your goals — recurring wellness revenue, community marketing, higher margins, and predictable maintenance care economics.",
  right:
    "Sports chiropractic aligns with your priorities — premium cash-pay pricing, athlete-focused positioning, performance program revenue, and brand differentiation.",
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
