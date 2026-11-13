# Documentation technique — Smart Stream TV

## 1. Objectif

Créer une application web permettant de consulter un catalogue de chaînes TV, réparties par catégories, avec recherche et aperçu dynamique.

## 2. Architecture

Le projet utilise des modules JavaScript ES6 pour répartir les responsabilités :

- `services/api.js` : requête HTTP avec `fetch`, lecture de la réponse JSON et vérification du statut HTTP.
- `js/app.js` : initialisation de l'application et choix entre cache et requête API.
- `js/ui.js` : affichage des catégories, liste des chaînes et aperçu de la chaîne sélectionnée.
- `js/search.js` : filtrage des chaînes par nom et numéro.
- `js/storage.js` : lecture et écriture dans `localStorage`.
- `js/errors.js` (si conservé dans le projet final) : fonctions liées aux messages d'erreur et au chargement.

## 3. Requêtes asynchrones

L'application utilise `fetch()` pour appeler la ressource `channels` de MockAPI. Le service API utilise `async/await` et vérifie `response.ok`. Un statut HTTP non réussi peut être transformé en exception avec `throw new Error(...)`. Le bloc `catch` permet de traiter les erreurs, notamment celles du réseau.

## 4. Gestion des données

Les données de chaque chaîne comprennent notamment un identifiant, un numéro, un nom, une catégorie, un logo et une image d'aperçu. Le catalogue est filtré selon la catégorie choisie.

## 5. Recherche

La recherche utilise `filter()` et `includes()` pour comparer le texte saisi au nom d'une chaîne ou à son numéro converti en chaîne de caractères. Elle travaille sur la catégorie actuellement sélectionnée.

## 6. Cache LocalStorage

- `setData(data)` : sérialise le tableau de chaînes avec `JSON.stringify()` puis le stocke dans `localStorage`.
- `getData()` : lit la valeur et la reconvertit avec `JSON.parse()`.
- Stratégie « cache first » : si un tableau est déjà en cache, l'application l'utilise ; sinon, elle sollicite l'API et stocke le résultat reçu.

Limite : sans mécanisme d'expiration, une mise à jour de MockAPI n'est pas nécessairement visible immédiatement si un cache valide existe.

## 7. Interface et interaction

L'interface est construite en HTML et Tailwind CSS. Les événements `click` permettent de choisir une catégorie et une chaîne. L'événement `input` permet de mettre à jour la liste au fur et à mesure de la saisie. Les éléments du DOM sont mis à jour avec `innerHTML`, `textContent`, `src` et `classList` selon les besoins.

## 8. Gestion du chargement et des erreurs

Un indicateur SVG signale le chargement. Une erreur HTTP ou réseau peut déclencher un message visible dans l'interface. La version actuelle utilise également un délai d'affichage de chargement configurable dans le code ; celui-ci n'est pas nécessaire à la requête réseau elle-même.

## 9. Tests manuels à réaliser avant livraison

- [ ] Démarrer le projet avec `npm run dev`.
- [ ] Vider `mydata` puis actualiser : la liste se charge depuis l'API.
- [ ] Actualiser de nouveau : les données sont lues depuis le cache.
- [ ] Cliquer sur chaque catégorie : les chaînes attendues apparaissent.
- [ ] Rechercher par nom et par numéro ; effacer la recherche.
- [ ] Cliquer sur une chaîne : l'aperçu et son nom changent.
- [ ] Simuler une erreur réseau : vérifier le message et la disparition du loader.
- [ ] Vérifier l'affichage sur un écran de petite taille.
- [ ] Exécuter `npm run build` sans erreur.

## 10. Git et livraison

Travail par branches de fonctionnalités, intégration vers `develop`, puis stabilisation sur `main` après vérification. La livraison comprend le code source, le README, cette documentation et un lien de déploiement lorsqu'il est disponible.
