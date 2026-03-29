import { SectionTitle } from "@/components/ui/SectionTitle";

export function ParallaxBanner() {
  return (
    <section 
      className="relative flex items-center justify-center min-h-[400px] bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] z-0" />
      
      <div className="relative z-10 text-center max-w-2xl px-6">
        <SectionTitle level={2}>
          L&apos;Élégance de la Céramique
        </SectionTitle>
        <p className="mt-6 text-white font-sans text-sm leading-relaxed max-w-lg mx-auto">
          Découvrez un patrimoine architectural inestimable au cœur de nos murs. Une expérience authentique entre art et gastronomie depuis plus d&apos;un siècle.
        </p>
      </div>
    </section>
  );
}
