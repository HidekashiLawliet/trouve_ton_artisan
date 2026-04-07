const fs = require("node:fs");
const path = require("node:path");
const db = require("./database");
const { artisans } = require("./seeds");

const schemaSql = fs.readFileSync(path.resolve(__dirname, "schema.sql"), "utf-8");
db.exec(schemaSql);

const clearArtisans = db.prepare("DELETE FROM artisantable");
const insertArtisan = db.prepare(`
    INSERT INTO artisantable (Nom, specialite, note, ville, apropos, email, siteweb, categorie, top)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

db.exec("BEGIN");

try {
    clearArtisans.run();

    artisans.forEach((artisan) => {
        insertArtisan.run(
            artisan.nom,
            artisan.specialite,
            Number(artisan.note || 0),
            artisan.ville,
            artisan.apropos,
            artisan.email,
            artisan.siteweb || "",
            artisan.categorie,
            artisan.top ? 1 : 0
        );
    });

    db.exec("COMMIT");
} catch (error) {
    db.exec("ROLLBACK");
    throw error;
}

console.log(`Database ready: ${db.open ? "open" : "ready"}`);
