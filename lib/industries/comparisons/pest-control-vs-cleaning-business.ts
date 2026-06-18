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
  slug: "pest-control-vs-cleaning-business",
  title: "Pest Control vs Cleaning Business",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, route economics, recurring revenue, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...pestControlHubLabels,
  right: "Cleaning Business",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Pest Control" },
  { factor: "Higher Profit Margins", winner: "Pest Control" },
  { factor: "Lower Startup Cost", winner: "Cleaning Business" },
  { factor: "Recurring Revenue", winner: "Pest Control" },
  { factor: "Operational Simplicity", winner: "Cleaning Business" },
  { factor: "Valuation Multiples", winner: "Pest Control" },
  { factor: "PE Acquisition Interest", winner: "Pest Control" },
  { factor: "Route Economics", winner: "Pest Control" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: pestControlKpis.annualRevenue, right: "$200K – $1M" },
  { metric: "Net Profit Margin", left: pestControlKpis.netMargin, right: "10 – 20%" },
  { metric: "Owner Compensation", left: pestControlKpis.ownerComp, right: "$50K – $120K" },
  { metric: "Revenue Per Employee", left: pestControlKpis.revenuePerTech, right: "$80K – $150K" },
  { metric: "Startup Cost", left: pestControlKpis.startup, right: "$10K – $75K" },
  { metric: "Business Value", left: pestControlKpis.valuation, right: "1.8× – 3.0× SDE" },
  { metric: "Recurring Contract %", left: pestControlKpis.recurringPct, right: "50 – 75%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 8, right: 5, winner: "Pest Control" },
  { label: "Profit Margin", left: 9, right: 7, winner: "Pest Control" },
  { label: "Recurring Revenue", left: 10, right: 7, winner: "Pest Control" },
  { label: "Low Capital Entry", left: 7, right: 10, winner: "Cleaning Business" },
] as const;

export const leftRevenueSources = pestControlRevenueSources;

export const rightRevenueSources = [
  "Residential Recurring Cleaning",
  "Commercial Office Cleaning",
  "Move-In/Move-Out Deep Cleans",
  "Post-Construction Cleanup",
  "Specialty Floor & Carpet Care",
] as const;

export const revenueFunnel = {
  left: [...pestControlRevenueFunnel],
  right: ["Lead", "Estimate", "Trial Clean", "Recurring Schedule", "Upsell/Add-On", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...pestControlCustomerFunnel],
  right: ["Homeowner/Business", "Initial Clean", "Weekly/Biweekly Visits", "Deep Clean Upsell", "Renewal"],
} as const;

export const operatoryFunnel = {
  left: [...pestControlOperatoryFunnel],
  right: ["Cleaner/Crew", "Stops", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "3 – 12 technicians", right: "2 – 20 cleaners" },
  { driver: "Average Service Ticket", left: "$85 – $175", right: "$100 – $250" },
  { driver: "Annual Contract Value", left: "$350 – $900", right: "$1,200 – $4,800" },
  { driver: "Recurring Revenue", left: "70 – 90% of revenue", right: "50 – 75% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$1,500 – $4,000", right: "$800 – $2,500" },
  { metric: "Visits Per Year", left: "4 – 12 (quarterly+)", right: "12 – 52 (weekly/biweekly)" },
  { metric: "Average Ticket", left: "$85 – $175", right: "$100 – $250" },
  { metric: "Contract Retention", left: "80 – 92%", right: "70 – 85%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Employee", left: "$120K – $200K", right: "$80K – $150K" },
  { metric: "Stops Per Day", left: "10 – 18 accounts", right: "4 – 8 properties" },
  { metric: "Labor Cost % of Revenue", left: "25 – 35%", right: "40 – 55%" },
] as const;

export const marginTiers = {
  left: pestControlMarginTiers,
  right: { weak: "5 – 9%", average: "10 – 15%", strong: "16 – 22%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "25 – 35%", right: "40 – 55%" },
  { expense: "Supplies/Chemicals", left: "8 – 14%", right: "5 – 10%" },
  { expense: "Fleet & Vehicles", left: "6 – 10%", right: "4 – 8%" },
  { expense: "Marketing", left: "8 – 14%", right: "5 – 12%" },
] as const;

export const insuranceHighlights = {
  left: pestControlInsuranceHighlight,
  right: { title: "Lowest Barrier Entry", value: "No chemical licensing required" },
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "70 – 90%", right: "50 – 75%" },
  { metric: "One-Time/Project Revenue", left: "10 – 30%", right: "15 – 35%" },
  { metric: "Commercial Contract Revenue", left: "20 – 40%", right: "25 – 45%" },
  { metric: "Seasonal Revenue Swing", left: "Moderate", right: "Low – Moderate" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Pest Control Owner", earnings: "$75K – $110K", type: "left" },
  { model: "Multi-Route Pest Control Operator", earnings: "$140K – $250K+", type: "left" },
  { model: "Solo Cleaning Operator", earnings: "$40K – $65K", type: "right" },
  { model: "Multi-Crew Cleaning Operator", earnings: "$80K – $140K+", type: "right" },
] as const;

export const leftStartupItems = pestControlStartupItems;

export const rightStartupItems = [
  { item: "Cleaning Equipment & Supplies", percent: 20 },
  { item: "Vehicle & Transport", percent: 15 },
  { item: "Marketing Launch", percent: 25 },
  { item: "Working Capital", percent: 40 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: pestControlStartupSideBySide.equipment, right: "$2K – $15K" },
  { category: "Vehicles", left: pestControlStartupSideBySide.vehicles, right: "$5K – $25K" },
  { category: "Marketing Launch", left: pestControlStartupSideBySide.marketing, right: "$3K – $20K" },
  { category: "Total Launch Budget", left: pestControlStartupSideBySide.total, right: "$10K – $75K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: pestControlValuation.sde, right: "1.8× – 3.0×" },
  { metric: "Revenue Multiple", left: pestControlValuation.revenue, right: "0.4× – 0.8×" },
  { metric: "EBITDA Multiple", left: pestControlValuation.ebitda, right: "3.0× – 5.0×" },
] as const;

export const valuationExamples = {
  left: pestControlValuation.example,
  right: { revenue: "$500K", value: "$200K – $360K", note: "2.4× SDE on $100K SDE" },
} as const;

export const valuationExampleTitle = "$500K+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$40K – $75K", right: "$18K – $35K" },
  { metric: "Accounts Needed (active)", left: "400 – 800 contracts", right: "40 – 120 recurring clients" },
  { metric: "Months To Break-Even", left: "6 – 12 months", right: "3 – 9 months" },
  { metric: "Staff at Break-Even", left: "2 – 5 technicians", right: "2 – 6 cleaners" },
] as const;

export const scalingLadder = {
  left: [...pestControlScalingLadder],
  right: ["Solo Cleaner", "Small Crew", "Recurring Client Base", "Multi-Crew Operation"],
} as const;

export const scalingLeftTitle = "Pest Control Growth Path";
export const scalingRightTitle = "Cleaning Business Growth Path";

export const capitalEfficiency = {
  investment: "$75,000",
  left: pestControlCapitalEfficiency,
  right: { revenue: "$350K – $650K", profit: "$52K – $117K net profit", payback: "1 – 2.5 years" },
} as const;

export const chooseLeftTitle = "Choose Pest Control If";
export const chooseRightTitle = "Choose a Cleaning Business If";

export const chooseLeft = [
  "You want higher profit margins and stronger recurring contract percentages",
  "You prefer route economics with quarterly subscription retention and upsell potential",
  "You value acquisition-friendly models with active PE consolidator interest",
  "You're building toward commercial contracts, termite revenue, and multi-branch scale",
  "You want premium valuation multiples at exit compared to cleaning businesses",
] as const;

export const chooseRight = [
  "You want the absolute lowest startup cost and simplest operations to launch",
  "You prefer no chemical licensing or regulatory compliance requirements",
  "You want to start solo with minimal equipment and scale through hiring cleaners",
  "You value flexible scheduling with residential and commercial cleaning demand",
  "You're comfortable with labor-intensive operations and moderate recurring mix",
] as const;

export const calculators = pestControlCalculators;

export const relatedComparisons = [
  { label: "Pest Control vs HVAC", href: "/comparisons/pest-control-vs-hvac/" },
  { label: "Pest Control vs Lawn Care", href: "/comparisons/pest-control-vs-lawn-care/" },
  { label: "Landscaping vs Pest Control", href: "/comparisons/landscaping-vs-pest-control/" },
  { label: "Plumbing vs Pest Control", href: "/comparisons/plumbing-vs-pest-control/" },
  { label: "Pest Control Industry Hub", href: "/industries/pest-control/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — pest control or a cleaning business?",
    answer:
      "Pest control companies typically reach higher median revenue (~$900K vs ~$500K for cleaning businesses). Pest control benefits from commercial contracts, termite bonds, and higher route density economics. Cleaning revenue scales through client count but faces lower revenue per employee.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Pest control has a structural margin advantage — median ~18% net versus ~14% for cleaning businesses. Subscription contracts, low material costs (8–14%), and route density drive pest control profitability. Cleaning margins are compressed by labor intensity (40–55% payroll) and competitive pricing.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Pest control dominates recurring revenue with quarterly treatment contracts representing 70–90% of income. Cleaning recurring schedules represent 50–75% of revenue — solid but lower than pest control's subscription model and more vulnerable to client churn.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Cleaning businesses are the lowest-capital entry at $10K–$75K for basic supplies, a vehicle, and marketing. Pest control requires $50K–$150K for vehicles, chemical inventory, and licensing but offers significantly higher scaling and exit potential.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Pest control businesses sell at 2.5×–4.0× SDE (median ~3.2×) while cleaning companies trade at 1.8×–3.0× SDE (median ~2.4×). Buyers pay premiums for pest control's subscription revenue, PE acquisition interest, and route density economics.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "A cleaning business offers the simplest operations, lowest startup cost, and no licensing barriers — ideal for solo operators. Pest control offers higher long-term revenue ceiling, stronger margins, and acquisition-friendly economics but requires chemical licensing and regulatory compliance.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let pestControl = 0;
  let cleaning = 0;

  if (inputs.clinicalInterest === "specialty") pestControl += 2;
  else cleaning += 2;

  if (inputs.revenueGoal === "very-high") pestControl += 3;
  else if (inputs.revenueGoal === "high") pestControl += 2;
  else cleaning += 2;

  if (inputs.insuranceComfort === "high") pestControl += 3;
  else if (inputs.insuranceComfort === "medium") {
    pestControl += 2;
    cleaning += 1;
  } else cleaning += 2;

  if (inputs.growthAmbition === "multi-location") pestControl += 3;
  else if (inputs.growthAmbition === "regional") pestControl += 2;
  else cleaning += 2;

  return pestControl >= cleaning ? "Pest Control" : "Cleaning Business";
}

export const decisionToolCopy = {
  left:
    "Pest control is the better fit — premium margins, higher recurring revenue, route economics, PE acquisition interest, and stronger valuation multiples.",
  right:
    "A cleaning business aligns with your goals — lowest startup cost, simplest operations, no chemical licensing, and fast solo-operator break-even.",
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
