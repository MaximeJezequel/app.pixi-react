import * as Icon from "react-feather"

import "./ButtonBar.css"

const ButtonBar = () => {
	return (
		<div className="buttonBar flex">
			<button className="deleteBtn flex aic jcc">
				<Icon.Trash2 size={14} />
				<div className="flex aic jcc">Delete</div>
			</button>
			<button className="cancelBtn flex aic jcc">
				<Icon.X size={14} /> Cancel
			</button>
			<button className="saveBtn flex aic jcc">
				<Icon.Save size={14} /> Save
			</button>
		</div>
	)
}

export default ButtonBar
