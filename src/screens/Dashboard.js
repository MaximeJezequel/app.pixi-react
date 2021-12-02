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
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "firstName",
			headerName: "First name",
			width: 150,
			editable: true,
		},
		{
			field: "lastName",
			headerName: "Last name",
			width: 150,
			editable: true,
		},
		{
			field: "age",
			headerName: "Age",
			type: "number",
			width: 110,
			editable: true,
		},
		{
			field: "fullName",
			headerName: "Full name",
			description: "This column has a value getter and is not sortable.",
			sortable: false,
			width: 160,
			valueGetter: (params) =>
				`${params.getValue(params.id, "firstName") || ""} ${
					params.getValue(params.id, "lastName") || ""
				}`,
		},
	]

	const rows = [
		{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
		{ id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
		{ id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
		{ id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
		{ id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
		{ id: 6, lastName: "Melisandre", firstName: null, age: 150 },
		{ id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
		{ id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
		{ id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
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
					<div className="eventTable">
						<div className="flex aic">Search bars</div>
						<br></br>
						{/* {lastEvents.map((event, index) => (
							<div key={index} className="eventRow">
								<h3>{event}</h3>
							</div>
						))} */}

						<DataGrid
							rows={rows}
							columns={columns}
							pageSize={10}
							rowsPerPageOptions={[5, 10, 20]}
							disableSelectionOnClick
							autoHeight={true}
							sx={{
								root: {
									width: "640px",
									heigh: "40vh",
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
