import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
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
  slug: "tree-service-vs-excavation",
  title: "Tree Service vs Excavation",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, project economics, equipment requirements, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...treeServiceHubLabels,
  right: "Excavation",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Excavation" },
  { factor: "Higher Profit Margins", winner: "Tree Service" },
  { factor: "Lower Startup Cost", winner: "Tree Service" },
  { factor: "Recurring Revenue", winner: "Excavation" },
  { factor: "Revenue Per Crew", winner: "Tree Service" },
  { factor: "Emergency Revenue", winner: "Tree Service" },
  { factor: "Valuation Multiples", winner: "Tree Service" },
  { factor: "Equipment Intensity", winner: "Excavation" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: treeServiceKpis.annualRevenue, right: "$800K – $2.5M" },
  { metric: "Net Profit Margin", left: treeServiceKpis.netMargin, right: "10 – 18%" },
  { metric: "Owner Compensation", left: treeServiceKpis.ownerComp, right: "$100K – $200K" },
  { metric: "Revenue Per Crew", left: treeServiceKpis.revenuePerCrew, right: "$300K – $600K" },
  { metric: "Startup Cost", left: treeServiceKpis.startup, right: "$200K – $600K" },
  { metric: "Business Value", left: treeServiceKpis.valuation, right: "2.2× – 3.8× SDE" },
  { metric: "Recurring Contract %", left: treeServiceKpis.recurringPct, right: "15 – 35%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 7, right: 8, winner: "Excavation" },
  { label: "Profit Margin", left: 8, right: 6, winner: "Tree Service" },
  { label: "Recurring Revenue", left: 3, right: 5, winner: "Excavation" },
  { label: "Low Capital Entry", left: 6, right: 3, winner: "Tree Service" },
] as const;

export const leftRevenueSources = treeServiceRevenueSources;

export const rightRevenueSources = [
  "Site Preparation & Grading",
  "Foundation & Utility Trenching",
  "Land Clearing & Demolition",
  "Drainage & Erosion Control",
  "Commercial Earthmoving Contracts",
] as const;

export const revenueFunnel = {
  left: [...treeServiceRevenueFunnel],
  right: ["Bid/Lead", "Site Survey", "Equipment Mobilize", "Excavation", "Grading/Backfill", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...treeServiceCustomerFunnel],
  right: ["GC/Developer", "Bid Award", "Mobilization", "Project Execution", "Repeat Contract"],
} as const;

export const operatoryFunnel = {
  left: [...treeServiceOperatoryFunnel],
  right: ["Crew", "Projects", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "3 – 12 arborists/crew", right: "4 – 20 operators/crew" },
  { driver: "Average Job Ticket", left: "$800 – $4,500", right: "$2K – $15K" },
  { driver: "Project Ticket", left: "$2K – $15K (removal)", right: "$15K – $150K (site work)" },
  { driver: "Recurring Revenue", left: "10 – 25% of revenue", right: "15 – 35% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$1,200 – $5,000", right: "$5,000 – $50,000" },
  { metric: "Jobs Per Year", left: "1 – 3 (as-needed)", right: "2 – 8 (project-based)" },
  { metric: "Average Ticket", left: "$800 – $4,500", right: "$2K – $15K" },
  { metric: "Contract Retention", left: "40 – 65%", right: "50 – 75%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Crew", left: "$250K – $500K", right: "$300K – $600K" },
  { metric: "Jobs Per Period", left: "3 – 8 jobs/week", right: "2 – 6 projects/month" },
  { metric: "Labor Cost % of Revenue", left: "30 – 45%", right: "35 – 50%" },
] as const;

export const marginTiers = {
  left: treeServiceMarginTiers,
  right: { weak: "6 – 10%", average: "11 – 15%", strong: "16 – 20%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "30 – 45%", right: "35 – 50%" },
  { expense: "Equipment & Fuel", left: "12 – 20%", right: "20 – 35%" },
  { expense: "Insurance", left: "8 – 14%", right: "6 – 12%" },
  { expense: "Marketing", left: "5 – 10%", right: "3 – 8%" },
] as const;

export const insuranceHighlights = {
  left: treeServiceInsuranceHighlight,
  right: { title: "Municipal & GC Contracts", value: "15 – 35% recurring site work" },
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "10 – 25%", right: "15 – 35%" },
  { metric: "Emergency/Storm Revenue", left: "15 – 35%", right: "Low – Moderate" },
  { metric: "Project-Based Revenue", left: "60 – 80%", right: "65 – 85%" },
  { metric: "Commercial/GC Revenue", left: "15 – 30%", right: "40 – 65%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Tree Service Owner", earnings: "$90K – $130K", type: "left" },
  { model: "Storm-Market Tree Operator", earnings: "$150K – $300K+", type: "left" },
  { model: "Small Excavation Owner", earnings: "$100K – $150K", type: "right" },
  { model: "Multi-Crew Excavation Operator", earnings: "$175K – $300K+", type: "right" },
] as const;

export const leftStartupItems = treeServiceStartupItems;

export const rightStartupItems = [
  { item: "Excavators & Heavy Equipment", percent: 45 },
  { item: "Trucks & Trailers", percent: 20 },
  { item: "Insurance & Bonding", percent: 15 },
  { item: "Working Capital", percent: 20 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: treeServiceStartupSideBySide.equipment, right: "$100K – $350K" },
  { category: "Vehicles", left: treeServiceStartupSideBySide.vehicles, right: "$40K – $120K" },
  { category: "Insurance & Bonding", left: treeServiceStartupSideBySide.insurance, right: "$20K – $60K" },
  { category: "Total Launch Budget", left: treeServiceStartupSideBySide.total, right: "$200K – $600K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: treeServiceValuation.sde, right: "2.2× – 3.8×" },
  { metric: "Revenue Multiple", left: treeServiceValuation.revenue, right: "0.4× – 0.8×" },
  { metric: "EBITDA Multiple", left: treeServiceValuation.ebitda, right: "3.5× – 6.0×" },
] as const;

export const valuationExamples = {
  left: treeServiceValuation.example,
  right: { revenue: "$1.5M", value: "$660K – $1.14M", note: "3.0× SDE on $330K SDE" },
} as const;

export const valuationExampleTitle = "$1.25M+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$70K – $120K", right: "$90K – $150K" },
  { metric: "Jobs Needed", left: "15 – 30 jobs/month", right: "3 – 8 projects/month" },
  { metric: "Months To Break-Even", left: "10 – 18 months", right: "12 – 24 months" },
  { metric: "Crews at Break-Even", left: "1 – 2 crews", right: "1 – 2 crews" },
] as const;

export const scalingLadder = {
  left: [...treeServiceScalingLadder],
  right: ["1 Excavator", "Multi-Machine Fleet", "GC Relationships", "Regional Earthmoving"],
} as const;

export const scalingLeftTitle = "Tree Service Growth Path";
export const scalingRightTitle = "Excavation Growth Path";

export const capitalEfficiency = {
  investment: "$300,000",
  left: treeServiceCapitalEfficiency,
  right: { revenue: "$1.2M – $2.0M", profit: "$144K – $360K net profit", payback: "3 – 5 years" },
} as const;

export const chooseLeftTitle = "Choose Tree Service If";
export const chooseRightTitle = "Choose Excavation If";

export const chooseLeft = [
  "You want higher profit margins and specialized arborist pricing power",
  "You're in a storm-prone market with strong emergency removal demand",
  "You prefer residential and property-owner customer relationships",
  "You have arborist certification and comfort with tree-specific liability",
  "You want faster equipment payback on bucket trucks and chippers versus heavy iron",
] as const;

export const chooseRight = [
  "You want a higher absolute revenue ceiling through commercial site work",
  "You prefer general contractor and developer relationships over residential leads",
  "You're comfortable managing heavy equipment fleets and fuel-intensive operations",
  "You want larger project tickets ($15K–$150K) with municipal and commercial contracts",
  "You have experience in grading, trenching, and site preparation workflows",
] as const;

export const calculators = treeServiceCalculators;

export const relatedComparisons = [
  { label: "Tree Service vs Landscaping", href: "/comparisons/tree-service-vs-landscaping/" },
  { label: "Landscaping vs Tree Service", href: "/comparisons/landscaping-vs-tree-service/" },
  { label: "Tree Service vs Pool Service", href: "/comparisons/tree-service-vs-pool-service/" },
  { label: "Tree Service vs Lawn Care", href: "/comparisons/tree-service-vs-lawn-care/" },
  { label: "Tree Service Industry Hub", href: "/industries/tree-service/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — tree service or excavation?",
    answer:
      "Excavation companies typically reach higher median revenue (~$1.5M vs ~$1.25M for tree service) due to larger commercial project tickets and GC relationships. Tree service revenue scales through storm markets and residential removal demand with fewer crews.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Tree service has a structural margin advantage — median ~21% net versus ~14% for excavation. Excavation faces heavy equipment depreciation, fuel costs, and competitive bidding on commercial site work. Tree service benefits from specialized pricing and storm premiums.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Tree service startups require $150K–$400K versus $200K–$600K for excavation. Excavation needs excavators, bulldozers, dump trucks, and bonding for commercial contracts. Tree service requires bucket trucks and chippers but generally less total iron.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Both trades are predominantly project-based. Excavation has slightly more recurring potential through municipal maintenance contracts and GC retainers (15–35%) versus tree service maintenance pruning (10–25%). Storm work provides tree service's non-recurring upside.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Tree service businesses sell at 2.5×–4.2× SDE (median ~3.7×) while excavation companies trade at 2.2×–3.8× SDE (median ~3.0×). Buyers pay premiums for tree service's higher margins and specialized barriers, though excavation equipment fleets add tangible asset value.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "Tree service offers a more accessible entry point with lower capital, residential customer relationships, and storm-market upside. Excavation offers higher revenue ceiling and commercial contract scale but requires heavy equipment expertise, bonding, and GC relationship building.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let treeService = 0;
  let excavation = 0;

  if (inputs.clinicalInterest === "specialty") treeService += 2;
  else excavation += 2;

  if (inputs.revenueGoal === "very-high") excavation += 3;
  else if (inputs.revenueGoal === "high") {
    treeService += 2;
    excavation += 2;
  } else treeService += 2;

  if (inputs.insuranceComfort === "high") excavation += 2;
  else treeService += 1;

  if (inputs.growthAmbition === "multi-location") excavation += 3;
  else if (inputs.growthAmbition === "regional") {
    treeService += 2;
    excavation += 2;
  } else treeService += 2;

  return treeService >= excavation ? "Tree Service" : "Excavation";
}

export const decisionToolCopy = {
  left:
    "Tree service is the better fit — higher margins, storm-market upside, residential customer relationships, and lower capital entry than heavy earthmoving.",
  right:
    "Excavation aligns with your goals — higher revenue ceiling, larger commercial project tickets, GC relationships, and municipal contract potential.",
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
