import 'bootstrap/dist/css/bootstrap.min.css';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/Logo.png";

// affiche le header avec les boutons lien
export default function Navbar() {
    return (
        //gere l'affichage du header2
        <nav className="header bg-gradient-white-to-blue mx-auto d-flex align-items-center col-md-12 col-sm-12 col-12">
            {/* si la largeur de l'écran est trop faible les boutons cliquable vont passer dans un menu burger */}
            <div className="d-flex mx-auto justify-content-between  text-black col-md-11 col-sm-11 col-11 ext-white m-3 text-white text-decoratio-none">
                <a href="/" className="text-white text-decoration-none mx-2 my-auto">
                    <img src={logo} alt="logo Trouve ton artisan" className="trouve_ton_artisan_logo" />
                </a>
                <div className=".d-none d-sm-none">
                    <button type="button" class="btn btn-secondary bg-dark" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-list"></i>
                    </button>
                    <ul class="dropdown-menu col-12 px-3 dropdown-menu-end bg-dark text-white">
                        <li>
                            <NavLink className="nav-link mx-2" to="/alimentation">
                                Alimentation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link  mx-2" to="/batiment">
                                Batîment
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link mx-2" to="/fabrication">
                                Fabrication
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link mx-2" to="/services">
                                Services
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* header avec des text servant de boutons pour changer de pages */}
                <div className="d-none text-black d-sm-block">
                    <div class="navbar d-flex fs-3 align-content-center flex-row ">
                        <NavLink className="nav-link mx-2" to="/alimentation">
                            Alimentation
                        </NavLink>
                        <NavLink className="nav-link  mx-2" to="/batiment">
                            Batîment
                        </NavLink>
                        <NavLink className="nav-link mx-2" to="/fabrication">
                            Fabrication
                        </NavLink>
                        <NavLink className="nav-link mx-2" to="/services">
                            Services
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
