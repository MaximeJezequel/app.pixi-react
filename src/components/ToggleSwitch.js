import React from "react"

import "./ToggleSwitch.css"

const ToggleSwitch = ({ toggle, setToggle }) => {
	const clickToggle = () => {
		setToggle(!toggle) || console.log(toggle)
	}

	return (
		<>
			<label className="switch">
				<input type="checkbox" checked={toggle} onChange={clickToggle} />
				<span className="slider round"></span>
			</label>
		</>
	)
}

export default ToggleSwitch
