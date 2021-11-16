// import React from "react"
import { useState } from "react"

import BubbleGrid from "../components/BubbleGrid"
import ButtonBar from "../components/ButtonBar"
import OptionBlock1 from "../components/ManageEvents/Options/OptionBlock1"
import OptionBlock2 from "../components/ManageEvents/Options/OptionBlock2"
import OptionBlock3 from "../components/ManageEvents/Options/OptionBlock3"
import OptionBlock4 from "../components/ManageEvents/Options/OptionBlock4"
import OptionBlock5 from "../components/ManageEvents/Options/OptionBlock5"
import Preview from "../components/ManageEvents/Preview"
import UploadBar from "../components/ManageEvents/UploadBar"

import image from "../assets/modele.jpg"

function ManageEvents() {
	const [bubbleGridWatermark, setBubbleGridWatermark] = useState("3-3")
	const [bubbleGridCopyright, setBubbleGridCopyright] = useState("3-1")
	const [toggleSwitch1, setToggleSwitch1] = useState(false) //copyright
	const [toggleSwitch2, setToggleSwitch2] = useState(true) //folders
	const [toggleSwitch3, setToggleSwitch3] = useState(false) //auto-enhancement
	const [toggleSwitch4, setToggleSwitch4] = useState(true) //FTP
	const [toggleSwitch5, setToggleSwitch5] = useState(false) //team

	return (
		<div className="App">
			<div className="bodyContainer flex col">
				<ButtonBar />
				<h2>NEW EVENT</h2>
				<div className="topDiv flex">
					<div className="eventInfo flex col">
						<label htmlFor="Name">Name</label>
						<input
							type="text"
							placeholder="Event name"
							className="inputEvent"
						/>

						<label htmlFor="Watermark">Watermark</label>
						<input type="file" className="inputWatermark" />
						<p className="below">Allowed file types: png, jpg, jpeg.</p>

						<div className="watermarkPosition flex row">
							<div className="watermarkGrid flex col">
								<p>Position</p>
								<BubbleGrid
									bubbleValue={bubbleGridWatermark}
									setBubbleValue={setBubbleGridWatermark}
								/>
							</div>
							<div className="watermarkSliders flex col">
								<div className="slider1 flex col">
									<p>Size of the watermark (%)</p>
									<div className="sliderBar"></div>
									<div className="sliderContainer">
										<input
											type="range"
											min="1"
											max="100"
											value="32"
											className="sliderCircle"
										/>
									</div>
								</div>
								<div className="slider2 flex col">
									<p>Space with the edge of the image (%)</p>
									<div className="sliderBar"></div>
								</div>
							</div>
						</div>
					</div>
					<Preview image={image} />
				</div>
				<UploadBar />

				<h2>OPTIONS</h2>
				<div className="bottomDiv flex col">
					<OptionBlock1
						toggle={toggleSwitch1}
						setToggle={setToggleSwitch1}
						bubbleValue={bubbleGridCopyright}
						setBubbleValue={setBubbleGridCopyright}
					/>
					<OptionBlock2 toggle={toggleSwitch2} setToggle={setToggleSwitch2} />
					<OptionBlock3 toggle={toggleSwitch3} setToggle={setToggleSwitch3} />
					<OptionBlock4 toggle={toggleSwitch4} setToggle={setToggleSwitch4} />
					<OptionBlock5 toggle={toggleSwitch5} setToggle={setToggleSwitch5} />
				</div>
			</div>
		</div>
	)
}

export default ManageEvents
