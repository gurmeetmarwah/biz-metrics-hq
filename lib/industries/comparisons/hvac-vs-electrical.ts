import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";

const hvacCalculators = [
  { label: "HVAC Revenue Per Technician Calculator", href: "/calculators/hvac-revenue-per-technician/" },
  { label: "HVAC Profit Margin Calculator", href: "/calculators/hvac-profit-margin/" },
  { label: "HVAC Valuation Calculator", href: "/calculators/hvac-valuation/" },
  { label: "HVAC Break-Even Calculator", href: "/calculators/hvac-break-even/" },
] as const;

const hvacHubLabels = {
  left: "HVAC",
  breadcrumbHub: { label: "HVAC", href: "/industries/hvac/" },
  exploreHub: { label: "Explore HVAC Hub →", href: "/industries/hvac/" },
} as const;

export const comparisonMeta = {
  slug: "hvac-vs-electrical",
  title: "HVAC vs Electrical",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, technician productivity, commercial mix, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...hvacHubLabels,
  right: "Electrical",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "HVAC" },
  { factor: "Higher Profit Margins", winner: "HVAC" },
  { factor: "Commercial Project Revenue", winner: "Electrical" },
  { factor: "Recurring Revenue (Maintenance)", winner: "HVAC" },
  { factor: "New Construction Exposure", winner: "Electrical" },
  { factor: "Licensing Barrier", winner: "Electrical" },
  { factor: "Scalability", winner: "HVAC" },
  { factor: "Valuation Multiples", winner: "HVAC" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$1.2M – $3.8M", right: "$1.0M – $3.2M" },
  { metric: "Net Profit Margin", left: "8 – 16%", right: "7 – 13%" },
  { metric: "Owner Compensation", left: "$95K – $185K", right: "$90K – $175K" },
  { metric: "Revenue Per Technician", left: "$180K – $320K", right: "$165K – $295K" },
  { metric: "Startup Cost", left: "$200K – $500K", right: "$175K – $450K" },
  { metric: "Business Value", left: "2.4× – 3.8× SDE", right: "2.3× – 3.4× SDE" },
  { metric: "Commercial Revenue %", left: "20 – 35%", right: "35 – 55%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 9, right: 8, winner: "HVAC" },
  { label: "Profit Margin", left: 9, right: 7, winner: "HVAC" },
  { label: "Recurring Revenue", left: 10, right: 5, winner: "HVAC" },
  { label: "Commercial Growth", left: 7, right: 10, winner: "Electrical" },
] as const;

export const leftRevenueSources = [
  "Residential Service & Repair",
  "Maintenance Agreements",
  "System Installations",
  "Commercial Service Contracts",
  "Emergency After-Hours Calls",
] as const;

export const rightRevenueSources = [
  "Residential Electrical Service",
  "Panel Upgrades & Rewiring",
  "Commercial Electrical Contracts",
  "New Construction Rough-In",
  "EV Charger Installations",
] as const;

export const revenueFunnel = {
  left: ["Lead", "Dispatch", "Diagnosis", "Repair/Install", "Maintenance Plan", "Revenue"],
  right: ["Bid/Lead", "Estimate", "Permit", "Install/Service", "Revenue"],
} as const;

export const patientFunnel = {
  left: ["Homeowner", "Service Call", "Maintenance Plan", "Annual Tune-Ups", "Replacement Cycle"],
  right: ["Customer", "Service/Project", "Repeat Work", "Panel/Upgrade", "Referral"],
} as const;

export const operatoryFunnel = {
  left: ["Technician", "Jobs", "Revenue"],
  right: ["Electrician", "Jobs", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "6 – 18 techs", right: "5 – 16 electricians" },
  { driver: "Average Service Ticket", left: "$350 – $650", right: "$300 – $600" },
  { driver: "Project Ticket", left: "$6K – $14K", right: "$3K – $25K" },
  { driver: "Recurring Revenue", left: "25 – 45% of revenue", right: "8 – 20% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$1,800 – $4,500", right: "$1,400 – $3,800" },
  { metric: "Jobs Per Year (Active Customer)", left: "2 – 4", right: "1 – 2" },
  { metric: "Average Ticket (Service)", left: "$350 – $650", right: "$300 – $600" },
  { metric: "Commercial Mix", left: "20 – 35%", right: "35 – 55%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Technician", left: "$180K – $320K", right: "$165K – $295K" },
  { metric: "Jobs Per Day", left: "4 – 7", right: "3 – 6" },
  { metric: "Revenue Per Job", left: "$350 – $650", right: "$300 – $600" },
] as const;

export const marginTiers = {
  left: { weak: "4 – 7%", average: "8 – 12%", strong: "13 – 16%" },
  right: { weak: "4 – 6%", average: "7 – 11%", strong: "12 – 14%" },
} as const;

export const costStructureComparison = [
  { expense: "Technician Payroll", left: "28 – 38%", right: "32 – 42%" },
  { expense: "Materials & Parts", left: "18 – 26%", right: "20 – 28%" },
  { expense: "Fleet & Vehicles", left: "6 – 10%", right: "5 – 9%" },
  { expense: "Marketing", left: "5 – 9%", right: "4 – 8%" },
] as const;

export const insuranceHighlights = {
  left: { title: "Recurring Revenue Engine", value: "35%+ from maintenance plans" },
  right: { title: "Commercial Project Driver", value: "35 – 55% commercial revenue" },
} as const;

export const insuranceComparison = [
  { metric: "Maintenance Contract Revenue", left: "25 – 45%", right: "8 – 20%" },
  { metric: "New Construction Revenue", left: "15 – 25%", right: "25 – 40%" },
  { metric: "Commercial Service Contracts", left: "20 – 35%", right: "35 – 55%" },
  { metric: "Seasonal Revenue Swing", left: "Moderate – High", right: "Low – Moderate" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small HVAC Owner", earnings: "$95K – $120K", type: "left" },
  { model: "Multi-Truck HVAC Operator", earnings: "$185K – $350K+", type: "left" },
  { model: "Small Electrical Contractor", earnings: "$90K – $125K", type: "right" },
  { model: "Multi-Crew Electrical Operator", earnings: "$160K – $300K+", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Vehicles & Equipment", percent: 35 },
  { item: "Inventory & Tools", percent: 22 },
  { item: "Marketing Launch", percent: 15 },
  { item: "Working Capital", percent: 28 },
] as const;

export const rightStartupItems = [
  { item: "Vehicles & Tools", percent: 28 },
  { item: "Testing Equipment", percent: 22 },
  { item: "Marketing Launch", percent: 16 },
  { item: "Working Capital", percent: 34 },
] as const;

export const startupSideBySide = [
  { category: "Vehicles & Equipment", left: "$80K – $200K", right: "$70K – $180K" },
  { category: "Tools & Inventory", left: "$40K – $100K", right: "$35K – $90K" },
  { category: "Marketing Launch", left: "$25K – $60K", right: "$20K – $55K" },
  { category: "Total Launch Budget", left: "$200K – $500K", right: "$175K – $450K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: "2.4× – 3.8×", right: "2.3× – 3.4×" },
  { metric: "Revenue Multiple", left: "0.6× – 1.1×", right: "0.5× – 0.9×" },
  { metric: "EBITDA Multiple", left: "4.0× – 6.5×", right: "3.8× – 5.8×" },
] as const;

export const valuationExamples = {
  left: { revenue: "$2.4M", value: "$1.04M – $1.65M", note: "3.1× SDE on $433K SDE" },
  right: { revenue: "$2.0M", value: "$850K – $1.36M", note: "2.8× SDE on $380K SDE" },
} as const;

export const valuationExampleTitle = "$2M Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$180K – $250K", right: "$150K – $220K" },
  { metric: "Jobs Needed (daily, all techs)", left: "18 – 28/day", right: "14 – 22/day" },
  { metric: "Months To Break-Even", left: "12 – 24 months", right: "12 – 22 months" },
  { metric: "Field Staff at Break-Even", left: "6 – 10 techs", right: "5 – 9 electricians" },
] as const;

export const scalingLadder = {
  left: ["1 Truck", "3 – 5 Techs", "Maintenance Plan Base", "Multi-Location"],
  right: ["1 Truck", "2 – 4 Electricians", "Commercial Bids", "Multi-Crew Operation"],
} as const;

export const scalingLeftTitle = "HVAC Growth Path";
export const scalingRightTitle = "Electrical Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: { revenue: "$1.8M – $2.8M", profit: "$216K – $420K net profit", payback: "3 – 5 years" },
  right: { revenue: "$1.5M – $2.4M", profit: "$165K – $340K net profit", payback: "3 – 5 years" },
} as const;

export const chooseLeftTitle = "Choose HVAC If";
export const chooseRightTitle = "Choose Electrical If";

export const chooseLeft = [
  "You want stronger recurring revenue through maintenance agreements",
  "You prefer residential service with predictable replacement cycles",
  "You want higher valuation multiples and consolidator acquisition interest",
  "You're building a multi-location home services brand",
  "You value technician productivity metrics tied to service agreements",
] as const;

export const chooseRight = [
  "You want exposure to commercial projects and new construction",
  "You're interested in panel upgrades, rewiring, and EV charger growth",
  "You prefer project-based revenue with larger individual tickets",
  "You have master electrician credentials and commercial bidding experience",
  "You want diversified revenue across residential service and commercial installs",
] as const;

export const calculators = hvacCalculators;

export const relatedComparisons = [
  { label: "HVAC vs Plumbing", href: "/comparisons/hvac-vs-plumbing/" },
  { label: "HVAC vs Roofing", href: "/comparisons/hvac-vs-roofing/" },
  { label: "HVAC vs Landscaping", href: "/comparisons/hvac-vs-landscaping/" },
  { label: "HVAC Industry Hub", href: "/industries/hvac/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — HVAC or electrical?",
    answer:
      "HVAC companies typically reach slightly higher median revenue (~$2.4M vs ~$2.0M for electrical contractors). Electrical businesses can match or exceed HVAC in commercial-heavy markets with large project pipelines, but residential HVAC benefits from larger maintenance contract bases.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "HVAC tends to run slightly higher net margins (median ~12% vs ~10% for electrical) due to maintenance plan recurring revenue. Electrical contractors with strong commercial mix can reach 11–14%, but residential-only electrical shops often run thinner margins on competitive service calls.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "HVAC has a clear advantage. Maintenance agreements commonly represent 25–45% of HVAC revenue. Electrical contractors rely more on one-time projects, panel upgrades, and commercial bids — recurring revenue typically runs 8–20%.",
  },
  {
    question: "Which is better for commercial work?",
    answer:
      "Electrical contractors are structurally better positioned for commercial and new construction revenue, which often represents 35–55% of electrical company income versus 20–35% for typical HVAC operators. Commercial electrical requires licensing, bidding capability, and bonding.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "HVAC businesses sell at 2.4×–3.8× SDE (median ~3.1×) while electrical contractors trade at 2.3×–3.4× SDE (median ~2.8×). HVAC commands a modest premium due to maintenance contract value and active home services M&A interest.",
  },
  {
    question: "What does $250K produce in each trade?",
    answer:
      "A $250K HVAC investment typically supports $1.8M–$2.8M revenue and $216K–$420K net profit. The same capital in electrical often supports $1.5M–$2.4M revenue and $165K–$340K net profit, with commercial-heavy electrical shops at the higher end.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let hvac = 0;
  let electrical = 0;

  if (inputs.clinicalInterest === "specialty") electrical += 3;
  else hvac += 2;

  if (inputs.revenueGoal === "very-high") hvac += 2;
  else if (inputs.revenueGoal === "high") {
    hvac += 2;
    electrical += 1;
  } else electrical += 2;

  if (inputs.insuranceComfort === "high") hvac += 3;
  else if (inputs.insuranceComfort === "medium") {
    hvac += 1;
    electrical += 1;
  } else electrical += 1;

  if (inputs.growthAmbition === "multi-location") hvac += 3;
  else if (inputs.growthAmbition === "regional") {
    hvac += 2;
    electrical += 2;
  } else electrical += 1;

  return hvac >= electrical ? "HVAC" : "Electrical";
}

export const decisionToolCopy = {
  left:
    "HVAC is the better fit — recurring maintenance revenue, stronger margins, premium valuation multiples, and scalable residential service operations.",
  right:
    "Electrical aligns with your goals — commercial project revenue, construction exposure, panel upgrades, and larger individual project tickets.",
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
