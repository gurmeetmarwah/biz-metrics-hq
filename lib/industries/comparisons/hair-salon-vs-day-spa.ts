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
  slug: "hair-salon-vs-day-spa",
  title: "Hair Salon vs Day Spa",
  subtitle:
    "Compare revenue, average ticket, profit margins, startup costs, owner pay, and valuation between a full-service hair salon and a treatment-focused day spa.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...hairSalonHubLabels,
  right: "Day Spa",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Average Ticket", winner: "Day Spa" },
  { factor: "Higher Visit Volume", winner: "Hair Salon" },
  { factor: "Lower Startup Cost", winner: "Hair Salon" },
  { factor: "Higher Revenue Ceiling", winner: "Day Spa" },
  { factor: "Stronger Membership Revenue", winner: "Day Spa" },
  { factor: "Faster Break-Even", winner: "Hair Salon" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: hairSalonLeftKpis.annualRevenue, right: "$400K – $1.2M" },
  { metric: "Net Margin", left: hairSalonLeftKpis.netMargin, right: "10 – 18%" },
  { metric: "Owner Compensation", left: hairSalonLeftKpis.ownerComp, right: "$70K – $160K" },
  { metric: "Monthly Visits", left: hairSalonLeftKpis.monthlyVisits, right: "600 – 1,400" },
  { metric: "Average Ticket", left: hairSalonLeftKpis.revenuePerClient, right: "$120 – $250" },
  { metric: "Startup Cost", left: hairSalonLeftKpis.startup, right: "$150K – $500K" },
  { metric: "Valuation", left: hairSalonLeftKpis.valuation, right: "2.0× – 3.5× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Ticket Size", left: 5, right: 9, winner: "Day Spa" },
  { label: "Visit Frequency", left: 8, right: 6, winner: "Hair Salon" },
  { label: "Capital Barrier", left: 8, right: 5, winner: "Hair Salon" },
  { label: "Membership Upside", left: 5, right: 9, winner: "Day Spa" },
] as const;

export const leftRevenueSources = hairSalonLeftRevenueSources;

export const rightRevenueSources = [
  "Massage therapy",
  "Facials and skincare",
  "Body treatments and wraps",
  "Waxing and hair removal",
  "Memberships and packages",
  "Retail skincare products",
] as const;

export const revenueFunnel = {
  left: [...hairSalonLeftRevenueFunnel],
  right: ["New Client", "Treatment Booking", "Package / Membership", "Retail Attach", "Rebooking"],
} as const;

export const clientFunnel = {
  left: [...hairSalonLeftClientFunnel],
  right: ["New Client", "First Treatment", "Membership Enrollment", "Loyal Member"],
} as const;

export const serviceFunnel = {
  left: [...hairSalonLeftServiceFunnel],
  right: ["Treatment Room Capacity", "Booked Utilization", "Average Ticket", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$45 – $85 service", right: "$120 – $250 treatment" },
  { driver: "Visit Frequency", left: "Every 6 – 10 weeks", right: "Monthly membership cadence" },
  { driver: "Retail / Membership", left: "8 – 12% retail", right: "20 – 40% membership + retail" },
  { driver: "Service Time", left: "45 – 120 min per client", right: "60 – 120 min per treatment" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: hairSalonLeftClientEconomics[0].value, right: "$120 – $250" },
  { metric: "Annual Visits Per Client", left: hairSalonLeftClientEconomics[1].value, right: "6 – 12" },
  { metric: "Estimated Lifetime Value", left: hairSalonLeftClientEconomics[2].value, right: "$2,500 – $7,500" },
  { metric: "Client Retention", left: hairSalonLeftClientEconomics[3].value, right: "55 – 75%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Room/Chair", left: hairSalonLeftServiceMetrics[0].value, right: "$90K – $180K" },
  { metric: "Revenue Per Provider", left: hairSalonLeftServiceMetrics[1].value, right: "$110K – $200K" },
  { metric: "Room Utilization", left: hairSalonLeftServiceMetrics[2].value, right: "60 – 78%" },
] as const;

export const marginTiers = {
  left: hairSalonLeftMarginTiers,
  right: { weak: "7 – 10%", average: "12 – 16%", strong: "18 – 24%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Commissions", left: hairSalonLeftCostStructure[0].value, right: "42 – 50%" },
  { expense: "Product COGS", left: hairSalonLeftCostStructure[1].value, right: "8 – 14%" },
  { expense: "Rent", left: hairSalonLeftCostStructure[2].value, right: "10 – 16%" },
  { expense: "Other Overhead", left: hairSalonLeftCostStructure[3].value, right: "12 – 18%" },
] as const;

export const recurringHighlights = {
  left: hairSalonLeftRecurringHighlight,
  right: { title: "Membership-Driven Revenue", value: "20–40% of revenue from memberships & retail" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: hairSalonLeftRecurringComparison[0].value, right: "50 – 65%" },
  { metric: "Retail Attachment", left: hairSalonLeftRecurringComparison[1].value, right: "12 – 20%" },
  { metric: "Membership Adoption", left: hairSalonLeftRecurringComparison[2].value, right: "25 – 45%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Hair Salon", earnings: hairSalonLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Established Hair Salon", earnings: hairSalonLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Owner-Operator Day Spa", earnings: "$70K – $130K", type: "right" },
  { model: "Established Multi-Room Day Spa", earnings: "$140K – $250K", type: "right" },
] as const;

export const leftStartupItems = hairSalonLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout & Plumbing", percent: 40 },
  { item: "Treatment Equipment", percent: 24 },
  { item: "Inventory", percent: 8 },
  { item: "Working Capital", percent: 14 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: hairSalonLeftStartupSideBySide.buildout, right: "$70K – $200K" },
  { category: "Equipment", left: hairSalonLeftStartupSideBySide.equipment, right: "$40K – $120K" },
  { category: "Inventory", left: hairSalonLeftStartupSideBySide.inventory, right: "$15K – $40K" },
  { category: "Total Launch Budget", left: hairSalonLeftStartupSideBySide.total, right: "$150K – $500K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: hairSalonLeftValuation.sde, right: "2.0× – 3.5×" },
  { metric: "Revenue Multiple", left: hairSalonLeftValuation.revenue, right: "0.5× – 0.9×" },
  { metric: "Typical Value", left: "$180K – $420K", right: "$300K – $900K" },
] as const;

export const valuationExamples = {
  left: hairSalonLeftValuation.example,
  right: { revenue: "$700K", value: "$260K – $420K", note: "2.6–3.2× SDE on $115K" },
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: hairSalonLeftBreakEven[0].value, right: "$35K – $60K" },
  { metric: "Treatments Per Day", left: hairSalonLeftBreakEven[1].value, right: "15 – 30" },
  { metric: "Months to Break-Even", left: hairSalonLeftBreakEven[2].value, right: "18 – 36 months" },
] as const;

export const scalingLadder = {
  left: [...hairSalonLeftScalingLadder],
  right: ["Small Spa (3–4 rooms)", "Full Day Spa", "Add Memberships", "Second Location"],
} as const;

export const scalingLeftTitle = "Hair Salon Growth Path";
export const scalingRightTitle = "Day Spa Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: {
    revenue: "$350K – $500K",
    profit: "$30K – $60K net profit",
    payback: "4 – 6 years",
  },
  right: {
    revenue: "$450K – $750K",
    profit: "$55K – $120K net profit",
    payback: "3 – 5 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Hair Salon If";
export const chooseRightTitle = "Choose a Day Spa If";

export const chooseLeft = [
  "You want lower startup cost and faster break-even",
  "You prefer high-frequency repeat visits and quick services",
  "You value hands-on styling work behind the chair",
  "You want a simpler operation with fewer licenses and equipment",
  "You plan to grow through retail and color services",
] as const;

export const chooseRight = [
  "You want much higher average tickets per visit",
  "You value strong membership and package revenue",
  "You are targeting a higher revenue ceiling per location",
  "You can support a larger buildout with treatment rooms",
  "You plan to build a premium, wellness-oriented brand",
] as const;

export const calculators = hairSalonCalculators;

export const relatedComparisons = [
  { label: "Hair Salon vs Medical Spa", href: "/comparisons/hair-salon-vs-medical-spa/" },
  { label: "Hair Salon vs Nail Salon", href: "/comparisons/hair-salon-vs-nail-salon/" },
  { label: "Hair Salon vs Barbershop", href: "/comparisons/hair-salon-vs-barbershop/" },
  { label: "Hair Salon vs Franchise Salon", href: "/comparisons/hair-salon-vs-franchise-salon/" },
  { label: "Hair Salon Hub", href: "/industries/beauty/hair-salon/" },
] as const;

export const faqs = [
  {
    question: "Is a hair salon or day spa more profitable?",
    answer:
      "Day spas can reach higher total profit through larger tickets ($120–$250) and membership revenue, but net margins are similar (hair salon 8–15%, day spa 10–18%). A hair salon reaches profitability faster because of lower startup cost, while a day spa scales to a higher revenue ceiling.",
  },
  {
    question: "Which is cheaper to open, a hair salon or a day spa?",
    answer:
      "A hair salon is significantly cheaper to open ($80K–$250K) than a day spa ($150K–$500K), which needs treatment rooms, plumbing, and specialized equipment. The lower capital barrier makes a hair salon faster to break even.",
  },
  {
    question: "Which has stronger recurring revenue?",
    answer:
      "Day spas have stronger recurring revenue because 25–45% of clients enroll in memberships, versus 5–15% membership adoption at hair salons. Hair salons rely more on rebooking cadence and retail attachment.",
  },
  {
    question: "Which is easier to value or sell?",
    answer:
      "Day spas command higher multiples (2.0×–3.5× SDE) than hair salons (1.8×–3.0× SDE), driven by membership revenue and higher tickets. In both cases, transferable staff and recurring clients are the biggest value drivers.",
  },
  {
    question: "Can a hair salon expand into spa services?",
    answer:
      "Yes. Many hair salons add facials, waxing, or massage rooms to become a salon-spa hybrid, lifting average ticket and adding membership revenue — though it requires additional buildout, licensing, and trained providers.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Hair Salon", "Day Spa", {
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
    "A hair salon is the better fit — lower startup cost, faster break-even, high-frequency repeat visits, and hands-on styling work.",
  right:
    "A day spa aligns with your goals if you want much higher average tickets, strong membership revenue, and a higher revenue ceiling per location.",
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
