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
  slug: "landscaping-vs-lawn-care",
  title: "Landscaping vs Lawn Care",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, route economics, service scope, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...landscapingHubLabels,
  right: "Lawn Care",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Landscaping" },
  { factor: "Higher Profit Margins", winner: "Lawn Care" },
  { factor: "Lower Startup Cost", winner: "Lawn Care" },
  { factor: "Recurring Revenue", winner: "Lawn Care" },
  { factor: "Revenue Per Crew", winner: "Landscaping" },
  { factor: "Upsell Potential", winner: "Landscaping" },
  { factor: "Operational Complexity", winner: "Lawn Care" },
  { factor: "Valuation Multiples", winner: "Landscaping" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: landscapingKpis.annualRevenue, right: "$300K – $1.2M" },
  { metric: "Net Profit Margin", left: landscapingKpis.netMargin, right: "10 – 20%" },
  { metric: "Owner Compensation", left: landscapingKpis.ownerComp, right: "$60K – $120K" },
  { metric: "Revenue Per Crew", left: landscapingKpis.revenuePerCrew, right: "$120K – $200K" },
  { metric: "Startup Cost", left: landscapingKpis.startup, right: "$25K – $75K" },
  { metric: "Business Value", left: landscapingKpis.valuation, right: "1.5× – 2.5× SDE" },
  { metric: "Recurring Contract %", left: landscapingKpis.maintenancePct, right: "80 – 95%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 8, right: 5, winner: "Landscaping" },
  { label: "Profit Margin", left: 6, right: 8, winner: "Lawn Care" },
  { label: "Recurring Revenue", left: 7, right: 10, winner: "Lawn Care" },
  { label: "Low Capital Entry", left: 6, right: 10, winner: "Lawn Care" },
] as const;

export const leftRevenueSources = landscapingRevenueSources;

export const rightRevenueSources = [
  "Weekly Mowing Routes",
  "Fertilization & Weed Control",
  "Aeration & Overseeding",
  "Leaf Cleanup & Seasonal Services",
  "Basic Bed Maintenance",
] as const;

export const revenueFunnel = {
  left: [...landscapingRevenueFunnel],
  right: ["Lead", "Estimate", "Route Add", "Weekly Service", "Seasonal Upsell", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...landscapingCustomerFunnel],
  right: ["Homeowner", "Weekly Mow", "Fertilization Plan", "Seasonal Add-On", "Renewal"],
} as const;

export const operatoryFunnel = {
  left: [...landscapingOperatoryFunnel],
  right: ["Crew", "Stops", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "8 – 30 crew members", right: "2 – 12 crew members" },
  { driver: "Average Weekly Ticket", left: "$45 – $120", right: "$30 – $65" },
  { driver: "Project Ticket", left: "$3K – $25K (install)", right: "$150 – $600 (seasonal)" },
  { driver: "Recurring Revenue", left: "35 – 55% of revenue", right: "80 – 95% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$800 – $2,400", right: "$600 – $1,800" },
  { metric: "Visits Per Year", left: "26 – 40 (full service)", right: "26 – 36 (weekly mow)" },
  { metric: "Average Ticket", left: "$45 – $120/week", right: "$30 – $65/week" },
  { metric: "Contract Retention", left: "75 – 90%", right: "80 – 92%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Crew", left: "$200K – $350K", right: "$120K – $200K" },
  { metric: "Stops Per Day", left: "12 – 25 properties/day", right: "25 – 45 stops/day" },
  { metric: "Labor Cost % of Revenue", left: "40 – 55%", right: "35 – 50%" },
] as const;

export const marginTiers = {
  left: landscapingMarginTiers,
  right: { weak: "6 – 10%", average: "11 – 16%", strong: "17 – 22%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "40 – 55%", right: "35 – 50%" },
  { expense: "Materials/Fuel", left: "12 – 20%", right: "8 – 14%" },
  { expense: "Fleet & Equipment", left: "8 – 14%", right: "6 – 12%" },
  { expense: "Marketing", left: "4 – 8%", right: "3 – 7%" },
] as const;

export const insuranceHighlights = {
  left: landscapingInsuranceHighlight,
  right: { title: "Pure Recurring Model", value: "80 – 95% weekly route revenue" },
} as const;

export const insuranceComparison = [
  { metric: "Weekly Route Revenue", left: "35 – 55%", right: "80 – 95%" },
  { metric: "Design/Install Revenue", left: "15 – 30%", right: "0 – 5%" },
  { metric: "Commercial Contract Revenue", left: "25 – 45%", right: "10 – 25%" },
  { metric: "Seasonal Revenue Swing", left: "Moderate – High", right: "Moderate" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Landscaping Owner", earnings: "$70K – $95K", type: "left" },
  { model: "Multi-Crew Landscaping Operator", earnings: "$120K – $200K+", type: "left" },
  { model: "Solo Lawn Care Operator", earnings: "$50K – $75K", type: "right" },
  { model: "Multi-Crew Lawn Care Operator", earnings: "$90K – $140K+", type: "right" },
] as const;

export const leftStartupItems = landscapingStartupItems;

export const rightStartupItems = [
  { item: "Mowers & Equipment", percent: 35 },
  { item: "Truck & Trailer", percent: 25 },
  { item: "Marketing Launch", percent: 15 },
  { item: "Working Capital", percent: 25 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: landscapingStartupSideBySide.equipment, right: "$8K – $25K" },
  { category: "Vehicles", left: landscapingStartupSideBySide.vehicles, right: "$10K – $30K" },
  { category: "Marketing Launch", left: landscapingStartupSideBySide.marketing, right: "$5K – $15K" },
  { category: "Total Launch Budget", left: landscapingStartupSideBySide.total, right: "$25K – $75K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: landscapingValuation.sde, right: "1.5× – 2.5×" },
  { metric: "Revenue Multiple", left: landscapingValuation.revenue, right: "0.25× – 0.50×" },
  { metric: "EBITDA Multiple", left: landscapingValuation.ebitda, right: "2.0× – 3.5×" },
] as const;

export const valuationExamples = {
  left: landscapingValuation.example,
  right: { revenue: "$600K", value: "$180K – $300K", note: "2.0× SDE on $120K SDE" },
} as const;

export const valuationExampleTitle = "$600K+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$60K – $100K", right: "$25K – $45K" },
  { metric: "Accounts Needed (active)", left: "150 – 350 weekly accounts", right: "80 – 180 weekly stops" },
  { metric: "Months To Break-Even", left: "6 – 14 months", right: "3 – 8 months" },
  { metric: "Crews at Break-Even", left: "2 – 4 crews", right: "1 – 2 crews" },
] as const;

export const scalingLadder = {
  left: [...landscapingScalingLadder],
  right: ["Solo Route", "2 – 3 Crews", "Route Density", "Regional Mowing Brand"],
} as const;

export const scalingLeftTitle = "Landscaping Growth Path";
export const scalingRightTitle = "Lawn Care Growth Path";

export const capitalEfficiency = {
  investment: "$150,000",
  left: landscapingCapitalEfficiency,
  right: { revenue: "$500K – $900K", profit: "$75K – $150K net profit", payback: "1.5 – 3 years" },
} as const;

export const chooseLeftTitle = "Choose Landscaping If";
export const chooseRightTitle = "Choose Lawn Care If";

export const chooseLeft = [
  "You want to build a full-service company with design, install, and hardscape revenue",
  "You're targeting commercial grounds contracts and property management relationships",
  "You want higher revenue per crew and larger project ticket opportunities",
  "You plan to scale beyond mowing into irrigation, enhancements, and outdoor living",
  "You value a business model with higher absolute revenue ceiling and valuation upside",
] as const;

export const chooseRight = [
  "You want the lowest startup cost and fastest path to profitability",
  "You prefer a simple, repeatable weekly mowing route model",
  "You want 80–95% recurring revenue with minimal project complexity",
  "You're starting solo or with a small crew and want operational simplicity",
  "You value higher margins on a focused service offering without install overhead",
] as const;

export const calculators = landscapingCalculators;

export const relatedComparisons = [
  { label: "Landscaping vs HVAC", href: "/comparisons/landscaping-vs-hvac/" },
  { label: "Landscaping vs Pest Control", href: "/comparisons/landscaping-vs-pest-control/" },
  { label: "Landscaping vs Tree Service", href: "/comparisons/landscaping-vs-tree-service/" },
  { label: "Landscaping Industry Hub", href: "/industries/landscaping/" },
] as const;

export const faqs = [
  {
    question: "What's the difference between landscaping and lawn care?",
    answer:
      "Lawn care is mowing-focused — weekly routes, fertilization, and basic seasonal services. Full landscaping adds design, hardscape, irrigation, tree/shrub work, and commercial grounds management. Landscaping has higher revenue ceiling and project revenue; lawn care has simpler operations and higher recurring mix.",
  },
  {
    question: "Which makes more money?",
    answer:
      "Landscaping operators typically earn more — median owner compensation ~$95K versus ~$85K for lawn care. Landscaping median revenue (~$1.1M) is roughly 2× lawn care median (~$550K). The gap comes from commercial contracts, install projects, and higher revenue per crew.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Lawn care often achieves higher net margins (10–20%) on pure mowing routes due to operational simplicity and route density. Landscaping margins average ~8% because of labor intensity, equipment diversity, and competitive maintenance pricing — though install projects can boost margins when sold well.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Lawn care is the lowest-capital entry in green industry — $25K–$75K for a truck, mowers, and initial marketing. Full landscaping requires $75K–$250K for broader equipment, trailers, and crew capacity to handle install and commercial work.",
  },
  {
    question: "Can I start with lawn care and expand to landscaping?",
    answer:
      "Yes — this is a common growth path. Many operators build mowing route density first, then add fertilization, bed maintenance, and eventually design/install services. The transition requires capital for equipment, skilled labor, and sales capability for project work.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Landscaping businesses sell at 1.8×–2.8× SDE (median ~2.2×) while lawn care routes trade at 1.5×–2.5× SDE (median ~2.0×). Buyers pay slightly more for landscaping's commercial contract books and install revenue diversification.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let landscaping = 0;
  let lawnCare = 0;

  if (inputs.clinicalInterest === "specialty") landscaping += 2;
  else lawnCare += 2;

  if (inputs.revenueGoal === "very-high") landscaping += 3;
  else if (inputs.revenueGoal === "high") landscaping += 2;
  else lawnCare += 2;

  if (inputs.insuranceComfort === "high") lawnCare += 2;
  else landscaping += 1;

  if (inputs.growthAmbition === "multi-location") landscaping += 3;
  else if (inputs.growthAmbition === "regional") landscaping += 2;
  else lawnCare += 2;

  return landscaping >= lawnCare ? "Landscaping" : "Lawn Care";
}

export const decisionToolCopy = {
  left:
    "Landscaping aligns with your goals — full-service revenue, commercial contracts, design/install upsells, and higher scaling potential.",
  right:
    "Lawn care is the better fit — lowest startup cost, simplest operations, highest recurring mix, and fastest break-even on weekly routes.",
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
