# Trouve Ton Artisan

Le projet contient maintenant :

- un front React dans `src/`
- un backend API dans `server/`
- une base SQLite locale initialisee automatiquement au lancement du serveur

## Structure utile

- `server/src/server.js` : serveur HTTP et routes API
- `server/src/db/schema.sql` : schema de la base
- `server/src/db/seeds.js` : donnees de depart
- `src/services/apiClient.js` : client front pour interroger l'API
- `src/components/ArtisansPage.js` : composant reutilisable pour afficher les artisans

## Variables d'environnement

Front :

1. Copier `.env.example` vers `.env`
2. Verifier `REACT_APP_API_URL=http://localhost:4000/api`

Back :

1. Copier `server/.env.example` vers `server/.env`
2. Ajuster les valeurs si besoin

## Lancer le projet

Dans un terminal pour l'API :

```bash
npm run start:server
```

Dans un second terminal pour le front :

```bash
npm start
```

## API disponible

- `GET /api/health`
- `GET /api/categories`
- `GET /api/artisans`
- `GET /api/artisans?category=services`

## Base de donnees

La base SQLite est creee dans :

```text
server/data/trouve-ton-artisan.sqlite
```

Pour reinitialiser la structure et les seeds :

```bash
npm run db:init
```
