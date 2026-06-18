import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "veterinary-clinic-valuation-2026",
  title: "What Is A Veterinary Practice Worth?",
  subtitle:
    "2026 veterinary practice valuation benchmarks for US buyers and sellers, including SDE, EBITDA, and revenue multiple ranges across independent and scaled clinic models.",
  description:
    "Veterinary practice valuation benchmarks for 2026: SDE multiples of 2.8x-4.0x (median 3.4x), revenue multiples of 0.7x-1.1x, EBITDA ranges, and practical value drivers.",
  published: "June 2026",
  dataVintage: "2025-2026",
  readTime: "7 min",
  href: "/industries/healthcare/veterinary-clinic/reports/veterinary-clinic-valuation-2026/",
  sources: [
    "AVMA Practice Ownership and Economics Reports",
    "BizBuySell Veterinary Practice Sale Data",
    "VMG and regional veterinary M&A market updates",
    "BizMetricsHQ - 190+ veterinary clinic operator panel",
    "PitchBook - Animal health services deal activity",
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
          { label: "SDE Multiple Range", value: "2.8x - 4.0x" },
          { label: "Median SDE Multiple", value: "3.4x" },
          { label: "Revenue Multiple Range", value: "0.7x - 1.1x" },
          { label: "EBITDA Multiple Range", value: "3.5x - 5.5x" },
        ],
      },
      {
        type: "paragraph",
        text: "In 2026, most US veterinary practices transact on normalized cash-flow performance rather than headline revenue. Market-clearing values for owner-operated general practices are centered on **2.8x-4.0x SDE**, with a **3.4x median** in balanced demand markets. Revenue and EBITDA multiples provide useful triangulation, but buyers continue to underwrite primarily to earnings durability, doctor retention, and transferability of client relationships.",
      },
      {
        type: "bullets",
        items: [
          "**SDE remains primary for owner-led clinics:** best suited for single-site and small-group practices where owner compensation is normalized into discretionary earnings.",
          "**Revenue multiples are screening tools:** the **0.7x-1.1x** range can overstate value in low-margin clinics and understate value in high-throughput models.",
          "**EBITDA multiples capture scaled operations:** **3.5x-5.5x** is more common for multi-doctor and platform-ready clinics with professionalized management.",
          "**Transaction quality depends on transition risk:** dependence on one veterinarian, weak staffing depth, or short lease terms can materially reduce achieved price.",
        ],
      },
    ],
  },
  {
    id: "market-sizing",
    title: "2. Market Sizing & Financial Overview",
    blocks: [
      {
        type: "paragraph",
        text: "Veterinary services remain an active lower-middle-market healthcare category in 2026. Buyer demand from clinicians, regional consolidators, and PE-backed groups supports transaction volume, but tighter financing conditions have shifted diligence toward margin quality and post-close staffing stability.",
      },
      {
        type: "table",
        headers: ["Valuation Method", "2026 Benchmark", "Best Applied To"],
        rows: [
          ["SDE multiple", "2.8x - 4.0x (median 3.4x)", "Owner-operated single-site and small clinics"],
          ["Revenue multiple", "0.7x - 1.1x", "Early-stage screening and comp checks"],
          ["EBITDA multiple", "3.5x - 5.5x", "Multi-vet and manager-led operations"],
          ["Asset value floor", "Equipment + working capital", "Distressed or low-profit clinics"],
        ],
      },
      {
        type: "stats",
        items: [
          { label: "Typical GP Clinic Revenue", value: "$900K - $2.8M" },
          { label: "Typical SDE Margin", value: "14 - 24%" },
          { label: "Average Deal Process Length", value: "4 - 7 months" },
          { label: "Buyer Financing Mix", value: "SBA + cash + seller note" },
        ],
      },
      {
        type: "paragraph",
        text: "Practices at the high end of valuation ranges generally combine stable preventative-care volume, resilient pricing, and predictable doctor capacity. Clinics with volatile staffing or inconsistent doctor coverage often transact closer to low-end multiples even with similar annual revenue.",
      },
    ],
  },
  {
    id: "competitive-landscape",
    title: "3. Competitive Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "The 2026 buyer landscape is increasingly bifurcated between clinician-led acquirers and institutional capital. Competitive intensity is strongest for clinics with repeatable operations and low key-person risk.",
      },
      {
        type: "bullets",
        items: [
          "**Clinician buyers:** prioritize affordability and cash-flow coverage, often transacting near mid-range SDE multiples with conservative leverage.",
          "**Regional consolidators:** pay premiums for clinics that can be integrated quickly into centralized procurement and recruiting workflows.",
          "**PE-backed platforms:** focus on scale clusters and quality-of-earnings resilience, typically valuing leadership depth and doctor retention contracts.",
          "**Geographic divergence:** affluent suburban and high-growth Sun Belt markets continue to clear at stronger multiples than slower-growth rural markets.",
          "**Workforce scarcity remains a pricing variable:** clinics with durable recruiting pipelines and technician stability attract more competitive bids.",
        ],
      },
      {
        type: "table",
        headers: ["Buyer Type", "Typical Valuation Framing", "Common Structure"],
        rows: [
          ["Individual DVM buyer", "2.8x - 3.5x SDE", "SBA loan + seller note"],
          ["Regional veterinary group", "3.2x - 4.2x SDE", "Cash at close + earnout"],
          ["Institutional platform", "4.0x - 5.5x EBITDA", "Cash + rollover equity"],
          ["Internal associate succession", "2.8x - 3.6x SDE", "Phased buy-in over 3-7 years"],
        ],
      },
    ],
  },
  {
    id: "growth-drivers",
    title: "4. Key Growth Drivers & Trends",
    blocks: [
      {
        type: "paragraph",
        text: "Valuation premiums are being earned by practices that turn demand growth into repeatable earnings quality rather than one-time top-line spikes.",
      },
      {
        type: "bullets",
        items: [
          "**Preventative care memberships:** wellness-plan penetration improves retention and revenue visibility, supporting stronger forward cash-flow confidence.",
          "**Advanced service mix:** dentistry, surgery, and diagnostics increase average invoice value and widen discretionary earnings.",
          "**Digital operating infrastructure:** cloud PIMS, integrated payments, and analytics-led scheduling reduce transfer friction for incoming buyers.",
          "**Delegation efficiency:** higher technician utilization allows doctors to focus on billable medical decisions and maintain throughput consistency.",
          "**Commercial discipline:** recurring fee reviews and formulary management help protect gross margin amid pharma and supply inflation.",
        ],
      },
    ],
  },
  {
    id: "operational-challenges",
    title: "5. Major Operational Challenges",
    blocks: [
      {
        type: "paragraph",
        text: "Multiples compress quickly when buyers detect concentration risk or weak operating controls. In most deals, preventable execution issues reduce value more than market-level demand changes.",
      },
      {
        type: "bullets",
        items: [
          "**Owner concentration risk:** clinics where one doctor drives most production face transition discounts due to potential client leakage.",
          "**Staffing fragility:** high technician turnover or unresolved DVM vacancies can reduce realized purchase price or trigger deferred consideration.",
          "**Lease and facility constraints:** short lease tails, restrictive assignment clauses, or deferred capex needs directly affect buyer underwriting.",
          "**Margin opacity:** inconsistent charting of discretionary add-backs weakens confidence in reported SDE and lowers effective multiple.",
          "**Debt-cost pressure:** elevated borrowing costs reduce maximum leverage capacity for individual buyers, tightening headline valuation in mid-market deals.",
        ],
      },
      {
        type: "paragraph",
        text: "**Seller readiness benchmark (2026):** practices preparing for exit should normalize financials, formalize doctor retention plans, and secure lease continuity. These steps can preserve or add meaningful value within the **2.8x-4.0x SDE** framework by reducing buyer execution risk.",
      },
    ],
  },
];
