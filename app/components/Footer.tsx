// components/Footer.jsx
"use client";
import { Mail, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold text-white">Bhopal Film Festival</h2>
          <p className="text-sm mt-3 text-gray-400">
            Celebrating stories, culture, and cinema — from the heart of India.
          </p>
        </div>

        {/* Middle */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#jury" className="hover:text-white transition">Jury</a></li>
            <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect with us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition"><Youtube size={20} /></a>
            <a href="mailto:contact@bhopalfilmfest.com" className="hover:text-white transition"><Mail size={20} /></a>
          </div>
          <p className="text-xs mt-4 text-gray-500">
            © 2025 Bhopal Film Festival. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
