import type { ReportSection } from "@/lib/industries/reports/types";

export const reportMeta = {
  slug: "us-baking-industry-2026",
  title: "US Baking Industry Report 2026",
  subtitle:
    "Investment-grade analysis of market size, consumer trends, input costs, competitive dynamics, and growth opportunities through 2030.",
  description:
    "Comprehensive 2026 US baking industry report: $81B market size, 3.3% CAGR, health and premium trends, supply chain pressures, Grupo Bimbo and Flowers Foods strategies, and top growth opportunities.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "6 min",
  href: "/industries/food-beverage/bakery/reports/us-baking-industry-2026/",
  sources: [
    "Market Research Future — US Bakery Products Market (2025)",
    "IBISWorld — Bread Manufacturing in the US (Feb 2026)",
    "SNS Insider — Bakery Products Market (2025)",
    "Credence Research — US Specialty Bakery Market",
    "Mintel — US Bakery: Winning Innovation Territories 2026",
    "USDA ERS — Farm-level commodity forecasts (2026)",
    "Future Market Insights — Bakery Ingredients Market",
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
          { label: "US Bakery Products Market (2025)", value: "$81.1B" },
          { label: "Projected Market (2030)", value: "~$95.4B" },
          { label: "CAGR (2025–2030)", value: "3.3%" },
          { label: "Bread Manufacturing (2026)", value: "$58.8B" },
        ],
      },
      {
        type: "paragraph",
        text: "The US baking industry remains one of the largest food-manufacturing categories, anchored by daily-consumption bread and expanding into premium, health-oriented, and DTC formats. Market Research Future values the US bakery products market at **$81.07B in 2025**, growing at **3.28% CAGR** toward **$112.0B by 2035**. IBISWorld's bread-manufacturing subsector (NAICS 31181) reached **$58.8B in 2026** — up **1.9% YoY**.",
      },
      {
        type: "bullets",
        items: [
          "**Primary growth drivers:** premiumization, health-conscious reformulation (gluten-free, low-sugar, vegan, organic), e-commerce/DTC, foodservice recovery, and snacking-format innovation.",
          "**Mintel's 2026 Trend Territories** — Bakery Elevated, Balanced Nourishment, Made For Snacking — signal where to allocate R&D.",
          "**Organic bakery** projected at **6.8% CAGR (2025–2035)** vs. **3.3%** for the total category.",
          "**Input costs:** split cycle in 2026 — eggs **−73%** at farm level (USDA ERS forecast), wheat **+8.4%** after three years of decline.",
          "**Top consolidators:** Grupo Bimbo, Flowers Foods, General Mills; **~8,000+** independent bakeries compete on craft and custom orders.",
        ],
      },
    ],
  },
  {
    id: "market-overview",
    title: "2. Market Overview & Size",
    blocks: [
      {
        type: "paragraph",
        text: "Market sizing varies by scope. Broad bakery products (bread, cakes, pastries, cookies, mixes) total **$81.1B (2025)** per Market Research Future, or **~$115B** per SNS Insider. Applying **3.28% CAGR** yields **~$95.4B by 2030**. SNS Insider projects **$115B → ~$140B (2035)** at **3.98% CAGR** for the full packaged + in-store ecosystem.",
      },
      {
        type: "stats",
        items: [
          { label: "Specialty Bakery (2024)", value: "$6.3B" },
          { label: "Specialty CAGR (2025–2032)", value: "4.65%" },
          { label: "Organic Bakery (2025)", value: "$17.9B" },
          { label: "Organic CAGR (2025–2035)", value: "6.8%" },
        ],
      },
      {
        type: "bullets",
        items: [
          "**Bread & rolls** — Largest segment; whole-grain and artisan outpacing white bread.",
          "**Cakes & pastries** — Highest independent margins; custom cakes at **60–75% gross**.",
          "**Cookies & biscuits** — Fastest-growing sub-category; snacking occasions drive NPD.",
          "**Baking mixes & dough** — Pillsbury, private label; at-home baking retention post-2020.",
          "**Specialty / free-from** — **$6.27B (2024) → $9.02B (2032)**; gluten-free, vegan, low-sugar.",
        ],
      },
      {
        type: "paragraph",
        text: "**Channels:** grocery (~55–60%), foodservice (~20–25%), club/convenience (~10–15%), e-commerce/DTC (~5–8% and rising). Independent shops median **~$450K** annual revenue (BizMetricsHQ, 210+ businesses).",
      },
    ],
  },
  {
    id: "market-trends",
    title: "3. Key Market Trends",
    blocks: [
      {
        type: "paragraph",
        text: "**Health-conscious baking** defines 2025–2026. Mintel's Balanced Nourishment tracks protein-enriched, high-fiber, and reduced-sugar demand. Gluten-free artisan products carry **35–50% price premiums** (DataIntelo); **~18%** of global bakery launches now carry gluten-free claims vs. **9.8%** five years ago.",
      },
      {
        type: "bullets",
        items: [
          "**Gluten-free & allergen-free** — Taste parity and specialty retail placement are key differentiators.",
          "**Low-sugar & vegan** — Natural sweeteners and egg/dairy replacers accelerated by 2024–2025 egg spikes.",
          "**Organic & clean label** — Non-GMO flour, transparent sourcing; **$17.87B** organic bakery market (2025).",
        ],
      },
      {
        type: "paragraph",
        text: "**Premiumization:** Mintel's Bakery, Elevated reflects demand for globally inspired flavors and premium inputs. North American artisan bakery at **4.9% CAGR through 2034** (DataIntelo). Independents charge **$8–$15** for artisan loaves vs. **$3–$4** commodity bread.",
      },
      {
        type: "paragraph",
        text: "**E-commerce & DTC** are permanent channels — subscription bread boxes, nationwide cookie shipping, and bake-at-home kits expand TAM without slotting fees. Foodservice recovery adds B2B par-baked demand. Grab-and-go formats align with Mintel's Made For Snacking territory.",
      },
    ],
  },
  {
    id: "supply-chain",
    title: "4. Supply Chain & Cost Pressures",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Wheat (2026 forecast)", value: "+8.4% YoY" },
          { label: "Eggs (2026 forecast)", value: "−73.0% YoY" },
          { label: "Cake ingredient index (Q2 2025)", value: "+68.4%" },
          { label: "Cocoa vs. 2022", value: ">6× peak" },
        ],
      },
      {
        type: "paragraph",
        text: "Bakers face a **split inflation cycle** in 2026. USDA ERS (via Future Market Insights) shows **wheat fell 10.9% in 2025** but is **projected +8.4% in 2026** as contracts reset. **Eggs** spiked on avian flu and cage-free constraints; devil's food cake ingredient index rose **68.4% in Q2 2025** (Milling & Baking News). USDA forecasts **−73% farm-level egg prices in 2026** — partial relief for cake and pastry producers.",
      },
      {
        type: "paragraph",
        text: "**Cocoa** hit historic highs in 2024–2025 (**>6× 2022 levels**, Baking Business) on West African crop failures. Prices moderated from **~$10.75/kg** peaks but remain elevated. Bakers use cocoa-extending blends and reformulated flavor profiles to protect margins.",
      },
      {
        type: "bullets",
        items: [
          "**Mitigation:** forward contracting (6–12 months), egg replacers, enzyme-treated flour, dual sourcing.",
          "**Packaging & labor** remain elevated — labor **28–36% of revenue** at independents (BizMetricsHQ).",
        ],
      },
    ],
  },
  {
    id: "competitive-landscape",
    title: "5. Competitive Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "The industry is **bifurcated**: consolidated packaged bread at the top, **8,000+ independents** locally. Top 4 bread manufacturers hold **~65–70%** share; DSD networks (Bimbo + Flowers) reach **80%+** of the US population.",
      },
      {
        type: "bullets",
        items: [
          "**Grupo Bimbo / Bimbo Bakeries USA** — Arnold, Sara Lee, Thomas', Entenmann's. Strategy: M&A, DSD density, scale purchasing, health line extensions.",
          "**Flowers Foods** (NYSE: FLO) — Nature's Own, Dave's Killer Bread, Wonder. Strategy: premium whole-grain growth, DSD optimization, brand acquisition.",
          "**General Mills** (NYSE: GIS) — Pillsbury, Betty Crocker mixes. Strategy: at-home convenience, clean-label and gluten-free mix reformulation.",
        ],
      },
      {
        type: "paragraph",
        text: "Also active: **Mondelez** (Oreo, belVita), **Campbell/Pepperidge Farm**, **Hostess**. Independents compete on freshness and custom cakes — **$280K–$750K revenue**, **10–14% net margin**, **2.8× SDE** exit multiples. Wholesale B2B adds volume but **15–25% lower** per-unit margin vs. retail.",
      },
    ],
  },
  {
    id: "future-outlook",
    title: "6. Future Outlook & Opportunities",
    blocks: [
      {
        type: "bullets",
        items: [
          "**1. Functional bakery** — Protein/fiber fortification, low-glycemic formats. Organic segment **6.8% CAGR**; target **+3–5 pts gross margin** vs. conventional.",
          "**2. Wholesale & foodservice B2B** — One account at **$3K–$8K/month** adds **$36K–$96K/year**; set minimum order tiers to protect margin.",
          "**3. E-commerce & subscriptions** — Specialty bakery **4.65% CAGR**; DTC boxes at **$45–$75** vs. **$12** retail counter.",
          "**4. Custom cakes & experiential retail** — **60–75% gross margins**; Q4 + wedding season can deliver **30–40% of annual profit**.",
          "**5. Ops tech & waste reduction** — Cut waste from **8–12% to 3–5% of COGS** = **1–2 margin points** on **$450K** revenue.",
        ],
      },
      {
        type: "paragraph",
        text: "**Investment view:** Manufacturers should shift mix toward premium/functional segments. Independents should target **≥25% revenue from custom/experiential** and **≥15% from wholesale**. Consolidation continues as regional brands seek DSD and owners explore **2.0×–3.2× SDE exits**. **Risks:** wheat reversal, cocoa supply, labor, consumer trade-down. Flexible formulations and diversified channels position operators to capture the **$95B+** market through 2030.",
      },
    ],
  },
] as const;

export const industryInsights = [
  {
    title: "US Baking Industry Outlook 2026",
    href: "/industries/food-beverage/bakery/reports/us-baking-industry-2026/#executive-summary",
    metric: "$81.1B market · 3.3% CAGR",
  },
  {
    title: "Market Size & Segment Breakdown",
    href: "/industries/food-beverage/bakery/reports/us-baking-industry-2026/#market-overview",
    metric: "~$95B by 2030",
  },
  {
    title: "Health, Premium & E-Commerce Trends",
    href: "/industries/food-beverage/bakery/reports/us-baking-industry-2026/#market-trends",
    metric: "Organic +6.8% CAGR",
  },
  {
    title: "Ingredient Costs & Supply Chain 2026",
    href: "/industries/food-beverage/bakery/reports/us-baking-industry-2026/#supply-chain",
    metric: "Split inflation cycle",
  },
  {
    title: "Competitive Landscape & Growth Opportunities",
    href: "/industries/food-beverage/bakery/reports/us-baking-industry-2026/#future-outlook",
    metric: "Top 5 opportunities",
  },
] as const;
