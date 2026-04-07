const fs = require("node:fs");
const path = require("node:path");
const db = require("./database");

// On recharge le schema et les donnees d'exemple depuis les scripts SQL de reference.
const schemaSql = fs.readFileSync(path.resolve(__dirname, "schema.sql"), "utf-8");
const seedsSql = fs.readFileSync(path.resolve(__dirname, "seeds.sql"), "utf-8");
db.exec(schemaSql);

const clearArtisans = db.prepare("DELETE FROM artisantable");

// A chaque initialisation, on recree le contenu de la table depuis le seed SQL.
db.exec("BEGIN");

try {
    clearArtisans.run();
    db.exec(seedsSql);
    db.exec("COMMIT");
} catch (error) {
    db.exec("ROLLBACK");
    throw error;
}

console.log(`Database ready: ${db.open ? "open" : "ready"}`);
