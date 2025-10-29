import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import JurySection from "./components/JurySection";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <Highlights/>
      <JurySection/>
      <GallerySection/>
      <Footer/>
    </main>
  );
}
