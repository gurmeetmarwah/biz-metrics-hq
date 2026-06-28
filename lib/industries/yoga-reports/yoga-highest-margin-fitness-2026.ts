import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { yogaMarketAnchors, yogaReportSources } from "./shared-yoga-market-data";

export const reportMeta: ReportMeta = {
  slug: "yoga-highest-margin-fitness-2026",
  title: "Highest Margin Fitness Businesses — Yoga Industry Report",
  subtitle:
    "2026 U.S. fitness profitability analysis with a yoga deep-dive: why boutique studios lead margin rankings, community economics, and premium pricing without heavy equipment capex.",
  description:
    "Highest margin yoga and fitness businesses in 2026: $19.2B pilates/yoga market, 65% class fill rates, community retention, gross margin leaders, and margin levers for studio operators.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/industries/yoga-studio/reports/yoga-highest-margin-fitness-2026/",
  sources: yogaReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "U.S. Pilates & Yoga Studio Market", value: yogaMarketAnchors.pilatesYogaIndustrySize },
          { label: "Top Yoga Studio Net Margin Range", value: "18 – 28%" },
          { label: "Boutique Yoga Gross Margin", value: "50 – 62%" },
          { label: "Avg. Class Price (Industry Benchmark)", value: yogaMarketAnchors.avgClassPrice },
        ],
      },
      {
        type: "paragraph",
        text: "The U.S. fitness industry in 2026 remains bifurcated: **volume-driven clubs** compete on dues while **boutique operators** compete on margin. Within the **$19.2 billion** combined Pilates and yoga studio segment, **community-driven yoga studios** consistently rank among the **highest-margin fitness business models** — not because of scale, but because of **low equipment capex**, **recurring membership revenue**, and **instructor-led pricing power**. While overall studio counts are relatively stable, total revenues show mixed but **stabilizing trends** as operators shift from growth-at-all-costs to **four-wall profitability**.",
      },
      {
        type: "bullets",
        items: [
          "**Margin thesis:** Yoga studios monetize **community and consistency** — dedicated practitioners pay for instructor relationships and studio culture that general gyms cannot replicate at comparable square footage.",
          "**Industry context:** Average class prices hover around **$25** with **65% class fill rates**; top-quartile boutique studios exceed **75% occupancy** at **$22–$38** effective revenue per class spot.",
          "**Strategic implication:** Operators optimizing margin should prioritize **class scheduling density**, **workshop revenue**, and **retention** before expanding room capacity.",
        ],
      },
    ],
  },
  {
    id: "yoga-wellness-market-size",
    title: "2. The U.S. Yoga & Wellness Boom: Market Size & Share",
    blocks: [
      {
        type: "paragraph",
        text: "The **$19.2 billion** U.S. Pilates and yoga studio industry encompasses mat-based yoga, hot yoga, hybrid wellness studios, and mindfulness-forward formats. Yoga-dominant boutiques represent the **capital-efficient premium tier**: minimal apparatus investment relative to Pilates reformer studios, yet comparable **revenue per square foot** when community retention is strong. Mat, blocks, and props capex typically runs **$8K–$25K** vs. **$45K–$120K** for reformer fleets — a structural margin advantage at launch.",
      },
      {
        type: "table",
        headers: ["Segment", "Est. Share of Boutique Revenue", "Margin Profile", "Growth Dynamic"],
        rows: [
          ["Vinyasa / Flow Studios", "35 – 45%", "Moderate–High (18 – 26% net)", "Stable; community-driven"],
          ["Hot / Power Yoga", "25 – 35%", "High (20 – 28% net)", "HVAC costs offset by premium dues"],
          ["Yin / Restorative", "10 – 18%", "Moderate (16 – 22% net)", "Growing stress-recovery demand"],
          ["Hybrid Yoga + Wellness", "12 – 20%", "High incremental margin", "Workshops, retail, teacher training"],
        ],
      },
      {
        type: "paragraph",
        text: "**Market share insight:** Yoga studios capture disproportionate **profit share per dollar of capex** relative to equipment-heavy formats. A mature yoga studio generating **$620K** annually may occupy **1,400–2,000 sq ft** — achieving revenue per square foot **2×** a mid-tier gym with **fraction of the equipment investment**. Studio counts remain relatively stable nationally, but **revenue per studio is rising** as survivors consolidate market share and weak operators exit.",
      },
    ],
  },
  {
    id: "consumer-demographics",
    title: "3. Consumer Demographics & Behavior",
    blocks: [
      {
        type: "paragraph",
        text: "The modern yoga client is wellness-oriented, community-attached, and retention-sensitive. **Adults aged 25–55 command 62.3% of the market** — a concentration that shapes pricing, scheduling, and marketing strategy. This cohort prioritizes **stress relief**, **mobility**, **instructor rapport**, and **studio belonging** over equipment variety.",
      },
      {
        type: "bullets",
        items: [
          "**Why they return:** " + yogaMarketAnchors.communityRetentionFocus + ". Churn drops when clients attend **3+ classes/week** and participate in studio events.",
          "**Purchase behavior:** Intro offers convert best at **$39–$79** for unlimited first week; unlimited memberships at **$120–$185/mo** anchor LTV in premium markets.",
          "**Demographic tailwinds:** Millennials and Gen X drive demand for **mind-body balance**; corporate wellness stipends increasingly cover boutique yoga credits.",
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
        text: "**Low-capex delivery** defines the premium yoga segment. Studios invest in **flooring, mirrors, props, and ambiance** — not heavy apparatus. Hot yoga adds **HVAC and humidity systems** ($25K–$60K) but unlocks **$5–$12 premium per class** in many markets. Leading operators compete on **instructor quality**, **class variety**, and **community programming** rather than equipment telemetry.",
      },
      {
        type: "bullets",
        items: [
          "**AI integration:** Scheduling optimization, churn-risk scoring, and automated waitlist management — not robot instructors. Operators use AI to **fill 65%+ baseline occupancy** toward **75–80%**.",
          "**Hybrid models:** On-demand class libraries supplement in-person memberships; hybrid reduces churn **10–18%** when bundled, not sold standalone.",
          "**Props lifecycle:** Mats, blocks, and straps refresh every **2–4 years**; capex planning at **$3K–$8K annually** is manageable for margin forecasting.",
          "**Trend risk:** Over-building studio square footage before demand validation — the leading cause of **sub-65% fill rates** in year-one studios.",
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
        text: "**Highest-margin operators** share a common monetization stack: **unlimited membership MRR** as the base, **group classes** as the delivery engine, and **workshops / teacher training** as the margin accelerator. Franchising (e.g., CorePower, YogaSix) trades margin for playbook speed; independents retain **2–4 pts higher net margin** when mature.",
      },
      {
        type: "table",
        headers: ["Model", "Typical Net Margin", "Revenue Mix", "Margin Driver"],
        rows: [
          ["Independent Boutique Studio", "18 – 28%", "55% membership · 15% workshops", "Retention + occupancy"],
          ["Franchise Yoga Studio", "14 – 22%", "58% membership · 12% retail", "Brand + ops system"],
          ["Community Co-op / Donation", "12 – 18%", "70% class packs", "Low overhead; variable pricing"],
          ["Hybrid Yoga + Pilates", "20 – 26%", "45% yoga · 35% pilates", "Cross-format retention"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Group vs. workshop:** Group classes drive **volume economics** ($180–$320 revenue per class hour); workshops drive **margin** ($45–$95/person at 60%+ gross).",
          "**Rule of thumb:** Every **10 pts of workshop + retail revenue** as % of total can add **1.5–3 pts net margin** without adding class capacity.",
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
          "**Challenge — Instructor dependence:** Revenue walks out when beloved teachers leave; mitigate with contracts, continuing education, and tiered pay.",
          "**Challenge — Market saturation:** Dense urban markets compress pricing; differentiation via **community culture** is essential.",
          "**Opportunity — Premium pricing power:** Clients accept **$120–$185/mo** when studio culture justifies it — margins unavailable to $40/mo gyms.",
          "**Opportunity — Occupancy leverage:** Moving fill rate from **65% to 75%** can add **$60K–$110K** annual revenue without new buildout.",
          "**Opportunity — Low capex advantage:** Same membership revenue achievable with **$50K–$120K** launch vs. **$150K+** reformer studios — faster payback.",
        ],
      },
      {
        type: "paragraph",
        text: "For margin-focused investors, yoga represents a **rare combination**: wellness-sector growth, recurring revenue, and boutique pricing power — provided operators respect **community retention economics** and resist overbuilding before demand proof.",
      },
    ],
  }
];
