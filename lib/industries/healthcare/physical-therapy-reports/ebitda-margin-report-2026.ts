import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "physical-therapy-clinic-ebitda-margin-2026",
  title: "What Is A Good PT EBITDA Margin?",
  subtitle:
    "2026 profitability analysis for US physical therapy clinics, including normalized EBITDA benchmarks, cost-structure diagnostics, and practical margin expansion priorities.",
  description:
    "Physical therapy clinic EBITDA benchmarks for 2026: healthy range 18-28%, median 23%, payroll and rent ratio guidance, and investor-ready operating insights.",
  published: "June 2026",
  dataVintage: "2025-2026",
  readTime: "7 min",
  href: "/industries/healthcare/physical-therapy-clinic/reports/physical-therapy-clinic-ebitda-margin-2026/",
  sources: [
    "APTA - 2026 Private Practice Cost and Revenue Indicators",
    "IBISWorld - Physical Therapists in the US (2026)",
    "BLS - Occupational Employment and Wage Statistics: Physical Therapists",
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
          { label: "Healthy PT EBITDA Margin", value: "18 - 28%" },
          { label: "Median PT EBITDA Margin", value: "23%" },
          { label: "Therapist Payroll Benchmark", value: "28 - 36% of revenue" },
          { label: "Rent Benchmark", value: "7 - 11% of revenue" },
        ],
      },
      {
        type: "paragraph",
        text: "A **good PT clinic EBITDA margin** in 2026 is **18-28%**, with a panel median of **23%** after normalizing owner compensation and one-time add-backs. Clinics in the top quartile generally pair strong therapist utilization with disciplined front-office staffing, while low-margin clinics often carry avoidable schedule gaps and overhead creep.",
      },
      {
        type: "bullets",
        items: [
          "**Normalized EBITDA is the operating truth:** owner salary treatment can shift headline margin by **3-7 points** across otherwise similar clinics.",
          "**Payroll and occupancy are the two largest controllable levers:** therapist payroll above the benchmark range and rent above **11%** quickly compress free cash flow.",
          "**Institutional-quality PT assets** usually sustain **22%+ EBITDA** with stable referral channels and documented KPI cadence.",
          "In 2026, durable margin gains come from throughput design and payer discipline, not fee increases alone.",
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
        text: "The US physical therapy services market continues to expand in 2026 as musculoskeletal demand, post-surgical rehabilitation, and aging-population utilization remain strong. Even with favorable demand, profitability variance is wide because clinic economics are set by visit productivity and labor architecture, not volume alone.",
      },
      {
        type: "table",
        headers: ["Metric", "Bottom Quartile", "Median", "Top Quartile"],
        rows: [
          ["EBITDA Margin", "12 - 17%", "23%", "26 - 30%"],
          ["Therapist Payroll %", "36 - 42%", "31 - 34%", "28 - 31%"],
          ["Front Desk & Admin %", "11 - 15%", "8 - 11%", "6 - 9%"],
          ["Rent %", "10 - 14%", "8 - 10%", "7 - 9%"],
          ["Revenue per Therapist FTE", "$165K - $210K", "$230K - $275K", "$295K+"],
        ],
      },
      {
        type: "stats",
        items: [
          { label: "US PT Services Market (2026e)", value: "$49B+" },
          { label: "Estimated Market Growth", value: "4 - 6% YoY" },
          { label: "Target Margin for Acquirers", value: "20%+ EBITDA" },
          { label: "Typical Multi-Clinic Underwriting Focus", value: "Visit productivity consistency" },
        ],
      },
      {
        type: "paragraph",
        text: "Buyers and lenders in 2026 emphasize **durable EBITDA quality** over isolated growth spikes. Clinics with repeatable documentation, stable therapist retention, and payer-mix transparency receive stronger confidence than similar-revenue clinics with volatile labor patterns.",
      },
    ],
  },
  {
    id: "competitive-landscape",
    title: "3. Competitive Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "PT clinic margin performance is increasingly segmented by operating model. Independent owners can match network-level margins when they maintain referral stickiness and tight staffing controls, while multi-site operators benefit from shared admin and payer contracting leverage.",
      },
      {
        type: "bullets",
        items: [
          "**Independent single-site clinics** can produce premium EBITDA when therapist schedules are tightly managed and cancellation leakage is controlled.",
          "**Regional multi-site groups** often improve blended margin through centralized billing, recruiting, and front-office workflows.",
          "**Hospital-affiliated outpatient PT** typically shows lower site-level EBITDA due to enterprise overhead allocation and policy constraints.",
          "**PE-backed platforms** generally target high-teens to high-20s location EBITDA with standardized KPI reviews and playbook execution.",
          "Competitive differentiation in 2026 is based more on **operating repeatability** than headline visit growth.",
        ],
      },
      {
        type: "table",
        headers: ["Clinic Model", "Typical EBITDA", "Primary Margin Driver"],
        rows: [
          ["Independent single-site PT clinic", "18 - 28%", "Therapist utilization and schedule density"],
          ["Multi-site private group (2-8 clinics)", "20 - 29%", "Shared overhead and recruiting leverage"],
          ["Hospital-affiliated outpatient PT", "10 - 18%", "Referral scale with higher overhead load"],
          ["PE-backed regional platform", "19 - 27%", "Standardized staffing and payer discipline"],
          ["Cash-pay specialty PT model", "22 - 32%", "Higher yield per visit and lower authorization friction"],
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
        text: "Margin expansion in PT is primarily an execution outcome. Clinics that convert demand into high-quality visit throughput without proportionate overhead growth consistently outperform peers in 2026.",
      },
      {
        type: "bullets",
        items: [
          "**Aging and post-acute demand:** musculoskeletal and post-surgical volumes support stronger recurring treatment plans in most metro and suburban markets.",
          "**Digital intake and documentation tools:** cleaner workflows reduce non-billable therapist time and improve same-day schedule recovery.",
          "**Payer contract optimization:** annual review of fee schedules, authorization patterns, and denial rates protects contribution margin under wage inflation.",
          "**Specialty service mix:** vestibular, pelvic health, sports rehab, and cash-pay packages improve revenue per visit without requiring equivalent fixed-cost increases.",
          "**Referral-loop discipline:** physician, orthopedic, and direct-access channels with tracked conversion metrics reduce acquisition volatility.",
        ],
      },
      {
        type: "table",
        headers: ["Margin Lever", "Typical EBITDA Impact", "Time to Realize"],
        rows: [
          ["Therapist utilization uplift (+6 to +10 pts)", "+1.5 to +3.5 pts", "3-9 months"],
          ["Payroll redesign to benchmark band", "+1.0 to +2.8 pts", "3-6 months"],
          ["Rent/occupancy reset or relocation", "+0.8 to +2.0 pts", "6-18 months"],
          ["Payer mix and denial management", "+0.7 to +1.8 pts", "4-10 months"],
          ["Digital intake + documentation automation", "+0.5 to +1.4 pts", "2-8 months"],
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
        text: "Most PT margin underperformance in 2026 remains operational rather than demand-related. The largest risk factors are labor mix imbalance, occupancy cost pressure, and weak schedule governance.",
      },
      {
        type: "bullets",
        items: [
          "**Therapist payroll pressure:** sustained payroll above the **28-36%** benchmark usually indicates productivity leakage or over-hiring relative to demand.",
          "**Occupancy burden:** rent above **7-11%** of revenue reduces resilience during seasonal utilization dips.",
          "**Authorization and denial friction:** delays in plan approvals and avoidable denials can create hidden revenue leakage despite full schedules.",
          "**Cancellation/no-show drift:** weak reminder and rebooking systems lower visit density and erode therapist contribution margin.",
          "**KPI inconsistency:** clinics without weekly visibility into utilization, payroll ratio, and payer collection speed usually detect erosion too late.",
        ],
      },
      {
        type: "stats",
        items: [
          { label: "Healthy EBITDA Target", value: "18 - 28%" },
          { label: "Median Margin Reference", value: "23%" },
          { label: "Therapist Payroll Guardrail", value: "28 - 36% of revenue" },
          { label: "Rent Guardrail", value: "7 - 11% of revenue" },
        ],
      },
      {
        type: "paragraph",
        text: "**2026 benchmark lens:** clinics below **18% EBITDA** should first audit therapist productivity, payroll mix, and occupancy ratio before adding marketing or expansion spend.",
      },
    ],
  },
];
