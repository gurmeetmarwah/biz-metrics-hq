import {
  formatCurrency,
  medicalSpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/medical-spa-calculators-shared";

export const meta = {
  title: "Medical Spa Revenue per Provider Calculator & Productivity Benchmark",
  shortTitle: "Revenue per Provider Calculator",
  subtitle: "Benchmark each provider's annual treatment revenue against industry ranges.",
  description:
    "Free medical spa revenue per provider calculator. Benchmark clinical provider productivity from annual treatment revenue and headcount.",
};

export const introContent = {
  lead: "Revenue per provider is the clearest measure of clinical productivity in a medical spa. This calculator benchmarks each provider's annual treatment revenue.",
  bullets: [
    "Revenue per Provider = Annual Treatment Revenue ÷ Number of Providers",
    "Established injectors produce $300K–$700K in annual revenue",
    "Low revenue per provider signals idle rooms or pricing below market",
  ],
  audience: "Built for medical spa owners benchmarking provider productivity and staffing levels.",
};

export type RevenuePerProviderInputs = {
  annualTreatmentRevenue: number;
  numberOfProviders: number;
};

export const defaultInputs: RevenuePerProviderInputs = {
  annualTreatmentRevenue: 1200000,
  numberOfProviders: 3,
};

export const industryBenchmarks = [
  { metric: "Revenue per Provider", range: "$300K – $700K" },
  { metric: "Top-Performer Provider", range: "$750K+" },
  { metric: "Monthly per Provider", range: "$25K – $58K" },
  { metric: "Weekly per Provider", range: "$6K – $14K" },
] as const;

export function calculateRevenuePerProvider(inputs: RevenuePerProviderInputs) {
  const perProvider =
    inputs.numberOfProviders > 0 ? inputs.annualTreatmentRevenue / inputs.numberOfProviders : 0;
  const monthlyPerProvider = perProvider / 12;
  const weeklyPerProvider = perProvider / 50;

  let status: "below" | "healthy" | "strong" = "healthy";
  if (perProvider < 300000) status = "below";
  else if (perProvider >= 700000) status = "strong";

  return { perProvider, monthlyPerProvider, weeklyPerProvider, status };
}

export const faqs = [
  {
    question: "How many providers should a medical spa employ?",
    answer:
      "An average medical spa employs 2–5 clinical providers (RN, NP, PA, or licensed injector) plus front-desk and marketing staff. Revenue per provider typically runs $300K–$700K annually.",
  },
  {
    question: "What is a good revenue per provider for a medical spa?",
    answer:
      "A good medical spa revenue per provider is $300K–$700K in annual treatment revenue, with top performers exceeding $750K. Figures below $300K usually point to idle rooms, low booking density, or pricing below the local market.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/medical-spa-revenue-per-provider/");
export { medicalSpaDataLinks, formatCurrency };
