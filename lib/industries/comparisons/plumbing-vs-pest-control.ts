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
  slug: "plumbing-vs-pest-control",
  title: "Plumbing vs Pest Control",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, technician productivity, recurring revenue, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...plumbingHubLabels,
  right: "Pest Control",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Plumbing" },
  { factor: "Higher Profit Margins", winner: "Pest Control" },
  { factor: "Lower Startup Cost", winner: "Pest Control" },
  { factor: "Recurring Revenue", winner: "Pest Control" },
  { factor: "Emergency Call Volume", winner: "Plumbing" },
  { factor: "Skilled Trade Barrier", winner: "Plumbing" },
  { factor: "Revenue Per Technician", winner: "Plumbing" },
  { factor: "Valuation Multiples", winner: "Pest Control" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: plumbingKpis.annualRevenue, right: "$400K – $1.8M" },
  { metric: "Net Profit Margin", left: plumbingKpis.netMargin, right: "15 – 25%" },
  { metric: "Owner Compensation", left: plumbingKpis.ownerComp, right: "$75K – $180K" },
  { metric: "Revenue Per Technician", left: plumbingKpis.revenuePerTech, right: "$120K – $200K" },
  { metric: "Startup Cost", left: plumbingKpis.startup, right: "$50K – $150K" },
  { metric: "Business Value", left: plumbingKpis.valuation, right: "2.5× – 4.0× SDE" },
  { metric: "Recurring Contract %", left: "10 – 25%", right: "70 – 90%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 8, right: 6, winner: "Plumbing" },
  { label: "Profit Margin", left: 7, right: 9, winner: "Pest Control" },
  { label: "Recurring Revenue", left: 5, right: 10, winner: "Pest Control" },
  { label: "Low Capital Entry", left: 6, right: 10, winner: "Pest Control" },
] as const;

export const leftRevenueSources = plumbingRevenueSources;

export const rightRevenueSources = [
  "Quarterly Pest Treatments",
  "Termite Inspections & Bonds",
  "Rodent & Wildlife Control",
  "Commercial Pest Contracts",
  "One-Time Infestation Remediation",
] as const;

export const revenueFunnel = {
  left: [...plumbingRevenueFunnel],
  right: ["Lead", "Inspection", "Treatment Plan", "Service", "Recurring Contract", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...plumbingCustomerFunnel],
  right: ["Homeowner", "Initial Treatment", "Quarterly Visits", "Upsell/Add-On", "Renewal"],
} as const;

export const operatoryFunnel = {
  left: [...plumbingOperatoryFunnel],
  right: ["Technician", "Accounts", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "4 – 14 plumbers", right: "3 – 12 technicians" },
  { driver: "Average Service Ticket", left: "$275 – $525", right: "$85 – $175" },
  { driver: "Annual Contract Value", left: "$200 – $600", right: "$350 – $900" },
  { driver: "Recurring Revenue", left: "10 – 25% of revenue", right: "70 – 90% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$1,200 – $3,200", right: "$1,500 – $4,000" },
  { metric: "Visits Per Year", left: "1 – 3", right: "4 – 12 (quarterly+)" },
  { metric: "Average Ticket (Service)", left: "$275 – $525", right: "$85 – $175" },
  { metric: "Contract Retention", left: "40 – 60%", right: "80 – 92%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Technician", left: "$150K – $280K", right: "$120K – $200K" },
  { metric: "Stops Per Day", left: "4 – 8 jobs", right: "10 – 18 accounts" },
  { metric: "Revenue Per Stop", left: "$275 – $525", right: "$85 – $175" },
] as const;

export const marginTiers = {
  left: plumbingMarginTiers,
  right: { weak: "10 – 14%", average: "15 – 20%", strong: "22 – 28%" },
} as const;

export const costStructureComparison = [
  { expense: "Technician Payroll", left: "30 – 40%", right: "25 – 35%" },
  { expense: "Chemicals & Supplies", left: "16 – 24%", right: "8 – 14%" },
  { expense: "Fleet & Vehicles", left: "5 – 9%", right: "6 – 10%" },
  { expense: "Marketing", left: "6 – 10%", right: "8 – 14%" },
] as const;

export const insuranceHighlights = {
  left: plumbingInsuranceHighlight,
  right: { title: "Subscription Revenue Engine", value: "70 – 90% recurring contracts" },
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "10 – 25%", right: "70 – 90%" },
  { metric: "Emergency/One-Time Revenue", left: "20 – 35%", right: "10 – 30%" },
  { metric: "Commercial Contract Revenue", left: "15 – 30%", right: "20 – 40%" },
  { metric: "Seasonal Revenue Swing", left: "Low – Moderate", right: "Moderate" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Plumbing Owner", earnings: "$85K – $115K", type: "left" },
  { model: "Multi-Crew Plumbing Operator", earnings: "$150K – $280K+", type: "left" },
  { model: "Small Pest Control Owner", earnings: "$75K – $110K", type: "right" },
  { model: "Multi-Route Pest Control Operator", earnings: "$140K – $250K+", type: "right" },
] as const;

export const leftStartupItems = plumbingStartupItems;

export const rightStartupItems = [
  { item: "Vehicles & Equipment", percent: 25 },
  { item: "Chemicals & Supplies", percent: 15 },
  { item: "Marketing Launch", percent: 25 },
  { item: "Working Capital", percent: 35 },
] as const;

export const startupSideBySide = [
  { category: "Vehicles & Equipment", left: plumbingStartupSideBySide.vehicles, right: "$20K – $60K" },
  { category: "Chemicals & Supplies", left: plumbingStartupSideBySide.inventory, right: "$8K – $25K" },
  { category: "Marketing Launch", left: plumbingStartupSideBySide.marketing, right: "$15K – $40K" },
  { category: "Total Launch Budget", left: plumbingStartupSideBySide.total, right: "$50K – $150K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: plumbingValuation.sde, right: "2.5× – 4.0×" },
  { metric: "Revenue Multiple", left: plumbingValuation.revenue, right: "0.8× – 1.4×" },
  { metric: "EBITDA Multiple", left: plumbingValuation.ebitda, right: "4.5× – 7.0×" },
] as const;

export const valuationExamples = {
  left: plumbingValuation.example,
  right: { revenue: "$1.0M", value: "$500K – $900K", note: "3.2× SDE on $250K SDE" },
} as const;

export const valuationExampleTitle = "$1M Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$120K – $180K", right: "$40K – $75K" },
  { metric: "Accounts Needed (active)", left: "600 – 1,200 active", right: "400 – 800 contracts" },
  { metric: "Months To Break-Even", left: "10 – 20 months", right: "6 – 12 months" },
  { metric: "Technicians at Break-Even", left: "4 – 8 plumbers", right: "2 – 5 technicians" },
] as const;

export const scalingLadder = {
  left: [...plumbingScalingLadder],
  right: ["1 Route", "2 – 4 Technicians", "Subscription Base", "Multi-Branch Operation"],
} as const;

export const scalingLeftTitle = "Plumbing Growth Path";
export const scalingRightTitle = "Pest Control Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: plumbingCapitalEfficiency,
  right: { revenue: "$700K – $1.3M", profit: "$140K – $280K net profit", payback: "2 – 3 years" },
} as const;

export const chooseLeftTitle = "Choose Plumbing If";
export const chooseRightTitle = "Choose Pest Control If";

export const chooseLeft = [
  "You want higher revenue per technician and larger average tickets",
  "You prefer skilled-trade barriers that reduce commoditized competition",
  "You want recession-resistant emergency demand from essential systems",
  "You're building toward multi-crew operations with commercial accounts",
  "You value higher absolute revenue scale and owner compensation ceiling",
] as const;

export const chooseRight = [
  "You want the highest recurring revenue percentage in home services",
  "You prefer lower startup costs and faster break-even with subscription contracts",
  "You want premium profit margins driven by route density and contract retention",
  "You're comfortable with chemical licensing and regulatory compliance workflows",
  "You value acquisition-friendly subscription models with strong valuation multiples",
] as const;

export const calculators = plumbingCalculators;

export const relatedComparisons = [
  { label: "Plumbing vs HVAC", href: "/comparisons/plumbing-vs-hvac/" },
  { label: "Plumbing vs Electrical", href: "/comparisons/plumbing-vs-electrical/" },
  { label: "Plumbing vs Roofing", href: "/comparisons/plumbing-vs-roofing/" },
  { label: "Plumbing vs Landscaping", href: "/comparisons/plumbing-vs-landscaping/" },
  { label: "Plumbing Industry Hub", href: "/industries/plumbing/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — plumbing or pest control?",
    answer:
      "Plumbing companies typically reach higher median revenue (~$1.6M vs ~$900K for pest control). Plumbing benefits from larger emergency tickets and commercial service accounts. Pest control revenue scales through route density and subscription contracts but with lower per-stop ticket values.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Pest control has a structural margin advantage — median ~18% net versus ~11% for plumbing. Subscription contracts, low material costs (8–14%), and high route density drive pest control profitability. Plumbing margins are solid but face more competitive pricing on common repairs.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Pest control dominates recurring revenue with quarterly treatment contracts representing 70–90% of income. Plumbing maintenance plans exist but are less prevalent, with most revenue from reactive repairs and emergency calls (10–25% contract revenue).",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Pest control startups typically require $50K–$150K versus $150K–$400K for plumbing. Pest control needs basic vehicles, chemical inventory, and licensing but less specialized equipment. Plumbing requires trade licensing, diagnostic tools, and higher vehicle setup costs.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Pest control businesses often sell at 2.5×–4.0× SDE (median ~3.2×) while plumbing companies trade at 2.2×–3.5× SDE (median ~2.8×). Buyers pay premiums for pest control's subscription revenue, high retention rates, and active PE/consolidator acquisition interest.",
  },
  {
    question: "What does $250K produce in each trade?",
    answer:
      "A $250K plumbing investment typically supports $1.2M–$2.0M revenue and $144K–$280K net profit with 2.5–4 year payback. The same capital in pest control often supports $700K–$1.3M revenue and $140K–$280K net profit with faster 2–3 year payback due to subscription contract cash flow.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let plumbing = 0;
  let pestControl = 0;

  if (inputs.clinicalInterest === "specialty") plumbing += 2;
  else pestControl += 2;

  if (inputs.revenueGoal === "very-high") plumbing += 3;
  else if (inputs.revenueGoal === "high") plumbing += 2;
  else pestControl += 2;

  if (inputs.insuranceComfort === "high") pestControl += 3;
  else if (inputs.insuranceComfort === "medium") {
    pestControl += 2;
    plumbing += 1;
  } else plumbing += 1;

  if (inputs.growthAmbition === "multi-location") {
    plumbing += 2;
    pestControl += 2;
  } else if (inputs.growthAmbition === "regional") pestControl += 2;
  else pestControl += 2;

  return plumbing >= pestControl ? "Plumbing" : "Pest Control";
}

export const decisionToolCopy = {
  left:
    "Plumbing aligns with your goals — higher revenue per technician, emergency-driven demand, skilled-trade pricing power, and larger absolute revenue scale.",
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
