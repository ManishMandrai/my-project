// src/components/AboutSection.tsx
"use client";
import React from "react";
import Link from "next/link";

const POSTER_SRC = "/assets/dummy.jpg"; // four small posters (same for demo)

export default function AboutSection() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: Poster block (2x2 square grid) - constrained width */}
          <div className="relative order-1 flex justify-center lg:justify-start">
            {/* Limit overall poster block width so the images stay small */}
            <div className="max-w-[420px] w-full">
              <div className="rounded-2xl overflow-hidden bg-black/50">
                {/* Poster grid: 2x2 squares with small gap (2px) */}
                <div className="grid grid-cols-2 gap-[3px] p-[3px] bg-black">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      // fixed responsive square sizes:
                      // small: 72px, sm: 96px, md: 112px, lg: auto (fills container / keeps grid)
                      className="relative overflow-hidden rounded-sm bg-zinc-900"
                      style={{ aspectRatio: "1 / 1" }}
                    >
                      <img
                        src={POSTER_SRC}
                        alt={`Poster ${i + 1}`}
                        className="w-full h-full object-cover block"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {/* Optional footer / caption below the grid */}
                <div className="px-4 py-4 border-t border-white/6 bg-black/10">
                  <div className="flex items-center justify-between text-sm text-zinc-400">
                    <div className="text-white/90 font-medium">Featured posters</div>
                    <div className="text-yellow-300 font-semibold">4 highlights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Heading + content */}
          <div className="relative order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 border-4 border-yellow-400 rounded-sm" />
              <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                About Us
              </h3>
            </div>

            <div className="border-t border-white/6 pt-6">
              <p className="text-[16.5px] leading-relaxed text-zinc-300 max-w-xl">
                The <span className="font-semibold text-white">Bhopal Film Festival</span> celebrates stories born in
                Madhya Pradesh and shared with the world. The inaugural edition is a one-day showcase of young filmmakers and films shot in MP — screenings,
                panels, networking and an artisan fair that nurture local voices and connect them with audiences and industry.
              </p>

              <p className="mt-6 text-sm text-zinc-400 max-w-xl">
                By partnering with us you support a growing platform for regional cinema, tourism and community — visible across events, social campaigns and press.
              </p>

              <Link
                href="/about"
                className="inline-block mt-6 text-sm font-medium text-yellow-300 hover:text-yellow-400"
              >
                Read More...
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* keep grid compact on small screens if desired */
        @media (max-width: 640px) {
          .max-w-[420px] { max-width: 320px !important; }
        }
        img { user-drag: none; user-select: none; -webkit-user-drag: none; }
      `}</style>
    </section>
  );
}
