# Spécifications UI - La Cigale Homepage

Ce document contient les spécifications techniques (classes Tailwind CSS et structure HTML) extraites scrupuleusement de l'écran Stitch prioritaire ("La Cigale - Redessin Premium Mobile" - `964c89144fab490f95ada205fda7ccd1`) et des tokens définis dans `DESIGN.md`, à destination du Développeur Frontend.

## 1. Jetons de Design (Tailwind Config)

Le fichier `tailwind.config.ts` devra inclure ces définitions exactes :

- **Couleurs** :
  - `primary`: `#5B96C3`
  - `gold`: `#C5A059`
  - `background-light`: `#FDFBF7`
  - `background-dark`: `#121212`
- **Typographies** :
  - `display`: `['Cinzel', 'serif']`
  - `serif`: `['Playfair Display', 'serif']`
  - `sans`: `['Montserrat', 'sans-serif']`
- **Border Radius** :
  - `DEFAULT`: `2px`

## 2. Typographie & Espacement (Classes Tailwind)

Les classes suivantes doivent être appliquées strictement pour respecter l'esthétique "Premium" et l'échelle hiérarchique :

### Titres (Headings)
- **Titre H1 (Logo, Header)** : `font-display text-2xl tracking-[0.2em] text-primary` ou `tracking-[0.3em] uppercase`
- **Titre H2 (Hero Section)** : `text-white font-display text-4xl leading-tight`
- **Titre H3 (Sections)** : `font-display text-gold text-xl tracking-widest uppercase`
- **Titre H4 (Cartes/Galerie)** : `text-white font-display text-2xl tracking-widest`

### Corps de Texte (Body & Accents)
- **Citations / Accents (Serif)** : `font-serif italic text-lg opacity-90 tracking-wide`
- **Corps de texte courant (Sans-serif)** : `font-sans text-sm leading-relaxed text-slate-800 dark:text-slate-400`
- **Micro-copy (Or)** : `text-gold text-[10px] uppercase tracking-[0.2em]`

## 3. Structure & Grille (Layouts)

- **Conteneur Principal (Centrage du texte)** : `max-w-2xl mx-auto text-center`
- **Paddings Sectionnels** : `py-20 px-8` ou `py-16 px-6` (verticalement aérés).
- **Hero Section** : 
  - Hauteur : `h-[85vh]` ou `min-height: max(884px, 100dvh)`
  - Alignement : `relative flex items-center justify-center overflow-hidden`
- **Offres / Galerie (Images empilées sur mobile)** : 
  - Grille globale : `grid grid-cols-1 gap-1 px-1`
- **Séparateurs** :
  - Ligne Or Centrée : `w-12 h-[1px] bg-gold mx-auto` ou `w-8 h-[1px]`

## 4. Composants UI (Classes Exactes)

### Boutons
- **Bouton Primaire (Header)** : `bg-primary hover:bg-primary/90 text-white px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all shadow-sm`
- **Bouton Primaire (Large - Salons)** : `w-full py-4 border border-primary text-primary font-display text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-colors`
- **Bouton Transparent Contour (Héros)** : `border-2 border-white text-white px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-black transition-all`

### Cartes Image au Survol (HoverCard)
- **Conteneur** : `relative h-64 flex items-center justify-center group overflow-hidden`
- **Image** : `absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`
- **Overlay Sombre** : `absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors`
- **Contenu Texte** : `relative z-10 text-center`

### Header (Navigation Fixe)
- **Classes** : `sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gold/20 px-4 py-3 flex justify-between items-center`

## 5. Exigences Globales
- **Aucune variante non documentée** : Si un espacement n'est pas précisé dans ces valeurs (ex: `py-20`, `mb-6`, `mb-8`), vous devez vous référer aux multiples de Tailwind en gardant une cohérence avec le reste (grandes respirations).
- **Thème Sombre (Dark Mode)** : La page inclut des transitions de thème. Utilisez les classes natives `dark:bg-background-dark`, `dark:text-slate-200`, `dark:text-slate-400` pour refléter les états sombres natifs des maquettes.
