import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "dental-practice-patient-economics-2026",
  title: "How Many Patients Does a Dentist Need?",
  subtitle:
    "2026 patient economics analysis for US dental practices — active patient benchmarks, new patient flow, retention, lifetime value, and operatory utilization drivers.",
  description:
    "Dental practice patient benchmarks for 2026: 1,200–1,800 active patients for solo GPs, new patient flow, retention rates, patient lifetime value, and revenue per visit.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/healthcare/dental-practice/reports/dental-practice-patient-economics-2026/",
  sources: [
    "ADA Health Policy Institute — Patient Visit & Utilization Data",
    "National Association of Dental Plans — Coverage Statistics",
    "BizMetricsHQ — 310+ dental practice operator panel",
    "Dental Economics — Recall & Retention Survey",
    "Fortune Business Insights — Dental Services Market",
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
          { label: "Active Patients (Solo GP)", value: "1,200 – 1,800" },
          { label: "New Patients / Month", value: "25 – 45" },
          { label: "Patient Retention Rate", value: "72 – 85%" },
          { label: "Patient Lifetime Value", value: "$3,500 – $8,500" },
        ],
      },
      {
        type: "paragraph",
        text: "A solo general dentist in 2026 typically needs **1,200–1,800 active patients** to sustain **$1.2M–$1.8M** in annual collections — but patient count alone is an insufficient metric. **Active patients** (seen within the past **18–24 months**) who complete **≥1.8 visits per year** drive practice economics. BizMetricsHQ benchmarks show the median solo GP maintains **~1,500 active patients**, acquires **25–45 new patients per month**, and retains **72–85%** annually through hygiene recall programs.",
      },
      {
        type: "bullets",
        items: [
          "**Patients per day:** Solo GPs see **12–18 patients/day** across **3–4 clinical days/week**; hygiene accounts for **6–10** of those slots.",
          "**Revenue per visit** averages **$180–$320** (doctor) and **$120–$180** (hygiene) — blending to **~$800–$1,200 annual production per active patient**.",
          "**Patient lifetime value (LTV)** of **$3,500–$8,500** over **5–8 years** makes acquisition costs of **$150–$350/new patient** economically viable.",
          "**Break-even patient base:** A solo practice with **$80K/month overhead** needs **~900–1,100 active patients** at average production levels to cover fixed costs.",
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
        text: "The **US dental services market (~$178B, 2026)** serves approximately **260M+ Americans** with some form of dental utilization annually (ADA/NADP). Average per-capita dental spend is **~$685/year** (IBISWorld), but utilization is uneven — **~65%** of adults visited a dentist in the past year, while **~35%** remain unutilized or episodic.",
      },
      {
        type: "table",
        headers: ["Patient Metric", "Bottom Quartile", "Median", "Top Quartile"],
        rows: [
          ["Active Patient Count (Solo GP)", "900 – 1,100", "1,400 – 1,600", "1,800 – 2,200"],
          ["New Patients / Month", "15 – 22", "28 – 35", "40 – 55"],
          ["Annual Visits / Active Patient", "1.4 – 1.6", "1.8 – 2.1", "2.2 – 2.6"],
          ["Revenue Per Active Patient / Yr", "$650 – $800", "$900 – $1,100", "$1,200 – $1,500"],
          ["Patient Retention Rate", "65 – 72%", "75 – 82%", "83 – 90%"],
        ],
      },
      {
        type: "stats",
        items: [
          { label: "US Dental Market (2026)", value: "~$178B" },
          { label: "5-Year CAGR", value: "3.1%" },
          { label: "Adults with Annual Dental Visit", value: "~65%" },
          { label: "Avg Revenue Per Visit (Blended)", value: "$180 – $320" },
        ],
      },
      {
        type: "paragraph",
        text: "Patient economics directly determine **EBITDA margin** (median **22–26%**). Practices with **<1.4 visits/patient/year** underperform on hygiene-driven production and carry higher per-patient overhead. The **patient funnel** — new patient → treatment plan acceptance (**~85%** present plans) → production → collections (**95–98%**) → profit (**~24%**) — is the core operating model for dental practice financial performance.",
      },
    ],
  },
  {
    id: "competitive-landscape",
    title: "3. Competitive Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "Patient acquisition and retention are increasingly competitive as **DSOs**, **dental chains**, and **teledentistry platforms** invest heavily in marketing and convenience-driven access.",
      },
      {
        type: "bullets",
        items: [
          "**DSO patient acquisition advantage:** DSOs spend **$3K–$8K/month** per location on digital marketing, generating **40–60 new patients/month** in competitive metros — vs. **25–35** for independent practices.",
          "**Convenience competition:** Extended hours (evenings, Saturdays), same-day emergency slots, and online scheduling are table stakes; practices without digital booking lose **15–25%** of new patient inquiries.",
          "**Insurance network effects:** In-network status with major PPOs (Delta, Cigna, MetLife) drives **60–70%** of new patient volume in suburban markets; out-of-network practices must rely on **FFS and membership plans**.",
          "**Direct-to-consumer aligner competition:** SmileDirectClub's restructuring shifted some DTC volume, but Invisalign and byte still capture **episodic patients** who may not convert to comprehensive care.",
          "**Retail health convergence:** CVS, Walgreens, and supermarket clinic experiments have had limited dental impact but signal consumer demand for **accessible, transparently priced** care.",
        ],
      },
      {
        type: "table",
        headers: ["Competitor Type", "New Patients/Mo", "Retention Strategy", "LTV Impact"],
        rows: [
          ["Independent solo GP", "25 – 35", "Relationship + recall", "$3,500 – $6,000"],
          ["DSO-affiliated office", "40 – 60", "Centralized recall + marketing", "$2,800 – $5,000"],
          ["Cosmetic-focused GP", "20 – 30", "High-value elective cases", "$6,000 – $12,000"],
          ["Pediatric practice", "35 – 50", "Family conversion pipeline", "$4,000 – $8,000"],
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
        text: "Patient volume and value growth in 2026 is shaped by demographics, elective demand, and technology that improves both acquisition and retention.",
      },
      {
        type: "bullets",
        items: [
          "**Aging population:** The **65+ cohort** (projected **73M by 2030**) visits the dentist **1.3× more frequently** than working-age adults and accepts **2× more restorative treatment** per visit — expanding per-patient revenue without proportional acquisition cost.",
          "**Cosmetic dentistry boom:** Social media-driven aesthetic demand brings **younger, FFS-paying patients** with higher case values (**$3K–$15K** treatment plans) and strong referral behavior.",
          "**AI-driven recall & analytics:** Predictive recall systems identify overdue patients and prioritize outreach, recovering **15–25%** of lapsed patients. AI treatment planning improves case acceptance **8–15 pts**, increasing per-patient production.",
          "**Membership plans for uninsured:** **~80M Americans** lack dental insurance (NADP). In-house membership plans at **$300–$500/year** capture uninsured patients at **70%+ gross margin** with **85%+ renewal rates**.",
          "**Pediatric-to-adult conversion:** Pediatric practices that retain patients through adolescence create a **15–20 year LTV pipeline** — a structural advantage in family-dense suburbs.",
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
        text: "Maintaining an adequate and productive patient base is constrained by workforce shortages, insurance dynamics, and rising acquisition costs.",
      },
      {
        type: "bullets",
        items: [
          "**Hygienist shortages limiting recall capacity:** Hygiene accounts for **25–35%** of production and drives **80%+ of doctor diagnosis opportunities**. With **8–12%** hygienist vacancy rates, practices cannot service existing active patients — leading to **5–10 pt retention drops** and **$80K–$200K** revenue loss.",
          "**Insurance-driven patient churn:** PPO network changes and employer plan switches cause **8–15% annual patient attrition** in insurance-heavy practices — independent of clinical satisfaction.",
          "**Rising patient acquisition costs:** Digital marketing CPC for dental keywords (**$8–$22**) pushes cost-per-new-patient to **$150–$350**. Practices acquiring **<20 patients/month** below break-even LTV ratios destroy margin.",
          "**No-shows and broken appointments:** At **8–12%** no-show rates, a practice scheduling **30 patients/day** loses **2–4 slots daily** — equivalent to **$200K–$350K** annual production loss.",
          "**Case acceptance gaps:** Only **~72%** of presented treatment plans are accepted industry-wide. Closing the gap to **85%** on an **1,500-patient base** adds **$150K–$300K** annual production without a single new patient.",
        ],
      },
      {
        type: "paragraph",
        text: "**Patient base benchmark for 2026:** Solo GPs should maintain **≥1,400 active patients**, **≥30 new patients/month**, **≥1.8 visits/patient/year**, and **≥80% retention**. Multi-dentist practices scale linearly — a **2-dentist office** targets **2,400–3,200 active patients** with **50–70 new patients/month** across **5–6 operatories**.",
      },
    ],
  },
];
