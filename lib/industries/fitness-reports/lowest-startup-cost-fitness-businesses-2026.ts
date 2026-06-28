import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "lowest-startup-cost-fitness-businesses-2026",
  title: "Lowest Startup Cost Fitness Businesses",
  subtitle:
    "2026 capital requirements by fitness format — which gym and studio models require the least investment to launch, and where hidden buildout costs appear.",
  description:
    "Lowest startup cost fitness businesses in 2026: yoga and personal training studios ($80K–$350K), CrossFit affiliates, vs full-service gyms ($500K–$8M), franchise ranges, and capital efficiency rankings.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "5 min",
  href: "/industries/gym/reports/lowest-startup-cost-fitness-businesses-2026/",
  sources: [
    "IBISWorld — Gym, Health & Fitness Clubs startup & capex ranges",
    "Franchise Disclosure Documents (Planet Fitness, Orangetheory, F45)",
    "BizMetricsHQ — gym startup cost composite",
    "SBA — small business fitness industry loan benchmarks",
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
          { label: "Lowest-Cost Format (typical)", value: "Yoga / PT Studio" },
          { label: "Boutique Studio Range", value: "$80K – $350K" },
          { label: "Mid-Tier Independent Gym", value: "$500K – $2M" },
          { label: "HVLP Franchise Unit", value: "$1.5M – $3M" },
        ],
      },
      {
        type: "paragraph",
        text: "**Lowest startup cost fitness businesses** are **small-footprint studios** — not full-service gyms. A yoga, Pilates, or personal-training studio can launch for **$80K–$350K** all-in (leasehold improvements, equipment, deposits, working capital), while a mid-tier independent gym runs **$500K–$2M** and an HVLP franchise unit **$1.5M–$3M**. Capital efficiency favors **specialized programming in <2,500 sq ft** over competing on equipment breadth.",
      },
      {
        type: "bullets",
        items: [
          "**Capital-efficient leaders:** Yoga studios, personal training studios, mobile/outdoor fitness, and micro-gyms (**2,500–4,000 sq ft**).",
          "**Capital-intensive formats:** Luxury lifestyle clubs, full-service independents, and HVLP franchises (volume requires large floor plates).",
          "**Hidden costs:** HVAC, flooring, soundproofing, locker rooms, and **3–6 months working capital** often add **20–30%** to initial budgets.",
        ],
      },
    ],
  },
  {
    id: "startup-cost-rankings",
    title: "2. Startup Cost Rankings by Format",
    blocks: [
      {
        type: "table",
        headers: ["Format", "Typical Startup Range", "Sq Ft", "Key Cost Drivers"],
        rows: [
          ["Personal Training Studio", "$80K – $200K", "800 – 1,500", "Minimal equipment, no locker rooms"],
          ["Yoga Studio", "$100K – $250K", "1,000 – 2,000", "Flooring, mirrors, HVAC, props"],
          ["Pilates Studio", "$150K – $350K", "1,200 – 2,500", "Reformers ($2K–$5K each), certification"],
          ["CrossFit Affiliate", "$150K – $400K", "3,000 – 5,000", "Rig, bumper plates, rubber flooring"],
          ["HIIT / Cycling Boutique", "$350K – $750K", "2,000 – 3,500", "Specialized equipment, AV, buildout"],
          ["Mid-Tier Independent Gym", "$500K – $2M", "8,000 – 15,000", "Cardio fleet, lockers, staffing"],
          ["HVLP Franchise", "$1.5M – $3M", "20,000+", "Franchise fee, equipment package, signage"],
          ["Luxury / Life Time Profile", "$15M – $40M+", "100,000+", "Pools, spa, F&B, land/build"],
        ],
      },
      {
        type: "paragraph",
        text: "**Studio vs. gym tradeoff:** Lower startup cost often means **lower revenue ceiling** — a yoga studio may cap at **$400K–$700K** annual revenue vs. **$1.2M+** for a healthy independent gym. **CrossFit affiliates** sit in the middle: moderate capital, strong community, **$300K–$600K** revenue at maturity in typical markets.",
      },
    ],
  },
  {
    id: "capital-breakdown",
    title: "3. Where the Capital Goes",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Lease & TI:** **$30–$80/sq ft** tenant improvements for studios; **$50–$120/sq ft** for full clubs. First/last/deposit often **3–6 months rent** upfront.",
          "**Equipment:** Cardio/strength floor **$200K–$400K**; reformer studio **$40K–$80K**; CrossFit rig **$15K–$40K**.",
          "**Franchise fees:** Planet Fitness **~$20K–$40K** initial + ongoing royalties; Orangetheory **~$50K+** franchise fee; F45 similar tier.",
          "**Working capital:** Budget **3–6 months** of operating expenses — payroll, rent, marketing — before breakeven. Undercapitalization is the **#1 studio failure mode**.",
          "**Permits & compliance:** ADA, fire, health dept (pools/spa), music licensing — often **$10K–$25K** overlooked in first budgets.",
        ],
      },
    ],
  },
  {
    id: "actionable-insights",
    title: "4. Actionable Insights for New Operators",
    blocks: [
      {
        type: "paragraph",
        text: "Choose format based on **available capital + local competition**, not aspiration alone. If capital is **<$300K**, start with **PT, yoga, or Pilates** — validate demand before scaling to full gym. If capital is **>$1M**, compare **franchise FDD unit economics** vs. independent brand build.",
      },
      {
        type: "bullets",
        items: [
          "**Rule of thumb:** Total startup should support **12 months to breakeven** without additional equity injection.",
          "**Compare formats:** [Fitness economics dashboard](/industries/gym/#fitness-dashboard) on the gym hub.",
          "**Read next:** [Highest Margin Fitness Businesses](/industries/gym/reports/highest-margin-fitness-businesses-2026/) — capital efficiency vs. profitability tradeoffs.",
        ],
      },
    ],
  },
];
