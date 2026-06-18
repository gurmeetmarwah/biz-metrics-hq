import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "physical-therapy-clinic-therapist-productivity-2026",
  title: "How Many Visits Should A Therapist Handle?",
  subtitle:
    "2026 therapist productivity benchmarks for outpatient physical therapy clinics, including visits per day, utilization, revenue per therapist, and revenue per visit.",
  description:
    "Physical therapy therapist productivity benchmarks for 2026: 12-18 visits per day, 72-88% utilization, $350K-$550K revenue per therapist, and $90-$140 revenue per visit.",
  published: "June 2026",
  dataVintage: "2025-2026",
  readTime: "7 min",
  href: "/industries/healthcare/physical-therapy-clinic/reports/physical-therapy-clinic-therapist-productivity-2026/",
  sources: [
    "APTA outpatient operations and productivity studies",
    "CMS outpatient therapy utilization files",
    "Regional PT operator benchmarking groups",
    "BizMetricsHQ - 180+ physical therapy clinic operator panel",
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
          { label: "Visits Per Therapist Per Day", value: "12 - 18" },
          { label: "Schedule Utilization", value: "72 - 88%" },
          { label: "Revenue Per Therapist", value: "$350K - $550K" },
          { label: "Revenue Per Visit", value: "$90 - $140" },
        ],
      },
      {
        type: "paragraph",
        text: "In 2026, high-performing outpatient PT clinics convert capacity into predictable visit throughput rather than simply extending therapist hours. Across independent operators, a practical benchmark is **12-18 visits per therapist per day** at **72-88% utilization**, generating **$350K-$550K revenue per therapist** and **$90-$140 revenue per visit** depending on payer mix and case complexity.",
      },
      {
        type: "bullets",
        items: [
          "**Visits/day is the primary throughput lever:** lower than 12 often indicates scheduling leakage, while sustained levels above 18 can pressure quality and retention.",
          "**Utilization reveals capacity discipline:** the **72-88%** range balances therapist productivity with charting, eval transitions, and cancellations.",
          "**Revenue per therapist tracks clinic scalability:** the **$350K-$550K** band is a practical benchmark for owner and manager-led clinics.",
          "**Revenue per visit reflects mix quality:** clinics closer to **$140/visit** usually combine stronger commercial mix, specialty services, and documentation consistency.",
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
        text: "Therapist productivity is now central to PT unit economics as wage inflation and reimbursement pressure force operators to improve capacity yield. Buyer and lender diligence increasingly relies on therapist-level metrics rather than top-line growth alone.",
      },
      {
        type: "table",
        headers: ["Productivity Metric", "2026 Benchmark", "Operator Use Case"],
        rows: [
          ["Visits per therapist per day", "12 - 18", "Daily throughput and staffing plans"],
          ["Utilization rate", "72% - 88%", "Schedule quality and capacity planning"],
          ["Revenue per therapist", "$350K - $550K", "Hiring model and growth pacing"],
          ["Revenue per visit", "$90 - $140", "Payer mix and service-line pricing"],
        ],
      },
      {
        type: "stats",
        items: [
          { label: "Typical Active Caseload Per FTE Therapist", value: "120 - 240 patients" },
          { label: "Monthly New Patient Flow", value: "25 - 55 per therapist" },
          { label: "No-Show/Cancellation Target", value: "<10%" },
          { label: "Revisit Completion Target", value: ">80%" },
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
        text: "In local PT markets, competitive advantage increasingly comes from therapist productivity systems rather than rate increases alone. Clinics that maintain structured scheduling and low leakage capture stronger growth without overextending headcount.",
      },
      {
        type: "bullets",
        items: [
          "**Independent clinics:** compete on continuity and clinician brand, but often show wider productivity variance by therapist cohort.",
          "**Regional platforms:** use centralized scheduling, intake, and RCM systems to stabilize utilization across sites.",
          "**Hospital-affiliated outpatient centers:** benefit from referral depth but may run lower throughput due to process complexity.",
          "**Sports and specialty operators:** often command higher revenue per visit but require tighter case-mix and clinician specialization.",
          "**Employer and direct-access channels:** are growing as strategic referral diversifiers for clinics reducing physician dependency.",
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
        text: "Sustained productivity gains come from process and data discipline, not short-term scheduling intensity. Operators with consistent intake velocity and therapist-level KPI management outperform peers on both growth and margins.",
      },
      {
        type: "bullets",
        items: [
          "**Template-driven scheduling:** standardized therapist templates improve fill rates while protecting eval slots.",
          "**Front-desk conversion rigor:** faster benefit checks and follow-up workflows reduce first-visit drop-off.",
          "**Care-pathway design:** protocolized treatment plans improve completion rates and stabilize revisit volume.",
          "**Therapist coaching cadence:** weekly KPI review by cohort supports early intervention on utilization drift.",
          "**Payer and service mix optimization:** cash-pay offerings and specialty programs can lift revenue per visit above baseline ranges.",
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
        text: "Productivity targets are easy to miss when scheduling, documentation, and staffing systems are fragmented. In most clinics, preventable operational leakage drives more margin loss than reimbursement changes.",
      },
      {
        type: "bullets",
        items: [
          "**Scheduling leakage:** poor recall processes and delayed outreach reduce daily visits even when demand is present.",
          "**Documentation burden:** inconsistent note completion can cap therapist availability and delay claim submission.",
          "**Staffing mismatch:** weak PT-to-support ratios lower billable clinical time and depress utilization.",
          "**Payer authorization friction:** missed auth renewals interrupt care episodes and reduce revenue per therapist.",
          "**Quality risk at high loads:** pushing beyond sustainable visit volume can increase burnout and patient attrition.",
        ],
      },
      {
        type: "paragraph",
        text: "**Execution benchmark (2026):** clinics targeting durable profitability should keep productivity within **12-18 visits/day** and **72-88% utilization**, while monitoring both **$350K-$550K revenue per therapist** and **$90-$140 revenue per visit** at therapist and site levels.",
      },
    ],
  },
];
