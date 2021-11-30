import ButtonBarSingle from "../components/ButtonBarSingle"

const ManageTeam = () => {
	return (
		<div className="App">
			<div className="bodyContainer flex col">
				<ButtonBarSingle btnIcon="UserPlus" btnText="Invite" />

				<h2>YOUR TEAM</h2>
				<div className="topDiv flex">Top div</div>
			</div>
		</div>
	)
}

export default ManageTeam
