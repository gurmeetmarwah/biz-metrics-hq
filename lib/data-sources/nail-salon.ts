import type { IndustryAttribution } from "@/lib/data-sources/types";

export const nailSalonAttribution: IndustryAttribution = {
  industry: "Nail Salon",
  naics: "812113 (Nail Salons)",
  sampleSize: "180+ nail salons",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "July 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ — nail salon operator composite",
      detail:
        "180+ nail salon operator panel: revenue, average ticket, station utilization, payroll %, retail attachment, retention, and startup costs.",
    },
    {
      name: "Business-for-sale listings (salon & spa brokers)",
      detail:
        "Independent nail salon listings with disclosed revenue, SDE, station counts, and asking multiples (2023–2026).",
    },
    {
      name: "Salon software & POS benchmarks",
      detail:
        "Booking platform aggregates for rebooking rate, average ticket, no-show/cancellation rates, and technician productivity.",
    },
  ],
  macroSources: [
    {
      name: "IBISWorld — Nail Salons",
      detail: "Industry revenue trends, wage pressure, and competitive landscape.",
    },
    {
      name: "U.S. Bureau of Labor Statistics",
      detail: "Manicurist and pedicurist employment, wages, and establishment counts.",
    },
    {
      name: "Professional Beauty Association",
      detail: "Nail salon market size, service pricing, and consumer spending trends.",
    },
  ],
  calculations: [
    {
      label: "Revenue per technician",
      formula: "Annual Service Revenue ÷ Number of Nail Technicians",
      note: "Established technicians commonly produce $50K–$90K in annual service revenue.",
    },
    {
      label: "Station utilization",
      formula: "Booked Station Hours ÷ Available Station Hours",
      note: "Target 65–82% utilization on optimized schedules.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median ~2.1×)",
      note: "Range 1.6×–2.6× SDE from nail salon business-for-sale comps.",
    },
  ],
  limitations: [
    "Nail salon economics vary widely by market rent, service menu, and commission vs booth-rent models.",
    "Ventilation and buildout requirements can materially affect startup cost by market.",
    "Figures are directional ranges — not substitutes for your own booking and P&L data.",
  ],
};
