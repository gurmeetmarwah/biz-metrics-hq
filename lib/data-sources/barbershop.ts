import type { IndustryAttribution } from "@/lib/data-sources/types";

export const barbershopAttribution: IndustryAttribution = {
  industry: "Barbershop",
  naics: "812111 (Barber Shops)",
  sampleSize: "150+ barbershops",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "July 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ — barbershop operator composite",
      detail:
        "150+ barbershop operator panel: revenue, margins, chair utilization, barber productivity, membership retention, and startup costs.",
    },
    {
      name: "Business-for-sale listings (barbershop & grooming brokers)",
      detail:
        "Independent barbershop listings with disclosed revenue, SDE, chair counts, and asking multiples (2023–2026).",
    },
    {
      name: "Salon and barbershop POS benchmarks",
      detail:
        "Scheduling and POS aggregates for appointment volume, average ticket, walk-in mix, and retail attachment.",
    },
  ],
  macroSources: [
    {
      name: "IBISWorld — Barber Shops",
      detail: "Industry revenue trends, competitive landscape, and growth outlook.",
    },
    {
      name: "U.S. Bureau of Labor Statistics",
      detail: "Barber employment, wages, and establishment counts.",
    },
    {
      name: "National Association of Barber Boards of America",
      detail: "Licensing and regulatory landscape for barber shops nationwide.",
    },
  ],
  calculations: [
    {
      label: "Revenue per barber",
      formula: "Annual Service Revenue ÷ Number of Barbers",
      note: "Established barbers commonly produce $55K–$95K in annual service revenue.",
    },
    {
      label: "Chair utilization",
      formula: "Booked Chair Hours ÷ Available Chair Hours × 100",
      note: "High-volume shops target 70–85% utilization on optimized schedules.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median ~2.0×)",
      note: "Range 1.5×–2.5× SDE from barbershop business-for-sale comps.",
    },
  ],
  limitations: [
    "Barbershop economics vary widely by location, walk-in vs appointment mix, and booth-rent vs commission model.",
    "Franchise and modern grooming concepts carry different cost structures than traditional shops.",
    "Figures are directional ranges — not substitutes for your own shop management data.",
  ],
};
