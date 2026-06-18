"use client";

import { useEffect, useState } from "react";
import { parseCurrencyInput } from "@/lib/numbers";

type CurrencyInputProps = {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  tooltip?: string;
};

function formatDisplay(n: number): string {
  if (!Number.isFinite(n) || n === 0) return "";
  return n.toLocaleString("en-US");
}

export function CurrencyInput({
  id,
  label,
  value,
  onChange,
  tooltip,
}: CurrencyInputProps) {
  const [text, setText] = useState(formatDisplay(value));
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!focused) {
      setText(formatDisplay(value));
    }
  }, [value, focused]);

  return (
    <label htmlFor={id} className="block">
      <span className="flex items-center gap-1.5 text-sm font-medium text-ink-muted">
        {label}
        {tooltip && (
          <span
            title={tooltip}
            className="cursor-help text-ink-faint"
            aria-label={tooltip}
          >
            ⓘ
          </span>
        )}
      </span>
      <div className="relative mt-1.5">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-ink-faint">
          $
        </span>
        <input
          id={id}
          type="text"
          inputMode="numeric"
          value={focused ? text : formatDisplay(value)}
          onFocus={() => {
            setFocused(true);
            setText(value > 0 ? String(value) : "");
          }}
          onChange={(e) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            setText(raw);
            onChange(raw === "" ? 0 : Number(raw));
          }}
          onBlur={() => {
            setFocused(false);
            const parsed = parseCurrencyInput(text);
            onChange(parsed);
            setText(formatDisplay(parsed));
          }}
          aria-label={label}
          className="w-full rounded-xl border border-border bg-surface py-3 pr-4 pl-8 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
        />
      </div>
    </label>
  );
}
