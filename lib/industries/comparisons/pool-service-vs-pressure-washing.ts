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
  slug: "pool-service-vs-pressure-washing",
  title: "Pool Service vs Pressure Washing",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, route economics, recurring revenue, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...poolServiceHubLabels,
  right: "Pressure Washing",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Pool Service" },
  { factor: "Higher Profit Margins", winner: "Pressure Washing" },
  { factor: "Lower Startup Cost", winner: "Pressure Washing" },
  { factor: "Recurring Revenue", winner: "Pool Service" },
  { factor: "Revenue Per Technician", winner: "Pool Service" },
  { factor: "Service Frequency", winner: "Pool Service" },
  { factor: "Valuation Multiples", winner: "Pool Service" },
  { factor: "Route Predictability", winner: "Pool Service" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: poolServiceKpis.annualRevenue, right: "$400K – $1.2M" },
  { metric: "Net Profit Margin", left: poolServiceKpis.netMargin, right: "18 – 28%" },
  { metric: "Owner Compensation", left: poolServiceKpis.ownerComp, right: "$80K – $150K" },
  { metric: "Revenue Per Technician", left: poolServiceKpis.revenuePerTech, right: "$140K – $200K" },
  { metric: "Startup Cost", left: poolServiceKpis.startup, right: "$35K – $90K" },
  { metric: "Business Value", left: poolServiceKpis.valuation, right: "2.0× – 3.2× SDE" },
  { metric: "Recurring Contract %", left: poolServiceKpis.recurringPct, right: "30 – 50%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 7, right: 5, winner: "Pool Service" },
  { label: "Profit Margin", left: 8, right: 8, winner: "Pressure Washing" },
  { label: "Recurring Revenue", left: 10, right: 5, winner: "Pool Service" },
  { label: "Low Capital Entry", left: 7, right: 10, winner: "Pressure Washing" },
] as const;

export const leftRevenueSources = poolServiceRevenueSources;

export const rightRevenueSources = [
  "Residential Driveway & Patio Cleaning",
  "House Soft Washing",
  "Commercial Property Washing",
  "Fleet & Equipment Cleaning",
  "Graffiti & Surface Restoration",
] as const;

export const revenueFunnel = {
  left: [...poolServiceRevenueFunnel],
  right: ["Lead", "Estimate", "Job Booking", "Service", "Recurring Schedule", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...poolServiceCustomerFunnel],
  right: ["Homeowner", "One-Time Clean", "Annual Schedule", "Commercial Contract", "Referral"],
} as const;

export const operatoryFunnel = {
  left: [...poolServiceOperatoryFunnel],
  right: ["Crew", "Jobs", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "2 – 8 technicians", right: "1 – 6 crew members" },
  { driver: "Average Service Ticket", left: "$120 – $185 (weekly)", right: "$250 – $600" },
  { driver: "Annual Contract Value", left: "$2,400 – $4,800", right: "$400 – $1,200" },
  { driver: "Recurring Revenue", left: "75 – 85% of revenue", right: "30 – 50% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$2,000 – $5,500", right: "$800 – $2,200" },
  { metric: "Visits Per Year", left: "26 – 40 (weekly)", right: "1 – 4" },
  { metric: "Average Ticket", left: "$120 – $185/week", right: "$250 – $600" },
  { metric: "Contract Retention", left: "85 – 94%", right: "60 – 75%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Technician/Crew", left: "$160K – $220K", right: "$140K – $200K" },
  { metric: "Jobs Per Day", left: "18 – 28 pools", right: "3 – 6 jobs" },
  { metric: "Labor Cost % of Revenue", left: "28 – 38%", right: "25 – 35%" },
] as const;

export const marginTiers = {
  left: poolServiceMarginTiers,
  right: { weak: "12 – 16%", average: "18 – 22%", strong: "24 – 28%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "28 – 38%", right: "25 – 35%" },
  { expense: "Materials/Chemicals", left: "10 – 16%", right: "5 – 10%" },
  { expense: "Fleet & Equipment", left: "6 – 10%", right: "8 – 14%" },
  { expense: "Marketing", left: "6 – 10%", right: "8 – 14%" },
] as const;

export const insuranceHighlights = {
  left: poolServiceInsuranceHighlight,
  right: { title: "Low Overhead Model", value: "Minimal inventory & materials" },
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "75 – 85%", right: "30 – 50%" },
  { metric: "One-Time/Project Revenue", left: "10 – 20%", right: "50 – 70%" },
  { metric: "Commercial Contract Revenue", left: "15 – 30%", right: "20 – 40%" },
  { metric: "Seasonal Revenue Swing", left: "Low – Moderate", right: "Moderate – High" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Pool Service Owner", earnings: "$95K – $130K", type: "left" },
  { model: "Multi-Route Pool Service Operator", earnings: "$160K – $250K+", type: "left" },
  { model: "Solo Pressure Washing Operator", earnings: "$60K – $90K", type: "right" },
  { model: "Multi-Crew Pressure Washing Operator", earnings: "$100K – $180K+", type: "right" },
] as const;

export const leftStartupItems = poolServiceStartupItems;

export const rightStartupItems = [
  { item: "Pressure Washer & Equipment", percent: 40 },
  { item: "Truck & Trailer", percent: 25 },
  { item: "Marketing Launch", percent: 15 },
  { item: "Working Capital", percent: 20 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: poolServiceStartupSideBySide.equipment, right: "$12K – $35K" },
  { category: "Vehicles", left: poolServiceStartupSideBySide.vehicle, right: "$10K – $30K" },
  { category: "Marketing Launch", left: poolServiceStartupSideBySide.marketing, right: "$5K – $15K" },
  { category: "Total Launch Budget", left: poolServiceStartupSideBySide.total, right: "$35K – $90K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: poolServiceValuation.sde, right: "2.0× – 3.2×" },
  { metric: "Revenue Multiple", left: poolServiceValuation.revenue, right: "0.5× – 0.9×" },
  { metric: "EBITDA Multiple", left: poolServiceValuation.ebitda, right: "3.0× – 5.0×" },
] as const;

export const valuationExamples = {
  left: poolServiceValuation.example,
  right: { revenue: "$750K", value: "$400K – $640K", note: "2.6× SDE on $200K SDE" },
} as const;

export const valuationExampleTitle = "$750K+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$45K – $75K", right: "$25K – $45K" },
  { metric: "Accounts Needed (active)", left: "80 – 160 weekly pools", right: "40 – 100 recurring clients" },
  { metric: "Months To Break-Even", left: "4 – 10 months", right: "2 – 6 months" },
  { metric: "Crews at Break-Even", left: "1 – 3 technicians", right: "1 – 2 crews" },
] as const;

export const scalingLadder = {
  left: [...poolServiceScalingLadder],
  right: ["Solo Operator", "1 – 2 Crews", "Commercial Contracts", "Regional Brand"],
} as const;

export const scalingLeftTitle = "Pool Service Growth Path";
export const scalingRightTitle = "Pressure Washing Growth Path";

export const capitalEfficiency = {
  investment: "$100,000",
  left: poolServiceCapitalEfficiency,
  right: { revenue: "$500K – $900K", profit: "$90K – $225K net profit", payback: "1.5 – 3 years" },
} as const;

export const chooseLeftTitle = "Choose Pool Service If";
export const chooseRightTitle = "Choose Pressure Washing If";

export const chooseLeft = [
  "You want the highest recurring revenue percentage and predictable weekly cash flow",
  "You prefer stronger valuation multiples and acquisition-friendly route economics",
  "You want higher revenue per technician and annual contract values",
  "You're building in warm-climate markets with dense residential pool routes",
  "You value weekly service frequency over project-based seasonal work",
] as const;

export const chooseRight = [
  "You want the lowest startup cost and fastest path to profitability",
  "You prefer a simple equipment-based model with minimal inventory",
  "You want strong profit margins on project-based exterior cleaning",
  "You're starting solo or with a small crew and want operational simplicity",
  "You value flexible scheduling without chemical balancing or equipment repair complexity",
] as const;

export const calculators = poolServiceCalculators;

export const relatedComparisons = [
  { label: "Pool Service vs Window Cleaning", href: "/comparisons/pool-service-vs-window-cleaning/" },
  { label: "Pool Service vs Landscaping", href: "/comparisons/pool-service-vs-landscaping/" },
  { label: "Pool Service vs Pest Control", href: "/comparisons/pool-service-vs-pest-control/" },
  { label: "Cleaning Business vs Landscaping", href: "/comparisons/cleaning-business-vs-landscaping/" },
  { label: "Pool Service Industry Hub", href: "/industries/pool-service/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — pool service or pressure washing?",
    answer:
      "Pool service companies typically reach higher median revenue (~$950K vs ~$700K for pressure washing). Pool service benefits from weekly recurring contracts, chemical programs, and repair upsells. Pressure washing revenue is more project-driven with seasonal demand swings.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Both trades offer strong margins — pressure washing median ~22% net versus ~20% for pool service. Pressure washing has lower overhead and minimal inventory. Pool service benefits from weekly visits and chemical program revenue with higher recurring predictability.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Pool service dominates recurring revenue with weekly cleaning contracts representing 75–85% of income. Pressure washing recurring schedules represent 30–50% of revenue — meaningful but far more project-dependent than pool service's subscription model.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Pressure washing is the lower-capital entry at $35K–$90K for equipment, truck, and marketing. Pool service requires $65K–$165K for a service vehicle, vacuum equipment, chemicals, and insurance but offers higher scaling potential through route density.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Pool service businesses often sell at 3.0×–4.5× SDE (median ~3.6×) while pressure washing companies trade at 2.0×–3.2× SDE (median ~2.6×). Buyers pay premiums for pool service's high recurring revenue, contract retention, and route-based cash flow predictability.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "Pressure washing offers the simplest operations, lowest startup cost, and fastest break-even. Pool service offers higher long-term revenue, stronger recurring income, and better valuation multiples but requires chemical knowledge and warm-climate market focus.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let poolService = 0;
  let pressureWashing = 0;

  if (inputs.clinicalInterest === "specialty") poolService += 2;
  else pressureWashing += 2;

  if (inputs.revenueGoal === "very-high") poolService += 3;
  else if (inputs.revenueGoal === "high") poolService += 2;
  else pressureWashing += 2;

  if (inputs.insuranceComfort === "high") poolService += 3;
  else if (inputs.insuranceComfort === "medium") {
    poolService += 2;
    pressureWashing += 1;
  } else pressureWashing += 2;

  if (inputs.growthAmbition === "multi-location") poolService += 3;
  else if (inputs.growthAmbition === "regional") poolService += 2;
  else pressureWashing += 2;

  return poolService >= pressureWashing ? "Pool Service" : "Pressure Washing";
}

export const decisionToolCopy = {
  left:
    "Pool service is the better fit — 75–85% recurring route revenue, higher revenue ceiling, stronger valuation multiples, and predictable weekly contract cash flow.",
  right:
    "Pressure washing aligns with your goals — lowest startup cost, fastest break-even, strong margins, and simple equipment-based operations.",
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
