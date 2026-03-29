# Plan de Projet - La Cigale Homepage

## 1. Vue d'ensemble & Brief UX
L'objectif de ce projet est de réaliser l'intégration frontend de la nouvelle page d'accueil de la brasserie nantaise mythique, **La Cigale**. L'expérience utilisateur (UX) visée met l'accent sur un rendu "Premium" et "Heritage Luxury", respectant une forte identité Art Nouveau. La navigation doit être fluide, immersive (effets de parallaxe, assombrissement au survol), avec une esthétique reposant sur des contrastes élégants (Bleu signature, Dorures, fonds clairs/sombres). Le projet s'oriente principalement sur une expérience mobile ("Redessin Premium Mobile").

## 2. Ressources & Écrans Stitch
Le design de référence a été généré via Stitch. Voici les écrans à utiliser comme source exclusive de vérité pour l'intégration :

| Nom de l'écran | ID / Lien Stitch | Statut |
| :--- | :--- | :--- |
| La Cigale Homepage - Heritage Luxury | `projects/1080734482584111373/screens/7b92e5f912c34968a605b0cd74d3f6d2` | À analyser |
| La Cigale - Redessin Premium Mobile | `projects/1080734482584111373/screens/964c89144fab490f95ada205fda7ccd1` | Cible Prioritaire |

> Remarque : Le fichier `DESIGN.md` existant contient également les design tokens (Couleurs, Typographie, Spacements) à respecter.

## 3. Découpage des Tâches

### Phase 1 : Architecture et Spécifications (Pré-développement)
- **Agent Architecte** :
  - Analyser les écrans Stitch et le document `DESIGN.md`.
  - Choisir/Confirmer la stack technique web frontend. 
  - Définir l'arborescence du projet et l'inventaire des composants structuraux.
  - Livrable : `ARCHITECTURE.md`.
- **Agent Designer** :
  - Interroger les projets Stitch via MCP pour extraire les données UI exactes des écrans Stitch.
  - Rédiger les spécifications UI (Grid, Espacements, Typos, Couleurs).
  - Livrable : `UI_SPECS.md`.

### Phase 2 : Développement Frontend
- **Agent Développeur (Frontend)** :
  - Intégrer les composants et les sections (Hero, Réservation, Menu, etc.) en respectant l'arborescence définie par l'Architecte.
  - Appliquer strictement les classes et styles définis dans `UI_SPECS.md` et `DESIGN.md`.
  - Assurer la conformité "Pixel Perfect" et le comportement responsive.

## 4. Directives de Design (RÈGLE D'OR CRITIQUE)
**TOUTES les décisions de design doivent provenir exclusivement des maquettes (écrans Stitch) et du fichier `DESIGN.md`.**
Il est formellement interdit à tous les agents d'inventer des éléments de design (couleurs, marges, typographies, effets) qui ne figurent pas explicitement dans ces documents de référence. En cas d'ambiguïté, les assets Stitch priment sur toute autre interprétation.
