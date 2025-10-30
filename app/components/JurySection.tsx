// src/components/JurySection.tsx
"use client";
import React from "react";

type Member = {
  name: string;
  role: string;
  img: string;
};

const juryList: Member[] = [
  { name: "Rada Šešić", role: "Head of Jury", img: "/assets/face.png" },
  { name: "Clarence Tsui", role: "Film Critic", img: "/assets/face.png" },
  { name: "Kate Laurie", role: "Producer", img: "/assets/face.png" },
];

const guestList: Member[] = [
  { name: "Amit Khanna", role: "Veteran Filmmaker", img: "/assets/face.png" },
  { name: "Nandita Sharma", role: "Actor & Speaker", img: "/assets/face.png" },
  { name: "Rahul Mehra", role: "Cultural Ambassador", img: "/assets/face.png" },
];

export default function JurySection() {
  const renderMemberCard = (m: Member) => (
    <article
      key={m.name}
      className="group bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.035)] rounded-xl overflow-hidden transition shadow-sm"
    >
      {/* image container keeps 1:1.5 ratio */}
      <div className="relative w-full aspect-[2/3] bg-zinc-900 overflow-hidden rounded-t-xl">
        <img
          src={m.img}
          alt={m.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      <div className="px-4 py-3">
        <h4 className="text-base font-semibold text-white tracking-tight">{m.name}</h4>
        <p className="text-sm text-zinc-400 mt-1 italic">{m.role}</p>
      </div>
    </article>
  );

  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* SECTION: Jury */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border-4 border-yellow-400 rounded-sm" />
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Jury
            </h3>
          </div>

          <p className="text-zinc-400 max-w-3xl">
            The <span className="text-white font-semibold">Bhopal Film Festival</span> jury brings together critics,
            filmmakers and artists who will champion storytelling excellence and select the festival laureates.
          </p>

          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {juryList.map((m) => renderMemberCard(m))}
            </div>
          </div>
        </div>

        {/* SECTION: Special Guests */}
        <div className="space-y-6 pt-8 border-t border-white/6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border-4 border-yellow-400 rounded-sm" />
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Special Guests
            </h3>
          </div>

          <p className="text-zinc-400 max-w-3xl">
            Honoured guests and cultural leaders joining the festival for conversations, masterclasses and special screenings.
          </p>

          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {guestList.map((m) => renderMemberCard(m))}
            </div>
          </div>
        </div>
      </div>

      {/* scoped styles for subtle improvements */}
      <style>{`
        /* make card shadows feel cinematic but subtle */
        .shadow-sm { box-shadow: 0 8px 24px rgba(2,6,23,0.55); border: 1px solid rgba(255,255,255,0.03); }

        /* Improve focus visibility for keyboard users */
        article:focus-within, article:focus {
          outline: none;
          box-shadow: 0 0 0 4px rgba(255,209,102,0.08), 0 8px 24px rgba(2,6,23,0.6);
        }

        /* On very small screens keep spacing comfortable */
        @media (max-width: 420px) {
          .max-w-7xl { padding-left: 18px; padding-right: 18px; }
        }
      `}</style>
    </section>
  );
}
