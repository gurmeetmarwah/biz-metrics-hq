import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "physical-therapy-vs-chiropractic-clinic",
  title: "Physical Therapy Clinic vs Chiropractic Clinic",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, patient economics, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Physical Therapy",
  right: "Chiropractic",
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
  { factor: "Higher Revenue Per Patient", winner: "Physical Therapy" },
  { factor: "Higher Profit Margins", winner: "Chiropractic" },
  { factor: "Lower Startup Cost", winner: "Chiropractic" },
  { factor: "Referral-Based Growth", winner: "Physical Therapy" },
  { factor: "Cash-Pay Revenue", winner: "Chiropractic" },
  { factor: "Scalability", winner: "Physical Therapy" },
  { factor: "Lifestyle Practice", winner: "Chiropractic" },
  { factor: "Enterprise Growth", winner: "Physical Therapy" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$500K – $1.5M", right: "$300K – $800K" },
  { metric: "EBITDA Margin", left: "18 – 28%", right: "25 – 35%" },
  { metric: "Owner Compensation", left: "$100K – $220K", right: "$80K – $200K" },
  { metric: "Revenue Per Patient", left: "$900 – $2,400 LTV", right: "$600 – $1,800 LTV" },
  { metric: "Startup Cost", left: "$215K – $505K", right: "$150K – $350K" },
  { metric: "Practice Value", left: "2.5× – 4.0× SDE", right: "2.0× – 3.5× SDE" },
  { metric: "Revenue Per Provider", left: "$350K – $550K", right: "$250K – $400K" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 10, right: 7, winner: "Physical Therapy" },
  { label: "Profit Margin", left: 7, right: 10, winner: "Chiropractic" },
  { label: "Scalability", left: 10, right: 6, winner: "Physical Therapy" },
  { label: "Capital Efficiency", left: 7, right: 9, winner: "Chiropractic" },
] as const;

export const leftRevenueSources = [
  "Evaluations",
  "Treatment Visits",
  "Sports Rehab",
  "Post-Surgical Rehab",
  "Employer Programs",
] as const;

export const rightRevenueSources = [
  "Adjustments",
  "Treatment Packages",
  "Wellness Plans",
  "Maintenance Visits",
  "Cash-Pay Services",
] as const;

export const revenueFunnel = {
  left: ["Referral", "Evaluation", "Treatment Plan", "Visits", "Revenue"],
  right: ["Consultation", "Adjustment Plan", "Recurring Visits", "Revenue"],
} as const;

export const patientFunnel = {
  left: ["Referral", "Patient", "Multiple Visits", "Discharge"],
  right: ["Consultation", "Treatment Plan", "Recurring Care", "Maintenance Visits"],
} as const;

export const operatoryFunnel = {
  left: ["Therapist", "Visits", "Revenue"],
  right: ["Chiropractor", "Adjustments", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Patient Volume", left: "800 – 2,000 active patients", right: "600 – 1,500 active patients" },
  { driver: "Revenue Per Visit", left: "$90 – $140", right: "$45 – $85" },
  { driver: "Repeat Visits", left: "8 – 14 per episode", right: "12 – 24+ per year" },
  { driver: "Cash Pay Revenue", left: "15 – 30%", right: "60 – 85%" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Revenue Per Patient", left: "$900 – $2,400", right: "$600 – $1,800" },
  { metric: "Visits Per Patient", left: "8 – 14 per episode", right: "12 – 24+ per year" },
  { metric: "Lifetime Value", left: "$1,200 – $3,500", right: "$1,000 – $2,800" },
  { metric: "Retention", left: "68 – 82% completion", right: "55 – 75% maintenance" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Provider", left: "$350K – $550K", right: "$250K – $400K" },
  { metric: "Visits Per Day", left: "12 – 18", right: "20 – 35" },
  { metric: "Revenue Per Visit", left: "$90 – $140", right: "$45 – $85" },
] as const;

export const marginTiers = {
  left: { weak: "14 – 18%", average: "20 – 26%", strong: "27 – 30%" },
  right: { weak: "18 – 22%", average: "26 – 32%", strong: "33 – 38%" },
} as const;

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "28 – 36%", right: "22 – 30%" },
  { expense: "Front Desk", left: "8 – 12%", right: "6 – 10%" },
  { expense: "Facility Cost", left: "7 – 11%", right: "5 – 9%" },
  { expense: "Marketing", left: "3 – 6%", right: "5 – 10%" },
] as const;

export const insuranceHighlights = {
  left: {
    title: "Referral-Driven Acquisition",
    value: "Physician, employer & hospital referrals",
  },
  right: {
    title: "Direct Consumer Acquisition",
    value: "Google, local SEO & word of mouth",
  },
} as const;

export const insuranceComparison = [
  { metric: "Referral Dependence", left: "55 – 75%", right: "15 – 35%" },
  { metric: "Marketing Dependence", left: "25 – 45%", right: "65 – 85%" },
  { metric: "Lead Cost", left: "$80 – $180/referral", right: "$40 – $120/lead" },
  { metric: "Acquisition Difficulty", left: "Moderate (relationship-based)", right: "Moderate (marketing-driven)" },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo PT Owner", earnings: "$100K – $180K", type: "left" },
  { model: "Multi-Therapist Owner", earnings: "$140K – $240K", type: "left" },
  { model: "Solo Chiropractor", earnings: "$80K – $160K", type: "right" },
  { model: "Multi-Location Chiropractic Owner", earnings: "$180K – $350K+", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Leasehold Improvements", percent: 32 },
  { item: "Equipment", percent: 28 },
  { item: "Software", percent: 14 },
  { item: "Working Capital", percent: 26 },
] as const;

export const rightStartupItems = [
  { item: "Buildout", percent: 28 },
  { item: "Adjustment Tables", percent: 22 },
  { item: "Imaging Equipment", percent: 18 },
  { item: "Working Capital", percent: 32 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: "$60K – $150K", right: "$35K – $90K" },
  { category: "Buildout", left: "$80K – $200K", right: "$50K – $120K" },
  { category: "Technology", left: "$25K – $55K", right: "$15K – $40K" },
  { category: "Launch Budget", left: "$215K – $505K", right: "$150K – $350K" },
] as const;

export const valuationComparison = [
  { metric: "EBITDA Multiple", left: "3.0× – 5.0×", right: "2.5× – 4.5×" },
  { metric: "Revenue Multiple", left: "0.6× – 1.0×", right: "0.5× – 0.9×" },
  { metric: "Practice Value (SDE)", left: "2.5× – 4.0×", right: "2.0× – 3.5×" },
] as const;

export const valuationExamples = {
  left: { revenue: "$850K", value: "$770K – $960K", note: "3.2× SDE on $240K owner benefit" },
  right: { revenue: "$500K", value: "$480K – $720K", note: "2.8× SDE on $200K owner benefit" },
} as const;

export const valuationExampleTitle = "$1M Revenue Practice → Estimated Value";

export const breakEvenComparison = [
  { metric: "Patients Needed", left: "800 – 1,200 active", right: "500 – 900 active" },
  { metric: "Visits Needed", left: "650 – 950/mo", right: "800 – 1,400/mo" },
  { metric: "Monthly Revenue Needed", left: "$65K – $85K", right: "$35K – $55K" },
  { metric: "Months To Break-Even", left: "18 – 28 months", right: "12 – 20 months" },
] as const;

export const scalingLadder = {
  left: ["Solo Therapist", "Multi-Therapist Clinic", "Regional Group", "Multi-Location Network"],
  right: ["Solo Practice", "Associate Model", "Second Location", "Regional Brand"],
} as const;

export const scalingLeftTitle = "Physical Therapy Growth Path";
export const scalingRightTitle = "Chiropractic Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: {
    revenue: "$650K – $950K",
    profit: "$130K – $220K EBITDA",
    payback: "3.5 – 5 years",
  },
  right: {
    revenue: "$450K – $650K",
    profit: "$115K – $195K EBITDA",
    payback: "2.5 – 4 years",
  },
} as const;

export const chooseLeftTitle = "Choose Physical Therapy If";
export const chooseRightTitle = "Choose Chiropractic If";

export const chooseLeft = [
  "You want referral-driven growth through physician and employer relationships",
  "You enjoy rehabilitation care and episodic treatment planning",
  "You want larger clinic teams and multi-therapist operations",
  "You want multi-location expansion and healthcare-system integration",
  "You prefer higher revenue per patient and post-surgical care pathways",
] as const;

export const chooseRight = [
  "You prefer cash-pay models with fewer payer constraints",
  "You want lower startup costs and faster break-even timelines",
  "You value lifestyle flexibility and simpler daily operations",
  "You want recurring wellness visits and maintenance care plans",
  "You prefer direct consumer marketing over referral relationship building",
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
  { label: "Sports PT vs General PT", href: "/comparisons/sports-pt-vs-general-pt/" },
  { label: "Solo PT vs Multi-Therapist Practice", href: "/comparisons/solo-pt-vs-multi-therapist-practice/" },
  { label: "Private Practice vs Hospital-Based PT", href: "/comparisons/private-practice-vs-hospital-based-pt/" },
  { label: "Physical Therapy Clinic Hub", href: "/industries/healthcare/physical-therapy-clinic/" },
] as const;

export const faqs = [
  {
    question: "Which model generates more revenue per patient?",
    answer:
      "Physical therapy typically generates $900–$2,400 in lifetime value per patient through episodic rehab care, while chiropractic patients often generate $600–$1,800 through recurring wellness visits. PT wins on per-patient revenue; chiropractic wins on visit frequency.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Chiropractic clinics typically achieve 25–35% EBITDA margins due to cash-pay dominance and lower clinical staffing ratios. PT clinics operate at 18–28% EBITDA, with higher payroll and insurance reimbursement complexity.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Chiropractic startups typically require $150K–$350K all-in versus $215K–$505K for outpatient PT clinics. Lower equipment costs, smaller buildouts, and minimal software infrastructure reduce chiropractic capital requirements.",
  },
  {
    question: "Which scales better to multiple locations?",
    answer:
      "Physical therapy supports stronger multi-location scaling through employer contracts, hospital partnerships, and post-surgical referral pipelines. Chiropractic multi-location growth is viable but more dependent on local brand marketing in each market.",
  },
  {
    question: "How do acquisition channels differ?",
    answer:
      "PT clinics rely 55–75% on physician, employer, and hospital referrals. Chiropractic practices depend 65–85% on direct marketing — Google, local SEO, word of mouth, and wellness community presence.",
  },
  {
    question: "What does $250K produce in each model?",
    answer:
      "A $250K PT investment typically supports $650K–$950K revenue and $130K–$220K EBITDA with 3.5–5 year payback. The same capital in chiropractic often supports $450K–$650K revenue and $115K–$195K EBITDA with faster 2.5–4 year payback due to lower overhead.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "Physical Therapy Clinic", "Chiropractic Clinic", {
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
    "Physical therapy clinic is the better fit for your goals — referral-driven growth, higher revenue per patient, multi-therapist teams, and stronger enterprise scaling potential.",
  right:
    "Chiropractic clinic aligns with your priorities — cash-pay revenue, higher margins, lower startup costs, lifestyle flexibility, and recurring wellness visit economics.",
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
