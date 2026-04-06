
// fonction pour afficher la page mention légales

export default function Batiment() {
    return (

        // Gérer l'affichage globale de la page + le titre
        <div className="mentionsLégales col-md-12 col-sm-12 col-12 d-inline-block justify-content-center content my-5 pt-5 ">
            <div className="d-flex flex-column mx-auto w-100">
                <h1 className="mx-auto">
                    Mentions légales
                </h1>
                <div className="mx-auto line-height-5 blue my-4 col-md-8 col-sm-10 col-10 bg-primary"></div>
            </div>

            {/* gérer l'affiche des boites  */}
            <div className="col-md-10 col-sm-10 col-10 border border-2 mx-auto my-4">
                <div className="d-flex flex-column my-auto accordion shadow-sm rounded">

                    {/* boites accordéons pour le site creator */}
                    <div className=" accordion-item collapsed">
                        <button className="accordion-button text-dark fw-semibold  border-bottom border-secondary-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#editor"> Editeur du site
                        </button>
                        <div id="editor" className="accordion-collapse" data-bs-parent="#legalAccordion">
                            <div className="accordion-body">
                                <p className="fw-bold mb-3"> John Doe </p>
                                <div className="d-flex align-items-start gap-2 mb-2">
                                    <i className="bi bi-house-door"></i><span> 40 rue Laure Diebold </span>
                                </div>
                                <div className="d-flex align-items-start gap-2 mb-2">
                                    <i className="bi bi-geo-alt"></i>
                                    <span> 69009 Lyon, France </span>
                                </div>
                                <div className="d-flex align-items-start gap-2 mb-2">
                                    <i className="bi bi-telephone"></i>
                                    <span> 10 20 30 40 50 </span>
                                </div>
                                <div className="d-flex align-items-start gap-2">
                                    <i className="bi bi-envelope"></i>
                                    <span> john.doe@gmail.com </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* boites accordéons pour l'hote du site*/}
                    <div className="accordion-item">
                        <button className="accordion-button text-dark fw-semibold collapsed border-bottom border-secondary-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#host "> Hébergeur
                        </button>
                        <div id="host" className="accordion-collapse collapse" data-bs-parent="#legalAccordion">
                            <div className="accordion-body">
                                <h2>akwaysdata</h2>
                                <span>91 Rue du Faubourg Saint-Honoré, 75008 Paris</span>
                                <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer" className="d-block mt-2"><i className="bi bi-globe text-black"></i> www.alwaysdata.com</a>
                            </div>
                        </div>
                    </div>

                    {/* boites accordéons pour les crédits pour les images utilisées*/}
                    <div className="accordion-item">
                        <button className="accordion-button text-dark collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#credits"> Crédits
                        </button>
                        <div id="credits" className="accordion-collapse collapse" data-bs-parent="#legalAccordion">
                            <div className="accordion-body">
                                <div className="d-flex flex-column gap-3">
                                    <h2>Crédits</h2>
                                    <span>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer">Centre Européen de Formation.</a></span>
                                    <span>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://www.pixabay.com" target="_blank">Pixabay</a></span>
                                    <span>La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank" rel="nooperner noreferrer">John doe Icons ertellt von Freepik - Flaticon</a></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
