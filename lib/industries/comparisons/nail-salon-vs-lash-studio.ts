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
  slug: "nail-salon-vs-lash-studio",
  title: "Nail Salon vs Lash Studio",
  subtitle:
    "Compare revenue, average ticket, profit margins, startup costs, owner pay, and valuation between a high-volume nail salon and a specialty lash extension studio.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...nailSalonHubLabels,
  right: "Lash Studio",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Average Ticket", winner: "Lash Studio" },
  { factor: "Higher Visit Volume", winner: "Nail Salon" },
  { factor: "Lower Startup Cost", winner: "Lash Studio" },
  { factor: "Higher Revenue Ceiling", winner: "Nail Salon" },
  { factor: "Broader Service Menu", winner: "Nail Salon" },
  { factor: "Specialist Premium Pricing", winner: "Lash Studio" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: nailSalonLeftKpis.annualRevenue, right: "$120K – $350K" },
  { metric: "Net Margin", left: nailSalonLeftKpis.netMargin, right: "12 – 22%" },
  { metric: "Owner Compensation", left: nailSalonLeftKpis.ownerComp, right: "$40K – $100K" },
  { metric: "Monthly Visits", left: nailSalonLeftKpis.monthlyVisits, right: "400 – 900" },
  { metric: "Average Ticket", left: "$30 – $60", right: "$80 – $150" },
  { metric: "Startup Cost", left: nailSalonLeftKpis.startup, right: "$50K – $150K" },
  { metric: "Valuation", left: nailSalonLeftKpis.valuation, right: "1.5× – 2.5× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Ticket Size", left: 5, right: 9, winner: "Lash Studio" },
  { label: "Visit Frequency", left: 8, right: 6, winner: "Nail Salon" },
  { label: "Capital Barrier", left: 6, right: 8, winner: "Lash Studio" },
  { label: "Revenue Ceiling", left: 7, right: 5, winner: "Nail Salon" },
] as const;

export const leftRevenueSources = nailSalonLeftRevenueSources;

export const rightRevenueSources = [
  "Classic lash extensions",
  "Volume and hybrid sets",
  "Lash fills and maintenance",
  "Lash lifts and tints",
  "Brow lamination add-ons",
  "Aftercare product sales",
] as const;

export const revenueFunnel = {
  left: [...nailSalonLeftRevenueFunnel],
  right: ["New Client", "Consult / Set Booking", "Fill / Maintenance", "Rebooking"],
} as const;

export const clientFunnel = {
  left: [...nailSalonLeftClientFunnel],
  right: ["New Client", "First Full Set", "2–3 Week Fill Cadence", "Loyal Repeat Client"],
} as const;

export const serviceFunnel = {
  left: [...nailSalonLeftServiceFunnel],
  right: ["Lash Bed Capacity", "Booked Utilization", "Average Ticket", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$30 – $60 service", right: "$80 – $150 set/fill" },
  { driver: "Visit Frequency", left: "Every 2 – 4 weeks", right: "Every 2 – 3 weeks (fills)" },
  { driver: "Add-on Mix", left: "Gel, art, extensions", right: "Volume, hybrid, lifts" },
  { driver: "Service Time", left: "30 – 75 min per client", right: "90 – 150 min per set" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: nailSalonLeftClientEconomics[0].value, right: "$80 – $150" },
  { metric: "Annual Visits Per Client", left: nailSalonLeftClientEconomics[1].value, right: "10 – 18" },
  { metric: "Estimated Lifetime Value", left: nailSalonLeftClientEconomics[2].value, right: "$2,000 – $5,500" },
  { metric: "Client Retention", left: nailSalonLeftClientEconomics[3].value, right: "62 – 80%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Station/Bed", left: nailSalonLeftServiceMetrics[0].value, right: "$50K – $120K" },
  { metric: "Revenue Per Lash Artist", left: nailSalonLeftServiceMetrics[1].value, right: "$60K – $130K" },
  { metric: "Bed Utilization", left: nailSalonLeftServiceMetrics[2].value, right: "60 – 78%" },
] as const;

export const marginTiers = {
  left: nailSalonLeftMarginTiers,
  right: { weak: "8 – 12%", average: "14 – 18%", strong: "20 – 26%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Commissions", left: nailSalonLeftCostStructure[0].value, right: "38 – 48%" },
  { expense: "Product COGS", left: nailSalonLeftCostStructure[1].value, right: "6 – 10%" },
  { expense: "Rent", left: nailSalonLeftCostStructure[2].value, right: "10 – 16%" },
  { expense: "Other Overhead", left: nailSalonLeftCostStructure[3].value, right: "10 – 16%" },
] as const;

export const recurringHighlights = {
  left: nailSalonLeftRecurringHighlight,
  right: { title: "Fill-Driven Recurring Revenue", value: "Clients return every 2–3 weeks for lash fills" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: nailSalonLeftRecurringComparison[0].value, right: "55 – 72%" },
  { metric: "Retail Attachment", left: nailSalonLeftRecurringComparison[1].value, right: "4 – 8%" },
  { metric: "Membership Adoption", left: nailSalonLeftRecurringComparison[2].value, right: "8 – 18%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Nail Salon", earnings: nailSalonLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Multi-Station Nail Salon", earnings: nailSalonLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Owner-Operator Lash Studio", earnings: "$40K – $85K", type: "right" },
  { model: "Multi-Artist Lash Studio", earnings: "$85K – $130K", type: "right" },
] as const;

export const leftStartupItems = nailSalonLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout & Lighting", percent: 32 },
  { item: "Lash Beds & Equipment", percent: 24 },
  { item: "Inventory & Supplies", percent: 10 },
  { item: "Working Capital", percent: 14 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: nailSalonLeftStartupSideBySide.buildout, right: "$18K – $50K" },
  { category: "Equipment", left: nailSalonLeftStartupSideBySide.equipment, right: "$12K – $35K" },
  { category: "Inventory", left: nailSalonLeftStartupSideBySide.inventory, right: "$4K – $12K" },
  { category: "Total Launch Budget", left: nailSalonLeftStartupSideBySide.total, right: "$50K – $150K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: nailSalonLeftValuation.sde, right: "1.5× – 2.5×" },
  { metric: "Revenue Multiple", left: nailSalonLeftValuation.revenue, right: "0.4× – 0.7×" },
  { metric: "Typical Value", left: "$120K – $320K", right: "$90K – $250K" },
] as const;

export const valuationExamples = {
  left: nailSalonLeftValuation.example,
  right: { revenue: "$220K", value: "$70K – $115K", note: "2.0–2.4× SDE on $42K" },
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: nailSalonLeftBreakEven[0].value, right: "$12K – $20K" },
  { metric: "Appointments Per Day", left: nailSalonLeftBreakEven[1].value, right: "6 – 12" },
  { metric: "Months to Break-Even", left: nailSalonLeftBreakEven[2].value, right: "9 – 18 months" },
] as const;

export const scalingLadder = {
  left: [...nailSalonLeftScalingLadder],
  right: ["Solo Lash Artist", "Small Studio (2–3 beds)", "Add Brow Services", "Second Location"],
} as const;

export const scalingLeftTitle = "Nail Salon Growth Path";
export const scalingRightTitle = "Lash Studio Growth Path";

export const capitalEfficiency = {
  investment: "$100,000",
  left: nailSalonLeftCapitalEfficiency,
  right: {
    revenue: "$180K – $300K",
    profit: "$25K – $55K net profit",
    payback: "2 – 4 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Nail Salon If";
export const chooseRightTitle = "Choose a Lash Studio If";

export const chooseLeft = [
  "You want a broader service menu and higher total revenue ceiling",
  "You prefer high daily volume and faster service turnover",
  "You like walk-in traffic and a wider client demographic",
  "You plan to add waxing, lash, or other beauty services over time",
  "You want more stations to scale technician headcount",
] as const;

export const chooseRight = [
  "You want much higher average tickets per appointment",
  "You prefer a focused specialty with premium pricing",
  "You like lower startup cost and simpler operations",
  "You value strong fill-driven recurring revenue every 2–3 weeks",
  "You want higher net margins on a leaner service menu",
] as const;

export const calculators = nailSalonCalculators;

export const relatedComparisons = nailSalonRelatedComparisons;

export const faqs = [
  {
    question: "Is a nail salon or lash studio more profitable?",
    answer:
      "Lash studios often run slightly higher net margins (12–22%) than nail salons (10–17%) thanks to premium tickets ($80–$150), but nail salons can generate more total revenue with higher visit volume. A nail salon scales revenue faster; a lash studio earns more per appointment.",
  },
  {
    question: "Which is cheaper to open, a nail salon or a lash studio?",
    answer:
      "A lash studio is typically cheaper to open ($50K–$150K) than a nail salon ($70K–$180K) because it needs fewer stations, less ventilation, and a smaller footprint. Both can reduce cost by leasing existing salon or suite space.",
  },
  {
    question: "Which has more repeat visits?",
    answer:
      "Both models see clients every 2–4 weeks. Nail salons drive volume through manicures and pedicures; lash studios rely on fill appointments every 2–3 weeks. Nail salons typically see more total monthly visits due to broader service demand.",
  },
  {
    question: "Can a nail salon add lash services?",
    answer:
      "Yes. Many nail salons add a lash bed or partner with a lash artist to lift average ticket and fill schedule gaps. Adding lashes requires certified lash technicians and proper lighting but can meaningfully improve revenue per square foot.",
  },
  {
    question: "Which is easier to value or sell?",
    answer:
      "Nail salons and lash studios trade at similar multiples (1.5×–2.6× SDE). Nail salons may command slightly higher total sale prices due to larger revenue bases, while lash studios benefit from specialty positioning and strong fill-driven retention.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Nail Salon", "Lash Studio", {
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
    "A nail salon aligns with your goals if you want higher total revenue, broader service demand, and faster daily volume through manicures and pedicures.",
  right:
    "A lash studio is the better fit if you want premium tickets, lower startup cost, and a focused specialty with strong fill-driven recurring revenue.",
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
