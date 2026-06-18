import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "dental-practice-ebitda-margin-2026",
  title: "What Is a Good Dental EBITDA Margin?",
  subtitle:
    "2026 profitability analysis for US dental practices — EBITDA benchmarks, expense ratios, specialty variance, and margin improvement levers for owners and investors.",
  description:
    "Dental practice EBITDA margin benchmarks for 2026: healthy range 22–26%, expense breakdown, DSO vs private practice margins, and operational levers to improve profitability.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/healthcare/dental-practice/reports/dental-practice-ebitda-margin-2026/",
  sources: [
    "ADA Health Policy Institute — Practice Overhead Survey",
    "IBISWorld — Dentists in the US (2026)",
    "BizMetricsHQ — 310+ dental practice operator panel",
    "ADS Dental Transitions — SDE & EBITDA disclosures",
    "McKinsey — US Healthcare Services Productivity",
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
          { label: "Healthy GP EBITDA Margin", value: "22 – 26%" },
          { label: "Industry EBITDA Range", value: "18 – 30%" },
          { label: "Top-Quartile Practices", value: "28 – 30%" },
          { label: "Median Clinical Payroll", value: "28 – 35% of collections" },
        ],
      },
      {
        type: "paragraph",
        text: "A **good dental EBITDA margin** in 2026 is **22–26%** for a general practice — meaning the practice generates **$220K–$260K EBITDA per $1M in collections** before owner doctor compensation, debt service, and discretionary add-backs. BizMetricsHQ benchmarks from **310+ practices** show a full range of **18–30%**, with bottom-quartile offices below **18%** (often PPO-heavy, overstaffed, or under-producing per operatory) and top-quartile performers at **28–30%**.",
      },
      {
        type: "bullets",
        items: [
          "**EBITDA ≠ take-home pay.** Owner doctors typically draw **$220K–$360K** in compensation on top of or within EBITDA depending on accounting treatment.",
          "**Specialty practices** (ortho, OS, endo) often achieve **30–40%+ EBITDA** due to higher procedure value and lower hygiene dependency.",
          "**DSO-affiliated** practices target **20–25% EBITDA at the location level** — corporate overhead sits above practice EBITDA.",
          "Margin improvement of **3–5 percentage points** is achievable within **12–18 months** through hygiene optimization, supply consolidation, and payer mix shift.",
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
        text: "The **US dental services market (~$178B, 2026)** operates at the industry level with **~3.1% CAGR** (IBISWorld). At the practice level, profitability is far more dispersed: IBISWorld reports industry-wide profit margins of **~34–36%** at the **enterprise/revenue level** (before owner compensation normalization), while **normalized EBITDA** for independent general practices clusters at **22–26%** after adjusting for doctor pay.",
      },
      {
        type: "table",
        headers: ["Metric", "Bottom Quartile", "Median", "Top Quartile"],
        rows: [
          ["EBITDA Margin", "14 – 18%", "22 – 26%", "28 – 30%"],
          ["Clinical Payroll %", "35 – 40%", "28 – 32%", "24 – 28%"],
          ["Supply Cost %", "9 – 12%", "6 – 8%", "5 – 7%"],
          ["Admin / Overhead %", "12 – 16%", "8 – 12%", "6 – 9%"],
          ["Collections ($M)", "$1.2M", "$1.8M", "$2.6M+"],
        ],
      },
      {
        type: "paragraph",
        text: "**Net profit margin** (after all owner compensation) for owner-operators typically runs **14–24%**, with a median of **18%**. The gap between EBITDA and net reflects **owner doctor salary**, **associate compensation**, and **one-time expenses**. Investors evaluating acquisitions normalize to **SDE (Seller's Discretionary Earnings)** or **EBITDA with add-backs** — median **3.8× SDE** or **5.0× EBITDA** at transaction (see valuation report).",
      },
      {
        type: "stats",
        items: [
          { label: "Global Dental Market (2030 proj.)", value: "$432.5B" },
          { label: "Global CAGR (2024–2030)", value: "6.4%" },
          { label: "US Practice-Level EBITDA (median GP)", value: "~24%" },
          { label: "Implant/Perio Specialty EBITDA", value: "30 – 40%" },
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
        text: "Profitability dynamics differ materially between **private practices**, **DSO-affiliated offices**, and **specialty groups** — the competitive landscape is not monolithic.",
      },
      {
        type: "bullets",
        items: [
          "**Private solo/partnership practices** achieve the widest EBITDA variance (**14–30%**) depending on owner clinical hours, staffing model, and payer mix. Lean owner-operators who chairside **3–4 days/week** often hit **26–30%**.",
          "**DSO practices** operate on standardized expense ratios: corporate targets **20–25% location EBITDA** with centralized procurement (supply savings **2–4 pts**), shared services, and associate-heavy staffing models.",
          "**Multi-location private groups (2–5 offices)** can achieve **24–28% blended EBITDA** through shared admin and lab/supply purchasing — but management complexity adds **2–3 pts** overhead if not disciplined.",
          "**Specialty dominance:** Orthodontic practices median **32–38% EBITDA**; oral surgery **30–42%**; pediatric **20–26%** (higher volume, lower per-procedure margin).",
          "**Market share shift:** DSOs (~**27%** of dentists) compete on margin through scale, not price — independent practices must compete on **FFS mix**, **case acceptance**, and **operational efficiency**.",
        ],
      },
      {
        type: "table",
        headers: ["Practice Model", "Typical EBITDA", "Key Margin Driver"],
        rows: [
          ["Solo owner-operator GP", "24 – 30%", "Low admin overhead, owner production"],
          ["Multi-dentist GP group", "20 – 26%", "Associate productivity vs. payroll"],
          ["DSO-affiliated GP", "20 – 25%", "Centralized procurement & scheduling"],
          ["Orthodontics", "32 – 38%", "High case value, limited hygiene"],
          ["Oral Surgery", "30 – 42%", "Surgical fees, sedation premium"],
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
        text: "Margin expansion in 2026 is driven less by fee increases and more by **productivity technology**, **elective service mix**, and **demographic demand** that improves operatory yield.",
      },
      {
        type: "bullets",
        items: [
          "**Aging population & implant demand:** Adults 65+ represent the fastest-growing dental spend cohort. Implant and perio procedures carry **55–68% gross margins** — expanding surgical/implant lines adds **2–4 EBITDA points** without proportional overhead.",
          "**Cosmetic dentistry boom:** Whitening, veneers, and smile-design cases carry **60–75% gross margins**. Practices deriving **15%+ of production from elective cosmetic** median **26%+ EBITDA** vs. **20%** for PPO-dependent peers.",
          "**AI-driven clinical analytics:** AI-assisted radiograph review and automated perio charting reduce diagnostic time **15–20%** and improve treatment plan acceptance **8–15 pts** — a direct margin lever. CAD/CAM in-house milling saves **$150–$300/crown** in lab fees.",
          "**Membership plans:** In-house subscription plans for uninsured patients bypass PPO discounts, capturing **$350–$500/patient/year** at **70%+ gross margin**.",
          "**Group purchasing & supply tech:** DSO-style supply consolidation saves **1.5–3.0 pts** on supply costs; independents adopting GPO contracts close **half that gap**.",
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
        text: "Margin compression remains the primary financial risk for dental practice owners in 2026. Three cost categories — **labor**, **reimbursement**, and **overhead** — account for most EBITDA variance.",
      },
      {
        type: "bullets",
        items: [
          "**Labor/hygienist shortages:** Clinical payroll at **35%+ of collections** destroys margin. Hygienist wages rose **6–9% YoY** in 2025 (BLS). Each unfilled hygiene day costs **$800–$1,200** in lost production — a double hit to revenue and margin.",
          "**Insurance reimbursement erosion:** PPO-dominated practices (**>70%** insurance mix) struggle to break **20% EBITDA**. Delta, Cigna, and Aetna fee schedules in major metros reimburse at **55–75%** of office UCR. Dropping lowest-reimbursing plans can add **3–5 margin points** but requires **6–12 month** patient transition.",
          "**Rising overhead:** Rent escalations (**3–5% annually**), software subscriptions (**$800–$2,500/month** per location), and equipment leases compress margin **1–2 pts/year** without active management.",
          "**Associate productivity gap:** Associate dentists producing below **$700K/year** while earning **$150K–$180K** compress practice EBITDA **4–8 pts**. Production-based compensation (25–30% of collections) aligns incentives.",
          "**Supply chain & lab costs:** Offshore lab competition reduced crown fees but domestic quality labs still charge **$120–$180/unit**. In-house milling breaks even at **>8 crowns/month** per doctor.",
        ],
      },
      {
        type: "paragraph",
        text: "**Benchmark target for 2026:** General practices should aim for **≤32% clinical payroll**, **≤8% supplies**, **≤10% admin**, and **≥24% EBITDA**. Practices below **20% EBITDA** should audit payer mix, hygiene capacity, and owner vs. associate production split before pursuing growth investments.",
      },
    ],
  },
];
