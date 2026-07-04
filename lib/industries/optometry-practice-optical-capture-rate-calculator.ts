import {
  formatCurrency,
  formatPercent,
  optometryDataLinks,
  relatedCalculators,
} from "@/lib/industries/optometry-calculators-shared";

export const meta = {
  title: "Optometry Optical Capture Rate Calculator & Dispensary Tool",
  shortTitle: "Optical Capture Rate Calculator",
  subtitle: "Measure dispensary conversion from exams to eyewear sales and model revenue impact.",
  description:
    "Free optometry optical capture rate calculator. Calculate capture rate, lost optical revenue, and margin impact from dispensary conversion.",
};

export const introContent = {
  lead: "Optical capture rate is the single strongest predictor of optometry practice profitability. This calculator measures conversion and models revenue upside from improved dispensary performance.",
  bullets: [
    "Capture Rate = Patients Purchasing Eyewear ÷ Total Exam Patients × 100",
    "Target 55–72% for above-median profitability",
    "Each 5-point capture improvement can add $50K–$120K annual revenue",
  ],
  audience: "Built for practice owners and optical managers tracking dispensary KPIs.",
};

export type OpticalCaptureInputs = {
  monthlyExams: number;
  captureRatePct: number;
  averageOpticalTicket: number;
  targetCaptureRatePct: number;
  opticalGrossMarginPct: number;
};

export const defaultInputs: OpticalCaptureInputs = {
  monthlyExams: 550,
  captureRatePct: 58,
  averageOpticalTicket: 480,
  targetCaptureRatePct: 68,
  opticalGrossMarginPct: 58,
};

export const industryBenchmarks = [
  { metric: "Optical Capture Rate", range: "55 – 72%" },
  { metric: "Average Optical Ticket", range: "$350 – $650" },
  { metric: "Premium Lens %", range: "35 – 55%" },
  { metric: "Frame + Lens Revenue", range: "50 – 65% of total" },
] as const;

export function calculateOpticalCapture(inputs: OpticalCaptureInputs) {
  const currentPurchases = inputs.monthlyExams * (inputs.captureRatePct / 100);
  const currentOpticalRevenue = currentPurchases * inputs.averageOpticalTicket;
  const targetPurchases = inputs.monthlyExams * (inputs.targetCaptureRatePct / 100);
  const targetOpticalRevenue = targetPurchases * inputs.averageOpticalTicket;
  const revenueUplift = (targetOpticalRevenue - currentOpticalRevenue) * 12;
  const marginUplift = revenueUplift * (inputs.opticalGrossMarginPct / 100);
  const lostRevenue =
    inputs.monthlyExams *
    ((inputs.targetCaptureRatePct - inputs.captureRatePct) / 100) *
    inputs.averageOpticalTicket *
    12;

  let status: "below" | "healthy" | "strong" = "healthy";
  if (inputs.captureRatePct < 55) status = "below";
  else if (inputs.captureRatePct >= 65) status = "strong";

  return {
    currentPurchases,
    currentOpticalRevenue,
    targetPurchases,
    targetOpticalRevenue,
    revenueUplift,
    marginUplift,
    lostRevenue: Math.max(0, lostRevenue),
    annualOpticalRevenue: currentOpticalRevenue * 12,
    status,
  };
}

export const faqs = [
  {
    question: "What is a good optical capture rate?",
    answer:
      "Target 55–72% optical capture for above-median profitability. Practices below 50% capture struggle on exam-only margins. Top operators achieve 65–72% through optician training and in-practice eyewear positioning.",
  },
  {
    question: "How important are eyewear sales to optometry profitability?",
    answer:
      "Eyewear sales are critical — frames and lenses represent 50–65% of revenue at profitable practices. Optical capture rate above 60% is the single strongest predictor of above-median net margin.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/optometry-practice-optical-capture-rate/");
export { optometryDataLinks, formatCurrency, formatPercent };
