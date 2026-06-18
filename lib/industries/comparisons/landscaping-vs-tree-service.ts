import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import {
  landscapingCalculators,
  landscapingCapitalEfficiency,
  landscapingCustomerFunnel,
  landscapingHubLabels,
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

export const comparisonMeta = {
  slug: "landscaping-vs-tree-service",
  title: "Landscaping vs Tree Service",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, crew productivity, equipment requirements, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...landscapingHubLabels,
  right: "Tree Service",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Tree Service" },
  { factor: "Higher Profit Margins", winner: "Tree Service" },
  { factor: "Lower Startup Cost", winner: "Landscaping" },
  { factor: "Recurring Revenue", winner: "Landscaping" },
  { factor: "Revenue Per Crew", winner: "Tree Service" },
  { factor: "Emergency Revenue", winner: "Tree Service" },
  { factor: "Operational Complexity", winner: "Landscaping" },
  { factor: "Valuation Multiples", winner: "Tree Service" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: landscapingKpis.annualRevenue, right: "$500K – $2.5M" },
  { metric: "Net Profit Margin", left: landscapingKpis.netMargin, right: "12 – 22%" },
  { metric: "Owner Compensation", left: landscapingKpis.ownerComp, right: "$90K – $200K" },
  { metric: "Revenue Per Crew", left: landscapingKpis.revenuePerCrew, right: "$250K – $500K" },
  { metric: "Startup Cost", left: landscapingKpis.startup, right: "$150K – $400K" },
  { metric: "Business Value", left: landscapingKpis.valuation, right: "2.0× – 3.5× SDE" },
  { metric: "Recurring Contract %", left: landscapingKpis.maintenancePct, right: "10 – 25%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 7, right: 8, winner: "Tree Service" },
  { label: "Profit Margin", left: 6, right: 8, winner: "Tree Service" },
  { label: "Recurring Revenue", left: 9, right: 3, winner: "Landscaping" },
  { label: "Low Capital Entry", left: 8, right: 4, winner: "Landscaping" },
] as const;

export const leftRevenueSources = landscapingRevenueSources;

export const rightRevenueSources = [
  "Tree Removal & Stump Grinding",
  "Storm Damage & Emergency Response",
  "Pruning & Canopy Management",
  "Commercial Tree Maintenance",
  "Utility Line Clearance",
] as const;

export const revenueFunnel = {
  left: [...landscapingRevenueFunnel],
  right: ["Lead/Storm", "Estimate", "Crew Dispatch", "Removal/Prune", "Cleanup", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...landscapingCustomerFunnel],
  right: ["Property Owner", "Assessment", "Job Execution", "Storm Referral", "Repeat Pruning"],
} as const;

export const operatoryFunnel = {
  left: [...landscapingOperatoryFunnel],
  right: ["Crew", "Jobs", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "8 – 30 crew members", right: "3 – 12 arborists/crew" },
  { driver: "Average Job Ticket", left: "$45 – $120 (weekly)", right: "$800 – $4,500" },
  { driver: "Project Ticket", left: "$3K – $25K (install)", right: "$2K – $15K (removal)" },
  { driver: "Recurring Revenue", left: "35 – 55% of revenue", right: "10 – 25% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$800 – $2,400", right: "$1,200 – $5,000" },
  { metric: "Visits Per Year", left: "26 – 40 (weekly service)", right: "1 – 3 (as-needed)" },
  { metric: "Average Ticket", left: "$45 – $120/week", right: "$800 – $4,500" },
  { metric: "Contract Retention", left: "75 – 90%", right: "40 – 65%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Crew", left: "$200K – $350K", right: "$250K – $500K" },
  { metric: "Jobs Per Period", left: "12 – 25 properties/day", right: "3 – 8 jobs/week" },
  { metric: "Labor Cost % of Revenue", left: "40 – 55%", right: "30 – 45%" },
] as const;

export const marginTiers = {
  left: landscapingMarginTiers,
  right: { weak: "8 – 12%", average: "13 – 18%", strong: "19 – 25%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "40 – 55%", right: "30 – 45%" },
  { expense: "Equipment & Disposal", left: "8 – 14%", right: "12 – 20%" },
  { expense: "Insurance", left: "3 – 6%", right: "8 – 14%" },
  { expense: "Marketing", left: "4 – 8%", right: "5 – 10%" },
] as const;

export const insuranceHighlights = {
  left: landscapingInsuranceHighlight,
  right: { title: "Storm Revenue Driver", value: "15 – 35% emergency/storm work" },
} as const;

export const insuranceComparison = [
  { metric: "Recurring Maintenance Revenue", left: "35 – 55%", right: "10 – 25%" },
  { metric: "Emergency/Storm Revenue", left: "Low – Moderate", right: "15 – 35%" },
  { metric: "Project-Based Revenue", left: "15 – 30%", right: "60 – 80%" },
  { metric: "Commercial/Utility Revenue", left: "25 – 45%", right: "15 – 30%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Landscaping Owner", earnings: "$70K – $95K", type: "left" },
  { model: "Multi-Crew Landscaping Operator", earnings: "$120K – $200K+", type: "left" },
  { model: "Small Tree Service Owner", earnings: "$90K – $130K", type: "right" },
  { model: "Storm-Market Tree Operator", earnings: "$150K – $300K+", type: "right" },
] as const;

export const leftStartupItems = landscapingStartupItems;

export const rightStartupItems = [
  { item: "Bucket Trucks & Chippers", percent: 35 },
  { item: "Chainsaws & Safety Gear", percent: 15 },
  { item: "Insurance & Licensing", percent: 20 },
  { item: "Working Capital", percent: 30 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: landscapingStartupSideBySide.equipment, right: "$60K – $200K" },
  { category: "Vehicles", left: landscapingStartupSideBySide.vehicles, right: "$40K – $120K" },
  { category: "Insurance & Licensing", left: "$5K – $15K", right: "$15K – $40K" },
  { category: "Total Launch Budget", left: landscapingStartupSideBySide.total, right: "$150K – $400K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: landscapingValuation.sde, right: "2.0× – 3.5×" },
  { metric: "Revenue Multiple", left: landscapingValuation.revenue, right: "0.45× – 0.85×" },
  { metric: "EBITDA Multiple", left: landscapingValuation.ebitda, right: "3.5× – 5.5×" },
] as const;

export const valuationExamples = {
  left: landscapingValuation.example,
  right: { revenue: "$1.5M", value: "$540K – $945K", note: "2.7× SDE on $270K SDE" },
} as const;

export const valuationExampleTitle = "$1M+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$60K – $100K", right: "$70K – $120K" },
  { metric: "Jobs Needed", left: "150 – 350 weekly accounts", right: "15 – 30 jobs/month" },
  { metric: "Months To Break-Even", left: "6 – 14 months", right: "10 – 18 months" },
  { metric: "Crews at Break-Even", left: "2 – 4 crews", right: "1 – 2 crews" },
] as const;

export const scalingLadder = {
  left: [...landscapingScalingLadder],
  right: ["1 Crew", "Bucket Truck", "Storm Marketing", "Multi-Crew Regional"],
} as const;

export const scalingLeftTitle = "Landscaping Growth Path";
export const scalingRightTitle = "Tree Service Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: landscapingCapitalEfficiency,
  right: { revenue: "$900K – $1.8M", profit: "$135K – $350K net profit", payback: "2 – 4 years" },
} as const;

export const chooseLeftTitle = "Choose Landscaping If";
export const chooseRightTitle = "Choose Tree Service If";

export const chooseLeft = [
  "You want recurring weekly maintenance revenue and predictable cash flow",
  "You prefer lower startup costs and faster break-even with route-based operations",
  "You're building commercial grounds contracts and property management relationships",
  "You want a diversified service mix — mowing, install, irrigation, and enhancements",
  "You value route density and customer retention over project-based job cycles",
] as const;

export const chooseRight = [
  "You want higher per-job tickets and premium margins on specialized arborist work",
  "You're in a storm-prone market with strong emergency removal demand",
  "You have arborist certification and comfort with high-liability operations",
  "You can manage expensive equipment — bucket trucks, chippers, and disposal logistics",
  "You want higher revenue per crew and stronger valuation multiples",
] as const;

export const calculators = landscapingCalculators;

export const relatedComparisons = [
  { label: "Landscaping vs Roofing", href: "/comparisons/landscaping-vs-roofing/" },
  { label: "Landscaping vs Lawn Care", href: "/comparisons/landscaping-vs-lawn-care/" },
  { label: "Landscaping vs Pest Control", href: "/comparisons/landscaping-vs-pest-control/" },
  { label: "Landscaping Industry Hub", href: "/industries/landscaping/" },
] as const;

export const faqs = [
  {
    question: "Which is more profitable — landscaping or tree service?",
    answer:
      "Tree service typically achieves higher net margins (12–22% vs 5–12% for landscaping) due to specialized pricing, higher per-job tickets, and less commoditized competition. Landscaping offers more predictable recurring revenue but faces intense price competition on weekly maintenance routes.",
  },
  {
    question: "Which generates more revenue?",
    answer:
      "Tree service median revenue (~$1.2M) is comparable to landscaping (~$1.1M) but with fewer crews. Tree service revenue per crew ($250K–$500K) significantly exceeds landscaping ($200K–$350K). Storm markets can push tree service operators well above $2M.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Landscaping dominates recurring revenue with weekly maintenance contracts representing 35–55% of income. Tree service is overwhelmingly project-based — removals, pruning, and storm work drive 60–80% of revenue with minimal recurring penetration (10–25%).",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Landscaping startups require $75K–$250K versus $150K–$400K for tree service. Tree service needs bucket trucks, chippers, specialized insurance, and often arborist certification. Landscaping can launch with mowers, a truck, and a small crew.",
  },
  {
    question: "Can a landscaping company add tree services?",
    answer:
      "Some full-service landscaping companies offer basic tree pruning and removal, but specialized tree work requires different equipment, insurance, and arborist expertise. Many operators partner with tree service subs rather than bringing it in-house due to liability and capital requirements.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Tree service businesses sell at 2.0×–3.5× SDE (median ~2.7×) while landscaping companies trade at 1.8×–2.8× SDE (median ~2.2×). Buyers pay premiums for tree service's higher margins, specialized barriers, and storm-market revenue potential.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let landscaping = 0;
  let treeService = 0;

  if (inputs.clinicalInterest === "specialty") treeService += 2;
  else landscaping += 2;

  if (inputs.revenueGoal === "very-high") treeService += 2;
  else if (inputs.revenueGoal === "high") {
    landscaping += 1;
    treeService += 2;
  } else landscaping += 2;

  if (inputs.insuranceComfort === "high") landscaping += 2;
  else treeService += 1;

  if (inputs.growthAmbition === "multi-location") treeService += 2;
  else if (inputs.growthAmbition === "regional") {
    landscaping += 2;
    treeService += 2;
  } else landscaping += 2;

  return landscaping >= treeService ? "Landscaping" : "Tree Service";
}

export const decisionToolCopy = {
  left:
    "Landscaping aligns with your goals — recurring maintenance revenue, lower startup costs, route-based operations, and commercial contract scale.",
  right:
    "Tree service is the better fit — higher per-job tickets, premium margins, storm-market upside, and specialized arborist pricing power.",
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
