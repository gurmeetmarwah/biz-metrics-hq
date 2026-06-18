import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "chiropractic-clinic-patient-economics-2026",
  title: "How Many Patients Does A Chiropractor Need?",
  subtitle:
    "2026 patient economics analysis for US chiropractic clinics — active patient benchmarks, visit frequency, lifetime value, acquisition costs, and break-even patient counts.",
  description:
    "Chiropractic clinic patient economics for 2026: 600-1,500 active patients typical, $600-$1,800 revenue per patient, LTV $1,000-$2,800, and break-even patient volume analysis.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/healthcare/chiropractic-clinic/reports/chiropractic-clinic-patient-economics-2026/",
  sources: [
    "ACA — Chiropractic Practice Analysis (2025)",
    "IBISWorld — Chiropractors in the US (2026)",
    "BizMetricsHQ — 160+ chiropractic clinic operator panel",
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
          { label: "Active Patients (Typical Clinic)", value: "600 – 1,500" },
          { label: "Median Active Patient Count", value: "950" },
          { label: "Revenue Per Active Patient", value: "$600 – $1,800/yr" },
          { label: "Patient Lifetime Value", value: "$1,000 – $2,800" },
        ],
      },
      {
        type: "paragraph",
        text: "Patient volume is the foundational unit of chiropractic clinic economics. A typical US chiropractic clinic maintains **600–1,500 active patients** (seen within the last 12 months), with a BizMetricsHQ panel median of **950**. At median clinic revenue of **$500K**, this implies roughly **$530 per active patient annually** — though membership-heavy clinics generate **$800–$1,800** per patient through higher visit frequency.",
      },
      {
        type: "bullets",
        items: [
          "**Active patient definition:** Any patient with at least one visit in the trailing 12 months.",
          "**Break-even threshold:** Most solo clinics need **380–650 active patients** to cover fixed overhead before owner profit.",
          "**Growth target:** Clinics targeting **$650K+ revenue** typically need **1,100–1,500 active patients** or higher per-patient revenue through membership plans.",
          "Patient economics drive marketing budget, staffing, and capacity planning decisions.",
        ],
      },
    ],
  },
  {
    id: "patient-benchmarks",
    title: "2. Patient Volume Benchmarks by Clinic Size",
    blocks: [
      {
        type: "table",
        headers: ["Clinic Profile", "Active Patients", "Annual Revenue", "Revenue / Patient"],
        rows: [
          ["Solo startup (Year 1–2)", "200 – 450", "$180K – $350K", "$400 – $780"],
          ["Established solo", "450 – 900", "$350K – $550K", "$600 – $900"],
          ["Mature solo / 2-DC", "800 – 1,200", "$500K – $750K", "$550 – $850"],
          ["Multi-doctor (3+ DCs)", "1,200 – 2,500", "$750K – $1.2M", "$500 – $700"],
          ["Membership-heavy clinic", "600 – 1,000", "$550K – $850K", "$800 – $1,800"],
        ],
      },
      {
        type: "paragraph",
        text: "**Revenue Per Active Patient = Annual Revenue ÷ Active Patients (12-month).** Membership and wellness-plan clinics achieve higher revenue per patient with fewer total patients by driving **16–28 visits per year** versus **10–16** in episodic care models.",
      },
    ],
  },
  {
    id: "visit-frequency-ltv",
    title: "3. Visit Frequency & Lifetime Value",
    blocks: [
      {
        type: "table",
        headers: ["Care Model", "Visits / Patient / Year", "Retention Years", "Patient LTV"],
        rows: [
          ["Episodic / pain relief", "8 – 14", "1.5 – 2.5", "$600 – $1,400"],
          ["Mixed care + maintenance", "12 – 20", "2.5 – 4", "$1,000 – $2,200"],
          ["Wellness membership", "16 – 28", "3 – 5", "$1,400 – $3,200"],
          ["Family plan (multi-member)", "20 – 36 (household)", "3 – 6", "$2,000 – $4,500"],
        ],
      },
      {
        type: "paragraph",
        text: "**Patient LTV = Annual Revenue Per Patient × Average Retention Years.** A clinic generating **$1,100/patient/year** with **4-year retention** yields **$4,400 LTV** — the benchmark for evaluating marketing acquisition cost efficiency.",
      },
      {
        type: "stats",
        items: [
          { label: "Healthy LTV:CAC Ratio", value: "4:1 or higher" },
          { label: "Typical Patient Acquisition Cost", value: "$40 – $120" },
          { label: "Target CAC Payback", value: "< 6 months" },
          { label: "New Patients Needed / Month (Growth)", value: "35 – 60" },
        ],
      },
    ],
  },
  {
    id: "break-even-analysis",
    title: "4. Break-Even Patient Analysis",
    blocks: [
      {
        type: "paragraph",
        text: "The minimum active patient count to break even depends on fixed costs, revenue per visit, visit frequency, and variable cost ratios. For a typical solo clinic with **$22K/month fixed costs**, **65% variable costs**, and **$65/visit** with **18 visits/patient/year**, break-even requires approximately **580–720 active patients** generating sufficient monthly visit volume.",
      },
      {
        type: "table",
        headers: ["Scenario", "Fixed Costs / Mo", "Rev / Visit", "Break-Even Active Patients"],
        rows: [
          ["Lean solo (low rent)", "$18K", "$60", "420 – 520"],
          ["Typical solo", "$22K", "$65", "580 – 720"],
          ["Premium suburban", "$28K", "$75", "620 – 780"],
          ["2-DC clinic", "$38K", "$65", "900 – 1,100"],
          ["Membership model (high LTV)", "$22K", "$85 effective", "380 – 480"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Break-Even Visits = Fixed Costs ÷ (Revenue/Visit × Contribution Margin %).**",
          "**Membership models lower break-even patient count** by increasing effective revenue per patient and visit frequency.",
          "**New patient flow requirement:** To maintain **950 active patients** with **20% annual attrition**, clinics need **~16 new patients/month** just to hold steady — growth requires **35–60+ new patients/month**.",
        ],
      },
    ],
  },
  {
    id: "strategic-recommendations",
    title: "5. Strategic Recommendations",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Track active patient count monthly** — it is the leading indicator of revenue 60–90 days forward.",
          "**Improve retention before acquisition:** Reducing attrition from **30% to 20%** is equivalent to adding **~8 new patients/month** without marketing spend.",
          "**Launch membership tiers** to increase revenue per patient from **$530 to $900+** — fewer total patients needed for the same revenue target.",
          "**Benchmark CAC and LTV quarterly:** Pause marketing channels with LTV:CAC below **3:1**; scale channels above **5:1**.",
          "**Capacity planning:** At **25 visits/day/DC** and **245 working days**, one DC maxes at **~900 unique patients** at **7 visits/patient/year** — plan associate hiring before hitting **80% capacity**.",
        ],
      },
      {
        type: "stats",
        items: [
          { label: "Target Active Patients (Solo $500K)", value: "850 – 1,000" },
          { label: "Target New Patients / Month (Growth)", value: "40 – 55" },
          { label: "Target Retention Rate", value: "65 – 75%" },
          { label: "Target LTV:CAC", value: "5:1+" },
        ],
      },
    ],
  },
];
