import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { buildGymComparison } from "./build-gym-comparison";
import { martialArtsSchoolProfile } from "./fitness-format-profiles";
import { gymRelatedComparisons } from "./gym-comparison-shared";

export const comparisonMeta = {
  slug: "gym-vs-martial-arts-school",
  title: "Gym vs Martial Arts School",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, student economics, program-based retention, scalability, and valuation for gym and martial arts school businesses.",
  dataVintage: "2025–2026",
} as const;

const relatedComparisons = gymRelatedComparisons.filter(
  (c) => !c.href.includes("gym-vs-martial-arts-school"),
);

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Gym" },
  { factor: "Higher Profit Margins", winner: "Martial Arts School" },
  { factor: "Lower Startup Cost", winner: "Martial Arts School" },
  { factor: "Kids & Family Market", winner: "Martial Arts School" },
  { factor: "Member Volume Scale", winner: "Gym" },
  { factor: "Program Retention", winner: "Martial Arts School" },
  { factor: "Valuation Multiples", winner: "Gym" },
  { factor: "Recurring Revenue", winner: "Tie" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 8, right: 6, winner: "Gym" },
  { label: "Profit Margin", left: 6, right: 8, winner: "Martial Arts School" },
  { label: "Family Market", left: 5, right: 9, winner: "Martial Arts School" },
  { label: "Low Capital Entry", left: 4, right: 8, winner: "Martial Arts School" },
] as const;

export function getRecommendation(inputs: HealthcareDecisionInputs): string {
  let gym = 0;
  let martialArts = 0;

  if (inputs.clinicalInterest === "specialty") martialArts += 2;
  else gym += 2;

  if (inputs.revenueGoal === "very-high") gym += 3;
  else if (inputs.revenueGoal === "high") gym += 2;
  else martialArts += 1;

  if (inputs.insuranceComfort === "high") martialArts += 2;
  else gym += 1;

  if (inputs.growthAmbition === "multi-location") gym += 2;
  else if (inputs.growthAmbition === "lifestyle") martialArts += 2;
  else {
    gym += 1;
    martialArts += 1;
  }

  return gym >= martialArts ? "Gym" : "Martial Arts School";
}

export const decisionToolCopy = {
  left: "A full-service gym fits — higher total revenue, larger adult membership market, and diversified training plus amenity income.",
  right:
    "A martial arts school fits — program-based retention, family and kids market, lower startup costs, and strong community-driven recurring tuition.",
} as const;

export const fitnessDualComparisonData = buildGymComparison({
  slug: comparisonMeta.slug,
  title: comparisonMeta.title,
  subtitle: comparisonMeta.subtitle,
  right: martialArtsSchoolProfile,
  decisionSnapshot,
  winnerScorecard,
  revenueDrivers: [
    { driver: "Active Members / Students", left: "800 – 1,400", right: "150 – 400" },
    { driver: "Average Monthly Tuition", left: "$38 – $69", right: "$100 – $180" },
    { driver: "Kids & Family Mix", left: "15 – 25%", right: "50 – 70%" },
    { driver: "Belt / Program Revenue", left: "N/A", right: "10 – 20% of revenue" },
  ],
  memberEconomicsMetrics: [
    { metric: "Student Lifetime Value", left: "$500 – $900", right: "$800 – $1,600" },
    { metric: "Monthly Churn", left: "3 – 5%", right: "3 – 5%" },
    { metric: "Annual Retention", left: "60 – 75%", right: "65 – 80%" },
    { metric: "Family Membership Rate", left: "Low – Moderate", right: "High" },
  ],
  staffMetrics: [
    { metric: "Revenue Per Student", left: "$43 – $65/mo", right: "$100 – $180/mo" },
    { metric: "Students Per Location", left: "800 – 1,400", right: "150 – 400" },
    { metric: "Instructors / Coaches", left: "8 – 20", right: "3 – 8" },
  ],
  costStructureComparison: [
    { expense: "Rent & Occupancy", left: "18 – 28%", right: "18 – 26%" },
    { expense: "Instructor Payroll", left: "28 – 38%", right: "30 – 40%" },
    { expense: "Equipment", left: "6 – 12%", right: "5 – 10%" },
    { expense: "Marketing", left: "8 – 14%", right: "10 – 16%" },
  ],
  recurringComparison: [
    { metric: "Tuition / Membership MRR", left: "55 – 70%", right: "70 – 85%" },
    { metric: "Belt Testing Revenue", left: "N/A", right: "10 – 20%" },
    { metric: "Camp & Seminar Revenue", left: "3 – 8%", right: "8 – 15%" },
    { metric: "Kids Program Focus", left: "Optional", right: "Core revenue driver" },
  ],
  ownerIncomeComparison: [
    { model: "Owner-Operator Gym", earnings: "$85K – $110K", type: "left" },
    { model: "Multi-Location Gym Operator", earnings: "$140K – $220K+", type: "left" },
    { model: "Martial Arts School Owner", earnings: "$75K – $120K", type: "right" },
    { model: "Multi-Location School Operator", earnings: "$130K – $200K+", type: "right" },
  ],
  breakEvenComparison: [
    { metric: "Monthly Revenue Needed", left: "$85K – $120K", right: "$30K – $50K" },
    { metric: "Students Needed", left: "350 – 500 members", right: "100 – 150 students" },
    { metric: "Months To Break-Even", left: "18 – 30 months", right: "12 – 18 months" },
    { metric: "Startup Investment", left: "$250K – $600K", right: "$75K – $200K" },
  ],
  scalingRightTitle: "Martial Arts School Growth Path",
  chooseLeft: [
    "You want maximum adult membership volume and total revenue",
    "You prefer open-access fitness with equipment, classes, and amenities",
    "You're building a full-service facility with personal training scale",
    "You can invest in higher buildout and equipment costs",
    "You want to serve general fitness rather than program-based martial arts",
  ],
  chooseRight: [
    "You want to serve the kids and family market with program-based retention",
    "You prefer lower startup costs and faster break-even",
    "You value belt progression and structured curriculum as retention tools",
    "You want tuition-based recurring revenue with camp and testing upsells",
    "You're building a community school with instructor-led culture",
  ],
  chooseRightTitle: "Choose Martial Arts School If",
  relatedComparisons,
  faqs: [
    {
      question: "Gym vs martial arts school — which makes more money?",
      answer:
        "Full-service gyms typically generate higher total revenue ($650K–$1.8M vs $300K–$850K) due to larger member counts. Martial arts schools earn more per student through tuition programs and family memberships.",
    },
    {
      question: "Which is better for teaching kids?",
      answer:
        "Martial arts schools are built around youth programs — 50–70% of revenue often comes from kids and family memberships. Gyms serve adults primarily, with kids programming as a secondary offering.",
    },
    {
      question: "Which has lower startup costs?",
      answer:
        "Martial arts schools typically launch at $75K–$200K versus $250K–$600K for full gyms. Mats, mirrors, and basic equipment cost far less than full gym floor buildouts.",
    },
    {
      question: "How does retention compare?",
      answer:
        "Martial arts schools use belt progression and program structure to drive retention. Gyms rely on amenities and variety. Both formats target 65–80% annual retention when well-operated.",
    },
  ],
});
