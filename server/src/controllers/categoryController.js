const { getAllCategories } = require("../repositories/categoryRepository");

function listCategories(_request, response) {
    response.json({ data: getAllCategories() });
}

module.exports = { listCategories };
