import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "veterinary-clinic-owner-compensation-2026",
  title: "How Much Do Veterinary Clinic Owners Earn?",
  subtitle:
    "2026 compensation analysis for US veterinary clinic owners across solo and multi-vet models, with benchmarks for associates and consolidation-era pay structures.",
  description:
    "Veterinary clinic owner compensation benchmarks for 2026: solo owner and multi-vet owner ranges, associate pay comparisons, and the key drivers shaping owner earnings.",
  published: "June 2026",
  dataVintage: "2025-2026",
  readTime: "7 min",
  href: "/industries/healthcare/veterinary-clinic/reports/veterinary-clinic-owner-compensation-2026/",
  sources: [
    "AVMA Economic State of the Veterinary Profession",
    "BLS Occupational Employment and Wage Statistics - Veterinarians",
    "BizBuySell Veterinary Practice Insights",
    "BizMetricsHQ - 190+ veterinary clinic operator panel",
    "Veterinary Practice News - Compensation and Staffing Survey",
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
          { label: "Solo Owner Range", value: "$120K - $220K" },
          { label: "Solo Owner Median", value: "$185K" },
          { label: "Multi-Vet Owner Range", value: "$180K - $280K+" },
          { label: "Associate Veterinarian Range", value: "$90K - $140K" },
        ],
      },
      {
        type: "paragraph",
        text: "Veterinary clinic owner compensation in 2026 is shaped by the same structural tension seen across healthcare services: **higher consumer demand** for pet care versus **margin pressure** from labor, pharmaceuticals, and compliance costs. BizMetricsHQ panel data indicates a median **$185K** total compensation for solo owner-operators, with the broadest upside concentrated in clinics that scale to multiple doctors and blend GP with higher-value services.",
      },
      {
        type: "bullets",
        items: [
          "**Compensation is blended economics:** owner pay usually combines clinical wages, owner distributions, and tax-advantaged benefits rather than salary alone.",
          "**Scale outperforms pure production:** multi-vet owners at **$180K-$280K+** typically reduce personal exam load while capturing profit from team productivity.",
          "**Associate-to-owner spread remains material:** associates at **$90K-$140K** are paid for clinical output, while owners capture operating leverage and equity appreciation.",
          "**Median outcomes depend on appointment throughput and payroll discipline:** clinics with strong schedule utilization and support-staff ratios preserve owner distributions even in wage-inflation markets.",
        ],
      },
    ],
  },
  {
    id: "market-sizing",
    title: "2. Market Sizing",
    blocks: [
      {
        type: "paragraph",
        text: "The US companion animal care market continues to expand in 2026, supported by elevated pet ownership and increased preventative care spending. Within this backdrop, owner compensation is primarily determined by **revenue per veterinarian**, **support-staff efficiency**, and **gross margin discipline** across pharmacy and diagnostics.",
      },
      {
        type: "table",
        headers: ["Clinic Profile", "Owner Compensation", "Typical Annual Revenue", "Operating Margin"],
        rows: [
          ["Solo owner-operator (1 vet)", "$120K - $220K", "$700K - $1.4M", "12 - 20%"],
          ["Two-vet clinic owner", "$160K - $250K", "$1.2M - $2.2M", "14 - 22%"],
          ["Multi-vet clinic owner (3-6 vets)", "$180K - $280K+", "$2.0M - $5.0M+", "15 - 24%"],
          ["Associate veterinarian", "$90K - $140K", "N/A", "N/A"],
        ],
      },
      {
        type: "stats",
        items: [
          { label: "US Veterinary Services Growth (2026e)", value: "5 - 7% YoY" },
          { label: "Median Solo Owner Compensation", value: "$185K" },
          { label: "Compensation as % of Revenue (owner clinics)", value: "10 - 16%" },
          { label: "Typical Payroll Share of Revenue", value: "38 - 48%" },
        ],
      },
      {
        type: "paragraph",
        text: "Owner compensation generally compresses when total payroll exceeds the high-40% range of revenue or when appointment density declines below break-even utilization thresholds. Conversely, clinics with efficient technician leverage and stable recall volume preserve stronger owner take-home at similar top-line revenue.",
      },
    ],
  },
  {
    id: "competitive-landscape",
    title: "3. Competitive Landscape (Solo vs Corporate Owner Pay)",
    blocks: [
      {
        type: "paragraph",
        text: "Compensation dynamics are increasingly segmented between independent ownership and corporate-backed operating models. The core trade-off is straightforward: independent owners may retain higher long-run upside, while corporate structures often offer lower volatility and more administrative support.",
      },
      {
        type: "bullets",
        items: [
          "**Solo ownership:** strongest control over pricing, staffing, and service mix, but higher exposure to wage volatility and clinician turnover.",
          "**Corporate-managed clinics:** owner-physician or minority-equity models can stabilize cash compensation but may cap near-term distribution upside.",
          "**Regional consolidators:** typically reward clinical leadership roles with bonus plans tied to revenue growth, patient retention, and EBITDA targets.",
          "**Recruitment competition:** persistent veterinarian shortages increase associate compensation pressure, narrowing owner margins unless throughput and pricing improve in parallel.",
        ],
      },
      {
        type: "table",
        headers: ["Model", "Typical Owner/Lead Pay", "Risk Profile", "Upside Driver"],
        rows: [
          ["Independent solo clinic", "$120K - $220K", "Higher operating risk", "Margin retention + equity growth"],
          ["Independent multi-vet clinic", "$180K - $280K+", "Moderate risk", "Team productivity + central overhead leverage"],
          ["Corporate-affiliated medical director", "$160K - $240K", "Lower volatility", "Bonus and potential equity participation"],
          ["Associate (non-owner)", "$90K - $140K", "Lowest business risk", "Production incentives only"],
        ],
      },
    ],
  },
  {
    id: "growth-drivers",
    title: "4. Growth Drivers",
    blocks: [
      {
        type: "paragraph",
        text: "In 2026, owner compensation growth is less about fee inflation alone and more about converting demand into profitable capacity. Clinics with disciplined workflow design consistently outperform peers with similar local demographics.",
      },
      {
        type: "bullets",
        items: [
          "**Preventative care expansion:** wellness plans, annual panels, and compliance automation increase recurring visit value and smooth seasonality.",
          "**Higher-acuity case mix:** dentistry, surgery, and diagnostics lift revenue per doctor hour when anesthesia and scheduling blocks are managed tightly.",
          "**Digital client engagement:** online booking, automated reminders, and tele-triage reduce no-shows and improve exam-room utilization.",
          "**Technician utilization:** stronger delegation models allow veterinarians to focus on billable medical decision-making, improving doctor productivity.",
          "**Pricing architecture:** indexed fee updates and service-bundle design protect gross margin without relying on abrupt, high-friction price changes.",
        ],
      },
    ],
  },
  {
    id: "operational-challenges",
    title: "5. Operational Challenges",
    blocks: [
      {
        type: "paragraph",
        text: "Operational friction remains the primary reason owner compensation underperforms benchmarks. Most downside scenarios are execution-related rather than demand-related.",
      },
      {
        type: "bullets",
        items: [
          "**Labor inflation:** rising DVM and technician wages can outpace fee adjustments, especially in competitive metro hiring markets.",
          "**Burnout and continuity risk:** owner-heavy clinical loads reduce strategic planning time and increase turnover vulnerability.",
          "**Pharmacy and supply pressure:** drug cost inflation and distributor concentration can erode clinic gross margin if formularies are unmanaged.",
          "**Capacity bottlenecks:** underutilized support roles and inefficient room turnover limit revenue conversion from existing demand.",
          "**Compliance overhead:** controlled-substance, recordkeeping, and state-board requirements add fixed administrative burden for independent operators.",
        ],
      },
      {
        type: "paragraph",
        text: "**2026 benchmark lens:** independent clinics below the **$120K-$220K** solo range should review payroll mix, appointment density, and pricing cadence first; multi-vet owners tracking below **$180K-$280K+** often need tighter doctor scheduling and centralized cost controls.",
      },
    ],
  },
];
