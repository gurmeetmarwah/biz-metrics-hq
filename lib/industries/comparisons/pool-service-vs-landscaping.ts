import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import {
  landscapingCapitalEfficiency,
  landscapingCustomerFunnel,
  landscapingInsuranceHighlight,
  landscapingKpis,
  landscapingMarginTiers,
  landscapingOperatoryFunnel,
  landscapingRevenueFunnel,
  landscapingRevenueSources,
  landscapingScalingLadder,
  landscapingStartupItems,
  landscapingStartupSideBySide,
  landscapingValuation,
} from "./landscaping-comparison-shared";
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
  slug: "pool-service-vs-landscaping",
  title: "Pool Service vs Landscaping",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, route economics, recurring revenue, seasonality, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...poolServiceHubLabels,
  right: "Landscaping",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Landscaping" },
  { factor: "Higher Profit Margins", winner: "Pool Service" },
  { factor: "Lower Startup Cost", winner: "Pool Service" },
  { factor: "Recurring Revenue", winner: "Pool Service" },
  { factor: "Revenue Per Technician", winner: "Pool Service" },
  { factor: "Seasonal Stability", winner: "Pool Service" },
  { factor: "Valuation Multiples", winner: "Pool Service" },
  { factor: "Commercial Contract Scale", winner: "Landscaping" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: poolServiceKpis.annualRevenue, right: landscapingKpis.annualRevenue },
  { metric: "Net Profit Margin", left: poolServiceKpis.netMargin, right: landscapingKpis.netMargin },
  { metric: "Owner Compensation", left: poolServiceKpis.ownerComp, right: landscapingKpis.ownerComp },
  { metric: "Revenue Per Technician/Crew", left: poolServiceKpis.revenuePerTech, right: landscapingKpis.revenuePerCrew },
  { metric: "Startup Cost", left: poolServiceKpis.startup, right: landscapingKpis.startup },
  { metric: "Business Value", left: poolServiceKpis.valuation, right: landscapingKpis.valuation },
  { metric: "Recurring Contract %", left: poolServiceKpis.recurringPct, right: landscapingKpis.maintenancePct },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 6, right: 8, winner: "Landscaping" },
  { label: "Profit Margin", left: 9, right: 5, winner: "Pool Service" },
  { label: "Recurring Revenue", left: 9, right: 6, winner: "Pool Service" },
  { label: "Low Capital Entry", left: 8, right: 6, winner: "Pool Service" },
] as const;

export const leftRevenueSources = poolServiceRevenueSources;

export const rightRevenueSources = landscapingRevenueSources;

export const revenueFunnel = {
  left: [...poolServiceRevenueFunnel],
  right: [...landscapingRevenueFunnel],
} as const;

export const patientFunnel = {
  left: [...poolServiceCustomerFunnel],
  right: [...landscapingCustomerFunnel],
} as const;

export const operatoryFunnel = {
  left: [...poolServiceOperatoryFunnel],
  right: [...landscapingOperatoryFunnel],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "2 – 8 technicians", right: "8 – 30 crew members" },
  { driver: "Average Service Ticket", left: "$120 – $185 (weekly)", right: "$45 – $120 (weekly)" },
  { driver: "Annual Contract Value", left: "$2,400 – $4,800", right: "$1,200 – $4,800" },
  { driver: "Recurring Revenue", left: "75 – 85% of revenue", right: "35 – 55% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$2,000 – $5,500", right: "$800 – $2,400" },
  { metric: "Visits Per Year", left: "26 – 40 (weekly service)", right: "26 – 40 (weekly service)" },
  { metric: "Average Ticket", left: "$120 – $185/week", right: "$45 – $120/week" },
  { metric: "Contract Retention", left: "85 – 94%", right: "75 – 90%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Technician/Crew", left: "$160K – $220K", right: "$200K – $350K" },
  { metric: "Stops Per Day", left: "18 – 28 pools", right: "12 – 25 properties" },
  { metric: "Labor Cost % of Revenue", left: "28 – 38%", right: "40 – 55%" },
] as const;

export const marginTiers = {
  left: poolServiceMarginTiers,
  right: landscapingMarginTiers,
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "28 – 38%", right: "40 – 55%" },
  { expense: "Materials/Chemicals", left: "10 – 16%", right: "12 – 20%" },
  { expense: "Fleet & Vehicles", left: "6 – 10%", right: "8 – 14%" },
  { expense: "Marketing", left: "6 – 10%", right: "4 – 8%" },
] as const;

export const insuranceHighlights = {
  left: poolServiceInsuranceHighlight,
  right: landscapingInsuranceHighlight,
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "75 – 85%", right: "35 – 55%" },
  { metric: "Project/Install Revenue", left: "10 – 20%", right: "15 – 30%" },
  { metric: "Commercial Contract Revenue", left: "15 – 30%", right: "25 – 45%" },
  { metric: "Seasonal Revenue Swing", left: "Low – Moderate", right: "Moderate – High" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Pool Service Owner", earnings: "$95K – $130K", type: "left" },
  { model: "Multi-Route Pool Service Operator", earnings: "$160K – $250K+", type: "left" },
  { model: "Small Landscaping Owner", earnings: "$70K – $95K", type: "right" },
  { model: "Multi-Crew Landscaping Operator", earnings: "$120K – $200K+", type: "right" },
] as const;

export const leftStartupItems = poolServiceStartupItems;

export const rightStartupItems = landscapingStartupItems;

export const startupSideBySide = [
  { category: "Equipment", left: poolServiceStartupSideBySide.equipment, right: landscapingStartupSideBySide.equipment },
  { category: "Vehicles", left: poolServiceStartupSideBySide.vehicle, right: landscapingStartupSideBySide.vehicles },
  { category: "Marketing Launch", left: poolServiceStartupSideBySide.marketing, right: landscapingStartupSideBySide.marketing },
  { category: "Total Launch Budget", left: poolServiceStartupSideBySide.total, right: landscapingStartupSideBySide.total },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: poolServiceValuation.sde, right: landscapingValuation.sde },
  { metric: "Revenue Multiple", left: poolServiceValuation.revenue, right: landscapingValuation.revenue },
  { metric: "EBITDA Multiple", left: poolServiceValuation.ebitda, right: landscapingValuation.ebitda },
] as const;

export const valuationExamples = {
  left: poolServiceValuation.example,
  right: landscapingValuation.example,
} as const;

export const valuationExampleTitle = "$1M Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$45K – $75K", right: "$60K – $100K" },
  { metric: "Accounts Needed (active)", left: "80 – 160 weekly pools", right: "150 – 350 weekly accounts" },
  { metric: "Months To Break-Even", left: "4 – 10 months", right: "6 – 14 months" },
  { metric: "Technicians at Break-Even", left: "1 – 3 technicians", right: "2 – 4 crews" },
] as const;

export const scalingLadder = {
  left: [...poolServiceScalingLadder],
  right: [...landscapingScalingLadder],
} as const;

export const scalingLeftTitle = "Pool Service Growth Path";
export const scalingRightTitle = "Landscaping Growth Path";

export const capitalEfficiency = {
  investment: "$150,000",
  left: poolServiceCapitalEfficiency,
  right: landscapingCapitalEfficiency,
} as const;

export const chooseLeftTitle = "Choose Pool Service If";
export const chooseRightTitle = "Choose Landscaping If";

export const chooseLeft = [
  "You want premium profit margins and high recurring monthly route revenue",
  "You prefer a subscription model with 75–85% contract-based income",
  "You want stronger valuation multiples and acquisition-friendly route economics",
  "You're building toward multi-technician pool routes with repair upsell potential",
  "You value year-round service revenue over weather-dependent outdoor labor",
] as const;

export const chooseRight = [
  "You want a higher absolute revenue ceiling through commercial grounds contracts",
  "You prefer design/install project revenue alongside maintenance routes",
  "You're building toward multi-crew field operations with hardscape upsells",
  "You want to scale through commercial property management relationships",
  "You value outdoor operations with larger crew-based revenue per team",
] as const;

export const calculators = poolServiceCalculators;

export const relatedComparisons = [
  { label: "Pool Service vs HVAC", href: "/comparisons/pool-service-vs-hvac/" },
  { label: "Pool Service vs Pest Control", href: "/comparisons/pool-service-vs-pest-control/" },
  { label: "Pool Service vs Plumbing", href: "/comparisons/pool-service-vs-plumbing/" },
  { label: "Landscaping vs Pest Control", href: "/comparisons/landscaping-vs-pest-control/" },
  { label: "Pool Service Industry Hub", href: "/industries/pool-service/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — pool service or landscaping?",
    answer:
      "Landscaping companies typically reach higher median revenue (~$1.1M vs ~$950K for pool service). Landscaping benefits from commercial grounds contracts, design/install projects, and higher revenue per crew. Pool service revenue scales through dense weekly routes and repair upsells with stronger recurring contract percentages.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Pool service has a structural margin advantage — median ~20% net versus ~8% for landscaping. Weekly pool contracts, chemical program revenue, and route density drive pool service profitability. Landscaping margins are compressed by labor intensity (40–55% payroll) and competitive maintenance pricing.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Pool service dominates recurring revenue with weekly cleaning contracts representing 75–85% of income. Landscaping maintenance contracts represent 35–55% of revenue — meaningful but far below pool service's subscription route model.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Pool service startups typically require $65K–$165K versus $75K–$250K for landscaping. Both are moderate-capital route businesses, but pool service offers faster break-even on weekly contracts with fewer crew members needed at launch.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Pool service businesses often sell at 3.0×–4.5× SDE (median ~3.6×) while landscaping companies trade at 1.8×–2.8× SDE (median ~2.2×). Buyers pay premiums for pool service's high recurring revenue, contract retention, and route-based cash flow predictability.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "Pool service offers higher margins, stronger recurring revenue, and faster break-even on weekly routes. Landscaping offers higher revenue ceiling and commercial contract upside but requires managing seasonal labor, equipment fleets, and weather-dependent scheduling.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let poolService = 0;
  let landscaping = 0;

  if (inputs.clinicalInterest === "specialty") landscaping += 2;
  else poolService += 2;

  if (inputs.revenueGoal === "very-high") landscaping += 3;
  else if (inputs.revenueGoal === "high") landscaping += 2;
  else poolService += 2;

  if (inputs.insuranceComfort === "high") poolService += 3;
  else if (inputs.insuranceComfort === "medium") {
    poolService += 2;
    landscaping += 1;
  } else landscaping += 1;

  if (inputs.growthAmbition === "multi-location") {
    landscaping += 2;
    poolService += 2;
  } else if (inputs.growthAmbition === "regional") poolService += 2;
  else poolService += 2;

  return poolService >= landscaping ? "Pool Service" : "Landscaping";
}

export const decisionToolCopy = {
  left:
    "Pool service is the better fit — premium margins, 75–85% recurring route revenue, strong valuation multiples, and predictable weekly contract cash flow.",
  right:
    "Landscaping aligns with your goals — higher revenue ceiling, commercial grounds contracts, design/install upsells, and multi-crew field operations.",
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
