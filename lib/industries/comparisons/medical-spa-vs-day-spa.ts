import type { BeautyDecisionInputs, BeautyDualComparisonData } from "./beauty-comparison-types";
import { scoreBeautyChoice } from "./beauty-comparison-types";
import {
  medicalSpaCalculators,
  medicalSpaHubLabels,
  medicalSpaLeftBreakEven,
  medicalSpaLeftClientEconomics,
  medicalSpaLeftClientFunnel,
  medicalSpaLeftCostStructure,
  medicalSpaLeftKpis,
  medicalSpaLeftMarginTiers,
  medicalSpaLeftOwnerIncome,
  medicalSpaLeftRecurringComparison,
  medicalSpaLeftRecurringHighlight,
  medicalSpaLeftRevenueFunnel,
  medicalSpaLeftRevenueSources,
  medicalSpaLeftScalingLadder,
  medicalSpaLeftServiceFunnel,
  medicalSpaLeftServiceMetrics,
  medicalSpaLeftStartupItems,
  medicalSpaLeftStartupSideBySide,
  medicalSpaLeftValuation,
  medicalSpaRelatedComparisons,
} from "./medical-spa-comparison-shared";

export const comparisonMeta = {
  slug: "medical-spa-vs-day-spa",
  title: "Medical Spa vs Day Spa",
  subtitle:
    "Compare revenue, average ticket, profit margins, startup costs, owner pay, and valuation between a high-ticket medical spa (med spa) and a treatment-focused day spa.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...medicalSpaHubLabels,
  right: "Day Spa",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Average Ticket", winner: "Medical Spa" },
  { factor: "Higher Net Margin", winner: "Medical Spa" },
  { factor: "Lower Startup Cost", winner: "Day Spa" },
  { factor: "Higher Revenue Ceiling", winner: "Medical Spa" },
  { factor: "Simpler Regulation", winner: "Day Spa" },
  { factor: "Faster Break-Even", winner: "Day Spa" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: medicalSpaLeftKpis.annualRevenue, right: "$400K – $1.2M" },
  { metric: "Net Margin", left: medicalSpaLeftKpis.netMargin, right: "10 – 18%" },
  { metric: "Owner Compensation", left: medicalSpaLeftKpis.ownerComp, right: "$70K – $160K" },
  { metric: "Monthly Visits", left: medicalSpaLeftKpis.monthlyVisits, right: "600 – 1,400" },
  { metric: "Average Ticket", left: medicalSpaLeftKpis.revenuePerClient, right: "$120 – $250" },
  { metric: "Startup Cost", left: medicalSpaLeftKpis.startup, right: "$150K – $500K" },
  { metric: "Valuation", left: medicalSpaLeftKpis.valuation, right: "2.0× – 3.5× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Ticket Size", left: 10, right: 6, winner: "Medical Spa" },
  { label: "Capital Barrier", left: 4, right: 7, winner: "Day Spa" },
  { label: "Margin Quality", left: 9, right: 5, winner: "Medical Spa" },
  { label: "Membership Upside", left: 8, right: 7, winner: "Medical Spa" },
] as const;

export const leftRevenueSources = medicalSpaLeftRevenueSources;

export const rightRevenueSources = [
  "Massage therapy",
  "Facials and skincare",
  "Body treatments and wraps",
  "Waxing and hair removal",
  "Memberships and packages",
  "Retail skincare products",
] as const;

export const revenueFunnel = {
  left: [...medicalSpaLeftRevenueFunnel],
  right: ["New Client", "Treatment Booking", "Package / Membership", "Retail Attach", "Rebooking"],
} as const;

export const clientFunnel = {
  left: [...medicalSpaLeftClientFunnel],
  right: ["New Client", "First Treatment", "Membership Enrollment", "Loyal Member"],
} as const;

export const serviceFunnel = {
  left: [...medicalSpaLeftServiceFunnel],
  right: ["Treatment Room Capacity", "Booked Utilization", "Average Ticket", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$250 – $600 treatment", right: "$120 – $250 treatment" },
  { driver: "Visit Frequency", left: "Every 3 – 4 months (injectables)", right: "Monthly membership cadence" },
  { driver: "Retail / Membership", left: "25 – 45% membership + medical retail", right: "20 – 40% membership + retail" },
  { driver: "Provider Requirement", left: "Medical director + RN/NP/PA", right: "Licensed estheticians & massage therapists" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: medicalSpaLeftClientEconomics[0].value, right: "$120 – $250" },
  { metric: "Annual Visits Per Client", left: medicalSpaLeftClientEconomics[1].value, right: "6 – 12" },
  { metric: "Estimated Lifetime Value", left: medicalSpaLeftClientEconomics[2].value, right: "$2,500 – $7,500" },
  { metric: "Client Retention", left: medicalSpaLeftClientEconomics[3].value, right: "55 – 75%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Treatment Room", left: medicalSpaLeftServiceMetrics[0].value, right: "$90K – $180K" },
  { metric: "Revenue Per Provider", left: medicalSpaLeftServiceMetrics[1].value, right: "$110K – $200K" },
  { metric: "Room Utilization", left: medicalSpaLeftServiceMetrics[2].value, right: "60 – 78%" },
] as const;

export const marginTiers = {
  left: medicalSpaLeftMarginTiers,
  right: { weak: "7 – 10%", average: "12 – 16%", strong: "18 – 24%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Clinical Labor", left: medicalSpaLeftCostStructure[0].value, right: "42 – 50%" },
  { expense: "Product / Consumables COGS", left: medicalSpaLeftCostStructure[1].value, right: "8 – 14%" },
  { expense: "Rent", left: medicalSpaLeftCostStructure[2].value, right: "10 – 16%" },
  { expense: "Other Overhead", left: medicalSpaLeftCostStructure[3].value, right: "12 – 18%" },
] as const;

export const recurringHighlights = {
  left: medicalSpaLeftRecurringHighlight,
  right: { title: "Membership-Driven Revenue", value: "20–40% of revenue from memberships & retail" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: medicalSpaLeftRecurringComparison[0].value, right: "50 – 65%" },
  { metric: "Retail Attachment", left: medicalSpaLeftRecurringComparison[1].value, right: "12 – 20%" },
  { metric: "Membership Adoption", left: medicalSpaLeftRecurringComparison[2].value, right: "25 – 45%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Med Spa", earnings: medicalSpaLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Established Multi-Provider Med Spa", earnings: medicalSpaLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Owner-Operator Day Spa", earnings: "$70K – $130K", type: "right" },
  { model: "Established Multi-Room Day Spa", earnings: "$140K – $250K", type: "right" },
] as const;

export const leftStartupItems = medicalSpaLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout & Plumbing", percent: 40 },
  { item: "Treatment Equipment", percent: 24 },
  { item: "Inventory", percent: 8 },
  { item: "Working Capital", percent: 14 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: medicalSpaLeftStartupSideBySide.buildout, right: "$70K – $200K" },
  { category: "Equipment / Devices", left: medicalSpaLeftStartupSideBySide.equipment, right: "$40K – $120K" },
  { category: "Inventory / Consumables", left: medicalSpaLeftStartupSideBySide.inventory, right: "$15K – $40K" },
  { category: "Total Launch Budget", left: medicalSpaLeftStartupSideBySide.total, right: "$150K – $500K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: medicalSpaLeftValuation.sde, right: "2.0× – 3.5×" },
  { metric: "Revenue Multiple", left: medicalSpaLeftValuation.revenue, right: "0.5× – 0.9×" },
  { metric: "Typical Value", left: "$700K – $3.0M", right: "$300K – $900K" },
] as const;

export const valuationExamples = {
  left: medicalSpaLeftValuation.example,
  right: { revenue: "$700K", value: "$260K – $420K", note: "2.6–3.2× SDE on $115K" },
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: medicalSpaLeftBreakEven[0].value, right: "$35K – $60K" },
  { metric: "Treatments Per Day", left: medicalSpaLeftBreakEven[1].value, right: "15 – 30" },
  { metric: "Months to Break-Even", left: medicalSpaLeftBreakEven[2].value, right: "18 – 36 months" },
] as const;

export const scalingLadder = {
  left: [...medicalSpaLeftScalingLadder],
  right: ["Small Spa (3–4 rooms)", "Full Day Spa", "Add Memberships", "Second Location"],
} as const;

export const scalingLeftTitle = "Medical Spa Growth Path";
export const scalingRightTitle = "Day Spa Growth Path";

export const capitalEfficiency = {
  investment: "$400,000",
  left: {
    revenue: "$800K – $1.4M",
    profit: "$150K – $350K net profit",
    payback: "2 – 4 years",
  },
  right: {
    revenue: "$450K – $750K",
    profit: "$55K – $120K net profit",
    payback: "3 – 5 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Medical Spa If";
export const chooseRightTitle = "Choose a Day Spa If";

export const chooseLeft = [
  "You want much higher tickets and net margins",
  "You can partner with a medical director and hire clinical injectors",
  "You are targeting a premium valuation and higher revenue ceiling",
  "You want medical-grade treatments and device-driven revenue",
  "You can fund a larger device-heavy buildout",
] as const;

export const chooseRight = [
  "You want lower startup cost and simpler regulation",
  "You prefer wellness treatments without medical oversight",
  "You value high visit volume and membership-driven revenue",
  "You want faster break-even with a smaller capital requirement",
  "You plan to build a premium, wellness-oriented brand",
] as const;

export const calculators = medicalSpaCalculators;

export const relatedComparisons = medicalSpaRelatedComparisons;

export const faqs = [
  {
    question: "Is a medical spa or day spa more profitable?",
    answer:
      "Medical spas typically earn higher absolute profit — net margins run 15–30% on tickets of $250–$600, versus 10–18% for day spas at $120–$250. Day spas break even faster because of lower startup cost, but med spas scale to a much higher revenue ceiling.",
  },
  {
    question: "Which is cheaper to open, a med spa or a day spa?",
    answer:
      "A day spa is significantly cheaper to open ($150K–$500K) than a medical spa ($300K–$800K), which requires medical-grade devices, clinical staff, and a medical director. The lower capital barrier makes a day spa faster to break even.",
  },
  {
    question: "Which has stronger recurring revenue?",
    answer:
      "Both models rely on memberships, but medical spas also benefit from injectable maintenance every 3–4 months. Med spas see 30–50% membership adoption plus high-ticket rebooking, while day spas capture 25–45% through monthly wellness memberships.",
  },
  {
    question: "Which is easier to value or sell?",
    answer:
      "Medical spas command higher multiples (3.0×–5.5× SDE) than day spas (2.0×–3.5× SDE), driven by higher tickets, clinical revenue, and stronger margins. In both cases, recurring clients and transferable staff are the biggest value drivers.",
  },
  {
    question: "Can a day spa add medical spa services?",
    answer:
      "Some day spas add injectables or laser treatments to become a med spa hybrid, but it requires a medical director, clinical licensing, device investment, and compliance infrastructure — effectively transforming into a regulated medical business.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Medical Spa", "Day Spa", {
    ownerHandsOn: 1,
    ownerManager: 2,
    budgetLow: 1,
    budgetMedium: 1,
    budgetHigh: 1,
    revenueModerate: 1,
    revenueHigh: 1,
    revenueVeryHigh: 1,
    growthLifestyle: 1,
    growthExpand: 1,
    growthMulti: 1,
  });
}

export const decisionToolCopy = {
  left:
    "A medical spa is the better fit if you want much higher tickets and margins, can partner with a medical director, and are targeting a premium valuation.",
  right:
    "A day spa aligns with your goals if you want lower startup cost, simpler regulation, and strong membership revenue without medical oversight.",
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
