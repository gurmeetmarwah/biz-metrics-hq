import type { IndustryAttribution } from "@/lib/data-sources/types";

export const medicalSpaAttribution: IndustryAttribution = {
  industry: "Medical Spa",
  naics: "621399 (Outpatient Care Centers) / 812199 (Personal Care)",
  sampleSize: "120+ medical spas",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "July 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ — medical spa operator composite",
      detail:
        "120+ medical spa operator panel: revenue, EBITDA, treatment mix, provider productivity, patient LTV, membership retention, and startup costs.",
    },
    {
      name: "Business-for-sale listings (med spa & aesthetic brokers)",
      detail:
        "Independent medical spa listings with disclosed revenue, SDE, EBITDA, provider counts, and asking multiples (2023–2026).",
    },
    {
      name: "Aesthetic practice management benchmarks",
      detail:
        "EMR and practice management aggregates for injectable volume, laser utilization, membership revenue, and marketing ROI.",
    },
  ],
  macroSources: [
    {
      name: "American Med Spa Association (AmSpa)",
      detail: "Medical spa industry size, state regulatory landscape, and operator surveys.",
    },
    {
      name: "IBISWorld — Medical Spas",
      detail: "Industry revenue trends, competitive landscape, and growth outlook.",
    },
    {
      name: "U.S. Bureau of Labor Statistics",
      detail: "Healthcare practitioner employment, wages, and establishment counts.",
    },
  ],
  calculations: [
    {
      label: "Revenue per provider",
      formula: "Annual Treatment Revenue ÷ Number of Clinical Providers",
      note: "Established injectors and laser providers commonly produce $300K–$700K annually.",
    },
    {
      label: "Patient lifetime value",
      formula: "Average Treatment Value × Visits per Year × Patient Lifespan (Years)",
      note: "Injectable patients with membership plans drive the highest LTV.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median ~4.0×)",
      note: "Range 3.0×–5.5× SDE from medical spa business-for-sale comps.",
    },
  ],
  limitations: [
    "Medical spa economics vary widely by state regulations, medical director requirements, and treatment mix.",
    "Device financing and injectable COGS can materially affect margins by service menu.",
    "Figures are directional ranges — not substitutes for your own practice management data.",
  ],
};
