import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { buildMartialArtsComparison } from "./build-martial-arts-comparison";
import { danceStudioProfile } from "./fitness-format-profiles";
import { martialArtsRelatedComparisons } from "./martial-arts-comparison-shared";

export const comparisonMeta = {
  slug: "martial-arts-school-vs-dance-studio",
  title: "Martial Arts School vs Dance Studio",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, youth student economics, retention models, seasonal revenue, family enrollment, and valuation for martial arts schools and dance studios.",
  dataVintage: "2025–2026",
} as const;

const relatedComparisons = martialArtsRelatedComparisons.filter(
  (c) => !c.href.includes("martial-arts-school-vs-dance-studio"),
);

export const decisionSnapshot = [
  { factor: "Student Retention", winner: "Martial Arts School" },
  { factor: "Kids Program Revenue", winner: "Tie" },
  { factor: "Lower Startup Cost", winner: "Martial Arts School" },
  { factor: "Seasonal Revenue Stability", winner: "Martial Arts School" },
  { factor: "Recital / Performance Revenue", winner: "Dance Studio" },
  { factor: "Belt Progression Loyalty", winner: "Martial Arts School" },
  { factor: "Revenue Per Student", winner: "Tie" },
  { factor: "Valuation Potential", winner: "Martial Arts School" },
] as const;

export const winnerScorecard = [
  { label: "Youth Retention", left: 9, right: 7, winner: "Martial Arts School" },
  { label: "Year-Round Revenue", left: 8, right: 6, winner: "Martial Arts School" },
  { label: "Performance Revenue", left: 5, right: 9, winner: "Dance Studio" },
  { label: "Family Market Depth", left: 8, right: 8, winner: "Tie" },
] as const;

export function getRecommendation(inputs: HealthcareDecisionInputs): string {
  let martialArts = 0;
  let dance = 0;

  if (inputs.clinicalInterest === "specialty") martialArts += 2;
  else dance += 2;

  if (inputs.revenueGoal === "very-high" || inputs.revenueGoal === "high") {
    martialArts += 1;
    dance += 2;
  } else martialArts += 2;

  if (inputs.insuranceComfort === "high") martialArts += 2;
  else dance += 2;

  if (inputs.growthAmbition === "multi-location") {
    martialArts += 2;
    dance += 2;
  } else if (inputs.growthAmbition === "lifestyle") dance += 2;
  else martialArts += 1;

  return martialArts >= dance ? "Martial Arts School" : "Dance Studio";
}

export const decisionToolCopy = {
  left: "A martial arts school fits your goals — belt progression retention, year-round tuition stability, character-building youth programs, and structured family enrollment cycles.",
  right:
    "A dance studio fits your goals — recital and competition revenue, creative performance culture, strong girls' enrollment, and tuition plus event-based ancillary income.",
} as const;

export const fitnessDualComparisonData = buildMartialArtsComparison({
  slug: comparisonMeta.slug,
  title: comparisonMeta.title,
  subtitle: comparisonMeta.subtitle,
  right: danceStudioProfile,
  decisionSnapshot,
  winnerScorecard,
  revenueDrivers: [
    { driver: "Active Students", left: "150 – 400", right: "180 – 450" },
    { driver: "Average Monthly Tuition", left: "$100 – $180", right: "$95 – $175" },
    { driver: "Kids Program Revenue", left: "55 – 75%", right: "60 – 80%" },
    { driver: "Recital / Event Revenue", left: "5 – 10%", right: "12 – 22%" },
  ],
  memberEconomicsMetrics: [
    { metric: "Student Lifetime Value", left: "$3,800 – $6,200", right: "$3,200 – $5,400" },
    { metric: "Monthly Churn", left: "3 – 5%", right: "4 – 7%" },
    { metric: "Average Enrollment Length", left: "22 – 38 months", right: "18 – 30 months" },
    { metric: "Family Referral Rate", left: "32 – 45%", right: "28 – 40%" },
  ],
  staffMetrics: [
    { metric: "Revenue Per Student", left: "$100 – $180/mo", right: "$95 – $175/mo" },
    { metric: "Students Per Location", left: "150 – 400", right: "180 – 450" },
    { metric: "Instructors", left: "3 – 8", right: "4 – 12" },
  ],
  costStructureComparison: [
    { expense: "Rent & Occupancy", left: "14 – 22%", right: "16 – 24%" },
    { expense: "Instructor Payroll", left: "32 – 42%", right: "34 – 44%" },
    { expense: "Equipment & Costumes", left: "4 – 8%", right: "6 – 12%" },
    { expense: "Marketing", left: "8 – 14%", right: "10 – 16%" },
  ],
  recurringComparison: [
    { metric: "Tuition MRR", left: "70 – 85%", right: "75 – 88%" },
    { metric: "Belt Testing Revenue", left: "8 – 12%", right: "N/A" },
    { metric: "Recital & Competition Fees", left: "3 – 8%", right: "12 – 22%" },
    { metric: "Camp Revenue", left: "8 – 14%", right: "6 – 12%" },
  ],
  ownerIncomeComparison: [
    { model: "Martial Arts School Owner", earnings: "$95K – $140K", type: "left" },
    { model: "Multi-Location School Operator", earnings: "$185K – $280K+", type: "left" },
    { model: "Dance Studio Owner", earnings: "$80K – $135K", type: "right" },
    { model: "Multi-Studio Dance Operator", earnings: "$140K – $210K+", type: "right" },
  ],
  breakEvenComparison: [
    { metric: "Monthly Revenue Needed", left: "$30K – $50K", right: "$28K – $48K" },
    { metric: "Students Needed", left: "100 – 150", right: "110 – 160" },
    { metric: "Months To Break-Even", left: "12 – 18 months", right: "12 – 20 months" },
    { metric: "Startup Investment", left: "$75K – $200K", right: "$70K – $220K" },
  ],
  scalingRightTitle: "Dance Studio Growth Path",
  chooseLeft: [
    "You want belt progression and curriculum structure driving multi-year retention",
    "You prefer year-round tuition stability with less seasonal enrollment drop-off",
    "You value character development and discipline positioning for parent buyers",
    "You want ancillary revenue from testing, camps, and leadership programs",
    "You're building a dojo culture with instructor mentorship and family community",
  ],
  chooseRight: [
    "You want recital, competition, and performance revenue as core profit drivers",
    "You prefer creative arts positioning with strong girls' and teen enrollment",
    "You value costume, merchandise, and event-based ancillary income streams",
    "You want flexible class formats across ballet, jazz, hip-hop, and contemporary",
    "You're passionate about dance education and showcase-driven student motivation",
  ],
  chooseRightTitle: "Choose Dance Studio If",
  relatedComparisons,
  faqs: [
    {
      question: "Martial arts school vs dance studio — which retains students longer?",
      answer:
        "Martial arts schools typically retain students 22–38 months through belt progression and structured programs. Dance studios average 18–30 months, with higher churn after recital cycles or when students outgrow competitive tracks.",
    },
    {
      question: "Which is more seasonal?",
      answer:
        "Dance studios see more revenue concentration around recitals and competition seasons — 12–22% of annual revenue from events. Martial arts schools maintain steadier year-round tuition with camps adding 8–14% seasonal upside.",
    },
    {
      question: "Which is better for the youth market?",
      answer:
        "Both formats are heavily youth-focused — 55–80% of revenue from children's programs. Martial arts emphasizes discipline and progression; dance emphasizes creativity and performance. Family referral rates are strong in both.",
    },
    {
      question: "Which has better valuation potential?",
      answer:
        "Martial arts schools typically sell at 2.4×–3.6× SDE with transferable curriculum systems. Dance studios trade at 2.2×–3.4× SDE, with recital revenue quality and instructor dependency affecting multiples.",
    },
  ],
});
