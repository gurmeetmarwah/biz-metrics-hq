import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "physical-therapy-clinic-owner-compensation-2026",
  title: "How Much Do PT Clinic Owners Earn?",
  subtitle:
    "2026 compensation analysis for US physical therapy clinic owners across solo and multi-therapist models, including associate benchmarks and profit-distribution dynamics.",
  description:
    "Physical therapy clinic owner compensation benchmarks for 2026: solo owner $100K-$180K (median $165K), multi-therapist owner $140K-$240K, and associate PT pay ranges.",
  published: "June 2026",
  dataVintage: "2025-2026",
  readTime: "7 min",
  href: "/industries/healthcare/physical-therapy-clinic/reports/physical-therapy-clinic-owner-compensation-2026/",
  sources: [
    "APTA - Private Practice Compensation and Utilization Indicators",
    "BLS - Occupational Employment and Wage Statistics: Physical Therapists",
    "IBISWorld - Physical Therapists in the US (2026)",
    "BizMetricsHQ - 220+ physical therapy clinic operator panel",
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
          { label: "Solo Owner Range", value: "$100K - $180K" },
          { label: "Solo Owner Median", value: "$165K" },
          { label: "Multi-Therapist Owner Range", value: "$140K - $240K" },
          { label: "Associate PT Range", value: "$75K - $110K" },
        ],
      },
      {
        type: "paragraph",
        text: "PT clinic owner compensation in 2026 reflects a blended model of **clinical earnings plus operating distributions**. BizMetricsHQ panel benchmarks show solo owners in the **$100K-$180K** range with a median around **$165K**, while multi-therapist owners typically earn **$140K-$240K** as team productivity and location-level margin scale.",
      },
      {
        type: "bullets",
        items: [
          "**Owner pay is not just salary:** compensation usually combines W-2 wages, owner draws, and tax-structured distributions.",
          "**Scale matters:** owners with 3+ producing therapists often earn materially more than solo operators at similar personal caseload.",
          "**Associate-to-owner spread remains meaningful:** associate PT compensation of **$75K-$110K** reflects clinical output without equity exposure.",
          "Durable owner earnings in 2026 require balanced payroll ratios, stable payer collections, and schedule utilization discipline.",
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
        text: "The PT market in 2026 supports steady demand growth, but owner pay is still determined at the clinic level by therapist productivity, reimbursement quality, and labor mix control. Top-line growth alone rarely translates into stronger owner compensation when staffing and occupancy costs drift.",
      },
      {
        type: "table",
        headers: ["Owner Profile", "Total Compensation", "Typical Clinic Revenue", "Typical EBITDA"],
        rows: [
          ["Solo owner-operator", "$100K - $180K", "$450K - $1.0M", "16 - 25%"],
          ["Owner with 2-4 therapists", "$140K - $240K", "$900K - $2.2M", "18 - 28%"],
          ["Multi-site owner (2-6 clinics)", "$220K - $420K+", "$2.5M - $8.0M+", "18 - 27%"],
          ["Associate PT (non-owner)", "$75K - $110K", "N/A", "N/A"],
        ],
      },
      {
        type: "stats",
        items: [
          { label: "Solo Owner Median Compensation", value: "$165K" },
          { label: "Owner Compensation as % of Revenue", value: "10 - 18%" },
          { label: "Associate PT Compensation Range", value: "$75K - $110K" },
          { label: "Typical Payroll Share (all staff)", value: "42 - 56%" },
        ],
      },
      {
        type: "paragraph",
        text: "Owners who maintain healthy contribution margins and reinvest in therapist capacity tend to expand compensation faster than peers relying only on personal treatment volume. In underwriting, buyers increasingly evaluate **owner dependence risk** alongside absolute compensation.",
      },
    ],
  },
  {
    id: "competitive-landscape",
    title: "3. Competitive Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "Compensation structures are diverging across independent, platform-affiliated, and multi-site models. The central trade-off is between direct control and institutional support for staffing, contracting, and operations.",
      },
      {
        type: "bullets",
        items: [
          "**Independent solo ownership** offers maximum control but exposes owners to higher volatility in staffing and payer collections.",
          "**Multi-therapist independent models** create the strongest owner pay leverage when front-office and authorization workflows are standardized.",
          "**Platform-affiliated clinics** may provide steadier cash compensation for lead therapists but can cap near-term distribution upside.",
          "**Regional operators** increasingly tie lead-clinician pay to KPI scorecards including utilization, retention, and EBITDA targets.",
          "In 2026, competitive advantage in owner earnings comes from system quality, not just local demand strength.",
        ],
      },
      {
        type: "table",
        headers: ["Model", "Typical Owner/Lead Pay", "Risk Profile", "Upside Driver"],
        rows: [
          ["Independent solo PT clinic", "$100K - $180K", "Higher operating volatility", "Margin retention and local brand equity"],
          ["Independent multi-therapist clinic", "$140K - $240K", "Moderate volatility", "Team productivity and shared overhead leverage"],
          ["Platform-affiliated clinic director", "$130K - $210K", "Lower volatility", "Bonus plans and possible equity participation"],
          ["Associate PT (non-owner)", "$75K - $110K", "Lowest business risk", "Clinical production incentives"],
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
        text: "Owner compensation growth in PT is strongest when operators build scalable workflows rather than increasing owner clinical load alone. The top performers in 2026 combine therapist productivity with payer and retention discipline.",
      },
      {
        type: "bullets",
        items: [
          "**Specialty program expansion:** pelvic health, vestibular, sports rehab, and performance services increase revenue per episode and reduce commodity pricing pressure.",
          "**Technology-enabled workflows:** digital intake, documentation, and patient communications free therapist time for billable care.",
          "**Referral and direct-access balance:** diversified acquisition channels reduce volatility from any single physician source.",
          "**Therapist retention systems:** lower turnover preserves capacity and protects owner distributions from recruitment disruption.",
          "**KPI-led management cadence:** weekly views on utilization, payroll ratio, cancellations, and net collection speed improve compensation predictability.",
        ],
      },
      {
        type: "table",
        headers: ["Compensation Lever", "Owner Pay Impact", "Time to Realize"],
        rows: [
          ["Therapist utilization improvement", "+$10K to +$35K annual owner pay", "3-9 months"],
          ["Payroll mix optimization", "+$8K to +$30K annual owner pay", "3-6 months"],
          ["Payer and denial process improvement", "+$6K to +$22K annual owner pay", "4-10 months"],
          ["Specialty service-line adoption", "+$12K to +$45K annual owner pay", "6-12 months"],
          ["Cancellation/no-show reduction", "+$5K to +$18K annual owner pay", "2-6 months"],
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
        text: "Owner compensation underperformance in 2026 is usually caused by execution gaps, not insufficient patient demand. The largest issues are payroll drag, occupancy friction, and inconsistent throughput governance.",
      },
      {
        type: "bullets",
        items: [
          "**Labor cost inflation:** rising therapist and support-staff pay can consume owner distribution unless visit density rises in parallel.",
          "**Owner dependence risk:** clinics that rely on owner treatment hours for profitability struggle to scale compensation sustainably.",
          "**Authorization friction:** delayed approvals and preventable denials reduce realized revenue and compress distributable cash.",
          "**Schedule leakage:** cancellations, no-shows, and poor recapture processes lower productivity despite apparent demand.",
          "**Overhead creep:** software, billing, and rent escalation can offset revenue growth when expense governance is weak.",
        ],
      },
      {
        type: "stats",
        items: [
          { label: "Solo Owner Benchmark", value: "$100K - $180K (median $165K)" },
          { label: "Multi-Therapist Owner Benchmark", value: "$140K - $240K" },
          { label: "Associate PT Benchmark", value: "$75K - $110K" },
          { label: "Compensation Review Trigger", value: "Owner pay below range on stable volume" },
        ],
      },
      {
        type: "paragraph",
        text: "**2026 benchmark lens:** solo owners below the **$100K-$180K** range or multi-therapist owners below **$140K-$240K** should first audit payroll mix, utilization, and payer realization before pursuing expansion.",
      },
    ],
  },
];
