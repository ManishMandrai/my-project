"use client";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1558980664-10ea2927a6c1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1602810318383-e386cc2a3c16?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1573497019518-6ebd0e3f8709?auto=format&fit=crop&w=800&q=80",
];

export default function GallerySection() {
  return (
    <section className="relative w-full bg-[#0b0b0c] text-white py-20 px-6 md:px-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f5c542] tracking-wide relative inline-block">
          Festival Gallery
          <span className="block w-24 h-[2px] bg-gradient-to-r from-[#f04a4a] to-[#f5c542] mx-auto mt-3 rounded-full"></span>
        </h2>
        <p className="text-zinc-400 mt-3 text-sm md:text-base">
          A glimpse into stories, people, and moments that define Bhopal’s cinematic spirit.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg group shadow-md shadow-black/40"
          >
            <Image
              src={src}
              alt={`Festival Gallery ${i + 1}`}
              width={600}
              height={400}
              className="object-cover w-full h-56 md:h-72 transform group-hover:scale-110 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
