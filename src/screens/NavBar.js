import { NavLink } from "react-router-dom"
import * as Icon from "react-feather"

import logo from "../assets/logo-pixilive.png"

import "../App.css"
import "./NavBar.css"

const NavBar = () => {
	return (
		<div className="navbar flex aic">
			<div className="navContainer flex jcc aic">
				<NavLink to={"/events"}>
					<Icon.Calendar size={14} />
				</NavLink>
				<NavLink to={"/team"}>
					<Icon.Users size={14} />
				</NavLink>
				<NavLink to={"/upload"}>
					{" "}
					<Icon.Upload size={14} />
				</NavLink>
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
