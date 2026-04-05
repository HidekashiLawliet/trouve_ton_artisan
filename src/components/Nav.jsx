import logo from "../assets/Logo.png";
const Nav = () => {
	return (
		<header>
			<nav className=" col-12 d-flex bg-primary bg-gradient w-100 h-fit ">
				<a href="/home">
					<img
						src={logo}
						alt="Touve ton artisan logo"
						className="tta d-flex align-items-start ms-5"
					/>
				</a>
			</nav>
		</header>
	);
};
export default Nav;
