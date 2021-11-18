import { NavLink } from "react-router-dom"

import logo from "../assets/logo-pixilive.png"

import "../App.css"

const NavBar = () => {
	return (
		<div className="navbar flex aic">
			<div className="navContainer flex jcc aic">
				<NavLink to={"/events"}>Manage Events </NavLink>
				<NavLink to={"/team"}>Manage Team</NavLink>
			</div>

			<div className="logoContainer flex jcc aic">
				<NavLink to={"/"}>
					<img src={logo} alt="pixilive" />
				</NavLink>
			</div>
		</div>
	)
}

export default NavBar
