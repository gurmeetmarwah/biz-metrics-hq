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
  slug: "pest-control-vs-lawn-care",
  title: "Pest Control vs Lawn Care",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, route economics, recurring revenue, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...pestControlHubLabels,
  right: "Lawn Care",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Pest Control" },
  { factor: "Higher Profit Margins", winner: "Pest Control" },
  { factor: "Lower Startup Cost", winner: "Lawn Care" },
  { factor: "Recurring Revenue", winner: "Lawn Care" },
  { factor: "Revenue Ceiling", winner: "Pest Control" },
  { factor: "Operational Simplicity", winner: "Lawn Care" },
  { factor: "Valuation Multiples", winner: "Pest Control" },
  { factor: "Commercial Upsell Potential", winner: "Pest Control" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: pestControlKpis.annualRevenue, right: "$300K – $1.2M" },
  { metric: "Net Profit Margin", left: pestControlKpis.netMargin, right: "10 – 20%" },
  { metric: "Owner Compensation", left: pestControlKpis.ownerComp, right: "$60K – $120K" },
  { metric: "Revenue Per Crew/Technician", left: pestControlKpis.revenuePerTech, right: "$120K – $200K" },
  { metric: "Startup Cost", left: pestControlKpis.startup, right: "$25K – $75K" },
  { metric: "Business Value", left: pestControlKpis.valuation, right: "1.5× – 2.5× SDE" },
  { metric: "Recurring Contract %", left: pestControlKpis.recurringPct, right: "80 – 95%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 8, right: 5, winner: "Pest Control" },
  { label: "Profit Margin", left: 8, right: 7, winner: "Pest Control" },
  { label: "Recurring Revenue", left: 9, right: 10, winner: "Lawn Care" },
  { label: "Low Capital Entry", left: 7, right: 10, winner: "Lawn Care" },
] as const;

export const leftRevenueSources = pestControlRevenueSources;

export const rightRevenueSources = [
  "Weekly Mowing Routes",
  "Fertilization & Weed Control",
  "Aeration & Overseeding",
  "Leaf Cleanup & Seasonal Services",
  "Basic Bed Maintenance",
] as const;

export const revenueFunnel = {
  left: [...pestControlRevenueFunnel],
  right: ["Lead", "Estimate", "Route Add", "Weekly Service", "Seasonal Upsell", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...pestControlCustomerFunnel],
  right: ["Homeowner", "Weekly Mow", "Fertilization Plan", "Seasonal Add-On", "Renewal"],
} as const;

export const operatoryFunnel = {
  left: [...pestControlOperatoryFunnel],
  right: ["Crew", "Stops", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "3 – 12 technicians", right: "2 – 12 crew members" },
  { driver: "Average Service Ticket", left: "$85 – $175", right: "$30 – $65 (weekly)" },
  { driver: "Annual Contract Value", left: "$350 – $900", right: "$1,200 – $2,400" },
  { driver: "Recurring Revenue", left: "70 – 90% of revenue", right: "80 – 95% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$1,500 – $4,000", right: "$600 – $1,800" },
  { metric: "Visits Per Year", left: "4 – 12 (quarterly+)", right: "26 – 36 (weekly mow)" },
  { metric: "Average Ticket", left: "$85 – $175", right: "$30 – $65/week" },
  { metric: "Contract Retention", left: "80 – 92%", right: "80 – 92%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Crew/Technician", left: "$120K – $200K", right: "$120K – $200K" },
  { metric: "Stops Per Day", left: "10 – 18 accounts", right: "25 – 45 stops/day" },
  { metric: "Labor Cost % of Revenue", left: "25 – 35%", right: "35 – 50%" },
] as const;

export const marginTiers = {
  left: pestControlMarginTiers,
  right: { weak: "6 – 10%", average: "11 – 16%", strong: "17 – 22%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "25 – 35%", right: "35 – 50%" },
  { expense: "Materials/Chemicals", left: "8 – 14%", right: "8 – 14%" },
  { expense: "Fleet & Vehicles", left: "6 – 10%", right: "6 – 12%" },
  { expense: "Marketing", left: "8 – 14%", right: "3 – 7%" },
] as const;

export const insuranceHighlights = {
  left: pestControlInsuranceHighlight,
  right: { title: "Pure Recurring Model", value: "80 – 95% weekly route revenue" },
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "70 – 90%", right: "80 – 95%" },
  { metric: "One-Time/Project Revenue", left: "10 – 30%", right: "0 – 5%" },
  { metric: "Commercial Contract Revenue", left: "20 – 40%", right: "10 – 25%" },
  { metric: "Seasonal Revenue Swing", left: "Moderate", right: "Moderate" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Pest Control Owner", earnings: "$75K – $110K", type: "left" },
  { model: "Multi-Route Pest Control Operator", earnings: "$140K – $250K+", type: "left" },
  { model: "Solo Lawn Care Operator", earnings: "$50K – $75K", type: "right" },
  { model: "Multi-Crew Lawn Care Operator", earnings: "$90K – $140K+", type: "right" },
] as const;

export const leftStartupItems = pestControlStartupItems;

export const rightStartupItems = [
  { item: "Mowers & Equipment", percent: 35 },
  { item: "Truck & Trailer", percent: 25 },
  { item: "Marketing Launch", percent: 15 },
  { item: "Working Capital", percent: 25 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: pestControlStartupSideBySide.equipment, right: "$8K – $25K" },
  { category: "Vehicles", left: pestControlStartupSideBySide.vehicles, right: "$10K – $30K" },
  { category: "Marketing Launch", left: pestControlStartupSideBySide.marketing, right: "$5K – $15K" },
  { category: "Total Launch Budget", left: pestControlStartupSideBySide.total, right: "$25K – $75K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: pestControlValuation.sde, right: "1.5× – 2.5×" },
  { metric: "Revenue Multiple", left: pestControlValuation.revenue, right: "0.25× – 0.50×" },
  { metric: "EBITDA Multiple", left: pestControlValuation.ebitda, right: "2.0× – 3.5×" },
] as const;

export const valuationExamples = {
  left: pestControlValuation.example,
  right: { revenue: "$600K", value: "$180K – $300K", note: "2.0× SDE on $120K SDE" },
} as const;

export const valuationExampleTitle = "$600K+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$40K – $75K", right: "$25K – $45K" },
  { metric: "Accounts Needed (active)", left: "400 – 800 contracts", right: "80 – 180 weekly stops" },
  { metric: "Months To Break-Even", left: "6 – 12 months", right: "3 – 8 months" },
  { metric: "Crews at Break-Even", left: "2 – 5 technicians", right: "1 – 2 crews" },
] as const;

export const scalingLadder = {
  left: [...pestControlScalingLadder],
  right: ["Solo Route", "2 – 3 Crews", "Route Density", "Regional Mowing Brand"],
} as const;

export const scalingLeftTitle = "Pest Control Growth Path";
export const scalingRightTitle = "Lawn Care Growth Path";

export const capitalEfficiency = {
  investment: "$100,000",
  left: pestControlCapitalEfficiency,
  right: { revenue: "$500K – $900K", profit: "$75K – $150K net profit", payback: "1.5 – 3 years" },
} as const;

export const chooseLeftTitle = "Choose Pest Control If";
export const chooseRightTitle = "Choose Lawn Care If";

export const chooseLeft = [
  "You want a higher revenue ceiling and stronger valuation multiples at exit",
  "You prefer commercial and termite upsell opportunities beyond residential routes",
  "You want acquisition-friendly subscription models with PE consolidator interest",
  "You're building toward multi-branch operations with route density economics",
  "You value scalable route economics with quarterly contract retention",
] as const;

export const chooseRight = [
  "You want the lowest startup cost and fastest path to profitability",
  "You prefer a simple, repeatable weekly mowing route model",
  "You want 80–95% recurring revenue with minimal project complexity",
  "You're starting solo or with a small crew and want operational simplicity",
  "You value straightforward outdoor operations without chemical licensing requirements",
] as const;

export const calculators = pestControlCalculators;

export const relatedComparisons = [
  { label: "Pest Control vs HVAC", href: "/comparisons/pest-control-vs-hvac/" },
  { label: "Pest Control vs Cleaning Business", href: "/comparisons/pest-control-vs-cleaning-business/" },
  { label: "Landscaping vs Pest Control", href: "/comparisons/landscaping-vs-pest-control/" },
  { label: "Landscaping vs Lawn Care", href: "/comparisons/landscaping-vs-lawn-care/" },
  { label: "Pest Control Industry Hub", href: "/industries/pest-control/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — pest control or lawn care?",
    answer:
      "Pest control companies typically reach higher median revenue (~$900K vs ~$550K for lawn care). Pest control benefits from commercial contracts, termite bonds, and higher annual contract values. Lawn care revenue is capped by weekly mowing ticket sizes and route density limits.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Pest control has a structural margin advantage — median ~18% net versus ~14% for lawn care. Subscription contracts, low material costs, and route density drive pest control profitability. Lawn care margins are solid on pure mowing routes but face intense price competition.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Lawn care edges pest control on pure recurring percentage — weekly mowing routes represent 80–95% of income versus 70–90% for pest control quarterly contracts. However, pest control contracts have higher dollar values and stronger commercial upsell potential.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Lawn care is the lower-capital entry at $25K–$75K for a truck, mowers, and initial marketing. Pest control requires $50K–$150K for vehicles, chemical inventory, and licensing but offers higher scaling potential.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Pest control businesses sell at 2.5×–4.0× SDE (median ~3.2×) while lawn care routes trade at 1.5×–2.5× SDE (median ~2.0×). Buyers pay premiums for pest control's commercial contract books, termite revenue, and active PE acquisition interest.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "Lawn care offers the simplest operations, lowest startup cost, and fastest break-even on weekly routes. Pest control offers higher long-term revenue ceiling, stronger valuation multiples, and commercial upsell potential but requires chemical licensing and regulatory compliance.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let pestControl = 0;
  let lawnCare = 0;

  if (inputs.clinicalInterest === "specialty") pestControl += 2;
  else lawnCare += 2;

  if (inputs.revenueGoal === "very-high") pestControl += 3;
  else if (inputs.revenueGoal === "high") pestControl += 2;
  else lawnCare += 2;

  if (inputs.insuranceComfort === "high") pestControl += 2;
  else lawnCare += 2;

  if (inputs.growthAmbition === "multi-location") pestControl += 3;
  else if (inputs.growthAmbition === "regional") pestControl += 2;
  else lawnCare += 2;

  return pestControl >= lawnCare ? "Pest Control" : "Lawn Care";
}

export const decisionToolCopy = {
  left:
    "Pest control is the better fit — higher revenue ceiling, premium valuation multiples, commercial/termite upsells, and scalable route economics.",
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
