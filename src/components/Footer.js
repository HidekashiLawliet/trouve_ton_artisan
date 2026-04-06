import 'bootstrap/dist/css/bootstrap.min.css';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js";
export default function Footer() {
    return (
        <div className="footer bg-dark text-light col-md-12 col-sm-12 col-12">
            <div className="col-row d-flex flex-column flex-sm-row col-md-10 col-sm-10 col-10 pb-5 m-auto">
                <div className="col-md-4 col-sm-3 col-12 mt-5 fs-3"><h2 className="columnTitle">John Doe</h2>
                    <div className="d-flex mx-auto flex-column mb-3">
                        <span className="fs-5">40 Rue Laure Diebold</span>
                        <span className="fs-5">69009 Lyon, France</span>
                        <span className="fs-5">10 20 30 40 50</span>
                        <span className="fs-5">john.doe@gmail.com</span>
                        <div className="socialLink ">
                            <a>
                                <img className="faviconSocial mt-3" src={githubFav} />
                            </a>
                            <a>
                                <img className="faviconSocial mt-3" src={twitterFav} />
                            </a>
                            <a>
                                <img className="faviconSocial mt-3" src={linkedinFav} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-3 mx-auto col-12 mt-5 fs-3"><h2 className="columnTitle">Liens Utilse</h2>
                    <div className="d-flex flex-column ">
                        <a href="/" className=" text-white text-decoration-none">
                            <span className="fs-5">Accueil</span>
                        </a>
                        <a href="/Services" className=" text-white text-decoration-none">
                            <span className="fs-5">Services</span>
                        </a>
                        <a href="/Portfolio" className=" text-white text-decoration-none">
                            <span className="fs-5">Portfolio</span>
                        </a>
                        <a href="/Contact" className=" text-white text-decoration-none">
                            <span className="fs-5">Me contacter</span>
                        </a>
                        <a href="/MentionLegales" className=" text-white text-decoration-none">
                            <span className="fs-5">Mentions légales</span>
                        </a>
                    </div>
                </div>
                <div className=" col-md-4 col-sm-3 col-12 mx-auto mt-5 fs-3 "><h2 className="columnTitle">Mes dernières réalisations</h2>
                    <div className="d-flex flex-column">
                        <a href="/Portfolio" className=" text-white text-decoration-none">
                            <span className="fs-5">Fresh Food</span>
                        </a>
                        <a href="/Portfolio" className=" text-white text-decoration-none">
                            <span className="fs-5">Restaurant Akira</span>
                        </a>
                        <a href="/Portfolio" className=" text-white text-decoration-none">
                            <span className="fs-5">Espace bien-être</span>
                        </a>
                        <a href="/Portfolio" className=" text-white text-decoration-none">
                            <span className="fs-5">SEO</span>
                        </a>
                        <a href="/Portfolio" className=" text-white text-decoration-none">
                            <span className="fs-5">Création d'une API</span>
                        </a>
                        <a href="/Portfolio" className=" text-white text-decoration-none">
                            <span className="fs-5">Maquette d'un site</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}