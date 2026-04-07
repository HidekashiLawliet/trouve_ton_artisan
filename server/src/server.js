const fs = require("node:fs");
const path = require("node:path");
const http = require("node:http");
const { URL } = require("node:url");
const env = require("./config/env");
const { json, notFound } = require("./utils/response");
const { listCategories } = require("./controllers/categoryController");
const { listArtisans } = require("./controllers/artisanController");

require("./db/initDb");

const publicRoot = path.resolve(__dirname, "..", "..", "public");

function setCorsHeaders(response) {
    response.setHeader("Access-Control-Allow-Origin", env.frontendOrigin);
    response.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function attachHelpers(response) {
    response.json = (payload, statusCode = 200) => json(response, payload, statusCode);
}

function serveAsset(requestPath, response) {
    const normalized = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
    const filePath = path.resolve(publicRoot, `.${normalized}`);

    if (!filePath.startsWith(publicRoot) || !fs.existsSync(filePath)) {
        notFound(response);
        return;
    }

    const contentTypes = {
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".webp": "image/webp",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
    };

    response.writeHead(200, {
        "Content-Type": contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
    });

    fs.createReadStream(filePath).pipe(response);
}

const server = http.createServer((request, response) => {
    attachHelpers(response);
    setCorsHeaders(response);

    if (request.method === "OPTIONS") {
        response.writeHead(204);
        response.end();
        return;
    }

    const requestUrl = new URL(request.url, `http://${request.headers.host}`);
    const query = Object.fromEntries(requestUrl.searchParams.entries());

    if (request.method === "GET" && requestUrl.pathname === "/api/health") {
        response.json({ status: "ok" });
        return;
    }

    if (request.method === "GET" && requestUrl.pathname === "/api/categories") {
        listCategories({ query }, response);
        return;
    }

    if (request.method === "GET" && requestUrl.pathname === "/api/artisans") {
        listArtisans({ query }, response);
        return;
    }

    if (request.method === "GET" && requestUrl.pathname.startsWith("/assets/")) {
        serveAsset(requestUrl.pathname, response);
        return;
    }

    notFound(response);
});

server.listen(env.port, () => {
    console.log(`API server listening on http://localhost:${env.port}`);
});
