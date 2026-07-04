import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
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
  slug: "pool-service-vs-window-cleaning",
  title: "Pool Service vs Window Cleaning",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, route economics, recurring revenue, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...poolServiceHubLabels,
  right: "Window Cleaning",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Pool Service" },
  { factor: "Higher Profit Margins", winner: "Window Cleaning" },
  { factor: "Lower Startup Cost", winner: "Window Cleaning" },
  { factor: "Recurring Revenue", winner: "Pool Service" },
  { factor: "Revenue Per Technician", winner: "Pool Service" },
  { factor: "Service Frequency", winner: "Pool Service" },
  { factor: "Valuation Multiples", winner: "Pool Service" },
  { factor: "Route Predictability", winner: "Pool Service" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: poolServiceKpis.annualRevenue, right: "$350K – $1M" },
  { metric: "Net Profit Margin", left: poolServiceKpis.netMargin, right: "20 – 30%" },
  { metric: "Owner Compensation", left: poolServiceKpis.ownerComp, right: "$75K – $140K" },
  { metric: "Revenue Per Technician", left: poolServiceKpis.revenuePerTech, right: "$130K – $190K" },
  { metric: "Startup Cost", left: poolServiceKpis.startup, right: "$25K – $75K" },
  { metric: "Business Value", left: poolServiceKpis.valuation, right: "2.0× – 3.0× SDE" },
  { metric: "Recurring Contract %", left: poolServiceKpis.recurringPct, right: "40 – 60%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 8, right: 4, winner: "Pool Service" },
  { label: "Profit Margin", left: 8, right: 9, winner: "Window Cleaning" },
  { label: "Recurring Revenue", left: 10, right: 6, winner: "Pool Service" },
  { label: "Low Capital Entry", left: 6, right: 10, winner: "Window Cleaning" },
] as const;

export const leftRevenueSources = poolServiceRevenueSources;

export const rightRevenueSources = [
  "Residential Window Cleaning",
  "Commercial Storefront Cleaning",
  "High-Rise & Specialty Glass",
  "Gutter Cleaning Add-On",
  "Pressure Washing Bundles",
] as const;

export const revenueFunnel = {
  left: [...poolServiceRevenueFunnel],
  right: ["Lead", "Estimate", "Route Add", "Service", "Recurring Schedule", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...poolServiceCustomerFunnel],
  right: ["Homeowner", "Initial Clean", "Monthly/Quarterly Route", "Commercial Contract", "Renewal"],
} as const;

export const operatoryFunnel = {
  left: [...poolServiceOperatoryFunnel],
  right: ["Crew", "Stops", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "2 – 8 technicians", right: "1 – 5 crew members" },
  { driver: "Average Service Ticket", left: "$120 – $185 (weekly)", right: "$80 – $200" },
  { driver: "Annual Contract Value", left: "$2,400 – $4,800", right: "$400 – $1,600" },
  { driver: "Recurring Revenue", left: "75 – 85% of revenue", right: "40 – 60% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$2,000 – $5,500", right: "$600 – $1,800" },
  { metric: "Visits Per Year", left: "26 – 40 (weekly)", right: "4 – 12" },
  { metric: "Average Ticket", left: "$120 – $185/week", right: "$80 – $200" },
  { metric: "Contract Retention", left: "85 – 94%", right: "70 – 85%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Technician/Crew", left: "$160K – $220K", right: "$130K – $190K" },
  { metric: "Stops Per Day", left: "18 – 28 pools", right: "15 – 30 stops" },
  { metric: "Labor Cost % of Revenue", left: "28 – 38%", right: "30 – 42%" },
] as const;

export const marginTiers = {
  left: poolServiceMarginTiers,
  right: { weak: "14 – 18%", average: "20 – 24%", strong: "26 – 30%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "28 – 38%", right: "30 – 42%" },
  { expense: "Materials/Supplies", left: "10 – 16%", right: "3 – 8%" },
  { expense: "Fleet & Equipment", left: "6 – 10%", right: "5 – 10%" },
  { expense: "Marketing", left: "6 – 10%", right: "6 – 12%" },
] as const;

export const insuranceHighlights = {
  left: poolServiceInsuranceHighlight,
  right: { title: "Ultra-Low Overhead", value: "Minimal materials & inventory" },
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "75 – 85%", right: "40 – 60%" },
  { metric: "One-Time/Project Revenue", left: "10 – 20%", right: "40 – 60%" },
  { metric: "Commercial Contract Revenue", left: "15 – 30%", right: "25 – 45%" },
  { metric: "Seasonal Revenue Swing", left: "Low – Moderate", right: "Moderate" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Pool Service Owner", earnings: "$95K – $130K", type: "left" },
  { model: "Multi-Route Pool Service Operator", earnings: "$160K – $250K+", type: "left" },
  { model: "Solo Window Cleaning Operator", earnings: "$55K – $85K", type: "right" },
  { model: "Multi-Crew Window Cleaning Operator", earnings: "$95K – $160K+", type: "right" },
] as const;

export const leftStartupItems = poolServiceStartupItems;

export const rightStartupItems = [
  { item: "Equipment & Supplies", percent: 30 },
  { item: "Vehicle", percent: 30 },
  { item: "Marketing Launch", percent: 15 },
  { item: "Working Capital", percent: 25 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: poolServiceStartupSideBySide.equipment, right: "$5K – $20K" },
  { category: "Vehicles", left: poolServiceStartupSideBySide.vehicle, right: "$8K – $25K" },
  { category: "Marketing Launch", left: poolServiceStartupSideBySide.marketing, right: "$4K – $12K" },
  { category: "Total Launch Budget", left: poolServiceStartupSideBySide.total, right: "$25K – $75K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: poolServiceValuation.sde, right: "2.0× – 3.0×" },
  { metric: "Revenue Multiple", left: poolServiceValuation.revenue, right: "0.4× – 0.8×" },
  { metric: "EBITDA Multiple", left: poolServiceValuation.ebitda, right: "2.8× – 4.5×" },
] as const;

export const valuationExamples = {
  left: poolServiceValuation.example,
  right: { revenue: "$650K", value: "$312K – $468K", note: "2.4× SDE on $156K SDE" },
} as const;

export const valuationExampleTitle = "$650K+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$45K – $75K", right: "$20K – $40K" },
  { metric: "Accounts Needed (active)", left: "80 – 160 weekly pools", right: "60 – 150 recurring clients" },
  { metric: "Months To Break-Even", left: "4 – 10 months", right: "2 – 5 months" },
  { metric: "Crews at Break-Even", left: "1 – 3 technicians", right: "1 – 2 crews" },
] as const;

export const scalingLadder = {
  left: [...poolServiceScalingLadder],
  right: ["Solo Route", "2 – 3 Crews", "Commercial Contracts", "Regional Route Brand"],
} as const;

export const scalingLeftTitle = "Pool Service Growth Path";
export const scalingRightTitle = "Window Cleaning Growth Path";

export const capitalEfficiency = {
  investment: "$100,000",
  left: poolServiceCapitalEfficiency,
  right: { revenue: "$450K – $800K", profit: "$90K – $200K net profit", payback: "1 – 2.5 years" },
} as const;

export const chooseLeftTitle = "Choose Pool Service If";
export const chooseRightTitle = "Choose Window Cleaning If";

export const chooseLeft = [
  "You want the highest recurring revenue percentage and predictable weekly cash flow",
  "You prefer stronger valuation multiples and acquisition-friendly route economics",
  "You want higher revenue per technician and a larger revenue ceiling",
  "You're building in warm-climate markets with dense residential pool routes",
  "You value weekly service frequency with repair and chemical upsell potential",
] as const;

export const chooseRight = [
  "You want the lowest startup cost and fastest path to profitability",
  "You prefer ultra-low overhead with minimal materials and inventory",
  "You want the highest profit margins in exterior cleaning services",
  "You're starting solo and want the simplest operational model",
  "You value flexible route work without chemical balancing or equipment repair complexity",
] as const;

export const calculators = poolServiceCalculators;

export const relatedComparisons = [
  { label: "Pool Service vs Pressure Washing", href: "/comparisons/pool-service-vs-pressure-washing/" },
  { label: "Pool Service vs Landscaping", href: "/comparisons/pool-service-vs-landscaping/" },
  { label: "Pool Service vs Pest Control", href: "/comparisons/pool-service-vs-pest-control/" },
  { label: "Cleaning Business vs Lawn Care", href: "/comparisons/cleaning-business-vs-lawn-care/" },
  { label: "Pool Service Industry Hub", href: "/industries/pool-service/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — pool service or window cleaning?",
    answer:
      "Pool service companies typically reach higher median revenue (~$950K vs ~$600K for window cleaning). Pool service benefits from weekly recurring contracts, chemical programs, and repair upsells. Window cleaning revenue scales through route density but with lower per-account annual values.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Window cleaning has a slight margin edge — median ~24% net versus ~20% for pool service. Window cleaning has ultra-low material costs (3–8%) and minimal inventory. Pool service offers comparable margins with higher recurring predictability and repair upsell revenue.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Pool service dominates recurring revenue with weekly cleaning contracts representing 75–85% of income. Window cleaning recurring routes represent 40–60% of revenue — stronger than pressure washing but well below pool service's subscription model.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Window cleaning is the lower-capital entry at $25K–$75K for basic equipment, vehicle, and marketing. Pool service requires $65K–$165K for a service vehicle, vacuum equipment, chemicals, and insurance but offers higher scaling potential.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Pool service businesses often sell at 3.0×–4.5× SDE (median ~3.6×) while window cleaning companies trade at 2.0×–3.0× SDE (median ~2.4×). Buyers pay premiums for pool service's high recurring revenue, contract retention, and route-based cash flow predictability.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "Window cleaning offers the simplest operations, lowest startup cost, and fastest break-even. Pool service offers higher long-term revenue, stronger recurring income, and better valuation multiples but requires chemical knowledge and warm-climate market focus.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let poolService = 0;
  let windowCleaning = 0;

  if (inputs.clinicalInterest === "specialty") poolService += 2;
  else windowCleaning += 2;

  if (inputs.revenueGoal === "very-high") poolService += 3;
  else if (inputs.revenueGoal === "high") poolService += 2;
  else windowCleaning += 2;

  if (inputs.insuranceComfort === "high") poolService += 3;
  else if (inputs.insuranceComfort === "medium") {
    poolService += 2;
    windowCleaning += 1;
  } else windowCleaning += 2;

  if (inputs.growthAmbition === "multi-location") poolService += 3;
  else if (inputs.growthAmbition === "regional") poolService += 2;
  else windowCleaning += 2;

  return poolService >= windowCleaning ? "Pool Service" : "Window Cleaning";
}

export const decisionToolCopy = {
  left:
    "Pool service is the better fit — 75–85% recurring route revenue, higher revenue ceiling, stronger valuation multiples, and predictable weekly contract cash flow.",
  right:
    "Window cleaning aligns with your goals — lowest startup cost, highest margins, fastest break-even, and ultra-simple operations.",
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
