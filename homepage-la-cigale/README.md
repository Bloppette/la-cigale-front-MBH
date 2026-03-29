# La Cigale - Homepage Premium Frontend

Bienvenue sur le dépôt du projet frontend de la nouvelle page d'accueil de la mythique brasserie nantaise **La Cigale**. Ce projet a été généré via [Next.js](https://nextjs.org/) (App Router), [Tailwind CSS v4](https://tailwindcss.com/) et [TypeScript](https://www.typescriptlang.org/).

## Prérequis

Assurez-vous d'avoir installé sur votre machine :
- **Node.js** (version 18.17 ou supérieure recommandée)
- **npm** (inclus avec Node.js)

## Installation et Démarrage Rapide

1. **Cloner le dépôt** :
   \`\`\`bash
   git clone <url-du-depot-github>
   cd homepage-la-cigale
   \`\`\`

2. **Installer les dépendances** :
   \`\`\`bash
   npm install
   \`\`\`

3. **Lancer le serveur de développement** :
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Visualiser le projet** : 
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## Scripts Utiles

- \`npm run dev\` : Lance le serveur en mode développement avec rechargement à chaud.
- \`npm run build\` : Compile l'application pour la production.
- \`npm start\` : Démarre le serveur de production (nécessite un \`build\` préalable).
- \`npm run lint\` : Vérifie la propreté du code via ESLint.

## Architecture Principale (\`/src\`)

L'architecture suit les recommandations par composants (Dumb / Smart pattern adapté Next.js) :
- \`src/app/\` : Contient le routeur Next.js (pages), le layout racine (chargement des fontes Google Cinzel, Playfair et Montserrat) et les styles globaux (\`globals.css\` avec la config Tailwind `@theme`).
- \`src/components/ui/\` : Les micro-composants réutilisables (Boutons, Titres, Cartes dynamiques).
- \`src/components/layout/\` : Le \`Header\` sticky et le \`Footer\`.
- \`src/components/sections/\` : Les modules métiers constituant la page (Hero, Histoire, Offres, Expérience...).

## Déploiement

La solution la plus simple pour déployer une application Next.js est d'utiliser la plateforme [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
Vous pouvez lier directement votre dépôt GitHub à Vercel pour des déploiements automatiques à chaque \`push\`.
