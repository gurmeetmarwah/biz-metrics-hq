import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import {
  plumbingCapitalEfficiency,
  plumbingCustomerFunnel,
  plumbingInsuranceHighlight,
  plumbingKpis,
  plumbingMarginTiers,
  plumbingOperatoryFunnel,
  plumbingRevenueFunnel,
  plumbingRevenueSources,
  plumbingScalingLadder,
  plumbingStartupItems,
  plumbingStartupSideBySide,
  plumbingValuation,
} from "./plumbing-comparison-shared";
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
  slug: "pool-service-vs-plumbing",
  title: "Pool Service vs Plumbing",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, technician productivity, recurring revenue, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...poolServiceHubLabels,
  right: "Plumbing",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Plumbing" },
  { factor: "Higher Profit Margins", winner: "Pool Service" },
  { factor: "Lower Startup Cost", winner: "Pool Service" },
  { factor: "Recurring Revenue", winner: "Pool Service" },
  { factor: "Emergency Call Volume", winner: "Plumbing" },
  { factor: "Skilled Trade Barrier", winner: "Plumbing" },
  { factor: "Revenue Per Technician", winner: "Plumbing" },
  { factor: "Valuation Multiples", winner: "Pool Service" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: poolServiceKpis.annualRevenue, right: plumbingKpis.annualRevenue },
  { metric: "Net Profit Margin", left: poolServiceKpis.netMargin, right: plumbingKpis.netMargin },
  { metric: "Owner Compensation", left: poolServiceKpis.ownerComp, right: plumbingKpis.ownerComp },
  { metric: "Revenue Per Technician", left: poolServiceKpis.revenuePerTech, right: plumbingKpis.revenuePerTech },
  { metric: "Startup Cost", left: poolServiceKpis.startup, right: plumbingKpis.startup },
  { metric: "Business Value", left: poolServiceKpis.valuation, right: plumbingKpis.valuation },
  { metric: "Recurring Contract %", left: poolServiceKpis.recurringPct, right: plumbingKpis.maintenancePct },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 6, right: 9, winner: "Plumbing" },
  { label: "Profit Margin", left: 9, right: 6, winner: "Pool Service" },
  { label: "Recurring Revenue", left: 10, right: 4, winner: "Pool Service" },
  { label: "Low Capital Entry", left: 9, right: 5, winner: "Pool Service" },
] as const;

export const leftRevenueSources = poolServiceRevenueSources;

export const rightRevenueSources = plumbingRevenueSources;

export const revenueFunnel = {
  left: [...poolServiceRevenueFunnel],
  right: [...plumbingRevenueFunnel],
} as const;

export const patientFunnel = {
  left: [...poolServiceCustomerFunnel],
  right: [...plumbingCustomerFunnel],
} as const;

export const operatoryFunnel = {
  left: [...poolServiceOperatoryFunnel],
  right: [...plumbingOperatoryFunnel],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "2 – 8 technicians", right: "4 – 14 plumbers" },
  { driver: "Average Service Ticket", left: "$120 – $185 (weekly)", right: "$275 – $525" },
  { driver: "Annual Contract Value", left: "$2,400 – $4,800", right: "$200 – $600" },
  { driver: "Recurring Revenue", left: "75 – 85% of revenue", right: "10 – 25% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$2,000 – $5,500", right: "$1,200 – $3,200" },
  { metric: "Visits Per Year", left: "26 – 40 (weekly)", right: "1 – 3" },
  { metric: "Average Ticket", left: "$120 – $185/week", right: "$275 – $525" },
  { metric: "Contract Retention", left: "85 – 94%", right: "40 – 60%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Technician", left: "$160K – $220K", right: "$150K – $280K" },
  { metric: "Stops Per Day", left: "18 – 28 pools", right: "4 – 8 jobs" },
  { metric: "Labor Cost % of Revenue", left: "28 – 38%", right: "30 – 40%" },
] as const;

export const marginTiers = {
  left: poolServiceMarginTiers,
  right: plumbingMarginTiers,
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "28 – 38%", right: "30 – 40%" },
  { expense: "Materials", left: "10 – 16%", right: "16 – 24%" },
  { expense: "Fleet & Vehicles", left: "6 – 10%", right: "5 – 9%" },
  { expense: "Marketing", left: "6 – 10%", right: "6 – 10%" },
] as const;

export const insuranceHighlights = {
  left: poolServiceInsuranceHighlight,
  right: plumbingInsuranceHighlight,
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "75 – 85%", right: "10 – 25%" },
  { metric: "Emergency/One-Time Revenue", left: "10 – 20%", right: "20 – 35%" },
  { metric: "Commercial Contract Revenue", left: "15 – 30%", right: "15 – 30%" },
  { metric: "Seasonal Revenue Swing", left: "Low – Moderate", right: "Low – Moderate" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Pool Service Owner", earnings: "$95K – $130K", type: "left" },
  { model: "Multi-Route Pool Service Operator", earnings: "$160K – $250K+", type: "left" },
  { model: "Small Plumbing Owner", earnings: "$85K – $115K", type: "right" },
  { model: "Multi-Crew Plumbing Operator", earnings: "$150K – $280K+", type: "right" },
] as const;

export const leftStartupItems = poolServiceStartupItems;

export const rightStartupItems = plumbingStartupItems;

export const startupSideBySide = [
  { category: "Vehicles & Equipment", left: poolServiceStartupSideBySide.vehicle, right: plumbingStartupSideBySide.vehicles },
  { category: "Inventory & Tools", left: poolServiceStartupSideBySide.equipment, right: plumbingStartupSideBySide.inventory },
  { category: "Marketing Launch", left: poolServiceStartupSideBySide.marketing, right: plumbingStartupSideBySide.marketing },
  { category: "Total Launch Budget", left: poolServiceStartupSideBySide.total, right: plumbingStartupSideBySide.total },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: poolServiceValuation.sde, right: plumbingValuation.sde },
  { metric: "Revenue Multiple", left: poolServiceValuation.revenue, right: plumbingValuation.revenue },
  { metric: "EBITDA Multiple", left: poolServiceValuation.ebitda, right: plumbingValuation.ebitda },
] as const;

export const valuationExamples = {
  left: poolServiceValuation.example,
  right: plumbingValuation.example,
} as const;

export const valuationExampleTitle = "$1M+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$45K – $75K", right: "$120K – $180K" },
  { metric: "Accounts Needed (active)", left: "80 – 160 weekly pools", right: "600 – 1,200 active" },
  { metric: "Months To Break-Even", left: "4 – 10 months", right: "10 – 20 months" },
  { metric: "Technicians at Break-Even", left: "1 – 3 technicians", right: "4 – 8 plumbers" },
] as const;

export const scalingLadder = {
  left: [...poolServiceScalingLadder],
  right: [...plumbingScalingLadder],
} as const;

export const scalingLeftTitle = "Pool Service Growth Path";
export const scalingRightTitle = "Plumbing Growth Path";

export const capitalEfficiency = {
  investment: "$200,000",
  left: poolServiceCapitalEfficiency,
  right: plumbingCapitalEfficiency,
} as const;

export const chooseLeftTitle = "Choose Pool Service If";
export const chooseRightTitle = "Choose Plumbing If";

export const chooseLeft = [
  "You want the highest recurring revenue percentage and predictable weekly cash flow",
  "You prefer premium profit margins with lower startup capital requirements",
  "You want stronger valuation multiples driven by subscription route economics",
  "You're building in warm-climate markets with dense residential pool routes",
  "You value route-based operations over emergency-driven reactive service calls",
] as const;

export const chooseRight = [
  "You want significantly higher revenue and owner compensation potential",
  "You prefer skilled-trade barriers that reduce commoditized competition",
  "You want recession-resistant emergency demand from essential home systems",
  "You're building toward multi-crew operations with commercial accounts",
  "You value higher per-job ticket sizes and essential trade pricing power",
] as const;

export const calculators = poolServiceCalculators;

export const relatedComparisons = [
  { label: "Pool Service vs HVAC", href: "/comparisons/pool-service-vs-hvac/" },
  { label: "Pool Service vs Pest Control", href: "/comparisons/pool-service-vs-pest-control/" },
  { label: "Plumbing vs HVAC", href: "/comparisons/plumbing-vs-hvac/" },
  { label: "Plumbing vs Pest Control", href: "/comparisons/plumbing-vs-pest-control/" },
  { label: "Pool Service Industry Hub", href: "/industries/pool-service/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — pool service or plumbing?",
    answer:
      "Plumbing companies typically reach higher median revenue (~$1.6M vs ~$950K for pool service). Plumbing benefits from larger emergency tickets, repipe projects, and commercial service accounts. Pool service revenue scales through dense weekly routes and repair upsells in warm-climate markets.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Pool service has a structural margin advantage — median ~20% net versus ~11% for plumbing. Weekly pool contracts, chemical program revenue, and route density drive pool service profitability. Plumbing margins are solid but face competitive pricing on common repairs.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Pool service dominates recurring revenue with weekly cleaning contracts representing 75–85% of income. Plumbing maintenance plans represent 10–25% of revenue — most plumbing income comes from reactive repairs and emergency calls.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Pool service startups typically require $65K–$165K versus $150K–$400K for plumbing. Pool service needs a service vehicle, vacuum equipment, and chemical inventory. Plumbing requires trade licensing, diagnostic tools, and higher vehicle setup costs.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Pool service businesses often sell at 3.0×–4.5× SDE (median ~3.6×) while plumbing companies trade at 2.2×–3.5× SDE (median ~2.8×). Buyers pay premiums for pool service's high recurring revenue, contract retention, and route-based cash flow predictability.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "Pool service offers lower capital entry, faster break-even, and more predictable subscription cash flow. Plumbing offers higher long-term earnings but requires technical training, licensing, and significantly more capital.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let poolService = 0;
  let plumbing = 0;

  if (inputs.clinicalInterest === "specialty") plumbing += 2;
  else poolService += 2;

  if (inputs.revenueGoal === "very-high") plumbing += 3;
  else if (inputs.revenueGoal === "high") plumbing += 2;
  else poolService += 2;

  if (inputs.insuranceComfort === "high") poolService += 3;
  else if (inputs.insuranceComfort === "medium") {
    poolService += 2;
    plumbing += 1;
  } else plumbing += 1;

  if (inputs.growthAmbition === "multi-location") plumbing += 3;
  else if (inputs.growthAmbition === "regional") plumbing += 2;
  else poolService += 2;

  return poolService >= plumbing ? "Pool Service" : "Plumbing";
}

export const decisionToolCopy = {
  left:
    "Pool service is the better fit — 75–85% recurring route revenue, premium margins, lower startup costs, and top-tier valuation multiples.",
  right:
    "Plumbing aligns with your goals — higher revenue ceiling, skilled-trade pricing power, emergency demand, and larger per-job ticket sizes.",
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
