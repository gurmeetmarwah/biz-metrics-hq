import { SectionHeading } from "@/components/ui/SectionHeading";

type MetricHubSectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export function MetricHubSection({
  id,
  title,
  subtitle,
  children,
  className = "bg-surface",
}: MetricHubSectionProps) {
  return (
    <section id={id} className={`border-b border-border/60 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionHeading id={id} title={title} subtitle={subtitle} />
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
