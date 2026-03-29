import { HoverCard } from "@/components/ui/HoverCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

const OFFERS = [
  {
    title: "Le Petit-Déjeuner",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Déjeuner & Dîner",
    image: "https://images.unsplash.com/photo-1544025162-81111420d4d8?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "La Carte des Vins",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
  },
];

export function OffersGallery() {
  return (
    <section className="grid grid-cols-1 gap-1 px-1 bg-background-light dark:bg-background-dark pb-16">
      {OFFERS.map((offer) => (
        <HoverCard
          key={offer.title}
          imageSrc={offer.image}
          imageAlt={offer.title}
          className="h-72 md:h-96"
        >
          <SectionTitle level={4}>{offer.title}</SectionTitle>
        </HoverCard>
      ))}
    </section>
  );
}
