import { NavLink } from "react-router-dom"
import * as Icon from "react-feather"

import logo from "../assets/logo-pixilive.png"

import "../App.css"
import "../styles/NavBar.css"

const NavBar = () => {
	return (
		<div className="navbar flex aic">
			<div className="navContainer flex jcc aic">
				<NavLink to={"/events"}>
					<Icon.Edit size={14} />
				</NavLink>
				<NavLink to={"/upload"}>
					<Icon.Camera size={14} />
				</NavLink>
				<NavLink to={"/gallery"}>
					<Icon.Eye size={14} />
				</NavLink>
				<NavLink to={"/login"}>
					<Icon.LogIn size={14} />
				</NavLink>
				{/* <NavLink to={"/team"}>
					<Icon.Users size={14} />
				</NavLink> */}
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
