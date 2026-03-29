import { ArtDivider } from "@/components/ui/ArtDivider";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function StorySection() {
  return (
    <section className="py-20 px-8 text-center max-w-2xl mx-auto space-y-8 bg-background-light dark:bg-background-dark">
      <SectionTitle level={3}>Une Institution Nantaise</SectionTitle>
      
      <ArtDivider />
      
      <div className="space-y-6">
        <p className="font-sans text-sm leading-relaxed text-slate-800 dark:text-slate-400">
          Véritable joyau de l&apos;Art Nouveau inauguré en 1895, la Cigale est bien plus qu&apos;une brasserie : c&apos;est l&apos;âme de Nantes. Classée monument historique, elle offre un décor majestueux où céramiques, miroirs et dorures se mêlent dans une harmonie parfaite.
        </p>
        <p className="font-sans text-sm leading-relaxed text-slate-800 dark:text-slate-400">
          De l&apos;aube mystérieuse à la nuit festive, la magie opère. Notre brigade sublime les produits du terroir dans la plus pure tradition brasserie.
        </p>
      </div>
      
      <div className="pt-4">
        <p className="font-serif italic text-lg opacity-90 tracking-wide text-primary">
          &quot;Peut-être la plus belle brasserie du monde.&quot;
        </p>
        <span className="text-gold text-[10px] uppercase tracking-[0.2em] block mt-4">Jean-Louis Trintignant</span>
      </div>
    </section>
  );
}
