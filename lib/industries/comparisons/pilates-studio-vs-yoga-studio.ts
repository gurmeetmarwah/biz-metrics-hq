import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { buildPilatesComparison } from "./build-pilates-comparison";
import { yogaStudioProfile } from "./fitness-format-profiles";
import { pilatesRelatedComparisons } from "./pilates-comparison-shared";

export const comparisonMeta = {
  slug: "pilates-studio-vs-yoga-studio",
  title: "Pilates Studio vs Yoga Studio",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, client economics, recurring revenue, equipment needs, and valuation for pilates and yoga studio businesses.",
  dataVintage: "2025–2026",
} as const;

const relatedComparisons = pilatesRelatedComparisons.filter(
  (c) => !c.href.includes("pilates-studio-vs-yoga-studio"),
);

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Pilates Studio" },
  { factor: "Higher Profit Margins", winner: "Pilates Studio" },
  { factor: "Lower Startup Cost", winner: "Yoga Studio" },
  { factor: "Revenue Per Client", winner: "Pilates Studio" },
  { factor: "Recurring Revenue %", winner: "Pilates Studio" },
  { factor: "Equipment Investment", winner: "Yoga Studio" },
  { factor: "Valuation Multiples", winner: "Pilates Studio" },
  { factor: "Market Accessibility", winner: "Yoga Studio" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 8, right: 6, winner: "Pilates Studio" },
  { label: "Profit Margin", left: 9, right: 7, winner: "Pilates Studio" },
  { label: "Low Capital Entry", left: 7, right: 10, winner: "Yoga Studio" },
  { label: "Premium Pricing", left: 10, right: 6, winner: "Pilates Studio" },
] as const;

export function getRecommendation(inputs: HealthcareDecisionInputs): string {
  let pilates = 0;
  let yoga = 0;

  if (inputs.clinicalInterest === "specialty") pilates += 2;
  else yoga += 2;

  if (inputs.revenueGoal === "very-high" || inputs.revenueGoal === "high") pilates += 3;
  else yoga += 2;

  if (inputs.insuranceComfort === "high") pilates += 3;
  else if (inputs.insuranceComfort === "medium") {
    pilates += 2;
    yoga += 1;
  } else yoga += 2;

  if (inputs.growthAmbition === "multi-location") pilates += 2;
  else if (inputs.growthAmbition === "lifestyle") yoga += 3;
  else pilates += 1;

  return pilates >= yoga ? "Pilates Studio" : "Yoga Studio";
}

export const decisionToolCopy = {
  left: "A pilates studio fits your goals — premium pricing, higher revenue per client, reformer-based differentiation, and strong recurring membership economics.",
  right:
    "A yoga studio fits your goals — lowest startup costs, flexible class formats, lifestyle-friendly operations, and broad wellness market appeal.",
} as const;

export const fitnessDualComparisonData = buildPilatesComparison({
  slug: comparisonMeta.slug,
  title: comparisonMeta.title,
  subtitle: comparisonMeta.subtitle,
  right: yogaStudioProfile,
  decisionSnapshot,
  winnerScorecard,
  revenueDrivers: [
    { driver: "Active Clients", left: "150 – 400", right: "100 – 300" },
    { driver: "Average Monthly Spend", left: "$165 – $220 dues", right: "$80 – $160" },
    { driver: "Private Session Revenue", left: "16 – 30% of revenue", right: "5 – 15% of revenue" },
    { driver: "Recurring Revenue", left: "85 – 95% MRR", right: "75 – 90% MRR" },
  ],
  memberEconomicsMetrics: [
    { metric: "Client Lifetime Value", left: "$2,400 – $4,200", right: "$700 – $1,400" },
    { metric: "Monthly Churn", left: "2 – 4%", right: "3 – 6%" },
    { metric: "Annual Retention", left: "70 – 85%", right: "65 – 78%" },
    { metric: "Intro-to-Membership Conversion", left: "35 – 50%", right: "25 – 40%" },
  ],
  staffMetrics: [
    { metric: "Revenue Per Client", left: "$150 – $280/mo", right: "$80 – $160/mo" },
    { metric: "Clients Per Location", left: "150 – 400", right: "100 – 300" },
    { metric: "Revenue Per Instructor", left: "$95K – $165K/yr", right: "$60K – $120K/yr" },
  ],
  costStructureComparison: [
    { expense: "Rent & Occupancy", left: "15 – 22%", right: "20 – 30%" },
    { expense: "Instructor Payroll", left: "35 – 45%", right: "30 – 42%" },
    { expense: "Equipment", left: "8 – 14%", right: "3 – 8%" },
    { expense: "Marketing", left: "10 – 16%", right: "10 – 18%" },
  ],
  recurringComparison: [
    { metric: "Membership MRR Share", left: "85 – 95%", right: "75 – 90%" },
    { metric: "Private Session Revenue", left: "16 – 30%", right: "5 – 15%" },
    { metric: "Workshop / Training Revenue", left: "8 – 15%", right: "10 – 20%" },
    { metric: "Premium Pricing Power", left: "Very High", right: "Moderate" },
  ],
  ownerIncomeComparison: [
    { model: "Pilates Studio Owner", earnings: "$90K – $130K", type: "left" },
    { model: "Multi-Studio Pilates Operator", earnings: "$150K – $220K+", type: "left" },
    { model: "Yoga Studio Owner", earnings: "$70K – $110K", type: "right" },
    { model: "Multi-Studio Yoga Operator", earnings: "$120K – $180K+", type: "right" },
  ],
  breakEvenComparison: [
    { metric: "Monthly Revenue Needed", left: "$35K – $55K", right: "$25K – $45K" },
    { metric: "Clients Needed", left: "80 – 120", right: "60 – 100" },
    { metric: "Months To Break-Even", left: "12 – 18 months", right: "10 – 16 months" },
    { metric: "Startup Investment", left: "$80K – $250K", right: "$50K – $150K" },
  ],
  scalingRightTitle: "Yoga Studio Growth Path",
  chooseLeft: [
    "You want premium pricing and higher revenue per client ($150–$280/mo)",
    "You prefer reformer-based differentiation and private session upsells",
    "You value 85%+ recurring membership revenue in a boutique format",
    "You're targeting affluent clients willing to pay $165–$220/month",
    "You want stronger margins on a specialized fitness offering",
  ],
  chooseRight: [
    "You want the lowest startup cost entry in boutique fitness ($50K–$150K)",
    "You prefer minimal equipment investment and flexible class formats",
    "You value workshop, retreat, and teacher training revenue streams",
    "You want broader market appeal beyond equipment-based programming",
    "You're passionate about yoga and wellness community building",
  ],
  chooseRightTitle: "Choose Yoga Studio If",
  relatedComparisons,
  faqs: [
    {
      question: "Pilates studio vs yoga studio — which is more profitable?",
      answer:
        "Pilates studios typically achieve higher net margins (18–28% vs 15–25%) and higher revenue per client due to premium reformer pricing. Yoga studios have lower overhead but also lower average client spend.",
    },
    {
      question: "Which costs less to open?",
      answer:
        "Yoga studios are among the lowest-capital boutique formats at $50K–$150K. Pilates studios require $80K–$250K primarily for reformer equipment and boutique buildout.",
    },
    {
      question: "Which has better client retention?",
      answer:
        "Pilates studios often achieve lower churn (2–4% monthly) through instructor relationships and premium community. Both formats benefit from membership models, but pilates clients typically have higher switching costs due to specialized equipment training.",
    },
    {
      question: "Can a yoga studio generate pilates-level revenue?",
      answer:
        "Top yoga studios reach $500K–$700K with strong workshop and teacher training revenue. Pilates studios more consistently reach $650K–$900K at mature occupancy due to higher dues and private session economics.",
    },
  ],
});
