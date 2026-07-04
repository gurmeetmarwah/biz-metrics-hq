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
  slug: "tree-service-vs-lawn-care",
  title: "Tree Service vs Lawn Care",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, crew economics, recurring revenue, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...treeServiceHubLabels,
  right: "Lawn Care",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Tree Service" },
  { factor: "Higher Profit Margins", winner: "Tree Service" },
  { factor: "Lower Startup Cost", winner: "Lawn Care" },
  { factor: "Recurring Revenue", winner: "Lawn Care" },
  { factor: "Revenue Per Crew", winner: "Tree Service" },
  { factor: "Operational Simplicity", winner: "Lawn Care" },
  { factor: "Valuation Multiples", winner: "Tree Service" },
  { factor: "Emergency Revenue", winner: "Tree Service" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: treeServiceKpis.annualRevenue, right: "$300K – $1.2M" },
  { metric: "Net Profit Margin", left: treeServiceKpis.netMargin, right: "10 – 20%" },
  { metric: "Owner Compensation", left: treeServiceKpis.ownerComp, right: "$60K – $120K" },
  { metric: "Revenue Per Crew", left: treeServiceKpis.revenuePerCrew, right: "$120K – $200K" },
  { metric: "Startup Cost", left: treeServiceKpis.startup, right: "$25K – $75K" },
  { metric: "Business Value", left: treeServiceKpis.valuation, right: "1.5× – 2.5× SDE" },
  { metric: "Recurring Contract %", left: treeServiceKpis.recurringPct, right: "80 – 95%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 8, right: 5, winner: "Tree Service" },
  { label: "Profit Margin", left: 8, right: 7, winner: "Tree Service" },
  { label: "Recurring Revenue", left: 3, right: 10, winner: "Lawn Care" },
  { label: "Low Capital Entry", left: 4, right: 10, winner: "Lawn Care" },
] as const;

export const leftRevenueSources = treeServiceRevenueSources;

export const rightRevenueSources = [
  "Weekly Mowing Routes",
  "Fertilization & Weed Control",
  "Aeration & Overseeding",
  "Leaf Cleanup & Seasonal Services",
  "Basic Bed Maintenance",
] as const;

export const revenueFunnel = {
  left: [...treeServiceRevenueFunnel],
  right: ["Lead", "Estimate", "Route Add", "Weekly Service", "Seasonal Upsell", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...treeServiceCustomerFunnel],
  right: ["Homeowner", "Weekly Mow", "Fertilization Plan", "Seasonal Add-On", "Renewal"],
} as const;

export const operatoryFunnel = {
  left: [...treeServiceOperatoryFunnel],
  right: ["Crew", "Stops", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "3 – 12 arborists/crew", right: "2 – 12 crew members" },
  { driver: "Average Job Ticket", left: "$800 – $4,500", right: "$30 – $65 (weekly)" },
  { driver: "Project Ticket", left: "$2K – $15K (removal)", right: "$1,200 – $2,400 (annual)" },
  { driver: "Recurring Revenue", left: "10 – 25% of revenue", right: "80 – 95% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$1,200 – $5,000", right: "$600 – $1,800" },
  { metric: "Visits Per Year", left: "1 – 3 (as-needed)", right: "26 – 36 (weekly mow)" },
  { metric: "Average Ticket", left: "$800 – $4,500", right: "$30 – $65/week" },
  { metric: "Contract Retention", left: "40 – 65%", right: "80 – 92%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Crew", left: "$250K – $500K", right: "$120K – $200K" },
  { metric: "Jobs Per Period", left: "3 – 8 jobs/week", right: "25 – 45 stops/day" },
  { metric: "Labor Cost % of Revenue", left: "30 – 45%", right: "35 – 50%" },
] as const;

export const marginTiers = {
  left: treeServiceMarginTiers,
  right: { weak: "6 – 10%", average: "11 – 16%", strong: "17 – 22%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "30 – 45%", right: "35 – 50%" },
  { expense: "Equipment & Disposal", left: "12 – 20%", right: "8 – 14%" },
  { expense: "Insurance", left: "8 – 14%", right: "3 – 6%" },
  { expense: "Marketing", left: "5 – 10%", right: "3 – 7%" },
] as const;

export const insuranceHighlights = {
  left: treeServiceInsuranceHighlight,
  right: { title: "Pure Recurring Model", value: "80 – 95% weekly route revenue" },
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "10 – 25%", right: "80 – 95%" },
  { metric: "Emergency/Storm Revenue", left: "15 – 35%", right: "Low" },
  { metric: "Project-Based Revenue", left: "60 – 80%", right: "0 – 5%" },
  { metric: "Commercial Contract Revenue", left: "15 – 30%", right: "10 – 25%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Tree Service Owner", earnings: "$90K – $130K", type: "left" },
  { model: "Storm-Market Tree Operator", earnings: "$150K – $300K+", type: "left" },
  { model: "Solo Lawn Care Operator", earnings: "$50K – $75K", type: "right" },
  { model: "Multi-Crew Lawn Care Operator", earnings: "$90K – $140K+", type: "right" },
] as const;

export const leftStartupItems = treeServiceStartupItems;

export const rightStartupItems = [
  { item: "Mowers & Equipment", percent: 35 },
  { item: "Truck & Trailer", percent: 25 },
  { item: "Marketing Launch", percent: 15 },
  { item: "Working Capital", percent: 25 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: treeServiceStartupSideBySide.equipment, right: "$8K – $25K" },
  { category: "Vehicles", left: treeServiceStartupSideBySide.vehicles, right: "$10K – $30K" },
  { category: "Insurance & Licensing", left: treeServiceStartupSideBySide.insurance, right: "$2K – $8K" },
  { category: "Total Launch Budget", left: treeServiceStartupSideBySide.total, right: "$25K – $75K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: treeServiceValuation.sde, right: "1.5× – 2.5×" },
  { metric: "Revenue Multiple", left: treeServiceValuation.revenue, right: "0.25× – 0.50×" },
  { metric: "EBITDA Multiple", left: treeServiceValuation.ebitda, right: "2.0× – 3.5×" },
] as const;

export const valuationExamples = {
  left: treeServiceValuation.example,
  right: { revenue: "$600K", value: "$180K – $300K", note: "2.0× SDE on $120K SDE" },
} as const;

export const valuationExampleTitle = "$600K+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$70K – $120K", right: "$25K – $45K" },
  { metric: "Jobs Needed", left: "15 – 30 jobs/month", right: "80 – 180 weekly stops" },
  { metric: "Months To Break-Even", left: "10 – 18 months", right: "3 – 8 months" },
  { metric: "Crews at Break-Even", left: "1 – 2 crews", right: "1 – 2 crews" },
] as const;

export const scalingLadder = {
  left: [...treeServiceScalingLadder],
  right: ["Solo Route", "2 – 3 Crews", "Route Density", "Regional Mowing Brand"],
} as const;

export const scalingLeftTitle = "Tree Service Growth Path";
export const scalingRightTitle = "Lawn Care Growth Path";

export const capitalEfficiency = {
  investment: "$200,000",
  left: treeServiceCapitalEfficiency,
  right: { revenue: "$500K – $900K", profit: "$75K – $150K net profit", payback: "1.5 – 3 years" },
} as const;

export const chooseLeftTitle = "Choose Tree Service If";
export const chooseRightTitle = "Choose Lawn Care If";

export const chooseLeft = [
  "You want higher per-job tickets and premium margins on specialized arborist work",
  "You're in a storm-prone market with strong emergency removal demand",
  "You have arborist certification and comfort with high-liability operations",
  "You want higher revenue per crew and stronger valuation multiples at exit",
  "You can manage expensive equipment — bucket trucks, chippers, and disposal logistics",
] as const;

export const chooseRight = [
  "You want the lowest startup cost and fastest path to profitability",
  "You prefer a simple, repeatable weekly mowing route model",
  "You want 80–95% recurring revenue with minimal project complexity",
  "You're starting solo or with a small crew and want operational simplicity",
  "You value straightforward outdoor operations without specialized arborist licensing",
] as const;

export const calculators = treeServiceCalculators;

export const relatedComparisons = [
  { label: "Tree Service vs Landscaping", href: "/comparisons/tree-service-vs-landscaping/" },
  { label: "Landscaping vs Lawn Care", href: "/comparisons/landscaping-vs-lawn-care/" },
  { label: "Pest Control vs Lawn Care", href: "/comparisons/pest-control-vs-lawn-care/" },
  { label: "Tree Service vs Pool Service", href: "/comparisons/tree-service-vs-pool-service/" },
  { label: "Tree Service Industry Hub", href: "/industries/tree-service/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — tree service or lawn care?",
    answer:
      "Tree service companies typically reach higher median revenue (~$1.25M vs ~$550K for lawn care). Tree service benefits from higher per-job tickets, storm work, and commercial arborist contracts. Lawn care revenue is capped by weekly mowing ticket sizes and route density limits.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Tree service has a structural margin advantage — median ~21% net versus ~14% for lawn care. Specialized pricing, higher tickets, and storm premiums drive tree service profitability. Lawn care margins are solid on pure mowing routes but face intense price competition.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Lawn care dominates recurring revenue — weekly mowing routes represent 80–95% of income versus 10–25% for tree service maintenance contracts. Tree service is overwhelmingly project-based with removals, pruning, and storm work driving most revenue.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Lawn care is the lower-capital entry at $25K–$75K for a truck, mowers, and initial marketing. Tree service requires $150K–$400K for bucket trucks, chippers, specialized insurance, and arborist licensing but offers higher scaling potential.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Tree service businesses sell at 2.5×–4.2× SDE (median ~3.7×) while lawn care routes trade at 1.5×–2.5× SDE (median ~2.0×). Buyers pay premiums for tree service's higher margins, specialized barriers, and storm-market revenue potential.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "Lawn care offers the simplest operations, lowest startup cost, and fastest break-even on weekly routes. Tree service offers higher long-term revenue ceiling, stronger valuation multiples, and premium per-job pricing but requires specialized equipment, insurance, and arborist expertise.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let treeService = 0;
  let lawnCare = 0;

  if (inputs.clinicalInterest === "specialty") treeService += 2;
  else lawnCare += 2;

  if (inputs.revenueGoal === "very-high") treeService += 3;
  else if (inputs.revenueGoal === "high") treeService += 2;
  else lawnCare += 2;

  if (inputs.insuranceComfort === "high") lawnCare += 2;
  else treeService += 1;

  if (inputs.growthAmbition === "multi-location") treeService += 3;
  else if (inputs.growthAmbition === "regional") treeService += 2;
  else lawnCare += 2;

  return treeService >= lawnCare ? "Tree Service" : "Lawn Care";
}

export const decisionToolCopy = {
  left:
    "Tree service is the better fit — higher per-job tickets, premium margins, storm-market upside, and stronger valuation multiples.",
  right:
    "Lawn care aligns with your goals — lowest startup cost, simplest operations, highest recurring mix on pure mowing routes, and fastest break-even.",
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
