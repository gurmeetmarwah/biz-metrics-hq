"use client";

import { useEffect, useState } from "react";

type PercentInputProps = {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
};

export function PercentInput({
  id,
  label,
  value,
  onChange,
  min = 0,
  max = 100,
}: PercentInputProps) {
  const [text, setText] = useState(String(value));
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!focused) {
      setText(String(value));
    }
  }, [value, focused]);

  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium text-ink-muted">{label}</span>
      <div className="relative mt-1.5">
        <input
          id={id}
          type="text"
          inputMode="decimal"
          value={focused ? text : String(value)}
          onFocus={() => {
            setFocused(true);
            setText(String(value));
          }}
          onChange={(e) => {
            const raw = e.target.value;
            if (raw === "" || /^\d*\.?\d*$/.test(raw)) {
              setText(raw);
              if (raw !== "" && raw !== ".") {
                const n = Number(raw);
                if (Number.isFinite(n)) onChange(n);
              }
            }
          }}
          onBlur={() => {
            setFocused(false);
            const parsed =
              text === "" || text === "." ? 0 : Number(text);
            const clamped = Math.min(
              max,
              Math.max(min, Number.isFinite(parsed) ? parsed : 0)
            );
            onChange(clamped);
            setText(String(clamped));
          }}
          aria-label={label}
          className="w-full rounded-xl border border-border bg-surface py-3 pr-10 pl-4 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-ink-faint">
          %
        </span>
      </div>
    </label>
  );
}
