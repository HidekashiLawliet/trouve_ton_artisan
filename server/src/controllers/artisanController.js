const { findCategoryBySlug } = require("../repositories/categoryRepository");
const { getAllArtisans, getArtisansByCategorySlug, getTopArtisans } = require("../repositories/artisanRepository");

// Le controleur transforme les parametres HTTP en appels metier simples.
function listArtisans(request, response) {
    const { category, top } = request.query;

    // Le filtre "top" alimente directement la page d'accueil.
    if (top === "1" || top === "true") {
        response.json({ data: getTopArtisans() });
        return;
    }

    // Sans categorie, on renvoie la liste complete.
    if (!category) {
        response.json({ data: getAllArtisans() });
        return;
    }

    // On valide la categorie avant de lancer le filtrage metier.
    const existingCategory = findCategoryBySlug(category);
    if (!existingCategory) {
        response.status(404).json({ error: `Unknown category: ${category}` });
        return;
    }

    response.json({ data: getArtisansByCategorySlug(category) });
}

module.exports = { listArtisans };
