import useArtisans from "../hooks/useArtisans";

export default function ArtisansPage({ title, category, topOnly = false }) {
    const { artisans, loading, error } = useArtisans(category, { topOnly });

    return (
        <div className="d-flex bg-primary" id="screen_background">
            <div className="mx-auto w-100 py-5 px-3">
                <h2 className="text-center mb-5 text-dark fs-1">{title}</h2>

                <div className="card_container bg-dark bg-opacity-50 backdrop-blur my-auto p-4 rounded-4 mx-auto">
                    {loading ? <p className="text-white text-center mb-0">Chargement des artisans...</p> : null}
                    {!loading && error ? <p className="text-warning text-center mb-0">{error}</p> : null}

                    {!loading && !error ? (
                        <div className="cards_track">
                            {artisans.map((artisan) => (
                                <div className="service_card" key={artisan.id}>
                                    <div className="card h-100 text-center">
                                        <div className="card_body">
                                            <p className="name_artisan fs-5 fw-bold">{artisan.nom}</p>
                                            <p className="metier_artisan fs-5">{artisan.metier}</p>
                                            <p className="ville_artisan fs-5">{artisan.ville}</p>
                                            <div className="my-4">
                                                <img className="artisan_image" src={artisan.image} alt={`Portrait de ${artisan.nom}`} />
                                            </div>
                                            <p>
                                                {artisan.note} <i className="bi bi-star-fill text-warning"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
