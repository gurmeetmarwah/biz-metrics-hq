import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";

const hvacCalculators = [
  { label: "HVAC Revenue Per Technician Calculator", href: "/calculators/hvac-revenue-per-technician/" },
  { label: "HVAC Profit Margin Calculator", href: "/calculators/hvac-profit-margin/" },
  { label: "HVAC Valuation Calculator", href: "/calculators/hvac-valuation/" },
  { label: "HVAC Break-Even Calculator", href: "/calculators/hvac-break-even/" },
] as const;

export const comparisonMeta = {
  slug: "hvac-vs-landscaping",
  title: "HVAC vs Landscaping",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, labor economics, seasonality, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "HVAC",
  right: "Landscaping",
  breadcrumbHub: { label: "HVAC", href: "/industries/hvac/" },
  exploreHub: { label: "Explore HVAC Hub →", href: "/industries/hvac/" },
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "HVAC" },
  { factor: "Higher Profit Margins", winner: "HVAC" },
  { factor: "Lower Startup Cost", winner: "Landscaping" },
  { factor: "Recurring Revenue", winner: "HVAC" },
  { factor: "Skilled Trade Barrier", winner: "HVAC" },
  { factor: "Labor Intensity", winner: "Landscaping" },
  { factor: "Valuation Multiples", winner: "HVAC" },
  { factor: "Outdoor Lifestyle Business", winner: "Landscaping" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$1.2M – $3.8M", right: "$500K – $1.8M" },
  { metric: "Net Profit Margin", left: "8 – 16%", right: "5 – 12%" },
  { metric: "Owner Compensation", left: "$95K – $185K", right: "$65K – $140K" },
  { metric: "Revenue Per Employee", left: "$180K – $320K", right: "$80K – $150K" },
  { metric: "Startup Cost", left: "$200K – $500K", right: "$75K – $250K" },
  { metric: "Business Value", left: "2.4× – 3.8× SDE", right: "1.8× – 2.8× SDE" },
  { metric: "Recurring Contract %", left: "25 – 45%", right: "40 – 70%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 10, right: 5, winner: "HVAC" },
  { label: "Profit Margin", left: 9, right: 6, winner: "HVAC" },
  { label: "Low Capital Entry", left: 6, right: 10, winner: "Landscaping" },
  { label: "Valuation & Exit", left: 10, right: 5, winner: "HVAC" },
] as const;

export const leftRevenueSources = [
  "Residential Service & Repair",
  "Maintenance Agreements",
  "System Installations",
  "Commercial Service Contracts",
  "Emergency After-Hours Calls",
] as const;

export const rightRevenueSources = [
  "Weekly Lawn Maintenance",
  "Landscape Design & Install",
  "Hardscape & Patios",
  "Commercial Grounds Maintenance",
  "Seasonal Cleanups & Mulching",
] as const;

export const revenueFunnel = {
  left: ["Lead", "Dispatch", "Diagnosis", "Repair/Install", "Maintenance Plan", "Revenue"],
  right: ["Lead", "Estimate", "Crew Dispatch", "Service/Install", "Recurring Contract", "Revenue"],
} as const;

export const patientFunnel = {
  left: ["Homeowner", "Service Call", "Maintenance Plan", "Annual Tune-Ups", "Replacement Cycle"],
  right: ["Property Owner", "Weekly Service", "Seasonal Upsells", "Design Project", "Renewal"],
} as const;

export const operatoryFunnel = {
  left: ["Technician", "Jobs", "Revenue"],
  right: ["Crew", "Properties", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "6 – 18 technicians", right: "8 – 30 crew members" },
  { driver: "Average Ticket", left: "$350 – $650", right: "$45 – $120 (weekly)" },
  { driver: "Project Ticket", left: "$6K – $14K", right: "$3K – $25K (install)" },
  { driver: "Recurring Revenue", left: "25 – 45% (maintenance)", right: "40 – 70% (contracts)" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$1,800 – $4,500", right: "$800 – $2,400" },
  { metric: "Visits Per Year", left: "2 – 4", right: "26 – 40 (weekly service)" },
  { metric: "Average Ticket", left: "$350 – $650", right: "$45 – $120/week" },
  { metric: "Contract Retention", left: "70 – 85%", right: "75 – 90%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Technician/Crew", left: "$180K – $320K", right: "$80K – $150K/employee" },
  { metric: "Properties Per Crew/Day", left: "4 – 7 jobs", right: "12 – 25 properties" },
  { metric: "Labor Cost % of Revenue", left: "28 – 38%", right: "40 – 55%" },
] as const;

export const marginTiers = {
  left: { weak: "4 – 7%", average: "8 – 12%", strong: "13 – 16%" },
  right: { weak: "3 – 5%", average: "6 – 9%", strong: "10 – 12%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "28 – 38%", right: "40 – 55%" },
  { expense: "Materials", left: "18 – 26%", right: "12 – 20%" },
  { expense: "Fleet & Equipment", left: "6 – 10%", right: "8 – 14%" },
  { expense: "Marketing", left: "5 – 9%", right: "4 – 8%" },
] as const;

export const insuranceHighlights = {
  left: { title: "Skilled Trade Premium", value: "Licensed HVAC technicians" },
  right: { title: "Contract Recurrence", value: "40 – 70% recurring contracts" },
} as const;

export const insuranceComparison = [
  { metric: "Maintenance/Contract Revenue", left: "25 – 45%", right: "40 – 70%" },
  { metric: "Project/Install Revenue", left: "25 – 35%", right: "15 – 30%" },
  { metric: "Emergency/Reactive Revenue", left: "10 – 18%", right: "5 – 12%" },
  { metric: "Seasonal Revenue Swing", left: "Moderate – High", right: "High" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small HVAC Owner", earnings: "$95K – $120K", type: "left" },
  { model: "Multi-Truck HVAC Operator", earnings: "$185K – $350K+", type: "left" },
  { model: "Small Landscaping Owner", earnings: "$65K – $95K", type: "right" },
  { model: "Multi-Crew Landscaping Operator", earnings: "$110K – $200K+", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Vehicles & Equipment", percent: 35 },
  { item: "Inventory & Tools", percent: 22 },
  { item: "Marketing Launch", percent: 15 },
  { item: "Working Capital", percent: 28 },
] as const;

export const rightStartupItems = [
  { item: "Mowers & Equipment", percent: 30 },
  { item: "Trucks & Trailers", percent: 25 },
  { item: "Marketing Launch", percent: 15 },
  { item: "Working Capital", percent: 30 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: "$80K – $200K", right: "$25K – $80K" },
  { category: "Vehicles", left: "Included above", right: "$20K – $60K" },
  { category: "Marketing Launch", left: "$25K – $60K", right: "$10K – $30K" },
  { category: "Total Launch Budget", left: "$200K – $500K", right: "$75K – $250K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: "2.4× – 3.8×", right: "1.8× – 2.8×" },
  { metric: "Revenue Multiple", left: "0.6× – 1.1×", right: "0.3× – 0.6×" },
  { metric: "EBITDA Multiple", left: "4.0× – 6.5×", right: "2.5× – 4.0×" },
] as const;

export const valuationExamples = {
  left: { revenue: "$2.4M", value: "$1.04M – $1.65M", note: "3.1× SDE on $433K SDE" },
  right: { revenue: "$1.0M", value: "$360K – $560K", note: "2.2× SDE on $200K SDE" },
} as const;

export const valuationExampleTitle = "$1M+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$180K – $250K", right: "$60K – $100K" },
  { metric: "Contracts/Properties Needed", left: "800 – 1,500 active", right: "150 – 350 weekly accounts" },
  { metric: "Months To Break-Even", left: "12 – 24 months", right: "6 – 14 months" },
  { metric: "Staff at Break-Even", left: "6 – 10 techs", right: "6 – 12 crew members" },
] as const;

export const scalingLadder = {
  left: ["1 Truck", "3 – 5 Techs", "Maintenance Plan Base", "Multi-Location"],
  right: ["1 Crew", "Weekly Route Density", "3 – 5 Crews", "Commercial Contracts"],
} as const;

export const scalingLeftTitle = "HVAC Growth Path";
export const scalingRightTitle = "Landscaping Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: { revenue: "$1.8M – $2.8M", profit: "$216K – $420K net profit", payback: "3 – 5 years" },
  right: { revenue: "$800K – $1.4M", profit: "$64K – $154K net profit", payback: "2 – 4 years" },
} as const;

export const chooseLeftTitle = "Choose HVAC If";
export const chooseRightTitle = "Choose Landscaping If";

export const chooseLeft = [
  "You want significantly higher revenue and owner compensation potential",
  "You prefer skilled-trade barriers that reduce low-price competition",
  "You want stronger valuation multiples and acquisition interest",
  "You're building a scalable home services company with maintenance contracts",
  "You want year-round indoor trade work over outdoor seasonal labor",
] as const;

export const chooseRight = [
  "You want the lowest startup capital requirement of the home services trades",
  "You prefer outdoor work and route-based recurring lawn contracts",
  "You're comfortable with high labor intensity and seasonal hiring cycles",
  "You want faster break-even with a small crew and local route density",
  "You value a lifestyle business with lower licensing barriers to entry",
] as const;

export const calculators = hvacCalculators;

export const relatedComparisons = [
  { label: "HVAC vs Plumbing", href: "/comparisons/hvac-vs-plumbing/" },
  { label: "HVAC vs Electrical", href: "/comparisons/hvac-vs-electrical/" },
  { label: "HVAC vs Roofing", href: "/comparisons/hvac-vs-roofing/" },
  { label: "HVAC Industry Hub", href: "/industries/hvac/" },
] as const;

export const faqs = [
  {
    question: "Which makes more money — HVAC or landscaping?",
    answer:
      "HVAC owners typically earn significantly more, with median compensation around $145K versus $85K–$95K for landscaping operators. HVAC median revenue (~$2.4M) is roughly 2–3× landscaping median (~$900K–$1.2M). The skilled trade premium and higher ticket sizes drive the gap.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "HVAC margins are materially higher — median ~12% net versus ~8% for landscaping. Landscaping is labor-heavy (40–55% payroll) with intense price competition on weekly maintenance routes. HVAC benefits from higher tickets and maintenance plan pricing power.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Landscaping is the lowest-capital home services trade at $75K–$250K startup versus $200K–$500K for HVAC. Basic mowers, trucks, and crew hiring can launch a landscaping route business quickly. HVAC requires licensing, specialized tools, and higher vehicle inventory.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Both rely on recurring models but differently. Landscaping weekly contracts represent 40–70% of revenue. HVAC maintenance agreements represent 25–45%. Landscaping has higher contract frequency; HVAC has higher dollar value per contract.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "HVAC businesses sell at 2.4×–3.8× SDE (median ~3.1×) while landscaping companies trade at 1.8×–2.8× SDE (median ~2.2×). Buyers pay premiums for HVAC's skilled trade barrier, higher margins, and consolidator acquisition activity.",
  },
  {
    question: "Which is better for a first-time business owner?",
    answer:
      "Landscaping offers lower barriers — less licensing, lower capital, and faster break-even. HVAC offers higher long-term earnings but requires technical training, licensing, and more capital. Landscaping suits route-building entrepreneurs; HVAC suits skilled tradespeople seeking premium compensation.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let hvac = 0;
  let landscaping = 0;

  if (inputs.clinicalInterest === "specialty") hvac += 2;
  else landscaping += 2;

  if (inputs.revenueGoal === "very-high") hvac += 3;
  else if (inputs.revenueGoal === "high") hvac += 2;
  else landscaping += 2;

  if (inputs.insuranceComfort === "high") {
    hvac += 2;
    landscaping += 2;
  } else if (inputs.insuranceComfort === "medium") {
    hvac += 1;
    landscaping += 2;
  } else landscaping += 2;

  if (inputs.growthAmbition === "multi-location") hvac += 3;
  else if (inputs.growthAmbition === "regional") hvac += 2;
  else landscaping += 2;

  return hvac >= landscaping ? "HVAC" : "Landscaping";
}

export const decisionToolCopy = {
  left:
    "HVAC is the better fit — higher revenue, stronger margins, skilled-trade pricing power, and premium valuation multiples.",
  right:
    "Landscaping aligns with your goals — low startup capital, outdoor route-based work, fast break-even, and recurring weekly contracts.",
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
