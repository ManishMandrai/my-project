// src/components/JurySection.tsx
"use client";
import React, { useState } from "react";

type Jury = {
  name: string;
  role?: string;
  img: string;
};

const juryList: Jury[] = [
  {
    name: "Rada Šešić",
    role: "Head of Jury",
    img: "https://source.unsplash.com/collection/1466236/800x1000?sig=1", // placeholder portrait
  },
  {
    name: "Clarence Tsui",
    role: "Film Critic",
    img: "https://source.unsplash.com/collection/1466236/800x1000?sig=2",
  },
  {
    name: "Kate Laurie",
    role: "Producer",
    img: "https://source.unsplash.com/collection/1466236/800x1000?sig=3",
  },
  {
    name: "Jérôme Baron",
    role: "Director",
    img: "https://source.unsplash.com/collection/1466236/800x1000?sig=4",
  },
  {
    name: "Ayesha Khan",
    role: "Programmer",
    img: "https://source.unsplash.com/collection/1466236/800x1000?sig=5",
  },
  {
    name: "Dev Anand",
    role: "Cinematographer",
    img: "https://source.unsplash.com/collection/1466236/800x1000?sig=6",
  },
  {
    name: "Meera S.",
    role: "Editor",
    img: "https://source.unsplash.com/collection/1466236/800x1000?sig=7",
  },
  {
    name: "Samir Rao",
    role: "Composer",
    img: "https://source.unsplash.com/collection/1466236/800x1000?sig=8",
  },
];

export default function JurySection() {
  const [activeTab, setActiveTab] = useState<"jury" | "winners" | "catalogue">(
    "jury"
  );

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* header row */}
        <div className="flex items-center justify-between mb-8 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-yellow-400 rounded-sm flex-shrink-0" />
            <div>
              <h3 className="text-3xl font-extrabold text-white">Jury</h3>
              <div className="mt-1 h-0.5 w-40 bg-zinc-700" />
            </div>
          </div>

          {/* tab controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab("jury")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "jury"
                  ? "bg-white/6 text-white ring-1 ring-white/10"
                  : "text-zinc-300 hover:bg-white/3"
              }`}
            >
              Jury
            </button>
            <button
              onClick={() => setActiveTab("winners")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "winners"
                  ? "bg-white/6 text-white ring-1 ring-white/10"
                  : "text-zinc-300 hover:bg-white/3"
              }`}
            >
              Winners
            </button>
            <button
              onClick={() => setActiveTab("catalogue")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "catalogue"
                  ? "bg-white/6 text-white ring-1 ring-white/10"
                  : "text-zinc-300 hover:bg-white/3"
              }`}
            >
              Festival Catalogue
            </button>
          </div>
        </div>

        {/* descriptive subheading */}
        <div className="mb-8">
          <p className="text-zinc-400 max-w-3xl">
            The <span className="text-white font-semibold">Bhopal Film Festival</span> jury comprises filmmakers,
            critics and industry leaders from India and abroad. They champion local voices, diverse stories and
            cinematic excellence.
          </p>
        </div>

        {/* grid */}
        <div>
          <div
            className={`grid gap-8 ${
              /* responsive columns: 1 / 2 / 3 / 4 */
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {juryList.map((j, i) => (
              <article
                key={j.name}
                className="group bg-transparent rounded-lg overflow-hidden"
              >
                <div
                  className="relative w-full h-0 pb-[125%] rounded-lg overflow-hidden shadow-xl"
                  style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.6))" }}
                >
                  <img
                    src={j.img}
                    alt={j.name}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white">{j.name}</h4>
                  <div className="text-sm text-zinc-400 italic mt-1">{j.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
