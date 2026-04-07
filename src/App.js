import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Accessibbilite from "./pages/Accessibilite";
import Alimentation from "./pages/Alimentation";
import Batiment from "./pages/Batiment";
import Cookies from "./pages/Cookies";
import DonneesPersonnels from "./pages/Donnes_perso";
import Fabrication from "./pages/Fabrication";
import MentionsLegales from "./pages/Mention_legales";
import NotFound from "./pages/NotFound";
import Home from "./pages/prout";
import Services from "./pages/Services";


function App() {
	/* variable pour la gestion de heuteur et l'argeur de l'écran*/
	const [screenWidthError, setscreenWidthError] = useState(false);
	const [screenHeightError, setscreenHeightError] = useState(false);

	/* fonction pour récupérer la largeur de l'écran*/
	useEffect(() => {
		const screenWidth = window.matchMedia("(max-width: 319px)");
		const updateWidth = () => setscreenWidthError(screenWidth.matches);
		if (screenWidth.addEventListener) {
			screenWidth.addEventListener("change", updateWidth);
			return () => screenWidth.removeEventListener("change", updateWidth);
		}
	}, []);

	/* fonction pour récupérer la hauteur de l'écran*/
	useEffect(() => {
		const screenHeight = window.matchMedia("(max-height: 399px)");
		const updateHeight = () => setscreenHeightError(screenHeight.matches);
		if (screenHeight.addEventListener) {
			screenHeight.addEventListener("change", updateHeight);
			return () => screenHeight.removeEventListener("change", updateHeight);
		}
	})

	/* si l'écran est trop petit en largeur ou hauter*/
	if (screenWidthError || screenHeightError) {
		/* si l'écran est pas assez large affiche un message d'erreur aproprié */
		if (screenWidthError) {
			return (
				<div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark text-white px-3">
					<div className="text-center">
						<i className="bi bi-phone text-warning fs-1" aria-hidden="true"></i>
						<h1 className="h4 mt-3">Écran trop petit</h1>
						<p className="mb-2">
							Pour afficher ce site correctement, utilisez un écran d’au moins 320 pixels de large.
						</p>
						<p className="small text-secondary mb-0">
							Astuce : passez votre téléphone en mode paysage.
						</p>
					</div>
				</div>
			);
		} else if (screenHeightError) {
			/* si l'écran est pas assez haut affiche un message d'erreur aproprié */
			return (
				<div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark text-white px-3">
					<div className="text-center">
						<i className="bi bi-phone text-warning fs-1" aria-hidden="true"></i>
						<h1 className="h4 mt-3">Écran trop petit</h1>
						<p className="mb-2">
							Pour afficher ce site correctement, utilisez un écran d’au moins 400 pixel de hauteur.
						</p>
						<p className="small text-secondary mb-0">
							Astuce : passez votre téléphone en mode portrait.
						</p>
					</div>
				</div>
			);
		}
	}

	/* sert à afficher la page active */
	return (
		<BrowserRouter>
			<Navbar />
			<main className="content">
				<Routes>


					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/alimentation" element={<Alimentation />} />
					<Route path="/batiment" element={<Batiment />} />
					<Route path="/fabrication" element={<Fabrication />} />
					<Route path="/services" element={<Services />} />

					<Route path="/mentions_legales" element={<MentionsLegales />} />
					<Route path="/accessibilite" element={<Accessibbilite />} />
					<Route path="/donnees_personnels" element={<DonneesPersonnels />} />
					<Route path="/cookies" element={<Cookies />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</main >
			<Footer />
		</BrowserRouter>
	);

}

export default App;
