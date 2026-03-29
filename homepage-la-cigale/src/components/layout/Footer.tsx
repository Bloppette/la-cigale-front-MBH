export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center space-y-6">
        <div className="flex gap-6 justify-center items-center opacity-80">
          <span className="font-display tracking-[0.2em] text-sm uppercase">Le 1</span>
          <span className="font-display tracking-[0.2em] text-sm uppercase">Aristide</span>
          <span className="font-display tracking-[0.2em] text-sm uppercase">Félix</span>
        </div>
        <div className="py-6 w-full border-t border-white/20">
          <p className="font-sans text-xs tracking-wides opacity-80">
            © {new Date().getFullYear()} Brasserie La Cigale. Tous droits réservés.
          </p>
          <div className="flex justify-center gap-4 mt-4 font-sans text-[10px] uppercase tracking-widest opacity-70">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
