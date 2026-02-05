import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { CommunitySection } from "@/components/landing/CommunitySection";
import { AboutSection } from "@/components/landing/AboutSection";
import { Footer } from "@/components/landing/Footer";
import Grainient from "@/components/Grainient";

export default function Home() {
  const forestGreenTheme = {
    color1: "#14532d", // deep forest
    color2: "#166534", // emerald
    color3: "#15803d"  // green
  };

  return (
    <div className="relative min-h-screen">
      {/* Global Fixed Background */}
      <div className="fixed inset-0 z-[-10]">
        <Grainient
          {...forestGreenTheme}
          grainAmount={0.05}
          grainScale={1.5}
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <AboutSection />
      <Footer />
    </div>
  );
}
