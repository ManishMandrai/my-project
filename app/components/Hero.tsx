"use client";
import React from "react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen mt-20 w-full px-6 bg-black text-white flex items-center overflow-hidden"
      aria-label="Bhopal Film Festival hero"
    >
      {/* ---- Cinema Light Beam ---- */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[1200px] h-[800px] rotate-[-25deg] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.02) 60%, transparent 100%)",
          filter: "blur(40px)",
          transformOrigin: "top left",
          maskImage:
            "radial-gradient(circle at 20% 50%, white 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at 20% 50%, white 0%, transparent 75%)",
          opacity: 0.7,
        }}
      />

      {/* ---- Subtle Dust Particles Glow (adds depth) ---- */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />

      {/* ---- Top moving strip ---- */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-1/2 overflow-hidden z-20">
        <div
          className="whitespace-nowrap py-2 text-center"
          style={{
            animation: "marquee-left 18s linear infinite",
          }}
        >
          <span className="mx-4 text-sm text-white/70 tracking-widest">
            • Celebrating Stories • Screenings • Panels • Filmmakers • Madhya Pradesh •
          </span>
          <span className="mx-4 text-sm text-white/70 tracking-widest">
            • Celebrating Cinema • New Voices • Cultural Exchange •
          </span>
        </div>
      </div>

      {/* ---- Main content ---- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center py-4 lg:py-12">
          {/* Left: big date */}
          <div className="flex justify-start lg:justify-center items-start">
            <div className="text-left pl-2 lg:pl-0">
              <div
                className="leading-none font-extrabold text-white"
                style={{ fontSize: "clamp(48px, 9vw, 120px)" }}
              >
                1
              </div>
              <div className="mt-2 text-sm uppercase tracking-widest text-gray-300">
                FEB • 2026
              </div>
            </div>
          </div>

          {/* Middle: title + tagline + CTAs */}
          <div className="lg:col-span-2 text-center lg:text-left px-2">
            <p className="text-sm uppercase tracking-wider mb-4 text-gray-300 font-semibold">
              Inaugural • One Day Showcase
            </p>

            <h1
              className="font-extrabold leading-tight text-white"
              style={{
                fontSize: "clamp(28px, 6vw, 64px)",
                marginBottom: 12,
              }}
            >
              Bhopal Film Festival
            </h1>

            <p className="max-w-2xl text-gray-400 mb-8">
              Where stories rise from the heart of Madhya Pradesh — a one-day
              celebration of cinema, craft and community.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="/passes"
                className="inline-block rounded-full px-6 py-3 font-semibold text-black"
                style={{
                  background: "linear-gradient(90deg,#FFD166,#FF7A5A)",
                  boxShadow: "0 10px 30px rgba(255,120,60,0.12)",
                }}
              >
                Get Tickets
              </a>

              <a
                href="/program"
                className="inline-block rounded-full px-6 py-3 font-medium border border-white/10 text-white/90 hover:text-white transition-all"
              >
                Explore Program
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-400">
              Auditorium • Bhopal • Yet to Announce
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
