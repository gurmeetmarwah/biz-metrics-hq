type SectionHeadingProps = {
  id: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <h2
        id={id}
        className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
    </div>
  );
}
