import * as Icon from "react-feather"

import "./ButtonBarSingle.css"

const ButtonBarSingle = ({ btnIcon, btnText }) => {
	const ButtonIcon = Icon[btnIcon]

	return (
		<div className="buttonBarSingle flex">
			<button className="addBtn flex aic jcc">
				<ButtonIcon size={14} />
				<div className="flex aic jcc">
					<span>{btnText}</span>
				</div>
			</button>
		</div>
	)
}

export default ButtonBarSingle
