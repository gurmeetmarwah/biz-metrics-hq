import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { buildPilatesComparison } from "./build-pilates-comparison";
import { barreStudioProfile } from "./fitness-format-profiles";
import { pilatesRelatedComparisons } from "./pilates-comparison-shared";

export const comparisonMeta = {
  slug: "pilates-studio-vs-barre-studio",
  title: "Pilates Studio vs Barre Studio",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, client economics, recurring revenue, equipment needs, and valuation for pilates and barre studio businesses.",
  dataVintage: "2025–2026",
} as const;

const relatedComparisons = pilatesRelatedComparisons.filter(
  (c) => !c.href.includes("pilates-studio-vs-barre-studio"),
);

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Pilates Studio" },
  { factor: "Higher Profit Margins", winner: "Pilates Studio" },
  { factor: "Lower Startup Cost", winner: "Barre Studio" },
  { factor: "Revenue Per Client", winner: "Pilates Studio" },
  { factor: "Recurring Revenue %", winner: "Pilates Studio" },
  { factor: "Market Differentiation", winner: "Pilates Studio" },
  { factor: "Equipment Simplicity", winner: "Barre Studio" },
  { factor: "Valuation Multiples", winner: "Pilates Studio" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 8, right: 6, winner: "Pilates Studio" },
  { label: "Profit Margin", left: 9, right: 7, winner: "Pilates Studio" },
  { label: "Low Capital Entry", left: 7, right: 8, winner: "Barre Studio" },
  { label: "Premium Pricing", left: 10, right: 7, winner: "Pilates Studio" },
] as const;

export function getRecommendation(inputs: HealthcareDecisionInputs): string {
  let pilates = 0;
  let barre = 0;

  if (inputs.clinicalInterest === "specialty") pilates += 3;
  else barre += 1;

  if (inputs.revenueGoal === "very-high" || inputs.revenueGoal === "high") pilates += 3;
  else barre += 2;

  if (inputs.insuranceComfort === "high") pilates += 3;
  else if (inputs.insuranceComfort === "medium") {
    pilates += 2;
    barre += 1;
  } else barre += 2;

  if (inputs.growthAmbition === "multi-location") pilates += 2;
  else if (inputs.growthAmbition === "lifestyle") barre += 2;
  else pilates += 1;

  return pilates >= barre ? "Pilates Studio" : "Barre Studio";
}

export const decisionToolCopy = {
  left: "A pilates studio fits your goals — higher revenue per client, reformer-based differentiation, premium margins, and stronger private session economics.",
  right:
    "A barre studio fits your goals — lower equipment costs, dance-inspired community, accessible boutique fitness, and strong membership retention at moderate price points.",
} as const;

export const fitnessDualComparisonData = buildPilatesComparison({
  slug: comparisonMeta.slug,
  title: comparisonMeta.title,
  subtitle: comparisonMeta.subtitle,
  right: barreStudioProfile,
  decisionSnapshot,
  winnerScorecard,
  revenueDrivers: [
    { driver: "Active Clients", left: "150 – 400", right: "120 – 280" },
    { driver: "Average Monthly Dues", left: "$165 – $220", right: "$110 – $175" },
    { driver: "Private Session Revenue", left: "16 – 30% of revenue", right: "8 – 18% of revenue" },
    { driver: "Recurring Revenue", left: "85 – 95% MRR", right: "80 – 92% MRR" },
  ],
  memberEconomicsMetrics: [
    { metric: "Client Lifetime Value", left: "$2,400 – $4,200", right: "$1,100 – $2,200" },
    { metric: "Monthly Churn", left: "2 – 4%", right: "3 – 5%" },
    { metric: "Annual Retention", left: "70 – 85%", right: "68 – 80%" },
    { metric: "Intro-to-Membership Conversion", left: "35 – 50%", right: "30 – 45%" },
  ],
  staffMetrics: [
    { metric: "Revenue Per Client", left: "$150 – $280/mo", right: "$110 – $195/mo" },
    { metric: "Clients Per Location", left: "150 – 400", right: "120 – 280" },
    { metric: "Revenue Per Instructor", left: "$95K – $165K/yr", right: "$75K – $140K/yr" },
  ],
  costStructureComparison: [
    { expense: "Rent & Occupancy", left: "15 – 22%", right: "18 – 26%" },
    { expense: "Instructor Payroll", left: "35 – 45%", right: "32 – 40%" },
    { expense: "Equipment", left: "8 – 14%", right: "5 – 10%" },
    { expense: "Marketing", left: "10 – 16%", right: "10 – 16%" },
  ],
  recurringComparison: [
    { metric: "Membership MRR Share", left: "85 – 95%", right: "80 – 92%" },
    { metric: "Private Session Revenue", left: "16 – 30%", right: "8 – 18%" },
    { metric: "Challenge / Workshop Revenue", left: "8 – 12%", right: "10 – 18%" },
    { metric: "Premium Pricing Power", left: "Very High", right: "Moderate–High" },
  ],
  ownerIncomeComparison: [
    { model: "Pilates Studio Owner", earnings: "$90K – $130K", type: "left" },
    { model: "Multi-Studio Pilates Operator", earnings: "$150K – $220K+", type: "left" },
    { model: "Barre Studio Owner", earnings: "$75K – $115K", type: "right" },
    { model: "Multi-Studio Barre Operator", earnings: "$120K – $175K+", type: "right" },
  ],
  breakEvenComparison: [
    { metric: "Monthly Revenue Needed", left: "$35K – $55K", right: "$30K – $48K" },
    { metric: "Clients Needed", left: "80 – 120", right: "70 – 110" },
    { metric: "Months To Break-Even", left: "12 – 18 months", right: "11 – 16 months" },
    { metric: "Startup Investment", left: "$80K – $250K", right: "$70K – $200K" },
  ],
  scalingRightTitle: "Barre Studio Growth Path",
  chooseLeft: [
    "You want the highest revenue per client in boutique fitness",
    "You prefer reformer equipment as a premium differentiator",
    "You value private and semi-private session revenue streams",
    "You're targeting affluent clients in premium urban/suburban markets",
    "You want stronger SDE multiples and exit potential",
  ],
  chooseRight: [
    "You want lower equipment costs than reformer-based pilates",
    "You prefer dance-inspired, music-driven group class experiences",
    "You value challenge-based marketing and community events",
    "You want accessible boutique fitness at $110–$175/month price points",
    "You're entering a market with strong barre brand recognition",
  ],
  chooseRightTitle: "Choose Barre Studio If",
  relatedComparisons,
  faqs: [
    {
      question: "Pilates studio vs barre studio — which makes more money?",
      answer:
        "Pilates studios typically generate higher total revenue ($350K–$900K vs $300K–$750K) and higher revenue per client. Barre studios have slightly lower capital requirements and can reach profitability faster at smaller scale.",
    },
    {
      question: "How do equipment costs compare?",
      answer:
        "Pilates reformers cost $45K–$120K for a full studio. Barre studios need barres, mirrors, and mats at $25K–$70K — significantly less capital-intensive while still requiring boutique buildout.",
    },
    {
      question: "Which has better margins?",
      answer:
        "Pilates studios typically achieve 18–28% net margins vs 16–24% for barre studios, driven by higher dues and private session attach rates.",
    },
    {
      question: "Are pilates and barre studios competitors?",
      answer:
        "They compete for similar boutique fitness clients but serve different preferences — corrective reformer movement vs dance-cardio barre. Many markets support both; differentiation comes from programming and community.",
    },
  ],
});
