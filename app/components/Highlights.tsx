// src/components/Highlights.tsx
"use client";
import React, { useState, useRef } from "react";

type Item = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const items: Item[] = [
  {
    id: "guest-jury",
    label: "Guest Jury",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="8.5" cy="8.5" r="1.6" fill="currentColor" />
        <circle cx="15.5" cy="8.5" r="1.6" fill="currentColor" />
        <circle cx="8.5" cy="15.5" r="1.6" fill="currentColor" />
        <circle cx="15.5" cy="15.5" r="1.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "opening-night",
    label: "Opening Night",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2v20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M5 9h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "awards-gala",
    label: "Awards Gala",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2l2.6 5.4L20 8l-4 3.2L17 18l-5-2.6L7 18l1-6.8L4 8l5.4-.6L12 2z" stroke="currentColor" strokeWidth="0.9" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: "workshops",
    label: "Workshops",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3.5" y="6" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8 3v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M16 3v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "womens-voices",
    label: "Women's Voices",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.2" />
        <path d="M6 20c1.6-3 4-4.5 6-4.5s4.4 1.5 6 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "masterclasses",
    label: "Masterclasses",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 6h18M3 10h18M6 14h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.0" />
      </svg>
    ),
  },
];

export default function Highlights() {
  // no default highlight (null = none active)
  const [active, setActive] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const focusButtonByIdx = (idx: number) => {
    const id = items[idx]?.id;
    if (!id) return;
    const el = containerRef.current?.querySelector<HTMLButtonElement>(`[data-id="${id}"]`);
    el?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent, idx: number) => {
    // left / right navigation moves focus and updates active if already active
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (idx + 1) % items.length;
      focusButtonByIdx(next);
      if (active) setActive(items[next].id);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (idx - 1 + items.length) % items.length;
      focusButtonByIdx(prev);
      if (active) setActive(items[prev].id);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(items[idx].id);
    }
  };

  return (
    <div className="w-full">
      <div ref={containerRef} className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="sr-only">Festival highlights</h3>

        {/* Grid: default 3 columns (mobile/tab), large screens 6 columns (single row) */}
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-6">
          {items.map((it, i) => {
            const isActive = active === it.id;
            return (
              <button
                key={it.id}
                data-id={it.id}
                data-index={i}
                onClick={() => setActive(isActive ? null : it.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                aria-pressed={isActive}
                className={`flex flex-col items-center justify-center gap-3 p-4 rounded-md text-center transition-transform transform focus:outline-none
                  ${isActive
                    ? "bg-white/6 scale-[1.03] ring-2 ring-yellow-400/60"
                    : "bg-transparent hover:bg-white/3"}
                  `}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border border-white/8 transition-colors
                    ${isActive ? "bg-yellow-400 text-black border-transparent" : "text-zinc-300 bg-transparent"}`}
                  aria-hidden
                >
                  {it.icon}
                </div>

                <div className={`text-sm font-medium ${isActive ? "text-white" : "text-zinc-300"}`}>
                  {it.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* small legend / controls */}
        <div className="mt-6 text-sm text-zinc-400 flex items-center justify-between gap-4">
          <div></div>
          <div className="hidden sm:block text-yellow-300 font-semibold">
            {active ? items.find(it => it.id === active)?.label : ""}
          </div>
        </div>
      </div>

      <style>{`
        /* focus visible style for keyboard users */
        [data-id] :focus-visible { outline: none; }
        [data-id]:focus-visible { box-shadow: 0 0 0 3px rgba(255,209,102,0.12); }

        /* tiny responsive tweak: allow 2 columns on extremely small screens if needed */
        @media (max-width: 360px) {
          .grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
      `}</style>
    </div>
  );
}
