import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import {
  poolServiceCapitalEfficiency,
  poolServiceCustomerFunnel,
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
import {
  treeServiceCalculators,
  treeServiceCapitalEfficiency,
  treeServiceCustomerFunnel,
  treeServiceHubLabels,
  treeServiceInsuranceHighlight,
  treeServiceKpis,
  treeServiceMarginTiers,
  treeServiceOperatoryFunnel,
  treeServiceRevenueFunnel,
  treeServiceRevenueSources,
  treeServiceScalingLadder,
  treeServiceStartupItems,
  treeServiceStartupSideBySide,
  treeServiceValuation,
} from "./tree-service-comparison-shared";

export const comparisonMeta = {
  slug: "tree-service-vs-pool-service",
  title: "Tree Service vs Pool Service",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, route economics, recurring revenue, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...treeServiceHubLabels,
  right: "Pool Service",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Tree Service" },
  { factor: "Higher Profit Margins", winner: "Pool Service" },
  { factor: "Lower Startup Cost", winner: "Pool Service" },
  { factor: "Recurring Revenue", winner: "Pool Service" },
  { factor: "Revenue Per Crew/Technician", winner: "Tree Service" },
  { factor: "Emergency Revenue", winner: "Tree Service" },
  { factor: "Valuation Multiples", winner: "Pool Service" },
  { factor: "Market Geography", winner: "Pool Service" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: treeServiceKpis.annualRevenue, right: poolServiceKpis.annualRevenue },
  { metric: "Net Profit Margin", left: treeServiceKpis.netMargin, right: poolServiceKpis.netMargin },
  { metric: "Owner Compensation", left: treeServiceKpis.ownerComp, right: poolServiceKpis.ownerComp },
  { metric: "Revenue Per Crew/Technician", left: treeServiceKpis.revenuePerCrew, right: poolServiceKpis.revenuePerTech },
  { metric: "Startup Cost", left: treeServiceKpis.startup, right: poolServiceKpis.startup },
  { metric: "Business Value", left: treeServiceKpis.valuation, right: poolServiceKpis.valuation },
  { metric: "Recurring Contract %", left: treeServiceKpis.recurringPct, right: poolServiceKpis.recurringPct },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 8, right: 6, winner: "Tree Service" },
  { label: "Profit Margin", left: 7, right: 8, winner: "Pool Service" },
  { label: "Recurring Revenue", left: 3, right: 9, winner: "Pool Service" },
  { label: "Low Capital Entry", left: 4, right: 8, winner: "Pool Service" },
] as const;

export const leftRevenueSources = treeServiceRevenueSources;

export const rightRevenueSources = poolServiceRevenueSources;

export const revenueFunnel = {
  left: [...treeServiceRevenueFunnel],
  right: [...poolServiceRevenueFunnel],
} as const;

export const patientFunnel = {
  left: [...treeServiceCustomerFunnel],
  right: [...poolServiceCustomerFunnel],
} as const;

export const operatoryFunnel = {
  left: [...treeServiceOperatoryFunnel],
  right: [...poolServiceOperatoryFunnel],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "3 – 12 arborists/crew", right: "2 – 8 technicians" },
  { driver: "Average Job Ticket", left: "$800 – $4,500", right: "$120 – $185 (weekly)" },
  { driver: "Annual Contract Value", left: "$1,200 – $5,000", right: "$2,400 – $4,800" },
  { driver: "Recurring Revenue", left: "10 – 25% of revenue", right: "75 – 85% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$1,200 – $5,000", right: "$2,000 – $5,500" },
  { metric: "Visits Per Year", left: "1 – 3 (as-needed)", right: "26 – 40 (weekly)" },
  { metric: "Average Ticket", left: "$800 – $4,500", right: "$120 – $185/week" },
  { metric: "Contract Retention", left: "40 – 65%", right: "85 – 94%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Crew/Technician", left: "$250K – $500K", right: "$160K – $220K" },
  { metric: "Jobs/Stops Per Period", left: "3 – 8 jobs/week", right: "18 – 28 pools/day" },
  { metric: "Labor Cost % of Revenue", left: "30 – 45%", right: "28 – 38%" },
] as const;

export const marginTiers = {
  left: treeServiceMarginTiers,
  right: poolServiceMarginTiers,
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "30 – 45%", right: "28 – 38%" },
  { expense: "Equipment & Materials", left: "12 – 20%", right: "10 – 16%" },
  { expense: "Insurance", left: "8 – 14%", right: "5 – 10%" },
  { expense: "Marketing", left: "5 – 10%", right: "6 – 10%" },
] as const;

export const insuranceHighlights = {
  left: treeServiceInsuranceHighlight,
  right: poolServiceInsuranceHighlight,
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "10 – 25%", right: "75 – 85%" },
  { metric: "Emergency/Storm Revenue", left: "15 – 35%", right: "Low – Moderate" },
  { metric: "Project/One-Time Revenue", left: "60 – 80%", right: "10 – 20%" },
  { metric: "Commercial Contract Revenue", left: "15 – 30%", right: "15 – 30%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Tree Service Owner", earnings: "$90K – $130K", type: "left" },
  { model: "Storm-Market Tree Operator", earnings: "$150K – $300K+", type: "left" },
  { model: "Small Pool Service Owner", earnings: "$95K – $130K", type: "right" },
  { model: "Multi-Route Pool Service Operator", earnings: "$160K – $250K+", type: "right" },
] as const;

export const leftStartupItems = treeServiceStartupItems;

export const rightStartupItems = poolServiceStartupItems;

export const startupSideBySide = [
  { category: "Equipment", left: treeServiceStartupSideBySide.equipment, right: poolServiceStartupSideBySide.equipment },
  { category: "Vehicles", left: treeServiceStartupSideBySide.vehicles, right: poolServiceStartupSideBySide.vehicle },
  { category: "Insurance & Licensing", left: treeServiceStartupSideBySide.insurance, right: "$8K – $20K" },
  { category: "Total Launch Budget", left: treeServiceStartupSideBySide.total, right: poolServiceStartupSideBySide.total },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: treeServiceValuation.sde, right: poolServiceValuation.sde },
  { metric: "Revenue Multiple", left: treeServiceValuation.revenue, right: poolServiceValuation.revenue },
  { metric: "EBITDA Multiple", left: treeServiceValuation.ebitda, right: poolServiceValuation.ebitda },
] as const;

export const valuationExamples = {
  left: treeServiceValuation.example,
  right: poolServiceValuation.example,
} as const;

export const valuationExampleTitle = "$1M+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$70K – $120K", right: "$45K – $75K" },
  { metric: "Jobs/Accounts Needed", left: "15 – 30 jobs/month", right: "80 – 160 weekly pools" },
  { metric: "Months To Break-Even", left: "10 – 18 months", right: "4 – 10 months" },
  { metric: "Crews at Break-Even", left: "1 – 2 crews", right: "1 – 3 technicians" },
] as const;

export const scalingLadder = {
  left: [...treeServiceScalingLadder],
  right: [...poolServiceScalingLadder],
} as const;

export const scalingLeftTitle = "Tree Service Growth Path";
export const scalingRightTitle = "Pool Service Growth Path";

export const capitalEfficiency = {
  investment: "$200,000",
  left: treeServiceCapitalEfficiency,
  right: poolServiceCapitalEfficiency,
} as const;

export const chooseLeftTitle = "Choose Tree Service If";
export const chooseRightTitle = "Choose Pool Service If";

export const chooseLeft = [
  "You want higher per-job tickets and premium margins on specialized arborist work",
  "You're in a storm-prone market with strong emergency removal demand",
  "You want higher revenue per crew and project-based pricing power",
  "You have arborist certification and comfort with high-liability operations",
  "You can manage expensive equipment — bucket trucks, chippers, and disposal logistics",
] as const;

export const chooseRight = [
  "You want 75–85% recurring weekly route revenue with predictable cash flow",
  "You prefer lower startup costs and faster break-even on subscription routes",
  "You want stronger valuation multiples and acquisition-friendly route economics",
  "You're building in warm-climate markets with dense pool route density",
  "You value weekly service frequency and equipment repair upsell potential",
] as const;

export const calculators = treeServiceCalculators;

export const relatedComparisons = [
  { label: "Tree Service vs Landscaping", href: "/comparisons/tree-service-vs-landscaping/" },
  { label: "Pool Service vs Landscaping", href: "/comparisons/pool-service-vs-landscaping/" },
  { label: "Pool Service vs Pest Control", href: "/comparisons/pool-service-vs-pest-control/" },
  { label: "Tree Service vs Lawn Care", href: "/comparisons/tree-service-vs-lawn-care/" },
  { label: "Tree Service Industry Hub", href: "/industries/tree-service/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — tree service or pool service?",
    answer:
      "Tree service companies typically reach higher median revenue (~$1.25M vs ~$950K for pool service) with fewer crews. Tree service benefits from higher per-job tickets, storm work, and commercial arborist contracts. Pool service revenue scales through dense weekly routes in warm-climate markets.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Both trades offer strong margins — pool service median ~20% net versus ~21% for tree service. Pool service benefits from weekly visits and repair upsells. Tree service benefits from specialized pricing, storm premiums, and higher per-job tickets.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Pool service dominates recurring revenue with weekly cleaning contracts representing 75–85% of income. Tree service is overwhelmingly project-based — removals, pruning, and storm work drive 60–80% of revenue with minimal recurring penetration (10–25%).",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Pool service startups typically require $65K–$165K versus $150K–$400K for tree service. Tree service needs bucket trucks, chippers, specialized insurance, and arborist certification. Pool service can launch with a service vehicle, equipment, and route marketing.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Pool service businesses often sell at 3.0×–4.5× SDE (median ~3.6×) while tree service trades at 2.5×–4.2× SDE (median ~3.7×). Both attract acquisition interest, but pool service commands a slight premium for weekly contract frequency and route predictability.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "Pool service offers lower capital entry, stronger recurring revenue, and faster break-even on weekly routes — but is concentrated in warm-climate markets. Tree service offers higher per-crew revenue and storm-market upside but requires specialized equipment, insurance, and arborist expertise.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let treeService = 0;
  let poolService = 0;

  if (inputs.clinicalInterest === "specialty") treeService += 2;
  else poolService += 2;

  if (inputs.revenueGoal === "very-high") treeService += 2;
  else if (inputs.revenueGoal === "high") treeService += 2;
  else poolService += 2;

  if (inputs.insuranceComfort === "high") poolService += 3;
  else if (inputs.insuranceComfort === "medium") {
    poolService += 2;
    treeService += 1;
  } else treeService += 1;

  if (inputs.growthAmbition === "multi-location") {
    treeService += 2;
    poolService += 2;
  } else if (inputs.growthAmbition === "regional") poolService += 2;
  else poolService += 2;

  return treeService >= poolService ? "Tree Service" : "Pool Service";
}

export const decisionToolCopy = {
  left:
    "Tree service is the better fit — higher per-job tickets, premium margins, storm-market upside, and higher revenue per crew.",
  right:
    "Pool service aligns with your goals — 75–85% recurring route revenue, lower startup costs, faster break-even, and acquisition-friendly subscription economics.",
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
