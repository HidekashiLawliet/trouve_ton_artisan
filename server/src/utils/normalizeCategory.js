function normalizeCategory(value) {
    const normalized = String(value || "")
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    if (normalized === "alimentaion") {
        return "alimentation";
    }

    return normalized;
}

module.exports = { normalizeCategory };
