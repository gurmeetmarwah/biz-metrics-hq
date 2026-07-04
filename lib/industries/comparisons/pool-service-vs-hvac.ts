import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import {
  poolServiceCalculators,
  poolServiceCapitalEfficiency,
  poolServiceCustomerFunnel,
  poolServiceHubLabels,
  poolServiceInsuranceHighlight,
  poolServiceKpis,
  poolServiceMarginTiers,
  poolServiceOperatoryFunnel,
  poolServiceRevenueFunnel,
  poolServiceRevenueSources,
  poolServiceScalingLadder,
  poolServiceStartupItems,
  poolServiceStartupSideBySide,
  poolServiceValuation,
} from "./pool-service-comparison-shared";

export const comparisonMeta = {
  slug: "pool-service-vs-hvac",
  title: "Pool Service vs HVAC",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, technician productivity, recurring revenue, seasonality, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...poolServiceHubLabels,
  right: "HVAC",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "HVAC" },
  { factor: "Higher Profit Margins", winner: "Pool Service" },
  { factor: "Lower Startup Cost", winner: "Pool Service" },
  { factor: "Recurring Revenue", winner: "Pool Service" },
  { factor: "Revenue Per Technician", winner: "HVAC" },
  { factor: "Seasonal Stability", winner: "Pool Service" },
  { factor: "Valuation Multiples", winner: "Pool Service" },
  { factor: "Commercial Contract Scale", winner: "HVAC" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: poolServiceKpis.annualRevenue, right: "$1.2M – $3.8M" },
  { metric: "Net Profit Margin", left: poolServiceKpis.netMargin, right: "8 – 16%" },
  { metric: "Owner Compensation", left: poolServiceKpis.ownerComp, right: "$95K – $185K" },
  { metric: "Revenue Per Technician", left: poolServiceKpis.revenuePerTech, right: "$180K – $320K" },
  { metric: "Startup Cost", left: poolServiceKpis.startup, right: "$200K – $500K" },
  { metric: "Business Value", left: poolServiceKpis.valuation, right: "2.4× – 3.8× SDE" },
  { metric: "Recurring Contract %", left: poolServiceKpis.recurringPct, right: "25 – 45%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 6, right: 9, winner: "HVAC" },
  { label: "Profit Margin", left: 9, right: 6, winner: "Pool Service" },
  { label: "Recurring Revenue", left: 10, right: 5, winner: "Pool Service" },
  { label: "Low Capital Entry", left: 9, right: 4, winner: "Pool Service" },
] as const;

export const leftRevenueSources = poolServiceRevenueSources;

export const rightRevenueSources = [
  "Residential Service & Repair",
  "Maintenance Agreements",
  "System Installations",
  "Commercial Service Contracts",
  "Emergency After-Hours Calls",
] as const;

export const revenueFunnel = {
  left: [...poolServiceRevenueFunnel],
  right: ["Lead", "Dispatch", "Diagnosis", "Repair/Install", "Maintenance Plan", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...poolServiceCustomerFunnel],
  right: ["Homeowner", "Service Call", "Maintenance Plan", "Annual Tune-Ups", "Replacement Cycle"],
} as const;

export const operatoryFunnel = {
  left: [...poolServiceOperatoryFunnel],
  right: ["Technician", "Jobs", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "2 – 8 technicians", right: "6 – 18 technicians" },
  { driver: "Average Service Ticket", left: "$120 – $185 (weekly)", right: "$350 – $650" },
  { driver: "Annual Contract Value", left: "$2,400 – $4,800", right: "$400 – $1,200" },
  { driver: "Recurring Revenue", left: "75 – 85% of revenue", right: "25 – 45% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$2,000 – $5,500", right: "$1,800 – $4,500" },
  { metric: "Visits Per Year", left: "26 – 40 (weekly)", right: "2 – 4" },
  { metric: "Average Ticket", left: "$120 – $185/week", right: "$350 – $650" },
  { metric: "Contract Retention", left: "85 – 94%", right: "70 – 85%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Technician", left: "$160K – $220K", right: "$180K – $320K" },
  { metric: "Stops Per Day", left: "18 – 28 pools", right: "4 – 7 jobs" },
  { metric: "Labor Cost % of Revenue", left: "28 – 38%", right: "28 – 38%" },
] as const;

export const marginTiers = {
  left: poolServiceMarginTiers,
  right: { weak: "4 – 7%", average: "8 – 12%", strong: "13 – 16%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "28 – 38%", right: "28 – 38%" },
  { expense: "Materials/Parts", left: "10 – 16%", right: "18 – 26%" },
  { expense: "Fleet & Vehicles", left: "6 – 10%", right: "6 – 10%" },
  { expense: "Marketing", left: "6 – 10%", right: "5 – 9%" },
] as const;

export const insuranceHighlights = {
  left: poolServiceInsuranceHighlight,
  right: { title: "Skilled Trade Premium", value: "Licensed HVAC technicians" },
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "75 – 85%", right: "25 – 45%" },
  { metric: "Emergency/One-Time Revenue", left: "10 – 20%", right: "10 – 18%" },
  { metric: "Commercial Contract Revenue", left: "15 – 30%", right: "25 – 40%" },
  { metric: "Seasonal Revenue Swing", left: "Low – Moderate", right: "Moderate – High" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Pool Service Owner", earnings: "$95K – $130K", type: "left" },
  { model: "Multi-Route Pool Service Operator", earnings: "$160K – $250K+", type: "left" },
  { model: "Small HVAC Owner", earnings: "$95K – $120K", type: "right" },
  { model: "Multi-Truck HVAC Operator", earnings: "$185K – $350K+", type: "right" },
] as const;

export const leftStartupItems = poolServiceStartupItems;

export const rightStartupItems = [
  { item: "Vehicles & Equipment", percent: 35 },
  { item: "Inventory & Tools", percent: 22 },
  { item: "Marketing Launch", percent: 15 },
  { item: "Working Capital", percent: 28 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: poolServiceStartupSideBySide.equipment, right: "$80K – $200K" },
  { category: "Vehicles", left: poolServiceStartupSideBySide.vehicle, right: "Included above" },
  { category: "Marketing Launch", left: poolServiceStartupSideBySide.marketing, right: "$25K – $60K" },
  { category: "Total Launch Budget", left: poolServiceStartupSideBySide.total, right: "$200K – $500K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: poolServiceValuation.sde, right: "2.4× – 3.8×" },
  { metric: "Revenue Multiple", left: poolServiceValuation.revenue, right: "0.6× – 1.1×" },
  { metric: "EBITDA Multiple", left: poolServiceValuation.ebitda, right: "4.0× – 6.5×" },
] as const;

export const valuationExamples = {
  left: poolServiceValuation.example,
  right: { revenue: "$2.4M", value: "$1.04M – $1.65M", note: "3.1× SDE on $433K SDE" },
} as const;

export const valuationExampleTitle = "$1M+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$45K – $75K", right: "$180K – $250K" },
  { metric: "Accounts Needed (active)", left: "80 – 160 weekly pools", right: "800 – 1,500 active" },
  { metric: "Months To Break-Even", left: "4 – 10 months", right: "12 – 24 months" },
  { metric: "Technicians at Break-Even", left: "1 – 3 technicians", right: "6 – 10 techs" },
] as const;

export const scalingLadder = {
  left: [...poolServiceScalingLadder],
  right: ["1 Truck", "3 – 5 Techs", "Maintenance Plan Base", "Multi-Location"],
} as const;

export const scalingLeftTitle = "Pool Service Growth Path";
export const scalingRightTitle = "HVAC Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: poolServiceCapitalEfficiency,
  right: { revenue: "$1.8M – $2.8M", profit: "$216K – $420K net profit", payback: "3 – 5 years" },
} as const;

export const chooseLeftTitle = "Choose Pool Service If";
export const chooseRightTitle = "Choose HVAC If";

export const chooseLeft = [
  "You want the highest recurring revenue percentage and predictable weekly cash flow",
  "You prefer premium profit margins with significantly lower startup capital",
  "You want stronger valuation multiples driven by subscription route economics",
  "You're building in warm-climate markets with dense residential pool routes",
  "You value route-based operations over skilled-trade licensing and inventory complexity",
] as const;

export const chooseRight = [
  "You want significantly higher revenue and owner compensation potential",
  "You prefer skilled-trade barriers that reduce low-price competition",
  "You want higher revenue per technician and larger average service tickets",
  "You're building toward commercial service contracts and multi-location scale",
  "You value the skilled trade premium and essential-system emergency demand",
] as const;

export const calculators = poolServiceCalculators;

export const relatedComparisons = [
  { label: "Pool Service vs Plumbing", href: "/comparisons/pool-service-vs-plumbing/" },
  { label: "Pool Service vs Pest Control", href: "/comparisons/pool-service-vs-pest-control/" },
  { label: "Pest Control vs HVAC", href: "/comparisons/pest-control-vs-hvac/" },
  { label: "Plumbing vs HVAC", href: "/comparisons/plumbing-vs-hvac/" },
  { label: "Pool Service Industry Hub", href: "/industries/pool-service/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — pool service or HVAC?",
    answer:
      "HVAC companies typically reach higher median revenue (~$2.4M vs ~$950K for pool service). HVAC benefits from larger service tickets, system installations, and commercial contracts. Pool service revenue scales through dense weekly routes and repair upsells in warm-climate markets.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Pool service has a structural margin advantage — median ~20% net versus ~12% for HVAC. Weekly pool contracts, chemical program revenue, and route density drive pool service profitability. HVAC margins are solid but face higher parts costs (18–26%) and seasonal demand swings.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Pool service dominates recurring revenue with weekly cleaning contracts representing 75–85% of income. HVAC maintenance agreements represent 25–45% of revenue — meaningful but far below pool service's subscription route model.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Pool service startups typically require $65K–$165K versus $200K–$500K for HVAC. Pool service needs a service vehicle and vacuum equipment. HVAC requires trade licensing, specialized tools, inventory, and higher vehicle setup costs.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Pool service businesses often sell at 3.0×–4.5× SDE (median ~3.6×) while HVAC companies trade at 2.4×–3.8× SDE (median ~3.1×). Buyers pay premiums for pool service's high recurring revenue, contract retention, and route-based cash flow predictability.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "Pool service offers lower capital entry, faster break-even, and more predictable subscription cash flow. HVAC offers higher long-term earnings but requires technical training, licensing, and significantly more capital.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let poolService = 0;
  let hvac = 0;

  if (inputs.clinicalInterest === "specialty") hvac += 2;
  else poolService += 2;

  if (inputs.revenueGoal === "very-high") hvac += 3;
  else if (inputs.revenueGoal === "high") hvac += 2;
  else poolService += 2;

  if (inputs.insuranceComfort === "high") poolService += 3;
  else if (inputs.insuranceComfort === "medium") {
    poolService += 2;
    hvac += 1;
  } else hvac += 1;

  if (inputs.growthAmbition === "multi-location") {
    hvac += 2;
    poolService += 2;
  } else if (inputs.growthAmbition === "regional") poolService += 2;
  else poolService += 2;

  return poolService >= hvac ? "Pool Service" : "HVAC";
}

export const decisionToolCopy = {
  left:
    "Pool service is the better fit — 75–85% recurring route revenue, premium margins, lower startup costs, and top-tier valuation multiples.",
  right:
    "HVAC aligns with your goals — higher revenue ceiling, skilled-trade pricing power, revenue per technician, and commercial contract scale.",
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
