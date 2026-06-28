import {
  formatCurrency,
  martialArtsIndustryAverages,
  relatedMartialArtsCalculators,
} from "@/lib/industries/martial-arts-calculators-shared";

export const meta = {
  title: "Martial Arts Belt Testing Revenue Calculator & Promotion Fee Tool",
  shortTitle: "Belt Testing Revenue Calculator",
  subtitle: "Model annual belt testing revenue from active students, testing frequency, and promotion fees.",
  description:
    "Free martial arts belt testing revenue calculator. Estimate promotion fee income from testing cycles, pass rates, and student progression.",
};

export const introContent = {
  lead: "Belt testing fees are a meaningful ancillary revenue stream — typically 8–12% of annual revenue at schools with active progression systems. This calculator models promotion income from your student base and testing schedule.",
  bullets: [
    "Annual Belt Revenue = Students × Tests/Year × Avg Fee × Pass Rate",
    "Monthly Belt Revenue = Annual ÷ 12",
    "Target: $55K – $95K annual belt testing revenue at ~220 students",
  ],
  audience: "Built for school owners pricing promotion fees, planning testing calendars, and forecasting ancillary income.",
};

export type BeltTestingRevenueInputs = {
  activeStudents: number;
  beltTestsPerYear: number;
  averageBeltTestFee: number;
  passRatePct: number;
  eligibleStudentPct: number;
};

export const defaultInputs: BeltTestingRevenueInputs = {
  activeStudents: 220,
  beltTestsPerYear: 4,
  averageBeltTestFee: 85,
  passRatePct: 88,
  eligibleStudentPct: 75,
};

export const beltTestingBenchmarks = [
  { metric: "Belt Testing % of Revenue", range: "8 – 12%" },
  { metric: "Average Promotion Fee", range: "$65 – $120" },
  { metric: "Tests Per Year", range: "3 – 6" },
  { metric: "Annual Belt Revenue (median)", range: "$55K – $95K" },
] as const;

export function calculateBeltTestingRevenue(inputs: BeltTestingRevenueInputs) {
  const eligibleStudents = inputs.activeStudents * (inputs.eligibleStudentPct / 100);
  const promotionsPerYear =
    eligibleStudents * inputs.beltTestsPerYear * (inputs.passRatePct / 100);
  const annualBeltRevenue = promotionsPerYear * inputs.averageBeltTestFee;
  const monthlyBeltRevenue = annualBeltRevenue / 12;
  const revenuePerStudentAnnual = inputs.activeStudents > 0 ? annualBeltRevenue / inputs.activeStudents : 0;
  const pctOfMedianSchoolRevenue = (annualBeltRevenue / martialArtsIndustryAverages.revenue) * 100;
  const impliedAnnualFromBenchmark =
    martialArtsIndustryAverages.revenue * 0.1;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (annualBeltRevenue < 50_000) tier = "Below";
  else if (annualBeltRevenue >= 90_000) tier = "Strong";

  return {
    eligibleStudents,
    promotionsPerYear,
    annualBeltRevenue,
    monthlyBeltRevenue,
    revenuePerStudentAnnual,
    pctOfMedianSchoolRevenue,
    impliedAnnualFromBenchmark,
    tier,
  };
}

export const faqs = [
  {
    question: "How much revenue comes from belt testing?",
    answer:
      "Belt testing typically represents 8–12% of annual revenue at schools with structured promotion systems. A $780K school might generate $62K–$94K annually from promotion fees.",
  },
  {
    question: "What is a typical belt testing fee?",
    answer:
      "Promotion fees typically range $65–$120 per test depending on belt level and market. Color-belt tests often price $65–$85; black belt candidates may pay $150–$300+.",
  },
  {
    question: "How often should schools hold belt tests?",
    answer:
      "Most schools test 3–6 times per year depending on curriculum. Quarterly testing with clear eligibility criteria balances progression motivation with revenue predictability.",
  },
] as const;

export const relatedTools = relatedMartialArtsCalculators("/calculators/martial-arts-belt-testing-revenue/");
export { martialArtsIndustryAverages, formatCurrency };
