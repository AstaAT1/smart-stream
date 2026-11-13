# Smart Stream TV

Application web de catalogue de chaînes TV, développée dans le cadre d'un projet pédagogique YouCode.

## Présentation

Smart Stream permet de parcourir un catalogue de chaînes organisées par catégorie, de rechercher une chaîne et de consulter son aperçu.

## Fonctionnalités réalisées

- Accueil avec navigation par catégories : Documentaires, Films, Séries, Sports, Actualités et Musique.
- Récupération des chaînes depuis MockAPI avec Fetch API.
- Affichage dynamique de la liste des chaînes et de leur aperçu (image et nom).
- Recherche par nom de chaîne ou numéro.
- Mise en cache locale des données avec `localStorage` (stratégie « cache first »).
- Affichage d'un indicateur de chargement et d'un message d'erreur lors des requêtes.

## Technologies

- HTML5
- Tailwind CSS
- JavaScript natif (ES6+, modules)
- Vite
- MockAPI
- LocalStorage

## Installation et lancement

Prérequis : Node.js et npm.

```bash
git clone https://github.com/AstaAT1/smart-stream.git
cd smart-stream
npm install
npm run dev
```

Ouvrir l'URL locale affichée par Vite dans le terminal.

## Organisation du projet

```text
smart-stream/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── ui.js
│   ├── search.js
│   └── storage.js
├── services/
│   └── api.js
├── assets/
├── data/
│   └── data.json
├── package.json
└── README.md
```

> Un module complémentaire d'affichage du chargement et des erreurs peut se trouver dans `js/errors.js`, selon la version finale du projet.

## Fonctionnement

1. L'application tente de récupérer les chaînes depuis le cache local.
2. Si les données du cache ne sont pas utilisables, elle effectue une requête vers MockAPI.
3. L'utilisateur choisit une catégorie et parcourt les chaînes affichées.
4. La recherche filtre les chaînes par nom ou numéro.
5. Un clic sur une chaîne met à jour son aperçu.

## API

Source de données : MockAPI, ressource `channels`.

Endpoint utilisé pendant le développement :

`https://6af2e6e842c6561ced399f46.mockapi.io/api/v1/channels`

## Limites actuelles

- Le cache local peut conserver des données anciennes jusqu'à son effacement.
- Les données de démonstration ne garantissent pas la disponibilité d'un flux vidéo réel.
- Le lecteur vidéo et le guide des programmes (EPG) ne sont pas présentés comme des fonctionnalités terminées.

## Déploiement

Ajouter ici l'URL de l'application déployée : **à compléter**.

## Auteur

Projet réalisé dans le cadre de la formation YouCode.
