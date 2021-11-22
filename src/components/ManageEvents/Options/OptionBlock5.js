import { NavLink } from "react-router-dom"
import * as Icon from "react-feather"

import ToggleSwitch from "../../ToggleSwitch"
import myTeam from "../../../data/myTeam"

import "./OptionBlock5.css"

const OptionBlock5 = ({ toggle, setToggle }) => {
	return (
		<div className="optionCard">
			<div className="optionTitle flex row aic">
				<p>5. Team</p>
				{/* <ToggleSwitch toggle={toggle} setToggle={setToggle} /> */}
			</div>

			<div className="teamContainer flex col">
				{/* <label htmlFor="Name">Name</label> */}
				<input
					type="text"
					placeholder="Add guests to your team"
					className="inputTeam"
				/>
			</div>
			<div className="teamTable flex col aic">
				<div className="teamTitle flex row aic">
					<div className="memberAvatar"></div>
					<div className="memberName flex aic">NAME</div>
					<div className="memberCopyright flex aic">COPYRIGHT</div>
					<div className="memberRole flex aic">ROLE</div>
					<div className="memberAction flex aic"></div>
				</div>

				{myTeam.map((member) => (
					<div key={member.id} className="teamRow flex row">
						<div className="memberAvatar flex aic">
							<div className={`circleAvatar ${member.role}`}></div>
						</div>
						<div className="memberName flex aic">{member.name}</div>
						<div className="memberCopyright flex aic">{member.copyright}</div>
						<div className="memberRole flex aic">
							{member.role[0].toUpperCase() + member.role.substring(1)}
						</div>
						{member.role === "guest" ? (
							<div className="guestAction flex aic jcc">x</div>
						) : (
							<div className="memberAction flex aic jcc"></div>
						)}
					</div>
				))}
			</div>
			<br />
			<br />

			<div className="invite flex">
				<div className="inviteLeft">
					<div>
						Invite new members in your team ! <br></br> Members can collaborate
						and share pictures as guest in your event.
					</div>
					<br></br>
					<NavLink to="/team">Manage team</NavLink>
				</div>
				<div className="inviteRight">
					<div className="circleAvatar newGuest flex aic jcc">
						<Icon.UserPlus size={20} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default OptionBlock5
