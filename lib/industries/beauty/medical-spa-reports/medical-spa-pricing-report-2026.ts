import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { medicalSpaMarketAnchors, medicalSpaReportSources } from "./shared-medical-spa-market-data";

export const reportMeta: ReportMeta = {
  slug: "medical-spa-pricing-report-2026",
  title: "Medical Spa Pricing Report 2026",
  subtitle:
    "Treatment pricing benchmarks for injectables, laser, body contouring, and medical-grade skincare — plus the pricing playbook that protects med spa margins in 2026.",
  description:
    "2026 medical spa pricing report: injectable, laser, and body contouring benchmarks; average treatment near $400; membership pricing strategies; and a playbook to protect med spa margins.",
  published: "July 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/beauty/medical-spa/reports/medical-spa-pricing-report-2026/",
  sources: medicalSpaReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Average Treatment Value", value: medicalSpaMarketAnchors.averageTreatment },
          { label: "Injectables Share", value: medicalSpaMarketAnchors.injectablesShare },
          { label: "Payroll % of Revenue", value: medicalSpaMarketAnchors.payrollShare },
          { label: "Membership Revenue Target", value: medicalSpaMarketAnchors.membershipShare },
        ],
      },
      {
        type: "paragraph",
        text: "Medical spa pricing in 2026 is defined by one imperative: **align price with clinical value and protect margin against rising injectable COGS**. With device leases, product costs, and clinical wages climbing — and payroll already at **30–40% of revenue** — med spas that hold prices flat are quietly eroding margin. The most successful operators are moving from **à la carte menus** to **tiered packages, membership plans, and combination treatment pricing** that lifts average ticket and locks in recurring revenue.",
      },
      {
        type: "bullets",
        items: [
          "**Pricing thesis:** Inflation and injectable COGS make **regular, well-communicated price adjustments** essential.",
          "**Structure shift:** Med spas are moving to **membership and package pricing** to capture willingness-to-pay and smooth cash flow.",
          "**Margin protector:** Combination packages (injectables + laser + skincare) lift average ticket faster than single-service increases.",
        ],
      },
    ],
  },
  {
    id: "pricing-benchmarks",
    title: "2. 2026 Treatment Pricing Benchmarks",
    blocks: [
      {
        type: "table",
        headers: ["Treatment", "Typical 2026 Range", "Pricing Trend"],
        rows: [
          ["Botox (per area)", "$12 – $18 per unit", "Rising with demand"],
          ["Dermal Fillers (per syringe)", "$600 – $1,200", "Premium product tiering"],
          ["Laser Hair Removal (6-pack)", "$400 – $1,500", "Package pricing standard"],
          ["IPL / Photofacial", "$250 – $500", "Series discounts common"],
          ["CoolSculpting / Body Contouring", "$600 – $2,500 per area", "Premium positioning"],
          ["Medical-Grade Facial", "$150 – $350", "Entry point, upsell funnel"],
          ["Chemical Peel", "$150 – $400", "Add-on to injectable visits"],
          ["Microneedling / RF", "$300 – $800", "Growing demand"],
        ],
      },
      {
        type: "paragraph",
        text: "**Ticket dynamics:** The average med spa treatment sits near **$400**, but the spread is widening as combination packages and premium injectable menus pull the top end higher. Practices that **bundle** (e.g., Botox + filler consult + skincare) are lifting effective tickets well above single-service pricing without discounting.",
      },
    ],
  },
  {
    id: "membership-pricing",
    title: "3. Membership & Package Pricing Models",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Injectable memberships:** Monthly plans ($150–$400/mo) with Botox/filler credits lock in recurring revenue and rebooking cadence.",
          "**Laser series packages:** Prepaid 6–8 session bundles at 10–15% discount improve cash flow and utilization.",
          "**VIP / loyalty tiers:** Tiered benefits (priority booking, exclusive events, product discounts) increase retention without heavy discounting.",
          "**Combination packages:** Bundle injectables + laser + skincare at a package price that raises total ticket vs. à la carte.",
          "**New client promos:** Introductory offers (e.g., $99 consult + first treatment) drive acquisition — convert to membership at checkout.",
        ],
      },
      {
        type: "paragraph",
        text: "The mechanism matters: because injectable COGS runs **12–18%** and payroll **30–40%**, a **10% price increase** on high-margin services can translate into a disproportionate lift in net margin when utilization holds. Under-pricing subsidizes clients at the owner's expense.",
      },
    ],
  },
  {
    id: "pricing-strategies",
    title: "4. Pricing Strategies That Protect Margin",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Provider-tier pricing:** Price by injector experience (RN vs. NP/PA vs. physician) to reward top producers.",
          "**Regular modest increases:** Annual or semi-annual adjustments beat rare large jumps — clients tolerate them better.",
          "**Transparent menu:** Publish clear pricing to reduce friction; hidden fees erode trust and conversion.",
          "**Retail alignment:** Recommend medical-grade skincare at checkout to hit the **15–25% retail target**.",
          "**Financing options:** CareCredit and similar programs expand addressable ticket without discounting.",
        ],
      },
      {
        type: "paragraph",
        text: "Audit your menu against 2026 benchmarks, introduce membership tiers, and pair every injectable visit with a skincare and laser upsell to defend margin against rising COGS.",
      },
    ],
  },
  {
    id: "actionable-insights",
    title: "5. Actionable Insights for Operators",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Model the impact:** Use the [medical spa profit margin calculator](/calculators/medical-spa-profit-margin/) to see how price changes flow to net margin.",
          "**Benchmark revenue:** Check [revenue per provider](/calculators/medical-spa-revenue-per-provider/) against the $300K–$700K target.",
          "**Read next:** [U.S. Medical Spa Industry Report 2026](/industries/beauty/medical-spa/reports/us-medical-spa-industry-report-2026/) for full market context behind these pricing shifts.",
        ],
      },
    ],
  },
];
