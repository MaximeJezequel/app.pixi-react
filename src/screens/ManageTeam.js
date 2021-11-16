import { NavLink } from "react-router-dom"

const ManageTeam = () => {
	return (
		<div className="App">
			<div className="bodyContainer flex col">
				<NavLink to={"/events"}>Manage Events</NavLink>
				<h2>YOUR TEAM</h2>
				<div className="topDiv flex">Top div</div>
			</div>
		</div>
	)
}

export default ManageTeam
