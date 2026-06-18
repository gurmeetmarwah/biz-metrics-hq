import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "chiropractic-vs-massage-therapy",
  title: "Chiropractic Clinic vs Massage Therapy Practice",
  subtitle:
    "Compare revenue, profit margins, owner compensation, patient economics, licensing requirements, scalability, and valuation between chiropractic clinics and massage therapy practices.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Chiropractic",
  right: "Massage Therapy",
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
  { factor: "Higher Revenue Per Patient", winner: "Chiropractic" },
  { factor: "Higher Profit Margins", winner: "Chiropractic" },
  { factor: "Lower Startup Cost", winner: "Massage Therapy" },
  { factor: "Recurring Care Revenue", winner: "Chiropractic" },
  { factor: "Licensing Barrier to Entry", winner: "Massage Therapy" },
  { factor: "Scalability to Multi-Location", winner: "Chiropractic" },
  { factor: "Lifestyle Practice", winner: "Massage Therapy" },
  { factor: "Clinical Authority & Referrals", winner: "Chiropractic" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$300K – $800K", right: "$120K – $350K" },
  { metric: "Net Profit Margin", left: "25 – 35%", right: "18 – 28%" },
  { metric: "Owner Compensation", left: "$80K – $200K", right: "$45K – $120K" },
  { metric: "Revenue Per Patient", left: "$600 – $1,800/yr", right: "$300 – $900/yr" },
  { metric: "Startup Cost", left: "$150K – $350K", right: "$35K – $120K" },
  { metric: "Practice Value", left: "2.0× – 3.5× SDE", right: "1.5× – 2.8× SDE" },
  { metric: "Revenue Per Provider", left: "$250K – $400K", right: "$80K – $180K" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 10, right: 5, winner: "Chiropractic" },
  { label: "Profit Margin", left: 9, right: 7, winner: "Chiropractic" },
  { label: "Capital Efficiency", left: 6, right: 10, winner: "Massage Therapy" },
  { label: "Scalability", left: 8, right: 5, winner: "Chiropractic" },
] as const;

export const leftRevenueSources = [
  "Spinal Adjustments",
  "Treatment Packages",
  "Wellness Plans",
  "Maintenance Care",
  "Cash-Pay Services",
] as const;

export const rightRevenueSources = [
  "Therapeutic Massage",
  "Membership Packages",
  "Spa Add-On Services",
  "Corporate Wellness",
  "Retail Product Sales",
] as const;

export const revenueFunnel = {
  left: ["Consultation", "Adjustment Plan", "Recurring Visits", "Maintenance", "Revenue"],
  right: ["Booking", "Session", "Package Upsell", "Membership", "Revenue"],
} as const;

export const patientFunnel = {
  left: ["Consultation", "Treatment Plan", "Recurring Care", "Maintenance Visits"],
  right: ["First Session", "Package Purchase", "Repeat Bookings", "Membership Retention"],
} as const;

export const operatoryFunnel = {
  left: ["Chiropractor", "Adjustments", "Revenue"],
  right: ["Therapist", "Sessions", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Patient Volume", left: "600 – 1,500 active patients", right: "200 – 600 active clients" },
  { driver: "Revenue Per Visit", left: "$45 – $85", right: "$60 – $120/session" },
  { driver: "Visit Frequency", left: "12 – 24+ per year", right: "6 – 18 per year" },
  { driver: "Cash Pay Revenue", left: "60 – 85%", right: "70 – 95%" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Revenue Per Patient", left: "$600 – $1,800", right: "$300 – $900" },
  { metric: "Visits Per Patient", left: "12 – 24+ per year", right: "6 – 18 per year" },
  { metric: "Lifetime Value", left: "$1,000 – $2,800", right: "$500 – $1,600" },
  { metric: "Retention", left: "55 – 75% maintenance", right: "40 – 65% repeat" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Provider", left: "$250K – $400K", right: "$80K – $180K" },
  { metric: "Sessions Per Day", left: "20 – 35", right: "4 – 8" },
  { metric: "Revenue Per Session", left: "$45 – $85", right: "$60 – $120" },
] as const;

export const marginTiers = {
  left: { weak: "18 – 22%", average: "26 – 32%", strong: "33 – 38%" },
  right: { weak: "12 – 16%", average: "20 – 24%", strong: "25 – 28%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "22 – 30%", right: "35 – 50%" },
  { expense: "Front Desk / Admin", left: "6 – 10%", right: "8 – 14%" },
  { expense: "Facility Cost", left: "5 – 9%", right: "8 – 15%" },
  { expense: "Marketing", left: "5 – 10%", right: "8 – 15%" },
] as const;

export const insuranceHighlights = {
  left: {
    title: "Clinical Positioning",
    value: "DC license enables diagnosis, treatment plans, and physician referral relationships",
  },
  right: {
    title: "Wellness Positioning",
    value: "Lower regulatory burden with direct consumer booking and spa/wellness integration",
  },
} as const;

export const insuranceComparison = [
  { metric: "Insurance Billing", left: "15 – 40%", right: "5 – 20%" },
  { metric: "Direct Consumer Marketing", left: "65 – 85%", right: "80 – 95%" },
  { metric: "Referral Dependence", left: "15 – 35%", right: "5 – 20%" },
  { metric: "Licensing Requirements", left: "DC degree + state license", right: "Massage license + local permits" },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo Chiropractor", earnings: "$80K – $160K", type: "left" },
  { model: "Multi-Doctor Chiropractic Owner", earnings: "$180K – $350K+", type: "left" },
  { model: "Solo Massage Therapist", earnings: "$45K – $90K", type: "right" },
  { model: "Multi-Therapist Spa Owner", earnings: "$80K – $180K", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Buildout", percent: 28 },
  { item: "Adjustment Tables & Equipment", percent: 22 },
  { item: "Technology", percent: 12 },
  { item: "Working Capital", percent: 38 },
] as const;

export const rightStartupItems = [
  { item: "Leasehold / Room Buildout", percent: 25 },
  { item: "Tables & Supplies", percent: 18 },
  { item: "Marketing Launch", percent: 22 },
  { item: "Working Capital", percent: 35 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: "$35K – $90K", right: "$8K – $25K" },
  { category: "Buildout", left: "$50K – $120K", right: "$15K – $50K" },
  { category: "Technology", left: "$15K – $40K", right: "$3K – $12K" },
  { category: "Launch Budget", left: "$150K – $350K", right: "$35K – $120K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: "2.0× – 3.5×", right: "1.5× – 2.8×" },
  { metric: "Revenue Multiple", left: "0.5× – 0.9×", right: "0.3× – 0.6×" },
  { metric: "Buyer Universe", left: "DC buyers, regional groups, PE platforms", right: "Owner-operators, spa consolidators" },
] as const;

export const valuationExamples = {
  left: { revenue: "$500K", value: "$480K – $720K", note: "2.8× SDE on $200K owner benefit" },
  right: { revenue: "$220K", value: "$180K – $320K", note: "2.2× SDE on $90K owner benefit" },
} as const;

export const valuationExampleTitle = "Illustrative Practice Valuation";

export const breakEvenComparison = [
  { metric: "Active Patients Needed", left: "500 – 900", right: "120 – 280" },
  { metric: "Monthly Revenue Needed", left: "$35K – $55K", right: "$12K – $22K" },
  { metric: "Months To Break-Even", left: "12 – 20 months", right: "6 – 14 months" },
  { metric: "Sessions Per Month", left: "800 – 1,400", right: "180 – 420" },
] as const;

export const scalingLadder = {
  left: ["Solo DC Practice", "Associate Model", "Second Location", "Regional Brand"],
  right: ["Solo Therapist", "Small Team Studio", "Multi-Room Spa", "Franchise / Multi-Site"],
} as const;

export const scalingLeftTitle = "Chiropractic Growth Path";
export const scalingRightTitle = "Massage Therapy Growth Path";

export const capitalEfficiency = {
  investment: "$200,000",
  left: {
    revenue: "$450K – $650K",
    profit: "$115K – $195K net profit",
    payback: "2.5 – 4 years",
  },
  right: {
    revenue: "$180K – $280K",
    profit: "$40K – $70K net profit",
    payback: "3 – 5 years",
  },
} as const;

export const chooseLeftTitle = "Choose Chiropractic If";
export const chooseRightTitle = "Choose Massage Therapy If";

export const chooseLeft = [
  "You want higher revenue per patient and stronger recurring care economics",
  "You are willing to invest in DC education and clinical licensing",
  "You want wellness plans, maintenance care, and higher practice valuations",
  "You plan multi-doctor scaling with associate and location expansion",
  "You prefer clinical authority that supports referral and employer relationships",
] as const;

export const chooseRight = [
  "You want the lowest capital barrier to opening a wellness business",
  "You prefer session-based booking without complex clinical documentation",
  "You value spa, wellness, or hospitality-style client experiences",
  "You want faster break-even on a smaller initial investment",
  "You are building a lifestyle studio rather than a clinical enterprise",
] as const;

export const calculators = [
  { label: "Chiropractic Clinic Valuation Calculator", href: "/calculators/chiropractic-clinic-valuation/" },
  { label: "Revenue Per Patient Calculator", href: "/calculators/chiropractic-clinic-revenue-per-patient/" },
  { label: "Profit Margin Calculator", href: "/calculators/chiropractic-clinic-profit-margin/" },
  { label: "Break-Even Calculator", href: "/calculators/chiropractic-clinic-break-even/" },
  { label: "Chiropractic Revenue Calculator", href: "/calculators/chiropractic-clinic-revenue/" },
] as const;

export const relatedComparisons = [
  { label: "Physical Therapy vs Chiropractic Clinic", href: "/comparisons/physical-therapy-vs-chiropractic-clinic/" },
  { label: "Family Chiropractic vs Sports Chiropractic", href: "/comparisons/family-chiropractic-vs-sports-chiropractic/" },
  { label: "Solo vs Multi-Doctor Chiropractic", href: "/comparisons/solo-chiropractic-vs-multi-doctor-practice/" },
  { label: "Cash-Pay vs Insurance-Based Chiropractic", href: "/comparisons/cash-pay-vs-insurance-chiropractic/" },
  { label: "Chiropractic Clinic Hub", href: "/industries/healthcare/chiropractic-clinic/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — chiropractic or massage therapy?",
    answer:
      "Chiropractic clinics typically generate $300K–$800K annually versus $120K–$350K for massage therapy practices. Higher per-patient value, recurring maintenance care, and multi-provider scaling drive the chiropractic revenue advantage.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Massage therapy practices require $35K–$120K to launch versus $150K–$350K for chiropractic clinics. Lower equipment costs, simpler buildouts, and no doctoral education requirement reduce massage startup capital.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Chiropractic clinics typically achieve 25–35% net margins due to higher visit pricing power and recurring care models. Massage therapy practices run 18–28% margins with higher therapist payroll ratios.",
  },
  {
    question: "Can massage therapists compete with chiropractors?",
    answer:
      "Massage therapy competes in the wellness and relaxation segment but lacks clinical diagnosis authority, spinal manipulation scope, and insurance billing pathways that support chiropractic recurring revenue models.",
  },
  {
    question: "Which scales better to multiple locations?",
    answer:
      "Chiropractic supports stronger multi-location scaling through associate doctor models, wellness membership programs, and regional brand development. Massage scaling is viable but often capped by therapist throughput and spa-style economics.",
  },
  {
    question: "What does $200K produce in each model?",
    answer:
      "A $200K chiropractic investment typically supports $450K–$650K revenue and $115K–$195K net profit with 2.5–4 year payback. The same capital in massage therapy often supports $180K–$280K revenue and $40K–$70K net profit.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Chiropractic Clinic", "Massage Therapy Practice", {
    clinicalGeneral: 1,
    clinicalSpecialty: 3,
    revenueModerate: 1,
    revenueHigh: 2,
    revenueVeryHigh: 3,
    insuranceLow: 1,
    insuranceMedium: 2,
    insuranceHigh: 3,
    growthLifestyle: 1,
    growthRegional: 2,
    growthMulti: 3,
  });
}

export const decisionToolCopy = {
  left:
    "Chiropractic clinic aligns with your goals — higher revenue per patient, stronger margins, recurring care economics, and multi-location scaling potential.",
  right:
    "Massage therapy practice fits your priorities — lower startup costs, simpler operations, wellness-focused client experience, and faster break-even on smaller capital.",
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
