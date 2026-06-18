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

export const comparisonMeta = {
  slug: "cleaning-business-vs-hvac",
  title: "Cleaning Business vs HVAC",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, technician productivity, recurring revenue, licensing, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...cleaningHubLabels,
  right: "HVAC",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "HVAC" },
  { factor: "Higher Profit Margins", winner: "Cleaning Business" },
  { factor: "Lower Startup Cost", winner: "Cleaning Business" },
  { factor: "Recurring Revenue", winner: "Cleaning Business" },
  { factor: "Revenue Per Technician", winner: "HVAC" },
  { factor: "Licensing Barrier", winner: "Cleaning Business" },
  { factor: "Valuation Multiples", winner: "HVAC" },
  { factor: "Operational Simplicity", winner: "Cleaning Business" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: cleaningKpis.annualRevenue, right: "$1.2M – $3.8M" },
  { metric: "Net Profit Margin", left: cleaningKpis.netMargin, right: "8 – 16%" },
  { metric: "Owner Compensation", left: cleaningKpis.ownerComp, right: "$95K – $185K" },
  { metric: "Revenue Per Technician", left: cleaningKpis.revenuePerCleaner, right: "$180K – $320K" },
  { metric: "Startup Cost", left: cleaningKpis.startup, right: "$200K – $500K" },
  { metric: "Business Value", left: cleaningKpis.valuation, right: "2.4× – 3.8× SDE" },
  { metric: "Recurring Contract %", left: cleaningKpis.recurringPct, right: "25 – 45%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 5, right: 9, winner: "HVAC" },
  { label: "Profit Margin", left: 8, right: 7, winner: "Cleaning Business" },
  { label: "Recurring Revenue", left: 8, right: 6, winner: "Cleaning Business" },
  { label: "Low Capital Entry", left: 10, right: 4, winner: "Cleaning Business" },
] as const;

export const leftRevenueSources = cleaningRevenueSources;

export const rightRevenueSources = [
  "Residential Service & Repair",
  "Maintenance Agreements",
  "System Installations",
  "Commercial Service Contracts",
  "Emergency After-Hours Calls",
] as const;

export const revenueFunnel = {
  left: [...cleaningRevenueFunnel],
  right: ["Lead", "Dispatch", "Diagnosis", "Repair/Install", "Maintenance Plan", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...cleaningCustomerFunnel],
  right: ["Homeowner", "Service Call", "Maintenance Plan", "Annual Tune-Ups", "Replacement Cycle"],
} as const;

export const operatoryFunnel = {
  left: [...cleaningOperatoryFunnel],
  right: ["Technician", "Jobs", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "2 – 20 cleaners", right: "6 – 18 technicians" },
  { driver: "Average Service Ticket", left: "$100 – $250", right: "$350 – $650" },
  { driver: "Annual Contract Value", left: "$1,200 – $4,800", right: "$400 – $1,200" },
  { driver: "Recurring Revenue", left: "50 – 75% of revenue", right: "25 – 45% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$800 – $2,500", right: "$1,800 – $4,500" },
  { metric: "Visits Per Year", left: "12 – 52 (weekly/biweekly)", right: "2 – 4" },
  { metric: "Average Ticket", left: "$100 – $250", right: "$350 – $650" },
  { metric: "Contract Retention", left: "70 – 85%", right: "70 – 85%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Technician", left: "$80K – $150K", right: "$180K – $320K" },
  { metric: "Jobs Per Day", left: "4 – 8 properties", right: "4 – 8 service calls" },
  { metric: "Labor Cost % of Revenue", left: "40 – 55%", right: "28 – 38%" },
] as const;

export const marginTiers = {
  left: cleaningMarginTiers,
  right: { weak: "4 – 7%", average: "8 – 12%", strong: "13 – 16%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "40 – 55%", right: "28 – 38%" },
  { expense: "Materials/Supplies", left: "5 – 10%", right: "18 – 26%" },
  { expense: "Fleet & Vehicles", left: "4 – 8%", right: "6 – 10%" },
  { expense: "Marketing", left: "5 – 12%", right: "5 – 9%" },
] as const;

export const insuranceHighlights = {
  left: cleaningInsuranceHighlight,
  right: { title: "High Ticket Revenue", value: "$350 – $650 avg service call" },
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "50 – 75%", right: "25 – 45%" },
  { metric: "Installation Revenue", left: "5 – 15%", right: "25 – 35%" },
  { metric: "Commercial Contract Revenue", left: "25 – 45%", right: "20 – 30%" },
  { metric: "Seasonal Revenue Swing", left: "Low – Moderate", right: "Moderate – High" },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo Cleaning Operator", earnings: "$40K – $65K", type: "left" },
  { model: "Multi-Crew Cleaning Operator", earnings: "$80K – $140K+", type: "left" },
  { model: "Small HVAC Owner", earnings: "$95K – $130K", type: "right" },
  { model: "Multi-Truck HVAC Operator", earnings: "$150K – $250K+", type: "right" },
] as const;

export const leftStartupItems = cleaningStartupItems;

export const rightStartupItems = [
  { item: "Vehicles & Tools", percent: 20 },
  { item: "Inventory & Equipment", percent: 25 },
  { item: "Marketing Launch", percent: 15 },
  { item: "Working Capital", percent: 40 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: cleaningStartupSideBySide.equipment, right: "$50K – $150K" },
  { category: "Vehicles", left: cleaningStartupSideBySide.vehicles, right: "$40K – $100K" },
  { category: "Marketing Launch", left: cleaningStartupSideBySide.marketing, right: "$20K – $50K" },
  { category: "Total Launch Budget", left: cleaningStartupSideBySide.total, right: "$200K – $500K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: cleaningValuation.sde, right: "2.4× – 3.8×" },
  { metric: "Revenue Multiple", left: cleaningValuation.revenue, right: "0.6× – 1.0×" },
  { metric: "EBITDA Multiple", left: cleaningValuation.ebitda, right: "4.0× – 6.5×" },
] as const;

export const valuationExamples = {
  left: cleaningValuation.example,
  right: { revenue: "$2.4M", value: "$720K – $1.14M", note: "3.0× SDE on $300K SDE" },
} as const;

export const valuationExampleTitle = "Mid-Size Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$18K – $35K", right: "$80K – $150K" },
  { metric: "Accounts Needed (active)", left: "40 – 120 recurring clients", right: "200 – 500 service customers" },
  { metric: "Months To Break-Even", left: "3 – 9 months", right: "12 – 24 months" },
  { metric: "Staff at Break-Even", left: "2 – 6 cleaners", right: "4 – 8 technicians" },
] as const;

export const scalingLadder = {
  left: [...cleaningScalingLadder],
  right: ["1 Truck", "2 – 4 Technicians", "Maintenance Base", "Multi-Branch Operation"],
} as const;

export const scalingLeftTitle = "Cleaning Business Growth Path";
export const scalingRightTitle = "HVAC Growth Path";

export const capitalEfficiency = {
  investment: "$75,000",
  left: cleaningCapitalEfficiency,
  right: { revenue: "$1.2M – $2.2M", profit: "$144K – $308K net profit", payback: "2 – 4 years" },
} as const;

export const chooseLeftTitle = "Choose a Cleaning Business If";
export const chooseRightTitle = "Choose HVAC If";

export const chooseLeft = [
  "You want the lowest startup cost with no licensing or certification requirements",
  "You prefer higher recurring revenue percentages from weekly cleaning schedules",
  "You want to start solo with minimal equipment and scale through hiring",
  "You value higher net margins on a labor-intensive but simple service model",
  "You're targeting residential and light commercial cleaning demand",
] as const;

export const chooseRight = [
  "You want significantly higher revenue ceiling and revenue per technician",
  "You're willing to invest $200K+ in licensing, inventory, and fleet to build scale",
  "You value premium valuation multiples and strong acquisition market interest",
  "You want to build toward commercial service contracts and system replacements",
  "You're comfortable with technical skill requirements and regulatory compliance",
] as const;

export const calculators = cleaningCalculators;

export const relatedComparisons = [
  { label: "Cleaning vs Landscaping", href: "/comparisons/cleaning-business-vs-landscaping/" },
  { label: "Cleaning vs Pest Control", href: "/comparisons/pest-control-vs-cleaning-business/" },
  { label: "Pest Control vs HVAC", href: "/comparisons/pest-control-vs-hvac/" },
  { label: "Landscaping vs HVAC", href: "/comparisons/landscaping-vs-hvac/" },
  { label: "Cleaning Business Hub", href: "/industries/cleaning-business/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — cleaning or HVAC?",
    answer:
      "HVAC companies reach much higher median revenue (~$2.4M vs ~$500K for cleaning businesses). HVAC benefits from high-ticket service calls ($350–$650), system replacements, and commercial contracts. Cleaning scales through client volume at lower per-job revenue.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Cleaning businesses have a structural margin advantage — median ~15% net versus ~12% for HVAC. Cleaning avoids expensive parts inventory and has lower capital requirements. HVAC margins are compressed by material costs (18–26% of revenue) despite higher ticket prices.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Cleaning businesses are dramatically lower capital at $10K–$75K. HVAC requires $200K–$500K for licensing, EPA certification, inventory, specialized tools, and fleet — one of the highest startup costs in home services.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Cleaning businesses achieve 50–75% recurring revenue from weekly/biweekly schedules. HVAC maintenance plans represent only 25–45% of revenue, with more dependence on reactive service calls and installations.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "A cleaning business offers the simplest operations, lowest startup cost, and no licensing barriers. HVAC requires technical expertise, EPA certification, significant capital, and longer break-even timelines but offers much higher long-term revenue and owner compensation.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "HVAC businesses sell at 2.4×–3.8× SDE (median ~3.0×) while cleaning companies trade at 1.8×–3.0× SDE (median ~2.4×). Buyers pay premiums for HVAC's technical moat, higher revenue base, and established maintenance contract books.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let cleaning = 0;
  let hvac = 0;

  if (inputs.clinicalInterest === "specialty") hvac += 2;
  else cleaning += 2;

  if (inputs.revenueGoal === "very-high") hvac += 3;
  else if (inputs.revenueGoal === "high") hvac += 2;
  else cleaning += 2;

  if (inputs.insuranceComfort === "high") cleaning += 3;
  else if (inputs.insuranceComfort === "medium") {
    cleaning += 2;
    hvac += 1;
  } else hvac += 1;

  if (inputs.growthAmbition === "multi-location") hvac += 3;
  else if (inputs.growthAmbition === "regional") hvac += 2;
  else cleaning += 2;

  return cleaning >= hvac ? "Cleaning Business" : "HVAC";
}

export const decisionToolCopy = {
  left:
    "A cleaning business aligns with your goals — lowest startup cost, higher margins, stronger recurring mix, and no licensing barriers.",
  right:
    "HVAC is the better fit — higher revenue ceiling, premium technician productivity, stronger valuation multiples, and greater long-term owner compensation.",
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
