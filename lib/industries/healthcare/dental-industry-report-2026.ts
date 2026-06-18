import type { ReportSection } from "@/lib/industries/reports/types";

export const reportMeta = {
  slug: "dental-practice-economics-2026",
  title: "U.S. Dental Practice Economic Report 2026",
  subtitle:
    "A comprehensive analysis of market size, the fiscal squeeze on practice margins, workforce constraints, strategic adaptation by solo practices and DSOs, and actionable recommendations for independent operators.",
  description:
    "2026 U.S. dental practice economic report: ~$166B–$183B market, ADA HPI fiscal squeeze, stagnant insurance reimbursements, 60% hygienist adequacy, 35% planning network exits, DSO consolidation, and AI-driven practice automation.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/reports/dental-practice-economics-2026/",
  sources: [
    "ADA Health Policy Institute — Q1 2026 State of the U.S. Dental Economy",
    "ADA Health Policy Institute — Economic Outlook & Emerging Issues in Dentistry (Q4 2025)",
    "ADA HPI — Dental Hygienist Shortage Analysis",
    "Mordor Intelligence — U.S. Dental Services Market (2026)",
    "IBISWorld — Dentists in the U.S. (NAICS 621210)",
    "BizMetricsHQ — Dental Practice Operator Panel (310+ practices)",
  ],
} as const;

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "U.S. Dental Services Market (2026 est.)", value: "~$166B–$183B" },
          { label: "Practices With Adequate Hygienists", value: "60%" },
          { label: "Dentists Planning Network Exits", value: "35%" },
          { label: "Equipment & Supply Cost Increase (2025)", value: "+5%" },
        ],
      },
      {
        type: "paragraph",
        text: "The U.S. dental services market is projected to reach approximately **$165.99 billion to $183 billion** in 2026, depending on market-definition scope ([Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/united-states-dental-services-market) estimates **$183B** at **5.05% CAGR** through 2031). Yet top-line growth masks a persistent **fiscal squeeze** documented by the [ADA Health Policy Institute (HPI)](https://www.ada.org/-/media/project/ada-organization/ada/ada-org/files/resources/research/hpi/state_us_dental_economy_q12026.pdf): practice expenses — staffing, supplies, and equipment — are rising faster than private insurance reimbursement rates. Consumer dental spending grew modestly (**~9%** since pre-pandemic baselines per HPI) while physician services rose **24%**, signaling demand exists but margin capture is eroding. In response, **35% of dentists** plan to drop at least one insurance network in 2026, DSO consolidation accelerates, and AI-driven diagnostics and automation are shifting from optional to strategic.",
      },
    ],
  },
  {
    id: "financial-pressures",
    title: "2. Key Financial Pressures",
    blocks: [
      {
        type: "paragraph",
        text: "The ADA HPI coined **\"fiscal squeeze\"** to describe the structural margin compression facing U.S. dental practices: **input costs rising faster than reimbursement**. Q1 2026 data confirm this trend is **continuing**, not reversing ([ADA HPI Q1 2026 Dental Economy](https://www.ada.org/-/media/project/ada-organization/ada/ada-org/files/resources/research/hpi/state_us_dental_economy_q12026.pdf)).",
      },
      {
        type: "table",
        headers: ["Pressure", "2025–2026 Data", "Source"],
        rows: [
          ["Equipment & supply costs", "+5% since start of 2025", "[ADA HPI / ADA News](https://adanews.ada.org/huddles/dental-fiscal-squeeze-continues-into-2026/)"],
          ["Per-dentist practice costs vs. 2015–2019", "+3% (costs) vs. −1.2% revenue", "[Practice by Numbers / ADA HPI](https://practicenumbers.com/blog/the-economic-squeeze-on-dental-practices/)"],
          ["Dental spending growth vs. physician services", "+9% vs. +24%", "[ADA HPI Q1 2026](https://www.ada.org/-/media/project/ada-organization/ada/ada-org/files/resources/research/hpi/state_us_dental_economy_q12026.pdf)"],
          ["Insurance reimbursement (real terms)", "Flat to declining after inflation", "[ADA HPI Q1 2026](https://www.ada.org/-/media/project/ada-organization/ada/ada-org/files/resources/research/hpi/state_us_dental_economy_q12026.pdf)"],
          ["Dentist confidence in U.S. economy (Q4 2025)", "~33%", "[ADA HPI Economic Outlook](https://adanews.ada.org/huddles/dental-fiscal-squeeze-continues-into-2026/)"],
        ],
      },
      {
        type: "paragraph",
        text: "**Rising overhead** is the primary independent-practice vulnerability. Payroll growth is **outpacing employment expansion** in dental offices — labor costs are absorbing a larger share of collections even as revenue per dentist plateaus ([VantaInsights NAICS 62121 analysis](https://vantainsights.com/reports/62121-offices-dentists)). Supplies face additional pressure from **tariff-related uncertainty** on imported dental materials, zirconia, and ceramic inputs (Mordor Intelligence notes **5–7% jumps** in select material categories in 2025–2026).",
      },
      {
        type: "bullets",
        items: [
          "**Stagnant private insurance reimbursements:** After inflation adjustment, PPO fee schedules are not keeping pace with chairside labor and supply costs. HPI Q1 2026 notes reimbursement rates increased slightly in February 2026 but remain **below the inflation rate of practice expenses** over the medium term.",
          "**Patient volume softness:** Approximately **one-third of dentists** report insufficient patient volume ([ADA News / Oral Health Group](https://www.oralhealthgroup.com/clinical/dental-industry-2/u-s-dental-practices-face-a-fiscal-squeeze-heading-into-2026-here-are-the-top-10-signals-1003993045/)) — unscheduled treatment plans, lapsed recall patients, and missed calls compound the squeeze.",
          "**Elevated cost of capital:** Higher interest rates increase financing costs for CBCT, CAD/CAM, practice acquisitions, and buildouts — compressing ROI on technology investments that are simultaneously necessary for competitiveness.",
          "**Insurance as top concern:** **55.3% of dentists** cite insurance issues (low reimbursement, denials, administrative burden) as a top challenge for 2026 ([Clerri / ADA HPI synthesis](https://clerri.com/blog/dso-growth-trends)).",
        ],
      },
    ],
  },
  {
    id: "workforce-challenges",
    title: "3. Workforce Challenges",
    blocks: [
      {
        type: "paragraph",
        text: "Staffing is tied with insurance as the **#1 challenge** for dentists heading into 2026 ([ADA HPI](https://www.ada.org/resources/research/health-policy-institute/dentist-workforce/dental-hygienist-shortage)). The hygienist shortage is the most acute constraint on practice capacity and production.",
      },
      {
        type: "stats",
        items: [
          { label: "Practices With Adequate Hygienists", value: "60.3%" },
          { label: "Recruiting Difficulty (Active Recruiters)", value: "91%" },
          { label: "Dentists Actively Recruiting Hygienists", value: "~40%" },
          { label: "Adequate Dental Assistants", value: "73.5%" },
        ],
      },
      {
        type: "paragraph",
        text: "Only **60.3% of dentists** report having an adequate number of dental hygienists on staff — meaning **nearly 40% operate below optimal hygiene capacity** ([ADA HPI Q1 2026](https://www.ada.org/-/media/project/ada-organization/ada/ada-org/files/resources/research/hpi/state_us_dental_economy_q12026.pdf)). Among dentists actively recruiting hygienists, **91%** rate the process as **very or extremely challenging** ([ADA HPI Hygienist Shortage page](https://www.ada.org/resources/research/health-policy-institute/dentist-workforce/dental-hygienist-shortage)). The top barrier: **not enough applicants (66.5%)**, followed by **demand for high wages and benefits (36.8%)** ([Becker's Dental Review](https://www.beckersdental.com/staffing-issues/the-biggest-challenges-in-dental-hygiene-recruiting/)).",
      },
      {
        type: "bullets",
        items: [
          "**Capacity impact:** Hygiene accounts for **25–35% of general practice production**. A single unfilled hygiene chair can reduce annual collections by **$150K–$250K** at a typical GP (BizMetricsHQ operator panel estimate, validated against ADA production benchmarks).",
          "**Fiscal squeeze ↔ staffing linkage:** HPI notes the fiscal squeeze limits practices' ability to offer competitive wages and benefits — average hourly wages for dental office staff are **unchanged in real terms** over the past 12 months once inflation is accounted for ([ADA HPI Q1 2026](https://www.ada.org/-/media/project/ada-organization/ada/ada-org/files/resources/research/hpi/state_us_dental_economy_q12026.pdf)).",
          "**Pipeline vs. retention:** The [ADHA (April 2026)](https://www.adha.org/wp-content/uploads/2026/04/PS_Updated_Dental_Hygiene_Workforce_Wolutions_2026-04-30.pdf) characterizes the issue as a **retention crisis** — record hygiene program enrollment is replacing exiting hygienists, not expanding net supply.",
          "**DSO vs. solo disparity:** DSO-affiliated dentists cite **staffing (59.3%)** as their top 2026 challenge vs. **insurance (55.2%)** for non-DSO dentists ([Oral Health Group / HPI](https://www.oralhealthgroup.com/clinical/dental-industry-2/u-s-dental-practices-face-a-fiscal-squeeze-heading-into-2026-here-are-the-top-10-signals-1003993045/)) — scale advantages in recruiting and benefits are widening the gap.",
        ],
      },
    ],
  },
  {
    id: "strategic-responses",
    title: "4. Strategic Responses",
    blocks: [
      {
        type: "paragraph",
        text: "Practices are responding to margin compression through **three parallel strategies**: renegotiating or exiting insurance contracts, expanding patient financing and membership models, and investing in technology that improves throughput and case acceptance.",
      },
      {
        type: "paragraph",
        text: "**4.1 Dropping Insurance Networks & Fee-for-Service Shift**",
      },
      {
        type: "bullets",
        items: [
          "**35% of dentists** plan to drop at least one insurance network in 2026 — **14.6% very likely**, **20.4% somewhat likely** ([Becker's Dental Review / ADA HPI Q4 2025](https://www.beckersdental.com/revenue-cycle-management/35-of-dentists-could-drop-insurers-in-2026-report/)). This follows **29% who dropped networks in 2025** ([Sunbit / ADA data](https://sunbit.com/knowledge-center/dental/what-moves-to-oon-ffs-mean-for-patient-financing/)).",
          "The transition is **phased, not abrupt** — most practices exit one low-reimbursement PPO at a time while building direct-pay and membership patient bases ([Pearly](https://www.pearly.co/dentistry-huddle/practices-drop-insurance-networks)).",
          "**DSO advantage:** Centralized payer contracting, revenue-cycle management, and membership plan infrastructure allow DSOs to absorb network exits with less patient attrition than solo practices.",
        ],
      },
      {
        type: "paragraph",
        text: "**4.2 Patient Financing & Membership Plans**",
      },
      {
        type: "bullets",
        items: [
          "As practices move out-of-network (OON) or fee-for-service (FFS), **third-party financing** (CareCredit, Sunbit, Cherry, Proceed Finance) becomes essential to maintain case acceptance when out-of-pocket costs rise ([Sunbit](https://sunbit.com/knowledge-center/dental/what-moves-to-oon-ffs-mean-for-patient-financing/)).",
          "**In-house membership plans** replace lost insurance affordability mechanisms — practices advertising membership plans report **higher patient retention** during OON transitions (Mordor Intelligence).",
          "Approximately **70% of U.S. adults** carry dental insurance; the remaining **30% uninsured** represent a prime membership-plan cohort ([Clerri / industry data](https://clerri.com/blog/dso-growth-trends)).",
        ],
      },
      {
        type: "paragraph",
        text: "**4.3 AI Diagnostics, Automation & DSO Consolidation**",
      },
      {
        type: "bullets",
        items: [
          "**AI-assisted diagnostics** are delivering measurable ROI: Heartland Dental reported **20%+ improvement in case acceptance** after implementing AI diagnostic tools; Pearl's Second Opinion AI documented **2× radiograph analysis throughput** ([Clerri DSO Trends 2026](https://clerri.com/blog/dso-growth-trends)).",
          "**Back-office automation:** AI payment posting and A/R workflows deliver **50%+ time savings**, redirecting staff to patient-facing production activities.",
          "**DSO consolidation:** Private-equity-backed DSO affiliation continues growing at **~4% annually** — scale advantages in procurement, marketing, technology, and staffing disproportionately benefit multi-site groups under fiscal squeeze conditions ([Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/united-states-dental-services-market)).",
          "Despite margin pressure, **~40% of dentists plan to add staff** and **~25% plan major equipment purchases** in 2026 — signaling investment in capacity and technology over retrenchment ([ADA News](https://adanews.ada.org/huddles/dental-fiscal-squeeze-continues-into-2026/)).",
        ],
      },
    ],
  },
  {
    id: "recommendations",
    title: "5. Actionable Recommendations",
    blocks: [
      {
        type: "paragraph",
        text: "Independent and group practices can improve 2026 profitability by treating the fiscal squeeze as a **structural operating challenge**, not a temporary cycle. The following recommendations are prioritized by impact and feasibility for owner-operators.",
      },
      {
        type: "bullets",
        items: [
          "**1. Audit payer mix profitability.** Calculate net reimbursement per procedure by PPO plan after write-offs, adjustments, and admin time. Exit the **bottom 1–2 networks** representing the lowest net margin — phased over 6–12 months with patient communication and membership plan alternatives.",
          "**2. Maximize hygiene chair utilization.** With only **60%** of practices adequately staffed, invest in hygienist retention (competitive total compensation, schedule flexibility, CE support) before expanding operatories. Each recovered hygiene day adds **$600–$900** in daily production at median rates.",
          "**3. Deploy patient financing at consultation.** Integrate third-party financing into treatment presentation workflows — practices moving OON/FFS without financing see **15–25% case acceptance declines** on plans exceeding $1,500 ([Sunbit](https://sunbit.com/knowledge-center/dental/what-moves-to-oon-ffs-mean-for-patient-financing/)).",
          "**4. Launch or expand membership plans.** Target uninsured patients and those losing in-network access. Membership plans provide **recurring revenue** and reduce insurance dependency — DSOs using centralized membership platforms report higher retention during network transitions.",
          "**5. Adopt AI diagnostics selectively.** Start with radiograph analysis and caries detection tools with documented case-acceptance lift. ROI threshold: if AI increases accepted treatment by **≥10%**, it pays for itself within **6–9 months** at a $1.8M collections practice.",
          "**6. Centralize supply-chain procurement.** Group purchasing or DSO-style vendor negotiations can reduce supply costs **3–8%** — directly offsetting the **+5%** supply inflation documented by ADA HPI.",
          "**7. Recover unscheduled treatment and lapsed recall.** HPI data show demand exists but is not fully captured. Automated recall, unscheduled-treatment campaigns, and after-hours call answering can recover **$100K–$300K** in annual production without new patient acquisition cost.",
          "**8. Benchmark EBITDA monthly.** Target **22–26% normalized EBITDA** for general dentistry (BizMetricsHQ panel median: **24%**). Practices below **18%** should prioritize overhead reduction before growth investment.",
        ],
      },
      {
        type: "paragraph",
        text: "**Outlook:** The U.S. dental economy remains structurally sound — aging demographics, expanding Medicaid/Medicare Advantage dental benefits, and steady consumer demand support **5%+ market CAGR** through 2031 ([Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/united-states-dental-services-market)). Profitability in 2026 accrues to practices that **control overhead, solve the hygiene bottleneck, reduce insurance dependency strategically, and invest in technology that converts demand into accepted treatment** — not those waiting for reimbursement rates to recover.",
      },
    ],
  },
] as const;

export const industryInsights = [
  {
    title: "U.S. Dental Practice Economic Outlook 2026",
    href: "/reports/dental-practice-economics-2026/#executive-summary",
    metric: "~$166B–$183B market",
  },
  {
    title: "The Fiscal Squeeze on Practice Margins",
    href: "/reports/dental-practice-economics-2026/#financial-pressures",
    metric: "Costs ↑ faster than reimbursement",
  },
  {
    title: "Hygienist Shortage & Capacity Impact",
    href: "/reports/dental-practice-economics-2026/#workforce-challenges",
    metric: "Only 60% adequately staffed",
  },
  {
    title: "Insurance Exits & DSO Adaptation",
    href: "/reports/dental-practice-economics-2026/#strategic-responses",
    metric: "35% plan network drops",
  },
  {
    title: "Profitability Recommendations",
    href: "/reports/dental-practice-economics-2026/#recommendations",
    metric: "8 strategic actions",
  },
] as const;
