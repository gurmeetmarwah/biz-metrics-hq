import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";
import { pilatesCalculators, pilatesRelatedComparisons } from "./pilates-comparison-shared";

export const comparisonMeta = {
  slug: "pilates-studio-vs-physical-therapy-clinic",
  title: "Pilates Studio vs Physical Therapy Clinic",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, client economics, recurring revenue, regulatory requirements, scalability, and valuation for pilates studios and physical therapy clinics.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "Pilates Studio",
  right: "Physical Therapy",
  breadcrumbHub: {
    label: "Pilates Studio",
    href: "/industries/pilates-studio/",
  },
  exploreHub: {
    label: "Explore Pilates Studio Hub →",
    href: "/industries/pilates-studio/",
  },
} as const;

const relatedComparisons = pilatesRelatedComparisons.filter(
  (c) => !c.href.includes("pilates-studio-vs-physical-therapy-clinic"),
);

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue Ceiling", winner: "Physical Therapy" },
  { factor: "Higher Profit Margins", winner: "Pilates Studio" },
  { factor: "Lower Startup Cost", winner: "Pilates Studio" },
  { factor: "Recurring Revenue Model", winner: "Pilates Studio" },
  { factor: "Insurance / Payer Revenue", winner: "Physical Therapy" },
  { factor: "Regulatory Simplicity", winner: "Pilates Studio" },
  { factor: "Revenue Per Provider", winner: "Physical Therapy" },
  { factor: "Lifestyle Flexibility", winner: "Pilates Studio" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$350K – $900K", right: "$500K – $1.5M" },
  { metric: "Net / EBITDA Margin", left: "18 – 28%", right: "18 – 28%" },
  { metric: "Owner Compensation", left: "$90K – $170K", right: "$100K – $220K" },
  { metric: "Revenue Per Client", left: "$150 – $280/mo", right: "$900 – $2,400 LTV" },
  { metric: "Startup Cost", left: "$80K – $250K", right: "$215K – $505K" },
  { metric: "Business Value", left: "2.5× – 3.8× SDE", right: "2.5× – 4.0× SDE" },
  { metric: "Recurring Revenue", left: "85 – 95% MRR", right: "55 – 75% insurance" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 7, right: 10, winner: "Physical Therapy" },
  { label: "Profit Margin", left: 9, right: 7, winner: "Pilates Studio" },
  { label: "Capital Efficiency", left: 10, right: 6, winner: "Pilates Studio" },
  { label: "Scalability", left: 7, right: 10, winner: "Physical Therapy" },
] as const;

export const leftRevenueSources = [
  "Monthly Memberships",
  "Private Reformer Sessions",
  "Semi-Private Sessions",
  "Class Packages",
  "Workshops & Teacher Training",
] as const;

export const rightRevenueSources = [
  "Evaluations",
  "Treatment Visits",
  "Sports Rehab",
  "Post-Surgical Rehab",
  "Employer Programs",
] as const;

export const revenueFunnel = {
  left: ["Lead", "Intro Package", "Membership", "Private Sessions", "Retention", "Revenue"],
  right: ["Referral", "Evaluation", "Treatment Plan", "Visits", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Primary Revenue Model", left: "Membership MRR + privates", right: "Insurance + cash-pay visits" },
  { driver: "Active Clients / Patients", left: "150 – 400", right: "800 – 2,500 annually" },
  { driver: "Average Client Value", left: "$150 – $280/mo", right: "$900 – $2,400 LTV" },
  { driver: "Payer Mix", left: "95%+ direct pay", right: "55 – 75% insurance" },
] as const;

export const patientFunnel = {
  left: ["Prospect", "Intro Offer", "Member", "Private Upgrade", "Referral"],
  right: ["Referral", "Patient", "Multiple Visits", "Discharge"],
} as const;

export const patientEconomicsMetrics = [
  { metric: "Client / Patient LTV", left: "$2,400 – $4,200", right: "$900 – $2,400" },
  { metric: "Monthly Churn / Visit Frequency", left: "2 – 4% churn", right: "8 – 14 visits avg" },
  { metric: "Acquisition Channel", left: "65 – 85% direct marketing", right: "55 – 75% referrals" },
  { metric: "Cash-Pay Share", left: "95%+ direct pay", right: "25 – 45% cash-pay" },
] as const;

export const operatoryFunnel = {
  left: ["Instructor", "Class / Session", "Revenue"],
  right: ["Therapist", "Visits", "Revenue"],
} as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Provider", left: "$95K – $165K/yr", right: "$350K – $550K/yr" },
  { metric: "Clients Per Instructor", left: "30 – 80 active", right: "N/A (visit-based)" },
  { metric: "Staffing Model", left: "3 – 8 instructors", right: "2 – 6 therapists" },
] as const;

export const marginTiers = {
  left: { weak: "10 – 14%", average: "15 – 20%", strong: "21 – 28%" },
  right: { weak: "12 – 16%", average: "17 – 22%", strong: "23 – 28%" },
} as const;

export const costStructureComparison = [
  { expense: "Rent & Occupancy", left: "15 – 22%", right: "8 – 12%" },
  { expense: "Clinical / Instructor Payroll", left: "35 – 45%", right: "45 – 55%" },
  { expense: "Equipment", left: "8 – 14%", right: "5 – 10%" },
  { expense: "Marketing", left: "10 – 16%", right: "5 – 10%" },
] as const;

export const insuranceHighlights = {
  left: { title: "Direct-Pay Recurring Model", value: "85 – 95% membership MRR" },
  right: { title: "Insurance-Reimbursed Care", value: "55 – 75% payer revenue" },
} as const;

export const insuranceComparison = [
  { metric: "Direct Pay Revenue", left: "95%+", right: "25 – 45%" },
  { metric: "Insurance / Payer Revenue", left: "< 5%", right: "55 – 75%" },
  { metric: "Billing Complexity", left: "Low (POS / autopay)", right: "High (claims, auth)" },
  { metric: "Regulatory Licensing", left: "Minimal", right: "State PT license required" },
] as const;

export const ownerIncomeComparison = [
  { model: "Pilates Studio Owner", earnings: "$90K – $130K", type: "left" },
  { model: "Multi-Studio Pilates Operator", earnings: "$150K – $220K+", type: "left" },
  { model: "PT Clinic Owner-Therapist", earnings: "$100K – $180K", type: "right" },
  { model: "Multi-Therapist PT Operator", earnings: "$150K – $280K+", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Reformers & Equipment", percent: 42 },
  { item: "Lease & Buildout", percent: 28 },
  { item: "Marketing Launch", percent: 15 },
  { item: "Working Capital", percent: 15 },
] as const;

export const rightStartupItems = [
  { item: "Equipment & Buildout", percent: 30 },
  { item: "Lease & TI", percent: 25 },
  { item: "EMR & Credentialing", percent: 15 },
  { item: "Working Capital", percent: 30 },
] as const;

export const startupSideBySide = [
  { category: "Equipment & Buildout", left: "$45K – $120K", right: "$80K – $200K" },
  { category: "Lease & Deposits", left: "$25K – $70K", right: "$50K – $150K" },
  { category: "Marketing / Credentialing", left: "$10K – $35K", right: "$35K – $80K" },
  { category: "Total Launch Budget", left: "$80K – $250K", right: "$215K – $505K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: "2.5× – 3.8×", right: "2.5× – 4.0×" },
  { metric: "Revenue Multiple", left: "0.5× – 0.9×", right: "0.6× – 1.0×" },
  { metric: "EBITDA Multiple", left: "3.5× – 5.5×", right: "4.0× – 6.5×" },
] as const;

export const valuationExamples = {
  left: { revenue: "$650K", value: "$420K – $640K", note: "3.0× SDE on $180K SDE" },
  right: { revenue: "$950K", value: "$600K – $950K", note: "3.2× SDE on $220K SDE" },
} as const;

export const valuationExampleTitle = "$650K+ Revenue Business → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$35K – $55K", right: "$55K – $90K" },
  { metric: "Clients / Patients Needed", left: "80 – 120 members", right: "350 – 500 visits/mo" },
  { metric: "Months To Break-Even", left: "12 – 18 months", right: "18 – 30 months" },
  { metric: "Startup Investment", left: "$80K – $250K", right: "$215K – $505K" },
] as const;

export const scalingLadder = {
  left: ["Single Studio", "150+ Members", "Private Session Mix", "Multi-Studio Brand"],
  right: ["Single Clinic", "3+ Therapists", "Referral Network", "Multi-Location Practice"],
} as const;

export const scalingLeftTitle = "Pilates Studio Growth Path";
export const scalingRightTitle = "Physical Therapy Growth Path";

export const capitalEfficiency = {
  investment: "$200,000",
  left: {
    revenue: "$500K – $800K",
    profit: "$90K – $180K net profit",
    payback: "2 – 4 years",
  },
  right: {
    revenue: "$650K – $950K",
    profit: "$130K – $220K EBITDA",
    payback: "3.5 – 5 years",
  },
} as const;

export const chooseLeftTitle = "Choose Pilates Studio If";
export const chooseRightTitle = "Choose Physical Therapy If";

export const chooseLeft = [
  "You want direct-pay recurring revenue without insurance billing complexity",
  "You prefer lower startup costs and faster path to profitability",
  "You value boutique fitness community over clinical rehabilitation care",
  "You want minimal licensing requirements beyond instructor certification",
  "You're targeting wellness clients rather than medically referred patients",
] as const;

export const chooseRight = [
  "You want referral-driven growth through physicians and employers",
  "You have or can obtain physical therapy licensure and clinical credentials",
  "You want higher revenue per provider and multi-therapist clinic scale",
  "You're comfortable with insurance reimbursement and EMR operations",
  "You prefer episodic rehab care with higher per-patient lifetime value",
] as const;

export function getRecommendation(inputs: HealthcareDecisionInputs): string {
  return scoreDualChoice(inputs, "Pilates Studio", "Physical Therapy Clinic", {
    clinicalGeneral: 1,
    clinicalSpecialty: 2,
    revenueModerate: 2,
    revenueHigh: 2,
    revenueVeryHigh: 3,
    insuranceLow: 3,
    insuranceMedium: 2,
    insuranceHigh: 1,
    growthLifestyle: 3,
    growthRegional: 2,
    growthMulti: 2,
  });
}

export const decisionToolCopy = {
  left:
    "A pilates studio fits your goals — direct-pay recurring revenue, lower startup costs, boutique community economics, and minimal regulatory overhead.",
  right:
    "A physical therapy clinic fits your goals — referral-driven patient volume, higher revenue per provider, clinical credibility, and multi-therapist scaling potential.",
} as const;

export const faqs = [
  {
    question: "Pilates studio vs physical therapy clinic — which makes more money?",
    answer:
      "PT clinics typically reach higher total revenue ($500K–$1.5M vs $350K–$900K for pilates) through insurance reimbursement and higher visit volumes. Pilates studios achieve comparable or better margins with lower overhead and direct-pay simplicity.",
  },
  {
    question: "Can a pilates studio compete with physical therapy?",
    answer:
      "They serve overlapping but distinct markets. Pilates studios target wellness and corrective movement for direct-pay clients. PT clinics treat medically referred patients with insurance-covered rehabilitation. Clinical pilates bridges both but requires appropriate positioning.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Pilates studios require $80K–$250K versus $215K–$505K for outpatient PT clinics. Lower equipment costs, no EMR/credentialing overhead, and simpler operations reduce pilates capital requirements significantly.",
  },
  {
    question: "Which has better recurring revenue?",
    answer:
      "Pilates studios derive 85–95% of revenue from monthly membership autopay. PT clinics are visit-based with episodic treatment plans — recurring revenue comes from maintenance programs and re-referrals, not subscriptions.",
  },
  {
    question: "Do I need a license for a pilates studio?",
    answer:
      "Pilates instruction typically requires certification (e.g., STOTT, Balanced Body, Peak) but not clinical licensure. Physical therapy requires state PT licensure, malpractice insurance, and often insurance credentialing before treating patients.",
  },
] as const;

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
  calculators: pilatesCalculators,
  relatedComparisons,
  faqs,
};
