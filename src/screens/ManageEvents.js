import React from "react"
import { useState } from "react"

import ButtonBar from "../components/ButtonBar"
import OptionBlock1 from "../components/ManageEvents/Options/OptionBlock1"
import OptionBlock2 from "../components/ManageEvents/Options/OptionBlock2"
import OptionBlock3 from "../components/ManageEvents/Options/OptionBlock3"
import OptionBlock4 from "../components/ManageEvents/Options/OptionBlock4"
import OptionBlock5 from "../components/ManageEvents/Options/OptionBlock5"
import Preview from "../components/ManageEvents/Details/Preview"
import UploadBar from "../components/ManageEvents/UploadBar"
import Watermark from "../components/ManageEvents/Details/Watermark"

import image from "../assets/modele.jpg"

function ManageEvents() {
	const [bubbleGridWatermark, setBubbleGridWatermark] = useState("3-3") //initial position of watermark
	const [slider1, setSlider1] = useState(100) //percent
	const [slider2, setSlider2] = useState(0) //percent
	const [bubbleGridCopyright, setBubbleGridCopyright] = useState("3-1") //initial position of copyright
	const [showCopyright, setShowCopyright] = useState(true)

	let max1 = 100 //maximum watermark size in percent
	let max2 = 10 //maximum distance between watermark and edge in percent

	return (
		<div className="App">
			<div className="bodyContainer flex col">
				<ButtonBar />
				<h2>EVENT DETAILS</h2>
				<div className="topDiv flex jcsb">
					<div className="eventInfo flex col">
						<label htmlFor="Name">Name</label>
						<input
							type="text"
							placeholder="Event name"
							className="inputEvent"
						/>
						<Watermark
							slider1={slider1}
							setSlider1={setSlider1}
							max1={max1}
							slider2={slider2}
							setSlider2={setSlider2}
							max2={max2}
							bubbleValue={bubbleGridWatermark}
							setBubbleValue={setBubbleGridWatermark}
						/>
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
