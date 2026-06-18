import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "chiropractic-clinic-owner-compensation-2026",
  title: "How Much Do Chiropractors Earn?",
  subtitle:
    "2026 compensation analysis for US chiropractic clinic owners across solo and multi-doctor models, including associate DC benchmarks and profit-distribution dynamics.",
  description:
    "Chiropractic clinic owner compensation benchmarks for 2026: solo owner $80K-$200K (median $140K), multi-doctor owner $140K-$350K, and associate DC pay ranges.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/healthcare/chiropractic-clinic/reports/chiropractic-clinic-owner-compensation-2026/",
  sources: [
    "ACA — Chiropractic Practice Analysis (2025)",
    "BLS — Occupational Employment and Wage Statistics: Chiropractors",
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
          { label: "Solo Owner Range", value: "$80K – $200K" },
          { label: "Solo Owner Median", value: "$140K" },
          { label: "Multi-Doctor Owner Range", value: "$140K – $350K+" },
          { label: "Associate DC Range", value: "$65K – $120K" },
        ],
      },
      {
        type: "paragraph",
        text: "Chiropractic clinic owner compensation in 2026 reflects a blended model of **clinical earnings plus operating distributions**. BizMetricsHQ panel benchmarks show solo owners in the **$80K–$200K** range with a median around **$140K**, while multi-doctor owners typically earn **$140K–$350K+** as team productivity and location-level margin scale.",
      },
      {
        type: "bullets",
        items: [
          "**Owner pay combines multiple streams:** W-2 wages, owner draws, S-corp distributions, and clinical production bonuses.",
          "**Scale matters:** owners with 2+ producing associate DCs often earn **$80K–$150K more** than solo operators at similar personal caseload.",
          "**Associate-to-owner spread:** associate DC compensation of **$65K–$120K** reflects clinical output without equity exposure.",
          "Durable owner earnings require balanced payroll ratios, membership recurring revenue, and marketing efficiency.",
        ],
      },
    ],
  },
  {
    id: "compensation-by-model",
    title: "2. Compensation by Operating Model",
    blocks: [
      {
        type: "table",
        headers: ["Owner Model", "Total Compensation", "Clinical %", "Management %"],
        rows: [
          ["Solo owner-operator", "$80K – $160K", "70 – 85%", "15 – 30%"],
          ["Solo + part-time associate", "$120K – $210K", "50 – 65%", "35 – 50%"],
          ["Lead multi-doctor owner (2–3 DCs)", "$140K – $280K", "30 – 50%", "50 – 70%"],
          ["Multi-location owner (3+ sites)", "$250K – $450K+", "10 – 25%", "75 – 90%"],
          ["Franchise owner (semi-absentee)", "$60K – $150K", "0 – 20%", "80 – 100%"],
        ],
      },
      {
        type: "paragraph",
        text: "**Total Owner Compensation = Clinical Wages + Owner Draw + S-Corp Distributions + Benefits.** Normalizing for owner DC clinical time is essential — a solo owner treating 30 patients/day may report lower \"salary\" but higher total distributions than a multi-doctor owner with minimal clinical hours.",
      },
    ],
  },
  {
    id: "associate-benchmarks",
    title: "3. Associate & Employee DC Benchmarks",
    blocks: [
      {
        type: "table",
        headers: ["Role", "Base Salary", "Production Bonus", "Total Comp Range"],
        rows: [
          ["New graduate associate", "$55K – $75K", "20 – 30% of collections above base", "$65K – $95K"],
          ["Experienced associate (3+ yrs)", "$70K – $90K", "25 – 35% above threshold", "$85K – $130K"],
          ["Senior associate / clinical director", "$85K – $110K", "Performance + retention bonus", "$110K – $160K"],
          ["Part-time / coverage DC", "$50 – $75/visit", "N/A", "$40K – $80K (pro-rated)"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Production-based models dominate:** Most associate contracts pay base salary plus **25–35%** of collections above a threshold ($250K–$350K annual).",
          "**Benefits add 8–15%:** Health insurance, CE reimbursement, and malpractice coverage increase total employment cost.",
          "**Buy-in pathways:** Some multi-doctor clinics offer equity buy-in at **2.0×–3.0× SDE** for senior associates transitioning to partnership.",
        ],
      },
    ],
  },
  {
    id: "compensation-drivers",
    title: "4. What Drives Owner Earnings",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Revenue Per DC (Owner Benchmark)", value: "$280K – $420K" },
          { label: "Net Margin Impact on Owner Pay", value: "Every 5 pts = ~$25K on $500K clinic" },
          { label: "Membership Revenue Premium", value: "+$30K – $60K owner comp at 60%+ recurring" },
          { label: "Geographic Premium (Top Markets)", value: "+15 – 25% vs. rural" },
        ],
      },
      {
        type: "bullets",
        items: [
          "**Revenue per DC:** Each incremental **$50K** in annual DC production at **30% margin** adds roughly **$15K** to owner distributable income.",
          "**Membership economics:** Owners with **55%+ recurring revenue** report **20–30% higher** total compensation than visit-only models at the same gross revenue.",
          "**Geographic factors:** Suburban Sun Belt and West Coast markets pay **15–25% premiums** over rural Midwest markets for both owners and associates.",
          "**Tax structure:** S-corp election saves **8–12%** on self-employment tax for owners with **$140K+** total compensation — a material earnings lever.",
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
          "**Separate clinical and management compensation:** Track owner DC production separately from management distributions for accurate benchmarking and tax planning.",
          "**Add associate capacity before second location:** A productive associate DC typically adds **$120K–$200K** owner distributable income versus **$80K–$120K** for a second site with management overhead.",
          "**Build membership before scaling:** Stabilize **45%+ recurring revenue** before hiring associates — predictable cash flow supports payroll commitments.",
          "**Plan S-corp structure early:** Consult CPA when owner total compensation approaches **$100K** to optimize tax efficiency.",
          "**Benchmark quarterly:** Compare your total owner compensation against the model table in Section 2 — if below median for your revenue tier, diagnose margin or throughput gaps.",
        ],
      },
    ],
  },
];
