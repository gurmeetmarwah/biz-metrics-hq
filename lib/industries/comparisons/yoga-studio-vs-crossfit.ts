import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { buildYogaComparison } from "./build-yoga-comparison";
import { crossFitProfile } from "./fitness-format-profiles";
import { yogaRelatedComparisons } from "./yoga-comparison-shared";

export const comparisonMeta = {
  slug: "yoga-studio-vs-crossfit",
  title: "Yoga Studio vs CrossFit",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, client economics, community retention, recurring revenue, lifestyle fit, and valuation for yoga studio and CrossFit box businesses.",
  dataVintage: "2025–2026",
} as const;

const relatedComparisons = yogaRelatedComparisons.filter(
  (c) => !c.href.includes("yoga-studio-vs-crossfit"),
);

export const decisionSnapshot = [
  { factor: "Lower Startup Cost", winner: "Yoga Studio" },
  { factor: "Higher Annual Revenue Ceiling", winner: "CrossFit" },
  { factor: "Community Retention", winner: "CrossFit" },
  { factor: "Lifestyle Flexibility", winner: "Yoga Studio" },
  { factor: "Recurring Revenue %", winner: "Tie" },
  { factor: "Wellness Market Appeal", winner: "Yoga Studio" },
  { factor: "Injury / Liability Exposure", winner: "Yoga Studio" },
  { factor: "Performance Culture", winner: "CrossFit" },
] as const;

export const winnerScorecard = [
  { label: "Low Capital Entry", left: 10, right: 6, winner: "Yoga Studio" },
  { label: "Revenue Ceiling", left: 6, right: 9, winner: "CrossFit" },
  { label: "Community Retention", left: 8, right: 9, winner: "CrossFit" },
  { label: "Lifestyle Fit", left: 9, right: 6, winner: "Yoga Studio" },
] as const;

export function getRecommendation(inputs: HealthcareDecisionInputs): string {
  let yoga = 0;
  let crossfit = 0;

  if (inputs.clinicalInterest === "specialty") crossfit += 2;
  else yoga += 2;

  if (inputs.revenueGoal === "very-high") crossfit += 3;
  else if (inputs.revenueGoal === "high") {
    crossfit += 2;
    yoga += 1;
  } else yoga += 3;

  if (inputs.insuranceComfort === "high") yoga += 2;
  else crossfit += 1;

  if (inputs.growthAmbition === "multi-location") crossfit += 2;
  else if (inputs.growthAmbition === "lifestyle") yoga += 3;
  else {
    yoga += 1;
    crossfit += 1;
  }

  return yoga >= crossfit ? "Yoga Studio" : "CrossFit";
}

export const decisionToolCopy = {
  left: "A yoga studio fits your goals — lowest startup costs, wellness community focus, lifestyle-friendly operations, and workshop revenue with lower injury-liability exposure.",
  right:
    "CrossFit fits your goals — tribal community retention, coach-led performance culture, higher revenue ceiling, and strong member loyalty through group training.",
} as const;

export const fitnessDualComparisonData = buildYogaComparison({
  slug: comparisonMeta.slug,
  title: comparisonMeta.title,
  subtitle: comparisonMeta.subtitle,
  right: crossFitProfile,
  decisionSnapshot,
  winnerScorecard,
  revenueDrivers: [
    { driver: "Active Clients", left: "100 – 300", right: "120 – 250" },
    { driver: "Average Monthly Dues", left: "$80 – $160", right: "$150 – $250" },
    { driver: "Workshop / Event Revenue", left: "10 – 20% of revenue", right: "8 – 15% of revenue" },
    { driver: "Recurring Revenue", left: "75 – 90% MRR", right: "80 – 90% MRR" },
  ],
  memberEconomicsMetrics: [
    { metric: "Client Lifetime Value", left: "$700 – $1,400", right: "$1,200 – $2,800" },
    { metric: "Monthly Churn", left: "3 – 6%", right: "3 – 5%" },
    { metric: "Annual Retention", left: "65 – 78%", right: "65 – 80%" },
    { metric: "Community Engagement", left: "High (wellness)", right: "Very High (tribal)" },
  ],
  staffMetrics: [
    { metric: "Revenue Per Client", left: "$80 – $160/mo", right: "$150 – $250/mo" },
    { metric: "Clients Per Location", left: "100 – 300", right: "120 – 250" },
    { metric: "Revenue Per Coach / Instructor", left: "$60K – $120K/yr", right: "$85K – $155K/yr" },
  ],
  costStructureComparison: [
    { expense: "Rent & Occupancy", left: "20 – 30%", right: "18 – 26%" },
    { expense: "Instructor / Coach Payroll", left: "30 – 42%", right: "32 – 42%" },
    { expense: "Equipment", left: "3 – 8%", right: "10 – 18%" },
    { expense: "Marketing", left: "10 – 18%", right: "12 – 18%" },
  ],
  recurringComparison: [
    { metric: "Membership MRR Share", left: "75 – 90%", right: "80 – 90%" },
    { metric: "Workshop / Challenge Revenue", left: "10 – 20%", right: "8 – 15%" },
    { metric: "Nutrition / Coaching Add-ons", left: "5 – 10%", right: "10 – 20%" },
    { metric: "Market Position", left: "Wellness community", right: "Performance community" },
  ],
  ownerIncomeComparison: [
    { model: "Yoga Studio Owner", earnings: "$70K – $110K", type: "left" },
    { model: "Multi-Studio Yoga Operator", earnings: "$120K – $180K+", type: "left" },
    { model: "CrossFit Box Owner", earnings: "$85K – $180K", type: "right" },
    { model: "Multi-Box CrossFit Operator", earnings: "$140K – $220K+", type: "right" },
  ],
  breakEvenComparison: [
    { metric: "Monthly Revenue Needed", left: "$25K – $45K", right: "$40K – $65K" },
    { metric: "Clients Needed", left: "60 – 100", right: "100 – 150" },
    { metric: "Months To Break-Even", left: "10 – 16 months", right: "14 – 22 months" },
    { metric: "Startup Investment", left: "$50K – $150K", right: "$100K – $350K" },
  ],
  scalingRightTitle: "CrossFit Growth Path",
  chooseLeft: [
    "You want the lowest startup cost entry in boutique fitness ($50K–$150K)",
    "You prefer wellness community building over high-intensity performance culture",
    "You value workshop, retreat, and teacher training revenue streams",
    "You want lifestyle-friendly operations with lower injury-liability exposure",
    "You're passionate about mindfulness, breathwork, and holistic member experiences",
  ],
  chooseRight: [
    "You want community-driven, coach-led group training with tribal retention",
    "You prefer performance-oriented programming and competitive events",
    "You value a higher revenue ceiling ($400K–$1.1M) at mature scale",
    "You want nutrition challenges and merchandise revenue streams",
    "You're passionate about high-intensity functional fitness and box culture",
  ],
  chooseRightTitle: "Choose CrossFit If",
  relatedComparisons,
  faqs: [
    {
      question: "Yoga studio vs CrossFit — which costs less to open?",
      answer:
        "Yoga studios launch at $50K–$150K with minimal equipment. CrossFit boxes require $100K–$350K for rigs, barbells, and specialized buildout — significantly more capital-intensive.",
    },
    {
      question: "Which has better client retention?",
      answer:
        "CrossFit is known for exceptional tribal community retention through coach relationships and group accountability. Yoga studios build strong wellness communities through instructor connection, workshops, and mindfulness culture.",
    },
    {
      question: "Which is better as a lifestyle business?",
      answer:
        "Yoga studios typically offer more lifestyle flexibility with smaller teams, class-based scheduling, and lower overhead. CrossFit demands coach quality, programming variety, and community event management.",
    },
    {
      question: "Which generates more revenue?",
      answer:
        "CrossFit boxes reach higher total revenue ($400K–$1.1M vs $250K–$700K for yoga) with higher per-member dues. Yoga studios achieve comparable owner income on lower volume with workshop and teacher training upside.",
    },
  ],
});
