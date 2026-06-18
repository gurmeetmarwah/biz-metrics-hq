import {
  formatCurrency,
  formatPercent,
  electricalIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/electrical-calculators-shared";

export const meta = {
  title: "Electrical Labor Utilization Calculator & Billable Hours Tool",
  shortTitle: "Electrical Labor Utilization Calculator",
  subtitle:
    "Calculate electrician utilization, billable hours, and revenue potential from your field labor capacity.",
  description:
    "Free electrical labor utilization calculator. Track billable vs paid hours, utilization rates, and implied revenue against 340+ electrical contracting benchmarks.",
};

export const introContent = {
  lead: "Labor utilization is the hidden profit lever for electrical contractors. Non-billable drive time, estimating, training, and shop time erode margins fast. This calculator shows your utilization rate and what improved billable hours would mean for revenue.",
  bullets: [
    "Utilization = Billable Hours ÷ Paid Hours × 100",
    "Healthy electrical contractors target 55–75% billable utilization",
    "Each 5-point utilization gain can add $15K–$25K revenue per electrician annually",
  ],
  audience:
    "Built for electrical owners, operations managers, and buyers evaluating field labor efficiency.",
};

export type LaborUtilizationInputs = {
  electricians: number;
  paidHoursPerWeek: number;
  billableHoursPerWeek: number;
  averageBillRate: number;
  workingWeeks: number;
  actualAnnualRevenue: number;
};

export const defaultInputs: LaborUtilizationInputs = {
  electricians: 8,
  paidHoursPerWeek: 40,
  billableHoursPerWeek: 28,
  averageBillRate: 95,
  workingWeeks: 50,
  actualAnnualRevenue: 2000000,
};

export const utilizationBenchmarks = [
  { metric: "Billable Utilization", range: "55 – 75%" },
  { metric: "Billable Hours / Week", range: "24 – 32 hrs" },
  { metric: "Revenue Per Billable Hour", range: "$85 – $125" },
  { metric: "Non-Billable Time", range: "25 – 45%" },
] as const;

export type UtilizationTier = "Low" | "Average" | "Strong" | "Elite";

export function getUtilizationTier(utilizationPct: number): UtilizationTier {
  if (utilizationPct < 55) return "Low";
  if (utilizationPct < 66) return "Average";
  if (utilizationPct < 76) return "Strong";
  return "Elite";
}

export function calculateLaborUtilization(inputs: LaborUtilizationInputs) {
  const utilizationPct =
    inputs.paidHoursPerWeek > 0
      ? (inputs.billableHoursPerWeek / inputs.paidHoursPerWeek) * 100
      : 0;
  const nonBillableHoursPerWeek = Math.max(
    0,
    inputs.paidHoursPerWeek - inputs.billableHoursPerWeek
  );
  const nonBillablePct =
    inputs.paidHoursPerWeek > 0
      ? (nonBillableHoursPerWeek / inputs.paidHoursPerWeek) * 100
      : 0;

  const annualBillableHoursPerElectrician = inputs.billableHoursPerWeek * inputs.workingWeeks;
  const impliedRevenuePerElectrician = annualBillableHoursPerElectrician * inputs.averageBillRate;
  const impliedAnnualRevenue = impliedRevenuePerElectrician * inputs.electricians;
  const revenuePerBillableHour = inputs.averageBillRate;
  const revenueGap = inputs.actualAnnualRevenue - impliedAnnualRevenue;

  const targetBillableHours = inputs.paidHoursPerWeek * 0.7;
  const upsideRevenuePerElectrician =
    (targetBillableHours - inputs.billableHoursPerWeek) *
    inputs.workingWeeks *
    inputs.averageBillRate;
  const upsideAt70Pct = Math.max(0, upsideRevenuePerElectrician * inputs.electricians);

  return {
    utilizationPct,
    nonBillableHoursPerWeek,
    nonBillablePct,
    impliedAnnualRevenue,
    impliedRevenuePerElectrician,
    revenuePerBillableHour,
    revenueGap,
    upsideAt70Pct,
    tier: getUtilizationTier(utilizationPct),
    vsBenchmark: utilizationPct - electricalIndustryAverages.laborUtilizationPct,
  };
}

export const faqs = [
  {
    question: "What is a good labor utilization rate for electrical contractors?",
    answer:
      "Most healthy electrical contractors achieve 55–75% billable utilization — meaning 55–75% of paid field hours are billed to customers. Service-heavy companies often hit 65–75%; project-heavy firms may run 50–60% due to estimating and mobilization time.",
  },
  {
    question: "What counts as non-billable time for electricians?",
    answer:
      "Non-billable time includes drive time between jobs, shop loading, estimating and bidding, training apprentices, warranty callbacks not charged, and administrative tasks. Tracking these categories helps identify dispatch and routing improvements.",
  },
  {
    question: "How does utilization affect profitability?",
    answer:
      "Low utilization means you're paying electricians for hours you can't bill. Improving utilization from 60% to 70% on an 8-electrician team at $95/hr bill rate can add $76K+ in annual revenue capacity without hiring — often flowing straight to profit.",
  },
  {
    question: "How do I improve electrician utilization?",
    answer:
      "Four levers: route density and territory planning, dispatch software to reduce drive time, pre-staging materials to cut shop time, and maintenance contract routing to fill schedule gaps with predictable billable work.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/electrical-labor-utilization/");
export { electricalIndustryAverages, formatCurrency, formatPercent };
