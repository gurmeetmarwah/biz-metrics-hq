import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { buildCrossfitComparison } from "./build-crossfit-comparison";
import { martialArtsSchoolProfile } from "./fitness-format-profiles";
import { crossfitRelatedComparisons } from "./crossfit-comparison-shared";

export const comparisonMeta = {
  slug: "crossfit-vs-martial-arts-school",
  title: "CrossFit vs Martial Arts School",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, member economics, community retention, kids and family market fit, recurring revenue, and valuation for CrossFit affiliate and martial arts school businesses.",
  dataVintage: "2025–2026",
} as const;

const relatedComparisons = crossfitRelatedComparisons.filter(
  (c) => !c.href.includes("crossfit-vs-martial-arts-school"),
);

export const decisionSnapshot = [
  { factor: "Higher Revenue Per Member", winner: "CrossFit" },
  { factor: "Kids & Family Market", winner: "Martial Arts School" },
  { factor: "Community Retention", winner: "CrossFit" },
  { factor: "Program-Based Retention", winner: "Martial Arts School" },
  { factor: "Coach-Led Group Training", winner: "CrossFit" },
  { factor: "Lower Startup Cost", winner: "Martial Arts School" },
  { factor: "Nutrition / PT Upsells", winner: "CrossFit" },
  { factor: "Belt Progression Revenue", winner: "Martial Arts School" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Per Member", left: 9, right: 7, winner: "CrossFit" },
  { label: "Family Market", left: 5, right: 9, winner: "Martial Arts School" },
  { label: "Community Retention", left: 9, right: 8, winner: "CrossFit" },
  { label: "Low Capital Entry", left: 6, right: 8, winner: "Martial Arts School" },
] as const;

export function getRecommendation(inputs: HealthcareDecisionInputs): string {
  let crossfit = 0;
  let martialArts = 0;

  if (inputs.clinicalInterest === "specialty") crossfit += 2;
  else martialArts += 2;

  if (inputs.revenueGoal === "very-high" || inputs.revenueGoal === "high") crossfit += 2;
  else martialArts += 1;

  if (inputs.insuranceComfort === "high") martialArts += 2;
  else crossfit += 1;

  if (inputs.growthAmbition === "multi-location") {
    crossfit += 2;
    martialArts += 2;
  } else if (inputs.growthAmbition === "lifestyle") crossfit += 2;
  else {
    crossfit += 1;
    martialArts += 1;
  }

  return crossfit >= martialArts ? "CrossFit" : "Martial Arts School";
}

export const decisionToolCopy = {
  left: "CrossFit fits your goals — tribal community retention, coach-led group training, premium membership pricing, and strong nutrition and PT upsell revenue.",
  right:
    "A martial arts school fits your goals — kids and family market, program-based belt retention, tuition-driven recurring revenue, and structured curriculum community.",
} as const;

export const fitnessDualComparisonData = buildCrossfitComparison({
  slug: comparisonMeta.slug,
  title: comparisonMeta.title,
  subtitle: comparisonMeta.subtitle,
  right: martialArtsSchoolProfile,
  decisionSnapshot,
  winnerScorecard,
  revenueDrivers: [
    { driver: "Active Members / Students", left: "120 – 380", right: "150 – 400" },
    { driver: "Average Monthly Dues / Tuition", left: "$150 – $250", right: "$100 – $180" },
    { driver: "Kids & Family Mix", left: "15 – 30%", right: "50 – 70%" },
    { driver: "Belt / Program Revenue", left: "8 – 15% of revenue", right: "10 – 20% of revenue" },
  ],
  memberEconomicsMetrics: [
    { metric: "Member / Student Lifetime Value", left: "$3,400 – $5,800", right: "$2,600 – $4,800" },
    { metric: "Monthly Churn", left: "3 – 6%", right: "3 – 5%" },
    { metric: "Annual Retention", left: "65 – 80%", right: "65 – 80%" },
    { metric: "Family Membership Rate", left: "Low – Moderate", right: "High" },
  ],
  staffMetrics: [
    { metric: "Revenue Per Member / Student", left: "$150 – $250/mo", right: "$100 – $180/mo" },
    { metric: "Members / Students Per Location", left: "120 – 380", right: "150 – 400" },
    { metric: "Revenue Per Coach / Instructor", left: "$125K – $210K/yr", right: "$95K – $175K/yr" },
  ],
  costStructureComparison: [
    { expense: "Rent & Occupancy", left: "14 – 22%", right: "18 – 26%" },
    { expense: "Coach / Instructor Payroll", left: "35 – 45%", right: "30 – 40%" },
    { expense: "Equipment", left: "10 – 18%", right: "5 – 10%" },
    { expense: "Marketing", left: "8 – 14%", right: "10 – 16%" },
  ],
  recurringComparison: [
    { metric: "Membership / Tuition MRR", left: "80 – 90%", right: "70 – 85%" },
    { metric: "Personal Training / Private Revenue", left: "10 – 20%", right: "8 – 15%" },
    { metric: "Belt Testing Revenue", left: "N/A", right: "10 – 20%" },
    { metric: "Camp & Seminar Revenue", left: "5 – 10%", right: "8 – 15%" },
  ],
  ownerIncomeComparison: [
    { model: "CrossFit Box Owner", earnings: "$110K – $165K", type: "left" },
    { model: "Multi-Box CrossFit Operator", earnings: "$165K – $250K+", type: "left" },
    { model: "Martial Arts School Owner", earnings: "$75K – $150K", type: "right" },
    { model: "Multi-Location School Operator", earnings: "$140K – $220K+", type: "right" },
  ],
  breakEvenComparison: [
    { metric: "Monthly Revenue Needed", left: "$45K – $70K", right: "$35K – $55K" },
    { metric: "Members / Students Needed", left: "80 – 120", right: "90 – 140" },
    { metric: "Months To Break-Even", left: "14 – 22 months", right: "12 – 18 months" },
    { metric: "Startup Investment", left: "$100K – $350K", right: "$75K – $200K" },
  ],
  scalingRightTitle: "Martial Arts School Growth Path",
  chooseLeft: [
    "You want coach-led group training with tribal community retention",
    "You prefer premium membership pricing ($150–$250/mo) and performance culture",
    "You value nutrition coaching and personal training upsell revenue",
    "You want a higher revenue ceiling ($400K–$1.1M) at mature scale",
    "You're passionate about functional fitness and competitive events",
  ],
  chooseRight: [
    "You want the kids and family market with structured program progression",
    "You prefer tuition-driven recurring revenue with belt testing income",
    "You value lower startup costs ($75K–$200K) and faster break-even",
    "You want program-based retention through curriculum and rank advancement",
    "You're passionate about martial arts discipline and youth development",
  ],
  chooseRightTitle: "Choose Martial Arts School If",
  relatedComparisons,
  faqs: [
    {
      question: "CrossFit vs martial arts school — which costs less to open?",
      answer:
        "Martial arts schools typically launch at $75K–$200K. CrossFit affiliates require $100K–$350K for rigs, barbells, and specialized buildout — generally more capital-intensive.",
    },
    {
      question: "Which has better member retention?",
      answer:
        "Both formats build strong community retention. CrossFit excels through coach relationships and group accountability. Martial arts schools retain through belt progression, family enrollment, and structured curriculum.",
    },
    {
      question: "Which is better for the kids market?",
      answer:
        "Martial arts schools dominate the kids and family market (50–70% youth mix). CrossFit affiliates can run kids programs but typically serve more adult members (70–85% adult).",
    },
    {
      question: "Which generates more revenue per member?",
      answer:
        "CrossFit affiliates generate higher per-member revenue ($150–$250/mo vs $100–$180/mo) through premium unlimited memberships and PT/nutrition upsells.",
    },
  ],
});
