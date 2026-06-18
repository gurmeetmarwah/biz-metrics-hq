import Link from "next/link";

type PopularCalculator = {
  label: string;
  description: string;
  href: string;
  accent: string;
  featured?: boolean;
};

export function PopularCalculatorsGrid({ calculators }: { calculators: readonly PopularCalculator[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {calculators.map((calc) => (
        <li key={calc.href}>
          <Link
            href={calc.href}
            className="card-interactive group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <span
              className="inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                background: `color-mix(in srgb, var(--${calc.accent}) 12%, transparent)`,
                color: `var(--${calc.accent})`,
              }}
            >
              {calc.featured ? "Most popular" : "Calculator"}
            </span>
            <span className="mt-4 font-display text-xl font-semibold text-ink transition-colors group-hover:text-accent">
              {calc.label}
            </span>
            <span className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
              {calc.description}
            </span>
            <span className="mt-4 text-sm font-semibold text-accent">Run calculator →</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

type IndustryTool = {
  industry: string;
  href: string;
  tool: string;
  toolHref: string;
};

export function IndustrySpecificTools({ tools }: { tools: readonly IndustryTool[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {tools.map((item) => (
        <li key={item.industry} className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
          <Link href={item.href} className="text-sm font-medium text-ink-muted hover:text-accent">
            {item.industry}
          </Link>
          <Link
            href={item.toolHref}
            className="card-interactive mt-3 block rounded-xl border border-border bg-surface-muted/30 p-4 transition-colors hover:border-accent/30"
          >
            <span className="font-semibold text-ink">{item.tool}</span>
            <span className="mt-1 block text-xs text-accent">Open calculator →</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

type CalculatorCategory = {
  name: string;
  description: string;
  calculators: readonly { label: string; href: string }[];
};

export function CalculatorCategoryGrid({ categories }: { categories: readonly CalculatorCategory[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {categories.map((category) => (
        <div key={category.name} className="rounded-2xl border border-border bg-surface p-6">
          <h3 className="font-display text-lg font-semibold text-ink">{category.name}</h3>
          <p className="mt-1 text-sm text-ink-muted">{category.description}</p>
          <ul className="mt-4 space-y-2">
            {category.calculators.map((calc) => (
              <li key={calc.href}>
                <Link
                  href={calc.href}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-ink-muted transition-colors hover:bg-surface-muted hover:text-accent"
                >
                  {calc.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
