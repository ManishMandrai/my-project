"use client";
import Image from "next/image";
import React from "react";

const galleryImages = Array(8).fill("/assets/dummy.jpg");

export default function GallerySection() {
  return (
    <section className="relative w-full bg-black text-white py-20 px-6 md:px-12">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-3 mb-3">
          <div className="w-8 h-8 border-4 border-yellow-400 rounded-sm" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Festival Gallery
          </h2>
        </div>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
          Capturing the light, laughter, and legacy of Bhopal Film Festival through stunning frames.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
        {galleryImages.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg group aspect-square shadow-md shadow-black/40 bg-zinc-900"
          >
            <Image
              src={src}
              alt={`Festival Gallery ${i + 1}`}
              width={500}
              height={500}
              className={`object-cover w-full h-full transition-transform duration-500 ease-out ${
                i !== 7 ? "group-hover:scale-110" : ""
              }`}
            />

            {/* Overlay for normal images */}
            {i !== 7 && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}

            {/* 8th image overlay for 'View Full Album' */}
            {i === 7 && (
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:bg-black/80">
                <span className="text-lg font-semibold text-yellow-400 mb-1">
                  View Full Album
                </span>
                <span className="text-xs text-zinc-400 tracking-wide">
                  Explore all festival moments →
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Film grain overlay (optional aesthetic touch) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay bg-[url('/assets/overlays/grain.png')]" />
    </section>
  );
}
