const path = require("node:path");
const express = require("express");
const env = require("./config/env");
const { listCategories } = require("./controllers/categoryController");
const { listArtisans } = require("./controllers/artisanController");

require("./db/initDb");

const app = express();
const publicRoot = path.resolve(__dirname, "..", "..", "public");

app.use(express.json());

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

app.use("/assets", express.static(path.join(publicRoot, "assets")));

app.get("/api/health", (_request, response) => {
    response.json({ status: "ok" });
});

app.get("/api/categories", listCategories);
app.get("/api/artisans", listArtisans);

app.use((_request, response) => {
    response.status(404).json({ error: "Route not found" });
});

app.listen(env.port, () => {
    console.log(`API server listening on http://localhost:${env.port}`);
});
