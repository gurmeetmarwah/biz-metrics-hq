import {
  formatCurrency,
  formatMultiple,
  formatNumber,
  medicalSpaDataLinks,
  medicalSpaIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/medical-spa-calculators-shared";

export const meta = {
  title: "Medical Spa Marketing ROI Calculator — Patient Acquisition ROI",
  shortTitle: "Marketing ROI Calculator",
  subtitle: "Track marketing spend against new patient acquisition and revenue generated.",
  description:
    "Free medical spa marketing ROI calculator. Measure return on marketing spend from new patients acquired and average revenue per patient.",
};

export const introContent = {
  lead: "Marketing ROI tells you whether your patient acquisition spend is paying off. This calculator measures revenue generated from new patients against your marketing investment.",
  bullets: [
    "ROI = (New Patients × Avg Revenue per Patient) ÷ Marketing Spend",
    "Healthy medical spa marketing ROI runs 3×–6×",
    "Track cost per new patient alongside ROI for full picture",
  ],
  audience: "Built for medical spa owners evaluating digital ads, social media, and referral program spend.",
};

export type MarketingRoiInputs = {
  marketingSpend: number;
  newPatients: number;
  avgRevenuePerPatient: number;
};

export const defaultInputs: MarketingRoiInputs = {
  marketingSpend: 15000,
  newPatients: 25,
  avgRevenuePerPatient: 1200,
};

export const industryBenchmarks = [
  { metric: "Marketing ROI", range: "3× – 6×" },
  { metric: "Cost per Lead", range: "$40 – $120" },
  { metric: "Conversion Rate", range: "25 – 45%" },
  { metric: "Marketing % of Revenue", range: "8 – 15%" },
] as const;

export function calculateMarketingRoi(inputs: MarketingRoiInputs) {
  const revenueFromNewPatients = inputs.newPatients * inputs.avgRevenuePerPatient;
  const roi = inputs.marketingSpend > 0 ? revenueFromNewPatients / inputs.marketingSpend : 0;
  const netReturn = revenueFromNewPatients - inputs.marketingSpend;
  const costPerPatient = inputs.newPatients > 0 ? inputs.marketingSpend / inputs.newPatients : 0;
  const vsBenchmark = roi - medicalSpaIndustryAverages.marketingRoi;

  let status: "below" | "healthy" | "strong" = "healthy";
  if (roi < 3) status = "below";
  else if (roi >= 5) status = "strong";

  return { revenueFromNewPatients, roi, netReturn, costPerPatient, vsBenchmark, status };
}

export const faqs = [
  {
    question: "What is a good marketing ROI for a medical spa?",
    answer:
      "A healthy medical spa marketing ROI is 3×–6× — meaning every $1 in marketing spend generates $3–$6 in revenue from new patients. ROI below 3× usually signals inefficient ad targeting or low conversion rates.",
  },
  {
    question: "How do I calculate medical spa marketing ROI?",
    answer:
      "Multiply new patients acquired by average revenue per patient, then divide by total marketing spend. Include digital ads, social media, events, and referral incentives in your marketing spend figure.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/medical-spa-marketing-roi/");
export { medicalSpaDataLinks, formatCurrency, formatMultiple, formatNumber, medicalSpaIndustryAverages };
