const db = require("../db/database");
const { normalizeCategory } = require("../utils/normalizeCategory");

function mapArtisan(row) {
    return {
        id: row.id,
        nom: row.nom,
        metier: row.metier,
        ville: row.ville,
        image: "/assets/img/artisan.png",
        note: Number(row.note).toFixed(1),
        apropos: row.apropos,
        email: row.email,
        siteweb: row.siteweb,
        category: normalizeCategory(row.category),
        top: Boolean(row.top),
    };
}

function getAllArtisans() {
    return db.prepare(`
        SELECT
            rowid AS id,
            Nom AS nom,
            specialite AS metier,
            ville,
            note,
            apropos,
            email,
            siteweb,
            categorie AS category,
            top
        FROM artisantable
        ORDER BY note DESC, Nom ASC
    `).all().map(mapArtisan);
}

function getArtisansByCategorySlug(slug) {
    const normalizedTarget = normalizeCategory(slug);

    return db.prepare(`
        SELECT
            rowid AS id,
            Nom AS nom,
            specialite AS metier,
            ville,
            note,
            apropos,
            email,
            siteweb,
            categorie AS category,
            top
        FROM artisantable
        ORDER BY note DESC, Nom ASC
    `).all().map(mapArtisan).filter((artisan) => artisan.category === normalizedTarget);
}

function getTopArtisans() {
    return db.prepare(`
        SELECT
            rowid AS id,
            Nom AS nom,
            specialite AS metier,
            ville,
            note,
            apropos,
            email,
            siteweb,
            categorie AS category,
            top
        FROM artisantable
        WHERE top = 1
        ORDER BY note DESC, Nom ASC
    `).all().map(mapArtisan);
}

module.exports = {
    getAllArtisans,
    getArtisansByCategorySlug,
    getTopArtisans,
};
