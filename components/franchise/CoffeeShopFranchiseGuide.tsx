import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { HashLink } from "@/components/ui/HashLink";
import { CoffeeShopFranchiseRoiCalculator } from "@/components/franchise/CoffeeShopFranchiseRoiCalculator";
import { CoffeeShopFranchiseCompare } from "@/components/franchise/CoffeeShopFranchiseCompare";
import { CoffeeShopFranchiseCalculatorTools } from "@/components/franchise/CoffeeShopFranchiseCalculatorTools";
import { DataSourcesAttribution } from "@/components/shared/DataSourcesAttribution";
import { coffeeShopFranchiseGuide as data } from "@/lib/franchise/food/coffee-shop-franchise";
import { coffeeShopFranchiseAttribution } from "@/lib/data-sources/coffee-shop-franchise";

function HubSection({
  id,
  title,
  subtitle,
  children,
  className = "bg-surface",
  featured = false,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}) {
  return (
    <section id={id} className={`border-b border-border/60 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">{title}</h2>
          {featured && (
            <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent">
              Featured
            </span>
          )}
        </div>
        {subtitle && <p className="mt-3 max-w-2xl text-sm text-ink-muted sm:text-base">{subtitle}</p>}
        <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export function CoffeeShopFranchiseGuide() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <main>
        {/* 1. Hero */}
        <section className="hero-mesh relative border-b border-border/60">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.35]"
            style={{
              backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
            <nav aria-label="Breadcrumb" className="mb-6 text-left text-sm text-ink-faint">
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <Link href="/franchise/" className="hover:text-accent">
                Franchise Economics
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <Link href="/franchise/#food" className="hover:text-accent">
                {data.meta.categoryLabel}
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-ink-muted">{data.meta.shortName}</span>
            </nav>

            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-medium text-ink-muted shadow-sm backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Coffee Shop Franchise Guide · {data.meta.dataVintage} · {data.meta.sampleSize}
            </p>

            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {data.meta.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {data.meta.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <HashLink
                href="#compare-brands"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Compare Coffee Franchises
              </HashLink>
              <HashLink
                href="#roi"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Calculate Coffee Franchise ROI
              </HashLink>
            </div>
          </div>
        </section>

        {/* 2. Quick Investment Dashboard */}
        <section id="overview" aria-label="Coffee franchise investment dashboard" className="border-b border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-wider text-accent uppercase">
                Quick Investment Dashboard
              </p>
              <h2 className="mt-1 font-display text-lg font-semibold text-ink sm:text-xl">
                Coffee Shop Franchise Economics at a Glance
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {data.investmentDashboard.map((row) => (
                <div key={row.metric} className="rounded-2xl border border-border bg-surface-muted/40 px-4 py-5">
                  <p className="text-xs font-medium text-ink-faint">{row.metric}</p>
                  <p className="mt-2 font-display text-lg font-bold tabular-nums text-ink sm:text-xl">
                    {row.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Sticky nav */}
        <IndustrySectionNav items={[...data.sectionNav]} />

        {/* 4. Compare brands */}
        <HubSection
          id="compare-brands"
          title="Compare the Best Coffee Shop Franchises"
          subtitle="Side-by-side investment metrics for highly searched coffee franchise brands — filter by capital, format, and investor profile."
          featured
          className="bg-surface-muted/30"
        >
          <CoffeeShopFranchiseCompare />
        </HubSection>

        {/* 5. Best fit */}
        <HubSection
          id="best-fit"
          title="Which Coffee Franchise Is Best For You?"
          subtitle="Match capital, format preference, and growth goals to a directional shortlist — then diligence the FDD."
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.bestFitCards.map((card) => (
              <li key={card.title}>
                <Link
                  href={card.href}
                  className="card-interactive flex h-full flex-col rounded-2xl border border-border bg-surface p-6"
                >
                  <h3 className="font-display text-base font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{card.detail}</p>
                  <p className="mt-4 text-sm font-semibold text-accent">
                    {card.brand} →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </HubSection>

        {/* 6. Economics */}
        <HubSection
          id="economics"
          title="Coffee Shop Franchise Economics"
          subtitle="Industry-level benchmarks that differentiate café and drive-thru coffee unit economics from generic franchise directories."
          className="bg-surface-muted/30"
        >
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Metric</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Benchmark</th>
                </tr>
              </thead>
              <tbody>
                {data.economicsRows.map((row) => (
                  <tr key={row.metric} className="border-b border-border-subtle last:border-0">
                    <td className="px-4 py-3.5 text-ink-muted sm:px-5">{row.metric}</td>
                    <td className="px-4 py-3.5 font-semibold tabular-nums text-ink sm:px-5">{row.benchmark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </HubSection>

        {/* 7. Startup costs */}
        <HubSection
          id="costs"
          title="How Much Does It Cost to Open a Coffee Franchise?"
          subtitle="Coffee franchise cost is a CapEx stack — fee, real estate, build-out, equipment, and working capital — not a single sticker price."
        >
          <div className="mx-auto max-w-md">
            {data.costFlow.map((step, i) => (
              <div key={step.item}>
                {i > 0 && (
                  <div className="flex justify-center py-1.5" aria-hidden="true">
                    <span className="text-ink-faint">↓</span>
                  </div>
                )}
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-5 py-4">
                  <span className="font-medium text-ink">{step.item}</span>
                  <span className="shrink-0 text-sm font-semibold tabular-nums text-accent">{step.range}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-accent-soft/40 px-6 py-8">
            <p className="text-center text-xs font-semibold tracking-wider text-accent uppercase">
              Typical Investment Range
            </p>
            <dl className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-surface/80 px-4 py-5 text-center">
                <dt className="text-xs font-semibold tracking-wider text-ink-faint uppercase">Low</dt>
                <dd className="mt-2 font-display text-xl font-bold tabular-nums text-ink sm:text-2xl">
                  {data.typicalInvestmentRange.low}
                </dd>
              </div>
              <div className="rounded-xl bg-surface/80 px-4 py-5 text-center">
                <dt className="text-xs font-semibold tracking-wider text-ink-faint uppercase">Average</dt>
                <dd className="mt-2 font-display text-xl font-bold tabular-nums text-ink sm:text-2xl">
                  {data.typicalInvestmentRange.average}
                </dd>
              </div>
              <div className="rounded-xl bg-surface/80 px-4 py-5 text-center">
                <dt className="text-xs font-semibold tracking-wider text-ink-faint uppercase">High</dt>
                <dd className="mt-2 font-display text-xl font-bold tabular-nums text-ink sm:text-2xl">
                  {data.typicalInvestmentRange.high}
                </dd>
              </div>
            </dl>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-ink-muted">
              {data.typicalInvestmentRange.note}
            </p>
          </div>
        </HubSection>

        {/* 8. Drive-thru vs café */}
        <HubSection
          id="drive-thru-vs-cafe"
          title="Drive-Thru Coffee Shop vs Traditional Café"
          subtitle="Format choice changes CapEx, throughput, labor, and EBITDA more than brand marketing alone."
          className="bg-surface-muted/30"
        >
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Metric</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Drive-Thru</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Café</th>
                </tr>
              </thead>
              <tbody>
                {data.driveThruVsCafe.map((row) => (
                  <tr key={row.metric} className="border-b border-border-subtle last:border-0">
                    <td className="px-4 py-3.5 text-ink-muted sm:px-5">{row.metric}</td>
                    <td className="px-4 py-3.5 font-semibold text-ink sm:px-5">{row.driveThru}</td>
                    <td className="px-4 py-3.5 font-semibold text-ink sm:px-5">{row.cafe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </HubSection>

        {/* 9. ROI calculator */}
        <HubSection
          id="roi"
          title="Coffee Franchise ROI Calculator"
          subtitle="Model revenue, margins, royalties, rent, financing, payback, 5-year ROI, and cash-on-cash return before you buy."
          featured
        >
          <CoffeeShopFranchiseRoiCalculator />
          <div className="mt-8 text-center">
            <HashLink
              href="#roi"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Calculate Your Coffee Franchise ROI
            </HashLink>
          </div>
        </HubSection>

        {/* 10. Calculator cluster */}
        <HubSection
          id="calculators"
          title="Coffee Shop Franchise Calculators"
          subtitle="Working ROI, royalty, and payback tools — plus linked industry calculators for cost, margin, and valuation."
          className="bg-surface-muted/30"
        >
          <CoffeeShopFranchiseCalculatorTools />
          <div className="mt-10">
            <h3 className="font-display text-base font-semibold text-ink">More coffee shop calculators</h3>
            <div className="mt-4">
              <LinkCardGrid
                items={data.calculators.filter(
                  (c) =>
                    !c.href.includes("franchise-roi") &&
                    !c.href.includes("franchise-royalty") &&
                    !c.href.includes("payback"),
                )}
                columns={2}
              />
            </div>
          </div>
        </HubSection>

        {/* 11. Rankings */}
        <HubSection
          id="rankings"
          title="Best Coffee Shop Franchises"
          subtitle="Directional shortlists scored on investment, revenue, profitability, brand, scalability, and support — not pure editorial lists."
        >
          <div className="mb-8 overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full min-w-[360px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Scoring Factor</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Weight</th>
                </tr>
              </thead>
              <tbody>
                {data.rankingMethodology.map((row) => (
                  <tr key={row.factor} className="border-b border-border-subtle last:border-0">
                    <td className="px-4 py-3.5 text-ink-muted sm:px-5">{row.factor}</td>
                    <td className="px-4 py-3.5 font-semibold tabular-nums text-ink sm:px-5">{row.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.rankings.map((card) => (
              <li key={card.title}>
                <Link
                  href={card.href}
                  className="card-interactive flex h-full flex-col rounded-2xl border border-border bg-surface p-6"
                >
                  <h3 className="font-display text-base font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{card.detail}</p>
                  <p className="mt-4 text-sm font-semibold text-accent">{card.brand} →</p>
                </Link>
              </li>
            ))}
          </ul>
        </HubSection>

        {/* 12. Featured profiles */}
        <HubSection
          id="franchise-profiles"
          title="Coffee Franchise Investment Profiles"
          subtitle="Card-level snapshots — detailed diligence belongs on each brand profile page."
          className="bg-surface-muted/30"
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.featuredProfiles.map((profile) => (
              <li key={profile.label} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{profile.label}</h3>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-ink-muted">Investment</dt>
                    <dd className="font-semibold tabular-nums text-ink">{profile.investment}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-ink-muted">Royalty</dt>
                    <dd className="font-semibold tabular-nums text-ink">{profile.royalty}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-ink-muted">Locations</dt>
                    <dd className="font-semibold tabular-nums text-ink">{profile.locations}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-ink-muted">Model</dt>
                    <dd className="text-right font-medium text-ink">{profile.businessModel}</dd>
                  </div>
                </dl>
                <Link href={profile.href} className="mt-5 inline-flex text-sm font-semibold text-accent hover:underline">
                  View Investment Profile →
                </Link>
              </li>
            ))}
          </ul>
        </HubSection>

        {/* 13. vs Independent */}
        <HubSection
          id="vs-independent"
          title="Coffee Franchise vs Independent Coffee Shop"
          subtitle="Fee stacks buy brand, systems, and exit liquidity — independents keep margin flexibility and menu freedom."
        >
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Factor</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Franchise</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Independent</th>
                </tr>
              </thead>
              <tbody>
                {data.vsIndependent.map((row) => (
                  <tr key={row.factor} className="border-b border-border-subtle last:border-0">
                    <td className="px-4 py-3.5 text-ink-muted sm:px-5">{row.factor}</td>
                    <td className="px-4 py-3.5 font-medium text-ink sm:px-5">{row.franchise}</td>
                    <td className="px-4 py-3.5 font-medium text-ink sm:px-5">{row.independent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-ink-muted">
            Related industry deep-dive:{" "}
            <Link href="/industries/food-beverage/coffee-shop/" className="font-semibold text-accent hover:underline">
              Should You Buy a Coffee Franchise or Open an Independent Coffee Shop?
            </Link>
          </p>
        </HubSection>

        {/* 14. Investment factors */}
        <HubSection
          id="investment-factors"
          title="Coffee Shop Franchise Investment Factors"
          subtitle="The CapEx and OpEx line items that drive underwriting outcomes."
          className="bg-surface-muted/30"
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.investmentFactors.map((factor) => (
              <li key={factor.title} className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-display text-base font-semibold text-ink">{factor.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{factor.detail}</p>
              </li>
            ))}
          </ul>
        </HubSection>

        {/* 15. Long-tail questions */}
        <HubSection
          id="investment-questions"
          title="Coffee Franchise Investment Questions"
          subtitle="High-intent questions coffee franchise buyers ask before committing capital."
        >
          <ul className="grid gap-3 sm:grid-cols-2">
            {data.investmentQuestions.map((item) => (
              <li key={item.question}>
                <HashLink
                  href={item.href}
                  className="card-interactive flex h-full items-center rounded-2xl border border-border bg-surface px-5 py-4 text-sm font-medium text-ink"
                >
                  {item.question}
                </HashLink>
              </li>
            ))}
          </ul>
        </HubSection>

        {/* 16. Related F&B */}
        <HubSection
          id="related"
          title="Related Food & Beverage Franchises"
          subtitle="Build your Food & Beverage franchise topical cluster from coffee into adjacent concepts."
          className="bg-surface-muted/30"
        >
          <LinkCardGrid items={data.relatedFranchises} columns={3} />
          <p className="mt-6 text-center text-sm text-ink-muted">
            Independent coffee economics:{" "}
            <Link href="/industries/food-beverage/coffee-shop/" className="font-semibold text-accent hover:underline">
              Coffee Shop Industry Benchmarks
            </Link>
          </p>
        </HubSection>

        {/* 17. FAQ */}
        <HubSection
          id="faq"
          title="Coffee Shop Franchise FAQ"
          subtitle="Focused answers that complement the economics, cost, and ranking sections above."
        >
          <IndustryFaq faqs={[...data.faqs]} />
        </HubSection>

        <HubSection
          id="data-sources"
          title="Data Sources & Methodology"
          subtitle="How BizMetricsHQ builds directional coffee franchise investment ranges."
          className="bg-surface-muted/30"
        >
          <DataSourcesAttribution attribution={coffeeShopFranchiseAttribution} />
        </HubSection>
      </main>
      <Footer />
    </>
  );
}
