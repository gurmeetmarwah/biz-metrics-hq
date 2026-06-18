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
  slug: "landscaping-vs-roofing",
  title: "Landscaping vs Roofing",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, crew productivity, seasonality, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...landscapingHubLabels,
  right: "Roofing",
} as const;

export const decisionSnapshot = [
  { factor: "Revenue Predictability", winner: "Landscaping" },
  { factor: "Peak Revenue Potential", winner: "Roofing" },
  { factor: "Lower Startup Cost", winner: "Landscaping" },
  { factor: "Recurring Revenue", winner: "Landscaping" },
  { factor: "Revenue Per Crew", winner: "Roofing" },
  { factor: "Profit Margin Stability", winner: "Landscaping" },
  { factor: "Year-Round Operations", winner: "Landscaping" },
  { factor: "Valuation Multiples", winner: "Roofing" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: landscapingKpis.annualRevenue, right: "$800K – $4.5M" },
  { metric: "Net Profit Margin", left: landscapingKpis.netMargin, right: "6 – 15%" },
  { metric: "Owner Compensation", left: landscapingKpis.ownerComp, right: "$80K – $220K" },
  { metric: "Revenue Per Crew", left: landscapingKpis.revenuePerCrew, right: "$400K – $900K/crew" },
  { metric: "Startup Cost", left: landscapingKpis.startup, right: "$100K – $350K" },
  { metric: "Business Value", left: landscapingKpis.valuation, right: "2.0× – 3.2× SDE" },
  { metric: "Recurring Contract %", left: landscapingKpis.maintenancePct, right: "5 – 15%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Stability", left: 8, right: 5, winner: "Landscaping" },
  { label: "Peak Earnings Potential", left: 6, right: 9, winner: "Roofing" },
  { label: "Recurring Revenue", left: 9, right: 2, winner: "Landscaping" },
  { label: "Capital Efficiency", left: 8, right: 7, winner: "Landscaping" },
] as const;

export const leftRevenueSources = landscapingRevenueSources;

export const rightRevenueSources = [
  "Residential Roof Replacement",
  "Storm & Insurance Restoration",
  "Roof Repairs",
  "Commercial Roofing",
  "Gutter & Exterior Add-Ons",
] as const;

export const revenueFunnel = {
  left: [...landscapingRevenueFunnel],
  right: ["Lead/Storm", "Inspection", "Estimate", "Install", "Insurance Close", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...landscapingCustomerFunnel],
  right: ["Homeowner", "Inspection", "Replacement/Repair", "Insurance Claim", "Referral"],
} as const;

export const operatoryFunnel = {
  left: [...landscapingOperatoryFunnel],
  right: ["Crew", "Installs", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "8 – 30 crew members", right: "2 – 8 install crews" },
  { driver: "Average Ticket", left: "$45 – $120 (weekly)", right: "$8K – $22K (install)" },
  { driver: "Project Ticket", left: "$3K – $25K (install)", right: "$12K – $28K" },
  { driver: "Recurring Revenue", left: "35 – 55% (maintenance)", right: "5 – 15%" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$800 – $2,400", right: "$1,500 – $4,500" },
  { metric: "Visits Per Year", left: "26 – 40 (weekly service)", right: "1 – 2 (install cycle)" },
  { metric: "Average Ticket", left: "$45 – $120/week", right: "$8K – $22K" },
  { metric: "Contract Retention", left: "75 – 90%", right: "Low – Moderate" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Crew", left: "$200K – $350K", right: "$400K – $900K/crew" },
  { metric: "Jobs Per Period", left: "12 – 25 properties/day", right: "4 – 8 installs/month" },
  { metric: "Labor Cost % of Revenue", left: "40 – 55%", right: "25 – 35%" },
] as const;

export const marginTiers = {
  left: landscapingMarginTiers,
  right: { weak: "3 – 6%", average: "7 – 11%", strong: "12 – 15%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "40 – 55%", right: "25 – 35%" },
  { expense: "Materials", left: "12 – 20%", right: "30 – 42%" },
  { expense: "Fleet & Equipment", left: "8 – 14%", right: "5 – 8%" },
  { expense: "Marketing", left: "4 – 8%", right: "8 – 14%" },
] as const;

export const insuranceHighlights = {
  left: landscapingInsuranceHighlight,
  right: { title: "Storm Revenue Driver", value: "20 – 40% insurance restoration" },
} as const;

export const insuranceComparison = [
  { metric: "Maintenance/Recurring Revenue", left: "35 – 55%", right: "5 – 15%" },
  { metric: "Insurance/Storm Revenue", left: "Low", right: "20 – 40%" },
  { metric: "Project-Based Revenue", left: "15 – 30%", right: "70 – 85%" },
  { metric: "Weather Dependency", left: "Moderate – High", right: "High" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Landscaping Owner", earnings: "$70K – $95K", type: "left" },
  { model: "Multi-Crew Landscaping Operator", earnings: "$120K – $200K+", type: "left" },
  { model: "Small Roofing Owner", earnings: "$80K – $130K", type: "right" },
  { model: "Storm-Market Roofing Operator", earnings: "$150K – $400K+", type: "right" },
] as const;

export const leftStartupItems = landscapingStartupItems;

export const rightStartupItems = [
  { item: "Trucks & Equipment", percent: 25 },
  { item: "Tools & Safety Gear", percent: 15 },
  { item: "Marketing Launch", percent: 25 },
  { item: "Working Capital", percent: 35 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: landscapingStartupSideBySide.equipment, right: "$40K – $120K" },
  { category: "Vehicles", left: landscapingStartupSideBySide.vehicles, right: "Included above" },
  { category: "Marketing Launch", left: landscapingStartupSideBySide.marketing, right: "$30K – $80K" },
  { category: "Total Launch Budget", left: landscapingStartupSideBySide.total, right: "$100K – $350K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: landscapingValuation.sde, right: "2.0× – 3.2×" },
  { metric: "Revenue Multiple", left: landscapingValuation.revenue, right: "0.4× – 0.8×" },
  { metric: "EBITDA Multiple", left: landscapingValuation.ebitda, right: "3.0× – 5.0×" },
] as const;

export const valuationExamples = {
  left: landscapingValuation.example,
  right: { revenue: "$2.0M", value: "$640K – $1.15M", note: "2.6× SDE on $360K SDE" },
} as const;

export const valuationExampleTitle = "$1M+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$60K – $100K", right: "$100K – $180K" },
  { metric: "Accounts/Jobs Needed", left: "150 – 350 weekly accounts", right: "12 – 25 installs/month" },
  { metric: "Months To Break-Even", left: "6 – 14 months", right: "8 – 18 months" },
  { metric: "Crews at Break-Even", left: "2 – 4 crews", right: "2 – 4 crews" },
] as const;

export const scalingLadder = {
  left: [...landscapingScalingLadder],
  right: ["1 Crew", "Storm Marketing", "3 – 5 Crews", "Regional Brand"],
} as const;

export const scalingLeftTitle = "Landscaping Growth Path";
export const scalingRightTitle = "Roofing Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: landscapingCapitalEfficiency,
  right: { revenue: "$1.2M – $3.5M", profit: "$120K – $380K net profit", payback: "2 – 4 years" },
} as const;

export const chooseLeftTitle = "Choose Landscaping If";
export const chooseRightTitle = "Choose Roofing If";

export const chooseLeft = [
  "You want recurring maintenance revenue and predictable weekly cash flow",
  "You prefer route-based operations over project-based install cycles",
  "You want lower startup costs and faster break-even with a small crew",
  "You value commercial contract books and customer retention over storm spikes",
  "You want a business model with 35–55% recurring revenue penetration",
] as const;

export const chooseRight = [
  "You're in a storm-prone market with strong insurance restoration demand",
  "You want high-ticket project revenue and higher revenue per crew",
  "You can manage weather-dependent scheduling and sales-driven growth",
  "You want upside from hail/wind events and large replacement projects",
  "You're comfortable with project-heavy revenue and lower recurring mix",
] as const;

export const calculators = landscapingCalculators;

export const relatedComparisons = [
  { label: "Landscaping vs HVAC", href: "/comparisons/landscaping-vs-hvac/" },
  { label: "Landscaping vs Plumbing", href: "/comparisons/landscaping-vs-plumbing/" },
  { label: "Landscaping vs Pest Control", href: "/comparisons/landscaping-vs-pest-control/" },
  { label: "Landscaping Industry Hub", href: "/industries/landscaping/" },
] as const;

export const faqs = [
  {
    question: "Which is more profitable — landscaping or roofing?",
    answer:
      "Landscaping offers more stable recurring revenue (35–55% maintenance) with median ~8% net margin. Roofing margins range 7–15% with higher volatility — storm years can produce exceptional profits while slow years compress margins. Landscaping is more predictable; roofing has higher upside in event-driven markets.",
  },
  {
    question: "Which generates more revenue?",
    answer:
      "Roofing has higher peak revenue potential — median ~$2.0M with storm operators exceeding $4M. Landscaping median is ~$1.1M with steadier growth through route density and commercial contracts. Roofing wins on peak potential; landscaping wins on consistency.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Landscaping dominates recurring revenue with weekly maintenance contracts representing 35–55% of income. Roofing is overwhelmingly project-based — repairs and replacements drive 70–85% of revenue with minimal recurring penetration (5–15%).",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Landscaping startups typically require $75K–$250K versus $100K–$350K for roofing. Landscaping can launch with mowers, a truck, and a small crew. Roofing needs safety equipment, material relationships, and often stronger sales infrastructure.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Roofing businesses sell at 2.0×–3.2× SDE (median ~2.6×) while landscaping companies trade at 1.8×–2.8× SDE (median ~2.2×). Buyers pay premiums for roofing's higher revenue per crew but discount weather dependency and project volatility.",
  },
  {
    question: "Which is better in storm markets?",
    answer:
      "Roofing benefits disproportionately from hail, wind, and hurricane markets — insurance restoration can represent 20–40% of revenue. Landscaping operates in storm markets but benefits from cleanup and repair work rather than full replacement cycles tied to insurance claims.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let landscaping = 0;
  let roofing = 0;

  if (inputs.clinicalInterest === "specialty") roofing += 2;
  else landscaping += 2;

  if (inputs.revenueGoal === "very-high") roofing += 2;
  else if (inputs.revenueGoal === "high") {
    landscaping += 1;
    roofing += 2;
  } else landscaping += 2;

  if (inputs.insuranceComfort === "high") landscaping += 2;
  else roofing += 1;

  if (inputs.growthAmbition === "multi-location") roofing += 2;
  else if (inputs.growthAmbition === "regional") {
    landscaping += 2;
    roofing += 2;
  } else landscaping += 2;

  return landscaping >= roofing ? "Landscaping" : "Roofing";
}

export const decisionToolCopy = {
  left:
    "Landscaping aligns with your goals — recurring maintenance revenue, route-based operations, lower startup costs, and predictable weekly cash flow.",
  right:
    "Roofing is the better fit — high-ticket projects, storm-market upside, higher revenue per crew, and faster scaling in project-heavy models.",
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
