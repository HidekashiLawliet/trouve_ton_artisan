const { getAllCategories } = require("../repositories/categoryRepository");

// Cette route expose la liste des categories utilisables par le front.
function listCategories(_request, response) {
    response.json({ data: getAllCategories() });
}

module.exports = { listCategories };
