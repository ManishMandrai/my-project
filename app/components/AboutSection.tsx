// src/components/AboutSection.tsx
"use client";
import React, { useRef } from "react";

const posterUrls = [
  // temporary internet images (Unsplash query). Replace with your own poster URLs later.
  "https://source.unsplash.com/600x900/?movie-poster,cinema,poster",
  "https://source.unsplash.com/600x900/?film-poster,poster",
  "https://source.unsplash.com/600x900/?movie,poster",
  "https://source.unsplash.com/600x900/?poster,film",
  "https://source.unsplash.com/600x900/?cinema,poster",
  "https://source.unsplash.com/600x900/?indian-movie,poster",
  "https://source.unsplash.com/600x900/?festival,poster",
  "https://source.unsplash.com/600x900/?cinema,art"
];

export default function AboutSection() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const move = direction === "left" ? -el.clientWidth * 0.6 : el.clientWidth * 0.6;
    el.scrollBy({ left: move, behavior: "smooth" });
  };

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: Heading + text */}
          <div className="relative">
            {/* Decorative yellow bracket */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 border-4 border-yellow-400 rounded-sm" />
              <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                About Us
              </h3>
            </div>

            <div className="border-t border-white/6 pt-6">
              <p className="text-[16.5px] leading-relaxed text-zinc-300 max-w-xl">
                The <span className="font-semibold text-white">Bhopal Film Festival</span> celebrates stories born in Madhya Pradesh and shared with the world.
                The inaugural edition is a one-day showcase of young filmmakers and films shot in MP — screenings, panels, networking and an artisan fair that
                nurture local voices and connect them with audiences and industry.
              </p>

              <p className="mt-6 text-sm text-zinc-400 max-w-xl">
                By partnering with us you support a growing platform for regional cinema, tourism and community — visible across events, social campaigns and press.
              </p>

              <a
                href="/about"
                className="inline-block mt-6 text-sm font-medium text-yellow-300 hover:text-yellow-400"
              >
                Read More...
              </a>
            </div>
          </div>

          {/* RIGHT: Poster carousel */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-black/50 border border-white/6 shadow-lg">
              {/* arrows */}
              <button
                onClick={() => scroll("left")}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/6 flex items-center justify-center text-white/90 hover:scale-105 transition"
              >
                ‹
              </button>

              <button
                onClick={() => scroll("right")}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/6 flex items-center justify-center text-white/90 hover:scale-105 transition"
              >
                ›
              </button>

              {/* scroller */}
              <div
                ref={scrollerRef}
                className="flex gap-4 overflow-x-auto no-scrollbar p-6 pb-8 scroll-smooth"
                style={{ scrollBehavior: "smooth" }}
              >
                {posterUrls.map((src, idx) => (
                  <div
                    key={idx}
                    className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[160px] flex-shrink-0"
                  >
                    <div className="rounded-xl overflow-hidden shadow-xl w-full h-[270px] md:h-[320px] lg:h-[360px] bg-gradient-to-b from-black/30 to-black/50">
                      <img
                        src={src}
                        alt={`Poster ${idx + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-3 text-xs text-zinc-400">
                      <div className="font-semibold text-sm text-white">Film Title {idx + 1}</div>
                      <div className="text-[13px] text-zinc-400">Director • 2025</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* carousel footer */}
              <div className="px-6 pb-6 border-t border-white/6 bg-black/10">
                <div className="flex items-center justify-between text-sm text-zinc-400">
                  <div>Featured posters & festival highlights</div>
                  <div className="text-yellow-300 font-semibold">4 Categories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* small styles for no scrollbar */}
      <style>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
