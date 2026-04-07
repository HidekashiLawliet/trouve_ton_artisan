const db = require("../db/database");
const { normalizeCategory } = require("../utils/normalizeCategory");

// Chaque ligne SQLite est reformatee ici pour garder un contrat stable cote front.
function mapArtisan(row) {
    // Cette transformation adapte les colonnes SQLite au format attendu par le front.
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
    // Cette requete sert de base pour les listings complets.
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

    // Le filtrage final se fait apres normalisation pour absorber les variations d'ecriture.
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
    // La page d'accueil ne consomme que les artisans marques comme top.
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
