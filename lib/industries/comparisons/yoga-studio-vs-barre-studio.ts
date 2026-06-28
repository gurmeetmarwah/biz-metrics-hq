import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { buildYogaComparison } from "./build-yoga-comparison";
import { barreStudioProfile } from "./fitness-format-profiles";
import { yogaRelatedComparisons } from "./yoga-comparison-shared";

export const comparisonMeta = {
  slug: "yoga-studio-vs-barre-studio",
  title: "Yoga Studio vs Barre Studio",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, client economics, community retention, recurring revenue, equipment needs, and valuation for yoga and barre studio businesses.",
  dataVintage: "2025–2026",
} as const;

const relatedComparisons = yogaRelatedComparisons.filter(
  (c) => !c.href.includes("yoga-studio-vs-barre-studio"),
);

export const decisionSnapshot = [
  { factor: "Lower Startup Cost", winner: "Yoga Studio" },
  { factor: "Higher Revenue Per Client", winner: "Barre Studio" },
  { factor: "Community & Wellness Focus", winner: "Yoga Studio" },
  { factor: "Recurring Revenue %", winner: "Barre Studio" },
  { factor: "Equipment Simplicity", winner: "Yoga Studio" },
  { factor: "Workshop / Retreat Revenue", winner: "Yoga Studio" },
  { factor: "Premium Boutique Pricing", winner: "Barre Studio" },
  { factor: "Lifestyle Flexibility", winner: "Yoga Studio" },
] as const;

export const winnerScorecard = [
  { label: "Low Capital Entry", left: 10, right: 8, winner: "Yoga Studio" },
  { label: "Revenue Per Client", left: 6, right: 8, winner: "Barre Studio" },
  { label: "Community Retention", left: 9, right: 8, winner: "Yoga Studio" },
  { label: "Premium Positioning", left: 6, right: 8, winner: "Barre Studio" },
] as const;

export function getRecommendation(inputs: HealthcareDecisionInputs): string {
  let yoga = 0;
  let barre = 0;

  if (inputs.clinicalInterest === "specialty") barre += 2;
  else yoga += 2;

  if (inputs.revenueGoal === "very-high" || inputs.revenueGoal === "high") barre += 2;
  else yoga += 3;

  if (inputs.insuranceComfort === "high") barre += 2;
  else if (inputs.insuranceComfort === "medium") {
    yoga += 2;
    barre += 1;
  } else yoga += 2;

  if (inputs.growthAmbition === "multi-location") barre += 2;
  else if (inputs.growthAmbition === "lifestyle") yoga += 3;
  else yoga += 1;

  return yoga >= barre ? "Yoga Studio" : "Barre Studio";
}

export const decisionToolCopy = {
  left: "A yoga studio fits your goals — lowest startup costs, wellness community focus, workshop and retreat revenue, and lifestyle-friendly boutique operations.",
  right:
    "A barre studio fits your goals — higher revenue per client, dance-inspired group classes, challenge-based marketing, and strong membership retention at moderate price points.",
} as const;

export const fitnessDualComparisonData = buildYogaComparison({
  slug: comparisonMeta.slug,
  title: comparisonMeta.title,
  subtitle: comparisonMeta.subtitle,
  right: barreStudioProfile,
  decisionSnapshot,
  winnerScorecard,
  revenueDrivers: [
    { driver: "Active Clients", left: "100 – 300", right: "120 – 280" },
    { driver: "Average Monthly Dues", left: "$80 – $160", right: "$110 – $175" },
    { driver: "Workshop / Retreat Revenue", left: "10 – 20% of revenue", right: "10 – 18% of revenue" },
    { driver: "Recurring Revenue", left: "75 – 90% MRR", right: "80 – 92% MRR" },
  ],
  memberEconomicsMetrics: [
    { metric: "Client Lifetime Value", left: "$700 – $1,400", right: "$1,100 – $2,200" },
    { metric: "Monthly Churn", left: "3 – 6%", right: "3 – 5%" },
    { metric: "Annual Retention", left: "65 – 78%", right: "68 – 80%" },
    { metric: "Intro-to-Membership Conversion", left: "25 – 40%", right: "30 – 45%" },
  ],
  staffMetrics: [
    { metric: "Revenue Per Client", left: "$80 – $160/mo", right: "$110 – $195/mo" },
    { metric: "Clients Per Location", left: "100 – 300", right: "120 – 280" },
    { metric: "Revenue Per Instructor", left: "$60K – $120K/yr", right: "$75K – $140K/yr" },
  ],
  costStructureComparison: [
    { expense: "Rent & Occupancy", left: "20 – 30%", right: "18 – 26%" },
    { expense: "Instructor Payroll", left: "30 – 42%", right: "32 – 40%" },
    { expense: "Equipment", left: "3 – 8%", right: "5 – 10%" },
    { expense: "Marketing", left: "10 – 18%", right: "10 – 16%" },
  ],
  recurringComparison: [
    { metric: "Membership MRR Share", left: "75 – 90%", right: "80 – 92%" },
    { metric: "Workshop / Retreat Revenue", left: "10 – 20%", right: "10 – 18%" },
    { metric: "Challenge / Event Revenue", left: "5 – 12%", right: "10 – 18%" },
    { metric: "Premium Pricing Power", left: "Moderate", right: "Moderate–High" },
  ],
  ownerIncomeComparison: [
    { model: "Yoga Studio Owner", earnings: "$70K – $110K", type: "left" },
    { model: "Multi-Studio Yoga Operator", earnings: "$120K – $180K+", type: "left" },
    { model: "Barre Studio Owner", earnings: "$75K – $115K", type: "right" },
    { model: "Multi-Studio Barre Operator", earnings: "$120K – $175K+", type: "right" },
  ],
  breakEvenComparison: [
    { metric: "Monthly Revenue Needed", left: "$25K – $45K", right: "$30K – $48K" },
    { metric: "Clients Needed", left: "60 – 100", right: "70 – 110" },
    { metric: "Months To Break-Even", left: "10 – 16 months", right: "11 – 16 months" },
    { metric: "Startup Investment", left: "$50K – $150K", right: "$70K – $200K" },
  ],
  scalingRightTitle: "Barre Studio Growth Path",
  chooseLeft: [
    "You want the lowest startup cost entry in boutique fitness ($50K–$150K)",
    "You prefer wellness community building with workshop and retreat revenue",
    "You value minimal equipment investment — mats, props, and studio buildout only",
    "You want lifestyle-friendly operations with instructor-led mindfulness culture",
    "You're passionate about yoga and broad wellness market appeal",
  ],
  chooseRight: [
    "You want higher revenue per client at $110–$175/month price points",
    "You prefer dance-inspired, music-driven group class experiences",
    "You value challenge-based marketing and boutique fitness community events",
    "You want stronger recurring membership percentages (80–92% MRR)",
    "You're entering a market with strong barre brand recognition",
  ],
  chooseRightTitle: "Choose Barre Studio If",
  relatedComparisons,
  faqs: [
    {
      question: "Yoga studio vs barre studio — which costs less to open?",
      answer:
        "Yoga studios typically launch at $50K–$150K with minimal equipment needs. Barre studios require $70K–$200K for barres, mirrors, and boutique buildout — still accessible but higher than yoga.",
    },
    {
      question: "Which has better community retention?",
      answer:
        "Both formats build strong boutique communities. Yoga studios excel at mindfulness-driven loyalty, workshops, and retreats. Barre studios drive retention through challenge events and dance-cardio group energy with slightly lower churn (3–5% vs 3–6%).",
    },
    {
      question: "Which makes more money per client?",
      answer:
        "Barre studios typically earn more per client ($110–$195/mo vs $80–$160/mo for yoga) due to higher dues and semi-private session attach rates. Yoga studios offset lower ARPU with workshop, retreat, and teacher training revenue.",
    },
    {
      question: "Are yoga and barre studios competitors?",
      answer:
        "They compete for similar boutique wellness clients but serve different preferences — mindful movement and breathwork vs dance-inspired barre cardio. Many markets support both; differentiation comes from programming, community, and instructor culture.",
    },
  ],
});
