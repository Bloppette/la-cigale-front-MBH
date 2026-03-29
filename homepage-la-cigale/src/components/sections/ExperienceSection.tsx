import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function ExperienceSection() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto space-y-24 bg-background-light dark:bg-background-dark">
      {/* Salons Privés */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="relative w-full h-80 md:w-1/2 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop"
            alt="Salons Privés"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left px-4">
          <SectionTitle level={3}>Salons Privés</SectionTitle>
          <p className="font-sans text-sm leading-relaxed text-slate-800 dark:text-slate-400">
            Pour vos événements professionnels ou familiaux, La Cigale vous propose ses salons privatifs. Un cadre exceptionnel pour des moments inoubliables.
          </p>
          <Button variant="primary-large">Réserver un salon</Button>
        </div>
      </div>

      {/* Boutique */}
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
        <div className="relative w-full h-80 md:w-1/2 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1623595503889-f5c2b29c9ef4?q=80&w=1964&auto=format&fit=crop"
            alt="La Boutique"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left px-4">
          <SectionTitle level={3}>La Boutique</SectionTitle>
          <p className="font-sans text-sm leading-relaxed text-slate-800 dark:text-slate-400">
            Prolongez l&apos;expérience à la maison. Retrouvez nos produits signatures, confiseries artisanales, et mementos dans notre espace boutique.
          </p>
          <Button variant="primary-large">Découvrir</Button>
        </div>
      </div>
    </section>
  );
}
