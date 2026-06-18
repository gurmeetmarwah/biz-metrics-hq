import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "chiropractic-clinic-profit-margin-2026",
  title: "What Is A Good Chiropractic Profit Margin?",
  subtitle:
    "2026 profitability analysis for US chiropractic clinics, including net margin benchmarks, cost-structure diagnostics, cash-pay vs. insurance economics, and margin expansion priorities.",
  description:
    "Chiropractic clinic profit margin benchmarks for 2026: healthy range 25-35%, median 30%, payroll and marketing ratio guidance, and investor-ready operating insights.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/healthcare/chiropractic-clinic/reports/chiropractic-clinic-profit-margin-2026/",
  sources: [
    "ACA — Practice Analysis of Chiropractic (2025)",
    "IBISWorld — Chiropractors in the US (2026)",
    "IRS Statistics of Income — Schedule C (NAICS 621310)",
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
          { label: "Healthy Net Profit Margin", value: "25 – 35%" },
          { label: "Median Net Profit Margin", value: "30%" },
          { label: "Chiropractor Payroll Benchmark", value: "22 – 30% of revenue" },
          { label: "Marketing Benchmark", value: "5 – 10% of revenue" },
        ],
      },
      {
        type: "paragraph",
        text: "A **good chiropractic clinic net profit margin** in 2026 is **25–35%**, with a BizMetricsHQ panel median of **30%** after normalizing owner compensation and one-time add-backs. Cash-pay and membership-heavy clinics often exceed **32%**, while insurance-dependent practices frequently run **20–26%** due to billing overhead and payer write-offs.",
      },
      {
        type: "bullets",
        items: [
          "**Normalized margin is the operating truth:** owner DC salary treatment can shift headline margin by **4–8 points** across otherwise similar clinics.",
          "**Payroll and marketing are the two largest controllable levers:** chiropractor payroll above **30%** and marketing above **12%** without proportional new-patient yield compresses free cash flow.",
          "**Cash-pay clinics** typically outperform insurance-heavy clinics by **5–10 margin points** at comparable revenue.",
          "In 2026, durable margin gains come from membership penetration and visit throughput — not fee increases alone.",
        ],
      },
    ],
  },
  {
    id: "margin-benchmarks",
    title: "2. Margin Benchmarks by Practice Type",
    blocks: [
      {
        type: "table",
        headers: ["Practice Type", "Net Margin Range", "Median", "Key Driver"],
        rows: [
          ["Solo cash-pay DC", "28 – 38%", "32%", "Lean overhead, owner production"],
          ["Multi-doctor independent", "24 – 32%", "28%", "Associate payroll + admin scale"],
          ["Franchise-affiliated unit", "22 – 30%", "26%", "Royalty fees + brand marketing"],
          ["Insurance-heavy clinic", "18 – 26%", "22%", "Billing overhead + denials"],
          ["Membership / wellness model", "30 – 38%", "34%", "Recurring revenue predictability"],
        ],
      },
      {
        type: "paragraph",
        text: "**Net Profit Margin = (Revenue − Operating Expenses) ÷ Revenue × 100.** Healthy independent clinics target **≥25%** after normalized owner compensation. Acquirers and lenders typically underwrite at **≥22%** normalized net margin for standalone clinics and **≥20%** for multi-location groups with documented management systems.",
      },
    ],
  },
  {
    id: "cost-structure",
    title: "3. Cost Structure Analysis",
    blocks: [
      {
        type: "table",
        headers: ["Expense Category", "Benchmark Range", "Margin Impact if Above Range"],
        rows: [
          ["Chiropractor Payroll", "22 – 30%", "−3 to −6 margin points"],
          ["Admin / Front Desk", "8 – 12%", "−2 to −4 margin points"],
          ["Marketing", "5 – 10%", "Acceptable if CAC payback < 6 months"],
          ["Facility Rent", "5 – 9%", "−2 to −5 margin points"],
          ["Technology / EMR", "2 – 4%", "Minimal if CRM drives retention"],
          ["Other Overhead", "12 – 20%", "Review billing, insurance, merchant fees"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Payroll discipline:** Owner-operators who also treat patients should separate clinical compensation from profit distributions for accurate margin benchmarking.",
          "**Marketing ROI:** Track cost per new patient and CAC payback monthly — marketing above **10%** of revenue is justified only when LTV:CAC exceeds **4:1**.",
          "**Rent optimization:** Suburban strip-mall locations at **5–7%** of revenue outperform urban medical-office leases at **9–12%**.",
        ],
      },
    ],
  },
  {
    id: "margin-drivers",
    title: "4. Key Margin Drivers & Restraints",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Membership Revenue % (Top Quartile)", value: "55 – 75%" },
          { label: "Visits Per Day Per DC (Top Quartile)", value: "28 – 35" },
          { label: "Insurance Denial Rate (Heavy Mix)", value: "8 – 18%" },
          { label: "Billing Staff Overhead (Insurance Mix)", value: "12 – 20%" },
        ],
      },
      {
        type: "bullets",
        items: [
          "**Positive drivers:** Membership recurring revenue, high visit throughput (25+ visits/day/DC), low cancellation rates, and point-of-service collections.",
          "**Negative pressures:** Insurance billing complexity, rising digital marketing costs, associate DC recruiting in competitive markets, and owner-dependent production without associate leverage.",
          "**Regional variation:** Suburban cash-pay markets in the Sun Belt and Mountain West typically show **2–4 points** higher margins than Northeast insurance-heavy markets.",
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
          "**Convert to membership pricing:** Target **45–70% recurring revenue** through monthly wellness plans to stabilize margin against visit volatility.",
          "**Benchmark expenses monthly:** Compare payroll, marketing, and rent ratios against the ranges in Section 3 — act when any category exceeds upper benchmark for two consecutive months.",
          "**Optimize payer mix:** Shift toward cash-pay packages where insurance reimbursement falls below **$45/adjustment** net of billing cost.",
          "**Improve DC throughput:** Template scheduling for **22–30 visits/day** per DC without sacrificing care quality — each incremental visit at **$65** adds **~$85K** annual revenue per DC.",
          "**Reduce billing overhead:** If insurance revenue is **<40%**, evaluate dropping low-yield payer contracts to eliminate dedicated billing staff cost.",
        ],
      },
      {
        type: "stats",
        items: [
          { label: "Target Margin for Solo Owner", value: "28 – 35%" },
          { label: "Target Margin for Multi-Doctor", value: "24 – 30%" },
          { label: "Margin Floor for Lender Underwriting", value: "20%+" },
          { label: "Top-Quartile Margin Threshold", value: "33%+" },
        ],
      },
    ],
  },
];
