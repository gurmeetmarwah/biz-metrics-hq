import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import {
  plumbingCalculators,
  plumbingCapitalEfficiency,
  plumbingCustomerFunnel,
  plumbingHubLabels,
  plumbingInsuranceHighlight,
  plumbingKpis,
  plumbingMarginTiers,
  plumbingOperatoryFunnel,
  plumbingRevenueFunnel,
  plumbingRevenueSources,
  plumbingScalingLadder,
  plumbingStartupItems,
  plumbingStartupSideBySide,
  plumbingValuation,
} from "./plumbing-comparison-shared";

export const comparisonMeta = {
  slug: "plumbing-vs-roofing",
  title: "Plumbing vs Roofing",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, crew productivity, storm-driven demand, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...plumbingHubLabels,
  right: "Roofing",
} as const;

export const decisionSnapshot = [
  { factor: "Revenue Predictability", winner: "Plumbing" },
  { factor: "Peak Revenue Potential", winner: "Roofing" },
  { factor: "Lower Startup Cost", winner: "Roofing" },
  { factor: "Recurring Revenue", winner: "Plumbing" },
  { factor: "Emergency Call Volume", winner: "Plumbing" },
  { factor: "Profit Margin Stability", winner: "Plumbing" },
  { factor: "Year-Round Operations", winner: "Plumbing" },
  { factor: "Valuation Multiples", winner: "Plumbing" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: plumbingKpis.annualRevenue, right: "$800K – $4.5M" },
  { metric: "Net Profit Margin", left: plumbingKpis.netMargin, right: "6 – 15%" },
  { metric: "Owner Compensation", left: plumbingKpis.ownerComp, right: "$80K – $220K" },
  { metric: "Revenue Per Crew", left: "$150K – $280K/plumber", right: "$400K – $900K/crew" },
  { metric: "Startup Cost", left: plumbingKpis.startup, right: "$100K – $350K" },
  { metric: "Business Value", left: plumbingKpis.valuation, right: "2.0× – 3.2× SDE" },
  { metric: "Revenue Volatility", left: "Low – Moderate", right: "High" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Stability", left: 9, right: 6, winner: "Plumbing" },
  { label: "Peak Earnings Potential", left: 7, right: 9, winner: "Roofing" },
  { label: "Emergency Demand", left: 10, right: 4, winner: "Plumbing" },
  { label: "Capital Efficiency", left: 8, right: 9, winner: "Roofing" },
] as const;

export const leftRevenueSources = plumbingRevenueSources;

export const rightRevenueSources = [
  "Residential Roof Replacement",
  "Storm & Insurance Restoration",
  "Roof Repairs",
  "Commercial Roofing",
  "Gutter & Exterior Add-Ons",
] as const;

export const revenueFunnel = {
  left: [...plumbingRevenueFunnel],
  right: ["Lead/Storm", "Inspection", "Estimate", "Install", "Insurance Close", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...plumbingCustomerFunnel],
  right: ["Homeowner", "Inspection", "Replacement/Repair", "Insurance Claim", "Referral"],
} as const;

export const operatoryFunnel = {
  left: [...plumbingOperatoryFunnel],
  right: ["Crew", "Jobs", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Model", left: "4 – 14 plumbers", right: "2 – 8 install crews" },
  { driver: "Average Service Ticket", left: "$275 – $525", right: "$450 – $1,200" },
  { driver: "Replacement Ticket", left: "$2K – $8K", right: "$8K – $22K" },
  { driver: "Recurring Revenue", left: "10 – 25% of revenue", right: "5 – 15% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$1,200 – $3,200", right: "$2,000 – $8,000" },
  { metric: "Repeat Visits Per Year", left: "1 – 3", right: "0.2 – 0.8" },
  { metric: "Average Ticket", left: "$275 – $525", right: "$8K – $22K (replacement)" },
  { metric: "Insurance-Driven Revenue", left: "Low", right: "20 – 40% in storm markets" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Technician/Crew", left: "$150K – $280K", right: "$400K – $900K/crew" },
  { metric: "Jobs Per Day", left: "4 – 8", right: "1 – 2 (install)" },
  { metric: "Crew Utilization", left: "75 – 90%", right: "60 – 85% (weather-dependent)" },
] as const;

export const marginTiers = {
  left: plumbingMarginTiers,
  right: { weak: "3 – 6%", average: "7 – 11%", strong: "12 – 15%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "30 – 40%", right: "25 – 35%" },
  { expense: "Materials", left: "16 – 24%", right: "30 – 42%" },
  { expense: "Fleet & Equipment", left: "5 – 9%", right: "5 – 8%" },
  { expense: "Marketing", left: "6 – 10%", right: "8 – 14%" },
] as const;

export const insuranceHighlights = {
  left: plumbingInsuranceHighlight,
  right: { title: "Storm Revenue Driver", value: "20 – 40% insurance restoration" },
} as const;

export const insuranceComparison = [
  { metric: "Maintenance/Recurring Revenue", left: "10 – 25%", right: "5 – 15%" },
  { metric: "Insurance/Storm Revenue", left: "Low – Moderate", right: "20 – 40%" },
  { metric: "Project-Based Revenue", left: "25 – 40%", right: "70 – 85%" },
  { metric: "Weather Dependency", left: "Low", right: "High" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Plumbing Owner", earnings: "$85K – $115K", type: "left" },
  { model: "Multi-Crew Plumbing Operator", earnings: "$150K – $280K+", type: "left" },
  { model: "Small Roofing Owner", earnings: "$80K – $130K", type: "right" },
  { model: "Storm-Market Roofing Operator", earnings: "$150K – $400K+", type: "right" },
] as const;

export const leftStartupItems = plumbingStartupItems;

export const rightStartupItems = [
  { item: "Trucks & Equipment", percent: 25 },
  { item: "Tools & Safety Gear", percent: 15 },
  { item: "Marketing Launch", percent: 25 },
  { item: "Working Capital", percent: 35 },
] as const;

export const startupSideBySide = [
  { category: "Vehicles & Equipment", left: plumbingStartupSideBySide.vehicles, right: "$40K – $120K" },
  { category: "Tools & Inventory", left: plumbingStartupSideBySide.inventory, right: "$15K – $50K" },
  { category: "Marketing Launch", left: plumbingStartupSideBySide.marketing, right: "$30K – $80K" },
  { category: "Total Launch Budget", left: plumbingStartupSideBySide.total, right: "$100K – $350K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: plumbingValuation.sde, right: "2.0× – 3.2×" },
  { metric: "Revenue Multiple", left: plumbingValuation.revenue, right: "0.4× – 0.8×" },
  { metric: "EBITDA Multiple", left: plumbingValuation.ebitda, right: "3.0× – 5.0×" },
] as const;

export const valuationExamples = {
  left: plumbingValuation.example,
  right: { revenue: "$2.0M", value: "$640K – $1.15M", note: "2.6× SDE on $360K SDE" },
} as const;

export const valuationExampleTitle = "$2M Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$120K – $180K", right: "$100K – $180K" },
  { metric: "Jobs Needed (monthly)", left: "280 – 450 jobs", right: "12 – 25 installs" },
  { metric: "Months To Break-Even", left: "10 – 20 months", right: "8 – 18 months" },
  { metric: "Crews/Techs at Break-Even", left: "4 – 8 plumbers", right: "2 – 4 crews" },
] as const;

export const scalingLadder = {
  left: [...plumbingScalingLadder],
  right: ["1 Crew", "Storm Marketing", "3 – 5 Crews", "Regional Brand"],
} as const;

export const scalingLeftTitle = "Plumbing Growth Path";
export const scalingRightTitle = "Roofing Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: plumbingCapitalEfficiency,
  right: { revenue: "$1.2M – $3.5M", profit: "$120K – $380K net profit", payback: "2 – 4 years" },
} as const;

export const chooseLeftTitle = "Choose Plumbing If";
export const chooseRightTitle = "Choose Roofing If";

export const chooseLeft = [
  "You want predictable year-round revenue from emergency and repair demand",
  "You prefer steadier operations over weather-driven revenue spikes",
  "You want higher valuation multiples and less project-based volatility",
  "You value frequent service calls and customer retention over one-time installs",
  "You want recession-resistant demand tied to essential water and sewer systems",
] as const;

export const chooseRight = [
  "You're in a storm-prone market with strong insurance restoration demand",
  "You want lower startup costs and faster initial break-even",
  "You prefer high-ticket project revenue over frequent service calls",
  "You can manage weather-dependent scheduling and crew utilization",
  "You want upside from hail/wind events and large replacement projects",
] as const;

export const calculators = plumbingCalculators;

export const relatedComparisons = [
  { label: "Plumbing vs HVAC", href: "/comparisons/plumbing-vs-hvac/" },
  { label: "Plumbing vs Electrical", href: "/comparisons/plumbing-vs-electrical/" },
  { label: "Plumbing vs Landscaping", href: "/comparisons/plumbing-vs-landscaping/" },
  { label: "Plumbing vs Pest Control", href: "/comparisons/plumbing-vs-pest-control/" },
  { label: "Plumbing Industry Hub", href: "/industries/plumbing/" },
] as const;

export const faqs = [
  {
    question: "Which is more profitable — plumbing or roofing?",
    answer:
      "Plumbing typically offers more stable margins (median ~11% net) with steady emergency and repair demand. Roofing margins range 7–15% with higher volatility — storm years can produce exceptional profits while slow years compress margins. Plumbing is more predictable; roofing has higher upside in event-driven markets.",
  },
  {
    question: "Which generates more revenue?",
    answer:
      "Plumbing has a higher median (~$1.6M) with tighter distribution. Roofing revenue is more volatile — median operators run $1.2M–$2.0M, but storm-market companies can exceed $4M in peak years. Plumbing wins on consistency; roofing wins on peak potential.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Plumbing has more service-based repeat demand through emergency calls and maintenance plans (10–25% contract revenue). Roofing is overwhelmingly project-based — repairs and replacements drive 70–85% of revenue, with minimal recurring contract penetration (5–15%).",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Roofing startups typically require $100K–$350K versus $150K–$400K for plumbing. Roofing needs fewer specialized tools and can launch with a small crew and basic equipment. Plumbing requires licensing, diagnostic tools, and vehicle inventory but offers steadier cash flow.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Plumbing businesses sell at 2.2×–3.5× SDE (median ~2.8×) while roofing companies trade at 2.0×–3.2× SDE (median ~2.6×). Buyers discount roofing for weather dependency, insurance claim concentration, and revenue volatility.",
  },
  {
    question: "Which is better in storm markets?",
    answer:
      "Roofing benefits disproportionately from hail, wind, and hurricane markets — insurance restoration can represent 20–40% of revenue. Plumbing still operates in storm markets but benefits mainly from pipe damage and water intrusion repairs rather than full replacement cycles tied to insurance claims.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let plumbing = 0;
  let roofing = 0;

  if (inputs.clinicalInterest === "specialty") roofing += 2;
  else plumbing += 2;

  if (inputs.revenueGoal === "very-high") roofing += 2;
  else if (inputs.revenueGoal === "high") {
    plumbing += 2;
    roofing += 1;
  } else plumbing += 2;

  if (inputs.insuranceComfort === "high") plumbing += 2;
  else roofing += 1;

  if (inputs.growthAmbition === "multi-location") plumbing += 2;
  else if (inputs.growthAmbition === "regional") {
    plumbing += 2;
    roofing += 2;
  } else roofing += 2;

  return plumbing >= roofing ? "Plumbing" : "Roofing";
}

export const decisionToolCopy = {
  left:
    "Plumbing aligns with your goals — predictable emergency demand, stable margins, year-round operations, and stronger valuation multiples.",
  right:
    "Roofing is the better fit — lower startup costs, high-ticket projects, storm-market upside, and faster break-even in project-heavy models.",
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
