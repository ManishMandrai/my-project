"use client";
import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen mt-20 w-full px-6 bg-black text-white flex items-center overflow-hidden"
      aria-label="Bhopal Film Festival hero"
    >
      {/* --- Visual layers: beam, vignette, grain --- */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        {/* soft cinematic light beam */}
        <div
          className="absolute left-[-10%] top-0 h-full w-[60%] transform -skew-x-12 blur-3xl opacity-20"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,230,120,0.06) 0%, rgba(255,120,80,0.02) 40%, transparent 60%)",
          }}
        />

        {/* vignette */}
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* subtle film grain overlay (animated tiny flicker) */}
        <div
          className="absolute inset-0 opacity-6 animate-grain"
          style={{
            backgroundImage:
              "linear-gradient(transparent 50%, rgba(255,255,255,0.02) 50%), linear-gradient(90deg, transparent 50%, rgba(255,255,255,0.02) 50%)",
            backgroundSize: "3px 3px, 3px 3px",
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* --- Top marquee (smooth, duplicated content for seamless loop) --- */}
      <div className="absolute top-8 left-0 w-full z-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="overflow-hidden">
            <div
              className="flex whitespace-nowrap will-change-transform items-center gap-8 py-2 text-sm text-white/70 tracking-widest"
              style={{
                animation: "marquee 20s linear infinite",
              }}
              aria-hidden
            >
              {[
                "Celebrating Stories",
                "Screenings & Panels",
                "Filmmakers from MP",
                "New Voices in Indian Cinema",
                "Workshops & Cultural Exchange",
                "Community Screenings",
              ].map((t, i) => (
                <span key={i} className="mx-4 flex items-center gap-3">
                  <span className="inline-block text-[10px]">•</span>
                  <span>{t}</span>
                </span>
              ))}

              {/* duplicate for seamless loop */}
              {[
                "Celebrating Stories",
                "Screenings & Panels",
                "Filmmakers from MP",
                "New Voices in Indian Cinema",
                "Workshops & Cultural Exchange",
                "Community Screenings",
              ].map((t, i) => (
                <span key={`dup-${i}`} className="mx-4 flex items-center gap-3">
                  <span className="inline-block text-[10px]">•</span>
                  <span>{t}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Main content container (centered, constrained) --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center py-8 lg:py-16">
          {/* Left: large date */}
          <div className="flex justify-start lg:justify-center items-start">
            <div className="text-left pl-2 lg:pl-0">
              <div
                className="leading-none font-extrabold text-white"
                style={{ fontSize: "clamp(48px, 9vw, 120px)", textShadow: '0 6px 30px rgba(0,0,0,0.7)' }}
              >
                1
              </div>
              <div className="mt-2 text-sm uppercase tracking-widest text-gray-300">
                FEB • 2026
              </div>
            </div>
          </div>

          {/* Middle + Right: title + CTA */}
          <div className="lg:col-span-2 text-center lg:text-left px-2">
            <p className="text-sm uppercase tracking-wider mb-4 text-gray-300 font-semibold">
              Inaugural • One Day Showcase
            </p>

            <h1
              className="font-extrabold leading-tight text-white"
              style={{ fontSize: "clamp(32px, 6vw, 64px)", marginBottom: 12 }}
            >
              Bhopal Film Festival
            </h1>

            <p className="max-w-2xl text-gray-400 mb-8">
              Stories from the heart of Madhya Pradesh — a cinematic day of screenings,
              conversations and community that lift regional voices onto the big screen.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/passes" aria-label="Get Tickets" className="group">
                <span
                  className="inline-block rounded-md px-6 py-3 font-semibold text-black transform transition-all duration-200"
                  style={{
                    background: "#FFC414",
                    boxShadow: "0 10px 30px rgba(255,196,20,0.16)",
                  }}
                >
                  <span className="inline-block group-hover:-translate-y-0.5 transition-transform">
                    Get Tickets
                  </span>
                </span>
              </Link>

              <Link
                href="/program"
                className="inline-block rounded-md px-6 py-3 font-medium border border-white text-white hover:text-white transition-all"
              >
                Explore Program
              </Link>
            </div>

            <div className="mt-6 text-sm text-gray-400">Auditorium • Bhopal • Date TBA</div>
          </div>
        </div>
      </div>

      {/* --- Component scoped styles --- */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        /* tiny animated grain flicker */
        @keyframes grain {
          0% { opacity: 0.05; }
          50% { opacity: 0.09; }
          100% { opacity: 0.05; }
        }

        .animate-grain {
          animation: grain 4s ease-in-out infinite;
        }

        /* reduce motion for users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .will-change-transform { animation: none !important; }
          .animate-grain { animation: none !important; }
        }

        /* small responsive tweak so marquee won't stutter on very small devices */
        @media (max-width: 480px) {
          .will-change-transform { animation-duration: 28s !important; }
        }
      `}</style>
    </section>
  );
}
