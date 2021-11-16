import { useState } from "react"

import ToggleSwitch from "../../ToggleSwitch"
import BubbleGrid from "../../BubbleGrid"

import "./OptionBlock1.css"

const OptionBlock1 = ({ toggle, setToggle, bubbleValue, setBubbleValue }) => {
	let fonts = [
		{ name: "Roboto", css: "roboto" },
		{ name: "Open Sans", css: "openSans" },
		{ name: "Montserrat", css: "montserrat" },
		{ name: "Playfair Display", css: "playfairDisplay" },
		{ name: "Merriweather", css: "merriweather" },
		{ name: "Old Standard TT", css: "oldStandardTT" },
	]
	let fontSizes = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32]

	const [fontFamily, setFontFamily] = useState("roboto")
	const [fontSize, setFontSize] = useState(14)

	const handleChangeFontFamily = (e) => {
		setFontFamily(e.target.value)
	}
	const handleChangeFontSize = (e) => {
		setFontSize(e.target.value)
	}

	return (
		<div className="optionCard">
			<div className="optionTitle flex row aic">
				<p>1. Photographer's copyright</p>
				<ToggleSwitch toggle={toggle} setToggle={setToggle} />
			</div>

			<div className="copyrightContainer flex row">
				<div className="position">
					<p>Position</p>
					<BubbleGrid
						bubbleValue={bubbleValue}
						setBubbleValue={setBubbleValue}
					/>
				</div>
				<div className="copyright">
					<div className="font flex row">
						<div className="fontName">
							<p>Font</p>
							<select
								className="fontSelect"
								value={fontFamily}
								onChange={(e) => handleChangeFontFamily(e)}
							>
								{fonts.map((font, index) => (
									<option key={index} value={font.css}>
										{font.name}
									</option>
								))}
							</select>
						</div>
						<div className="fontSize">
							<p>Size</p>
							<select
								className="fontSelect"
								value={fontSize}
								onChange={(e) => handleChangeFontSize(e)}
							>
								{fontSizes.map((fontSize, index) => (
									<option key={index} value={fontSize}>
										{fontSize}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="credit">
						<p>Credit</p>
						<input
							className={`${fontFamily}`}
							style={{ fontSize: `${fontSize}px` }}
							type="text"
							placeholder="&copy; John Doe"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OptionBlock1
