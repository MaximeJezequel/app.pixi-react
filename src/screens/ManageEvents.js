import React from "react"
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
	const [slider1, setSlider1] = useState(100) //percent
	const [slider2, setSlider2] = useState(4) //percent
	const [bubbleGridCopyright, setBubbleGridCopyright] = useState("3-1")
	const [showCopyright, setShowCopyright] = useState(true)

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
							<div className="position flex col">
								<p>Position</p>
								<BubbleGrid
									bubbleValue={bubbleGridWatermark}
									setBubbleValue={setBubbleGridWatermark}
								/>
							</div>

							<div className="watermarkSliders flex col">
								<div className="slider1 flex col">
									<p>Size of the watermark (%)</p>
									<div className="sliderContainer">
										<input
											className="sliderRange flex aic jcc"
											type="range"
											min="0"
											max="100"
											value={slider1}
											onChange={(e) => setSlider1(e.target.value)}
										/>

										<div className="boxSize flex aic jcc">{slider1}</div>
									</div>

									<div className="slider2 flex col">
										<p>Space with the edge of the image (%)</p>
										<div className="sliderContainer">
											<input
												className="sliderRange flex aic jcc"
												type="range"
												min="0"
												max="4"
												value={slider2}
												onChange={(e) => setSlider2(e.target.value)}
											/>

											<div className="boxSize flex aic jcc">{slider2}</div>
										</div>
									</div>
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
						toggle={showCopyright}
						setToggle={setShowCopyright}
						bubbleValue={bubbleGridCopyright}
						setBubbleValue={setBubbleGridCopyright}
					/>
					<OptionBlock2 />
					<OptionBlock3 />
					<OptionBlock4 />
					<OptionBlock5 />
				</div>
			</div>
		</div>
	)
}

export default ManageEvents
