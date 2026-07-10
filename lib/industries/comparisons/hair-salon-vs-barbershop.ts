import type { BeautyDecisionInputs, BeautyDualComparisonData } from "./beauty-comparison-types";
import { scoreBeautyChoice } from "./beauty-comparison-types";
import {
  hairSalonCalculators,
  hairSalonHubLabels,
  hairSalonLeftBreakEven,
  hairSalonLeftCapitalEfficiency,
  hairSalonLeftClientEconomics,
  hairSalonLeftClientFunnel,
  hairSalonLeftCostStructure,
  hairSalonLeftKpis,
  hairSalonLeftMarginTiers,
  hairSalonLeftOwnerIncome,
  hairSalonLeftRecurringComparison,
  hairSalonLeftRecurringHighlight,
  hairSalonLeftRevenueFunnel,
  hairSalonLeftRevenueSources,
  hairSalonLeftScalingLadder,
  hairSalonLeftServiceFunnel,
  hairSalonLeftServiceMetrics,
  hairSalonLeftStartupItems,
  hairSalonLeftStartupSideBySide,
  hairSalonLeftValuation,
} from "./hair-salon-comparison-shared";

export const comparisonMeta = {
  slug: "hair-salon-vs-barbershop",
  title: "Hair Salon vs Barbershop",
  subtitle:
    "Compare revenue, average ticket, profit margins, startup costs, owner pay, and valuation between a full-service hair salon and a high-volume barbershop.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...hairSalonHubLabels,
  right: "Barbershop",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Average Ticket", winner: "Hair Salon" },
  { factor: "Higher Visit Volume", winner: "Barbershop" },
  { factor: "Stronger Retail Revenue", winner: "Hair Salon" },
  { factor: "Lower Startup Cost", winner: "Barbershop" },
  { factor: "Higher Net Margin", winner: "Barbershop" },
  { factor: "Higher Revenue Ceiling", winner: "Hair Salon" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: hairSalonLeftKpis.annualRevenue, right: "$180K – $400K" },
  { metric: "Net Margin", left: hairSalonLeftKpis.netMargin, right: "12 – 20%" },
  { metric: "Owner Compensation", left: hairSalonLeftKpis.ownerComp, right: "$45K – $90K" },
  { metric: "Monthly Visits", left: hairSalonLeftKpis.monthlyVisits, right: "1,200 – 2,400" },
  { metric: "Average Ticket", left: hairSalonLeftKpis.revenuePerClient, right: "$25 – $45" },
  { metric: "Startup Cost", left: hairSalonLeftKpis.startup, right: "$60K – $180K" },
  { metric: "Valuation", left: hairSalonLeftKpis.valuation, right: "1.5× – 2.5× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Ticket Size", left: 8, right: 5, winner: "Hair Salon" },
  { label: "Visit Frequency", left: 6, right: 9, winner: "Barbershop" },
  { label: "Capital Barrier", left: 6, right: 8, winner: "Barbershop" },
  { label: "Retail Upside", left: 8, right: 4, winner: "Hair Salon" },
] as const;

export const leftRevenueSources = hairSalonLeftRevenueSources;

export const rightRevenueSources = [
  "Haircuts and fades",
  "Beard trims and grooming",
  "Hot-towel shaves",
  "Kids and senior cuts",
  "Grooming product sales",
  "Memberships and packages",
] as const;

export const revenueFunnel = {
  left: [...hairSalonLeftRevenueFunnel],
  right: ["Walk-in / Booking", "Cut or Shave", "Grooming Add-on", "Rebooking"],
} as const;

export const clientFunnel = {
  left: [...hairSalonLeftClientFunnel],
  right: ["New Client", "First Cut", "Regular Cadence", "Loyal Repeat Client"],
} as const;

export const serviceFunnel = {
  left: [...hairSalonLeftServiceFunnel],
  right: ["Chair Capacity", "Booked Utilization", "Cuts Per Day", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$45 – $85 service", right: "$25 – $45 cut/shave" },
  { driver: "Visit Frequency", left: "Every 6 – 10 weeks", right: "Every 2 – 4 weeks" },
  { driver: "Retail Mix", left: "8 – 12% of revenue", right: "3 – 6% of revenue" },
  { driver: "Service Time", left: "45 – 120 min per client", right: "20 – 40 min per client" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: hairSalonLeftClientEconomics[0].value, right: "$25 – $45" },
  { metric: "Annual Visits Per Client", left: hairSalonLeftClientEconomics[1].value, right: "10 – 18" },
  { metric: "Estimated Lifetime Value", left: hairSalonLeftClientEconomics[2].value, right: "$1,500 – $4,000" },
  { metric: "Client Retention", left: hairSalonLeftClientEconomics[3].value, right: "65 – 80%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Chair", left: hairSalonLeftServiceMetrics[0].value, right: "$40K – $80K" },
  { metric: "Revenue Per Barber/Stylist", left: hairSalonLeftServiceMetrics[1].value, right: "$55K – $95K" },
  { metric: "Chair Utilization", left: hairSalonLeftServiceMetrics[2].value, right: "70 – 85%" },
] as const;

export const marginTiers = {
  left: hairSalonLeftMarginTiers,
  right: { weak: "8 – 11%", average: "13 – 17%", strong: "18 – 24%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Commissions", left: hairSalonLeftCostStructure[0].value, right: "40 – 48%" },
  { expense: "Product COGS", left: hairSalonLeftCostStructure[1].value, right: "4 – 7%" },
  { expense: "Rent", left: hairSalonLeftCostStructure[2].value, right: "10 – 15%" },
  { expense: "Other Overhead", left: hairSalonLeftCostStructure[3].value, right: "10 – 16%" },
] as const;

export const recurringHighlights = {
  left: hairSalonLeftRecurringHighlight,
  right: { title: "High-Frequency Repeat Visits", value: "Every 2–4 weeks; memberships common" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: hairSalonLeftRecurringComparison[0].value, right: "55 – 70%" },
  { metric: "Retail Attachment", left: hairSalonLeftRecurringComparison[1].value, right: "3 – 6%" },
  { metric: "Membership Adoption", left: hairSalonLeftRecurringComparison[2].value, right: "10 – 25%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Hair Salon", earnings: hairSalonLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Established Hair Salon", earnings: hairSalonLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Owner-Operator Barbershop", earnings: "$45K – $90K", type: "right" },
  { model: "Multi-Chair Barbershop", earnings: "$95K – $160K", type: "right" },
] as const;

export const leftStartupItems = hairSalonLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout", percent: 33 },
  { item: "Chairs & Equipment", percent: 25 },
  { item: "Inventory", percent: 6 },
  { item: "Working Capital", percent: 14 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: hairSalonLeftStartupSideBySide.buildout, right: "$25K – $60K" },
  { category: "Equipment", left: hairSalonLeftStartupSideBySide.equipment, right: "$15K – $35K" },
  { category: "Inventory", left: hairSalonLeftStartupSideBySide.inventory, right: "$3K – $10K" },
  { category: "Total Launch Budget", left: hairSalonLeftStartupSideBySide.total, right: "$60K – $180K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: hairSalonLeftValuation.sde, right: "1.5× – 2.5×" },
  { metric: "Revenue Multiple", left: hairSalonLeftValuation.revenue, right: "0.35× – 0.6×" },
  { metric: "Typical Value", left: "$180K – $420K", right: "$110K – $300K" },
] as const;

export const valuationExamples = {
  left: hairSalonLeftValuation.example,
  right: { revenue: "$280K", value: "$75K – $130K", note: "2.0–2.5× SDE on $52K" },
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: hairSalonLeftBreakEven[0].value, right: "$16K – $24K" },
  { metric: "Visits Per Day", left: hairSalonLeftBreakEven[1].value, right: "30 – 55" },
  { metric: "Months to Break-Even", left: hairSalonLeftBreakEven[2].value, right: "9 – 18 months" },
] as const;

export const scalingLadder = {
  left: [...hairSalonLeftScalingLadder],
  right: ["Single Chair", "Multi-Chair Shop", "Add Booth Renters", "Second Location"],
} as const;

export const scalingLeftTitle = "Hair Salon Growth Path";
export const scalingRightTitle = "Barbershop Growth Path";

export const capitalEfficiency = {
  investment: "$150,000",
  left: hairSalonLeftCapitalEfficiency,
  right: {
    revenue: "$220K – $360K",
    profit: "$30K – $65K net profit",
    payback: "2 – 4 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Hair Salon If";
export const chooseRightTitle = "Choose a Barbershop If";

export const chooseLeft = [
  "You want higher average tickets from color and chemical services",
  "You value strong retail attachment and premium service upsells",
  "You are targeting a higher revenue ceiling per location",
  "You want a broad client base across cut, color, and styling",
  "You plan to build a color bar and product retail program",
] as const;

export const chooseRight = [
  "You want high-volume, high-frequency repeat visits",
  "You prefer lower startup cost and simpler operations",
  "You like faster service times and quicker chair turnover",
  "You want strong net margins from low product cost",
  "You plan to use booth-rent chairs to scale with less overhead",
] as const;

export const calculators = hairSalonCalculators;

export const relatedComparisons = [
  { label: "Hair Salon vs Nail Salon", href: "/comparisons/hair-salon-vs-nail-salon/" },
  { label: "Hair Salon vs Day Spa", href: "/comparisons/hair-salon-vs-day-spa/" },
  { label: "Hair Salon vs Franchise Salon", href: "/comparisons/hair-salon-vs-franchise-salon/" },
  { label: "Hair Salon vs Mobile Salon", href: "/comparisons/hair-salon-vs-mobile-salon/" },
  { label: "Hair Salon Hub", href: "/industries/beauty/hair-salon/" },
] as const;

export const faqs = [
  {
    question: "Is a hair salon or barbershop more profitable?",
    answer:
      "Barbershops often run slightly higher net margins (12–20%) than hair salons (8–15%) thanks to lower product costs and faster service times. Hair salons win on revenue ceiling and average ticket through color and chemical services, so the more profitable model depends on volume vs ticket size.",
  },
  {
    question: "Which is cheaper to open, a hair salon or a barbershop?",
    answer:
      "A barbershop is usually cheaper to open ($60K–$180K) than a full hair salon ($80K–$250K) because it needs less buildout, fewer color stations, and minimal chemical inventory. Both can reduce cost by leasing an existing salon or shop space.",
  },
  {
    question: "Does a hair salon or barbershop have more repeat visits?",
    answer:
      "Barbershops have more frequent repeat visits — clients return every 2–4 weeks versus every 6–10 weeks at a hair salon. Hair salons offset lower frequency with higher tickets and stronger retail attachment.",
  },
  {
    question: "Which is easier to sell or value higher?",
    answer:
      "Hair salons typically command slightly higher multiples (1.8×–3.0× SDE) than barbershops (1.5×–2.5× SDE) because of retail revenue and higher tickets. In both cases, transferable staff and strong client retention drive the sale price.",
  },
  {
    question: "Can you combine a hair salon and barbershop?",
    answer:
      "Yes. Many operators run a hybrid hair salon with a dedicated barbering section to capture both high-ticket color clients and high-frequency grooming clients, smoothing chair utilization across the week.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Hair Salon", "Barbershop", {
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
    "A hair salon is the better fit — higher tickets from color and chemical services, strong retail attachment, and a higher revenue ceiling per location.",
  right:
    "A barbershop aligns with your goals if you want lower startup cost, high-frequency repeat visits, faster chair turnover, and strong margins from low product cost.",
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
