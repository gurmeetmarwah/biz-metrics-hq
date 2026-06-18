import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "chiropractic-clinic-valuation-2026",
  title: "What Is A Chiropractic Practice Worth?",
  subtitle:
    "2026 valuation analysis for US chiropractic clinics — SDE multiples, revenue multiples, recurring revenue premiums, and transaction benchmarks for buyers, sellers, and advisors.",
  description:
    "Chiropractic clinic valuation benchmarks for 2026: SDE multiples 2.0×-3.5× (median 2.8×), revenue multiples 0.5×-0.9×, and factors that drive premium vs. discount pricing.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/industries/healthcare/chiropractic-clinic/reports/chiropractic-clinic-valuation-2026/",
  sources: [
    "BizBuySell — Chiropractic Practice Listings (2023–2026)",
    "ACA — Practice Analysis of Chiropractic (2025)",
    "SBA 7(a) Loan Performance — NAICS 621310",
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
          { label: "SDE Multiple Range", value: "2.0× – 3.5×" },
          { label: "Median SDE Multiple", value: "2.8×" },
          { label: "Revenue Multiple Range", value: "0.5× – 0.9×" },
          { label: "Typical $500K Clinic Value", value: "$580K – $812K" },
        ],
      },
      {
        type: "paragraph",
        text: "Chiropractic clinic valuations in 2026 are primarily driven by **SDE multiples** in the **2.0×–3.5×** range, with a median near **2.8×** for general outpatient practices. A **$500K revenue clinic** with **$290K SDE** typically values between **$580K and $1.02M** depending on recurring revenue quality, owner dependence, and growth trajectory.",
      },
      {
        type: "bullets",
        items: [
          "**SDE is the primary valuation method:** SDE = Net Profit + Owner DC Compensation + discretionary add-backs.",
          "**Recurring revenue commands premiums:** Clinics with **55%+ membership revenue** often trade at **3.0×–3.5× SDE** versus **2.0×–2.6×** for owner-dependent visit-only practices.",
          "**Multi-doctor clinics** with transferable systems attract PE and regional group buyers at the upper end of the multiple range.",
          "Transaction volume remains active as aging solo owners seek exit pathways.",
        ],
      },
    ],
  },
  {
    id: "valuation-methods",
    title: "2. Valuation Methods & Multiples",
    blocks: [
      {
        type: "table",
        headers: ["Method", "Formula / Range", "Best Use Case"],
        rows: [
          ["SDE Multiple", "SDE × 2.0 – 3.5×", "Solo and small multi-doctor clinics"],
          ["Revenue Multiple", "Revenue × 0.5 – 0.9×", "Secondary check, high-growth clinics"],
          ["Asset-Adjusted SDE", "SDE Value + Equipment × 0.3", "Equipment-heavy practices"],
          ["EBITDA Multiple", "EBITDA × 3.5 – 5.5×", "Multi-location platform buyers"],
        ],
      },
      {
        type: "paragraph",
        text: "**Illustrative valuation:** A clinic with **$500K revenue**, **$150K net profit**, **$140K owner compensation**, and **$70K equipment** yields estimated SDE of **$290K**. At **2.8× SDE**, enterprise value ≈ **$812K**. Asset-adjusted value adds **~$21K** for equipment. Value range using **2.0×–3.5×**: **$580K–$1.02M**.",
      },
    ],
  },
  {
    id: "value-drivers",
    title: "3. Factors That Drive Premium vs. Discount",
    blocks: [
      {
        type: "table",
        headers: ["Factor", "Premium (+0.3 – 0.8× SDE)", "Discount (−0.3 – 0.6× SDE)"],
        rows: [
          ["Recurring revenue %", "55%+ membership/wellness", "<30% visit-only"],
          ["Owner dependence", "Associate DCs producing 60%+", "Owner treats 80%+ of patients"],
          ["Patient retention", ">65% annual retention", "<50% retention"],
          ["Payer mix", "Cash-pay / membership dominant", "Heavy insurance with high A/R"],
          ["Growth trajectory", "3-year revenue CAGR >8%", "Flat or declining revenue"],
          ["Location / lease", "Favorable lease terms, 3+ years", "Month-to-month or relocation risk"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Premium clinics (3.0×–3.5× SDE):** Strong membership base, multi-DC production, documented systems, suburban growth market.",
          "**Discount clinics (2.0×–2.4× SDE):** Owner-dependent, declining patient count, insurance A/R issues, unfavorable lease.",
          "**Equipment value:** Treatment tables, decompression units, and X-ray equipment typically add **$20K–$80K** in asset-adjusted value.",
        ],
      },
    ],
  },
  {
    id: "transaction-landscape",
    title: "4. Transaction Landscape & Buyer Types",
    blocks: [
      {
        type: "table",
        headers: ["Buyer Type", "Typical Multiple", "Deal Structure"],
        rows: [
          ["Owner-operator (associate DC)", "2.2× – 3.0× SDE", "SBA 7(a) + seller note"],
          ["Regional multi-doctor group", "2.5× – 3.5× SDE", "Cash + earnout on retention"],
          ["PE-backed platform", "3.0× – 4.0× EBITDA", "Cash, rollover equity"],
          ["Franchise conversion", "1.8× – 2.5× SDE", "Asset purchase, limited goodwill"],
        ],
      },
      {
        type: "stats",
        items: [
          { label: "Median Days on Market (BizBuySell)", value: "120 – 210 days" },
          { label: "SBA 7(a) Approval Rate (NAICS 621310)", value: "~72 – 78%" },
          { label: "Typical Seller Financing", value: "10 – 20% of purchase price" },
          { label: "Due Diligence Period", value: "30 – 60 days" },
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
          "**For sellers (12–24 months pre-exit):** Build membership recurring revenue, add associate DC production, clean up A/R, and normalize owner compensation for SDE presentation.",
          "**For buyers:** Underwrite at **2.5×–3.0× SDE** for solo practices; pay up to **3.5×** only with verified recurring revenue and retention data.",
          "**Value enhancement playbook:** Each **10-point increase** in membership penetration typically adds **0.2–0.4×** to achievable SDE multiple.",
          "**Get a formal valuation** 18–24 months before planned exit to identify the highest-ROI improvements.",
          "**Track SDE monthly:** SDE = Net Profit + Owner Comp + Interest + Depreciation + One-Time Expenses — buyers will normalize these line items during diligence.",
        ],
      },
      {
        type: "stats",
        items: [
          { label: "Target SDE Multiple (Well-Run Solo)", value: "2.8× – 3.2×" },
          { label: "Target SDE Multiple (Multi-Doctor)", value: "3.0× – 3.8×" },
          { label: "Minimum SDE for SBA Acquisition", value: "$120K+" },
          { label: "Value Enhancement ROI Leader", value: "Membership conversion" },
        ],
      },
    ],
  },
];
