import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { medicalSpaMarketAnchors, medicalSpaReportSources } from "./shared-medical-spa-market-data";

export const reportMeta: ReportMeta = {
  slug: "top-performing-medical-spa-kpis-2026",
  title: "Top Performing Medical Spa KPIs 2026",
  subtitle:
    "Benchmark KPIs that separate high-performing medical spas from average operators — revenue per provider, room utilization, membership penetration, and the metrics that drive 15–30% net margins.",
  description:
    "2026 medical spa KPI benchmarks: revenue per provider, treatment room utilization, membership revenue share, patient LTV, marketing ROI, and the operational metrics that separate top-quartile med spas.",
  published: "July 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/beauty/medical-spa/reports/top-performing-medical-spa-kpis-2026/",
  sources: medicalSpaReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Top-Quartile Net Margin", value: medicalSpaMarketAnchors.topQuartileNetMargin },
          { label: "Revenue per Provider", value: "$300K – $700K" },
          { label: "Patient LTV", value: medicalSpaMarketAnchors.patientLtv },
          { label: "Room Utilization Target", value: medicalSpaMarketAnchors.roomUtilizationTarget },
        ],
      },
      {
        type: "paragraph",
        text: "The gap between **average** and **top-performing** medical spas is not driven by location alone — it is driven by **operational discipline** on a handful of KPIs. High performers consistently hit **55–75% treatment room utilization**, **25–45% membership revenue**, and **$300K–$700K revenue per provider**. They track these metrics weekly and adjust staffing, marketing, and pricing before problems compound.",
      },
      {
        type: "bullets",
        items: [
          "**KPI thesis:** Med spa margin is a function of **utilization × ticket × retention** — track all three.",
          "**Benchmark context:** Median net margin is **15–30%**; top quartile reaches **28–35%** through KPI discipline.",
          "**Strategic takeaway:** Pick 5–7 KPIs, review them weekly, and tie incentives to the numbers that matter.",
        ],
      },
    ],
  },
  {
    id: "revenue-kpis",
    title: "2. Revenue & Productivity KPIs",
    blocks: [
      {
        type: "table",
        headers: ["KPI", "Average Med Spa", "Top Performer", "Why It Matters"],
        rows: [
          ["Annual Revenue", "$600K – $1.2M", "$1.5M – $2.5M+", "Scale drives device ROI and overhead leverage"],
          ["Revenue per Provider", "$300K – $450K", "$500K – $700K+", "Provider productivity is the core unit of production"],
          ["Average Treatment Value", "$250 – $400", "$450 – $600+", "Package mix and upsell discipline"],
          ["Injectables % of Revenue", "40 – 50%", "50 – 60%", "Highest-margin service line"],
          ["Membership % of Revenue", "15 – 25%", "35 – 45%", "Recurring revenue stabilizes cash flow"],
        ],
      },
      {
        type: "paragraph",
        text: "**Revenue per provider** is the single most important productivity metric. Top performers staff to maximize provider hours on high-margin injectables, not low-ticket facials. Use the [revenue per provider calculator](/calculators/medical-spa-revenue-per-provider/) to benchmark your practice.",
      },
    ],
  },
  {
    id: "utilization-kpis",
    title: "3. Utilization & Capacity KPIs",
    blocks: [
      {
        type: "table",
        headers: ["KPI", "Target Range", "Top Performer", "Action if Below Target"],
        rows: [
          ["Treatment Room Utilization", "55 – 75%", "70 – 85%", "Add marketing, extend hours, reduce no-shows"],
          ["Provider Billable Hours", "25 – 32 hrs/week", "32 – 38 hrs/week", "Optimize scheduling, reduce admin time"],
          ["Rebooking Rate", "55 – 72%", "70 – 80%+", "Enroll in membership, automate reminders"],
          ["No-Show Rate", "< 8%", "< 5%", "Deposits, confirmation texts, waitlists"],
          ["New Client Conversion", "40 – 55%", "55 – 70%", "Improve consult process, intro offers"],
        ],
      },
      {
        type: "paragraph",
        text: "Underutilized treatment rooms are the fastest way to destroy device ROI and compress margin. Track room utilization with the [treatment room utilization calculator](/calculators/medical-spa-treatment-room-utilization/) and set weekly targets by room and provider.",
      },
    ],
  },
  {
    id: "financial-kpis",
    title: "4. Financial & Margin KPIs",
    blocks: [
      {
        type: "table",
        headers: ["KPI", "Healthy Range", "Warning Sign"],
        rows: [
          ["Net Profit Margin", "15 – 30%", "Below 12%"],
          ["EBITDA Margin", "18 – 28%", "Below 15%"],
          ["Payroll % of Revenue", "30 – 40%", "Above 45%"],
          ["Injectable COGS %", "12 – 18%", "Above 22%"],
          ["Marketing ROI", "3× – 6×", "Below 2×"],
          ["Patient LTV", "$4K – $15K", "Below $3K"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Payroll discipline:** If payroll exceeds **40%**, audit provider productivity before cutting staff — often the fix is utilization, not headcount.",
          "**COGS control:** Negotiate injectable pricing with suppliers; bulk purchasing and loyalty programs reduce unit cost.",
          "**Marketing efficiency:** Track cost per lead and cost per new patient; pause channels below **2× ROI**.",
          "**LTV focus:** Increasing patient LTV through membership and rebooking matters more than one-time ticket size.",
        ],
      },
    ],
  },
  {
    id: "actionable-insights",
    title: "5. Actionable Insights for Operators",
    blocks: [
      {
        type: "paragraph",
        text: "Build a simple KPI dashboard with 5–7 metrics reviewed every Monday. Tie provider bonuses to revenue per provider and rebooking rate. Benchmark against these targets monthly and adjust before small gaps become structural problems.",
      },
      {
        type: "bullets",
        items: [
          "**Start here:** [Medical spa profit margin calculator](/calculators/medical-spa-profit-margin/) — model margin impact of KPI improvements.",
          "**Break-even check:** Use the [break-even calculator](/calculators/medical-spa-break-even/) to see how utilization changes affect profitability.",
          "**Full context:** [U.S. Medical Spa Industry Report 2026](/industries/beauty/medical-spa/reports/us-medical-spa-industry-report-2026/) for market backdrop behind these benchmarks.",
        ],
      },
    ],
  },
];
