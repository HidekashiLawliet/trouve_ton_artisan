import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/apropos">
							Qui suis-je ?
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Nav;
