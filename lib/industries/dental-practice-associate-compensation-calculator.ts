import {
  dentalIndustryAverages,
  formatCurrency,
  formatPercent,
  relatedCalculators,
} from "@/lib/industries/dental-calculators-shared";

export const meta = {
  title: "Dental Associate Compensation Calculator & Production Pay Model",
  shortTitle: "Associate Compensation Calculator",
  subtitle:
    "Model associate dentist compensation based on collected production and compensation percentage.",
  description:
    "Free dental associate compensation calculator. Estimate total pay from production percentage, base salary, and compare against industry benchmarks for associate dentists.",
};

export const introContent = {
  lead: "Associate compensation models vary from pure production percentage to base-plus-bonus structures. This calculator models total compensation and effective hourly rate from your production and pay terms.",
  bullets: [
    "Total Comp = Base Salary + (Collected Production × Compensation %)",
    "Typical associate pay: 25–32% of collected production",
    "Median associate production: $550K–$750K/year",
  ],
  audience:
    "Built for practice owners structuring associate offers, associate dentists evaluating employment terms, and brokers comparing compensation models.",
};

export type AssociateCompInputs = {
  collectedProduction: number;
  compensationPct: number;
  baseSalary: number;
  workingDays: number;
  clinicalHoursPerDay: number;
};

export const defaultInputs: AssociateCompInputs = {
  collectedProduction: 650000,
  compensationPct: 28,
  baseSalary: 0,
  workingDays: 200,
  clinicalHoursPerDay: 8,
};

export const compBenchmarks = [
  { model: "Production % Only", range: "25–32%" },
  { model: "Base + Production", range: "$120K + 25%" },
  { model: "Daily Guarantee", range: "$800 – $1,200/day" },
  { model: "Median Total Comp", range: "$180K – $250K" },
] as const;

export function calculateAssociateComp(inputs: AssociateCompInputs) {
  const productionComp = inputs.collectedProduction * (inputs.compensationPct / 100);
  const totalComp = inputs.baseSalary + productionComp;
  const effectivePct = inputs.collectedProduction > 0 ? (totalComp / inputs.collectedProduction) * 100 : 0;
  const totalHours = inputs.workingDays * inputs.clinicalHoursPerDay;
  const hourlyRate = totalHours > 0 ? totalComp / totalHours : 0;
  const dailyProduction = inputs.workingDays > 0 ? inputs.collectedProduction / inputs.workingDays : 0;
  const dailyComp = inputs.workingDays > 0 ? totalComp / inputs.workingDays : 0;

  let tier: "Below Market" | "Market" | "Above Market" = "Market";
  if (totalComp < 180000) tier = "Below Market";
  else if (totalComp > 250000) tier = "Above Market";

  return {
    productionComp,
    totalComp,
    effectivePct,
    hourlyRate,
    dailyProduction,
    dailyComp,
    tier,
  };
}

export const faqs = [
  {
    question: "What percentage do dental associates typically earn?",
    answer:
      "Most associate dentists earn 25–32% of collected production. New graduates often start at 25–28%; experienced associates in high-demand markets may negotiate 30–32%. Some contracts use adjusted production after lab fees.",
  },
  {
    question: "What is the average associate dentist salary?",
    answer:
      "Total compensation for associate dentists ranges $180K–$250K depending on production. At $650K collected production and 28%, production-based pay is ~$182K. Base-plus-bonus models add $120K–$150K guaranteed plus production bonus.",
  },
  {
    question: "How is associate production calculated?",
    answer:
      "Collected production is the revenue attributed to the associate's procedures after insurance adjustments and write-offs. Excludes hygiene production unless specified. Lab fees may be deducted before applying the compensation percentage.",
  },
  {
    question: "Should I offer base salary or pure production pay?",
    answer:
      "Pure production (25–32%) aligns incentives and reduces fixed overhead risk. Base-plus-production ($120K + 25%) attracts associates in competitive markets but increases fixed cost. Daily guarantees ($800–$1,200) are common for part-time or new associates.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/dental-practice-associate-compensation/");
export { dentalIndustryAverages, formatCurrency, formatPercent };
