import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

// Assuming we have a hero image in public folder
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop";

export function HeroSection() {
  return (
    <section 
      className="relative flex items-center justify-center overflow-hidden min-h-[max(85vh,600px)]"
      style={{
        backgroundImage: `url('${HERO_IMAGE_URL}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to darken image for text readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4 flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="space-y-4">
          <span className="text-gold text-[10px] uppercase tracking-[0.2em] block">Depuis 1895</span>
          <SectionTitle level={2}>
            L&apos;Art de Vivre<br/>à la Nantaise
          </SectionTitle>
        </div>
        
        <Button variant="outline">
          Découvrir
        </Button>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-80 z-10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}
