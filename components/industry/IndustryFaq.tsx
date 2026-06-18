type Faq = { question: string; answer: string };

type IndustryFaqProps = {
  faqs: readonly Faq[];
};

export function IndustryFaq({ faqs }: IndustryFaqProps) {
  return (
    <div className="divide-y divide-border-subtle rounded-2xl border border-border bg-surface">
      {faqs.map((faq) => (
        <details key={faq.question} className="group px-5 py-1 sm:px-6">
          <summary className="cursor-pointer list-none py-4 text-base font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-4">
              {faq.question}
              <svg
                className="size-5 shrink-0 text-ink-faint transition-transform group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </summary>
          <p className="pb-4 text-sm leading-relaxed text-ink-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
