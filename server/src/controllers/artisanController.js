const { findCategoryBySlug } = require("../repositories/categoryRepository");
const { getAllArtisans, getArtisansByCategorySlug, getTopArtisans } = require("../repositories/artisanRepository");

function listArtisans(request, response) {
    const { category, top } = request.query;

    if (top === "1" || top === "true") {
        response.json({ data: getTopArtisans() });
        return;
    }

    if (!category) {
        response.json({ data: getAllArtisans() });
        return;
    }

    const existingCategory = findCategoryBySlug(category);
    if (!existingCategory) {
        response.json({ error: `Unknown category: ${category}` }, 404);
        return;
    }

    response.json({ data: getArtisansByCategorySlug(category) });
}

module.exports = { listArtisans };
