import React from "react"
import { DataGrid } from "@mui/x-data-grid"
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
		"Event 5",
		"Event 6",
		"Event 7",
		"Event 8",
		"Event 9",
		"Event 10",
		"Event 11",
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

	const columns = [
		{
			field: "id",
			headerName: "ID",
			headerClassName: "themeHeader",
			// width: 50,
			renderCell: (params) => (
				<div className="tableAvatar flex aic jcc">{params.value}</div>
			),
		},

		{
			field: "event",
			headerName: "EVENT",
			headerClassName: "themeHeader",
			width: 350,
			editable: true,
		},
		{
			field: "team",
			headerName: "TEAM",
			headerClassName: "themeHeader",
			width: 250,
			editable: true,
			renderCell: (params) => (
				<div className="tableMate flex aic jcc">{params.value}</div>
			),
		},
		{
			field: "role",
			headerName: "ROLE",
			headerClassName: "themeHeader",
			width: 150,
			editable: true,
		},
		{
			field: "actions",
			headerName: "ACTIONS",
			headerClassName: "themeHeader",
			width: 150,
			editable: true,
			renderCell: (params) => <div>{params.value}</div>,
		},
	]

	const rows = [
		{
			id: 1,
			event: "Printemps des fameuses",
			team: "JD",
			role: "Owner",
			actions: "...",
		},
		{
			id: 2,
			event: "Nantes Digital Week",
			team: "JD",
			role: "Owner",
			actions: "...",
		},
		{
			id: 3,
			event: "WEB2DAY",
			team: ["R", "W"],
			role: "Guest",
			actions: "...",
		},
		{ id: 4, event: "DevFest", team: "A", role: "Owner" },
		{ id: 5, event: "Event5", team: "B", role: "Guest" },
		{ id: 6, event: "Event6", team: null, role: "Owner" },
		{ id: 7, event: "Event7", team: "D", role: "Guest" },
		{ id: 8, event: "Event8", team: "E", role: "Guest" },
		{ id: 9, event: "Event9", team: "F", role: "Guest" },
		{ id: 10, event: "Event9", team: "G", role: "Guest" },
		{ id: 11, event: "Event9", team: "H", role: "Guest" },
	]

	return (
		<div className="App">
			<div className="bodyContainer flex col">
				<div className="buttonBarSingle flex">
					<ButtonBarSingle
						btnIcon="Plus"
						btnText="Add event"
						handleClick={() => console.log("Add event")}
					/>
				</div>

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
					<div className="eventTable ">
						<div className="eventSearch flex jcsb">
							<div className="flex aic">
								<div>Show</div>
								<select name="eventNumber" id="eventNumber">
									<option value={5}>5</option>
									<option value={10}>10</option>
									<option value={20}>20</option>
								</select>
							</div>
							<div className="flex aic">
								<div>Search</div>
								<input
									type="text"
									placeholder="Search"
									onChange={(e) => console.log("search:", e.target.value)}
								/>
								<select name="eventNumber" id="eventNumber">
									<option value={5}>5</option>
									<option value={10}>10</option>
									<option value={20}>20</option>
								</select>
							</div>
						</div>
						<br></br>
						{/* <div>Title</div> */}
						{/* <div>
							{lastEvents.map((event, index) => (
								<div key={index} className="eventRow">
									<div>{event}</div>
								</div>
							))}
						</div> */}

						<DataGrid
							rows={rows}
							columns={columns}
							pageSize={10}
							// rowsPerPageOptions={[5, 10, 20]}
							disableSelectionOnClick
							autoHeight={true}
							sx={{
								color: "white",
								justifyContent: "center",
								"& .themeHeader": {
									backgroundColor: "var(--dark-grey-color)",
								},
								"& .MuiDataGrid-columnHeader": {
									color: "white",
									justifyContent: "center",
								},
								"& .MuiDataGrid-footerContainer": {
									backgroundColor: "green",
									justifyContent: "space-between",
								},
								"& .MuiToolbar-root": {
									color: "yellow",
								},
								"& .MuiSvgIcon-root": {
									color: "white",
								},
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DashBoard
