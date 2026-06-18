import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import {
  cleaningCalculators,
  cleaningCapitalEfficiency,
  cleaningCustomerFunnel,
  cleaningHubLabels,
  cleaningInsuranceHighlight,
  cleaningKpis,
  cleaningMarginTiers,
  cleaningOperatoryFunnel,
  cleaningRevenueFunnel,
  cleaningRevenueSources,
  cleaningScalingLadder,
  cleaningStartupItems,
  cleaningStartupSideBySide,
  cleaningValuation,
} from "./cleaning-comparison-shared";

const janitorialKpis = {
  annualRevenue: "$400K – $3M",
  netMargin: "6 – 12%",
  ownerComp: "$60K – $140K",
  revenuePerEmployee: "$60K – $100K",
  startup: "$25K – $150K",
  valuation: "1.5× – 2.5× SDE",
  recurringPct: "85 – 95%",
} as const;

export const comparisonMeta = {
  slug: "cleaning-business-vs-janitorial-business",
  title: "Cleaning Business vs Janitorial Business",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, contract scale, commercial focus, bonding requirements, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...cleaningHubLabels,
  right: "Janitorial Business",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Janitorial Business" },
  { factor: "Higher Profit Margins", winner: "Cleaning Business" },
  { factor: "Lower Startup Cost", winner: "Cleaning Business" },
  { factor: "Recurring Revenue", winner: "Janitorial Business" },
  { factor: "Residential Opportunity", winner: "Cleaning Business" },
  { factor: "Commercial Contract Scale", winner: "Janitorial Business" },
  { factor: "Operational Simplicity", winner: "Cleaning Business" },
  { factor: "Valuation Multiples", winner: "Tie" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: cleaningKpis.annualRevenue, right: janitorialKpis.annualRevenue },
  { metric: "Net Profit Margin", left: cleaningKpis.netMargin, right: janitorialKpis.netMargin },
  { metric: "Owner Compensation", left: cleaningKpis.ownerComp, right: janitorialKpis.ownerComp },
  { metric: "Revenue Per Employee", left: cleaningKpis.revenuePerCleaner, right: janitorialKpis.revenuePerEmployee },
  { metric: "Startup Cost", left: cleaningKpis.startup, right: janitorialKpis.startup },
  { metric: "Business Value", left: cleaningKpis.valuation, right: janitorialKpis.valuation },
  { metric: "Recurring Contract %", left: cleaningKpis.recurringPct, right: janitorialKpis.recurringPct },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 5, right: 8, winner: "Janitorial Business" },
  { label: "Profit Margin", left: 8, right: 5, winner: "Cleaning Business" },
  { label: "Recurring Revenue", left: 7, right: 10, winner: "Janitorial Business" },
  { label: "Low Capital Entry", left: 10, right: 6, winner: "Cleaning Business" },
] as const;

export const leftRevenueSources = cleaningRevenueSources;

export const rightRevenueSources = [
  "Commercial Building Contracts",
  "Office & Retail Janitorial",
  "Healthcare Facility Cleaning",
  "School & Institutional Contracts",
  "Porter & Day Porter Services",
] as const;

export const revenueFunnel = {
  left: [...cleaningRevenueFunnel],
  right: ["RFP/Bid", "Site Walk", "Contract Proposal", "Crew Deployment", "Monthly Billing", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...cleaningCustomerFunnel],
  right: ["Facility Manager", "Contract Award", "Nightly/Weekly Service", "Quality Inspections", "Renewal"],
} as const;

export const operatoryFunnel = {
  left: [...cleaningOperatoryFunnel],
  right: ["Crew", "Square Footage", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "2 – 20 cleaners", right: "10 – 100+ employees" },
  { driver: "Average Contract Size", left: "$100 – $250 per visit", right: "$2K – $15K per month" },
  { driver: "Annual Contract Value", left: "$1,200 – $4,800", right: "$24K – $180K" },
  { driver: "Recurring Revenue", left: "50 – 75% of revenue", right: "85 – 95% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$800 – $2,500", right: "$5,000 – $50,000" },
  { metric: "Contract Length", left: "12 – 24 months", right: "24 – 60 months" },
  { metric: "Average Ticket", left: "$100 – $250", right: "$2K – $15K/month" },
  { metric: "Contract Retention", left: "70 – 85%", right: "80 – 92%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Employee", left: "$80K – $150K", right: "$60K – $100K" },
  { metric: "Jobs Per Day", left: "4 – 8 properties", right: "1 – 4 large facilities" },
  { metric: "Labor Cost % of Revenue", left: "40 – 55%", right: "50 – 65%" },
] as const;

export const marginTiers = {
  left: cleaningMarginTiers,
  right: { weak: "3 – 6%", average: "7 – 10%", strong: "11 – 14%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "40 – 55%", right: "50 – 65%" },
  { expense: "Supplies/Chemicals", left: "5 – 10%", right: "5 – 8%" },
  { expense: "Fleet & Equipment", left: "4 – 8%", right: "3 – 6%" },
  { expense: "Insurance & Bonding", left: "2 – 5%", right: "4 – 8%" },
] as const;

export const insuranceHighlights = {
  left: cleaningInsuranceHighlight,
  right: { title: "Commercial Contract Engine", value: "85 – 95% recurring B2B revenue" },
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "50 – 75%", right: "85 – 95%" },
  { metric: "Residential Revenue", left: "30 – 55%", right: "0 – 10%" },
  { metric: "Commercial Contract Revenue", left: "25 – 45%", right: "85 – 95%" },
  { metric: "Bonding Requirement", left: "Optional", right: "Often Required" },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo Cleaning Operator", earnings: "$40K – $65K", type: "left" },
  { model: "Multi-Crew Cleaning Operator", earnings: "$80K – $140K+", type: "left" },
  { model: "Small Janitorial Contractor", earnings: "$60K – $90K", type: "right" },
  { model: "Multi-Site Janitorial Operator", earnings: "$100K – $180K+", type: "right" },
] as const;

export const leftStartupItems = cleaningStartupItems;

export const rightStartupItems = [
  { item: "Equipment & Supplies", percent: 15 },
  { item: "Vehicles & Fleet", percent: 15 },
  { item: "Insurance & Bonding", percent: 20 },
  { item: "Working Capital", percent: 50 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: cleaningStartupSideBySide.equipment, right: "$5K – $30K" },
  { category: "Vehicles", left: cleaningStartupSideBySide.vehicles, right: "$15K – $50K" },
  { category: "Insurance & Bonding", left: "$1K – $5K", right: "$10K – $40K" },
  { category: "Total Launch Budget", left: cleaningStartupSideBySide.total, right: "$25K – $150K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: cleaningValuation.sde, right: "1.5× – 2.5×" },
  { metric: "Revenue Multiple", left: cleaningValuation.revenue, right: "0.3× – 0.6×" },
  { metric: "EBITDA Multiple", left: cleaningValuation.ebitda, right: "2.5× – 4.0×" },
] as const;

export const valuationExamples = {
  left: cleaningValuation.example,
  right: { revenue: "$1.5M", value: "$300K – $500K", note: "2.0× SDE on $200K SDE" },
} as const;

export const valuationExampleTitle = "Mid-Size Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$18K – $35K", right: "$50K – $120K" },
  { metric: "Contracts Needed", left: "40 – 120 recurring clients", right: "3 – 12 commercial contracts" },
  { metric: "Months To Break-Even", left: "3 – 9 months", right: "6 – 18 months" },
  { metric: "Staff at Break-Even", left: "2 – 6 cleaners", right: "8 – 20 employees" },
] as const;

export const scalingLadder = {
  left: [...cleaningScalingLadder],
  right: ["Subcontractor", "Small Commercial Book", "Bonded Contractor", "Regional Janitorial Firm"],
} as const;

export const scalingLeftTitle = "Cleaning Business Growth Path";
export const scalingRightTitle = "Janitorial Business Growth Path";

export const capitalEfficiency = {
  investment: "$75,000",
  left: cleaningCapitalEfficiency,
  right: { revenue: "$800K – $1.5M", profit: "$64K – $150K net profit", payback: "2 – 4 years" },
} as const;

export const chooseLeftTitle = "Choose a Cleaning Business If";
export const chooseRightTitle = "Choose a Janitorial Business If";

export const chooseLeft = [
  "You want to start solo with minimal capital and serve residential clients immediately",
  "You prefer higher net margins on residential and light commercial cleaning",
  "You want flexible scheduling without RFP processes or bonding requirements",
  "You value a mixed revenue model with residential subscriptions and specialty deep cleans",
  "You're building a lifestyle business before scaling into commercial contracts",
] as const;

export const chooseRight = [
  "You want to build a commercial-focused company with large monthly contract values",
  "You're targeting office buildings, schools, healthcare, and institutional clients",
  "You want 85–95% recurring B2B revenue with multi-year contract terms",
  "You're willing to navigate bonding, insurance, and competitive bid processes",
  "You plan to scale beyond solo operations into a multi-crew commercial contractor",
] as const;

export const calculators = cleaningCalculators;

export const relatedComparisons = [
  { label: "Cleaning vs Landscaping", href: "/comparisons/cleaning-business-vs-landscaping/" },
  { label: "Cleaning vs HVAC", href: "/comparisons/cleaning-business-vs-hvac/" },
  { label: "Cleaning vs Pest Control", href: "/comparisons/pest-control-vs-cleaning-business/" },
  { label: "Cleaning Business Hub", href: "/industries/cleaning-business/" },
] as const;

export const faqs = [
  {
    question: "What's the difference between a cleaning business and a janitorial business?",
    answer:
      "A cleaning business typically serves residential and light commercial clients with flexible scheduling, higher margins, and lower barriers to entry. A janitorial business focuses on commercial B2B contracts — offices, schools, healthcare — with larger monthly values, bonding requirements, and lower margins but higher recurring revenue.",
  },
  {
    question: "Which generates more revenue?",
    answer:
      "Janitorial businesses reach higher median revenue at scale (~$1.5M vs ~$500K for typical cleaning companies). Large commercial contracts ($2K–$15K/month each) drive janitorial revenue. Cleaning businesses cap lower unless they expand into commercial janitorial work.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Cleaning businesses have a clear margin advantage — median ~15% net versus ~9% for janitorial contractors. Janitorial margins are compressed by competitive bidding, union labor in some markets, and thin pricing on large commercial accounts.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Residential cleaning businesses start at $10K–$75K with basic supplies and a vehicle. Janitorial businesses require $25K–$150K for bonding, commercial insurance, larger equipment inventory, and working capital to cover payroll between monthly contract payments.",
  },
  {
    question: "Can I start with cleaning and expand to janitorial?",
    answer:
      "Yes — this is a common growth path. Many operators build residential route density first, then pursue small commercial accounts, and eventually bid on larger janitorial contracts. The transition requires bonding, insurance upgrades, and sales capability for RFP processes.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Both trade at similar SDE multiples — cleaning at 1.8×–3.0× (median ~2.4×) and janitorial at 1.5×–2.5× (median ~2.0×). Janitorial buyers value long-term commercial contract books; cleaning buyers value residential recurring revenue and owner-operator simplicity.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let cleaning = 0;
  let janitorial = 0;

  if (inputs.clinicalInterest === "specialty") janitorial += 2;
  else cleaning += 2;

  if (inputs.revenueGoal === "very-high") janitorial += 3;
  else if (inputs.revenueGoal === "high") janitorial += 2;
  else cleaning += 2;

  if (inputs.insuranceComfort === "high") cleaning += 2;
  else janitorial += 1;

  if (inputs.growthAmbition === "multi-location") janitorial += 3;
  else if (inputs.growthAmbition === "regional") janitorial += 2;
  else cleaning += 2;

  return cleaning >= janitorial ? "Cleaning Business" : "Janitorial Business";
}

export const decisionToolCopy = {
  left:
    "A cleaning business aligns with your goals — lowest startup cost, higher margins, residential opportunity, and flexible solo-operator economics.",
  right:
    "A janitorial business is the better fit — larger commercial contracts, highest recurring mix, multi-year B2B revenue, and greater scaling potential.",
} as const;

export const homeServicesDualComparisonData: HealthcareDualComparisonData = {
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
