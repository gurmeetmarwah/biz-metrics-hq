import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "dental-practice-valuation-2026",
  title: "What Is a Dental Practice Worth?",
  subtitle:
    "2026 dental practice valuation analysis — SDE and EBITDA multiples, transaction trends, associate buyouts, and factors driving practice sale prices in the US market.",
  description:
    "Dental practice valuation benchmarks for 2026: median 3.8x SDE, 4.0x–6.5x EBITDA, revenue multiples, and key value drivers for buyers and sellers.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/healthcare/dental-practice/reports/dental-practice-valuation-2026/",
  sources: [
    "ADS Dental Transitions — Annual Market Report",
    "BizBuySell — Dental Practice Listings Analysis",
    "ADA Health Policy Institute — Practice Transition Survey",
    "BizMetricsHQ — 310+ dental practice operator panel",
    "IBISWorld — Dentists in the US (2026)",
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
          { label: "Median SDE Multiple (GP)", value: "3.8×" },
          { label: "SDE Multiple Range", value: "3.2× – 4.5×" },
          { label: "EBITDA Multiple Range", value: "4.0× – 6.5×" },
          { label: "Example: $450K SDE Practice", value: "~$1.7M value" },
        ],
      },
      {
        type: "paragraph",
        text: "A typical US general dental practice in 2026 is worth **3.2×–4.5× SDE (Seller's Discretionary Earnings)**, with a **median of 3.8×**. For a practice generating **$1.8M in collections** and **$450K SDE**, that translates to an approximate value of **$1.4M–$2.0M**, with a midpoint near **$1.7M**. Valuation is driven by **profitability**, **payer mix**, **hygiene production**, **facility lease terms**, **geographic market**, and **transition risk** — not collections alone.",
      },
      {
        type: "bullets",
        items: [
          "**SDE** = Net income + owner doctor compensation + interest + depreciation + discretionary expenses. It is the standard metric for practices under **$3M** in collections.",
          "**EBITDA multiples (4.0×–6.5×)** apply to larger groups and DSO acquisitions where owner comp is normalized.",
          "**Revenue multiples (0.6×–1.0×)** are a secondary check — useful for rapid screening but unreliable without margin analysis.",
          "**Associate buyouts** typically price at **3.0×–3.8× SDE** with seller financing over **5–10 years**.",
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
        text: "The **US dental services market (~$178B, 2026)** supports an active **practice transaction market** estimated at **$4–$6B annually** in practice sales (ADS Dental Transitions). With **~150,000 dental offices** and **~3,000–4,000 annual transactions**, the median deal size is **$800K–$2.5M**. IBISWorld projects **3.1% industry CAGR**, supporting stable valuation multiples despite rising interest rates.",
      },
      {
        type: "table",
        headers: ["Valuation Method", "Multiple Range", "Best Applied To"],
        rows: [
          ["SDE Multiple", "3.2× – 4.5×", "Solo & small GP practices (<$3M revenue)"],
          ["EBITDA Multiple", "4.0× – 6.5×", "Multi-location groups, DSO acquisitions"],
          ["Revenue Multiple", "0.6× – 1.0×", "Screening only; margin-dependent"],
          ["Asset / Equipment", "Fair market value", "Distressed or startup practices"],
        ],
      },
      {
        type: "stats",
        items: [
          { label: "Annual US Practice Transactions", value: "3,000 – 4,000" },
          { label: "Median Transaction Price (GP)", value: "$1.2M – $1.8M" },
          { label: "Average Days on Market", value: "120 – 180" },
          { label: "DSO Acquisition Premium", value: "+0.3× – 0.8× SDE" },
        ],
      },
      {
        type: "paragraph",
        text: "**Average EBITDA margins** of **22–26%** underpin current multiples. Practices below **18% EBITDA** trade at **2.8×–3.2× SDE** or below; top-quartile practices with **>28% EBITDA**, strong hygiene programs, and **>50% FFS mix** command **4.0×–4.5× SDE**.",
      },
    ],
  },
  {
    id: "competitive-landscape",
    title: "3. Competitive Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "The dental practice **M&A market** is bifurcated between **individual buyers** (associates, partners) and **institutional buyers** (DSOs, PE-backed platforms) — with materially different valuation approaches and competitive dynamics.",
      },
      {
        type: "bullets",
        items: [
          "**DSO buyers** represent **~40–50%** of transactions by volume in 2025–2026, often paying **0.3×–0.8× SDE premium** over individual buyers for well-located, profitable offices.",
          "**Individual buyers** (associate buy-ins, partner expansions) dominate transactions under **$1.5M**, typically at **3.0×–3.8× SDE** with seller financing.",
          "**Private equity consolidation:** Top 10 DSOs operate **3,500+ locations**; PE dry powder continues to support acquisition activity despite **7–9% SBA loan rates**.",
          "**Seller demographics:** **~42%** of US dentists are age **55+** (ADA HPI), creating a **10-year wave** of retirement-driven supply — an estimated **20,000+ practices** will transition by 2035.",
          "**Competitive bidding** in desirable metros (Austin, Denver, Nashville, Phoenix) pushes multiples **0.5×–1.0× above** rural benchmarks.",
        ],
      },
      {
        type: "table",
        headers: ["Buyer Type", "Typical Multiple", "Deal Structure"],
        rows: [
          ["Associate buy-in", "3.0× – 3.8× SDE", "Seller note + SBA 7(a)"],
          ["Individual investor/dentist", "3.2× – 4.2× SDE", "SBA 7(a) + cash down 10–15%"],
          ["Regional DSO", "3.8× – 5.0× SDE", "Cash + earnout on production retention"],
          ["National PE-backed DSO", "4.5× – 6.5× EBITDA", "Cash + rollover equity"],
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
        text: "Valuation premiums in 2026 accrue to practices positioned at the intersection of **demographic demand**, **elective revenue mix**, and **technology-enabled scalability**.",
      },
      {
        type: "bullets",
        items: [
          "**Aging population & implant capacity:** Practices with established implant/perio programs trade at **+0.3×–0.5× SDE premium** due to recurring high-value procedure demand from the **65+ cohort**.",
          "**Cosmetic and elective mix:** Offices with **>15% cosmetic production** command higher multiples — buyers view elective revenue as **FFS-insulated** and margin-accretive.",
          "**AI and digital infrastructure:** Practices with digital workflows (CBCT, intraoral scanners, CAD/CAM, cloud PMS) reduce buyer capex risk and support **+0.2×–0.3×** valuation uplift.",
          "**Hygiene program strength:** Hygiene production **>30% of total collections** with **>80% recall rate** signals stable recurring revenue — a key due-diligence metric for DSO buyers.",
          "**Clear aligner & specialty adjacency:** In-house ortho/aligner capability adds **$200K–$500K** in transferable production value.",
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
        text: "Valuation discounts arise from operational and structural risks that buyers price aggressively — often reducing multiples by **0.5×–1.5× SDE**.",
      },
      {
        type: "bullets",
        items: [
          "**Owner dependency:** Practices where the owner produces **>60%** of total doctor production trade at **2.5×–3.2× SDE** — buyers discount for patient attrition risk post-transition.",
          "**PPO concentration:** Practices with **>75% PPO/insurance mix** face **0.3×–0.5× multiple discount** due to reimbursement uncertainty and fee-schedule renegotiation risk.",
          "**Lease and facility risk:** Short remaining lease terms (**<5 years**), unfavorable renewal clauses, or **>$35/sq ft** rent compress value **$100K–$300K**.",
          "**Staff retention risk:** Key hygienist or office manager departure post-sale can reduce collections **10–20%** in year one — buyers structure **earnouts** or **holdbacks (10–15%)** to mitigate.",
          "**Rising cost of capital:** SBA 7(a) rates at **7–9%** (2026) reduce buyer purchasing power; every **1% rate increase** lowers affordable purchase price **~8–10%** for leveraged buyers.",
        ],
      },
      {
        type: "paragraph",
        text: "**Valuation action plan:** Owners planning exit within **3–5 years** should target **≥24% EBITDA**, reduce owner production below **50% of total**, diversify payer mix toward **≥40% FFS**, and secure **≥10-year lease** with renewal options. These steps typically add **$200K–$500K** to exit value on a **$450K SDE** practice.",
      },
    ],
  },
];
