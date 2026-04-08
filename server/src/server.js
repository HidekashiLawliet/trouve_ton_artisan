const path = require("node:path");
const express = require("express");
const env = require("./config/env");
const { listCategories } = require("./controllers/categoryController");
const { listArtisans } = require("./controllers/artisanController");

// L'initialisation de la base est chargee au demarrage pour garantir un schema pret.
require("./db/initDb");

const app = express();
const publicRoot = path.resolve(__dirname, "..", "..", "public");

// Express parse ici les corps JSON des futures requetes POST/PUT.
app.use(express.json());

// CORS minimal pour autoriser le front React local a interroger l'API.
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", env.frontendOrigin);
    response.header("Access-Control-Allow-Methods", "GET,OPTIONS");
    response.header("Access-Control-Allow-Headers", "Content-Type");

    if (request.method === "OPTIONS") {
        response.sendStatus(204);
        return;
    }

    next();
});

// Les fichiers publics restent servis par Express pour les images et assets.
app.use("/assets", express.static(path.join(publicRoot, "assets")));

app.get("/api/health", (_request, response) => {
    response.json({ status: "ok" });
});

// Les routes metier sont deleguees aux controleurs.
app.get("/api/categories", listCategories);
app.get("/api/artisans", listArtisans);

// Toute route API inconnue renvoie un JSON explicite.
app.use((_request, response) => {
    response.status(404).json({ error: "Route not found" });
});

// Le serveur ecoute sur le port defini dans la configuration d'environnement.
app.listen(env.port, () => {
    console.log(`API server listening on http://localhost:${env.port}`);
});
