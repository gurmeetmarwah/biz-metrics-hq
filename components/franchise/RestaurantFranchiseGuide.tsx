import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { HashLink } from "@/components/ui/HashLink";
import { RestaurantFranchiseInvestmentCalculator } from "@/components/franchise/RestaurantFranchiseInvestmentCalculator";
import { restaurantFranchiseGuide as data } from "@/lib/franchise/food/restaurant-franchise";

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

export function RestaurantFranchiseGuide() {
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
              Franchise Guide · {data.meta.dataVintage} · {data.meta.sampleSize}
            </p>

            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {data.meta.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {data.meta.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <HashLink
                href="#calculator"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Investment Calculator
              </HashLink>
              <HashLink
                href="#opportunities"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Compare Franchises
              </HashLink>
            </div>
          </div>
        </section>

        {/* Benchmark strip */}
        <section aria-label="Restaurant franchise benchmarks" className="border-b border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-wider text-accent uppercase">Benchmark Strip</p>
              <h2 className="mt-1 font-display text-lg font-semibold text-ink sm:text-xl">
                Restaurant Franchise Economics at a Glance
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
              Small = compact sandwich/coffee formats · Medium = typical fast casual / mid-QSR · Large = full QSR builds
            </p>
          </div>
        </section>

        <IndustrySectionNav items={[...data.sectionNav]} />

        {/* 2. Calculator */}
        <HubSection
          id="calculator"
          title="Restaurant Franchise Investment Calculator"
          subtitle="Model total investment, cash required, loan payments, break-even revenue, and payback before you buy."
          featured
          className="bg-surface-muted/30"
        >
          <RestaurantFranchiseInvestmentCalculator />
        </HubSection>

        {/* 3. Costs */}
        <HubSection
          id="costs"
          title="How Much Does a Restaurant Franchise Cost?"
          subtitle="Restaurant franchise investment is a stack of CapEx and working-capital line items — not a single sticker price."
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
              Typical Total Investment
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

        {/* 4. Fees */}
        <HubSection
          id="fees"
          title="Restaurant Franchise Fees & Royalties"
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
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Profitability impact</th>
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
        </HubSection>

        {/* 5. Opportunities / brands */}
        <HubSection
          id="opportunities"
          title="Restaurant Franchise Opportunities"
          subtitle="Side-by-side economics for national restaurant franchise brands — open a profile for deeper diligence."
          featured
        >
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full min-w-[800px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Franchise</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Initial Investment</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Franchise Fee</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Royalty</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Revenue</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Size</th>
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

        {/* 6. Revenue */}
        <HubSection
          id="revenue"
          title="How Much Revenue Does a Restaurant Franchise Generate?"
          subtitle="Franchise sales vary widely by concept, location maturity, and daypart — do not treat AUV as a guarantee."
          className="bg-surface-muted/30"
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.revenuePoints.map((point) => (
              <li key={point.title} className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-display text-base font-semibold text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{point.detail}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {(
              [
                { label: "Small", value: data.revenueBenchmark.small },
                { label: "Medium", value: data.revenueBenchmark.medium },
                { label: "Large", value: data.revenueBenchmark.large },
              ] as const
            ).map((tier) => (
              <div key={tier.label} className="bg-surface px-5 py-6 text-center">
                <p className="text-xs font-semibold tracking-wider text-ink-faint uppercase">{tier.label}</p>
                <p
                  className="mt-2 font-display text-2xl font-bold tabular-nums text-ink"
                  style={{ color: "var(--metric-revenue)" }}
                >
                  {tier.value}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-ink-faint">
            Revenue by store size — not every franchise earns the same amount.
          </p>
        </HubSection>

        {/* 7. Profitability */}
        <HubSection
          id="profitability"
          title="How Profitable Is a Restaurant Franchise?"
          subtitle="A simplified P&L shows where franchise fees and operating costs consume revenue before owner income."
        >
          <div className="mx-auto max-w-xl rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
            <ol className="space-y-0">
              {data.pnlRows.map((row, i) => (
                <li key={row.label} className="relative">
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
                          : "bg-transparent"
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
              Typical Restaurant Franchise Profit Margin
            </p>
            <dl className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-surface-muted/40 px-5 py-5 text-center">
                <dt className="text-xs text-ink-faint">Small</dt>
                <dd className="mt-2 font-display text-2xl font-bold" style={{ color: "var(--metric-margin)" }}>
                  {data.profitMarginBenchmark.small}
                </dd>
              </div>
              <div className="rounded-2xl border border-border bg-surface-muted/40 px-5 py-5 text-center">
                <dt className="text-xs text-ink-faint">Medium</dt>
                <dd className="mt-2 font-display text-2xl font-bold" style={{ color: "var(--metric-margin)" }}>
                  {data.profitMarginBenchmark.medium}
                </dd>
              </div>
              <div className="rounded-2xl border border-border bg-surface-muted/40 px-5 py-5 text-center">
                <dt className="text-xs text-ink-faint">Large</dt>
                <dd className="mt-2 font-display text-2xl font-bold" style={{ color: "var(--metric-margin)" }}>
                  {data.profitMarginBenchmark.large}
                </dd>
              </div>
            </dl>
            <ul className="mt-4 space-y-2 text-center text-sm text-ink-muted">
              <li>{data.profitExample.small}</li>
              <li>{data.profitExample.medium}</li>
              <li>{data.profitExample.large}</li>
            </ul>
          </div>
        </HubSection>

        {/* 8. Owner income */}
        <HubSection
          id="owner-income"
          title="How Much Does a Restaurant Franchise Owner Make?"
          subtitle="Do not equate restaurant revenue with personal income — operating profit still has to cover compensation, debt service, and reserves."
          className="bg-surface-muted/30"
        >
          <div className="rounded-2xl border border-border bg-surface px-6 py-8 text-center">
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
        </HubSection>

        {/* 9. Break-even */}
        <HubSection
          id="break-even"
          title="How Long Does It Take to Break Even?"
          subtitle="Payback connects initial investment to monthly profit until cumulative cash recovers CapEx."
        >
          <div className="mx-auto max-w-md">
            {(
              [
                { label: "Initial Investment", value: data.breakEvenExample.investment },
                { label: "Monthly Profit", value: data.breakEvenExample.monthlyProfit },
                { label: "Annual Profit", value: data.breakEvenExample.annualProfit },
                { label: "Estimated Payback", value: data.breakEvenExample.paybackYears },
              ] as const
            ).map((step, i) => (
              <div key={step.label}>
                {i > 0 && (
                  <div className="flex justify-center py-2" aria-hidden="true">
                    <span className="text-lg text-ink-faint">↓</span>
                  </div>
                )}
                <div
                  className={`rounded-2xl border border-border px-6 py-5 text-center ${
                    i === 3 ? "bg-accent-soft/50" : "bg-surface"
                  }`}
                >
                  <p className="text-xs font-semibold tracking-wider text-ink-faint uppercase">{step.label}</p>
                  <p className="mt-2 font-display text-2xl font-bold tabular-nums text-ink sm:text-3xl">{step.value}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-xl text-center text-sm text-ink-muted">{data.breakEvenExample.disclaimer}</p>
        </HubSection>

        {/* 10. Financing */}
        <HubSection
          id="financing"
          title="How to Finance a Restaurant Franchise"
          subtitle="Most buyers blend lender debt with personal or partner cash to cover the down payment and reserves."
          className="bg-surface-muted/30"
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.financingOptions.map((opt) => (
              <li key={opt.title} className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-display text-base font-semibold text-ink">{opt.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{opt.detail}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-border bg-surface px-6 py-8">
            <p className="text-center text-xs font-semibold tracking-wider text-accent uppercase">
              How Much Cash Do You Need?
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {(
                [
                  { label: "Small", example: data.cashRequirementExample.small },
                  { label: "Medium", example: data.cashRequirementExample.medium },
                  { label: "Large", example: data.cashRequirementExample.large },
                ] as const
              ).map((tier) => (
                <div key={tier.label} className="rounded-xl border border-border bg-surface-muted/40 p-4">
                  <p className="text-center text-xs font-semibold tracking-wider text-ink-faint uppercase">
                    {tier.label}
                  </p>
                  <dl className="mt-3 space-y-2 text-sm">
                    <div className="flex justify-between gap-3">
                      <dt className="text-ink-muted">Total Investment</dt>
                      <dd className="font-semibold tabular-nums text-ink">{tier.example.totalInvestment}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-ink-muted">Financed</dt>
                      <dd className="font-semibold tabular-nums text-ink">{tier.example.financed}</dd>
                    </div>
                    <div className="flex justify-between gap-3 border-t border-border-subtle pt-2">
                      <dt className="text-ink-muted">Cash Required</dt>
                      <dd className="font-semibold tabular-nums text-accent">{tier.example.cashRequired}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-4 max-w-lg text-center text-sm text-ink-muted">
              {data.cashRequirementExample.note}
            </p>
          </div>
        </HubSection>

        {/* 11. vs Independent */}
        <HubSection
          id="vs-independent"
          title="Restaurant Franchise vs Starting an Independent Restaurant"
          subtitle="Franchise systems trade royalties and restrictions for brand demand and playbooks — independents keep margin and control."
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
              href="/industries/comparisons/restaurant-vs-food-truck/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              Explore restaurant business model comparisons →
            </Link>
          </div>
        </HubSection>

        {/* 12. Worth it */}
        <HubSection
          id="worth-it"
          title="Is Buying a Restaurant Franchise Worth It?"
          subtitle="Use a decision framework — not a generic yes or no — to judge fit for your capital and operating style."
          className="bg-surface-muted/30"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-base font-semibold text-ink">Potential advantages</h3>
              <ul className="mt-4 space-y-2.5">
                {data.advantages.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <span className="mt-0.5 font-semibold text-[var(--metric-margin)]" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-base font-semibold text-ink">Potential disadvantages</h3>
              <ul className="mt-4 space-y-2.5">
                {data.disadvantages.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <span className="mt-0.5 font-semibold text-red-600" aria-hidden="true">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-display text-lg font-semibold text-ink">Restaurant Franchise ROI Scorecard</h3>
            <p className="mt-2 text-sm text-ink-muted">
              Score each factor for a specific brand and territory before committing capital.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {data.roiScorecard.map((row) => (
                <li key={row.factor} className="rounded-xl border border-border bg-surface px-4 py-4">
                  <p className="text-sm font-semibold text-ink">{row.factor}</p>
                  <p className="mt-1 text-sm text-ink-muted">{row.guidance}</p>
                </li>
              ))}
            </ul>
          </div>
        </HubSection>

        {/* 13. Concepts */}
        <HubSection
          id="concepts"
          title="Restaurant Franchise Types"
          subtitle="Concept-level economics pages deepen long-tail research — each will expand into its own franchise landing page."
        >
          <LinkCardGrid items={[...data.concepts]} columns={3} />
        </HubSection>

        {/* 14. Investment levels */}
        <HubSection
          id="investment-levels"
          title="Restaurant Franchises by Investment"
          subtitle="Filter opportunities by capital band — useful for searches like restaurant franchises under $500k or under $1 million."
          className="bg-surface-muted/30"
        >
          <LinkCardGrid items={[...data.investmentLevels]} columns={3} />
        </HubSection>

        {/* 15. FAQ */}
        <HubSection
          id="faq"
          title="Restaurant Franchise FAQs"
          subtitle="High-intent questions prospective restaurant franchise buyers ask before investing."
        >
          <IndustryFaq faqs={[...data.faqs]} />
        </HubSection>

        {/* 16. Continue exploring */}
        <HubSection
          id="explore"
          title="Continue Exploring"
          subtitle="Go deeper on restaurant business economics or browse related franchise categories."
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-base font-semibold text-ink">Explore Restaurant Business Economics</h3>
              <ul className="mt-4 space-y-2">
                {data.exploreRestaurantEconomics.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="text-sm font-medium text-accent hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-ink">Explore Other Franchise Categories</h3>
              <div className="mt-4">
                <LinkCardGrid items={[...data.exploreOtherFranchises]} columns={2} />
              </div>
            </div>
          </div>
        </HubSection>

        <section className="border-b border-border/60 bg-gradient-to-br from-accent to-accent-hover">
          <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Compare Restaurant Franchise Opportunities
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              Model investment, fees, revenue, and payback — then diligence the brands that fit your capital and
              operating goals.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <HashLink
                href="#calculator"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-white/90"
              >
                Open Calculator
              </HashLink>
              <HashLink
                href="#opportunities"
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
