import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "physical-therapy-clinic-valuation-2026",
  title: "What Is A PT Practice Worth?",
  subtitle:
    "2026 valuation benchmarks for outpatient physical therapy practices, including SDE, revenue, and EBITDA multiple ranges for owner-operator and scaled clinic models.",
  description:
    "Physical therapy clinic valuation benchmarks for 2026: SDE multiples of 2.5x-4.0x (median 3.2x), revenue multiples of 0.6x-1.0x, EBITDA ranges, and key value drivers.",
  published: "June 2026",
  dataVintage: "2025-2026",
  readTime: "7 min",
  href: "/industries/healthcare/physical-therapy-clinic/reports/physical-therapy-clinic-valuation-2026/",
  sources: [
    "APTA - Practice and Workforce Trends",
    "Private PT transaction market observations (2025-2026)",
    "BizBuySell outpatient rehab listing benchmarks",
    "BizMetricsHQ - 180+ physical therapy clinic operator panel",
    "Regional lower-middle-market healthcare M&A updates",
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
          { label: "SDE Multiple Range", value: "2.5x - 4.0x" },
          { label: "Median SDE Multiple", value: "3.2x" },
          { label: "Revenue Multiple Range", value: "0.6x - 1.0x" },
          { label: "EBITDA Multiple Range", value: "3.0x - 5.0x" },
        ],
      },
      {
        type: "paragraph",
        text: "In 2026, most outpatient PT acquisitions are still priced off normalized earnings durability rather than headline top line. Market-clearing values for independent clinics cluster around **2.5x-4.0x SDE**, with a **3.2x median** for stable owner-led practices. Revenue and EBITDA multiples remain useful triangulation tools, but realized valuation is primarily determined by therapist productivity, referral reliability, and payer-mix quality.",
      },
      {
        type: "bullets",
        items: [
          "**SDE is the primary method** for owner-operated single-site clinics where owner compensation is normalized into discretionary earnings.",
          "**Revenue multiples are directional only:** the **0.6x-1.0x** band can materially overvalue low-margin clinics and undervalue operationally efficient sites.",
          "**EBITDA multiples matter most for scale:** the **3.0x-5.0x** range is more common when leadership depth and reporting controls are established.",
          "**Transfer risk drives final pricing:** referral concentration, weak retention systems, and staffing dependence can pull deals toward low-end multiples.",
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
        text: "Physical therapy remains an active fragmented healthcare vertical in 2026, supported by aging demographics, musculoskeletal demand, and post-surgical rehab volume. Buyers continue to focus on cash-flow consistency, clinician capacity, and payer resilience as financing costs keep underwriting disciplined.",
      },
      {
        type: "table",
        headers: ["Valuation Method", "2026 Benchmark", "Best Applied To"],
        rows: [
          ["SDE multiple", "2.5x - 4.0x (median 3.2x)", "Owner-operated independent clinics"],
          ["Revenue multiple", "0.6x - 1.0x", "Quick market-screen comparisons"],
          ["EBITDA multiple", "3.0x - 5.0x", "Manager-led and multi-site operators"],
          ["Asset floor", "FF&E + working capital", "Low-profit or distressed scenarios"],
        ],
      },
      {
        type: "stats",
        items: [
          { label: "Typical PT Clinic Revenue", value: "$500K - $1.5M" },
          { label: "Typical SDE Margin", value: "16 - 30%" },
          { label: "Average Deal Process", value: "4 - 6 months" },
          { label: "Common Financing Stack", value: "SBA + buyer cash + seller note" },
        ],
      },
    ],
  },
  {
    id: "competitive-landscape",
    title: "3. Competitive Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "The 2026 PT buyer field includes clinician acquirers, regional rehab groups, and private-capital-backed platforms. Competitive intensity is highest for clinics with repeatable referral pipelines, strong documentation quality, and sustainable therapist throughput.",
      },
      {
        type: "bullets",
        items: [
          "**Clinician buyers:** generally transact near mid-range SDE multiples with leverage constrained by debt-service coverage.",
          "**Regional operators:** pay stronger prices for clinics that can be integrated quickly into centralized billing and credentialing workflows.",
          "**Platform buyers:** prioritize leadership redundancy, quality-of-earnings cleanliness, and de novo cluster fit.",
          "**Market variance persists:** growth metros with referral density and labor availability clear above slower-growth local markets.",
          "**Staffing stability is a bid differentiator:** predictable hiring and therapist retention supports more aggressive offers.",
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
        text: "Valuation premiums are earned by clinics that convert demand into repeatable, compliant, and margin-protected throughput. Buyers reward visibility into referral durability and therapist-level production efficiency.",
      },
      {
        type: "bullets",
        items: [
          "**Productivity discipline:** sustained visit volume per therapist with strong cancellation control expands discretionary earnings.",
          "**Referral diversification:** lower dependence on any single surgeon group or payer supports higher confidence in post-close performance.",
          "**Digital revenue-cycle strength:** tighter authorization workflows and denial management increase realized collections.",
          "**Service-line depth:** sports rehab, post-op pathways, and cash-pay programs can raise revenue per therapist and per visit.",
          "**Management infrastructure:** consistent KPI reporting improves buyer confidence and reduces diligence discounting.",
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
        text: "Most valuation leakage in PT deals stems from execution risk rather than category demand. Multiples compress quickly when buyers identify concentration, compliance, or staffing fragility.",
      },
      {
        type: "bullets",
        items: [
          "**Therapist concentration risk:** overreliance on one high-producing clinician increases post-close attrition risk.",
          "**Referral concentration:** dependence on a narrow physician base can reduce confidence in forward revenue durability.",
          "**Payer-mix pressure:** heavy low-reimbursement exposure weakens margin stability and leverage capacity.",
          "**Documentation and billing gaps:** coding leakage and denial volatility undermine normalized earnings quality.",
          "**Facility and lease constraints:** short lease tails or capex needs can directly reduce achieved valuation.",
        ],
      },
      {
        type: "paragraph",
        text: "**Seller readiness benchmark (2026):** owners preparing for exit should normalize add-backs, diversify referral channels, and document therapist productivity by cohort. In the current **2.5x-4.0x SDE** framework, these steps can preserve value and improve buyer confidence.",
      },
    ],
  },
];
