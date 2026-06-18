import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "cash-pay-vs-insurance-chiropractic",
  title: "Cash-Pay vs Insurance-Based Chiropractic",
  subtitle:
    "Compare revenue models, margins, billing complexity, patient acquisition, visit pricing, and scalability between cash-pay and insurance-based chiropractic clinics.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Cash-Pay Chiropractic",
  right: "Insurance-Based Chiropractic",
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
  { factor: "Higher Profit Margins", winner: "Cash-Pay Chiropractic" },
  { factor: "Higher Visit Volume", winner: "Insurance-Based Chiropractic" },
  { factor: "Billing Simplicity", winner: "Cash-Pay Chiropractic" },
  { factor: "Patient Acquisition Cost Control", winner: "Cash-Pay Chiropractic" },
  { factor: "Referral Network Access", winner: "Insurance-Based Chiropractic" },
  { factor: "Revenue Predictability", winner: "Cash-Pay Chiropractic" },
  { factor: "Payer Diversification", winner: "Insurance-Based Chiropractic" },
  { factor: "Administrative Overhead", winner: "Cash-Pay Chiropractic" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$350K – $750K", right: "$400K – $850K" },
  { metric: "Net Profit Margin", left: "30 – 38%", right: "20 – 28%" },
  { metric: "Owner Compensation", left: "$100K – $220K", right: "$90K – $180K" },
  { metric: "Revenue Per Visit", left: "$55 – $95", right: "$35 – $65" },
  { metric: "Cash Collection Speed", left: "Same day – 7 days", right: "21 – 45 days" },
  { metric: "Admin / Billing Overhead", left: "6 – 10%", right: "12 – 20%" },
  { metric: "Recurring Revenue %", left: "55 – 75%", right: "30 – 50%" },
] as const;

export const winnerScorecard = [
  { label: "Profit Margin", left: 10, right: 6, winner: "Cash-Pay Chiropractic" },
  { label: "Volume Potential", left: 7, right: 9, winner: "Insurance-Based Chiropractic" },
  { label: "Operational Simplicity", left: 10, right: 5, winner: "Cash-Pay Chiropractic" },
  { label: "Market Reach", left: 7, right: 8, winner: "Insurance-Based Chiropractic" },
] as const;

export const leftRevenueSources = [
  "Membership Plans",
  "Care Package Sales",
  "Maintenance Adjustments",
  "Wellness Subscriptions",
  "Direct-Pay New Patients",
] as const;

export const rightRevenueSources = [
  "Commercial Insurance Claims",
  "Medicare Adjustments",
  "Auto / PI Cases",
  "Workers Comp",
  "Mixed Payer Panel",
] as const;

export const revenueFunnel = {
  left: ["Marketing Lead", "Consultation", "Package Sale", "Recurring Visits", "Revenue"],
  right: ["Referral / Panel Intake", "Verification", "Treatment Plan", "Claims", "Collections"],
} as const;

export const patientFunnel = {
  left: ["Direct Booking", "Consultation", "Membership / Plan", "Long-Term Retention"],
  right: ["Insurance Intake", "Authorization", "Episode Care", "Discharge / Re-Referral"],
} as const;

export const operatoryFunnel = {
  left: ["Chiropractor", "Cash Collections", "Revenue"],
  right: ["Chiropractor", "Claims Processing", "Net Collections"],
} as const;

export const revenueDrivers = [
  { driver: "Pricing Control", left: "Full control over packages and membership tiers", right: "Contracted fee schedules limit per-visit rates" },
  { driver: "Visit Frequency", left: "Maintenance-driven recurring visits", right: "Episode-limited by payer authorization" },
  { driver: "Marketing Mix", left: "65 – 85% direct consumer marketing", right: "40 – 60% referrals + panel presence" },
  { driver: "Collection Efficiency", left: "95 – 99% collected at point of service", right: "82 – 92% net after denials and adjustments" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Revenue Per Patient", left: "$800 – $1,800/yr", right: "$500 – $1,200/yr" },
  { metric: "Visits Per Patient", left: "16 – 28 per year", right: "8 – 16 per episode" },
  { metric: "Lifetime Value", left: "$1,400 – $3,200", right: "$800 – $2,000" },
  { metric: "Retention", left: "60 – 78% maintenance", right: "40 – 60% re-authorization" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Chiropractor", left: "$320K – $450K", right: "$280K – $400K" },
  { metric: "Visits Per Day", left: "22 – 35", right: "24 – 38" },
  { metric: "Net Revenue Per Visit", left: "$55 – $95", right: "$32 – $58" },
] as const;

export const marginTiers = {
  left: { weak: "24 – 28%", average: "31 – 35%", strong: "36 – 40%" },
  right: { weak: "16 – 20%", average: "22 – 26%", strong: "27 – 30%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "20 – 26%", right: "24 – 32%" },
  { expense: "Billing + Admin", left: "6 – 10%", right: "12 – 20%" },
  { expense: "Marketing", left: "7 – 12%", right: "4 – 8%" },
  { expense: "Technology / EMR", left: "2 – 4%", right: "4 – 8%" },
] as const;

export const insuranceHighlights = {
  left: {
    title: "Point-of-Service Collections",
    value: "Membership and package sales collected upfront with minimal accounts receivable",
  },
  right: {
    title: "Payer Panel Access",
    value: "In-network status opens physician, employer, and auto/PI referral streams",
  },
} as const;

export const insuranceComparison = [
  { metric: "Cash-Pay Revenue %", left: "85 – 98%", right: "15 – 45%" },
  { metric: "Insurance Revenue %", left: "2 – 15%", right: "55 – 85%" },
  { metric: "Denial / Adjustment Rate", left: "Minimal", right: "8 – 18% of gross charges" },
  { metric: "Days in A/R", left: "0 – 7 days", right: "28 – 55 days" },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo Cash-Pay DC", earnings: "$100K – $200K", type: "left" },
  { model: "Membership-Based Multi-DC", earnings: "$180K – $350K+", type: "left" },
  { model: "Solo Insurance Panel DC", earnings: "$90K – $160K", type: "right" },
  { model: "Multi-DC Insurance Clinic", earnings: "$140K – $260K", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Clinic Buildout", percent: 26 },
  { item: "Equipment", percent: 20 },
  { item: "Membership Software", percent: 14 },
  { item: "Marketing Launch", percent: 40 },
] as const;

export const rightStartupItems = [
  { item: "Clinic Buildout", percent: 24 },
  { item: "Equipment", percent: 18 },
  { item: "Billing + EMR Systems", percent: 16 },
  { item: "Credentialing + Working Capital", percent: 42 },
] as const;

export const startupSideBySide = [
  { category: "Technology / Billing", left: "$12K – $28K", right: "$25K – $55K" },
  { category: "Marketing Launch", left: "$15K – $40K", right: "$8K – $20K" },
  { category: "Credentialing", left: "Minimal", right: "$5K – $15K + 3–6 months" },
  { category: "Working Capital", left: "$40K – $80K", right: "$60K – $120K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: "2.5× – 3.8×", right: "2.0× – 3.2×" },
  { metric: "Recurring Revenue Premium", left: "Strong membership base", right: "Payer contract stability" },
  { metric: "Buyer Preference", left: "Wellness + cash-pay acquirers", right: "Insurance-heavy buyers discount A/R risk" },
] as const;

export const valuationExamples = {
  left: { revenue: "$550K", value: "$560K – $840K", note: "3.2× SDE on $220K with 65% recurring revenue" },
  right: { revenue: "$620K", value: "$480K – $680K", note: "2.6× SDE on $210K with payer mix discount" },
} as const;

export const valuationExampleTitle = "Same Revenue, Different Valuation";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$30K – $45K", right: "$38K – $58K" },
  { metric: "New Patients Per Month", left: "35 – 60", right: "25 – 45" },
  { metric: "Months To Break-Even", left: "10 – 16 months", right: "14 – 24 months" },
  { metric: "Billing Staff Required", left: "0 – 1 part-time", right: "1 – 2 full-time" },
] as const;

export const scalingLadder = {
  left: ["Solo Cash-Pay DC", "Membership Model", "Multi-DC Wellness Brand", "Regional Subscription Network"],
  right: ["Panel Credentialing", "Multi-Payer Mix", "Associate DC Model", "Multi-Location Insurance Clinic"],
} as const;

export const scalingLeftTitle = "Cash-Pay Growth Path";
export const scalingRightTitle = "Insurance Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: {
    revenue: "$450K – $650K",
    profit: "$140K – $220K net profit",
    payback: "2 – 3 years",
  },
  right: {
    revenue: "$480K – $680K",
    profit: "$95K – $165K net profit",
    payback: "3 – 5 years",
  },
} as const;

export const chooseLeftTitle = "Choose Cash-Pay If";
export const chooseRightTitle = "Choose Insurance-Based If";

export const chooseLeft = [
  "You want higher margins with minimal billing and accounts receivable",
  "You prefer membership and package-based recurring revenue",
  "You are comfortable with direct consumer marketing investment",
  "You want faster collections and simpler financial operations",
  "You value pricing control without payer fee schedule constraints",
] as const;

export const chooseRight = [
  "You want access to physician, employer, and auto/PI referral networks",
  "You prefer higher visit volume through in-network patient panels",
  "You can manage billing staff, credentialing, and payer compliance",
  "You want to serve patients who rely on insurance benefits",
  "You are building a mixed-model clinic with diversified payer streams",
] as const;

export const calculators = [
  { label: "Chiropractic Clinic Valuation Calculator", href: "/calculators/chiropractic-clinic-valuation/" },
  { label: "Profit Margin Calculator", href: "/calculators/chiropractic-clinic-profit-margin/" },
  { label: "Revenue Per Patient Calculator", href: "/calculators/chiropractic-clinic-revenue-per-patient/" },
  { label: "Break-Even Calculator", href: "/calculators/chiropractic-clinic-break-even/" },
  { label: "Chiropractic Revenue Calculator", href: "/calculators/chiropractic-clinic-revenue/" },
] as const;

export const relatedComparisons = [
  { label: "Solo vs Multi-Doctor Chiropractic", href: "/comparisons/solo-chiropractic-vs-multi-doctor-practice/" },
  { label: "Family Chiropractic vs Sports Chiropractic", href: "/comparisons/family-chiropractic-vs-sports-chiropractic/" },
  { label: "Physical Therapy vs Chiropractic Clinic", href: "/comparisons/physical-therapy-vs-chiropractic-clinic/" },
  { label: "Chiropractic vs Massage Therapy", href: "/comparisons/chiropractic-vs-massage-therapy/" },
  { label: "Chiropractic Clinic Hub", href: "/industries/healthcare/chiropractic-clinic/" },
] as const;

export const faqs = [
  {
    question: "Which chiropractic model has better profit margins?",
    answer:
      "Cash-pay chiropractic clinics typically achieve 30–38% net margins versus 20–28% for insurance-heavy practices. Lower billing overhead, upfront collections, and membership recurring revenue drive the cash-pay margin advantage.",
  },
  {
    question: "Can insurance-based chiropractic generate more total revenue?",
    answer:
      "Insurance-based clinics can reach similar or higher gross revenue ($400K–$850K) through higher visit volume and payer panel access, but net collections are reduced by denials, write-offs, and billing/admin overhead.",
  },
  {
    question: "How does billing complexity differ?",
    answer:
      "Cash-pay clinics collect at point of service with minimal A/R. Insurance-based clinics require credentialing, prior authorization, claims management, and dedicated billing staff — adding 12–20% to overhead.",
  },
  {
    question: "Which model is better for recurring revenue?",
    answer:
      "Cash-pay models with membership and wellness plans typically achieve 55–75% recurring revenue. Insurance models are episode-driven with 30–50% recurring, tied to re-authorization and payer visit limits.",
  },
  {
    question: "Can a clinic blend cash-pay and insurance?",
    answer:
      "Many successful clinics run hybrid models — insurance for new patient acquisition and cash-pay memberships for maintenance care. The key is separating pricing tiers so insurance patients do not anchor membership value.",
  },
  {
    question: "What does $250K produce in each model?",
    answer:
      "Cash-pay at $250K investment often supports $450K–$650K revenue and $140K–$220K net profit with 2–3 year payback. Insurance-based at the same capital level supports similar gross revenue but $95K–$165K net profit due to billing overhead and collection lag.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Cash-Pay Chiropractic", "Insurance-Based Chiropractic", {
    clinicalGeneral: 2,
    clinicalSpecialty: 2,
    revenueModerate: 2,
    revenueHigh: 2,
    revenueVeryHigh: 2,
    insuranceLow: 3,
    insuranceMedium: 2,
    insuranceHigh: 1,
    growthLifestyle: 3,
    growthRegional: 2,
    growthMulti: 1,
  });
}

export const decisionToolCopy = {
  left:
    "Cash-pay chiropractic fits your priorities — higher margins, simpler billing, membership recurring revenue, and faster point-of-service collections.",
  right:
    "Insurance-based chiropractic aligns with your goals if you want payer panel access, higher visit volume, referral network reach, and diversified patient acquisition channels.",
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
