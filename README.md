# Trouve Ton Artisan

Application full-stack permettant d'afficher des artisans par categorie, de consulter leur fiche detaillee et de filtrer les artisans mis en avant.

Le projet est compose de :

- un front React dans `src/`
- un backend Express dans `server/`
- une base SQLite locale dans `server/data/`

## Stack technique

- Front : React, React Router, Bootstrap, SCSS
- Back : Node.js, Express
- Base de donnees : SQLite

## Structure principale

- `src/` : interface utilisateur React
- `src/components/ArtisansPage.js` : composant reutilisable des pages artisans
- `src/services/apiClient.js` : client HTTP du front
- `src/config/api.js` : URL de base de l'API
- `server/src/server.js` : point d'entree du backend Express
- `server/src/controllers/` : logique des routes API
- `server/src/repositories/` : acces et transformation des donnees SQLite
- `server/src/db/schema.sql` : schema de la base
- `server/src/db/seeds.sql` : donnees d'initialisation
- `server/data/trouve-ton-artisan.sqlite` : fichier SQLite reel utilise par l'application

## Prerequis

- Node.js installe
- npm installe

## Installation

Installer les dependances du front a la racine du projet :

```bash
npm install
```

Installer ensuite les dependances du backend :

```bash
npm --prefix server install
```

## Variables d'environnement

### Front

Creer un fichier `.env` a la racine a partir de `.env.example` :

```env
REACT_APP_API_URL=http://localhost:4000/api
```

### Back

Creer un fichier `server/.env` a partir de `server/.env.example` :

```env
PORT=4000
FRONTEND_ORIGIN=http://localhost:3000
DB_FILE=./data/trouve-ton-artisan.sqlite
```

## Initialiser la base de donnees

Cette commande applique le schema SQL et recharge les donnees de `server/src/db/seeds.sql` dans la base SQLite locale :

```bash
npm run db:init
```

La base creee ou mise a jour se trouve ici :

```text
server/data/trouve-ton-artisan.sqlite
```

## Demarrer le projet

Le projet se lance avec 2 terminaux.

### 1. Demarrer le backend

Depuis la racine du projet :

```bash
npm run start:server
```

Le serveur API demarre par defaut sur :

```text
http://localhost:4000
```

### 2. Demarrer le frontend

Dans un second terminal, toujours depuis la racine :

```bash
npm start
```

Le front demarre par defaut sur :

```text
http://localhost:3000
```

## Demarrage rapide

Si tout est deja installe, l'ordre conseille est :

```bash
npm run db:init
npm run start:server
npm start
```

## Scripts disponibles

Depuis la racine :

- `npm start` : lance le front React
- `npm run build` : cree la version de production du front
- `npm test` : lance les tests React
- `npm run start:server` : lance le backend Express
- `npm run db:init` : reinitialise la base SQLite depuis le schema et les seeds SQL

Depuis `server/` :

- `npm start` : lance le backend
- `npm run db:init` : initialise la base

## Routes API principales

- `GET /api/health`
- `GET /api/categories`
- `GET /api/artisans`
- `GET /api/artisans?category=services`
- `GET /api/artisans?top=1`

Exemple complet :

```text
http://localhost:4000/api/artisans?category=batiment
```

## En cas de probleme

### Le front affiche "Impossible de joindre l'API"

Verifier que :

- le backend est bien lance avec `npm run start:server`
- le front utilise bien `REACT_APP_API_URL=http://localhost:4000/api`
- le fichier `.env` existe vraiment a la racine

### Les donnees de seed ne changent pas

Modifier `server/src/db/seeds.sql` ne met pas a jour automatiquement la base existante. Il faut relancer :

```bash
npm run db:init
```

### Le port 4000 est deja pris

Verifier qu'une ancienne instance du backend n'est pas deja en cours d'execution.

## Build de production

Pour generer le front de production :

```bash
npm run build
```

Les fichiers optimises seront places dans le dossier `build/`.
