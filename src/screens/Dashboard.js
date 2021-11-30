import React from "react"

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import AliceCarousel from "react-alice-carousel"

import ButtonBarSingle from "../components/ButtonBarSingle"

import "../App.css"
import "./DashBoard.css"
import "react-alice-carousel/lib/alice-carousel.css"

const DashBoard = () => {
	let maxEvents = 4
	let showEntries = 3

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

	function createData(avatar, event, date, team, role, actions) {
		return { avatar, event, date, team, role, actions }
	}

	const rows = [
		createData(
			"bulle",
			"Printemps des fameuses",
			"2021/10/12",
			[("William", "John", "Mike", "Claire")],
			"Owner",
			"..."
		),
		createData(
			"bulle",
			"Nantes Digital Week",
			"2021/10/23",
			[("William", "John")],
			"Owner",
			"..."
		),
		createData(
			"bulle",
			"WEB2DAY",
			"2021/10/26",
			["William", "John"],
			"Owner",
			"..."
		),
		createData(
			"bulle",
			"DevFest",
			"2021/10/30",
			["John", "William"],
			"Guest",
			"..."
		),
	]

	const tableCell = {
		color: "white",
		borderBottom: "1px solid gray",
	}

	return (
		<div className="App">
			<div className="bodyContainer flex col">
				<ButtonBarSingle btnIcon="Plus" btnText="Add event" />

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
						<div className="flex aic">Search bars</div>
						<br></br>
						{/* {lastEvents.map((event, index) => (
							<div key={index} className="eventRow">
								<h3>{event}</h3>
							</div>
						))} */}

						<TableContainer component={Paper}>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell
											className="dashTableHead"
											sx={tableCell}
										></TableCell>
										<TableCell
											className="dashTableHead"
											sx={tableCell}
											align="left"
										>
											EVENT
										</TableCell>
										<TableCell
											className="dashTableHead"
											sx={tableCell}
											align="left"
										>
											DATE
										</TableCell>
										<TableCell
											className="dashTableHead"
											sx={tableCell}
											align="left"
										>
											TEAM
										</TableCell>
										<TableCell
											className="dashTableHead"
											sx={tableCell}
											align="left"
										>
											ROLE
										</TableCell>
										<TableCell
											className="dashTableHead"
											sx={tableCell}
											align="center"
										>
											ACTIONS
										</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{rows.map((row) => (
										<TableRow key={row.event} className="dashTableBody">
											<TableCell
												component="th"
												scope="row"
												sx={{ color: "white", width: "32px" }}
											>
												{row.avatar}
											</TableCell>
											<TableCell
												className="dashTableCell"
												sx={tableCell}
												align="left"
											>
												{row.event}
											</TableCell>
											<TableCell
												className="dashTableCell"
												sx={tableCell}
												align="left"
											>
												{row.date}
											</TableCell>
											<TableCell
												className="dashTableCell"
												sx={tableCell}
												align="left"
											>
												{row.team}
											</TableCell>
											<TableCell
												className="dashTableCell"
												sx={tableCell}
												align="left"
											>
												{row.role}
											</TableCell>
											<TableCell
												className="dashTableCell"
												align="center"
												sx={{
													color: "white",
													width: "100px",
													"&:hover": { cursor: "pointer" },
												}}
											>
												{row.actions}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DashBoard
