import type { IndustryAttribution } from "@/lib/data-sources/types";

export const daySpaAttribution: IndustryAttribution = {
  industry: "Day Spa",
  naics: "812199 (Other Personal Care Services)",
  sampleSize: "100+ day spas",
  dataVintage: "2025–2026",
  geography: "United States",
  lastUpdated: "July 2026",
  operatorBenchmarkSources: [
    {
      name: "BizMetricsHQ — day spa operator composite",
      detail:
        "100+ day spa operator panel: revenue, margins, treatment mix, therapist productivity, membership retention, and startup costs.",
    },
    {
      name: "Business-for-sale listings (spa & wellness brokers)",
      detail:
        "Independent day spa listings with disclosed revenue, SDE, treatment room counts, and asking multiples (2023–2026).",
    },
    {
      name: "Spa management software benchmarks",
      detail:
        "Scheduling and POS aggregates for appointment volume, average ticket, membership revenue, and retail attachment.",
    },
  ],
  macroSources: [
    {
      name: "ISPA — U.S. Spa Industry Study",
      detail: "Spa industry revenue, visit trends, and consumer behavior data.",
    },
    {
      name: "IBISWorld — Day Spas",
      detail: "Industry revenue trends, competitive landscape, and growth outlook.",
    },
    {
      name: "U.S. Bureau of Labor Statistics",
      detail: "Massage therapist and skincare specialist employment and wages.",
    },
  ],
  calculations: [
    {
      label: "Revenue per treatment room",
      formula: "Annual Service Revenue ÷ Number of Treatment Rooms",
      note: "Established day spas commonly produce $90K–$180K per room annually.",
    },
    {
      label: "Client lifetime value",
      formula: "Average Ticket × Visits per Year × Client Lifespan (Years)",
      note: "Membership clients with monthly visit cadence drive the highest LTV.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median ~2.8×)",
      note: "Range 2.0×–3.5× SDE from day spa business-for-sale comps.",
    },
  ],
  limitations: [
    "Day spa economics vary widely by service mix, location, and membership penetration.",
    "Massage-heavy spas carry higher labor costs than facial-focused studios.",
    "Figures are directional ranges — not substitutes for your own spa management data.",
  ],
};
