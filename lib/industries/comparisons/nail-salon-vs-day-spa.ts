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
  slug: "nail-salon-vs-day-spa",
  title: "Nail Salon vs Day Spa",
  subtitle:
    "Compare revenue, average ticket, profit margins, startup costs, owner pay, and valuation between a high-volume nail salon and a treatment-focused day spa.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...nailSalonHubLabels,
  right: "Day Spa",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Average Ticket", winner: "Day Spa" },
  { factor: "Higher Visit Volume", winner: "Nail Salon" },
  { factor: "Lower Startup Cost", winner: "Nail Salon" },
  { factor: "Higher Revenue Ceiling", winner: "Day Spa" },
  { factor: "Stronger Membership Revenue", winner: "Day Spa" },
  { factor: "Faster Break-Even", winner: "Nail Salon" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: nailSalonLeftKpis.annualRevenue, right: "$400K – $1.2M" },
  { metric: "Net Margin", left: nailSalonLeftKpis.netMargin, right: "10 – 18%" },
  { metric: "Owner Compensation", left: nailSalonLeftKpis.ownerComp, right: "$70K – $160K" },
  { metric: "Monthly Visits", left: nailSalonLeftKpis.monthlyVisits, right: "600 – 1,400" },
  { metric: "Average Ticket", left: "$30 – $60", right: "$120 – $250" },
  { metric: "Startup Cost", left: nailSalonLeftKpis.startup, right: "$150K – $500K" },
  { metric: "Valuation", left: nailSalonLeftKpis.valuation, right: "2.0× – 3.5× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Ticket Size", left: 5, right: 9, winner: "Day Spa" },
  { label: "Visit Frequency", left: 8, right: 6, winner: "Nail Salon" },
  { label: "Capital Barrier", left: 8, right: 5, winner: "Nail Salon" },
  { label: "Membership Upside", left: 5, right: 9, winner: "Day Spa" },
] as const;

export const leftRevenueSources = nailSalonLeftRevenueSources;

export const rightRevenueSources = [
  "Massage therapy",
  "Facials and skincare",
  "Body treatments and wraps",
  "Waxing and hair removal",
  "Memberships and packages",
  "Retail skincare products",
] as const;

export const revenueFunnel = {
  left: [...nailSalonLeftRevenueFunnel],
  right: ["New Client", "Treatment Booking", "Package / Membership", "Retail Attach", "Rebooking"],
} as const;

export const clientFunnel = {
  left: [...nailSalonLeftClientFunnel],
  right: ["New Client", "First Treatment", "Membership Enrollment", "Loyal Member"],
} as const;

export const serviceFunnel = {
  left: [...nailSalonLeftServiceFunnel],
  right: ["Treatment Room Capacity", "Booked Utilization", "Average Ticket", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$30 – $60 service", right: "$120 – $250 treatment" },
  { driver: "Visit Frequency", left: "Every 2 – 4 weeks", right: "Monthly membership cadence" },
  { driver: "Retail / Membership", left: "3 – 7% retail", right: "20 – 40% membership + retail" },
  { driver: "Service Time", left: "30 – 75 min per client", right: "60 – 120 min per treatment" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: nailSalonLeftClientEconomics[0].value, right: "$120 – $250" },
  { metric: "Annual Visits Per Client", left: nailSalonLeftClientEconomics[1].value, right: "6 – 12" },
  { metric: "Estimated Lifetime Value", left: nailSalonLeftClientEconomics[2].value, right: "$2,500 – $7,500" },
  { metric: "Client Retention", left: nailSalonLeftClientEconomics[3].value, right: "55 – 75%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Station/Room", left: nailSalonLeftServiceMetrics[0].value, right: "$90K – $180K" },
  { metric: "Revenue Per Provider", left: nailSalonLeftServiceMetrics[1].value, right: "$110K – $200K" },
  { metric: "Room Utilization", left: nailSalonLeftServiceMetrics[2].value, right: "60 – 78%" },
] as const;

export const marginTiers = {
  left: nailSalonLeftMarginTiers,
  right: { weak: "7 – 10%", average: "12 – 16%", strong: "18 – 24%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Commissions", left: nailSalonLeftCostStructure[0].value, right: "42 – 50%" },
  { expense: "Product COGS", left: nailSalonLeftCostStructure[1].value, right: "8 – 14%" },
  { expense: "Rent", left: nailSalonLeftCostStructure[2].value, right: "10 – 16%" },
  { expense: "Other Overhead", left: nailSalonLeftCostStructure[3].value, right: "12 – 18%" },
] as const;

export const recurringHighlights = {
  left: nailSalonLeftRecurringHighlight,
  right: { title: "Membership-Driven Revenue", value: "20–40% of revenue from memberships & retail" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: nailSalonLeftRecurringComparison[0].value, right: "50 – 65%" },
  { metric: "Retail Attachment", left: nailSalonLeftRecurringComparison[1].value, right: "12 – 20%" },
  { metric: "Membership Adoption", left: nailSalonLeftRecurringComparison[2].value, right: "25 – 45%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Nail Salon", earnings: nailSalonLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Multi-Station Nail Salon", earnings: nailSalonLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Owner-Operator Day Spa", earnings: "$70K – $130K", type: "right" },
  { model: "Established Multi-Room Day Spa", earnings: "$140K – $250K", type: "right" },
] as const;

export const leftStartupItems = nailSalonLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout & Plumbing", percent: 40 },
  { item: "Treatment Equipment", percent: 24 },
  { item: "Inventory", percent: 8 },
  { item: "Working Capital", percent: 14 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: nailSalonLeftStartupSideBySide.buildout, right: "$70K – $200K" },
  { category: "Equipment", left: nailSalonLeftStartupSideBySide.equipment, right: "$40K – $120K" },
  { category: "Inventory", left: nailSalonLeftStartupSideBySide.inventory, right: "$15K – $40K" },
  { category: "Total Launch Budget", left: nailSalonLeftStartupSideBySide.total, right: "$150K – $500K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: nailSalonLeftValuation.sde, right: "2.0× – 3.5×" },
  { metric: "Revenue Multiple", left: nailSalonLeftValuation.revenue, right: "0.5× – 0.9×" },
  { metric: "Typical Value", left: "$120K – $320K", right: "$300K – $900K" },
] as const;

export const valuationExamples = {
  left: nailSalonLeftValuation.example,
  right: { revenue: "$700K", value: "$260K – $420K", note: "2.6–3.2× SDE on $115K" },
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: nailSalonLeftBreakEven[0].value, right: "$35K – $60K" },
  { metric: "Treatments Per Day", left: nailSalonLeftBreakEven[1].value, right: "15 – 30" },
  { metric: "Months to Break-Even", left: nailSalonLeftBreakEven[2].value, right: "18 – 36 months" },
] as const;

export const scalingLadder = {
  left: [...nailSalonLeftScalingLadder],
  right: ["Small Spa (3–4 rooms)", "Full Day Spa", "Add Memberships", "Second Location"],
} as const;

export const scalingLeftTitle = "Nail Salon Growth Path";
export const scalingRightTitle = "Day Spa Growth Path";

export const capitalEfficiency = {
  investment: "$200,000",
  left: nailSalonLeftCapitalEfficiency,
  right: {
    revenue: "$450K – $750K",
    profit: "$55K – $120K net profit",
    payback: "3 – 5 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Nail Salon If";
export const chooseRightTitle = "Choose a Day Spa If";

export const chooseLeft = [
  "You want lower startup cost and faster break-even",
  "You prefer high-frequency repeat visits every 2–4 weeks",
  "You like a focused service menu with faster turnover",
  "You want simpler operations with fewer treatment rooms",
  "You plan to grow through volume and rebooking cadence",
] as const;

export const chooseRight = [
  "You want much higher average tickets per visit",
  "You value strong membership and package revenue",
  "You are targeting a higher revenue ceiling per location",
  "You can support a larger buildout with treatment rooms",
  "You plan to build a premium, wellness-oriented brand",
] as const;

export const calculators = nailSalonCalculators;

export const relatedComparisons = nailSalonRelatedComparisons;

export const faqs = [
  {
    question: "Is a nail salon or day spa more profitable?",
    answer:
      "Day spas can reach higher total profit through larger tickets ($120–$250) and membership revenue, but net margins are similar (nail salon 10–17%, day spa 10–18%). A nail salon reaches profitability faster because of lower startup cost, while a day spa scales to a higher revenue ceiling.",
  },
  {
    question: "Which is cheaper to open, a nail salon or a day spa?",
    answer:
      "A nail salon is significantly cheaper to open ($70K–$180K) than a day spa ($150K–$500K), which needs treatment rooms, plumbing, and specialized equipment. The lower capital barrier makes a nail salon faster to break even.",
  },
  {
    question: "Which has stronger recurring revenue?",
    answer:
      "Day spas have stronger recurring revenue because 25–45% of clients enroll in memberships, versus 5–12% membership adoption at nail salons. Nail salons rely more on rebooking cadence every 2–4 weeks.",
  },
  {
    question: "Which is easier to value or sell?",
    answer:
      "Day spas command higher multiples (2.0×–3.5× SDE) than nail salons (1.6×–2.6× SDE), driven by membership revenue and higher tickets. In both cases, transferable staff and recurring clients are the biggest value drivers.",
  },
  {
    question: "Can a nail salon expand into spa services?",
    answer:
      "Yes. Many nail salons add facials, waxing, or massage rooms to become a salon-spa hybrid, lifting average ticket and adding membership revenue — though it requires additional buildout, licensing, and trained providers.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Nail Salon", "Day Spa", {
    ownerHandsOn: 2,
    ownerManager: 2,
    budgetLow: 2,
    budgetMedium: 1,
    budgetHigh: 2,
    revenueModerate: 2,
    revenueHigh: 1,
    revenueVeryHigh: 3,
    growthLifestyle: 2,
    growthExpand: 1,
    growthMulti: 2,
  });
}

export const decisionToolCopy = {
  left:
    "A nail salon aligns with your goals if you want lower startup cost, faster break-even, and high-frequency repeat visits with a focused service menu.",
  right:
    "A day spa is the better fit if you want much higher average tickets, strong membership revenue, and a higher revenue ceiling per location.",
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
