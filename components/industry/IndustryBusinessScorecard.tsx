import type { BusinessScorecard } from "@/lib/industries/business-scorecard";

function StarRating({
  rating,
  label,
  higherIsWorse = false,
}: {
  rating: number;
  label: string;
  higherIsWorse?: boolean;
}) {
  const description = higherIsWorse
    ? `${rating} out of 5 difficulty`
    : `${rating} out of 5`;

  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${label}: ${description}`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`text-base leading-none sm:text-lg ${
            n <= rating
              ? higherIsWorse
                ? "text-ink-muted"
                : "text-accent"
              : "text-border"
          }`}
          aria-hidden="true"
        >
          {n <= rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export function IndustryBusinessScorecard({ scorecard }: { scorecard: BusinessScorecard }) {
  const favorableItems = scorecard.items.filter((item) => !item.higherIsWorse);
  const averageRating =
    favorableItems.length > 0
      ? favorableItems.reduce((sum, item) => sum + item.rating, 0) / favorableItems.length
      : 0;
  const overallLabel =
    averageRating >= 4.25
      ? "Strong"
      : averageRating >= 3.25
        ? "Solid"
        : averageRating >= 2.25
          ? "Moderate"
          : "Challenging";

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border-subtle bg-gradient-to-r from-surface-muted/80 via-surface to-accent-soft/20 px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] text-ink-faint uppercase">
              Industry Intelligence
            </p>
            <h2 className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
              {scorecard.industryName} Industry Scorecard
            </h2>
          </div>
          <div className="rounded-full border border-accent/20 bg-accent-soft/50 px-3 py-1.5 text-center">
            <p className="text-[10px] font-semibold tracking-wide text-ink-faint uppercase">
              Overall
            </p>
            <p className="text-sm font-bold text-accent">{overallLabel}</p>
          </div>
        </div>
      </div>

      <ul className="divide-y divide-border-subtle">
        {scorecard.items.map((item) => (
          <li
            key={item.label}
            className="flex items-center justify-between gap-4 px-5 py-3.5 sm:px-6 sm:py-4"
          >
            <span className="text-sm font-medium text-ink">{item.label}</span>
            <StarRating
              rating={item.rating}
              label={item.label}
              higherIsWorse={item.higherIsWorse}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
