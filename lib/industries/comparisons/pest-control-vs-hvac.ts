import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import {
  pestControlCalculators,
  pestControlCapitalEfficiency,
  pestControlCustomerFunnel,
  pestControlHubLabels,
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

export const comparisonMeta = {
  slug: "pest-control-vs-hvac",
  title: "Pest Control vs HVAC",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, technician productivity, recurring revenue, seasonality, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...pestControlHubLabels,
  right: "HVAC",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "HVAC" },
  { factor: "Higher Profit Margins", winner: "Pest Control" },
  { factor: "Lower Startup Cost", winner: "Pest Control" },
  { factor: "Recurring Revenue", winner: "Pest Control" },
  { factor: "Revenue Per Technician", winner: "HVAC" },
  { factor: "Seasonal Stability", winner: "Pest Control" },
  { factor: "Valuation Multiples", winner: "Pest Control" },
  { factor: "Commercial Contract Scale", winner: "HVAC" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: pestControlKpis.annualRevenue, right: "$1.2M – $3.8M" },
  { metric: "Net Profit Margin", left: pestControlKpis.netMargin, right: "8 – 16%" },
  { metric: "Owner Compensation", left: pestControlKpis.ownerComp, right: "$95K – $185K" },
  { metric: "Revenue Per Technician", left: pestControlKpis.revenuePerTech, right: "$180K – $320K" },
  { metric: "Startup Cost", left: pestControlKpis.startup, right: "$200K – $500K" },
  { metric: "Business Value", left: pestControlKpis.valuation, right: "2.4× – 3.8× SDE" },
  { metric: "Recurring Contract %", left: pestControlKpis.recurringPct, right: "25 – 45%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 6, right: 9, winner: "HVAC" },
  { label: "Profit Margin", left: 9, right: 7, winner: "Pest Control" },
  { label: "Recurring Revenue", left: 10, right: 6, winner: "Pest Control" },
  { label: "Low Capital Entry", left: 10, right: 5, winner: "Pest Control" },
] as const;

export const leftRevenueSources = pestControlRevenueSources;

export const rightRevenueSources = [
  "Residential Service & Repair",
  "Maintenance Agreements",
  "System Installations",
  "Commercial Service Contracts",
  "Emergency After-Hours Calls",
] as const;

export const revenueFunnel = {
  left: [...pestControlRevenueFunnel],
  right: ["Lead", "Dispatch", "Diagnosis", "Repair/Install", "Maintenance Plan", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...pestControlCustomerFunnel],
  right: ["Homeowner", "Service Call", "Maintenance Plan", "Annual Tune-Ups", "Replacement Cycle"],
} as const;

export const operatoryFunnel = {
  left: [...pestControlOperatoryFunnel],
  right: ["Technician", "Jobs", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "3 – 12 technicians", right: "6 – 18 technicians" },
  { driver: "Average Service Ticket", left: "$85 – $175", right: "$350 – $650" },
  { driver: "Annual Contract Value", left: "$350 – $900", right: "$400 – $1,200" },
  { driver: "Recurring Revenue", left: "70 – 90% of revenue", right: "25 – 45% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$1,500 – $4,000", right: "$1,800 – $4,500" },
  { metric: "Visits Per Year", left: "4 – 12 (quarterly+)", right: "2 – 4" },
  { metric: "Average Ticket", left: "$85 – $175", right: "$350 – $650" },
  { metric: "Contract Retention", left: "80 – 92%", right: "70 – 85%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Technician", left: "$120K – $200K", right: "$180K – $320K" },
  { metric: "Stops Per Day", left: "10 – 18 accounts", right: "4 – 7 jobs" },
  { metric: "Labor Cost % of Revenue", left: "25 – 35%", right: "28 – 38%" },
] as const;

export const marginTiers = {
  left: pestControlMarginTiers,
  right: { weak: "4 – 7%", average: "8 – 12%", strong: "13 – 16%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "25 – 35%", right: "28 – 38%" },
  { expense: "Materials/Chemicals", left: "8 – 14%", right: "18 – 26%" },
  { expense: "Fleet & Vehicles", left: "6 – 10%", right: "6 – 10%" },
  { expense: "Marketing", left: "8 – 14%", right: "5 – 9%" },
] as const;

export const insuranceHighlights = {
  left: pestControlInsuranceHighlight,
  right: { title: "Skilled Trade Premium", value: "Licensed HVAC technicians" },
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "70 – 90%", right: "25 – 45%" },
  { metric: "Emergency/One-Time Revenue", left: "10 – 30%", right: "10 – 18%" },
  { metric: "Commercial Contract Revenue", left: "20 – 40%", right: "25 – 40%" },
  { metric: "Seasonal Revenue Swing", left: "Moderate", right: "Moderate – High" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Pest Control Owner", earnings: "$75K – $110K", type: "left" },
  { model: "Multi-Route Pest Control Operator", earnings: "$140K – $250K+", type: "left" },
  { model: "Small HVAC Owner", earnings: "$95K – $120K", type: "right" },
  { model: "Multi-Truck HVAC Operator", earnings: "$185K – $350K+", type: "right" },
] as const;

export const leftStartupItems = pestControlStartupItems;

export const rightStartupItems = [
  { item: "Vehicles & Equipment", percent: 35 },
  { item: "Inventory & Tools", percent: 22 },
  { item: "Marketing Launch", percent: 15 },
  { item: "Working Capital", percent: 28 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: pestControlStartupSideBySide.equipment, right: "$80K – $200K" },
  { category: "Vehicles", left: pestControlStartupSideBySide.vehicles, right: "Included above" },
  { category: "Marketing Launch", left: pestControlStartupSideBySide.marketing, right: "$25K – $60K" },
  { category: "Total Launch Budget", left: pestControlStartupSideBySide.total, right: "$200K – $500K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: pestControlValuation.sde, right: "2.4× – 3.8×" },
  { metric: "Revenue Multiple", left: pestControlValuation.revenue, right: "0.6× – 1.1×" },
  { metric: "EBITDA Multiple", left: pestControlValuation.ebitda, right: "4.0× – 6.5×" },
] as const;

export const valuationExamples = {
  left: pestControlValuation.example,
  right: { revenue: "$2.4M", value: "$1.04M – $1.65M", note: "3.1× SDE on $433K SDE" },
} as const;

export const valuationExampleTitle = "$1M+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$40K – $75K", right: "$180K – $250K" },
  { metric: "Accounts Needed (active)", left: "400 – 800 contracts", right: "800 – 1,500 active" },
  { metric: "Months To Break-Even", left: "6 – 12 months", right: "12 – 24 months" },
  { metric: "Technicians at Break-Even", left: "2 – 5 technicians", right: "6 – 10 techs" },
] as const;

export const scalingLadder = {
  left: [...pestControlScalingLadder],
  right: ["1 Truck", "3 – 5 Techs", "Maintenance Plan Base", "Multi-Location"],
} as const;

export const scalingLeftTitle = "Pest Control Growth Path";
export const scalingRightTitle = "HVAC Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: pestControlCapitalEfficiency,
  right: { revenue: "$1.8M – $2.8M", profit: "$216K – $420K net profit", payback: "3 – 5 years" },
} as const;

export const chooseLeftTitle = "Choose Pest Control If";
export const chooseRightTitle = "Choose HVAC If";

export const chooseLeft = [
  "You want the highest recurring revenue percentage in home services",
  "You prefer lower startup costs and faster break-even with subscription contracts",
  "You want premium profit margins driven by route density and contract retention",
  "You value acquisition-friendly subscription models with strong valuation multiples",
  "You want less seasonal revenue volatility than skilled-trade HVAC operations",
] as const;

export const chooseRight = [
  "You want significantly higher revenue and owner compensation potential",
  "You prefer skilled-trade barriers that reduce low-price competition",
  "You want higher revenue per technician and larger average service tickets",
  "You're building toward commercial service contracts and multi-location scale",
  "You value the skilled trade premium and emergency-driven demand economics",
] as const;

export const calculators = pestControlCalculators;

export const relatedComparisons = [
  { label: "Pest Control vs Lawn Care", href: "/comparisons/pest-control-vs-lawn-care/" },
  { label: "Pest Control vs Cleaning Business", href: "/comparisons/pest-control-vs-cleaning-business/" },
  { label: "Landscaping vs Pest Control", href: "/comparisons/landscaping-vs-pest-control/" },
  { label: "Plumbing vs Pest Control", href: "/comparisons/plumbing-vs-pest-control/" },
  { label: "Pest Control Industry Hub", href: "/industries/pest-control/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — pest control or HVAC?",
    answer:
      "HVAC companies typically reach higher median revenue (~$2.4M vs ~$900K for pest control). HVAC benefits from larger service tickets, system installations, and commercial contracts. Pest control revenue scales through route density and subscription contracts but with lower per-stop ticket values.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Pest control has a structural margin advantage — median ~18% net versus ~12% for HVAC. Subscription contracts, low material costs (8–14%), and high route density drive pest control profitability. HVAC margins are solid but face higher parts costs (18–26%) and seasonal demand swings.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Pest control dominates recurring revenue with quarterly treatment contracts representing 70–90% of income. HVAC maintenance agreements represent 25–45% of revenue — meaningful but far below pest control's subscription model.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Pest control startups typically require $50K–$150K versus $200K–$500K for HVAC. Pest control needs basic vehicles, chemical inventory, and licensing. HVAC requires trade licensing, specialized tools, inventory, and higher vehicle setup costs.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Pest control businesses often sell at 2.5×–4.0× SDE (median ~3.2×) while HVAC companies trade at 2.4×–3.8× SDE (median ~3.1×). Buyers pay premiums for pest control's subscription revenue, high retention rates, and active PE/consolidator acquisition interest.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "Pest control offers lower capital entry, faster break-even, and more predictable subscription cash flow. HVAC offers higher long-term earnings but requires technical training, licensing, and significantly more capital. Pest control suits route-building entrepreneurs; HVAC suits skilled tradespeople seeking premium compensation.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let pestControl = 0;
  let hvac = 0;

  if (inputs.clinicalInterest === "specialty") hvac += 2;
  else pestControl += 2;

  if (inputs.revenueGoal === "very-high") hvac += 3;
  else if (inputs.revenueGoal === "high") hvac += 2;
  else pestControl += 2;

  if (inputs.insuranceComfort === "high") pestControl += 3;
  else if (inputs.insuranceComfort === "medium") {
    pestControl += 2;
    hvac += 1;
  } else hvac += 1;

  if (inputs.growthAmbition === "multi-location") {
    hvac += 2;
    pestControl += 2;
  } else if (inputs.growthAmbition === "regional") pestControl += 2;
  else pestControl += 2;

  return pestControl >= hvac ? "Pest Control" : "HVAC";
}

export const decisionToolCopy = {
  left:
    "Pest control is the better fit — subscription recurring revenue, premium margins, low startup costs, and acquisition-friendly contract models.",
  right:
    "HVAC aligns with your goals — higher revenue, skilled-trade pricing power, revenue per technician, and commercial contract scale.",
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
