import { useEffect, useState } from "react";
import { getArtisans } from "../services/apiClient";

export default function useArtisans(category, options = {}) {
    const [artisans, setArtisans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { topOnly = false } = options;

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
