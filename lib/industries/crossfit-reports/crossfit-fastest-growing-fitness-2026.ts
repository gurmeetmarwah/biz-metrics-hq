import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { crossfitMarketAnchors, crossfitReportSources } from "./shared-crossfit-market-data";

export const reportMeta: ReportMeta = {
  slug: "crossfit-fastest-growing-fitness-2026",
  title: "Fastest Growing Fitness Businesses — CrossFit Industry Report",
  subtitle:
    "2026 U.S. fitness growth analysis with a CrossFit deep-dive: functional fitness demand, boutique expansion velocity, corporate wellness tailwinds, and where CrossFit affiliates rank in growth vs. other formats.",
  description:
    "Fastest growing CrossFit and fitness businesses in 2026: functional fitness CAGR, affiliate expansion trends, HIIT market growth, youth programming, and growth levers for box operators.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/industries/crossfit-gym/reports/crossfit-fastest-growing-fitness-2026/",
  sources: crossfitReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "U.S. Functional Fitness Market", value: crossfitMarketAnchors.functionalFitnessMarketSize },
          { label: "Functional Fitness CAGR (2024–2028 est.)", value: "6.8 – 8.2%" },
          { label: "CrossFit Affiliate Base (global)", value: "15,000+" },
          { label: "Fastest-Growth Revenue Line (boxes)", value: "Nutrition + youth programs" },
        ],
      },
      {
        type: "paragraph",
        text: "**Fastest growing fitness businesses** in 2026 are not defined by raw location count alone — they are defined by **revenue growth per unit**, **format expansion velocity**, and **demographic tailwinds**. CrossFit affiliates have transitioned from **hyper-growth opening phase** to **maturity-and-consolidation** — but functional fitness as a category continues **6.8–8.2% CAGR**, driven by **small-group training demand**, **corporate wellness**, **youth athletic development**, and **hybrid online/in-person programming**. The growth story for CrossFit in 2026 is **same-store revenue growth**, **multi-affiliate expansion**, and **ancillary line extension** — not net-new affiliate count.",
      },
      {
        type: "bullets",
        items: [
          "**Growth thesis:** CrossFit grows through **deeper member monetization** and **format extension** — nutrition, kids, online — not just new box openings.",
          "**Industry context:** HIIT and functional fitness remain **top consumer search categories**; boutique coaching formats outpace traditional gym membership growth.",
          "**Strategic implication:** Operators should prioritize **same-store growth (MRR + ARPU)** before geographic expansion.",
        ],
      },
    ],
  },
  {
    id: "crossfit-market-size",
    title: "2. Functional Fitness Market Growth & CrossFit Position",
    blocks: [
      {
        type: "paragraph",
        text: "The **$4.8 billion** functional fitness market includes CrossFit, F45, Orangetheory-adjacent HIIT, bootcamp franchises, and independent strength & conditioning gyms. CrossFit pioneered the **coach-led group model** that now defines boutique fitness growth. While **new affiliate openings slowed 2018–2024**, **revenue per affiliate rose** as weak operators exited and survivors professionalized operations.",
      },
      {
        type: "table",
        headers: ["Format", "Growth Vector (2026)", "Expansion Velocity", "Growth Quality"],
        rows: [
          ["CrossFit Affiliate", "Same-store MRR + ancillary", "Moderate (consolidation)", "High margin growth"],
          ["HIIT / Bootcamp Franchise", "New unit openings", "High (franchise-driven)", "Variable margin"],
          ["Personal Training / Hybrid", "Online + in-person", "High (solo → studio)", "High per-unit"],
          ["Traditional Gym", "Flat to declining units", "Low", "Volume-dependent"],
          ["Yoga / Pilates Boutique", "Stable unit count", "Low–moderate", "Steady MRR growth"],
        ],
      },
      {
        type: "paragraph",
        text: "**CrossFit growth ranking:** Not #1 in **new location velocity** (franchise HIIT leads), but **top-tier in revenue growth per location** when operators execute nutrition, youth, and retention strategies.",
      },
    ],
  },
  {
    id: "growth-drivers",
    title: "3. CrossFit Growth Drivers in 2026",
    blocks: [
      {
        type: "paragraph",
        text: "Four tailwinds define CrossFit affiliate growth potential in 2026 — each addressable without opening new locations.",
      },
      {
        type: "bullets",
        items: [
          "**Functional fitness demand:** Consumers prioritize **strength, mobility, and metabolic conditioning** over machine-based bodybuilding — CrossFit's core value proposition.",
          "**Small-group training popularity:** Post-pandemic preference for **coached small groups (8–16)** over crowded gyms or isolated solo training.",
          "**Corporate wellness partnerships:** Employers subsidize **$100–$200/mo boutique memberships** — B2B channel growing **12–18% annually** in major metros.",
          "**Youth & teen programs:** Kids CrossFit and teen strength programs add **10–18% revenue** at family-focused boxes with **lower CAC** than adult acquisition.",
          "**Nutrition coaching:** Macro challenges and accountability programs grow **15–25% YoY** at affiliates with structured nutrition offerings.",
          "**Online programming:** Hybrid members (in-person + remote) reduce churn **8–15%** and extend geographic reach.",
        ],
      },
    ],
  },
  {
    id: "same-store-growth",
    title: "4. Same-Store Growth Benchmarks",
    blocks: [
      {
        type: "paragraph",
        text: "Mature CrossFit affiliates target **8–15% annual same-store revenue growth** through member count growth, ARPU expansion, and ancillary attach — without new buildout. Top-quartile boxes achieve this via **referral-heavy acquisition (30%+)** and **nutrition/PT upsells**.",
      },
      {
        type: "table",
        headers: ["Growth Lever", "Typical YoY Impact", "Implementation Cost", "Timeline"],
        rows: [
          ["Member count (+20 net members)", "+8 – 12% revenue", "Marketing + retention", "6 – 12 months"],
          ["ARPU lift (nutrition + PT)", "+5 – 10% revenue", "Coach training", "3 – 6 months"],
          ["Churn reduction (1 pt)", "+3 – 6% revenue", "Onboarding + community", "3 – 9 months"],
          ["Youth program launch", "+10 – 18% revenue", "Coach cert + space", "4 – 8 months"],
          ["Corporate wellness B2B", "+5 – 15% revenue", "Sales effort", "6 – 12 months"],
        ],
      },
    ],
  },
  {
    id: "multi-affiliate-expansion",
    title: "5. Multi-Affiliate & Regional Growth",
    blocks: [
      {
        type: "paragraph",
        text: "The highest-growth CrossFit **operators** (not just single boxes) pursue **multi-affiliate expansion** — replicating proven coach systems, onboarding funnels, and community programming across markets. Regional operators with **2–4 locations** achieve **$1.5M–$3M+ combined revenue** with centralized marketing and shared coach development.",
      },
      {
        type: "bullets",
        items: [
          "**Location two timing:** Open second box when location one sustains **180+ members**, **>18% net margin**, and **documented SOPs**.",
          "**Geographic strategy:** **Drive-time radius** expansion (15–25 min) captures market share without cannibalizing box one.",
          "**Franchise comparison:** Independent multi-affiliate operators retain **2–4 pts higher margin** than franchise HIIT models without royalty fees.",
          "**PE interest:** Roll-up buyers target **3+ location operators** with **documented MRR** and **<4% churn** — growth via acquisition.",
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
          "**Challenge — Market saturation:** Dense urban markets limit new member acquisition; growth shifts to **retention and ARPU**.",
          "**Challenge — Format competition:** HIIT franchises, bootcamps, and hybrid gyms compete for same demographic.",
          "**Opportunity — Ancillary expansion:** Nutrition, youth, and online are **fastest-growing revenue lines** inside existing boxes.",
          "**Opportunity — Corporate B2B:** Employer wellness partnerships provide **predictable member pipeline** with lower CAC.",
          "**Opportunity — Consolidation play:** Acquiring distressed local competitors accelerates growth vs. organic member acquisition.",
        ],
      },
      {
        type: "paragraph",
        text: "CrossFit's growth story in 2026 is **quality over quantity** — affiliates that grow revenue per box through community, coaching, and ancillary programs outperform those chasing location count alone.",
      },
    ],
  },
];
