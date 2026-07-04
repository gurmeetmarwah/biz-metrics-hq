import {
  formatPercent,
  optometryDataLinks,
  relatedCalculators,
} from "@/lib/industries/optometry-calculators-shared";

export const meta = {
  title: "Optometry Insurance Mix Calculator & Payer Margin Tool",
  shortTitle: "Optometry Insurance Mix Calculator",
  subtitle: "Model margin impact from vision plan, medical billing, and private-pay revenue mix.",
  description:
    "Free optometry insurance mix calculator. Estimate blended margin from vision plan, medical eye care, and private-pay revenue percentages.",
};

export const introContent = {
  lead: "Payer mix is a primary margin driver for optometry practices. Vision plan exams carry thin margins while retail and medical billing offset reimbursement pressure.",
  bullets: [
    "Blended Margin = Σ(Payer Mix % × Payer Margin %)",
    "Vision plans: 45–65% of revenue at many practices",
    "Private pay and retail typically carry highest margins",
  ],
  audience: "Built for practice owners evaluating contract participation and cash-pay strategy.",
};

export type InsuranceMixInputs = {
  visionPlanPct: number;
  visionPlanMargin: number;
  medicalBillingPct: number;
  medicalBillingMargin: number;
  privatePayPct: number;
  privatePayMargin: number;
  retailOpticalPct: number;
  retailOpticalMargin: number;
};

export const defaultInputs: InsuranceMixInputs = {
  visionPlanPct: 35,
  visionPlanMargin: 12,
  medicalBillingPct: 15,
  medicalBillingMargin: 35,
  privatePayPct: 20,
  privatePayMargin: 45,
  retailOpticalPct: 30,
  retailOpticalMargin: 55,
};

export const industryBenchmarks = [
  { metric: "Insurance Revenue %", range: "45 – 65%" },
  { metric: "Vision Plan Margin", range: "8 – 18%" },
  { metric: "Retail Optical Margin", range: "50 – 65%" },
  { metric: "Blended Net Margin", range: "18 – 28%" },
] as const;

export function calculateInsuranceMix(inputs: InsuranceMixInputs) {
  const totalPct =
    inputs.visionPlanPct +
    inputs.medicalBillingPct +
    inputs.privatePayPct +
    inputs.retailOpticalPct;
  const blendedMargin =
    (inputs.visionPlanPct * inputs.visionPlanMargin +
      inputs.medicalBillingPct * inputs.medicalBillingMargin +
      inputs.privatePayPct * inputs.privatePayMargin +
      inputs.retailOpticalPct * inputs.retailOpticalMargin) /
    (totalPct > 0 ? totalPct : 100);

  const insurancePct = inputs.visionPlanPct + inputs.medicalBillingPct;
  const cashRetailPct = inputs.privatePayPct + inputs.retailOpticalPct;

  let status: "thin" | "balanced" | "strong" = "balanced";
  if (blendedMargin < 18) status = "thin";
  else if (blendedMargin >= 26) status = "strong";

  return { blendedMargin, insurancePct, cashRetailPct, totalPct, status };
}

export const faqs = [
  {
    question: "How does insurance mix affect optometry margins?",
    answer:
      "Vision plan reimbursements for exams run $45–$85 with thin margins. Practices with 55%+ insurance mix must offset with retail attach and medical billing. Blended margin above 22% typically requires 50%+ retail/private-pay revenue.",
  },
  {
    question: "What is a healthy payer mix for optometry?",
    answer:
      "Top-quartile practices derive 35–45% from retail optical, 15–25% private pay, 10–20% medical billing, and 25–40% vision plans. This mix supports 24–28% net margins.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/optometry-practice-insurance-mix/");
export { optometryDataLinks, formatPercent };
