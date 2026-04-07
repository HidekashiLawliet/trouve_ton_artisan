const db = require("../db/database");

function getAllCategories() {
    const rows = db.prepare(`
        SELECT categorie
        FROM artisantable
        GROUP BY categorie
        ORDER BY categorie ASC
    `).all();

    const categories = rows.map((row) => ({
        slug: row.categorie,
        name: row.categorie,
    }));

    const uniqueCategories = Array.from(
        new Map(categories.map((category) => [category.slug, category])).values()
    );

    return uniqueCategories.map((category, index) => ({
        id: index + 1,
        slug: category.slug,
        name: category.name.charAt(0).toUpperCase() + category.name.slice(1),
    }));
}


module.exports = {
    getAllCategories,
    findCategoryBySlug,
};
