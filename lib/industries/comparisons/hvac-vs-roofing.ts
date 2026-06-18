import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";

const hvacCalculators = [
  { label: "HVAC Revenue Per Technician Calculator", href: "/calculators/hvac-revenue-per-technician/" },
  { label: "HVAC Profit Margin Calculator", href: "/calculators/hvac-profit-margin/" },
  { label: "HVAC Valuation Calculator", href: "/calculators/hvac-valuation/" },
  { label: "HVAC Break-Even Calculator", href: "/calculators/hvac-break-even/" },
] as const;

export const comparisonMeta = {
  slug: "hvac-vs-roofing",
  title: "HVAC vs Roofing",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, crew productivity, storm-driven demand, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "HVAC",
  right: "Roofing",
  breadcrumbHub: { label: "HVAC", href: "/industries/hvac/" },
  exploreHub: { label: "Explore HVAC Hub →", href: "/industries/hvac/" },
} as const;

export const decisionSnapshot = [
  { factor: "Revenue Predictability", winner: "HVAC" },
  { factor: "Peak Revenue Potential", winner: "Roofing" },
  { factor: "Lower Startup Cost", winner: "Roofing" },
  { factor: "Recurring Revenue", winner: "HVAC" },
  { factor: "Storm/Event Revenue Spikes", winner: "Roofing" },
  { factor: "Profit Margin Stability", winner: "HVAC" },
  { factor: "Year-Round Operations", winner: "HVAC" },
  { factor: "Valuation Multiples", winner: "HVAC" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$1.2M – $3.8M", right: "$800K – $4.5M" },
  { metric: "Net Profit Margin", left: "8 – 16%", right: "6 – 15%" },
  { metric: "Owner Compensation", left: "$95K – $185K", right: "$80K – $220K" },
  { metric: "Revenue Per Crew", left: "$180K – $320K/tech", right: "$400K – $900K/crew" },
  { metric: "Startup Cost", left: "$200K – $500K", right: "$100K – $350K" },
  { metric: "Business Value", left: "2.4× – 3.8× SDE", right: "2.0× – 3.2× SDE" },
  { metric: "Revenue Volatility", left: "Moderate", right: "High" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Stability", left: 10, right: 6, winner: "HVAC" },
  { label: "Peak Earnings Potential", left: 7, right: 9, winner: "Roofing" },
  { label: "Recurring Revenue", left: 10, right: 4, winner: "HVAC" },
  { label: "Capital Efficiency", left: 7, right: 9, winner: "Roofing" },
] as const;

export const leftRevenueSources = [
  "Residential Service & Repair",
  "Maintenance Agreements",
  "System Installations",
  "Commercial Service Contracts",
  "Emergency After-Hours Calls",
] as const;

export const rightRevenueSources = [
  "Residential Roof Replacement",
  "Storm & Insurance Restoration",
  "Roof Repairs",
  "Commercial Roofing",
  "Gutter & Exterior Add-Ons",
] as const;

export const revenueFunnel = {
  left: ["Lead", "Dispatch", "Diagnosis", "Repair/Install", "Maintenance Plan", "Revenue"],
  right: ["Lead/Storm", "Inspection", "Estimate", "Install", "Insurance Close", "Revenue"],
} as const;

export const patientFunnel = {
  left: ["Homeowner", "Service Call", "Maintenance Plan", "Annual Tune-Ups", "Replacement Cycle"],
  right: ["Homeowner", "Inspection", "Replacement/Repair", "Insurance Claim", "Referral"],
} as const;

export const operatoryFunnel = {
  left: ["Technician", "Jobs", "Revenue"],
  right: ["Crew", "Jobs", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Model", left: "6 – 18 technicians", right: "2 – 8 install crews" },
  { driver: "Average Service Ticket", left: "$350 – $650", right: "$450 – $1,200" },
  { driver: "Replacement Ticket", left: "$6K – $14K", right: "$8K – $22K" },
  { driver: "Recurring Revenue", left: "25 – 45% of revenue", right: "5 – 15% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$1,800 – $4,500", right: "$2,000 – $8,000" },
  { metric: "Repeat Visits Per Year", left: "2 – 4", right: "0.2 – 0.8" },
  { metric: "Average Ticket", left: "$350 – $650", right: "$8K – $22K (replacement)" },
  { metric: "Insurance-Driven Revenue", left: "Low", right: "20 – 40% in storm markets" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Technician/Crew", left: "$180K – $320K", right: "$400K – $900K/crew" },
  { metric: "Jobs Per Day", left: "4 – 7", right: "1 – 2 (install)" },
  { metric: "Crew Utilization", left: "72 – 88%", right: "60 – 85% (weather-dependent)" },
] as const;

export const marginTiers = {
  left: { weak: "4 – 7%", average: "8 – 12%", strong: "13 – 16%" },
  right: { weak: "3 – 6%", average: "7 – 11%", strong: "12 – 15%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "28 – 38%", right: "25 – 35%" },
  { expense: "Materials", left: "18 – 26%", right: "30 – 42%" },
  { expense: "Fleet & Equipment", left: "6 – 10%", right: "5 – 8%" },
  { expense: "Marketing", left: "5 – 9%", right: "8 – 14%" },
] as const;

export const insuranceHighlights = {
  left: { title: "Recurring Revenue Engine", value: "35%+ from maintenance plans" },
  right: { title: "Storm Revenue Driver", value: "20 – 40% insurance restoration" },
} as const;

export const insuranceComparison = [
  { metric: "Maintenance/Recurring Revenue", left: "25 – 45%", right: "5 – 15%" },
  { metric: "Insurance/Storm Revenue", left: "Low – Moderate", right: "20 – 40%" },
  { metric: "Project-Based Revenue", left: "25 – 35%", right: "70 – 85%" },
  { metric: "Weather Dependency", left: "Moderate", right: "High" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small HVAC Owner", earnings: "$95K – $120K", type: "left" },
  { model: "Multi-Truck HVAC Operator", earnings: "$185K – $350K+", type: "left" },
  { model: "Small Roofing Owner", earnings: "$80K – $130K", type: "right" },
  { model: "Storm-Market Roofing Operator", earnings: "$150K – $400K+", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Vehicles & Equipment", percent: 35 },
  { item: "Inventory & Tools", percent: 22 },
  { item: "Marketing Launch", percent: 15 },
  { item: "Working Capital", percent: 28 },
] as const;

export const rightStartupItems = [
  { item: "Trucks & Equipment", percent: 25 },
  { item: "Tools & Safety Gear", percent: 15 },
  { item: "Marketing Launch", percent: 25 },
  { item: "Working Capital", percent: 35 },
] as const;

export const startupSideBySide = [
  { category: "Vehicles & Equipment", left: "$80K – $200K", right: "$40K – $120K" },
  { category: "Tools & Inventory", left: "$40K – $100K", right: "$15K – $50K" },
  { category: "Marketing Launch", left: "$25K – $60K", right: "$30K – $80K" },
  { category: "Total Launch Budget", left: "$200K – $500K", right: "$100K – $350K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: "2.4× – 3.8×", right: "2.0× – 3.2×" },
  { metric: "Revenue Multiple", left: "0.6× – 1.1×", right: "0.4× – 0.8×" },
  { metric: "EBITDA Multiple", left: "4.0× – 6.5×", right: "3.0× – 5.0×" },
] as const;

export const valuationExamples = {
  left: { revenue: "$2.4M", value: "$1.04M – $1.65M", note: "3.1× SDE on $433K SDE" },
  right: { revenue: "$2.0M", value: "$640K – $1.15M", note: "2.6× SDE on $360K SDE" },
} as const;

export const valuationExampleTitle = "$2M Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$180K – $250K", right: "$100K – $180K" },
  { metric: "Jobs Needed (monthly)", left: "350 – 550 jobs", right: "12 – 25 installs" },
  { metric: "Months To Break-Even", left: "12 – 24 months", right: "8 – 18 months" },
  { metric: "Crews/Techs at Break-Even", left: "6 – 10 techs", right: "2 – 4 crews" },
] as const;

export const scalingLadder = {
  left: ["1 Truck", "3 – 5 Techs", "Maintenance Plan Base", "Multi-Location"],
  right: ["1 Crew", "Storm Marketing", "3 – 5 Crews", "Regional Brand"],
} as const;

export const scalingLeftTitle = "HVAC Growth Path";
export const scalingRightTitle = "Roofing Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: { revenue: "$1.8M – $2.8M", profit: "$216K – $420K net profit", payback: "3 – 5 years" },
  right: { revenue: "$1.2M – $3.5M", profit: "$120K – $380K net profit", payback: "2 – 4 years" },
} as const;

export const chooseLeftTitle = "Choose HVAC If";
export const chooseRightTitle = "Choose Roofing If";

export const chooseLeft = [
  "You want predictable recurring revenue through maintenance agreements",
  "You prefer steadier year-round operations over weather-driven spikes",
  "You want higher valuation multiples and home services consolidator interest",
  "You value technician-based scalability with service contract retention",
  "You want more stable margins and less project-based revenue volatility",
] as const;

export const chooseRight = [
  "You're in a storm-prone market with strong insurance restoration demand",
  "You want lower startup costs and faster initial break-even",
  "You prefer high-ticket project revenue over frequent service calls",
  "You can manage weather-dependent scheduling and crew utilization",
  "You want upside from hail/wind events and large replacement projects",
] as const;

export const calculators = hvacCalculators;

export const relatedComparisons = [
  { label: "HVAC vs Plumbing", href: "/comparisons/hvac-vs-plumbing/" },
  { label: "HVAC vs Electrical", href: "/comparisons/hvac-vs-electrical/" },
  { label: "HVAC vs Landscaping", href: "/comparisons/hvac-vs-landscaping/" },
  { label: "HVAC Industry Hub", href: "/industries/hvac/" },
] as const;

export const faqs = [
  {
    question: "Which is more profitable — HVAC or roofing?",
    answer:
      "HVAC typically offers more stable margins (median ~12% net) with recurring maintenance revenue. Roofing margins range 7–15% with higher volatility — storm years can produce exceptional profits while slow years compress margins. HVAC is more predictable; roofing has higher upside in event-driven markets.",
  },
  {
    question: "Which generates more revenue?",
    answer:
      "HVAC has a higher median (~$2.4M) with tighter distribution. Roofing revenue is more volatile — median operators run $1.2M–$2.0M, but storm-market companies can exceed $4M in peak years. HVAC wins on consistency; roofing wins on peak potential.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "HVAC dominates recurring revenue with maintenance plans representing 25–45% of income. Roofing is overwhelmingly project-based — repairs and replacements drive 70–85% of revenue, with minimal recurring contract penetration (5–15%).",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Roofing startups typically require $100K–$350K versus $200K–$500K for HVAC. Roofing needs fewer specialized tools and can launch with a small crew and basic equipment. HVAC requires more inventory, diagnostic tools, and vehicle setup.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "HVAC businesses sell at 2.4×–3.8× SDE (median ~3.1×) while roofing companies trade at 2.0×–3.2× SDE (median ~2.6×). Buyers discount roofing for weather dependency, insurance claim concentration, and revenue volatility.",
  },
  {
    question: "Which is better in storm markets?",
    answer:
      "Roofing benefits disproportionately from hail, wind, and hurricane markets — insurance restoration can represent 20–40% of revenue. HVAC still operates in storm markets but benefits mainly from system damage repairs rather than full replacement cycles tied to insurance claims.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let hvac = 0;
  let roofing = 0;

  if (inputs.clinicalInterest === "specialty") roofing += 2;
  else hvac += 2;

  if (inputs.revenueGoal === "very-high") roofing += 2;
  else if (inputs.revenueGoal === "high") {
    hvac += 2;
    roofing += 1;
  } else hvac += 2;

  if (inputs.insuranceComfort === "high") hvac += 3;
  else roofing += 1;

  if (inputs.growthAmbition === "multi-location") hvac += 3;
  else if (inputs.growthAmbition === "regional") {
    hvac += 2;
    roofing += 2;
  } else roofing += 2;

  return hvac >= roofing ? "HVAC" : "Roofing";
}

export const decisionToolCopy = {
  left:
    "HVAC is the better fit — predictable recurring revenue, stable margins, year-round operations, and stronger valuation multiples.",
  right:
    "Roofing aligns with your goals — lower startup costs, high-ticket projects, storm-market upside, and faster break-even in project-heavy models.",
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
