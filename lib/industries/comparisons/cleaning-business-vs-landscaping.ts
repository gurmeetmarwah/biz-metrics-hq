import type { HealthcareDecisionInputs, HealthcareDualComparisonData } from "./healthcare-comparison-types";
import {
  cleaningCalculators,
  cleaningCapitalEfficiency,
  cleaningCustomerFunnel,
  cleaningHubLabels,
  cleaningInsuranceHighlight,
  cleaningKpis,
  cleaningMarginTiers,
  cleaningOperatoryFunnel,
  cleaningRevenueFunnel,
  cleaningRevenueSources,
  cleaningScalingLadder,
  cleaningStartupItems,
  cleaningStartupSideBySide,
  cleaningValuation,
} from "./cleaning-comparison-shared";
import {
  landscapingKpis,
  landscapingMarginTiers,
  landscapingRevenueSources,
  landscapingRevenueFunnel,
  landscapingCustomerFunnel,
  landscapingOperatoryFunnel,
  landscapingStartupItems,
  landscapingStartupSideBySide,
  landscapingValuation,
  landscapingScalingLadder,
  landscapingCapitalEfficiency,
  landscapingInsuranceHighlight,
} from "./landscaping-comparison-shared";

export const comparisonMeta = {
  slug: "cleaning-business-vs-landscaping",
  title: "Cleaning Business vs Landscaping",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, labor economics, recurring revenue, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...cleaningHubLabels,
  right: "Landscaping",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Landscaping" },
  { factor: "Higher Profit Margins", winner: "Cleaning Business" },
  { factor: "Lower Startup Cost", winner: "Cleaning Business" },
  { factor: "Recurring Revenue", winner: "Cleaning Business" },
  { factor: "Year-Round Demand", winner: "Cleaning Business" },
  { factor: "Revenue Per Employee", winner: "Landscaping" },
  { factor: "Operational Simplicity", winner: "Cleaning Business" },
  { factor: "Valuation Multiples", winner: "Landscaping" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: cleaningKpis.annualRevenue, right: landscapingKpis.annualRevenue },
  { metric: "Net Profit Margin", left: cleaningKpis.netMargin, right: landscapingKpis.netMargin },
  { metric: "Owner Compensation", left: cleaningKpis.ownerComp, right: landscapingKpis.ownerComp },
  { metric: "Revenue Per Employee", left: cleaningKpis.revenuePerCleaner, right: landscapingKpis.revenuePerCrew },
  { metric: "Startup Cost", left: cleaningKpis.startup, right: landscapingKpis.startup },
  { metric: "Business Value", left: cleaningKpis.valuation, right: landscapingKpis.valuation },
  { metric: "Recurring Contract %", left: cleaningKpis.recurringPct, right: landscapingKpis.maintenancePct },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 5, right: 8, winner: "Landscaping" },
  { label: "Profit Margin", left: 8, right: 6, winner: "Cleaning Business" },
  { label: "Recurring Revenue", left: 7, right: 7, winner: "Tie" },
  { label: "Low Capital Entry", left: 10, right: 6, winner: "Cleaning Business" },
] as const;

export const leftRevenueSources = cleaningRevenueSources;
export const rightRevenueSources = landscapingRevenueSources;

export const revenueFunnel = {
  left: [...cleaningRevenueFunnel],
  right: [...landscapingRevenueFunnel],
} as const;

export const patientFunnel = {
  left: [...cleaningCustomerFunnel],
  right: [...landscapingCustomerFunnel],
} as const;

export const operatoryFunnel = {
  left: [...cleaningOperatoryFunnel],
  right: [...landscapingOperatoryFunnel],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "2 – 20 cleaners", right: "8 – 30 crew members" },
  { driver: "Average Service Ticket", left: "$100 – $250", right: "$45 – $120 (weekly)" },
  { driver: "Project Ticket", left: "$200 – $800 (deep clean)", right: "$3K – $25K (install)" },
  { driver: "Recurring Revenue", left: "50 – 75% of revenue", right: "35 – 55% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$800 – $2,500", right: "$800 – $2,400" },
  { metric: "Visits Per Year", left: "12 – 52 (weekly/biweekly)", right: "26 – 40 (full service)" },
  { metric: "Average Ticket", left: "$100 – $250", right: "$45 – $120/week" },
  { metric: "Contract Retention", left: "70 – 85%", right: "75 – 90%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Employee", left: "$80K – $150K", right: "$200K – $350K" },
  { metric: "Stops Per Day", left: "4 – 8 properties", right: "12 – 25 properties/day" },
  { metric: "Labor Cost % of Revenue", left: "40 – 55%", right: "40 – 55%" },
] as const;

export const marginTiers = {
  left: cleaningMarginTiers,
  right: landscapingMarginTiers,
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "40 – 55%", right: "40 – 55%" },
  { expense: "Supplies/Materials", left: "5 – 10%", right: "12 – 20%" },
  { expense: "Fleet & Equipment", left: "4 – 8%", right: "8 – 14%" },
  { expense: "Marketing", left: "5 – 12%", right: "4 – 8%" },
] as const;

export const insuranceHighlights = {
  left: cleaningInsuranceHighlight,
  right: landscapingInsuranceHighlight,
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "50 – 75%", right: "35 – 55%" },
  { metric: "One-Time/Project Revenue", left: "15 – 35%", right: "15 – 30%" },
  { metric: "Commercial Contract Revenue", left: "25 – 45%", right: "25 – 45%" },
  { metric: "Seasonal Revenue Swing", left: "Low – Moderate", right: "Moderate – High" },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo Cleaning Operator", earnings: "$40K – $65K", type: "left" },
  { model: "Multi-Crew Cleaning Operator", earnings: "$80K – $140K+", type: "left" },
  { model: "Small Landscaping Owner", earnings: "$70K – $95K", type: "right" },
  { model: "Multi-Crew Landscaping Operator", earnings: "$120K – $200K+", type: "right" },
] as const;

export const leftStartupItems = cleaningStartupItems;
export const rightStartupItems = landscapingStartupItems;

export const startupSideBySide = [
  { category: "Equipment", left: cleaningStartupSideBySide.equipment, right: landscapingStartupSideBySide.equipment },
  { category: "Vehicles", left: cleaningStartupSideBySide.vehicles, right: landscapingStartupSideBySide.vehicles },
  { category: "Marketing Launch", left: cleaningStartupSideBySide.marketing, right: landscapingStartupSideBySide.marketing },
  { category: "Total Launch Budget", left: cleaningStartupSideBySide.total, right: landscapingStartupSideBySide.total },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: cleaningValuation.sde, right: landscapingValuation.sde },
  { metric: "Revenue Multiple", left: cleaningValuation.revenue, right: landscapingValuation.revenue },
  { metric: "EBITDA Multiple", left: cleaningValuation.ebitda, right: landscapingValuation.ebitda },
] as const;

export const valuationExamples = {
  left: cleaningValuation.example,
  right: landscapingValuation.example,
} as const;

export const valuationExampleTitle = "$500K+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$18K – $35K", right: "$60K – $100K" },
  { metric: "Accounts Needed (active)", left: "40 – 120 recurring clients", right: "150 – 350 weekly accounts" },
  { metric: "Months To Break-Even", left: "3 – 9 months", right: "6 – 14 months" },
  { metric: "Staff at Break-Even", left: "2 – 6 cleaners", right: "2 – 4 crews" },
] as const;

export const scalingLadder = {
  left: [...cleaningScalingLadder],
  right: [...landscapingScalingLadder],
} as const;

export const scalingLeftTitle = "Cleaning Business Growth Path";
export const scalingRightTitle = "Landscaping Growth Path";

export const capitalEfficiency = {
  investment: "$50,000",
  left: cleaningCapitalEfficiency,
  right: landscapingCapitalEfficiency,
} as const;

export const chooseLeftTitle = "Choose a Cleaning Business If";
export const chooseRightTitle = "Choose Landscaping If";

export const chooseLeft = [
  "You want the lowest startup cost and fastest path to solo-operator profitability",
  "You prefer year-round indoor demand without seasonal weather dependency",
  "You value higher net margins on residential and light commercial cleaning",
  "You want to start with minimal equipment and scale through hiring cleaners",
  "You prefer flexible scheduling without heavy equipment and crew management",
] as const;

export const chooseRight = [
  "You want higher revenue ceiling through commercial grounds and install projects",
  "You're targeting property management and HOA contract relationships",
  "You want higher revenue per crew and design/hardscape upsell opportunities",
  "You plan to build a full-service outdoor company beyond basic maintenance",
  "You're comfortable with seasonal revenue swings and equipment capital requirements",
] as const;

export const calculators = cleaningCalculators;

export const relatedComparisons = [
  { label: "Cleaning vs HVAC", href: "/comparisons/cleaning-business-vs-hvac/" },
  { label: "Cleaning vs Lawn Care", href: "/comparisons/cleaning-business-vs-lawn-care/" },
  { label: "Cleaning vs Pest Control", href: "/comparisons/pest-control-vs-cleaning-business/" },
  { label: "Landscaping vs Lawn Care", href: "/comparisons/landscaping-vs-lawn-care/" },
  { label: "Cleaning Business Hub", href: "/industries/cleaning-business/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — cleaning or landscaping?",
    answer:
      "Landscaping companies typically reach higher median revenue (~$1.1M vs ~$500K for cleaning businesses). Landscaping benefits from commercial grounds contracts, install projects, and higher revenue per crew. Cleaning revenue scales through client count but has a lower absolute ceiling.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Cleaning businesses have a margin advantage — median ~15% net versus ~8% for landscaping. Cleaning avoids heavy equipment depreciation and seasonal labor swings. Landscaping margins are compressed by competitive maintenance pricing and install project labor intensity.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Cleaning businesses are the lowest-capital entry at $10K–$75K for supplies, a vehicle, and marketing. Full landscaping requires $75K–$250K for mowers, trailers, trucks, and crew capacity.",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Cleaning businesses typically achieve 50–75% recurring revenue from weekly/biweekly schedules. Landscaping maintenance represents 35–55% of revenue — solid but lower, with more dependence on seasonal project work.",
  },
  {
    question: "Which is better for year-round income?",
    answer:
      "Cleaning businesses offer more consistent year-round demand since indoor cleaning isn't weather-dependent. Landscaping faces seasonal slowdowns in winter months in most climates, though snow removal can offset in northern markets.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Cleaning companies sell at 1.8×–3.0× SDE (median ~2.4×) while landscaping businesses trade at 1.8×–2.8× SDE (median ~2.2×). Both are moderate-multiple service businesses; landscaping commands slight premiums for commercial contract books.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let cleaning = 0;
  let landscaping = 0;

  if (inputs.clinicalInterest === "specialty") landscaping += 2;
  else cleaning += 2;

  if (inputs.revenueGoal === "very-high") landscaping += 3;
  else if (inputs.revenueGoal === "high") landscaping += 2;
  else cleaning += 2;

  if (inputs.insuranceComfort === "high") cleaning += 2;
  else landscaping += 1;

  if (inputs.growthAmbition === "multi-location") landscaping += 3;
  else if (inputs.growthAmbition === "regional") landscaping += 2;
  else cleaning += 2;

  return cleaning >= landscaping ? "Cleaning Business" : "Landscaping";
}

export const decisionToolCopy = {
  left:
    "A cleaning business aligns with your goals — lowest startup cost, higher margins, year-round demand, and fast solo-operator break-even.",
  right:
    "Landscaping is the better fit — higher revenue ceiling, commercial contract scale, install upsells, and stronger revenue per crew.",
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
