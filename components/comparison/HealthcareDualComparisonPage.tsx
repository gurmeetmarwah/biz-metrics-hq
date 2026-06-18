import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { HealthcareDualDecisionTool } from "@/components/comparison/HealthcareDualDecisionTool";
import type { HealthcareDualComparisonData } from "@/lib/industries/comparisons/healthcare-comparison-types";

type StartupItem = { item: string; percent: number };

function Section({
  id,
  title,
  subtitle,
  children,
  className = "bg-surface",
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-b border-border/60 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-2xl text-base text-ink-muted">{subtitle}</p>}
        <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function FlowSteps({ steps }: { steps: readonly string[] }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center">
          <span className="rounded-lg border border-border bg-surface-muted/50 px-5 py-2.5 text-sm font-semibold text-ink">
            {step}
          </span>
          {i < steps.length - 1 && (
            <span className="my-1 text-ink-faint" aria-hidden="true">
              ↓
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function MarginGauge({
  label,
  tiers,
}: {
  label: string;
  tiers: { weak: string; average: string; strong: string };
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <p className="text-sm font-semibold text-ink">{label}</p>
      <div className="mt-4 flex h-3 overflow-hidden rounded-full">
        <div className="w-1/3 bg-metric-salary/40" title={`Weak: ${tiers.weak}`} />
        <div className="w-1/3 bg-metric-margin/45" title={`Average: ${tiers.average}`} />
        <div className="w-1/3 bg-metric-revenue/40" title={`Strong: ${tiers.strong}`} />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
        <span className="text-ink-muted">Weak {tiers.weak}</span>
        <span className="text-ink-muted">Avg {tiers.average}</span>
        <span className="text-ink-muted">Strong {tiers.strong}</span>
      </div>
    </div>
  );
}

function StartupVisual({
  title,
  items,
  color,
}: {
  title: string;
  items: readonly StartupItem[];
  color: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <p className="font-display font-semibold text-ink">{title}</p>
      <div className="mt-4 flex h-4 overflow-hidden rounded-full">
        {items.map((item) => (
          <div
            key={item.item}
            style={{ width: `${item.percent}%`, background: color, opacity: 0.5 + item.percent / 200 }}
            title={`${item.item}: ${item.percent}%`}
          />
        ))}
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.item} className="flex justify-between text-ink-muted">
            <span>{item.item}</span>
            <span className="font-semibold tabular-nums text-ink">{item.percent}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComparisonTable({
  headers,
  rows,
}: {
  headers: [string, string, string];
  rows: readonly { label: string; left: string; right: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-surface">
      <table className="w-full min-w-[480px] text-sm">
        <thead>
          <tr className="border-b border-border-subtle bg-surface-muted/50">
            <th className="px-5 py-3.5 text-left font-semibold text-ink">{headers[0]}</th>
            <th className="px-5 py-3.5 text-right font-semibold text-metric-salary">{headers[1]}</th>
            <th className="px-5 py-3.5 text-right font-semibold text-metric-margin">{headers[2]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i < rows.length - 1 ? "border-b border-border-subtle" : ""}>
              <td className="px-5 py-4 font-medium text-ink-muted">{row.label}</td>
              <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink">{row.left}</td>
              <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink">{row.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function WinnerScorecard({
  categories,
  leftLabel,
  rightLabel,
}: {
  categories: readonly { label: string; left: number; right: number; winner: string }[];
  leftLabel: string;
  rightLabel: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {categories.map((cat) => (
        <div key={cat.label} className="rounded-2xl border border-border bg-surface p-6">
          <p className="text-sm font-semibold text-ink">{cat.label}</p>
          <div className="mt-5 space-y-4">
            <div>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium text-ink">{leftLabel}</span>
                <span className="tabular-nums text-ink-muted">{cat.left}/10</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-surface-muted">
                <div className="h-full rounded-full bg-metric-salary" style={{ width: `${cat.left * 10}%` }} />
              </div>
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium text-ink">{rightLabel}</span>
                <span className="tabular-nums text-ink-muted">{cat.right}/10</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-surface-muted">
                <div className="h-full rounded-full bg-metric-margin" style={{ width: `${cat.right * 10}%` }} />
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm font-semibold text-accent">Winner: {cat.winner}</p>
        </div>
      ))}
    </div>
  );
}

export function HealthcareDualComparisonPage({ data }: { data: HealthcareDualComparisonData }) {
  const { left, right } = data.comparisonLabels;

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
        <section className="hero-mesh border-b border-border/60">
          <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
            <nav aria-label="Breadcrumb" className="mb-6 text-left text-sm text-ink-faint">
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href={data.comparisonLabels.breadcrumbHub.href} className="hover:text-accent">
                {data.comparisonLabels.breadcrumbHub.label}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-ink-muted">{data.comparisonMeta.title}</span>
            </nav>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-ink-muted">
              <span className="size-1.5 rounded-full bg-accent" />
              Side-by-side comparison · {data.comparisonMeta.dataVintage}
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {data.comparisonMeta.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {data.comparisonMeta.subtitle}
            </p>
          </div>
        </section>

        <section className="border-b border-border/60 bg-surface-muted/50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Decision Snapshot</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-subtle bg-surface-muted/50">
                    <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Best For</th>
                    <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {data.decisionSnapshot.map((row, i) => (
                    <tr
                      key={row.factor}
                      className={i < data.decisionSnapshot.length - 1 ? "border-b border-border-subtle" : ""}
                    >
                      <td className="px-5 py-4 text-ink-muted sm:px-6">{row.factor}</td>
                      <td className="px-5 py-4 text-right font-semibold text-accent sm:px-6">{row.winner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="kpi-comparison" className="border-b border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">KPI Comparison Dashboard</h2>
            <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
            <div className="mt-8 max-h-[70vh] overflow-auto rounded-2xl border border-border lg:max-h-none lg:overflow-visible">
              <table className="w-full min-w-[480px] text-sm">
                <thead className="sticky top-0 z-10 bg-surface-muted/95 backdrop-blur-sm">
                  <tr className="border-b border-border-subtle">
                    <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">Metric</th>
                    <th className="px-5 py-3.5 text-right font-semibold text-metric-salary sm:px-6">{left}</th>
                    <th className="px-5 py-3.5 text-right font-semibold text-metric-margin sm:px-6">{right}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.kpiComparison.map((row, i) => (
                    <tr key={row.metric} className={i < data.kpiComparison.length - 1 ? "border-b border-border-subtle" : ""}>
                      <td className="px-5 py-4 font-medium text-ink-muted sm:px-6">{row.metric}</td>
                      <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">{row.left}</td>
                      <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">{row.right}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <Section title="Winner Scorecard" className="bg-surface-muted/50">
          <WinnerScorecard categories={data.winnerScorecard} leftLabel={left} rightLabel={right} />
        </Section>

        <Section id="business-model" title="Business Model Overview">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-metric-salary">{left}</h3>
              <p className="mt-2 text-sm text-ink-muted">Revenue Sources</p>
              <ul className="mt-4 space-y-2">
                {data.leftRevenueSources.map((source) => (
                  <li key={source} className="flex items-center gap-2 text-sm text-ink-muted">
                    <span className="size-1.5 rounded-full bg-metric-salary" aria-hidden="true" />
                    {source}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-metric-margin">{right}</h3>
              <p className="mt-2 text-sm text-ink-muted">Revenue Sources</p>
              <ul className="mt-4 space-y-2">
                {data.rightRevenueSources.map((source) => (
                  <li key={source} className="flex items-center gap-2 text-sm text-ink-muted">
                    <span className="size-1.5 rounded-full bg-metric-margin" aria-hidden="true" />
                    {source}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="revenue-comparison" title="Revenue Comparison Center" subtitle="How each model converts patients into collections." className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-ink">{left}</h3>
              <div className="mt-6">
                <FlowSteps steps={data.revenueFunnel.left} />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-ink">{right}</h3>
              <div className="mt-6">
                <FlowSteps steps={data.revenueFunnel.right} />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-display font-semibold text-ink">Revenue Drivers</h3>
            <div className="mt-4">
              <ComparisonTable
                headers={["Driver", left, right]}
                rows={data.revenueDrivers.map((r) => ({ label: r.driver, left: r.left, right: r.right }))}
              />
            </div>
          </div>
        </Section>

        <Section id="patient-economics" title="Patient Economics Dashboard" subtitle="Lifetime value and visit economics — the core financial differentiator.">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-metric-salary">{left}</h3>
              <div className="mt-6">
                <FlowSteps steps={data.patientFunnel.left} />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-metric-margin">{right}</h3>
              <div className="mt-6">
                <FlowSteps steps={data.patientFunnel.right} />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-display font-semibold text-ink">Metrics Comparison</h3>
            <div className="mt-4">
              <ComparisonTable
                headers={["Metric", left, right]}
                rows={data.patientEconomicsMetrics.map((r) => ({ label: r.metric, left: r.left, right: r.right }))}
              />
            </div>
          </div>
        </Section>

        <Section id="operatory-economics" title="Operatory Economics Comparison" subtitle="Revenue per chair and provider productivity." className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-metric-salary">{left}</h3>
              <div className="mt-6">
                <FlowSteps steps={data.operatoryFunnel.left} />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-metric-margin">{right}</h3>
              <div className="mt-6">
                <FlowSteps steps={data.operatoryFunnel.right} />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <ComparisonTable
              headers={["Metric", left, right]}
              rows={data.operatoryMetrics.map((r) => ({ label: r.metric, left: r.left, right: r.right }))}
            />
          </div>
        </Section>

        <Section id="profitability" title="Profitability Comparison">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <MarginGauge label={left} tiers={data.marginTiers.left} />
            <MarginGauge label={right} tiers={data.marginTiers.right} />
          </div>
          <div className="mt-8">
            <h3 className="font-display font-semibold text-ink">Expense Breakdown</h3>
            <div className="mt-4">
              <ComparisonTable
                headers={["Expense", left, right]}
                rows={data.costStructureComparison.map((r) => ({ label: r.expense, left: r.left, right: r.right }))}
              />
            </div>
          </div>
        </Section>

        <Section id="insurance" title="Insurance Dependency Analysis" subtitle="Payer mix drives margin and pricing power." className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 text-center">
              <p className="font-display font-semibold text-metric-salary">{left}</p>
              <p className="mt-2 text-sm text-ink-muted">{data.insuranceHighlights.left.title}</p>
              <p className="mt-3 text-2xl font-bold tabular-nums text-ink">{data.insuranceHighlights.left.value}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 text-center">
              <p className="font-display font-semibold text-metric-margin">{right}</p>
              <p className="mt-2 text-sm text-ink-muted">{data.insuranceHighlights.right.title}</p>
              <p className="mt-3 text-2xl font-bold tabular-nums text-ink">{data.insuranceHighlights.right.value}</p>
            </div>
          </div>
          <div className="mt-8">
            <ComparisonTable
              headers={["Metric", left, right]}
              rows={data.insuranceComparison.map((r) => ({ label: r.metric, left: r.left, right: r.right }))}
            />
          </div>
        </Section>

        <Section id="owner-compensation" title="Owner Compensation Comparison">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {data.ownerIncomeComparison.map((item) => (
              <article key={item.model} className="card-interactive rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="text-sm font-medium text-ink-muted">{item.model}</p>
                <p className="my-3 text-2xl text-ink-faint" aria-hidden="true">
                  ↓
                </p>
                <p className="text-sm text-ink-muted">Compensation Benchmark</p>
                <p
                  className={`mt-2 text-2xl font-bold tabular-nums ${item.type === "left" ? "text-metric-salary" : "text-metric-margin"}`}
                >
                  {item.earnings}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="startup-costs" title="Startup Cost Comparison" subtitle="Investment required to launch or acquire each practice model." className="bg-surface-muted/50">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <StartupVisual title={left} items={data.leftStartupItems} color="var(--metric-salary)" />
            <StartupVisual title={right} items={data.rightStartupItems} color="var(--metric-margin)" />
          </div>
          <div className="mt-8">
            <h3 className="font-display font-semibold text-ink">Cost Breakdown</h3>
            <div className="mt-4">
              <ComparisonTable
                headers={["Expense", left, right]}
                rows={data.startupSideBySide.map((r) => ({ label: r.category, left: r.left, right: r.right }))}
              />
            </div>
          </div>
        </Section>

        <Section id="valuation" title="Valuation Comparison">
          <ComparisonTable
            headers={["Metric", left, right]}
            rows={data.valuationComparison.map((r) => ({ label: r.metric, left: r.left, right: r.right }))}
          />
          <div className="mt-8 rounded-2xl border border-border bg-surface-muted/50 p-6">
            <p className="text-center text-sm font-semibold text-ink">
              {data.valuationExampleTitle ?? "$1M Revenue Practice → Estimated Value"}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="text-center">
                <p className="text-sm text-ink-muted">{left}</p>
                <p className="my-2 text-ink-faint" aria-hidden="true">
                  ↓
                </p>
                <p className="text-xl font-bold tabular-nums text-metric-salary">{data.valuationExamples.left.value}</p>
                <p className="mt-1 text-xs text-ink-faint">{data.valuationExamples.left.note}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-ink-muted">{right}</p>
                <p className="my-2 text-ink-faint" aria-hidden="true">
                  ↓
                </p>
                <p className="text-xl font-bold tabular-nums text-metric-margin">{data.valuationExamples.right.value}</p>
                <p className="mt-1 text-xs text-ink-faint">{data.valuationExamples.right.note}</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="break-even" title="Break-Even Comparison" className="bg-surface-muted/50">
          <ComparisonTable
            headers={["Metric", left, right]}
            rows={data.breakEvenComparison.map((r) => ({ label: r.metric, left: r.left, right: r.right }))}
          />
        </Section>

        <Section id="growth-potential" title="Growth Potential Analysis">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-metric-salary">{data.scalingLeftTitle}</h3>
              <div className="mt-6">
                <FlowSteps steps={data.scalingLadder.left} />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-metric-margin">{data.scalingRightTitle}</h3>
              <div className="mt-6">
                <FlowSteps steps={data.scalingLadder.right} />
              </div>
            </div>
          </div>
        </Section>

        <Section id="capital-efficiency" title="Capital Efficiency" subtitle="Which model gives the best return on invested capital?" className="bg-surface-muted/50">
          <p className="mb-8 text-center text-lg font-semibold text-ink">
            If You Invest {data.capitalEfficiency.investment}
          </p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-metric-salary">{left}</h3>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between border-b border-border-subtle pb-3">
                  <dt className="text-ink-muted">Revenue Generated</dt>
                  <dd className="font-semibold tabular-nums text-ink">{data.capitalEfficiency.left.revenue}</dd>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-3">
                  <dt className="text-ink-muted">Profit Generated</dt>
                  <dd className="font-semibold tabular-nums text-ink">{data.capitalEfficiency.left.profit}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink-muted">Payback Period</dt>
                  <dd className="font-semibold tabular-nums text-accent">{data.capitalEfficiency.left.payback}</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-metric-margin">{right}</h3>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between border-b border-border-subtle pb-3">
                  <dt className="text-ink-muted">Revenue Generated</dt>
                  <dd className="font-semibold tabular-nums text-ink">{data.capitalEfficiency.right.revenue}</dd>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-3">
                  <dt className="text-ink-muted">Profit Generated</dt>
                  <dd className="font-semibold tabular-nums text-ink">{data.capitalEfficiency.right.profit}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink-muted">Payback Period</dt>
                  <dd className="font-semibold tabular-nums text-accent">{data.capitalEfficiency.right.payback}</dd>
                </div>
              </dl>
            </div>
          </div>
        </Section>

        <Section id="who-should-choose" title="Who Should Choose What?">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-metric-salary">{data.chooseLeftTitle}</h3>
              <ul className="mt-4 space-y-3">
                {data.chooseLeft.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink-muted">
                    <span className="text-metric-revenue" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display font-semibold text-metric-margin">{data.chooseRightTitle}</h3>
              <ul className="mt-4 space-y-3">
                {data.chooseRight.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink-muted">
                    <span className="text-metric-revenue" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="decision-tool" title="Interactive Decision Tool" className="bg-surface-muted/50">
          <HealthcareDualDecisionTool slug={data.comparisonMeta.slug} />
        </Section>

        <Section id="calculators" title="Related Calculators">
          <LinkCardGrid items={data.calculators} columns={2} />
        </Section>

        <Section id="related-comparisons" title="Related Comparisons" className="bg-surface-muted/50">
          <LinkCardGrid items={data.relatedComparisons} columns={2} />
        </Section>

        <Section id="faqs" title="Frequently Asked Questions">
          <IndustryFaq faqs={data.faqs} />
        </Section>

        <section className="border-t border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <div className="flex flex-wrap gap-4">
              <Link
                href={data.comparisonLabels.exploreHub.href}
                className="inline-flex items-center rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                ← {data.comparisonLabels.exploreHub.label}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}