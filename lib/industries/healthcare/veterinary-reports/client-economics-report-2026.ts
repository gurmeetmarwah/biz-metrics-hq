import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "veterinary-clinic-client-economics-2026",
  title: "How Many Clients Does A Vet Need?",
  subtitle:
    "2026 client economics analysis for US veterinary clinics covering active client benchmarks, acquisition pace, retention performance, and client lifetime value.",
  description:
    "Veterinary clinic client benchmarks for 2026: active client counts, new clients per month, retention rates, lifetime value, and annual revenue per client.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/healthcare/veterinary-clinic/reports/veterinary-clinic-client-economics-2026/",
  sources: [
    "AVMA Economic Division — Veterinary Practice Data",
    "AAHA Industry Insights — Companion Animal Trends",
    "BizMetricsHQ — 140+ veterinary clinic operator panel",
    "IBISWorld — Veterinary Services in the US",
    "Veterinary Management Groups — Revenue & Retention Benchmarks",
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
          { label: "Active Clients", value: "2,000 – 4,500" },
          { label: "New Clients / Month", value: "35 – 75" },
          { label: "Client Retention Rate", value: "68 – 82%" },
          { label: "Client Lifetime Value", value: "$1,500 – $4,200" },
        ],
      },
      {
        type: "paragraph",
        text: "A general companion-animal clinic in 2026 typically needs **2,000–4,500 active clients** to support stable doctor utilization, preventive care compliance, and predictable cash flow. Across BizMetricsHQ benchmarked operators, clinics adding **35–75 new clients per month** while retaining **68–82%** annually produce healthier growth than peers that rely on episodic urgent care volume.",
      },
      {
        type: "bullets",
        items: [
          "**Revenue per active client** averages **$350–$900/year** depending on wellness-plan penetration, diagnostics mix, and procedure complexity.",
          "**Break-even client base:** Single-location clinics with moderate staffing and facility overhead often require **~1,700–2,200 active clients** to consistently cover fixed costs.",
          "**Lifetime value leverage:** With **$1,500–$4,200 LTV**, improvements in retention and revisit cadence often outperform paid acquisition as the highest-ROI growth lever.",
          "**Care cadence matters:** Clinics with stronger preventive compliance convert more annual exams into dentistry, diagnostics, and chronic-care plans.",
        ],
      },
    ],
  },
  {
    id: "market-sizing",
    title: "2. Market Sizing",
    blocks: [
      {
        type: "paragraph",
        text: "The US veterinary services market continues to expand as pet ownership remains elevated and care expectations shift toward preventive, specialty, and chronic-condition management. Demand growth is strongest in suburban and high-income metro corridors where multi-pet households and insured pet populations are rising.",
      },
      {
        type: "table",
        headers: ["Client Metric", "Bottom Quartile", "Median", "Top Quartile"],
        rows: [
          ["Active Client Count", "1,700 – 2,200", "2,600 – 3,300", "3,900 – 4,800"],
          ["New Clients / Month", "22 – 34", "40 – 55", "65 – 85"],
          ["Annual Retention Rate", "60 – 68%", "72 – 78%", "80 – 86%"],
          ["Client Lifetime Value", "$1,200 – $1,900", "$2,100 – $3,000", "$3,500 – $4,800"],
          ["Revenue Per Client / Yr", "$280 – $380", "$450 – $650", "$800 – $1,050"],
        ],
      },
      {
        type: "stats",
        items: [
          { label: "Benchmark Active Clients", value: "2,000 – 4,500" },
          { label: "Benchmark New Clients / Month", value: "35 – 75" },
          { label: "Benchmark Retention", value: "68 – 82%" },
          { label: "Benchmark Revenue Per Client / Yr", value: "$350 – $900" },
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
        text: "Independent clinics compete with consolidators, urgent-care chains, and digitally enabled providers that increasingly differentiate through convenience, hours, and pricing transparency.",
      },
      {
        type: "bullets",
        items: [
          "**Corporate networks** use centralized marketing and procurement advantages to acquire clients faster in dense markets.",
          "**Urgent-care entrants** capture after-hours demand and can fragment continuity for primary-care clinics without extended schedules.",
          "**Digital-first booking and reminders** have become baseline expectations; clinics with weak online access experience higher inquiry drop-off.",
          "**Wellness memberships and bundled plans** create retention moats by improving visit adherence and price predictability.",
        ],
      },
    ],
  },
  {
    id: "growth-drivers",
    title: "4. Growth Drivers",
    blocks: [
      {
        type: "paragraph",
        text: "Sustainable client growth in 2026 is driven by better preventive-care compliance, improved access, and stronger continuity across primary and higher-acuity services.",
      },
      {
        type: "bullets",
        items: [
          "**Preventive plan adoption** increases annual exam and vaccine completion rates, raising revenue per client while smoothing seasonality.",
          "**Pet insurance expansion** supports higher diagnostic and treatment acceptance, improving both clinical outcomes and LTV.",
          "**Teletriage and digital communication** reduce no-shows and improve follow-up conversion after urgent or post-procedure episodes.",
          "**Cross-service integration** (dentistry, dermatology, chronic disease management) expands wallet share inside existing client panels.",
        ],
      },
    ],
  },
  {
    id: "operational-challenges",
    title: "5. Operational Challenges",
    blocks: [
      {
        type: "paragraph",
        text: "Even in strong demand environments, clinics face staffing constraints and throughput bottlenecks that limit their ability to convert demand into durable client growth.",
      },
      {
        type: "bullets",
        items: [
          "**Veterinarian and technician shortages** constrain appointment availability and reduce retention when wait times increase.",
          "**Rising labor and facility costs** compress margins for clinics with low revisit cadence or weak preventive-plan penetration.",
          "**Inconsistent reminder and recall workflows** contribute to missed wellness visits and lower annual retention.",
          "**Client price sensitivity** can reduce acceptance of diagnostics and elective procedures when value communication is weak.",
          "**Benchmark focus for 2026:** Clinics targeting **2,000–4,500 active clients**, **35–75 new clients/month**, **68–82% retention**, **$1,500–$4,200 LTV**, and **$350–$900 revenue per client/year** are best positioned for durable growth.",
        ],
      },
    ],
  },
];
