# Architecture Technique - La Cigale Homepage

Ce document définit la fondation technique du projet frontend, sa structure de code et le découpage de ses composants, conformément au `DESIGN.md` et au plan de projet.

## 1. Stack Technique

**Choix Principal : Next.js (App Router) + React + Tailwind CSS + TypeScript**

**Justification Technique :**
- **Next.js (React)** : Parfait pour construire une application robuste et évolutive. Le Server-Side Rendering (SSR) et le Static Site Generation (SSG) offerts par Next.js garantiront d'excellentes performances de chargement et un SEO (référencement) optimal, ce qui est crucial pour le site public d'une brasserie mythique.
- **Tailwind CSS** : Permet une intégration rapide, "Pixel Perfect", et cohérente avec le Design System établi. Il s'intègre nativement à Next.js.
- **TypeScript** : Offre une sécurité de typage qui réduit considérablement les bugs en cours de développement et rend la base de code plus maintenable ("évolutive").
- **Framer Motion** (Recommandé) : Bien que des transitions CSS classiques (comme existantes dans le HTML initial) puissent suffire, Framer Motion offrira des animations d'apparition (fade-in, slide-up) de qualité "Premium", fluides et très simples à maintenir pour renforcer l'expérience de luxe souhaitée.

## 2. Arborescence Détaillée

L’approche retenue repose sur une séparation claire entre le squelette (Layout/Pages), les sections logiques de la page d'accueil, et les micro-composants réutilisables (UI).

```text
/src
├── app/                  # Routeur Next.js
│   ├── layout.tsx        # Layout global (SEO de base, config de polices, intégration Header/Footer)
│   ├── page.tsx          # Page d'accueil (assemblage des sections)
│   └── globals.css       # Styles globaux Tailwind et classes custom (ex: .art-nouveau-border)
├── components/           # Tous les composants React
│   ├── layout/           # Structure globale
│   │   ├── Header.tsx    # Barre de navigation fixe (Sticky blur)
│   │   └── Footer.tsx    # Pied de page
│   ├── sections/         # Grandes sections composant la Homepage
│   │   ├── HeroSection.tsx        # Section 1 : Image 85vh, Overlay, Titre, Call-To-Action
│   │   ├── StorySection.tsx       # Section 2 : "Une Institution..." avec séparateur
│   │   ├── OffersGallery.tsx      # Section 3 : Galerie des 3 offres (Petit-dej, Repas, Vins)
│   │   ├── ExperienceSection.tsx  # Section 4 : Salons privés & Boutique (Cartes détaillées)
│   │   ├── ParallaxBanner.tsx     # Section 5 : Bannière "Les Céramiques" en parallaxe
│   │   └── ContactInfo.tsx        # Section 6 : Horaires, Adresse, Contact
│   └── ui/               # Micro-composants réutilisables (Design System pur)
│       ├── Button.tsx             # Typologies de boutons (Primary, Ghost)
│       ├── SectionTitle.tsx       # Titre stylisé avec police Cinzel
│       ├── ArtDivider.tsx         # Le filet séparateur ornemental (gold)
│       └── HoverCard.tsx          # Carte avec image, fond assombri et zoom de l'image
├── lib/                  # Utilitaires
│   └── utils.ts          # Fonctions helpers (ex: clsx/tailwind-merge pour fusion de classes)
└── public/               # Assets statiques non compilés
    ├── images/           # Images, favicons, logos
    └── fonts/            # Polices locales éventuelles
```

## 3. Inventaire des Composants (Découpage UI)

L'interface conçue dans Stitch ("La Cigale - Redessin Premium Mobile") se décompose en composants distincts qui reflètent rigoureusement la structuration visuelle du Design System :

### Composants de Layout Globaux
- **`Header`** : Navigation fixée en haut de page, incluant le logo typographique (Cinzel) et le bouton de réservation principal. Gère le fond en `backdrop-blur`.
- **`Footer`** : Zone basse de couleur primaire, reprenant les logos secondaires (Le 1, Aristide, Félix), les liens légaux et les crédits.

### Composants UI ("Micro-composants")
- **`Button`** : 
  - *Variante `primary`* : Fond bleu clair, texte blanc (réserver).
  - *Variante `outline`* : Bordure or/blanche, fond transparent (réserver une table, découvrir).
- **`HoverCard`** : Composant image intégrant l'overlay permanent de `bg-black/30` ou `/40`, l'effet d'agrandissement (`group-hover:scale-110`) et le texte superposé centré en positionnement absolu.
- **`ArtDivider`** : Composant purement visuel reproduisant l'effet or ou `art-nouveau-border`.

### Sections de la Page d'Accueil (`HomePage`)
- **`HeroSection`** : Occupe `85vh` de base (jusqu'à `100vh`), avec l'image principale de la brasserie en fond (`bg-cover`). Affiche la grande typographie ("L'Art de Vivre à la Nantaise") et une flèche de défilement (animated bounce).
- **`StorySection`** : Contenu textuel centré de présentation de l'histoire (Typographie `Montserrat` pour un corps de texte lisible).
- **`OffersGallery`** : Grille (`grid-cols-1` sur mobile) affichant des `HoverCard` empilées sans espacement (`gap-1` ou accolées) pour le Petit-Déjeuner, Déjeuner/Dîner, et la Carte des Vins.
- **`ExperienceSection`** : Partie présentant les Salons Privés et la Boutique, utilisant de grandes images avec des marges internes plus respirantes (`px-6`), des titres dorés (`Cinzel`) et des boutons d'actions contextuels.
- **`ParallaxBanner`** : Bandeau image fixe (`bg-fixed`) pour la partie "Les Céramiques", superposé d'un filtre `backdrop-blur`.
- **`ContactInfo`** : Section finale d'informations pratiques (Icônes Material, Adresse, Horaires, lien téléphonique `tel:`), encadrée par de discrets bordereaux dorés.
