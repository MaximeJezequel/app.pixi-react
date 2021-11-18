import ButtonBar2 from "../components/ButtonBar2"

import "../App.css"

const DashBoard = () => {
	let lastEvents = [
		"Printemps des fameuses",
		"Nantes Digital Week",
		"WEB2DAY",
		"DevFest",
	]
	return (
		<div className="App">
			<div className="bodyContainer flex col">
				<ButtonBar2 />

				<h2>RECENT EVENTS</h2>
				<div className="topDiv flex row">
					{lastEvents.map((event, index) => (
						<div key={index} className={`recentEventCard ev${index + 1}`}>
							<h2>{event}</h2>
						</div>
					))}
				</div>

				<h2>ALL EVENTS</h2>
				<div className="bottomDiv flex col">
					<div className="eventTable">
						<div>Search bars</div>
						<br></br>
						<div className="eventRow">Event</div>
						<div className="eventRow">Event</div>
						<div className="eventRow">Event</div>
						<div className="eventRow">Event</div>
						<div className="eventRow">Event</div>
						<div className="eventRow">Event</div>
						<div className="eventRow">Event</div>
						<div className="eventRow">Event</div>
						<div className="eventRow">Event</div>
						<div className="eventRow">Event</div>
						<div className="eventRow">Event</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DashBoard
