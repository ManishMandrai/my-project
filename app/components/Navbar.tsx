"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Partners", href: "/partners" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className="relative flex h-16 items-center justify-between rounded-b-2xl bg-black/55 backdrop-blur-md border border-white/6 shadow-lg
                     ring-1 ring-white/2 px-3 md:px-6 mt-3"
          aria-label="Main navigation"
        >
          {/* Logo + title */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              {/* We invert the black png so it becomes visible on dark bg.
                  If you prefer a white PNG, replace this with that file and remove the 'invert brightness-125' class */}
              <div className="relative w-10 h-10 rounded-md overflow-hidden ring-1 ring-white/5 shadow-sm">
                <Image
                  src="/assets/logo.png"
                  alt="Bhopal Film Festival"
                  fill
                  sizes="40px"
                  style={{ objectFit: "cover" }}
                  className="filter invert brightness-125"
                />
              </div>

              <span className="font-roboto font-extrabold text-white text-sm md:text-lg tracking-tight">
                <span className="block text-[var(--color-primary)] leading-none">
                  Bhopal Film Festival
                </span>
                <span className="text-[var(--color-muted)] text-[11px] -mt-0.5 block">
                  Celebrating MP stories
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group px-1 py-1 text-sm text-[var(--color-text)] hover:text-white transition-colors"
                >
                  <span>{item.name}</span>

                  {/* animated underline */}
                  <span
                    className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] 
                               group-hover:w-full transition-[width] duration-300 ease-out rounded"
                    aria-hidden
                  />
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="/submit"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/90
                           bg-gradient-to-r from-[var(--color-accent)]/10 to-transparent backdrop-blur-sm hover:scale-[1.02] transition-transform"
              >
                Submit Film
              </Link>

              <Link
                href="/passes"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold
                           bg-[linear-gradient(90deg,var(--color-primary),var(--color-secondary))] text-black shadow-xl transform hover:-translate-y-0.5 transition"
              >
                Get Passes
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="p-2 rounded-md inline-flex items-center justify-center text-white/90 hover:bg-white/5 transition"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden transform origin-top transition-all duration-300 ease-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="mx-auto max-w-3xl px-4 pt-4 pb-6">
          <div className="flex flex-col gap-4 rounded-lg bg-black/70 border border-white/6 p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded text-[var(--color-text)] hover:bg-white/2 transition"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/submit"
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded-full px-4 py-2 font-medium border border-white/10
                         bg-[linear-gradient(90deg,var(--color-accent),rgba(76,201,240,0.12))]"
            >
              Submit Film
            </Link>

            <Link
              href="/passes"
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded-full px-4 py-2 font-semibold
                         bg-[linear-gradient(90deg,var(--color-primary),var(--color-secondary))] text-black shadow"
            >
              Get Passes
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
