import type { IndustryAttribution } from "@/lib/data-sources/types";

export const gymAttribution: IndustryAttribution = {
  industry: "Gym",
  naics: "713940 (Fitness and Recreational Sports Centers)",
  sampleSize: "Composite industry benchmarks",
  dataVintage: "2024–2025 (HFA); 2025–2026 (owner economics)",
  geography: "United States",
  lastUpdated: "June 2026",
  operatorBenchmarkSources: [
    {
      name: "Health & Fitness Association (HFA) — Benchmarking Report",
      detail:
        "2025 Fitness Industry Benchmarking Report: 66.4% U.S. member retention, monthly dues, and operator financial ratios (175-company sample, 114 U.S. respondents).",
    },
    {
      name: "Health & Fitness Association (HFA) — Industry revenue data",
      detail:
        "Published U.S. club benchmarks including ~$517 average annual revenue per member and $69 mean / $38 median monthly dues (2024).",
    },
    {
      name: "Business-for-sale listings (BizBuySell, fitness brokers)",
      detail: "Gym and fitness center listings with disclosed revenue, SDE, and member counts (2023–2026) for owner-level economics.",
    },
    {
      name: "IRS Statistics of Income — Schedule C (NAICS 713940)",
      detail: "Sole-proprietorship revenue and expense ratios for fitness and recreational sports centers.",
    },
  ],
  macroSources: [
    {
      name: "IBISWorld — Gym, Health & Fitness Clubs (NAICS 713940)",
      detail: "Industry revenue, establishment counts, and margin ranges for U.S. fitness clubs.",
    },
    {
      name: "Published fitness marketing CAC studies",
      detail:
        "Third-party CAC benchmarks for budget through mid-range clubs ($63–$249+ blended); used as ranges, not single-point estimates.",
    },
  ],
  calculations: [
    {
      label: "Revenue per member",
      formula: "Annual Member Revenue ÷ 12",
      note: "HFA industry estimate: ~$517/member/year ≈ $43/mo. Independent gyms with personal training often run $43–$65/mo.",
    },
    {
      label: "Member lifetime value (LTV)",
      formula: "Revenue per Member per Month × Average Membership Lifespan (months)",
      note: "Typical range $500–$900 for mid-market independents. Lifespan varies widely by onboarding, format, and churn.",
    },
    {
      label: "Customer acquisition cost (CAC)",
      formula: "(Sales + Marketing Spend) ÷ New Paying Members",
      note: "Published benchmarks span $63–$249+ for budget-to-mid-range clubs; referral channels typically lowest.",
    },
    {
      label: "Monthly recurring revenue (MRR)",
      formula: "Annual Revenue × Membership Revenue Share ÷ 12",
      note: "Estimated ~$62K/mo for a ~$1.2M gym with ~62% membership revenue — a modeled figure, not an HFA direct report.",
    },
    {
      label: "Implied monthly churn",
      formula: "1 − (Annual Retention Rate)^(1/12)",
      note: "66.4% annual retention (HFA) implies ~3.4% monthly churn in a steady-state model; actual clubs report 3–8% depending on format.",
    },
    {
      label: "SDE valuation",
      formula: "SDE × Industry Multiple (median 3.5×)",
      note: "SDE = Net Profit + Owner Compensation + add-backs. Range 2.8×–4.2× SDE from business-for-sale comps.",
    },
  ],
  limitations: [
    "Member economics (dues, retention, revenue/member) primarily reflect HFA U.S. club data — a mix of independents, franchises, and multi-club operators.",
    "HFA retention (66.4%) is annual; monthly churn varies by onboarding quality, format, and price tier.",
    "CAC and LTV are presented as ranges because marketing channel mix and local competition create wide variance.",
    "MRR and owner-level revenue/margin figures are composite estimates — not substitutes for your own books, CPA review, or formal valuation.",
  ],
};
