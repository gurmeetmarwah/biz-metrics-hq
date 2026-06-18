import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import { scoreDualChoice } from "./score-dual-choice";

export const comparisonMeta = {
  slug: "dental-practice-vs-orthodontic-practice" as const,
  title: "Dental Practice vs Orthodontic Practice",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, patient economics and valuation metrics to determine which practice model offers the strongest financial performance.",
  dataVintage: "2025–2026",
};

export const comparisonLabels = {
  left: "General Dentistry",
  right: "Orthodontics",
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
  { factor: "Lower Startup Cost", winner: "General Dentistry" as const },
  { factor: "Higher Revenue Per Patient", winner: "Orthodontics" as const },
  { factor: "Larger Patient Base", winner: "General Dentistry" as const },
  { factor: "Higher Profit Margins", winner: "Orthodontics" as const },
  { factor: "Easier Practice Sale", winner: "General Dentistry" as const },
  { factor: "Premium Pricing Power", winner: "Orthodontics" as const },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$1.2M – $2.6M", right: "$1.8M – $3.5M" },
  { metric: "EBITDA Margin", left: "18 – 30%", right: "32 – 38%" },
  { metric: "Owner Compensation", left: "$220K – $360K", right: "$320K – $480K" },
  { metric: "Patients Per Month", left: "120 – 180 active visits", right: "40 – 80 case starts" },
  { metric: "Revenue Per Patient", left: "$900 – $1,100/yr", right: "$4,500 – $6,500/case" },
  { metric: "Startup Cost", left: "$515K – $1.0M", right: "$650K – $1.2M" },
  { metric: "Practice Valuation", left: "3.2× – 4.5× SDE", right: "4.0× – 5.5× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Per Patient", left: 7, right: 10, winner: "Orthodontics" as const },
  { label: "Patient Volume", left: 10, right: 6, winner: "General Dentistry" as const },
  { label: "Profit Margin", left: 7, right: 10, winner: "Orthodontics" as const },
  { label: "Market Size", left: 10, right: 7, winner: "General Dentistry" as const },
] as const;

export const leftRevenueSources = [
  "Exams",
  "Cleanings",
  "Fillings",
  "Crowns",
  "Root Canals",
  "Emergency Visits",
] as const;

export const rightRevenueSources = [
  "Braces",
  "Invisalign",
  "Retainers",
  "Treatment Plans",
  "Monitoring Visits",
] as const;

export const revenueFunnel = {
  left: ["Patient", "Appointment", "Procedure", "Collections"],
  right: ["Consultation", "Treatment Plan", "Monthly Visits", "Collections"],
} as const;

export const patientFunnel = {
  left: ["Patient", "Annual Visits", "Treatment Revenue", "Lifetime Value"],
  right: ["Consultation", "Treatment Acceptance", "Monthly Payments", "Lifetime Value"],
} as const;

export const operatoryFunnel = {
  left: ["Chair", "Patients", "Production", "Revenue"],
  right: ["Chair", "Cases", "Treatment Revenue", "Collections"],
} as const;

export const revenueDrivers = [
  { driver: "Patient Volume", left: "High — 1,200–1,800 active", right: "Moderate — 400–800 active cases" },
  { driver: "Treatment Value", left: "$180 – $320/visit", right: "$4,500 – $6,500/case" },
  { driver: "Insurance Dependence", left: "High — 60–75% insurance", right: "Moderate — 40–55% insurance" },
  { driver: "Cash Pay Potential", left: "Moderate — cosmetic add-ons", right: "High — elective treatment plans" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Revenue Per Patient", left: "$900 – $1,100/yr", right: "$4,500 – $6,500/case" },
  { metric: "Visits Per Year", left: "1.8 – 2.4", right: "12 – 24 (treatment phase)" },
  { metric: "Lifetime Value", left: "$3,500 – $8,500", right: "$6,000 – $12,000" },
  { metric: "Retention Period", left: "5 – 8 years", right: "18 – 30 months (active tx)" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Chair", left: "$350K – $550K/yr", right: "$500K – $700K/yr" },
  { metric: "Revenue Per Provider", left: "$800K – $1.4M", right: "$1.2M – $2.0M" },
  { metric: "Revenue Per Staff Member", left: "$120K – $180K", right: "$150K – $220K" },
] as const;

export const marginTiers = {
  left: { weak: "14 – 18%", average: "22 – 26%", strong: "28 – 30%" },
  right: { weak: "24 – 28%", average: "32 – 36%", strong: "38 – 42%" },
};

export const costStructureComparison = [
  { expense: "Clinical Payroll", left: "28 – 35%", right: "22 – 28%" },
  { expense: "Supplies", left: "6 – 10%", right: "4 – 7%" },
  { expense: "Facility Costs", left: "5 – 8%", right: "5 – 8%" },
  { expense: "Marketing", left: "3 – 6%", right: "4 – 8%" },
] as const;

export const insuranceComparison = [
  { metric: "Insurance Revenue %", left: "60 – 75%", right: "40 – 55%" },
  { metric: "Cash Revenue %", left: "20 – 35%", right: "40 – 55%" },
  { metric: "Financing Revenue %", left: "5 – 12%", right: "15 – 30%" },
] as const;

export const insuranceHighlights = {
  left: { title: "Higher Insurance Dependence", value: "60 – 75%" },
  right: { title: "Higher Cash-Pay Opportunity", value: "40 – 55%" },
} as const;

export const ownerIncomeComparison = [
  { model: "General Dentist Owner", earnings: "$220K – $360K", type: "left" as const },
  { model: "Orthodontic Practice Owner", earnings: "$320K – $480K", type: "right" as const },
  { model: "Multi-Practice Dental Owner", earnings: "$450K – $750K+", type: "left" as const },
  { model: "Multi-Ortho Practice Owner", earnings: "$550K – $900K+", type: "right" as const },
] as const;

export const leftStartupItems = [
  { item: "Buildout", percent: 28 },
  { item: "Operatories", percent: 32 },
  { item: "Equipment", percent: 25 },
  { item: "Technology", percent: 15 },
] as const;

export const rightStartupItems = [
  { item: "Buildout", percent: 22 },
  { item: "Digital Scanning", percent: 18 },
  { item: "Imaging", percent: 15 },
  { item: "Treatment Systems", percent: 45 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: "$250K – $450K", right: "$300K – $550K" },
  { category: "Technology", left: "$40K – $80K", right: "$80K – $150K" },
  { category: "Buildout", left: "$150K – $350K", right: "$150K – $300K" },
  { category: "Working Capital", left: "$75K – $150K", right: "$100K – $200K" },
] as const;

export const valuationComparison = [
  { metric: "EBITDA Multiple", left: "4.0× – 6.5×", right: "5.5× – 8.0×" },
  { metric: "Revenue Multiple", left: "0.6× – 1.0×", right: "0.8× – 1.2×" },
  { metric: "SDE Multiple", left: "3.2× – 4.5×", right: "4.0× – 5.5×" },
] as const;

export const valuationExamples = {
  left: { revenue: "$1.8M", value: "$1.4M – $2.0M", note: "3.8× SDE on $450K SDE" },
  right: { revenue: "$2.4M", value: "$2.0M – $2.8M", note: "4.8× SDE on $500K SDE" },
};

export const breakEvenComparison = [
  { metric: "Monthly Production Needed", left: "$120K – $150K", right: "$140K – $180K" },
  { metric: "Patients Needed", left: "900 – 1,100 active", right: "60 – 90 cases/yr" },
  { metric: "Months To Break-Even", left: "18 – 30 months", right: "24 – 36 months" },
] as const;

export const scalingLadder = {
  left: ["Solo Practice", "Associate", "Group Practice", "Multi-Location"],
  right: ["Single Office", "Satellite Office", "Regional Group", "Multi-State Group"],
} as const;

export const scalingLeftTitle = "General Dentistry Path";
export const scalingRightTitle = "Orthodontic Path";

export const capitalEfficiency = {
  investment: "$500,000",
  left: {
    revenue: "$1.2M – $1.8M",
    profit: "$260K – $430K EBITDA",
    payback: "3 – 5 years",
  },
  right: {
    revenue: "$1.6M – $2.4M",
    profit: "$480K – $860K EBITDA",
    payback: "2.5 – 4 years",
  },
};

export const chooseLeft = [
  "You want a larger patient pool and recurring preventive care revenue",
  "You prefer broad clinical services across all age groups",
  "You want easier acquisition opportunities and more buyer demand at exit",
  "You value hygiene-driven recall as a stable production base",
  "You prefer lower startup costs and faster path to ownership",
] as const;

export const chooseRight = [
  "You want higher revenue per patient and treatment-plan economics",
  "You prefer stronger cash-pay and financing-driven revenue",
  "You seek higher-margin specialty care with premium pricing power",
  "You are willing to invest in specialty training and technology",
  "You want stronger ROI on invested capital at scale",
] as const;

export const chooseLeftTitle = "Choose General Dentistry If";
export const chooseRightTitle = "Choose Orthodontics If";

export const calculators = [
  { label: "Dental Practice Valuation Calculator", href: "/calculators/dental-practice-valuation/" },
  { label: "Orthodontic Practice Valuation Calculator", href: "/calculators/dental-practice-valuation/" },
  { label: "Revenue Per Patient Calculator", href: "/calculators/dental-practice-revenue-per-patient/" },
  { label: "EBITDA Calculator", href: "/calculators/dental-practice-ebitda/" },
  { label: "Break-Even Calculator", href: "/calculators/dental-practice-break-even/" },
] as const;

export const relatedComparisons = [
  { label: "Dental Practice vs Medical Practice", href: "/comparisons/dental-practice-vs-medical-practice/" },
  { label: "Dental Practice vs Veterinary Clinic", href: "/comparisons/dental-practice-vs-veterinary-clinic/" },
  { label: "Solo vs Group Dental Practice", href: "/comparisons/solo-vs-group-dental-practice/" },
  { label: "Private Practice vs DSO", href: "/comparisons/private-practice-vs-dso/" },
  { label: "Dental Practice Hub", href: "/industries/healthcare/dental-practice/" },
] as const;

export const faqs = [
  {
    question: "Is orthodontics more profitable than general dentistry?",
    answer:
      "Orthodontic practices typically achieve higher EBITDA margins (32–38% vs. 18–30% for general dentistry) and higher revenue per patient ($4,500–$6,500 per case vs. $900–$1,100 per year). However, general dentistry supports a larger patient base, lower startup costs, and easier practice sales. Absolute owner compensation can be comparable at scale — multi-location GP owners earn $450K–$750K+.",
  },
  {
    question: "Which has higher startup costs?",
    answer:
      "General dentistry typically costs $515K–$1.0M to launch or acquire, while orthodontic practices run $650K–$1.2M due to digital scanning, imaging, and treatment system investments. De novo GP buildouts can start lower; ortho requires specialty equipment regardless of acquisition vs. startup.",
  },
  {
    question: "Which is easier to sell?",
    answer:
      "General dental practices sell more frequently (3,000–4,000 US transactions annually) with a deeper buyer pool of associates and DSOs. SDE multiples of 3.2×–4.5× are well-established. Orthodontic practices trade at premium multiples (4.0×–5.5× SDE) but have fewer buyers and longer days on market.",
  },
  {
    question: "How does patient volume compare?",
    answer:
      "General dentists maintain 1,200–1,800 active patients and see 120–180 visits per month. Orthodontists manage 400–800 active cases with 40–80 new case starts per month. GP volume is higher; ortho value per patient is 4–6× greater.",
  },
  {
    question: "Which has less insurance dependence?",
    answer:
      "Orthodontics derives 40–55% of revenue from insurance vs. 60–75% for general dentistry. Ortho practices capture more cash-pay (40–55%) and patient financing revenue (15–30%), providing stronger pricing power and margin protection.",
  },
  {
    question: "What is the ROI on a $500K investment?",
    answer:
      "A $500K investment in general dentistry typically generates $1.2M–$1.8M revenue and $260K–$430K EBITDA (3–5 year payback). The same investment in orthodontics can generate $1.6M–$2.4M revenue and $480K–$860K EBITDA (2.5–4 year payback) — higher margin but requires specialty training and longer break-even on new startups.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreDualChoice(inputs, "General Dentistry", "Orthodontic Practice", {
    clinicalGeneral: 3,
    clinicalSpecialty: 3,
    revenueModerate: 2,
    revenueHigh: 1,
    revenueVeryHigh: 3,
    insuranceHigh: 2,
    insuranceMedium: 1,
    insuranceLow: 2,
    growthLifestyle: 2,
    growthRegional: 1,
    growthMulti: 2,
  });
}

export const decisionToolCopy = {
  left:
    "General dentistry fits your profile — broad patient base, recurring preventive revenue, lower startup costs, and a deep acquisition market support your goals.",
  right:
    "Orthodontics aligns with your goals — higher revenue per patient, stronger cash-pay economics, premium margins, and superior return on invested capital at scale.",
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
