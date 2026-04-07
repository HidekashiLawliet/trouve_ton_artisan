import API_BASE_URL from "../config/api";

//  client HTTP du front pour garder les appels API au meme endroit.
async function request(path) {
    let response;

    try {
        //  les requetes du frontend passent ici pour centraliser les erreurs reseau.
        response = await fetch(`${API_BASE_URL}${path}`);
    } catch (_error) {
        throw new Error("Impossible de joindre l'API. Verifie que le serveur backend tourne sur http://localhost:4000.");
    }

    if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || "Une erreur est survenue pendant le chargement.");
    }

    return response.json();
}

export async function getArtisans(category, options = {}) {
    const params = new URLSearchParams();
    const { topOnly = false } = options;

    // Les filtres sont passes en string pour rester simples cote API.
    if (category) {
        params.set("category", category);
    }

    if (topOnly) {
        params.set("top", "1");
    }

    const query = params.toString();
    const payload = await request(query ? `/artisans?${query}` : "/artisans");

    return payload.data;
}
