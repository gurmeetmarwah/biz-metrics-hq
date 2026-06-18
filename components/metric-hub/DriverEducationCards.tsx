type Driver = {
  title: string;
  description: string;
};

export function DriverEducationCards({ drivers }: { drivers: readonly Driver[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {drivers.map((driver) => (
        <li
          key={driver.title}
          className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
        >
          <p className="font-display font-semibold text-ink">{driver.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{driver.description}</p>
        </li>
      ))}
    </ul>
  );
}
