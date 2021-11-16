import { useState } from "react"

import ToggleSwitch from "../../ToggleSwitch"

import "./OptionBlock4.css"

const OptionBlock4 = ({ toggle, setToggle }) => {
	const [hostName, setHostName] = useState("")
	const [port, setPort] = useState("")
	const [userName, setUserName] = useState("")
	const [password, setPassword] = useState("")

	const handleChangeHostName = (e) => {
		setHostName(e.target.value)
	}
	const handleChangePort = (e) => {
		setPort(e.target.value)
	}
	const handleChangeUserName = (e) => {
		setUserName(e.target.value)
	}
	const handleChangePassword = (e) => {
		setPassword(e.target.value)
	}

	return (
		<div className="optionCard">
			<div className="optionTitle flex row aic">
				<p>4. FTP transfer</p>
				<ToggleSwitch toggle={toggle} setToggle={setToggle} />
			</div>

			<div className="ftpContainer flex col">
				<div className="hostPort flex row">
					<div className="host flex col">
						<label htmlFor="Host">Host</label>
						<input
							type="text"
							placeholder="Hostname"
							onChange={(e) => handleChangeHostName(e)}
						/>
						<p className="below">Please copy/paste your folder address</p>
					</div>
					<div className="port flex col">
						<label htmlFor="Port">Port</label>
						<input
							type="text"
							placeholder="Port"
							onChange={(e) => handleChangePort(e)}
						/>
					</div>
				</div>
				<label htmlFor="User">User</label>
				<input
					type="text"
					placeholder="Username"
					onChange={(e) => handleChangeUserName(e)}
				/>
				<label htmlFor="Password">Password</label>
				<input
					type="password"
					placeholder="***********"
					onChange={(e) => handleChangePassword(e)}
				/>
			</div>
		</div>
	)
}

export default OptionBlock4
