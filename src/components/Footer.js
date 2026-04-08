import 'bootstrap/dist/css/bootstrap.min.css';
export default function Footer() {
    return (
        <div className="footer fs-4 text-light col-md-12 col-sm-12 col-12">
            <div className="col-row d-flex flex-column flex-sm-row col-md-9 col-sm-9 mx-auto p-3 col-10 ">
                <div className="d-flex mx-auto text-center h-fit w-fit col-md-3 my-auto flex-column">
                    <span>101 cours Charlemagne </span>
                    <span>CS 20033</span>
                    <span>69269 LYON CEDEX 02 Franc</span>
                    <span>+33 (0)4 26 73 40 00</span>
                </div>
                <div className="d-flex flex-column text-center my-auto w-fit col-md-3 mx-auto">
                    <a href="/alimentation" className="text-white text-decoration-none">
                        <span className="">Alimentation</span>
                    </a>
                    <a href="/batiment" className="text-white text-decoration-none">
                        <span className="">Batîment</span>
                    </a>
                    <a href="/fabrication" className="text-white text-decoration-none">
                        <span className="">Fabrication</span>
                    </a>
                    <a href="/services" className="text-white text-decoration-none">
                        <span className="">Services</span>
                    </a>
                </div>
                <div className="d-flex flex-column text-center my-auto w-fit col-md-3 mx-auto">
                    <a href="/mentions_legales" className="text-white text-decoration-none">
                        <span className="">Mentions Légales</span>
                    </a>
                    <a href="/accessibilite" className="text-white text-decoration-none">
                        <span className="">Accessibilité</span>
                    </a>
                    <a href="/donnees_personnels" className="text-white text-decoration-none">
                        <span className="">Données personnels</span>
                    </a>
                    <a href="/cookies" className="text-white text-decoration-none">
                        <span className="">Cookies</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
