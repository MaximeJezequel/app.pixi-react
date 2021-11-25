import React from "react"
import Slider from "@material-ui/core/Slider"
import { createTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"

import BubbleGrid from "../../BubbleGrid"

import "./Watermark.css"

const Watermark = ({
	slider1,
	setSlider1,
	max1,
	slider2,
	setSlider2,
	max2,
	bubbleValue,
	setBubbleValue,
}) => {
	const handleChange1 = (val) => {
		val > max1 ? setSlider1(max1) : setSlider1(val)
	}
	const handleChange2 = (val) => {
		val > max2 ? setSlider2(max2) : setSlider2(val)
	}
	const muiTheme = createTheme({
		overrides: {
			MuiSlider: {
				root: { width: "98%" },
				thumb: {
					color: "var(--dark-grey-color)",
					border: "2px solid var(--red-color)",
					height: "16px",
					width: "16px",
					marginTop: "-4px",
				},
				track: {
					color: "var(--red-color)",
					height: "8px",
					borderRadius: "8px",
				},
				rail: {
					color: "var(--dark-grey-color)",
					height: "8px",
					borderRadius: "8px",
					width: "102%",
				},
			},
		},
	})
	return (
		<>
			<label htmlFor="Watermark">Watermark</label>
			<input type="file" className="inputWatermark" />
			<p className="below">Allowed file types: png, jpg, jpeg.</p>

			<div className="watermarkContainer">
				<div className="watermarkPosition flex row jcsb">
					<div className="position flex col">
						<p>Position</p>
						<BubbleGrid
							bubbleValue={bubbleValue}
							setBubbleValue={setBubbleValue}
						/>
					</div>

					<div className="watermarkSliders flex col">
						<div className="slider1 flex col">
							<div className="sliderTitle flex row aic jcsb">
								<p>Size of the watermark (%)</p>
								<input
									className="boxSize"
									value={slider1}
									onChange={(e) => handleChange1(e.target.value)}
								/>
							</div>
							<div className="sliderContainer">
								<ThemeProvider theme={muiTheme}>
									<Slider
										aria-label="test"
										name="Slider1"
										min={0}
										max={max1}
										value={slider1}
										color="white"
										onChange={(e, val) => handleChange1(val)}
									/>
								</ThemeProvider>
							</div>

							<div className="slider2 flex col">
								<div className="sliderTitle flex row aic jcsb">
									<p>Distance from the edge of the photo (%)</p>
									<input
										className="boxSize flex aic jcc"
										value={slider2}
										onChange={(e) => handleChange2(e)}
									/>
								</div>
								<div className="sliderContainer">
									<ThemeProvider theme={muiTheme}>
										<Slider
											aria-label="test"
											name="Slider2"
											min={0}
											max={max2}
											value={slider2}
											color="white"
											onChange={(e, val) => handleChange2(val)}
										/>
									</ThemeProvider>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Watermark
