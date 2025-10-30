// components/Footer.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mail, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | "error" | "success">(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <footer className="w-full bg-[#060606] text-gray-300 border-t-2 border-white relative overflow-hidden">
      {/* Light Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0b0b0c]/40 to-transparent pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative w-full px-6 md:px-12 py-10 flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        {/* LEFT */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-10 h-10">
              <Image
                src="/assets/logo.png"
                alt="Bhopal Film Festival"
                fill
                sizes="40px"
                style={{ objectFit: "cover" }}
                className="filter invert brightness-125"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Bhopal Film Festival
            </h2>
          </div>

          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            Celebrating stories, culture, and cinema — from the heart of India.
          </p>

          <div className="mt-4 text-sm text-gray-400 space-y-1">
            <p>📍 Venue: TBA</p>
            <p>📅 Date: TBA</p>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {["About", "Jury", "Guests", "Gallery", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="group flex items-center gap-2 hover:text-white transition"
                >
                  <span className="block w-1 h-1 bg-yellow-400 rounded-full group-hover:scale-125 transition-transform" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus(null);
                }}
                placeholder="Enter your email"
                className="flex-1 bg-white/10 text-white placeholder-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition"
              >
                Subscribe
              </button>
            </div>
            {status === "error" && (
              <p className="text-xs text-red-400">Please enter a valid email.</p>
            )}
            {status === "success" && (
              <p className="text-xs text-green-400">Thanks for subscribing!</p>
            )}
          </form>

          <div className="flex space-x-4 mt-5">
            <a href="#" className="hover:text-yellow-400 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <Youtube size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <Twitter size={20} />
            </a>
            <a
              href="mailto:contact@bhopalfilmfest.com"
              className="hover:text-yellow-400 transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="relative border-t border-white/10 py-3 text-center text-gray-400 text-sm backdrop-blur-sm bg-white/5">
        <p>© {currentYear} Bhopal Film Festival. All rights reserved.</p>
        <p className="text-xs mt-1">
          Developed with ❤️ by{" "}
          <a
            href="https://devmanish.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:underline"
          >
            Manish
          </a>
        </p>
      </div>
    </footer>
  );
}
