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
  slug: "plumbing-vs-landscaping",
  title: "Plumbing vs Landscaping",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, labor economics, seasonality, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...plumbingHubLabels,
  right: "Landscaping",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Plumbing" },
  { factor: "Higher Profit Margins", winner: "Plumbing" },
  { factor: "Lower Startup Cost", winner: "Landscaping" },
  { factor: "Recurring Revenue", winner: "Landscaping" },
  { factor: "Skilled Trade Barrier", winner: "Plumbing" },
  { factor: "Labor Intensity", winner: "Landscaping" },
  { factor: "Valuation Multiples", winner: "Plumbing" },
  { factor: "Outdoor Lifestyle Business", winner: "Landscaping" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: plumbingKpis.annualRevenue, right: "$500K – $1.8M" },
  { metric: "Net Profit Margin", left: plumbingKpis.netMargin, right: "5 – 12%" },
  { metric: "Owner Compensation", left: plumbingKpis.ownerComp, right: "$65K – $140K" },
  { metric: "Revenue Per Employee", left: "$150K – $280K", right: "$80K – $150K" },
  { metric: "Startup Cost", left: plumbingKpis.startup, right: "$75K – $250K" },
  { metric: "Business Value", left: plumbingKpis.valuation, right: "1.8× – 2.8× SDE" },
  { metric: "Recurring Contract %", left: "10 – 25%", right: "40 – 70%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 8, right: 5, winner: "Plumbing" },
  { label: "Profit Margin", left: 8, right: 6, winner: "Plumbing" },
  { label: "Low Capital Entry", left: 6, right: 10, winner: "Landscaping" },
  { label: "Valuation & Exit", left: 8, right: 5, winner: "Plumbing" },
] as const;

export const leftRevenueSources = plumbingRevenueSources;

export const rightRevenueSources = [
  "Weekly Lawn Maintenance",
  "Landscape Design & Install",
  "Hardscape & Patios",
  "Commercial Grounds Maintenance",
  "Seasonal Cleanups & Mulching",
] as const;

export const revenueFunnel = {
  left: [...plumbingRevenueFunnel],
  right: ["Lead", "Estimate", "Crew Dispatch", "Service/Install", "Recurring Contract", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...plumbingCustomerFunnel],
  right: ["Property Owner", "Weekly Service", "Seasonal Upsells", "Design Project", "Renewal"],
} as const;

export const operatoryFunnel = {
  left: [...plumbingOperatoryFunnel],
  right: ["Crew", "Properties", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "4 – 14 plumbers", right: "8 – 30 crew members" },
  { driver: "Average Ticket", left: "$275 – $525", right: "$45 – $120 (weekly)" },
  { driver: "Project Ticket", left: "$2K – $8K", right: "$3K – $25K (install)" },
  { driver: "Recurring Revenue", left: "10 – 25% (maintenance)", right: "40 – 70% (contracts)" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$1,200 – $3,200", right: "$800 – $2,400" },
  { metric: "Visits Per Year", left: "1 – 3", right: "26 – 40 (weekly service)" },
  { metric: "Average Ticket", left: "$275 – $525", right: "$45 – $120/week" },
  { metric: "Contract Retention", left: "40 – 60%", right: "75 – 90%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Technician/Crew", left: "$150K – $280K", right: "$80K – $150K/employee" },
  { metric: "Properties Per Crew/Day", left: "4 – 8 jobs", right: "12 – 25 properties" },
  { metric: "Labor Cost % of Revenue", left: "30 – 40%", right: "40 – 55%" },
] as const;

export const marginTiers = {
  left: plumbingMarginTiers,
  right: { weak: "3 – 5%", average: "6 – 9%", strong: "10 – 12%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "30 – 40%", right: "40 – 55%" },
  { expense: "Materials", left: "16 – 24%", right: "12 – 20%" },
  { expense: "Fleet & Equipment", left: "5 – 9%", right: "8 – 14%" },
  { expense: "Marketing", left: "6 – 10%", right: "4 – 8%" },
] as const;

export const insuranceHighlights = {
  left: plumbingInsuranceHighlight,
  right: { title: "Contract Recurrence", value: "40 – 70% recurring contracts" },
} as const;

export const insuranceComparison = [
  { metric: "Maintenance/Contract Revenue", left: "10 – 25%", right: "40 – 70%" },
  { metric: "Project/Install Revenue", left: "25 – 40%", right: "15 – 30%" },
  { metric: "Emergency/Reactive Revenue", left: "20 – 35%", right: "5 – 12%" },
  { metric: "Seasonal Revenue Swing", left: "Low – Moderate", right: "High" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Plumbing Owner", earnings: "$85K – $115K", type: "left" },
  { model: "Multi-Crew Plumbing Operator", earnings: "$150K – $280K+", type: "left" },
  { model: "Small Landscaping Owner", earnings: "$65K – $95K", type: "right" },
  { model: "Multi-Crew Landscaping Operator", earnings: "$110K – $200K+", type: "right" },
] as const;

export const leftStartupItems = plumbingStartupItems;

export const rightStartupItems = [
  { item: "Mowers & Equipment", percent: 30 },
  { item: "Trucks & Trailers", percent: 25 },
  { item: "Marketing Launch", percent: 15 },
  { item: "Working Capital", percent: 30 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: plumbingStartupSideBySide.vehicles, right: "$25K – $80K" },
  { category: "Vehicles", left: "Included above", right: "$20K – $60K" },
  { category: "Marketing Launch", left: plumbingStartupSideBySide.marketing, right: "$10K – $30K" },
  { category: "Total Launch Budget", left: plumbingStartupSideBySide.total, right: "$75K – $250K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: plumbingValuation.sde, right: "1.8× – 2.8×" },
  { metric: "Revenue Multiple", left: plumbingValuation.revenue, right: "0.3× – 0.6×" },
  { metric: "EBITDA Multiple", left: plumbingValuation.ebitda, right: "2.5× – 4.0×" },
] as const;

export const valuationExamples = {
  left: plumbingValuation.example,
  right: { revenue: "$1.0M", value: "$360K – $560K", note: "2.2× SDE on $200K SDE" },
} as const;

export const valuationExampleTitle = "$1M+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$120K – $180K", right: "$60K – $100K" },
  { metric: "Contracts/Properties Needed", left: "600 – 1,200 active", right: "150 – 350 weekly accounts" },
  { metric: "Months To Break-Even", left: "10 – 20 months", right: "6 – 14 months" },
  { metric: "Staff at Break-Even", left: "4 – 8 plumbers", right: "6 – 12 crew members" },
] as const;

export const scalingLadder = {
  left: [...plumbingScalingLadder],
  right: ["1 Crew", "Weekly Route Density", "3 – 5 Crews", "Commercial Contracts"],
} as const;

export const scalingLeftTitle = "Plumbing Growth Path";
export const scalingRightTitle = "Landscaping Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: plumbingCapitalEfficiency,
  right: { revenue: "$800K – $1.4M", profit: "$64K – $154K net profit", payback: "2 – 4 years" },
} as const;

export const chooseLeftTitle = "Choose Plumbing If";
export const chooseRightTitle = "Choose Landscaping If";

export const chooseLeft = [
  "You want significantly higher revenue and owner compensation potential",
  "You prefer skilled-trade barriers that reduce low-price competition",
  "You want stronger valuation multiples and acquisition interest",
  "You're building a scalable home services company with emergency demand",
  "You want year-round essential trade work over outdoor seasonal labor",
] as const;

export const chooseRight = [
  "You want the lowest startup capital requirement of the home services trades",
  "You prefer outdoor work and route-based recurring lawn contracts",
  "You're comfortable with high labor intensity and seasonal hiring cycles",
  "You want faster break-even with a small crew and local route density",
  "You value a lifestyle business with lower licensing barriers to entry",
] as const;

export const calculators = plumbingCalculators;

export const relatedComparisons = [
  { label: "Plumbing vs HVAC", href: "/comparisons/plumbing-vs-hvac/" },
  { label: "Plumbing vs Electrical", href: "/comparisons/plumbing-vs-electrical/" },
  { label: "Plumbing vs Roofing", href: "/comparisons/plumbing-vs-roofing/" },
  { label: "Plumbing vs Pest Control", href: "/comparisons/plumbing-vs-pest-control/" },
  { label: "Plumbing Industry Hub", href: "/industries/plumbing/" },
] as const;

export const faqs = [
  {
    question: "Which makes more money — plumbing or landscaping?",
    answer:
      "Plumbing owners typically earn significantly more, with median compensation around $125K versus $85K–$95K for landscaping operators. Plumbing median revenue (~$1.6M) is roughly 1.5–2× landscaping median (~$900K–$1.2M). The skilled trade premium and higher ticket sizes drive the gap.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Plumbing margins are materially higher — median ~11% net versus ~8% for landscaping. Landscaping is labor-heavy (40–55% payroll) with intense price competition on weekly maintenance routes. Plumbing benefits from higher tickets and emergency call pricing power.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Landscaping is the lower-capital trade at $75K–$250K startup versus $150K–$400K for plumbing. Basic mowers, trucks, and crew hiring can launch a landscaping route business quickly. Plumbing requires licensing, specialized tools, and higher vehicle inventory.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Both rely on recurring models but differently. Landscaping weekly contracts represent 40–70% of revenue. Plumbing maintenance agreements represent 10–25%. Landscaping has higher contract frequency; plumbing has higher dollar value per service call.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Plumbing businesses sell at 2.2×–3.5× SDE (median ~2.8×) while landscaping companies trade at 1.8×–2.8× SDE (median ~2.2×). Buyers pay premiums for plumbing's skilled trade barrier, higher margins, and recession-resistant demand.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "Landscaping offers lower barriers — less licensing, lower capital, and faster break-even. Plumbing offers higher long-term earnings but requires technical training, licensing, and more capital. Landscaping suits route-building entrepreneurs; plumbing suits skilled tradespeople seeking premium compensation.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let plumbing = 0;
  let landscaping = 0;

  if (inputs.clinicalInterest === "specialty") plumbing += 2;
  else landscaping += 2;

  if (inputs.revenueGoal === "very-high") plumbing += 3;
  else if (inputs.revenueGoal === "high") plumbing += 2;
  else landscaping += 2;

  if (inputs.insuranceComfort === "high") {
    plumbing += 2;
    landscaping += 2;
  } else if (inputs.insuranceComfort === "medium") {
    plumbing += 1;
    landscaping += 2;
  } else landscaping += 2;

  if (inputs.growthAmbition === "multi-location") plumbing += 3;
  else if (inputs.growthAmbition === "regional") plumbing += 2;
  else landscaping += 2;

  return plumbing >= landscaping ? "Plumbing" : "Landscaping";
}

export const decisionToolCopy = {
  left:
    "Plumbing aligns with your goals — higher revenue, stronger margins, skilled-trade pricing power, and premium valuation multiples.",
  right:
    "Landscaping is the better fit — low startup capital, outdoor route-based work, fast break-even, and recurring weekly contracts.",
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
