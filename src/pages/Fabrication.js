export default function Fabrication() {
    return (
        // gérer l'affichage global de la page
        <div className="vh-150 col-md-12 col-sm-12 col-12 d-inline-block justify-content-center content my-5">

            {/* affichage de tete de page */}
            <div className="d-flex flex-column w-100">
                <h1 className="mx-auto">Portfolio</h1>
                <span className="text-center">Voici quelques-unes de mes réalisations </span>
                <div className=" line-height-5 mx-auto blue my-4 col-md-8 col-sm-8 col-5 col-8 bg-primary"></div>
            </div>

            {/* gerer l'affichage de la partie des cartes de projets */}
            <div className="d-inline-block d-flex flex-row-grid mx-auto col-md-12 col-sm-12 col-12 justify-content-center p-4 rounded">
                <div className="container mt-3">
                    <div className="row g-3">

                        {/* carte Fresh food */}
                        <div className="card cardHoverBackground border-0 col-10 mx-auto col-md-4 col-sm-4">
                            <div className="card-body p-0 border d-flex flex-column border-secondary rounded">
                                <h2 className="text-center fs-3 card-title">Fresh Food</h2>
                                <span className="card-text mx-auto my-auto text-center">Site de vente de produits frais en ligne</span>
                                <button className=" btn btn-primary my-3 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 w-100 d-flex justify-content-center">
                                    <span className=" fs-6">Réalisé avec FIGMA</span>
                                </div>
                            </div>
                        </div>

                        {/* carte restaurant Akira */}
                        <div className="card cardHoverBackground border-0 col-10 mx-auto col-md-4 col-sm-4">
                            <div className="card-body p-0 border d-flex flex-column border-secondary rounded">
                                <h2 className="text-center fs-3 card-title">Restaurant Akira</h2>
                                <span className="mx-autoard-text card-text my-auto text-center">Site de vente de produits frais en ligne</span>
                                <button className=" btn btn-primary my-3 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 w-100 d-flex justify-content-center">
                                    <span className=" fs-6">Réalisé avec FIGMA</span>
                                </div>
                            </div>
                        </div>

                        {/* carte espace bien-etre */}
                        <div className="card cardHoverBackground border-0 col-10 mx-auto col-md-4 col-sm-4">
                            <div className="card-body p-0 border d-flex flex-column border-secondary rounded ">
                                <h2 className="text-center fs-3 card-title">Espace bien-être</h2>
                                <span className="mx-auto card-text my-auto text-center">Site de vente de produits frais en ligne</span>
                                <button className=" btn btn-primary my-3 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 w-100 d-flex justify-content-center">
                                    <span className=" fs-6">Réalisé avec FIGMA</span>
                                </div>
                            </div>
                        </div>

                        {/* carte SEO */}
                        <div className=" card cardHoverBackground border-0 col-10 mx-auto col-md-4 col-sm-4">
                            <div className=" border card-body p-0 d-flex flex-column border-secondary rounded">
                                <h2 className="text-center fs-3 card-title">SEO</h2>
                                <span className="mx-auto card-text my-auto text-center">Amélioration du référencement d'un site de commerce</span>
                                <button className=" btn btn-primary my-3 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 w-100 d-flex justify-content-center">
                                    <span className=" fs-6">Réalisé avec FIGMA</span>
                                </div>
                            </div>
                        </div>

                        {/* carte création d'une api*/}
                        <div className=" card cardHoverBackground border-0 col-10 mx-auto col-md-4 col-sm-4 ">
                            <div className=" border card-body p-0 d-flex flex-column border-secondary rounded">
                                <h2 className="text-center fs-3 card-title">Création d'une API</h2>
                                <span className="mx-auto card-text my-auto text-center">Création d'une API RESTFULL publique</span>
                                <button className=" btn btn-primary my-3 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 w-100 d-flex justify-content-center">
                                    <span className=" fs-6">Réalisé avec FIGMA</span>
                                </div>
                            </div>
                        </div>

                        {/* carte création de maquette*/}
                        <div className="card cardHoverBackground border-0 col-10 mx-auto col-md-4 col-sm-4">
                            <div className="border card-body p-0 d-flex flex-column border-secondary rounded w-100">
                                <h2 className="text-center fs-3 card-title">Maquette d'un site web</h2>
                                <span className="mx-auto card-text my-auto text-center">Création du prototype d'un site</span>
                                <button className=" btn btn-primary my-3 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 w-100 d-flex justify-content-center">
                                    <span className=" fs-6">Réalisé avec FIGMA</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}