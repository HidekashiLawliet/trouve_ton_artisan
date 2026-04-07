const db = require("../db/database");
const { normalizeCategory } = require("../utils/normalizeCategory");

// Le libelle visible dans le front est derive du slug normalise.
function toDisplayName(slug) {
    return slug.charAt(0).toUpperCase() + slug.slice(1);
}

function getAllCategories() {
    const rows = db.prepare(`
        SELECT categorie
        FROM artisantable
        GROUP BY categorie
        ORDER BY categorie ASC
    `).all();

    // On dedoublonne apres normalisation pour ne garder qu'un slug par categorie.
    const uniqueCategories = Array.from(
        new Map(
            rows.map((row) => {
                const slug = normalizeCategory(row.categorie);
                return [slug, { slug, name: toDisplayName(slug) }];
            })
        ).values()
    );

    return uniqueCategories.map((category, index) => ({
        id: index + 1,
        slug: category.slug,
        name: category.name,
    }));
}

function findCategoryBySlug(slug) {
    const normalizedTarget = normalizeCategory(slug);
    return getAllCategories().find((category) => category.slug === normalizedTarget) || null;
}

module.exports = {
    getAllCategories,
    findCategoryBySlug,
};
