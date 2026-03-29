import { SectionTitle } from "@/components/ui/SectionTitle";

export function ContactInfo() {
  return (
    <section className="py-20 px-6 max-w-2xl mx-auto text-center space-y-12 bg-background-light dark:bg-background-dark">
      <SectionTitle level={3}>Informations Pratiques</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative border border-gold/30 p-8 rounded-sm">
        <div className="space-y-4">
          <h4 className="font-display text-gold tracking-widest uppercase text-sm">Horaires</h4>
          <div className="font-sans text-sm leading-relaxed text-slate-800 dark:text-slate-400">
            <p>Ouvert tous les jours</p>
            <p>De 07h30 à 00h30</p>
            <p className="text-xs italic mt-2 opacity-80">(Service continu)</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-gold tracking-widest uppercase text-sm">Contact</h4>
          <div className="font-sans text-sm leading-relaxed text-slate-800 dark:text-slate-400 flex flex-col space-y-2">
            <p>4 Place Graslin, 44000 Nantes</p>
            <a 
              href="tel:+33251849494" 
              className="text-primary hover:text-gold transition-colors font-semibold"
            >
              +33 (0)2 51 84 94 94
            </a>
            <a 
              href="mailto:contact@lacigale.com" 
              className="hover:text-primary transition-colors"
            >
              contact@lacigale.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
