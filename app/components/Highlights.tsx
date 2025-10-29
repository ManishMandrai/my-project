// src/components/Highlights.tsx
"use client";
import React, { useState, useRef } from "react";

type Item = {
  id: string;
  label: string;
  icon: JSX.Element;
};

const items: Item[] = [
  {
    id: "guest-jury",
    label: "Guest Jury",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="8.5" cy="8.5" r="1.8" fill="currentColor" />
        <circle cx="15.5" cy="8.5" r="1.8" fill="currentColor" />
        <circle cx="8.5" cy="15.5" r="1.8" fill="currentColor" />
        <circle cx="15.5" cy="15.5" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "opening-night",
    label: "Opening Night",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2v20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M5 9h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "awards-gala",
    label: "Awards Gala",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2l2.6 5.4L20 8l-4 3.2L17 18l-5-2.6L7 18l1-6.8L4 8l5.4-.6L12 2z" stroke="currentColor" strokeWidth="0.9" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: "workshops",
    label: "Workshops",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
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
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.2" />
        <path d="M6 20c1.6-3 4-4.5 6-4.5s4.4 1.5 6 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Highlights() {
  const [active, setActive] = useState<string>("awards-gala");
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "ArrowRight") {
      const next = (idx + 1) % items.length;
      setActive(items[next].id);
      (containerRef.current?.querySelector(`[data-id="${items[next].id}"]`) as HTMLElement | null)?.focus();
    } else if (e.key === "ArrowLeft") {
      const prev = (idx - 1 + items.length) % items.length;
      setActive(items[prev].id);
      (containerRef.current?.querySelector(`[data-id="${items[prev].id}"]`) as HTMLElement | null)?.focus();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(items[idx].id);
    }
  };

  return (
    <div className="w-full">
      <div ref={containerRef} className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between gap-6">
          {items.map((it, i) => {
            const isActive = active === it.id;
            return (
              <button
                key={it.id}
                data-id={it.id}
                onClick={() => setActive(it.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                aria-pressed={isActive}
                className={`group flex-1 min-w-[120px] max-w-[220px] h-28 flex flex-col items-center justify-center gap-2 rounded-md focus:outline-none transition-transform
                  ${isActive ? "ring-2 ring-blue-400/80 bg-white/3 scale-105" : "bg-transparent hover:bg-white/3"}`}
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-full border border-white/10 transition ${isActive ? "text-white" : "text-zinc-400"}`}>
                  {it.icon}
                </div>
                <div className={`text-sm font-medium transition ${isActive ? "text-white underline decoration-blue-400 underline-offset-4" : "text-zinc-300"}`}>
                  {it.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
