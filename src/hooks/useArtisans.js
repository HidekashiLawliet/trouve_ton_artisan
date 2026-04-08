import { useEffect, useState } from "react";
import { getArtisans } from "../services/apiClient";

// Ce hook mutualise le chargement des artisans pour toutes les pages qui en ont besoin.
export default function useArtisans(category, options = {}) {
    const [artisans, setArtisans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { topOnly = false } = options;

    // Ce hook encapsule tout le cycle de chargement des artisans depuis l'API.
    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                setLoading(true);
                setError("");
                const data = await getArtisans(category, { topOnly });
                const filteredData = topOnly
                    ? data.filter((artisan) => artisan.top === true)
                    : data;

                // On evite de mettre a jour l'etat si le composant a deja ete demonte.
                if (!cancelled) {
                    setArtisans(filteredData);
                }
            } catch (requestError) {
                if (!cancelled) {
                    setError(requestError.message);
                    setArtisans([]);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        load();

        return () => {
            cancelled = true;
        };
    }, [category, topOnly]);

    return { artisans, loading, error };
}
