import { useEffect, useState } from "react";
import useArtisans from "../hooks/useArtisans";

export default function ArtisansPage({ title, category, topOnly = false }) {
    const { artisans, loading, error } = useArtisans(category, { topOnly });
    const [selectedArtisan, setSelectedArtisan] = useState(null);
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    useEffect(() => {
        if (!selectedArtisan && !isContactFormOpen) {
            document.body.style.overflow = "";
            return undefined;
        }

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                if (isContactFormOpen) {
                    setIsContactFormOpen(false);
                } else {
                    setSelectedArtisan(null);
                }
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [selectedArtisan, isContactFormOpen]);

    return (
        <div className="d-flex bg-primary" id="screen_background">
            <div className="mx-auto w-100">
                <div className="bg-primary mb-5 py-3 w-100">
                    <div className="container">
                        <h2 className="text-white text-center mb-5 fw-bold">Comment trouver mon artisan ?</h2>

                        <div className="row align-items-center position-relative">
                            <div className="col text-center">
                                <div className="step_circle mx-auto mb-3 rounded-circle bg-white d-flex align-items-center justify-content-center">
                                    <p className="mb-0 fs-1">1</p>
                                </div>
                                <p className="text-white mb-0 fs-5 fw-medium">Choisir la catégorie d'artisan dans le menu.</p>
                            </div>

                            <div className="col-1 d-none d-md-block position-relative"></div>

                            <div className="col text-center">
                                <div className="step_circle mx-auto mb-3 rounded-circle bg-white d-flex align-items-center justify-content-center">
                                    <p className="mb-0 fs-1">2</p>
                                </div>
                                <p className="text-white mb-0 fs-5 fw-medium">Choisir un artisan.</p>
                            </div>

                            <div className="col-1 d-none d-md-block position-relative"></div>

                            <div className="col text-center">
                                <div className="step_circle mx-auto mb-3 rounded-circle bg-white d-flex align-items-center justify-content-center">
                                    <p className="mb-0 fs-1">3</p>
                                </div>
                                <p className="text-white mb-0 fs-5 fw-medium">Le contacter via le formulaire de contact.</p>
                            </div>

                            <div className="col-1 d-none d-md-block position-relative"></div>

                            <div className="col text-center">
                                <div className="step_circle mx-auto mb-3 rounded-circle bg-white d-flex align-items-center justify-content-center">
                                    <p className="mb-0 fs-1">4</p>
                                </div>
                                <p className="text-white mb-0 fs-5 fw-medium">Une réponse sera apportée sous 48h.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-center mb-5 text-dark fs-1">{title}</h2>

                <div className="card_container bg-dark bg-opacity-50 backdrop-blur my-auto p-4 rounded-4 mx-auto">
                    {loading ? <p className="text-white text-center mb-0">Chargement des artisans...</p> : null}
                    {!loading && error ? <p className="text-warning text-center mb-0">{error}</p> : null}

                    {!loading && !error ? (
                        <div className="cards_track">
                            {artisans.map((artisan) => (
                                <div
                                    className="service_card"
                                    key={artisan.id}
                                    onClick={() => setSelectedArtisan(artisan)}
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter" || event.key === " ") {
                                            event.preventDefault();
                                            setSelectedArtisan(artisan);
                                        }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                >
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

            {selectedArtisan ? (
                <div className="artisan_modal_overlay" onClick={() => setSelectedArtisan(null)}>
                    <div className="artisan_modal card border-0" onClick={(event) => event.stopPropagation()}>
                        <button
                            type="button"
                            className="artisan_modal_close btn btn-dark"
                            onClick={() => setSelectedArtisan(null)}
                            aria-label="Fermer la fiche artisan"
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>

                        <div className="artisan_modal_body fs-3">
                            <div className="text-center mb-4">
                                <img
                                    className="artisan_image"
                                    src={selectedArtisan.image}
                                    alt={`Portrait de ${selectedArtisan.nom}`}
                                />
                            </div>

                            <h3 className="fs-2 fw-bold mb-1 text-center">{selectedArtisan.nom}</h3>
                            <p className="fs-5 text-center mb-4">{selectedArtisan.metier}</p>

                            <div className="artisan_modal_grid">
                                <p><span className="fw-bold">Ville :</span> {selectedArtisan.ville}</p>
                                <p><span className="fw-bold">Note :</span> {selectedArtisan.note} <i className="bi bi-star-fill text-warning"></i></p>
                                <p><span className="fw-bold">Catégorie :</span> {selectedArtisan.category}</p>
                                <p><span className="fw-bold">Top artisan :</span> {selectedArtisan.top ? "Oui" : "Non"}</p>
                            </div>

                            <div className="mt-4">
                                <p className="fw-bold mb-2">À propos</p>
                                <p className="mb-0">{selectedArtisan.apropos || "Aucune description disponible."}</p>
                            </div>

                            <div className="mt-4 artisan_modal_links">
                                <p className="mb-2">
                                    <span className="fw-bold">Email :</span>{" "}
                                    {selectedArtisan.email ? (
                                        <a href={`mailto:${selectedArtisan.email}`}>{selectedArtisan.email}</a>
                                    ) : (
                                        "Non renseigné"
                                    )}
                                </p>

                                <p className="mb-3">
                                    <span className="fw-bold">Site web :</span>{" "}
                                    {selectedArtisan.siteweb ? (
                                        <a href={selectedArtisan.siteweb} target="_blank" rel="noreferrer">
                                            {selectedArtisan.siteweb}
                                        </a>
                                    ) : (
                                        "Non renseigné"
                                    )}
                                </p>

                                <button
                                    type="button"
                                    className="btn contact_form float-end d-flex btn-primary"
                                    onClick={() => setIsContactFormOpen(true)}
                                >
                                    Contactez moi
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

            {selectedArtisan && isContactFormOpen ? (
                <div className="contact_modal_overlay" onClick={() => setIsContactFormOpen(false)}>
                    <div className="contact_modal card border-0" onClick={(event) => event.stopPropagation()}>
                        <button
                            type="button"
                            className="artisan_modal_close btn btn-dark"
                            onClick={() => setIsContactFormOpen(false)}
                            aria-label="Fermer le formulaire de contact"
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>

                        <div className="contact_modal_body">
                            <h3 className="fs-2 fw-bold mb-2">Contacter {selectedArtisan.nom}</h3>
                            <p className="mb-4 text-secondary">Remplissez ce formulaire pour envoyer votre demande.</p>

                            <form className="contact_form_layout">
                                <label className="contact_field">
                                    <span className="fw-bold mb-2">Nom <span className="required_mark">*</span></span>
                                    <input type="text" className="form-control" placeholder="Votre nom" required />
                                </label>

                                <label className="contact_field">
                                    <span className="fw-bold mb-2">Email <span className="required_mark">*</span></span>
                                    <input type="email" className="form-control" placeholder="votre@email.com" required />
                                </label>

                                <label className="contact_field contact_field_full">
                                    <span className="fw-bold mb-2">Sujet <span className="required_mark">*</span></span>
                                    <input type="text" className="form-control" placeholder="Objet de votre demande" required />
                                </label>

                                <label className="contact_field contact_field_full">
                                    <span className="fw-bold mb-2">Message <span className="required_mark">*</span></span>
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        placeholder={`Bonjour ${selectedArtisan.nom}, je souhaite vous contacter pour...`}
                                        required
                                    ></textarea>
                                </label>

                                <div className="contact_actions contact_field_full">
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => setIsContactFormOpen(false)}>
                                        Annuler
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Envoyer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
