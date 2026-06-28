import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { buildCrossfitComparison } from "./build-crossfit-comparison";
import { personalTrainingStudioProfile } from "./fitness-format-profiles";
import { crossfitRelatedComparisons } from "./crossfit-comparison-shared";

export const comparisonMeta = {
  slug: "crossfit-vs-personal-training-studio",
  title: "CrossFit vs Personal Training Studio",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, client economics, scalability, coach dependency, recurring revenue, and valuation for CrossFit affiliate and personal training studio businesses.",
  dataVintage: "2025–2026",
} as const;

const relatedComparisons = crossfitRelatedComparisons.filter(
  (c) => !c.href.includes("crossfit-vs-personal-training-studio"),
);

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue Ceiling", winner: "CrossFit" },
  { factor: "Lower Startup Cost", winner: "Personal Training Studio" },
  { factor: "Recurring Revenue %", winner: "CrossFit" },
  { factor: "Revenue Per Client", winner: "Personal Training Studio" },
  { factor: "Community Retention", winner: "CrossFit" },
  { factor: "Coach Dependency", winner: "Personal Training Studio" },
  { factor: "Scalability", winner: "CrossFit" },
  { factor: "Lifestyle Flexibility (Solo)", winner: "Personal Training Studio" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Ceiling", left: 9, right: 6, winner: "CrossFit" },
  { label: "Low Capital Entry", left: 6, right: 10, winner: "Personal Training Studio" },
  { label: "Recurring Revenue", left: 9, right: 6, winner: "CrossFit" },
  { label: "Revenue Per Client", left: 7, right: 9, winner: "Personal Training Studio" },
] as const;

export function getRecommendation(inputs: HealthcareDecisionInputs): string {
  let crossfit = 0;
  let pt = 0;

  if (inputs.clinicalInterest === "specialty") crossfit += 2;
  else pt += 2;

  if (inputs.revenueGoal === "very-high") crossfit += 3;
  else if (inputs.revenueGoal === "high") crossfit += 2;
  else pt += 2;

  if (inputs.insuranceComfort === "high") pt += 2;
  else crossfit += 1;

  if (inputs.growthAmbition === "multi-location") crossfit += 3;
  else if (inputs.growthAmbition === "lifestyle") pt += 3;
  else {
    crossfit += 1;
    pt += 1;
  }

  return crossfit >= pt ? "CrossFit" : "Personal Training Studio";
}

export const decisionToolCopy = {
  left: "CrossFit fits your goals — membership-driven recurring revenue, community retention, coach-led group training, and a higher revenue ceiling at scale.",
  right:
    "A personal training studio fits your goals — lowest startup costs, highest revenue per client, flexible solo-to-small-team model, and session-package economics.",
} as const;

export const fitnessDualComparisonData = buildCrossfitComparison({
  slug: comparisonMeta.slug,
  title: comparisonMeta.title,
  subtitle: comparisonMeta.subtitle,
  right: personalTrainingStudioProfile,
  decisionSnapshot,
  winnerScorecard,
  revenueDrivers: [
    { driver: "Active Members / Clients", left: "120 – 380", right: "40 – 120" },
    { driver: "Average Monthly Revenue / Client", left: "$150 – $250", right: "$250 – $450" },
    { driver: "Group vs 1-on-1 Model", left: "Coach-led classes", right: "Session packages" },
    { driver: "Recurring Revenue", left: "80 – 90% MRR", right: "55 – 75% packages" },
  ],
  memberEconomicsMetrics: [
    { metric: "Client Lifetime Value", left: "$3,400 – $5,800", right: "$2,800 – $6,500" },
    { metric: "Monthly Churn", left: "3 – 6%", right: "5 – 10%" },
    { metric: "Annual Retention", left: "65 – 80%", right: "55 – 70%" },
    { metric: "Referral Rate", left: "25 – 40%", right: "20 – 35%" },
  ],
  staffMetrics: [
    { metric: "Revenue Per Client", left: "$150 – $250/mo", right: "$250 – $450/mo" },
    { metric: "Clients Per Location", left: "120 – 380", right: "40 – 120" },
    { metric: "Revenue Per Coach / Trainer", left: "$125K – $210K/yr", right: "$100K – $200K/yr" },
  ],
  costStructureComparison: [
    { expense: "Rent & Occupancy", left: "14 – 22%", right: "12 – 20%" },
    { expense: "Coach / Trainer Payroll", left: "35 – 45%", right: "40 – 55%" },
    { expense: "Equipment", left: "10 – 18%", right: "5 – 12%" },
    { expense: "Marketing", left: "8 – 14%", right: "10 – 18%" },
  ],
  recurringComparison: [
    { metric: "Membership / Package MRR", left: "80 – 90%", right: "55 – 75%" },
    { metric: "Personal Training Revenue", left: "10 – 20%", right: "60 – 80%" },
    { metric: "Nutrition / Online Coaching", left: "8 – 15%", right: "5 – 15%" },
    { metric: "Market Position", left: "Community group training", right: "Premium 1-on-1 coaching" },
  ],
  ownerIncomeComparison: [
    { model: "CrossFit Box Owner", earnings: "$110K – $165K", type: "left" },
    { model: "Multi-Box CrossFit Operator", earnings: "$165K – $250K+", type: "left" },
    { model: "Solo Personal Trainer", earnings: "$75K – $130K", type: "right" },
    { model: "Multi-Trainer Studio Owner", earnings: "$120K – $200K+", type: "right" },
  ],
  breakEvenComparison: [
    { metric: "Monthly Revenue Needed", left: "$45K – $70K", right: "$15K – $35K" },
    { metric: "Members / Clients Needed", left: "80 – 120", right: "25 – 50" },
    { metric: "Months To Break-Even", left: "14 – 22 months", right: "6 – 14 months" },
    { metric: "Startup Investment", left: "$100K – $350K", right: "$40K – $120K" },
  ],
  scalingRightTitle: "Personal Training Studio Growth Path",
  chooseLeft: [
    "You want membership-driven recurring revenue with 80–90% MRR",
    "You prefer coach-led group training and tribal community culture",
    "You value a higher revenue ceiling ($400K–$1.1M) with nutrition and event upsells",
    "You want to build a scalable multi-coach affiliate with class utilization economics",
    "You're passionate about functional fitness and competitive community events",
  ],
  chooseRight: [
    "You want the lowest startup cost entry in coached fitness ($40K–$120K)",
    "You prefer premium 1-on-1 coaching with highest revenue per client",
    "You value flexible solo-trainer or small-team lifestyle operations",
    "You want session-package economics with personalized client relationships",
    "You're passionate about individualized strength and conditioning coaching",
  ],
  chooseRightTitle: "Choose Personal Training Studio If",
  relatedComparisons,
  faqs: [
    {
      question: "CrossFit vs personal training studio — which costs less to open?",
      answer:
        "Personal training studios launch at $40K–$120K with minimal equipment. CrossFit affiliates require $100K–$350K for rigs, barbells, and specialized buildout.",
    },
    {
      question: "Which generates more revenue per client?",
      answer:
        "Personal training studios generate $250–$450/mo per client through session packages. CrossFit members average $150–$250/mo but at higher volume (120–380 members vs 40–120 clients).",
    },
    {
      question: "Which has better recurring revenue?",
      answer:
        "CrossFit affiliates derive 80–90% of revenue from monthly memberships. Personal training studios rely more on session packages (55–75% recurring) with higher client turnover.",
    },
    {
      question: "Which scales better?",
      answer:
        "CrossFit affiliates scale through membership volume and coach productivity. Personal training studios scale by hiring trainers but face higher coach dependency and lower member volume per location.",
    },
  ],
});
