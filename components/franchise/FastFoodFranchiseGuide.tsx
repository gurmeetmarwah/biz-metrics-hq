import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { HashLink } from "@/components/ui/HashLink";
import { FastFoodFranchiseInvestmentCalculator } from "@/components/franchise/FastFoodFranchiseInvestmentCalculator";
import { FastFoodBreakEvenCalculator } from "@/components/franchise/FastFoodBreakEvenCalculator";
import { DataSourcesAttribution } from "@/components/shared/DataSourcesAttribution";
import { fastFoodFranchiseGuide as data } from "@/lib/franchise/food/fast-food-franchise";
import { fastFoodFranchiseAttribution } from "@/lib/data-sources/fast-food-franchise";

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

export function FastFoodFranchiseGuide() {
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
              <Link href={data.meta.parentHref} className="hover:text-accent">
                {data.meta.parentLabel}
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-ink-muted">{data.meta.shortName}</span>
            </nav>

            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-medium text-ink-muted shadow-sm backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Fast Food Franchise Guide · {data.meta.dataVintage} · {data.meta.sampleSize}
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
                Compare Fast Food Franchises
              </HashLink>
              <HashLink
                href="#calculator"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Investment Calculator
              </HashLink>
            </div>
          </div>
        </section>

        {/* Benchmark bar */}
        <section aria-label="Fast food franchise benchmarks" className="border-b border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-wider text-accent uppercase">Benchmark Bar</p>
              <h2 className="mt-1 font-display text-lg font-semibold text-ink sm:text-xl">
                Fast Food Franchise Economics at a Glance
              </h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b border-border-subtle bg-surface-muted/50">
                    <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Metric</th>
                    <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Small</th>
                    <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Medium</th>
                    <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Large</th>
                  </tr>
                </thead>
                <tbody>
                  {data.heroBenchmarks.map((row) => (
                    <tr key={row.metric} className="border-b border-border-subtle last:border-0">
                      <td className="px-4 py-3.5 text-ink-muted sm:px-5">{row.metric}</td>
                      <td className="px-4 py-3.5 font-semibold tabular-nums text-ink sm:px-5">{row.small}</td>
                      <td className="px-4 py-3.5 font-semibold tabular-nums text-ink sm:px-5">{row.medium}</td>
                      <td className="px-4 py-3.5 font-semibold tabular-nums text-ink sm:px-5">{row.large}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-ink-faint">
              Small = compact sandwich / limited-service · Medium = established QSR · Large = freestanding /
              drive-through formats
            </p>
          </div>
        </section>

        <IndustrySectionNav items={[...data.sectionNav]} />

        {/* 2. Calculator */}
        <HubSection
          id="calculator"
          title="Fast Food Franchise Investment Calculator: Cost, Cash Required & Payback"
          subtitle="Model total startup investment, how much cash you need to open a fast food franchise, revenue, operating profit, owner income, break-even, and payback."
          featured
          className="bg-surface-muted/30"
        >
          <FastFoodFranchiseInvestmentCalculator />
        </HubSection>

        {/* 3. Costs */}
        <HubSection
          id="costs"
          title="How Much Does a Fast Food Franchise Cost?"
          subtitle="Fast food franchise cost is a stack of CapEx and working-capital line items — not a single sticker price."
        >
          <ul className="grid gap-4 sm:grid-cols-2">
            {data.costBreakdown.map((item) => (
              <li key={item.item} className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-display text-base font-semibold text-ink">{item.item}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
                <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-surface-muted/50 px-2 py-2.5">
                    <dt className="text-[10px] font-semibold tracking-wider text-ink-faint uppercase">Small</dt>
                    <dd className="mt-1 text-xs font-semibold tabular-nums text-accent sm:text-sm">{item.small}</dd>
                  </div>
                  <div className="rounded-lg bg-surface-muted/50 px-2 py-2.5">
                    <dt className="text-[10px] font-semibold tracking-wider text-ink-faint uppercase">Medium</dt>
                    <dd className="mt-1 text-xs font-semibold tabular-nums text-accent sm:text-sm">{item.medium}</dd>
                  </div>
                  <div className="rounded-lg bg-surface-muted/50 px-2 py-2.5">
                    <dt className="text-[10px] font-semibold tracking-wider text-ink-faint uppercase">Large</dt>
                    <dd className="mt-1 text-xs font-semibold tabular-nums text-accent sm:text-sm">{item.large}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-border bg-accent-soft/40 px-6 py-8">
            <p className="text-center text-xs font-semibold tracking-wider text-accent uppercase">
              Total Initial Investment
            </p>
            <dl className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-surface/80 px-4 py-5 text-center">
                <dt className="text-xs font-semibold tracking-wider text-ink-faint uppercase">Small</dt>
                <dd className="mt-2 font-display text-xl font-bold tabular-nums text-ink sm:text-2xl">
                  {data.typicalTotalInvestment.small}
                </dd>
              </div>
              <div className="rounded-xl bg-surface/80 px-4 py-5 text-center">
                <dt className="text-xs font-semibold tracking-wider text-ink-faint uppercase">Medium</dt>
                <dd className="mt-2 font-display text-xl font-bold tabular-nums text-ink sm:text-2xl">
                  {data.typicalTotalInvestment.medium}
                </dd>
              </div>
              <div className="rounded-xl bg-surface/80 px-4 py-5 text-center">
                <dt className="text-xs font-semibold tracking-wider text-ink-faint uppercase">Large</dt>
                <dd className="mt-2 font-display text-xl font-bold tabular-nums text-ink sm:text-2xl">
                  {data.typicalTotalInvestment.large}
                </dd>
              </div>
            </dl>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-ink-muted">
              {data.typicalTotalInvestment.note}
            </p>
          </div>
        </HubSection>

        {/* 4. Brands */}
        <HubSection
          id="compare-brands"
          title="Fast Food Franchise Opportunities to Compare"
          subtitle="Side-by-side economics for national QSR brands — open a profile for deeper diligence, not a generic “best of” ranking."
          featured
          className="bg-surface-muted/30"
        >
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full min-w-[800px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Franchise</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Investment</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Franchise Fee</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Royalty</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Revenue</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Investment Level</th>
                </tr>
              </thead>
              <tbody>
                {data.franchiseBrands.map((brand) => (
                  <tr key={brand.slug} className="border-b border-border-subtle last:border-0">
                    <td className="px-4 py-3.5 sm:px-5">
                      <Link href={brand.href} className="font-semibold text-accent hover:underline">
                        {brand.label}
                      </Link>
                    </td>
                    <td className="px-4 py-3.5 tabular-nums text-ink sm:px-5">{brand.investment}</td>
                    <td className="px-4 py-3.5 tabular-nums text-ink sm:px-5">{brand.franchiseFee}</td>
                    <td className="px-4 py-3.5 tabular-nums text-ink sm:px-5">{brand.royalty}</td>
                    <td className="px-4 py-3.5 tabular-nums text-ink sm:px-5">{brand.revenue}</td>
                    <td className="px-4 py-3.5 font-semibold text-ink-muted sm:px-5">{brand.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-ink-faint">
            Ranges are directional industry estimates for planning — confirm current FDD disclosures for each brand.
          </p>
        </HubSection>

        {/* 5. Investment levels */}
        <HubSection
          id="investment-levels"
          title="Cheapest Fast Food Franchises & Investment Levels"
          subtitle="Find fast food franchises under $250K, under $500K, $500K–$1M, and $1M+ drive-through formats."
        >
          <ul className="grid gap-4 sm:grid-cols-2">
            {data.investmentLevels.map((level) => (
              <li key={level.label}>
                <HashLink
                  href={level.href}
                  className="card-interactive flex h-full flex-col rounded-2xl border border-border bg-surface p-6"
                >
                  <p className="font-display text-lg font-semibold text-ink">{level.label}</p>
                  <p className="mt-2 text-sm text-ink-muted">{level.detail}</p>
                  <span className="mt-4 text-sm font-semibold text-accent">
                    View {level.filter} brands →
                  </span>
                </HashLink>
              </li>
            ))}
          </ul>
        </HubSection>

        {/* 6. Fees */}
        <HubSection
          id="fees"
          title="Fast Food Franchise Fees & Royalties"
          subtitle="Ongoing fees compound every year — underwrite the full stack, not just the initial franchise fee."
          className="bg-surface-muted/30"
        >
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Cost</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Small</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Medium</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Large</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Economics impact</th>
                </tr>
              </thead>
              <tbody>
                {data.feeRows.map((row) => (
                  <tr key={row.cost} className="border-b border-border-subtle last:border-0">
                    <td className="px-4 py-3.5 font-medium text-ink sm:px-5">{row.cost}</td>
                    <td className="px-4 py-3.5 tabular-nums text-ink sm:px-5">{row.small}</td>
                    <td className="px-4 py-3.5 tabular-nums text-ink sm:px-5">{row.medium}</td>
                    <td className="px-4 py-3.5 tabular-nums text-ink sm:px-5">{row.large}</td>
                    <td className="px-4 py-3.5 text-ink-muted sm:px-5">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 rounded-2xl border border-border bg-surface px-5 py-4 text-sm leading-relaxed text-ink-muted">
            {data.feeInsight}
          </p>
        </HubSection>

        {/* 7. Revenue */}
        <HubSection
          id="revenue"
          title="How Much Revenue Does a Fast Food Franchise Generate?"
          subtitle="Distinguish systemwide average unit volume (AUV) from actual owner economics — not every location earns the same amount."
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.revenuePoints.map((point) => (
              <li key={point.title} className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-display text-base font-semibold text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{point.detail}</p>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-10 max-w-md">
            {(
              [
                { label: "Lower-performing location", value: data.revenueBenchmark.small },
                { label: "Typical location", value: data.revenueBenchmark.medium },
                { label: "High-performing location", value: data.revenueBenchmark.large },
              ] as const
            ).map((tier, i) => (
              <div key={tier.label}>
                {i > 0 && (
                  <div className="flex justify-center py-2" aria-hidden="true">
                    <span className="text-ink-faint">↓</span>
                  </div>
                )}
                <div className="rounded-2xl border border-border bg-surface px-6 py-5 text-center">
                  <p className="text-xs font-semibold tracking-wider text-ink-faint uppercase">{tier.label}</p>
                  <p
                    className="mt-2 font-display text-2xl font-bold tabular-nums"
                    style={{ color: "var(--metric-revenue)" }}
                  >
                    {tier.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-ink-faint">{data.revenueBenchmark.note}</p>
        </HubSection>

        {/* 8. Profit */}
        <HubSection
          id="profitability"
          title="How Profitable Is a Fast Food Franchise?"
          subtitle="A simplified P&L shows where food, labor, rent, and royalties consume revenue before owner income."
          className="bg-surface-muted/30"
        >
          <div className="mx-auto max-w-xl rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
            <ol className="space-y-0">
              {data.pnlRows.map((row, i) => (
                <li key={row.label}>
                  {i > 0 && (
                    <div className="flex justify-center py-1" aria-hidden="true">
                      <span className="text-ink-faint">↓</span>
                    </div>
                  )}
                  <div
                    className={`flex items-center justify-between gap-4 rounded-xl px-4 py-3 ${
                      row.kind === "result"
                        ? "bg-accent-soft/50 font-semibold"
                        : row.kind === "revenue"
                          ? "bg-surface-muted/60"
                          : ""
                    }`}
                  >
                    <span className={row.kind === "expense" ? "text-ink-muted" : "text-ink"}>{row.label}</span>
                    <span
                      className="tabular-nums"
                      style={{
                        color:
                          row.kind === "result"
                            ? "var(--metric-margin)"
                            : row.kind === "revenue"
                              ? "var(--metric-revenue)"
                              : undefined,
                      }}
                    >
                      {row.value}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-8">
            <p className="text-center text-xs font-semibold tracking-wider text-accent uppercase">
              Estimated Operating Margin
            </p>
            <dl className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-surface px-5 py-5 text-center">
                <dt className="text-xs text-ink-faint">Small</dt>
                <dd className="mt-2 font-display text-2xl font-bold" style={{ color: "var(--metric-margin)" }}>
                  {data.profitMarginBenchmark.small}
                </dd>
              </div>
              <div className="rounded-2xl border border-border bg-surface px-5 py-5 text-center">
                <dt className="text-xs text-ink-faint">Medium</dt>
                <dd className="mt-2 font-display text-2xl font-bold" style={{ color: "var(--metric-margin)" }}>
                  {data.profitMarginBenchmark.medium}
                </dd>
              </div>
              <div className="rounded-2xl border border-border bg-surface px-5 py-5 text-center">
                <dt className="text-xs text-ink-faint">Large</dt>
                <dd className="mt-2 font-display text-2xl font-bold" style={{ color: "var(--metric-margin)" }}>
                  {data.profitMarginBenchmark.large}
                </dd>
              </div>
            </dl>
            <div className="mt-6 rounded-2xl border border-border bg-surface px-5 py-5 text-center">
              <p className="text-xs font-semibold tracking-wider text-accent uppercase">
                $1M Revenue Could Produce
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-muted">
                <li>{data.profitExample.small}</li>
                <li>{data.profitExample.medium}</li>
                <li>{data.profitExample.large}</li>
              </ul>
            </div>
            <p className="mt-4 text-center text-xs text-ink-faint">{data.profitDisclaimer}</p>
          </div>
        </HubSection>

        {/* 9. Owner income */}
        <HubSection
          id="owner-income"
          title="How Much Does a Fast Food Franchise Owner Make?"
          subtitle="Revenue ≠ Profit ≠ Owner Income — follow cash from sales through debt service to take-home."
        >
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full min-w-[420px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Metric</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Example</th>
                </tr>
              </thead>
              <tbody>
                {data.ownerIncomeExample.map((row) => (
                  <tr key={row.metric} className="border-b border-border-subtle last:border-0">
                    <td className="px-4 py-3.5 text-ink-muted sm:px-5">{row.metric}</td>
                    <td className="px-4 py-3.5 font-semibold tabular-nums text-ink sm:px-5">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-surface-muted/40 px-6 py-8 text-center">
            <p className="text-xs font-semibold tracking-wider text-accent uppercase">Owner Income Benchmark</p>
            <div className="mt-4 flex flex-wrap items-end justify-center gap-6 sm:gap-10">
              <div>
                <p className="text-xs text-ink-faint">Small</p>
                <p className="font-display text-2xl font-bold tabular-nums" style={{ color: "var(--metric-salary)" }}>
                  {data.ownerIncomeBenchmark.small}
                </p>
              </div>
              <div>
                <p className="text-xs text-ink-faint">Medium</p>
                <p className="font-display text-3xl font-bold tabular-nums" style={{ color: "var(--metric-salary)" }}>
                  {data.ownerIncomeBenchmark.medium}
                </p>
              </div>
              <div>
                <p className="text-xs text-ink-faint">Large</p>
                <p className="font-display text-2xl font-bold tabular-nums" style={{ color: "var(--metric-salary)" }}>
                  {data.ownerIncomeBenchmark.large}
                </p>
              </div>
            </div>
            <p className="mx-auto mt-4 max-w-lg text-sm text-ink-muted">{data.ownerIncomeBenchmark.note}</p>
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold text-ink">Owner income varies dramatically depending on:</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {data.ownerIncomeDrivers.map((driver) => (
                <li key={driver} className="flex items-center gap-2 text-sm text-ink-muted">
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {driver}
                </li>
              ))}
            </ul>
          </div>
        </HubSection>

        {/* 10. Break-even */}
        <HubSection
          id="break-even"
          title="How Long Does It Take to Break Even on a Fast Food Franchise?"
          subtitle="Adjust investment, revenue, margin, financing, and owner income to model simple payback for a fast food franchise."
          featured
          className="bg-surface-muted/30"
        >
          <FastFoodBreakEvenCalculator />
        </HubSection>

        {/* 11. ROI */}
        <HubSection
          id="roi"
          title="Fast Food Franchise ROI"
          subtitle="Three metrics that matter more than brand slogans when comparing fast food franchise opportunities."
        >
          <ul className="grid gap-4 sm:grid-cols-3">
            {data.roiMetrics.map((metric) => (
              <li key={metric.title} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{metric.title}</h3>
                <p className="mt-2 text-sm font-medium text-accent">{metric.formula}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{metric.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-ink-muted">
            Use the{" "}
            <HashLink href="#calculator" className="font-semibold text-accent hover:underline">
              investment calculator
            </HashLink>{" "}
            above to estimate ROI, cash-on-cash return, and payback for a specific concept.
          </p>
        </HubSection>

        {/* 12. Drive-through vs traditional */}
        <HubSection
          id="drive-through"
          title="Drive-Through vs Traditional Fast Food Franchise"
          subtitle="Drive-through pads usually raise CapEx and staffing — and can raise revenue potential when traffic supports the site."
          className="bg-surface-muted/30"
        >
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Metric</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Drive-Through</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Traditional</th>
                </tr>
              </thead>
              <tbody>
                {data.driveThroughVsTraditional.map((row) => (
                  <tr key={row.metric} className="border-b border-border-subtle last:border-0">
                    <td className="px-4 py-3.5 font-medium text-ink sm:px-5">{row.metric}</td>
                    <td className="px-4 py-3.5 text-ink-muted sm:px-5">{row.driveThrough}</td>
                    <td className="px-4 py-3.5 text-ink-muted sm:px-5">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </HubSection>

        {/* 13. vs Independent */}
        <HubSection
          id="vs-independent"
          title="Fast Food Franchise vs Independent Fast Food Restaurant"
          subtitle="Franchise systems trade royalties and menu restrictions for brand demand and operating playbooks."
        >
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5" />
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Franchise</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Independent</th>
                </tr>
              </thead>
              <tbody>
                {data.vsIndependent.map((row) => (
                  <tr key={row.factor} className="border-b border-border-subtle last:border-0">
                    <td className="px-4 py-3.5 font-medium text-ink sm:px-5">{row.factor}</td>
                    <td className="px-4 py-3.5 text-ink-muted sm:px-5">{row.franchise}</td>
                    <td className="px-4 py-3.5 text-ink-muted sm:px-5">{row.independent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/franchise/food/restaurant-franchise/#vs-independent"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              Restaurant Franchise vs Independent Restaurant →
            </Link>
          </div>
        </HubSection>

        {/* 14. Worth it */}
        <HubSection
          id="worth-it"
          title="Is a Fast Food Franchise Worth It?"
          subtitle="Use an investment scorecard — not a generic pros/cons list — to judge fit for your capital and operating style."
          className="bg-surface-muted/30"
        >
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full min-w-[420px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Factor</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Importance</th>
                </tr>
              </thead>
              <tbody>
                {data.scorecard.map((row) => (
                  <tr key={row.factor} className="border-b border-border-subtle last:border-0">
                    <td className="px-4 py-3.5 text-ink sm:px-5">{row.factor}</td>
                    <td className="px-4 py-3.5 font-semibold text-ink-muted sm:px-5">{row.importance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-ink">Best suited for</h3>
            <ul className="mt-4 space-y-2.5">
              {data.bestSuitedFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                  <span className="mt-0.5 font-semibold text-[var(--metric-margin)]" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </HubSection>

        {/* 15. Types */}
        <HubSection
          id="types"
          title="Types of Fast Food Franchises"
          subtitle="Concept-level pages deepen long-tail SEO — each will expand into its own franchise economics landing page."
        >
          <LinkCardGrid items={[...data.types]} columns={3} />
        </HubSection>

        {/* 16. FAQ */}
        <HubSection
          id="faq"
          title="Fast Food Franchise FAQs"
          subtitle="High-intent questions buyers ask before opening a fast food franchise."
          className="bg-surface-muted/30"
        >
          <IndustryFaq faqs={[...data.faqs]} />
        </HubSection>

        {/* Explore */}
        <HubSection
          id="explore"
          title="Continue Exploring"
          subtitle="Go deeper on restaurant franchise economics or related food concepts."
        >
          <LinkCardGrid items={[...data.exploreLinks]} columns={3} />
        </HubSection>

        <HubSection
          id="data-sources"
          title="Data Sources & Methodology"
          subtitle="Transparent attribution for fast food franchise benchmarks, calculator formulas, and planning limitations."
          className="bg-surface-muted/30"
        >
          <DataSourcesAttribution attribution={fastFoodFranchiseAttribution} showMacroSources />
        </HubSection>

        <section className="border-b border-border/60 bg-gradient-to-br from-accent to-accent-hover">
          <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Compare Fast Food Franchise Opportunities
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              Model investment, royalties, revenue, owner income, and payback — then diligence the brands that fit your
              capital band.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <HashLink
                href="#calculator"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-white/90"
              >
                Open Calculator
              </HashLink>
              <HashLink
                href="#compare-brands"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Compare Brands
              </HashLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
