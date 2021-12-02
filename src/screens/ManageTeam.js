import ButtonBarSingle from "../components/ButtonBarSingle"

const ManageTeam = () => {
	return (
		<div className="App">
			<div className="bodyContainer flex col">
				<div className="buttonBarSingle flex">
					<ButtonBarSingle btnIcon="UserPlus" btnText="Invite" />
				</div>

				<h2>YOUR TEAM</h2>
				<div className="topDiv flex">Top div</div>
			</div>
		</div>
	)
}

export default ManageTeam
