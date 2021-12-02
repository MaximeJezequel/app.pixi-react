import * as Icon from "react-feather"

import "./ButtonBarSingle.css"

const ButtonBarSingle = ({ btnIcon, btnText, handleClick }) => {
	const ButtonIcon = Icon[btnIcon]

	return (
		<button className="addBtn flex aic jcc" onClick={() => handleClick()}>
			<ButtonIcon size={14} />
			<div className="flex aic jcc">
				<span>{btnText}</span>
			</div>
		</button>
	)
}

export default ButtonBarSingle
