import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { pilatesMarketAnchors, pilatesReportSources } from "./shared-pilates-market-data";

export const reportMeta: ReportMeta = {
  slug: "pilates-highest-margin-fitness-2026",
  title: "Highest Margin Fitness Businesses — Pilates Industry Report",
  subtitle:
    "2026 U.S. fitness profitability analysis with a Pilates deep-dive: why reformer studios lead boutique margin rankings, expense structure, and premium pricing power.",
  description:
    "Highest margin Pilates and fitness businesses in 2026: $19.2B pilates/yoga market, reformer economics, 65% class fill rates, gross margin leaders, and margin levers for studio operators.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/industries/pilates-studio/reports/pilates-highest-margin-fitness-2026/",
  sources: pilatesReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "U.S. Pilates & Yoga Studio Market", value: pilatesMarketAnchors.pilatesYogaIndustrySize },
          { label: "Top Pilates Studio Net Margin Range", value: "22 – 32%" },
          { label: "Reformer Studio Gross Margin", value: "55 – 65%" },
          { label: "Avg. Class Price (Industry Benchmark)", value: pilatesMarketAnchors.avgClassPrice },
        ],
      },
      {
        type: "paragraph",
        text: "The U.S. fitness industry in 2026 remains bifurcated: **volume-driven clubs** compete on dues while **boutique operators** compete on margin. Within the **$19.2 billion** combined Pilates and yoga studio segment, **equipment-based Pilates** consistently ranks among the **highest-margin fitness business models** — not because of scale, but because of **premium ARPU**, **small-group economics**, and **recurring membership revenue**. While overall studio counts are relatively stable, total revenues show mixed but **stabilizing trends** as operators shift from growth-at-all-costs to **four-wall profitability**.",
      },
      {
        type: "bullets",
        items: [
          "**Margin thesis:** Pilates studios monetize **specialization** — reformer instruction commands pricing power that general gyms cannot replicate at comparable square footage.",
          "**Industry context:** Average class prices hover around **$25** with **65% class fill rates**; top-quartile reformer studios exceed **75% occupancy** at **$28–$45** effective revenue per class spot.",
          "**Strategic implication:** Operators optimizing margin should prioritize **instructor productivity**, **private session attach**, and **occupancy** before adding reformer capacity.",
        ],
      },
    ],
  },
  {
    id: "pilates-boom-market-size",
    title: "2. The U.S. Pilates Boom: Market Size & Share",
    blocks: [
      {
        type: "paragraph",
        text: "The **$19.2 billion** U.S. Pilates and yoga studio industry encompasses mat-based yoga, hybrid wellness studios, and the faster-growing **equipment Pilates** subsegment. Reformer-dominant studios represent the premium tier: the global **Pilates reformer market** is valued at approximately **$1.2 billion**, expanding at an **8.2% CAGR** — outpacing general fitness equipment growth as studios upgrade, replace aging inventory, and expand multi-location footprints.",
      },
      {
        type: "table",
        headers: ["Segment", "Est. Share of Boutique Revenue", "Margin Profile", "Growth Dynamic"],
        rows: [
          ["Mat Pilates / Yoga", "35 – 45%", "Moderate (18 – 24% net)", "Stable; price-competitive"],
          ["Reformer Group Classes", "40 – 50%", "High (22 – 30% net)", "Occupancy-driven expansion"],
          ["Private / Semi-Private", "15 – 25%", "Very High (35 – 50% gross)", "Fastest margin lever"],
          ["Digital / Hybrid Add-On", "3 – 8%", "High incremental margin", "Growing post-pandemic"],
        ],
      },
      {
        type: "paragraph",
        text: "**Market share insight:** Equipment-based Pilates captures disproportionate **profit share** relative to location count. A mature reformer studio generating **$850K** annually may occupy **1,800 sq ft** — achieving revenue per square foot **2–3×** a mid-tier gym. Studio counts remain relatively stable nationally, but **revenue per studio is rising** as survivors consolidate market share and weak operators exit.",
      },
    ],
  },
  {
    id: "consumer-demographics",
    title: "3. Consumer Demographics & Behavior",
    blocks: [
      {
        type: "paragraph",
        text: "The modern Pilates client is affluent, health-literate, and retention-sensitive. **Adults aged 25–55 command 62.3% of the market** — a concentration that shapes pricing, scheduling, and marketing strategy. This cohort prioritizes **corrective movement**, **low-impact strength**, and **instructor quality** over equipment variety.",
      },
      {
        type: "bullets",
        items: [
          "**Why they return:** Instructor relationships, visible progression, and community — not transactional access. Churn drops when clients book **2+ sessions/week** and add private sessions.",
          "**Purchase behavior:** Intro offers convert best at **$49–$99** for 3-class packages; unlimited memberships at **$165–$220/mo** anchor LTV in premium markets.",
          "**Demographic tailwinds:** Aging millennials and peri-menopausal women drive demand for **joint-safe strength**; corporate wellness stipends increasingly cover boutique credits.",
          "**Fill rate linkage:** Studios below **60% average occupancy** often signal demographic mismatch — wrong class times, pricing, or instructor-market fit for the local 25–55 cohort.",
        ],
      },
    ],
  },
  {
    id: "trends-equipment",
    title: "4. Key Trends & Equipment",
    blocks: [
      {
        type: "paragraph",
        text: "**Reformer dominance** defines the premium Pilates segment. The **$1.2 billion** reformer market growing at **8.2% CAGR** reflects studio openings, equipment refresh cycles, and home-studio spillover demand. Leading manufacturers compete on carriage smoothness, spring precision, and connected telemetry — though commercial studios remain the core buyer.",
      },
      {
        type: "bullets",
        items: [
          "**AI integration:** Scheduling optimization, churn-risk scoring, and automated waitlist management — not robot instructors. Operators use AI to **fill 65%+ baseline occupancy** toward **75–80%**.",
          "**Hybrid models:** On-demand mat libraries supplement in-person reformer memberships; hybrid reduces churn **8–15%** when bundled, not sold standalone.",
          "**Equipment lifecycle:** Reformers last **7–12 years** with maintenance; capex planning at **$5K–$8K per unit** installed is essential for margin forecasting.",
          "**Trend risk:** Over-equipping before demand validation — the leading cause of **sub-65% fill rates** in year-one studios.",
        ],
      },
    ],
  },
  {
    id: "business-models",
    title: "5. Business Models & Monetization",
    blocks: [
      {
        type: "paragraph",
        text: "**Highest-margin operators** share a common monetization stack: **unlimited membership MRR** as the base, **small-group reformer classes** as the delivery engine, and **private sessions** as the margin accelerator. Franchising (e.g., Club Pilates, Pure Pilates) trades margin for playbook speed; independents retain **3–5 pts higher net margin** when mature.",
      },
      {
        type: "table",
        headers: ["Model", "Typical Net Margin", "Revenue Mix", "Margin Driver"],
        rows: [
          ["Independent Reformer Studio", "22 – 32%", "48% membership · 16% privates", "Private attach + occupancy"],
          ["Franchise Reformer Studio", "18 – 26%", "52% membership · 12% privates", "Brand + ops system"],
          ["Mat-Only Studio", "15 – 22%", "70% class packs", "Low capex; price pressure"],
          ["Hybrid PT + Pilates", "20 – 28%", "40% clinical · 35% fitness", "Cash-pay wellness positioning"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Small group vs. private:** Group classes drive **volume economics** ($220–$350 revenue per class hour); privates drive **margin** ($95–$150/session at 50%+ gross).",
          "**Rule of thumb:** Every **10 pts of private revenue** as % of total can add **2–4 pts net margin** without adding reformers.",
        ],
      },
    ],
  },
  {
    id: "challenges-opportunities",
    title: "6. Challenges & Opportunities",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Challenge — High initial equipment costs:** **$45K–$120K** reformer capex before buildout creates barrier to entry but **moat against casual competition** once operational.",
          "**Challenge — Instructor dependence:** Revenue walks out when top teachers leave; mitigate with contracts, continuing education, and tiered pay.",
          "**Opportunity — Premium pricing power:** Clients accept **$165–$220/mo** when instruction quality justifies it — margins unavailable to $40/mo gyms.",
          "**Opportunity — Occupancy leverage:** Moving fill rate from **65% to 75%** can add **$80K–$150K** annual revenue without new equipment.",
          "**Opportunity — Reformer market growth:** **8.2% CAGR** signals durable demand; equipment financing and lease-to-own reduce upfront pain.",
        ],
      },
      {
        type: "paragraph",
        text: "For margin-focused investors, Pilates represents a **rare combination**: wellness-sector growth, recurring revenue, and boutique pricing power — provided operators respect **fill rate economics** and resist overbuilding before demand proof.",
      },
    ],
  }
];
