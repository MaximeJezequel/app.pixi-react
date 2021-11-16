import "./ButtonBar.css"

const ButtonBar = () => {
	return (
		<div className="buttonBar flex">
			<button className="deleteBtn">x Delete</button>
			<button className="cancelBtn">x Cancel</button>
			<button className="saveBtn">x Save</button>
		</div>
	)
}

export default ButtonBar
