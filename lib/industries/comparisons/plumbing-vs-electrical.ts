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
  slug: "plumbing-vs-electrical",
  title: "Plumbing vs Electrical",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, technician productivity, commercial mix, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...plumbingHubLabels,
  right: "Electrical",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Electrical" },
  { factor: "Higher Profit Margins", winner: "Plumbing" },
  { factor: "Lower Startup Cost", winner: "Plumbing" },
  { factor: "Commercial Project Revenue", winner: "Electrical" },
  { factor: "Emergency/Reactive Demand", winner: "Plumbing" },
  { factor: "Recurring Revenue", winner: "Plumbing" },
  { factor: "Licensing Barrier", winner: "Electrical" },
  { factor: "Valuation Multiples", winner: "Plumbing" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: plumbingKpis.annualRevenue, right: "$1.0M – $3.2M" },
  { metric: "Net Profit Margin", left: plumbingKpis.netMargin, right: "7 – 13%" },
  { metric: "Owner Compensation", left: plumbingKpis.ownerComp, right: "$90K – $175K" },
  { metric: "Revenue Per Technician", left: plumbingKpis.revenuePerTech, right: "$165K – $295K" },
  { metric: "Startup Cost", left: plumbingKpis.startup, right: "$175K – $450K" },
  { metric: "Business Value", left: plumbingKpis.valuation, right: "2.3× – 3.4× SDE" },
  { metric: "Commercial Revenue %", left: "15 – 30%", right: "35 – 55%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 7, right: 8, winner: "Electrical" },
  { label: "Profit Margin", left: 8, right: 7, winner: "Plumbing" },
  { label: "Emergency Demand", left: 9, right: 5, winner: "Plumbing" },
  { label: "Commercial Growth", left: 6, right: 10, winner: "Electrical" },
] as const;

export const leftRevenueSources = plumbingRevenueSources;

export const rightRevenueSources = [
  "Residential Electrical Service",
  "Panel Upgrades & Rewiring",
  "Commercial Electrical Contracts",
  "New Construction Rough-In",
  "EV Charger Installations",
] as const;

export const revenueFunnel = {
  left: [...plumbingRevenueFunnel],
  right: ["Bid/Lead", "Estimate", "Permit", "Install/Service", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...plumbingCustomerFunnel],
  right: ["Customer", "Service/Project", "Repeat Work", "Panel/Upgrade", "Referral"],
} as const;

export const operatoryFunnel = {
  left: [...plumbingOperatoryFunnel],
  right: ["Electrician", "Jobs", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "4 – 14 plumbers", right: "5 – 16 electricians" },
  { driver: "Average Service Ticket", left: "$275 – $525", right: "$300 – $600" },
  { driver: "Project Ticket", left: "$2K – $8K", right: "$3K – $25K" },
  { driver: "Recurring Revenue", left: "10 – 25% of revenue", right: "8 – 20% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$1,200 – $3,200", right: "$1,400 – $3,800" },
  { metric: "Jobs Per Year (Active Customer)", left: "1 – 3", right: "1 – 2" },
  { metric: "Average Ticket (Service)", left: "$275 – $525", right: "$300 – $600" },
  { metric: "Commercial Mix", left: "15 – 30%", right: "35 – 55%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Technician", left: "$150K – $280K", right: "$165K – $295K" },
  { metric: "Jobs Per Day", left: "4 – 8", right: "3 – 6" },
  { metric: "Revenue Per Job", left: "$275 – $525", right: "$300 – $600" },
] as const;

export const marginTiers = {
  left: plumbingMarginTiers,
  right: { weak: "4 – 6%", average: "7 – 11%", strong: "12 – 14%" },
} as const;

export const costStructureComparison = [
  { expense: "Technician Payroll", left: "30 – 40%", right: "32 – 42%" },
  { expense: "Materials & Parts", left: "16 – 24%", right: "20 – 28%" },
  { expense: "Fleet & Vehicles", left: "5 – 9%", right: "5 – 9%" },
  { expense: "Marketing", left: "6 – 10%", right: "4 – 8%" },
] as const;

export const insuranceHighlights = {
  left: plumbingInsuranceHighlight,
  right: { title: "Commercial Project Driver", value: "35 – 55% commercial revenue" },
} as const;

export const insuranceComparison = [
  { metric: "Maintenance/Contract Revenue", left: "10 – 25%", right: "8 – 20%" },
  { metric: "Emergency Call Revenue", left: "20 – 35%", right: "5 – 12%" },
  { metric: "New Construction Revenue", left: "15 – 25%", right: "25 – 40%" },
  { metric: "Commercial Service Contracts", left: "15 – 30%", right: "35 – 55%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Small Plumbing Owner", earnings: "$85K – $115K", type: "left" },
  { model: "Multi-Crew Plumbing Operator", earnings: "$150K – $280K+", type: "left" },
  { model: "Small Electrical Contractor", earnings: "$90K – $125K", type: "right" },
  { model: "Multi-Crew Electrical Operator", earnings: "$160K – $300K+", type: "right" },
] as const;

export const leftStartupItems = plumbingStartupItems;

export const rightStartupItems = [
  { item: "Vehicles & Tools", percent: 28 },
  { item: "Testing Equipment", percent: 22 },
  { item: "Marketing Launch", percent: 16 },
  { item: "Working Capital", percent: 34 },
] as const;

export const startupSideBySide = [
  { category: "Vehicles & Equipment", left: plumbingStartupSideBySide.vehicles, right: "$70K – $180K" },
  { category: "Tools & Inventory", left: plumbingStartupSideBySide.inventory, right: "$35K – $90K" },
  { category: "Marketing Launch", left: plumbingStartupSideBySide.marketing, right: "$20K – $55K" },
  { category: "Total Launch Budget", left: plumbingStartupSideBySide.total, right: "$175K – $450K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: plumbingValuation.sde, right: "2.3× – 3.4×" },
  { metric: "Revenue Multiple", left: plumbingValuation.revenue, right: "0.5× – 0.9×" },
  { metric: "EBITDA Multiple", left: plumbingValuation.ebitda, right: "3.8× – 5.8×" },
] as const;

export const valuationExamples = {
  left: plumbingValuation.example,
  right: { revenue: "$2.0M", value: "$850K – $1.36M", note: "2.8× SDE on $380K SDE" },
} as const;

export const valuationExampleTitle = "$2M Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$120K – $180K", right: "$150K – $220K" },
  { metric: "Jobs Needed (daily, all techs)", left: "16 – 24/day", right: "14 – 22/day" },
  { metric: "Months To Break-Even", left: "10 – 20 months", right: "12 – 22 months" },
  { metric: "Field Staff at Break-Even", left: "4 – 8 plumbers", right: "5 – 9 electricians" },
] as const;

export const scalingLadder = {
  left: [...plumbingScalingLadder],
  right: ["1 Truck", "2 – 4 Electricians", "Commercial Bids", "Multi-Crew Operation"],
} as const;

export const scalingLeftTitle = "Plumbing Growth Path";
export const scalingRightTitle = "Electrical Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: plumbingCapitalEfficiency,
  right: { revenue: "$1.5M – $2.4M", profit: "$165K – $340K net profit", payback: "3 – 5 years" },
} as const;

export const chooseLeftTitle = "Choose Plumbing If";
export const chooseRightTitle = "Choose Electrical If";

export const chooseLeft = [
  "You want lower startup costs and faster break-even with a lean crew",
  "You prefer steady emergency and repair demand with recession-resistant call volume",
  "You want slightly stronger margins on residential service work",
  "You're building a capital-efficient multi-truck operation without heavy project bidding",
  "You value year-round reactive demand over construction-cycle exposure",
] as const;

export const chooseRight = [
  "You want exposure to commercial projects and new construction revenue",
  "You're interested in panel upgrades, rewiring, and EV charger growth",
  "You prefer project-based revenue with larger individual tickets",
  "You have master electrician credentials and commercial bidding experience",
  "You want diversified revenue across residential service and commercial installs",
] as const;

export const calculators = plumbingCalculators;

export const relatedComparisons = [
  { label: "Plumbing vs HVAC", href: "/comparisons/plumbing-vs-hvac/" },
  { label: "Plumbing vs Roofing", href: "/comparisons/plumbing-vs-roofing/" },
  { label: "Plumbing vs Landscaping", href: "/comparisons/plumbing-vs-landscaping/" },
  { label: "Plumbing vs Pest Control", href: "/comparisons/plumbing-vs-pest-control/" },
  { label: "Plumbing Industry Hub", href: "/industries/plumbing/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — plumbing or electrical?",
    answer:
      "Electrical contractors typically reach slightly higher median revenue (~$2.0M vs ~$1.6M for plumbing). Electrical businesses benefit from larger commercial project pipelines and new construction exposure. Plumbing revenue is solid with premium emergency call pricing but tends to run smaller on average ticket size.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Plumbing tends to run slightly higher net margins (median ~11% vs ~10% for electrical) due to emergency call pricing and lower competitive pressure on urgent repairs. Electrical contractors with strong commercial mix can reach 11–14%, but residential-only electrical shops often run thinner margins on competitive service calls.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Plumbing startups typically require $150K–$400K versus $175K–$450K for electrical. Plumbing can launch leaner with a single truck and basic tool inventory. Electrical requires testing equipment, permit workflows, and often higher working capital for commercial bidding.",
  },
  {
    question: "Which is better for commercial work?",
    answer:
      "Electrical contractors are structurally better positioned for commercial and new construction revenue, which often represents 35–55% of electrical company income versus 15–30% for typical plumbing operators. Commercial electrical requires licensing, bidding capability, and bonding.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Plumbing businesses sell at 2.2×–3.5× SDE (median ~2.8×) while electrical contractors trade at 2.3×–3.4× SDE (median ~2.8×). Multiples are comparable, with plumbing benefiting from emergency demand stability and electrical from commercial project pipelines.",
  },
  {
    question: "What does $250K produce in each trade?",
    answer:
      "A $250K plumbing investment typically supports $1.2M–$2.0M revenue and $144K–$280K net profit with 2.5–4 year payback. The same capital in electrical often supports $1.5M–$2.4M revenue and $165K–$340K net profit, with commercial-heavy electrical shops at the higher end.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let plumbing = 0;
  let electrical = 0;

  if (inputs.clinicalInterest === "specialty") electrical += 3;
  else plumbing += 2;

  if (inputs.revenueGoal === "very-high") electrical += 2;
  else if (inputs.revenueGoal === "high") {
    electrical += 2;
    plumbing += 1;
  } else plumbing += 2;

  if (inputs.insuranceComfort === "high") plumbing += 2;
  else if (inputs.insuranceComfort === "medium") {
    plumbing += 1;
    electrical += 1;
  } else plumbing += 1;

  if (inputs.growthAmbition === "multi-location") electrical += 2;
  else if (inputs.growthAmbition === "regional") {
    plumbing += 2;
    electrical += 2;
  } else plumbing += 2;

  return plumbing >= electrical ? "Plumbing" : "Electrical";
}

export const decisionToolCopy = {
  left:
    "Plumbing aligns with your goals — lower startup costs, emergency-driven demand, steady margins, and capital-efficient crew-based growth.",
  right:
    "Electrical is the better fit — commercial project revenue, construction exposure, panel upgrades, and larger individual project tickets.",
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
