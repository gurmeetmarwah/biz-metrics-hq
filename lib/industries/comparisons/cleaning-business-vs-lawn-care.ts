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

export const comparisonMeta = {
  slug: "cleaning-business-vs-lawn-care",
  title: "Cleaning Business vs Lawn Care",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, route economics, recurring revenue, seasonality, scalability, and valuation benchmarks.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...cleaningHubLabels,
  right: "Lawn Care",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Lawn Care" },
  { factor: "Higher Profit Margins", winner: "Tie" },
  { factor: "Lower Startup Cost", winner: "Cleaning Business" },
  { factor: "Recurring Revenue", winner: "Lawn Care" },
  { factor: "Year-Round Demand", winner: "Cleaning Business" },
  { factor: "Route Density", winner: "Lawn Care" },
  { factor: "Operational Simplicity", winner: "Tie" },
  { factor: "Valuation Multiples", winner: "Tie" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: cleaningKpis.annualRevenue, right: "$300K – $1.2M" },
  { metric: "Net Profit Margin", left: cleaningKpis.netMargin, right: "10 – 20%" },
  { metric: "Owner Compensation", left: cleaningKpis.ownerComp, right: "$60K – $120K" },
  { metric: "Revenue Per Crew", left: cleaningKpis.revenuePerCleaner, right: "$120K – $200K" },
  { metric: "Startup Cost", left: cleaningKpis.startup, right: "$25K – $75K" },
  { metric: "Business Value", left: cleaningKpis.valuation, right: "1.5× – 2.5× SDE" },
  { metric: "Recurring Contract %", left: cleaningKpis.recurringPct, right: "80 – 95%" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 5, right: 6, winner: "Lawn Care" },
  { label: "Profit Margin", left: 7, right: 7, winner: "Tie" },
  { label: "Recurring Revenue", left: 7, right: 10, winner: "Lawn Care" },
  { label: "Low Capital Entry", left: 10, right: 8, winner: "Cleaning Business" },
] as const;

export const leftRevenueSources = cleaningRevenueSources;

export const rightRevenueSources = [
  "Weekly Mowing Routes",
  "Fertilization & Weed Control",
  "Aeration & Overseeding",
  "Leaf Cleanup & Seasonal Services",
  "Basic Bed Maintenance",
] as const;

export const revenueFunnel = {
  left: [...cleaningRevenueFunnel],
  right: ["Lead", "Estimate", "Route Add", "Weekly Service", "Seasonal Upsell", "Revenue"],
} as const;

export const patientFunnel = {
  left: [...cleaningCustomerFunnel],
  right: ["Homeowner", "Weekly Mow", "Fertilization Plan", "Seasonal Add-On", "Renewal"],
} as const;

export const operatoryFunnel = {
  left: [...cleaningOperatoryFunnel],
  right: ["Crew", "Stops", "Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Field Staff Count", left: "2 – 20 cleaners", right: "2 – 12 crew members" },
  { driver: "Average Service Ticket", left: "$100 – $250", right: "$30 – $65 (weekly)" },
  { driver: "Annual Contract Value", left: "$1,200 – $4,800", right: "$1,200 – $2,400" },
  { driver: "Recurring Revenue", left: "50 – 75% of revenue", right: "80 – 95% of revenue" },
] as const;

export const patientEconomicsMetrics = [
  { metric: "Customer Lifetime Value", left: "$800 – $2,500", right: "$600 – $1,800" },
  { metric: "Visits Per Year", left: "12 – 52 (weekly/biweekly)", right: "26 – 36 (weekly mow)" },
  { metric: "Average Ticket", left: "$100 – $250", right: "$30 – $65/week" },
  { metric: "Contract Retention", left: "70 – 85%", right: "80 – 92%" },
] as const;

export const operatoryMetrics = [
  { metric: "Revenue Per Crew", left: "$80K – $150K", right: "$120K – $200K" },
  { metric: "Stops Per Day", left: "4 – 8 properties", right: "25 – 45 stops/day" },
  { metric: "Labor Cost % of Revenue", left: "40 – 55%", right: "35 – 50%" },
] as const;

export const marginTiers = {
  left: cleaningMarginTiers,
  right: { weak: "6 – 10%", average: "11 – 16%", strong: "17 – 22%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor", left: "40 – 55%", right: "35 – 50%" },
  { expense: "Supplies/Materials", left: "5 – 10%", right: "8 – 14%" },
  { expense: "Fleet & Equipment", left: "4 – 8%", right: "6 – 12%" },
  { expense: "Marketing", left: "5 – 12%", right: "3 – 7%" },
] as const;

export const insuranceHighlights = {
  left: cleaningInsuranceHighlight,
  right: { title: "Pure Recurring Model", value: "80 – 95% weekly route revenue" },
} as const;

export const insuranceComparison = [
  { metric: "Recurring Contract Revenue", left: "50 – 75%", right: "80 – 95%" },
  { metric: "One-Time/Project Revenue", left: "15 – 35%", right: "0 – 10%" },
  { metric: "Commercial Contract Revenue", left: "25 – 45%", right: "10 – 25%" },
  { metric: "Seasonal Revenue Swing", left: "Low – Moderate", right: "Moderate" },
] as const;

export const ownerIncomeComparison = [
  { model: "Solo Cleaning Operator", earnings: "$40K – $65K", type: "left" },
  { model: "Multi-Crew Cleaning Operator", earnings: "$80K – $140K+", type: "left" },
  { model: "Solo Lawn Care Operator", earnings: "$50K – $75K", type: "right" },
  { model: "Multi-Crew Lawn Care Operator", earnings: "$90K – $140K+", type: "right" },
] as const;

export const leftStartupItems = cleaningStartupItems;

export const rightStartupItems = [
  { item: "Mowers & Equipment", percent: 35 },
  { item: "Truck & Trailer", percent: 25 },
  { item: "Marketing Launch", percent: 15 },
  { item: "Working Capital", percent: 25 },
] as const;

export const startupSideBySide = [
  { category: "Equipment", left: cleaningStartupSideBySide.equipment, right: "$8K – $25K" },
  { category: "Vehicles", left: cleaningStartupSideBySide.vehicles, right: "$10K – $30K" },
  { category: "Marketing Launch", left: cleaningStartupSideBySide.marketing, right: "$5K – $15K" },
  { category: "Total Launch Budget", left: cleaningStartupSideBySide.total, right: "$25K – $75K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: cleaningValuation.sde, right: "1.5× – 2.5×" },
  { metric: "Revenue Multiple", left: cleaningValuation.revenue, right: "0.25× – 0.50×" },
  { metric: "EBITDA Multiple", left: cleaningValuation.ebitda, right: "2.0× – 3.5×" },
] as const;

export const valuationExamples = {
  left: cleaningValuation.example,
  right: { revenue: "$600K", value: "$180K – $300K", note: "2.0× SDE on $120K SDE" },
} as const;

export const valuationExampleTitle = "$500K+ Revenue Company → Estimated Value";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: "$18K – $35K", right: "$25K – $45K" },
  { metric: "Accounts Needed (active)", left: "40 – 120 recurring clients", right: "80 – 180 weekly stops" },
  { metric: "Months To Break-Even", left: "3 – 9 months", right: "3 – 8 months" },
  { metric: "Staff at Break-Even", left: "2 – 6 cleaners", right: "1 – 2 crews" },
] as const;

export const scalingLadder = {
  left: [...cleaningScalingLadder],
  right: ["Solo Route", "2 – 3 Crews", "Route Density", "Regional Mowing Brand"],
} as const;

export const scalingLeftTitle = "Cleaning Business Growth Path";
export const scalingRightTitle = "Lawn Care Growth Path";

export const capitalEfficiency = {
  investment: "$50,000",
  left: cleaningCapitalEfficiency,
  right: { revenue: "$500K – $900K", profit: "$75K – $150K net profit", payback: "1.5 – 3 years" },
} as const;

export const chooseLeftTitle = "Choose a Cleaning Business If";
export const chooseRightTitle = "Choose Lawn Care If";

export const chooseLeft = [
  "You want year-round indoor demand without weather-dependent seasonality",
  "You prefer serving both residential and commercial clients indoors",
  "You want the absolute lowest startup cost in home services",
  "You value higher per-job ticket prices on deep cleans and specialty services",
  "You're targeting Airbnb, office, and property management cleaning demand",
] as const;

export const chooseRight = [
  "You want the highest recurring revenue percentage (80–95% weekly routes)",
  "You prefer outdoor work with simple, repeatable weekly mowing operations",
  "You want strong route density economics with 25–45 stops per day",
  "You're comfortable with moderate seasonal slowdowns in winter months",
  "You value a proven solo-to-multi-crew scaling model in green industry",
] as const;

export const calculators = cleaningCalculators;

export const relatedComparisons = [
  { label: "Cleaning vs Landscaping", href: "/comparisons/cleaning-business-vs-landscaping/" },
  { label: "Cleaning vs HVAC", href: "/comparisons/cleaning-business-vs-hvac/" },
  { label: "Landscaping vs Lawn Care", href: "/comparisons/landscaping-vs-lawn-care/" },
  { label: "Pest Control vs Lawn Care", href: "/comparisons/pest-control-vs-lawn-care/" },
  { label: "Cleaning Business Hub", href: "/industries/cleaning-business/" },
] as const;

export const faqs = [
  {
    question: "Which generates more revenue — cleaning or lawn care?",
    answer:
      "Lawn care companies typically reach slightly higher median revenue (~$550K vs ~$500K for cleaning businesses). Lawn care benefits from dense weekly routes and fertilization upsells. Cleaning revenue is comparable but more diversified across residential and commercial indoor services.",
  },
  {
    question: "Which has better profit margins?",
    answer:
      "Both industries achieve similar net margins — cleaning median ~15% and lawn care ~14%. Cleaning margins benefit from higher per-job tickets on deep cleans. Lawn care margins benefit from route density and operational simplicity on weekly mowing.",
  },
  {
    question: "Which is cheaper to start?",
    answer:
      "Cleaning businesses are slightly lower capital at $10K–$75K versus $25K–$75K for lawn care. Both are among the lowest startup costs in home services, but cleaning requires less equipment (no mowers, trailers, or commercial-grade outdoor gear).",
  },
  {
    question: "Which has more recurring revenue?",
    answer:
      "Lawn care dominates recurring revenue with 80–95% from weekly mowing routes. Cleaning recurring schedules represent 50–75% of revenue — solid but lower, with more one-time deep clean and move-out project revenue.",
  },
  {
    question: "Which is better for year-round income?",
    answer:
      "Cleaning businesses offer more consistent year-round demand since indoor cleaning isn't weather-dependent. Lawn care faces winter slowdowns in most climates, though snow removal and holiday lighting can offset in northern markets.",
  },
  {
    question: "How do valuation multiples compare?",
    answer:
      "Cleaning companies sell at 1.8×–3.0× SDE (median ~2.4×) while lawn care routes trade at 1.5×–2.5× SDE (median ~2.0×). Cleaning commands slightly higher multiples due to commercial contract diversification and year-round revenue stability.",
  },
] as const;

export type DecisionInputs = HealthcareDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  let cleaning = 0;
  let lawnCare = 0;

  if (inputs.clinicalInterest === "specialty") cleaning += 2;
  else lawnCare += 2;

  if (inputs.revenueGoal === "very-high") lawnCare += 2;
  else if (inputs.revenueGoal === "high") {
    lawnCare += 1;
    cleaning += 1;
  } else cleaning += 2;

  if (inputs.insuranceComfort === "high") cleaning += 2;
  else lawnCare += 2;

  if (inputs.growthAmbition === "multi-location") lawnCare += 2;
  else if (inputs.growthAmbition === "regional") {
    lawnCare += 1;
    cleaning += 1;
  } else cleaning += 2;

  return cleaning >= lawnCare ? "Cleaning Business" : "Lawn Care";
}

export const decisionToolCopy = {
  left:
    "A cleaning business aligns with your goals — year-round demand, lowest startup cost, indoor commercial opportunity, and higher per-job ticket prices.",
  right:
    "Lawn care is the better fit — highest recurring mix, proven route density model, outdoor lifestyle, and strong weekly subscription economics.",
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
