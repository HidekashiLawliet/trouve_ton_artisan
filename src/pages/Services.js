export default function Services() {
    return (

        //Div pour gérer l'affichage de toute la page
        <div className="w-100 d-inline-block my-5">
            {/* afficher l'image sous header ainsi  que le titre de la pages*/}
            <div className="d-flex flex-column col-md-12 col-sm-12 col-12">
                <h1 className="mx-auto fs-1">Services</h1>
                <span className="text-center fs-4">Voici les services que je propose</span>
                <div className="line-height-5 blue my-4 col-md-7 col-sm-7 col-7 mx-auto bg-primary" />
            </div>

            {/* créer la partie ou seront afficher les cards */}
            <div className="col-md-10 col-sm-12 mb-5 col-12 py-4 mx-auto col-row d-flex flex-column flex-sm-row mx-auto">

                {/* premiere carte */}
                <div className="card cardHoverBackground border-secondary mt-3 mx-auto col-md-4 col-sm-3 col-10 ">
                    <div className="card border-0 mt-2 d-flex flex-column p-3">
                        <i className="text-primary mx-auto bi bi-brush" />
                        <h2 className="card-title text-center mx-1">UX Design</h2>
                        <p className="card-text text-center lh-sm">L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logicielsn, objets connectés, etc) en placant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.</p>
                    </div>
                </div>

                {/* deuxieme carte */}
                <div className="card cardHoverBackground border-secondary mt-3 mx-auto mx-sm-3 col-md-4 col-sm-3 col-10">
                    <div className="card  border-0 mt-2 d-flex flex-column p-3">
                        <i className="text-primary mx-auto bi bi-code-slash" />
                        <h2 className="card-title text-center mx-1">Développement web</h2>
                        <p className="card-text text-center lh-sm ">Le développement de sites web consistes à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)</p>
                    </div>
                </div>

                {/* troisieme carte */}
                <div className="card cardHoverBackground border-secondary mt-3 mx-auto col-md-4 col-sm-3 col-10">
                    <div className="card border-0 mt-2 d-flex flex-column p-3">
                        <i className="text-primary mx-auto bi bi-search" />
                        <h2 className="card-title text-center mx-1">Référencement</h2>
                        <p className="card-text text-center lh-sm ">Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche(Google, Bong, Yahoo, etc.) L'objectif est d'attirter un maximum de visiteurs qualifités sur le site.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}
