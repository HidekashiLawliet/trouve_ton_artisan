const path = require("node:path");

function resolveDbPath(dbFile) {
    return path.isAbsolute(dbFile)
        ? dbFile
        : path.resolve(__dirname, "..", "..", dbFile);
}

const env = {
    port: Number(process.env.PORT || 4000),
    frontendOrigin: process.env.FRONTEND_ORIGIN || "http://localhost:3000",
    dbFile: resolveDbPath(process.env.DB_FILE || "./data/trouve-ton-artisan.sqlite"),
};

module.exports = env;
