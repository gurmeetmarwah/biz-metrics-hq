import Link from "next/link";
import { notFound } from "next/navigation";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { FitnessFranchiseCalculator } from "@/components/franchise/FitnessFranchiseCalculator";
import {
  buildCalculatorFaqs,
  buildCalculatorPageMeta,
  fitnessFranchiseCalcConfigs,
  fitnessFranchiseCalculatorSlugs,
  getCalculatorKind,
  isFitnessFranchiseCalculatorSlug,
  isFitnessFranchiseVertical,
  type FitnessFranchiseVertical,
} from "@/lib/franchise/fitness/franchise-calculators";

type PageProps = { params: Promise<{ slug: string }> };

export function generateFitnessFranchiseCalculatorStaticParams() {
  return fitnessFranchiseCalculatorSlugs.map((slug) => ({ slug }));
}

export async function generateFitnessFranchiseCalculatorMetadata(vertical: FitnessFranchiseVertical, params: PageProps["params"]) {
  const { slug } = await params;
  if (!isFitnessFranchiseCalculatorSlug(slug)) return { title: "Calculator Not Found | BizMetricsHQ" };
  const meta = buildCalculatorPageMeta(vertical, slug);
  return createCalculatorMetadata({ title: meta.shortTitle, description: meta.description });
}

export async function FitnessFranchiseCalculatorPage({
  vertical,
  params,
}: {
  vertical: FitnessFranchiseVertical;
  params: PageProps["params"];
}) {
  if (!isFitnessFranchiseVertical(vertical)) notFound();
  const { slug } = await params;
  if (!isFitnessFranchiseCalculatorSlug(slug)) notFound();

  const config = fitnessFranchiseCalcConfigs[vertical];
  const kind = getCalculatorKind(slug);
  if (!kind) notFound();

  const pageMeta = buildCalculatorPageMeta(vertical, slug);
  const faqs = buildCalculatorFaqs(vertical, slug);
  const siblingCalcs = fitnessFranchiseCalculatorSlugs.filter((s) => s !== slug);

  return (
    <CalculatorPageShell
      meta={{
        title: pageMeta.shortTitle,
        shortTitle: pageMeta.shortTitle,
        subtitle: pageMeta.subtitle,
        description: pageMeta.description,
      }}
      intro={{
        lead: `Use this ${config.industryLabel.toLowerCase()} franchise calculator to stress-test investment assumptions before you buy. Adjust fees, membership economics, and operating margins to match the FDD and local market.`,
        bullets: [
          "Includes royalties and marketing fund drag on cash flow",
          "Defaults reflect directional category ranges for planning",
          `Return to the ${config.guideLabel} for brand comparisons and rankings`,
        ],
        audience: `Built for ${config.industryLabel.toLowerCase()} franchise buyers, multi-unit operators, and advisors modeling unit economics.`,
      }}
      badge={pageMeta.badge}
      hubHref={config.guideHref}
      hubLabel={config.industryLabel + " Franchise"}
      sampleSize={config.sampleSize}
      dataVintage={config.dataVintage}
      faqs={faqs}
    >
      <FitnessFranchiseCalculator vertical={vertical} slug={slug} />
      <section className="border-b border-border/60 bg-surface-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <h2 className="font-display text-lg font-semibold text-ink">More {config.industryLabel} Franchise Calculators</h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {siblingCalcs.map((sibling) => {
              const siblingKind = getCalculatorKind(sibling)!;
              return (
                <li key={sibling}>
                  <Link
                    href={`/franchise/fitness/${vertical}/calculators/${sibling}/`}
                    className="card-interactive block rounded-2xl border border-border bg-surface px-4 py-4 text-sm font-medium text-ink hover:text-accent"
                  >
                    {siblingKind.cardLabel(config.industryLabel)}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-sm text-ink-muted">
            <Link href={config.guideHref} className="font-medium text-accent hover:underline">
              ← Back to {config.guideLabel}
            </Link>
          </p>
        </div>
      </section>
    </CalculatorPageShell>
  );
}
