import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import {
  pestControlCapitalEfficiency,
  pestControlCustomerFunnel,
  pestControlInsuranceHighlight,
  pestControlKpis,
  pestControlMarginTiers,
  pestControlOperatoryFunnel,
  pestControlRevenueFunnel,
  pestControlRevenueSources,
  pestControlScalingLadder,
  pestControlStartupItems,
  pestControlStartupSideBySide,
  pestControlValuation,
} from "./pest-control-comparison-shared";
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
  slug: "pool-service-vs-pest-control",
  title: "Pool Service vs Pest Control",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, route economics, recurring revenue, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...poolServiceHubLabels,
  right: "Pest Control",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Pest Control" },
  { factor: "Higher Profit Margins", winner: "Pool Service" },
  { factor: "Lower Startup Cost", winner: "Pest Control" },
  { factor: "Recurring Revenue", winner: "Pest Control" },
  { factor: "Revenue Per Technician", winner: "Pool Service" },
  { factor: "Service Frequency", winner: "Pool Service" },
  { factor: "Valuation Multiples", winner: "Pool Service" },
  { factor: "Commercial Upsell Potential", winner: "Pest Control" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: poolServiceKpis.annualRevenue, right: pestControlKpis.annualRevenue },
  { metric: "Net Profit Margin", left: poolServiceKpis.netMargin, right: pestControlKpis.netMargin },
  { metric: "Owner Compensation", left: poolServiceKpis.ownerComp, right: pestControlKpis.ownerComp },
  { metric: "Revenue Per Technician", left: poolServiceKpis.revenuePerTech, right: pestControlKpis.revenuePerTech },
  { metric: "Startup Cost", left: poolServiceKpis.startup, right: pestControlKpis.startup },
  { metric: "Business Value", left: poolServiceKpis.valuation, right: pestControlKpis.valuation },
  { metric: "Recurring Contract %", left: poolServiceKpis.recurringPct, right: pestControlKpis.recurringPct },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 6, right: 7, winner: "Pest Control" },
  { label: "Profit Margin", left: 8, right: 8, winner: "Pool Service" },
  { label: "Recurring Revenue", left: 9, right: 10, winner: "Pest Control" },
  { label: "Low Capital Entry", left: 7, right: 9, winner: "Pest Control" },
] as const;

export const leftRevenueSources = poolServiceRevenueSources;

export const rightRevenueSources = pestControlRevenueSources;

export const revenueFunnel = {
  left: [...poolServiceRevenueFunnel],
  right: [...pestControlRevenueFunnel],
} as const;

export const patientFunnel = {
  left: [...poolServiceCustomerFunnel],
  right: [...pestControlCustomerFunnel],
} as const;

export const operatoryFunnel = {
  left: [...poolServiceOperatoryFunnel],
  right: [...pestControlOperatoryFunnel],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "2 – 8 technicians", right: "3 – 12 technicians" },
  { driver: "Average Service Ticket", left: "$120 – $185 (weekly)", right: "$85 – $175" },
  { driver: "Annual Contract Value", left: "$2,400 – $4,800", right: "$350 – $900" },
  { driver: "Recurring Revenue", left: "75 – 85% of revenue", right: "70 – 90% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$2,000 – $5,500", right: "$1,500 – $4,000" },
  { metric: "Visits Per Year", left: "26 – 40 (weekly)", right: "4 – 12 (quarterly+)" },
  { metric: "Average Ticket", left: "$120 – $185/week", right: "$85 – $175" },
  { metric: "Contract Retention", left: "85 – 94%", right: "80 – 92%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Technician", left: "$160K – $220K", right: "$120K – $200K" },
  { metric: "Stops Per Day", left: "18 – 28 pools", right: "10 – 18 accounts" },
  { metric: "Labor Cost % of Revenue", left: "28 – 38%", right: "25 – 35%" },
] as const;

export const marginTiers = {
  left: poolServiceMarginTiers,
  right: pestControlMarginTiers,
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "28 – 38%", right: "25 – 35%" },
  { expense: "Materials/Chemicals", left: "10 – 16%", right: "8 – 14%" },
  { expense: "Fleet & Vehicles", left: "6 – 10%", right: "6 – 10%" },
  { expense: "Marketing", left: "6 – 10%", right: "8 – 14%" },
] as const;

export const insuranceHighlights = {
  left: poolServiceInsuranceHighlight,
  right: pestControlInsuranceHighlight,
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "75 – 85%", right: "70 – 90%" },
  { metric: "One-Time/Project Revenue", left: "10 – 20%", right: "10 – 30%" },
  { metric: "Commercial Contract Revenue", left: "15 – 30%", right: "20 – 40%" },
  { metric: "Seasonal Revenue Swing", left: "Low – Moderate", right: "Moderate" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Pool Service Owner", earnings: "$95K – $130K", type: "left" },
  { model: "Multi-Route Pool Service Operator", earnings: "$160K – $250K+", type: "left" },
  { model: "Small Pest Control Owner", earnings: "$75K – $110K", type: "right" },
  { model: "Multi-Route Pest Control Operator", earnings: "$140K – $250K+", type: "right" },
] as const;

export const leftStartupItems = poolServiceStartupItems;

export const rightStartupItems = pestControlStartupItems;

export const startupSideBySide = [
  { category: "Equipment", left: poolServiceStartupSideBySide.equipment, right: pestControlStartupSideBySide.equipment },
  { category: "Vehicles", left: poolServiceStartupSideBySide.vehicle, right: pestControlStartupSideBySide.vehicles },
  { category: "Marketing Launch", left: poolServiceStartupSideBySide.marketing, right: pestControlStartupSideBySide.marketing },
  { category: "Total Launch Budget", left: poolServiceStartupSideBySide.total, right: pestControlStartupSideBySide.total },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: poolServiceValuation.sde, right: pestControlValuation.sde },
  { metric: "Revenue Multiple", left: poolServiceValuation.revenue, right: pestControlValuation.revenue },
  { metric: "EBITDA Multiple", left: poolServiceValuation.ebitda, right: pestControlValuation.ebitda },
] as const;

export const valuationExamples = {
  left: poolServiceValuation.example,
  right: pestControlValuation.example,
} as const;

export const valuationExampleTitle = "$900K+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$45K – $75K", right: "$40K – $75K" },
  { metric: "Accounts Needed (active)", left: "80 – 160 weekly pools", right: "400 – 800 contracts" },
  { metric: "Months To Break-Even", left: "4 – 10 months", right: "6 – 12 months" },
  { metric: "Technicians at Break-Even", left: "1 – 3 technicians", right: "2 – 5 technicians" },
] as const;

export const scalingLadder = {
  left: [...poolServiceScalingLadder],
  right: [...pestControlScalingLadder],
} as const;

export const scalingLeftTitle = "Pool Service Growth Path";
export const scalingRightTitle = "Pest Control Growth Path";

export const capitalEfficiency = {
  investment: "$150,000",
  left: poolServiceCapitalEfficiency,
  right: pestControlCapitalEfficiency,
} as const;

export const chooseLeftTitle = "Choose Pool Service If";
export const chooseRightTitle = "Choose Pest Control If";

export const chooseLeft = [
  "You want higher revenue per technician and weekly service frequency",
  "You prefer premium margins with equipment repair upsell potential",
  "You want stronger valuation multiples at the top of the route-services range",
  "You're building in warm-climate markets with dense pool route density",
  "You value higher annual contract values per residential account",
] as const;

export const chooseRight = [
  "You want the highest recurring revenue percentage in home services",
  "You prefer lower startup costs and established PE/consolidator acquisition interest",
  "You want commercial and termite upsell opportunities beyond residential routes",
  "You're comfortable with chemical licensing and regulatory compliance workflows",
  "You value acquisition-friendly subscription models with quarterly contract retention",
] as const;

export const calculators = poolServiceCalculators;

export const relatedComparisons = [
  { label: "Pool Service vs Landscaping", href: "/comparisons/pool-service-vs-landscaping/" },
  { label: "Pool Service vs HVAC", href: "/comparisons/pool-service-vs-hvac/" },
  { label: "Landscaping vs Pest Control", href: "/comparisons/landscaping-vs-pest-control/" },
  { label: "Plumbing vs Pest Control", href: "/comparisons/plumbing-vs-pest-control/" },
  { label: "Pool Service Industry Hub", href: "/industries/pool-service/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — pool service or pest control?",
    answer:
      "Pest control companies typically reach higher median revenue (~$900K vs ~$950K for pool service, with pest control having a higher ceiling at ~$1.8M). Pest control benefits from commercial contracts, termite bonds, and broader geographic applicability. Pool service revenue scales through dense weekly routes in warm-climate markets.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Both trades offer strong margins — pool service median ~20% net versus ~18% for pest control. Pool service benefits from weekly visits and repair upsells. Pest control benefits from quarterly contracts, low material costs, and route density.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Pest control edges pool service on pure recurring percentage — quarterly treatment contracts represent 70–90% of income versus 75–85% for pool service weekly routes. However, pool service contracts have higher dollar values due to weekly service frequency.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Pest control startups typically require $50K–$150K versus $65K–$165K for pool service. Both are moderate-capital route businesses, but pest control has a slightly lower entry point and broader market applicability.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Pool service businesses often sell at 3.0×–4.5× SDE (median ~3.6×) while pest control trades at 2.5×–4.0× SDE (median ~3.2×). Both attract acquisition interest for subscription revenue, but pool service commands a slight premium for weekly contract frequency and higher per-account values.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "Pest control offers lower capital entry, broader geographic markets, and established franchise/consolidator pathways. Pool service offers higher per-technician revenue and weekly route predictability but is concentrated in warm-climate markets with pool density.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let poolService = 0;
  let pestControl = 0;

  if (inputs.clinicalInterest === "specialty") pestControl += 2;
  else poolService += 2;

  if (inputs.revenueGoal === "very-high") pestControl += 2;
  else if (inputs.revenueGoal === "high") pestControl += 2;
  else poolService += 2;

  if (inputs.insuranceComfort === "high") pestControl += 3;
  else if (inputs.insuranceComfort === "medium") {
    pestControl += 2;
    poolService += 2;
  } else poolService += 1;

  if (inputs.growthAmbition === "multi-location") {
    pestControl += 3;
    poolService += 2;
  } else if (inputs.growthAmbition === "regional") pestControl += 2;
  else poolService += 2;

  return poolService >= pestControl ? "Pool Service" : "Pest Control";
}

export const decisionToolCopy = {
  left:
    "Pool service is the better fit — higher revenue per technician, weekly contract values, premium margins, and top-tier valuation multiples.",
  right:
    "Pest control aligns with your goals — highest recurring mix, lower startup costs, commercial/termite upsells, and acquisition-friendly subscription models.",
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
