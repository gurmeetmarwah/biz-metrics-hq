import type { IndustryAttribution } from "@/lib/data-sources/types";

export const hairSalonAttribution: IndustryAttribution = {
  industry: "Hair Salon",
  naics: "812112 (Beauty Salons)",
  sampleSize: "210+ hair salons",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "July 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ — hair salon operator composite",
      detail:
        "210+ salon operator panel: revenue, average ticket, chair utilization, payroll %, retail attachment, retention, and startup costs.",
    },
    {
      name: "Business-for-sale listings (salon & spa brokers)",
      detail:
        "Independent salon and franchise salon listings with disclosed revenue, SDE, chair counts, and asking multiples (2023–2026).",
    },
    {
      name: "Salon software & POS benchmarks",
      detail:
        "Booking and POS platform aggregates for rebooking rate, average ticket, retail attachment, and no-show/cancellation rates.",
    },
  ],
  macroSources: [
    {
      name: "IBISWorld — Hair & Nail Salons",
      detail: "Industry revenue trends, wage pressure, and competitive landscape.",
    },
    {
      name: "U.S. Bureau of Labor Statistics",
      detail: "Hairdresser and cosmetologist employment, wages, and establishment counts.",
    },
    {
      name: "Professional Beauty Association",
      detail: "Salon market size, service pricing, and consumer spending trends.",
    },
  ],
  calculations: [
    {
      label: "Revenue per stylist",
      formula: "Annual Service Revenue ÷ Number of Stylists",
      note: "Established stylists commonly produce $60K–$120K in annual service revenue.",
    },
    {
      label: "Chair utilization",
      formula: "Booked Chair Hours ÷ Available Chair Hours",
      note: "Target 65–80% utilization on optimized schedules.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median ~2.3×)",
      note: "Range 1.8×–3.0× SDE from salon business-for-sale comps.",
    },
  ],
  limitations: [
    "Salon economics vary widely by market rent, service menu, and booth-rent vs commission vs employee models.",
    "Booth-rental salons report very different revenue and payroll profiles than commission salons.",
    "Figures are directional ranges — not substitutes for your own booking and P&L data.",
  ],
};
