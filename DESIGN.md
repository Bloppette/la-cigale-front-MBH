# Design System - La Cigale Homepage

Ce document répertorie les jetons de design (design tokens) et les choix hiérarchiques extraits de la page d'accueil de la brasserie La Cigale.

## 1. Couleurs (Color Palette)

La palette repose sur un contraste élégant avec des touches dorées Art Nouveau et un bleu signature.

- **Primary (Bleu Signature)** : `#5B96C3`
- **Gold (Or / Accent)** : `#C5A059`
- **Background Light (Ivoiren Crème)** : `#FDFBF7`
- **Background Dark** : `#121212`
- **Gradient Art Nouveau** (Bordures) : `#C5A059` ➔ `#EAD6A8` ➔ `#C5A059`

## 2. Typographie (Typography)

L'association de trois polices Google Fonts garantit une esthétique classique et moderne à la fois.

- **Display (Titres Principaux & Logo)** : `Cinzel`, serif
  - *Usage* : Titres héroïques, nom de la marque, appels à l'action très stylisés. Souvent utilisé en majuscules avec un grand espacement (`tracking-widest` ou `tracking-[0.2em]`).
- **Serif (Citations & Accents)** : `Playfair Display`, serif
  - *Usage* : Citations (ex: "Peut-être la plus belle Brasserie du monde"), textes en italique.
- **Sans-serif (Corps de texte)** : `Montserrat`, sans-serif
  - *Usage* : Descriptions, paragraphes longs, détails pratiques.

## 3. Composants et Effets UI (UI Elements & Effects)

- **Arrondis (Border Radius)** : `2px` (très léger, effet presque net "sharp").
- **Boutons** :
  - *Bouton Primaire* : Fond `#5B96C3`, texte blanc plein, typographie majuscule taille xs/10px, espacement large (`tracking-widest`).
  - *Bouton Ghost* : Bordure transparente ou fine (or/blanc), texte majuscule avec hover fond inversé (ex: `hover:bg-white hover:text-black`, ou `hover:bg-primary`). Transition fluide (`transition-all`).
- **Cartes & Images (Hover)** : 
  - Effet de zoom lent au survol pour les images (Scale 110%, `duration-700`).
  - Overlay sombre permanent sur les images (`bg-black/30`), devenant très légèrement plus opaque au survol (`bg-black/40`) pour améliorer la lisibilité du texte par-dessus.
- **Navigation (Header)** : Fixé en haut (`sticky top-0`), fond transparent avec flou (`backdrop-blur-md`), bordure discrète orifiée (`border-gold/20`).

## 4. Spacements et Layouts
- **Héros (Hero Section)** : Hauteur de `85vh` ou plein écran avec une image de fond couverte d'un overlay (`bg-black/40`).
- **Séparateurs** : Petites lignes horizontales `h-[1px]` de couleur `bg-gold` ou un système de bordure personnalisée *Art Nouveau* (`.art-nouveau-border`).
