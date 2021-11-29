import React from "react"
import AliceCarousel from "react-alice-carousel"

import ButtonBar2 from "../components/ButtonBar2"

import "../App.css"
import "./DashBoard.css"
import "react-alice-carousel/lib/alice-carousel.css"

const DashBoard = () => {
	let maxEvents = 4

	let lastEvents = [
		"Printemps des fameuses",
		"Nantes Digital Week",
		"WEB2DAY",
		"DevFest",
	]

	const responsive = {
		0: { items: 1 },
		1024: { items: 4 },
	}

	const recentEvents = lastEvents.slice(0, maxEvents).map((event, index) => (
		<div key={index} className={`recentEventCard ev${index + 1}`}>
			<h2>{event}</h2>
		</div>
	))

	return (
		<div className="App">
			<div className="bodyContainer flex col">
				<ButtonBar2 />

				<h2>RECENT EVENTS</h2>
				<div className="topDiv flex row">
					<AliceCarousel
						mouseTracking
						items={recentEvents}
						responsive={responsive}
						controlsStrategy="responsive"
						disableButtonsControls
					/>
				</div>

				<h2>ALL EVENTS</h2>
				<div className="bottomDiv flex col">
					<div className="eventTable">
						<div>Search bars</div>
						<br></br>
						{lastEvents.map((event, index) => (
							<div key={index} className="eventRow">
								<h3>{event}</h3>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default DashBoard
