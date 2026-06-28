import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "highest-margin-fitness-businesses-2026",
  title: "Highest Margin Fitness Businesses",
  subtitle:
    "2026 profitability rankings for U.S. fitness formats — which gym and studio models deliver the strongest gross and net margins, and why boutique and premium operators lead.",
  description:
    "Highest margin fitness businesses in 2026: boutique studios (40–60% gross), luxury clubs (15–25% net), specialty Pilates/yoga economics, expense benchmarks, and margin levers for gym operators.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "5 min",
  href: "/industries/gym/reports/highest-margin-fitness-businesses-2026/",
  sources: [
    "Health & Fitness Association (HFA) — 2025 Benchmarking Report",
    "IBISWorld — Gym, Health & Fitness Clubs (NAICS 713940)",
    "BizMetricsHQ — gym operator composite panel",
    "Orangetheory / boutique franchise FDD disclosures",
  ],
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Top-Quartile Boutique Gross Margin", value: "55 – 65%" },
          { label: "Mid-Tier Independent Net Margin (median)", value: "18%" },
          { label: "HVLP Budget Net Margin", value: "8 – 15%" },
          { label: "Luxury Club Net Margin (at maturity)", value: "15 – 25%" },
        ],
      },
      {
        type: "paragraph",
        text: "**Highest margin fitness businesses** in 2026 are not the largest — they are the most **specialized**. Boutique studios (Pilates, yoga, HIIT, cycling) and **premium lifestyle clubs** command pricing power that budget HVLP chains cannot match. IBISWorld reports industry-wide profit margins of **~8–12%** at the blended club level, but format-level dispersion is extreme: a well-run **Pilates studio** can achieve **55–65% gross margin** and **20–30% net**, while a mature **Planet Fitness** franchise targets **high-teens EBITDA** on massive volume at thin per-member economics.",
      },
      {
        type: "bullets",
        items: [
          "**Margin leaders:** Specialty boutiques, premium clubs with service attach, and small-group training studios.",
          "**Margin laggards:** HVLP volume clubs, oversized general gyms with low PT attach, and over-amenitized independents with weak utilization.",
          "**Key driver:** Revenue per square foot and **coach productivity** — not raw membership count.",
        ],
      },
    ],
  },
  {
    id: "margin-rankings",
    title: "2. Fitness Format Margin Rankings",
    blocks: [
      {
        type: "table",
        headers: ["Format", "Gross Margin", "Net Margin", "Primary Margin Driver"],
        rows: [
          ["Pilates / Barre Studio", "55 – 65%", "22 – 32%", "Premium pricing, small footprint, low equipment capex"],
          ["HIIT / Cycling Boutique", "50 – 60%", "18 – 28%", "Class density, retail attach, community retention"],
          ["Luxury / Lifestyle Club", "45 – 55%", "15 – 25%", "Spa, PT, F&B, and amenity upsells"],
          ["CrossFit Affiliate", "45 – 55%", "15 – 25%", "High engagement; coach-led culture reduces churn"],
          ["Mid-Priced Full-Service Gym", "40 – 50%", "12 – 20%", "PT conversion and membership volume balance"],
          ["HVLP / Budget Franchise", "35 – 45%", "8 – 15%", "Volume at $10–$25/mo; ancillary Black Card revenue"],
        ],
      },
      {
        type: "paragraph",
        text: "**Why boutiques win on margin:** Smaller footprints (**1,200–2,500 sq ft**) reduce rent as a % of revenue. Class-based models maximize **revenue per labor hour** — one instructor serves 15–30 paying members per session. Equipment costs are lower than full-service clubs; reformer Pilates studios invest **$40K–$80K** in equipment vs. **$200K–$400K** for a cardio/strength floor.",
      },
    ],
  },
  {
    id: "expense-drivers",
    title: "3. What Compresses or Expands Margin",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Rent & occupancy:** Target **8–12% of revenue** (boutique) vs. **15–22%** (full-service). Urban luxury clubs accept **20%+** when ARPU exceeds **$250/mo**.",
          "**Labor:** Instructor/coach payroll runs **30–45%** at boutiques; floor staff + trainers run **25–35%** at mid-tier clubs. **Automated billing and access control** reduce front-desk hours.",
          "**Personal training attach:** Clubs with **≥25% PT participation** often sit **5–8 pts above median net margin**. Training is the highest-margin line item on the P&L.",
          "**Recovery upsells:** Saunas, compression, and red-light add-ons carry **70%+ gross margin** once installed — a margin lever luxury and mid-tier operators are copying from med-spa economics.",
          "**Churn tax:** Every **1 pt increase in monthly churn** can erode **2–3 pts of net margin** through wasted CAC and idle capacity (HFA retention benchmarks: **66.4%** annual U.S. median).",
        ],
      },
    ],
  },
  {
    id: "actionable-insights",
    title: "4. Actionable Insights for Operators",
    blocks: [
      {
        type: "paragraph",
        text: "Operators chasing margin should **narrow the offer** before cutting price. A general gym competing with Planet Fitness on dues while carrying luxury amenity costs will lose on both volume and margin. Instead: specialize programming, cap square footage, and monetize **high-margin services** (PT, small-group, recovery).",
      },
      {
        type: "bullets",
        items: [
          "**Target net margin:** **18–22%** for mid-tier independents; **22–30%** for boutiques; accept **10–15%** only if volume model is proven at scale.",
          "**Benchmark yourself:** Compare against [gym profit margin data](/industries/gym/#profitability) and run the [profit margin calculator](/calculators/gym-revenue/) with your revenue mix.",
          "**Before expansion:** Validate **four-wall EBITDA** at location one — margin dilution is the primary failure mode in multi-unit boutique roll-ups.",
        ],
      },
    ],
  },
];
