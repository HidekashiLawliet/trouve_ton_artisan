const db = require("../db/database");

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
        category: row.category,
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
            category,
            top
        FROM artisantable
        ORDER BY note DESC, Nom ASC
    `).all().map(mapArtisan);
}

function getArtisansByCategorySlug(slug) {
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
            category,
            top
        FROM artisantable
        ORDER BY note DESC, Nom ASC
    `).all().map(mapArtisan).filter((artisan) => artisan.category);
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
            category,
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
