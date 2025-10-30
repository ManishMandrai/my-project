// app/page.tsx
import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import JurySection from "../components/JurySection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-bg)] text-[var(--color-text)]">
      <Hero />
      <AboutSection />
      <Highlights />
      <JurySection />
      <GallerySection />
    </main>
  );
}
