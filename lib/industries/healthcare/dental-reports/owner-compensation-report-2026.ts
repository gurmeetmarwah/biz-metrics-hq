import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "dental-practice-owner-compensation-2026",
  title: "How Much Do Dental Practice Owners Earn?",
  subtitle:
    "2026 compensation analysis for US dental practice owners — solo, partner, multi-location, and DSO economics with market context and pay benchmarks.",
  description:
    "Dental practice owner compensation benchmarks for 2026: solo owner $220K–$360K, partner and multi-location ranges, associate pay, and factors driving owner earnings.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/healthcare/dental-practice/reports/dental-practice-owner-compensation-2026/",
  sources: [
    "ADA Health Policy Institute — Dentist Income & Practice Survey",
    "BLS — Occupational Employment: Dentists, General",
    "BizMetricsHQ — 310+ dental practice operator panel",
    "ADS Dental Transitions — SDE & owner comp disclosures",
    "Dental Economics — Annual Practice Survey",
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
          { label: "Solo Owner Total Comp (median)", value: "$285K" },
          { label: "Typical Solo Range", value: "$220K – $360K" },
          { label: "Multi-Location Owner", value: "$450K – $750K+" },
          { label: "Associate Dentist (pre-buy-in)", value: "$120K – $180K" },
        ],
      },
      {
        type: "paragraph",
        text: "Dental practice owner compensation in 2026 reflects a **dual income structure**: clinical production (chairside dentistry) plus **profit distributions** from practice operations. BizMetricsHQ analysis of **310+ practices** shows solo general practice owners earn a median **$285K in total compensation** (salary + distributions), with a typical range of **$220K–$360K**. This significantly exceeds **associate dentist** pay ($120K–$180K) but requires **$1.2M–$2.6M** in collections and **24%+ EBITDA** to sustain at the upper end.",
      },
      {
        type: "bullets",
        items: [
          "**Owner pay is not salary alone** — it includes W-2 wages, S-corp distributions, and benefits; tax structure materially affects reported figures.",
          "**Partner owners** in 2–3 dentist groups earn **$280K–$420K** through combined production and profit share.",
          "**Multi-location owners** (3–8 offices) can earn **$450K–$750K+** but carry management overhead and acquisition debt.",
          "**DSO-affiliated owners** increasingly operate as **employed clinical directors** ($250K–$400K) or **minority equity partners** with upside tied to platform growth.",
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
        text: "The **US dental services market (~$178B, 2026)** supports approximately **200,000+ licensed dentists**, of whom **~72%** are in private practice (ADA HPI). Owner compensation correlates with **collections per doctor**, **EBITDA margin**, and **clinical days worked** — not years of experience alone.",
      },
      {
        type: "table",
        headers: ["Owner Profile", "Total Compensation", "Typical Collections", "EBITDA Margin"],
        rows: [
          ["Solo GP owner-operator", "$220K – $360K", "$800K – $1.8M", "22 – 28%"],
          ["Partner (2–3 dentist group)", "$280K – $420K", "$1.4M – $2.5M", "20 – 26%"],
          ["Multi-location owner (3–8 offices)", "$450K – $750K+", "$4M – $12M+", "18 – 24%"],
          ["DSO clinical director", "$250K – $400K", "$2M – $4M (location)", "20 – 25%"],
          ["Associate (pre-ownership)", "$120K – $180K", "$500K – $800K prod.", "N/A"],
        ],
      },
      {
        type: "stats",
        items: [
          { label: "ADA Median GP Owner Net Income (2024)", value: "~$246K" },
          { label: "BLS Median Dentist Salary (2025)", value: "$170K" },
          { label: "Specialist Owner Median", value: "$320K – $480K" },
          { label: "Owner Comp as % of Collections", value: "12 – 20%" },
        ],
      },
      {
        type: "paragraph",
        text: "Owner compensation typically represents **12–20% of collections** for general practitioners — higher for lean solo operators (**18–20%**) and lower for group practices reinvesting in growth (**12–15%**). **Fortune Business Insights** projects continued US market growth at **~3.1% CAGR**, supporting gradual compensation inflation of **2–4% annually** for productive owners.",
      },
    ],
  },
  {
    id: "competitive-landscape",
    title: "3. Competitive Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "The shift from **solo ownership** to **DSO employment** and **group partnership models** is reshaping how dentists earn — and what 'ownership' means in 2026.",
      },
      {
        type: "bullets",
        items: [
          "**Solo practice decline:** Solo practitioners fell from **~57%** of dentists in 2010 to **~48%** in 2025 (ADA HPI). New graduates increasingly choose associate or DSO paths over immediate ownership.",
          "**DSO compensation models:** Employed dentists earn **$150K–$220K base** plus production bonuses; clinical directors at **$250K–$400K**. Equity participation (minority stakes) is offered by **Heartland, PDS, and others** as a retention tool.",
          "**Partnership buy-in paths:** Associate-to-partner transitions typically require **$150K–$400K buy-in** over 3–5 years, with post-buy-in compensation rising to **$280K–$420K**.",
          "**Private equity consolidation:** **150+ DSO transactions (2023–2025)** have created a seller's market for retiring owners — exit proceeds often exceed **10–15 years** of clinical income in a single liquidity event.",
          "**Specialist premium:** Orthodontist and oral surgeon owners median **$320K–$480K** due to higher procedure fees and lower insurance dependency.",
        ],
      },
      {
        type: "table",
        headers: ["Career Path", "Year 5 Earnings", "Year 15 Earnings", "Wealth Creation"],
        rows: [
          ["Solo owner (start/buy practice)", "$220K – $280K", "$300K – $400K", "Practice equity + SDE"],
          ["Partner in group practice", "$200K – $260K", "$320K – $450K", "Equity buy-in appreciation"],
          ["DSO associate → director", "$160K – $200K", "$280K – $380K", "Limited equity upside"],
          ["Multi-location acquirer", "$350K – $500K", "$600K – $900K+", "Portfolio valuation"],
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
        text: "Owner earnings growth in 2026 is driven by the same macro forces expanding practice revenue — with compensation leverage highest for owners who combine **clinical production** with **business optimization**.",
      },
      {
        type: "bullets",
        items: [
          "**Aging population:** Higher-complexity procedures (implants, perio, dentures) increase **production per hour** — owners who chairside **$800–$1,200/hr** production earn **$100K+ more** than those at **$500–$600/hr**.",
          "**Cosmetic dentistry boom:** Owners offering in-house whitening, veneers, and aligner programs capture **$150K–$400K** incremental personal production without adding operatories.",
          "**AI-driven case acceptance:** Treatment presentation software and AI diagnostics lift owner production **10–20%** within 12 months — the highest-ROI earnings lever available.",
          "**Hygiene-driven passive production:** Well-managed hygiene departments generate **25–35%** of total collections; owners with strong hygiene recall earn more while chairing fewer hours.",
          "**Exit market premium:** With **3.8× median SDE multiples**, a practice generating **$450K SDE** is worth **~$1.7M** — creating a powerful wealth-creation incentive beyond annual compensation.",
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
        text: "Owner compensation is directly threatened by operational headwinds that erode the profit pool available for distribution — even when gross collections grow.",
      },
      {
        type: "bullets",
        items: [
          "**Labor costs consuming margin:** When clinical payroll exceeds **35% of collections**, owner distributions shrink disproportionately. Hiring an underproductive associate at **$180K** without **$700K+ production** can reduce owner take-home **$80K–$120K**.",
          "**Insurance reimbursement pressure:** Owners in PPO-heavy practices often **earn less than associates** in FFS practices despite higher gross collections — the 'owner's discount' on insurance write-downs.",
          "**Student debt burden:** Average dental school debt exceeds **$290K** (ADA), delaying ownership and compressing early-career cash flow. Income-driven repayment plans extend the associate phase to **5–8 years** post-graduation.",
          "**Rising overhead without production growth:** Owners who fail to increase production **3–5% annually** see real compensation decline as fixed costs (rent, software, supplies) inflate.",
          "**Burnout and clinical dependency:** Owners working **5+ clinical days/week** maximize short-term income but limit scalability; the **$450K–$750K multi-location** model requires transitioning to **2–3 clinical days** and management leverage.",
        ],
      },
      {
        type: "paragraph",
        text: "**2026 compensation benchmark:** Solo owners should target **≥$285K total comp** on **≥$1.6M collections** and **≥24% EBITDA**. Below **$220K** on **>$1.2M collections** signals a margin or payer-mix problem requiring immediate operational review.",
      },
    ],
  },
];
