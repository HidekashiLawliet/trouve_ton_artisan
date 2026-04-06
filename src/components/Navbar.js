import 'bootstrap/dist/css/bootstrap.min.css';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";

// affiche le header avec les boutons lien
export default function Navbar() {
    return (
        //gere l'affichage du header2
        <nav className="header bg-dark mx-auto d-flex align-items-center col-md-12 col-sm-12 col-12">

            {/* si la largeur de l'écran est trop faible les boutons cliquable vont passer dans un menu burger */}
            <div className="d-flex mx-auto justify-content-between col-md-11 col-sm-11 col-11 ext-white m-3 text-white text-decoratio-none">
                <a className="text-white text-decoration-none mx-2 my-auto">
                    <span>JOHN DOE</span>
                </a>
                <div className=".d-none d-sm-none">
                    <button type="button" class="btn btn-secondary bg-dark" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-list"></i>
                    </button>
                    <ul class="dropdown-menu col-12 px-3 dropdown-menu-end bg-dark text-white">
                        <li><NavLink className="nav-link mx-2" to="/">
                            Alimentation
                        </NavLink></li>
                        <li><NavLink className="nav-link  mx-2" to="/Services">
                            Batîment
                        </NavLink></li>
                        <li><NavLink className="nav-link mx-2" to="/Portfolio">
                            Services
                        </NavLink></li>
                        <li>
                            <NavLink className="nav-link mx-2" to="/Contact">
                                Alimentation
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* header avec des text servant de boutons pour changer de pages */}
                <div className="d-none d-sm-block">
                    <div className="navbar d-flex align-content-center flex-row ">
                        <NavLink className="nav-link mx-2" to="/">
                            Alimentation
                        </NavLink>
                        <NavLink className="nav-link  mx-2" to="/Services">
                            Batîment
                        </NavLink>
                        <NavLink className="nav-link mx-2" to="/Portfolio">
                            Services
                        </NavLink>
                        <NavLink className="nav-link mx-2" to="/Contact">
                            Alimentation
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
