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
  slug: "nail-salon-vs-waxing-salon",
  title: "Nail Salon vs Waxing Salon",
  subtitle:
    "Compare revenue, average ticket, profit margins, startup costs, owner pay, and valuation between a high-volume nail salon and a high-frequency waxing salon.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...nailSalonHubLabels,
  right: "Waxing Salon",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Average Ticket", winner: "Nail Salon" },
  { factor: "Higher Visit Volume", winner: "Nail Salon" },
  { factor: "Lower Startup Cost", winner: "Waxing Salon" },
  { factor: "Broader Service Menu", winner: "Nail Salon" },
  { factor: "High-Frequency Visits", winner: "Tie" },
  { factor: "Higher Net Margin", winner: "Waxing Salon" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: nailSalonLeftKpis.annualRevenue, right: "$150K – $400K" },
  { metric: "Net Margin", left: nailSalonLeftKpis.netMargin, right: "12 – 20%" },
  { metric: "Owner Compensation", left: nailSalonLeftKpis.ownerComp, right: "$40K – $90K" },
  { metric: "Monthly Visits", left: nailSalonLeftKpis.monthlyVisits, right: "1,200 – 2,200" },
  { metric: "Average Ticket", left: "$30 – $60", right: "$35 – $75" },
  { metric: "Startup Cost", left: nailSalonLeftKpis.startup, right: "$60K – $160K" },
  { metric: "Valuation", left: nailSalonLeftKpis.valuation, right: "1.5× – 2.4× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Ticket Size", left: 6, right: 5, winner: "Nail Salon" },
  { label: "Visit Frequency", left: 8, right: 8, winner: "Tie" },
  { label: "Capital Barrier", left: 6, right: 7, winner: "Waxing Salon" },
  { label: "Service Breadth", left: 8, right: 5, winner: "Nail Salon" },
] as const;

export const leftRevenueSources = nailSalonLeftRevenueSources;

export const rightRevenueSources = [
  "Brazilian and bikini waxing",
  "Leg and arm waxing",
  "Facial and brow waxing",
  "Sugaring services",
  "Waxing packages and memberships",
  "Aftercare product sales",
] as const;

export const revenueFunnel = {
  left: [...nailSalonLeftRevenueFunnel],
  right: ["New Client", "Wax Booking", "Package / Membership", "Rebooking"],
} as const;

export const clientFunnel = {
  left: [...nailSalonLeftClientFunnel],
  right: ["New Client", "First Wax", "3–5 Week Cadence", "Loyal Repeat Client"],
} as const;

export const serviceFunnel = {
  left: [...nailSalonLeftServiceFunnel],
  right: ["Room / Bed Capacity", "Booked Utilization", "Average Ticket", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$30 – $60 service", right: "$35 – $75 wax" },
  { driver: "Visit Frequency", left: "Every 2 – 4 weeks", right: "Every 3 – 5 weeks" },
  { driver: "Add-on Mix", left: "Gel, art, extensions", right: "Packages, memberships" },
  { driver: "Service Time", left: "30 – 75 min per client", right: "15 – 45 min per wax" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: nailSalonLeftClientEconomics[0].value, right: "$35 – $75" },
  { metric: "Annual Visits Per Client", left: nailSalonLeftClientEconomics[1].value, right: "10 – 16" },
  { metric: "Estimated Lifetime Value", left: nailSalonLeftClientEconomics[2].value, right: "$1,400 – $3,800" },
  { metric: "Client Retention", left: nailSalonLeftClientEconomics[3].value, right: "58 – 76%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Room/Bed", left: nailSalonLeftServiceMetrics[0].value, right: "$45K – $95K" },
  { metric: "Revenue Per Esthetician", left: nailSalonLeftServiceMetrics[1].value, right: "$55K – $100K" },
  { metric: "Room Utilization", left: nailSalonLeftServiceMetrics[2].value, right: "68 – 84%" },
] as const;

export const marginTiers = {
  left: nailSalonLeftMarginTiers,
  right: { weak: "8 – 11%", average: "13 – 17%", strong: "19 – 24%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Commissions", left: nailSalonLeftCostStructure[0].value, right: "40 – 48%" },
  { expense: "Product COGS", left: nailSalonLeftCostStructure[1].value, right: "5 – 9%" },
  { expense: "Rent", left: nailSalonLeftCostStructure[2].value, right: "10 – 15%" },
  { expense: "Other Overhead", left: nailSalonLeftCostStructure[3].value, right: "10 – 16%" },
] as const;

export const recurringHighlights = {
  left: nailSalonLeftRecurringHighlight,
  right: { title: "High-Frequency Waxing Cadence", value: "Every 3–5 weeks; packages drive loyalty" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: nailSalonLeftRecurringComparison[0].value, right: "52 – 70%" },
  { metric: "Retail Attachment", left: nailSalonLeftRecurringComparison[1].value, right: "3 – 6%" },
  { metric: "Membership Adoption", left: nailSalonLeftRecurringComparison[2].value, right: "10 – 22%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Nail Salon", earnings: nailSalonLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Multi-Station Nail Salon", earnings: nailSalonLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Owner-Operator Waxing Salon", earnings: "$40K – $80K", type: "right" },
  { model: "Multi-Room Waxing Salon", earnings: "$80K – $130K", type: "right" },
] as const;

export const leftStartupItems = nailSalonLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout & Treatment Rooms", percent: 34 },
  { item: "Waxing Equipment & Beds", percent: 22 },
  { item: "Inventory & Supplies", percent: 8 },
  { item: "Working Capital", percent: 12 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: nailSalonLeftStartupSideBySide.buildout, right: "$22K – $55K" },
  { category: "Equipment", left: nailSalonLeftStartupSideBySide.equipment, right: "$12K – $30K" },
  { category: "Inventory", left: nailSalonLeftStartupSideBySide.inventory, right: "$4K – $12K" },
  { category: "Total Launch Budget", left: nailSalonLeftStartupSideBySide.total, right: "$60K – $160K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: nailSalonLeftValuation.sde, right: "1.5× – 2.4×" },
  { metric: "Revenue Multiple", left: nailSalonLeftValuation.revenue, right: "0.35× – 0.6×" },
  { metric: "Typical Value", left: "$120K – $320K", right: "$100K – $280K" },
] as const;

export const valuationExamples = {
  left: nailSalonLeftValuation.example,
  right: { revenue: "$260K", value: "$75K – $120K", note: "2.0–2.3× SDE on $48K" },
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: nailSalonLeftBreakEven[0].value, right: "$15K – $22K" },
  { metric: "Appointments Per Day", left: nailSalonLeftBreakEven[1].value, right: "30 – 55" },
  { metric: "Months to Break-Even", left: nailSalonLeftBreakEven[2].value, right: "9 – 18 months" },
] as const;

export const scalingLadder = {
  left: [...nailSalonLeftScalingLadder],
  right: ["Single Room Studio", "Multi-Room Waxing Salon", "Add Sugaring / Lash", "Second Location"],
} as const;

export const scalingLeftTitle = "Nail Salon Growth Path";
export const scalingRightTitle = "Waxing Salon Growth Path";

export const capitalEfficiency = {
  investment: "$115,000",
  left: nailSalonLeftCapitalEfficiency,
  right: {
    revenue: "$200K – $340K",
    profit: "$28K – $58K net profit",
    payback: "2 – 4 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Nail Salon If";
export const chooseRightTitle = "Choose a Waxing Salon If";

export const chooseLeft = [
  "You want a broader service menu and higher average tickets",
  "You prefer manicures, pedicures, and nail art as core revenue",
  "You like walk-in traffic and a wider client demographic",
  "You plan to add waxing, lash, or other beauty services over time",
  "You want more stations to scale technician headcount",
] as const;

export const chooseRight = [
  "You want a focused, high-frequency waxing specialty",
  "You prefer lower startup cost and simpler operations",
  "You like fast service times and high daily appointment volume",
  "You value strong net margins from low product cost",
  "You plan to build package and membership revenue",
] as const;

export const calculators = nailSalonCalculators;

export const relatedComparisons = nailSalonRelatedComparisons;

export const faqs = [
  {
    question: "Is a nail salon or waxing salon more profitable?",
    answer:
      "Waxing salons often run slightly higher net margins (12–20%) than nail salons (10–17%) thanks to low product costs and fast service times. Nail salons can generate more total revenue with broader menus and higher tickets on gel and art services. Both rely on high-frequency repeat visits.",
  },
  {
    question: "Which is cheaper to open, a nail salon or a waxing salon?",
    answer:
      "A waxing salon is typically cheaper to open ($60K–$160K) than a nail salon ($70K–$180K) because it needs fewer stations, less ventilation, and minimal inventory. Both can reduce cost by leasing existing salon or suite space.",
  },
  {
    question: "Which has more repeat visits?",
    answer:
      "Both models see high-frequency repeat visits — nail salons every 2–4 weeks and waxing salons every 3–5 weeks. Nail salons often see slightly more total monthly visits due to manicure and pedicure demand, while waxing salons drive loyalty through packages and memberships.",
  },
  {
    question: "Can a nail salon add waxing services?",
    answer:
      "Yes. Many nail salons already offer waxing as an add-on to lift average ticket and fill schedule gaps. Waxing requires licensed estheticians and private treatment rooms but pairs naturally with nail services and shares a similar client cadence.",
  },
  {
    question: "Which is easier to value or sell?",
    answer:
      "Nail salons and waxing salons trade at similar multiples (1.5×–2.6× SDE). Nail salons may command slightly higher total sale prices due to larger revenue bases, while waxing salons benefit from focused operations and strong membership adoption.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Nail Salon", "Waxing Salon", {
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
    "A nail salon aligns with your goals if you want a broader service menu, higher average tickets on gel and art, and more stations to scale revenue.",
  right:
    "A waxing salon is the better fit if you want a focused specialty, lower startup cost, fast service turnover, and high-frequency repeat visits with strong margins.",
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
