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
  slug: "landscaping-vs-pest-control",
  title: "Landscaping vs Pest Control",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, route economics, recurring revenue, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...landscapingHubLabels,
  right: "Pest Control",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Landscaping" },
  { factor: "Higher Profit Margins", winner: "Pest Control" },
  { factor: "Lower Startup Cost", winner: "Pest Control" },
  { factor: "Recurring Revenue", winner: "Pest Control" },
  { factor: "Revenue Per Crew", winner: "Landscaping" },
  { factor: "Seasonal Stability", winner: "Pest Control" },
  { factor: "Valuation Multiples", winner: "Pest Control" },
  { factor: "Commercial Contract Scale", winner: "Landscaping" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: landscapingKpis.annualRevenue, right: "$400K – $1.8M" },
  { metric: "Net Profit Margin", left: landscapingKpis.netMargin, right: "15 – 25%" },
  { metric: "Owner Compensation", left: landscapingKpis.ownerComp, right: "$75K – $180K" },
  { metric: "Revenue Per Crew/Technician", left: landscapingKpis.revenuePerCrew, right: "$120K – $200K" },
  { metric: "Startup Cost", left: landscapingKpis.startup, right: "$50K – $150K" },
  { metric: "Business Value", left: landscapingKpis.valuation, right: "2.5× – 4.0× SDE" },
  { metric: "Recurring Contract %", left: landscapingKpis.maintenancePct, right: "70 – 90%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 7, right: 6, winner: "Landscaping" },
  { label: "Profit Margin", left: 6, right: 9, winner: "Pest Control" },
  { label: "Recurring Revenue", left: 7, right: 10, winner: "Pest Control" },
  { label: "Low Capital Entry", left: 6, right: 10, winner: "Pest Control" },
] as const;

export const leftRevenueSources = landscapingRevenueSources;

export const rightRevenueSources = [
  "Quarterly Pest Treatments",
  "Termite Inspections & Bonds",
  "Rodent & Wildlife Control",
  "Commercial Pest Contracts",
  "One-Time Infestation Remediation",
] as const;

export const revenueFunnel = {
  left: [...landscapingRevenueFunnel],
  right: ["Lead", "Inspection", "Treatment Plan", "Service", "Recurring Contract", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...landscapingCustomerFunnel],
  right: ["Homeowner", "Initial Treatment", "Quarterly Visits", "Upsell/Add-On", "Renewal"],
} as const;

export const operatoryFunnel = {
  left: [...landscapingOperatoryFunnel],
  right: ["Technician", "Accounts", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "8 – 30 crew members", right: "3 – 12 technicians" },
  { driver: "Average Service Ticket", left: "$45 – $120 (weekly)", right: "$85 – $175" },
  { driver: "Annual Contract Value", left: "$1,200 – $4,800", right: "$350 – $900" },
  { driver: "Recurring Revenue", left: "35 – 55% of revenue", right: "70 – 90% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$800 – $2,400", right: "$1,500 – $4,000" },
  { metric: "Visits Per Year", left: "26 – 40 (weekly service)", right: "4 – 12 (quarterly+)" },
  { metric: "Average Ticket", left: "$45 – $120/week", right: "$85 – $175" },
  { metric: "Contract Retention", left: "75 – 90%", right: "80 – 92%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Crew/Technician", left: "$200K – $350K", right: "$120K – $200K" },
  { metric: "Stops Per Day", left: "12 – 25 properties/day", right: "10 – 18 accounts" },
  { metric: "Labor Cost % of Revenue", left: "40 – 55%", right: "25 – 35%" },
] as const;

export const marginTiers = {
  left: landscapingMarginTiers,
  right: { weak: "10 – 14%", average: "15 – 20%", strong: "22 – 28%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "40 – 55%", right: "25 – 35%" },
  { expense: "Materials/Chemicals", left: "12 – 20%", right: "8 – 14%" },
  { expense: "Fleet & Vehicles", left: "8 – 14%", right: "6 – 10%" },
  { expense: "Marketing", left: "4 – 8%", right: "8 – 14%" },
] as const;

export const insuranceHighlights = {
  left: landscapingInsuranceHighlight,
  right: { title: "Subscription Revenue Engine", value: "70 – 90% recurring contracts" },
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "35 – 55%", right: "70 – 90%" },
  { metric: "Project/One-Time Revenue", left: "15 – 30%", right: "10 – 30%" },
  { metric: "Commercial Contract Revenue", left: "25 – 45%", right: "20 – 40%" },
  { metric: "Seasonal Revenue Swing", left: "Moderate – High", right: "Moderate" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Landscaping Owner", earnings: "$70K – $95K", type: "left" },
  { model: "Multi-Crew Landscaping Operator", earnings: "$120K – $200K+", type: "left" },
  { model: "Small Pest Control Owner", earnings: "$75K – $110K", type: "right" },
  { model: "Multi-Route Pest Control Operator", earnings: "$140K – $250K+", type: "right" },
] as const;

export const leftStartupItems = landscapingStartupItems;

export const rightStartupItems = [
  { item: "Vehicles & Equipment", percent: 25 },
  { item: "Chemicals & Supplies", percent: 15 },
  { item: "Marketing Launch", percent: 25 },
  { item: "Working Capital", percent: 35 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: landscapingStartupSideBySide.equipment, right: "$20K – $60K" },
  { category: "Vehicles", left: landscapingStartupSideBySide.vehicles, right: "Included above" },
  { category: "Marketing Launch", left: landscapingStartupSideBySide.marketing, right: "$15K – $40K" },
  { category: "Total Launch Budget", left: landscapingStartupSideBySide.total, right: "$50K – $150K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: landscapingValuation.sde, right: "2.5× – 4.0×" },
  { metric: "Revenue Multiple", left: landscapingValuation.revenue, right: "0.8× – 1.4×" },
  { metric: "EBITDA Multiple", left: landscapingValuation.ebitda, right: "4.5× – 7.0×" },
] as const;

export const valuationExamples = {
  left: landscapingValuation.example,
  right: { revenue: "$1.0M", value: "$500K – $900K", note: "3.2× SDE on $250K SDE" },
} as const;

export const valuationExampleTitle = "$1M Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$60K – $100K", right: "$40K – $75K" },
  { metric: "Accounts Needed (active)", left: "150 – 350 weekly accounts", right: "400 – 800 contracts" },
  { metric: "Months To Break-Even", left: "6 – 14 months", right: "6 – 12 months" },
  { metric: "Crews at Break-Even", left: "2 – 4 crews", right: "2 – 5 technicians" },
] as const;

export const scalingLadder = {
  left: [...landscapingScalingLadder],
  right: ["1 Route", "2 – 4 Technicians", "Subscription Base", "Multi-Branch Operation"],
} as const;

export const scalingLeftTitle = "Landscaping Growth Path";
export const scalingRightTitle = "Pest Control Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: landscapingCapitalEfficiency,
  right: { revenue: "$700K – $1.3M", profit: "$140K – $280K net profit", payback: "2 – 3 years" },
} as const;

export const chooseLeftTitle = "Choose Landscaping If";
export const chooseRightTitle = "Choose Pest Control If";

export const chooseLeft = [
  "You want higher revenue per crew and larger commercial contract opportunities",
  "You prefer outdoor route operations with design/install upsell potential",
  "You're building toward multi-crew field operations with grounds maintenance contracts",
  "You want a business that can scale through commercial property management relationships",
  "You value project revenue from hardscape, irrigation, and landscape installs",
] as const;

export const chooseRight = [
  "You want the highest recurring revenue percentage in home services",
  "You prefer lower startup costs and faster break-even with subscription contracts",
  "You want premium profit margins driven by route density and contract retention",
  "You're comfortable with chemical licensing and regulatory compliance workflows",
  "You value acquisition-friendly subscription models with strong valuation multiples",
] as const;

export const calculators = landscapingCalculators;

export const relatedComparisons = [
  { label: "Landscaping vs HVAC", href: "/comparisons/landscaping-vs-hvac/" },
  { label: "Landscaping vs Plumbing", href: "/comparisons/landscaping-vs-plumbing/" },
  { label: "Landscaping vs Roofing", href: "/comparisons/landscaping-vs-roofing/" },
  { label: "Landscaping Industry Hub", href: "/industries/landscaping/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — landscaping or pest control?",
    answer:
      "Landscaping companies typically reach higher median revenue (~$1.1M vs ~$900K for pest control). Landscaping benefits from commercial grounds contracts, design/install projects, and higher revenue per crew. Pest control revenue scales through route density and subscription contracts but with lower per-stop ticket values.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Pest control has a structural margin advantage — median ~18% net versus ~8% for landscaping. Subscription contracts, low material costs (8–14%), and high route density drive pest control profitability. Landscaping margins are compressed by labor intensity (40–55% payroll) and competitive maintenance pricing.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Pest control dominates recurring revenue with quarterly treatment contracts representing 70–90% of income. Landscaping maintenance contracts represent 35–55% of revenue — strong for field services but lower than pest control's subscription model.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Pest control startups typically require $50K–$150K versus $75K–$250K for landscaping. Pest control needs basic vehicles, chemical inventory, and licensing. Landscaping requires mowers, trailers, and crew hiring but can launch with a smaller initial route.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Pest control businesses often sell at 2.5×–4.0× SDE (median ~3.2×) while landscaping companies trade at 1.8×–2.8× SDE (median ~2.2×). Buyers pay premiums for pest control's subscription revenue, high retention rates, and active PE/consolidator acquisition interest.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "Pest control offers lower capital entry, faster break-even, and more predictable subscription cash flow. Landscaping offers higher revenue ceiling and commercial contract upside but requires managing seasonal labor, equipment fleets, and weather-dependent scheduling.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let landscaping = 0;
  let pestControl = 0;

  if (inputs.clinicalInterest === "specialty") landscaping += 2;
  else pestControl += 2;

  if (inputs.revenueGoal === "very-high") landscaping += 2;
  else if (inputs.revenueGoal === "high") landscaping += 2;
  else pestControl += 2;

  if (inputs.insuranceComfort === "high") pestControl += 3;
  else if (inputs.insuranceComfort === "medium") {
    pestControl += 2;
    landscaping += 1;
  } else landscaping += 1;

  if (inputs.growthAmbition === "multi-location") {
    landscaping += 2;
    pestControl += 2;
  } else if (inputs.growthAmbition === "regional") pestControl += 2;
  else pestControl += 2;

  return landscaping >= pestControl ? "Landscaping" : "Pest Control";
}

export const decisionToolCopy = {
  left:
    "Landscaping aligns with your goals — higher revenue per crew, commercial contract scale, design/install upsells, and multi-crew field operations.",
  right:
    "Pest control is the better fit — subscription recurring revenue, premium margins, low startup costs, and acquisition-friendly contract models.",
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
