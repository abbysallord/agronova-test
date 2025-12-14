import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { CommunitySection } from "@/components/landing/CommunitySection";
import { AboutSection } from "@/components/landing/AboutSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="bg-neutral-50 dark:bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <AboutSection />
      <Footer />
    </div>
  );
}
