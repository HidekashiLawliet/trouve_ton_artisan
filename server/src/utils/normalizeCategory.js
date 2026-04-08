// Cette fonction aligne les variantes de categories vers une cle stable exploitable par l'API.
function normalizeCategory(value) {
    const normalized = String(value || "")
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    // On corrige ici les variantes de saisie historiques stockees en base.
    if (normalized === "alimentaion") {
        return "alimentation";
    }

    return normalized;
}

module.exports = { normalizeCategory };
