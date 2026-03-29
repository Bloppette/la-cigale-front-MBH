import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { OffersGallery } from "@/components/sections/OffersGallery";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ParallaxBanner } from "@/components/sections/ParallaxBanner";
import { ContactInfo } from "@/components/sections/ContactInfo";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full relative">
        <HeroSection />
        <StorySection />
        <OffersGallery />
        <ExperienceSection />
        <ParallaxBanner />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}
