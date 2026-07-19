import type { BeautyDecisionInputs, BeautyDualComparisonData } from "./beauty-comparison-types";
import { scoreBeautyChoice } from "./beauty-comparison-types";
import {
  nailSalonCalculators,
  nailSalonHubLabels,
  nailSalonLeftBreakEven,
  nailSalonLeftCapitalEfficiency,
  nailSalonLeftClientEconomics,
  nailSalonLeftClientFunnel,
  nailSalonLeftCostStructure,
  nailSalonLeftKpis,
  nailSalonLeftMarginTiers,
  nailSalonLeftOwnerIncome,
  nailSalonLeftRecurringComparison,
  nailSalonLeftRecurringHighlight,
  nailSalonLeftRevenueFunnel,
  nailSalonLeftRevenueSources,
  nailSalonLeftScalingLadder,
  nailSalonLeftServiceFunnel,
  nailSalonLeftServiceMetrics,
  nailSalonLeftStartupItems,
  nailSalonLeftStartupSideBySide,
  nailSalonLeftValuation,
  nailSalonRelatedComparisons,
} from "./nail-salon-comparison-shared";

export const comparisonMeta = {
  slug: "nail-salon-vs-barbershop",
  title: "Nail Salon vs Barbershop",
  subtitle:
    "Compare revenue, average ticket, profit margins, startup costs, owner pay, and valuation between a high-volume nail salon and a high-volume barbershop.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...nailSalonHubLabels,
  right: "Barbershop",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Average Ticket", winner: "Nail Salon" },
  { factor: "Higher Visit Volume", winner: "Barbershop" },
  { factor: "Lower Startup Cost", winner: "Barbershop" },
  { factor: "Higher Net Margin", winner: "Barbershop" },
  { factor: "Broader Client Demographic", winner: "Nail Salon" },
  { factor: "Faster Service Turnover", winner: "Barbershop" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: nailSalonLeftKpis.annualRevenue, right: "$180K – $400K" },
  { metric: "Net Margin", left: nailSalonLeftKpis.netMargin, right: "12 – 20%" },
  { metric: "Owner Compensation", left: nailSalonLeftKpis.ownerComp, right: "$45K – $90K" },
  { metric: "Monthly Visits", left: nailSalonLeftKpis.monthlyVisits, right: "1,200 – 2,400" },
  { metric: "Average Ticket", left: "$30 – $60", right: "$25 – $45" },
  { metric: "Startup Cost", left: nailSalonLeftKpis.startup, right: "$60K – $180K" },
  { metric: "Valuation", left: nailSalonLeftKpis.valuation, right: "1.5× – 2.5× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Ticket Size", left: 6, right: 5, winner: "Nail Salon" },
  { label: "Visit Frequency", left: 8, right: 9, winner: "Barbershop" },
  { label: "Capital Barrier", left: 6, right: 8, winner: "Barbershop" },
  { label: "Client Demographic", left: 7, right: 5, winner: "Nail Salon" },
] as const;

export const leftRevenueSources = nailSalonLeftRevenueSources;

export const rightRevenueSources = [
  "Haircuts and fades",
  "Beard trims and grooming",
  "Hot-towel shaves",
  "Kids and senior cuts",
  "Grooming product sales",
  "Memberships and packages",
] as const;

export const revenueFunnel = {
  left: [...nailSalonLeftRevenueFunnel],
  right: ["Walk-in / Booking", "Cut or Shave", "Grooming Add-on", "Rebooking"],
} as const;

export const clientFunnel = {
  left: [...nailSalonLeftClientFunnel],
  right: ["New Client", "First Cut", "Regular Cadence", "Loyal Repeat Client"],
} as const;

export const serviceFunnel = {
  left: [...nailSalonLeftServiceFunnel],
  right: ["Chair Capacity", "Booked Utilization", "Cuts Per Day", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$30 – $60 service", right: "$25 – $45 cut/shave" },
  { driver: "Visit Frequency", left: "Every 2 – 4 weeks", right: "Every 2 – 4 weeks" },
  { driver: "Retail Mix", left: "3 – 7% of revenue", right: "3 – 6% of revenue" },
  { driver: "Service Time", left: "30 – 75 min per client", right: "20 – 40 min per client" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: nailSalonLeftClientEconomics[0].value, right: "$25 – $45" },
  { metric: "Annual Visits Per Client", left: nailSalonLeftClientEconomics[1].value, right: "10 – 18" },
  { metric: "Estimated Lifetime Value", left: nailSalonLeftClientEconomics[2].value, right: "$1,500 – $4,000" },
  { metric: "Client Retention", left: nailSalonLeftClientEconomics[3].value, right: "65 – 80%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Station/Chair", left: nailSalonLeftServiceMetrics[0].value, right: "$40K – $80K" },
  { metric: "Revenue Per Barber/Technician", left: nailSalonLeftServiceMetrics[1].value, right: "$55K – $95K" },
  { metric: "Chair Utilization", left: nailSalonLeftServiceMetrics[2].value, right: "70 – 85%" },
] as const;

export const marginTiers = {
  left: nailSalonLeftMarginTiers,
  right: { weak: "8 – 11%", average: "13 – 17%", strong: "18 – 24%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Commissions", left: nailSalonLeftCostStructure[0].value, right: "40 – 48%" },
  { expense: "Product COGS", left: nailSalonLeftCostStructure[1].value, right: "4 – 7%" },
  { expense: "Rent", left: nailSalonLeftCostStructure[2].value, right: "10 – 15%" },
  { expense: "Other Overhead", left: nailSalonLeftCostStructure[3].value, right: "10 – 16%" },
] as const;

export const recurringHighlights = {
  left: nailSalonLeftRecurringHighlight,
  right: { title: "High-Frequency Repeat Visits", value: "Every 2–4 weeks; memberships common" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: nailSalonLeftRecurringComparison[0].value, right: "55 – 70%" },
  { metric: "Retail Attachment", left: nailSalonLeftRecurringComparison[1].value, right: "3 – 6%" },
  { metric: "Membership Adoption", left: nailSalonLeftRecurringComparison[2].value, right: "10 – 25%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Nail Salon", earnings: nailSalonLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Multi-Station Nail Salon", earnings: nailSalonLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Owner-Operator Barbershop", earnings: "$45K – $90K", type: "right" },
  { model: "Multi-Chair Barbershop", earnings: "$95K – $160K", type: "right" },
] as const;

export const leftStartupItems = nailSalonLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout", percent: 33 },
  { item: "Chairs & Equipment", percent: 25 },
  { item: "Inventory", percent: 6 },
  { item: "Working Capital", percent: 14 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: nailSalonLeftStartupSideBySide.buildout, right: "$25K – $60K" },
  { category: "Equipment", left: nailSalonLeftStartupSideBySide.equipment, right: "$15K – $35K" },
  { category: "Inventory", left: nailSalonLeftStartupSideBySide.inventory, right: "$3K – $10K" },
  { category: "Total Launch Budget", left: nailSalonLeftStartupSideBySide.total, right: "$60K – $180K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: nailSalonLeftValuation.sde, right: "1.5× – 2.5×" },
  { metric: "Revenue Multiple", left: nailSalonLeftValuation.revenue, right: "0.35× – 0.6×" },
  { metric: "Typical Value", left: "$120K – $320K", right: "$110K – $300K" },
] as const;

export const valuationExamples = {
  left: nailSalonLeftValuation.example,
  right: { revenue: "$280K", value: "$75K – $130K", note: "2.0–2.5× SDE on $52K" },
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: nailSalonLeftBreakEven[0].value, right: "$16K – $24K" },
  { metric: "Visits Per Day", left: nailSalonLeftBreakEven[1].value, right: "30 – 55" },
  { metric: "Months to Break-Even", left: nailSalonLeftBreakEven[2].value, right: "9 – 18 months" },
] as const;

export const scalingLadder = {
  left: [...nailSalonLeftScalingLadder],
  right: ["Single Chair", "Multi-Chair Shop", "Add Booth Renters", "Second Location"],
} as const;

export const scalingLeftTitle = "Nail Salon Growth Path";
export const scalingRightTitle = "Barbershop Growth Path";

export const capitalEfficiency = {
  investment: "$125,000",
  left: nailSalonLeftCapitalEfficiency,
  right: {
    revenue: "$220K – $360K",
    profit: "$30K – $65K net profit",
    payback: "2 – 4 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Nail Salon If";
export const chooseRightTitle = "Choose a Barbershop If";

export const chooseLeft = [
  "You want higher average tickets from gel, art, and extensions",
  "You prefer a broader client demographic across genders and ages",
  "You like a wider service menu with upsell opportunities",
  "You plan to add waxing, lash, or other beauty services over time",
  "You want strong rebooking cadence with manicure and pedicure demand",
] as const;

export const chooseRight = [
  "You want high-volume, high-frequency repeat visits with fast turnover",
  "You prefer lower startup cost and simpler operations",
  "You like faster service times and quicker chair turnover",
  "You want strong net margins from low product cost",
  "You plan to use booth-rent chairs to scale with less overhead",
] as const;

export const calculators = nailSalonCalculators;

export const relatedComparisons = nailSalonRelatedComparisons;

export const faqs = [
  {
    question: "Is a nail salon or barbershop more profitable?",
    answer:
      "Barbershops often run slightly higher net margins (12–20%) than nail salons (10–17%) thanks to lower product costs and faster service times. Nail salons win on average ticket through gel and art services, so the more profitable model depends on volume vs ticket size.",
  },
  {
    question: "Which is cheaper to open, a nail salon or a barbershop?",
    answer:
      "A barbershop is usually slightly cheaper to open ($60K–$180K) than a nail salon ($70K–$180K) because it needs less ventilation and minimal chemical inventory. Both can reduce cost by leasing an existing salon or shop space.",
  },
  {
    question: "Does a nail salon or barbershop have more repeat visits?",
    answer:
      "Both see clients every 2–4 weeks. Barbershops often achieve higher daily visit counts through faster 20–40 minute services, while nail salons offset longer service times with higher tickets on gel and art.",
  },
  {
    question: "Which is easier to sell or value higher?",
    answer:
      "Nail salons and barbershops trade at similar multiples (1.5×–2.6× SDE). Nail salons may command slightly higher total sale prices due to broader demographics and higher tickets, while barbershops benefit from fast turnover and strong membership adoption.",
  },
  {
    question: "Can you combine a nail salon and barbershop?",
    answer:
      "Yes. Some operators run a hybrid beauty shop with nail stations and barber chairs to capture both high-ticket nail clients and high-frequency grooming clients, smoothing chair utilization across the week.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Nail Salon", "Barbershop", {
    ownerHandsOn: 2,
    ownerManager: 2,
    budgetLow: 2,
    budgetMedium: 1,
    budgetHigh: 2,
    revenueModerate: 2,
    revenueHigh: 1,
    revenueVeryHigh: 2,
    growthLifestyle: 2,
    growthExpand: 1,
    growthMulti: 2,
  });
}

export const decisionToolCopy = {
  left:
    "A nail salon aligns with your goals if you want higher average tickets, a broader client demographic, and a wider service menu with gel and art upsells.",
  right:
    "A barbershop is the better fit if you want lower startup cost, high-frequency repeat visits, faster chair turnover, and strong margins from low product cost.",
} as const;

export const beautyDualComparisonData: BeautyDualComparisonData = {
  comparisonMeta,
  comparisonLabels,
  decisionSnapshot,
  kpiComparison,
  winnerScorecard,
  leftRevenueSources,
  rightRevenueSources,
  revenueFunnel,
  revenueDrivers,
  clientFunnel,
  clientEconomicsMetrics,
  serviceFunnel,
  serviceMetrics,
  marginTiers,
  costStructureComparison,
  recurringHighlights,
  recurringComparison,
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
