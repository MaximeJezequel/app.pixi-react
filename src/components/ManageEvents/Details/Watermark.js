import React from "react"
import { Slider } from "@mui/material"

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
	inputFile,
	watermarkFile,
	setWatermarkFile,
	handleUploadChange,
	handleUploadClick,
}) => {
	const handleChange1 = (val) => {
		val > max1 ? setSlider1(max1) : setSlider1(val)
	}
	const handleChange2 = (val) => {
		val > max2 ? setSlider2(max2) : setSlider2(val)
	}

	const sliderStyle = {
		color: "var(--red-color)",
		"& .MuiSlider-rail": {
			backgroundColor: "var(--dark-grey-color)",
			borderRadius: "8px",
			marginLeft: "-8px",
			width: "calc(100% + 16px)",
		},
		"& .MuiSlider-track": {
			borderRadius: "8px",
			marginLeft: "-8px",
		},
		"& .MuiSlider-thumb": {
			backgroundColor: "var(--dark-grey-color)",
			border: "3px solid var(--red-color)",
		},
	}

	return (
		<div>
			<label htmlFor="Watermark">Watermark</label>

			<div className="importFileContainer flex row jcsb">
				<input
					className="importedFileName"
					placeholder="Choose file"
					value={watermarkFile}
					onClick={handleUploadClick}
				/>
				<input
					type="file"
					id="file"
					ref={inputFile}
					accept=".jpg, .jpeg, .png"
					style={{ display: "none" }}
					onChange={(e) => handleUploadChange(e)}
				/>
				<button className="importFileBtn" onClick={handleUploadClick}>
					Import
				</button>
			</div>
			<p className="below">Allowed file types: png, jpg, jpeg.</p>

			<div className="watermarkContainer">
				<div className="watermarkPosition flex row jcsb">
					<div className="position">
						<p>Position</p>
						<BubbleGrid
							bubbleValue={bubbleValue}
							setBubbleValue={setBubbleValue}
						/>
					</div>

					<div className="watermarkSliders flex col">
						<div className="slider1 flex col">
							<div className="sliderTitle flex row aic jcsb">
								<div className="sliderLabel">Size of the watermark (%)</div>
								<input
									className="boxSize"
									value={slider1}
									onChange={(e) => handleChange1(e.target.value)}
								/>
							</div>
							<div className="sliderContainer">
								<Slider
									aria-label="test"
									name="Slider1"
									min={0}
									max={max1}
									value={slider1}
									onChange={(e, val) => handleChange1(val)}
									sx={sliderStyle}
								/>
							</div>

							<div className="slider2 flex col">
								<div className="sliderTitle flex row aic jcsb">
									<div className="sliderLabel">
										Distance from the edge of the photo (%)
									</div>
									<input
										className="boxSize flex aic jcc"
										value={slider2}
										onChange={(e) => handleChange2(e.target.value)}
									/>
								</div>
								<div className="sliderContainer">
									<Slider
										aria-label="test"
										name="Slider2"
										min={0}
										max={max2}
										value={slider2}
										onChange={(e, val) => handleChange2(val)}
										sx={sliderStyle}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Watermark
