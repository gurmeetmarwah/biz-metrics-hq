import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "dental-practice-revenue-2026",
  title: "How Much Revenue Does a Dental Practice Generate?",
  subtitle:
    "2026 analysis of US dental practice collections by practice type, size, operatory count, and payer mix — with market context for investors and operators.",
  description:
    "Dental practice revenue benchmarks for 2026: median $1.8M collections, revenue by specialty and size, operatory economics, and US dental services market sizing.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/healthcare/dental-practice/reports/dental-practice-revenue-2026/",
  sources: [
    "ADA Health Policy Institute — Economic Outlook & Practice Survey",
    "IBISWorld — Dentists in the US (2026)",
    "Fortune Business Insights — Dental Services Market",
    "BizMetricsHQ — 310+ dental practice operator panel",
    "ADS Dental Transitions — Practice transaction data",
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
          { label: "Median General Practice Collections", value: "$1.8M" },
          { label: "Typical Revenue Range (GP)", value: "$1.2M – $2.6M" },
          { label: "Revenue Per Operatory", value: "$350K – $550K/yr" },
          { label: "US Dental Services Market (2026)", value: "~$178B" },
        ],
      },
      {
        type: "paragraph",
        text: "US general dental practices generate the majority of their revenue from a hybrid of **fee-for-service (FFS)**, **PPO reimbursement**, and **hygiene recall production**. BizMetricsHQ analysis of **310+ practices** shows median annual collections of **$1.8M**, with bottom-quartile offices at **$1.2M** and top-quartile performers exceeding **$2.6M**. Revenue is primarily a function of **operatory utilization**, **case acceptance**, **hygiene recall volume**, and **payer mix** — not patient count alone.",
      },
      {
        type: "bullets",
        items: [
          "**Solo general practices** ($800K–$1.4M) under-index on operatory throughput; **multi-dentist groups** ($2.2M–$3.5M+) scale via extended hours and specialist referral capture.",
          "**Orthodontic and oral surgery** practices command the highest per-provider collections; **pediatric** practices trade volume for lower average production per visit.",
          "**DSO-affiliated** locations median **$2.5M–$4.5M** in collections through centralized scheduling, marketing, and payer contracting — but owner economics differ from private practice.",
          "The broader **US dental services market** reached approximately **$178B in 2026** (IBISWorld), growing at **~3.1% CAGR** — a stable, recession-resilient healthcare subsector.",
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
        text: "IBISWorld values the **US Dentists industry (NAICS 621210)** at approximately **$178.2B in 2026**, up from **$172.9B in 2024**, reflecting **~3.1% annual growth**. Fortune Business Insights projects the **global dental services market** to reach **$432.5B by 2030** at **6.4% CAGR**, with the US representing the largest single-country market at roughly **38–40% of global spend**.",
      },
      {
        type: "stats",
        items: [
          { label: "US Market (2026 est.)", value: "$178.2B" },
          { label: "5-Year US CAGR (2026–2031)", value: "3.1%" },
          { label: "Median GP EBITDA Margin", value: "22–26%" },
          { label: "Active US Dental Offices", value: "~150,000" },
        ],
      },
      {
        type: "table",
        headers: ["Practice Profile", "Annual Collections", "Revenue / Operatory"],
        rows: [
          ["Solo GP (1 dentist, 3–4 ops)", "$800K – $1.4M", "$270K – $400K"],
          ["Standard GP (1–2 dentists, 5 ops)", "$1.4M – $2.2M", "$350K – $480K"],
          ["Group GP (3+ dentists, 6–8 ops)", "$2.2M – $3.5M", "$400K – $550K"],
          ["Orthodontics", "$1.8M – $3.5M", "$500K – $700K"],
          ["Oral Surgery", "$2.0M – $4.0M", "$550K – $800K"],
          ["DSO-Affiliated GP", "$2.5M – $4.5M", "$420K – $580K"],
        ],
      },
      {
        type: "paragraph",
        text: "At the practice level, **EBITDA margins** for general dentistry typically range **18–30%**, with a healthy median of **24%** (see BizMetricsHQ profitability benchmarks). Revenue and margin are correlated but not linear — a **$2.2M practice** with poor overhead control can under-earn a **$1.6M** lean solo operation. **Collections efficiency** (production-to-collections ratio) averages **95–98%** for well-run offices; below **93%** signals AR aging or fee-schedule leakage.",
      },
    ],
  },
  {
    id: "competitive-landscape",
    title: "3. Competitive Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "The US dental market is undergoing a structural shift from **solo and small partnership models** toward **Dental Service Organizations (DSOs)** and **multi-location group practices**. ADA Health Policy Institute data indicates approximately **27% of US dentists** were affiliated with a DSO or large group as of 2025 — up from **~16% in 2015** — with growth concentrated in Sun Belt and suburban markets.",
      },
      {
        type: "stats",
        items: [
          { label: "DSO-Affiliated Dentists (2025)", value: "~27%" },
          { label: "Solo Practice Share (declining)", value: "~48%" },
          { label: "Top 10 DSOs — Estimated Locations", value: "3,500+" },
          { label: "Private Equity DSO Deals (2023–2025)", value: "150+" },
        ],
      },
      {
        type: "bullets",
        items: [
          "**Private practice** remains the majority model by count (~**72%** of offices) but represents a declining share of **new graduates** entering associate or DSO tracks.",
          "**Heartland Dental, Aspen Dental, Pacific Dental Services, and Smile Brands** lead consolidation; top 10 DSOs operate an estimated **3,500+ locations** combined.",
          "**DSO revenue advantage** stems from centralized payer negotiation, shared services (HR, marketing, procurement), and standardized clinical protocols — not higher fees per procedure.",
          "**Independent practices** compete on relationship continuity, local reputation, and clinical autonomy; they retain pricing power in affluent FFS-heavy markets.",
          "**Specialty practices** (ortho, perio, OS) remain less DSO-penetrated than general dentistry due to referral network dynamics and higher clinical complexity.",
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
        text: "Three macro forces are reshaping dental practice revenue in 2026: **demographic tailwinds**, **cosmetic and elective demand**, and **technology-enabled case acceptance**.",
      },
      {
        type: "bullets",
        items: [
          "**Aging population:** US adults **65+** will reach **~73M by 2030** (Census Bureau). This cohort carries higher per-capita dental utilization — implants, restorative, and periodontal care drive **+$180–$320** annual spend vs. working-age adults.",
          "**Cosmetic dentistry boom:** Teeth whitening, veneers, and clear-aligner adjacency (Invisalign, Spark) add **$15K–$80K/month** production in cosmetic-forward practices. Elective cosmetic now represents **12–18%** of production at top-quartile GPs vs. **5–8%** a decade ago.",
          "**AI-driven clinical analytics:** Chairside imaging AI (caries detection, perio charting), automated recall systems, and treatment-plan presentation tools lift case acceptance **8–15 percentage points** — directly translating to **$120K–$250K** incremental annual collections per operatory.",
          "**Medicaid expansion & adult dental benefits:** State-level adult Medicaid dental coverage expansions add volume in community health settings; reimbursement rates remain **40–60%** of UCR.",
          "**Clear aligner integration:** In-house aligner workflows capture ortho-adjacent revenue without full specialty conversion — **$3K–$6K** average case value.",
        ],
      },
      {
        type: "table",
        headers: ["Revenue Growth Lever", "Typical Impact", "Time to Realize"],
        rows: [
          ["Hygiene recall optimization (+5 pts retention)", "+$80K – $150K/yr", "6–12 months"],
          ["Case acceptance improvement (+10 pts)", "+$150K – $300K/yr", "3–9 months"],
          ["Extended hours / Saturday production", "+$100K – $200K/yr", "Immediate"],
          ["In-house membership plan (uninsured capture)", "+$60K – $120K/yr", "6–12 months"],
          ["Cosmetic service line expansion", "+$120K – $400K/yr", "12–18 months"],
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
        text: "Revenue growth is constrained by structural headwinds that compress production per visit and limit operatory throughput — even in growing markets.",
      },
      {
        type: "bullets",
        items: [
          "**Hygienist and assistant shortages:** Dental hygienist vacancy rates averaged **8–12%** nationally in 2025 (BLS/ADA). Unfilled hygiene chairs cost **$800–$1,200/day** in lost production; practices offering **$38–$48/hr** plus benefits outcompete in tight labor markets.",
          "**Insurance reimbursement pressure:** PPO fee schedules have eroded **8–15%** in real terms over the past decade. Practices with **>70% PPO mix** median **$1.5M** collections vs. **$2.1M** for FFS-heavy (>50%) peers at similar operatory counts.",
          "**Rising overhead:** Clinical supply costs rose **4–6% YoY** in 2025; technology (digital imaging, CAD/CAM, software) adds **$3K–$8K/month** at fully equipped offices. Rent runs **5–8%** of collections in urban markets.",
          "**Patient acquisition cost inflation:** Google Ads CPC for dental keywords reached **$8–$22** in major metros; cost per new patient acquired via digital marketing runs **$150–$350** — requiring **$2,500–$4,500** lifetime value to achieve positive ROI.",
          "**No-show and cancellation rates:** Industry average **8–12%** no-show rate destroys **$60K–$120K** annual production; automated reminder and waitlist systems recover **30–50%** of lost slots.",
        ],
      },
      {
        type: "paragraph",
        text: "**Investment implication:** Revenue optimization in 2026 prioritizes **operatory utilization**, **payer mix management**, and **hygiene capacity** over raw new-patient acquisition. Practices targeting **$2M+ collections** should benchmark at **$400K+ per operatory** and maintain **≥2.0 hygiene visits per active patient annually**.",
      },
    ],
  },
];
