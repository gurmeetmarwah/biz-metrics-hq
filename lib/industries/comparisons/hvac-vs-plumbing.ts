import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";

export const comparisonMeta = {
  slug: "hvac-vs-plumbing",
  title: "HVAC vs Plumbing",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, technician productivity, recurring revenue, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  left: "HVAC",
  right: "Plumbing",
  breadcrumbHub: {
    label: "HVAC",
    href: "/industries/hvac/",
  },
  exploreHub: {
    label: "Explore HVAC Hub →",
    href: "/industries/hvac/",
  },
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "HVAC" },
  { factor: "Higher Profit Margins", winner: "HVAC" },
  { factor: "Lower Startup Cost", winner: "Plumbing" },
  { factor: "Recurring Revenue (Maintenance Plans)", winner: "HVAC" },
  { factor: "Emergency Call Volume", winner: "Plumbing" },
  { factor: "Seasonality Risk", winner: "Plumbing" },
  { factor: "Scalability", winner: "HVAC" },
  { factor: "Valuation Multiples", winner: "HVAC" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: "$1.2M – $3.8M", right: "$800K – $2.5M" },
  { metric: "Net Profit Margin", left: "8 – 16%", right: "8 – 14%" },
  { metric: "Owner Compensation", left: "$95K – $185K", right: "$85K – $165K" },
  { metric: "Revenue Per Technician", left: "$180K – $320K", right: "$150K – $280K" },
  { metric: "Startup Cost", left: "$200K – $500K", right: "$150K – $400K" },
  { metric: "Business Value", left: "2.4× – 3.8× SDE", right: "2.2× – 3.5× SDE" },
  { metric: "Maintenance Contract %", left: "25 – 45%", right: "10 – 25%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 10, right: 7, winner: "HVAC" },
  { label: "Profit Margin", left: 9, right: 8, winner: "HVAC" },
  { label: "Recurring Revenue", left: 10, right: 6, winner: "HVAC" },
  { label: "Capital Efficiency", left: 7, right: 9, winner: "Plumbing" },
] as const;

export const leftRevenueSources = [
  "Residential Service & Repair",
  "Maintenance Agreements",
  "System Installations",
  "Commercial Service Contracts",
  "Emergency After-Hours Calls",
] as const;

export const rightRevenueSources = [
  "Drain & Sewer Service",
  "Water Heater Repair/Replace",
  "Repipe & Remodel Plumbing",
  "Commercial Service",
  "Emergency Leak Response",
] as const;

export const revenueFunnel = {
  left: ["Lead", "Dispatch", "Diagnosis", "Repair/Install", "Maintenance Plan", "Revenue"],
  right: ["Call/Lead", "Dispatch", "Diagnosis", "Repair/Replace", "Revenue"],
} as const;

export const patientFunnel = {
  left: ["Homeowner", "Service Call", "Maintenance Plan", "Annual Tune-Ups", "Replacement Cycle"],
  right: ["Homeowner", "Service Call", "Repeat Repairs", "Upgrade/Repipe", "Referral"],
} as const;

export const operatoryFunnel = {
  left: ["Technician", "Jobs", "Revenue"],
  right: ["Plumber", "Jobs", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Technician Count", left: "6 – 18 field techs", right: "4 – 14 field techs" },
  { driver: "Average Service Ticket", left: "$350 – $650", right: "$275 – $525" },
  { driver: "Install Ticket", left: "$6K – $14K", right: "$2K – $8K" },
  { driver: "Maintenance Revenue", left: "25 – 45% of revenue", right: "10 – 25% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$1,800 – $4,500", right: "$1,200 – $3,200" },
  { metric: "Jobs Per Year (Active Customer)", left: "2 – 4", right: "1 – 3" },
  { metric: "Average Ticket (Service)", left: "$350 – $650", right: "$275 – $525" },
  { metric: "Retention (Maintenance Plans)", left: "70 – 85%", right: "40 – 60%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Technician", left: "$180K – $320K", right: "$150K – $280K" },
  { metric: "Jobs Per Day", left: "4 – 7", right: "4 – 8" },
  { metric: "Revenue Per Job", left: "$350 – $650", right: "$275 – $525" },
] as const;

export const marginTiers = {
  left: { weak: "4 – 7%", average: "8 – 12%", strong: "13 – 16%" },
  right: { weak: "4 – 7%", average: "8 – 11%", strong: "12 – 15%" },
} as const;

export const costStructureComparison = [
  { expense: "Technician Payroll", left: "28 – 38%", right: "30 – 40%" },
  { expense: "Materials & Parts", left: "18 – 26%", right: "16 – 24%" },
  { expense: "Fleet & Vehicles", left: "6 – 10%", right: "5 – 9%" },
  { expense: "Marketing", left: "5 – 9%", right: "6 – 10%" },
] as const;

export const insuranceHighlights = {
  left: {
    title: "Recurring Revenue Engine",
    value: "35%+ from maintenance plans",
  },
  right: {
    title: "Emergency Demand Driver",
    value: "20 – 35% from emergency calls",
  },
} as const;

export const insuranceComparison = [
  { metric: "Maintenance Contract Revenue", left: "25 – 45%", right: "10 – 25%" },
  { metric: "Emergency Call Revenue", left: "10 – 18%", right: "20 – 35%" },
  { metric: "New Construction/Remodel", left: "25 – 35%", right: "20 – 30%" },
  { metric: "Seasonal Revenue Swing", left: "Moderate – High", right: "Low – Moderate" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small HVAC Owner", earnings: "$95K – $120K", type: "left" },
  { model: "Multi-Truck HVAC Operator", earnings: "$185K – $350K+", type: "left" },
  { model: "Small Plumbing Owner", earnings: "$85K – $115K", type: "right" },
  { model: "Multi-Crew Plumbing Operator", earnings: "$150K – $280K+", type: "right" },
] as const;

export const leftStartupItems = [
  { item: "Vehicles & Equipment", percent: 35 },
  { item: "Inventory & Tools", percent: 22 },
  { item: "Marketing Launch", percent: 15 },
  { item: "Working Capital", percent: 28 },
] as const;

export const rightStartupItems = [
  { item: "Vehicles & Equipment", percent: 30 },
  { item: "Inventory & Tools", percent: 20 },
  { item: "Marketing Launch", percent: 18 },
  { item: "Working Capital", percent: 32 },
] as const;

export const startupSideBySide = [
  { category: "Vehicles & Equipment", left: "$80K – $200K", right: "$60K – $150K" },
  { category: "Inventory & Tools", left: "$40K – $100K", right: "$30K – $80K" },
  { category: "Marketing Launch", left: "$25K – $60K", right: "$20K – $50K" },
  { category: "Total Launch Budget", left: "$200K – $500K", right: "$150K – $400K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: "2.4× – 3.8×", right: "2.2× – 3.5×" },
  { metric: "Revenue Multiple", left: "0.6× – 1.1×", right: "0.5× – 0.9×" },
  { metric: "EBITDA Multiple", left: "4.0× – 6.5×", right: "3.5× – 5.5×" },
] as const;

export const valuationExamples = {
  left: { revenue: "$2.4M", value: "$1.04M – $1.65M", note: "3.1× SDE on $433K SDE" },
  right: { revenue: "$1.6M", value: "$700K – $1.12M", note: "2.8× SDE on $320K SDE" },
} as const;

export const valuationExampleTitle = "$2M Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$180K – $250K", right: "$120K – $180K" },
  { metric: "Jobs Needed (daily, all techs)", left: "18 – 28/day", right: "16 – 24/day" },
  { metric: "Months To Break-Even", left: "12 – 24 months", right: "10 – 20 months" },
  { metric: "Technicians at Break-Even", left: "6 – 10 techs", right: "4 – 8 techs" },
] as const;

export const scalingLadder = {
  left: ["1 Truck", "3 – 5 Techs", "Maintenance Plan Base", "Multi-Location"],
  right: ["1 Truck", "2 – 4 Plumbers", "Commercial Accounts", "Multi-Crew Operation"],
} as const;

export const scalingLeftTitle = "HVAC Growth Path";
export const scalingRightTitle = "Plumbing Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: {
    revenue: "$1.8M – $2.8M",
    profit: "$216K – $420K net profit",
    payback: "3 – 5 years",
  },
  right: {
    revenue: "$1.2M – $2.0M",
    profit: "$144K – $280K net profit",
    payback: "2.5 – 4 years",
  },
} as const;

export const chooseLeftTitle = "Choose HVAC If";
export const chooseRightTitle = "Choose Plumbing If";

export const chooseLeft = [
  "You want higher revenue potential and larger average install tickets",
  "You want to build recurring revenue through maintenance agreements",
  "You're comfortable with seasonal demand swings and equipment-heavy operations",
  "You want stronger valuation multiples and acquisition interest from consolidators",
  "You prefer commercial service contracts alongside residential work",
] as const;

export const chooseRight = [
  "You want lower startup costs and faster path to break-even",
  "You prefer steady emergency and repair demand with less seasonality",
  "You want simpler install projects and more frequent service calls",
  "You're starting with a smaller crew and want capital-efficient growth",
  "You value year-round demand in most climates over HVAC's seasonal peaks",
] as const;

export const calculators = [
  { label: "HVAC Revenue Per Technician Calculator", href: "/calculators/hvac-revenue-per-technician/" },
  { label: "HVAC Profit Margin Calculator", href: "/calculators/hvac-profit-margin/" },
  { label: "HVAC Valuation Calculator", href: "/calculators/hvac-valuation/" },
  { label: "HVAC Break-Even Calculator", href: "/calculators/hvac-break-even/" },
] as const;

export const relatedComparisons = [
  { label: "HVAC vs Electrical", href: "/comparisons/hvac-vs-electrical/" },
  { label: "HVAC vs Roofing", href: "/comparisons/hvac-vs-roofing/" },
  { label: "HVAC vs Landscaping", href: "/comparisons/hvac-vs-landscaping/" },
  { label: "HVAC Industry Hub", href: "/industries/hvac/" },
] as const;

export const faqs = [
  {
    question: "Which business generates more revenue — HVAC or plumbing?",
    answer:
      "HVAC companies typically generate higher annual revenue, with a median around $2.4M versus $1.6M for plumbing contractors. HVAC benefits from larger install tickets ($6K–$14K system replacements) and strong maintenance plan penetration. Plumbing revenue is solid but tends to run smaller on average ticket size.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "HVAC and plumbing margins are comparable, with HVAC slightly ahead at a median ~12% net margin versus ~11% for plumbing. HVAC companies with 35%+ maintenance contract revenue often reach 13–16%. Plumbing benefits from lower equipment overhead but faces competitive pricing on common repairs.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Plumbing startups typically require $150K–$400K all-in versus $200K–$500K for HVAC. HVAC demands more specialized equipment, larger inventory for install jobs, and often higher vehicle setup costs. Plumbing can launch leaner with a single truck and basic tool inventory.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "HVAC has a structural advantage in recurring revenue. Maintenance agreements and annual tune-ups commonly represent 25–45% of HVAC revenue. Plumbing maintenance plans exist but are less prevalent, with most revenue coming from reactive repairs and emergency calls.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "HVAC businesses typically sell at 2.4×–3.8× SDE (median ~3.1×) while plumbing companies trade at 2.2×–3.5× SDE (median ~2.8×). HVAC commands premium multiples due to maintenance contract value, higher revenue scale, and active acquisition interest from home services consolidators.",
  },
  {
    question: "What does $250K produce in each trade?",
    answer:
      "A $250K HVAC investment typically supports $1.8M–$2.8M revenue and $216K–$420K net profit with 3–5 year payback. The same capital in plumbing often supports $1.2M–$2.0M revenue and $144K–$280K net profit with faster 2.5–4 year payback due to lower overhead and quicker break-even.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let hvac = 0;
  let plumbing = 0;

  if (inputs.clinicalInterest === "specialty") {
    hvac += 2;
    plumbing += 2;
  } else {
    hvac += 1;
    plumbing += 2;
  }

  if (inputs.revenueGoal === "very-high") hvac += 3;
  else if (inputs.revenueGoal === "high") {
    hvac += 2;
    plumbing += 1;
  } else plumbing += 2;

  if (inputs.insuranceComfort === "high") hvac += 3;
  else if (inputs.insuranceComfort === "medium") {
    hvac += 1;
    plumbing += 1;
  } else plumbing += 1;

  if (inputs.growthAmbition === "multi-location") hvac += 3;
  else if (inputs.growthAmbition === "regional") hvac += 2;
  else plumbing += 2;

  return hvac >= plumbing ? "HVAC" : "Plumbing";
}

export const decisionToolCopy = {
  left:
    "HVAC is the better fit for your goals — higher revenue potential, maintenance contract recurring revenue, stronger valuation multiples, and multi-location scaling in home services.",
  right:
    "Plumbing aligns with your priorities — lower startup costs, faster break-even, steady emergency demand, less seasonality, and capital-efficient crew-based growth.",
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
