import { NavLink } from "react-router-dom"

import logo from "../assets/logo-pixilive.png"

import "../App.css"

const NavBar = () => {
	return (
		<div className="navbar flex jcc aic">
			<NavLink to={"/"}>
				<div className="logoContainer flex jcc aic">
					<img src={logo} alt="pixilive" />
				</div>
			</NavLink>
		</div>
	)
}

export default NavBar
