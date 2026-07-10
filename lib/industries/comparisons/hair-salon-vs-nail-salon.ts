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
  slug: "hair-salon-vs-nail-salon",
  title: "Hair Salon vs Nail Salon",
  subtitle:
    "Compare revenue, average ticket, profit margins, startup costs, owner pay, and valuation between a full-service hair salon and a high-volume nail salon.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...hairSalonHubLabels,
  right: "Nail Salon",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Average Ticket", winner: "Hair Salon" },
  { factor: "Higher Visit Volume", winner: "Nail Salon" },
  { factor: "Stronger Retail Revenue", winner: "Hair Salon" },
  { factor: "Lower Startup Cost", winner: "Nail Salon" },
  { factor: "Higher Revenue Ceiling", winner: "Hair Salon" },
  { factor: "Faster Service Turnover", winner: "Nail Salon" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: hairSalonLeftKpis.annualRevenue, right: "$200K – $450K" },
  { metric: "Net Margin", left: hairSalonLeftKpis.netMargin, right: "10 – 17%" },
  { metric: "Owner Compensation", left: hairSalonLeftKpis.ownerComp, right: "$45K – $95K" },
  { metric: "Monthly Visits", left: hairSalonLeftKpis.monthlyVisits, right: "1,400 – 2,600" },
  { metric: "Average Ticket", left: hairSalonLeftKpis.revenuePerClient, right: "$30 – $60" },
  { metric: "Startup Cost", left: hairSalonLeftKpis.startup, right: "$70K – $180K" },
  { metric: "Valuation", left: hairSalonLeftKpis.valuation, right: "1.6× – 2.6× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Ticket Size", left: 8, right: 5, winner: "Hair Salon" },
  { label: "Visit Frequency", left: 6, right: 8, winner: "Nail Salon" },
  { label: "Capital Barrier", left: 6, right: 7, winner: "Nail Salon" },
  { label: "Retail Upside", left: 8, right: 4, winner: "Hair Salon" },
] as const;

export const leftRevenueSources = hairSalonLeftRevenueSources;

export const rightRevenueSources = [
  "Manicures and pedicures",
  "Gel and dip powder services",
  "Acrylic and extension sets",
  "Nail art and add-ons",
  "Waxing services",
  "Retail polish and care products",
] as const;

export const revenueFunnel = {
  left: [...hairSalonLeftRevenueFunnel],
  right: ["New Client", "Mani / Pedi Booking", "Gel / Art Upsell", "Rebooking"],
} as const;

export const clientFunnel = {
  left: [...hairSalonLeftClientFunnel],
  right: ["New Client", "First Service", "2–4 Week Cadence", "Loyal Repeat Client"],
} as const;

export const serviceFunnel = {
  left: [...hairSalonLeftServiceFunnel],
  right: ["Station Capacity", "Booked Utilization", "Average Ticket", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$45 – $85 service", right: "$30 – $60 service" },
  { driver: "Visit Frequency", left: "Every 6 – 10 weeks", right: "Every 2 – 4 weeks" },
  { driver: "Add-on Mix", left: "Color, treatments, retail", right: "Gel, art, extensions" },
  { driver: "Service Time", left: "45 – 120 min per client", right: "30 – 75 min per client" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: hairSalonLeftClientEconomics[0].value, right: "$30 – $60" },
  { metric: "Annual Visits Per Client", left: hairSalonLeftClientEconomics[1].value, right: "12 – 20" },
  { metric: "Estimated Lifetime Value", left: hairSalonLeftClientEconomics[2].value, right: "$1,600 – $4,200" },
  { metric: "Client Retention", left: hairSalonLeftClientEconomics[3].value, right: "60 – 78%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Station/Chair", left: hairSalonLeftServiceMetrics[0].value, right: "$40K – $80K" },
  { metric: "Revenue Per Technician", left: hairSalonLeftServiceMetrics[1].value, right: "$50K – $90K" },
  { metric: "Station Utilization", left: hairSalonLeftServiceMetrics[2].value, right: "65 – 82%" },
] as const;

export const marginTiers = {
  left: hairSalonLeftMarginTiers,
  right: { weak: "7 – 10%", average: "11 – 15%", strong: "17 – 22%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Commissions", left: hairSalonLeftCostStructure[0].value, right: "42 – 50%" },
  { expense: "Product COGS", left: hairSalonLeftCostStructure[1].value, right: "8 – 12%" },
  { expense: "Rent", left: hairSalonLeftCostStructure[2].value, right: "10 – 15%" },
  { expense: "Other Overhead", left: hairSalonLeftCostStructure[3].value, right: "12 – 18%" },
] as const;

export const recurringHighlights = {
  left: hairSalonLeftRecurringHighlight,
  right: { title: "High-Frequency Rebooking", value: "Every 2–4 weeks; strong loyalty cadence" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: hairSalonLeftRecurringComparison[0].value, right: "50 – 68%" },
  { metric: "Retail Attachment", left: hairSalonLeftRecurringComparison[1].value, right: "3 – 7%" },
  { metric: "Membership Adoption", left: hairSalonLeftRecurringComparison[2].value, right: "5 – 12%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Hair Salon", earnings: hairSalonLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Established Hair Salon", earnings: hairSalonLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Owner-Operator Nail Salon", earnings: "$45K – $95K", type: "right" },
  { model: "Multi-Station Nail Salon", earnings: "$90K – $150K", type: "right" },
] as const;

export const leftStartupItems = hairSalonLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout & Ventilation", percent: 36 },
  { item: "Stations & Equipment", percent: 22 },
  { item: "Inventory", percent: 8 },
  { item: "Working Capital", percent: 12 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: hairSalonLeftStartupSideBySide.buildout, right: "$30K – $70K" },
  { category: "Equipment", left: hairSalonLeftStartupSideBySide.equipment, right: "$15K – $40K" },
  { category: "Inventory", left: hairSalonLeftStartupSideBySide.inventory, right: "$5K – $15K" },
  { category: "Total Launch Budget", left: hairSalonLeftStartupSideBySide.total, right: "$70K – $180K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: hairSalonLeftValuation.sde, right: "1.6× – 2.6×" },
  { metric: "Revenue Multiple", left: hairSalonLeftValuation.revenue, right: "0.35× – 0.6×" },
  { metric: "Typical Value", left: "$180K – $420K", right: "$120K – $320K" },
] as const;

export const valuationExamples = {
  left: hairSalonLeftValuation.example,
  right: { revenue: "$300K", value: "$85K – $145K", note: "2.1–2.6× SDE on $56K" },
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: hairSalonLeftBreakEven[0].value, right: "$18K – $26K" },
  { metric: "Visits Per Day", left: hairSalonLeftBreakEven[1].value, right: "35 – 60" },
  { metric: "Months to Break-Even", left: hairSalonLeftBreakEven[2].value, right: "10 – 20 months" },
] as const;

export const scalingLadder = {
  left: [...hairSalonLeftScalingLadder],
  right: ["Small Studio", "Full Nail Salon", "Add Waxing / Lash", "Second Location"],
} as const;

export const scalingLeftTitle = "Hair Salon Growth Path";
export const scalingRightTitle = "Nail Salon Growth Path";

export const capitalEfficiency = {
  investment: "$150,000",
  left: hairSalonLeftCapitalEfficiency,
  right: {
    revenue: "$240K – $400K",
    profit: "$28K – $60K net profit",
    payback: "2 – 4 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Hair Salon If";
export const chooseRightTitle = "Choose a Nail Salon If";

export const chooseLeft = [
  "You want higher average tickets from color and chemical services",
  "You value strong retail attachment and premium upsells",
  "You are targeting a higher revenue ceiling per location",
  "You want a broad service menu across cut, color, and styling",
  "You plan to build a product retail program",
] as const;

export const chooseRight = [
  "You want high-frequency repeat visits every 2–4 weeks",
  "You prefer faster service turnover and higher daily volume",
  "You like a focused, teachable service menu",
  "You want strong client loyalty and rebooking cadence",
  "You plan to add waxing or lash services to grow ticket",
] as const;

export const calculators = hairSalonCalculators;

export const relatedComparisons = [
  { label: "Hair Salon vs Barbershop", href: "/comparisons/hair-salon-vs-barbershop/" },
  { label: "Hair Salon vs Day Spa", href: "/comparisons/hair-salon-vs-day-spa/" },
  { label: "Hair Salon vs Medical Spa", href: "/comparisons/hair-salon-vs-medical-spa/" },
  { label: "Hair Salon vs Mobile Salon", href: "/comparisons/hair-salon-vs-mobile-salon/" },
  { label: "Hair Salon Hub", href: "/industries/beauty/hair-salon/" },
] as const;

export const faqs = [
  {
    question: "Is a hair salon or nail salon more profitable?",
    answer:
      "Both models run comparable net margins — hair salons 8–15% and nail salons 10–17%. Nail salons rely on higher visit frequency and faster turnover, while hair salons earn more per visit through color and retail. Profitability comes down to utilization and average ticket in each model.",
  },
  {
    question: "Which is cheaper to open, a hair salon or a nail salon?",
    answer:
      "Nail salons are often slightly cheaper to open ($70K–$180K) than hair salons ($80K–$250K), though ventilation and station buildout can narrow the gap. Both benefit from leasing existing beauty space to cut buildout cost.",
  },
  {
    question: "Which has more repeat visits?",
    answer:
      "Nail salons see clients more frequently — every 2–4 weeks versus every 6–10 weeks for hair salons. Hair salons make up the difference with higher tickets and stronger retail attachment.",
  },
  {
    question: "Which is easier to value or sell?",
    answer:
      "Hair salons trade at 1.8×–3.0× SDE versus 1.6×–2.6× for nail salons. Transferable staff, recurring clients, and clean books drive value in both, but hair salons benefit from retail revenue and higher tickets.",
  },
  {
    question: "Can a hair salon add nail services?",
    answer:
      "Yes. Many hair salons add a nail station or two to lift average ticket and fill downtime. Adding nails requires proper ventilation and a licensed technician but can meaningfully improve chair-hour productivity.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Hair Salon", "Nail Salon", {
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
    "A hair salon is the better fit — higher average tickets from color and chemical work, strong retail attachment, and a higher revenue ceiling per location.",
  right:
    "A nail salon aligns with your goals if you want high-frequency repeat visits, faster service turnover, and a focused, teachable service menu.",
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
