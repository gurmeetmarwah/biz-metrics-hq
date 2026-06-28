import {
  formatCurrency,
  formatPercent,
  martialArtsIndustryAverages,
  relatedMartialArtsCalculators,
} from "@/lib/industries/martial-arts-calculators-shared";

export const meta = {
  title: "Martial Arts School Revenue Calculator & Annual Income Projection Tool",
  shortTitle: "Martial Arts School Revenue Calculator",
  subtitle:
    "Project annual martial arts school revenue from tuition, belt testing, camps, private lessons, and merchandise.",
  description:
    "Free martial arts school revenue calculator. Estimate annual revenue, tuition MRR, and revenue mix from program fees, belt testing, camps, and retail.",
};

export const introContent = {
  lead: "Martial arts school revenue is driven by active students and tuition MRR — plus belt testing, camps, and private lessons. This calculator projects annual revenue from your student base and supplemental income streams.",
  bullets: [
    "Tuition MRR = Active Students × Average Monthly Tuition",
    "Total Revenue = (Tuition MRR + Ancillary Monthly) × 12",
    "Median school revenue is ~$780K with ~89% tuition-weighted recurring income",
  ],
  audience:
    "Built for school owners forecasting revenue, pricing program tiers, and modeling belt testing and camp income.",
};

export type MartialArtsRevenueInputs = {
  activeStudents: number;
  monthlyTuition: number;
  monthlyBeltTesting: number;
  monthlyPrivateLessons: number;
  monthlyCampsEvents: number;
  monthlyMerchandise: number;
};

export const defaultInputs: MartialArtsRevenueInputs = {
  activeStudents: 220,
  monthlyTuition: 145,
  monthlyBeltTesting: 6_200,
  monthlyPrivateLessons: 5_500,
  monthlyCampsEvents: 4_800,
  monthlyMerchandise: 2_400,
};

export const revenueBenchmarks = [
  { metric: "Median Annual Revenue", range: "$420K – $1.05M" },
  { metric: "Tuition Share of Revenue", range: "48 – 58%" },
  { metric: "Revenue Per Student", range: "$120 – $220/mo" },
  { metric: "Median Active Students", range: "150 – 300" },
] as const;

export function calculateMartialArtsRevenue(inputs: MartialArtsRevenueInputs) {
  const tuitionMrr = inputs.activeStudents * inputs.monthlyTuition;
  const ancillaryMrr =
    inputs.monthlyBeltTesting +
    inputs.monthlyPrivateLessons +
    inputs.monthlyCampsEvents +
    inputs.monthlyMerchandise;
  const totalMrr = tuitionMrr + ancillaryMrr;
  const annualRevenue = totalMrr * 12;
  const tuitionPct = totalMrr > 0 ? (tuitionMrr / totalMrr) * 100 : 0;
  const revenuePerStudent = inputs.activeStudents > 0 ? totalMrr / inputs.activeStudents : 0;
  const vsBenchmarkRevenue = annualRevenue - martialArtsIndustryAverages.revenue;
  const vsBenchmarkRps = revenuePerStudent - martialArtsIndustryAverages.revenuePerStudentMonthly;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (annualRevenue < 420_000) tier = "Below";
  else if (annualRevenue >= 1_000_000) tier = "Strong";

  return {
    tuitionMrr,
    ancillaryMrr,
    totalMrr,
    annualRevenue,
    tuitionPct,
    revenuePerStudent,
    vsBenchmarkRevenue,
    vsBenchmarkRps,
    tier,
  };
}

export const faqs = [
  {
    question: "How do you calculate martial arts school revenue?",
    answer:
      "Annual revenue equals total monthly revenue × 12. Total monthly revenue includes tuition MRR (active students × average tuition) plus belt testing, private lessons, camps, events, and merchandise.",
  },
  {
    question: "What is average revenue per student?",
    answer:
      "Well-run schools typically generate $120–$220 per student per month when belt fees and camps are included. The median is ~$168/mo across a mature student base.",
  },
  {
    question: "How many students does a $780K school need?",
    answer:
      "At ~$168/mo revenue per student, roughly 387 student-months of revenue are needed annually — about 200–250 active students when belt testing and camp income is included.",
  },
] as const;

export const relatedTools = relatedMartialArtsCalculators("/calculators/martial-arts-school-revenue/");
export { martialArtsIndustryAverages, formatCurrency, formatPercent };
