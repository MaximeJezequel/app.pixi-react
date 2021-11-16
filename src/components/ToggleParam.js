import ToggleSwitch from "./ToggleSwitch"

const ToggleParam = ({ text, toggle, setToggle }) => {
	return (
		<div className="optionLine flex row aic">
			<p>{text}</p>
			<ToggleSwitch toggle={toggle} setToggle={setToggle} />
		</div>
	)
}

export default ToggleParam
